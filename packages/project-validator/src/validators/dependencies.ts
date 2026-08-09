import { basename, join } from "node:path";

import { readJson, relativePath, walkFiles } from "../core/files.ts";
import { finding, result } from "../core/result.ts";
import type { Finding, ValidationContext, ValidationResult } from "../core/types.ts";

type PackageManifest = Record<"dependencies" | "devDependencies" | "peerDependencies" | "optionalDependencies", Record<string, string>> & { name?: string };

const patternMatches = (pattern: string, value: string): boolean => {
  const escaped = pattern.replace(/[.+?^${}()|[\]\\]/g, "\\$&").replace(/\*/g, ".*");
  return new RegExp(`^${escaped}$`).test(value);
};

const exactVersion = /^(?:\d+\.\d+\.\d+(?:-[0-9A-Za-z.-]+)?|workspace:\*)$/;

export const validateDependencies = async (context: ValidationContext): Promise<ValidationResult> => {
  const startedAt = Date.now();
  const findings: Finding[] = [];
  const root = context.repositoryRoot;
  const manifests = walkFiles(root, context.config.validationExclusions).filter((path) => basename(path) === "package.json");
  let declarations = 0;

  for (const path of manifests) {
    let manifest: Partial<PackageManifest>;
    try {
      manifest = readJson<Partial<PackageManifest>>(path);
    } catch (error) {
      findings.push(finding({ severity: "BLOCKING", code: "DEP-MANIFEST-INVALID", message: `Invalid package.json: ${error instanceof Error ? error.message : String(error)}`, file: relativePath(root, path) }));
      continue;
    }

    for (const section of ["dependencies", "devDependencies", "peerDependencies", "optionalDependencies"] as const) {
      for (const [name, version] of Object.entries(manifest[section] ?? {})) {
        declarations += 1;
        const prohibited = context.config.prohibitedDependencies.find((pattern) => patternMatches(pattern, name));
        const exception = context.config.allowedExceptions.find((item) => patternMatches(item.dependency, name));
        if (prohibited && !exception) findings.push(finding({ severity: "BLOCKING", code: "DEP-PROHIBITED", message: `Prohibited direct dependency ${name} declared in ${section}.`, file: relativePath(root, path), suggestedAction: "Use the locked project technology or obtain an approved TECH-ADR." }));
        if (exception && !/^TECH-ADR-\d{3}$/.test(exception.adr)) findings.push(finding({ severity: "BLOCKING", code: "DEP-ANONYMOUS-EXCEPTION", message: `Dependency exception for ${name} lacks a valid TECH-ADR reference.`, file: "validation.config.ts" }));
        if (!exactVersion.test(version)) findings.push(finding({ severity: "BLOCKING", code: "DEP-UNPINNED", message: `Dependency ${name}@${version} is not exact.`, file: relativePath(root, path) }));
      }
    }
  }

  const lock = join(root, "pnpm-lock.yaml");
  if (!walkFiles(root, context.config.validationExclusions).includes(lock)) findings.push(finding({ severity: "BLOCKING", code: "DEP-LOCK-MISSING", message: "The single root pnpm-lock.yaml is missing.", file: "pnpm-lock.yaml" }));
  return result("DEP-001", `Validated ${declarations} direct dependency declarations across ${manifests.length} active manifests.`, findings, startedAt, { manifests: manifests.length, declarations });
};
