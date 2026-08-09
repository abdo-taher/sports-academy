import { createContext } from "../config/load-config.ts";
import { classifyPath, detectChanges } from "../git/change-detector.ts";
import { consolidate } from "./result.ts";
import { allValidatorNames, validatorRegistry, type ValidatorName } from "./registry.ts";
import type { ChangedFile, ValidationOptions, ValidationReport } from "./types.ts";

const baselineValidators: ValidatorName[] = ["documentation", "business", "business-gate", "structure", "dependencies", "tech-stack", "governance"];

export const runValidators = async (names: readonly ValidatorName[], options: ValidationOptions = {}, reportName = "Sports Academy validation"): Promise<ValidationReport> => {
  const context = await createContext(options);
  const unique = [...new Set(names)];
  const results = [];
  for (const name of unique) results.push(await validatorRegistry[name].execute(context));
  return consolidate(reportName, results);
};

export const validateNamed = (name: ValidatorName, options: ValidationOptions = {}): Promise<ValidationReport> =>
  runValidators([name], options, validatorRegistry[name].description);

export const validateAll = (options: ValidationOptions = {}): Promise<ValidationReport> =>
  runValidators(allValidatorNames, options, "Sports Academy full validation");

const includesAny = (classes: Set<string>, values: string[]): boolean => values.some((value) => classes.has(value));

export const validateChangedScope = async (options: ValidationOptions = {}): Promise<ValidationReport> => {
  const context = await createContext(options);
  const detection = options.changedFiles
    ? { available: true, files: options.changedFiles as ChangedFile[] }
    : detectChanges(context.repositoryRoot, context.gitMode, context.baseRef);

  if (!detection.available) {
    return runValidators(allValidatorNames, { ...options, repositoryRoot: context.repositoryRoot, config: context.config }, "Sports Academy changed-scope validation (safe full fallback)");
  }

  const classes = new Set(detection.files.map((file) => classifyPath(file.path, context.config)));
  const selected = new Set<ValidatorName>([...baselineValidators, "propagation"]);
  if (includesAny(classes, ["BACKEND_CODE", "DDD"])) selected.add("nestjs");
  if (includesAny(classes, ["FRONTEND_CODE", "UX"])) selected.add("frontend");
  if (includesAny(classes, ["DATABASE", "BACKEND_CODE"])) selected.add("database");
  if (includesAny(classes, ["API", "BACKEND_CODE", "FRONTEND_CODE"])) selected.add("api");
  if (includesAny(classes, ["BACKEND_CODE", "FRONTEND_CODE", "QA"])) selected.add("tests");
  if (includesAny(classes, ["BUSINESS", "REQUIREMENTS", "DDD", "DATABASE", "API", "UX", "SECURITY", "QA", "ANALYTICS", "DERIVED"])) {
    selected.add("documentation");
    selected.add("business-gate");
  }

  return runValidators([...selected], { ...options, repositoryRoot: context.repositoryRoot, changedFiles: detection.files, config: context.config }, "Sports Academy changed-scope validation");
};
