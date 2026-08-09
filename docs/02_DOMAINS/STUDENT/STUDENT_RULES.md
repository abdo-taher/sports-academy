
## BR-LEA-001

| Field | Value |
|---|---|
| Name | Lead Separation |
| Status | CONFIRMED |
| Business Statement | Lead/Prospect is a separate pre-Student record for inquiry, Trial, follow-up and conversion tracking; it is not a Student state. |
| Domain Owner | STUDENT |
| Trigger | Lead creation/tracking |
| Preconditions | Required identities and relationships are identifiable; actor authority and any mandatory configuration are valid. |
| Validation | Evaluate this statement, linked decisions, lifecycle state and effective configuration before action. |
| Allowed Outcome | The stated outcome occurs only when all preconditions and authority checks pass. |
| Rejection Outcome | Reject or hold the action with the violated Rule/configuration/authority reason; do not partially or silently apply it. |
| Exception Model | Only an explicitly approved, auditable exception named by this Rule or its authority/configuration artifact. |
| Actor / Authority | Reception / authorized enrollment actor |
| Configuration Dependency | None |
| Effective-Date Behavior | State, assignment, policy and configuration changes apply from their recorded effective date and do not rewrite history. |
| History / Audit | Preserve actor, time, reason, before/after values and linked approval/exception where applicable. |
| Related Decisions | BD-007, BD-008 |
| Related Lifecycle / Journey | `STUDENT_LIFECYCLE.md`; relevant file in `../../03_END_TO_END_JOURNEYS/` |
| Downstream Impact | Requirements, permission, DDD, database, API, UX and QA trace through `05_REQUIREMENTS/DERIVATION_MAP.md`. |

## BR-LEA-002

| Field | Value |
|---|---|
| Name | Lead Conversion |
| Status | CONFIRMED-WITH-CONFIGURATION |
| Business Statement | Student is created at formal enrollment after applicable Trial/Evaluation and before Subscription; Lead/Trial/Evaluation provenance transfers to the Student without silent deletion or duplicate identity. |
| Domain Owner | STUDENT |
| Trigger | Formal enrollment |
| Preconditions | Required identities and relationships are identifiable; actor authority and any mandatory configuration are valid. |
| Validation | Evaluate this statement, linked decisions, lifecycle state and effective configuration before action. |
| Allowed Outcome | The stated outcome occurs only when all preconditions and authority checks pass. |
| Rejection Outcome | Reject or hold the action with the violated Rule/configuration/authority reason; do not partially or silently apply it. |
| Exception Model | Only an explicitly approved, auditable exception named by this Rule or its authority/configuration artifact. |
| Actor / Authority | Reception / authorized enrollment actor |
| Configuration Dependency | Duplicate matching configuration |
| Effective-Date Behavior | State, assignment, policy and configuration changes apply from their recorded effective date and do not rewrite history. |
| History / Audit | Preserve actor, time, reason, before/after values and linked approval/exception where applicable. |
| Related Decisions | BD-007, BD-009 |
| Related Lifecycle / Journey | `STUDENT_LIFECYCLE.md`; relevant file in `../../03_END_TO_END_JOURNEYS/` |
| Downstream Impact | Requirements, permission, DDD, database, API, UX and QA trace through `05_REQUIREMENTS/DERIVATION_MAP.md`. |

## BR-TRI-004

