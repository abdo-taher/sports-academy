# Database View

> DERIVED VIEW — NOT A SOURCE OF BUSINESS TRUTH. Regenerated 2026-08-09.

## Integrity Contract

Use `07_DATABASE/CURRENT_RELEASE_DATA_INTEGRITY_MODEL.md` for the 20 current-release capability mappings.

| Integrity area | Required persistence |
|---|---|
| Identity | Separate Lead and Student identities with provenance-preserving duplicate resolution. |
| Hierarchy | Academy, Branch, Sport, Program, Service/Plan and explicit Branch availability. |
| Guardians | Many Guardians per Student, exactly one Primary for a minor, billing role separate. |
| Subscription finance | Immutable period links, Payment/clearance evidence, nonnegative balance, append/compensate ledger. |
| Attendance | Unique Student/Session record and exactly one funding Subscription reference. |
| Changes | Effective-dated Freeze, Renewal links, typed Transfers, assignments, delegation and configuration. |
| History | No destructive rewrite of prior Sessions, Payments, Attendance, Evaluations, assignments or archive history. |

Database consumer readiness: **READY**. Exact enum/storage choices remain technical decisions so long as these invariants hold.
