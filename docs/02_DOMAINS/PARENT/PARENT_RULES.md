
## BR-PAR-006

| Field | Value |
|---|---|
| Name | Minor Guardian Requirement |
| Status | CONFIRMED-WITH-CONFIGURATION |
| Business Statement | A minor Student has at least one linked Guardian and exactly one Primary Guardian at a time. |
| Domain Owner | PARENT |
| Trigger | Minor enrollment/relationship change |
| Preconditions | Required identities and relationships are identifiable; actor authority and any mandatory configuration are valid. |
| Validation | Evaluate this statement, linked decisions, lifecycle state and effective configuration before action. |
| Allowed Outcome | The stated outcome occurs only when all preconditions and authority checks pass. |
| Rejection Outcome | Reject or hold the action with the violated Rule/configuration/authority reason; do not partially or silently apply it. |
| Exception Model | Only an explicitly approved, auditable exception named by this Rule or its authority/configuration artifact. |
| Actor / Authority | Reception / authorized relationship actor |
| Configuration Dependency | Minor/adult determination policy |
| Effective-Date Behavior | State, assignment, policy and configuration changes apply from their recorded effective date and do not rewrite history. |
| History / Audit | Preserve actor, time, reason, before/after values and linked approval/exception where applicable. |
| Related Decisions | BD-010 |
| Related Lifecycle / Journey | `PARENT_LIFECYCLE.md`; relevant file in `../../03_END_TO_END_JOURNEYS/` |
| Downstream Impact | Requirements, permission, DDD, database, API, UX and QA trace through `05_REQUIREMENTS/DERIVATION_MAP.md`. |

## BR-PAR-007

| Field | Value |
|---|---|
| Name | Guardian Roles and Billing |
| Status | CONFIRMED-WITH-CONFIGURATION |
| Business Statement | A Student may have multiple Guardians with scoped access; Primary Guardian is default operational contact, while billing responsibility may belong to another explicitly authorized linked Guardian. |
| Domain Owner | PARENT |
| Trigger | Guardian relationship/access/billing change |
| Preconditions | Required identities and relationships are identifiable; actor authority and any mandatory configuration are valid. |
| Validation | Evaluate this statement, linked decisions, lifecycle state and effective configuration before action. |
| Allowed Outcome | The stated outcome occurs only when all preconditions and authority checks pass. |
| Rejection Outcome | Reject or hold the action with the violated Rule/configuration/authority reason; do not partially or silently apply it. |
| Exception Model | Only an explicitly approved, auditable exception named by this Rule or its authority/configuration artifact. |
| Actor / Authority | Authorized relationship actor |
| Configuration Dependency | Access scope configuration |
| Effective-Date Behavior | State, assignment, policy and configuration changes apply from their recorded effective date and do not rewrite history. |
| History / Audit | Preserve actor, time, reason, before/after values and linked approval/exception where applicable. |
| Related Decisions | BD-010 |
| Related Lifecycle / Journey | `PARENT_LIFECYCLE.md`; relevant file in `../../03_END_TO_END_JOURNEYS/` |
| Downstream Impact | Requirements, permission, DDD, database, API, UX and QA trace through `05_REQUIREMENTS/DERIVATION_MAP.md`. |

## BR-PAR-008

| Field | Value |
|---|---|
| Name | Adult Student Ownership |
| Status | CONFIRMED-WITH-CONFIGURATION |
| Business Statement | An adult Student may manage own account, consent and billing; Guardian relationship is optional unless explicit legal/Academy policy requires it. |
| Domain Owner | PARENT |
| Trigger | Adult enrollment/account setup |
| Preconditions | Required identities and relationships are identifiable; actor authority and any mandatory configuration are valid. |
| Validation | Evaluate this statement, linked decisions, lifecycle state and effective configuration before action. |
| Allowed Outcome | The stated outcome occurs only when all preconditions and authority checks pass. |
| Rejection Outcome | Reject or hold the action with the violated Rule/configuration/authority reason; do not partially or silently apply it. |
| Exception Model | Only an explicitly approved, auditable exception named by this Rule or its authority/configuration artifact. |
| Actor / Authority | Authorized enrollment actor |
| Configuration Dependency | Adult/legal policy |
| Effective-Date Behavior | State, assignment, policy and configuration changes apply from their recorded effective date and do not rewrite history. |
| History / Audit | Preserve actor, time, reason, before/after values and linked approval/exception where applicable. |
| Related Decisions | BD-010 |
| Related Lifecycle / Journey | `PARENT_LIFECYCLE.md`; relevant file in `../../03_END_TO_END_JOURNEYS/` |
| Downstream Impact | Requirements, permission, DDD, database, API, UX and QA trace through `05_REQUIREMENTS/DERIVATION_MAP.md`. |
# Parent Rules

