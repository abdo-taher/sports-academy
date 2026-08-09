import { existsSync } from "node:fs";
import { basename, join } from "node:path";

import { readText, relativePath, walkFiles } from "../core/files.ts";
import { finding, result, skipped } from "../core/result.ts";
import type { Finding, ValidationContext, ValidationResult } from "../core/types.ts";
import { detectChanges } from "../git/change-detector.ts";

export const validateDatabase = async (context: ValidationContext): Promise<ValidationResult> => {
  const startedAt = Date.now();
  const root = context.repositoryRoot;
  const apiRoot = join(root, "apps/api");
  if (!existsSync(join(apiRoot, "package.json"))) return skipped("DB-001", "SKIPPED — DATABASE IMPLEMENTATION NOT INITIALIZED", startedAt);
  const findings: Finding[] = [];
  const prismaRoot = join(apiRoot, "prisma");
  const schemas = walkFiles(prismaRoot, context.config.validationExclusions).filter((path) => path.endsWith(".prisma"));
  if (schemas.length === 0) findings.push(finding({ severity: "BLOCKING", code: "DB-SCHEMA-MISSING", message: "Initialized API has no Prisma schema.", file: "apps/api/prisma" }));
  for (const schema of schemas) {
    if (/provider\s*=\s*"(?!postgresql)[^"]+"/.test(readText(schema))) findings.push(finding({ severity: "BLOCKING", code: "DB-PROVIDER-DRIFT", message: "Prisma datasource provider must be PostgreSQL.", file: relativePath(root, schema) }));
  }

  const sourceFiles = walkFiles(join(apiRoot, "src"), context.config.validationExclusions).filter((path) => /\.tsx?$/.test(path));
  const clients = sourceFiles.filter((path) => /new\s+PrismaClient\s*\(/.test(readText(path)));
  if (clients.length > 1) findings.push(finding({ severity: "BLOCKING", code: "DB-PRISMA-CLIENT-MULTIPLE", message: `Multiple uncontrolled PrismaClient creation sites: ${clients.map((path) => relativePath(root, path)).join(", ")}` }));

  const changes = context.changedFiles ? { available: true, files: context.changedFiles } : detectChanges(root, context.gitMode, context.baseRef);
  if (changes.available) {
    const schemaChanged = changes.files.some((item) => item.path.startsWith("apps/api/prisma/") && item.path.endsWith(".prisma"));
    const migrationAdded = changes.files.some((item) => item.status === "A" && item.path.includes("apps/api/prisma/migrations/"));
    if (schemaChanged && !migrationAdded) findings.push(finding({ severity: "BLOCKING", code: "DB-MIGRATION-MISSING", message: "Prisma schema changed without a new migration." }));
    for (const changed of changes.files.filter((item) => item.path.includes("apps/api/prisma/migrations/") && ["M", "D"].includes(item.status))) findings.push(finding({ severity: "BLOCKING", code: "DB-MIGRATION-HISTORY-MODIFIED", message: "Existing migration history was modified or deleted.", file: changed.path }));
  }

  const webFiles = walkFiles(join(root, "apps/web"), context.config.validationExclusions).filter((path) => /\.tsx?$/.test(path));
  for (const file of webFiles) if (/@prisma\/client|apps\/api\/prisma/.test(readText(file))) findings.push(finding({ severity: "BLOCKING", code: "DB-FRONTEND-EXPOSURE", message: "Frontend references Prisma/database implementation.", file: relativePath(root, file) }));
  return result("DB-001", `Database validation checked ${schemas.length} Prisma schema file(s).`, findings, startedAt, { schemas: schemas.length, prismaClients: clients.length });
};
