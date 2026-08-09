# Business Administration

## Definition and Ownership

The Academy domain owns the cross-domain business administration pattern: Approval Request, Approval Workflow, Decision History, Delegation and Temporary Authority. The domain that owns the requested business change remains responsible for its eligibility and result.

## Administrative Concepts

| Concept | Definition | Canonical Owner |
|---|---|---|
| Approval Request | A recorded request for an authorized person to accept or reject a sensitive business action. | Academy administration pattern; requested action remains owned by its business domain. |
| Approval Workflow | The ordered initiation, review, decision and execution stages for a sensitive action. | Academy |
| Decision History | The durable record of business decisions made on a request, including outcome, actor, time and reason. | Academy |
| Approval History | The subset of Decision History recording approval-stage actions and hand-offs. | Academy |
| Delegation | A recorded grant allowing another actor to exercise specified authority without transferring the original role permanently. | Academy |
| Temporary Authority | Time-bounded, scope-bounded authority created through an approved delegation. | Academy |

## Approved Invariants

- Elevated system access does not create business approval authority.
- Request, review, approval/rejection and execution are distinct responsibilities even when one approved actor performs more than one stage.
- A rejection retains its reason and history.
- Delegation cannot grant authority the delegator does not possess.
- Delegation and temporary authority never change the ownership of the underlying business record.
- The process-level model is approved by BD-025. Exact role binding for each deployment is `IMPLEMENTATION CONFIGURATION REQUIRED` where the authority matrix names a configured approver.

## Lifecycle

1. An actor submits a request tied to a specific business record and requested action.
2. The owning domain validates business eligibility.
3. The administration pattern resolves the required authority from the process matrix and effective delegation; a missing production role binding blocks execution as configuration error.
4. The authorized actor approves or rejects with a recorded reason when required by the process.
5. Approval permits the owning domain to execute; approval itself does not silently perform the business change.
6. Execution outcome, rejection, expiry, cancellation and any delegation used are retained in Decision History and Approval History.

## Cross-Domain Use

Freeze, Transfer, Refund, Discount, Archive/Restore, Evaluation publication, Coach reassignment and Academy/Branch state changes use this pattern where approval is required. Their business effects remain defined by their owning domain and applicable OQ.

## Approved Business Decisions

- BD-004 — approved; see Decision Log and linked canonical Rules.
- BD-011 — approved; see Decision Log and linked canonical Rules.
- BD-012 — approved; see Decision Log and linked canonical Rules.
- BD-018 — approved; see Decision Log and linked canonical Rules.
- BD-019 — approved; see Decision Log and linked canonical Rules.
- BD-022 — approved; see Decision Log and linked canonical Rules.
- BD-024 — approved; see Decision Log and linked canonical Rules.
- BD-025 — approved; see Decision Log and linked canonical Rules.
- BD-029 — approved; see Decision Log and linked canonical Rules.
