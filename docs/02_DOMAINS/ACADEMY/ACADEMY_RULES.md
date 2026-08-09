
## BR-GOV-003

| Field | Value |
|---|---|
| Name | Canonical Client Baseline |
| Status | CONFIRMED |
| Business Statement | The current canonical business repository and approved Decision Log are authoritative; Legacy, audit, generated, technical and Derived material cannot create or override Business Truth. |
| Domain Owner | ACADEMY |
| Trigger | Source selection |
| Preconditions | Required identities and relationships are identifiable; actor authority and any mandatory configuration are valid. |
| Validation | Evaluate this statement, linked decisions, lifecycle state and effective configuration before action. |
| Allowed Outcome | The stated outcome occurs only when all preconditions and authority checks pass. |
| Rejection Outcome | Reject or hold the action with the violated Rule/configuration/authority reason; do not partially or silently apply it. |
| Exception Model | Only an explicitly approved, auditable exception named by this Rule or its authority/configuration artifact. |
| Actor / Authority | Academy Admin / documentation governance |
| Configuration Dependency | None |
| Effective-Date Behavior | State, assignment, policy and configuration changes apply from their recorded effective date and do not rewrite history. |
| History / Audit | Preserve actor, time, reason, before/after values and linked approval/exception where applicable. |
| Related Decisions | BD-003 |
| Related Lifecycle / Journey | `ACADEMY_LIFECYCLE.md`; relevant file in `../../03_END_TO_END_JOURNEYS/` |
| Downstream Impact | Requirements, permission, DDD, database, API, UX and QA trace through `05_REQUIREMENTS/DERIVATION_MAP.md`. |

## BR-SCP-001

| Field | Value |
|---|---|
| Name | Current Release Scope Guard |
| Status | CONFIRMED |
| Business Statement | Events, Tournaments, Camps, related Certificates and marketplace/community modules remain Future scope. The Academy-owned, permissioned Post/feed and Survey capabilities approved by SRC-015 are Current and are not a public marketplace/community module. |
| Domain Owner | ACADEMY |
| Trigger | Scope classification |
| Preconditions | Required identities and relationships are identifiable; actor authority and any mandatory configuration are valid. |
| Validation | Evaluate this statement, linked decisions, lifecycle state and effective configuration before action. |
| Allowed Outcome | The stated outcome occurs only when all preconditions and authority checks pass. |
| Rejection Outcome | Reject or hold the action with the violated Rule/configuration/authority reason; do not partially or silently apply it. |
| Exception Model | Only an explicitly approved, auditable exception named by this Rule or its authority/configuration artifact. |
| Actor / Authority | Academy Admin / Product Owner |
| Configuration Dependency | None |
| Effective-Date Behavior | State, assignment, policy and configuration changes apply from their recorded effective date and do not rewrite history. |
| History / Audit | Preserve actor, time, reason, before/after values and linked approval/exception where applicable. |
| Related Decisions | BD-026, BD-027, SRC-015 |
| Related Lifecycle / Journey | `ACADEMY_LIFECYCLE.md`; relevant file in `../../03_END_TO_END_JOURNEYS/` |
| Downstream Impact | Requirements, permission, DDD, database, API, UX and QA trace through `05_REQUIREMENTS/DERIVATION_MAP.md`. |

## BR-ACA-001

| Field | Value |
|---|---|
| Name | Academy State Integrity |
| Status | CONFIRMED |
| Business Statement | Academy state is Active, Suspended or Archived; every authorized transition is effective-dated, reasoned, historical and auditable, and Archive never deletes history. |
| Domain Owner | ACADEMY |
| Trigger | Academy state change |
| Preconditions | Required identities and relationships are identifiable; actor authority and any mandatory configuration are valid. |
| Validation | Evaluate this statement, linked decisions, lifecycle state and effective configuration before action. |
| Allowed Outcome | The stated outcome occurs only when all preconditions and authority checks pass. |
| Rejection Outcome | Reject or hold the action with the violated Rule/configuration/authority reason; do not partially or silently apply it. |
| Exception Model | Only an explicitly approved, auditable exception named by this Rule or its authority/configuration artifact. |
| Actor / Authority | Academy Admin; configured approval role |
| Configuration Dependency | None |
| Effective-Date Behavior | State, assignment, policy and configuration changes apply from their recorded effective date and do not rewrite history. |
| History / Audit | Preserve actor, time, reason, before/after values and linked approval/exception where applicable. |
| Related Decisions | BD-004 |
| Related Lifecycle / Journey | `ACADEMY_LIFECYCLE.md`; relevant file in `../../03_END_TO_END_JOURNEYS/` |
| Downstream Impact | Requirements, permission, DDD, database, API, UX and QA trace through `05_REQUIREMENTS/DERIVATION_MAP.md`. |

## BR-CFG-001

