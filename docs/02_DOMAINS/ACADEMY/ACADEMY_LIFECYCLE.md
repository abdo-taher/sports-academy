# Academy Lifecycle

## Provenance

Migrated from `Academy_Platform_Documentation/04_BUSINESS_PROCESSES/LIFECYCLES/ACADEMY_LIFECYCLE.md` and normalized under the Academy domain.

## Purpose

Represents the top-level business operating entity.

## Scope

Covers business lifecycle behavior for the Academy domain only. Cross-domain effects are referenced, not duplicated as truth.

## Trigger

A business event or authorized actor initiates work involving Academy.

## Preconditions

- The relevant business record is identifiable.
- Actor relationship and approved process authority are established.
- Approved business decisions and mandatory configuration are available.

## Starting State

APPROVED DECISION — BD-004

## Actors

Academy Admin / Super Admin according to approved authority.

## Owner

See `../../01_BUSINESS_FOUNDATION/ROLE_RESPONSIBILITY_MATRIX.md`.

## Main Flow

1. Establish the Academy identity and Hybrid Academy/Branch operating boundary under BD-001.
2. Establish Branches and approved Branch Sport availability under BD-002/BR-BRA-001.
3. Apply BR-CFG-001 and the Policy Configuration Catalog; Academy default applies unless an approved effective override exists.
4. Route sensitive changes through the approved Process Authority Matrix and effective delegation.
5. Record approved Active, Suspended and Archived state transitions through the process authority matrix, with explicit effective effects.
6. Preserve Audit, Decision and Approval History under `HISTORY_AND_AUDIT_MODEL.md` and notify authorized audiences through Communication.

## Validations

- BR-GOV-001: A generated example, recommendation or technical design is not a business rule unless supported by a verified decision.
- BR-GOV-002: An unresolved conflict is recorded as an Open Question and is not resolved by assumption.

## Business Rules

See `ACADEMY_RULES.md`.

## State Transitions

| From | Action | To | Initiator | Approver | Preconditions | Rejection | Effective Date / Effects | History / Audit |
|---|---|---|---|---|---|---|---|---|
| Active | Suspend Academy | Suspended | Academy Admin | Configured Academy state approver | Active Academy; impact review complete | Remain Active with reason | Recorded effective time; normal Academy operations pause according to configured controls; Student/Subscription state unchanged automatically | Before/after, actor, approver, reason and affected operations |
| Suspended | Resume Academy | Active | Academy Admin | Configured Academy state approver | Suspension conditions resolved | Remain Suspended with reason | Recorded effective time; authorized operations resume | Full transition/decision history |
| Active or Suspended | Archive Academy | Archived | Academy Admin | Configured non-delegable authority | Active-relationship and history review complete | Remain current state | Long-term exit; history preserved | Non-destructive Archive audit |

## Success Result

A permitted business outcome is recorded with required history.

## Failure / Rejection

If authority or eligibility fails, reject; if mandatory configuration is missing, hold as `BUSINESS CONFIGURATION REQUIRED` with the Rule/Configuration ID.

## Cancellation

Cancellation effects are valid only when approved in rules, lifecycle or decision log.

## Exceptions

- Multi-branch operation does not authorize independent tenants; BD-005 keeps them future scope.
- Academy and Branch closure use the approved state models in BD-004.
- Branch Sport availability remains protected by BD-002/BR-BRA-001 and BD-028 cannot override it.
- A feature flag cannot make a Future or unapproved capability current.

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
- Sport
- Policy
- Actor

## Approved Business Decisions

- BD-004 — approved; see Decision Log and linked canonical Rules.
- BD-005 — approved; see Decision Log and linked canonical Rules.
- BD-025 — approved; see Decision Log and linked canonical Rules.
- BD-028 — approved; see Decision Log and linked canonical Rules.
- BD-030 — approved; see Decision Log and linked canonical Rules.

## Downstream References

Downstream files must cite this lifecycle and the relevant Rule/Decision IDs.

## Source Extract

The previous lifecycle source was read during migration. Canonical behavior is represented above; historical evidence is isolated outside ACTIVE under the workspace `ARCHIVE/historical-documentation/` area.

## Final NBCG Closure

Under BR-ACA-002, suspension/archive enters dependency review and completes only after active Branches, Sessions, enrollments, Subscriptions, balances and pending requests have explicit authorized outcomes. Reactivation never silently restores a dependent relationship. Every review item preserves actor, decision, reason and effective time.
