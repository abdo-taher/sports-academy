# Subscription Journey

## End-to-End Flow

| Stage | Trigger and Preconditions | Approved Behavior | Configuration / Rejected Behavior | History and Cross-Domain Effect |
|---|---|---|---|---|
| Create | Student, Branch-enabled Sport/Program, Service/Plan, Level and terms identified | Own allocation/balance under BR-SUB-001–003 | Multiple active allowed; context/provenance mandatory | Preserve terms and historical price. |
| Activate | Full Payment or compliant approved plan, or audited manual exception | Active only under BR-SUB-008/009 | Failed/partial/late follows staged escalation | Link clearance/exception without rewrite. |
| Use for training | Active, non-frozen, unexpired and sufficient balance | Exactly one funding Subscription; one Ledger deduction | Ambiguous/expired/zero-balance rejected | Every change is reasoned Ledger entry. |
| Freeze request | Eligibility and configured duration valid | Approval starts pause and expiry extension | Rejection retains reason | Student state unchanged; full Freeze history. |
| Resume | Approved early Resume or end date reached | Active from effective Resume time | Invalid early request rejected | Separate Resume event. |
| Renew | New terms/pricing/clearance established | New linked Subscription; old record immutable | Carry-over only by Plan policy; overlap requires deterministic funding | Previous/new link and provenance. |
| Transfer interaction | Typed approved Transfer reaches effective date | Apply defined Subscription/balance effect only | Invalid destination/eligibility rejects | Transfer decision and Subscription effect linked. |
| Expire / archive interaction | Expiry/review condition occurs | No normal Attendance; history retained | Student state unchanged; Archive requires relationship review | Ledger/receivable preserved. |

## Exception Disposition

| Exception | Governed Result |
|---|---|
| Expired Subscription Attendance | Rejected; no implicit grace under BR-ATT-006. |
| Frozen Subscription Attendance | Rejected while Freeze is effective. |
| Multiple eligible Subscriptions | Resolve deterministically from Session context or block; never guess. |
| Negative balance | Prohibited under BR-ATT-007. |
| Early Renewal / Overlap | New linked Subscription; Plan carry-over and funding policy apply. |
| Archive with active relationship | Review and deliberately resolve/close/retain obligations; nothing disappears. |

## Journey Completeness

`PARTIAL — BUSINESS GAP NBCG-006`: Subscription operations are deterministic for an effective Plan; Plan version activation/retirement effects are not defined.
