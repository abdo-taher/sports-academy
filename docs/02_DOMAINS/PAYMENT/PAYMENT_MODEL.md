# Payment Model

## Definition

A recorded transfer of money against a Subscription/Invoice under the current model.

## Purpose

Preserves financial history and controls revenue-related decisions without corrupting session ledger history.

## Business Ownership

Accountant and approved financial authority.

## Actors

Use `../../01_BUSINESS_FOUNDATION/ROLE_RESPONSIBILITY_MATRIX.md`. Authority follows BD-025; a missing production role binding is `BUSINESS CONFIGURATION REQUIRED`.

## Business-Level Attributes

Business attributes are limited to concepts required by approved rules and lifecycles. Do not infer database fields as business policy.

## Relationships

- Subscription
- Invoice
- Refund
- Adjustment
- Ledger

## Business Invariants

- BR-FIN-001: A Payment record is linked to a Subscription under the current model.
- BR-FIN-002: An approved Payment is not deleted; a Reversal or Refund preserves the original history.
- BR-FIN-003: Financial changes, exceptional discounts and adjustments preserve reason, actor and date.
- BR-FIN-004: Historical Subscription prices are not changed retroactively.
- BR-FIN-005: Activation requires financial clearance or audited exception; Session balance never becomes negative.

## Lifecycle Relevance

See `PAYMENT_LIFECYCLE.md`.

## History Requirements

History is preserved when required by rule, lifecycle, finance, audit, archive or timeline behavior. Archive is not permanent deletion.

## Branch / Academy Scope

Use `../../01_BUSINESS_FOUNDATION/ACADEMY_OPERATING_MODEL.md` and domain-specific policy files. Resolve scope and precedence through `../../04_POLICIES/POLICY_CONFIGURATION_CATALOG.md`; missing production values are configuration errors.

## Permissions Relevance

Permissions must derive from roles, state, actor relationship and approved process ownership.

## Approved Decisions

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
