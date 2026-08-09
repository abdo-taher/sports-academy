# Coding Standards

## Implementation Preflight

Before generating non-trivial code, state or identify:

- owning Business Domain;
- applicable Business Rule and Requirement IDs;
- target application and module/feature;
- approved technology;
- approved destination path;
- authorization, validation, audit/history and test impact.

Missing Business behavior is a specification gap, not permission to improvise. A technology conflict requires an ADR.

## TypeScript

- Use TypeScript with `strict: true`.
- JavaScript application files are prohibited. A JavaScript file required by external tooling must be a recognized configuration file and documented.
- Do not use casual `any`; use `unknown` plus narrowing.
- Do not use `@ts-ignore` without a nearby justification and tracked removal condition.
- Do not weaken strict checks locally to make compilation pass.
- Prefer explicit public contracts at module and package boundaries.

## Naming

| Item | Convention | Example |
|---|---|---|
| Folders | kebab-case | `session-feedback/` |
| TypeScript files | kebab-case | `freeze-subscription.use-case.ts` |
| React component symbols | PascalCase | `StudentStatusBadge` |
| Classes | PascalCase | `ActivateSubscriptionUseCase` |
| Functions/variables | camelCase | `resolveAttendanceFunding` |
| True constants | UPPER_SNAKE_CASE | `DEFAULT_PAGE_SIZE` |
| Types/interfaces | PascalCase | `StudentResponse` |

Avoid vague or temporal names such as `helper.ts`, `utils2.ts`, `service-new.ts`, `common2.ts`, `final.ts`, `Component1.tsx` and `test2.tsx`.

Backend suffixes are consistent: `.entity.ts`, `.repository.ts`, `.controller.ts`, `.dto.ts`, `.mapper.ts`, `.module.ts`, `.use-case.ts`. Frontend examples include `student-card.tsx`, `use-student.ts`, `students.api.ts`, `student.schema.ts` and `student.types.ts`.

## Imports and Boundaries

- Use configured aliases for stable cross-area imports; avoid deep `../../../../` traversal.
- Do not create circular dependencies.
- Import another feature or module only through its approved public export/port.
- Generic UI and shared packages must not import feature or Business implementations.
- A Backend module must not bypass another module by querying its tables.

## Backend Code

- Controllers receive requests, obtain authentication context, validate DTOs, call application use cases and map responses.
- Business policy belongs in Domain/Application code, never controllers, Prisma queries, ORM hooks or mappers.
- Use action-oriented use cases for commands; do not build an 80-method generic service.
- Queries do not mutate Business state.
- Server validation is authoritative even when the frontend validates the same input for UX.
- Multi-record invariants use explicit transaction boundaries.
- Persistence code implements ports; it does not decide Business policy.
- Use explicit Business command routes rather than generic status patches when the action is governed.

## Frontend Code

- Route files orchestrate feature UI and data; they do not own major Business logic.
- Consume API data through the approved client, feature API layer and TanStack Query hook.
- Use Zod schema -> React Hook Form -> UI fields -> API command for significant forms.
- Frontend permission checks improve UX only; Backend enforcement is mandatory.
- Use Tailwind and the canonical design tokens. Avoid normal inline-style objects, CSS-in-JS and random per-component CSS files.
- Add a project-owned component by composing shadcn primitives when no approved primitive exists; document reusable components in the UI system.
- Use centralized semantic tokens for colors, spacing, radius, typography, shadows and Business status meanings.

## Configuration and Secrets

- Document technical environment variables in the root `.env.example`.
- Never commit secrets or real credentials.
- Validate environment variables at application startup through `apps/api/src/config/` and the corresponding frontend config boundary.
- Do not read `process.env` throughout Business/application code.
- Technical environment configuration does not replace canonical Business operational configuration or `CFG-*` rules.

## Logging, Errors and Audit

- Backend structured logging uses Pino with `nestjs-pino` as approved by `TECH-ADR-001`.
- Concrete Pino configuration belongs to Backend bootstrap/infrastructure; Domain code must not import Pino or `nestjs-pino`.
- Do not use random production `console.log` statements.
- Include correlation/request identifiers in technical errors and important events.
- API modules use the common error envelope defined by architecture governance.
- Technical logs are not Business Audit records. A console message never satisfies an audit requirement.

## Time, Money, IDs and Lifecycle

- Store system timestamps consistently in UTC and convert for the applicable Business/Branch display timezone.
- Do not manipulate date strings ad hoc or add multiple date libraries.
- Use an approved exact monetary representation; do not rely on unsafe floating-point arithmetic.
- Currency is explicit where required and is not hardcoded across random files.
- Canonical Business entity IDs use application-generated UUID v7 as approved by `TECH-ADR-003`.
- PostgreSQL persists canonical entity IDs as native `uuid`; APIs represent them as UUID-formatted strings.
- Domain code must not import Prisma or a concrete UUID-generation library.
- IDs are technical identity only: never encode Business meaning and never rely on identifier secrecy for authorization.
- Do not add generic `deletedAt` fields. Implement the canonical lifecycle for the owning domain; Archive is not delete.

## Completion

Code is complete only when applicable types, linting, tests, contracts, migrations, documentation, structure validation and stale scans pass together.