| Field | Value |
|---|---|
| Name | Optional Trial Policy |
| Status | CONFIRMED-WITH-CONFIGURATION |
| Business Statement | Trial is optional according to approved Academy/Program policy; authorized bypass is allowed only where policy permits and is recorded. |
| Domain Owner | STUDENT |
| Trigger | Enrollment eligibility |
| Preconditions | Required identities and relationships are identifiable; actor authority and any mandatory configuration are valid. |
| Validation | Evaluate this statement, linked decisions, lifecycle state and effective configuration before action. |
| Allowed Outcome | The stated outcome occurs only when all preconditions and authority checks pass. |
| Rejection Outcome | Reject or hold the action with the violated Rule/configuration/authority reason; do not partially or silently apply it. |
| Exception Model | Only an explicitly approved, auditable exception named by this Rule or its authority/configuration artifact. |
| Actor / Authority | Authorized enrollment actor; bypass authority matrix |
| Configuration Dependency | CFG-TRI-001 |
| Effective-Date Behavior | State, assignment, policy and configuration changes apply from their recorded effective date and do not rewrite history. |
| History / Audit | Preserve actor, time, reason, before/after values and linked approval/exception where applicable. |
| Related Decisions | BD-009 |
| Related Lifecycle / Journey | `STUDENT_LIFECYCLE.md`; relevant file in `../../03_END_TO_END_JOURNEYS/` |
| Downstream Impact | Requirements, permission, DDD, database, API, UX and QA trace through `05_REQUIREMENTS/DERIVATION_MAP.md`. |

## BR-TRI-005

| Field | Value |
|---|---|
| Name | Trial Outcome History |
| Status | CONFIRMED-WITH-CONFIGURATION |
| Business Statement | Trial preserves Requested, Scheduled, Confirmed, Attended, Cancelled, No-show, Evaluated where required and Closed/Non-converted outcomes; retry/reschedule limits are configuration and Trial creates neither Student nor Subscription automatically. |
| Domain Owner | STUDENT |
| Trigger | Trial transition |
| Preconditions | Required identities and relationships are identifiable; actor authority and any mandatory configuration are valid. |
| Validation | Evaluate this statement, linked decisions, lifecycle state and effective configuration before action. |
| Allowed Outcome | The stated outcome occurs only when all preconditions and authority checks pass. |
| Rejection Outcome | Reject or hold the action with the violated Rule/configuration/authority reason; do not partially or silently apply it. |
| Exception Model | Only an explicitly approved, auditable exception named by this Rule or its authority/configuration artifact. |
| Actor / Authority | Reception / authorized Trial actor |
| Configuration Dependency | CFG-TRI-002, CFG-TRI-003 |
| Effective-Date Behavior | State, assignment, policy and configuration changes apply from their recorded effective date and do not rewrite history. |
| History / Audit | Preserve actor, time, reason, before/after values and linked approval/exception where applicable. |
| Related Decisions | BD-009 |
| Related Lifecycle / Journey | `STUDENT_LIFECYCLE.md`; relevant file in `../../03_END_TO_END_JOURNEYS/` |
| Downstream Impact | Requirements, permission, DDD, database, API, UX and QA trace through `05_REQUIREMENTS/DERIVATION_MAP.md`. |

## BR-STU-006

| Field | Value |
|---|---|
| Name | Student State Independence |
| Status | CONFIRMED |
| Business Statement | Student state is Registered, Active, Temporarily Inactive or Archived and is independent of Subscription expiry/Freeze, Payment status and Session balance. |
| Domain Owner | STUDENT |
| Trigger | Student state evaluation/change |
| Preconditions | Required identities and relationships are identifiable; actor authority and any mandatory configuration are valid. |
| Validation | Evaluate this statement, linked decisions, lifecycle state and effective configuration before action. |
| Allowed Outcome | The stated outcome occurs only when all preconditions and authority checks pass. |
| Rejection Outcome | Reject or hold the action with the violated Rule/configuration/authority reason; do not partially or silently apply it. |
| Exception Model | Only an explicitly approved, auditable exception named by this Rule or its authority/configuration artifact. |
| Actor / Authority | Authorized Student state actor |
| Configuration Dependency | None |
| Effective-Date Behavior | State, assignment, policy and configuration changes apply from their recorded effective date and do not rewrite history. |
| History / Audit | Preserve actor, time, reason, before/after values and linked approval/exception where applicable. |
| Related Decisions | BD-008 |
| Related Lifecycle / Journey | `STUDENT_LIFECYCLE.md`; relevant file in `../../03_END_TO_END_JOURNEYS/` |
| Downstream Impact | Requirements, permission, DDD, database, API, UX and QA trace through `05_REQUIREMENTS/DERIVATION_MAP.md`. |

