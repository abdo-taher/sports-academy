# Codex Project Adapter

Codex uses the repository-root [`AGENTS.md`](../AGENTS.md) as the primary project instruction file.

Before work, follow:

1. [`AGENTS.md`](../AGENTS.md)
2. [`TEAM_START_HERE.md`](../TEAM_START_HERE.md)
3. [`docs/00_GOVERNANCE/AI_START_HERE.md`](../docs/00_GOVERNANCE/AI_START_HERE.md)

Before any modification, follow the single authoritative workflow:

[`docs/00_GOVERNANCE/AI_CHANGE_PROPAGATION_PROTOCOL.md`](../docs/00_GOVERNANCE/AI_CHANGE_PROPAGATION_PROTOCOL.md)

Before implementation, Codex must also follow the canonical [`Technology Stack Lock`](../docs/00_GOVERNANCE/TECH_STACK_LOCK.md), [`Architecture Rules`](../docs/00_GOVERNANCE/ARCHITECTURE_RULES.md), [`Dependency Rules`](../docs/00_GOVERNANCE/DEPENDENCY_RULES.md), [`Coding Standards`](../docs/00_GOVERNANCE/CODING_STANDARDS.md) and [`Testing Strategy`](../docs/00_GOVERNANCE/TESTING_STRATEGY.md). A conflict stops with `TECH STACK CONFLICT — ADR REQUIRED`.

## Deterministic validation

The project-scoped [`config.toml`](./config.toml) registers the read-only `sports-academy-validator` MCP server over local STDIO. Codex should call `validate_changed_scope` before completing modifications, `validate_all` for major/mixed changes, and `validate_business_gate` before technical implementation of Business-affecting work. If the MCP server is unavailable, use the equivalent `pnpm validate:*` command; repository correctness never depends on an AI client.

Codex loads project-scoped MCP configuration when the project is trusted. Start a new Codex session after changing this configuration so the newly registered server is discovered.

This adapter does not duplicate or redefine Business Truth or the change protocol. The project-local configuration does not select a model, weaken approvals, broaden filesystem access or enable network access.
