# NestJS Rule Adoption Matrix

## Scope and status contract

This matrix classifies every rule in the pinned source recorded by `NESTJS_UPSTREAM_SOURCE.md`. It adopts principles, not upstream code or dependency choices. The only allowed classifications are `ADOPTED`, `ADAPTED`, `CONDITIONAL`, `NOT_APPLICABLE`, and `REJECTED`.

| Status | Count |
|---|---:|
| ADOPTED | 13 |
| ADAPTED | 20 |
| CONDITIONAL | 6 |
| NOT_APPLICABLE | 1 |
| REJECTED | 0 |
| **Total classified** | **40** |
| **Unclassified** | **0** |

## Local rule coverage

| Local major rule | Upstream relationship | Project-specific boundary |
|---|---|---|
| Domain feature modules and dependency direction | Backed by feature modules, module sharing, circular-dependency avoidance, and single responsibility | Sports Academy layers each Business domain as domain, application, infrastructure, and presentation; upstream flat feature examples are not authoritative |
| Persistence ports and infrastructure repositories | Backed by repository, transaction, migration, and query-efficiency principles | Prisma and PostgreSQL replace every TypeORM entity, repository, decorator, query-runner, and migration example |
| Thin controllers and transport mapping | Backed by DTO, pipe, exception-filter, and interceptor principles | Business policy remains in Domain/Application; one REST/OpenAPI `/api/v1` contract and error envelope govern transport behavior |
| Cross-domain collaboration | Partly backed by event decoupling and focused interfaces | Public application interfaces, domain contracts/events, or orchestrating use cases apply inside the modular monolith; brokers and Nest microservice patterns are not authorized |
| Controlled exports, constructor injection, and `forwardRef()` review | Backed by module-sharing, DI, and circular-dependency rules | `forwardRef()` remains an architecture-review warning rather than an accepted design pattern |
| Configuration, logging, and lifecycle ownership | Backed by configuration, structured-logging, async-hook, and shutdown rules | Logging implementation remains ADR-gated; configuration validation must not silently select Joi or another library |
| Phase-aware deterministic validation | No upstream equivalent | Project-specific validation reports `SKIPPED` before API initialization and never scaffolds an application to satisfy governance |

## Architecture

| Upstream Rule | Category | Status | Project Adaptation | Project Rule | Reason |
|---|---|---|---|---|---|
| `arch-avoid-circular-deps` | Architecture | ADOPTED | Avoid circular imports; resolve ownership or use an approved public contract/event before considering `forwardRef()`. | `NESTJS_ENGINEERING_RULES.md` — Modules and DI | Directly matches the local circular-dependency and module-boundary policy. |
| `arch-feature-modules` | Architecture | ADAPTED | Organize by Business domain feature, then by domain/application/infrastructure/presentation layers. | `ARCHITECTURE_RULES.md` — Domain module structure | The feature principle fits, but the project's DDD layering replaces the upstream flat feature layout. |
| `arch-module-sharing` | Architecture | ADOPTED | Export only intentional public providers/contracts and import the owning module; never re-provide shared stateful providers. | `NESTJS_ENGINEERING_RULES.md` — Modules and DI | Directly supports controlled exports and consistent provider instances. |
| `arch-single-responsibility` | Architecture | ADOPTED | Prefer focused use cases and services; prohibit God services and catch-all Business services. | `ARCHITECTURE_RULES.md` — Backend Architecture | Direct fit with action-oriented use cases and bounded module ownership. |
| `arch-use-events` | Architecture | ADAPTED | Use project-approved domain events for decoupling inside the monolith; use BullMQ only for approved asynchronous jobs. No broker or event-emitter dependency is implied. | `ARCHITECTURE_RULES.md` — Module boundaries and Data Rules | The decoupling principle fits, while inter-service brokers and automatic dependency choices conflict with the modular monolith lock. |
| `arch-use-repository-pattern` | Architecture | ADAPTED | Define domain/application persistence ports and implement them with Prisma in infrastructure. | `NESTJS_ENGINEERING_RULES.md` — Persistence | Upstream TypeORM repositories and `InjectRepository` are prohibited; the boundary principle is retained. |

