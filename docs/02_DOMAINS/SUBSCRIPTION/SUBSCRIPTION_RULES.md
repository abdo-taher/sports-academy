
## BR-SUB-008

| Field | Value |
|---|---|
| Name | Financial Clearance |
| Status | CONFIRMED-WITH-CONFIGURATION |
| Business Statement | Subscription activates only after full approved Payment or satisfaction of the required initial conditions of an approved installment/debt plan. |
| Domain Owner | SUBSCRIPTION |
| Trigger | Subscription activation |
| Preconditions | Required identities and relationships are identifiable; actor authority and any mandatory configuration are valid. |
| Validation | Evaluate this statement, linked decisions, lifecycle state and effective configuration before action. |
| Allowed Outcome | The stated outcome occurs only when all preconditions and authority checks pass. |
| Rejection Outcome | Reject or hold the action with the violated Rule/configuration/authority reason; do not partially or silently apply it. |
| Exception Model | Only an explicitly approved, auditable exception named by this Rule or its authority/configuration artifact. |
| Actor / Authority | Finance records clearance; authorized activation executor |
| Configuration Dependency | CFG-FIN-001, CFG-FIN-002 |
| Effective-Date Behavior | State, assignment, policy and configuration changes apply from their recorded effective date and do not rewrite history. |
| History / Audit | Preserve actor, time, reason, before/after values and linked approval/exception where applicable. |
| Related Decisions | BD-014 |
| Related Lifecycle / Journey | `SUBSCRIPTION_LIFECYCLE.md`; relevant file in `../../03_END_TO_END_JOURNEYS/` |
| Downstream Impact | Requirements, permission, DDD, database, API, UX and QA trace through `05_REQUIREMENTS/DERIVATION_MAP.md`. |

## BR-SUB-009

| Field | Value |
|---|---|
| Name | Manual Activation Exception |
| Status | CONFIRMED |
| Business Statement | Activation outside normal financial clearance requires explicit authorized approval with reason, actor, date/time and Audit History. |
| Domain Owner | SUBSCRIPTION |
| Trigger | Manual activation |
| Preconditions | Required identities and relationships are identifiable; actor authority and any mandatory configuration are valid. |
| Validation | Evaluate this statement, linked decisions, lifecycle state and effective configuration before action. |
| Allowed Outcome | The stated outcome occurs only when all preconditions and authority checks pass. |
| Rejection Outcome | Reject or hold the action with the violated Rule/configuration/authority reason; do not partially or silently apply it. |
| Exception Model | Only an explicitly approved, auditable exception named by this Rule or its authority/configuration artifact. |
| Actor / Authority | Financial exception approver |
| Configuration Dependency | None |
| Effective-Date Behavior | State, assignment, policy and configuration changes apply from their recorded effective date and do not rewrite history. |
| History / Audit | Preserve actor, time, reason, before/after values and linked approval/exception where applicable. |
| Related Decisions | BD-014, BD-025 |
| Related Lifecycle / Journey | `SUBSCRIPTION_LIFECYCLE.md`; relevant file in `../../03_END_TO_END_JOURNEYS/` |
| Downstream Impact | Requirements, permission, DDD, database, API, UX and QA trace through `05_REQUIREMENTS/DERIVATION_MAP.md`. |

## BR-SUB-010

