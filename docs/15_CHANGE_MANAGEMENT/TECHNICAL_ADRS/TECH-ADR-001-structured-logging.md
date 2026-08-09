# TECH-ADR-001 — Structured Logging

- Status: APPROVED
- Date: 2026-08-09
- Decision owner: Project Technical Owner
- Technical approver: Project Technical Owner
- Supersedes / superseded by: None
- Related Change ID: CHG-TECH-ADR-001
- Business impact: N/A — NO BUSINESS IMPACT

## Context

The Backend technology stack is locked to NestJS and TypeScript, but the structured logging implementation is intentionally unresolved.

Current governance requires:

- one structured logging approach;
- correlation/request IDs;
- no production `console.log` strategy;
- separation between technical logs and canonical Business Audit records;
- no logger implementation may be introduced before an approved technical ADR.

Application initialization must not force an implementation agent to choose a logger implicitly.

## Existing solution

No application logging implementation currently exists because `apps/api` has not been initialized.

NestJS logging concepts are documented, but Pino, Winston, or another concrete implementation has not been approved.

## Problem

A concrete Backend logging approach must be selected before application initialization so that:

- bootstrap logging is consistent;
- HTTP request context is consistently correlated;
- application and infrastructure logs use one structured format;
- production logging does not rely on arbitrary `console.log`;
- agents do not introduce competing logging libraries;
- Business Audit records remain independent from technical observability logs.

## Constraints

The selected solution must:

1. integrate cleanly with NestJS;
2. produce structured machine-readable logs;
3. support correlation/request context;
4. work with the current Node.js and TypeScript stack;
5. avoid coupling Domain code to a logging framework;
6. avoid becoming the source of Business Audit truth;
7. avoid exposing credentials, authentication secrets, tokens, sensitive personal data, or unrestricted request bodies;
8. support normal local development without creating a second production logging architecture.

## Options considered

### Option A — NestJS built-in Logger only

Use NestJS built-in logging without a dedicated structured logging integration.

Advantages:

- minimal dependencies;
- native NestJS support;
- simple initialization.

Disadvantages:

- weaker structured JSON/request-context ergonomics for production observability;
- additional project-specific infrastructure would be needed for consistent correlation and structured output;
- greater risk of inconsistent logging conventions between HTTP, workers, and infrastructure adapters.

### Option B — Pino with `nestjs-pino`

Use Pino as the structured logging engine with `nestjs-pino` as the NestJS integration.

Advantages:

- structured JSON logging;
- mature Node.js logging model;
- request-scoped context and correlation integration;
- appropriate for HTTP/API and worker observability;
- keeps application code behind project-owned logging conventions while infrastructure owns the concrete adapter.

Disadvantages:

- introduces dedicated logging dependencies;
- requires redaction and transport configuration;
- framework-specific integration must remain outside Domain code.

### Option C — Winston

Use Winston with a NestJS integration.

Advantages:

- mature ecosystem;
- configurable transports;
- established NestJS usage patterns.

Disadvantages:

- introduces another logging abstraction with capabilities not currently required;
- no project-specific reason currently justifies selecting it over the simpler structured Pino path;
- would still require correlation/redaction conventions.

## Selected option

**APPROVED: Option B — Pino with `nestjs-pino`.**

If approved:

- Pino becomes the single Backend structured logging engine;
- `nestjs-pino` becomes the approved NestJS integration;
- application initialization must configure one root logging path;
- HTTP request/correlation context must use the approved integration;
- Domain code must not import Pino or `nestjs-pino`;
- Application code should not depend directly on Pino-specific APIs unless a project-owned technical abstraction explicitly requires it;
- Infrastructure/bootstrap owns concrete logger configuration.

This approval authorizes Pino and `nestjs-pino` for future governed Backend initialization. No package is installed by this ADR approval itself.

## Why

The proposed option provides structured JSON logging and request-context support while fitting the locked NestJS/Node.js stack without changing Business architecture.

It also allows logging implementation details to remain in technical infrastructure instead of leaking into Domain code.

## Consequences and trade-offs

If approved:

- Pino and `nestjs-pino` become approved Backend dependencies;
- competing production logger implementations require a later ADR;
- log shape and redaction rules must be centralized;
- local pretty-printing may be used only as a development presentation concern and must not define production log structure;
- technical logs remain operational evidence only;
- canonical Business Audit data remains governed by Business Rules and audit persistence.

## Migration impact

None.

The Backend application has not been initialized, so there is no existing logger to migrate.

## Affected apps/packages

Future impact:

- `apps/api`
- future worker/bootstrap infrastructure where applicable
- dependency governance
- technical validation

No Frontend application impact.

## Documentation impact

On approval, review/update as required:

- `docs/00_GOVERNANCE/TECH_STACK_LOCK.md`
- `docs/00_GOVERNANCE/ARCHITECTURE_RULES.md`
- `docs/00_GOVERNANCE/CODING_STANDARDS.md`
- `docs/00_GOVERNANCE/DEPENDENCY_RULES.md`
- `docs/00_GOVERNANCE/NESTJS_ENGINEERING_RULES.md`
- `apps/api/AGENTS.md`
- deterministic dependency validation where practical

## Security and operational impact

The implementation must provide centralized redaction policy.

Logs must not intentionally contain:

- passwords;
- access tokens;
- refresh tokens;
- authentication secrets;
- API secrets;
- full payment credentials;
- unrestricted sensitive request payloads.

Correlation/request IDs are technical observability identifiers and must not replace canonical Business Audit identity/history.

Production logs must be structured.

Human-readable development formatting must not change the canonical structured logging model.

## Test and validation plan

Before implementation completion:

- logger configuration typechecks;
- NestJS bootstrap uses the approved logger;
- request/correlation context is testable;
- sensitive fields are covered by redaction tests where applicable;
- competing direct logger dependencies are rejected by dependency governance;
- `pnpm validate:changed` passes;
- `pnpm validate:all` passes.

## Rollback considerations

Before Backend initialization, rollback is documentation-only.

After implementation, replacing Pino or `nestjs-pino` requires a superseding approved TECH-ADR and governed dependency migration.

## Approval

**APPROVED — 2026-08-09.**

Explicit approval was provided by the Project Technical Owner.

Implementation authority is granted subject to the existing Business-first change protocol, dependency governance, application-initialization controls, and validation gates.