## BR-STU-007

| Field | Value |
|---|---|
| Name | Student Transition History |
| Status | CONFIRMED |
| Business Statement | Every Student state transition records prior/new state, effective date/time, actor, reason where applicable and Audit History; Archive is not deletion. |
| Domain Owner | STUDENT |
| Trigger | Student state change |
| Preconditions | Required identities and relationships are identifiable; actor authority and any mandatory configuration are valid. |
| Validation | Evaluate this statement, linked decisions, lifecycle state and effective configuration before action. |
| Allowed Outcome | The stated outcome occurs only when all preconditions and authority checks pass. |
| Rejection Outcome | Reject or hold the action with the violated Rule/configuration/authority reason; do not partially or silently apply it. |
| Exception Model | Only an explicitly approved, auditable exception named by this Rule or its authority/configuration artifact. |
| Actor / Authority | Process authority matrix |
| Configuration Dependency | None |
| Effective-Date Behavior | State, assignment, policy and configuration changes apply from their recorded effective date and do not rewrite history. |
| History / Audit | Preserve actor, time, reason, before/after values and linked approval/exception where applicable. |
| Related Decisions | BD-008, BD-024 |
| Related Lifecycle / Journey | `STUDENT_LIFECYCLE.md`; relevant file in `../../03_END_TO_END_JOURNEYS/` |
| Downstream Impact | Requirements, permission, DDD, database, API, UX and QA trace through `05_REQUIREMENTS/DERIVATION_MAP.md`. |

## BR-ARC-003

| Field | Value |
|---|---|
| Name | Archive and Restore Review |
| Status | CONFIRMED |
| Business Statement | Archive requires active-relationship review; Restore/Return requires fresh authorized review and never automatically reactivates Student state, Subscription, Group membership, account access or prior entitlement. |
| Domain Owner | STUDENT |
| Trigger | Archive/Restore |
| Preconditions | Required identities and relationships are identifiable; actor authority and any mandatory configuration are valid. |
| Validation | Evaluate this statement, linked decisions, lifecycle state and effective configuration before action. |
| Allowed Outcome | The stated outcome occurs only when all preconditions and authority checks pass. |
| Rejection Outcome | Reject or hold the action with the violated Rule/configuration/authority reason; do not partially or silently apply it. |
| Exception Model | Only an explicitly approved, auditable exception named by this Rule or its authority/configuration artifact. |
| Actor / Authority | Archive/Restore authority matrix |
| Configuration Dependency | None |
| Effective-Date Behavior | State, assignment, policy and configuration changes apply from their recorded effective date and do not rewrite history. |
| History / Audit | Preserve actor, time, reason, before/after values and linked approval/exception where applicable. |
| Related Decisions | BD-024 |
| Related Lifecycle / Journey | `STUDENT_LIFECYCLE.md`; relevant file in `../../03_END_TO_END_JOURNEYS/` |
| Downstream Impact | Requirements, permission, DDD, database, API, UX and QA trace through `05_REQUIREMENTS/DERIVATION_MAP.md`. |
# Student Rules

This file is the canonical rule definition file for the Student domain.

## BR-STU-001

