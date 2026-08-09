# Branch Lifecycle

## Provenance

Migrated from `Academy_Platform_Documentation/04_BUSINESS_PROCESSES/LIFECYCLES/BRANCH_LIFECYCLE.md` and normalized under the Branch domain.

## Purpose

Scopes location-specific operation while preserving academy standards.

## Scope

Covers business lifecycle behavior for the Branch domain only. Cross-domain effects are referenced, not duplicated as truth.

## Trigger

A business event or authorized actor initiates work involving Branch.

## Preconditions

- The relevant business record is identifiable.
- Actor relationship and approved process authority are established.
- Approved business decisions and mandatory configuration are available.

## Starting State

APPROVED DECISION — BD-004

## Actors

Branch Admin within Branch scope; Academy Admin for Academy-wide/cross-Branch governance, under BD-025.

## Owner

See `../../01_BUSINESS_FOUNDATION/ROLE_RESPONSIBILITY_MATRIX.md`.

## Main Flow

1. Identify the parent Academy and Branch operational identity under the Hybrid model.
2. Configure supported Sports through the approved Branch Sport availability rule BR-BRA-001.
3. Prevent registration, Trial, service selection, Group, Schedule and Subscription use of a Sport not enabled for the Branch.
4. Resolve configuration using the Academy default and only an explicitly permitted, effective more-specific override under BD-028.
5. Apply Planned, Active, Temporarily Closed and Archived transitions under BD-004 and the process authority matrix.
6. Retain configuration, state and availability history and notify affected domains of approved changes.

## Validations

- BR-BRA-001: A Sport must not be shown as available in a Branch unless that Branch supports or enables that Sport. This applies to registration, Trial booking, service selection, Groups, Scheduling, Subscription creation, Frontend filtering and API validation.

## Business Rules

See `BRANCH_RULES.md`.

## State Transitions

| From | Action | To | Initiator | Approver | Preconditions | Rejection | Effective Date / Effects | History / Audit |
|---|---|---|---|---|---|---|---|---|
| Planned | Activate Branch | Active | Branch Admin or Academy Admin | Configured Branch state approver | Operating data and approved availability configured | Remain Planned | Effective time starts normal Branch operation | Actor, approver, readiness evidence and before/after state |
| Active | Temporarily close | Temporarily Closed | Branch Admin or Academy Admin | Configured Branch state approver | Closure reason and affected-operation review | Remain Active | Normal Branch operations stop; Student/Subscription state unchanged; Session handling follows BR-SES-001/002 | Closure reason, dates, affected Sessions and notifications |
| Temporarily Closed | Reopen | Active | Branch Admin or Academy Admin | Configured Branch state approver | Reopening readiness confirmed | Remain closed | Normal Branch operations resume from effective time | Full decision history |
| Planned, Active or Temporarily Closed | Archive | Archived | Academy Admin | Configured non-delegable authority | Active-relationship review complete | Remain current state | Long-term closure; no history deletion | Non-destructive Archive audit |

## Success Result

A permitted business outcome is recorded with required history.

## Failure / Rejection

If authority or eligibility fails, reject; if mandatory configuration is missing, hold as `BUSINESS CONFIGURATION REQUIRED` with the Rule/Configuration ID.

## Cancellation

Cancellation effects are valid only when approved in rules, lifecycle or decision log.

## Exceptions

- Unsupported Sport at Branch: reject selection under BR-BRA-001.
- Temporary closure and Archive follow BD-004; cancelled/rescheduled Session effects follow BD-030.
- Reject a Branch override that is not explicitly permitted by BD-028 and the configuration catalog.
- Cross-Branch Coach assignment follows BD-011; Student Branch Transfer follows BD-022.

## Permissions

Use role responsibility and permission artifacts. Authority follows the approved process matrix; an unbound implementation role is BUSINESS CONFIGURATION REQUIRED.

## Audit

Record actor, timestamp, reason and affected records for decisions, corrections, financial events and history-affecting changes.

## Timeline / History

Preserve historical records where required by canonical rules.

## Notifications

Use Communication domain; do not invent timing, template or escalation values.

## Cross-Domain Effects

- Academy
- Sport
- Coach
- Training Group
- Schedule
- Student
- Subscription

## Approved Business Decisions

- BD-004 — approved; see Decision Log and linked canonical Rules.
- BD-028 — approved; see Decision Log and linked canonical Rules.
- BD-025 — approved; see Decision Log and linked canonical Rules.
- BD-006 — approved; see Decision Log and linked canonical Rules.
- BD-011 — approved; see Decision Log and linked canonical Rules.
- BD-022 — approved; see Decision Log and linked canonical Rules.

## Downstream References

Downstream files must cite this lifecycle and the relevant Rule/Decision IDs.

## Source Extract

The previous lifecycle source was read during migration. Canonical behavior is represented above; historical evidence is isolated outside ACTIVE under the workspace `ARCHIVE/historical-documentation/` area.

## Final NBCG Closure

Branch closure invokes BR-SES-003 for every future Session. Availability withdrawal follows BR-BRA-004: new use is blocked prospectively and existing approved relationships are grandfathered until completion/renewal. Neither action silently changes Student or Subscription state.
