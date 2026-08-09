# Transfer Rules

This file is the canonical rule definition file for the Transfer domain.

## BR-TRN-001

| Field | Value |
|---|---|
| Name | Typed Transfer Policies |
| Status | CONFIRMED-WITH-CONFIGURATION |
| Business Statement | Group, Level, Sport and Branch Transfer are separate policy types; each validates its own eligibility, capacity/availability, approval and Subscription/balance effects. |
| Domain Owner | TRANSFER |
| Trigger | Transfer request |
| Preconditions | Required identities and relationships are identifiable; actor authority and mandatory configuration are valid. |
| Validation | Evaluate this Rule, linked decision, lifecycle state and effective configuration before action. |
| Allowed Outcome | Apply only the stated outcome when all validations pass. |
| Rejection Outcome | Reject or hold with the violated Rule/configuration/authority reason; never partially or silently apply. |
| Exception Model | Only an explicitly approved, audited exception named in the authority/configuration artifacts. |
| Actor / Authority | Transfer approver by type/scope |
| Configuration Dependency | Transfer policy by type |
| Effective-Date Behavior | Apply from recorded effective date without rewriting historical records. |
| History / Audit | Preserve actor, time, reason, before/after values and approval/exception reference. |
| Related Decisions | BD-022 |
| Related Lifecycle / Journey | `TRANSFER_LIFECYCLE.md`; relevant journey under `../../03_END_TO_END_JOURNEYS/` |
| Downstream Impact | Full chain is recorded in `../../05_REQUIREMENTS/DERIVATION_MAP.md`. |

## BR-TRN-002

| Field | Value |
|---|---|
| Name | Effective Transfer History |
| Status | CONFIRMED-WITH-CONFIGURATION |
| Business Statement | Approved Transfer changes future assignments from its effective date and preserves old/new assignment, request/decision actors, approval/rejection, reason, cancellation and Audit History without rewriting past Sessions. |
| Domain Owner | TRANSFER |
| Trigger | Transfer decision/effective date |
| Preconditions | Required identities and relationships are identifiable; actor authority and mandatory configuration are valid. |
| Validation | Evaluate this Rule, linked decision, lifecycle state and effective configuration before action. |
| Allowed Outcome | Apply only the stated outcome when all validations pass. |
| Rejection Outcome | Reject or hold with the violated Rule/configuration/authority reason; never partially or silently apply. |
| Exception Model | Only an explicitly approved, audited exception named in the authority/configuration artifacts. |
| Actor / Authority | Transfer approver and executor |
| Configuration Dependency | Transfer communication/effective-date configuration |
| Effective-Date Behavior | Apply from recorded effective date without rewriting historical records. |
| History / Audit | Preserve actor, time, reason, before/after values and approval/exception reference. |
| Related Decisions | BD-022 |
| Related Lifecycle / Journey | `TRANSFER_LIFECYCLE.md`; relevant journey under `../../03_END_TO_END_JOURNEYS/` |
| Downstream Impact | Full chain is recorded in `../../05_REQUIREMENTS/DERIVATION_MAP.md`. |
