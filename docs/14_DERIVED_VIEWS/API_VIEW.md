# API View

> DERIVED VIEW — NOT A SOURCE OF BUSINESS TRUTH. Regenerated 2026-08-09.

## Current-Release Contract

Use `08_API/CURRENT_RELEASE_API_BEHAVIOR_CATALOG.md`. Its 20 capability contracts trace through `05_REQUIREMENTS/DERIVATION_MAP.md` to approved Decisions, Rules, permissions, persistence and QA.

| API concern | Required behavior |
|---|---|
| Commands | Validate actor, scope, permission, current state, effective configuration and idempotency. |
| Rejections | Return deterministic reason and preserve pre-command truth. |
| History | Record actor, timestamp, reason, effective date and before/after or compensating record. |
| Attendance | Require one eligible funding Subscription; block expiry, Freeze and insufficient balance. |
| Sensitive approvals | Enforce reviewer/approver separation and delegated scope where applicable. |
| Configuration | Resolve Academy default then approved more-specific override; never guess missing mandatory values. |

API consumer readiness: **READY** for implementation; production configuration remains an explicit deployment prerequisite.
