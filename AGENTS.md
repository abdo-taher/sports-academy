# Sports Academy Platform — AI Agent Instructions

You are working inside the ACTIVE Sports Academy Platform repository.

Before any task:

1. Read `README.md`.
2. Read `TEAM_START_HERE.md`.
3. For Business or documentation questions, use `docs/00_GOVERNANCE/AI_START_HERE.md`.
4. Before modifying any repository content, read `docs/00_GOVERNANCE/AI_CHANGE_PROPAGATION_PROTOCOL.md`.

Before any implementation or technical-structure change, also read in order:

1. `docs/00_GOVERNANCE/TECH_STACK_LOCK.md`;
2. `docs/00_GOVERNANCE/ARCHITECTURE_RULES.md`;
3. `docs/00_GOVERNANCE/DEPENDENCY_RULES.md`;
4. `docs/00_GOVERNANCE/CODING_STANDARDS.md`;
5. `docs/00_GOVERNANCE/TESTING_STRATEGY.md`;
6. the relevant application `AGENTS.md`.

## Core Rules

- Business Truth lives in the canonical Business documentation.
- Business changes are BUSINESS FIRST, TECHNICAL SECOND.
- Never invent Business behavior.
- Never treat API, Database, UX, QA, code or Derived Views as superior to canonical Business Truth.
- Never make an isolated change when other active artifacts are affected.
- Use traceability and indexes to determine impact.
- Preserve required history and update the cumulative Change Log.
- Run a stale-document scan before declaring completion.
- Never use ARCHIVE as current authority.
- Use one approved technology, location and pattern for each concern.
- Never add a dependency merely for convenience or introduce a competing tool.
- If a request conflicts with the technology lock, stop and report `TECH STACK CONFLICT — ADR REQUIRED`.
- Run the deterministic validation flow below before declaring any repository modification complete.

## Deterministic Validation

Use the shared Sports Academy validator. If MCP is available, call `validate_changed_scope`; for major or mixed changes call `validate_all`. If MCP is unavailable, run `pnpm validate:changed` or `pnpm validate:all`. MCP availability is never required for repository correctness.

For a Business-affecting change:

1. complete the canonical Business documentation first;
2. run `validate_business`, then `validate_business_gate`;
3. do not continue to technical implementation while the Business Gate is `FAIL`;
4. after downstream work, run `validate_change_propagation` and `validate_changed_scope`;
5. fix blocking findings, rerun validation, and finish only on `PASS`.

For technical-only or UX-only work, classify Business impact explicitly and run the relevant changed-scope validation without creating meaningless Business edits. `VALIDATION_GOVERNANCE.md` defines blocking, warning, phase-aware, and manifest behavior.

## Questions

For read-only questions, follow the normal documentation routing and answer without modifying files.

## Changes

For any requested change, follow `docs/00_GOVERNANCE/AI_CHANGE_PROPAGATION_PROTOCOL.md`.

## Implementation

For implementation tasks, read the relevant Business Domain, Requirements, canonical technical governance and team-specific technical documentation before coding. Identify the Domain, Rules, Requirement, target app/module, approved technology and destination path before generating non-trivial code. Documentation-only requests do not authorize code changes.
