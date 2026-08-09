# Attendance Domain

## Business Completeness

`BUSINESS COMPLETE` — BR-ATT-008 preserves recorded Attendance and applies Voided — Session Cancelled with deterministic KPI/Ledger treatment.

## Definition

The record of Student or Coach participation in a Training Session.

## Business Purpose

Records participation and drives session deduction/restoration where eligible.

## Ownership

Coach/Supervisor/Admin according to approved authority.

## Core Relationships

```text
Attendance → Training Session → Student → Subscription Ledger → Excuse → Make-up Session → Evaluation
```

## Approved States

Attendance correction authority and eligibility outcomes remain policy-dependent.

## Core Rules

- [BR-ATT-001](./ATTENDANCE_RULES.md#br-att-001) — Attendance belongs to a specific Training Session, not merely a calendar day.
- [BR-ATT-002](./ATTENDANCE_RULES.md#br-att-002) — The same Student cannot have duplicate Attendance for the same Session.
- [BR-ATT-003](./ATTENDANCE_RULES.md#br-att-003) — Confirmed present Attendance deducts a session from the eligible Subscription Ledger.
- [BR-ATT-004](./ATTENDANCE_RULES.md#br-att-004) — Attendance correction preserves who changed it, the reason, timestamp and resulting ledger adjustment.
- [BR-ATT-005](./ATTENDANCE_RULES.md#br-att-005) — An accepted excuse may prevent deduction or restore a deducted session; make-up/extension selection is policy-dependent.

## Main Lifecycles

- [`ATTENDANCE_LIFECYCLE.md`](./ATTENDANCE_LIFECYCLE.md)

## Main Processes

- See the lifecycle file for process sequence, validations, exceptions, audit, timeline/history and cross-domain effects.

## Related Policies

- [`ATTENDANCE_POLICIES.md`](../../04_POLICIES/ATTENDANCE_POLICIES.md) where a policy file exists.

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

- Requirements: `../../05_REQUIREMENTS/`
- DDD: `../../06_DDD/`
- Database: `../../07_DATABASE/`
- API: `../../08_API/`
- UX/UI: `../../09_UX_UI/`
- QA: `../../12_QA/`
