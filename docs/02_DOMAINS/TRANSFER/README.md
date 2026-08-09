# Transfer Domain

## Business Completeness

`BUSINESS READY WITH CONFIGURATION REQUIRED` — The domain business model is approved. Any remaining percentages, amounts, durations, limits, thresholds, deadlines, role bindings or catalog values are governed configuration and are not open client Business Decisions.

## Definition

A controlled request to change Group, Level, Sport or Branch according to approved transfer type.

## Business Purpose

Changes operational assignment while preserving old/new history and decision reason.

## Ownership

Approval authority is resolved by Transfer type/scope through the Process Authority Matrix.

## Core Relationships

```text
Transfer → Student → Group → Level → Sport → Branch → Subscription → Attendance
```

## Approved States

Group, Level, Sport and Branch Transfer are separate approved types under BD-022; type-specific production policy values come from CFG-TRN-001 through CFG-TRN-004.

## Core Rules

- [BR-TRN-001](./TRANSFER_RULES.md#br-trn-001) — Transfer types remain separate and validate their own eligibility/effects.
- [BR-TRN-002](./TRANSFER_RULES.md#br-trn-002) — effective future change preserves old/new assignment and full decision history.

## Main Lifecycles

- [`TRANSFER_LIFECYCLE.md`](./TRANSFER_LIFECYCLE.md)

## Main Processes

- See the lifecycle file for process sequence, validations, exceptions, audit, timeline/history and cross-domain effects.

## Related Policies

- `TRANSFER_POLICIES.md` (`../../04_POLICIES/TRANSFER_POLICIES.md` — legacy path superseded) where a policy file exists.

## Approved Business Decisions

- BD-022 — typed Transfer rules and effective-date effects.
- BD-025 — process authority and delegation.

## Downstream References

- Requirements: `../../05_REQUIREMENTS/`
- DDD: `../../06_DDD/`
- Database: `../../07_DATABASE/`
- API: `../../08_API/`
- UX/UI: `../../09_UX_UI/`
- QA: `../../12_QA/`
