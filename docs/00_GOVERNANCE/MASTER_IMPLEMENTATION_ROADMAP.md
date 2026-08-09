# Sports Academy Platform — Master Implementation Roadmap

> **Document role:** Canonical implementation sequencing and delivery-control roadmap
> **Audience:** Product, Business Analysis, Architecture, Backend, Frontend, Database, QA, DevOps, Security, AI coding agents, reviewers, and future maintainers
> **Status:** ACTIVE
> **Baseline date:** 2026-08-10
> **Current implementation baseline:** `main` / `origin/main` at `694ad7be2b0e7498af7e49f1409415466d5af8ca`
> **Business baseline:** 114 Business Rules / 40 approved Business Decisions / 0 open Business Decisions
> **Current completed phase:** Phase 1 — Governed Application Initialization
> **Next phase:** Phase 1.5 — RTK Integration & AI Efficiency Foundation
> **Business impact of this roadmap:** NONE — this document sequences approved implementation work; it does not create or modify Business behavior.

---

## 0. Purpose

This document is the **single implementation roadmap** for the Sports Academy Platform from the current governed application foundation through production release and controlled post-production evolution.

It exists to prevent five common failure modes:

1. implementation beginning before Business behavior is approved;
2. architecture drifting independently across teams or AI agents;
3. unresolved technical questions being silently converted into implementation assumptions;
4. parallel development increasing merge speed while decreasing correctness;
5. code, API, database, UX, tests, and Business documentation becoming inconsistent over time.

This roadmap does **not** replace canonical Business documents, approved Business Decisions, Business Rules, technical ADRs, architecture rules, dependency rules, testing strategy, security rules, or change-management protocols.

It defines **when** implementation work may happen, **in what order**, **under which gates**, and **what evidence is required before a phase is considered complete**.

---

# 1. Authority Model

## 1.1 Source-of-truth hierarchy

When instructions or artifacts disagree, use the following authority order:

1. **Approved Business Decisions**
2. **Canonical Business Rules**
3. **Canonical Business Requirements / approved Business lifecycle documentation**
4. **Governance and Business Gate rules**
5. **Approved technical ADRs**
6. **Architecture / dependency / testing / security standards**
7. **This Master Implementation Roadmap**
8. **Application implementation**
9. **Generated artifacts**
10. **AI-agent suggestions**
11. **Developer assumptions**

Lower layers must never silently override higher layers.

---

## 1.2 Fundamental rule

> **Code implements Business Truth. Code does not create Business Truth.**

If implementation discovers an undefined Business behavior:

```text
Implementation ambiguity
        ↓
STOP implementation of that behavior
        ↓
Classify the question
        ↓
Business question → Business governance / Business Decision
Technical question → Technical Decision / ADR
        ↓
Approve
        ↓
Propagate
        ↓
Resume implementation
```

No developer and no AI agent may fill a Business gap because a reasonable default appears obvious.

---

# 2. Non-Negotiable Engineering Principles

The following rules apply to every phase and every branch.

## 2.1 Business-first implementation

Implementation must be traceable to approved Business behavior.

A valid direction is:

```text
Business Rule / Decision
        ↓
Requirement
        ↓
Domain behavior
        ↓
Application use case
        ↓
Persistence / Integration
        ↓
API contract
        ↓
Frontend / UX
        ↓
Tests
```

The reverse direction is prohibited as a source of new Business behavior.

---

## 2.2 No speculative architecture

Do not add infrastructure merely because it may be useful later.

Examples:

- do not add a date library before the date-utility decision is required and approved;
- do not add an object-storage provider before storage-provider coupling is approved;
- do not add authentication implementation before the auth strategy is approved;
- do not implement offline synchronization before the offline-sync technical decision is resolved;
- do not implement high-contention registration locking before the concurrency strategy is resolved;
- do not add Domain abstractions that have no approved current-scope consumer.

---

## 2.3 One governed change at a time

Every meaningful change must have a clear classification and change scope.

Preferred lifecycle:

```text
Understand
→ Classify
→ Impact review
→ Business Gate
→ Technical decision gate if required
→ Implementation
→ Tests
→ Changed-scope validation
→ Full validation when required
→ Explicit staging
→ Staged review
→ Commit
→ Verify
→ Push
→ Verify remote
```

---

## 2.4 Explicit Git safety

The repository follows these operational rules:

- never use `git add .` for governed changes;
- stage explicit files or tightly scoped approved directories;
- run `git diff --cached --check` before commit;
- inspect staged names and staged diff before commit;
- verify the commit after creation;
- verify the branch is clean;
- verify remote refs after push;
- do not rewrite shared history unless separately approved;
- do not delete source branches before the target branch and remote target are verified.

---

## 2.5 More automation requires more control

RTK and Grit are productivity / coordination tools.

They do **not** increase an agent's authority.

```text
RTK  = reduces shell-output cost/noise
Grit = coordinates parallel editing
Governance = decides what work is allowed
```

Automation is accepted only when it preserves or improves governance evidence.

---

# 3. Current Certified Baseline

## 3.1 Business baseline

Current certified Business state:

```text
Business Rules:              114
Approved Business Decisions: 40
Open Business Decisions:     0
Business Gate:               PASS
```

This baseline is immutable unless a future governed Business change explicitly changes it.

---

## 3.2 Application baseline

Phase 1 established the governed technical foundation.

### Backend foundation

Technology:

- NestJS
- TypeScript strict
- Modular Monolith
- PostgreSQL
- Prisma
- Redis dependency foundation
- BullMQ dependency foundation
- Pino / `nestjs-pino`
- REST / OpenAPI
- Vitest

High-level structure:

```text
apps/api/
├── prisma/
│   ├── schema.prisma
│   └── migrations/
├── src/
│   ├── common/
│   ├── config/
│   ├── infrastructure/
│   ├── modules/
│   ├── app.module.ts
│   └── main.ts
├── nest-cli.json
├── package.json
├── prisma.config.ts
├── tsconfig.json
└── vitest.config.mts
```

No Business domain module was invented during initialization.

### Frontend foundation

Technology:

- Next.js App Router
- React
- TypeScript
- Tailwind CSS
- shadcn/ui technology lock
- TanStack Query
- React Hook Form
- Zod
- Vitest
- React Testing Library
- Playwright dependency foundation

High-level structure:

```text
apps/web/
├── app/
├── features/
├── components/
│   ├── ui/
│   ├── shared/
│   └── business/
├── hooks/
├── lib/
├── providers/
├── styles/
├── types/
├── config/
├── tests/
└── public/
```

---

## 3.3 Approved technical decisions already resolved

The following technical decisions are already approved and must not be reopened casually:

### TECH-ADR-001 — Structured logging

- Pino + `nestjs-pino`
- request/correlation IDs
- sensitive-data redaction
- technical logs remain conceptually separate from Business Audit
- Domain layer does not depend on Pino

### TECH-ADR-002 — Backend test runner

- Vitest is the Backend test runner
- Jest / `ts-jest` are not introduced
- Nest `TestingModule` is allowed
- Playwright is used for browser E2E when required

