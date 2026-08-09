# Transfer Lifecycle

## Provenance

Migrated from `Academy_Platform_Documentation/04_BUSINESS_PROCESSES/LIFECYCLES/CHANGE_REQUESTS_LIFECYCLE.md` and normalized under the Transfer domain.

## Purpose

Changes operational assignment while preserving old/new history and decision reason.

## Scope

Covers business lifecycle behavior for the Transfer domain only. Cross-domain effects are referenced, not duplicated as truth.

## Trigger

A business event or authorized actor initiates work involving Transfer.

## Preconditions

- The relevant business record is identifiable.
- Actor relationship and approved process authority are established.
- Approved business decisions and mandatory configuration are available.

## Starting State

BD-022 approves separate Group, Level, Sport and Branch Transfer types and their effective-dated, historical boundary.

## Actors

Approval authority is resolved by Transfer type/scope through the Process Authority Matrix.

## Owner

See `../../01_BUSINESS_FOUNDATION/ROLE_RESPONSIBILITY_MATRIX.md`.

## Main Flow

1. Identify Student, requested transfer type, old assignment, proposed new assignment, reason and requested effective date.
2. Validate destination Branch Sport availability under BR-BRA-001 and receiving Group suitability/capacity under BR-GRP-004 where applicable.
3. Validate type-specific eligibility/effects through CFG-TRN-001–004 and process authority through BD-025.
4. Approve or reject without changing assignment during request review.
5. On approved effective date, apply only approved cross-domain effects to Group, Level, Sport, Branch, Schedule and Subscription.
6. Preserve old/new assignments, effective date, reason and decision history under BR-GRP-002; notify affected actors.

## Validations

- No domain-specific validation is approved yet.

## Business Rules

See `TRANSFER_RULES.md`.

## State Transitions

| From | Action | To | Initiator | Approver | Preconditions | Rejection | Effective Date / Effects | History / Audit |
|---|---|---|---|---|---|---|---|---|
| No Request | Submit typed Transfer | Requested | Parent/Guardian, Student where allowed, or authorized staff | None | Group/Level/Sport/Branch type and destination identified | No request; validation reason | Request time | Request actor, old/proposed assignment and reason |
| Requested | Review | Under Review | Reviewer by type | None | Required evidence/availability/capacity collected | Remain Requested or cancel | Review start | Review actions retained |
| Under Review | Approve | Approved | Transfer approver by type/scope | Same role | Type-specific criteria pass | Rejected with reason | Approved effective date scheduled | Decision actor/reason and before/after proposal |
| Requested or Under Review | Cancel | Cancelled | Authorized requester/administrator | Per cancellation policy | Not yet Effective | Remain current state with reason | No assignment change | Cancellation history |
| Approved | Apply at effective date | Effective | Transfer executor | Prior approval | Destination still eligible; future effects determined | Hold and escalate; history unchanged | Future Groups/Sessions and approved Subscription effects update; history not rewritten | Effective event and all affected records |

## Success Result

A permitted business outcome is recorded with required history.

## Failure / Rejection

If authority or eligibility fails, reject; if mandatory configuration is missing, hold as `BUSINESS CONFIGURATION REQUIRED` with the Rule/Configuration ID.

## Cancellation

Cancellation effects are valid only when approved in rules, lifecycle or decision log.

## Exceptions

- Capacity issue: reject or hold unless the applicable typed policy and process authority explicitly permit an auditable resolution.
- Destination Branch lacks Sport: reject under BR-BRA-001.
- Transfer during scheduled Sessions: future assignments update from effective date; historical Sessions remain unchanged.
- Promotion-triggered transfer: apply Sport/Level criteria under BD-013 and the applicable Transfer type under BD-022.

## Permissions

Use role responsibility and permission artifacts. Authority follows the approved process matrix; an unbound implementation role is BUSINESS CONFIGURATION REQUIRED.

## Audit

Record actor, timestamp, reason and affected records for decisions, corrections, financial events and history-affecting changes.

## Timeline / History

Preserve historical records where required by canonical rules.

## Notifications

Use Communication domain; do not invent timing, template or escalation values.

## Cross-Domain Effects

- Student
- Group
- Level
- Sport
- Branch
- Subscription
- Attendance

## Approved Business Decisions

- BD-022 — approved; see Decision Log and linked canonical Rules.
- BD-025 — approved; see Decision Log and linked canonical Rules.

## Downstream References

Downstream files must cite this lifecycle and the relevant Rule/Decision IDs.

## Source Extract

The previous lifecycle source was read during migration. Canonical behavior is represented above; historical evidence is isolated outside ACTIVE under the workspace `ARCHIVE/historical-documentation/` area.
