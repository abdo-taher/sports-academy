import assert from "node:assert/strict";
import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { tmpdir } from "node:os";
import test from "node:test";

import type { ValidationConfig } from "../src/config/types.ts";
import type { ChangedFile, ValidationContext } from "../src/core/types.ts";
import { validateBusinessGate } from "../src/validators/business-gate.ts";
import { validateBusiness } from "../src/validators/business.ts";
import { validateDependencies } from "../src/validators/dependencies.ts";
import { validateDatabase } from "../src/validators/database.ts";
import { validateDocumentation } from "../src/validators/documentation.ts";
import { validateGovernance } from "../src/validators/governance.ts";
import { validateNestjsArchitecture } from "../src/validators/nestjs.ts";
import { validateChangePropagation } from "../src/validators/propagation.ts";
import { validateRepositoryStructure } from "../src/validators/structure.ts";

const write = (root: string, path: string, value = ""): void => {
  const target = join(root, path);
  mkdirSync(join(target, ".."), { recursive: true });
  writeFileSync(target, value);
};

const config: ValidationConfig = {
  activeDocumentationRoot: "docs",
  archivePaths: ["ARCHIVE", "docs/99_LEGACY"],
  canonicalBusinessPaths: ["docs/01_BUSINESS_FOUNDATION"],
  approvedRootDirectories: [".change", "apps", "ARCHIVE", "docs", "infrastructure", "packages", "scripts", "tests", "tools"],
  approvedRootFiles: ["package.json", "pnpm-lock.yaml", "pnpm-workspace.yaml", "turbo.json", "validation.config.ts"],
  expectedBusinessRuleCount: 1,
  expectedApprovedDecisionCount: 1,
  expectedOpenDecisionCount: 0,
  decisionBaseline: [{ prefix: "BD", minimum: 1, maximum: 1 }],
  approvedPackageManager: "pnpm",
  approvedFrontendTechnologies: [],
  approvedBackendTechnologies: [],
  prohibitedDependencies: ["redux", "typeorm"],
  allowedExceptions: [],
  documentationIndexLocations: ["docs/00_GOVERNANCE/BUSINESS_RULE_INDEX.md", "docs/15_CHANGE_MANAGEMENT/DECISION_LOG.md"],
  requiredGovernanceFiles: [],
  validationExclusions: ["node_modules", ".git", "ARCHIVE", "docs/99_LEGACY"],
  pathOwnership: {
    BUSINESS: ["docs/01_BUSINESS_FOUNDATION/"],
    UX: ["apps/web/"],
    GOVERNANCE: ["docs/15_CHANGE_MANAGEMENT/"],
    TOOLING: ["packages/project-validator/"]
  },
  allowedRawFetchPaths: [],
  changeManifestPath: ".change/current-change.json"
};

const fixture = (): string => {
  const root = mkdtempSync(join(tmpdir(), "sports-academy-validator-"));
  write(root, "package.json", JSON.stringify({ name: "fixture", packageManager: "pnpm@11.0.9" }));
  write(root, "pnpm-lock.yaml", "lockfileVersion: '9.0'\n");
  write(root, "pnpm-workspace.yaml", "packages: []\n");
  write(root, "turbo.json", "{}\n");
  write(root, "validation.config.ts", "export default {};\n");
  write(root, "docs/00_GOVERNANCE/BUSINESS_RULE_INDEX.md", "# Rules\n\n- [BR-TST-001](../01_BUSINESS_FOUNDATION/RULES.md)\n");
  write(root, "docs/01_BUSINESS_FOUNDATION/RULES.md", "# Rules\n\n## BR-TST-001\n\nFixture invariant.\n");
  write(root, "docs/15_CHANGE_MANAGEMENT/DECISION_LOG.md", "# Decisions\n\n| ID | Decision | Status |\n|---|---|---|\n| BD-001 | Fixture | APPROVED |\n\n## Unverified Legacy Decision Claims\n");
  write(root, "docs/15_CHANGE_MANAGEMENT/CHANGE_LOG.md", "# Changes\n");
  for (const directory of ["apps", "infrastructure", "packages/project-validator", "scripts", "tests/e2e", "tools/validation-mcp"]) mkdirSync(join(root, directory), { recursive: true });
  return root;
};

const context = (root: string, changedFiles?: ChangedFile[]): ValidationContext => ({
  repositoryRoot: root,
  config,
  gitMode: "working",
  strict: false,
  changedFiles,
  startedAt: Date.now()
});

