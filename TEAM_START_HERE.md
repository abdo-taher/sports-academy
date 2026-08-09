# Team Start Here

Use the smallest relevant source set. For changes, first read `docs/00_GOVERNANCE/AI_CHANGE_PROPAGATION_PROTOCOL.md`.

## Technical Governance — Mandatory Before Implementation

Read in order:

1. `docs/00_GOVERNANCE/TECH_STACK_LOCK.md`
2. `docs/00_GOVERNANCE/ARCHITECTURE_RULES.md`
3. `docs/00_GOVERNANCE/DEPENDENCY_RULES.md`
4. `docs/00_GOVERNANCE/CODING_STANDARDS.md`
5. `docs/00_GOVERNANCE/TESTING_STRATEGY.md`
6. the relevant `apps/*/AGENTS.md`

Changes to a locked technology or fixed architecture require `docs/00_GOVERNANCE/TECH_DECISION_PROTOCOL.md`. A conflict stops implementation with `TECH STACK CONFLICT — ADR REQUIRED`.

Before completing any modification, follow `docs/00_GOVERNANCE/VALIDATION_GOVERNANCE.md` and run `pnpm validate:changed`; use `pnpm validate:all` for major or mixed changes. Business-affecting work must pass `pnpm validate:business-gate` before technical implementation. AI clients may call the equivalent read-only MCP tools, but the CLI is always authoritative and available independently.

## Business / Product

Read:

1. `docs/CLIENT/CLIENT_BRD_BUSINESS_SUMMARY_AR.md`
2. the relevant canonical Domain under `docs/02_DOMAINS/`
3. its Business Rules
4. the relevant End-to-End Journey
5. the applicable Policy or configuration catalog

## Backend

Read:

1. relevant Domain Rules
2. relevant Lifecycle
3. Requirements
4. `docs/14_DERIVED_VIEWS/BACKEND_IMPLEMENTATION_VIEW.md`
5. DDD
6. Database
7. API
8. `docs/10_SECURITY/CURRENT_RELEASE_PERMISSION_CATALOG.md`

Then follow `apps/api/AGENTS.md`.

## Frontend

Read:

1. relevant Business Domain
2. Requirements
3. `docs/14_DERIVED_VIEWS/FRONTEND_UX_VIEW.md`
4. `docs/09_UX_UI/CURRENT_RELEASE_UX_FLOW_CATALOG.md`
5. `docs/10_SECURITY/CURRENT_RELEASE_PERMISSION_CATALOG.md`
6. relevant API behavior where needed

Then follow `apps/web/AGENTS.md`.

## UX/UI Designer

Read:

1. Client Business BRD
2. relevant Domain
3. relevant Journey
4. Frontend/UX View
5. UX Flow Catalog
6. relevant role and permission behavior

Database and API reading is not required unless the design depends on them.

Use the existing Tailwind/shadcn design system and canonical design tokens. Do not invent a component library, Business status meaning, permission or user action.

## QA

Read:

1. Business Rules
2. Lifecycles
3. Requirements
4. Permissions
5. QA scenarios
6. relevant API or UX behavior

Then follow `docs/00_GOVERNANCE/TESTING_STRATEGY.md`. If an expected outcome is undocumented, report `BUSINESS/TECHNICAL SPECIFICATION GAP` rather than inventing it.

## Database

Read:

1. relevant Business Domain
2. Business invariants
3. DDD
4. Data Integrity Model
5. Requirements

Then apply PostgreSQL/Prisma, migration, transaction and module-boundary rules from `ARCHITECTURE_RULES.md`. Derive persistence from Business invariants and DDD, never only from UI fields.

## API

Read:

1. Business Rules
2. Requirements
3. DDD
4. API Behavior Catalog
5. Permissions

Then derive an explicit application use case and REST/OpenAPI contract. Do not generate CRUD endpoints blindly from database tables.

## AI Agent

Read:

1. `README.md`
2. `AGENTS.md`
3. `docs/00_GOVERNANCE/AI_START_HERE.md`
4. `docs/00_GOVERNANCE/BUSINESS_QUESTION_ROUTER.md`
5. only the relevant canonical documents

For modifications, also read `docs/00_GOVERNANCE/AI_CHANGE_PROPAGATION_PROTOCOL.md`.
