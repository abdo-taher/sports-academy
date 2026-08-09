# Session Lifecycle

## Provenance

Migrated from `Academy_Platform_Documentation/04_BUSINESS_PROCESSES/LIFECYCLES/GROUP_SCHEDULE_LIFECYCLE.md` and normalized under the Session domain.

## Purpose

Provides the concrete event to which Attendance, coaches and reports attach.

## Scope

Covers business lifecycle behavior for the Session domain only. Cross-domain effects are referenced, not duplicated as truth.

## Trigger

A business event or authorized actor initiates work involving Session.

## Preconditions

- The relevant business record is identifiable.
- Actor relationship and approved process authority are established.
- Approved business decisions and mandatory configuration are available.

## Starting State

BD-030 governs cancellation/reschedule entitlement effects; a complete general Session state model remains a newly identified coverage gap.

## Actors

Coach/Supervisor/Admin according to schedule and authority.

## Owner

See `../../01_BUSINESS_FOUNDATION/ROLE_RESPONSIBILITY_MATRIX.md`.

## Main Flow

1. Identify Branch, Group, recurring schedule, assigned Coach and operational calendar.
2. Validate Branch Sport availability under BR-BRA-001 and the Group's Primary Coach/schedule under BR-GRP-001.
3. Check working day, holiday/closure and Coach/Group/time conflicts; only configured process authority may resolve a permitted conflict.
4. Create a distinct dated Training Session; never treat the recurring Group Schedule as the Session itself.
5. Retain Session-to-Coach assignment; a Substitute does not become Primary Coach under BR-GRP-003.
6. On delivery, provide the specific Session identity to Attendance and reporting.
7. On cancellation/rescheduling, retain original reference, actor, reason and change history, then apply BD-030 and BR-SES-001/002 for entitlement effects.
8. Never rewrite completed/past Session history because the future schedule changes.

## Validations

- No domain-specific validation is approved yet.

## Business Rules

See `SESSION_RULES.md`.

## State Transitions

Cancellation and reschedule effects are approved by BD-030; other Session states/transitions are not yet canonically defined.

## Success Result

A permitted business outcome is recorded with required history.

## Failure / Rejection

If authority or eligibility fails, reject; if mandatory configuration is missing, hold as `BUSINESS CONFIGURATION REQUIRED` with the Rule/Configuration ID.

## Cancellation

Cancellation effects are valid only when approved in rules, lifecycle or decision log.

## Exceptions

- Coach absence: use future-only reassignment under BD-011 and process authority under BD-025; cancellation follows BD-030 if chosen.
- Academy/Branch closure: state effects follow BD-004; each affected Session still requires an explicit operational outcome, which is a new coverage gap.
- Schedule conflict: block automatic confirmation until a configured authorized resolution under BD-025.
- Transfer effective during scheduled Sessions: future assignments update under BD-022; historical Sessions remain unchanged.
- Generated weather thresholds or notice times: non-authoritative.

## Permissions

Use role responsibility and permission artifacts. Authority follows the approved process matrix; an unbound implementation role is BUSINESS CONFIGURATION REQUIRED.

## Audit

Record actor, timestamp, reason and affected records for decisions, corrections, financial events and history-affecting changes.

## Timeline / History

Preserve historical records where required by canonical rules.

## Notifications

Use Communication domain; do not invent timing, template or escalation values.

## Cross-Domain Effects

- Training Group
- Coach
- Student
- Attendance
- Report
- Communication

## Approved Business Decisions

- BD-030 — approved; see Decision Log and linked canonical Rules.
- BD-025 — approved; see Decision Log and linked canonical Rules.
- BD-017 — approved; see Decision Log and linked canonical Rules.
- BD-018 — approved; see Decision Log and linked canonical Rules.
- BD-021 — approved; see Decision Log and linked canonical Rules.
- BD-026 — approved; see Decision Log and linked canonical Rules.

## Downstream References

Downstream files must cite this lifecycle and the relevant Rule/Decision IDs.

## Source Extract

The previous lifecycle source was read during migration. Canonical behavior is represented above; historical evidence is isolated outside ACTIVE under the workspace `ARCHIVE/historical-documentation/` area.

## Approved Session Lifecycle

States are Draft, Scheduled, Confirmed, In Progress, Completed, Cancelled and Superseded under BR-SES-004. Rescheduling retains the original and links a replacement/version. Branch closure uses BR-SES-003 to select an authorized outcome for every future Session. Completed history is never moved backward or overwritten.
