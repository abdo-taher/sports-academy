# Domain and Technical Terminology

## Boundary

This file defines downstream domain and technical vocabulary. It does not create business rules or settle disputed business states. Business names come from `BUSINESS_GLOSSARY.md`.

## Documented Bounded-Context Candidates

- Student and Parent
- Training and Scheduling
- Subscription and Finance
- Attendance
- Evaluation and Performance
- Communication
- Documents and Media
- Identity and Access
- Reporting and Analytics
- Audit and History

These remain design candidates until derived from the approved business model.

## Status-Set Governance

Technical enums remain provisional until derived from the canonical business lifecycle. Approved business states and outcomes are located as follows:

- Student state: `02_DOMAINS/STUDENT/STUDENT_LIFECYCLE.md` under BD-008.
- Subscription state: `02_DOMAINS/SUBSCRIPTION/SUBSCRIPTION_LIFECYCLE.md` under BD-014, BD-016 and BD-020.
- Payment/Invoice outcomes: `02_DOMAINS/PAYMENT/PAYMENT_LIFECYCLE.md` under BD-014 and BD-015.
- Freeze/Transfer request states: the owning Subscription/Transfer lifecycles under BD-018, BD-019 and BD-022.

Attendance outcomes include `Present`, `Absent`, `Excused`, `Late` and `Voided — Session Cancelled`; eligibility and Ledger effects are governed by BR-ATT-001–008.

Post/Feed is interactive audience-scoped content; Communication/Notification is operational message delivery; Survey is structured response collection. Official Evaluation, Session Feedback and Comment are separate records. System Level Recommendation is advisory and is not the final human Level Decision. Stage is a broader progression phase containing ordered Levels; Stage and Level are not synonyms.

## Prohibited Reverse Derivation

Enums, table values, APIs, event names and class names must not be used to infer an approved business lifecycle.
