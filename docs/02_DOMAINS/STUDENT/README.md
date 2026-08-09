# Student Domain

## Business Completeness

`BUSINESS COMPLETE` — BR-LEA-003 defines the controlled Lead lifecycle, reasons, conversion and reopening.

## Definition

The person receiving training and tracked throughout the academy lifecycle.

## Business Purpose

Preserves identity, subscriptions, attendance, evaluations, transfers and timeline.

## Ownership

Reception/Academy Admin for setup; operational roles by process.

## Core Relationships

```text
Student → Parent → Branch → Subscription → Training Group → Attendance → Evaluation → Transfer → Archive
```

## Approved States

APPROVED DECISION — BD-008

## Core Rules

- [BR-STU-001](./STUDENT_RULES.md#br-stu-001) — Each Student has a unique identity within the governed business context. The unique business identifier itself still requires definition.
- [BR-STU-002](./STUDENT_RULES.md#br-stu-002) — A Student keeps a persistent QR identity across subscription renewal.
- [BR-STU-003](./STUDENT_RULES.md#br-stu-003) — Student history, attendance, evaluations, transfers and timeline are preserved and are not permanently removed through normal operation.
- [BR-STU-004](./STUDENT_RULES.md#br-stu-004) — An Archived Student cannot receive a new Subscription before an approved restore/reactivation decision.
- [BR-STU-005](./STUDENT_RULES.md#br-stu-005) — A Student can have multiple subscription records; constraints on concurrently active subscriptions remain policy-dependent.
- [BR-TRI-001](./STUDENT_RULES.md#br-tri-001) — A Trial does not create a Subscription automatically.
- [BR-TRI-002](./STUDENT_RULES.md#br-tri-002) — A Level recommendation is not produced without an Evaluation.
- [BR-TRI-003](./STUDENT_RULES.md#br-tri-003) — A Trial booking uses an available time.
- [BR-ARC-001](./STUDENT_RULES.md#br-arc-001) — Archive preserves historical records and is not equivalent to permanent deletion.
- [BR-ARC-002](./STUDENT_RULES.md#br-arc-002) — Restore does not automatically reactivate a Student, Subscription, Group or Account.

## Main Lifecycles

- [`STUDENT_LIFECYCLE.md`](./STUDENT_LIFECYCLE.md)

## Main Processes

- See the lifecycle file for process sequence, validations, exceptions, audit, timeline/history and cross-domain effects.

## Related Policies

- [`STUDENT_POLICIES.md`](../../04_POLICIES/STUDENT_POLICIES.md) where a policy file exists.

## Approved Business Decisions

- BD-007 — approved; see Decision Log and linked canonical Rules.
- BD-008 — approved; see Decision Log and linked canonical Rules.
- BD-009 — approved; see Decision Log and linked canonical Rules.
- BD-010 — approved; see Decision Log and linked canonical Rules.
- BD-024 — approved; see Decision Log and linked canonical Rules.
- BD-016 — approved; see Decision Log and linked canonical Rules.
- BD-023 — approved; see Decision Log and linked canonical Rules.

## Downstream References

- Requirements: `../../05_REQUIREMENTS/`
- DDD: `../../06_DDD/`
- Database: `../../07_DATABASE/`
- API: `../../08_API/`
- UX/UI: `../../09_UX_UI/`
- QA: `../../12_QA/`
