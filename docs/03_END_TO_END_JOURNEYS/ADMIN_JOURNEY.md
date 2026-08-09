# Admin Journey

## End-to-End Flow

| Stage | Approved Responsibility Boundary | Open Decision / Guard | History Requirement |
|---|---|---|---|
| Academy / Branch setup | One Academy/multiple Branches; apply approved states and Branch Sport/Program availability. | Independent Academy tenancy is Future. | Setup/state/availability history retained. |
| Reference data | Academy governs publication; named domain owns meaning. | Program/Plan hierarchy approved; configured catalogs required. | Effective version/date retained. |
| Configuration | Apply Academy default then approved more-specific override. | Non-overridable invariants always win; missing override uses Academy default. | Prior value, actor, reason/effective date. |
| Approval Request | Owning domain validates; process authority matrix routes roles/delegation. | Missing configured role binding blocks as implementation configuration. | Request/review/decision/execution distinct. |
| Sensitive operation | Admin performs only action approved for that role and scope. | Generic Admin label never proves authority. | Audit Log records actor, time, reason, record and result. |
| Correction / reversal | Owning domain applies version or compensating event under configured authority. | Original cannot be overwritten. | Original and correction/reversal retained. |
| Closure / archive | Apply explicit state table and active-relationship review. | Student/Subscription state never changes automatically. | Archive is not deletion. |

## History Separation

Activity Log, Audit Log, Business Timeline, Decision History and Approval History follow `02_DOMAINS/ACADEMY/HISTORY_AND_AUDIT_MODEL.md`; none substitutes for another.

## Journey Completeness

`PARTIAL — BUSINESS GAP NBCG-001`: ordinary authority/configuration is deterministic; Academy suspension/Archive cascades are not.