| Field | Value |
|---|---|
| Status | CONFIRMED |
| Rule Statement | Each Student has one governed identity; formal creation requires duplicate matching, and a matching Lead is associated/merged through authorized resolution without silent duplicate creation or history loss. |
| Trigger | Student creation |
| Preconditions | The trigger context and required related business identities are identifiable; actor authority is approved or the action is blocked. |
| Validation | Evaluate the Rule Statement directly and resolve every linked decision that controls the requested outcome before acting. |
| Allowed Behavior | Only the outcome expressly permitted by the Rule Statement, its lifecycle and approved related decisions. |
| Prohibited Behavior | The inverse of the Rule Statement, a silent history rewrite, or any outcome that resolves an open decision by assumption. |
| Result | A rule-compliant outcome is recorded; otherwise the action is rejected or blocked with the controlling Rule/Decision/Configuration ID. |
| Exceptions | Only explicitly approved and configured exceptions; missing production values are `BUSINESS CONFIGURATION REQUIRED` and never inferred. |
| Audit Impact | Actor, date/time, reason and affected record must be preserved where a decision, correction, financial or historical change occurs. |
| History Impact | Preserve history unless an approved rule states otherwise. |
| Related Decisions | BD-007 |
| Related Lifecycle | `STUDENT_LIFECYCLE.md` |
| Related Policies | `../../04_POLICIES/STUDENT_POLICIES.md` where applicable |
| Downstream Links | Requirements/DDD/DB/API/UX/QA must trace back to this rule ID. |

## BR-LEA-003

| Field | Value |
|---|---|
| Name | Controlled Lead Lifecycle |
| Status | CONFIRMED |
| Business Statement | Lead states are New, In Follow-up, Qualified, Disqualified, Lost, Converted and Closed; negative terminal states require reason, conversion preserves provenance, and reopening is an authorized audited transition. |
| Domain Owner | STUDENT / LEAD |
| Authority | Assigned sales owner within scope; authorized supervisor for reopen/override where configured. |
| Lifecycle / State | New → In Follow-up → Qualified → Converted; Qualified/In Follow-up → Disqualified/Lost/Closed; governed reopen to In Follow-up. |
| Validation | Identity/duplicate resolution completed; transition valid; required reason and current owner present. |
| Rejection / Exception | Reject invalid transition, duplicate Student conversion or unauthorized reopen; never delete prior funnel history. |
| History / Audit | Preserve state/version, owner, tasks, Trial links, reasons, conversion identity, actors and times. |
| Configuration Dependency | Reason catalog, reopen authority and follow-up timing; no invented values. |
| Current / Future Scope | CURRENT |
| Decision / NBCG Source | NBCG-DEC-007 / NBCG-007 |
| Canonical References | STUDENT_LIFECYCLE.md; BR-LEA-001/002; BR-TRI-001–005 |


## BR-STU-002

| Field | Value |
|---|---|
| Status | CONFIRMED |
| Rule Statement | A Student keeps a persistent QR identity across subscription renewal. |
| Trigger | Attendance identity |
| Preconditions | The trigger context and required related business identities are identifiable; actor authority is approved or the action is blocked. |
| Validation | Evaluate the Rule Statement directly and resolve every linked decision that controls the requested outcome before acting. |
| Allowed Behavior | Only the outcome expressly permitted by the Rule Statement, its lifecycle and approved related decisions. |
| Prohibited Behavior | The inverse of the Rule Statement, a silent history rewrite, or any outcome that resolves an open decision by assumption. |
| Result | A rule-compliant outcome is recorded; otherwise the action is rejected or blocked with the controlling Rule/Decision/Configuration ID. |
| Exceptions | Only explicitly approved and configured exceptions; missing production values are `BUSINESS CONFIGURATION REQUIRED` and never inferred. |
| Audit Impact | Actor, date/time, reason and affected record must be preserved where a decision, correction, financial or historical change occurs. |
| History Impact | Preserve history unless an approved rule states otherwise. |
| Related Decisions | None directly cited |
| Related Lifecycle | `STUDENT_LIFECYCLE.md` |
| Related Policies | `../../04_POLICIES/STUDENT_POLICIES.md` where applicable |
| Downstream Links | Requirements/DDD/DB/API/UX/QA must trace back to this rule ID. |

## BR-STU-003

