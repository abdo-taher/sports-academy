# Coach Domain

## Business Completeness

`BUSINESS READY WITH CONFIGURATION REQUIRED` — The domain business model is approved. Any remaining percentages, amounts, durations, limits, thresholds, deadlines, role bindings or catalog values are governed configuration and are not open client Business Decisions.

## Definition

A person responsible for assigned group or private training, evaluations and reports.

## Business Purpose

Delivers training and creates operational records within assignment scope.

## Ownership

Academy/Supervisor according to approved responsibility model.

## Core Relationships

```text
Coach → Sport → Branch → Training Group → Training Session → Attendance → Evaluation → Report
```

## Approved States

BD-011 defines approved assignment, suspension and offboarding effects; `COACH_ASSIGNMENT.md` defines the effective assignment transitions.

## Core Rules

- No canonical rule exists yet for this domain; use related open decisions.

## Main Lifecycles

- [`COACH_LIFECYCLE.md`](./COACH_LIFECYCLE.md)

## Main Processes

- See the lifecycle file for process sequence, validations, exceptions, audit, timeline/history and cross-domain effects.

## Related Policies

- `COACH_POLICIES.md` (`../../04_POLICIES/COACH_POLICIES.md` — legacy path superseded) where a policy file exists.

## Approved Business Decisions

- BD-011 — approved; see Decision Log and linked canonical Rules.
- BD-025 — approved; see Decision Log and linked canonical Rules.
- BD-012 — approved; see Decision Log and linked canonical Rules.
- BD-022 — approved; see Decision Log and linked canonical Rules.

## Downstream References

- Requirements: `../../05_REQUIREMENTS/`
- DDD: `../../06_DDD/`
- Database: `../../07_DATABASE/`
- API: `../../08_API/`
- UX/UI: `../../09_UX_UI/`
- QA: `../../12_QA/`
