DOWNSTREAM TECHNICAL DOCUMENT — BUSINESS TRUTH REMAINS CANONICAL

# DevOps, Deployment and Infrastructure

## Locked Delivery Baseline

- Node.js `22.22.2` in local development, CI, Docker and deployment.
- pnpm `11.0.9`, one root workspace and one committed lockfile.
- Turborepo `2.10.7` for build/test/task orchestration.
- Deployable applications: `apps/web` and `apps/api` plus BullMQ worker processes from the API codebase.
- PostgreSQL is the primary database; Redis supplies cache/ephemeral coordination and BullMQ infrastructure.

Versions are controlled by `../00_GOVERNANCE/TECH_STACK_LOCK.md`. Infrastructure must not substitute a different runtime, package manager, database or queue.

## Environments and Configuration

Use separate development, staging and production environments. Document technical variables in root `.env.example`, inject secrets through the deployment environment and validate variables at application startup. Never place Business policy values in environment variables merely for convenience.

Production data, credentials and secret material are prohibited from source control and test fixtures.

## CI Pipeline

Pull requests run, as applicable:

```text
install with frozen pnpm lockfile
  -> pnpm check:structure
  -> lint/format
  -> strict TypeScript checks
  -> unit/component/integration/API tests
  -> build
  -> affected Playwright E2E
  -> dependency/security checks
```

Deployment follows successful CI, environment approval, migrations, health verification and a documented rollback path. Do not weaken or skip gates to make a release pass.

## Containers and Processes

Containers, when introduced, use the pinned Node runtime and frozen lockfile. Keep web/API processes stateless. Run BullMQ workers as separately scalable processes from the same Modular Monolith codebase. A scheduler may enqueue approved jobs through the same infrastructure.

Do not introduce PHP/Laravel containers, MySQL, a competing queue, Kubernetes or a microservice platform as an assumed phase. New infrastructure of architectural significance requires an ADR.

## Database Delivery

- Apply new Prisma migrations; never modify an applied migration.
- Back up and verify recovery appropriate to the environment before risky production migrations.
- Never run destructive reset against production.
- Monitor migration outcome and application health; rollback follows a tested plan that preserves data integrity.

## Redis and BullMQ

Redis is not authoritative Business persistence. Monitor availability, memory and eviction policy. BullMQ jobs use controlled retry, idempotency where applicable, failure visibility and dead-letter/failure handling appropriate to the selected pattern. Synchronous invariants remain inside the request/transaction path.

## Storage and Providers

Use a provider-neutral object-storage abstraction for binary data. Exact cloud, storage, hosting, container orchestration, monitoring and backup products are not silently selected from examples; use configuration or the applicable ADR.

## Observability and Audit

Use one structured logging implementation after it is selected, include correlation IDs, and centralize error/health/worker visibility. Technical logs never replace canonical Business Audit records.

## Scale and Resilience

Scale stateless API/web replicas and BullMQ workers within the Modular Monolith. PostgreSQL read replicas/partitioning, Redis topology, CDN, multi-region or container orchestration require measured need and governed decisions. Scaling does not imply microservice extraction.
