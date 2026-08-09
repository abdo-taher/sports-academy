# Financial Concept Model

## Canonical Ownership

The Payment domain owns Payment, Invoice, Discount, Refund, Adjustment/Reversal, Outstanding Balance and Financial Ledger. The Subscription domain owns Subscription eligibility and the Subscription Session Ledger.

## Required Distinctions

| Concept | Definition | Approved Constraint |
|---|---|---|
| Payment | A recorded transfer of money against a Subscription/Invoice under the current model. | Linked to a Subscription under BR-FIN-001. |
| Invoice | The Academy's financial claim for an amount due; it is not proof that money was received. | Financial clearance follows BD-014 and BR-FIN-005. |
| Refund | Money returned against a prior Payment while preserving the original Payment. | BR-FIN-002; approval follows the process authority matrix under BD-025. |
| Adjustment | A reasoned correction to a financial obligation or allocation without rewriting original history. | Actor, reason and date preserved under BR-FIN-003. |
| Reversal | A compensating record that negates all or part of a prior financial event while retaining it. | BR-FIN-002 and BR-FIN-003. |
| Discount | An approved reduction applied under a defined type, configured value/range, authority and scope. | Types/authority follow BD-029/BD-025; values use CFG-DIS entries. |
| Outstanding Balance | The still-due amount derived from approved charges, payments, refunds and adjustments. | Access/escalation follows BD-015 and CFG-FIN-003. |
| Financial Ledger | The ordered authoritative history of monetary events and compensating events. | Normal operation never silently deletes approved events. |
| Subscription Session Ledger | A separate non-monetary ledger of session allocations, deductions, restorations and adjustments. | Owned by Subscription under BR-SUB-003 and BR-SUB-004. |

## Financial Lifecycle

1. Establish the Subscription/Invoice context and historical price.
2. Record the Payment outcome without assuming that it activates the Subscription.
3. Derive the Outstanding Balance from preserved financial events.
4. For Refund, Adjustment or Reversal, require reason, actor and the configured process authority under BD-025.
5. Preserve the original event and create the compensating history.
6. Notify the owning Subscription lifecycle of the approved clearance/escalation outcome under BD-014 and BD-015.

## Approved Business Decisions

- BD-010 — approved; see Decision Log and linked canonical Rules.
- BD-014 — approved; see Decision Log and linked canonical Rules.
- BD-015 — approved; see Decision Log and linked canonical Rules.
- BD-020 — approved; see Decision Log and linked canonical Rules.
- BD-024 — approved; see Decision Log and linked canonical Rules.
- BD-025 — approved; see Decision Log and linked canonical Rules.
- BD-026 — approved; see Decision Log and linked canonical Rules.
- BD-029 — approved; see Decision Log and linked canonical Rules.
