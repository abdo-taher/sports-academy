# Coach Lifecycle

## Provenance

Migrated from `Academy_Platform_Documentation/04_BUSINESS_PROCESSES/LIFECYCLES/COACH_LIFECYCLE.md` and normalized under the Coach domain.

## Purpose

Delivers training and creates operational records within assignment scope.

## Scope

Covers business lifecycle behavior for the Coach domain only. Cross-domain effects are referenced, not duplicated as truth.

## Trigger

A business event or authorized actor initiates work involving Coach.

## Preconditions

- The relevant business record is identifiable.
- Actor relationship and approved process authority are established.
- Approved business decisions and mandatory configuration are available.

## Starting State

BD-011 governs effective Coach assignments, suspension and exit; `COACH_ASSIGNMENT.md` contains the explicit assignment transitions.

## Actors

Academy/Supervisor according to approved responsibility model.

## Owner

See `../../01_BUSINESS_FOUNDATION/ROLE_RESPONSIBILITY_MATRIX.md`.

## Main Flow

1. Identify Coach, Branch, Sport and approved effective assignment scope under BD-011; multiple qualified Branch/Sport assignments are allowed.
2. Assign a Primary Coach to a Group under BR-GRP-001 with schedule/conflict validation.
3. Assign a Substitute only to the intended Session; BR-GRP-003 prevents automatic Primary Coach replacement.
4. Permit Session reporting under BR-REP-001 and Evaluation work only within BD-012-approved authority.
5. Process reassignment, suspension or exit only through BD-011/023-approved authority.
6. Preserve assignment, replacement, evaluation/report and offboarding history; notify affected Groups/Sessions.

## Validations

- No domain-specific validation is approved yet.

## Business Rules

See `COACH_RULES.md`.

## State Transitions

| From | Action | To | Initiator | Approver | Preconditions | Rejection | Effective Date / Effects | History / Audit |
|---|---|---|---|---|---|---|---|---|
| Proposed assignment | Approve | Approved / Active assignment | Branch or Academy assignment actor | Coach assignment approver | Qualification, Branch/Sport scope and conflicts checked | Rejected with reason | Effective start date | Assignment scope, checks, actors and date |
| Active assignment | Suspend | Suspended | Authorized Coach administration | Suspension approver | Reason and future responsibility plan recorded | Remain Active | Future responsibility pauses/reassigns; history unchanged | Reason, actor, affected future work |
| Suspended | Resume assignment | Active assignment | Authorized Coach administration | Assignment approver | Conditions resolved and conflicts checked | Remain Suspended | Future responsibility resumes | Transition history |
| Active or Suspended | End assignment / Coach exit | Ended | Authorized Coach administration | Exit approver | Future Groups/Sessions reassigned | Remain until plan complete | Future responsibility ends; historical Sessions/Evaluations unchanged | Exit decision, effective date and reassignment links |

## Success Result

A permitted business outcome is recorded with required history.

## Failure / Rejection

If authority or eligibility fails, reject; if mandatory configuration is missing, hold as `BUSINESS CONFIGURATION REQUIRED` with the Rule/Configuration ID.

## Cancellation

Cancellation effects are valid only when approved in rules, lifecycle or decision log.

## Exceptions

- Coach absence: no silent Group reassignment; BD-011/028.
- Schedule conflict: block until configured authorized resolution under BD-025.
- Substitute Session coverage: does not change Primary Coach under BR-GRP-003.
- Offboarding with future Sessions: reassign future responsibility under BD-011 without rewriting history.

## Permissions

Use role responsibility and permission artifacts. Authority follows the approved process matrix; an unbound implementation role is BUSINESS CONFIGURATION REQUIRED.

## Audit

Record actor, timestamp, reason and affected records for decisions, corrections, financial events and history-affecting changes.

## Timeline / History

Preserve historical records where required by canonical rules.

## Notifications

Use Communication domain; do not invent timing, template or escalation values.

## Cross-Domain Effects

- Sport
- Branch
- Training Group
- Training Session
- Attendance
- Evaluation
- Report

## Approved Business Decisions

- BD-011 — approved; see Decision Log and linked canonical Rules.
- BD-025 — approved; see Decision Log and linked canonical Rules.
- BD-012 — approved; see Decision Log and linked canonical Rules.
- BD-022 — approved; see Decision Log and linked canonical Rules.

## Downstream References

Downstream files must cite this lifecycle and the relevant Rule/Decision IDs.

## Source Extract

The previous lifecycle source was read during migration. Canonical behavior is represented above; historical evidence is isolated outside ACTIVE under the workspace `ARCHIVE/historical-documentation/` area.
