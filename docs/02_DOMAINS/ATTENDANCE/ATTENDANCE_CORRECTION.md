# Attendance Correction

Approved rule:

- BR-ATT-004 — Attendance correction preserves who changed it, the reason, timestamp and resulting ledger adjustment.

BD-025 approves process-level authority. Correction requires configured initiator/approver/executor, reason and Audit History. The original Attendance remains; the corrected version and any compensating Subscription Ledger entry are appended. A correction window, if used, is configuration rather than an open Business Decision.

## Correction Transitions

| From | Action | To | Initiator | Approver | Preconditions | Rejection Behavior | Effective Date / Downstream Effects | History / Audit |
|---|---|---|---|---|---|---|---|---|
| Recorded Attendance | Submit correction | Correction requested; original retained | Coach/authorized Attendance actor or administrator | None at submission | Attendance/Session/Student identified; requested value and reason supplied | Invalid or duplicate request rejected; original unchanged | No Ledger effect before approval | Request actor, time, reason and original value |
| Correction requested | Approve and execute | Corrected current view; original retained | Authorized correction executor | Supervisor or configured correction authority | Authority valid; target state valid; funding Subscription identified | Request rejected with reason; original and Ledger unchanged | At approved effective time, append corrected version and atomic compensating Ledger entry when deduction changes | Reviewer/approver/executor, before/after, reason, effective time and linked Ledger entries |
| Correction requested | Reject | Rejected request; original remains current | Attendance reviewer | Supervisor or configured correction authority | Review completed | No mutation beyond decision history | Immediate decision; no balance change | Rejector, reason and time |
