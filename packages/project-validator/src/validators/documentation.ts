import { existsSync, statSync } from "node:fs";
import { join } from "node:path";

import { lineOf, readText, relativePath, resolveMarkdownTarget, walkFiles } from "../core/files.ts";
import { finding, result } from "../core/result.ts";
import type { Finding, ValidationContext, ValidationResult } from "../core/types.ts";

export const validateDocumentation = async (context: ValidationContext): Promise<ValidationResult> => {
  const startedAt = Date.now();
  const findings: Finding[] = [];
  const root = context.repositoryRoot;
  const docsRoot = join(root, context.config.activeDocumentationRoot);
  const markdownFiles = walkFiles(docsRoot, context.config.validationExclusions).filter((path) => path.endsWith(".md"));
  const linkPattern = /\[[^\]]*\]\(([^)]+)\)/g;
  const archivePath = /(?:^|\/)(?:ARCHIVE|99_LEGACY)(?:\/|$)/i;
  let linksChecked = 0;

  for (const required of context.config.requiredGovernanceFiles) {
    if (!existsSync(join(root, required))) {
      findings.push(finding({ severity: "BLOCKING", code: "DOC-REQUIRED-MISSING", message: `Required governance entry point is missing: ${required}`, file: required, suggestedAction: "Restore the documented canonical file or configure an approved equivalent." }));
    }
  }

  for (const file of markdownFiles) {
    const source = readText(file);
    let match: RegExpExecArray | null;
    while ((match = linkPattern.exec(source))) {
      const rawTarget = match[1] ?? "";
      if (archivePath.test(rawTarget)) {
        findings.push(finding({ severity: "BLOCKING", code: "DOC-ARCHIVE-LINK", message: "Active documentation links to Archive/Legacy authority.", file: relativePath(root, file), line: lineOf(source, match.index), suggestedAction: "Route active navigation to canonical ACTIVE documentation." }));
      }
      if (/CLEAN_ACTIVE_WORKSPACE|Academy_Platform_Documentation\//.test(rawTarget)) {
        findings.push(finding({ severity: "BLOCKING", code: "DOC-STALE-ROOT", message: "Stale pre-migration root used by active navigation.", file: relativePath(root, file), line: lineOf(source, match.index), suggestedAction: "Use paths relative to the ACTIVE sports-academy-platform root." }));
      }
      const target = resolveMarkdownTarget(file, rawTarget);
      if (!target) continue;
      linksChecked += 1;
      if (!existsSync(target)) {
        findings.push(finding({ severity: "BLOCKING", code: "DOC-BROKEN-LINK", message: `Broken Markdown link: ${rawTarget}`, file: relativePath(root, file), line: lineOf(source, match.index), suggestedAction: "Correct the link or restore the referenced active file." }));
      }
    }
  }

  for (const index of context.config.documentationIndexLocations) {
    const path = join(root, index);
    if (!existsSync(path) || !statSync(path).isFile()) {
      findings.push(finding({ severity: "BLOCKING", code: "DOC-INDEX-MISSING", message: `Required documentation index is missing: ${index}`, file: index }));
    }
  }

  findings.push(finding({ severity: "INFO", code: "DOC-SEMANTIC-REVIEW", message: "SEMANTIC REVIEW REQUIRED — deterministic link and index validation cannot prove all Business prose is semantically consistent.", blocking: false }));
  return result("DOC-001", `Documentation validation checked ${markdownFiles.length} active Markdown files and ${linksChecked} local links.`, findings, startedAt, { markdownFiles: markdownFiles.length, linksChecked });
};
