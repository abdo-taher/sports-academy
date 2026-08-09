# Dependency Rules

## Purpose

Dependencies are architecture decisions with maintenance and security cost. Convenience alone is not authorization to install one.

## Required Evaluation

Before adding a dependency, record the answers to:

1. Does an approved project tool already solve the problem?
2. Is the dependency necessary rather than a small project-owned implementation?
3. Is it actively maintained and compatible with the pinned runtime?
4. Does it duplicate an installed concern?
5. Does it alter architecture, persisted data, contracts, security or delivery?

If it replaces or competes with a locked technology, stop with `PROPOSED TECHNOLOGY CHANGE REQUIRES ADR`.

## Installation Rules

- Use pnpm only and run it from the repository root unless a documented workspace command requires a filter.
- Declare each dependency in the owning workspace; do not hide application dependencies in the root.
- Keep root dependencies limited to repository-wide tooling such as Turborepo.
- The official MCP TypeScript server SDK is approved only in `tools/validation-mcp`; MCP Inspector is approved only as root development tooling. Neither belongs in product applications.
- Pin exact versions. Do not use `^`, `~`, `*`, `latest` or unbounded tags.
- `workspace:*` is permitted for internal workspace packages.
- Commit the single root `pnpm-lock.yaml` in the same change.
- Never create `package-lock.json`, `yarn.lock`, `bun.lock`, `bun.lockb` or a nested pnpm lockfile.
- Never use broad upgrade-all or force-update commands without explicit scope.

## One Concern, One Tool

The following dual-tool combinations are prohibited unless an approved migration ADR defines the temporary overlap and removal date:

- TanStack Query + SWR or another server-state cache;
- React Hook Form + Formik or another form library;
- Zod + Yup or another schema library;
- Prisma + another ORM;
- Tailwind/shadcn + another component or CSS-in-JS system;
- Playwright + Cypress;
- BullMQ + another queue framework;
- two active date libraries, loggers or Backend test runners.

## Directly Prohibited Dependency Families

Without an approved superseding ADR, do not add packages for:

- npm, Yarn or Bun workspace management;
- Nx or Lerna;
- Redux, MobX, Zustand or SWR;
- Formik or Yup;
- styled-components, Emotion, Material UI, Ant Design, Chakra UI or Bootstrap;
- Sequelize, TypeORM, Drizzle or MikroORM;
- GraphQL or tRPC;
- RabbitMQ, Kafka, Bull or another queue implementation;
- Cypress;
- Auth.js, Clerk, Firebase Auth, Supabase Auth or a custom auth framework before the authentication decision;
- Winston or another competing Backend production logger while `TECH-ADR-001` remains active; Pino + `nestjs-pino` is the approved logging implementation.

Nest's approved internal adapter and transitive packages do not authorize a competing application architecture. Direct dependencies are still reviewed in context.

## Updates

### Patch/minor maintenance

A compatible security or maintenance update may proceed without a stack-replacement ADR when it:

- remains within the approved technology and supported major;
- is scoped to named packages;
- updates the lockfile;
- passes type, unit, integration and affected E2E checks;
- records migration notes and the cumulative Change Log result.

### Major or architectural update

A major version, framework migration, replacement library, new architectural concern or temporary dual-tool period requires `TECH-ADR-XXX` before package changes.

## Removal

Remove unused dependencies from the owning manifest and regenerate the lockfile. Verify imports, build tasks, configuration and documentation. Do not retain two tools merely because the migration finished incompletely.

## Automated Enforcement

`pnpm validate:dependencies` checks active direct declarations, lockfiles, version ranges and competing dependency families. `pnpm validate:structure` checks package-manager and repository drift. Passing them does not replace architectural review; they are the minimum automated guard.
