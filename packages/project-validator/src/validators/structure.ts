import { existsSync, readdirSync, statSync } from "node:fs";
import { basename, join } from "node:path";

import { readJson, relativePath, walkFiles } from "../core/files.ts";
import { finding, result } from "../core/result.ts";
import type { Finding, ValidationContext, ValidationResult } from "../core/types.ts";

const forbiddenControlFiles = new Set(["package-lock.json", "npm-shrinkwrap.json", "yarn.lock", "bun.lock", "bun.lockb", "nx.json", "lerna.json"]);
const suspiciousRootNames = /^(?:backend2|src-new|temp-project|final2|old-api)$/i;

export const validateRepositoryStructure = async (context: ValidationContext): Promise<ValidationResult> => {
  const startedAt = Date.now();
  const findings: Finding[] = [];
  const root = context.repositoryRoot;
  const approvedDirectories = new Set(context.config.approvedRootDirectories);
  const approvedFiles = new Set(context.config.approvedRootFiles);

  for (const entry of readdirSync(root, { withFileTypes: true })) {
    if (entry.isDirectory() && !approvedDirectories.has(entry.name)) {
      findings.push(finding({ severity: "BLOCKING", code: "STRUCTURE-DRIFT", message: `Unauthorized top-level directory: ${entry.name}`, file: entry.name, suggestedAction: "Move content to an approved owner or approve the structure through a Technical ADR." }));
    }
    if (entry.isDirectory() && suspiciousRootNames.test(entry.name)) {
      findings.push(finding({ severity: "BLOCKING", code: "STRUCTURE-SUSPICIOUS-NAME", message: `Suspicious drift directory: ${entry.name}`, file: entry.name }));
    }
    if (entry.isFile() && !approvedFiles.has(entry.name)) {
      findings.push(finding({ severity: "BLOCKING", code: "STRUCTURE-ROOT-FILE", message: `Unauthorized top-level file: ${entry.name}`, file: entry.name }));
    }
  }

  const files = walkFiles(root, context.config.validationExclusions);
  for (const file of files) {
    if (forbiddenControlFiles.has(basename(file))) findings.push(finding({ severity: "BLOCKING", code: "PACKAGE-MANAGER-DRIFT", message: `Prohibited package manager/orchestrator file: ${relativePath(root, file)}`, file: relativePath(root, file) }));
  }

  const locks = files.filter((file) => basename(file) === "pnpm-lock.yaml");
  if (locks.length !== 1 || relativePath(root, locks[0] ?? "") !== "pnpm-lock.yaml") {
    findings.push(finding({ severity: "BLOCKING", code: "PACKAGE-MANAGER-DRIFT", message: `Expected one root pnpm-lock.yaml; found ${locks.length}.` }));
  }
  for (const required of ["pnpm-workspace.yaml", "package.json", "turbo.json", "validation.config.ts"]) {
    if (!existsSync(join(root, required))) findings.push(finding({ severity: "BLOCKING", code: "STRUCTURE-CONTROL-MISSING", message: `Required root control file missing: ${required}`, file: required }));
  }

  const packageJson = existsSync(join(root, "package.json")) ? readJson<{ packageManager?: string }>(join(root, "package.json")) : {};
  if (!packageJson.packageManager?.startsWith(`${context.config.approvedPackageManager}@`)) findings.push(finding({ severity: "BLOCKING", code: "PACKAGE-MANAGER-DRIFT", message: `Root packageManager must pin ${context.config.approvedPackageManager}.`, file: "package.json" }));

  for (const expected of ["packages/project-validator", "tools/validation-mcp", "scripts", "infrastructure", "tests/e2e"]) {
    const path = join(root, expected);
    if (!existsSync(path) || !statSync(path).isDirectory()) findings.push(finding({ severity: "BLOCKING", code: "STRUCTURE-EXPECTED-MISSING", message: `Expected repository area is missing: ${expected}`, file: expected }));
  }

  return result("STRUCT-001", findings.length === 0 ? "Repository structure and package-manager layout are locked." : "STRUCTURE DRIFT detected.", findings, startedAt, { files: files.length, lockfiles: locks.length });
};