| Field | Value |
|---|---|
| Name | Configuration Precedence |
| Status | CONFIRMED-WITH-CONFIGURATION |
| Business Statement | Academy default applies unless an explicitly Branch-, Sport-, Program- or Plan-configurable item has an authorized effective override; governance-critical invariants are non-overridable. |
| Domain Owner | ACADEMY |
| Trigger | Configuration resolution/change |
| Preconditions | Required identities and relationships are identifiable; actor authority and any mandatory configuration are valid. |
| Validation | Evaluate this statement, linked decisions, lifecycle state and effective configuration before action. |
| Allowed Outcome | The stated outcome occurs only when all preconditions and authority checks pass. |
| Rejection Outcome | Reject or hold the action with the violated Rule/configuration/authority reason; do not partially or silently apply it. |
| Exception Model | Only an explicitly approved, auditable exception named by this Rule or its authority/configuration artifact. |
| Actor / Authority | Authorized editor by configuration item |
| Configuration Dependency | CFG catalog item required |
| Effective-Date Behavior | State, assignment, policy and configuration changes apply from their recorded effective date and do not rewrite history. |
| History / Audit | Preserve actor, time, reason, before/after values and linked approval/exception where applicable. |
| Related Decisions | BD-028 |
| Related Lifecycle / Journey | `ACADEMY_LIFECYCLE.md`; relevant file in `../../03_END_TO_END_JOURNEYS/` |
| Downstream Impact | Requirements, permission, DDD, database, API, UX and QA trace through `05_REQUIREMENTS/DERIVATION_MAP.md`. |

## BR-ADM-001

| Field | Value |
|---|---|
| Name | Process-Level Authority |
| Status | CONFIRMED-WITH-CONFIGURATION |
| Business Statement | Every sensitive process identifies initiator, reviewer, approver, rejector and executor as applicable; elevated technical access alone grants no business authority. |
| Domain Owner | ACADEMY |
| Trigger | Sensitive action |
| Preconditions | Required identities and relationships are identifiable; actor authority and any mandatory configuration are valid. |
| Validation | Evaluate this statement, linked decisions, lifecycle state and effective configuration before action. |
| Allowed Outcome | The stated outcome occurs only when all preconditions and authority checks pass. |
| Rejection Outcome | Reject or hold the action with the violated Rule/configuration/authority reason; do not partially or silently apply it. |
| Exception Model | Only an explicitly approved, auditable exception named by this Rule or its authority/configuration artifact. |
| Actor / Authority | Role assigned by process and scope |
| Configuration Dependency | Process authority matrix |
| Effective-Date Behavior | State, assignment, policy and configuration changes apply from their recorded effective date and do not rewrite history. |
| History / Audit | Preserve actor, time, reason, before/after values and linked approval/exception where applicable. |
| Related Decisions | BD-025 |
| Related Lifecycle / Journey | `ACADEMY_LIFECYCLE.md`; relevant file in `../../03_END_TO_END_JOURNEYS/` |
| Downstream Impact | Requirements, permission, DDD, database, API, UX and QA trace through `05_REQUIREMENTS/DERIVATION_MAP.md`. |

## BR-ADM-002

| Field | Value |
|---|---|
| Name | Temporary Delegation |
| Status | CONFIRMED-WITH-CONFIGURATION |
| Business Statement | Delegation is explicit, revocable, time- and scope-bound, auditable, never exceeds delegator authority and never permanently changes the delegate role. |
| Domain Owner | ACADEMY |
| Trigger | Delegated action |
| Preconditions | Required identities and relationships are identifiable; actor authority and any mandatory configuration are valid. |
| Validation | Evaluate this statement, linked decisions, lifecycle state and effective configuration before action. |
| Allowed Outcome | The stated outcome occurs only when all preconditions and authority checks pass. |
| Rejection Outcome | Reject or hold the action with the violated Rule/configuration/authority reason; do not partially or silently apply it. |
| Exception Model | Only an explicitly approved, auditable exception named by this Rule or its authority/configuration artifact. |
| Actor / Authority | Delegator and authorized delegation approver |
| Configuration Dependency | Delegability by process |
| Effective-Date Behavior | State, assignment, policy and configuration changes apply from their recorded effective date and do not rewrite history. |
| History / Audit | Preserve actor, time, reason, before/after values and linked approval/exception where applicable. |
| Related Decisions | BD-025 |
| Related Lifecycle / Journey | `ACADEMY_LIFECYCLE.md`; relevant file in `../../03_END_TO_END_JOURNEYS/` |
| Downstream Impact | Requirements, permission, DDD, database, API, UX and QA trace through `05_REQUIREMENTS/DERIVATION_MAP.md`. |

## BR-HIS-001

