# Subscription Domain

## Business Completeness

`BUSINESS COMPLETE` — BR-PLAN-001 pins active Subscriptions to accepted Plan versions and requires explicit current-version acceptance at renewal.

## Definition

The agreement granting a Student access to a defined training service for a period and session quantity.

## Business Purpose

Controls entitlement, session balance, renewal, freeze and training eligibility.

## Ownership

Academy Admin and Accountant according to process and authority.

## Core Relationships

```text
Subscription → Student → Sport → Level → Payment → Attendance → Ledger → Freeze → Renewal
```

## Approved States

Operational states are Pending Financial Clearance, Active, Frozen and Expired; Renewal creates a separate new linked Subscription.

## Core Rules

- [BR-SUB-001](./SUBSCRIPTION_RULES.md#br-sub-001) — Each Subscription belongs to one Student, one Sport and one Level.
- [BR-SUB-002](./SUBSCRIPTION_RULES.md#br-sub-002) — A Subscription is either Group or Private, not both.
- [BR-SUB-003](./SUBSCRIPTION_RULES.md#br-sub-003) — Each Subscription has its own session quantity and balance.
- [BR-SUB-004](./SUBSCRIPTION_RULES.md#br-sub-004) — Every session deduction, restoration and manual adjustment is recorded in a Subscription Ledger with its reason and history.
- [BR-SUB-005](./SUBSCRIPTION_RULES.md#br-sub-005) — Normal training requires active, cleared, non-frozen, unexpired eligibility and sufficient balance.
- [BR-SUB-006](./SUBSCRIPTION_RULES.md#br-sub-006) — A Subscription is not permanently deleted; historical records are preserved.
- [BR-SUB-007](./SUBSCRIPTION_RULES.md#br-sub-007) — Renewal creates a new linked Subscription and preserves prior history.
- [BR-FRZ-001](./SUBSCRIPTION_RULES.md#br-frz-001) — A Freeze request is not effective until approved by the authorized role.
- [BR-FRZ-002](./SUBSCRIPTION_RULES.md#br-frz-002) — A Freeze request may be rejected, and the rejection reason is retained.
- [BR-FRZ-003](./SUBSCRIPTION_RULES.md#br-frz-003) — Freeze history is retained in the relevant timeline.
- [BR-FRZ-004](./SUBSCRIPTION_RULES.md#br-frz-004) — Freeze duration, extension, fees and resume behavior are policy-dependent; no generated numeric limit is authoritative.

## Main Lifecycles

- [`SUBSCRIPTION_LIFECYCLE.md`](./SUBSCRIPTION_LIFECYCLE.md)

## Main Processes

- See the lifecycle file for process sequence, validations, exceptions, audit, timeline/history and cross-domain effects.

## Related Policies

- [`SUBSCRIPTION_POLICIES.md`](../../04_POLICIES/SUBSCRIPTION_POLICIES.md) where a policy file exists.

## Approved Business Decisions

- BD-014 — approved; see Decision Log and linked canonical Rules.
- BD-016 — approved; see Decision Log and linked canonical Rules.
- BD-020 — approved; see Decision Log and linked canonical Rules.
- BD-021 — approved; see Decision Log and linked canonical Rules.
- BD-023 — approved; see Decision Log and linked canonical Rules.
- BD-006 — approved; see Decision Log and linked canonical Rules.
- BD-008 — approved; see Decision Log and linked canonical Rules.
- BD-009 — approved; see Decision Log and linked canonical Rules.
- BD-013 — approved; see Decision Log and linked canonical Rules.
- BD-015 — approved; see Decision Log and linked canonical Rules.
- BD-017 — approved; see Decision Log and linked canonical Rules.
- BD-018 — approved; see Decision Log and linked canonical Rules.
- BD-019 — approved; see Decision Log and linked canonical Rules.
- BD-022 — approved; see Decision Log and linked canonical Rules.
- BD-024 — approved; see Decision Log and linked canonical Rules.
- BD-026 — approved; see Decision Log and linked canonical Rules.
- BD-029 — approved; see Decision Log and linked canonical Rules.
- BD-030 — approved; see Decision Log and linked canonical Rules.

## Downstream References

- Requirements: `../../05_REQUIREMENTS/`
- DDD: `../../06_DDD/`
- Database: `../../07_DATABASE/`
- API: `../../08_API/`
- UX/UI: `../../09_UX_UI/`
- QA: `../../12_QA/`
