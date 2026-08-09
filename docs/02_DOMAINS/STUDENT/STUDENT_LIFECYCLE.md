# Student Lifecycle

## Provenance

Migrated from `Academy_Platform_Documentation/04_BUSINESS_PROCESSES/LIFECYCLES/LEAD_TRIAL_STUDENT_LIFECYCLE.md` and normalized under the Student domain.

## Purpose

Preserves identity, subscriptions, attendance, evaluations, transfers and timeline.

## Scope

Covers business lifecycle behavior for the Student domain only. Cross-domain effects are referenced, not duplicated as truth.

## Trigger

A business event or authorized actor initiates work involving Student.

## Preconditions

- The relevant business record is identifiable.
- Actor relationship and approved process authority are established.
- Approved business decisions and mandatory configuration are available.

## Starting State

APPROVED DECISION — BD-008

## Actors

Reception/Academy Admin for setup; operational roles by process.

## Owner

See `../../01_BUSINESS_FOUNDATION/ROLE_RESPONSIBILITY_MATRIX.md`.

## Main Flow

1. Create or match a separate Lead/Prospect for inquiry, Trial, follow-up and conversion under BD-007; do not create Student until formal enrollment.
2. Match against governed identity and apply authorized provenance-preserving duplicate resolution under BD-007; concrete identity keys are configuration/data governance.
3. If Trial is used, validate Branch Sport availability and an available time under BR-BRA-001 and BR-TRI-003.
4. Record configured approved Trial state/outcome under BR-TRI-001/004/005 without creating Student or Subscription automatically.
5. Record an Evaluation before any Level recommendation under BR-TRI-002.
6. Create the Student at formal enrollment and use Registered, Active, Temporarily Inactive or Archived states under BD-008.
7. Coordinate Subscription, Group, Attendance, Evaluation and Transfer through their owning lifecycles while preserving the Student identity and timeline.
8. For exit/Archive, preserve history under BR-ARC-001 and review active relationships under BD-024.
9. For restore/return, enforce BR-STU-004 and BR-ARC-002; no related record is silently reactivated.

## Validations

- BR-STU-001: Each Student has one governed identity; concrete matching keys are controlled data/configuration, and duplicate resolution preserves provenance.
- BR-STU-002: A Student keeps a persistent QR identity across subscription renewal.
- BR-STU-003: Student history, attendance, evaluations, transfers and timeline are preserved and are not permanently removed through normal operation.
- BR-STU-004: An Archived Student cannot receive a new Subscription before an approved restore/reactivation decision.
- BR-STU-005: A Student may have multiple active Subscriptions and Groups; every consuming Attendance resolves exactly one eligible funding Subscription.
- BR-TRI-001: A Trial does not create a Subscription automatically.
- BR-TRI-002: A Level recommendation is not produced without an Evaluation.
- BR-TRI-003: A Trial booking uses an available time.
- BR-ARC-001: Archive preserves historical records and is not equivalent to permanent deletion.
- BR-ARC-002: Restore does not automatically reactivate a Student, Subscription, Group or Account.

## Business Rules

See `STUDENT_RULES.md`.

## State Transitions

| From | Action | To | Initiator | Approver | Preconditions | Rejection | Effective Date / Effects | History / Audit |
|---|---|---|---|---|---|---|---|---|
| No Student | Formal enrollment after duplicate check | Registered | Reception / enrollment actor | Configured enrollment authority | Applicable Trial/Evaluation complete or bypass permitted; Lead provenance linked | No Student created; retain Lead and reason | Student identity begins before Subscription creation | Duplicate evidence, Lead link, actor and time |
| Registered | Activate Student operationally | Active | Authorized Student-state actor | Configured approver if required | Enrollment requirements satisfied | Remain Registered | Student may enter approved operations; Subscription still separately required | Before/after, actor, reason and time |
| Active | Mark temporarily inactive | Temporarily Inactive | Authorized Student-state actor | Configured state approver | Reason recorded; relationships reviewed | Remain Active | No automatic Subscription/Payment/Group rewrite | Full transition and relationship review |
| Temporarily Inactive | Reactivate Student | Active | Authorized Student-state actor | Configured state approver | Return review complete | Remain inactive | Student state resumes; other relationships require independent validity | Transition and decisions retained |
| Registered, Active or Temporarily Inactive | Archive after review | Archived | Authorized archive initiator | Archive approver | BR-ARC-003 active-relationship review complete | Remain current state | Long-term exit; no deletion | Archive reason, review and before/after state |
| Archived | Restore record for return review | Registered or Temporarily Inactive as explicitly approved | Authorized restore initiator | Restore approver | Fresh review completed | Remain Archived | No automatic Subscription, Group, account or entitlement restoration | Restore decision and independent follow-up actions |