### TECH-ADR-003 — Entity identifiers

- application-generated UUID v7 for Business entity IDs
- PostgreSQL native `uuid`
- REST/OpenAPI representation: string / UUID
- Domain does not import Prisma or a concrete UUID library
- request IDs are technical correlation identifiers and are not Business entity IDs

### TECH-ADR-004 — Monetary representation

- exact decimal arithmetic
- `decimal.js` in Domain / Application when monetary logic is required
- Prisma Decimal is a persistence concern
- PostgreSQL `NUMERIC`
- API monetary values use decimal strings
- JavaScript `number` is not the canonical representation for monetary arithmetic
- no implicit global rounding policy
- no invented global currency rule
- precision/scale and sign constraints come from owning Business rules / requirements

---

# 4. Open Technical Gates

The following unresolved technical questions are **feature gates**, not invitations to improvise.

| ID | Topic | Current status | Blocks |
|---|---|---:|---|
| TQ-001 | Concurrency / locking for high-demand group registration | OPEN | High-contention registration implementation |
| TQ-002 | Offline coach attendance synchronization | OPEN | Offline attendance implementation |
| TQ-003 | Authentication architecture / provider | OPEN | Auth implementation |
| TQ-004 | Backend test runner | RESOLVED | Nothing |
| TQ-005 | Object-storage provider | OPEN | Provider-specific storage coupling |
| TQ-006 | Structured logging | RESOLVED | Nothing |
| TQ-007 | Date utility | OPEN | Introducing a project date library |
| TQ-008 | Monetary representation | RESOLVED | Nothing |
| TQ-009 | Entity identifiers | RESOLVED | Nothing |

Rule:

> If a feature reaches an OPEN technical gate, stop only the affected feature, resolve the gate through the Technical Decision Protocol, and continue unrelated work normally.

---

# 5. Roadmap at a Glance

| Phase | Name | Primary objective | Status |
|---|---|---|---|
| Phase 0 | Business Source of Truth | Establish approved Business behavior | ✅ CLOSED |
| Phase 0.5 | Governance, AI Guardrails & Validation | Prevent Business / architecture drift | ✅ CLOSED |
| Phase 1 | Governed Application Initialization | Establish approved technical foundation | ✅ CLOSED |
| **Phase 1.5** | **RTK Integration & AI Efficiency Foundation** | Reduce AI shell-output cost without weakening governance | **NEXT** |
| **Phase 2** | **Implementation Foundation & First Vertical Slice** | Prove one Business capability end-to-end and freeze reference patterns | Planned |
| **Phase 2.5** | **Grit Sandbox & Parallel-Agent Pilot** | Prove safe worktree/symbol coordination before canonical adoption | Planned |
| Phase 3 | Core Business Domains — Wave 1 | Implement low-dependency foundational domains | Planned |
| Phase 4 | Cross-Domain Workflows — Wave 2 | Implement approved multi-domain Business journeys | Planned |
| Phase 5 | Production Frontend / UX Completion | Convert functional slices into complete approved product UX | Planned |
| Phase 5.5 | Grit Production Adoption & Parallel Scale | Scale independent implementation safely | Conditional |
| Phase 6 | End-to-End Integration & System QA | Validate complete cross-domain system behavior | Planned |
| Phase 7 | Security, Observability & Operational Hardening | Make the system production-operable and defensible | Planned |
| Phase 8 | Data, Migration & Performance Hardening | Validate production data behavior and measurable performance | Planned |
| Phase 9 | Release Candidate, UAT & Client Readiness | Freeze scope, gather release evidence, complete UAT | Planned |
| Phase 10 | Production Release & Controlled Evolution | Release safely and preserve governance after launch | Planned |

---

# 6. Global Phase Gates

Every implementation phase uses the same five mandatory gates.

## Gate 1 — Business Gate

Question:

> Is the behavior being implemented explicitly supported by approved Business truth?

If no:

```text
STOP
→ Business governance
→ approve / reject
→ propagate
→ continue only after approval
```

---

## Gate 2 — Technical Decision Gate

Question:

> Does implementation require a technical choice that is currently unresolved or would create a new cross-cutting standard?

If yes:

```text
STOP affected work
→ Technical Decision / ADR
→ review alternatives
→ approve
→ update governance
→ continue
```

---

## Gate 3 — Architecture Gate

Question:

> Are layer ownership, dependencies, package boundaries, repository ownership, and technology choices compliant?

At minimum validate:

- Domain isolation;
- Application dependency direction;
- infrastructure ownership;
- presentation ownership;
- Frontend feature boundaries;
- database ownership;
- API ownership;
- no prohibited direct dependencies;
- no unapproved root/workspace structure.

---

## Gate 4 — Validation Gate

Typical minimum evidence:

```text
pnpm validate:changed
pnpm validate:all
pnpm typecheck
pnpm lint
pnpm test
pnpm build
git diff --check
```

The exact gate can be narrowed for intermediate iteration, but release/merge evidence must never be weaker than the governing change requires.

---

## Gate 5 — Git Gate

Before commit:

```text
working-tree scope understood
explicit staging
git diff --cached --check
staged file list reviewed
staged diff reviewed
```

After commit:

```text
commit hash verified
working tree clean
validation rechecked when required
branch pushed
remote ref verified
```

Before merging to `main`:

```text
target fetched
origin/main checked
branch ancestry checked
fast-forward preferred when applicable
post-merge validation
push main
verify main == origin/main
```

---

# 7. Phase 1.5 — RTK Integration & AI Efficiency Foundation

## 7.1 Objective

Introduce RTK as an **AI-development optimization layer** before substantial feature implementation begins.

RTK must:

- reduce repetitive shell output presented to AI agents;
- preserve command exit semantics;
- preserve visibility of critical failures;
- provide a deterministic raw/native escape path;
- avoid changing Business behavior;
- avoid changing product runtime behavior;
- avoid silently modifying canonical governance;
- be removable without compromising the repository;
- remain a development aid, never a validator or authority source.

---

## 7.2 Why RTK is placed before Phase 2

From Phase 2 onward, AI-assisted development will repeatedly use:

- `git status`
- `git diff`
- `git log`
- `rg`
- `grep`
- `find`
- test commands
- typecheck commands
- lint commands
- build commands
- repository validators
- inspection commands

The benefit compounds when RTK is introduced **before** high-volume implementation work rather than after the codebase is already built.

---

## 7.3 RTK external-tool facts that must be re-verified at execution time

RTK is an external rapidly changing tool.

As of the baseline review:

- the project describes itself as a CLI proxy that compresses shell output for AI coding agents;
- its repository documents Codex integration;
- Codex integration behavior has evolved and has had issues/discussions around instruction-file placement;
- official RTK material has changed over time regarding telemetry behavior and configuration;
- therefore this roadmap intentionally does **not** trust a default installation state.

Mandatory rule:

> At Phase 1.5 execution time, inspect the exact RTK revision/version and generated integration files before accepting them.

External references:

