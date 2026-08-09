
## BR-GRP-005

| Field | Value |
|---|---|
| Name | Multiple Current Groups |
| Status | CONFIRMED-WITH-CONFIGURATION |
| Business Statement | A Student may belong to multiple current Groups when supported by active Subscriptions; each membership retains its Sport, Program and Subscription context. |
| Domain Owner | GROUP |
| Trigger | Group membership |
| Preconditions | Required identities and relationships are identifiable; actor authority and any mandatory configuration are valid. |
| Validation | Evaluate this statement, linked decisions, lifecycle state and effective configuration before action. |
| Allowed Outcome | The stated outcome occurs only when all preconditions and authority checks pass. |
| Rejection Outcome | Reject or hold the action with the violated Rule/configuration/authority reason; do not partially or silently apply it. |
| Exception Model | Only an explicitly approved, auditable exception named by this Rule or its authority/configuration artifact. |
| Actor / Authority | Authorized Group assignment actor |
| Configuration Dependency | Same-scope overlap policy |
| Effective-Date Behavior | State, assignment, policy and configuration changes apply from their recorded effective date and do not rewrite history. |
| History / Audit | Preserve actor, time, reason, before/after values and linked approval/exception where applicable. |
| Related Decisions | BD-023 |
| Related Lifecycle / Journey | `GROUP_LIFECYCLE.md`; relevant file in `../../03_END_TO_END_JOURNEYS/` |
| Downstream Impact | Requirements, permission, DDD, database, API, UX and QA trace through `05_REQUIREMENTS/DERIVATION_MAP.md`. |
# Group Rules

This file is the canonical rule definition file for the Group domain.

## BR-GRP-001

| Field | Value |
|---|---|
| Status | CONFIRMED |
| Rule Statement | Every Training Group has a Primary Coach and an established weekly schedule. |
| Trigger | Group setup |
| Preconditions | The trigger context and required related business identities are identifiable; actor authority is approved or the action is blocked. |
| Validation | Evaluate the Rule Statement directly and resolve every linked decision that controls the requested outcome before acting. |
| Allowed Behavior | Only the outcome expressly permitted by the Rule Statement, its lifecycle and approved related decisions. |
| Prohibited Behavior | The inverse of the Rule Statement, a silent history rewrite, or any outcome that resolves an open decision by assumption. |
| Result | A rule-compliant outcome is recorded; otherwise the action is rejected or blocked with the controlling Rule/Decision/Configuration ID. |
| Exceptions | Only explicitly approved and configured exceptions; missing production values are `BUSINESS CONFIGURATION REQUIRED` and never inferred. |
| Audit Impact | Actor, date/time, reason and affected record must be preserved where a decision, correction, financial or historical change occurs. |
| History Impact | Preserve history unless an approved rule states otherwise. |
| Related Decisions | None directly cited |
| Related Lifecycle | `GROUP_LIFECYCLE.md` |
| Related Policies | `../../04_POLICIES/GROUP_POLICIES.md` where applicable |
| Downstream Links | Requirements/DDD/DB/API/UX/QA must trace back to this rule ID. |

## BR-GRP-006

| Field | Value |
|---|---|
| Name | Controlled Group Closure |
| Status | CONFIRMED |
| Business Statement | Group states are Draft, Active, Closing, Closed and Archived; Closing must explicitly dispose active members, future Sessions, Coach assignments and pending transfers before Closed. |
| Domain Owner | GROUP |
| Authority | Authorized Group owner initiates; consequential transfers/cancellations require owning process authority. |
| Lifecycle / State | Draft → Active → Closing → Closed → Archived; Closing may return to Active by authorized withdrawal before completion. |
| Validation | Dependency inventory complete; capacity/transfer rules revalidated; no unresolved future Session or member outcome. |
| Rejection / Exception | Hold closure while dependencies remain; do not silently unassign, transfer or cancel. |
| History / Audit | Preserve roster, assignments, Sessions, dispositions, transition actors/reasons/approvals/effective dates. |
| Configuration Dependency | Closure deadline, reason codes and communication; states and mandatory review are fixed. |
| Current / Future Scope | CURRENT |
| Decision / NBCG Source | NBCG-DEC-009 / NBCG-009 |
| Canonical References | GROUP_LIFECYCLE.md; BR-GRP-001–005; BR-SES-003/004 |


## BR-GRP-002

