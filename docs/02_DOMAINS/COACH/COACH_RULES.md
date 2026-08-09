# Coach Rules

This file is the canonical rule definition file for the Coach domain.

## BR-COA-001

| Field | Value |
|---|---|
| Name | Approved Coach Assignment |
| Status | CONFIRMED-WITH-CONFIGURATION |
| Business Statement | A Coach may hold multiple explicit approved, qualification-checked, conflict-checked and effective-dated Branch and Sport assignments, each with history and audit. |
| Domain Owner | COACH |
| Trigger | Coach assignment/reassignment |
| Preconditions | Required identities and relationships are identifiable; actor authority and mandatory configuration are valid. |
| Validation | Evaluate this Rule, linked decision, lifecycle state and effective configuration before action. |
| Allowed Outcome | Apply only the stated outcome when all validations pass. |
| Rejection Outcome | Reject or hold with the violated Rule/configuration/authority reason; never partially or silently apply. |
| Exception Model | Only an explicitly approved, audited exception named in the authority/configuration artifacts. |
| Actor / Authority | Academy Admin or Branch-scoped assignment authority |
| Configuration Dependency | Qualification and conflict policy |
| Effective-Date Behavior | Apply from recorded effective date without rewriting historical records. |
| History / Audit | Preserve actor, time, reason, before/after values and approval/exception reference. |
| Related Decisions | BD-011 |
| Related Lifecycle / Journey | `COACH_LIFECYCLE.md`; relevant journey under `../../03_END_TO_END_JOURNEYS/` |
| Downstream Impact | Full chain is recorded in `../../05_REQUIREMENTS/DERIVATION_MAP.md`. |

## BR-COA-002

| Field | Value |
|---|---|
| Name | Future-Only Responsibility Change |
| Status | CONFIRMED |
| Business Statement | Coach reassignment, suspension or exit changes future Group/Session responsibility and never rewrites historical Groups, Sessions, Evaluations or assignments. |
| Domain Owner | COACH |
| Trigger | Coach suspension/exit/reassignment |
| Preconditions | Required identities and relationships are identifiable; actor authority and mandatory configuration are valid. |
| Validation | Evaluate this Rule, linked decision, lifecycle state and effective configuration before action. |
| Allowed Outcome | Apply only the stated outcome when all validations pass. |
| Rejection Outcome | Reject or hold with the violated Rule/configuration/authority reason; never partially or silently apply. |
| Exception Model | Only an explicitly approved, audited exception named in the authority/configuration artifacts. |
| Actor / Authority | Coach assignment/suspension authority |
| Configuration Dependency | None |
| Effective-Date Behavior | Apply from recorded effective date without rewriting historical records. |
| History / Audit | Preserve actor, time, reason, before/after values and approval/exception reference. |
| Related Decisions | BD-011 |
| Related Lifecycle / Journey | `COACH_LIFECYCLE.md`; relevant journey under `../../03_END_TO_END_JOURNEYS/` |
| Downstream Impact | Full chain is recorded in `../../05_REQUIREMENTS/DERIVATION_MAP.md`. |