- https://github.com/rtk-ai/rtk
- https://github.com/rtk-ai/rtk/blob/develop/README.md
- https://github.com/rtk-ai/rtk/blob/develop/docs/contributing/TECHNICAL.md
- https://github.com/rtk-ai/rtk/blob/develop/docs/TELEMETRY.md
- https://github.com/rtk-ai/rtk/issues/1943
- https://github.com/rtk-ai/rtk/discussions/1989

---

## 7.4 Phase 1.5 entry criteria

Required before starting:

- `main` clean;
- `main == origin/main`;
- `pnpm validate:all` PASS;
- Business baseline remains 114 / 40 / 0;
- no unrelated implementation branch active;
- exact RTK version/revision identified;
- rollback/uninstall approach understood.

---

## 7.5 Branch and change identity

Recommended branch:

```text
tech/rtk-integration
```

Recommended change:

```text
CHG-TECH-RTK-001
```

Classification:

```text
TECHNICAL TOOLING
AI DEVELOPMENT INFRASTRUCTURE
NO BUSINESS IMPACT
```

---

## 7.6 RTK work packages

### 7.6.1 WP-RTK-01 — Research and version freeze

Inspect:

- current latest release/tag or selected commit;
- license;
- installation method;
- binary location;
- shell requirements;
- Codex integration method;
- generated files;
- global vs project-level changes;
- uninstall behavior;
- telemetry / tracking state;
- local database/cache behavior;
- passthrough / native execution support;
- disabled-mode behavior;
- error/fallback behavior.

Deliverable:

```text
RTK Integration Decision Record
```

No installation is accepted until the exact artifact/revision is identified.

---

### 7.6.2 WP-RTK-02 — Disposable installation observation

Before modifying canonical project governance:

1. use a disposable directory or test repository;
2. run the selected RTK initialization flow;
3. record every file created or modified;
4. inspect global user-level changes;
5. inspect Codex instructions;
6. inspect uninstall behavior;
7. verify whether any canonical-like `AGENTS.md` file is edited directly.

Acceptance:

- no unexplained modification;
- generated instruction provenance understood;
- removal path known.

---

### 7.6.3 WP-RTK-03 — Governance layering

Canonical project governance must remain authoritative.

Required ordering:

```text
Business Source of Truth
        ↓
Governance
        ↓
Canonical AGENTS instructions
        ↓
Architecture / dependency / testing rules
        ↓
RTK optimization guidance
```

RTK guidance may instruct an agent **how to invoke shell commands**.

RTK guidance may not redefine:

- Business behavior;
- Business scope;
- approved technologies;
- architecture boundaries;
- dependency policy;
- validation gates;
- staging policy;
- commit policy;
- merge policy.

Generated RTK instructions must use the least-destructive instruction layer available for the selected Codex version.

Never blindly allow `rtk init` to overwrite canonical repository instructions.

---

### 7.6.4 WP-RTK-04 — Privacy / telemetry hardening

Because external documentation has changed over time, the project must not rely on an assumed default.

Acceptance requires explicit verification that the selected RTK configuration has the desired privacy state.

Project default policy:

```text
Telemetry / remote usage reporting: DISABLED
unless separately approved
```

Verify with the exact selected RTK version.

Record:

- config file location;
- relevant environment variables;
- effective state;
- whether local usage/gain databases are created;
- what data leaves the machine, if any;
- deletion/uninstall procedure.

---

### 7.6.5 WP-RTK-05 — Native vs RTK semantic comparison

Create a fixed comparison matrix.

Commands should include representative cases:

```text
git status
git diff
git log
rg <known-term>
pnpm --filter @sports-academy/project-validator test
pnpm validate:changed
pnpm validate:all
pnpm typecheck
pnpm lint
pnpm test
pnpm build
```

For each command compare:

| Property | Native | RTK |
|---|---|---|
| exit code | recorded | recorded |
| critical failures preserved | yes/no | yes/no |
| warnings preserved sufficiently | yes/no | yes/no |
| output size | measured | measured |
| command duration | measured | measured |
| raw-output recovery | N/A | verified |
| repository mutation | none expected | none expected |

Acceptance:

```text
exit-code semantics preserved
critical error information preserved
no validation bypass
no Business mutation
no repository mutation from ordinary proxy use
raw/native escape path available
```

---

### 7.6.6 WP-RTK-06 — Evidence command policy

RTK may be used for routine development inspection.

However final evidence may require native/raw output.

Examples likely to remain native/raw:

```text
git status --porcelain
git diff --cached --check
git diff --cached --name-status
git ls-files --others --exclude-standard
final pnpm validate:all evidence
migration-history inspection
security evidence
release evidence
```

Rule:

> RTK is an optimization layer. It is not the source of validation truth.

---

### 7.6.7 WP-RTK-07 — Failure-mode tests

Test:

- command not supported;
- RTK unavailable;
- RTK disabled;
- malformed command;
- command returns non-zero;
- long test failure;
- build failure;
- validator blocker;
- stderr-heavy command;
- piped/compound command;
- raw output requested.

Acceptance:

- the developer/agent can still determine success vs failure;
- critical failure text is recoverable;
- disabling RTK restores native operation;
- repository remains operable without RTK.

---

## 7.7 Phase 1.5 exit criteria

All must be true:

- selected RTK version/revision recorded;
- installation provenance recorded;
- generated files reviewed;
- canonical `AGENTS.md` governance not weakened;
- telemetry/privacy state explicitly verified;
- native vs RTK comparison completed;
- failure behavior tested;
- raw/native escape path confirmed;
- `pnpm validate:changed` PASS;
- `pnpm validate:all` PASS;
- typecheck/lint/test/build PASS as applicable;
- Business baseline still 114 / 40 / 0;
- staged diff reviewed;
- commit verified;
- remote branch verified;
- merged to `main` only after final validation;
- `main == origin/main`;
- working tree clean.

---

## 7.8 Phase 1.5 forbidden actions

Do not:

- install an unpinned arbitrary revision and immediately normalize it as project standard;
- accept generated Codex instructions without inspection;
- let RTK modify Business docs;
- let RTK change architecture policy;
- replace project-validator output with an RTK summary as canonical evidence;
- enable telemetry implicitly;
- commit machine-specific secrets or personal paths;
- couple product runtime to RTK.

---

# 8. Phase 2 — Implementation Foundation & First Vertical Slice

## 8.1 Objective

Implement **one approved Business capability end-to-end** and use it to prove the application architecture.

Phase 2 is not “build all modules.”

Phase 2 is:

> Build the smallest sufficiently representative slice that proves the entire implementation chain.

---

## 8.2 Why one vertical slice first

A vertical slice validates the real architecture:

```text
Business Rule
   ↓
Domain
   ↓
Application
   ↓
Persistence
   ↓
API
   ↓
Frontend
   ↓
Tests
   ↓
Traceability
```

This is safer than independently building many database models, controllers, and pages before confirming the pattern.

The first successful slice becomes the **Reference Implementation Pattern** for later teams and AI agents.

---

## 8.3 Phase 2 entry criteria

