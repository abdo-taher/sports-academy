import assert from "node:assert/strict";
import test from "node:test";

import type { ValidationReport } from "@sports-academy/project-validator";

import { executeValidationTool, validationTools } from "../src/tools/register-validation-tools.ts";

const coreResult: ValidationReport = {
  name: "Fixture core",
  status: "PASS",
  summary: "Fixture core: PASS (0 blocking, 0 warnings)",
  results: [],
  findings: [],
  metrics: { blocking: 0, warnings: 0, validators: 0, passed: 0, skipped: 0, duration: 1 }
};

test("MCP exposes the exact 15 validation tools", () => {
  assert.equal(Object.keys(validationTools).length, 15);
  assert.deepEqual(Object.keys(validationTools), [
    "validate_documentation", "validate_business", "validate_business_gate", "validate_change_propagation",
    "validate_repository_structure", "validate_tech_stack", "validate_dependencies", "validate_nestjs_architecture",
    "validate_frontend_architecture", "validate_database", "validate_api", "validate_tests", "validate_governance",
    "validate_changed_scope", "validate_all"
  ]);
});

test("MCP tool returns the Validator Core human and structured result", async () => {
  const output = await executeValidationTool("validate_all", {}, async () => coreResult);
  assert.equal(output.structuredContent, coreResult);
  assert.match(output.content[0]?.text ?? "", /PASS/);
});

test("MCP invalid input returns a controlled schema error", async () => {
  await assert.rejects(() => executeValidationTool("validate_all", { gitMode: "shell" }, async () => coreResult), /Invalid option|invalid/i);
});
