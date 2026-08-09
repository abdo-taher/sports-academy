DOWNSTREAM TECHNICAL DOCUMENT — BUSINESS TRUTH REMAINS CANONICAL

# Architecture Principles

## Current Architecture

The Sports Academy Platform is a strict-TypeScript pnpm/Turborepo monorepo with:

- a Next.js App Router Frontend;
- a NestJS Modular Monolith Backend;
- PostgreSQL through Prisma;
- Redis for cache, ephemeral coordination and BullMQ infrastructure;
- BullMQ for approved background work;
- REST APIs documented through OpenAPI.

The complete lock is authoritative in:

- `../00_GOVERNANCE/TECH_STACK_LOCK.md`;
- `../00_GOVERNANCE/ARCHITECTURE_RULES.md`;
- `../00_GOVERNANCE/DEPENDENCY_RULES.md`.

## Principles

1. **Business first:** Canonical Rules, lifecycles, decisions and Requirements precede technical design.
2. **Modular Monolith:** Business domains have enforceable module boundaries inside one Backend deployment. Distributed-service extraction is prohibited without `TECH-ADR` approval.
3. **Layer direction:** Presentation calls Application; Application uses Domain; Infrastructure implements ports.
4. **Explicit actions:** Governed state changes use named use cases and REST commands, not blind table CRUD.
5. **Authoritative persistence:** PostgreSQL preserves constraints, transactions, history and approved lifecycles. Redis is never the sole Business record.
6. **Contract ownership:** OpenAPI is the machine-readable API contract; browser contracts are generated/approved derivatives.
7. **Security authority:** Backend authorization is authoritative. Frontend checks improve UX only.
8. **Synchronous invariants:** Background work never weakens an invariant that must complete atomically.
9. **No duplicate tools:** One concern uses one locked tool and pattern.
10. **Observable but distinct:** Technical structured logs and Business Audit records are separate obligations.

## Unresolved Technical Choices

Authentication, object-storage provider, Backend test runner, logger, date utility, monetary representation and entity ID strategy remain explicitly gated in `TECH_STACK_LOCK.md`. They must not be selected from examples or common practice.
