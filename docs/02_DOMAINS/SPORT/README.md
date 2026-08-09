# Sport Domain

## Business Completeness

`BUSINESS COMPLETE` — BR-SPT-001 defines Sport lifecycle/retirement, while BR-LVL-001–003 define Stage, Level and progression.

## Definition

A sports discipline offered by the Academy and potentially enabled in a Branch.

## Business Purpose

Organizes levels, evaluation models, coaches, training groups and subscriptions.

## Ownership

Academy administration with branch availability constrained by BD-002.

## Core Relationships

```text
Sport → Branch → Program → Level → Coach → Training Group → Evaluation
```

## Approved States

No standalone Sport state model is approved.

## Core Rules

- No canonical rule exists yet for this domain; use related open decisions.

## Main Lifecycles

- [`SPORT_LIFECYCLE.md`](./SPORT_LIFECYCLE.md)

## Main Processes

- See the lifecycle file for process sequence, validations, exceptions, audit, timeline/history and cross-domain effects.

## Related Policies

- `SPORT_POLICIES.md` (`../../04_POLICIES/SPORT_POLICIES.md` — legacy path superseded) where a policy file exists.

## Approved Business Decisions

- BD-006 — approved; see Decision Log and linked canonical Rules.
- BD-028 — approved; see Decision Log and linked canonical Rules.
- BD-011 — approved; see Decision Log and linked canonical Rules.
- BD-021 — approved; see Decision Log and linked canonical Rules.
- BD-022 — approved; see Decision Log and linked canonical Rules.
- BD-029 — approved; see Decision Log and linked canonical Rules.

## Downstream References

- Requirements: `../../05_REQUIREMENTS/`
- DDD: `../../06_DDD/`
- Database: `../../07_DATABASE/`
- API: `../../08_API/`
- UX/UI: `../../09_UX_UI/`
- QA: `../../12_QA/`
