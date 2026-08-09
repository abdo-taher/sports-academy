import { existsSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { pathToFileURL } from "node:url";

import type { ValidationConfig } from "./types.ts";
import type { ValidationContext, ValidationOptions } from "../core/types.ts";

const hasProjectMarker = (directory: string): boolean =>
  existsSync(join(directory, "validation.config.ts")) && existsSync(join(directory, "package.json"));

export const findRepositoryRoot = (start = process.cwd()): string => {
  let current = resolve(start);
  while (true) {
    if (hasProjectMarker(current)) return current;
    const parent = dirname(current);
    if (parent === current) throw new Error(`Sports Academy repository root not found from ${start}`);
    current = parent;
  }
};

export const loadValidationConfig = async (root: string): Promise<ValidationConfig> => {
  const configPath = join(root, "validation.config.ts");
  if (!existsSync(configPath)) throw new Error(`validation.config.ts not found under ${root}`);
  const module = (await import(`${pathToFileURL(configPath).href}?validation=${Date.now()}`)) as { default?: ValidationConfig };
  if (!module.default) throw new Error("validation.config.ts must export a default configuration");
  return module.default;
};

export const createContext = async (options: ValidationOptions = {}): Promise<ValidationContext> => {
  const repositoryRoot = findRepositoryRoot(options.repositoryRoot ?? process.cwd());
  const config = options.config ?? (await loadValidationConfig(repositoryRoot));
  return {
    repositoryRoot,
    config,
    gitMode: options.gitMode ?? "working",
    strict: options.strict ?? false,
    changeId: options.changeId,
    baseRef: options.baseRef,
    changedFiles: options.changedFiles,
    startedAt: Date.now()
  };
};
