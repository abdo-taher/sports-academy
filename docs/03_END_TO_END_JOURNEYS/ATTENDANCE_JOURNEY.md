# Attendance Journey

## End-to-End Flow

| Stage | Trigger / Preconditions | Approved Behavior | Exception / Rejection | History and Hand-off |
|---|---|---|---|---|
| Session eligibility | Specific Session and Student identified | Attendance attaches to Session under BR-ATT-001 | Academy cancellation/reschedule uses BR-SES-001/002 | Session reference retained. |
| Subscription eligibility | Candidate Subscriptions resolved by Session context | Active, cleared, non-frozen, unexpired, sufficient balance | Ambiguity, expiry, Freeze or insufficient balance rejects | Exact selected Subscription retained. |
| Record Attendance | Authorized actor records outcome once | Duplicate prevented under BR-ATT-002 | Duplicate returns/rejects without second deduction | Actor/time/source retained. |
| Present deduction | Eligible Subscription selected | Exactly one reasoned deduction | No duplicate or negative balance | Attendance and Ledger entries cross-reference. |
| Absence | Record factual absence | No present deduction | Excuse may later prevent/restore one deduction | Original status retained. |
| Excuse review | Configured submitter/evidence/deadline and approval | Prevent deduction or restore one under BR-ATT-005 | Rejection retains reason; no default Make-up/date extension | Request/decision/Ledger link retained. |
| Make-up | Only if a separate future explicit policy enables it | No default entitlement | Generated expiry/token values prohibited | Any future entitlement keeps provenance. |
| Correction | Authorized actor identifies incorrect Attendance | BR-ATT-004 preserves changer, reason, timestamp and resulting ledger adjustment | Original Attendance and ledger event are never silently overwritten | Append correction and compensating ledger event; notify authorized audiences if policy requires. |

## Academy-Cancelled Session

Academy cancellation before Attendance causes no deduction; an existing deduction is restored by compensating entry. Rescheduling consumes no additional entitlement by itself. No default Make-up entitlement exists.

## Journey Completeness

`PARTIAL — BUSINESS GAP NBCG-011`: eligibility and Ledger effects are deterministic; the Attendance-record outcome after post-recording Academy cancellation is not.
