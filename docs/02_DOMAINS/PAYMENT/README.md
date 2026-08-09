# Payment Domain

## Business Completeness

`BUSINESS READY WITH CONFIGURATION REQUIRED` — The domain business model is approved. Any remaining percentages, amounts, durations, limits, thresholds, deadlines, role bindings or catalog values are governed configuration and are not open client Business Decisions.

## Definition

A recorded transfer of money against a Subscription/Invoice under the current model.

## Business Purpose

Preserves financial history and controls revenue-related decisions without corrupting session ledger history.

## Ownership

Accountant and approved financial authority.

## Core Relationships

```text
Payment → Subscription → Invoice → Refund → Adjustment → Ledger
```

## Approved States

Partial, late and failed Payment outcomes use the staged escalation model in BD-015 and configured stages in CFG-FIN-003.

## Core Rules

- [BR-FIN-001](./PAYMENT_RULES.md#br-fin-001) — A Payment record is linked to a Subscription under the current model.
- [BR-FIN-002](./PAYMENT_RULES.md#br-fin-002) — An approved Payment is not deleted; a Reversal or Refund preserves the original history.
- [BR-FIN-003](./PAYMENT_RULES.md#br-fin-003) — Financial changes, exceptional discounts and adjustments preserve reason, actor and date.
- [BR-FIN-004](./PAYMENT_RULES.md#br-fin-004) — Historical Subscription prices are not changed retroactively.
- [BR-FIN-005](./PAYMENT_RULES.md#br-fin-005) — Activation requires financial clearance or audited exception; Session balance never becomes negative.

## Main Lifecycles

- [`PAYMENT_LIFECYCLE.md`](./PAYMENT_LIFECYCLE.md)

## Financial Concept Boundary

- [`FINANCIAL_CONCEPT_MODEL.md`](./FINANCIAL_CONCEPT_MODEL.md) separates Payment, Invoice, Refund, Adjustment/Reversal, Outstanding Balance, Financial Ledger and Subscription Session Ledger.

## Main Processes

- See the lifecycle file for process sequence, validations, exceptions, audit, timeline/history and cross-domain effects.

## Related Policies

- [`PAYMENT_POLICIES.md`](../../04_POLICIES/PAYMENT_POLICIES.md) where a policy file exists.

## Approved Business Decisions

- BD-014 — approved; see Decision Log and linked canonical Rules.
- BD-015 — approved; see Decision Log and linked canonical Rules.
- BD-029 — approved; see Decision Log and linked canonical Rules.
- BD-025 — approved; see Decision Log and linked canonical Rules.
- BD-010 — approved; see Decision Log and linked canonical Rules.
- BD-017 — approved; see Decision Log and linked canonical Rules.
- BD-020 — approved; see Decision Log and linked canonical Rules.
- BD-024 — approved; see Decision Log and linked canonical Rules.
- BD-026 — approved; see Decision Log and linked canonical Rules.
- BD-027 — approved; see Decision Log and linked canonical Rules.

## Downstream References

- Requirements: `../../05_REQUIREMENTS/`
- DDD: `../../06_DDD/`
- Database: `../../07_DATABASE/`
- API: `../../08_API/`
- UX/UI: `../../09_UX_UI/`
- QA: `../../12_QA/`
