DOWNSTREAM TECHNICAL DOCUMENT — BUSINESS TRUTH REMAINS CANONICAL

# Database Design and Data Model

## Authority

Use `CURRENT_RELEASE_DATA_INTEGRITY_MODEL.md` for the current Rule-derived integrity projection and `../06_DDD/CURRENT_RELEASE_DOMAIN_MODEL.md` for Domain ownership. This file locks persistence implementation choices without inventing tables or fields.

## Stack and Location

- Primary database: PostgreSQL.
- ORM/migration tool: Prisma.
- Schema and migration history: `apps/api/prisma/`.
- Schema files may be organized by logical domain where the initialized Prisma version supports it.
- UI fields and TypeScript classes do not automatically become database tables.

## Integrity

Critical invariants use the appropriate combination of:

- PostgreSQL uniqueness and check constraints;
- foreign keys and relationship ownership;
- application validation;
- atomic transactions;
- immutable/historical references;
- explicit ledger and audit records required by canonical Rules.

Prisma convenience never justifies weaker PostgreSQL integrity or cross-module table access.

## Migrations

- Every schema change creates a new migration.
- Never manually edit production schema, modify an applied migration, delete migration history casually or run a destructive production reset.
- Verify the forward migration and affected data/invariants before release.
- Migration ownership follows the module that owns the persisted concept.

## Transactions

Operations that must preserve several related records atomically use an explicit transaction boundary derived from the Business invariant. Examples may include activation with financial records, attendance with ledger movement, reversals and effective transfer changes only where current canonical behavior requires them.

## Representation Boundaries

```text
PostgreSQL/Prisma model != Domain entity != API contract != UI view model
```

Map explicitly. Never expose Prisma models directly to the Frontend or place them in `packages/business-types`.

## Pre-Initialization Gates

The entity identifier strategy and exact monetary representation require an approved technical decision before database initialization. Authentication/storage choices remain separate gates. Missing choices must not be silently filled.