| Field | Value |
|---|---|
| Name | Controlled Carry-over |
| Status | CONFIRMED-WITH-CONFIGURATION |
| Business Statement | Unused Session carry-over is allowed only by Subscription Plan policy; permitted transfer is recorded in the new Subscription Ledger with source provenance and never silently crosses Sport. |
| Domain Owner | SUBSCRIPTION |
| Trigger | Renewal/carry-over |
| Preconditions | Required identities and relationships are identifiable; actor authority and any mandatory configuration are valid. |
| Validation | Evaluate this statement, linked decisions, lifecycle state and effective configuration before action. |
| Allowed Outcome | The stated outcome occurs only when all preconditions and authority checks pass. |
| Rejection Outcome | Reject or hold the action with the violated Rule/configuration/authority reason; do not partially or silently apply it. |
| Exception Model | Only an explicitly approved, auditable exception named by this Rule or its authority/configuration artifact. |
| Actor / Authority | Authorized Renewal executor |
| Configuration Dependency | CFG-REN-003 |
| Effective-Date Behavior | State, assignment, policy and configuration changes apply from their recorded effective date and do not rewrite history. |
| History / Audit | Preserve actor, time, reason, before/after values and linked approval/exception where applicable. |
| Related Decisions | BD-021 |
| Related Lifecycle / Journey | `SUBSCRIPTION_LIFECYCLE.md`; relevant file in `../../03_END_TO_END_JOURNEYS/` |
| Downstream Impact | Requirements, permission, DDD, database, API, UX and QA trace through `05_REQUIREMENTS/DERIVATION_MAP.md`. |

## BR-SUB-011

| Field | Value |
|---|---|
| Name | Deterministic Attendance Funding |
| Status | CONFIRMED-WITH-CONFIGURATION |
| Business Statement | Each Attendance consuming entitlement funds exactly one eligible Subscription selected from Session Sport, Program, Group, eligibility period and approved overlap policy; balances never merge. |
| Domain Owner | SUBSCRIPTION |
| Trigger | Attendance funding selection |
| Preconditions | Required identities and relationships are identifiable; actor authority and any mandatory configuration are valid. |
| Validation | Evaluate this statement, linked decisions, lifecycle state and effective configuration before action. |
| Allowed Outcome | The stated outcome occurs only when all preconditions and authority checks pass. |
| Rejection Outcome | Reject or hold the action with the violated Rule/configuration/authority reason; do not partially or silently apply it. |
| Exception Model | Only an explicitly approved, auditable exception named by this Rule or its authority/configuration artifact. |
| Actor / Authority | System validation; exception authority per matrix |
| Configuration Dependency | CFG-SUB-004 |
| Effective-Date Behavior | State, assignment, policy and configuration changes apply from their recorded effective date and do not rewrite history. |
| History / Audit | Preserve actor, time, reason, before/after values and linked approval/exception where applicable. |
| Related Decisions | BD-021, BD-023 |
| Related Lifecycle / Journey | `SUBSCRIPTION_LIFECYCLE.md`; relevant file in `../../03_END_TO_END_JOURNEYS/` |
| Downstream Impact | Requirements, permission, DDD, database, API, UX and QA trace through `05_REQUIREMENTS/DERIVATION_MAP.md`. |
# Subscription Rules

This file is the canonical rule definition file for the Subscription domain.

## BR-SUB-001

| Field | Value |
|---|---|
| Status | CONFIRMED |
| Rule Statement | Each Subscription belongs to one Student, one Sport and one Level. |
| Trigger | Subscription creation |
| Preconditions | The trigger context and required related business identities are identifiable; actor authority is approved or the action is blocked. |
| Validation | Evaluate the Rule Statement directly and resolve every linked decision that controls the requested outcome before acting. |
| Allowed Behavior | Only the outcome expressly permitted by the Rule Statement, its lifecycle and approved related decisions. |
| Prohibited Behavior | The inverse of the Rule Statement, a silent history rewrite, or any outcome that resolves an open decision by assumption. |
| Result | A rule-compliant outcome is recorded; otherwise the action is rejected or blocked with the controlling Rule/Decision/Configuration ID. |
| Exceptions | Only explicitly approved and configured exceptions; missing production values are `BUSINESS CONFIGURATION REQUIRED` and never inferred. |
| Audit Impact | Actor, date/time, reason and affected record must be preserved where a decision, correction, financial or historical change occurs. |
| History Impact | Preserve history unless an approved rule states otherwise. |
| Related Decisions | None directly cited |
| Related Lifecycle | `SUBSCRIPTION_LIFECYCLE.md` |
| Related Policies | `../../04_POLICIES/SUBSCRIPTION_POLICIES.md` where applicable |
| Downstream Links | Requirements/DDD/DB/API/UX/QA must trace back to this rule ID. |