const useFixture = (name: string, run: (root: string) => Promise<void>): void => {
  test(name, async () => {
    const root = fixture();
    try { await run(root); } finally { rmSync(root, { recursive: true, force: true }); }
  });
};

useFixture("valid fixture passes deterministic baseline validators", async (root) => {
  for (const validation of [validateDocumentation, validateBusiness, validateDependencies, validateRepositoryStructure]) {
    assert.equal((await validation(context(root))).status, "PASS");
  }
});

useFixture("governance requires NestJS provenance and API agent routing", async (root) => {
  const requiredGovernanceFiles = [
    "docs/00_GOVERNANCE/NESTJS_ENGINEERING_RULES.md",
    "docs/00_GOVERNANCE/NESTJS_UPSTREAM_SOURCE.md",
    "docs/00_GOVERNANCE/NESTJS_RULE_ADOPTION_MATRIX.md"
  ];
  const governanceContext = {
    ...context(root),
    config: { ...config, requiredGovernanceFiles }
  };
  const rootRouting = "TECH_STACK_LOCK.md ARCHITECTURE_RULES.md DEPENDENCY_RULES.md VALIDATION_GOVERNANCE.md validate_changed_scope pnpm validate:changed";

  write(root, "AGENTS.md", rootRouting);
  write(root, "apps/api/AGENTS.md", "TECH_STACK_LOCK.md ARCHITECTURE_RULES.md NESTJS_ENGINEERING_RULES.md");
  write(root, "apps/web/AGENTS.md", "TECH_STACK_LOCK.md ARCHITECTURE_RULES.md");
  for (const adapter of [".codex/README.md", "CLAUDE.md", ".cursor/rules/project-governance.mdc", ".github/copilot-instructions.md"]) write(root, adapter);
  write(root, requiredGovernanceFiles[0] ?? "", "# Local rules\n");
  write(root, requiredGovernanceFiles[1] ?? "", "# Pinned source\n");

  const missingMatrix = await validateGovernance(governanceContext);
  assert.equal(missingMatrix.status, "FAIL");
  assert.ok(missingMatrix.findings.some((item) => item.code === "GOV-REQUIRED-MISSING" && item.file === requiredGovernanceFiles[2]));

  write(root, requiredGovernanceFiles[2] ?? "", "# Adoption matrix\n");
  assert.equal((await validateGovernance(governanceContext)).status, "PASS");

  write(root, "apps/api/AGENTS.md", "TECH_STACK_LOCK.md ARCHITECTURE_RULES.md");
  const missingRoute = await validateGovernance(governanceContext);
  assert.equal(missingRoute.status, "FAIL");
  assert.ok(missingRoute.findings.some((item) => item.code === "GOV-APP-ROUTING" && /NESTJS_ENGINEERING_RULES/.test(item.message)));
});

useFixture("broken Markdown link fails", async (root) => {
  write(root, "docs/README.md", "[missing](./NOPE.md)\n");
  const report = await validateDocumentation(context(root));
  assert.equal(report.status, "FAIL");
  assert.ok(report.findings.some((item) => item.code === "DOC-BROKEN-LINK"));
});

useFixture("duplicate Business Rule definition fails", async (root) => {
  write(root, "docs/01_BUSINESS_FOUNDATION/DUPLICATE.md", "## BR-TST-001\n");
  const report = await validateBusiness(context(root));
  assert.equal(report.status, "FAIL");
  assert.ok(report.findings.some((item) => item.code === "BUS-RULE-DEFINITION-DUPLICATE"));
});

useFixture("unexpected prohibited direct dependency fails", async (root) => {
  write(root, "package.json", JSON.stringify({ name: "fixture", packageManager: "pnpm@11.0.9", dependencies: { redux: "5.0.1" } }));
  const report = await validateDependencies(context(root));
  assert.equal(report.status, "FAIL");
  assert.ok(report.findings.some((item) => item.code === "DEP-PROHIBITED"));
});

useFixture("TypeORM declaration fails", async (root) => {
  write(root, "apps/api/package.json", JSON.stringify({ name: "api", dependencies: { typeorm: "0.3.28" } }));
  const report = await validateDependencies(context(root));
  assert.equal(report.status, "FAIL");
  assert.match(report.findings.map((item) => item.message).join("\n"), /typeorm/);
});

