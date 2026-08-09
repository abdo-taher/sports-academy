
## BR-ATT-006

| Field | Value |
|---|---|
| Name | No Attendance After Expiry |
| Status | CONFIRMED-WITH-CONFIGURATION |
| Business Statement | Normal Attendance is rejected after Subscription expiry; renewal pending creates no implicit grace or eligibility. |
| Domain Owner | ATTENDANCE |
| Trigger | Attendance eligibility |
| Preconditions | Required identities and relationships are identifiable; actor authority and any mandatory configuration are valid. |
| Validation | Evaluate this statement, linked decisions, lifecycle state and effective configuration before action. |
| Allowed Outcome | The stated outcome occurs only when all preconditions and authority checks pass. |
| Rejection Outcome | Reject or hold the action with the violated Rule/configuration/authority reason; do not partially or silently apply it. |
| Exception Model | Only an explicitly approved, auditable exception named by this Rule or its authority/configuration artifact. |
| Actor / Authority | Attendance actor; approved exception authority if future policy exists |
| Configuration Dependency | No default grace; future exception policy only |
| Effective-Date Behavior | State, assignment, policy and configuration changes apply from their recorded effective date and do not rewrite history. |
| History / Audit | Preserve actor, time, reason, before/after values and linked approval/exception where applicable. |
| Related Decisions | BD-016 |
| Related Lifecycle / Journey | `ATTENDANCE_LIFECYCLE.md`; relevant file in `../../03_END_TO_END_JOURNEYS/` |
| Downstream Impact | Requirements, permission, DDD, database, API, UX and QA trace through `05_REQUIREMENTS/DERIVATION_MAP.md`. |

## BR-ATT-007

| Field | Value |
|---|---|
| Name | Nonnegative Session Balance |
| Status | CONFIRMED |
| Business Statement | Attendance requiring entitlement is rejected when the selected eligible Subscription lacks Session balance; balance never becomes negative and correction uses compensating Ledger entries. |
| Domain Owner | ATTENDANCE |
| Trigger | Attendance deduction/correction |
| Preconditions | Required identities and relationships are identifiable; actor authority and any mandatory configuration are valid. |
| Validation | Evaluate this statement, linked decisions, lifecycle state and effective configuration before action. |
| Allowed Outcome | The stated outcome occurs only when all preconditions and authority checks pass. |
| Rejection Outcome | Reject or hold the action with the violated Rule/configuration/authority reason; do not partially or silently apply it. |
| Exception Model | Only an explicitly approved, auditable exception named by this Rule or its authority/configuration artifact. |
| Actor / Authority | Attendance actor; correction approver |
| Configuration Dependency | None |
| Effective-Date Behavior | State, assignment, policy and configuration changes apply from their recorded effective date and do not rewrite history. |
| History / Audit | Preserve actor, time, reason, before/after values and linked approval/exception where applicable. |
| Related Decisions | BD-017 |
| Related Lifecycle / Journey | `ATTENDANCE_LIFECYCLE.md`; relevant file in `../../03_END_TO_END_JOURNEYS/` |
| Downstream Impact | Requirements, permission, DDD, database, API, UX and QA trace through `05_REQUIREMENTS/DERIVATION_MAP.md`. |
# Attendance Rules

This file is the canonical rule definition file for the Attendance domain.

## BR-ATT-001

| Field | Value |
|---|---|
| Status | CONFIRMED |
| Rule Statement | Attendance belongs to a specific Training Session, not merely a calendar day. |
| Trigger | Attendance |
| Preconditions | The trigger context and required related business identities are identifiable; actor authority is approved or the action is blocked. |
| Validation | Evaluate the Rule Statement directly and resolve every linked decision that controls the requested outcome before acting. |
| Allowed Behavior | Only the outcome expressly permitted by the Rule Statement, its lifecycle and approved related decisions. |
| Prohibited Behavior | The inverse of the Rule Statement, a silent history rewrite, or any outcome that resolves an open decision by assumption. |
| Result | A rule-compliant outcome is recorded; otherwise the action is rejected or blocked with the controlling Rule/Decision/Configuration ID. |
| Exceptions | Only explicitly approved and configured exceptions; missing production values are `BUSINESS CONFIGURATION REQUIRED` and never inferred. |
| Audit Impact | Actor, date/time, reason and affected record must be preserved where a decision, correction, financial or historical change occurs. |
| History Impact | Preserve history unless an approved rule states otherwise. |
| Related Decisions | None directly cited |
| Related Lifecycle | `ATTENDANCE_LIFECYCLE.md` |
| Related Policies | `../../04_POLICIES/ATTENDANCE_POLICIES.md` where applicable |
| Downstream Links | Requirements/DDD/DB/API/UX/QA must trace back to this rule ID. |

