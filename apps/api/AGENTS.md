# Backend Agent Instructions

Before Backend work:

1. read the root `AGENTS.md`;
2. read `docs/00_GOVERNANCE/TECH_STACK_LOCK.md`;
3. read `docs/00_GOVERNANCE/ARCHITECTURE_RULES.md` and `DEPENDENCY_RULES.md`;
4. read `docs/00_GOVERNANCE/NESTJS_ENGINEERING_RULES.md`;
5. read the relevant Domain Rules and Lifecycle;
6. read Requirements;
7. read DDD;
8. read the Database model;
9. read API behavior;
10. read the Permission Catalog.

Backend code must enforce approved Business invariants. Controllers do not own Business Rules, and code must never invent Business behavior. If implementation reveals missing Business behavior, stop implementation and return to Business documentation through the change protocol. Preserve audit and history requirements, and add or update tests for changed behavior.

The Backend lock is NestJS + strict TypeScript + Modular Monolith + PostgreSQL + Prisma + Redis/BullMQ + REST/OpenAPI. Use the fixed domain module structure and dependency direction in `ARCHITECTURE_RULES.md`; do not introduce a different framework, ORM, queue, API style or distributed-service architecture.

`NESTJS_ENGINEERING_RULES.md` is the runtime engineering authority. Its pinned upstream source and rule-by-rule adoption matrix are audit/reference records; agents do not need to browse GitHub during ordinary Backend work.

Before a feature, follow:

```text
Business Domain -> Requirements -> DDD -> Database -> API -> Security -> Implementation
```

Use explicit application use cases, thin controllers, server-authoritative validation and tests from `TESTING_STRATEGY.md`. Authentication, the Backend test runner, monetary representation and entity IDs remain blocked where `TECH_STACK_LOCK.md` requires a technical decision.

If requested work conflicts with the lock, stop with `TECH STACK CONFLICT — ADR REQUIRED`.
