# Technical Decision Log

This log indexes technical architecture decisions only. It has no authority to change Business behavior. Full ADRs follow `docs/00_GOVERNANCE/TECH_DECISION_PROTOCOL.md`.

## Baseline

| Baseline ID | Date | Decision | Authority | Status |
|---|---|---|---|---|
| TECH-BASELINE-001 | 2026-08-09 | The approved technology, repository architecture and tooling rules are locked by the canonical technical governance set. | Explicit Technology Stack, Tooling & Architecture Lock directive; `CHG-TECH-001` | ACTIVE |
| TECH-BASELINE-002 | 2026-08-09 | One deterministic project-validator core is enforced through CLI and CI and exposed to AI tools through the official MCP TypeScript SDK v2 over local STDIO. | Explicit Validation Engine + MCP Server + CLI + CI directive; `CHG-TECH-VAL-001` | ACTIVE |

## ADR Register

| ADR ID | Date | Title | Status | Supersedes | Related Change ID | Record |
|---|---|---|---|---|---|---|
| TECH-ADR-001 | 2026-08-09 | Structured Logging | APPROVED | None | CHG-TECH-ADR-001 | `TECHNICAL_ADRS/TECH-ADR-001-structured-logging.md` |
| TECH-ADR-002 | 2026-08-10 | Backend Test Runner | APPROVED | None | CHG-TECH-ADR-002 | `TECHNICAL_ADRS/TECH-ADR-002-backend-test-runner.md` |
| TECH-ADR-003 | 2026-08-10 | Entity Identifier Strategy | APPROVED | None | CHG-TECH-ADR-003 | `TECHNICAL_ADRS/TECH-ADR-003-entity-identifier-strategy.md` |
| TECH-ADR-004 | 2026-08-10 | Monetary Representation | APPROVED | None | CHG-TECH-ADR-004 | `TECHNICAL_ADRS/TECH-ADR-004-monetary-representation.md` |
| TECH-ADR-005 | 2026-08-10 | RTK Evaluation and Safe Adoption Gate | APPROVED | None | CHG-TECH-RTK-001 | `TECHNICAL_ADRS/TECH-ADR-005-rtk-evaluation.md` |

The next unused ADR ID is `TECH-ADR-006`. IDs are never reused. `TECH-ADR-001` through `TECH-ADR-004` are approved. `TECH-ADR-005` has protocol-compatible status `APPROVED`, but its authority is explicitly limited to Option C and WP-RTK-02 only: preparation and controlled disposable observation of RTK v0.45.0 at immutable commit `b34be37caf3796b69a50952a28e60e32b5daad43` in a `sports-academy-${INSTANCE}-rtk-wp02` namespace. Evaluation execution is authorized; canonical adoption is not approved. It does not authorize ACTIVE-repository or normal-host installation, system-wide use, production use, Phase 1.5 closure, or WP-RTK-03 and later work.
