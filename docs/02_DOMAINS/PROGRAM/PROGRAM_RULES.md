# Program Rules

This file is the canonical rule definition file for the Program domain.

## BR-PRG-001

| Field | Value |
|---|---|
| Name | Program Hierarchy |
| Status | CONFIRMED-WITH-CONFIGURATION |
| Business Statement | Program is a business-level training offering belonging to one Sport and sits in the hierarchy Sport → Program → Service/Subscription Plan → Student Subscription. |
| Domain Owner | PROGRAM |
| Trigger | Program creation/selection |
| Preconditions | Required identities and relationships are identifiable; actor authority and mandatory configuration are valid. |
| Validation | Evaluate this Rule, linked decision, lifecycle state and effective configuration before action. |
| Allowed Outcome | Apply only the stated outcome when all validations pass. |
| Rejection Outcome | Reject or hold with the violated Rule/configuration/authority reason; never partially or silently apply. |
| Exception Model | Only an explicitly approved, audited exception named in the authority/configuration artifacts. |
| Actor / Authority | Academy/Program catalog authority |
| Configuration Dependency | Program catalog configuration |
| Effective-Date Behavior | Apply from recorded effective date without rewriting historical records. |
| History / Audit | Preserve actor, time, reason, before/after values and approval/exception reference. |
| Related Decisions | BD-006 |
| Related Lifecycle / Journey | `PROGRAM_LIFECYCLE.md`; relevant journey under `../../03_END_TO_END_JOURNEYS/` |
| Downstream Impact | Full chain is recorded in `../../05_REQUIREMENTS/DERIVATION_MAP.md`. |

## BR-PRG-004

| Field | Value |
|---|---|
| Name | Program Grandfathered Retirement |
| Status | CONFIRMED |
| Business Statement | A Program follows Draft, Active, Suspended, Retired; retirement blocks new Plans and relationships while existing approved relationships continue under recorded terms until completion or renewal; reactivation requires approval. |
| Domain Owner | PROGRAM |
| Authority | Authorized Program lifecycle approver; cross-domain termination is not implied. |
| Lifecycle / State | Draft → Active ↔ Suspended → Retired; Retired → Active only by approved reactivation. |
| Validation | Sport and Branch eligibility are valid; retirement affected population is recorded. |
| Rejection / Exception | Reject new use of Suspended/Retired Program; do not rewrite existing subscriptions, Sessions or prices. |
| History / Audit | Preserve versions, transitions, dependent population, actor, reason, approvals and effective dates. |
| Configuration Dependency | Catalog visibility, notice and reason codes; lifecycle meaning is not configurable. |
| Current / Future Scope | CURRENT |
| Decision / NBCG Source | NBCG-DEC-005 / NBCG-005 |
| Canonical References | PROGRAM_LIFECYCLE.md; PROGRAM_MODEL.md; BR-PRG-001–003 |


## BR-PLAN-001

| Field | Value |
|---|---|
| Name | Purchased Plan Version Pinning |
| Status | CONFIRMED |
| Business Statement | Every active Subscription remains bound to the immutable Plan version accepted at purchase; new purchases and renewal records use and explicitly accept the current active version. |
| Domain Owner | PROGRAM / SUBSCRIPTION |
| Authority | Authorized Plan version approver; pricing/finance approval where applicable; purchaser/authorized guardian acceptance. |
| Lifecycle / State | Plan Version Draft → Active → Superseded/Retired; accepted Subscription retains its version. |
| Validation | Offer, acceptance, payment and effective timestamps identify the governing version; version is active for new acceptance. |
| Rejection / Exception | Reject purchase/renewal against inactive version; never mutate accepted active-subscription terms retroactively. |
| History / Audit | Preserve all versions, price/terms, acceptance evidence, migration exceptions, actors and effective dates. |
| Configuration Dependency | Version effective date, renewal notice and permitted exception authority; no retroactive default. |
| Current / Future Scope | CURRENT |
| Decision / NBCG Source | NBCG-DEC-006 / NBCG-006 |
| Canonical References | SERVICE_CATALOG.md; SUBSCRIPTION_MODEL.md; BR-SUB-007/010/011; BR-FIN-004 |


## BR-PRG-002

| Field | Value |
|---|---|
| Name | Program Commercial Boundary |
| Status | CONFIRMED |
| Business Statement | Program defines what training experience is offered and may define target Level/audience and format; it is not a Student entitlement, transactional Payment or Subscription. |
| Domain Owner | PROGRAM |
| Trigger | Catalog/enrollment/pricing interpretation |
| Preconditions | Required identities and relationships are identifiable; actor authority and mandatory configuration are valid. |
| Validation | Evaluate this Rule, linked decision, lifecycle state and effective configuration before action. |
| Allowed Outcome | Apply only the stated outcome when all validations pass. |
| Rejection Outcome | Reject or hold with the violated Rule/configuration/authority reason; never partially or silently apply. |
| Exception Model | Only an explicitly approved, audited exception named in the authority/configuration artifacts. |
| Actor / Authority | Academy/Program catalog authority |
| Configuration Dependency | None |
| Effective-Date Behavior | Apply from recorded effective date without rewriting historical records. |
| History / Audit | Preserve actor, time, reason, before/after values and approval/exception reference. |
| Related Decisions | BD-006 |
| Related Lifecycle / Journey | `PROGRAM_LIFECYCLE.md`; relevant journey under `../../03_END_TO_END_JOURNEYS/` |
| Downstream Impact | Full chain is recorded in `../../05_REQUIREMENTS/DERIVATION_MAP.md`. |

## BR-PRG-003

| Field | Value |
|---|---|
| Name | Program Operational Availability |
| Status | CONFIRMED-WITH-CONFIGURATION |
| Business Statement | Program operational use requires explicit availability, including explicit Branch enablement; global existence alone never makes it available in a Branch. |
| Domain Owner | PROGRAM |
| Trigger | Program selection/scheduling/subscription |
| Preconditions | Required identities and relationships are identifiable; actor authority and mandatory configuration are valid. |
| Validation | Evaluate this Rule, linked decision, lifecycle state and effective configuration before action. |
| Allowed Outcome | Apply only the stated outcome when all validations pass. |
| Rejection Outcome | Reject or hold with the violated Rule/configuration/authority reason; never partially or silently apply. |
| Exception Model | Only an explicitly approved, audited exception named in the authority/configuration artifacts. |
| Actor / Authority | Branch Admin within Academy governance |
| Configuration Dependency | Branch Program availability |
| Effective-Date Behavior | Apply from recorded effective date without rewriting historical records. |
| History / Audit | Preserve actor, time, reason, before/after values and approval/exception reference. |
| Related Decisions | BD-006, BD-028 |
| Related Lifecycle / Journey | `PROGRAM_LIFECYCLE.md`; relevant journey under `../../03_END_TO_END_JOURNEYS/` |
| Downstream Impact | Full chain is recorded in `../../05_REQUIREMENTS/DERIVATION_MAP.md`. |
