import { existsSync } from "node:fs";
import { join } from "node:path";

import { readJson } from "../core/files.ts";
import { finding, result, skipped } from "../core/result.ts";
import type { ChangedFile, ValidationContext, ValidationResult } from "../core/types.ts";
import { detectChanges } from "../git/change-detector.ts";

const isCode = (path: string): boolean => /^(?:apps|packages)\/.+\.tsx?$/.test(path) && !/(?:\.spec\.|\.test\.|\/tests?\/)/.test(path);
const isBusinessUseCase = (path: string): boolean => /\/modules\/[^/]+\/(?:domain|application)\//.test(path) || /\.use-case\.ts$/.test(path);
const isTest = (path: string): boolean => /(?:\.spec\.|\.test\.|\/tests?\/)/.test(path);

export const validateTests = async (context: ValidationContext): Promise<ValidationResult> => {
  const startedAt = Date.now();
  const detection = context.changedFiles ? { available: true, files: context.changedFiles } : detectChanges(context.repositoryRoot, context.gitMode, context.baseRef);
  if (!detection.available) return skipped("TEST-001", "SKIPPED — TEST IMPACT DIFF UNAVAILABLE (GIT NOT INITIALIZED)", startedAt);
  const changes: ChangedFile[] = detection.files;
  const code = changes.filter((item) => isCode(item.path));
  if (code.length === 0) return result("TEST-001", "No changed implementation files require test-impact review.", [], startedAt, { changedCode: 0 });
  const tests = changes.filter((item) => isTest(item.path));
  const manifestPath = join(context.repositoryRoot, context.config.changeManifestPath);
  let manifestReviewed = false;
  if (existsSync(manifestPath)) {
    try {
      const manifest = readJson<{ layers?: { tests?: unknown } }>(manifestPath);
      const review = manifest.layers?.tests;
      manifestReviewed = typeof review === "object" && review !== null && "status" in review && "reason" in review && review.status === "REVIEWED_NA" && typeof review.reason === "string" && review.reason.trim().length >= 5;
    } catch {
      manifestReviewed = false;
    }
  }
  const findings = tests.length === 0 && !manifestReviewed
    ? [finding({ severity: "WARNING", code: "TEST-IMPACT-REVIEW", message: "TEST IMPACT REVIEW REQUIRED — implementation changed without a related test change or recorded coverage justification.", file: code.map((item) => item.path).join(", "), blocking: false })]
    : [];
  if (code.some((item) => isBusinessUseCase(item.path)) && tests.length === 0) findings.push(finding({ severity: "WARNING", code: "TEST-BUSINESS-RULE-TRACEABILITY", message: "Changed Domain/use-case code requires confirmation of Business Rule test traceability.", blocking: false }));
  return result("TEST-001", `Test-impact review: ${code.length} code file(s), ${tests.length} test file(s).`, findings, startedAt, { changedCode: code.length, changedTests: tests.length, manifestCoverageReviews: manifestReviewed ? 1 : 0 });
};