- Phase 1.5 closed;
- `main` clean and synchronized;
- Business baseline valid;
- technical baseline valid;
- RTK optional/available but not required for correctness;
- candidate slices identified from canonical dependency documentation;
- no candidate selected solely from developer preference.

---

## 8.4 First-slice selection criteria

Choose a capability that is:

- current-scope;
- fully supported by Business Rules / Decisions;
- low ambiguity;
- foundational;
- low dependency count;
- representative across backend + DB + API + frontend + tests;
- not blocked by an OPEN technical question;
- small enough to review deeply.

Potential foundational areas may include Academy / Branch / Sport / Program **only if the dependency and Business documents confirm the selection**.

Do not select the first slice based on memory alone.

---

## 8.5 Phase 2 work packages

### 8.5.1 WP-P2-01 — Canonical evidence packet

Before coding, create an implementation evidence packet for the selected slice:

- owning Business Rules;
- approved Decisions;
- lifecycle/state behavior;
- requirements;
- DDD concepts;
- permissions;
- relevant UX journeys;
- relevant API requirements;
- QA scenarios;
- known exceptions;
- explicit non-goals;
- open technical gates.

Deliverable:

```text
Feature / Slice Implementation Brief
```

No code begins until the brief demonstrates that the behavior is defined.

---

### 8.5.2 WP-P2-02 — Backend module pattern

Approved high-level module form:

```text
apps/api/src/modules/<module>/
├── domain/
├── application/
├── infrastructure/
└── presentation/
```

Responsibilities:

#### Domain

Contains:

- entities;
- value objects;
- domain invariants;
- domain services only when justified;
- domain errors;
- domain events only when behavior requires them.

Must not import:

- Prisma;
- NestJS;
- HTTP DTOs;
- Pino;
- concrete queue clients;
- concrete storage providers.

#### Application

Contains:

- use cases;
- orchestration;
- repository ports;
- service ports;
- authorization decisions where defined at application boundary;
- transaction intent;
- mapping between Domain outcomes and application outcomes.

Must depend inward toward Domain and ports, not concrete infrastructure.

#### Infrastructure

Contains:

- Prisma repositories;
- Redis/BullMQ adapters when required;
- external service adapters;
- concrete ID generation;
- persistence mappers;
- technical integrations.

#### Presentation

Contains:

- NestJS controllers;
- request DTOs;
- response DTOs;
- transport validation;
- OpenAPI annotations;
- mapping between HTTP and application contracts.

---

### 8.5.3 WP-P2-03 — Prisma ownership

Establish controlled Prisma ownership before multiple modules exist.

Expected concerns:

```text
Prisma client ownership
connection lifecycle
shutdown behavior
repository adapters
transaction boundary
migration discipline
```

Rules:

```text
Domain          → no Prisma
Application     → no concrete Prisma dependency
Infrastructure  → Prisma allowed
Presentation    → no direct database access
Frontend        → no Prisma
```

Generated Prisma code remains ignored and is never treated as hand-authored Domain code.

---

### 8.5.4 WP-P2-04 — Identifier abstraction

Implement the minimum technical abstraction necessary to honor TECH-ADR-003.

Expected direction:

```text
application/domain port or narrow shared abstraction
        ↓
infrastructure UUID v7 implementation
```

Do not:

- import a UUID package directly into Domain entities everywhere;
- encode Business meaning into UUIDs;
- use request/correlation IDs as entity IDs.

---

### 8.5.5 WP-P2-05 — Error taxonomy and transport mapping

Existing centralized API error-envelope infrastructure must evolve into a controlled mapping.

Target flow:

```text
Domain outcome/error
        ↓
Application outcome/error
        ↓
Presentation mapping
        ↓
HTTP status + stable API envelope
```

Envelope structure follows the approved API convention, for example:

```json
{
  "code": "STABLE_ERROR_CODE",
  "message": "Readable message",
  "fieldErrors": {},
  "requestId": "correlation-id"
}
```

Do not invent Business error semantics when requirements do not define them.

Technical fallback errors must remain clearly technical.

---

### 8.5.6 WP-P2-06 — OpenAPI becomes a real contract

When the first controller exists:

```text
request DTO
   ↓
validation
   ↓
OpenAPI contract
   ↓
API implementation
   ↓
frontend client/query usage
```

OpenAPI must become machine-readable evidence of the API contract, not decorative Swagger metadata.

---

### 8.5.7 WP-P2-07 — Frontend feature pattern

Reference pattern:

```text
app/
   route composition only
        ↓
features/<feature>/
   feature orchestration
        ↓
components/business/
   reusable Business UI
        ↓
components/ui/
   generic primitives
```

Server state:

```text
TanStack Query
```

Form state:

```text
React Hook Form
```

Transport/input validation:

```text
Zod
```

Business truth remains enforced in the Backend Domain/Application layers as well.

Do not embed authoritative Business logic only in the browser.

---

### 8.5.8 WP-P2-08 — First slice tests

Minimum testing categories:

#### Domain tests

Verify:

- invariants;
- allowed transitions;
- prohibited transitions;
- value-object rules;
- calculations if any.

#### Application tests

Verify:

- use-case orchestration;
- repository-port interactions;
- expected outcomes;
- conflict / not-found / permission behavior where defined.

#### Infrastructure tests

Verify:

- persistence mappings;
- transaction behavior where applicable;
- database constraints;
- repository semantics.

#### API tests

Verify:

- HTTP request validation;
- response contract;
- error contract;
- correlation/request ID presence;
- stable codes where defined.

#### Frontend tests

Verify:

- required states;
- forms;
- mutations;
- validation presentation;
- Business/API error presentation.

#### E2E

Add only where the slice creates a meaningful approved user journey.

---

## 8.6 Phase 2 reference states

Every interactive UI introduced by the reference slice should explicitly consider:

```text
Loading
Empty
Success
Validation Error
Business Error
Permission Error
System Error
Retry
Disabled / unavailable action
```

Only states supported by the approved UX/Business behavior are implemented.

---

## 8.7 Phase 2 exit criteria

Phase 2 closes only when all are true:

- one approved Business capability is implemented end-to-end;
- Business Rules and Decisions are traceable to implementation/tests;
- Domain is framework-independent;
- Prisma is isolated to infrastructure;
- API contract is explicit;
- Frontend follows approved feature boundaries;
- required UI states are handled;
- tests pass;
- migrations are valid and append-only;
- no OPEN technical question was silently bypassed;
- `validate:changed` PASS;
- `validate:all` PASS;
- typecheck/lint/test/build PASS;
- Reference Implementation Pattern documented;
- code review confirms the pattern is reusable without copying accidental complexity.

---

# 9. Phase 2.5 — Grit Sandbox & Parallel-Agent Pilot

## 9.1 Objective

Evaluate Grit as a coordination layer for multiple AI coding agents **after** a stable reference implementation exists.

Grit must prove that it can increase parallel throughput without weakening:

- Git integrity;
- Business governance;
- architecture governance;
- validation gates;
- reviewability;
- change provenance.

---

## 9.2 Why Grit is not introduced before Phase 2

Grit manages:

