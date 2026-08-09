# Subscription Freeze

Approved facts:

- BR-FRZ-001 — A Freeze request is not effective until approved by the authorized role.
- BR-FRZ-002 — A Freeze request may be rejected and the reason is retained.
- BR-FRZ-003 — Freeze history is retained.
- BR-FRZ-004 — Approved Freeze pauses training and extends expiry by approved frozen duration; approved early Resume or automatic end-date Resume applies.

BD-019 approves Freeze availability/effects. Eligibility, duration, limits, fees and early-Resume conditions are configuration; no numeric value is inferred. Freeze never changes Student state automatically.

## Freeze / Resume State Transitions

| From | Action | To | Initiator | Approver | Preconditions | Rejection Behavior | Effective Date / Downstream Effects | History / Audit |
|---|---|---|---|---|---|---|---|---|
| No request | Submit Freeze request | Requested | Parent/Guardian or authorized staff | None at submission | Eligible Subscription identity and configured request data | Validation failure creates no effective Freeze | No access/expiry effect | Request actor, time and supplied reason |
| Requested | Approve Freeze | Approved / Frozen when effective | Configured Freeze approver | Configured Freeze approver | CFG-FRZ-001 satisfied; authority/scope valid | Remain Requested or become Rejected with reason | At approved effective time, Attendance eligibility pauses and expiry extends by approved frozen duration | Decision actor, reason, period, prior/projected expiry and policy version |
| Requested | Reject Freeze | Rejected | Configured Freeze approver | Configured Freeze approver | Review completed | No Subscription or Student state effect | Immediate decision; training eligibility remains governed by Subscription state | Rejection actor, reason and time |
| Frozen | Approve early Resume | Resumed | Parent/Guardian or authorized staff | Configured early-Resume approver | CFG-FRZ-002 permits and validates early Resume | Remain Frozen with reason | Effective Resume time restores normal eligibility only if all other Subscription gates pass; Student state unchanged | Request/decision, prior Freeze end, actual Resume and expiry provenance |
| Frozen | Reach approved end date | Resumed | System | Not required for configured automatic path | No earlier approved Resume; approved end reached | Failure is operationally alerted; business record remains Frozen until safely applied | Automatic Resume at approved end; other eligibility gates still apply | System actor, scheduled/actual time and resulting expiry |
