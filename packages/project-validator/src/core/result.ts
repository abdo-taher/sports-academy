import type { Finding, ValidationReport, ValidationResult, ValidationStatus } from "./types.ts";

export const finding = (partial: Omit<Finding, "blocking"> & { blocking?: boolean }): Finding => ({
  ...partial,
  blocking: partial.blocking ?? partial.severity === "BLOCKING"
});

export const statusFromFindings = (findings: Finding[]): ValidationStatus => {
  if (findings.some((item) => item.blocking || item.severity === "BLOCKING")) return "FAIL";
  if (findings.some((item) => item.severity === "WARNING" || item.severity === "ERROR")) return "WARNING";
  return "PASS";
};

export const result = (
  validator: string,
  summary: string,
  findings: Finding[],
  startedAt: number,
  metrics: Record<string, number> = {},
  forcedStatus?: ValidationStatus
): ValidationResult => ({
  validator,
  status: forcedStatus ?? statusFromFindings(findings),
  summary,
  findings,
  metrics,
  duration: Date.now() - startedAt
});

export const skipped = (validator: string, summary: string, startedAt: number): ValidationResult =>
  result(validator, summary, [], startedAt, {}, "SKIPPED");

export const consolidate = (name: string, results: ValidationResult[]): ValidationReport => {
  const findings = results.flatMap((item) => item.findings);
  const hasFailure = results.some((item) => item.status === "FAIL");
  const hasWarning = results.some((item) => item.status === "WARNING");
  const status: ValidationStatus = hasFailure ? "FAIL" : hasWarning ? "WARNING" : "PASS";
  const blocking = findings.filter((item) => item.blocking).length;
  const warnings = findings.filter((item) => item.severity === "WARNING" || (!item.blocking && item.severity === "ERROR")).length;

  return {
    name,
    status,
    summary: `${name}: ${status} (${blocking} blocking, ${warnings} warnings)`,
    results,
    findings,
    metrics: {
      blocking,
      warnings,
      validators: results.length,
      passed: results.filter((item) => item.status === "PASS").length,
      skipped: results.filter((item) => item.status === "SKIPPED").length,
      duration: results.reduce((total, item) => total + item.duration, 0)
    }
  };
};
