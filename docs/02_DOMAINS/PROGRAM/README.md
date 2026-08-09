# Program Domain

## Business Completeness

`BUSINESS COMPLETE` — BR-PRG-004 defines Program lifecycle and grandfathered retirement; BR-PLAN-001 defines immutable purchased Plan versions.

## Definition

A Program is a business-level training offering defining what training experience the Academy provides. It belongs to one Sport and participates in `Sport → Program → Service / Subscription Plan → Student Subscription`.

## Business Purpose

Defines the training offering while keeping commercial packaging and individual entitlement separate.

## Ownership

Academy Program/catalog authority; Branch Admin controls only approved Branch availability within Academy governance.

## Core Relationships

```text
Sport → Program → Service / Subscription Plan → Student Subscription
```

## State Coverage

Program availability is explicit and effective-dated, but the allowed status set and transition/retirement outcomes require a new Business decision. Availability never substitutes for Branch enablement.

## Core Rules

- [BR-PRG-001](./PROGRAM_RULES.md#br-prg-001) — approved hierarchy.
- [BR-PRG-002](./PROGRAM_RULES.md#br-prg-002) — Program is neither Subscription nor Payment.
- [BR-PRG-003](./PROGRAM_RULES.md#br-prg-003) — explicit Branch availability.

## Main Lifecycles

- [`PROGRAM_LIFECYCLE.md`](./PROGRAM_LIFECYCLE.md)

## Service Catalog Boundary

- [`SERVICE_CATALOG.md`](./SERVICE_CATALOG.md) assigns ownership without inferring Program or Offering semantics. `APPROVED DECISION — BD-006` remains controlling.

## Main Processes

- See the lifecycle file for process sequence, validations, exceptions, audit, timeline/history and cross-domain effects.

## Related Policies

- `PROGRAM_POLICIES.md` (`../../04_POLICIES/PROGRAM_POLICIES.md` — legacy path superseded) where a policy file exists.

## Approved Business Decisions

- BD-006 — Program definition and hierarchy.
- BD-028 — configuration scope and Branch availability precedence.

## Downstream References

- Requirements: `../../05_REQUIREMENTS/`
- DDD: `../../06_DDD/`
- Database: `../../07_DATABASE/`
- API: `../../08_API/`
- UX/UI: `../../09_UX_UI/`
- QA: `../../12_QA/`
