
## BR-EVA-005

| Field | Value |
|---|---|
| Name | Governed Level Movement |
| Status | CONFIRMED-WITH-CONFIGURATION |
| Business Statement | Initial assignment, promotion, demotion and re-evaluation use maintainable criteria per Sport/Level; Coach recommends and Supervisor or specifically authorized decision role makes the final decision. |
| Domain Owner | EVALUATION |
| Trigger | Placement/movement decision |
| Preconditions | Required identities and relationships are identifiable; actor authority and any mandatory configuration are valid. |
| Validation | Evaluate this statement, linked decisions, lifecycle state and effective configuration before action. |
| Allowed Outcome | The stated outcome occurs only when all preconditions and authority checks pass. |
| Rejection Outcome | Reject or hold the action with the violated Rule/configuration/authority reason; do not partially or silently apply it. |
| Exception Model | Only an explicitly approved, auditable exception named by this Rule or its authority/configuration artifact. |
| Actor / Authority | Coach recommender; authorized final decision role |
| Configuration Dependency | CFG-EVA-001 |
| Effective-Date Behavior | State, assignment, policy and configuration changes apply from their recorded effective date and do not rewrite history. |
| History / Audit | Preserve actor, time, reason, before/after values and linked approval/exception where applicable. |
| Related Decisions | BD-013 |
| Related Lifecycle / Journey | `EVALUATION_LIFECYCLE.md`; relevant file in `../../03_END_TO_END_JOURNEYS/` |
| Downstream Impact | Requirements, permission, DDD, database, API, UX and QA trace through `05_REQUIREMENTS/DERIVATION_MAP.md`. |

## BR-EVA-006

| Field | Value |
|---|---|
| Name | Recommendation Decision History |
| Status | CONFIRMED |
| Business Statement | Rejected or overridden Level recommendations retain the original recommendation, final decision, reason, decision actor and history. |
| Domain Owner | EVALUATION |
| Trigger | Evaluation decision override |
| Preconditions | Required identities and relationships are identifiable; actor authority and any mandatory configuration are valid. |
| Validation | Evaluate this statement, linked decisions, lifecycle state and effective configuration before action. |
| Allowed Outcome | The stated outcome occurs only when all preconditions and authority checks pass. |
| Rejection Outcome | Reject or hold the action with the violated Rule/configuration/authority reason; do not partially or silently apply it. |
| Exception Model | Only an explicitly approved, auditable exception named by this Rule or its authority/configuration artifact. |
| Actor / Authority | Supervisor / specifically authorized decision role |
| Configuration Dependency | None |
| Effective-Date Behavior | State, assignment, policy and configuration changes apply from their recorded effective date and do not rewrite history. |
| History / Audit | Preserve actor, time, reason, before/after values and linked approval/exception where applicable. |
| Related Decisions | BD-012, BD-013 |
| Related Lifecycle / Journey | `EVALUATION_LIFECYCLE.md`; relevant file in `../../03_END_TO_END_JOURNEYS/` |
| Downstream Impact | Requirements, permission, DDD, database, API, UX and QA trace through `05_REQUIREMENTS/DERIVATION_MAP.md`. |
# Evaluation Rules

This file is the canonical rule definition file for the Evaluation domain.

## BR-EVA-001

| Field | Value |
|---|---|
| Status | CONFIRMED |
| Rule Statement | Each Sport may use a different Evaluation model. |
| Trigger | Evaluation setup |
| Preconditions | The trigger context and required related business identities are identifiable; actor authority is approved or the action is blocked. |
| Validation | Evaluate the Rule Statement directly and resolve every linked decision that controls the requested outcome before acting. |
| Allowed Behavior | Only the outcome expressly permitted by the Rule Statement, its lifecycle and approved related decisions. |
| Prohibited Behavior | The inverse of the Rule Statement, a silent history rewrite, or any outcome that resolves an open decision by assumption. |
| Result | A rule-compliant outcome is recorded; otherwise the action is rejected or blocked with the controlling Rule/Decision/Configuration ID. |
| Exceptions | Only explicitly approved and configured exceptions; missing production values are `BUSINESS CONFIGURATION REQUIRED` and never inferred. |
| Audit Impact | Actor, date/time, reason and affected record must be preserved where a decision, correction, financial or historical change occurs. |
| History Impact | Preserve history unless an approved rule states otherwise. |
| Related Decisions | None directly cited |
| Related Lifecycle | `EVALUATION_LIFECYCLE.md` |
| Related Policies | `../../04_POLICIES/EVALUATION_POLICIES.md` where applicable |
| Downstream Links | Requirements/DDD/DB/API/UX/QA must trace back to this rule ID. |

