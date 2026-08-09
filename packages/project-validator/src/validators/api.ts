import { existsSync } from "node:fs";
import { basename, join } from "node:path";

import { readText, relativePath, walkFiles } from "../core/files.ts";
import { finding, result, skipped } from "../core/result.ts";
import type { Finding, ValidationContext, ValidationResult } from "../core/types.ts";

export const validateApi = async (context: ValidationContext): Promise<ValidationResult> => {
  const startedAt = Date.now();
  const root = context.repositoryRoot;
  const apiRoot = join(root, "apps/api");
  if (!existsSync(join(apiRoot, "package.json"))) return skipped("API-001", "SKIPPED — API IMPLEMENTATION NOT INITIALIZED", startedAt);
  const findings: Finding[] = [];
  const sourceFiles = walkFiles(join(apiRoot, "src"), context.config.validationExclusions).filter((path) => /\.tsx?$/.test(path));
  const controllers = sourceFiles.filter((path) => basename(path).endsWith(".controller.ts"));
  for (const file of controllers) {
    const local = relativePath(root, file);
    const source = readText(file);
    if (!/\/presentation\/http\/controllers\//.test(`/${local}`)) findings.push(finding({ severity: "BLOCKING", code: "API-CONTROLLER-LOCATION", message: "Nest controller is outside presentation/http/controllers.", file: local }));
    if (/from\s+["']@prisma\/client["']/.test(source)) findings.push(finding({ severity: "BLOCKING", code: "API-PRISMA-RESPONSE-RISK", message: "Controller imports Prisma directly.", file: local }));
    if (/@(?:Post|Put|Patch|Delete)\s*\(/.test(source) && !/(?:Dto|@Body\s*\()/.test(source)) findings.push(finding({ severity: "WARNING", code: "API-DTO-REVIEW", message: "Write endpoint may lack an explicit DTO/server validation boundary.", file: local, blocking: false }));
    if (/@(?:Post|Put|Patch|Delete)\s*\(/.test(source) && !/(?:UseGuards|Public|Authorization|Permission)/.test(source)) findings.push(finding({ severity: "WARNING", code: "API-AUTHORIZATION-REVIEW", message: "Protected-action authorization infrastructure requires review.", file: local, blocking: false }));
  }
  const mainPath = join(apiRoot, "src/main.ts");
  if (existsSync(mainPath) && !/(?:enableVersioning|setGlobalPrefix\s*\(\s*["']api\/v1)/.test(readText(mainPath))) findings.push(finding({ severity: "WARNING", code: "API-VERSION-REVIEW", message: "One /api/v1 version strategy is not detectable in main.ts.", file: "apps/api/src/main.ts", blocking: false }));
  if (!sourceFiles.some((file) => /SwaggerModule|OpenAPI/.test(readText(file)))) findings.push(finding({ severity: "WARNING", code: "API-OPENAPI-READINESS", message: "OpenAPI generation readiness is not detectable.", blocking: false }));
  if (!sourceFiles.some((file) => /error.*(?:filter|envelope)|exception.*filter/i.test(relativePath(root, file)))) findings.push(finding({ severity: "WARNING", code: "API-ERROR-INFRASTRUCTURE", message: "Consistent API error-envelope infrastructure is not detectable.", blocking: false }));
  return result("API-001", `API validation checked ${controllers.length} controller(s).`, findings, startedAt, { controllers: controllers.length });
};
