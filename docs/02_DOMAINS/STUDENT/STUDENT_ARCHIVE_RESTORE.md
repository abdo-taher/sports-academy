# Student Archive and Restore

Archive is non-destructive and is not permanent deletion.

Approved rules:

- BR-STU-003 — Student history is preserved.
- BR-STU-004 — An Archived Student cannot receive a new Subscription before an approved restore/reactivation decision.
- BR-ARC-001 — Archive preserves historical records.
- BR-ARC-002 — Restore does not automatically reactivate a Student, Subscription, Group or Account.

BD-024 requires an active-relationship review before Archive, covering Subscriptions, balances, receivables, Groups, future Sessions, Guardian access and unresolved requests. Each relationship is deliberately resolved, closed, transferred or retained as historical obligation. Restore/Return requires fresh authorized review and explicit Student transition; it never automatically reactivates Subscription, Group, account or prior entitlement.

## Archive / Return Transitions

| From | Action | To | Initiator | Approver | Preconditions | Rejection Behavior | Effective Date / Downstream Effects | History / Audit |
|---|---|---|---|---|---|---|---|---|
| Registered, Active or Temporarily Inactive | Request Archive | Current state pending review | Authorized staff | None at submission | Student identified; reason supplied | Invalid request rejected; state unchanged | No automatic relationship effect | Request actor, reason and time |
| Current state pending review | Approve Archive | Archived | Archive executor | Configured Archive authority | Active-relationship review completed; every obligation explicitly resolved/closed/transferred/retained | Remain prior state with rejection reason | At approved effective time normal current operation ends; history/receivables remain | Before/after state, review snapshot, decisions, actor and time |
| Archived | Approve Return review | Archived; eligible for explicit reactivation decisions | Authorized staff or returning Student/Guardian request | Configured Restore authority | Fresh relationship, identity, obligation and access review completed | Remain Archived with reason | No Student, Subscription, Group, account or entitlement reactivation | Review/decision actor, findings, reason and time |
| Archived after approved Return review | Explicitly reactivate Student | Registered or Temporarily Inactive as explicitly approved | Student-state executor | Configured Student-state authority | Target state and prerequisites approved separately | Remain Archived with reason | Student state changes at effective time; all other relationships remain inactive until separately approved | State before/after, target rationale, actor, approver and effective time |