- AST/symbol-level claims;
- isolated Git worktrees;
- agent work coordination;
- commit/rebase/merge behavior;
- lock release.

This is much more invasive to development workflow than an output-optimization tool.

Parallelism before a stable implementation pattern would allow several agents to create several incompatible patterns faster.

Therefore:

```text
Reference Implementation first
        ↓
Grit pilot second
        ↓
Parallel scale only after evidence
```

---

## 9.3 Grit external-tool facts that must be re-verified

As of the baseline review, Grit documents:

- tree-sitter-based AST/function-level claims;
- isolated Git worktrees;
- serialized merge behavior;
- a `grit done` completion flow involving commit/rebase/merge/release behavior.

An issue reported in June 2026 described an older/unspecified Grit build producing `core.bare=true` in a dirty-parent-worktree scenario while the expected merge did not complete.

This does **not** prove the latest Grit release is unsafe.

It does mean the Sports Academy project must reproduce and test the scenario before canonical adoption.

External references:

- https://github.com/rtk-ai/grit
- https://github.com/rtk-ai/grit/blob/master/docs/README.zh.md
- https://github.com/rtk-ai/grit/issues/21

---

## 9.4 Phase 2.5 safety rule

> The first Grit experiments must happen in a disposable clone or sandbox, never first in the canonical ACTIVE repository.

---

## 9.5 Phase 2.5 work packages

### 9.5.1 WP-GRIT-01 — Version/revision freeze

Record:

- exact revision/version;
- install method;
- license;
- supported languages relevant to the project;
- worktree location;
- state/index files;
- claim semantics;
- merge semantics;
- cleanup semantics;
- failure recovery.

---

### 9.5.2 WP-GRIT-02 — Disposable sandbox

Create a disposable clone.

Verify baseline:

```text
git status clean
git config core.bare
git worktree list
git branch -a
```

Run `grit init`.

Record every file / Git config mutation.

---

### 9.5.3 WP-GRIT-03 — Single-agent lifecycle

Test:

```text
grit init
→ inspect symbols
→ claim one narrow symbol
→ edit in agent worktree
→ test
→ complete
→ inspect merge
→ inspect worktree cleanup
→ inspect lock release
```

Postconditions:

```text
main worktree valid
core.bare not unexpectedly changed
agent commit preserved
expected merge completed
locks released
temporary worktree state understood
```

---

### 9.5.4 WP-GRIT-04 — Two-agent non-overlapping lifecycle

Agent A:

```text
symbol/file scope A
```

Agent B:

```text
symbol/file scope B
```

Verify:

- independent claims;
- independent worktrees;
- correct completion ordering;
- merge serialization;
- no lost commits;
- no stale locks;
- deterministic recovery after one agent fails.

---

### 9.5.5 WP-GRIT-05 — Same-file different-symbol test

This is the core value test.

Example:

```text
service.ts
├── function A
└── function B
```

Agent A claims function A.

Agent B claims function B.

Verify that AST/symbol coordination behaves correctly and does not create hidden semantic conflict.

A clean Git merge is not sufficient; resulting tests and behavior must also pass.

---

### 9.5.6 WP-GRIT-06 — Dirty-parent regression

Explicitly test the previously reported risk scenario with the selected Grit version:

1. agent has completed work in its Grit worktree;
2. canonical parent worktree contains unrelated staged/dirty state;
3. invoke completion flow;
4. inspect:
   - `git config core.bare`;
   - current branch;
   - worktrees;
   - agent commit;
   - target history;
   - lock state;
   - stderr / exit status.

Acceptance:

- no repository corruption;
- failure is explicit if merge cannot proceed;
- agent commit is recoverable;
- parent worktree remains valid;
- `core.bare` remains correct.

---

### 9.5.7 WP-GRIT-07 — Governance wrapper

If Grit is adopted, direct agent completion must be wrapped in governance.

Desired pre-completion flow:

```text
agent finishes edits
        ↓
affected tests
        ↓
pnpm validate:changed
        ↓
Business Gate
        ↓
git diff --check
        ↓
review scope
        ↓
Grit completion / merge
```

Desired post-completion flow:

```text
pnpm validate:all
git status
git worktree list
git config core.bare
git log
```

---

## 9.6 Business-document parallelism rule

Canonical Business docs are not casually parallelized.

Default:

```text
Business-source changes
= serialized + reviewed + governed
```

Grit is primarily for:

- implementation;
- tests;
- technical documentation;
- independent adapters;
- independent approved slices.

It is not a Business-decision engine.

---

## 9.7 Phase 2.5 exit decision

Possible outcomes:

### APPROVED

Grit passes all required safety and workflow tests.

Create an approved tooling decision and proceed toward controlled adoption.

### APPROVED WITH RESTRICTIONS

Example restrictions:

- only clean parent worktree;
- no automatic completion by untrusted agents;
- wrapper required;
- no Business docs;
- narrow symbol claims only;
- mandatory post-merge validation.

### DEFERRED

Tool is promising but not sufficiently stable.

Continue normal Git/worktree workflow.

### REJECTED

Tool creates unacceptable integrity/governance risk.

Do not make project implementation depend on it.

---

# 10. Phase 3 — Core Business Domains, Wave 1

## 10.1 Objective

Implement low-dependency, foundational current-scope domains using the Phase 2 reference pattern.

Final domain order must be derived from canonical dependency documentation.

A likely progression may include foundational organizational/training/student concepts, but this roadmap does not invent an ordering where canonical evidence must decide it.

---

## 10.2 Domain implementation pipeline

Every domain follows:

```text
1. Canonical Business evidence
2. Rules / Decisions extraction
3. Lifecycle extraction
4. Permission extraction
5. Requirements mapping
6. Domain design
7. Business Gate
8. Technical gate review
9. Database mapping
10. Application use cases
11. API contract
12. Frontend implementation
13. Tests
14. Traceability
15. validate:changed
16. Review
17. Explicit staging
18. Commit
19. Remote verification
```

---

## 10.3 Domain Definition of Done

A domain is not “done” because a Prisma model exists.

Done requires, where applicable:

- lifecycle implemented;
- invariants enforced;
- required history/audit behavior implemented;
- required relationships implemented;
- persistence implemented;
- API implemented;
- required frontend journeys implemented;
- permission behavior implemented;
- tests implemented;
- OpenAPI updated;
- Business traceability complete;
- no duplicated/reinterpreted Business truth;
- validation PASS.

---

# 11. Phase 4 — Cross-Domain Workflows, Wave 2

## 11.1 Objective

Implement approved journeys that span multiple domains.

Examples of journey shapes may include:

```text
Lead / Prospect
→ Trial
→ Evaluation
→ Student
→ Subscription
→ Scheduling
→ Attendance
→ Progression
```

Only canonical current-scope journeys are implemented.

---

## 11.2 Cross-domain design rules

For every workflow:

- identify owning Business Rules per step;
- identify transaction boundaries;
- identify eventual vs immediate consistency needs;
- identify authorization points;
- identify audit requirements;
- identify capacity/concurrency behavior;
- identify rollback/compensation behavior where relevant;
- identify user-visible failure behavior;
- define API boundaries intentionally;
- test both happy and prohibited paths.