## Dependency Injection

| Upstream Rule | Category | Status | Project Adaptation | Project Rule | Reason |
|---|---|---|---|---|---|
| `di-avoid-service-locator` | Dependency Injection | ADOPTED | Dependencies are explicit constructor parameters; dynamic `ModuleRef.get()` requires a narrow framework justification. | `NESTJS_ENGINEERING_RULES.md` — Modules and DI | Directly improves boundary visibility and testability. |
| `di-interface-segregation` | Dependency Injection | ADOPTED | Keep ports small and capability-focused. | `NESTJS_ENGINEERING_RULES.md` — Modules and DI | Direct fit with focused domain/application ports. |
| `di-liskov-substitution` | Dependency Injection | ADOPTED | Every adapter and test double must honor its port's behavior and error contract. | `NESTJS_ENGINEERING_RULES.md` — Modules and DI | Directly supports interchangeable infrastructure adapters and reliable tests. |
| `di-prefer-constructor-injection` | Dependency Injection | ADOPTED | Use constructor injection for explicit required dependencies. | `NESTJS_ENGINEERING_RULES.md` — Modules and DI | Direct NestJS and project fit. |
| `di-scope-awareness` | Dependency Injection | ADOPTED | Default to singleton providers; request/transient scopes require demonstrated request isolation and performance review. | `NESTJS_ENGINEERING_RULES.md` — Modules and DI | Directly prevents accidental state leakage and scope propagation. |
| `di-use-interfaces-tokens` | Dependency Injection | ADOPTED | Use stable symbols or abstract classes for runtime port tokens. | `NESTJS_ENGINEERING_RULES.md` — Modules and DI | TypeScript interfaces do not exist at runtime; the rule directly fits port-based DI. |

## Error Handling

| Upstream Rule | Category | Status | Project Adaptation | Project Rule | Reason |
|---|---|---|---|---|---|
| `error-handle-async-errors` | Error Handling | ADOPTED | Await owned work and handle/report failures in events, jobs, hooks, and deliberately detached tasks. | `NESTJS_ENGINEERING_RULES.md` — Errors and asynchronous work | Directly protects process and job reliability. |
| `error-throw-http-exceptions` | Error Handling | ADAPTED | Domain/Application return or throw layer-neutral errors; presentation maps them to the common HTTP error envelope. | `ARCHITECTURE_RULES.md` — Dependency direction and Data Rules | Upstream permits HTTP exceptions in services, but project Domain/Application layers must remain transport-independent. |
| `error-use-exception-filters` | Error Handling | ADOPTED | Central filters map known and unknown failures to the stable error envelope and correlation ID. | `NESTJS_ENGINEERING_RULES.md` — Errors and asynchronous work | Direct fit with centralized, consistent error handling. |

## Security

| Upstream Rule | Category | Status | Project Adaptation | Project Rule | Reason |
|---|---|---|---|---|---|
| `security-auth-jwt` | Security | CONDITIONAL | Do not add JWT, Passport, refresh-token behavior, or token claims until an Authentication/Security ADR approves them. | `TECH_STACK_LOCK.md` — Technical Decisions Still Required | Authentication technology is deliberately unresolved. |
| `security-rate-limiting` | Security | CONDITIONAL | Apply governed abuse controls only after endpoint requirements, limits, identity basis, storage, and dependency choice are approved. | `NESTJS_ENGINEERING_RULES.md` — Security and validation | Upstream's `@nestjs/throttler` example is not an implicit dependency or Business-limit decision. |
| `security-sanitize-output` | Security | ADAPTED | Map explicit response DTOs and never expose Prisma/domain objects; sanitize HTML only where an approved content requirement and tool exist. | `NESTJS_ENGINEERING_RULES.md` — Security and validation | JSON APIs do not make all content safe, but `sanitize-html` and an HTML policy are not currently approved. |
| `security-use-guards` | Security | CONDITIONAL | Use guards for transport-level authentication/authorization after the Authentication ADR; application use cases still enforce authoritative permissions. | `ARCHITECTURE_RULES.md` — Cross-Cutting Boundaries | The guard mechanism fits NestJS, but its authentication implementation is gated. |
| `security-validate-all-input` | Security | ADAPTED | Validate transport DTOs/parameters at the presentation boundary and re-enforce Business invariants in Domain/Application. | `NESTJS_ENGINEERING_RULES.md` — Security and validation | The principle is adopted without silently locking class-validator/class-transformer or treating DTO checks as Business enforcement. |

