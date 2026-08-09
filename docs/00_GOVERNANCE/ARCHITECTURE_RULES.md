# Architecture Rules

## Authority

This is the canonical repository and application-architecture contract. It applies after canonical Business Truth and Requirements have established what must be implemented. It must never be used to invent Business behavior.

## Repository Model

```text
sports-academy-platform/
├── docs/
├── apps/
│   ├── api/
│   └── web/
├── packages/
│   ├── contracts/
│   ├── business-types/
│   ├── ui/
│   ├── shared/
│   └── project-validator/
├── tools/
│   └── validation-mcp/
├── infrastructure/
├── scripts/
├── tests/e2e/
├── AGENTS.md
├── CLAUDE.md
├── TEAM_START_HERE.md
├── package.json
├── pnpm-workspace.yaml
├── turbo.json
└── pnpm-lock.yaml
```

New top-level directories require an architecture update or ADR. Do not create a random location because ownership is unclear.

All deterministic validation logic belongs in `packages/project-validator/`. The MCP adapter under `tools/validation-mcp/` validates tool input, invokes that core, and serializes results; it must not duplicate validators. CLI and CI invoke the same core directly. `scripts/validation/` may contain only documented launch/support adapters, never a competing engine.

## Frontend Architecture

`apps/web` uses Next.js App Router, React and TypeScript. Its fixed structure is:

```text
apps/web/
├── AGENTS.md
├── app/
├── features/
├── components/
│   ├── ui/
│   ├── shared/
│   └── business/
├── hooks/
├── lib/
├── providers/
├── styles/
├── types/
├── config/
├── tests/
└── public/
```

The directories become mandatory when the web application is initialized. Do not create empty directories for appearance.

### App Router

- `app/` owns routing and route composition.
- Route groups may include `(auth)` and `(dashboard)` with role-oriented routes such as `admin`, `branch`, `coach`, `parent` and `student` where supported by Requirements.
- Route files (`page.tsx`, `layout.tsx`, `loading.tsx`, `error.tsx`, `not-found.tsx`) orchestrate features; they do not own major Business logic.
- New features must not use Pages Router.

### Feature ownership

Substantial features use:

```text
features/<feature>/
├── api/
├── components/
├── hooks/
├── schemas/
├── types/
├── utils/
└── index.ts
```

Omit genuinely unused folders; do not invent a different layout per feature. Feature internals are private. Cross-feature use goes through the feature's public `index.ts` or an approved shared contract.

### Component ownership

- `components/ui/`: generic shadcn/design primitives.
- `components/shared/`: application-wide reusable composition such as page headers and generic data states.
- `components/business/`: reusable Sports Academy representations such as governed status badges.
- `features/<feature>/components/`: feature-owned UI.
- `packages/ui/`: only components proven reusable beyond `apps/web`.

Do not move every component into a global directory. A generic component must not import a feature.

### State and data flow

| State | Owner |
|---|---|
| Server state | TanStack Query |
| Shareable page/filter state | Next.js URL/search parameters |
| Form state | React Hook Form with Zod |
| Local interaction state | React state |
| Global client state | Prohibited by default; ADR required |

Frontend data flow is:

```text
OpenAPI contract
  -> generated/approved API client in packages/contracts
  -> feature API layer
  -> TanStack Query hook
  -> component/view model
```

Do not scatter raw `fetch('/api/...')` calls through UI components. Database models, Domain entities, API contracts and UI view models are distinct representations. Never expose Prisma models to the browser.

Preferred import direction:

```text
app -> features -> shared/business components -> ui primitives -> lib
```

## Backend Architecture

`apps/api` is a NestJS TypeScript Modular Monolith using PostgreSQL, Prisma, Redis, BullMQ and REST/OpenAPI.

```text
apps/api/
├── AGENTS.md
├── prisma/
├── src/
│   ├── main.ts
│   ├── app.module.ts
│   ├── common/
│   ├── config/
│   ├── modules/
│   └── infrastructure/
└── test/
```

Each substantial Business domain is a Nest module. The current domain candidates are academy, branches, sports, programs, students, guardians, coaches, groups, sessions, attendance, evaluations, subscriptions, payments, transfers, social, surveys, notifications and audit. A module may only be implemented when current Business scope and Requirements support it.

