import { consolidate, result } from "../core/result.ts";
import type { ValidationContext, ValidationResult } from "../core/types.ts";
import { validateBusiness } from "./business.ts";
import { validateDocumentation } from "./documentation.ts";

export const validateBusinessGate = async (context: ValidationContext): Promise<ValidationResult> => {
  const startedAt = Date.now();
  const report = consolidate("Business prerequisites", await Promise.all([validateDocumentation(context), validateBusiness(context)]));
  const blocking = report.findings.filter((item) => item.blocking);
  return result(
    "BUS-002",
    blocking.length === 0 ? "BUSINESS GATE: PASS" : "BUSINESS GATE: FAIL",
    blocking,
    startedAt,
    { blockingFindings: blocking.length },
    blocking.length === 0 ? "PASS" : "FAIL"
  );
};