## BR-ATT-008

| Field | Value |
|---|---|
| Name | Attendance Voided by Session Cancellation |
| Status | CONFIRMED |
| Business Statement | When Attendance exists and the Session is validly cancelled, retain the original Attendance and set the current canonical outcome to Voided — Session Cancelled; exclude it from attendance performance counts and link it to exactly one entitlement restoration. |
| Domain Owner | ATTENDANCE |
| Authority | Authorized Session cancellation actor plus authorized Attendance correction/reconciliation actor. |
| Lifecycle / State | Recorded Attendance → Voided — Session Cancelled through versioned correction; original remains. |
| Validation | Valid cancellation exists; Attendance belongs to Session; restoration uniqueness and non-negative Ledger constraints pass. |
| Rejection / Exception | Reject deletion, duplicate restoration or KPI inclusion as delivered Attendance; erroneous late cancellation follows authorized correction. |
| History / Audit | Preserve original status, void version, cancellation, actor, reason, time and Ledger link. |
| Configuration Dependency | Reporting mapping and late-correction authority; outcome meaning is fixed. |
| Current / Future Scope | CURRENT |
| Decision / NBCG Source | NBCG-DEC-011 / NBCG-011 |
| Canonical References | ATTENDANCE_LIFECYCLE.md; ATTENDANCE_CORRECTION.md; BR-ATT-004; BR-SES-001 |


## BR-ATT-002

| Field | Value |
|---|---|
| Status | CONFIRMED |
| Rule Statement | The same Student cannot have duplicate Attendance for the same Session. |
| Trigger | Attendance recording |
| Preconditions | The trigger context and required related business identities are identifiable; actor authority is approved or the action is blocked. |
| Validation | Evaluate the Rule Statement directly and resolve every linked decision that controls the requested outcome before acting. |
| Allowed Behavior | Only the outcome expressly permitted by the Rule Statement, its lifecycle and approved related decisions. |
| Prohibited Behavior | The inverse of the Rule Statement, a silent history rewrite, or any outcome that resolves an open decision by assumption. |
| Result | A rule-compliant outcome is recorded; otherwise the action is rejected or blocked with the controlling Rule/Decision/Configuration ID. |
| Exceptions | Only explicitly approved and configured exceptions; missing production values are `BUSINESS CONFIGURATION REQUIRED` and never inferred. |
| Audit Impact | Actor, date/time, reason and affected record must be preserved where a decision, correction, financial or historical change occurs. |
| History Impact | Preserve history unless an approved rule states otherwise. |
| Related Decisions | None directly cited |
| Related Lifecycle | `ATTENDANCE_LIFECYCLE.md` |
| Related Policies | `../../04_POLICIES/ATTENDANCE_POLICIES.md` where applicable |
| Downstream Links | Requirements/DDD/DB/API/UX/QA must trace back to this rule ID. |

## BR-ATT-003

