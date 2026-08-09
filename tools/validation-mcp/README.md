# Sports Academy Validation MCP

This generic MCP TypeScript SDK v2 server exposes the shared `@sports-academy/project-validator` core through local STDIO. It is repository tooling—not a product API, NestJS module, remote service, or production database client.

## Run and inspect

From `<PROJECT_ROOT>`:

```bash
pnpm mcp:validator
pnpm mcp:inspect
pnpm mcp:inspect:list
pnpm mcp:inspect:business-gate
pnpm mcp:inspect:invalid-input
```

STDIO protocol messages use stdout; diagnostics use stderr. Inspector v2 separates target arguments from Inspector options with `--`. The verified CLI commands launch the server through the fixed, argument-free `stdio-bridge.sh` adapter because Inspector 2.1.0 can close a directly spawned Node child pipe before initialization in managed terminals. The adapter's native relays preserve the protocol bytes and expose no command input.

`pnpm mcp:inspect:list` must return exactly 15 tools. `pnpm mcp:inspect:business-gate` runs the real Validator Core against this repository. `pnpm mcp:inspect:invalid-input` is expected to exit nonzero with a controlled `isError: true` response; it verifies rejection rather than successful validation.

## Client configuration

Codex uses the checked-in project-scoped `.codex/config.toml`. Generic JSON-based MCP clients can use this equivalent configuration (field names may vary by client):

```json
{
  "mcpServers": {
    "sports-academy-validator": {
      "command": "pnpm",
      "args": ["--dir", "<PROJECT_ROOT>", "mcp:validator"]
    }
  }
}
```

Do not copy secrets into MCP configuration. The server exposes only the documented read-only `validate_*` tools and accepts typed repository/change options, never arbitrary shell commands.