## Trial State Transitions

| From | Action | To | Initiator | Approver | Preconditions | Rejection | Effective Date / Effects | History / Audit |
|---|---|---|---|---|---|---|---|---|
| Requested | Book available Trial | Scheduled | Reception / authorized booking actor | Not required unless policy says so | Branch, Sport, Program, schedule and capacity available | Remain Requested or close with reason | Scheduled time recorded | Actor, policy and availability evidence |
| Scheduled | Confirm | Confirmed | Authorized booking actor | Per Program policy | Booking remains eligible | Remain Scheduled/Cancelled | Confirmation time | Communication history |
| Scheduled or Confirmed | Cancel / reschedule | Cancelled or Scheduled | Parent/Guardian or authorized actor | Per policy | Configured cancellation/reschedule policy | Retain current state with reason | Effective change time | Prior schedule, reason and actor |
| Confirmed | Record attendance outcome | Attended or No-show | Authorized Trial actor | None for factual outcome | Trial time reached | Invalid/duplicate outcome rejected | Outcome time | Outcome history |
| Attended | Evaluate where policy requires | Evaluated | Coach | Supervisor/authorized Admin for official result | Evaluation policy requires it | Remain Attended pending review | Approved evaluation result | Version and approval history |
| Any nonterminal Trial | Close without conversion | Closed / Non-converted | Authorized enrollment actor | Per policy | Outcome/reason recorded | Remain current state | No Student/Subscription auto-created | Full Trial history retained |

## Success Result

A permitted business outcome is recorded with required history.

## Failure / Rejection

If authority or eligibility fails, reject; if mandatory configuration is missing, hold as `BUSINESS CONFIGURATION REQUIRED` with the Rule/Configuration ID.

## Cancellation

Cancellation effects are valid only when approved in rules, lifecycle or decision log.

## Exceptions

- Duplicate registration: stop automatic creation and apply the authorized BD-007 provenance-preserving resolution; do not merge by assumption.
- Trial cancellation/no-show/non-conversion follows BD-009 and effective Trial policy.
- Subscription expiry: does not change Student state and permits no normal Attendance grace.
- Archive with active Subscription, balance, debt, Group or Guardian access requires the BD-024 relationship review.
- Restore archived Student: record a restore decision; related activation remains separate under BR-ARC-002.

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
- Branch
- Subscription
- Training Group
- Attendance
- Evaluation
- Transfer
- Archive

## Approved Business Decisions

- BD-007 — approved; see Decision Log and linked canonical Rules.
- BD-008 — approved; see Decision Log and linked canonical Rules.
- BD-009 — approved; see Decision Log and linked canonical Rules.
- BD-010 — approved; see Decision Log and linked canonical Rules.
- BD-024 — approved; see Decision Log and linked canonical Rules.
- BD-016 — approved; see Decision Log and linked canonical Rules.
- BD-023 — approved; see Decision Log and linked canonical Rules.

## Downstream References

Downstream files must cite this lifecycle and the relevant Rule/Decision IDs.

## Source Extract

The previous lifecycle source was read during migration. Canonical behavior is represented above; historical evidence is isolated outside ACTIVE under the workspace `ARCHIVE/historical-documentation/` area.

## Approved Lead Lifecycle

Lead states are New, In Follow-up, Qualified, Disqualified, Lost, Converted and Closed under BR-LEA-003. Negative terminal states require reasons; reopening is authorized/audited; conversion preserves Lead provenance and duplicate resolution.
