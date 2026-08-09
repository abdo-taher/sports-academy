import { existsSync, readdirSync } from "node:fs";
import { join } from "node:path";

import { readText, relativePath, walkFiles } from "../core/files.ts";
import { finding, result, skipped } from "../core/result.ts";
import { callLines, importsOf, parseTypeScript } from "../core/typescript-ast.ts";
import type { Finding, ValidationContext, ValidationResult } from "../core/types.ts";

const requiredDirectories = ["app", "features", "components/ui", "components/shared", "components/business", "hooks", "lib", "providers", "styles", "types", "config", "tests", "public"];

const wildcardPathMatch = (pattern: string, path: string): boolean => {
  const expression = pattern.replace(/[.+?^${}()|[\]\\]/g, "\\$&").replace(/\*/g, "[^/]+");
  return new RegExp(`^${expression}`).test(path);
};

export const validateFrontendArchitecture = async (context: ValidationContext): Promise<ValidationResult> => {
  const startedAt = Date.now();
  const root = context.repositoryRoot;
  const webRoot = join(root, "apps/web");
  if (!existsSync(join(webRoot, "package.json"))) return skipped("WEB-001", "SKIPPED — FRONTEND IMPLEMENTATION NOT INITIALIZED", startedAt);
  const findings: Finding[] = [];

  for (const directory of requiredDirectories) {
    if (!existsSync(join(webRoot, directory))) findings.push(finding({ severity: "BLOCKING", code: "WEB-STRUCTURE-MISSING", message: `Initialized Frontend is missing ${directory}/.`, file: `apps/web/${directory}` }));
  }
  if (existsSync(join(webRoot, "pages"))) findings.push(finding({ severity: "BLOCKING", code: "WEB-PAGES-ROUTER", message: "Pages Router is prohibited for new Frontend work.", file: "apps/web/pages" }));

  const featuresRoot = join(webRoot, "features");
  if (existsSync(featuresRoot)) {
    for (const feature of readdirSync(featuresRoot, { withFileTypes: true }).filter((entry) => entry.isDirectory())) {
      const allowed = new Set(["api", "components", "hooks", "schemas", "types", "utils"]);
      for (const child of readdirSync(join(featuresRoot, feature.name), { withFileTypes: true })) {
        if (child.isDirectory() && !allowed.has(child.name)) findings.push(finding({ severity: "BLOCKING", code: "WEB-FEATURE-STRUCTURE", message: `Feature ${feature.name} has an unapproved directory: ${child.name}`, file: `apps/web/features/${feature.name}/${child.name}` }));
      }
    }
  }

  const sourceFiles = walkFiles(webRoot, context.config.validationExclusions).filter((path) => /\.tsx?$/.test(path));
  for (const file of sourceFiles) {
    const local = relativePath(root, file);
    const source = readText(file);
    const ast = parseTypeScript(file, source);
    for (const imported of importsOf(ast)) {
      if (imported.specifier === "@prisma/client" || /apps\/api|modules\/[^/]+\/domain/.test(imported.specifier)) findings.push(finding({ severity: "BLOCKING", code: "WEB-BACKEND-IMPORT", message: `Frontend imports Backend/Prisma implementation: ${imported.specifier}`, file: local, line: imported.line }));
      const featureMatch = /apps\/web\/features\/([^/]+)/.exec(local);
      const importedFeature = /features\/([^/]+)\/(?!index)/.exec(imported.specifier);
      if (featureMatch && importedFeature && featureMatch[1] !== importedFeature[1]) findings.push(finding({ severity: "BLOCKING", code: "WEB-FEATURE-BOUNDARY", message: `Feature imports another feature's internals: ${imported.specifier}`, file: local, line: imported.line }));
    }

    const fetchAllowed = context.config.allowedRawFetchPaths.some((pattern) => wildcardPathMatch(pattern, local));
    if (!fetchAllowed && (/\/components\//.test(`/${local}`) || /\/features\/[^/]+\/components\//.test(`/${local}`))) {
      for (const line of callLines(ast, "fetch")) findings.push(finding({ severity: "BLOCKING", code: "WEB-RAW-FETCH", message: "Raw fetch in a UI component bypasses the approved API client/feature API/TanStack Query flow.", file: local, line }));
    }
    if (/\.tsx$/.test(local) && /<form[\s>]/.test(source) && !/useForm\s*\(/.test(source)) findings.push(finding({ severity: "WARNING", code: "WEB-FORM-REVIEW", message: "Significant form may not use React Hook Form/Zod; review required.", file: local, blocking: false }));
  }
  return result("WEB-001", `Frontend architecture checked ${sourceFiles.length} TypeScript source files.`, findings, startedAt, { sourceFiles: sourceFiles.length });
};
