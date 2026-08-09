# Backend Implementation View

> DERIVED VIEW — NOT A SOURCE OF BUSINESS TRUTH. Regenerated 2026-08-09.

## Implementation Contract

Use `06_DDD/CURRENT_RELEASE_DOMAIN_MODEL.md`, `07_DATABASE/CURRENT_RELEASE_DATA_INTEGRITY_MODEL.md`, `08_API/CURRENT_RELEASE_API_BEHAVIOR_CATALOG.md` and `05_REQUIREMENTS/DERIVATION_MAP.md`.

| Command family | Approved boundary |
|---|---|
| Enrollment | Lead is separate; optional Trial follows policy; Student is created at formal enrollment before Subscription. |
| Activation | Full Payment or compliant approved installment/debt plan; audited manual exception only. |
| Attendance | Active, paid/cleared, not frozen, unexpired Subscription with sufficient balance; exactly one funding source. |
| Evaluation | Coach creates; Supervisor or authorized Admin approves/publishes; recommendation and decision are separate. |
| Freeze/Renewal | Freeze extends expiry; Renewal creates a new linked Subscription; carry-over follows Plan policy and provenance ledger. |
| Transfer/Archive | Typed transfer effects are effective-dated; Archive and Restore each require review and preserve history. |

Backend consumer readiness: **READY**. Missing numeric thresholds are typed configuration inputs, not design guesses.
