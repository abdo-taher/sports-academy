# Payment Lifecycle

## Provenance

Migrated from `Academy_Platform_Documentation/04_BUSINESS_PROCESSES/LIFECYCLES/PAYMENT_LIFECYCLE.md` and normalized under the Payment domain.

## Purpose

Preserves financial history and controls revenue-related decisions without corrupting session ledger history.

## Scope

Covers business lifecycle behavior for the Payment domain only. Cross-domain effects are referenced, not duplicated as truth.

## Trigger

A business event or authorized actor initiates work involving Payment.

## Preconditions

- The relevant business record is identifiable.
- Actor relationship and approved process authority are established.
- Approved business decisions and mandatory configuration are available.

## Starting State

BD-015 governs staged escalation for partial, late and failed Payments; timing and stage values are configuration.

## Actors

Accountant and approved financial authority.

## Owner

See `../../01_BUSINESS_FOUNDATION/ROLE_RESPONSIBILITY_MATRIX.md`.

## Main Flow

1. Identify Subscription, Invoice/amount due, payer/account relationship and historical price.
2. Record the actual Payment attempt/outcome against the Subscription under BR-FIN-001 without treating the Invoice as Payment.
3. Preserve the approved Payment and calculate Outstanding Balance from financial events; activation/access follows BD-014/015 and the effective configured escalation stage.
4. For Discount, validate approved type, configured value/range, scope and authority under BD-029 and BD-025.
5. For Refund, Adjustment or Reversal, reference the original event and append a compensating event under BR-FIN-002/003.
6. Preserve actor, reason, date and financial history; never change historical Subscription prices retroactively under BR-FIN-004.
7. Notify Subscription of the financial outcome without collapsing lifecycles; Renewal follows BD-020 and Archive/Return follows BD-024.

## Validations

- BR-FIN-001: A Payment record is linked to a Subscription under the current model.
- BR-FIN-002: An approved Payment is not deleted; a Reversal or Refund preserves the original history.
- BR-FIN-003: Financial changes, exceptional discounts and adjustments preserve reason, actor and date.
- BR-FIN-004: Historical Subscription prices are not changed retroactively.
- BR-FIN-005: Activation requires financial clearance or audited exception; Session balance never becomes negative.

## Business Rules

See `PAYMENT_RULES.md`.

## State Transitions

| From | Action | To | Initiator | Approver | Preconditions | Rejection | Effective Date / Effects | History / Audit |
|---|---|---|---|---|---|---|---|---|
| Pending | Approve full Payment | Approved / Paid | Finance/Accountant or payment confirmation | Per payment method | Amount and reference valid | Failed with reason | Financial clearance may be satisfied | Original event and confirmation retained |
| Pending | Record partial Payment | Partial | Finance/Accountant | Per approved plan | Approved installment/debt plan exists | Failed/held | Clearance only if plan's initial conditions satisfied | Paid/due amounts and plan link |
| Pending or Partial | Due threshold reached | Late / Overdue escalation stage | System or Finance | Stage policy | Effective configured threshold reached | N/A | Access changes only if named stage says so | Stage, owner, notification and next action |
| Pending | Record failure | Failed | Finance/payment outcome | None | Failed attempt identifiable | N/A | No unpredictable access change; staged policy applies | Failure reason, attempt and follow-up |
| Approved / Paid | Reverse approved event | Reversed | Finance | Reversal approver | Original event and reason identified | Original remains unchanged | Compensating financial event | Original/reversal link and approval |
| Approved / Paid | Refund | Refunded in whole/part | Finance | Refund approver | Refund eligibility and reason valid | Payment remains Approved with rejected request history | Compensating financial event | Original/refund link and approval |

## Success Result

A permitted business outcome is recorded with required history.

## Failure / Rejection

If authority or eligibility fails, reject; if mandatory configuration is missing, hold as `BUSINESS CONFIGURATION REQUIRED` with the Rule/Configuration ID.

## Cancellation

Cancellation effects are valid only when approved in rules, lifecycle or decision log.

## Exceptions

- Failed, partial or late Payment: record actual outcome and follow configured staged escalation under BR-FIN-006.
- Refund/Adjustment without approved authority: reject/hold under BD-025.
- Generated Discount values are prohibited; only approved types with configured values under BD-029 may apply.
- Negative monetary Outstanding Balance and Session balance are distinct; Session balance never becomes negative.
- Event/Tournament charge: future and excluded from the current release under BD-026/BD-027.

## Permissions

Use role responsibility and permission artifacts. Authority follows the approved process matrix; an unbound implementation role is BUSINESS CONFIGURATION REQUIRED.

## Audit

Record actor, timestamp, reason and affected records for decisions, corrections, financial events and history-affecting changes.

## Timeline / History

Preserve historical records where required by canonical rules.

## Notifications

Use Communication domain; do not invent timing, template or escalation values.

## Cross-Domain Effects

- Subscription
- Invoice
- Refund
- Adjustment
- Ledger

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

Downstream files must cite this lifecycle and the relevant Rule/Decision IDs.

## Source Extract

The previous lifecycle source was read during migration. Canonical behavior is represented above; historical evidence is isolated outside ACTIVE under the workspace `ARCHIVE/historical-documentation/` area.
