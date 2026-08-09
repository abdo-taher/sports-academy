DOWNSTREAM TECHNICAL DOCUMENT — BUSINESS TRUTH REMAINS CANONICAL

# Testing Strategy and QA Framework

## Canonical Routing

Technical test tooling and placement are canonical in `../00_GOVERNANCE/TESTING_STRATEGY.md`. Business scenarios are canonical derivatives in `CURRENT_RELEASE_RULE_QA_SCENARIOS.md`, backed by owning Rules, lifecycles, Requirements and permissions.

## Locked Tools

- Frontend unit/hooks: Vitest.
- Frontend components: React Testing Library on Vitest.
- Browser end-to-end: Playwright.
- Backend unit/integration: Vitest, approved by `TECH-ADR-002`; Jest and competing Backend runners are not permitted without a superseding ADR.

Cypress, Jest, `ts-jest`, PHPUnit, Pest and other competing application test runners are not approved for this stack where they conflict with the locked runner. Backend API validation runs through Vitest rather than a separate competing test architecture.

## Coverage Model

Use the smallest effective test layer while protecting cross-layer behavior:

- Domain/unit tests for Rules, policies, value objects and use cases;
- integration tests for PostgreSQL/Prisma, transactions, Redis/BullMQ, adapters and module interfaces;
- API tests for authorization, validation, stable errors and OpenAPI behavior;
- component tests for observable accessible interaction states;
- Playwright E2E for critical role journeys and cross-layer workflows.

Every Business-changing feature covers applicable happy, negative, authorization, validation, boundary, transition, audit/history and cross-domain invariant paths. A happy path alone is insufficient.

## QA Governance

```text
Business Rule -> Requirement -> API/UX behavior -> Test
```

QA never creates policy. If the expected result is missing, report `BUSINESS/TECHNICAL SPECIFICATION GAP`. Production data is prohibited in tests; use controlled factories and fixtures.

## Release Gate

Run structure validation, static checks, strict types, unit/component tests, integration/API tests, build, affected Playwright suites and security checks. Do not skip or weaken a failed test to approve release.