useFixture("Prisma import in Domain fails AST boundary validation", async (root) => {
  write(root, "apps/api/package.json", JSON.stringify({ name: "api" }));
  write(root, "apps/api/src/modules/students/students.module.ts", "export {};\n");
  write(root, "apps/api/src/modules/students/domain/student.ts", "import { PrismaClient } from '@prisma/client';\nexport const prisma = new PrismaClient();\n");
  const report = await validateNestjsArchitecture(context(root));
  assert.equal(report.status, "FAIL");
  assert.ok(report.findings.some((item) => item.code === "NEST-DOMAIN-IMPORT"));
});

useFixture("unauthorized root directory fails", async (root) => {
  mkdirSync(join(root, "backend2"));
  const report = await validateRepositoryStructure(context(root));
  assert.equal(report.status, "FAIL");
  assert.ok(report.findings.some((item) => item.code === "STRUCTURE-DRIFT"));
});

useFixture("Archive Rule does not affect active Rule count", async (root) => {
  write(root, "ARCHIVE/old-rules.md", "## BR-TST-999\n");
  const report = await validateBusiness(context(root));
  assert.equal(report.status, "PASS");
  assert.equal(report.metrics.rules, 1);
});

useFixture("Business Gate blocks on Business failure", async (root) => {
  write(root, "docs/01_BUSINESS_FOUNDATION/DUPLICATE.md", "## BR-TST-001\n");
  const report = await validateBusinessGate(context(root));
  assert.equal(report.status, "FAIL");
  assert.equal(report.summary, "BUSINESS GATE: FAIL");
});

useFixture("Business Gate exposes the canonical Business baseline", async (root) => {
  const report = await validateBusinessGate(context(root));
  assert.equal(report.status, "PASS");
  assert.deepEqual(report.metrics, {
    blockingFindings: 0,
    rules: 1,
    approvedDecisions: 1,
    openDecisions: 0
  });
});

const reviewed = (overrides: Record<string, unknown> = {}): Record<string, unknown> => ({
  business: { status: "REVIEWED_NA", reason: "No Business behavior impact." },
  requirements: { status: "REVIEWED_NA", reason: "No requirements impact." },
  ddd: { status: "REVIEWED_NA", reason: "No DDD impact." },
  database: { status: "REVIEWED_NA", reason: "No database impact." },
  api: { status: "REVIEWED_NA", reason: "No API impact." },
  frontend: { status: "REVIEWED_NA", reason: "No frontend impact." },
  security: { status: "REVIEWED_NA", reason: "No security impact." },
  qa: { status: "REVIEWED_NA", reason: "Existing tests cover this change." },
  analytics: { status: "REVIEWED_NA", reason: "No analytics impact." },
  derived: { status: "REVIEWED_NA", reason: "No derived view impact." },
  clientBrd: { status: "REVIEWED_NA", reason: "No client BRD impact." },
  infrastructure: { status: "REVIEWED_NA", reason: "No infrastructure impact." },
  governance: { status: "REVIEWED_NA", reason: "No governance impact." },
  tests: { status: "REVIEWED_NA", reason: "Existing tests cover this change." },
  ...overrides
});

const propagation = async (root: string, manifest: Record<string, unknown>, changedFiles: ChangedFile[]) => {
  write(root, ".change/current-change.json", JSON.stringify(manifest));
  const id = String(manifest.changeId);
  write(root, "docs/15_CHANGE_MANAGEMENT/CHANGE_LOG.md", `| ${id} | governed fixture |\n`);
  return validateChangePropagation(context(root, changedFiles));
};

useFixture("propagation case A passes when Business impact is fully reviewed", async (root) => {
  const report = await propagation(root, {
    changeId: "CHG-CASE-A", type: "BUSINESS", primaryDomain: "SUBSCRIPTION", affectedRules: ["BR-TST-001"],
    layers: reviewed({ business: "UPDATED", requirements: "UPDATED", api: "UPDATED", qa: "UPDATED" })
  }, [{ path: "docs/01_BUSINESS_FOUNDATION/RULES.md", status: "M" }]);
  assert.equal(report.status, "PASS");
});

useFixture("propagation case B fails when QA is ignored", async (root) => {
  const layers = reviewed({ business: "UPDATED", requirements: "UPDATED", api: "UPDATED" });
  delete layers.qa;
  const report = await propagation(root, { changeId: "CHG-CASE-B", type: "BUSINESS", primaryDomain: "SUBSCRIPTION", affectedRules: ["BR-TST-001"], layers }, [{ path: "docs/01_BUSINESS_FOUNDATION/RULES.md", status: "M" }]);
  assert.equal(report.status, "FAIL");
  assert.ok(report.findings.some((item) => item.code === "PROP-LAYER-IGNORED"));
});