| Field | Value |
|---|---|
| Name | Historical Truth Preservation |
| Status | CONFIRMED-WITH-CONFIGURATION |
| Business Statement | State changes, corrections, approvals, rejections, exceptions, financial changes and assignment changes preserve before/after truth through history, versioning or compensating records. |
| Domain Owner | ACADEMY |
| Trigger | History-affecting action |
| Preconditions | Required identities and relationships are identifiable; actor authority and any mandatory configuration are valid. |
| Validation | Evaluate this statement, linked decisions, lifecycle state and effective configuration before action. |
| Allowed Outcome | The stated outcome occurs only when all preconditions and authority checks pass. |
| Rejection Outcome | Reject or hold the action with the violated Rule/configuration/authority reason; do not partially or silently apply it. |
| Exception Model | Only an explicitly approved, auditable exception named by this Rule or its authority/configuration artifact. |
| Actor / Authority | Owning process actor and approver |
| Configuration Dependency | Retention/visibility configuration only |
| Effective-Date Behavior | State, assignment, policy and configuration changes apply from their recorded effective date and do not rewrite history. |
| History / Audit | Preserve actor, time, reason, before/after values and linked approval/exception where applicable. |
| Related Decisions | BD-003, BD-004, BD-025 |
| Related Lifecycle / Journey | `ACADEMY_LIFECYCLE.md`; relevant file in `../../03_END_TO_END_JOURNEYS/` |
| Downstream Impact | Requirements, permission, DDD, database, API, UX and QA trace through `05_REQUIREMENTS/DERIVATION_MAP.md`. |
# Academy Rules

This file is the canonical rule definition file for the Academy domain.

## BR-GOV-001

| Field | Value |
|---|---|
| Status | CONFIRMED |
| Rule Statement | A generated example, recommendation or technical design is not a business rule unless supported by a verified decision. |
| Trigger | All |
| Preconditions | The trigger context and required related business identities are identifiable; actor authority is approved or the action is blocked. |
| Validation | Evaluate the Rule Statement directly and resolve every linked decision that controls the requested outcome before acting. |
| Allowed Behavior | Only the outcome expressly permitted by the Rule Statement, its lifecycle and approved related decisions. |
| Prohibited Behavior | The inverse of the Rule Statement, a silent history rewrite, or any outcome that resolves an open decision by assumption. |
| Result | A rule-compliant outcome is recorded; otherwise the action is rejected or blocked with the controlling Rule/Decision/Configuration ID. |
| Exceptions | Only explicitly approved and configured exceptions; missing production values are `BUSINESS CONFIGURATION REQUIRED` and never inferred. |
| Audit Impact | Actor, date/time, reason and affected record must be preserved where a decision, correction, financial or historical change occurs. |
| History Impact | Preserve history unless an approved rule states otherwise. |
| Related Decisions | None directly cited |
| Related Lifecycle | `ACADEMY_LIFECYCLE.md` |
| Related Policies | `../../04_POLICIES/ACADEMY_POLICIES.md` where applicable |
| Downstream Links | Requirements/DDD/DB/API/UX/QA must trace back to this rule ID. |

## BR-ACA-002

| Field | Value |
|---|---|
| Name | Academy Dependency Review |
| Status | CONFIRMED |
| Business Statement | Academy suspension or archival cannot complete until every active Branch, future Session, enrollment, Subscription, balance and pending request has an explicit authorized disposition; no dependent state or financial obligation changes silently. |
| Domain Owner | ACADEMY |
| Authority | Academy-wide business approver; domain owners approve consequential dependent dispositions. |
| Lifecycle / State | Active → Suspended/Archived only through completed dependency review; reactivation uses fresh authorized review. |
| Validation | Dependency inventory is complete and every outcome has authority, effective time and communication/reporting classification. |
| Rejection / Exception | Hold the Academy transition if any active dependency lacks disposition; exceptions require explicit approval and never erase obligations. |
| History / Audit | Preserve review inventory, prior/current states, actors, reasons, approvals, effective times and every dependent outcome. |
| Configuration Dependency | Disposition deadlines, communication and permitted operational profiles only; no invented financial values. |
| Current / Future Scope | CURRENT |
| Decision / NBCG Source | NBCG-DEC-001 / NBCG-001 |
| Canonical References | ACADEMY_LIFECYCLE.md; BR-ACA-001; BR-ADM-001; BR-HIS-001 |


## BR-GOV-002

| Field | Value |
|---|---|
| Status | CONFIRMED |
| Rule Statement | An unresolved conflict is recorded as an Open Question and is not resolved by assumption. |
| Trigger | All |
| Preconditions | The trigger context and required related business identities are identifiable; actor authority is approved or the action is blocked. |
| Validation | Evaluate the Rule Statement directly and resolve every linked decision that controls the requested outcome before acting. |
| Allowed Behavior | Only the outcome expressly permitted by the Rule Statement, its lifecycle and approved related decisions. |
| Prohibited Behavior | The inverse of the Rule Statement, a silent history rewrite, or any outcome that resolves an open decision by assumption. |
| Result | A rule-compliant outcome is recorded; otherwise the action is rejected or blocked with the controlling Rule/Decision/Configuration ID. |
| Exceptions | Only explicitly approved and configured exceptions; missing production values are `BUSINESS CONFIGURATION REQUIRED` and never inferred. |
| Audit Impact | Actor, date/time, reason and affected record must be preserved where a decision, correction, financial or historical change occurs. |
| History Impact | Preserve history unless an approved rule states otherwise. |
| Related Decisions | None directly cited |
| Related Lifecycle | `ACADEMY_LIFECYCLE.md` |
| Related Policies | `../../04_POLICIES/ACADEMY_POLICIES.md` where applicable |
| Downstream Links | Requirements/DDD/DB/API/UX/QA must trace back to this rule ID. |
