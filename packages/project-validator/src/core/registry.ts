import type { ValidatorDefinition } from "./types.ts";
import { validateApi } from "../validators/api.ts";
import { validateBusinessGate } from "../validators/business-gate.ts";
import { validateBusiness } from "../validators/business.ts";
import { validateDatabase } from "../validators/database.ts";
import { validateDependencies } from "../validators/dependencies.ts";
import { validateDocumentation } from "../validators/documentation.ts";
import { validateFrontendArchitecture } from "../validators/frontend.ts";
import { validateGovernance } from "../validators/governance.ts";
import { validateNestjsArchitecture } from "../validators/nestjs.ts";
import { validateChangePropagation } from "../validators/propagation.ts";
import { validateRepositoryStructure } from "../validators/structure.ts";
import { validateTechStack } from "../validators/tech-stack.ts";
import { validateTests } from "../validators/tests.ts";

export const validatorRegistry = {
  documentation: { id: "DOC-001", description: "Active documentation links and entry points", scope: "documentation", blocking: true, execute: validateDocumentation },
  business: { id: "BUS-001", description: "Canonical Business rules and decisions", scope: "business", blocking: true, execute: validateBusiness },
  "business-gate": { id: "BUS-002", description: "Business prerequisites before downstream work", scope: "business", blocking: true, execute: validateBusinessGate },
  propagation: { id: "PROP-001", description: "Cross-layer change propagation evidence", scope: "change", blocking: true, execute: validateChangePropagation },
  structure: { id: "STRUCT-001", description: "Repository layout and package-manager invariants", scope: "repository", blocking: true, execute: validateRepositoryStructure },
  dependencies: { id: "DEP-001", description: "Technology dependency allow/deny rules", scope: "dependencies", blocking: true, execute: validateDependencies },
  nestjs: { id: "NEST-001", description: "NestJS and DDD boundaries", scope: "backend", blocking: true, execute: validateNestjsArchitecture },
  frontend: { id: "WEB-001", description: "Next.js App Router and feature boundaries", scope: "frontend", blocking: true, execute: validateFrontendArchitecture },
  database: { id: "DB-001", description: "PostgreSQL/Prisma ownership and migration safety", scope: "database", blocking: true, execute: validateDatabase },
  api: { id: "API-001", description: "REST/OpenAPI/controller boundaries", scope: "api", blocking: true, execute: validateApi },
  tests: { id: "TEST-001", description: "Test impact for changed implementation", scope: "qa", blocking: false, execute: validateTests },
  "tech-stack": { id: "TECH-001", description: "Locked technology stack", scope: "technology", blocking: true, execute: validateTechStack },
  governance: { id: "GOV-001", description: "Governance and agent routing", scope: "governance", blocking: true, execute: validateGovernance }
} as const satisfies Record<string, ValidatorDefinition>;

export type ValidatorName = keyof typeof validatorRegistry;

export const allValidatorNames: ValidatorName[] = [
  "documentation", "business", "business-gate", "propagation", "structure", "dependencies",
  "nestjs", "frontend", "database", "api", "tests", "tech-stack", "governance"
];
