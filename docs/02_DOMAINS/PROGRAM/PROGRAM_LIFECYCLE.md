# Program Lifecycle

## Provenance

No previous lifecycle source existed. This file records the approved Program boundary but not a complete operational lifecycle.

## Purpose

Defines the Sport-owned training offering and its boundary from Plan, Subscription and Payment.

## Scope

Covers business lifecycle behavior for the Program domain only. Cross-domain effects are referenced, not duplicated as truth.

## Trigger

A business event or authorized actor initiates work involving Program.

## Preconditions

- The relevant business record is identifiable.
- Actor relationship and approved process authority are established.
- Approved business decisions and mandatory configuration are available.

## Starting State

BD-006 approves Program meaning/hierarchy; Program creation, activation, retirement and effects on active relationships remain a new coverage gap.

## Actors

Academy Program/catalog authority; Branch Admin controls approved Branch availability.

## Owner

See `../../01_BUSINESS_FOUNDATION/ROLE_RESPONSIBILITY_MATRIX.md`.

## Main Flow

1. Receive a request that refers to Program, Service Catalog or Offering.
2. Identify which known concepts are involved: Branch, Sport, Level, pricing, enrollment, Group or Subscription.
3. Validate BR-PRG-001/002 hierarchy and commercial boundary.
4. Validate explicit Branch Sport/Program availability under BR-BRA-001/003.
5. Resolve effective Program/Plan configuration and historical pricing.
6. Hand approved Program/Plan selection to enrollment, Group, Subscription and reporting without treating Program as entitlement or Payment.

## Validations

- Program must belong to one Sport and remain distinct from Plan, Subscription and Payment under BR-PRG-001/002.
- Operational use requires explicit Branch Program/Sport availability under BR-PRG-003 and BR-BRA-003.

## Business Rules

See `PROGRAM_RULES.md`.

## State Transitions

A complete Program state transition table cannot be produced without approved states and deactivation/retirement effects.

## Success Result

A permitted business outcome is recorded with required history.

## Failure / Rejection

If authority or eligibility fails, reject; if mandatory configuration is missing, hold as `BUSINESS CONFIGURATION REQUIRED` with the Rule/Configuration ID.

## Cancellation

Cancellation effects are valid only when approved in rules, lifecycle or decision log.

## Exceptions

- A Sport/Level is not silently renamed Program.
- A Plan/package is not silently treated as Program.
- Service Catalog/Offering selection cannot bypass Branch Sport availability under BR-BRA-001.
- Missing Program/Plan catalog value is `BUSINESS CONFIGURATION REQUIRED`, not inferred.

## Permissions

Use role responsibility and permission artifacts. Authority follows the approved process matrix; an unbound implementation role is BUSINESS CONFIGURATION REQUIRED.

## Audit

Record actor, timestamp, reason and affected records for decisions, corrections, financial events and history-affecting changes.

## Timeline / History

Preserve historical records where required by canonical rules.

## Notifications

Use Communication domain; do not invent timing, template or escalation values.

## Cross-Domain Effects

- Sport
- Level
- Subscription
- Pricing

## Approved Business Decisions

- BD-006 — approved; see Decision Log and linked canonical Rules.

## Downstream References

Downstream files must cite this lifecycle and the relevant Rule/Decision IDs.

## Source Extract

The previous lifecycle source was read during migration. Canonical behavior is represented above; historical evidence is isolated outside ACTIVE under the workspace `ARCHIVE/historical-documentation/` area.

## Approved Program and Plan Lifecycle

Program states are Draft, Active, Suspended and Retired under BR-PRG-004. Existing relationships are grandfathered through completion/renewal. Plan versions are Draft, Active, Superseded or Retired; BR-PLAN-001 pins each active Subscription to its accepted version and requires explicit current-version acceptance for renewal.