## BR-SUB-002

| Field | Value |
|---|---|
| Status | CONFIRMED |
| Rule Statement | A Subscription is either Group or Private, not both. |
| Trigger | Subscription creation |
| Preconditions | The trigger context and required related business identities are identifiable; actor authority is approved or the action is blocked. |
| Validation | Evaluate the Rule Statement directly and resolve every linked decision that controls the requested outcome before acting. |
| Allowed Behavior | Only the outcome expressly permitted by the Rule Statement, its lifecycle and approved related decisions. |
| Prohibited Behavior | The inverse of the Rule Statement, a silent history rewrite, or any outcome that resolves an open decision by assumption. |
| Result | A rule-compliant outcome is recorded; otherwise the action is rejected or blocked with the controlling Rule/Decision/Configuration ID. |
| Exceptions | Only explicitly approved and configured exceptions; missing production values are `BUSINESS CONFIGURATION REQUIRED` and never inferred. |
| Audit Impact | Actor, date/time, reason and affected record must be preserved where a decision, correction, financial or historical change occurs. |
| History Impact | Preserve history unless an approved rule states otherwise. |
| Related Decisions | None directly cited |
| Related Lifecycle | `SUBSCRIPTION_LIFECYCLE.md` |
| Related Policies | `../../04_POLICIES/SUBSCRIPTION_POLICIES.md` where applicable |
| Downstream Links | Requirements/DDD/DB/API/UX/QA must trace back to this rule ID. |

## BR-SUB-003

| Field | Value |
|---|---|
| Status | CONFIRMED |
| Rule Statement | Each Subscription has its own session quantity and balance. |
| Trigger | Session accounting |
| Preconditions | The trigger context and required related business identities are identifiable; actor authority is approved or the action is blocked. |
| Validation | Evaluate the Rule Statement directly and resolve every linked decision that controls the requested outcome before acting. |
| Allowed Behavior | Only the outcome expressly permitted by the Rule Statement, its lifecycle and approved related decisions. |
| Prohibited Behavior | The inverse of the Rule Statement, a silent history rewrite, or any outcome that resolves an open decision by assumption. |
| Result | A rule-compliant outcome is recorded; otherwise the action is rejected or blocked with the controlling Rule/Decision/Configuration ID. |
| Exceptions | Only explicitly approved and configured exceptions; missing production values are `BUSINESS CONFIGURATION REQUIRED` and never inferred. |
| Audit Impact | Actor, date/time, reason and affected record must be preserved where a decision, correction, financial or historical change occurs. |
| History Impact | Preserve history unless an approved rule states otherwise. |
| Related Decisions | None directly cited |
| Related Lifecycle | `SUBSCRIPTION_LIFECYCLE.md` |
| Related Policies | `../../04_POLICIES/SUBSCRIPTION_POLICIES.md` where applicable |
| Downstream Links | Requirements/DDD/DB/API/UX/QA must trace back to this rule ID. |

## BR-SUB-004

