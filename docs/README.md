# Sports Academy Platform — Active Documentation

This is the **clean active knowledge base** for the Sports Academy Platform.

For project-level AI and team routing, start at [`../README.md`](../README.md). Before modifying documentation, read [`AGENTS.md`](./AGENTS.md) and [`00_GOVERNANCE/AI_CHANGE_PROPAGATION_PROTOCOL.md`](./00_GOVERNANCE/AI_CHANGE_PROPAGATION_PROTOCOL.md).

Before implementation, also read the canonical [`Technology Stack Lock`](./00_GOVERNANCE/TECH_STACK_LOCK.md), [`Architecture Rules`](./00_GOVERNANCE/ARCHITECTURE_RULES.md), [`Dependency Rules`](./00_GOVERNANCE/DEPENDENCY_RULES.md), [`Coding Standards`](./00_GOVERNANCE/CODING_STANDARDS.md) and [`Testing Strategy`](./00_GOVERNANCE/TESTING_STRATEGY.md).

Current business status:

- **40 approved Business Decisions / 0 open current Business Decisions**
- **114 canonical Business Rules**
- **0 current-scope Business gaps**
- Business knowledge is certified as complete and AI-consumable.
- Numeric operational values that are intentionally not fixed remain `PRODUCTION CONFIGURATION REQUIRED`.

Historical audits, superseded drafts, decision packs and Legacy chapters are intentionally excluded from this active package and retained separately in the historical archive.

## Start by role

### AI tool / new reader
Start with [`00_GOVERNANCE/AI_START_HERE.md`](./00_GOVERNANCE/AI_START_HERE.md).  
Do not scan the whole repository for normal questions.

### Client / Business
Start with [`CLIENT/CLIENT_BRD_BUSINESS_SUMMARY_AR.md`](./CLIENT/CLIENT_BRD_BUSINESS_SUMMARY_AR.md), then use [`01_BUSINESS_FOUNDATION/`](./01_BUSINESS_FOUNDATION/) and the owning domain under [`02_DOMAINS/`](./02_DOMAINS/) for detail. The Client BRD presents canonical Business Truth but does not override it.

### Product / Business Analyst
Start with [`05_REQUIREMENTS/CURRENT_RELEASE_CAPABILITY_REQUIREMENTS.md`](./05_REQUIREMENTS/CURRENT_RELEASE_CAPABILITY_REQUIREMENTS.md), [`00_GOVERNANCE/BUSINESS_CONCEPT_INDEX.md`](./00_GOVERNANCE/BUSINESS_CONCEPT_INDEX.md), and the relevant domain Rules/Lifecycle.

### Backend
Read in this order:
1. owning `02_DOMAINS/<DOMAIN>/*_RULES.md` and lifecycle/model;
2. [`05_REQUIREMENTS/DERIVATION_MAP.md`](./05_REQUIREMENTS/DERIVATION_MAP.md);
3. [`06_DDD/CURRENT_RELEASE_DOMAIN_MODEL.md`](./06_DDD/CURRENT_RELEASE_DOMAIN_MODEL.md);
4. [`07_DATABASE/CURRENT_RELEASE_DATA_INTEGRITY_MODEL.md`](./07_DATABASE/CURRENT_RELEASE_DATA_INTEGRITY_MODEL.md);
5. [`08_API/CURRENT_RELEASE_API_BEHAVIOR_CATALOG.md`](./08_API/CURRENT_RELEASE_API_BEHAVIOR_CATALOG.md);
6. [`10_SECURITY/CURRENT_RELEASE_PERMISSION_CATALOG.md`](./10_SECURITY/CURRENT_RELEASE_PERMISSION_CATALOG.md).

### Frontend / UX / Product Design
Read in this order:
1. client BRD and relevant domain README/Rules;
2. [`05_REQUIREMENTS/CURRENT_RELEASE_CAPABILITY_REQUIREMENTS.md`](./05_REQUIREMENTS/CURRENT_RELEASE_CAPABILITY_REQUIREMENTS.md);
3. [`09_UX_UI/CURRENT_RELEASE_UX_FLOW_CATALOG.md`](./09_UX_UI/CURRENT_RELEASE_UX_FLOW_CATALOG.md);
4. [`10_SECURITY/CURRENT_RELEASE_PERMISSION_CATALOG.md`](./10_SECURITY/CURRENT_RELEASE_PERMISSION_CATALOG.md).

### QA
Start with the canonical Rule/Lifecycle, then [`12_QA/CURRENT_RELEASE_RULE_QA_SCENARIOS.md`](./12_QA/CURRENT_RELEASE_RULE_QA_SCENARIOS.md).

## Authority

When documents disagree:

1. approved Decisions in [`15_CHANGE_MANAGEMENT/DECISION_LOG.md`](./15_CHANGE_MANAGEMENT/DECISION_LOG.md);
2. canonical Rules under `02_DOMAINS/`;
3. canonical lifecycle/state model;
4. canonical Domain model;
5. policy/configuration;
6. End-to-End Journeys;
7. Requirements;
8. technical documentation;
9. Derived Views;
10. historical evidence.

Use [`00_GOVERNANCE/SOURCE_OF_TRUTH.md`](./00_GOVERNANCE/SOURCE_OF_TRUTH.md) for the complete authority contract.

## Fast indexes

- [`00_GOVERNANCE/BUSINESS_QUESTION_ROUTER.md`](./00_GOVERNANCE/BUSINESS_QUESTION_ROUTER.md)
- [`00_GOVERNANCE/BUSINESS_CONCEPT_INDEX.md`](./00_GOVERNANCE/BUSINESS_CONCEPT_INDEX.md)
- [`00_GOVERNANCE/BUSINESS_RULE_INDEX.md`](./00_GOVERNANCE/BUSINESS_RULE_INDEX.md)
- [`00_GOVERNANCE/AI_SOURCE_MANIFEST.md`](./00_GOVERNANCE/AI_SOURCE_MANIFEST.md)
- [`04_POLICIES/POLICY_CONFIGURATION_CATALOG.md`](./04_POLICIES/POLICY_CONFIGURATION_CATALOG.md)

## Directory responsibility

| Directory | Primary purpose |
|---|---|
| `00_GOVERNANCE` | Authority, AI routing, indexes, terminology and current certification |
| `01_BUSINESS_FOUNDATION` | Business scope, operating model, actors and responsibilities |
| `02_DOMAINS` | **Canonical Business Truth** by domain |
| `03_END_TO_END_JOURNEYS` | Cross-domain operational journeys |
| `04_POLICIES` | Business policies and configuration |
| `05_REQUIREMENTS` | Derived product/functional requirements |
| `06_DDD` | Backend/domain design guidance |
| `07_DATABASE` | Data integrity and persistence guidance |
| `08_API` | API behavior and integration guidance |
| `09_UX_UI` | Frontend and UX behavior guidance |
| `10_SECURITY` | Permissions, access, audit and privacy |
| `11_DEVOPS` | Delivery/infrastructure guidance |
| `12_QA` | Rule and lifecycle validation |
| `13_ANALYTICS` | Reporting and analytics definitions |
| `14_DERIVED_VIEWS` | Non-authoritative consumer-specific shortcuts |
| `15_CHANGE_MANAGEMENT` | Approved decisions, cumulative changes, provenance and technical questions |

## Critical rule

A downstream technical document may **represent** Business Truth but may never create or override it. If a Business outcome is missing, do not infer it from API, DB, UX, QA or common practice.