| Field | Value |
|---|---|
| Status | CONFIRMED |
| Rule Statement | Student history, attendance, evaluations, transfers and timeline are preserved and are not permanently removed through normal operation. |
| Trigger | Student lifecycle |
| Preconditions | The trigger context and required related business identities are identifiable; actor authority is approved or the action is blocked. |
| Validation | Evaluate the Rule Statement directly and resolve every linked decision that controls the requested outcome before acting. |
| Allowed Behavior | Only the outcome expressly permitted by the Rule Statement, its lifecycle and approved related decisions. |
| Prohibited Behavior | The inverse of the Rule Statement, a silent history rewrite, or any outcome that resolves an open decision by assumption. |
| Result | A rule-compliant outcome is recorded; otherwise the action is rejected or blocked with the controlling Rule/Decision/Configuration ID. |
| Exceptions | Only explicitly approved and configured exceptions; missing production values are `BUSINESS CONFIGURATION REQUIRED` and never inferred. |
| Audit Impact | Actor, date/time, reason and affected record must be preserved where a decision, correction, financial or historical change occurs. |
| History Impact | Preserve history unless an approved rule states otherwise. |
| Related Decisions | None directly cited |
| Related Lifecycle | `STUDENT_LIFECYCLE.md` |
| Related Policies | `../../04_POLICIES/STUDENT_POLICIES.md` where applicable |
| Downstream Links | Requirements/DDD/DB/API/UX/QA must trace back to this rule ID. |

## BR-STU-004

| Field | Value |
|---|---|
| Status | CONFIRMED-WITH-OPEN-RETURN-RULE |
| Rule Statement | An Archived Student cannot receive a new Subscription before an approved restore/reactivation decision. |
| Trigger | Archive and subscription |
| Preconditions | The trigger context and required related business identities are identifiable; actor authority is approved or the action is blocked. |
| Validation | Evaluate the Rule Statement directly and resolve every linked decision that controls the requested outcome before acting. |
| Allowed Behavior | Only the outcome expressly permitted by the Rule Statement, its lifecycle and approved related decisions. |
| Prohibited Behavior | The inverse of the Rule Statement, a silent history rewrite, or any outcome that resolves an open decision by assumption. |
| Result | A rule-compliant outcome is recorded; otherwise the action is rejected or blocked with the controlling Rule/Decision/Configuration ID. |
| Exceptions | Only explicitly approved and configured exceptions; missing production values are `BUSINESS CONFIGURATION REQUIRED` and never inferred. |
| Audit Impact | Actor, date/time, reason and affected record must be preserved where a decision, correction, financial or historical change occurs. |
| History Impact | Preserve history unless an approved rule states otherwise. |
| Related Decisions | None directly cited |
| Related Lifecycle | `STUDENT_LIFECYCLE.md` |
| Related Policies | `../../04_POLICIES/STUDENT_POLICIES.md` where applicable |
| Downstream Links | Requirements/DDD/DB/API/UX/QA must trace back to this rule ID. |

## BR-STU-005

| Field | Value |
|---|---|
| Status | CONFIRMED |
| Rule Statement | A Student may have multiple active Subscriptions and multiple current Groups; every consuming Attendance must resolve to exactly one eligible Subscription and balances never merge silently. |
| Trigger | Subscription selection |
| Preconditions | The trigger context and required related business identities are identifiable; actor authority is approved or the action is blocked. |
| Validation | Evaluate the Rule Statement directly and resolve every linked decision that controls the requested outcome before acting. |
| Allowed Behavior | Only the outcome expressly permitted by the Rule Statement, its lifecycle and approved related decisions. |
| Prohibited Behavior | The inverse of the Rule Statement, a silent history rewrite, or any outcome that resolves an open decision by assumption. |
| Result | A rule-compliant outcome is recorded; otherwise the action is rejected or blocked with the controlling Rule/Decision/Configuration ID. |
| Exceptions | Only explicitly approved and configured exceptions; missing production values are `BUSINESS CONFIGURATION REQUIRED` and never inferred. |
| Audit Impact | Actor, date/time, reason and affected record must be preserved where a decision, correction, financial or historical change occurs. |
| History Impact | Preserve history unless an approved rule states otherwise. |
| Related Decisions | BD-023 |
| Related Lifecycle | `STUDENT_LIFECYCLE.md` |
| Related Policies | `../../04_POLICIES/STUDENT_POLICIES.md` where applicable |
| Downstream Links | Requirements/DDD/DB/API/UX/QA must trace back to this rule ID. |

