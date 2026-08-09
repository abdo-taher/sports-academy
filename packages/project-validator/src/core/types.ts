import type { ValidationConfig } from "../config/types.ts";

export type ValidationStatus = "PASS" | "FAIL" | "WARNING" | "SKIPPED";
export type FindingSeverity = "INFO" | "WARNING" | "ERROR" | "BLOCKING";
export type GitMode = "working" | "staged" | "branch-diff";

export type Finding = {
  severity: FindingSeverity;
  code: string;
  message: string;
  file?: string;
  line?: number;
  domain?: string;
  ruleId?: string;
  suggestedAction?: string;
  blocking: boolean;
};

export type ValidationResult = {
  validator: string;
  status: ValidationStatus;
  summary: string;
  findings: Finding[];
  metrics: Record<string, number>;
  duration: number;
};

export type ValidationReport = {
  name: string;
  status: ValidationStatus;
  summary: string;
  results: ValidationResult[];
  findings: Finding[];
  metrics: {
    blocking: number;
    warnings: number;
    validators: number;
    passed: number;
    skipped: number;
    duration: number;
  };
};

export type ChangedFile = {
  path: string;
  status: "A" | "M" | "D" | "R" | "?";
};

export type ValidationOptions = {
  repositoryRoot?: string;
  changeId?: string;
  gitMode?: GitMode;
  baseRef?: string;
  strict?: boolean;
  changedFiles?: ChangedFile[];
  config?: ValidationConfig;
};

export type ValidationContext = Required<Pick<ValidationOptions, "repositoryRoot" | "gitMode" | "strict">> &
  Omit<ValidationOptions, "repositoryRoot" | "gitMode" | "strict" | "config"> & {
    config: ValidationConfig;
    startedAt: number;
  };

export type ValidatorDefinition = {
  id: string;
  description: string;
  scope: string;
  blocking: boolean;
  execute: (context: ValidationContext) => Promise<ValidationResult>;
};
