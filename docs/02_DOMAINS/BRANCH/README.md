# Branch Domain

## Business Completeness

`BUSINESS COMPLETE` — BR-SES-003 governs per-Session closure disposition and BR-BRA-004 grandfathers existing relationships after availability withdrawal.

## Definition

An operating location belonging to an Academy.

## Business Purpose

Scopes location-specific operation while preserving academy standards.

## Ownership

Branch Admin within Branch scope; Academy Admin for Academy-wide/cross-Branch governance, under BD-025.

## Core Relationships

```text
Branch → Academy → Sport → Coach → Training Group → Schedule → Student → Subscription
```

## Approved States

APPROVED DECISION — BD-004

## Core Rules

- [BR-BRA-001](./BRANCH_RULES.md#br-bra-001) — A Sport must not be shown as available in a Branch unless that Branch supports or enables that Sport. This applies to registration, Trial booking, service selection, Groups, Scheduling, Subscription creation, Frontend filtering and API validation.

## Main Lifecycles

- [`BRANCH_LIFECYCLE.md`](./BRANCH_LIFECYCLE.md)

## Main Processes

- See the lifecycle file for process sequence, validations, exceptions, audit, timeline/history and cross-domain effects.

## Related Policies

- [`BRANCH_POLICIES.md`](../../04_POLICIES/BRANCH_POLICIES.md) where a policy file exists.

## Approved Business Decisions

- BD-004 — approved; see Decision Log and linked canonical Rules.
- BD-028 — approved; see Decision Log and linked canonical Rules.
- BD-025 — approved; see Decision Log and linked canonical Rules.
- BD-006 — approved; see Decision Log and linked canonical Rules.
- BD-011 — approved; see Decision Log and linked canonical Rules.
- BD-022 — approved; see Decision Log and linked canonical Rules.

## Downstream References

- Requirements: `../../05_REQUIREMENTS/`
- DDD: `../../06_DDD/`
- Database: `../../07_DATABASE/`
- API: `../../08_API/`
- UX/UI: `../../09_UX_UI/`
- QA: `../../12_QA/`