## Performance

| Upstream Rule | Category | Status | Project Adaptation | Project Rule | Reason |
|---|---|---|---|---|---|
| `perf-async-hooks` | Performance | ADOPTED | Await lifecycle initialization, fail startup on required dependency/configuration failure, and avoid unowned background promises. | `NESTJS_ENGINEERING_RULES.md` — Runtime and operations | Direct lifecycle-safety fit. |
| `perf-lazy-loading` | Performance | CONDITIONAL | Use lazy module loading only after measured startup/cold-start need and boundary review. | `NESTJS_ENGINEERING_RULES.md` — Runtime and operations | It is not a default modular-monolith pattern and can obscure dependencies. |
| `perf-optimize-database` | Performance | ADAPTED | Use Prisma projections/includes deliberately, PostgreSQL indexes backed by migrations, pagination, and measured query plans. | `NESTJS_ENGINEERING_RULES.md` — Persistence | The query-efficiency principle fits; upstream TypeORM QueryBuilder examples do not. |
| `perf-use-caching` | Performance | ADAPTED | Use locked Redis only for justified cache/ephemeral data with ownership, TTL, invalidation, and safe fallback. | `ARCHITECTURE_RULES.md` — Data and Integration Rules | Caching is allowed but never Business truth, and CacheModule examples are not automatic dependency approval. |

## Testing

| Upstream Rule | Category | Status | Project Adaptation | Project Rule | Reason |
|---|---|---|---|---|---|
| `test-use-testing-module` | Testing | ADAPTED | Use Nest TestingModule where DI/module wiring is under test; use the one Backend runner selected at API initialization. | `TESTING_STRATEGY.md` — Tool Lock and Layers | The Nest utility is useful; upstream Jest syntax does not select the unresolved runner. |
| `test-e2e-supertest` | Testing | CONDITIONAL | Supertest may be reviewed as the Nest HTTP/API integration client during API initialization; it does not replace root Playwright E2E or choose the Backend runner. | `TESTING_STRATEGY.md` — Integration and End-to-end | No current project dependency/version approval exists, so the upstream example is not silently adopted. |
| `test-mock-external-services` | Testing | ADAPTED | Unit tests mock external boundaries; integration tests use controlled real infrastructure where the integration itself must be proven. | `TESTING_STRATEGY.md` — Layers | Upstream's blanket wording is too broad and its Jest/TypeORM examples are not authoritative. |

## Database and ORM

| Upstream Rule | Category | Status | Project Adaptation | Project Rule | Reason |
|---|---|---|---|---|---|
| `db-avoid-n-plus-one` | Database and ORM | ADAPTED | Prevent N+1 access with deliberate Prisma queries, batching, projections, and pagination. | `NESTJS_ENGINEERING_RULES.md` — Persistence | Principle retained; TypeORM relations/query-builder examples are replaced by Prisma. |
| `db-use-migrations` | Database and ORM | ADAPTED | Every schema change creates a new Prisma migration; never rewrite applied history or reset production. | `ARCHITECTURE_RULES.md` — Data and Integration Rules | Migration discipline directly fits, while TypeORM synchronize/migrations do not. |
| `db-use-transactions` | Database and ORM | ADAPTED | Multi-record invariants use Prisma transaction ownership inside infrastructure/application orchestration without leaking Prisma into Domain. | `NESTJS_ENGINEERING_RULES.md` — Persistence | Atomicity is adopted; TypeORM DataSource, QueryRunner, entities, and decorators are prohibited. |

