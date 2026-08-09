import { existsSync } from "node:fs";
import { join } from "node:path";

import { readText } from "../core/files.ts";
import { finding, result } from "../core/result.ts";
import type { Finding, ValidationContext, ValidationResult } from "../core/types.ts";

export const validateGovernance = async (context: ValidationContext): Promise<ValidationResult> => {
  const startedAt = Date.now();
  const findings: Finding[] = [];
  const root = context.repositoryRoot;
  for (const path of context.config.requiredGovernanceFiles) {
    if (!existsSync(join(root, path))) findings.push(finding({ severity: "BLOCKING", code: "GOV-REQUIRED-MISSING", message: `Required governance file missing: ${path}`, file: path }));
  }

  const rootAgents = existsSync(join(root, "AGENTS.md")) ? readText(join(root, "AGENTS.md")) : "";
  for (const expected of ["TECH_STACK_LOCK.md", "ARCHITECTURE_RULES.md", "DEPENDENCY_RULES.md", "VALIDATION_GOVERNANCE.md", "validate_changed_scope", "pnpm validate:changed"]) {
    if (!rootAgents.includes(expected)) findings.push(finding({ severity: "BLOCKING", code: "GOV-AGENT-ROUTING", message: `Root AGENTS.md does not route to ${expected}.`, file: "AGENTS.md" }));
  }

  for (const app of ["apps/api/AGENTS.md", "apps/web/AGENTS.md"]) {
    const source = existsSync(join(root, app)) ? readText(join(root, app)) : "";
    if (!source.includes("TECH_STACK_LOCK.md") || !source.includes("ARCHITECTURE_RULES.md")) findings.push(finding({ severity: "BLOCKING", code: "GOV-APP-ROUTING", message: `${app} must reference canonical technical governance.`, file: app }));
  }

  const adapters = [".codex/README.md", "CLAUDE.md", ".cursor/rules/project-governance.mdc", ".github/copilot-instructions.md"];
  for (const adapter of adapters) {
    if (!existsSync(join(root, adapter))) findings.push(finding({ severity: "BLOCKING", code: "GOV-ADAPTER-MISSING", message: `AI adapter missing: ${adapter}`, file: adapter }));
  }
  return result("GOV-001", "Governance entry points and AI/app routing verified.", findings, startedAt, { adapters: adapters.length });
};
