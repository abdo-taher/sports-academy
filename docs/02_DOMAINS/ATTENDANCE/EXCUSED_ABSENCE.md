# Excused Absence

Approved rule:

- BR-ATT-005 — An approved Excuse prevents one deduction or restores one through a compensating Ledger entry.

BD-018 approves the default outcome. Submitter, evidence, deadline, reason catalog and approver are configured through CFG-EXC-001. Rejection retains reason/history. Make-up or date extension is not a default consequence.

## Excuse Transitions

| From | Action | To | Initiator | Approver | Preconditions | Rejection Behavior | Effective Date / Downstream Effects | History / Audit |
|---|---|---|---|---|---|---|---|---|
| No Excuse | Submit Excuse | Requested | CFG-EXC-001 allowed submitter | None at submission | Student/Session identified; configured evidence/deadline/reason satisfied | Invalid submission rejected without changing Attendance/Ledger | No deduction change before approval | Submitter, time, evidence references and reason |
| Requested | Approve before deduction | Approved; deduction prevented | Configured Excuse approver | Configured Excuse approver | Attendance not deducted; authority valid | Rejected with reason | Effective approval prevents one Session deduction; no Make-up/date extension | Decision actor/time/reason and no-deduction link |
| Requested | Approve after deduction | Approved; one deduction restored | Configured Excuse approver | Configured Excuse approver | One related deduction exists; authority valid | Rejected with reason | Atomic compensating Subscription Ledger restoration; balance remains nonnegative | Decision and original/compensating Ledger provenance |
| Requested | Reject | Rejected | Attendance reviewer | Configured Excuse approver | Review completed | Original Attendance/Ledger remains | Immediate decision; no default Make-up/date extension | Rejector, reason and time |
