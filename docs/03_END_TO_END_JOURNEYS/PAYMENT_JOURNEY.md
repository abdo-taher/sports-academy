# Payment Journey

## End-to-End Flow

| Stage | Approved Behavior | Prohibited / Open Behavior | History and Hand-off |
|---|---|---|---|
| Invoice / amount due | Establish claim and historical Plan/Subscription price. | Invoice is not Payment; clearance follows BR-SUB-008. | No retroactive rewrite under BR-FIN-004. |
| Payment attempt | Record Paid/Approved, Partial, Failed or Late/Overdue truth. | Staged escalation defines owner/notification/next action/access stage. | Retain outcome and balance basis. |
| Approved Payment | Preserve event and evaluate financial clearance. | Activation only after clearance or audited exception. | Append-only Financial Ledger. |
| Discount | Apply enabled configured type/value and authority. | Exceptional/manual requires reasoned approval; no invented percentage. | Retain actor, reason, time and price provenance. |
| Adjustment / Reversal | Create reasoned compensating event. | Never overwrite the original under BR-FIN-002/003. | Recalculate Outstanding Balance from preserved events. |
| Refund | Reference original Payment and process authority. | Refund is compensating event, not deletion. | Preserve original/refund/approval. |
| Renewal linkage | Finance applies to new linked Subscription. | Old Subscription/price/Payment remain immutable. | Preserve previous/new linkage. |
| Archive interaction | Keep receivables and history visible. | Obligations are deliberately resolved/closed/retained, never erased. | Archive never erases Financial Ledger. |

## Failure and Boundary Cases

- Failed/late/partial Payment: follow configured staged escalation; access changes only at a named stage.
- Partial Payment clears activation only when an approved plan's required initial conditions are satisfied.
- Outstanding monetary Balance is distinct from Subscription Session balance; Session balance never becomes negative.
- Event charge: Future scope; absent from current release.

## Journey Completeness

`BUSINESS READY WITH CONFIGURATION REQUIRED`.