| Field | Value |
|---|---|
| Status | CONFIRMED |
| Rule Statement | Every session deduction, restoration and manual adjustment is recorded in a Subscription Ledger with its reason and history. |
| Trigger | Attendance and make-up |
| Preconditions | The trigger context and required related business identities are identifiable; actor authority is approved or the action is blocked. |
| Validation | Evaluate the Rule Statement directly and resolve every linked decision that controls the requested outcome before acting. |
| Allowed Behavior | Only the outcome expressly permitted by the Rule Statement, its lifecycle and approved related decisions. |
| Prohibited Behavior | The inverse of the Rule Statement, a silent history rewrite, or any outcome that resolves an open decision by assumption. |
| Result | A rule-compliant outcome is recorded; otherwise the action is rejected or blocked with the controlling Rule/Decision/Configuration ID. |
| Exceptions | Only explicitly approved and configured exceptions; missing production values are `BUSINESS CONFIGURATION REQUIRED` and never inferred. |
| Audit Impact | Actor, date/time, reason and affected record must be preserved where a decision, correction, financial or historical change occurs. |
| History Impact | Preserve history unless an approved rule states otherwise. |
| Related Decisions | None directly cited |
| Related Lifecycle | `SUBSCRIPTION_LIFECYCLE.md` |
| Related Policies | `../../04_POLICIES/SUBSCRIPTION_POLICIES.md` where applicable |
| Downstream Links | Requirements/DDD/DB/API/UX/QA must trace back to this rule ID. |

## BR-SUB-005

| Field | Value |
|---|---|
| Status | CONFIRMED |
| Rule Statement | Normal training requires an active, financially cleared, non-frozen, unexpired eligible Subscription with sufficient Session balance; no implicit expiry grace or negative balance is allowed. |
| Trigger | Attendance eligibility |
| Preconditions | The trigger context and required related business identities are identifiable; actor authority is approved or the action is blocked. |
| Validation | Evaluate the Rule Statement directly and resolve every linked decision that controls the requested outcome before acting. |
| Allowed Behavior | Only the outcome expressly permitted by the Rule Statement, its lifecycle and approved related decisions. |
| Prohibited Behavior | The inverse of the Rule Statement, a silent history rewrite, or any outcome that resolves an open decision by assumption. |
| Result | A rule-compliant outcome is recorded; otherwise the action is rejected or blocked with the controlling Rule/Decision/Configuration ID. |
| Exceptions | Only explicitly approved and configured exceptions; missing production values are `BUSINESS CONFIGURATION REQUIRED` and never inferred. |
| Audit Impact | Actor, date/time, reason and affected record must be preserved where a decision, correction, financial or historical change occurs. |
| History Impact | Preserve history unless an approved rule states otherwise. |
| Related Decisions | BD-014, BD-016, BD-017, BD-019 |
| Related Lifecycle | `SUBSCRIPTION_LIFECYCLE.md` |
| Related Policies | `../../04_POLICIES/SUBSCRIPTION_POLICIES.md` where applicable |
| Downstream Links | Requirements/DDD/DB/API/UX/QA must trace back to this rule ID. |

## BR-SUB-006

| Field | Value |
|---|---|
| Status | CONFIRMED |
| Rule Statement | A Subscription is not permanently deleted; historical records are preserved. |
| Trigger | Expiry, cancellation, archive |
| Preconditions | The trigger context and required related business identities are identifiable; actor authority is approved or the action is blocked. |
| Validation | Evaluate the Rule Statement directly and resolve every linked decision that controls the requested outcome before acting. |
| Allowed Behavior | Only the outcome expressly permitted by the Rule Statement, its lifecycle and approved related decisions. |
| Prohibited Behavior | The inverse of the Rule Statement, a silent history rewrite, or any outcome that resolves an open decision by assumption. |
| Result | A rule-compliant outcome is recorded; otherwise the action is rejected or blocked with the controlling Rule/Decision/Configuration ID. |
| Exceptions | Only explicitly approved and configured exceptions; missing production values are `BUSINESS CONFIGURATION REQUIRED` and never inferred. |
| Audit Impact | Actor, date/time, reason and affected record must be preserved where a decision, correction, financial or historical change occurs. |
| History Impact | Preserve history unless an approved rule states otherwise. |
| Related Decisions | None directly cited |
| Related Lifecycle | `SUBSCRIPTION_LIFECYCLE.md` |
| Related Policies | `../../04_POLICIES/SUBSCRIPTION_POLICIES.md` where applicable |
| Downstream Links | Requirements/DDD/DB/API/UX/QA must trace back to this rule ID. |