### Domain module structure

```text
modules/<domain>/
├── domain/
│   ├── entities/
│   ├── value-objects/
│   ├── enums/
│   ├── events/
│   ├── policies/
│   └── ports/
├── application/
│   ├── commands/
│   ├── queries/
│   ├── use-cases/
│   └── services/
├── infrastructure/
│   ├── persistence/
│   ├── repositories/
│   └── integrations/
├── presentation/http/
│   ├── controllers/
│   ├── dto/
│   └── mappers/
├── <domain>.module.ts
└── index.ts
```

Small modules may omit unused folders. Empty folders are prohibited.

### Dependency direction

```text
presentation -> application -> domain
infrastructure -> implements domain/application ports
```

- Domain code does not depend on NestJS controllers, Prisma, HTTP, Redis, BullMQ or UI.
- Application code may depend on Domain code but not directly on Prisma models.
- Infrastructure implements persistence and integration ports.
- Presentation validates and maps transport data, calls a use case and maps the result.
- Controllers remain thin and never calculate Business eligibility.
- State-changing operations use action-oriented use cases. Avoid giant generic services.
- Commands change state; queries do not.

### Module boundaries

A module must not query another module's tables because Prisma makes it convenient. Use an approved application interface, public domain contract, domain event or orchestrating use case. Do not create God modules, catch-all Business services or shared utilities containing Business Rules.

## Data and Integration Rules

- PostgreSQL is the authoritative Business persistence store.
- Prisma schema and migrations live under `apps/api/prisma/` and derive from approved DDD/data documentation.
- Every schema change creates a new migration. Never rewrite applied migration history or reset production.
- Critical invariants use the appropriate combination of PostgreSQL constraints, transactions and server validation.
- Multi-record atomic Business operations use a transaction.
- Redis is only cache, queue infrastructure, short-lived coordination or appropriate ephemeral state.
- BullMQ handles approved asynchronous work. Do not defer an invariant that must complete synchronously.
- REST uses one `/api/v1` version strategy and OpenAPI as the machine-readable contract.
- Governed Business commands should use explicit endpoints such as `POST /subscriptions/:id/freeze`, not generic status mutation.
- All controllers use one error envelope with stable code, readable message, optional field errors and correlation/request ID.
- Binary files use a provider-neutral object-storage abstraction; PostgreSQL stores metadata, ownership, location/reference and audit data.

## Package Ownership

| Package | Allowed content | Prohibited content |
|---|---|---|
| `packages/contracts` | Generated API client, generated schemas/types, contract metadata | A second Business Domain layer |
| `packages/business-types` | Stable cross-application IDs, safe enums and semantic primitives | Prisma models, database models or shared Backend entities |
| `packages/ui` | Proven cross-application UI primitives/components | Premature extraction of all web components |
| `packages/shared` | Generic cross-application utilities | Business Rules, persistence, domain services or feature logic |

## Cross-Cutting Boundaries

- Authentication implementation is blocked until an approved technical decision exists.
- Backend authorization is authoritative; frontend permission checks are UX only.
- Realtime is disabled unless a confirmed requirement and ADR approve it.
- Backend technical logging uses the approved Pino + `nestjs-pino` implementation from `TECH-ADR-001`; concrete logger configuration belongs to bootstrap/infrastructure and must not leak into Domain code.
- Technical logs and canonical Business Audit records are separate.
- Technical logs use correlation/request IDs and centralized sensitive-data redaction; a technical log entry never satisfies a canonical Business Audit requirement.
- Technical environment configuration and Business operational configuration are separate.
- Archive is a Business lifecycle concept, not a generic `deletedAt` policy.

## Placement and Generation Gate

Before non-trivial code generation, identify the Domain, Business Rules, Requirement, target app, target module/feature, approved technology and destination path. If ownership or location is not defined, update architecture governance or request an ADR before creating the file.

Run `pnpm check:structure` before completion. Any violation must be reported as `STRUCTURE DRIFT`; do not normalize drift by adding another pattern.
