# QA View

> DERIVED VIEW — NOT A SOURCE OF BUSINESS TRUTH. Regenerated 2026-08-09.

## QA Contract

Use `12_QA/CURRENT_RELEASE_RULE_QA_SCENARIOS.md` and `05_REQUIREMENTS/DERIVATION_MAP.md`.

- 92/92 canonical Rules have a linked QA scenario.
- Every scenario defines a valid path and an inverse/bypass/invalid-state or unauthorized negative path.
- Permission, scope, effective-date boundary, before/after history and applicable concurrency/idempotency are required.
- Financial and Attendance corrections verify compensating records and nonnegative balances.
- Future-only capabilities must fail current-release exposure tests.

QA consumer readiness: **READY**. Test data must include the configured values active for the tested scope/date.
