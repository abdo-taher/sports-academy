import { McpServer } from "@modelcontextprotocol/server";

import { registerValidationTools } from "./tools/register-validation-tools.ts";

export const createValidationServer = (): McpServer => {
  console.error("sports-academy-validator: MCP client connection accepted");
  const server = new McpServer(
    { name: "sports-academy-validator", version: "0.1.0" },
    { instructions: "Read-only deterministic validation for the Sports Academy ACTIVE repository. Run validate_business_gate before downstream implementation and validate_changed_scope before handoff." }
  );
  registerValidationTools(server);
  return server;
};