## BR-SUB-007

| Field | Value |
|---|---|
| Status | CONFIRMED |
| Rule Statement | Renewal creates a new Subscription linked to the previous Subscription and preserves the prior period, balance, Payment, Ledger and historical price records. |
| Trigger | Renewal |
| Preconditions | The trigger context and required related business identities are identifiable; actor authority is approved or the action is blocked. |
| Validation | Evaluate the Rule Statement directly and resolve every linked decision that controls the requested outcome before acting. |
| Allowed Behavior | Only the outcome expressly permitted by the Rule Statement, its lifecycle and approved related decisions. |
| Prohibited Behavior | The inverse of the Rule Statement, a silent history rewrite, or any outcome that resolves an open decision by assumption. |
| Result | A rule-compliant outcome is recorded; otherwise the action is rejected or blocked with the controlling Rule/Decision/Configuration ID. |
| Exceptions | Only explicitly approved and configured exceptions; missing production values are `BUSINESS CONFIGURATION REQUIRED` and never inferred. |
| Audit Impact | Actor, date/time, reason and affected record must be preserved where a decision, correction, financial or historical change occurs. |
| History Impact | Preserve history unless an approved rule states otherwise. |
| Related Decisions | BD-020 |
| Related Lifecycle | `SUBSCRIPTION_LIFECYCLE.md` |
| Related Policies | `../../04_POLICIES/SUBSCRIPTION_POLICIES.md` where applicable |
| Downstream Links | Requirements/DDD/DB/API/UX/QA must trace back to this rule ID. |

## BR-FRZ-001

| Field | Value |
|---|---|
| Status | CONFIRMED |
| Rule Statement | A Freeze request is not effective until approved by the authorized role. |
| Trigger | Freeze |
| Preconditions | The trigger context and required related business identities are identifiable; actor authority is approved or the action is blocked. |
| Validation | Evaluate the Rule Statement directly and resolve every linked decision that controls the requested outcome before acting. |
| Allowed Behavior | Only the outcome expressly permitted by the Rule Statement, its lifecycle and approved related decisions. |
| Prohibited Behavior | The inverse of the Rule Statement, a silent history rewrite, or any outcome that resolves an open decision by assumption. |
| Result | A rule-compliant outcome is recorded; otherwise the action is rejected or blocked with the controlling Rule/Decision/Configuration ID. |
| Exceptions | Only explicitly approved and configured exceptions; missing production values are `BUSINESS CONFIGURATION REQUIRED` and never inferred. |
| Audit Impact | Actor, date/time, reason and affected record must be preserved where a decision, correction, financial or historical change occurs. |
| History Impact | Preserve history unless an approved rule states otherwise. |
| Related Decisions | None directly cited |
| Related Lifecycle | `SUBSCRIPTION_LIFECYCLE.md` |
| Related Policies | `../../04_POLICIES/SUBSCRIPTION_POLICIES.md` where applicable |
| Downstream Links | Requirements/DDD/DB/API/UX/QA must trace back to this rule ID. |

## BR-FRZ-002