## BR-EVA-007

| Field | Value |
|---|---|
| Name | Session Feedback Distinction and Visibility |
| Status | CONFIRMED |
| Business Statement | Session feedback may record Student-specific or Session-level observations, outcomes, configured scores and comments by an authorized Coach or Admin/Evaluator; it is not an Official Evaluation or Level decision and has Internal Staff or explicitly Shared with Parent/Student visibility. |
| Domain Owner | EVALUATION |
| Authority | Assigned Coach or authorized Admin/Evaluator; visibility owner classifies shareability. |
| Lifecycle / State | Draft/Recorded → Shared where authorized → Archived; correction is versioned; official Evaluation lifecycle remains separate. |
| Validation | Session and author are identified; author is assigned/authorized; visibility is explicit; configured score schema/version is valid. |
| Rejection / Exception | Reject unauthorized author, missing visibility or Parent exposure of Internal Staff notes; no feedback can move Level by itself. |
| History / Audit | Preserve author, Session/Student link, content/version, visibility, corrections, actor and times. |
| Configuration Dependency | Score schema, visibility defaults and share authority; no universal thresholds. |
| Current / Future Scope | CURRENT |
| Decision / NBCG Source | SRC-015 — client-approved Final Business Closure requirement. |
| Canonical References | SESSION_FEEDBACK.md; EVALUATION_LIFECYCLE.md; BR-EVA-001–006 |


## BR-EVA-008

| Field | Value |
|---|---|
| Name | Append-Only Evaluation Feedback Comments |
| Status | CONFIRMED |
| Business Statement | Comments on Session feedback or Evaluation are append-only records; authorized Coach, Admin/Supervisor and linked Guardian where content is Parent-visible may add comments, but comments never overwrite an official result or constitute a correction. |
| Domain Owner | EVALUATION |
| Authority | Authorized participant under explicit visibility; Guardian limited to linked Student and shareable content. |
| Lifecycle / State | Comment Active → Moderated/Hidden where authorized; original authorship/history remains. |
| Validation | Parent relationship, participant authority and feedback visibility are current; comment target/version exists. |
| Rejection / Exception | Reject internal-note exposure, unauthorized comment or attempt to edit official Evaluation; moderation hides, never erases evidence. |
| History / Audit | Preserve comment author, target/version, visibility, moderation reason/actor and timestamps. |
| Configuration Dependency | Comment visibility/moderation authority; append-only invariant is fixed. |
| Current / Future Scope | CURRENT |
| Decision / NBCG Source | SRC-015 — client-approved Final Business Closure requirement. |
| Canonical References | SESSION_FEEDBACK.md; BR-PAR-002/003; BR-EVA-003/004 |


## BR-EVA-009

| Field | Value |
|---|---|
| Name | Initial Placement and Advisory System Recommendation |
| Status | CONFIRMED |
| Business Statement | Where Sport/Program policy requires Initial Placement Evaluation, an authorized Coach or specifically authorized Admin/Evaluator records it; system calculation may recommend Level(s) but a Supervisor or authorized placement approver makes the final human decision with creator/reviewer separation. |
| Domain Owner | EVALUATION |
| Authority | Authorized evaluator recommends; Supervisor/specifically authorized placement approver decides; authorized executor assigns Level. |
| Lifecycle / State | Evaluation Draft → Submitted → Approved/Rejected → Published; final placement effective only after approval. |
| Validation | Applicable policy, criteria version, assessment data and evaluator authority valid; approver separation enforced unless explicit exception. |
| Rejection / Exception | Block placement without required Evaluation/approval; system recommendation cannot self-execute; override requires reason. |
| History / Audit | Preserve assessment, criteria version, calculation, system/human recommendations, final Level, reviewer, override reason, effective date and corrections. |
| Configuration Dependency | Whether placement is required by Sport/Program, criteria, score model and role bindings; no universal thresholds. |
| Current / Future Scope | CURRENT |
| Decision / NBCG Source | SRC-015; BD-012; BD-013 |
| Canonical References | EVALUATION_LIFECYCLE.md; BR-EVA-003–006; BR-ADM-001 |


## BR-EVA-002

