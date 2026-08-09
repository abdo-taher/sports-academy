# TECH-ADR-003 — Entity Identifier Strategy

- Status: APPROVED
- Date: 2026-08-10
- Decision owner: Project Technical Owner
- Technical approver: Project Technical Owner
- Supersedes / superseded by: None
- Related Change ID: CHG-TECH-ADR-003
- Business impact: N/A — NO BUSINESS IMPACT

## Context

The project must select one canonical entity identifier strategy before database initialization. No Prisma schema, database implementation, or identifier-generation dependency currently exists.

## Decision drivers

The strategy must work consistently across Domain/Application code, PostgreSQL, Prisma, REST/OpenAPI, contracts, tests, asynchronous work, and future integrations. It must allow IDs before persistence, avoid framework coupling in Domain code, and must not encode Business meaning or act as an authorization control.

## Options considered

### Option A — UUID v4

Standard, widely supported, application-generated, and compatible with PostgreSQL native `uuid`, but fully random insertion order provides less index locality.

### Option B — UUID v7

RFC-standard, time-ordered UUID; application-generated before persistence; compatible with PostgreSQL native `uuid`; suitable for distributed creation; API-friendly; better insertion locality than UUID v4. Creation-time ordering is partially observable and therefore must not be treated as secret.

### Option C — CUID2

Application-generated and distributed-friendly, but introduces a non-UUID convention without a current requirement and does not use PostgreSQL native UUID semantics.

### Option D — bigint / database identity

Compact and familiar, but identity is unavailable until persistence, couples creation to the database, and exposes sequential ordering.

## Selected option

**APPROVED: Option B — application-generated UUID v7.**

If approved:

- canonical Business entity IDs use UUID v7;
- the application generates IDs before persistence;
- PostgreSQL stores IDs using native `uuid`;
- Prisma represents canonical IDs as `String @db.Uuid`;
- Prisma/database defaults do not own canonical entity ID generation;
- REST/OpenAPI represents IDs as UUID-formatted strings;
- Domain code does not import Prisma or a concrete UUID library;
- generation is exposed through a narrow `IdGenerator` abstraction;
- semantic types such as `StudentId`, `BranchId`, and `SubscriptionId` may distinguish IDs in TypeScript while retaining the same UUID wire/storage representation;
- no separate public ID is introduced by default;
- IDs contain no Business meaning.

No dependency is installed by this proposal.

## Security

UUID v7 is an identifier, not a credential. Authorization always validates actor identity, permission, scope, and applicable Business Rules. Identifier unpredictability must never be used as an authorization mechanism.

## Public versus internal IDs

No separate public/internal identifier pair is introduced by default. A second external identifier requires a concrete integration, privacy, interoperability, or Business requirement and governed review.

## Database and API representation

PostgreSQL: native `uuid`.

Prisma:

`id String @id @db.Uuid`

REST/OpenAPI:

`type: string`, `format: uuid`.

Pure join/association tables may use schema-appropriate composite or relational keys when they do not represent an independent canonical entity.

## Business meaning

Canonical IDs must not encode Branch, Sport, role, lifecycle state, subscription state, year, permissions, user-facing sequence, or financial meaning. Human-facing reference numbers are separate Business attributes if ever required.

## Consequences

If approved, UUID v7 becomes the canonical Business entity ID format. Competing UUID/CUID/integer/random-string entity strategies require a superseding approved ADR.

## Migration impact

None. The database has not been initialized and no persisted production identifiers exist.

## Documentation impact

On approval, propagate to Tech Stack Lock, Architecture Rules, Coding Standards, NestJS rules, DDD principles, Database design, API specification, API agent instructions, Technical Open Questions, and deterministic validation where practical.

## Validation plan

After implementation, verify UUID v7 generation, pre-persistence identity, PostgreSQL/Prisma round-trip, API validation, Domain isolation from Prisma/UUID libraries, replaceable ID generation in tests, and changed/full project validation.

## Approval

**APPROVED — 2026-08-10.**

Explicit approval was provided by the Project Technical Owner.

Application-generated UUID v7 is authorized as the canonical Business entity identifier strategy, subject to existing Business-first governance and initialization gates.