## BR-TRI-001

| Field | Value |
|---|---|
| Status | CONFIRMED |
| Rule Statement | A Trial does not create a Subscription automatically. |
| Trigger | Trial completion |
| Preconditions | The trigger context and required related business identities are identifiable; actor authority is approved or the action is blocked. |
| Validation | Evaluate the Rule Statement directly and resolve every linked decision that controls the requested outcome before acting. |
| Allowed Behavior | Only the outcome expressly permitted by the Rule Statement, its lifecycle and approved related decisions. |
| Prohibited Behavior | The inverse of the Rule Statement, a silent history rewrite, or any outcome that resolves an open decision by assumption. |
| Result | A rule-compliant outcome is recorded; otherwise the action is rejected or blocked with the controlling Rule/Decision/Configuration ID. |
| Exceptions | Only explicitly approved and configured exceptions; missing production values are `BUSINESS CONFIGURATION REQUIRED` and never inferred. |
| Audit Impact | Actor, date/time, reason and affected record must be preserved where a decision, correction, financial or historical change occurs. |
| History Impact | Preserve history unless an approved rule states otherwise. |
| Related Decisions | None directly cited |
| Related Lifecycle | `STUDENT_LIFECYCLE.md` |
| Related Policies | `../../04_POLICIES/STUDENT_POLICIES.md` where applicable |
| Downstream Links | Requirements/DDD/DB/API/UX/QA must trace back to this rule ID. |

## BR-TRI-002

| Field | Value |
|---|---|
| Status | CONFIRMED |
| Rule Statement | A Level recommendation is not produced without an Evaluation. |
| Trigger | Trial evaluation |
| Preconditions | The trigger context and required related business identities are identifiable; actor authority is approved or the action is blocked. |
| Validation | Evaluate the Rule Statement directly and resolve every linked decision that controls the requested outcome before acting. |
| Allowed Behavior | Only the outcome expressly permitted by the Rule Statement, its lifecycle and approved related decisions. |
| Prohibited Behavior | The inverse of the Rule Statement, a silent history rewrite, or any outcome that resolves an open decision by assumption. |
| Result | A rule-compliant outcome is recorded; otherwise the action is rejected or blocked with the controlling Rule/Decision/Configuration ID. |
| Exceptions | Only explicitly approved and configured exceptions; missing production values are `BUSINESS CONFIGURATION REQUIRED` and never inferred. |
| Audit Impact | Actor, date/time, reason and affected record must be preserved where a decision, correction, financial or historical change occurs. |
| History Impact | Preserve history unless an approved rule states otherwise. |
| Related Decisions | None directly cited |
| Related Lifecycle | `STUDENT_LIFECYCLE.md` |
| Related Policies | `../../04_POLICIES/STUDENT_POLICIES.md` where applicable |
| Downstream Links | Requirements/DDD/DB/API/UX/QA must trace back to this rule ID. |

## BR-TRI-003