| Field | Value |
|---|---|
| Status | CONFIRMED-WITH-ELIGIBILITY-POLICY |
| Rule Statement | Confirmed present Attendance deducts a session from the eligible Subscription Ledger. |
| Trigger | Attendance confirmation |
| Preconditions | The trigger context and required related business identities are identifiable; actor authority is approved or the action is blocked. |
| Validation | Evaluate the Rule Statement directly and resolve every linked decision that controls the requested outcome before acting. |
| Allowed Behavior | Only the outcome expressly permitted by the Rule Statement, its lifecycle and approved related decisions. |
| Prohibited Behavior | The inverse of the Rule Statement, a silent history rewrite, or any outcome that resolves an open decision by assumption. |
| Result | A rule-compliant outcome is recorded; otherwise the action is rejected or blocked with the controlling Rule/Decision/Configuration ID. |
| Exceptions | Only explicitly approved and configured exceptions; missing production values are `BUSINESS CONFIGURATION REQUIRED` and never inferred. |
| Audit Impact | Actor, date/time, reason and affected record must be preserved where a decision, correction, financial or historical change occurs. |
| History Impact | Preserve history unless an approved rule states otherwise. |
| Related Decisions | None directly cited |
| Related Lifecycle | `ATTENDANCE_LIFECYCLE.md` |
| Related Policies | `../../04_POLICIES/ATTENDANCE_POLICIES.md` where applicable |
| Downstream Links | Requirements/DDD/DB/API/UX/QA must trace back to this rule ID. |

## BR-ATT-004

| Field | Value |
|---|---|
| Status | CONFIRMED |
| Rule Statement | Attendance correction preserves who changed it, the reason, timestamp and resulting ledger adjustment. |
| Trigger | Attendance correction |
| Preconditions | The trigger context and required related business identities are identifiable; actor authority is approved or the action is blocked. |
| Validation | Evaluate the Rule Statement directly and resolve every linked decision that controls the requested outcome before acting. |
| Allowed Behavior | Only the outcome expressly permitted by the Rule Statement, its lifecycle and approved related decisions. |
| Prohibited Behavior | The inverse of the Rule Statement, a silent history rewrite, or any outcome that resolves an open decision by assumption. |
| Result | A rule-compliant outcome is recorded; otherwise the action is rejected or blocked with the controlling Rule/Decision/Configuration ID. |
| Exceptions | Only explicitly approved and configured exceptions; missing production values are `BUSINESS CONFIGURATION REQUIRED` and never inferred. |
| Audit Impact | Actor, date/time, reason and affected record must be preserved where a decision, correction, financial or historical change occurs. |
| History Impact | Preserve history unless an approved rule states otherwise. |
| Related Decisions | None directly cited |
| Related Lifecycle | `ATTENDANCE_LIFECYCLE.md` |
| Related Policies | `../../04_POLICIES/ATTENDANCE_POLICIES.md` where applicable |
| Downstream Links | Requirements/DDD/DB/API/UX/QA must trace back to this rule ID. |

## BR-ATT-005

| Field | Value |
|---|---|
| Status | CONFIRMED |
| Rule Statement | An approved Excuse prevents one Session deduction when processed before deduction or restores one deducted Session through a compensating Subscription Ledger entry; Make-up entitlement or date extension is not the default. |
| Trigger | Excuse and make-up |
| Preconditions | The trigger context and required related business identities are identifiable; actor authority is approved or the action is blocked. |
| Validation | Evaluate the Rule Statement directly and resolve every linked decision that controls the requested outcome before acting. |
| Allowed Behavior | Only the outcome expressly permitted by the Rule Statement, its lifecycle and approved related decisions. |
| Prohibited Behavior | The inverse of the Rule Statement, a silent history rewrite, or any outcome that resolves an open decision by assumption. |
| Result | A rule-compliant outcome is recorded; otherwise the action is rejected or blocked with the controlling Rule/Decision/Configuration ID. |
| Exceptions | Only explicitly approved and configured exceptions; missing production values are `BUSINESS CONFIGURATION REQUIRED` and never inferred. |
| Audit Impact | Actor, date/time, reason and affected record must be preserved where a decision, correction, financial or historical change occurs. |
| History Impact | Preserve history unless an approved rule states otherwise. |
| Related Decisions | BD-018 |
| Related Lifecycle | `ATTENDANCE_LIFECYCLE.md` |
| Related Policies | `../../04_POLICIES/ATTENDANCE_POLICIES.md` where applicable |
| Downstream Links | Requirements/DDD/DB/API/UX/QA must trace back to this rule ID. |
