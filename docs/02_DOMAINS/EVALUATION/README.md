# Evaluation Domain

## Business Completeness

`BUSINESS READY WITH CONFIGURATION REQUIRED` — The domain business model is approved. Any remaining percentages, amounts, durations, limits, thresholds, deadlines, role bindings or catalog values are governed configuration and are not open client Business Decisions.

## Definition

A recorded assessment of Student performance.

## Business Purpose

Supports level recommendation, progress tracking and parent/admin visibility.

## Ownership

A Coach records Official Evaluations under BD-012; for Initial Placement only, a specifically authorized Admin/Evaluator may also record. Supervisor or specifically authorized placement approver reviews/approves and an authorized actor publishes.

## Core Relationships

```text
Evaluation → Student → Sport/Program → Stage → Level → Evaluator → Approver → Parent visibility
```

## Approved States

Evaluation approval/publication follows BD-012 and the explicit lifecycle transition table.

## Core Rules

- [BR-EVA-001](./EVALUATION_RULES.md#br-eva-001) — Each Sport may use a different Evaluation model.
- [BR-EVA-002](./EVALUATION_RULES.md#br-eva-002) — Periodic Evaluation scheduling is configurable by authorized administration.
- [BR-EVA-003](./EVALUATION_RULES.md#br-eva-003) — An approved Evaluation is not deleted or overwritten; a correction preserves the earlier version.
- [BR-EVA-004](./EVALUATION_RULES.md#br-eva-004) — Official Evaluation uses creator/reviewer separation and required approval before publication.
- [BR-EVA-007](./EVALUATION_RULES.md#br-eva-007) — Session Feedback is distinct from Official Evaluation and explicitly classified for visibility.
- [BR-EVA-008](./EVALUATION_RULES.md#br-eva-008) — comments are append-only and never overwrite an official result.
- [BR-EVA-009](./EVALUATION_RULES.md#br-eva-009) — system Level recommendation is advisory and final placement is human-approved.

## Main Lifecycles

- [`EVALUATION_LIFECYCLE.md`](./EVALUATION_LIFECYCLE.md)
- [`SESSION_FEEDBACK.md`](./SESSION_FEEDBACK.md)
- [`../SPORT/STAGE_LEVEL_MODEL.md`](../SPORT/STAGE_LEVEL_MODEL.md)

## Main Processes

- See the lifecycle file for process sequence, validations, exceptions, audit, timeline/history and cross-domain effects.

## Related Policies

- [`EVALUATION_POLICIES.md`](../../04_POLICIES/EVALUATION_POLICIES.md) where a policy file exists.

## Approved Business Decisions

- BD-012 — approved; see Decision Log and linked canonical Rules.
- BD-013 — approved; see Decision Log and linked canonical Rules.
- BD-009 — approved; see Decision Log and linked canonical Rules.

## Downstream References

- Requirements: `../../05_REQUIREMENTS/`
- DDD: `../../06_DDD/`
- Database: `../../07_DATABASE/`
- API: `../../08_API/`
- UX/UI: `../../09_UX_UI/`
- QA: `../../12_QA/`
