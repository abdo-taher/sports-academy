#!/usr/bin/env node
import { StdioServerTransport } from "@modelcontextprotocol/server/stdio";

import { createValidationServer } from "./create-server.ts";

console.error("sports-academy-validator: starting MCP STDIO transport");
const server = createValidationServer();
const transport = new StdioServerTransport();
transport.onerror = (error) => console.error(`sports-academy-validator: ${error.message}`);
transport.onclose = () => console.error("sports-academy-validator: STDIO transport closed");
await server.connect(transport);

process.once("SIGINT", () => {
  void server.close().finally(() => process.exit(0));
});
