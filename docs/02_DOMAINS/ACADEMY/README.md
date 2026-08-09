# Academy Domain

## Business Completeness

`BUSINESS COMPLETE` — BR-ACA-001/002 define Academy states and mandatory dependency review for suspension/archive; no dependent outcome changes silently.

## Definition

The organization providing sports training and operating Branches.

## Business Purpose

Represents the top-level business operating entity.

## Ownership

Academy Admin / Super Admin according to approved authority.

## Core Relationships

```text
Academy → Branch → Sport → Policy → Actor
```

## Approved States

APPROVED DECISION — BD-004

## Core Rules

- [BR-GOV-001](./ACADEMY_RULES.md#br-gov-001) — A generated example, recommendation or technical design is not a business rule unless supported by a verified decision.
- [BR-GOV-002](./ACADEMY_RULES.md#br-gov-002) — An unresolved conflict is recorded as an Open Question and is not resolved by assumption.

## Main Lifecycles

- [`ACADEMY_LIFECYCLE.md`](./ACADEMY_LIFECYCLE.md)

## Cross-Domain Governance Models

- [`ACADEMY_CONFIGURATION_AND_REFERENCE_DATA.md`](./ACADEMY_CONFIGURATION_AND_REFERENCE_DATA.md) — configuration scope, effective dating, feature availability and reference-data ownership.
- [`BUSINESS_ADMINISTRATION.md`](./BUSINESS_ADMINISTRATION.md) — approvals, decisions, delegation and temporary authority.
- [`HISTORY_AND_AUDIT_MODEL.md`](./HISTORY_AND_AUDIT_MODEL.md) — the required separation of Activity Log, Audit Log, Business Timeline, Decision History and ledgers.

## Main Processes

- See the lifecycle file for process sequence, validations, exceptions, audit, timeline/history and cross-domain effects.

## Related Policies

- `ACADEMY_POLICIES.md` (`../../04_POLICIES/ACADEMY_POLICIES.md` — legacy path superseded) where a policy file exists.

## Approved Business Decisions

- BD-004 — approved; see Decision Log and linked canonical Rules.
- BD-005 — approved; see Decision Log and linked canonical Rules.
- BD-025 — approved; see Decision Log and linked canonical Rules.
- BD-028 — approved; see Decision Log and linked canonical Rules.
- BD-030 — approved; see Decision Log and linked canonical Rules.

## Downstream References

- Requirements: `../../05_REQUIREMENTS/`
- DDD: `../../06_DDD/`
- Database: `../../07_DATABASE/`
- API: `../../08_API/`
- UX/UI: `../../09_UX_UI/`
- QA: `../../12_QA/`
