# Sports Academy Platform

This ACTIVE repository contains:

- certified Business documentation;
- Product and Requirements documentation;
- technical specifications;
- Backend and Frontend application workspaces;
- shared contracts, business types, UI and shared packages;
- infrastructure, QA, analytics and AI project instructions.

The current certified baseline contains **40 approved Business Decisions**, **0 open current Business Decisions**, **114 canonical Business Rules** and **0 current Business coverage gaps**.

## Start Here

Human or AI:

1. Read [`AGENTS.md`](./AGENTS.md).
2. Read [`TEAM_START_HERE.md`](./TEAM_START_HERE.md).

AI specifically:

3. Read [`docs/00_GOVERNANCE/AI_START_HERE.md`](./docs/00_GOVERNANCE/AI_START_HERE.md).

Before any modification:

4. Read [`docs/00_GOVERNANCE/AI_CHANGE_PROPAGATION_PROTOCOL.md`](./docs/00_GOVERNANCE/AI_CHANGE_PROPAGATION_PROTOCOL.md).

Before implementation or a technical-structure change:

5. Read [`MASTER_IMPLEMENTATION_ROADMAP.md`](./docs/00_GOVERNANCE/MASTER_IMPLEMENTATION_ROADMAP.md) for the governed phase sequence, entry/exit gates and delivery order.
6. Read [`TECH_STACK_LOCK.md`](./docs/00_GOVERNANCE/TECH_STACK_LOCK.md), [`ARCHITECTURE_RULES.md`](./docs/00_GOVERNANCE/ARCHITECTURE_RULES.md) and [`DEPENDENCY_RULES.md`](./docs/00_GOVERNANCE/DEPENDENCY_RULES.md).

The roadmap controls **implementation sequencing only**. It never overrides approved Business Decisions, canonical Business Rules, Business lifecycles/policies, or an approved technical ADR.

## AI Tool Adapters

| Tool | Adapter |
|---|---|
| Codex | [`.codex/`](./.codex/README.md) plus root [`AGENTS.md`](./AGENTS.md) |
| Claude | [`CLAUDE.md`](./CLAUDE.md) |
| Cursor | [`.cursor/rules/project-governance.mdc`](./.cursor/rules/project-governance.mdc) |
| GitHub Copilot | [`.github/copilot-instructions.md`](./.github/copilot-instructions.md) |

All adapters point to the same authoritative change protocol.

## Locked Technical Baseline

The repository is a pnpm/Turborepo TypeScript monorepo. The web application is locked to Next.js App Router/React/Tailwind/shadcn with TanStack Query, React Hook Form and Zod. The API is locked to a NestJS Modular Monolith with PostgreSQL, Prisma, Redis/BullMQ and REST/OpenAPI. Tests use Vitest/React Testing Library on the Frontend, Vitest on the Backend, and Playwright for browser E2E.

Run `pnpm validate:changed` for everyday deterministic validation and `pnpm validate:all` for major/mixed work or release validation. The same validator core is available to AI clients through the local read-only [`sports-academy-validator` MCP server](./tools/validation-mcp/README.md) and is enforced directly by CI. Any stack replacement requires the [`Technical Decision Protocol`](./docs/00_GOVERNANCE/TECH_DECISION_PROTOCOL.md).

## Permanent Change Rule

```text
BUSINESS FIRST
  ↓
Business Canonical Update
  ↓
Business Validation
  ↓
Technical Documentation Propagation
  ↓
Implementation if requested
  ↓
QA / Validation
```

A technical or visual-only change remains in its own layer unless it genuinely changes Business behavior. Never edit one isolated document when related active documentation is affected. Code is never the source of Business Truth.

## Repository Map

| Area | Location |
|---|---|
| Implementation Roadmap | `docs/00_GOVERNANCE/MASTER_IMPLEMENTATION_ROADMAP.md` |
| Business Canonical | `docs/01_BUSINESS_FOUNDATION/`, `docs/02_DOMAINS/`, `docs/03_END_TO_END_JOURNEYS/`, `docs/04_POLICIES/` |
| Requirements | `docs/05_REQUIREMENTS/` |
| Technical Documentation | `docs/06_DDD/` through `docs/13_ANALYTICS/` |
| Derived Views | `docs/14_DERIVED_VIEWS/` |
| Change History | `docs/15_CHANGE_MANAGEMENT/` |
| Backend | `apps/api/` |
| Frontend | `apps/web/` |
| Shared Packages | `packages/` |
| Infrastructure | `infrastructure/` |
| Validator Core | `packages/project-validator/` |
| MCP Validation Adapter | `tools/validation-mcp/` |

The historical archive and migration backups are outside this ACTIVE project. Never use them as current authority.
