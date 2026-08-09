import { consolidate, result } from "../core/result.ts";
import type { ValidationContext, ValidationResult } from "../core/types.ts";
import { validateBusiness } from "./business.ts";
import { validateDocumentation } from "./documentation.ts";

export const validateBusinessGate = async (context: ValidationContext): Promise<ValidationResult> => {
  const startedAt = Date.now();
  const [documentation, business] = await Promise.all([validateDocumentation(context), validateBusiness(context)]);
  const report = consolidate("Business prerequisites", [documentation, business]);
  const blocking = report.findings.filter((item) => item.blocking);
  return result(
    "BUS-002",
    blocking.length === 0 ? "BUSINESS GATE: PASS" : "BUSINESS GATE: FAIL",
    blocking,
    startedAt,
    {
      blockingFindings: blocking.length,
      rules: business.metrics.rules ?? 0,
      approvedDecisions: business.metrics.approvedDecisions ?? 0,
      openDecisions: business.metrics.openDecisions ?? 0
    },
    blocking.length === 0 ? "PASS" : "FAIL"
  );
};
