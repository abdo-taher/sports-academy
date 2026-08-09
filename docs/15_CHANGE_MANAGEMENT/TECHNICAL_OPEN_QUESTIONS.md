# Technical Open Questions

These questions were preserved from the previous mixed open-question register. They are not business decisions and do not have authority over business behavior.

| ID | Technical Question | Affected Technical Areas | Status |
|---|---|---|---|
| TQ-001 | Which concurrency and locking mechanism should protect high-demand group registration? | Architecture, Database, API | OPEN |
| TQ-002 | What offline synchronization strategy should coach attendance use where connectivity is unavailable? | Mobile, Attendance API, Data synchronization | OPEN |
| TQ-003 | Which authentication technology will implement the already-canonical identity, role and permission model? | Security, API, Web | ADR REQUIRED BEFORE AUTH IMPLEMENTATION |
| TQ-004 | Which single Backend test runner will be used? | API, QA, CI | RESOLVED — Vitest; `TECH-ADR-002` APPROVED; Jest/Vitest mixing prohibited |
| TQ-005 | Which object-storage provider will sit behind the provider-neutral storage abstraction? | Infrastructure, Documents, API | ADR REQUIRED BEFORE PROVIDER COUPLING |
| TQ-006 | Which structured logging implementation will be used consistently? | API, workers, observability | RESOLVED — Pino + `nestjs-pino`; `TECH-ADR-001` APPROVED |
| TQ-007 | Which single date utility strategy will be used? | Web, API | ADR REQUIRED BEFORE ADDING A DATE LIBRARY |
| TQ-008 | Which exact monetary representation will safely persist and calculate financial values? | Payment, Subscription, Database, API | RESOLVED — exact decimal arithmetic + PostgreSQL NUMERIC + decimal-string API transport; `TECH-ADR-004` APPROVED |
| TQ-009 | Which one entity identifier strategy will be used across domains? | DDD, Database, API, contracts | RESOLVED — application-generated UUID v7 + PostgreSQL native `uuid`; `TECH-ADR-003` APPROVED |
