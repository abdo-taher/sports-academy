# Session Rules

This file is the canonical rule definition file for the Session domain.

## BR-SES-001

| Field | Value |
|---|---|
| Name | Academy Cancellation Ledger Outcome |
| Status | CONFIRMED-WITH-CONFIGURATION |
| Business Statement | Academy cancellation before Attendance causes no Session deduction; if deduction already occurred, one compensating Subscription Ledger restoration is recorded. |
| Domain Owner | SESSION |
| Trigger | Session cancellation |
| Preconditions | Required identities and relationships are identifiable; actor authority and mandatory configuration are valid. |
| Validation | Evaluate this Rule, linked decision, lifecycle state and effective configuration before action. |
| Allowed Outcome | Apply only the stated outcome when all validations pass. |
| Rejection Outcome | Reject or hold with the violated Rule/configuration/authority reason; never partially or silently apply. |
| Exception Model | Only an explicitly approved, audited exception named in the authority/configuration artifacts. |
| Actor / Authority | Session cancellation authority |
| Configuration Dependency | Cancellation reason/notification configuration |
| Effective-Date Behavior | Apply from recorded effective date without rewriting historical records. |
| History / Audit | Preserve actor, time, reason, before/after values and approval/exception reference. |
| Related Decisions | BD-030 |
| Related Lifecycle / Journey | `SESSION_LIFECYCLE.md`; relevant journey under `../../03_END_TO_END_JOURNEYS/` |
| Downstream Impact | Full chain is recorded in `../../05_REQUIREMENTS/DERIVATION_MAP.md`. |

## BR-SES-003

| Field | Value |
|---|---|
| Name | Branch Closure Session Disposition |
| Status | CONFIRMED |
| Business Statement | Branch closure requires every affected future Session to receive an authorized recorded outcome: cancel, reschedule, transfer to an eligible Branch, or explicit approved exception; closure cannot leave an executable orphan Session. |
| Domain Owner | SESSION |
| Authority | Branch closure owner coordinates; authorized Session actor selects outcome; transfer/cancellation consequences use owning authority. |
| Lifecycle / State | Affected future Session enters disposition review, then Cancelled, linked replacement/reschedule, transferred replacement or approved exception. |
| Validation | Branch closure effective time, Session state, destination eligibility, participants and entitlement effects are known. |
| Rejection / Exception | Hold closure/session execution when no valid outcome; reject transfer to unavailable destination. |
| History / Audit | Preserve original Session, chosen outcome, actors, reason, effective time, participants, communication and entitlement record. |
| Configuration Dependency | Disposition deadline, notices and exception role; no invented refunds/credits. |
| Current / Future Scope | CURRENT |
| Decision / NBCG Source | NBCG-DEC-002 / NBCG-002 |
| Canonical References | SESSION_LIFECYCLE.md; SCHEDULING_AND_CALENDAR.md; BR-SES-001/002 |


## BR-SES-004

| Field | Value |
|---|---|
| Name | Comprehensive Session State Integrity |
| Status | CONFIRMED |
| Business Statement | Session states are Draft, Scheduled, Confirmed, In Progress, Completed, Cancelled and Superseded; rescheduling never overwrites the original and uses a linked schedule version or replacement Session. |
| Domain Owner | SESSION |
| Authority | Authorized scheduler for Draft/Scheduled; assigned operational actor for confirmation/start/completion; authorized cancellation/reschedule actor. |
| Lifecycle / State | Draft → Scheduled → Confirmed → In Progress → Completed; pre-completion → Cancelled; changed schedule → Superseded with linked replacement. |
| Validation | Transition is allowed, actor is in scope, time/conflicts resolved and completed history is immutable. |
| Rejection / Exception | Reject backward overwrite of Completed/Cancelled/Superseded records; late correction uses versioned correction and approval. |
| History / Audit | Preserve every state, schedule version/link, actor, reason, effective time, attendance and entitlement consequence. |
| Configuration Dependency | Cutoffs, conflict priority and reason catalogs; states and immutable linkage are fixed. |
| Current / Future Scope | CURRENT |
| Decision / NBCG Source | NBCG-DEC-010 / NBCG-010 |
| Canonical References | SESSION_LIFECYCLE.md; SESSION_MODEL.md; BR-SES-001–003 |


## BR-SES-002

| Field | Value |
|---|---|
| Name | Reschedule Entitlement Neutrality |
| Status | CONFIRMED-WITH-CONFIGURATION |
| Business Statement | Rescheduling preserves the original Session/change history and consumes no additional Session entitlement by itself. |
| Domain Owner | SESSION |
| Trigger | Session reschedule |
| Preconditions | Required identities and relationships are identifiable; actor authority and mandatory configuration are valid. |
| Validation | Evaluate this Rule, linked decision, lifecycle state and effective configuration before action. |
| Allowed Outcome | Apply only the stated outcome when all validations pass. |
| Rejection Outcome | Reject or hold with the violated Rule/configuration/authority reason; never partially or silently apply. |
| Exception Model | Only an explicitly approved, audited exception named in the authority/configuration artifacts. |
| Actor / Authority | Session reschedule authority |
| Configuration Dependency | Reschedule/communication configuration |
| Effective-Date Behavior | Apply from recorded effective date without rewriting historical records. |
| History / Audit | Preserve actor, time, reason, before/after values and approval/exception reference. |
| Related Decisions | BD-030 |
| Related Lifecycle / Journey | `SESSION_LIFECYCLE.md`; relevant journey under `../../03_END_TO_END_JOURNEYS/` |
| Downstream Impact | Full chain is recorded in `../../05_REQUIREMENTS/DERIVATION_MAP.md`. |
