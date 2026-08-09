# NestJS Engineering Rules

## Scope

These rules govern `apps/api` after initialization. They apply after canonical Business Truth, Requirements, the Technology Stack Lock, and Architecture Rules. They create no Business behavior.

## Module and layer boundaries

- Business modules live under `apps/api/src/modules/<domain>/` and use `domain`, `application`, `infrastructure`, and `presentation/http` ownership where those layers are needed.
- Dependency direction is `presentation -> application -> domain`; infrastructure implements domain/application ports.
- Domain code must not import NestJS presentation APIs, Prisma, Redis, BullMQ, HTTP, or another module's infrastructure internals.
- Application code uses repository ports and must not return ORM models as domain results.
- Controllers live under `presentation/http/controllers`, remain thin, validate/map transport data, call an application use case, and map the response.
- Prisma access belongs to infrastructure persistence/repository adapters. Controllers and presentation files must never access Prisma directly.

## Structural conventions

- Modules use `<domain>.module.ts`; application operations use an action-oriented `*.use-case.ts` convention.
- Direct `process.env` access is limited to approved configuration/bootstrap ownership.
- `forwardRef()` is an architecture-review warning and requires justification; it is not an automatic failure.
- Cross-domain collaboration uses an approved public application interface, domain contract/event, or orchestrating use case—not another module's private infrastructure.
- Nest microservice bootstrap, GraphQL, another ORM, or another transport requires an approved `TECH-ADR`.

## Modules and dependency injection

- Use constructor injection with explicit dependencies. Runtime ports use stable symbols or abstract classes because TypeScript interfaces are erased.
- Keep ports capability-focused, and require every adapter/test double to honor the full port and error contract.
- Default providers to singleton scope. Request or transient scope requires an explicit isolation need and performance review.
- Export only intentional public providers/contracts and import the owning module; never re-provide a shared stateful provider in consuming modules.
- Service-locator access through `ModuleRef.get()` is prohibited except for a narrow, documented framework need. Resolve ordinary dependencies statically.
- Circular dependencies must be removed through ownership, a public port/contract, or an approved domain event. `forwardRef()` remains a review warning, not the default remedy.

## HTTP and API

- Transport DTOs and parameters are validated/mapped before an application use case is called. Business invariants are re-enforced in Domain/Application and never delegated only to DTO decorators or pipes.
- Map application results to explicit OpenAPI response DTOs. Never return Prisma models or Domain entities from controllers.
- Domain/Application errors remain transport-neutral. A centralized exception filter maps them to the stable API error envelope and correlation/request ID.
- Interceptors and pipes may own transport cross-cutting behavior or parsing; they must not hide Business policy, Business audit, persistence, or authorization decisions.
- The only current REST version strategy is the locked `/api/v1` URI strategy. Do not infer an ID format from an upstream `ParseUUIDPipe` example before the ID decision.

## Security and validation

- Backend authorization is authoritative. Nest guards are the transport enforcement mechanism only after the Authentication/Security ADR selects the authentication implementation; application use cases still enforce governed permissions.
- JWT, Passport, refresh tokens, token claims, and upstream authentication examples are not approved until that ADR exists.
- Rate limiting requires approved endpoint requirements, identity basis, limits, storage, and dependency review; an upstream throttler example does not select those values or tools.
- Explicit response mapping prevents accidental data exposure. HTML sanitization requires an actual content requirement, an approved policy, and an approved dependency; never add a sanitizer speculatively.

## Persistence and performance

- Repository principles are implemented as Domain/Application ports with Prisma adapters under infrastructure. TypeORM, `InjectRepository`, TypeORM entities, `DataSource`, and `QueryRunner` are prohibited.
- Use Prisma transactions for multi-record atomic operations without leaking Prisma into Domain/Application contracts. Every schema change creates a new Prisma migration; never rewrite applied migration history.
- Prevent N+1 and over-fetching with deliberate Prisma projections/includes, batching, pagination, PostgreSQL indexes, and measured query plans.
- Redis caching is allowed only for justified cache/ephemeral data with ownership, TTL, invalidation, and safe fallback. Cache is never Business truth.

## Testing

- Use Nest TestingModule when Nest DI/module wiring is part of the test. Test syntax must use the single Backend runner selected during API initialization; upstream Jest examples do not make that selection.
- Unit tests mock external boundaries. Integration tests use controlled real infrastructure when persistence, queue, module, or HTTP integration is the behavior under test.
- Supertest is conditional pending API initialization review as a Nest HTTP/API integration client. It does not replace Playwright browser E2E or select the Backend test runner.

## Errors and asynchronous work

- Await owned asynchronous work and explicitly handle/report failures in lifecycle hooks, events, BullMQ processors, and deliberately detached tasks.
- BullMQ/Redis is the only approved background-job path. Jobs require explicit retry, idempotency, observability, and failure behavior, and must not defer an invariant that must complete synchronously.

## Runtime and operations

- Centralize and validate environment configuration under `apps/api/src/config/`; direct `process.env` access remains limited to configuration/bootstrap ownership.
- Await required lifecycle initialization and fail startup on invalid configuration or unavailable required dependencies.
- Lazy module loading requires measured startup/cold-start need and architecture review; it is not a default modular-monolith pattern.
- A single deployable API may expose deployment-appropriate liveness/readiness checks after dependency and information-disclosure review. This does not authorize Nest microservices, Terminus, or Kubernetes dependencies automatically.
- Enable graceful shutdown and close HTTP, Prisma, Redis, BullMQ, and other owned resources within deployment timeouts.
- Backend unit/integration testing uses Vitest as approved by `TECH-ADR-002`.
- Nest `TestingModule` remains the approved Nest module/DI test mechanism where appropriate; it does not select or replace the test runner.
- Domain tests should remain framework-light where possible.
- Jest, `ts-jest` or another competing Backend runner requires a superseding approved ADR.
- Supertest, if later approved for HTTP integration tests, is a test client and not a second runner.
- Structured logging is approved through `TECH-ADR-001`: use Pino with `nestjs-pino` for Backend technical logging.
- Concrete logger configuration belongs to bootstrap/infrastructure; Domain code must not import Pino or `nestjs-pino`.
- Correlation/request IDs and centralized sensitive-data redaction are required. Technical logs remain separate from canonical Business Audit records.
- Winston or another competing production logger requires a superseding approved technical ADR.

## Upstream provenance

The advisory source is pinned in `NESTJS_UPSTREAM_SOURCE.md`, and every reviewed upstream rule is classified in `NESTJS_RULE_ADOPTION_MATRIX.md`. Those records provide audit traceability only. Local governance has higher authority, and future upstream changes never synchronize automatically.

## Validation

`pnpm validate:backend` uses the TypeScript Compiler API for deterministic import-boundary checks and conservative warnings for possible controller Business logic. It reports findings but never edits source or applies migrations. When `apps/api` is not initialized, implementation checks are `SKIPPED — IMPLEMENTATION NOT INITIALIZED`; stack and dependency governance still run.
