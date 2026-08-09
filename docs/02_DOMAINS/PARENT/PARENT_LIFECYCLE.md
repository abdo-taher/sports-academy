# Parent Lifecycle

## Provenance

Migrated from `Academy_Platform_Documentation/04_BUSINESS_PROCESSES/LIFECYCLES/PARENT_LIFECYCLE.md` and normalized under the Parent domain.

## Purpose

Provides access, monitoring, requests, comments and payment participation.

## Scope

Covers business lifecycle behavior for the Parent domain only. Cross-domain effects are referenced, not duplicated as truth.

## Trigger

A business event or authorized actor initiates work involving Parent.

## Preconditions

- The relevant business record is identifiable.
- Actor relationship and approved process authority are established.
- Approved business decisions and mandatory configuration are available.

## Starting State

Guardian relationship rules are approved by BD-010, but a complete Parent/Guardian account and relationship state model is not canonically defined; this is a new coverage gap.

## Actors

Reception/Academy Admin manage setup; Parent owns requests and payments where applicable.

## Owner

See `../../01_BUSINESS_FOUNDATION/ROLE_RESPONSIBILITY_MATRIX.md`.

## Main Flow

1. Create or match the Parent/Guardian identity; resolve duplicates with provenance under BD-007 and apply the minor/adult Guardian model under BD-010.
2. Establish a Student relationship; one Parent may link to multiple Students under BR-PAR-001.
3. Grant visibility only to linked Students under BR-PAR-002 and the approved minor/adult account model under BD-010.
4. Permit request, comment, monitoring and payment actions only within approved authority; prohibit modification of official Attendance/Evaluation under BR-PAR-003.
5. Preserve relationship changes under BR-PAR-005 and archive rather than permanently delete a Parent tied to Student history under BR-PAR-004.
6. On Student Archive/Return, apply BD-024; no Parent/Guardian access is silently restored.

## Validations

- BR-PAR-001: A Parent can be linked to multiple Students.
- BR-PAR-002: A Parent may access only linked Students.
- BR-PAR-003: A Parent may request, comment and monitor but may not modify official Attendance or Evaluation records.
- BR-PAR-004: A Parent linked to Student history is archived rather than permanently deleted.
- BR-PAR-005: Changing a Student's Parent relationship preserves the previous history.

## Business Rules

See `PARENT_RULES.md`.

## State Transitions

A canonical Parent/Guardian account and relationship state transition table is not defined. Do not infer it from permissions, database or UX.

## Success Result

A permitted business outcome is recorded with required history.

## Failure / Rejection

If authority or eligibility fails, reject; if mandatory configuration is missing, hold as `BUSINESS CONFIGURATION REQUIRED` with the Rule/Configuration ID.

## Cancellation

Cancellation effects are valid only when approved in rules, lifecycle or decision log.

## Exceptions

- Adult Student self-account and multiple Guardians follow BD-010.
- Parent relationship change: preserve prior history under BR-PAR-005.
- Parent comment/request: never modifies official Attendance, Evaluation, Payment or approval truth.
- Post-Archive visibility follows BD-024; no silent access restoration.

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
- Subscription
- Payment
- Request
- Communication

## Approved Business Decisions

- BD-010 — approved; see Decision Log and linked canonical Rules.
- BD-024 — approved; see Decision Log and linked canonical Rules.
- BD-012 — approved; see Decision Log and linked canonical Rules.

## Downstream References

Downstream files must cite this lifecycle and the relevant Rule/Decision IDs.

## Source Extract

The previous lifecycle source was read during migration. Canonical behavior is represented above; historical evidence is isolated outside ACTIVE under the workspace `ARCHIVE/historical-documentation/` area.

## Pending Request Authority

BR-PAR-009 snapshots Guardian authority at submission and revalidates it at decision and execution. Loss of authority places the request on hold for a currently authorized party to continue/adopt or cancel; the original initiator and all checks remain historical.