useFixture("propagation case C treats UX-only change as Business N/A", async (root) => {
  const report = await propagation(root, { changeId: "CHG-CASE-C", type: "UX", primaryDomain: "UI", affectedRules: [], layers: reviewed({ frontend: "UPDATED", tests: "UPDATED" }) }, [{ path: "apps/web/features/save-button.tsx", status: "M" }]);
  assert.equal(report.status, "PASS");
});

useFixture("propagation case D accepts configuration classification without a new Rule", async (root) => {
  const report = await propagation(root, { changeId: "CHG-CASE-D", type: "CONFIGURATION", primaryDomain: "POLICY", affectedRules: [], layers: reviewed({ business: "UPDATED", tests: "UPDATED" }) }, [{ path: "docs/01_BUSINESS_FOUNDATION/RULES.md", status: "M" }]);
  assert.equal(report.status, "PASS");
});


useFixture("Prisma generator provider does not trigger datasource drift and generated client is ignored", async (root) => {
  write(root, "apps/api/package.json", JSON.stringify({ name: "api" }));
  write(
    root,
    "apps/api/prisma/schema.prisma",
    [
      'generator client {',
      '  provider = "prisma-client"',
      '  output = "../src/generated/prisma"',
      '}',
      '',
      'datasource db {',
      '  provider = "postgresql"',
      '}',
      ''
    ].join("\n")
  );
  write(
    root,
    "apps/api/src/generated/prisma/client.ts",
    "/* generated example: const prisma = new PrismaClient({ adapter }) */\n"
  );

  const report = await validateDatabase(context(root, []));
  assert.equal(report.status, "PASS");
  assert.equal(report.metrics.prismaClients, 0);
});

useFixture("non-PostgreSQL Prisma datasource fails even when generator provider is valid", async (root) => {
  write(root, "apps/api/package.json", JSON.stringify({ name: "api" }));
  write(
    root,
    "apps/api/prisma/schema.prisma",
    [
      'generator client {',
      '  provider = "prisma-client"',
      '}',
      '',
      'datasource db {',
      '  provider = "sqlite"',
      '}',
      ''
    ].join("\n")
  );

  const report = await validateDatabase(context(root, []));
  assert.equal(report.status, "FAIL");
  assert.ok(report.findings.some((item) => item.code === "DB-PROVIDER-DRIFT"));
});

useFixture("Prisma schema change still requires a newly added migration", async (root) => {
  write(root, "apps/api/package.json", JSON.stringify({ name: "api" }));
  write(
    root,
    "apps/api/prisma/schema.prisma",
    [
      'datasource db {',
      '  provider = "postgresql"',
      '}',
      '',
      'model Student {',
      '  id String @id',
      '}',
      ''
    ].join("\n")
  );

  const withoutMigration = await validateDatabase(
    context(root, [{ path: "apps/api/prisma/schema.prisma", status: "A" }])
  );
  assert.equal(withoutMigration.status, "FAIL");
  assert.ok(withoutMigration.findings.some((item) => item.code === "DB-MIGRATION-MISSING"));

  write(root, "apps/api/prisma/migrations/20260810000000_init/migration.sql", "-- fixture\n");
  const withMigration = await validateDatabase(
    context(root, [
      { path: "apps/api/prisma/schema.prisma", status: "A" },
      {
        path: "apps/api/prisma/migrations/20260810000000_init/migration.sql",
        status: "A"
      }
    ])
  );
  assert.equal(withMigration.status, "PASS");
});


useFixture("untracked Prisma migration satisfies working-tree migration gate", async (root) => {
  write(root, "apps/api/package.json", JSON.stringify({ name: "api" }));
  write(
    root,
    "apps/api/prisma/schema.prisma",
    [
      'datasource db {',
      '  provider = "postgresql"',
      '}',
      '',
      'model Student {',
      '  id String @id',
      '}',
      ''
    ].join("\n")
  );
  write(
    root,
    "apps/api/prisma/migrations/20260810000001_untracked/migration.sql",
    "-- fixture\n"
  );

  const report = await validateDatabase(
    context(root, [
      { path: "apps/api/prisma/schema.prisma", status: "?" },
      {
        path: "apps/api/prisma/migrations/20260810000001_untracked/migration.sql",
        status: "?"
      }
    ])
  );

  assert.equal(report.status, "PASS");
});
