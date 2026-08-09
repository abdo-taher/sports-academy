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

## Validation

`pnpm validate:backend` uses the TypeScript Compiler API for deterministic import-boundary checks and conservative warnings for possible controller Business logic. It reports findings but never edits source or applies migrations. When `apps/api` is not initialized, implementation checks are `SKIPPED — IMPLEMENTATION NOT INITIALIZED`; stack and dependency governance still run.
