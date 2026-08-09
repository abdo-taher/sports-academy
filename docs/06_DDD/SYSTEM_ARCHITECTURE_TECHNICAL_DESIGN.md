DOWNSTREAM TECHNICAL DOCUMENT — BUSINESS TRUTH REMAINS CANONICAL

# System Architecture Technical Design

## Scope

This document projects the locked architecture into the delivery layers. It does not define Business behavior. Use `CURRENT_RELEASE_DOMAIN_MODEL.md`, canonical Domain Rules/lifecycles and Requirements for behavior.

## System Shape

```text
Browser
  -> apps/web: Next.js App Router
  -> REST /api/v1 contract
  -> apps/api: NestJS Modular Monolith
       -> domain/application modules
       -> Prisma -> PostgreSQL
       -> Redis -> BullMQ workers
       -> provider-neutral external integration adapters
```

The current approved architecture is a Modular Monolith. Microservices, a separate API gateway and distributed data ownership are not approved evolution phases. Any extraction requires an explicit architecture ADR based on measured need.

## Backend Layers

| Layer | Responsibility | Must not own |
|---|---|---|
| Presentation | HTTP, auth context, DTO validation, response/error mapping | Business policy |
| Application | commands, queries, use cases, orchestration, transaction intent | Prisma models or transport logic |
| Domain | entities, value objects, policies, events and ports | NestJS, HTTP, Prisma, Redis or BullMQ |
| Infrastructure | persistence, queue, cache, storage and integration adapters | Canonical Business decisions |

Dependency direction and the fixed module tree are canonical in `../00_GOVERNANCE/ARCHITECTURE_RULES.md`.

## Domain Modules

Each substantial current Business domain maps to one Nest module with a stable public boundary. A module does not read another module's tables directly. Cross-domain orchestration uses an application interface, public contract or domain event while preserving synchronous transaction requirements.

Events are internal architectural signals, not an automatic distributed-event architecture. BullMQ is used only when asynchronous completion is appropriate, such as communication dispatch, report generation or integration retry.

## Persistence

- One PostgreSQL database initially, with logical ownership by module.
- Prisma schema/migrations live under `apps/api/prisma/`.
- The Data/DDD model determines persistence; UI fields do not.
- Critical uniqueness, relationship, history and ledger invariants use database constraints and transactions where appropriate.
- A Business lifecycle controls archive/retention semantics. No generic soft-delete policy is approved.

## API and Contracts

- REST with one `/api/v1` strategy.
- OpenAPI is the machine-readable source for generated/approved client artifacts.
- Governed actions use explicit command endpoints.
- One stable error envelope includes an error code, readable message, optional field errors and correlation/request ID.
- Database model, Domain entity, API contract and UI view model remain distinct.

## Frontend

App Router route files compose features. Features own their API adapters, hooks, schemas, types and components. TanStack Query owns server state; Next.js search parameters own shareable URL state; React Hook Form/Zod own forms; React state owns local interaction state. A global store requires an ADR.

## Cross-Cutting Design

- Environment variables are centralized, documented and validated at startup.
- Business configuration is not stored as arbitrary environment configuration.
- System timestamps are stored consistently in UTC and displayed using the applicable Business/Branch timezone.
- Technical logs use one structured approach once selected; Business Audit follows canonical audit Rules.
- Authentication and other open choices remain blocked by `TECH_STACK_LOCK.md`.

## Scale

Scale the stateless web/API processes, BullMQ workers, PostgreSQL and Redis within the Modular Monolith deployment model. Read replicas, partitioning, CDN, container orchestration or other infrastructure additions require evidence and the appropriate technical decision; they do not authorize microservices.

## Validation

Run `pnpm check:structure` and the applicable test/build pipeline. A technology conflict is reported as `TECH STACK CONFLICT — ADR REQUIRED`.
