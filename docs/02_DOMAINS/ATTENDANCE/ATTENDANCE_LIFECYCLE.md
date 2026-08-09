# Attendance Lifecycle

## Provenance

Migrated from `Academy_Platform_Documentation/04_BUSINESS_PROCESSES/LIFECYCLES/ATTENDANCE_TRAINING_EVALUATION_LIFECYCLE.md` and normalized under the Attendance domain.

## Purpose

Records participation and drives session deduction/restoration where eligible.

## Scope

Covers business lifecycle behavior for the Attendance domain only. Cross-domain effects are referenced, not duplicated as truth.

## Trigger

A business event or authorized actor initiates work involving Attendance.

## Preconditions

- The relevant business record is identifiable.
- Actor relationship and approved process authority are established.
- Approved business decisions and mandatory configuration are available.

## Starting State

Attendance correction authority and eligibility outcomes remain policy-dependent.

## Actors

Coach/Supervisor/Admin according to approved authority.

## Owner

See `../../01_BUSINESS_FOUNDATION/ROLE_RESPONSIBILITY_MATRIX.md`.

## Main Flow

1. Identify the specific Training Session and Student under BR-ATT-001.
2. Resolve exactly one eligible funding Subscription under BD-016/017/019/023: active, financially cleared, non-frozen, unexpired and with sufficient nonnegative balance; ambiguity blocks deduction.
3. Reject a second Attendance for the same Student/Session under BR-ATT-002.
4. Record authorized Attendance status and retain actor/time/source.
5. For confirmed present Attendance, append exactly one linked Subscription Ledger deduction under BR-ATT-003 and BR-SUB-004.
6. For Absence, retain status; validate configured Excuse submitter/evidence/deadline/approver and apply prevention/restoration under BR-ATT-005.
7. For correction, append a correction record and compensating ledger event under BR-ATT-004; do not overwrite originals.
8. For academy cancellation/rescheduling, stop before inventing attendance/balance effects and apply BD-030.

## Validations

- BR-ATT-001: Attendance belongs to a specific Training Session, not merely a calendar day.
- BR-ATT-002: The same Student cannot have duplicate Attendance for the same Session.
- BR-ATT-003: Confirmed present Attendance deducts a session from the eligible Subscription Ledger.
- BR-ATT-004: Attendance correction preserves who changed it, the reason, timestamp and resulting ledger adjustment.
- BR-ATT-005: An accepted excuse may prevent deduction or restore a deducted session; make-up/extension selection is policy-dependent.

## Business Rules

See `ATTENDANCE_RULES.md`.

## State Transitions

| From | Action | To | Initiator | Approver | Preconditions | Rejection | Effective Date / Effects | History / Audit |
|---|---|---|---|---|---|---|---|---|
| No Attendance | Record factual outcome | Recorded | Attendance actor | Per authority matrix | Session/Student identified; duplicate absent; funding eligible if entitlement consumed | Rejected with Rule reason | Outcome time; present deduction exactly once | Actor, status, Session and funding Subscription |
| Recorded | Submit correction | Correction Requested | Authorized correction initiator | None | Existing record and reason identified | No request | Request time | Original unchanged; request retained |
| Correction Requested | Approve and apply | Corrected | Attendance correction executor | Correction approver | Evidence valid; compensating Ledger effect determined | Rejected with reason | Corrected business time; original preserved | Before/after, reason, approval and compensating entry |
| Recorded absence | Submit Excuse | Excuse Requested | Parent/Guardian or configured submitter | None | Evidence/deadline policy satisfied | Rejected at validation | Request time | Request/evidence history |
| Excuse Requested | Approve | Excuse Approved / Applied | Excuse executor | Excuse approver | Policy criteria pass | Excuse Rejected with reason | Prevent deduction or restore one through compensating entry | Decision, reason and Ledger link |

## Success Result

A permitted business outcome is recorded with required history.

## Failure / Rejection

If authority or eligibility fails, reject; if mandatory configuration is missing, hold as `BUSINESS CONFIGURATION REQUIRED` with the Rule/Configuration ID.

## Cancellation

Cancellation effects are valid only when approved in rules, lifecycle or decision log.

## Exceptions

- Duplicate Attendance: reject or return existing outcome without a second deduction under BR-ATT-002.
- Expired Subscription: BD-016.
- Frozen Subscription: BD-019.
- Multiple eligible Subscriptions: BD-023; no arbitrary deduction source.
- Negative balance: BD-017.
- Excused Absence/Make-up: BD-018; no generated entitlement duration.
- Correction: original Attendance and ledger entry remain; append reversal/adjustment under BR-ATT-004.
- Academy-cancelled Session: BD-030.

## Permissions

Use role responsibility and permission artifacts. Authority follows the approved process matrix; an unbound implementation role is BUSINESS CONFIGURATION REQUIRED.

## Audit

Record actor, timestamp, reason and affected records for decisions, corrections, financial events and history-affecting changes.

## Timeline / History

Preserve historical records where required by canonical rules.

## Notifications

Use Communication domain; do not invent timing, template or escalation values.

## Cross-Domain Effects

- Training Session
- Student
- Subscription Ledger
- Excuse
- Make-up Session
- Evaluation

## Approved Business Decisions

- BD-016 — approved; see Decision Log and linked canonical Rules.
- BD-017 — approved; see Decision Log and linked canonical Rules.
- BD-018 — approved; see Decision Log and linked canonical Rules.
- BD-025 — approved; see Decision Log and linked canonical Rules.
- BD-030 — approved; see Decision Log and linked canonical Rules.
- BD-008 — approved; see Decision Log and linked canonical Rules.
- BD-014 — approved; see Decision Log and linked canonical Rules.
- BD-019 — approved; see Decision Log and linked canonical Rules.
- BD-021 — approved; see Decision Log and linked canonical Rules.
- BD-023 — approved; see Decision Log and linked canonical Rules.
- BD-027 — approved; see Decision Log and linked canonical Rules.

## Downstream References

Downstream files must cite this lifecycle and the relevant Rule/Decision IDs.

## Source Extract

The previous lifecycle source was read during migration. Canonical behavior is represented above; historical evidence is isolated outside ACTIVE under the workspace `ARCHIVE/historical-documentation/` area.

## Post-Recording Session Cancellation

Under BR-ATT-008, Attendance already recorded for a later-cancelled Session becomes Voided — Session Cancelled through a retained version. It is excluded from performance counts and linked to exactly one Ledger restoration; the original Attendance is never deleted.
