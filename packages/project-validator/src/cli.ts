#!/usr/bin/env node
import { allValidatorNames, formatReport, validateAll, validateChangedScope, validateNamed, type GitMode, type ValidatorName } from "./index.ts";

const usage = `Sports Academy validator
Usage: pnpm validate:<scope> -- [options]
Scopes: ${allValidatorNames.join(", ")}, changed, all
Options:
  --repository-root <path>  Repository root (defaults to current project)
  --change-id <id>          Expected governed Change ID
  --git-mode <mode>         working | staged | branch-diff
  --base-ref <ref>          Safe Git base ref for branch-diff
  --strict                  Exit non-zero for warnings as well as failures
  --json                    Emit machine-readable JSON
  --help                    Show this help`;

const argv = process.argv.slice(2);
const command = argv.shift();
let repositoryRoot: string | undefined;
let changeId: string | undefined;
let gitMode: GitMode | undefined;
let baseRef: string | undefined;
let strict = false;
let json = false;

const takeValue = (flag: string): string => {
  const value = argv.shift();
  if (!value || value.startsWith("--")) throw new Error(`${flag} requires a value`);
  return value;
};

try {
  while (argv.length > 0) {
    const flag = argv.shift();
    if (flag === "--") continue;
    else if (flag === "--repository-root") repositoryRoot = takeValue(flag);
    else if (flag === "--change-id") changeId = takeValue(flag);
    else if (flag === "--base-ref") baseRef = takeValue(flag);
    else if (flag === "--git-mode") {
      const value = takeValue(flag);
      if (!["working", "staged", "branch-diff"].includes(value)) throw new Error(`Invalid --git-mode: ${value}`);
      gitMode = value as GitMode;
    } else if (flag === "--strict") strict = true;
    else if (flag === "--json") json = true;
    else if (flag === "--help") {
      console.log(usage);
      process.exit(0);
    } else throw new Error(`Unknown option: ${flag}`);
  }

  if (!command || command === "--help") {
    console.log(usage);
    process.exit(command ? 0 : 2);
  }

  const options = { repositoryRoot, changeId, gitMode, baseRef, strict };
  const report = command === "all"
    ? await validateAll(options)
    : command === "changed"
      ? await validateChangedScope(options)
      : allValidatorNames.includes(command as ValidatorName)
        ? await validateNamed(command as ValidatorName, options)
        : undefined;
  if (!report) throw new Error(`Unknown validation scope: ${command}`);
  console.log(json ? JSON.stringify(report, null, 2) : formatReport(report));
  process.exitCode = report.status === "FAIL" || (strict && report.status === "WARNING") ? 1 : 0;
} catch (error) {
  const message = error instanceof Error ? error.message : String(error);
  if (json) console.log(JSON.stringify({ status: "FAIL", error: message }));
  else console.error(`FAIL — ${message}\n\n${usage}`);
  process.exitCode = 2;
}
