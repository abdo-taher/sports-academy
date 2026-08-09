# History and Audit Model

## Purpose

This file separates business history concepts that must not be treated as synonyms. It defines ownership and use; it does not prescribe a database design.

## Required Distinctions

| Concept | Meaning | Canonical Owner | Typical Use |
|---|---|---|---|
| Activity Log | A user-facing chronological feed of relevant actions or communications. It may be filtered and is not proof of every protected change. | Academy for the pattern; each domain supplies its events. | Operational awareness. |
| Audit Log | A protected accountability record of who performed a sensitive action, when, on what record and with what reason/result. | Academy governance; each domain owns the business event. | Compliance, investigation and control. |
| Business Timeline | A business-readable history pattern centered on one entity and composed from authoritative domain events. | Academy owns the cross-domain pattern; the entity domain owns its timeline content, such as Student Timeline. | Case understanding and service continuity. |
| Decision History | A durable record of accept/reject/other decisions on business requests. | Academy / Business Administration. | Decision accountability. |
| Approval History | The approval-stage subset of Decision History, including delegation or hand-off when used. | Academy / Business Administration. | Approval governance. |
| Financial Ledger | An immutable-by-normal-operation record of monetary events, reversals, refunds and adjustments. | Payment. | Financial truth and reconciliation. |
| Subscription Ledger | The history of session allocation, deduction, restoration and adjustment for one Subscription. | Subscription. | Session balance truth. |
| Attendance Ledger | The history of Attendance recording and corrections; financial/session effects reference Subscription Ledger entries. | Attendance. | Attendance truth and correction history. |

## Approved History Rules

- A business-friendly Activity Log cannot replace the Audit Log.
- A Business Timeline may reference audit, decision, financial, attendance and communication records but does not own or overwrite them.
- Correction creates history; it does not erase the prior approved fact.
- Archive is not deletion and does not remove required history under BR-ARC-001.
- A reversal records a compensating event and preserves the original under BR-FIN-002 and BR-SUB-004.
- Visibility in any history view remains constrained by actor relationship and approved authority.

## Lifecycle Use

Each domain lifecycle identifies which event is recorded, whether it changes business state, which domain owns the authoritative history and which audiences may be notified. Unknown retention duration, detailed visibility or approval authority must remain explicit rather than inferred.

## Approved Business Decisions

- BD-010 — approved; see Decision Log and linked canonical Rules.
- BD-012 — approved; see Decision Log and linked canonical Rules.
- BD-024 — approved; see Decision Log and linked canonical Rules.
- BD-025 — approved; see Decision Log and linked canonical Rules.
