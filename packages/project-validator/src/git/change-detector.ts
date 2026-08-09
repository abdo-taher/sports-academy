import { spawnSync } from "node:child_process";

import type { PathClassification, ValidationConfig } from "../config/types.ts";
import type { ChangedFile, GitMode } from "../core/types.ts";
import { normalizePath } from "../core/files.ts";

export type ChangeDetection = {
  available: boolean;
  files: ChangedFile[];
  reason?: string;
};

const safeRef = /^[A-Za-z0-9._/-]+$/;

const parseNameStatus = (output: string): ChangedFile[] =>
  output
    .split("\n")
    .filter(Boolean)
    .map((line) => {
      const columns = line.split("\t");
      const rawStatus = columns[0] ?? "M";
      const renamed = rawStatus.startsWith("R");
      const path = columns[renamed ? 2 : 1] ?? columns[0] ?? "";
      const status = (renamed ? "R" : rawStatus[0]) as ChangedFile["status"];
      return { path: normalizePath(path.trim()), status };
    })
    .filter((item) => item.path.length > 0);

const parsePorcelain = (output: string): ChangedFile[] =>
  output
    .split("\n")
    .filter(Boolean)
    .map((line) => {
      const code = line.slice(0, 2);
      const rawPath = line.slice(3).split(" -> ").at(-1) ?? "";
      const status: ChangedFile["status"] = code === "??" ? "?" : code.includes("A") ? "A" : code.includes("D") ? "D" : code.includes("R") ? "R" : "M";
      return { path: normalizePath(rawPath), status };
    });

export const detectChanges = (root: string, mode: GitMode, baseRef?: string): ChangeDetection => {
  const probe = spawnSync("git", ["rev-parse", "--is-inside-work-tree"], { cwd: root, encoding: "utf8", shell: false });
  if (probe.status !== 0 || probe.stdout.trim() !== "true") {
    return { available: false, files: [], reason: "Git repository is not initialized for this ACTIVE workspace" };
  }

  let args: string[];
  if (mode === "working") args = ["status", "--porcelain=v1", "--untracked-files=all"];
  else if (mode === "staged") args = ["diff", "--name-status", "--cached"];
  else {
    const selectedRef = baseRef ?? "main";
    if (!safeRef.test(selectedRef)) return { available: false, files: [], reason: "Invalid baseRef" };
    args = ["diff", "--name-status", `${selectedRef}...HEAD`];
  }

  const diff = spawnSync("git", args, { cwd: root, encoding: "utf8", shell: false });
  if (diff.status !== 0) return { available: false, files: [], reason: diff.stderr.trim() || "Git change detection failed" };
  return { available: true, files: mode === "working" ? parsePorcelain(diff.stdout) : parseNameStatus(diff.stdout) };
};

export const classifyPath = (path: string, config: ValidationConfig): PathClassification => {
  const normalized = normalizePath(path);
  for (const [classification, prefixes] of Object.entries(config.pathOwnership)) {
    if ((prefixes ?? []).some((prefix) => normalized === prefix.replace(/\/$/, "") || normalized.startsWith(prefix))) {
      return classification as PathClassification;
    }
  }
  return "UNKNOWN";
};
