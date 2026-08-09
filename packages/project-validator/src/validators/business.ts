import { existsSync } from "node:fs";
import { dirname, join, resolve } from "node:path";

import { lineOf, readText, relativePath, walkFiles } from "../core/files.ts";
import { finding, result } from "../core/result.ts";
import type { Finding, ValidationContext, ValidationResult } from "../core/types.ts";

type RuleIndexEntry = { id: string; target: string; line: number };

const parseRuleIndex = (path: string): RuleIndexEntry[] => {
  const source = readText(path);
  const pattern = /^- \[(BR-[A-Z]+-[0-9]{3})\]\(([^)#]+)(?:#[^)]+)?\)/gm;
  const entries: RuleIndexEntry[] = [];
  let match: RegExpExecArray | null;
  while ((match = pattern.exec(source))) entries.push({ id: match[1] ?? "", target: match[2] ?? "", line: lineOf(source, match.index) });
  return entries;
};

const isBaselineDecision = (id: string, context: ValidationContext): boolean =>
  context.config.decisionBaseline.some((range) => {
    const match = new RegExp(`^${range.prefix.replace(/-/g, "\\-")}-(\\d{3})$`).exec(id);
    if (!match) return false;
    const value = Number(match[1]);
    return value >= range.minimum && value <= range.maximum;
  });

export const validateBusiness = async (context: ValidationContext): Promise<ValidationResult> => {
  const startedAt = Date.now();
  const findings: Finding[] = [];
  const root = context.repositoryRoot;
  const indexPath = join(root, "docs/00_GOVERNANCE/BUSINESS_RULE_INDEX.md");
  const decisionPath = join(root, "docs/15_CHANGE_MANAGEMENT/DECISION_LOG.md");

  if (!existsSync(indexPath) || !existsSync(decisionPath)) {
    return result("BUS-001", "Canonical Business indexes are unavailable.", [finding({ severity: "BLOCKING", code: "BUS-CANONICAL-MISSING", message: "Business Rule Index or Decision Log is missing." })], startedAt);
  }

  const indexEntries = parseRuleIndex(indexPath);
  const indexCounts = new Map<string, number>();
  for (const entry of indexEntries) indexCounts.set(entry.id, (indexCounts.get(entry.id) ?? 0) + 1);
  for (const [id, count] of indexCounts) {
    if (count > 1) findings.push(finding({ severity: "BLOCKING", code: "BUS-RULE-INDEX-DUPLICATE", message: `Rule ${id} appears ${count} times as an index definition.`, file: relativePath(root, indexPath), ruleId: id }));
  }

  const definitionCounts = new Map<string, { count: number; files: string[] }>();
  for (const businessPath of context.config.canonicalBusinessPaths) {
    const canonicalPath = join(root, businessPath);
    if (!existsSync(canonicalPath)) findings.push(finding({ severity: "BLOCKING", code: "BUS-CANONICAL-LAYER-MISSING", message: `Required canonical Business layer is missing: ${businessPath}`, file: businessPath }));
    for (const file of walkFiles(canonicalPath, context.config.validationExclusions).filter((path) => path.endsWith(".md"))) {
      const source = readText(file);
      for (const match of source.matchAll(/^#{1,6}\s+(BR-[A-Z]+-[0-9]{3})\s*$/gm)) {
        const id = match[1] ?? "";
        const current = definitionCounts.get(id) ?? { count: 0, files: [] };
        current.count += 1;
        current.files.push(relativePath(root, file));
        definitionCounts.set(id, current);
      }
    }
  }

  for (const [id, definition] of definitionCounts) {
    if (definition.count > 1) findings.push(finding({ severity: "BLOCKING", code: "BUS-RULE-DEFINITION-DUPLICATE", message: `Rule ${id} has ${definition.count} canonical definitions.`, file: definition.files.join(", "), ruleId: id }));
  }

  for (const entry of indexEntries) {
    const target = resolve(dirname(indexPath), entry.target);
    if (!existsSync(target)) {
      findings.push(finding({ severity: "BLOCKING", code: "BUS-RULE-TARGET-MISSING", message: `Rule ${entry.id} points to a missing canonical file.`, file: relativePath(root, indexPath), line: entry.line, ruleId: entry.id }));
      continue;
    }
    if ((definitionCounts.get(entry.id)?.count ?? 0) !== 1) {
      findings.push(finding({ severity: "BLOCKING", code: "BUS-RULE-DEFINITION-COUNT", message: `Rule ${entry.id} must have exactly one active canonical definition.`, file: relativePath(root, target), ruleId: entry.id }));
    }
  }

  if (indexCounts.size !== context.config.expectedBusinessRuleCount || definitionCounts.size !== context.config.expectedBusinessRuleCount) {
    findings.push(finding({ severity: "BLOCKING", code: "BUS-RULE-BASELINE", message: `Business Rule baseline mismatch: index=${indexCounts.size}, definitions=${definitionCounts.size}, expected=${context.config.expectedBusinessRuleCount}.`, suggestedAction: "Do not rewrite Business content to pass; resolve the canonical discrepancy through Business governance." }));
  }

  const decisionSource = readText(decisionPath).split("## Unverified Legacy Decision Claims")[0] ?? "";
  let approved = 0;
  let open = 0;
  let superseded = 0;
  for (const line of decisionSource.split("\n")) {
    if (!line.startsWith("|")) continue;
    const columns = line.split("|").slice(1, -1).map((value) => value.trim());
    const id = columns[0] ?? "";
    const status = columns.at(-1) ?? "";
    if (isBaselineDecision(id, context) && status === "APPROVED") approved += 1;
    if (/^(?:BD|NBCG-DEC)-\d{3}$/.test(id) && status === "OPEN") open += 1;
    if (/^(?:BD|NBCG-DEC)-\d{3}$/.test(id) && status === "SUPERSEDED") superseded += 1;
  }
  if (approved !== context.config.expectedApprovedDecisionCount) findings.push(finding({ severity: "BLOCKING", code: "BUS-DECISION-BASELINE", message: `Approved Business Decision baseline mismatch: ${approved}, expected ${context.config.expectedApprovedDecisionCount}.`, file: relativePath(root, decisionPath) }));
  if (open !== context.config.expectedOpenDecisionCount) findings.push(finding({ severity: "BLOCKING", code: "BUS-OPEN-DECISIONS", message: `Open Business Decision count mismatch: ${open}, expected ${context.config.expectedOpenDecisionCount}.`, file: relativePath(root, decisionPath) }));

  const navigationSources = context.config.documentationIndexLocations.map((path) => join(root, path)).filter(existsSync);
  for (const path of navigationSources) {
    const source = readText(path);
    const contaminated = [...source.matchAll(/\]\(([^)]+)\)/g)].some((match) => /(?:^|\/)(?:ARCHIVE|99_LEGACY)(?:\/|$)/i.test(match[1] ?? ""));
    if (contaminated) findings.push(finding({ severity: "BLOCKING", code: "BUS-ARCHIVE-CONTAMINATION", message: "Active Business index links to Archive/Legacy as current navigation.", file: relativePath(root, path) }));
  }

  findings.push(finding({ severity: "INFO", code: "BUS-SEMANTIC-REVIEW", message: "MANUAL/AI REVIEW REQUIRED — deterministic validation cannot prove all Business semantic contradictions are absent.", blocking: false }));
  return result("BUS-001", `Business baseline: ${definitionCounts.size} Rules, ${approved} approved Decisions, ${open} open Decisions.`, findings, startedAt, { rules: definitionCounts.size, approvedDecisions: approved, openDecisions: open, supersededDecisions: superseded, duplicateRules: [...definitionCounts.values()].filter((item) => item.count > 1).length });
};
