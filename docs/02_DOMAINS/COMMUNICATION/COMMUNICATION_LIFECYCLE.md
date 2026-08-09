# Communication Lifecycle

## Provenance

Migrated from `Academy_Platform_Documentation/04_BUSINESS_PROCESSES/LIFECYCLES/COMMUNICATION_LIFECYCLE.md` and normalized under the Communication domain.

## Purpose

Keeps stakeholders informed while respecting relationship visibility and audit requirements.

## Scope

Covers business lifecycle behavior for the Communication domain only. Cross-domain effects are referenced, not duplicated as truth.

## Trigger

A business event or authorized actor initiates work involving Communication.

## Preconditions

- The relevant business record is identifiable.
- Actor relationship and approved process authority are established.
- Approved business decisions and mandatory configuration are available.

## Starting State

Audience/authority are governed; template, channel, timing, retention, retry and delivery-state values depend on CFG-COM-001.

## Actors

Academy Admin or responsible operational role according to approved responsibility model.

## Owner

See `../../01_BUSINESS_FOUNDATION/ROLE_RESPONSIBILITY_MATRIX.md`.

## Main Flow

1. Receive an approved business event or authorized manual message/announcement request.
2. Identify audience from actor relationship, Branch/Academy scope and the event-owning domain.
3. Enforce authorized audience and relationship visibility under BR-COM-001.
4. Select an approved template/version without allowing template text to create business behavior.
5. Record dispatch/delivery outcome and retain communication history under BR-COM-002.
6. Apply retry/fallback only under approved policy; never change the underlying business outcome because delivery failed.
7. Keep official reports distinct from comments under BR-REP-001–003.

## Validations

- BR-REP-001: A Coach may write a report for an assigned Session.
- BR-REP-002: A Supervisor may write a report when responsible for the Session under the approved responsibility model.
- BR-REP-003: Parent and administration comments do not replace or erase the official report.
- BR-COM-001: Communication requires an authorized audience and respects relationship-based visibility.
- BR-COM-002: Business communication history is auditable and is not silently removed.

## Business Rules

See `COMMUNICATION_RULES.md`.

## State Transitions

Communication state values are configuration-dependent through CFG-COM-001; delivery failure never changes the underlying business event.

## Success Result

A permitted business outcome is recorded with required history.

## Failure / Rejection

If authority or eligibility fails, reject; if mandatory configuration is missing, hold as `BUSINESS CONFIGURATION REQUIRED` with the Rule/Configuration ID.

## Cancellation

Cancellation effects are valid only when approved in rules, lifecycle or decision log.

## Exceptions

- Unauthorized/unlinked recipient: reject under BR-COM-001.
- Delivery failure: retain status; retry/fallback values cannot be invented.
- Academy-cancelled Session must retain communication to affected parties under BD-030; owner/timing/channel follow BD-025 and CFG-COM-001.
- Comment or message cannot replace official Report, Attendance, Evaluation, Payment or decision history.

## Permissions

Use role responsibility and permission artifacts. Authority follows the approved process matrix; an unbound implementation role is BUSINESS CONFIGURATION REQUIRED.

## Audit

Record actor, timestamp, reason and affected records for decisions, corrections, financial events and history-affecting changes.

## Timeline / History

Preserve historical records where required by canonical rules.

## Notifications

Use Communication domain; do not invent timing, template or escalation values.

## Cross-Domain Effects

- Parent
- Student
- Coach
- Session
- Payment
- Request
- Notification

## Approved Business Decisions

- BD-025 — approved; see Decision Log and linked canonical Rules.
- BD-030 — approved; see Decision Log and linked canonical Rules.

## Downstream References

Downstream files must cite this lifecycle and the relevant Rule/Decision IDs.

## Source Extract

The previous lifecycle source was read during migration. Canonical behavior is represented above; historical evidence is isolated outside ACTIVE under the workspace `ARCHIVE/historical-documentation/` area.
