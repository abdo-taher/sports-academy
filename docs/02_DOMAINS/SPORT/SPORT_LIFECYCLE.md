# Sport Lifecycle

## Provenance

Migrated from `Academy_Platform_Documentation/04_BUSINESS_PROCESSES/LIFECYCLES/SPORT_LEVEL_AVAILABILITY_LIFECYCLE.md` and normalized under the Sport domain.

## Purpose

Organizes levels, evaluation models, coaches, training groups and subscriptions.

## Scope

Covers business lifecycle behavior for the Sport domain only. Cross-domain effects are referenced, not duplicated as truth.

## Trigger

A business event or authorized actor initiates work involving Sport.

## Preconditions

- The relevant business record is identifiable.
- Actor relationship and approved process authority are established.
- Approved business decisions and mandatory configuration are available.

## Starting State

No standalone Sport lifecycle/state model is canonically defined; this is a new coverage gap for creation, activation, retirement and effects on existing relationships.

## Actors

Academy administration with branch availability constrained by BD-002.

## Owner

See `../../01_BUSINESS_FOUNDATION/ROLE_RESPONSIBILITY_MATRIX.md`.

## Main Flow

1. Establish Sport as an Academy sports discipline and define its Level/reference catalog through authorized administration.
2. Enable availability per Branch under BD-002/BR-BRA-001.
3. Associate Sport-specific Evaluation models under BR-EVA-001 and approved Coach assignments.
4. Permit Group, Schedule, Subscription and selection only in Branches where the Sport is enabled.
5. Hand off to the approved Sport → Program → Service/Plan → Student Subscription hierarchy under BD-006.
6. Preserve changes to availability/catalog/policy with effective history and notify dependent domains.

## Validations

- Branch operational selection requires explicit Sport enablement under BR-BRA-001.
- Sport-specific Level/Evaluation configuration must be effective-dated and governed.

## Business Rules

See `SPORT_RULES.md`.

## State Transitions

A complete Sport state transition table cannot be produced without approved states and retirement/deactivation effects.

## Success Result

A permitted business outcome is recorded with required history.

## Failure / Rejection

If authority or eligibility fails, reject; if mandatory configuration is missing, hold as `BUSINESS CONFIGURATION REQUIRED` with the Rule/Configuration ID.

## Cancellation

Cancellation effects are valid only when approved in rules, lifecycle or decision log.

## Exceptions

- Sport disabled for Branch: reject operational selection under BR-BRA-001.
- Program-dependent catalog/pricing follows BD-006 and effective Plan configuration.
- Coach cross-Sport scope follows BD-011.
- Level movement and Sport Transfer follow BD-013/BD-022.
- Cross-Sport balances do not merge and carry-over does not cross Sport by default under BD-021/BD-023.

## Permissions

Use role responsibility and permission artifacts. Authority follows the approved process matrix; an unbound implementation role is BUSINESS CONFIGURATION REQUIRED.

## Audit

Record actor, timestamp, reason and affected records for decisions, corrections, financial events and history-affecting changes.

## Timeline / History

Preserve historical records where required by canonical rules.

## Notifications

Use Communication domain; do not invent timing, template or escalation values.

## Cross-Domain Effects

- Branch
- Program
- Level
- Coach
- Training Group
- Evaluation

## Approved Business Decisions

- BD-006 — approved; see Decision Log and linked canonical Rules.
- BD-028 — approved; see Decision Log and linked canonical Rules.
- BD-011 — approved; see Decision Log and linked canonical Rules.
- BD-021 — approved; see Decision Log and linked canonical Rules.
- BD-022 — approved; see Decision Log and linked canonical Rules.
- BD-029 — approved; see Decision Log and linked canonical Rules.

## Downstream References

Downstream files must cite this lifecycle and the relevant Rule/Decision IDs.

## Source Extract

The previous lifecycle source was read during migration. Canonical behavior is represented above; historical evidence is isolated outside ACTIVE under the workspace `ARCHIVE/historical-documentation/` area.

## Approved Sport Lifecycle

Sport states are Draft, Active, Suspended and Retired under BR-SPT-001. Suspension/retirement blocks new dependencies; existing approved relationships continue to normal completion. Reactivation requires approval and never erases the inactive interval. Stage/Level structure follows BR-LVL-001–003.
