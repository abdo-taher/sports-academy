# Parent Domain

## Business Completeness

`BUSINESS COMPLETE` — BR-PAR-009 snapshots and revalidates Guardian authority at submission, decision and execution.

## Definition

The person linked to and responsible for one or more Students under the current model.

## Business Purpose

Provides access, monitoring, requests, comments and payment participation.

## Ownership

Reception/Academy Admin manage setup; Parent owns requests and payments where applicable.

## Core Relationships

```text
Parent → Student → Subscription → Payment → Request → Communication
```

## Approved States

Parent archive/active details are not fully approved.

## Core Rules

- [BR-PAR-001](./PARENT_RULES.md#br-par-001) — A Parent can be linked to multiple Students.
- [BR-PAR-002](./PARENT_RULES.md#br-par-002) — A Parent may access only linked Students.
- [BR-PAR-003](./PARENT_RULES.md#br-par-003) — A Parent may request, comment and monitor but may not modify official Attendance or Evaluation records.
- [BR-PAR-004](./PARENT_RULES.md#br-par-004) — A Parent linked to Student history is archived rather than permanently deleted.
- [BR-PAR-005](./PARENT_RULES.md#br-par-005) — Changing a Student's Parent relationship preserves the previous history.

## Main Lifecycles

- [`PARENT_LIFECYCLE.md`](./PARENT_LIFECYCLE.md)

## Main Processes

- See the lifecycle file for process sequence, validations, exceptions, audit, timeline/history and cross-domain effects.

## Related Policies

- `PARENT_POLICIES.md` (`../../04_POLICIES/PARENT_POLICIES.md` — legacy path superseded) where a policy file exists.

## Approved Business Decisions

- BD-010 — approved; see Decision Log and linked canonical Rules.
- BD-024 — approved; see Decision Log and linked canonical Rules.
- BD-012 — approved; see Decision Log and linked canonical Rules.

## Downstream References

- Requirements: `../../05_REQUIREMENTS/`
- DDD: `../../06_DDD/`
- Database: `../../07_DATABASE/`
- API: `../../08_API/`
- UX/UI: `../../09_UX_UI/`
- QA: `../../12_QA/`