---

## 11.3 Technical-gate activation

### TQ-001 — Concurrency

Before implementing high-contention registration/capacity behavior:

```text
STOP affected feature
→ concurrency alternatives
→ technical decision
→ approval
→ implementation
```

No ad hoc locking strategy.

### TQ-002 — Offline attendance synchronization

Before offline attendance:

resolve:

- local identity;
- idempotency;
- ordering;
- conflict model;
- reconciliation;
- retry;
- duplicate prevention;
- stale-state behavior;
- audit implications.

### TQ-003 — Authentication

Before auth:

resolve:

- identity provider/strategy;
- session/token model;
- identity mapping;
- credential responsibility;
- authorization integration;
- logout/revocation implications;
- security operations.

### TQ-005 — Object storage

Before provider-specific coupling:

resolve:

- provider;
- upload model;
- authorization;
- object naming;
- retention;
- deletion;
- signed access;
- environment strategy.

### TQ-007 — Date utility

Before adding a date/time library:

resolve:

- chosen utility;
- timezone boundary;
- serialization conventions;
- calendar/date-only vs instant semantics;
- testing conventions.

---

# 12. Phase 5 — Production Frontend & UX Completion

## 12.1 Objective

Turn functionally implemented slices into a coherent, approved, production-quality user experience.

---

## 12.2 Frontend boundaries

Target direction:

```text
Route composition
        ↓
Feature orchestration
        ↓
Business components
        ↓
Shared components
        ↓
UI primitives
```

Avoid monolithic pages that contain:

- fetching;
- Business calculations;
- permission logic;
- form parsing;
- data mapping;
- UI rendering;
- error translation

all in one file.

---

## 12.3 Server state

TanStack Query owns server-state concerns such as:

- loading;
- caching;
- invalidation;
- refetch;
- mutations;
- retry policy where approved;
- stale-state management.

---

## 12.4 Forms

React Hook Form owns local form state.

Zod is used where approved for transport/client validation.

Backend validation remains authoritative.

---

## 12.5 Complete UX-state matrix

For every relevant screen/action, explicitly review:

- loading;
- no data;
- partial data;
- success;
- field validation;
- Business rejection;
- permission rejection;
- conflict;
- system failure;
- retry;
- disabled/unavailable action;
- stale data where relevant;
- destructive action confirmation where approved.

Do not invent UX policy to fill a Business gap.

---

## 12.6 Accessibility and responsiveness

Before Phase 5 closes:

- keyboard operation reviewed;
- labels and semantic structure reviewed;
- focus behavior reviewed;
- error announcement reviewed;
- contrast reviewed;
- responsive behavior reviewed;
- touch targets reviewed where applicable.

---

# 13. Phase 5.5 — Grit Production Adoption & Parallel Scale

## 13.1 Entry criteria

Grit parallel production work is allowed only after:

- Phase 2 reference implementation exists;
- Grit pilot passes or is conditionally approved;
- implementation patterns are stable;
- validation commands are stable;
- ownership boundaries are clear.

---

## 13.2 Parallelization model

Parallel work must follow a dependency graph, not “launch many agents.”

Good:

```text
              Approved contract
               /            \
      Backend implementation   Frontend shell
               \            /
                Integration
                     ↓
                    E2E
```

Bad:

```text
Agent A depends on B
Agent B depends on C
Agent C depends on A
```

---

## 13.3 Agent-role examples

Possible roles:

- Domain/Application Agent
- Infrastructure/API Agent
- Frontend Feature Agent
- Test/QA Agent
- Technical Documentation/Traceability Agent

Roles are assignments, not authority levels.

---

## 13.4 Claim policy

Prefer narrow claims:

```text
specific symbol
specific use case
specific adapter
specific test group
```

Avoid broad claims like:

```text
entire backend
entire frontend
whole domain directory
```

unless the task genuinely requires exclusive ownership.

---

## 13.5 Merge policy

Before every coordinated merge:

- scope known;
- Business impact known;
- tests run;
- changed-scope validation run;
- staged/agent diff reviewed;
- target state clean or explicitly managed;
- merge/rebase outcome verified.

After every merge:

- full or appropriate validation;
- Git integrity check;
- worktree check;
- lock check;
- target branch check.

---

# 14. Phase 6 — End-to-End Integration & System QA

## 14.1 Objective

Stop evaluating the product as isolated domains and validate complete Business journeys and system interactions.

---

## 14.2 Test matrix

### Unit

- Domain invariants;
- value objects;
- state transitions;
- calculations;
- mapping utilities where material.

### Application

- use cases;
- orchestration;
- authorization outcomes;
- repository-port behavior;
- idempotency where required.

### Database / infrastructure integration

- Prisma mappings;
- PostgreSQL constraints;
- transactions;
- queue behavior;
- Redis behavior;
- provider adapters.

### API

- request validation;
- HTTP semantics;
- OpenAPI contract;
- stable errors;
- request IDs;
- auth once implemented.

### Frontend

- components;
- feature flows;
- forms;
- mutations;
- error states;
- access states.

### Browser E2E

- critical approved Business journeys;
- cross-domain workflows;
- high-risk destructive workflows;
- permission boundaries;
- release smoke journeys.

---

## 14.3 Contract drift

Continuously verify:

```text
OpenAPI
↔ Backend implementation
↔ Frontend consumption
```

No silent contract divergence.

---

## 14.4 Cross-domain QA

Validate:

- duplicate prevention;
- stale-state handling;
- concurrent action handling;
- permission boundaries;
- history preservation;
- audit behavior;
- rollback/retry;
- cross-domain status independence where Business requires it.

---

# 15. Phase 7 — Security, Observability & Operational Hardening

## 15.1 Objective

Make the implemented product safe and operable under production conditions.

---

## 15.2 Security review areas

- authentication;
- authorization;
- data exposure;
- secrets;
- CORS;
- headers;
- input validation;
- file/object access;
- token/session security;
- rate limiting where justified;
- privilege escalation;
- IDOR/object authorization;
- sensitive log redaction;
- dependency vulnerabilities;
- environment configuration;
- administrative operations;
- audit integrity.

---

## 15.3 Business Audit vs technical logs

These remain separate concepts.

### Technical logs

Purpose:

- debugging;
- observability;
- operational diagnosis.

Examples:

- request ID;
- route;
- latency;
- error;
- dependency failure.

### Business Audit

Purpose:

- preserve governed history of Business-significant actions.

Typical dimensions when required:

```text
who
what
when
previous state
new state
context
authorization/delegation context
```

Never treat Pino logs as a replacement for required Business Audit.

---

## 15.4 Observability

Expand the Pino foundation as needed to cover:

- correlation;
- request latency;
- database timing;
- queue timing;
- external dependency latency;
- retry/failure signals;
- health/readiness signals;
- structured exception context.

Sensitive data must remain redacted.

---

# 16. Phase 8 — Data, Migration & Performance Hardening

## 16.1 Objective

Validate that data integrity, migrations, queries, and system performance are suitable for production.

