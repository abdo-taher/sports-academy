# Sports Academy Validation MCP

This generic MCP TypeScript SDK v2 server exposes the shared `@sports-academy/project-validator` core through local STDIO. It is repository tooling—not a product API, NestJS module, remote service, or production database client.

## Run and inspect

From `<PROJECT_ROOT>`:

```bash
pnpm mcp:validator
pnpm mcp:inspect
pnpm mcp:inspect:list
```

STDIO protocol messages use stdout; diagnostics use stderr. Inspector v2 separates target arguments from Inspector options with `--`; `pnpm mcp:inspect:list` contains the current supported non-interactive form. The Inspector can exercise tool listing, schemas, valid tool calls, and controlled invalid-input responses without any AI client.

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
