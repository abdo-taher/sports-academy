# Technology Stack Lock

## Authority and Scope

This file is the canonical technology selection for the Sports Academy Platform. It governs implementation tooling and architecture only. It does not create or change Business behavior.

The operating rule is:

```text
ONE PROBLEM
  -> ONE APPROVED TOOL
  -> ONE APPROVED LOCATION
  -> ONE APPROVED PATTERN
```

If an implementation request conflicts with this lock, stop and report:

`TECH STACK CONFLICT — ADR REQUIRED`

Do not install, scaffold, migrate to or partially introduce the conflicting technology.

## Pinned Toolchain Baseline

| Concern | Pinned version | Repository authority |
|---|---:|---|
| Node.js | `22.22.2` (LTS) | `.node-version`, `.nvmrc`, root `package.json` |
| pnpm | `11.0.9` | root `package.json#packageManager` and `engines.pnpm` |
| Turborepo | `2.10.7` | root `package.json` and `pnpm-lock.yaml` |
| MCP TypeScript server SDK | `@modelcontextprotocol/server@2.0.0` | `tools/validation-mcp/package.json` and root `pnpm-lock.yaml` |
| MCP Inspector | `@modelcontextprotocol/inspector@2.1.0` | root `package.json` and `pnpm-lock.yaml` |

Node, pnpm and Turborepo must use these exact versions in local development, CI, Docker and deployment until changed by the process below. Application dependency versions must be exact in `package.json`; ranges such as `^`, `~`, `*` and `latest` are prohibited. Workspace links may use `workspace:*`.

## Locked Stack

| Concern | Approved technology or rule | Alternatives prohibited | Change requires `TECH-ADR` |
|---|---|---|---|
| Repository | Monorepo | Separate repositories introduced ad hoc | YES |
| Runtime | Pinned Node.js LTS | Other runtimes or unpinned Node | YES |
| Language | TypeScript with `strict: true` | JavaScript application logic; weakened strictness | YES |
| Package manager | pnpm | npm, Yarn or Bun workspaces | YES |
| Workspace | pnpm workspaces | npm/Yarn/Bun workspaces | YES |
| Task orchestration | Turborepo | Nx, Lerna or another orchestrator | YES |
| Lockfile | One root `pnpm-lock.yaml` | Nested lockfiles or competing lockfiles | YES |
| Frontend framework | Next.js App Router | Pages Router for new work; another web framework | YES |
| Frontend UI runtime | React | Alternate UI runtimes | YES |
| Styling | Tailwind CSS | CSS-in-JS systems; competing styling frameworks | YES |
| Component primitives | shadcn/ui | Material UI, Ant Design, Chakra UI, Bootstrap or another design system | YES |
| Server state | TanStack Query | SWR; Redux or another server cache | YES |
| URL state | Next.js search parameters | Duplicated global-store URL state | YES |
| Form state | React Hook Form | Formik or another form library | YES |
| Frontend validation | Zod | Yup or another schema library | YES |
| Local UI state | React state | A global store for local interactions | YES |
| Global client state | Prohibited by default | Redux, MobX, Zustand or another global store | YES, before use |
| Backend framework | NestJS | Standalone Express/Fastify, Hono or another backend framework | YES |
| Backend architecture | Modular Monolith | Microservices or unbounded shared services | YES |
| Primary database | PostgreSQL | MySQL, MongoDB, Firebase or another primary database | YES |
| ORM | Prisma | Sequelize, TypeORM, Drizzle, MikroORM or another ORM | YES |
| Cache/ephemeral coordination | Redis | Using cache as Business persistence | YES |
| Background jobs | BullMQ backed by Redis | RabbitMQ, Kafka, Bull or another queue framework | YES |
| API style | REST under one `/api/v1` strategy | GraphQL, tRPC or mixed versioning | YES |
| API contract | OpenAPI | Ad-hoc or independently duplicated contracts | YES |
| Frontend unit/component tests | Vitest + React Testing Library | Another frontend runner/pattern | YES |
| End-to-end tests | Playwright | Cypress or another E2E framework | YES |
| Development / AI validation interface | Model Context Protocol using official TypeScript SDK v2; repository tooling only | Product API integration or unofficial/duplicate MCP validation logic | YES |
| Local validation transport | STDIO | Remote HTTP transport | YES |

The MCP validator lives under `tools/validation-mcp/`. It is not a NestJS module, product Backend dependency, end-user service, or production database client. Remote MCP transport is not currently enabled.

NestJS may use a supported HTTP adapter internally. That does not authorize a standalone Express or Fastify architecture.

## Approved but Not Yet Version-Initialized

The application workspaces are not initialized yet. When `apps/web`, `apps/api` or a package receives its first `package.json`, the initializing change must pin exact mutually compatible versions for every approved dependency and regenerate the single root lockfile. The dependency name is already locked by this file; an AI may not choose an alternative because initialization is pending.

## Technical Decisions Still Required

| Concern | Status | Implementation gate |
|---|---|---|
| Authentication technology | `NOT YET LOCKED — ADR REQUIRED BEFORE IMPLEMENTATION` | Do not introduce Auth.js, Clerk, Firebase Auth, Supabase Auth or a custom framework |
| Backend test runner | `LOCKED — Vitest; TECH-ADR-002 APPROVED` | Vitest is the only Backend unit/integration runner; do not add Jest or ts-jest to `apps/api` |
| Object-storage provider | `NOT YET LOCKED — ADR REQUIRED BEFORE PROVIDER COUPLING` | Use only a provider-neutral abstraction until selected |
| Structured logging implementation | `LOCKED — Pino + nestjs-pino; TECH-ADR-001 APPROVED` | One structured Backend logger only; no Winston or competing production logger; no production `console.log` strategy |
| Date utility | `NOT YET LOCKED — ADR REQUIRED BEFORE ADDING A LIBRARY` | Do not add multiple date libraries |
| Monetary representation | `LOCKED — decimal.js exact arithmetic + PostgreSQL NUMERIC + decimal-string API transport; TECH-ADR-004 APPROVED` | `decimal.js` is the approved Domain/Application exact-decimal implementation; Prisma Decimal is persistence-only; no JavaScript Number, floating-point DB type, implicit rounding or invented global precision/scale for canonical monetary values |
| Entity identifier strategy | `LOCKED — application-generated UUID v7; PostgreSQL native uuid; TECH-ADR-003 APPROVED` | One canonical Business entity ID strategy; no CUID/integer/random-string drift by domain |
| Realtime transport | Disabled by default | WebSockets, Socket.IO or SSE require a confirmed requirement and ADR |

These open technical choices do not reopen Business roles, permissions, policies or financial behavior.

## Version Governance

- Commit the root lockfile and never edit resolved dependency versions by hand.
- Do not upgrade a framework inside an unrelated feature.
- A major runtime, framework, ORM, queue, database, test-tool or architecture upgrade requires an approved `TECH-ADR`.
- Compatible security patch upgrades may use the dependency-maintenance path in `DEPENDENCY_RULES.md`, with tests and a Change Log entry.
- Never run a broad upgrade-all command without an explicit request and approved scope.
- Temporary dual-tool migrations require an approved ADR with an end date and removal plan.

## Precedence

This file and the other files in this technical governance set supersede contrary technology examples in supporting or legacy technical documents. Canonical Business documentation remains superior for Business behavior. See `TECH_DECISION_PROTOCOL.md` for approved changes.