| Field | Value |
|---|---|
| Status | CONFIRMED |
| Rule Statement | A Trial booking uses an available time. |
| Trigger | Trial scheduling |
| Preconditions | The trigger context and required related business identities are identifiable; actor authority is approved or the action is blocked. |
| Validation | Evaluate the Rule Statement directly and resolve every linked decision that controls the requested outcome before acting. |
| Allowed Behavior | Only the outcome expressly permitted by the Rule Statement, its lifecycle and approved related decisions. |
| Prohibited Behavior | The inverse of the Rule Statement, a silent history rewrite, or any outcome that resolves an open decision by assumption. |
| Result | A rule-compliant outcome is recorded; otherwise the action is rejected or blocked with the controlling Rule/Decision/Configuration ID. |
| Exceptions | Only explicitly approved and configured exceptions; missing production values are `BUSINESS CONFIGURATION REQUIRED` and never inferred. |
| Audit Impact | Actor, date/time, reason and affected record must be preserved where a decision, correction, financial or historical change occurs. |
| History Impact | Preserve history unless an approved rule states otherwise. |
| Related Decisions | None directly cited |
| Related Lifecycle | `STUDENT_LIFECYCLE.md` |
| Related Policies | `../../04_POLICIES/STUDENT_POLICIES.md` where applicable |
| Downstream Links | Requirements/DDD/DB/API/UX/QA must trace back to this rule ID. |

## BR-ARC-001

| Field | Value |
|---|---|
| Status | CONFIRMED |
| Rule Statement | Archive preserves historical records and is not equivalent to permanent deletion. |
| Trigger | Exit and archive |
| Preconditions | The trigger context and required related business identities are identifiable; actor authority is approved or the action is blocked. |
| Validation | Evaluate the Rule Statement directly and resolve every linked decision that controls the requested outcome before acting. |
| Allowed Behavior | Only the outcome expressly permitted by the Rule Statement, its lifecycle and approved related decisions. |
| Prohibited Behavior | The inverse of the Rule Statement, a silent history rewrite, or any outcome that resolves an open decision by assumption. |
| Result | A rule-compliant outcome is recorded; otherwise the action is rejected or blocked with the controlling Rule/Decision/Configuration ID. |
| Exceptions | Only explicitly approved and configured exceptions; missing production values are `BUSINESS CONFIGURATION REQUIRED` and never inferred. |
| Audit Impact | Actor, date/time, reason and affected record must be preserved where a decision, correction, financial or historical change occurs. |
| History Impact | Preserve history unless an approved rule states otherwise. |
| Related Decisions | None directly cited |
| Related Lifecycle | `STUDENT_LIFECYCLE.md` |
| Related Policies | `../../04_POLICIES/STUDENT_POLICIES.md` where applicable |
| Downstream Links | Requirements/DDD/DB/API/UX/QA must trace back to this rule ID. |

## BR-ARC-002

| Field | Value |
|---|---|
| Status | CONFIRMED-GOVERNANCE-CONSTRAINT |
| Rule Statement | Restore does not automatically reactivate a Student, Subscription, Group or Account. |
| Trigger | Restore |
| Preconditions | The trigger context and required related business identities are identifiable; actor authority is approved or the action is blocked. |
| Validation | Evaluate the Rule Statement directly and resolve every linked decision that controls the requested outcome before acting. |
| Allowed Behavior | Only the outcome expressly permitted by the Rule Statement, its lifecycle and approved related decisions. |
| Prohibited Behavior | The inverse of the Rule Statement, a silent history rewrite, or any outcome that resolves an open decision by assumption. |
| Result | A rule-compliant outcome is recorded; otherwise the action is rejected or blocked with the controlling Rule/Decision/Configuration ID. |
| Exceptions | Only explicitly approved and configured exceptions; missing production values are `BUSINESS CONFIGURATION REQUIRED` and never inferred. |
| Audit Impact | Actor, date/time, reason and affected record must be preserved where a decision, correction, financial or historical change occurs. |
| History Impact | Preserve history unless an approved rule states otherwise. |
| Related Decisions | BD-024 |
| Related Lifecycle | `STUDENT_LIFECYCLE.md` |
| Related Policies | `../../04_POLICIES/STUDENT_POLICIES.md` where applicable |
| Downstream Links | Requirements/DDD/DB/API/UX/QA must trace back to this rule ID. |
