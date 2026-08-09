import type { ValidationConfig } from "./packages/project-validator/src/config/types.ts";

const config: ValidationConfig = {
  activeDocumentationRoot: "docs",
  archivePaths: ["../../ARCHIVE", "ARCHIVE", "docs/99_LEGACY"],
  canonicalBusinessPaths: [
    "docs/01_BUSINESS_FOUNDATION",
    "docs/02_DOMAINS",
    "docs/03_END_TO_END_JOURNEYS",
    "docs/04_POLICIES"
  ],
  approvedRootDirectories: [
    ".codex",
    ".cursor",
    ".git",
    ".github",
    ".change",
    ".validation",
    ".next",
    ".turbo",
    "apps",
    "build",
    "coverage",
    "dist",
    "docs",
    "infrastructure",
    "node_modules",
    "packages",
    "scripts",
    "tests",
    "tools"
  ],
  approvedRootFiles: [
    ".env.example",
    ".gitignore",
    ".node-version",
    ".nvmrc",
    "AGENTS.md",
    "CLAUDE.md",
    "README.md",
    "TEAM_START_HERE.md",
    "package.json",
    "pnpm-lock.yaml",
    "pnpm-workspace.yaml",
    "tsconfig.base.json",
    "turbo.json",
    "validation.config.ts"
  ],
  expectedBusinessRuleCount: 114,
  expectedApprovedDecisionCount: 40,
  expectedOpenDecisionCount: 0,
  decisionBaseline: [
    { prefix: "BD", minimum: 3, maximum: 30 },
    { prefix: "NBCG-DEC", minimum: 1, maximum: 12 }
  ],
  approvedPackageManager: "pnpm",
  approvedFrontendTechnologies: [
    "Next.js App Router",
    "React",
    "TypeScript",
    "Tailwind CSS",
    "shadcn/ui",
    "TanStack Query",
    "React Hook Form",
    "Zod"
  ],
  approvedBackendTechnologies: [
    "NestJS",
    "Modular Monolith",
    "PostgreSQL",
    "Prisma",
    "Redis",
    "BullMQ",
    "REST",
    "OpenAPI",
    "Pino",
    "nestjs-pino",
    "Vitest"
  ],
  prohibitedDependencies: [
    "@reduxjs/*", "redux", "mobx", "zustand", "swr", "formik", "yup",
    "@mui/*", "antd", "@chakra-ui/*", "bootstrap", "styled-components", "@emotion/*",
    "typeorm", "sequelize", "drizzle-orm", "mikro-orm", "@mikro-orm/*", "mongoose",
    "@nestjs/graphql", "graphql", "apollo*", "kafkajs", "amqplib", "bull", "cypress",
    "winston", "jest", "ts-jest", "@types/jest"
  ],
  allowedExceptions: [],
  documentationIndexLocations: [
    "docs/00_GOVERNANCE/BUSINESS_RULE_INDEX.md",
    "docs/00_GOVERNANCE/BUSINESS_CONCEPT_INDEX.md",
    "docs/00_GOVERNANCE/AI_SOURCE_MANIFEST.md",
    "docs/15_CHANGE_MANAGEMENT/DECISION_LOG.md"
  ],
  requiredGovernanceFiles: [
    "README.md",
    "AGENTS.md",
    "TEAM_START_HERE.md",
    "docs/00_GOVERNANCE/AI_START_HERE.md",
    "docs/00_GOVERNANCE/AI_CHANGE_PROPAGATION_PROTOCOL.md",
    "docs/00_GOVERNANCE/TECH_STACK_LOCK.md",
    "docs/00_GOVERNANCE/ARCHITECTURE_RULES.md",
    "docs/00_GOVERNANCE/DEPENDENCY_RULES.md",
    "docs/00_GOVERNANCE/NESTJS_ENGINEERING_RULES.md",
    "docs/00_GOVERNANCE/NESTJS_UPSTREAM_SOURCE.md",
    "docs/00_GOVERNANCE/NESTJS_RULE_ADOPTION_MATRIX.md",
    "docs/00_GOVERNANCE/VALIDATION_GOVERNANCE.md",
    "docs/15_CHANGE_MANAGEMENT/CHANGE_LOG.md"
  ],
  validationExclusions: [
    "node_modules",
    ".git",
    ".next",
    ".turbo",
    "coverage",
    "dist",
    "build",
    ".validation/reports"
  ],
  pathOwnership: {
    BUSINESS: ["docs/01_BUSINESS_FOUNDATION/", "docs/02_DOMAINS/", "docs/03_END_TO_END_JOURNEYS/", "docs/04_POLICIES/", "docs/CLIENT/"],
    REQUIREMENTS: ["docs/05_REQUIREMENTS/"],
    DDD: ["docs/06_DDD/"],
    DATABASE: ["docs/07_DATABASE/", "apps/api/prisma/"],
    API: ["docs/08_API/"],
    UX: ["docs/09_UX_UI/"],
    SECURITY: ["docs/10_SECURITY/"],
    QA: ["docs/12_QA/", "tests/"],
    ANALYTICS: ["docs/13_ANALYTICS/"],
    DERIVED: ["docs/14_DERIVED_VIEWS/"],
    BACKEND_CODE: ["apps/api/src/"],
    FRONTEND_CODE: ["apps/web/"],
    INFRASTRUCTURE: ["infrastructure/", ".github/workflows/"],
    GOVERNANCE: ["docs/00_GOVERNANCE/", "docs/15_CHANGE_MANAGEMENT/", "AGENTS.md", "TEAM_START_HERE.md", ".codex/", ".cursor/", ".github/copilot-instructions.md"],
    TOOLING: ["packages/project-validator/", "tools/validation-mcp/", "scripts/", "validation.config.ts", "package.json", "pnpm-lock.yaml", "pnpm-workspace.yaml", "turbo.json"]
  },
  allowedRawFetchPaths: ["apps/web/features/*/api/", "apps/web/lib/"],
  changeManifestPath: ".change/current-change.json"
};

export default config;