This file is the canonical rule definition file for the Parent domain.

## BR-PAR-001

| Field | Value |
|---|---|
| Status | CONFIRMED |
| Rule Statement | A Parent can be linked to multiple Students. |
| Trigger | Parent linking |
| Preconditions | The trigger context and required related business identities are identifiable; actor authority is approved or the action is blocked. |
| Validation | Evaluate the Rule Statement directly and resolve every linked decision that controls the requested outcome before acting. |
| Allowed Behavior | Only the outcome expressly permitted by the Rule Statement, its lifecycle and approved related decisions. |
| Prohibited Behavior | The inverse of the Rule Statement, a silent history rewrite, or any outcome that resolves an open decision by assumption. |
| Result | A rule-compliant outcome is recorded; otherwise the action is rejected or blocked with the controlling Rule/Decision/Configuration ID. |
| Exceptions | Only explicitly approved and configured exceptions; missing production values are `BUSINESS CONFIGURATION REQUIRED` and never inferred. |
| Audit Impact | Actor, date/time, reason and affected record must be preserved where a decision, correction, financial or historical change occurs. |
| History Impact | Preserve history unless an approved rule states otherwise. |
| Related Decisions | None directly cited |
| Related Lifecycle | `PARENT_LIFECYCLE.md` |
| Related Policies | `../../04_POLICIES/PARENT_POLICIES.md` where applicable |
| Downstream Links | Requirements/DDD/DB/API/UX/QA must trace back to this rule ID. |

## BR-PAR-009

| Field | Value |
|---|---|
| Name | Guardian Authority Revalidation |
| Status | CONFIRMED |
| Business Statement | Guardian authority is snapshotted at submission and revalidated at decision and execution; if authority is no longer valid, the request is held for adoption/continuation or cancellation by a currently authorized party. |
| Domain Owner | PARENT |
| Authority | Current authorized Guardian or owning process actor; process approver/executor must revalidate; technical Admin has no business authority. |
| Lifecycle / State | Submitted → Held-Authority-Review when authority changes → Continued/Cancelled by authorized actor. |
| Validation | Relationship/delegation is effective and in scope at each checkpoint; original initiator remains attributable. |
| Rejection / Exception | Reject new action by former Guardian; hold rather than silently execute or erase a pending request. |
| History / Audit | Preserve relationship versions, submission snapshot, checks, hold, adopter/canceller, reasons, approvals and times. |
| Configuration Dependency | Validation checkpoints and adoption/cancellation role bindings; no waiver by technical access. |
| Current / Future Scope | CURRENT |
| Decision / NBCG Source | NBCG-DEC-008 / NBCG-008 |
| Canonical References | PARENT_LIFECYCLE.md; BR-PAR-005–008; BR-ADM-001/002 |


## BR-PAR-002

| Field | Value |
|---|---|
| Status | CONFIRMED |
| Rule Statement | A Parent may access only linked Students. |
| Trigger | Monitoring and security |
| Preconditions | The trigger context and required related business identities are identifiable; actor authority is approved or the action is blocked. |
| Validation | Evaluate the Rule Statement directly and resolve every linked decision that controls the requested outcome before acting. |
| Allowed Behavior | Only the outcome expressly permitted by the Rule Statement, its lifecycle and approved related decisions. |
| Prohibited Behavior | The inverse of the Rule Statement, a silent history rewrite, or any outcome that resolves an open decision by assumption. |
| Result | A rule-compliant outcome is recorded; otherwise the action is rejected or blocked with the controlling Rule/Decision/Configuration ID. |
| Exceptions | Only explicitly approved and configured exceptions; missing production values are `BUSINESS CONFIGURATION REQUIRED` and never inferred. |
| Audit Impact | Actor, date/time, reason and affected record must be preserved where a decision, correction, financial or historical change occurs. |
| History Impact | Preserve history unless an approved rule states otherwise. |
| Related Decisions | None directly cited |
| Related Lifecycle | `PARENT_LIFECYCLE.md` |
| Related Policies | `../../04_POLICIES/PARENT_POLICIES.md` where applicable |
| Downstream Links | Requirements/DDD/DB/API/UX/QA must trace back to this rule ID. |

