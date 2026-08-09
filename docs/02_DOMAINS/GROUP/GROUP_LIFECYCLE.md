# Group Lifecycle

## Provenance

Migrated from `Academy_Platform_Documentation/04_BUSINESS_PROCESSES/LIFECYCLES/GROUP_SCHEDULE_LIFECYCLE.md` and normalized under the Group domain.

## Purpose

Organizes Students into recurring training operations.

## Scope

Covers business lifecycle behavior for the Group domain only. Cross-domain effects are referenced, not duplicated as truth.

## Trigger

A business event or authorized actor initiates work involving Group.

## Preconditions

- The relevant business record is identifiable.
- Actor relationship and approved process authority are established.
- Approved business decisions and mandatory configuration are available.

## Starting State

Transfer effects are approved by BD-022; a complete operational Group state model remains a newly identified Business coverage gap.

## Actors

Academy Admin/Supervisor according to approved authority.

## Owner

See `../../01_BUSINESS_FOUNDATION/ROLE_RESPONSIBILITY_MATRIX.md`.

## Main Flow

1. Identify Branch, enabled Sport/Program and Level; Branch availability follows BR-BRA-001 and the approved Program hierarchy follows BD-006.
2. Assign a Primary Coach and established weekly schedule under BR-GRP-001.
3. Validate explicit approved Coach Branch/Sport assignment, qualification and conflict under BR-COA-001 and the authority matrix.
4. Before Student membership or Transfer, validate suitability/capacity under BR-GRP-004 and CFG-TRN-001; authority follows BD-025.
5. Record membership/assignment with effective dates; multiple current Groups are allowed with Subscription context under BR-GRP-005.
6. Generate dated Sessions through the Session domain; schedule changes do not rewrite past Sessions.
7. For Substitute Coach, apply BR-GRP-003 so the Group's Primary Coach is unchanged automatically.
8. For transfer, preserve old/new assignments, effective date, reason and decision history under BR-GRP-002.

## Validations

- BR-GRP-001: Every Training Group has a Primary Coach and an established weekly schedule.
- BR-GRP-002: A Student transfer preserves old and new assignments, effective date, reason and decision history to the extent collected.
- BR-GRP-003: A Substitute Coach assigned to a Session does not become the Group's Primary Coach automatically.
- BR-GRP-004: The receiving Group's suitability and capacity must be checked before transfer; limits and override authority require approval.

## Business Rules

See `GROUP_RULES.md`.

## State Transitions

A canonical Group state/closure transition table is not defined. Do not infer states from downstream storage or UX.

## Success Result

A permitted business outcome is recorded with required history.

## Failure / Rejection

If authority or eligibility fails, reject; if mandatory configuration is missing, hold as `BUSINESS CONFIGURATION REQUIRED` with the Rule/Configuration ID.

## Cancellation

Cancellation effects are valid only when approved in rules, lifecycle or decision log.

## Exceptions

- Capacity issue: do not over-enroll; apply configured capacity and typed Transfer authority.
- Schedule conflict: block until resolved by configured process authority.
- Multiple active Subscriptions/Groups follow BD-023; membership retains Subscription context.
- Coach absence: Session substitution is separate from Primary Coach change under BD-011; cancellation effects follow BD-030 when cancellation occurs.
- Transfer during scheduled Sessions: future assignments update from approved effective date; past Sessions remain unchanged.

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
- Level
- Coach
- Student
- Schedule
- Training Session

## Approved Business Decisions

- BD-022 — approved; see Decision Log and linked canonical Rules.
- BD-023 — approved; see Decision Log and linked canonical Rules.
- BD-025 — approved; see Decision Log and linked canonical Rules.
- BD-006 — approved; see Decision Log and linked canonical Rules.
- BD-011 — approved; see Decision Log and linked canonical Rules.
- BD-013 — approved; see Decision Log and linked canonical Rules.
- BD-019 — approved; see Decision Log and linked canonical Rules.
- BD-024 — approved; see Decision Log and linked canonical Rules.

## Downstream References

Downstream files must cite this lifecycle and the relevant Rule/Decision IDs.

## Source Extract

The previous lifecycle source was read during migration. Canonical behavior is represented above; historical evidence is isolated outside ACTIVE under the workspace `ARCHIVE/historical-documentation/` area.

## Approved Group Lifecycle

Group states are Draft, Active, Closing, Closed and Archived under BR-GRP-006. Closing inventories and disposes members, future Sessions, Coach assignments and pending transfers; closure is held until every dependency has an authorized outcome.
