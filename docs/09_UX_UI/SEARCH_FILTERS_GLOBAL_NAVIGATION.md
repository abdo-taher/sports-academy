# Search, Filters and Global Navigation

> DOWNSTREAM UX DOCUMENT — DERIVED FROM CANONICAL BUSINESS TRUTH. It cannot create or override Business Rules.

## Purpose and Sources

Search and navigation help authorized users reach operational records. Business semantics come from `../00_GOVERNANCE/BUSINESS_QUESTION_ROUTER.md`, domain Rules, `../01_BUSINESS_FOUNDATION/ROLE_RESPONSIBILITY_MATRIX.md`, `../04_POLICIES/POLICY_CONFIGURATION_CATALOG.md` and `CURRENT_RELEASE_UX_FLOW_CATALOG.md`.

## Searchable Current-Release Objects

Student, Guardian, Lead, Trial, Coach, Group, Session, Sport, Program, Service/Plan, Subscription, Payment/Invoice, Attendance, Evaluation, Transfer, communication and authorized documents/reports may be indexed. Events, Tournaments, Camps, their Certificates and marketplace/community objects are future-only and must not appear as current operational objects.

## Search and Filter Contract

- Every result and action is filtered by current actor, relationship, Branch/Academy scope and process permission.
- Branch/Sport/Program filters expose only explicitly enabled availability under BD-002, BD-006, BD-028 and BR-BRA-001.
- Student filters use Registered, Active, Temporarily Inactive and Archived; Subscription/Payment/Freeze states remain distinct.
- Subscription eligibility filters use financial clearance, active period, non-frozen state and sufficient nonnegative balance; there is no implicit expiry grace.
- Trial filters may expose Requested, Scheduled, Confirmed, Attended, Cancelled, No-show, Evaluated where required and Closed/Non-converted.
- Freeze filters show request/decision/effective dates, Resume status and projected expiry extension.
- Renewal/carry-over filters distinguish the new linked Subscription, Plan policy, provenance ledger and overlap funding decision.
- Transfer filters require type (Group, Level, Sport or Branch), decision and effective status.
- Missing production values display `BUSINESS CONFIGURATION REQUIRED — CFG-...`; the UX never hard-codes an invented threshold.

## Result Summaries

A result may show only authorized identifying and operational context. A Student summary may show current Groups and multiple active Subscriptions. Remaining entitlement is shown per Subscription. If same-scope overlap cannot resolve exactly one funding Subscription, Attendance action is disabled with a deterministic ambiguity reason.

## Saved Filters and Technical Search

Users may manage their own saved filters without widening visibility. Partial/fuzzy matching, pagination, indexing engines, response-time targets and query syntax are technical/product decisions. Relative phrases such as “ending soon” require an effective configured threshold.

## Quick Actions

| Action | Current-release UX guard |
|---|---|
| View profile/history | Record visibility and relationship scope. |
| Convert Lead/enroll Student | Trial policy/bypass, duplicate resolution, Guardian validation and conversion authority. |
| Create/activate Subscription | Branch-enabled Plan and financial clearance or audited exception. |
| Record Attendance | Session context resolves exactly one eligible Subscription with positive balance. |
| Correct Attendance/approve Excuse | Process authority, reason and compensating Ledger preview. |
| Freeze/Resume/Renew | Applicable configuration, approval and impact preview. |
| Transfer | Typed eligibility and old/new/effective impact preview. |
| Archive/Restore | Active-relationship or fresh Return review; no automatic reactivation. |
| Send communication | Authorized audience preview; delivery status does not change the originating event. |

## Derived UX Rules

| ID | Derived behavior | Canonical anchor |
|---|---|---|
| UX-SRH-001 | Do not return records outside authorized visibility. | BD-025; process authority matrix |
| UX-SRH-002 | Support approved unique identifiers without exposing restricted identity data. | BR-STU-001; permission catalog |
| UX-SRH-003 | Re-evaluate saved filters against current permission and scope. | BR-ADM-001; BD-025 |
| UX-SRH-004 | Do not expose unsupported Branch Sports/Programs. | BD-002; BR-BRA-001; BD-006 |
| UX-SRH-005 | Search and navigation never mutate business records. | DG-001; BR-GOV-001 |

## Readiness

Business behavior: **READY**. Visual design, accessibility, search-engine choice and concrete performance targets remain product/technical work.
