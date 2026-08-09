# Source of Truth

## Canonical Business Truth

DG-002 requires each concept and Rule to have one canonical owner; `BUSINESS_CONCEPT_OWNERSHIP_MATRIX.md` and `BUSINESS_RULE_INDEX.md` implement that constraint.

Canonical business truth is located in:

- `01_BUSINESS_FOUNDATION/`
- `02_DOMAINS/`
- `03_END_TO_END_JOURNEYS/`
- `04_POLICIES/`
- `15_CHANGE_MANAGEMENT/DECISION_LOG.md` for approved decisions
- `15_CHANGE_MANAGEMENT/DECISION_LOG.md` as the authoritative current decision record; closed-question working material is retained only in the separate historical archive

From the ACTIVE project root, these locations are:

- `docs/01_BUSINESS_FOUNDATION/`
- `docs/02_DOMAINS/`
- `docs/03_END_TO_END_JOURNEYS/`
- `docs/04_POLICIES/`
- `docs/15_CHANGE_MANAGEMENT/DECISION_LOG.md`

## Downstream Derivations

Downstream implementation and delivery documents are located in:

- `05_REQUIREMENTS/`
- `06_DDD/`
- `07_DATABASE/`
- `08_API/`
- `09_UX_UI/`
- `10_SECURITY/`
- `11_DEVOPS/`
- `12_QA/`
- `13_ANALYTICS/`

Downstream documents may not invent or override business behavior.

## Canonical Technical Governance

After canonical Business Truth and Requirements determine what must be built, implementation technology and structure are governed by:

- `00_GOVERNANCE/TECH_STACK_LOCK.md`;
- `00_GOVERNANCE/ARCHITECTURE_RULES.md`;
- `00_GOVERNANCE/DEPENDENCY_RULES.md`;
- `00_GOVERNANCE/CODING_STANDARDS.md`;
- `00_GOVERNANCE/TESTING_STRATEGY.md`;
- approved technical decisions registered in `15_CHANGE_MANAGEMENT/TECHNICAL_DECISION_LOG.md`.

Technical governance is authoritative for tools and patterns only. It cannot change a Business Rule, lifecycle, policy, permission or Requirement outcome. Contrary technology examples in supporting/legacy technical chapters have no implementation authority.

## Derived Views

`14_DERIVED_VIEWS/` contains read-only consumer views. They are not sources of business truth and must be regenerated after canonical changes.

## Legacy

Historical evidence is physically isolated under the parent workspace `ARCHIVE/historical-documentation/`, outside the ACTIVE project. It is not authoritative for current Business behavior and must be read only when historical comparison is explicitly requested.

## Precedence Rule

```text
Approved current Business Decision / governed Change
  > Canonical Business Rule
  > Canonical Domain Model / Lifecycle
  > Policy / Configuration
  > End-to-End Journey
  > Requirements
  > Canonical Technical Governance / Approved Technical ADR for implementation choices
  > Technical Documentation
  > Derived View
  > Historical Evidence
```

Technical code is an implementation of approved documentation and does not override Business Truth.

## Conflict Handling

- If canonical files conflict, use the higher-precedence source, stop dependent propagation and register the issue through `AI_CHANGE_PROPAGATION_PROTOCOL.md` and the cumulative Change Log.
- There are no open current-scope client Business Decisions. Missing percentages, amounts, durations, limits or role bindings are `BUSINESS CONFIGURATION REQUIRED`, not inferred values. A genuinely new business-model gap must be recorded through change governance before use.
- Do not resolve conflicts by using legacy, generated examples, database fields, API examples, UX mockups or derived views.
- If implementation conflicts with canonical technical governance, stop with `TECH STACK CONFLICT — ADR REQUIRED` and follow `TECH_DECISION_PROTOCOL.md`.
- Branch Sport availability is approved by BD-002 and BR-BRA-001 and must not be reopened.
