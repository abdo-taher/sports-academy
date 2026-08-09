import type { ValidationReport } from "@sports-academy/project-validator";

export type ValidationToolResult = {
  content: Array<{ type: "text"; text: string }>;
  structuredContent: ValidationReport;
};

export const toToolResult = (report: ValidationReport, formatted: string): ValidationToolResult => ({
  content: [{ type: "text", text: formatted }],
  structuredContent: report
});