| Field | Value |
|---|---|
| Status | CONFIRMED-WITH-ROLE-GAP |
| Rule Statement | Periodic Evaluation scheduling is configurable by authorized administration. |
| Trigger | Periodic evaluation |
| Preconditions | The trigger context and required related business identities are identifiable; actor authority is approved or the action is blocked. |
| Validation | Evaluate the Rule Statement directly and resolve every linked decision that controls the requested outcome before acting. |
| Allowed Behavior | Only the outcome expressly permitted by the Rule Statement, its lifecycle and approved related decisions. |
| Prohibited Behavior | The inverse of the Rule Statement, a silent history rewrite, or any outcome that resolves an open decision by assumption. |
| Result | A rule-compliant outcome is recorded; otherwise the action is rejected or blocked with the controlling Rule/Decision/Configuration ID. |
| Exceptions | Only explicitly approved and configured exceptions; missing production values are `BUSINESS CONFIGURATION REQUIRED` and never inferred. |
| Audit Impact | Actor, date/time, reason and affected record must be preserved where a decision, correction, financial or historical change occurs. |
| History Impact | Preserve history unless an approved rule states otherwise. |
| Related Decisions | None directly cited |
| Related Lifecycle | `EVALUATION_LIFECYCLE.md` |
| Related Policies | `../../04_POLICIES/EVALUATION_POLICIES.md` where applicable |
| Downstream Links | Requirements/DDD/DB/API/UX/QA must trace back to this rule ID. |

## BR-EVA-003

| Field | Value |
|---|---|
| Status | CONFIRMED |
| Rule Statement | An approved Evaluation is not deleted or overwritten; a correction preserves the earlier version. |
| Trigger | Evaluation correction |
| Preconditions | The trigger context and required related business identities are identifiable; actor authority is approved or the action is blocked. |
| Validation | Evaluate the Rule Statement directly and resolve every linked decision that controls the requested outcome before acting. |
| Allowed Behavior | Only the outcome expressly permitted by the Rule Statement, its lifecycle and approved related decisions. |
| Prohibited Behavior | The inverse of the Rule Statement, a silent history rewrite, or any outcome that resolves an open decision by assumption. |
| Result | A rule-compliant outcome is recorded; otherwise the action is rejected or blocked with the controlling Rule/Decision/Configuration ID. |
| Exceptions | Only explicitly approved and configured exceptions; missing production values are `BUSINESS CONFIGURATION REQUIRED` and never inferred. |
| Audit Impact | Actor, date/time, reason and affected record must be preserved where a decision, correction, financial or historical change occurs. |
| History Impact | Preserve history unless an approved rule states otherwise. |
| Related Decisions | None directly cited |
| Related Lifecycle | `EVALUATION_LIFECYCLE.md` |
| Related Policies | `../../04_POLICIES/EVALUATION_POLICIES.md` where applicable |
| Downstream Links | Requirements/DDD/DB/API/UX/QA must trace back to this rule ID. |

## BR-EVA-004

| Field | Value |
|---|---|
| Status | CONFIRMED |
| Rule Statement | Official Evaluation is recorded by a Coach under BD-012, with the client-approved type-specific exception that an Initial Placement Evaluation may be recorded by a Coach or specifically authorized Admin/Evaluator. Every governed placement result is reviewed/approved before publication by a Supervisor or specifically authorized placement approver. |
| Trigger | Evaluation decision |
| Preconditions | The trigger context and required related business identities are identifiable; actor authority is approved or the action is blocked. |
| Validation | Evaluate the Rule Statement directly and resolve every linked decision that controls the requested outcome before acting. |
| Allowed Behavior | Only the outcome expressly permitted by the Rule Statement, its lifecycle and approved related decisions. |
| Prohibited Behavior | The inverse of the Rule Statement, a silent history rewrite, or any outcome that resolves an open decision by assumption. |
| Result | A rule-compliant outcome is recorded; otherwise the action is rejected or blocked with the controlling Rule/Decision/Configuration ID. |
| Exceptions | Only explicitly approved and configured exceptions; missing production values are `BUSINESS CONFIGURATION REQUIRED` and never inferred. |
| Audit Impact | Actor, date/time, reason and affected record must be preserved where a decision, correction, financial or historical change occurs. |
| History Impact | Preserve history unless an approved rule states otherwise. |
| Related Decisions | BD-012, BD-013, SRC-015 |
| Related Lifecycle | `EVALUATION_LIFECYCLE.md` |
| Related Policies | `../../04_POLICIES/EVALUATION_POLICIES.md` where applicable |
| Downstream Links | Requirements/DDD/DB/API/UX/QA must trace back to this rule ID. |
