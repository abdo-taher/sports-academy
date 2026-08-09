import { existsSync } from "node:fs";
import { join } from "node:path";

import { readJson, readText } from "../core/files.ts";
import { finding, result } from "../core/result.ts";
import type { Finding, ValidationContext, ValidationResult } from "../core/types.ts";

export const validateTechStack = async (context: ValidationContext): Promise<ValidationResult> => {
  const startedAt = Date.now();
  const findings: Finding[] = [];
  const root = context.repositoryRoot;
  const lockPath = join(root, "docs/00_GOVERNANCE/TECH_STACK_LOCK.md");
  if (!existsSync(lockPath)) return result("TECH-001", "Technology Stack Lock is missing.", [finding({ severity: "BLOCKING", code: "TECH-LOCK-MISSING", message: "TECH_STACK_LOCK.md is required." })], startedAt);
  const lock = readText(lockPath);
  const technologies = [...context.config.approvedBackendTechnologies, ...context.config.approvedFrontendTechnologies, "Model Context Protocol", "stdio"];
  for (const technology of technologies) {
    if (!lock.toLowerCase().includes(technology.toLowerCase())) findings.push(finding({ severity: "BLOCKING", code: "TECH-LOCK-INCOMPLETE", message: `Approved technology is absent from TECH_STACK_LOCK: ${technology}`, file: "docs/00_GOVERNANCE/TECH_STACK_LOCK.md" }));
  }

  const packageJson = readJson<{ packageManager?: string; devDependencies?: Record<string, string>; engines?: Record<string, string> }>(join(root, "package.json"));
  const nodePin = readText(join(root, ".node-version")).trim();
  const nvmPin = readText(join(root, ".nvmrc")).trim().replace(/^v/, "");
  if (nodePin !== nvmPin || nodePin !== packageJson.engines?.node) findings.push(finding({ severity: "BLOCKING", code: "TECH-NODE-PIN", message: "Node pin differs across .node-version, .nvmrc and package.json.", file: "package.json" }));
  if (packageJson.devDependencies?.turbo !== "2.10.7") findings.push(finding({ severity: "BLOCKING", code: "TECH-TURBO-PIN", message: "Turborepo must remain pinned to 2.10.7.", file: "package.json" }));
  if (packageJson.devDependencies?.["@modelcontextprotocol/inspector"] !== "2.1.0") findings.push(finding({ severity: "BLOCKING", code: "TECH-MCP-INSPECTOR-PIN", message: "Official MCP Inspector must remain pinned to 2.1.0.", file: "package.json" }));
  const mcpPackage = readJson<{ dependencies?: Record<string, string> }>(join(root, "tools/validation-mcp/package.json"));
  if (mcpPackage.dependencies?.["@modelcontextprotocol/server"] !== "2.0.0") findings.push(finding({ severity: "BLOCKING", code: "TECH-MCP-SDK-PIN", message: "Official MCP TypeScript server SDK must remain pinned to 2.0.0.", file: "tools/validation-mcp/package.json" }));
  if (!readText(join(root, "pnpm-workspace.yaml")).includes('"tools/*"')) findings.push(finding({ severity: "BLOCKING", code: "TECH-WORKSPACE-TOOLS", message: "MCP tooling workspace is missing from pnpm-workspace.yaml.", file: "pnpm-workspace.yaml" }));

  return result("TECH-001", "Locked Backend, Frontend, monorepo and validation-interface technologies verified.", findings, startedAt, { technologies: technologies.length });
};
