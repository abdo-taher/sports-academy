
## BR-BRA-002

| Field | Value |
|---|---|
| Name | Branch State Integrity |
| Status | CONFIRMED |
| Business Statement | Branch state is Planned, Active, Temporarily Closed or Archived; authorized transitions preserve history, and temporary closure prevents normal Branch operations without changing Student or Subscription state automatically. |
| Domain Owner | BRANCH |
| Trigger | Branch state change |
| Preconditions | Required identities and relationships are identifiable; actor authority and any mandatory configuration are valid. |
| Validation | Evaluate this statement, linked decisions, lifecycle state and effective configuration before action. |
| Allowed Outcome | The stated outcome occurs only when all preconditions and authority checks pass. |
| Rejection Outcome | Reject or hold the action with the violated Rule/configuration/authority reason; do not partially or silently apply it. |
| Exception Model | Only an explicitly approved, auditable exception named by this Rule or its authority/configuration artifact. |
| Actor / Authority | Academy Admin; Branch Admin within approved scope |
| Configuration Dependency | None |
| Effective-Date Behavior | State, assignment, policy and configuration changes apply from their recorded effective date and do not rewrite history. |
| History / Audit | Preserve actor, time, reason, before/after values and linked approval/exception where applicable. |
| Related Decisions | BD-004 |
| Related Lifecycle / Journey | `BRANCH_LIFECYCLE.md`; relevant file in `../../03_END_TO_END_JOURNEYS/` |
| Downstream Impact | Requirements, permission, DDD, database, API, UX and QA trace through `05_REQUIREMENTS/DERIVATION_MAP.md`. |

## BR-BRA-003

| Field | Value |
|---|---|
| Name | Branch Program Availability |
| Status | CONFIRMED-WITH-CONFIGURATION |
| Business Statement | A Program must not be offered, selected, scheduled or subscribed in a Branch unless that Branch explicitly enables the Program and its Sport. |
| Domain Owner | BRANCH |
| Trigger | Program availability/selection |
| Preconditions | Required identities and relationships are identifiable; actor authority and any mandatory configuration are valid. |
| Validation | Evaluate this statement, linked decisions, lifecycle state and effective configuration before action. |
| Allowed Outcome | The stated outcome occurs only when all preconditions and authority checks pass. |
| Rejection Outcome | Reject or hold the action with the violated Rule/configuration/authority reason; do not partially or silently apply it. |
| Exception Model | Only an explicitly approved, auditable exception named by this Rule or its authority/configuration artifact. |
| Actor / Authority | Branch Admin; Academy governance |
| Configuration Dependency | Branch Program availability |
| Effective-Date Behavior | State, assignment, policy and configuration changes apply from their recorded effective date and do not rewrite history. |
| History / Audit | Preserve actor, time, reason, before/after values and linked approval/exception where applicable. |
| Related Decisions | BD-006, BD-028 |
| Related Lifecycle / Journey | `BRANCH_LIFECYCLE.md`; relevant file in `../../03_END_TO_END_JOURNEYS/` |
| Downstream Impact | Requirements, permission, DDD, database, API, UX and QA trace through `05_REQUIREMENTS/DERIVATION_MAP.md`. |
# Branch Rules

This file is the canonical rule definition file for the Branch domain.

## BR-BRA-001

| Field | Value |
|---|---|
| Status | CONFIRMED |
| Rule Statement | A Sport must not be shown as available in a Branch unless that Branch supports or enables that Sport. This applies to registration, Trial booking, service selection, Groups, Scheduling, Subscription creation, Frontend filtering and API validation. |
| Trigger | Branch Sport availability |
| Preconditions | The trigger context and required related business identities are identifiable; actor authority is approved or the action is blocked. |
| Validation | Evaluate the Rule Statement directly and resolve every linked decision that controls the requested outcome before acting. |
| Allowed Behavior | Only the outcome expressly permitted by the Rule Statement, its lifecycle and approved related decisions. |
| Prohibited Behavior | The inverse of the Rule Statement, a silent history rewrite, or any outcome that resolves an open decision by assumption. |
| Result | A rule-compliant outcome is recorded; otherwise the action is rejected or blocked with the controlling Rule/Decision/Configuration ID. |
| Exceptions | Only explicitly approved and configured exceptions; missing production values are `BUSINESS CONFIGURATION REQUIRED` and never inferred. |
| Audit Impact | Actor, date/time, reason and affected record must be preserved where a decision, correction, financial or historical change occurs. |
| History Impact | Preserve history unless an approved rule states otherwise. |
| Related Decisions | BD-002 |
| Related Lifecycle | `BRANCH_LIFECYCLE.md` |
| Related Policies | `../../04_POLICIES/BRANCH_POLICIES.md` where applicable |
| Downstream Links | Requirements/DDD/DB/API/UX/QA must trace back to this rule ID. |

## BR-BRA-004

| Field | Value |
|---|---|
| Name | Prospective Availability Withdrawal |
| Status | CONFIRMED |
| Business Statement | Withdrawal of Branch/Sport/Program/Plan availability blocks new relationships from its effective time while existing approved relationships remain on recorded terms until normal completion or renewal; renewal uses currently available offerings. |
| Domain Owner | BRANCH |
| Authority | Authorized availability owner; migration/termination requires separate owning-domain authority. |
| Lifecycle / State | Available → Withdrawn for new use; existing relationships are Grandfathered until completion/renewal. |
| Validation | Classify relationship as existing using approved/effective timestamps; block all new selection after effectiveness. |
| Rejection / Exception | Reject new unsupported use; do not migrate, suspend or terminate existing relationships by implication. |
| History / Audit | Preserve availability versions, affected population, grandfather status, actor, reason and effective time. |
| Configuration Dependency | Withdrawal reason/notice and permitted exception authority; no behavior override. |
| Current / Future Scope | CURRENT |
| Decision / NBCG Source | NBCG-DEC-003 / NBCG-003 |
| Canonical References | BRANCH_SPORT_AVAILABILITY.md; BR-BRA-001/003; BR-HIS-001 |
