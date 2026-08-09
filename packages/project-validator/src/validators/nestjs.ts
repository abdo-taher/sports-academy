import { existsSync, readdirSync } from "node:fs";
import { basename, join } from "node:path";

import { normalizePath, readText, relativePath, walkFiles } from "../core/files.ts";
import { finding, result, skipped } from "../core/result.ts";
import { callLines, importsOf, parseTypeScript, processEnvLines } from "../core/typescript-ast.ts";
import type { Finding, ValidationContext, ValidationResult } from "../core/types.ts";

const forbiddenDomainImports = ["@prisma/client", "bullmq", "redis", "ioredis", "@nestjs/", "node:http", "node:https"];

export const validateNestjsArchitecture = async (context: ValidationContext): Promise<ValidationResult> => {
  const startedAt = Date.now();
  const root = context.repositoryRoot;
  const apiRoot = join(root, "apps/api");
  if (!existsSync(join(apiRoot, "package.json"))) return skipped("NEST-001", "SKIPPED — API IMPLEMENTATION NOT INITIALIZED", startedAt);
  const findings: Finding[] = [];
  const srcRoot = join(apiRoot, "src");
  const modulesRoot = join(srcRoot, "modules");

  if (!existsSync(modulesRoot)) findings.push(finding({ severity: "BLOCKING", code: "NEST-MODULES-MISSING", message: "Initialized API must use src/modules/.", file: "apps/api/src/modules" }));
  if (existsSync(join(srcRoot, "services"))) findings.push(finding({ severity: "BLOCKING", code: "NEST-RANDOM-SERVICES", message: "Random root src/services directory is prohibited for Business logic.", file: "apps/api/src/services" }));

  if (existsSync(modulesRoot)) {
    for (const entry of readdirSync(modulesRoot, { withFileTypes: true }).filter((item) => item.isDirectory())) {
      const domainRoot = join(modulesRoot, entry.name);
      const allowedAreas = new Set(["domain", "application", "infrastructure", "presentation"]);
      for (const file of walkFiles(domainRoot, context.config.validationExclusions).filter((path) => /\.tsx?$/.test(path))) {
        const local = normalizePath(file.slice(domainRoot.length + 1));
        const first = local.split("/")[0] ?? "";
        if (!local.includes("/") && !["index.ts", `${entry.name}.module.ts`].includes(local)) findings.push(finding({ severity: "BLOCKING", code: "NEST-MODULE-FILE-PLACEMENT", message: `Misplaced module-root file: ${local}`, file: relativePath(root, file) }));
        if (local.includes("/") && !allowedAreas.has(first)) findings.push(finding({ severity: "BLOCKING", code: "NEST-MODULE-AREA", message: `Unapproved module area: ${first}`, file: relativePath(root, file) }));
      }
    }
  }

  const sourceFiles = walkFiles(srcRoot, context.config.validationExclusions).filter((path) => /\.tsx?$/.test(path));
  for (const file of sourceFiles) {
    const local = relativePath(root, file);
    const source = readText(file);
    const ast = parseTypeScript(file, source);
    const imports = importsOf(ast);
    const inDomain = /\/modules\/[^/]+\/domain\//.test(`/${local}`);
    const inApplication = /\/modules\/[^/]+\/application\//.test(`/${local}`);
    const inPresentation = /\/modules\/[^/]+\/presentation\//.test(`/${local}`);
    const isController = basename(file).endsWith(".controller.ts");

    for (const imported of imports) {
      if (inDomain && forbiddenDomainImports.some((prefix) => imported.specifier === prefix || imported.specifier.startsWith(prefix))) findings.push(finding({ severity: "BLOCKING", code: "NEST-DOMAIN-IMPORT", message: `Domain layer imports forbidden technology: ${imported.specifier}`, file: local, line: imported.line }));
      if (inApplication && imported.specifier === "@prisma/client") findings.push(finding({ severity: "BLOCKING", code: "NEST-APPLICATION-PRISMA", message: "Application layer must use repository ports rather than Prisma models.", file: local, line: imported.line }));
      if (inPresentation && imported.specifier === "@prisma/client") findings.push(finding({ severity: "BLOCKING", code: "NEST-PRESENTATION-PRISMA", message: "Presentation layer must not import Prisma directly.", file: local, line: imported.line }));
      if (isController && /prisma|infrastructure\/persistence/i.test(imported.specifier)) findings.push(finding({ severity: "BLOCKING", code: "NEST-CONTROLLER-PERSISTENCE", message: `Controller imports persistence directly: ${imported.specifier}`, file: local, line: imported.line }));
      if (imported.specifier === "@nestjs/microservices") findings.push(finding({ severity: "BLOCKING", code: "NEST-MICROSERVICE-STACK", message: "Nest microservices package requires an approved Architecture ADR.", file: local, line: imported.line }));
      if (/modules\/[^/]+\/infrastructure/.test(imported.specifier) && !imported.specifier.includes(`/modules/${local.split("/")[4] ?? ""}/`)) findings.push(finding({ severity: "WARNING", code: "NEST-CROSS-DOMAIN-INFRASTRUCTURE", message: `Potential cross-domain infrastructure import: ${imported.specifier}`, file: local, line: imported.line, blocking: false }));
    }

    for (const line of processEnvLines(ast)) {
      if (!local.startsWith("apps/api/src/config/")) findings.push(finding({ severity: "BLOCKING", code: "NEST-PROCESS-ENV", message: "Direct process.env access is restricted to the centralized config layer.", file: local, line }));
    }
    for (const line of callLines(ast, "forwardRef")) findings.push(finding({ severity: "WARNING", code: "NEST-FORWARD-REF", message: "forwardRef usage requires architecture review and justification.", file: local, line, blocking: false }));

    if (isController) {
      if (!/\/presentation\/http\/controllers\//.test(`/${local}`)) findings.push(finding({ severity: "BLOCKING", code: "NEST-CONTROLLER-LOCATION", message: "Controller is outside presentation/http/controllers.", file: local }));
      if (source.split("\n").length > 220 || /\b(?:price|amount|balance)\s*[+*/-]/i.test(source)) findings.push(finding({ severity: "WARNING", code: "NEST-POTENTIAL-CONTROLLER-BUSINESS-LOGIC", message: "POTENTIAL CONTROLLER BUSINESS LOGIC — review controller workflow/calculation complexity.", file: local, blocking: false }));
    }
    if (/use-cases\//.test(local) && !basename(file).endsWith(".use-case.ts") && !basename(file).endsWith(".spec.ts")) findings.push(finding({ severity: "BLOCKING", code: "NEST-USE-CASE-NAMING", message: "Use-case files must use the .use-case.ts suffix.", file: local }));
  }

  return result("NEST-001", `NestJS architecture checked ${sourceFiles.length} TypeScript source files.`, findings, startedAt, { sourceFiles: sourceFiles.length });
};
