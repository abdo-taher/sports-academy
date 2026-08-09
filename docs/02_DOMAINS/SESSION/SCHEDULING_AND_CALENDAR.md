# Scheduling and Operational Calendar

## Canonical Ownership

The Session domain owns Schedule, Operational Calendar and the generation of dated Training Sessions. The Group domain owns a Group's recurring schedule commitment. Academy and Branch own closure decisions; Session applies those decisions to schedules and Sessions.

## Required Distinctions

- A **Group Schedule** is the recurring training pattern assigned to a Training Group.
- A **Training Session** is one dated occurrence generated or created from an authorized schedule.
- An **Operational Calendar** is the effective set of working days, holidays and Academy/Branch closures used when producing or changing Sessions.
- Changing a Group Schedule does not silently rewrite past Sessions.

## Scheduling Lifecycle

1. Identify the Branch, supported Sport, Group, Level, Primary Coach and recurring Group Schedule.
2. Validate Branch Sport availability under BR-BRA-001.
3. Check configured capacity, Student memberships and deterministic Subscription/Group context under BR-GRP-004/005 and typed Transfer policy.
4. Check the effective Operational Calendar, working day, holiday and closure records.
5. Check Coach, Group, Branch/facility and time conflicts.
6. Generate or create distinct dated Sessions without modifying historical occurrences.
7. Record later cancellation or rescheduling as a change to the affected Session, with reason and history.
8. Hand off attendance, balance and communication effects to Attendance, Subscription and Communication.

## Session Status

Planned, completed, cancelled and rescheduled outcomes are governed by Session lifecycle. BD-030 defines entitlement effects; BD-025 defines process-level authority.

## Conflict Handling

A detected conflict prevents automatic confirmation until a configured authorized resolution occurs. Conflict categories/priorities are configuration and are never invented.

## Closures, Cancellation and Rescheduling

- Academy and Branch closure states follow BD-004 and authority follows BD-025.
- Cancellation or rescheduling retains the original Session reference and reason.
- Session cancellation/reschedule entitlement effects follow BD-030; Excuse compensation follows BD-018. Communication delivery details are configured.
- Generated weather thresholds, notification timing and token expiry values are not authoritative.

## Approved Business Decisions

- BD-004 — approved; see Decision Log and linked canonical Rules.
- BD-011 — approved; see Decision Log and linked canonical Rules.
- BD-022 — approved; see Decision Log and linked canonical Rules.
- BD-023 — approved; see Decision Log and linked canonical Rules.
- BD-025 — approved; see Decision Log and linked canonical Rules.
- BD-030 — approved; see Decision Log and linked canonical Rules.
