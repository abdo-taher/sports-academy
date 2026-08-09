# Frontend and UX View

> DERIVED VIEW — NOT A SOURCE OF BUSINESS TRUTH. Regenerated 2026-08-09.

## UX Contract

Use `09_UX_UI/CURRENT_RELEASE_UX_FLOW_CATALOG.md`. Every action must show current state, actor scope, permission, effective policy, consequences, rejection reason and resulting history.

| Flow | Required UX behavior |
|---|---|
| Lead/Trial/Enrollment | Keep Lead separate; show Trial optionality/bypass reason; collect Guardian requirements before minor enrollment. |
| Subscription/Payment | Show activation prerequisites, funding Plan, clearance state, expiry and remaining balance. |
| Attendance | Select/confirm exactly one eligible funding Subscription and explain any block. |
| Evaluation | Separate Coach recommendation from authorized approval/publication. |
| Freeze/Renewal/Transfer | Preview date, balance, access and assignment effects before approval. |
| Archive/Return | Show active-relationship review and make clear that Restore does not reactivate prior relationships. |

Frontend/UX consumer readiness: **READY**; configurable numeric fields must be sourced from configuration, not hard-coded.
