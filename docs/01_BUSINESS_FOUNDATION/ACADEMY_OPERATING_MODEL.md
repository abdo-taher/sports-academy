# Academy Operating Model

## Classification

`BUSINESS_DECISION` — the platform uses a Hybrid academy/branch model.

## Business Structure

```text
Academy
  ↓
Branch
  ↓
Available Sport
  ↓
Available Program
  ↓
Service / Subscription Plan
  ↓
Student Subscription
  ↓
Level, Coach and Training Group
  ↓
Schedule, Session and Attendance
```

Program defines the training offering; Service/Subscription Plan packages it commercially; Student Subscription is the purchased instance. Branch Sport and Program availability must be explicit.

## Confirmed Business Facts

- The Academy is the organization that provides sports training services.
- The Academy may operate through Branches.
- A Branch represents an operating location of the Academy.
- Groups, coaches, students, schedules and payments can be associated with a Branch.
- A Sport has levels, evaluation models and training plans in the existing documentation.
- A Training Group has a sport, level, primary coach, schedule and students.
- The Hybrid model permits academy-level standards and branch-level operation.
- Current scope is one Academy with multiple Branches; independent Academy tenants are Future.
- Configuration uses Academy default and only approved more-specific overrides.

## Approved Business Boundaries

- Branch Sport availability follows BD-002/BR-BRA-001; Branch Program availability follows BD-006/BD-028/BR-BRA-003.
- Academy and Branch states follow BD-004.
- Branch Admin is an approved Branch-scoped role under BD-025.
- More-specific configuration exists only for items explicitly marked overrideable in the Policy Configuration Catalog.
- Numeric values and exact deployment role bindings are configuration, not open Business Decisions.

## Configuration Ownership Model

| Configuration Area | Known Business Need | Approved Scope |
|---|---|---|
| Academy identity | Name and general identity are configurable. | Academy |
| Branch identity | Each branch has its own operating identity/location. | Branch |
| Sports availability | Explicit Branch enablement. | Branch under Academy catalog |
| Programs | Academy offering plus explicit Branch enablement. | Academy definition; Branch availability |
| Levels | Sport-owned catalog and criteria. | Sport/Level configuration |
| Coaches | Multiple explicit Branch/Sport assignments allowed. | Branch and Academy assignment governance |
| Groups and schedules | Branch operation under Program/Sport/Level and calendar. | Branch |
| Pricing | Academy default; only explicitly approved Branch/Plan override. | Catalog-declared scope |
| Subscription policies | Plan may override only declared items. | Academy/Plan |
| Attendance policies | Core invariants fixed; evidence/timing may be configured. | Academy/Program where declared |
| Evaluation policies | Sport/Level criteria and Program frequency configuration. | Sport/Level/Program |
| Communication | Templates/preferences/retry as declared. | Academy/approved Branch |
| Reports | Academy-wide and Branch-scoped by role. | Both |

The full setting register is maintained in `../04_POLICIES/POLICY_CONFIGURATION_CATALOG.md`.

## Business Responsibility Boundary

- Academy Admin owns Academy-wide/cross-Branch governance.
- Branch Admin operates within explicit Branch scope and non-overridable Academy invariants.
- No downstream technical representation may redefine the business scope in this document.
- Missing deployment-specific role bindings are `IMPLEMENTATION CONFIGURATION REQUIRED` and follow the canonical authority matrix.

## Related Canonical Journeys

- `../02_DOMAINS/ACADEMY/ACADEMY_LIFECYCLE.md`
- `../02_DOMAINS/BRANCH/BRANCH_LIFECYCLE.md`
- `../02_DOMAINS/PROGRAM/PROGRAM_LIFECYCLE.md`
- `../03_END_TO_END_JOURNEYS/BUSINESS_LIFECYCLE_MAP.md`
