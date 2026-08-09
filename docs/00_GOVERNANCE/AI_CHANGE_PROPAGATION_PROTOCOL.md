# AI Business-First Change Propagation Protocol

## Authority and Purpose

This is the single authoritative workflow for changing the ACTIVE Sports Academy Platform repository. It governs **how changes occur**; it does not create Business Truth.

Tool-specific files such as `AGENTS.md`, `.codex/`, `CLAUDE.md`, Cursor rules and Copilot instructions are adapters to this protocol and must not duplicate or redefine it.

## 1. Determine Whether the Request Is Read-Only or a Change

- A question, explanation, review or status request is read-only: route to the relevant sources and answer without modifying files.
- Add, change, remove, update, modify, implement, redesign, rename, migrate or equivalent intent is a change: continue through this protocol.
- Documentation and code implementation are separate actions. A documentation-only request does not authorize code changes.

## 2. Classify the Change

Classify the request as one or more of:

- Business behavior or Business policy;
- Business configuration value;
- governance or repository structure;
- Requirements or Product;
- Backend, Database or API;
- Frontend or UX/UI;
- Security;
- QA;
- Analytics;
- infrastructure;
- documentation-only presentation.

Record the classification and the primary and secondary domains. Do not assume a technical or visual request changes Business behavior unless its outcome genuinely changes what the platform permits, requires or records.

## 3. Business Impact Analysis

For any possible Business impact:

1. route through `BUSINESS_QUESTION_ROUTER.md` and `BUSINESS_CONCEPT_INDEX.md`;
2. identify the owning Domain, Rules, lifecycle, policy, authority, journey, Client BRD section and indexes;
3. identify affected Decisions and configuration IDs;
4. distinguish a configurable value change from a change to Business policy;
5. do not infer missing behavior from code, API, Database, UX, QA, Derived Views or Archive.

## 4. Canonical Business Update and Propagation

When Business behavior changes, update in authority order:

1. approved current Business Decision/Change when required;
2. canonical Business Rule;
3. canonical Domain model and lifecycle;
4. Policy and configuration;
5. End-to-End Journey;
6. Business indexes, ownership and question routing;
7. Client BRD when client-visible;
8. Business certification or coverage artifacts when their result changes.

Preserve prior truth, effective dates, authority and history. Never create duplicate owners for the same concept or Rule.

## 5. Mandatory Business Gate

Technical propagation for a Business-affecting change cannot begin until all checks pass:

- canonical Rules are consistent;
- lifecycle is consistent;
- policy/configuration is consistent;
- authority is consistent;
- Client BRD is updated when relevant;
- Business indexes and routing are updated;
- no stale active Business document remains;
- no canonical contradiction exists;
- every new Rule or Decision is discoverable and owned.

The required gate result is:

`BUSINESS CHANGE PROPAGATED — CANONICAL BUSINESS CONSISTENT`

If the gate fails, stop technical work and report the unresolved Business issue. A missing production value is configuration, not permission to invent a value.

For a proven non-Business change, record `N/A — NO BUSINESS IMPACT` and continue only in the affected layer.

## 6. Technical Impact Analysis and Propagation

After the Business Gate, evaluate every layer below and mark it `IMPACTED` or `N/A — NO IMPACT`:

Before technical implementation or structural changes, read `TECH_STACK_LOCK.md`, `ARCHITECTURE_RULES.md`, `DEPENDENCY_RULES.md`, `CODING_STANDARDS.md` and `TESTING_STRATEGY.md`. A conflict with the locked stack stops work until `TECH_DECISION_PROTOCOL.md` produces an approved ADR.

| Layer | Required evaluation |
|---|---|
| Requirements | Capability, story, acceptance and traceability impact |
| Backend / DDD | Domain behavior, invariant and application behavior impact |
| Database | integrity, lifecycle, history and persistence impact |
| API | contract, validation, state and error behavior impact |
| Frontend / UX | actions, states, visibility, journeys and content impact |
| Security | relationship, permission, privacy and authority impact |
| QA | Rule, lifecycle, regression and acceptance coverage impact |
| Analytics | definitions, status meaning and reporting impact |
| Derived Views | every affected consumer view |
| Client BRD | client-visible scope or behavior impact |

No affected layer may be silently skipped. Requirements precede technical specifications; technical specifications precede code.

## 7. Code Implementation

If code implementation is explicitly requested:

1. finish the Business phase when Business behavior changes;
2. finish technical documentation propagation;
3. implement only in the affected applications/packages;
4. preserve Business invariants, authority, audit and history;
5. add or update tests;
6. validate documentation and code together.

If only documentation was requested, stop before implementation. Code never overrides canonical Business Truth.

## 8. Change Log

Update `../15_CHANGE_MANAGEMENT/CHANGE_LOG.md` cumulatively. Record:

- Change ID and date;
- request summary and type;
- primary and secondary domains;
- affected Rule and Decision IDs;
- Business files, technical documents and code changed;
- effective date;
- Business Gate result;
- technical propagation result;
- validation result.

Do not create a separate change file for each small change.

## 9. Stale-Document Scan and Final Validation

Before completion:

1. scan active Markdown references and links;
2. search for superseded terminology, old paths and conflicting outcomes;
3. verify Rule and Decision discoverability and uniqueness;
4. verify every impacted layer was updated or explicitly marked N/A;
5. verify tests and validation proportional to the change;
6. verify Archive was not used as current authority;
7. finalize the Change Log result.

Do not declare completion while an affected active artifact remains stale.

## 10. Classification Examples

| Request | Classification | Required route |
|---|---|---|
| “Parents may reply to Coach Session feedback.” | Business behavior | Evaluation/Guardian Rules → lifecycle/visibility/authority → Client BRD → Business Gate → every impacted technical layer |
| “Increase the Save button size.” | UX/design only | Frontend/UX only; Business documentation is `N/A — NO IMPACT` |
| “Change maximum Freeze duration.” | First determine configuration value versus policy | If an existing CFG value changes, update configuration and affected validation/presentation/tests; if eligibility or policy meaning changes, run the Business-first path |
| “Implement Parent comments on Session Feedback.” | Implementation of existing or new Business behavior | Verify canonical support first; Business phase if missing → technical docs → code → tests → Change Log → stale scan |

Hypothetical classification tests are dry-runs only and must not change Business behavior.
