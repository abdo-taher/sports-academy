# Deterministic Validation Governance

## Purpose and authority

The Sports Academy validator is the permanent, read-only enforcement layer for documentation integrity, Business baselines, propagation evidence, repository structure, locked technology, dependency declarations, and initialized application architecture. It does not create Business Truth and never edits files, rewrites Rules, installs packages, executes arbitrary input, connects to production data, or applies migrations.

One engine lives in `packages/project-validator/`:

```text
MCP adapter ─┐
CLI ─────────┼─> Validator Core ─> standardized report
CI ──────────┘
```

The generic MCP server under `tools/validation-mcp/` exposes the engine to AI clients through local STDIO. Developers use `pnpm validate:*`. CI invokes the CLI/core directly and never requires an MCP host.

## Result contract

Every validator returns one `ValidationResult` with `validator`, `status`, `summary`, `findings`, `metrics`, and `duration`. Status is `PASS`, `FAIL`, `WARNING`, or `SKIPPED`. Findings use `INFO`, `WARNING`, `ERROR`, or `BLOCKING` and include stable code, location and remediation where available.

- `BLOCKING` fails validation and must be corrected or governed through an approved technical decision.
- `WARNING` identifies a conservative heuristic or review obligation; CLI exits zero unless `--strict` is used.
- `SKIPPED` means an implementation phase is not initialized or an optional evidence source is unavailable. It does not weaken baseline Business, governance, structure, or dependency checks.
- `INFO` records metrics or explicit limitations.

Deterministic parsing and AST checks prove structural, traceability, dependency, and integrity conditions. They cannot prove that all Business prose is semantically correct. Such limits are reported as `SEMANTIC REVIEW REQUIRED` or `MANUAL/AI REVIEW REQUIRED`, never as invented deterministic certainty.

## Business Gate

The certified baseline is 114 unique canonical Rule definitions, 40 approved current Decisions, and 0 open current Decisions. Archive/Legacy content is excluded from counts and prohibited as active navigation authority. For Business-affecting work, complete the canonical Business phase and run `validate_business` plus `validate_business_gate` before downstream implementation. A failed gate stops technical work.

## Changed scope and propagation

`validate_changed_scope` classifies Git paths through configured ownership and selects the relevant validators while always running the baseline governance, documentation/Business integrity, structure, stack, and dependency checks. If Git is unavailable, it safely runs all phase-applicable validators.

Meaningful changes use ignored working file `.change/current-change.json`. Every propagation layer must be `UPDATED` or `{ "status": "REVIEWED_NA", "reason": "..." }`; silently omitted layers fail. Permanent evidence remains one cumulative row in `docs/15_CHANGE_MANAGEMENT/CHANGE_LOG.md`. The working manifest may be removed after completion.

## CLI, MCP, and CI

- Everyday: `pnpm validate` or `pnpm validate:changed`.
- Business: `pnpm validate:business` and `pnpm validate:business-gate`.
- Major/pre-release: `pnpm validate:all`.
- MCP: use the equivalent named `validate_*` tool; handlers accept only typed options and expose no shell command input.
- CI: frozen install, typecheck, lint, full validation, and phase-appropriate tests on pull requests and protected pushes.

## Adding or changing a validator

1. Add deterministic logic to `packages/project-validator/src/validators/` and return the shared contract.
2. Register one unique ID, scope, description, blocking policy, and execution function in the core registry.
3. Add fixture tests for pass, fail, Archive exclusion, phase awareness, and false-positive boundaries.
4. Map the registered core validator through CLI/MCP without copying logic.
5. Update this document, the technology record, and Change Log when governance materially changes.

Normally prohibited technology requires an approved `TECH-ADR-XXX`. Any configured exception must name that ADR and give a reason; anonymous exceptions fail dependency governance. MCP remote transport, product integration, or a replacement validation architecture also requires an ADR.
