import type { McpServer } from "@modelcontextprotocol/server";
import {
  formatReport,
  validateAll,
  validateChangedScope,
  validateNamed,
  type GitMode,
  type ValidationOptions,
  type ValidationReport,
  type ValidatorName
} from "@sports-academy/project-validator";
import { z } from "zod";

import { toToolResult } from "../adapters/tool-result.ts";

export const validationInputSchema = z.object({
  repositoryRoot: z.string().min(1).optional().describe("Repository root; defaults to the server working directory."),
  changeId: z.string().min(1).optional().describe("Governed Change ID when one is active."),
  gitMode: z.enum(["working", "staged", "branch-diff"]).optional().describe("Change-detection mode."),
  baseRef: z.string().regex(/^[A-Za-z0-9._/-]+$/).optional().describe("Safe Git base ref for branch-diff."),
  strict: z.boolean().optional().describe("Treat warnings as an enforcement failure in the caller.")
});

const findingSchema = z.object({
  severity: z.enum(["INFO", "WARNING", "ERROR", "BLOCKING"]),
  code: z.string(),
  message: z.string(),
  file: z.string().optional(),
  line: z.number().optional(),
  domain: z.string().optional(),
  ruleId: z.string().optional(),
  suggestedAction: z.string().optional(),
  blocking: z.boolean()
});

const resultSchema = z.object({
  validator: z.string(),
  status: z.enum(["PASS", "FAIL", "WARNING", "SKIPPED"]),
  summary: z.string(),
  findings: z.array(findingSchema),
  metrics: z.record(z.string(), z.number()),
  duration: z.number()
});

export const validationOutputSchema = z.object({
  name: z.string(),
  status: z.enum(["PASS", "FAIL", "WARNING", "SKIPPED"]),
  summary: z.string(),
  results: z.array(resultSchema),
  findings: z.array(findingSchema),
  metrics: z.object({
    blocking: z.number(),
    warnings: z.number(),
    validators: z.number(),
    passed: z.number(),
    skipped: z.number(),
    duration: z.number()
  })
});

export type ValidationToolInput = z.infer<typeof validationInputSchema>;
export type ValidationExecutor = (input: ValidationToolInput) => Promise<ValidationReport>;

type ToolDefinition = {
  description: string;
  execute: ValidationExecutor;
};

const named = (name: ValidatorName): ValidationExecutor => (input) => validateNamed(name, input as ValidationOptions);

export const validationTools: Record<string, ToolDefinition> = {
  validate_documentation: { description: "Validate active documentation links, indexes, and authority boundaries.", execute: named("documentation") },
  validate_business: { description: "Validate the canonical Business Rule and approved Decision baselines.", execute: named("business") },
  validate_business_gate: { description: "Block downstream work when Business prerequisites fail.", execute: named("business-gate") },
  validate_change_propagation: { description: "Validate the governed change manifest and every propagation layer.", execute: named("propagation") },
  validate_repository_structure: { description: "Validate repository layout, lockfiles, and workspace invariants.", execute: named("structure") },
  validate_tech_stack: { description: "Validate the locked technology stack and runtime pins.", execute: named("tech-stack") },
  validate_dependencies: { description: "Reject prohibited or unapproved direct dependencies.", execute: named("dependencies") },
  validate_nestjs_architecture: { description: "Validate NestJS modular-monolith and DDD boundaries when the API exists.", execute: named("nestjs") },
  validate_frontend_architecture: { description: "Validate Next.js App Router and feature boundaries when the web app exists.", execute: named("frontend") },
  validate_database: { description: "Validate PostgreSQL/Prisma ownership and migration safety when present.", execute: named("database") },
  validate_api: { description: "Validate REST/OpenAPI/controller boundaries when the API exists.", execute: named("api") },
  validate_tests: { description: "Validate test impact for changed implementation files.", execute: named("tests") },
  validate_governance: { description: "Validate canonical governance entry points and AI routing.", execute: named("governance") },
  validate_changed_scope: { description: "Run deterministic validation selected from changed paths, with a safe full fallback.", execute: (input) => validateChangedScope(input as ValidationOptions) },
  validate_all: { description: "Run the full deterministic Sports Academy validation suite.", execute: (input) => validateAll(input as ValidationOptions) }
};

export const executeValidationTool = async (name: string, rawInput: unknown, executor?: ValidationExecutor) => {
  const input = validationInputSchema.parse(rawInput);
  const definition = validationTools[name];
  const selected = executor ?? definition?.execute;
  if (!selected) throw new Error(`Unknown validation tool: ${name}`);
  const report = await selected(input);
  return toToolResult(report, formatReport(report));
};

export const registerValidationTools = (server: McpServer): void => {
  for (const [name, definition] of Object.entries(validationTools)) {
    server.registerTool(
      name,
      {
        title: name.replaceAll("_", " "),
        description: definition.description,
        inputSchema: validationInputSchema,
        outputSchema: validationOutputSchema,
        annotations: { readOnlyHint: true, destructiveHint: false, idempotentHint: true, openWorldHint: false }
      },
      (input) => executeValidationTool(name, input)
    );
  }
};