---

## 16.2 Database hardening

Review:

- primary keys;
- foreign keys;
- unique constraints;
- indexes;
- partial indexes where justified;
- query plans;
- N+1 behavior;
- pagination;
- transaction scope;
- locks;
- deadlock risk;
- cascade behavior;
- retention/history requirements.

Database constraints enforce approved Business rules; they do not create new Business rules.

---

## 16.3 Migration discipline

Mandatory:

```text
schema change
→ new migration
```

Prohibited:

```text
rewrite an already-applied historical migration
```

Migration testing should include:

- empty database;
- realistic pre-existing database state;
- forward migration;
- rollback strategy where applicable;
- data-preservation checks.

---

## 16.4 Performance

Measure before optimizing.

Measure:

- API latency;
- slow queries;
- query count;
- transaction duration;
- queue throughput;
- queue lag;
- page/render performance;
- JavaScript bundle cost;
- critical journey timing.

Optimization without evidence is not a reason to violate architecture boundaries.

---

# 17. Phase 9 — Release Candidate, UAT & Client Readiness

## 17.1 Objective

Freeze implementation scope, validate release evidence, complete UAT, and prepare operational release material.

---

## 17.2 Release-candidate freeze

At RC:

- no opportunistic feature additions;
- only release blockers, approved fixes, and required documentation changes;
- each fix has traceable impact;
- Business behavior remains controlled.

---

## 17.3 RC gates

Required evidence includes, as applicable:

```text
Business Gate PASS
Documentation validation PASS
Architecture validation PASS
Dependency validation PASS
Database validation PASS
API validation PASS
Frontend validation PASS
Test validation PASS
Security review PASS
Typecheck PASS
Lint PASS
Tests PASS
Build PASS
E2E PASS
Migration rehearsal PASS
```

---

## 17.4 UAT traceability

For every UAT scenario:

```text
Business Requirement
        ↓
User journey
        ↓
Implementation
        ↓
Test evidence
        ↓
UAT result
```

UAT feedback that changes Business behavior returns to Business governance before implementation.

---

## 17.5 Release documentation

Prepare:

- release notes;
- known limitations;
- deployment guide;
- configuration guide;
- environment-variable reference;
- migration guide;
- rollback guide;
- operational checks;
- support/incident guide;
- backup/restore expectations where applicable.

Do not represent FUTURE scope as current functionality.

---

# 18. Phase 10 — Production Release & Controlled Evolution

## 18.1 Objective

Release the approved system safely and preserve the same governance discipline after production launch.

---

## 18.2 Pre-production rehearsal

Use a production-like environment to validate:

- deployment;
- migrations;
- environment config;
- secrets;
- startup;
- health/readiness;
- key user journeys;
- observability;
- rollback;
- backup/restore where applicable.

---

## 18.3 Production release flow

Preferred controlled flow:

```text
Approved release
        ↓
Deploy
        ↓
Run approved migration
        ↓
Health/readiness verification
        ↓
Smoke tests
        ↓
Critical Business journey checks
        ↓
Metrics/log review
        ↓
Business/audit verification
        ↓
Release acceptance
```

---

## 18.4 Post-release monitoring

Monitor:

- error rates;
- latency;
- database load;
- slow queries;
- queue failures;
- external dependency failures;
- critical Business workflow failures;
- support incidents;
- security events.

---

## 18.5 Post-production change flow

Production status does not weaken governance.

Every behavior change still follows:

```text
Request
→ classify impact
→ Business Decision if needed
→ Business Rule / Requirement update
→ propagation
→ technical decision if needed
→ implementation
→ tests
→ validation
→ release
```

---

# 19. Definition of Done — Feature / Slice

A feature is not complete because code compiles.

The following checklist applies where relevant.

## Business

- [ ] owning Business Rules identified
- [ ] approved Decisions identified
- [ ] no open Business ambiguity
- [ ] current scope confirmed
- [ ] lifecycle/state behavior traceable
- [ ] permissions traceable
- [ ] history/audit behavior traceable

## Architecture

- [ ] Domain boundary respected
- [ ] Application boundary respected
- [ ] infrastructure isolated
- [ ] presentation isolated
- [ ] frontend feature boundary respected
- [ ] dependency rules satisfied

## Database

- [ ] schema reflects approved behavior
- [ ] migration added
- [ ] historical migrations untouched
- [ ] constraints justified
- [ ] indexes justified
- [ ] repository mapping tested

## API

- [ ] request contract defined
- [ ] response contract defined
- [ ] error contract defined
- [ ] OpenAPI updated
- [ ] no Business decision invented in controller

## Frontend

- [ ] route composition clean
- [ ] feature orchestration isolated
- [ ] required UI states implemented
- [ ] forms validated
- [ ] server state handled
- [ ] permission/error behavior represented
- [ ] accessibility reviewed

## Tests

- [ ] Domain tests
- [ ] Application tests
- [ ] Infrastructure tests where applicable
- [ ] API tests
- [ ] Frontend tests
- [ ] E2E for critical journey where applicable

## Governance

- [ ] change classification correct
- [ ] Business Gate passed
- [ ] technical gate passed
- [ ] change propagation reviewed
- [ ] `validate:changed` PASS
- [ ] `validate:all` PASS when required

## Git

- [ ] staged scope explicit
- [ ] `git diff --cached --check` clean
- [ ] staged diff reviewed
- [ ] commit verified
- [ ] branch clean
- [ ] remote verified

---

# 20. Definition of Done — Phase

A phase closes only when:

1. all entry assumptions remain valid;
2. required deliverables exist;
3. phase-specific exit criteria pass;
4. Business baseline is revalidated;
5. technical decisions are documented;
6. validators pass;
7. working tree is clean;
8. target branch and remote target are synchronized;
9. unresolved items are explicitly carried forward;
10. the next phase has a clear entry state.

A phase is not closed merely because “implementation appears to work.”

---

# 21. AI-Agent Operating Contract

Every AI agent working in this repository must behave as if the repository is regulated by explicit authority boundaries.

## 21.1 Before changing code

Agent must determine:

- current branch;
- current change ID;
- affected Business area;
- whether Business impact exists;
- whether a technical gate is open;
- relevant governance files;
- relevant module ownership;
- required tests/validators.

---

## 21.2 Agent must stop when

- Business behavior is undefined;
- a required Business Decision is open;
- an OPEN technical gate is reached;
- requested implementation conflicts with approved architecture;
- requested dependency conflicts with technology lock;
- destructive Git action is required but not explicitly authorized;
- current worktree contains unexplained unrelated changes.

---

## 21.3 Agent may not

- invent Business defaults;
- rewrite canonical Business rules to match code;
- modify historical migrations;
- add arbitrary libraries;
- bypass validators;
- silently disable tests;
- silently weaken types;
- alter Git config unexpectedly;
- automatically merge broad changes without the required gate;
- treat RTK/Grit as higher authority than governance.

---

# 22. Recommended Change / Branch Naming

Examples:

```text
tech/rtk-integration
tech/grit-pilot
tech/<technical-decision>
feat/<approved-capability>
fix/<approved-defect>
docs/<governance-document>
```

