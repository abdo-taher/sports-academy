# Testing Strategy

## Authority

This file locks test tooling, placement and minimum coverage behavior. Expected Business outcomes always come from canonical Rules, lifecycles, Requirements and permissions. QA must report `BUSINESS/TECHNICAL SPECIFICATION GAP` when an expected result is undocumented.

## Tool Lock

| Scope | Approved tool | Status |
|---|---|---|
| Frontend unit and hook tests | Vitest | Locked |
| Frontend component tests | React Testing Library on Vitest | Locked |
| Browser end-to-end | Playwright | Locked |
| Backend unit/integration | Vitest | `LOCKED — TECH-ADR-002 APPROVED` |

Cypress and competing frontend test runners are prohibited. Vitest is the single approved Backend unit/integration runner under `TECH-ADR-002`; Jest, `ts-jest` and competing Backend runners require a superseding approved ADR.

## Test Placement

- Unit tests live next to implementation where practical: `freeze-subscription.use-case.spec.ts` beside its use case.
- Application/API integration tests use the owning API workspace's consistent test location.
- Browser E2E tests live under root `tests/e2e/`.
- Do not scatter E2E suites through unrelated feature folders.
- Test fixtures and factories belong to the narrowest reusable test boundary; production data is prohibited.

## Required Coverage

Every Business-changing implementation tests the applicable:

- happy path;
- negative path;
- authentication and authorization;
- input validation;
- boundary values;
- state transition;
- transaction/invariant behavior;
- audit and history preservation;
- cross-domain effect;
- API error contract;
- frontend loading, empty, error and permission states.

A happy path alone does not implement a Business Rule.

## Layers

### Domain/unit

Exercise entities, value objects, policies and use cases without transport or persistence where possible. Protect canonical invariants and transitions directly.

### Integration

Exercise repositories, PostgreSQL constraints, transactions, Redis/BullMQ adapters, module interfaces and OpenAPI behavior with controlled infrastructure. Do not replace important integration proof entirely with mocks.

### Frontend component

Test user-observable behavior and accessibility through React Testing Library. Avoid tests coupled to implementation details.

### End-to-end

Use Playwright for critical role journeys and cross-layer workflows. E2E expectations must trace to Requirements and Business Rules, not invented UI behavior.

## Contract and Migration Checks

- Validate generated frontend contract artifacts against the approved OpenAPI source.
- Test stable error codes and the shared error envelope.
- Verify each database migration forward path and relevant data/invariant behavior.
- Never validate production safety by running destructive reset commands against production.

## CI Quality Gate

Pull requests run, as applicable:

1. `pnpm check:structure`;
2. formatting/lint checks;
3. TypeScript checks;
4. unit/component tests;
5. Backend integration/API tests;
6. build;
7. affected Playwright suites;
8. security/dependency checks.

Failures are fixed or explicitly governed; tests are not skipped or weakened to obtain a green pipeline.

## Traceability

Tests cite applicable Rule and Requirement IDs where the behavior is governed. Use `docs/12_QA/CURRENT_RELEASE_RULE_QA_SCENARIOS.md` for current Business scenario coverage. That file does not select technical test tools; this file does.
