# Evaluation Lifecycle

## Provenance

Migrated from `Academy_Platform_Documentation/04_BUSINESS_PROCESSES/LIFECYCLES/ATTENDANCE_TRAINING_EVALUATION_LIFECYCLE.md` and normalized under the Evaluation domain.

## Purpose

Supports level recommendation, progress tracking and parent/admin visibility.

## Scope

Covers business lifecycle behavior for the Evaluation domain only. Cross-domain effects are referenced, not duplicated as truth.

## Trigger

A business event or authorized actor initiates work involving Evaluation.

## Preconditions

- The relevant business record is identifiable.
- Actor relationship and approved process authority are established.
- Approved business decisions and mandatory configuration are available.

## Starting State

BD-012 governs creator/reviewer separation and approval/publication states.

## Actors

Coach creates; Supervisor or specifically authorized Admin reviews/approves and publishes.

## Owner

See `../../01_BUSINESS_FOUNDATION/ROLE_RESPONSIBILITY_MATRIX.md`.

## Main Flow

1. Identify Student, Sport, Evaluation type/purpose, template/version and assigned evaluator.
2. Apply the Sport-specific Evaluation model under BR-EVA-001; initial placement cannot recommend Level without an Evaluation under BR-TRI-002.
3. Schedule periodic Evaluation only through authorized configuration under BR-EVA-002; do not infer a frequency.
4. Record assessment as a versioned business record.
5. Route review, approval and publication through the BD-012/BD-025 authority path; reject bypass or self-approval where separation applies.
6. Apply Level assignment/promotion/demotion/re-evaluation only under BD-013 and transfer effects under BD-022.
7. Correct by creating a new linked version under BR-EVA-003; never overwrite an approved version.
8. Publish/notify only to authorized audiences; Parent cannot edit official Evaluation under BR-PAR-003.

## Validations

- BR-EVA-001: Each Sport may use a different Evaluation model.
- BR-EVA-002: Periodic Evaluation scheduling is configurable by authorized administration.
- BR-EVA-003: An approved Evaluation is not deleted or overwritten; a correction preserves the earlier version.
- BR-EVA-004: Official Evaluation uses creator/reviewer separation and required approval before publication.

## Business Rules

See `EVALUATION_RULES.md`.

## State Transitions

| From | Action | To | Initiator | Approver | Preconditions | Rejection | Effective Date / Effects | History / Audit |
|---|---|---|---|---|---|---|---|---|
| No Evaluation | Record assessment | Draft | Assigned Coach | None | Student, Sport, type and template/version identified | No record or rejected invalid input | Assessment time | Creator/template/version retained |
| Draft | Submit for review | Submitted | Coach | None | Required assessment content complete | Remain Draft with validation reasons | Submission time | Submission event |
| Submitted | Approve | Approved | Supervisor or specifically authorized Admin | Same decision role | Criteria and evidence valid | Rejected with reason | Approval effective time; movement may proceed only if governed | Creator/reviewer separation and decision history |
| Submitted | Reject | Rejected | Supervisor or specifically authorized Admin | Same decision role | Review completed | N/A | No publication/movement | Recommendation, reason and actor retained |
| Approved | Publish official result | Published | Authorized executor | Approval already present | Audience/visibility valid | Remain Approved | Result becomes officially visible | Publication event and audience |
| Published or Approved | Correct through new version | Draft correction | Authorized correction initiator | Supervisor/authorized Admin reapproves | Error reason recorded | Original remains current | New version only after approval | Original, correction, reason and approval chain preserved |

## Success Result

A permitted business outcome is recorded with required history.

## Failure / Rejection

If authority or eligibility fails, reject; if mandatory configuration is missing, hold as `BUSINESS CONFIGURATION REQUIRED` with the Rule/Configuration ID.

## Cancellation

Cancellation effects are valid only when approved in rules, lifecycle or decision log.

## Exceptions

- Missing Evaluation: no Level recommendation under BR-TRI-002.
- Evaluator/reviewer disagreement: decision workflow and authority BD-012.
- Evaluation correction: append version and preserve original under BR-EVA-003.
- Incorrect placement, promotion, demotion or re-evaluation: BD-013; do not infer thresholds.
- Transfer following movement: BD-022.

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
- Sport
- Level
- Coach
- Parent
- Promotion

## Approved Business Decisions

- BD-012 — approved; see Decision Log and linked canonical Rules.
- BD-013 — approved; see Decision Log and linked canonical Rules.
- BD-009 — approved; see Decision Log and linked canonical Rules.

## Downstream References

Downstream files must cite this lifecycle and the relevant Rule/Decision IDs.

## Source Extract

The previous lifecycle source was read during migration. Canonical behavior is represented above; historical evidence is isolated outside ACTIVE under the workspace `ARCHIVE/historical-documentation/` area.

## Final Evaluation and Progression Coverage

Evaluation types share one governed concept: Initial Placement, Periodic/Progress, Level Progression, Re-evaluation and Correction. An Initial Evaluation may be performed by an authorized Coach or Admin/Evaluator; system output is advisory and final placement/progression is human-approved. Session Feedback/comments follow BR-EVA-007/008 and never change official results. Stage/Level progression follows BR-LVL-001–003 and retains the criteria version governing each Evaluation.