## BR-PAR-003

| Field | Value |
|---|---|
| Status | CONFIRMED |
| Rule Statement | A Parent may request, comment and monitor but may not modify official Attendance or Evaluation records. |
| Trigger | Parent operations |
| Preconditions | The trigger context and required related business identities are identifiable; actor authority is approved or the action is blocked. |
| Validation | Evaluate the Rule Statement directly and resolve every linked decision that controls the requested outcome before acting. |
| Allowed Behavior | Only the outcome expressly permitted by the Rule Statement, its lifecycle and approved related decisions. |
| Prohibited Behavior | The inverse of the Rule Statement, a silent history rewrite, or any outcome that resolves an open decision by assumption. |
| Result | A rule-compliant outcome is recorded; otherwise the action is rejected or blocked with the controlling Rule/Decision/Configuration ID. |
| Exceptions | Only explicitly approved and configured exceptions; missing production values are `BUSINESS CONFIGURATION REQUIRED` and never inferred. |
| Audit Impact | Actor, date/time, reason and affected record must be preserved where a decision, correction, financial or historical change occurs. |
| History Impact | Preserve history unless an approved rule states otherwise. |
| Related Decisions | None directly cited |
| Related Lifecycle | `PARENT_LIFECYCLE.md` |
| Related Policies | `../../04_POLICIES/PARENT_POLICIES.md` where applicable |
| Downstream Links | Requirements/DDD/DB/API/UX/QA must trace back to this rule ID. |

## BR-PAR-004

| Field | Value |
|---|---|
| Status | CONFIRMED |
| Rule Statement | A Parent linked to Student history is archived rather than permanently deleted. |
| Trigger | Parent archive |
| Preconditions | The trigger context and required related business identities are identifiable; actor authority is approved or the action is blocked. |
| Validation | Evaluate the Rule Statement directly and resolve every linked decision that controls the requested outcome before acting. |
| Allowed Behavior | Only the outcome expressly permitted by the Rule Statement, its lifecycle and approved related decisions. |
| Prohibited Behavior | The inverse of the Rule Statement, a silent history rewrite, or any outcome that resolves an open decision by assumption. |
| Result | A rule-compliant outcome is recorded; otherwise the action is rejected or blocked with the controlling Rule/Decision/Configuration ID. |
| Exceptions | Only explicitly approved and configured exceptions; missing production values are `BUSINESS CONFIGURATION REQUIRED` and never inferred. |
| Audit Impact | Actor, date/time, reason and affected record must be preserved where a decision, correction, financial or historical change occurs. |
| History Impact | Preserve history unless an approved rule states otherwise. |
| Related Decisions | None directly cited |
| Related Lifecycle | `PARENT_LIFECYCLE.md` |
| Related Policies | `../../04_POLICIES/PARENT_POLICIES.md` where applicable |
| Downstream Links | Requirements/DDD/DB/API/UX/QA must trace back to this rule ID. |

## BR-PAR-005

| Field | Value |
|---|---|
| Status | CONFIRMED-WITH-APPROVAL-GAP |
| Rule Statement | Changing a Student's Parent relationship preserves the previous history. |
| Trigger | Guardian change |
| Preconditions | The trigger context and required related business identities are identifiable; actor authority is approved or the action is blocked. |
| Validation | Evaluate the Rule Statement directly and resolve every linked decision that controls the requested outcome before acting. |
| Allowed Behavior | Only the outcome expressly permitted by the Rule Statement, its lifecycle and approved related decisions. |
| Prohibited Behavior | The inverse of the Rule Statement, a silent history rewrite, or any outcome that resolves an open decision by assumption. |
| Result | A rule-compliant outcome is recorded; otherwise the action is rejected or blocked with the controlling Rule/Decision/Configuration ID. |
| Exceptions | Only explicitly approved and configured exceptions; missing production values are `BUSINESS CONFIGURATION REQUIRED` and never inferred. |
| Audit Impact | Actor, date/time, reason and affected record must be preserved where a decision, correction, financial or historical change occurs. |
| History Impact | Preserve history unless an approved rule states otherwise. |
| Related Decisions | None directly cited |
| Related Lifecycle | `PARENT_LIFECYCLE.md` |
| Related Policies | `../../04_POLICIES/PARENT_POLICIES.md` where applicable |
| Downstream Links | Requirements/DDD/DB/API/UX/QA must trace back to this rule ID. |