## API Design

| Upstream Rule | Category | Status | Project Adaptation | Project Rule | Reason |
|---|---|---|---|---|---|
| `api-use-dto-serialization` | API Design | ADAPTED | Map Domain/Application results to explicit OpenAPI response DTOs; never return Prisma or Domain entities directly. | `NESTJS_ENGINEERING_RULES.md` — HTTP and API | Direct principle fit without silently locking class-transformer. |
| `api-use-interceptors` | API Design | ADAPTED | Use interceptors only for transport cross-cutting concerns; never hide Business policy, audit obligations, or unresolved logger selection in them. | `NESTJS_ENGINEERING_RULES.md` — HTTP and API | Mechanism is useful within stricter project boundaries. |
| `api-use-pipes` | API Design | ADAPTED | Use pipes for transport parsing/validation; keep Business transformations in use cases/domain and do not assume UUID before the ID ADR. | `NESTJS_ENGINEERING_RULES.md` — HTTP and API | Upstream examples otherwise risk deciding ID format or Business behavior. |
| `api-versioning` | API Design | ADAPTED | Use the locked URI strategy under `/api/v1`; breaking evolution follows contract and governance review. | `TECH_STACK_LOCK.md` — Locked Stack | Project already selected one strategy, so upstream strategy choice is narrowed. |

## Microservices

| Upstream Rule | Category | Status | Project Adaptation | Project Rule | Reason |
|---|---|---|---|---|---|
| `micro-use-health-checks` | Microservices | ADAPTED | A single deployable API may expose deployment-appropriate liveness/readiness checks after dependency and information-disclosure review; no microservice architecture is implied. | `NESTJS_ENGINEERING_RULES.md` — Runtime and operations | Health semantics are generally useful, while Terminus/Kubernetes dependencies are not automatically approved. |
| `micro-use-patterns` | Microservices | NOT_APPLICABLE | Do not use `@nestjs/microservices`, `MessagePattern`, `EventPattern`, Kafka, RabbitMQ, or distributed request/event topology. | `TECH_STACK_LOCK.md` — Backend architecture | The current architecture is a modular monolith; a future TECH-ADR would require a fresh review. |
| `micro-use-queues` | Microservices | ADAPTED | Use only BullMQ backed by Redis for approved background jobs with retries, idempotency, observability, and explicit synchronous-invariant boundaries. | `ARCHITECTURE_RULES.md` — Data and Integration Rules | The queue principle and technology match, but queues do not convert the system to microservices. |

## DevOps and Deployment

| Upstream Rule | Category | Status | Project Adaptation | Project Rule | Reason |
|---|---|---|---|---|---|
| `devops-use-config-module` | DevOps and Deployment | ADAPTED | Centralize and validate environment configuration under `apps/api/src/config`; do not scatter `process.env` or silently select Joi. | `CODING_STANDARDS.md` — Configuration and Secrets | The boundary fits; the exact Nest/config validation dependencies remain initialization decisions. |
| `devops-use-logging` | DevOps and Deployment | CONDITIONAL | Structured logs and correlation IDs are required, but no Pino, Winston, or other logger may be added before the logging ADR. | `TECH_STACK_LOCK.md` — Technical Decisions Still Required | Upstream's Pino example conflicts with the unresolved project choice. |
| `devops-graceful-shutdown` | DevOps and Deployment | ADOPTED | Enable graceful shutdown and close HTTP, Prisma, Redis, BullMQ, and other owned resources within deployment timeouts. | `NESTJS_ENGINEERING_RULES.md` — Runtime and operations | Direct production-safety fit without selecting new architecture. |
