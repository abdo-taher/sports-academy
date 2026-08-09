# Group Domain

## Business Completeness

`BUSINESS COMPLETE` — BR-GRP-006 defines Draft, Active, Closing, Closed and Archived with mandatory dependency disposition.

## Definition

A Training Group is a recurring training unit associated with a Sport, Level, Primary Coach and schedule.

## Business Purpose

Organizes Students into recurring training operations.

## Ownership

Academy Admin/Supervisor according to approved authority.

## Core Relationships

```text
Group → Sport → Level → Coach → Student → Schedule → Training Session
```

## Approved States

Group state model and transfer effects are not fully approved.

## Core Rules

- [BR-GRP-001](./GROUP_RULES.md#br-grp-001) — Every Training Group has a Primary Coach and an established weekly schedule.
- [BR-GRP-002](./GROUP_RULES.md#br-grp-002) — A Student transfer preserves old and new assignments, effective date, reason and decision history to the extent collected.
- [BR-GRP-003](./GROUP_RULES.md#br-grp-003) — A Substitute Coach assigned to a Session does not become the Group's Primary Coach automatically.
- [BR-GRP-004](./GROUP_RULES.md#br-grp-004) — The receiving Group's suitability and capacity must be checked before transfer; limits and override authority require approval.

## Main Lifecycles

- [`GROUP_LIFECYCLE.md`](./GROUP_LIFECYCLE.md)

## Main Processes

- See the lifecycle file for process sequence, validations, exceptions, audit, timeline/history and cross-domain effects.

## Related Policies

- `GROUP_POLICIES.md` (`../../04_POLICIES/GROUP_POLICIES.md` — legacy path superseded) where a policy file exists.

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

- Requirements: `../../05_REQUIREMENTS/`
- DDD: `../../06_DDD/`
- Database: `../../07_DATABASE/`
- API: `../../08_API/`
- UX/UI: `../../09_UX_UI/`
- QA: `../../12_QA/`
