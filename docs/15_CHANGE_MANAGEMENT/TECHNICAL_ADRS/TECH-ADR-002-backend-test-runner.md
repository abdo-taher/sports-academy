# TECH-ADR-002 — Backend Test Runner

- Status: APPROVED
- Date: 2026-08-10
- Decision owner: Project Technical Owner
- Technical approver: Project Technical Owner
- Supersedes / superseded by: None
- Related Change ID: CHG-TECH-ADR-002
- Business impact: N/A — NO BUSINESS IMPACT

## Context

The Sports Academy Platform locks Frontend unit and component testing to Vitest,
while the Backend test runner was intentionally left unresolved until API
initialization.

The project requires exactly one Backend runner.

Jest and Vitest must not coexist as competing Backend test runners.

The Backend application has not yet been initialized and no Backend test-runner
dependency currently exists.

## Existing solution

No Backend application tests currently exist.

Current governance provides:

- Frontend unit/hooks: Vitest;
- Frontend components: React Testing Library on Vitest;
- Browser E2E: Playwright;
- Backend unit/integration: one runner still to be selected;
- Nest `TestingModule` for Nest-specific module/DI testing where applicable.

## Problem

A single Backend test runner must be selected before `apps/api` initialization
so that scaffolding, CI, test placement, mocking syntax and future agent-generated
tests do not diverge.

## Constraints

The selected runner must:

1. support Node.js and TypeScript reliably;
2. work with NestJS `TestingModule`;
3. support Domain, Application, integration and API test layers;
4. work cleanly in the pnpm/Turborepo monorepo;
5. integrate with CI through the existing `test` task;
6. support mocking and asynchronous tests;
7. avoid requiring two Backend test runners;
8. remain distinct from Playwright browser E2E;
9. allow an HTTP integration client such as Supertest to be added separately if approved;
10. not define Business expectations — tests derive those from canonical Rules and Requirements.

## Options considered

### Option A — Jest

Use Jest as the Backend test runner.

Advantages:

- long-established NestJS ecosystem usage;
- extensive examples and community knowledge;
- strong mocking and testing ecosystem;
- NestJS starter projects have historically used Jest.

Disadvantages:

- introduces a second runner alongside the already-approved Frontend Vitest stack;
- increases configuration and cognitive surface across the monorepo;
- agents must maintain separate Jest and Vitest conventions;
- no existing project dependency requires Jest.

### Option B — Vitest

Use Vitest as the single Backend unit/integration runner.

Advantages:

- Frontend and Backend share one test runner vocabulary;
- native TypeScript-oriented workflow;
- supports Node/backend tests;
- compatible with the project's Node.js runtime;
- integrates naturally with the existing monorepo `test` task;
- no migration cost because Backend testing has not started.

Disadvantages:

- some NestJS ecosystem examples use Jest syntax and must be translated rather than copied blindly;
- Nest-specific third-party test helpers may occasionally assume Jest and require compatibility review.

## Selected option

**APPROVED: Option B — Vitest.**

If approved:

- Vitest becomes the only Backend unit/integration test runner;
- Jest, `ts-jest`, and competing Backend runners are prohibited unless a later approved ADR supersedes this decision;
- NestJS `TestingModule` remains the Nest module/DI testing mechanism where appropriate;
- Domain tests should remain framework-light where possible;
- integration tests may exercise Prisma/PostgreSQL, Redis/BullMQ and module boundaries using controlled infrastructure;
- Playwright remains the browser E2E framework;
- Supertest, if later approved, is an HTTP integration test client and does not become a second test runner.

This approval authorizes Vitest as the single future Backend unit/integration test runner. No package is installed by this ADR approval itself.

## Why

The project already standardizes Frontend tests on Vitest and has no existing
Backend runner dependency.

Selecting Vitest minimizes tooling duplication across the TypeScript monorepo
while preserving NestJS-specific testing through `TestingModule`.

## Consequences and trade-offs

If approved:

- Backend test scripts and configuration use Vitest;
- Backend examples copied from Jest-based Nest documentation must be adapted;
- agents must use Vitest mocking APIs rather than silently adding Jest;
- test configuration should remain owned by `apps/api`;
- root Turbo orchestration remains runner-neutral;
- test expectations remain derived from Business Rules, Requirements and technical contracts.

## Migration impact

None.

The Backend has not been initialized and no Backend runner currently exists.

## Affected apps/packages

Future impact:

- `apps/api`
- root test orchestration
- CI
- test dependency validation
- QA technical governance

No Business Domain behavior changes.

## Documentation impact

On approval, review/update:

- `docs/00_GOVERNANCE/TESTING_STRATEGY.md`
- `docs/12_QA/TESTING_STRATEGY_QA_FRAMEWORK.md`
- `docs/00_GOVERNANCE/TECH_STACK_LOCK.md`
- `docs/00_GOVERNANCE/DEPENDENCY_RULES.md`
- `docs/00_GOVERNANCE/NESTJS_ENGINEERING_RULES.md`
- `apps/api/AGENTS.md`
- `docs/15_CHANGE_MANAGEMENT/TECHNICAL_OPEN_QUESTIONS.md`
- deterministic dependency validation where practical

## Security and operational impact

None directly.

Tests must use controlled fixtures and test infrastructure and must never use
production credentials or production data.

## Test and validation plan

After implementation:

- Backend Vitest configuration loads correctly;
- simple Domain/unit test passes;
- Nest `TestingModule` test passes;
- asynchronous behavior works;
- CI invokes Backend tests through the existing root/Turbo test task;
- Jest and `ts-jest` are rejected as competing Backend runner dependencies;
- `pnpm validate:changed` passes;
- `pnpm validate:all` passes.

Supertest is evaluated separately when HTTP/API integration testing is initialized.

## Rollback considerations

Before Backend initialization, rollback is documentation-only.

After initialization, changing the runner requires a superseding approved
technical ADR and governed test-suite migration.

## Approval

**APPROVED — 2026-08-10.**

Explicit approval was provided by the Project Technical Owner.

Vitest is authorized as the single Backend unit/integration test runner for
future `apps/api` initialization, subject to existing Business-first governance,
dependency controls and validation gates.
