import type { Finding, ValidationReport } from "../core/types.ts";

const location = (item: Finding): string => item.file ? `${item.file}${item.line ? `:${item.line}` : ""}: ` : "";

export const formatReport = (report: ValidationReport): string => {
  const output = [`${report.status} — ${report.summary}`];
  for (const result of report.results) {
    output.push(`${result.status.padEnd(7)} ${result.validator} ${result.summary}`);
    for (const item of result.findings.filter((finding) => finding.severity !== "INFO")) {
      output.push(`  ${item.severity.padEnd(8)} ${item.code} ${location(item)}${item.message}`);
      if (item.suggestedAction) output.push(`           Action: ${item.suggestedAction}`);
    }
  }
  return output.join("\n");
};
