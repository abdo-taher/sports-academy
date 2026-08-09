# Project Validator

The deterministic validation core shared by CLI, MCP, and CI. All actual rules live here and return the standardized result contract.

From the repository root, run `pnpm validate:changed` for everyday work, `pnpm validate:all` for a full pass, or a focused `pnpm validate:<scope>` command. Add `-- --json` for structured output and `-- --strict` to fail on warnings.

The engine is read-only. It may inspect files, TypeScript ASTs, direct package declarations, and allowlisted read-only Git commands. It never remediates findings.