Recommended change IDs:

```text
CHG-TECH-RTK-001
CHG-TECH-GRIT-001
CHG-TECH-<AREA>-NNN
CHG-BIZ-<AREA>-NNN
CHG-DOC-<AREA>-NNN
```

Use the repository's actual Change Management conventions when they prescribe a stricter form.

---

# 23. Phase Dependency Graph

```text
PHASE 0
Business Source of Truth
        │
        ▼
PHASE 0.5
Governance + Validators
        │
        ▼
PHASE 1
Application Initialization
        │
        ▼
PHASE 1.5
RTK Integration
        │
        ▼
PHASE 2
First Vertical Slice
        │
        ├───────────────┐
        ▼               │
PHASE 2.5               │
Grit Pilot              │
        │               │
        ▼               │
PHASE 3 ◄───────────────┘
Core Domains Wave 1
        │
        ▼
PHASE 4
Cross-Domain Wave 2
        │
        ▼
PHASE 5
Full Product UX
        │
        ▼
PHASE 5.5
Parallel Scale with Grit
        │
        ▼
PHASE 6
System QA / E2E
        │
        ▼
PHASE 7
Security / Operations
        │
        ▼
PHASE 8
Data / Performance
        │
        ▼
PHASE 9
RC / UAT
        │
        ▼
PHASE 10
Production
```

---

# 24. RTK vs Grit Decision Summary

## RTK

Introduce **before Phase 2** because it optimizes the development loop without needing to redefine application architecture.

Acceptance depends on:

- exact revision audit;
- Codex integration audit;
- privacy/telemetry verification;
- native fallback;
- governance preservation;
- semantic command comparison.

## Grit

Introduce as a **pilot after the first reference slice** because it changes multi-agent Git/worktree coordination.

Acceptance depends on:

- sandbox evidence;
- repository-integrity tests;
- dirty-parent regression test;
- single- and multi-agent tests;
- narrow-claim discipline;
- validation wrapper;
- explicit post-merge verification.

---

# 25. What We Intentionally Do Not Do

This roadmap intentionally rejects the following approaches:

### “Generate the whole backend from the schema”

Rejected because Business behavior is more than persistence shape.

### “Build all Prisma models first”

Rejected because it encourages database-first Business interpretation.

### “Implement all modules in parallel immediately”

Rejected because there is not yet a proven implementation pattern.

### “Let AI decide missing details”

Rejected because AI is not Business authority.

### “Install every useful library now”

Rejected because unresolved technical choices must remain explicit.

### “Use Grit immediately in the canonical repo”

Rejected because coordination tooling must prove repository safety first.

### “Treat RTK output as final validation evidence”

Rejected because compressed output is an optimization layer, not canonical validation.

### “Fix documentation later”

Rejected because source-of-truth drift is treated as a defect.

---

# 26. Immediate Next Actions

The next approved sequence is:

```text
1. Add this roadmap to the governed repository.
2. Link it from appropriate AI/team entry points.
3. Validate documentation and governance.
4. Commit the roadmap as a documentation/governance change.
5. Verify main/origin main.
6. Begin Phase 1.5 — RTK Integration.
```

After RTK:

```text
7. Close Phase 1.5.
8. Begin Phase 2.
9. Select first vertical slice from canonical dependency evidence.
10. Produce the Reference Implementation.
11. Close Phase 2.
12. Begin Phase 2.5 Grit sandbox pilot.
```

---

# 27. Suggested Repository Location and References

Canonical location:

```text
docs/00_GOVERNANCE/MASTER_IMPLEMENTATION_ROADMAP.md
```

Recommended references to add later, after review:

```text
README.md
TEAM_START_HERE.md
AGENTS.md
docs/00_GOVERNANCE/AI_START_HERE.md
```

Suggested instruction:

> Before planning implementation sequencing, read `docs/00_GOVERNANCE/MASTER_IMPLEMENTATION_ROADMAP.md`. The roadmap controls implementation phase order but never overrides approved Business Decisions, Business Rules, or higher-priority governance.

---

# 28. Roadmap Maintenance Rules

This is a living governance document, but not an informal checklist.

Update it only when:

- a phase starts or closes;
- a phase is added/removed/reordered;
- a major technical gate is resolved;
- an external development tool is approved/rejected;
- release strategy materially changes;
- implementation sequencing materially changes.

Do not update it for every small feature commit.

Every roadmap change must:

- state Business impact;
- preserve historical truth;
- update phase status;
- update decision/gate status where applicable;
- pass documentation validation;
- pass governance validation;
- be committed explicitly.

---

# 29. Phase Status Register

| Phase | Status | Closure evidence / next action |
|---|---|---|
| 0 — Business Source of Truth | CLOSED | Certified Business baseline |
| 0.5 — Governance & Validation | CLOSED | Governance + project-validator + validation MCP |
| 1 — Application Initialization | CLOSED | Commit `694ad7b`; full validation PASS |
| 1.5 — RTK Integration | NEXT | Create `CHG-TECH-RTK-001` |
| 2 — First Vertical Slice | NOT STARTED | Begins after RTK phase closes |
| 2.5 — Grit Pilot | NOT STARTED | Begins after reference implementation |
| 3 — Core Domains Wave 1 | NOT STARTED | Depends on Phase 2 patterns |
| 4 — Cross-Domain Wave 2 | NOT STARTED | Depends on foundational domains |
| 5 — Product UX Completion | NOT STARTED | Depends on implemented slices |
| 5.5 — Parallel Scale | CONDITIONAL | Depends on Grit approval |
| 6 — System QA | NOT STARTED | Depends on integrated product scope |
| 7 — Security / Operations | NOT STARTED | Hardening after core behavior stabilizes |
| 8 — Data / Performance | NOT STARTED | Production-scale evidence |
| 9 — RC / UAT | NOT STARTED | Scope freeze and client evidence |
| 10 — Production | NOT STARTED | Release after RC acceptance |

---

# 30. Final Control Statement

The Sports Academy Platform is intentionally being built in this order:

```text
Correct Business Truth
        ↓
Governed Architecture
        ↓
Deterministic Validation
        ↓
Governed Application Foundation
        ↓
Efficient AI Development (RTK)
        ↓
One Proven Vertical Slice
        ↓
Safe Parallelism Pilot (Grit)
        ↓
Domain Scale
        ↓
Cross-Domain Scale
        ↓
Product UX Completion
        ↓
System QA
        ↓
Security / Operations
        ↓
Data / Performance
        ↓
Release Candidate / UAT
        ↓
Production
```

The governing principle for all future phases is:

> **Increase implementation speed only after correctness boundaries are explicit.
> Increase parallelism only after implementation patterns are proven.
> Increase automation only when validation and governance remain stronger than the automation itself.**

---

# Revision History

| Date | Revision | Description |
|---|---|---|
| 2026-08-10 | 1.0 | Established the Master Implementation Roadmap after closure of Phase 1; positioned RTK in Phase 1.5 and Grit pilot in Phase 2.5. |
