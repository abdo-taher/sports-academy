# AI Start Here

> ROUTER ONLY — this file does not create or duplicate Business Truth.

## Repository AI Entry

If you are answering a read-only question, follow the normal Business routing below and do not modify files.

If you are modifying documentation or code, first read:

1. [`../../AGENTS.md`](../../AGENTS.md)
2. [`AI_CHANGE_PROPAGATION_PROTOCOL.md`](./AI_CHANGE_PROPAGATION_PROTOCOL.md)

Then continue with the role and domain sources relevant to the task.

For code, technical structure or implementation sequencing, also read `MASTER_IMPLEMENTATION_ROADMAP.md`, then `TECH_STACK_LOCK.md`, `ARCHITECTURE_RULES.md`, `DEPENDENCY_RULES.md`, `CODING_STANDARDS.md` and `TESTING_STRATEGY.md`. The roadmap controls phase sequencing and gates only; it never overrides approved Business Decisions, canonical Rules or approved technical ADRs. A conflict must stop with `TECH STACK CONFLICT — ADR REQUIRED`; follow `TECH_DECISION_PROTOCOL.md` rather than improvising.

Before completing a modification, follow `VALIDATION_GOVERNANCE.md` and run the shared validator through MCP `validate_changed_scope` or CLI `pnpm validate:changed`. Business-affecting work must pass the Business Gate before downstream implementation.

Current status: **FINAL BUSINESS CLOSURE PROPAGATED**. NBCG-001–012 are closed; Social/Survey, Session Feedback, Initial Placement and Stage/Level progression are current canonical scope. Use `../15_CHANGE_MANAGEMENT/DECISION_LOG.md` for approved decision provenance and the owning Rules for behavior.

## What This Repository Describes

The Sports Academy Platform operates one Academy with multiple Branches and manages the current business domains listed in `02_DOMAINS/`. Independent Academy tenants, Events, Tournaments, Camps, related Certificates and marketplace/community modules are future scope.

## Authority

When sources disagree, use this order:

1. approved Decision in `../15_CHANGE_MANAGEMENT/DECISION_LOG.md`;
2. canonical Rule definition linked from `BUSINESS_RULE_INDEX.md`;
3. canonical lifecycle/state transition;
4. canonical business model and approved policy/configuration catalog;
5. downstream implementation specification;
6. Derived View;
7. Legacy/reference material.

Indexes and this router are navigation metadata. They never override the canonical source they point to.

## Reading Order

1. Read `SOURCE_OF_TRUTH.md` and `AI_RULES.md`.
2. Route the natural-language question through `BUSINESS_QUESTION_ROUTER.md`.
3. Use `BUSINESS_CONCEPT_INDEX.md` or `BUSINESS_CONCEPT_OWNERSHIP_MATRIX.md` to find the owner.
4. Read the owning domain `README.md`, then its Rule and lifecycle/model file.
5. Use `DECISION_LOG.md` for approved decisions and `../04_POLICIES/POLICY_CONFIGURATION_CATALOG.md` for configurable values; route Social to `../02_DOMAINS/SOCIAL/` and Stage/Level to `../02_DOMAINS/SPORT/STAGE_LEVEL_MODEL.md`.
6. Use `../05_REQUIREMENTS/DERIVATION_MAP.md` only when implementation/QA traceability is requested.

Do not scan all repository files for a normal business question.

## Current and Future Scope

- Current scope is defined in `../01_BUSINESS_FOUNDATION/BUSINESS_SCOPE.md` and enforced by BR-SCP-001.
- A capability marked `FUTURE` creates no current Payment, Attendance, Subscription, API, UX or QA behavior.
- Architecture extensibility never promotes a future capability into current Business Truth.

## Domain Routing

Use `BUSINESS_QUESTION_ROUTER.md` for single- and cross-domain routes. Use `BUSINESS_CONCEPT_INDEX.md` for direct concept lookup. For questions such as training eligibility or Branch Transfer, follow every cross-domain source listed by the router; do not stop at the Student file.

## Rule and Decision Retrieval

- `BUSINESS_RULE_INDEX.md` enumerates every canonical Rule ID and links to its authoritative definition.
- `../15_CHANGE_MANAGEMENT/DECISION_LOG.md` is authoritative for approved Decisions.
- Current-scope Business Decisions are closed. Use `../15_CHANGE_MANAGEMENT/DECISION_LOG.md`; do not treat historical decision-pack material as active truth.

## Configuration Interpretation

| Classification | AI behavior |
|---|---|
| Fixed invariant | Apply the canonical Rule; never override it through configuration. |
| Configurable policy | Resolve the effective `CFG-*` using Academy default then only an explicitly permitted more-specific override. |
| Missing override | Use the Academy default when one exists. |
| Missing mandatory production value | Answer `BUSINESS CONFIGURATION REQUIRED — CFG-...`; do not invent a number or role binding. |
| Newly missing business behavior | Answer `NEW BUSINESS COVERAGE GAP`; cite the affected domains and do not infer an outcome. |

Configuration ownership, precedence and required production status are in `../04_POLICIES/POLICY_CONFIGURATION_CATALOG.md`.

## Legacy and Derived Restrictions

- Historical evidence is isolated outside the ACTIVE project under the workspace `ARCHIVE/` area and must not answer a current Business question.
- `../14_DERIVED_VIEWS/` contains convenience projections only and cannot create Business Truth.
- QA, API, database, UX and other downstream files may represent canonical behavior but cannot originate it.

## Answer Protocol

For every business answer provide:

1. a direct outcome or explicit `BUSINESS CONFIGURATION REQUIRED`, `FUTURE`, `NOT DEFINED`, or `NEW BUSINESS COVERAGE GAP` classification;
2. applicable Rule ID(s);
3. applicable Decision ID(s) where relevant;
4. 1–3 canonical source files where normal complexity allows;
5. applicable `CFG-*` dependency;
6. a statement that no unapproved inference was used.

## Anti-Hallucination Rule

If canonical sources do not define the requested behavior, do not infer it from Legacy, downstream artifacts, examples, terminology, database fields or common industry practice. First check whether the missing detail is an owned configuration value. If it is not, report a new coverage gap instead of answering.
