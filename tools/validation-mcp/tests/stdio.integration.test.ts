import assert from "node:assert/strict";
import { spawn, type ChildProcessWithoutNullStreams } from "node:child_process";
import { fileURLToPath } from "node:url";
import { join } from "node:path";
import test from "node:test";

type JsonRpcResponse = {
  id?: number;
  result?: Record<string, unknown>;
  error?: { code?: number; message?: string; data?: unknown };
};

const repositoryRoot = fileURLToPath(new URL("../../../", import.meta.url));
const mcpRoot = join(repositoryRoot, "tools", "validation-mcp");

class StdioTestClient {
  private readonly child: ChildProcessWithoutNullStreams;
  private readonly pending = new Map<number, {
    resolve: (response: JsonRpcResponse) => void;
    reject: (error: Error) => void;
    timeout: NodeJS.Timeout;
  }>();
  private nextId = 1;
  private stdoutBuffer = "";
  private stderrBuffer = "";

  constructor() {
    this.child = spawn("bash", ["stdio-bridge.sh"], {
      cwd: mcpRoot,
      shell: false,
      stdio: ["pipe", "pipe", "pipe"]
    });
    this.child.stderr.setEncoding("utf8");
    this.child.stderr.on("data", (chunk: string) => { this.stderrBuffer += chunk; });
    this.child.stdout.setEncoding("utf8");
    this.child.stdout.on("data", (chunk: string) => this.consume(chunk));
    this.child.once("exit", (code) => {
      if (this.pending.size === 0) return;
      const failure = new Error(`MCP server exited with code ${String(code)}. ${this.stderrBuffer}`);
      for (const request of this.pending.values()) {
        clearTimeout(request.timeout);
        request.reject(failure);
      }
      this.pending.clear();
    });
  }

  private consume(chunk: string): void {
    this.stdoutBuffer += chunk;
    for (;;) {
      const newline = this.stdoutBuffer.indexOf("\n");
      if (newline < 0) return;
      const line = this.stdoutBuffer.slice(0, newline).trim();
      this.stdoutBuffer = this.stdoutBuffer.slice(newline + 1);
      if (!line) continue;
      const response = JSON.parse(line) as JsonRpcResponse;
      if (typeof response.id !== "number") continue;
      const request = this.pending.get(response.id);
      if (!request) continue;
      clearTimeout(request.timeout);
      this.pending.delete(response.id);
      request.resolve(response);
    }
  }

  request(method: string, params: Record<string, unknown>): Promise<JsonRpcResponse> {
    const id = this.nextId++;
    return new Promise((resolve, reject) => {
      const timeout = setTimeout(() => {
        this.pending.delete(id);
        reject(new Error(`Timed out waiting for ${method}. ${this.stderrBuffer}`));
      }, 60_000);
      this.pending.set(id, { resolve, reject, timeout });
      this.child.stdin.write(`${JSON.stringify({ jsonrpc: "2.0", id, method, params })}\n`);
    });
  }

  notify(method: string, params: Record<string, unknown>): void {
    this.child.stdin.write(`${JSON.stringify({ jsonrpc: "2.0", method, params })}\n`);
  }

  async close(): Promise<void> {
    if (this.child.exitCode !== null) return;
    const exited = new Promise<void>((resolve) => this.child.once("exit", () => resolve()));
    this.child.stdin.end();
    const timeout = setTimeout(() => this.child.kill("SIGTERM"), 5_000);
    await exited;
    clearTimeout(timeout);
  }
}

test("real MCP STDIO server lists tools, rejects invalid input, and runs Business Gate", { timeout: 120_000 }, async () => {
  const client = new StdioTestClient();
  try {
    const initialized = await client.request("initialize", {
      protocolVersion: "2025-11-25",
      capabilities: {},
      clientInfo: { name: "sports-academy-stdio-integration", version: "1.0.0" }
    });
    assert.ok(initialized.result, initialized.error?.message);
    client.notify("notifications/initialized", {});

    const listed = await client.request("tools/list", {});
    const tools = listed.result?.tools as Array<{ name: string }>;
    assert.equal(tools.length, 15);
    assert.deepEqual(tools.map(({ name }) => name), [
      "validate_documentation", "validate_business", "validate_business_gate", "validate_change_propagation",
      "validate_repository_structure", "validate_tech_stack", "validate_dependencies", "validate_nestjs_architecture",
      "validate_frontend_architecture", "validate_database", "validate_api", "validate_tests", "validate_governance",
      "validate_changed_scope", "validate_all"
    ]);

    const invalid = await client.request("tools/call", {
      name: "validate_business_gate",
      arguments: { gitMode: "shell" }
    });
    const invalidText = JSON.stringify(invalid);
    assert.ok(invalid.error || invalid.result?.isError === true, invalidText);
    assert.doesNotMatch(invalidText, /node_modules|\bat\s+[^\s]+\.ts:\d+|stack trace/i);

    const valid = await client.request("tools/call", {
      name: "validate_business_gate",
      arguments: { repositoryRoot }
    });
    assert.ok(valid.result, valid.error?.message);
    const report = valid.result?.structuredContent as {
      status: string;
      results: Array<{ validator: string; metrics: Record<string, number> }>;
    };
    assert.equal(report.status, "PASS");
    const gate = report.results.find(({ validator }) => validator === "BUS-002");
    assert.ok(gate);
    assert.deepEqual(gate.metrics, {
      blockingFindings: 0,
      rules: 114,
      approvedDecisions: 40,
      openDecisions: 0
    });
  } finally {
    await client.close();
  }
});