| Field | Value |
|---|---|
| Status | CONFIRMED |
| Rule Statement | A Student transfer preserves old and new assignments, effective date, reason and decision history to the extent collected. |
| Trigger | Transfer |
| Preconditions | The trigger context and required related business identities are identifiable; actor authority is approved or the action is blocked. |
| Validation | Evaluate the Rule Statement directly and resolve every linked decision that controls the requested outcome before acting. |
| Allowed Behavior | Only the outcome expressly permitted by the Rule Statement, its lifecycle and approved related decisions. |
| Prohibited Behavior | The inverse of the Rule Statement, a silent history rewrite, or any outcome that resolves an open decision by assumption. |
| Result | A rule-compliant outcome is recorded; otherwise the action is rejected or blocked with the controlling Rule/Decision/Configuration ID. |
| Exceptions | Only explicitly approved and configured exceptions; missing production values are `BUSINESS CONFIGURATION REQUIRED` and never inferred. |
| Audit Impact | Actor, date/time, reason and affected record must be preserved where a decision, correction, financial or historical change occurs. |
| History Impact | Preserve history unless an approved rule states otherwise. |
| Related Decisions | None directly cited |
| Related Lifecycle | `GROUP_LIFECYCLE.md` |
| Related Policies | `../../04_POLICIES/GROUP_POLICIES.md` where applicable |
| Downstream Links | Requirements/DDD/DB/API/UX/QA must trace back to this rule ID. |

## BR-GRP-003

| Field | Value |
|---|---|
| Status | CONFIRMED |
| Rule Statement | A Substitute Coach assigned to a Session does not become the Group's Primary Coach automatically. |
| Trigger | Coach substitution |
| Preconditions | The trigger context and required related business identities are identifiable; actor authority is approved or the action is blocked. |
| Validation | Evaluate the Rule Statement directly and resolve every linked decision that controls the requested outcome before acting. |
| Allowed Behavior | Only the outcome expressly permitted by the Rule Statement, its lifecycle and approved related decisions. |
| Prohibited Behavior | The inverse of the Rule Statement, a silent history rewrite, or any outcome that resolves an open decision by assumption. |
| Result | A rule-compliant outcome is recorded; otherwise the action is rejected or blocked with the controlling Rule/Decision/Configuration ID. |
| Exceptions | Only explicitly approved and configured exceptions; missing production values are `BUSINESS CONFIGURATION REQUIRED` and never inferred. |
| Audit Impact | Actor, date/time, reason and affected record must be preserved where a decision, correction, financial or historical change occurs. |
| History Impact | Preserve history unless an approved rule states otherwise. |
| Related Decisions | None directly cited |
| Related Lifecycle | `GROUP_LIFECYCLE.md` |
| Related Policies | `../../04_POLICIES/GROUP_POLICIES.md` where applicable |
| Downstream Links | Requirements/DDD/DB/API/UX/QA must trace back to this rule ID. |

## BR-GRP-004

| Field | Value |
|---|---|
| Status | CONFIRMED-WITH-CONFIGURATION |
| Rule Statement | The receiving Group's suitability and capacity must be checked before Transfer; limits and permitted override authority are effective configuration and no over-capacity placement may be inferred. |
| Trigger | Transfer |
| Preconditions | The trigger context and required related business identities are identifiable; actor authority is approved or the action is blocked. |
| Validation | Evaluate the Rule Statement directly and resolve every linked decision that controls the requested outcome before acting. |
| Allowed Behavior | Only the outcome expressly permitted by the Rule Statement, its lifecycle and approved related decisions. |
| Prohibited Behavior | The inverse of the Rule Statement, a silent history rewrite, or any outcome that resolves an open decision by assumption. |
| Result | A rule-compliant outcome is recorded; otherwise the action is rejected or blocked with the controlling Rule/Decision/Configuration ID. |
| Exceptions | Only explicitly approved and configured exceptions; missing production values are `BUSINESS CONFIGURATION REQUIRED` and never inferred. |
| Audit Impact | Actor, date/time, reason and affected record must be preserved where a decision, correction, financial or historical change occurs. |
| History Impact | Preserve history unless an approved rule states otherwise. |
| Related Decisions | BD-022, BD-025 |
| Related Lifecycle | `GROUP_LIFECYCLE.md` |
| Related Policies | `../../04_POLICIES/GROUP_POLICIES.md` where applicable |
| Downstream Links | Requirements/DDD/DB/API/UX/QA must trace back to this rule ID. |
