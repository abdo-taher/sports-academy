# Session Domain

## Business Completeness

`BUSINESS COMPLETE` — BR-SES-003/004 define Branch-closure disposition, complete Session states and immutable reschedule linkage.

## Definition

A Training Session is a specific training occurrence on a date and time.

## Business Purpose

Provides the concrete event to which Attendance, coaches and reports attach.

## Ownership

Coach/Supervisor/Admin according to schedule and authority.

## Core Relationships

```text
Session → Training Group → Coach → Student → Attendance → Report → Communication
```

## State Coverage

Cancellation/reschedule entitlement outcomes follow BD-030 and BR-SES-001/002. Other Session states and transitions require a new Business decision; do not infer them.

## Core Rules

- [BR-SES-001](./SESSION_RULES.md#br-ses-001) — Academy cancellation prevents or compensates deduction.
- [BR-SES-002](./SESSION_RULES.md#br-ses-002) — rescheduling preserves history and consumes no extra entitlement.

## Main Lifecycles

- [`SESSION_LIFECYCLE.md`](./SESSION_LIFECYCLE.md)

## Scheduling and Calendar

- [`SCHEDULING_AND_CALENDAR.md`](./SCHEDULING_AND_CALENDAR.md) defines Group Schedule versus Session, operational calendar inputs, generation, conflict handling, cancellation and rescheduling boundaries.

## Main Processes

- See the lifecycle file for process sequence, validations, exceptions, audit, timeline/history and cross-domain effects.

## Related Policies

- [`SESSION_POLICIES.md`](../../04_POLICIES/SESSION_POLICIES.md) where a policy file exists.

## Approved Business Decisions

- BD-030 — approved; see Decision Log and linked canonical Rules.
- BD-025 — approved; see Decision Log and linked canonical Rules.
- BD-017 — approved; see Decision Log and linked canonical Rules.
- BD-018 — approved; see Decision Log and linked canonical Rules.
- BD-021 — approved; see Decision Log and linked canonical Rules.
- BD-026 — approved; see Decision Log and linked canonical Rules.

## Downstream References

- Requirements: `../../05_REQUIREMENTS/`
- DDD: `../../06_DDD/`
- Database: `../../07_DATABASE/`
- API: `../../08_API/`
- UX/UI: `../../09_UX_UI/`
- QA: `../../12_QA/`