| Field | Value |
|---|---|
| Status | CONFIRMED |
| Rule Statement | A Freeze request may be rejected, and the rejection reason is retained. |
| Trigger | Freeze decision |
| Preconditions | The trigger context and required related business identities are identifiable; actor authority is approved or the action is blocked. |
| Validation | Evaluate the Rule Statement directly and resolve every linked decision that controls the requested outcome before acting. |
| Allowed Behavior | Only the outcome expressly permitted by the Rule Statement, its lifecycle and approved related decisions. |
| Prohibited Behavior | The inverse of the Rule Statement, a silent history rewrite, or any outcome that resolves an open decision by assumption. |
| Result | A rule-compliant outcome is recorded; otherwise the action is rejected or blocked with the controlling Rule/Decision/Configuration ID. |
| Exceptions | Only explicitly approved and configured exceptions; missing production values are `BUSINESS CONFIGURATION REQUIRED` and never inferred. |
| Audit Impact | Actor, date/time, reason and affected record must be preserved where a decision, correction, financial or historical change occurs. |
| History Impact | Preserve history unless an approved rule states otherwise. |
| Related Decisions | None directly cited |
| Related Lifecycle | `SUBSCRIPTION_LIFECYCLE.md` |
| Related Policies | `../../04_POLICIES/SUBSCRIPTION_POLICIES.md` where applicable |
| Downstream Links | Requirements/DDD/DB/API/UX/QA must trace back to this rule ID. |

## BR-FRZ-003

| Field | Value |
|---|---|
| Status | CONFIRMED |
| Rule Statement | Freeze history is retained in the relevant timeline. |
| Trigger | Freeze outcome |
| Preconditions | The trigger context and required related business identities are identifiable; actor authority is approved or the action is blocked. |
| Validation | Evaluate the Rule Statement directly and resolve every linked decision that controls the requested outcome before acting. |
| Allowed Behavior | Only the outcome expressly permitted by the Rule Statement, its lifecycle and approved related decisions. |
| Prohibited Behavior | The inverse of the Rule Statement, a silent history rewrite, or any outcome that resolves an open decision by assumption. |
| Result | A rule-compliant outcome is recorded; otherwise the action is rejected or blocked with the controlling Rule/Decision/Configuration ID. |
| Exceptions | Only explicitly approved and configured exceptions; missing production values are `BUSINESS CONFIGURATION REQUIRED` and never inferred. |
| Audit Impact | Actor, date/time, reason and affected record must be preserved where a decision, correction, financial or historical change occurs. |
| History Impact | Preserve history unless an approved rule states otherwise. |
| Related Decisions | None directly cited |
| Related Lifecycle | `SUBSCRIPTION_LIFECYCLE.md` |
| Related Policies | `../../04_POLICIES/SUBSCRIPTION_POLICIES.md` where applicable |
| Downstream Links | Requirements/DDD/DB/API/UX/QA must trace back to this rule ID. |

## BR-FRZ-004

| Field | Value |
|---|---|
| Status | CONFIRMED-WITH-CONFIGURATION |
| Rule Statement | An approved Freeze pauses normal training eligibility and extends Subscription expiry by its approved frozen duration; early Resume may be approved and otherwise automatic Resume occurs at the approved end date. Duration, limits and fees remain configuration. |
| Trigger | Freeze policy |
| Preconditions | The trigger context and required related business identities are identifiable; actor authority is approved or the action is blocked. |
| Validation | Evaluate the Rule Statement directly and resolve every linked decision that controls the requested outcome before acting. |
| Allowed Behavior | Only the outcome expressly permitted by the Rule Statement, its lifecycle and approved related decisions. |
| Prohibited Behavior | The inverse of the Rule Statement, a silent history rewrite, or any outcome that resolves an open decision by assumption. |
| Result | A rule-compliant outcome is recorded; otherwise the action is rejected or blocked with the controlling Rule/Decision/Configuration ID. |
| Exceptions | Only explicitly approved and configured exceptions; missing production values are `BUSINESS CONFIGURATION REQUIRED` and never inferred. |
| Audit Impact | Actor, date/time, reason and affected record must be preserved where a decision, correction, financial or historical change occurs. |
| History Impact | Preserve history unless an approved rule states otherwise. |
| Related Decisions | BD-019 |
| Related Lifecycle | `SUBSCRIPTION_LIFECYCLE.md` |
| Related Policies | `../../04_POLICIES/SUBSCRIPTION_POLICIES.md` where applicable |
| Downstream Links | Requirements/DDD/DB/API/UX/QA must trace back to this rule ID. |
