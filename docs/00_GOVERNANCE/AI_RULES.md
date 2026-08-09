# AI Agent Business Answer Rules

When a user asks a business question:

1. Route the question through `00_GOVERNANCE/BUSINESS_QUESTION_ROUTER.md`.
2. Read the primary Domain `README.md`.
3. Read the relevant canonical rules, lifecycle or model file.
4. Check `15_CHANGE_MANAGEMENT/DECISION_LOG.md`.
5. Check `15_CHANGE_MANAGEMENT/DECISION_LOG.md` for approved Business decisions and `15_CHANGE_MANAGEMENT/TECHNICAL_OPEN_QUESTIONS.md` only for non-business delivery questions.
6. Return exactly one of:
   - `APPROVED BUSINESS TRUTH`
   - `BUSINESS CONFIGURATION REQUIRED`
   - `BUSINESS DECISION REQUIRED` only for a genuinely new, governed gap
   - `FUTURE`
7. Cite canonical source path and Rule/Decision/OQ ID.

Do not use Derived Views or Legacy as authority.

Do not infer business behavior from database design, API examples, UX screens, generated values or legacy chapter metadata.

Branch Sport availability is approved by BD-002 and BR-BRA-001; do not reopen it.

All 28 registered current-scope Business Open Questions are closed by BD-003 through BD-030. A missing percentage, duration, amount, threshold, limit, fee, deadline or role binding governed by `04_POLICIES/POLICY_CONFIGURATION_CATALOG.md` is configuration—not permission to infer a value and not an Open Question.
