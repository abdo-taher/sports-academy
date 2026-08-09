import { existsSync } from "node:fs";
import { join } from "node:path";

import { readJson, readText } from "../core/files.ts";
import { finding, result, skipped } from "../core/result.ts";
import type { ChangedFile, Finding, ValidationContext, ValidationResult } from "../core/types.ts";
import { classifyPath, detectChanges } from "../git/change-detector.ts";

type LayerReview = "UPDATED" | { status: "REVIEWED_NA"; reason: string };
type ChangeManifest = {
  changeId: string;
  type: "BUSINESS" | "CONFIGURATION" | "UX" | "TECHNICAL" | "DOCUMENTATION";
  primaryDomain: string;
  affectedRules: string[];
  layers: Record<string, LayerReview>;
};

const reviewLayers = ["business", "requirements", "ddd", "database", "api", "frontend", "security", "qa", "analytics", "derived", "clientBrd", "infrastructure", "governance", "tests"];

const validReview = (review: LayerReview | undefined): boolean =>
  review === "UPDATED" || (typeof review === "object" && review.status === "REVIEWED_NA" && review.reason.trim().length >= 5);

export const validateChangePropagation = async (context: ValidationContext): Promise<ValidationResult> => {
  const startedAt = Date.now();
  const root = context.repositoryRoot;
  const manifestPath = join(root, context.config.changeManifestPath);
  const detection = context.changedFiles ? { available: true, files: context.changedFiles } : detectChanges(root, context.gitMode, context.baseRef);
  const changedFiles: ChangedFile[] = detection.files;
  const meaningful = changedFiles.filter((item) => !item.path.startsWith(".validation/") && item.path !== context.config.changeManifestPath);

  if (!existsSync(manifestPath)) {
    if (!detection.available) return skipped("PROP-001", "Propagation validation skipped — no Git repository and no active change manifest.", startedAt);
    if (meaningful.length === 0) return result("PROP-001", "No meaningful changed files require propagation review.", [], startedAt, { changedFiles: 0 });
    return result("PROP-001", "Change propagation is incomplete.", [finding({ severity: "BLOCKING", code: "PROP-MANIFEST-MISSING", message: "Meaningful repository changes require .change/current-change.json during active validation.", file: context.config.changeManifestPath, suggestedAction: "Record each layer as UPDATED or REVIEWED_NA with a reason; remove the working manifest after governed completion." })], startedAt, { changedFiles: meaningful.length });
  }

  let manifest: ChangeManifest;
  try {
    manifest = readJson<ChangeManifest>(manifestPath);
  } catch (error) {
    return result("PROP-001", "Change manifest is invalid.", [finding({ severity: "BLOCKING", code: "PROP-MANIFEST-INVALID", message: error instanceof Error ? error.message : String(error), file: context.config.changeManifestPath })], startedAt);
  }

  const findings: Finding[] = [];
  if (!/^CHG-[A-Z0-9-]+$/.test(manifest.changeId)) findings.push(finding({ severity: "BLOCKING", code: "PROP-CHANGE-ID", message: "Change manifest has an invalid Change ID.", file: context.config.changeManifestPath }));
  if (context.changeId && context.changeId !== manifest.changeId) findings.push(finding({ severity: "BLOCKING", code: "PROP-CHANGE-ID-MISMATCH", message: `Requested Change ID ${context.changeId} does not match manifest ${manifest.changeId}.`, file: context.config.changeManifestPath }));
  for (const layer of reviewLayers) {
    if (!validReview(manifest.layers[layer])) findings.push(finding({ severity: "BLOCKING", code: "PROP-LAYER-IGNORED", message: `Layer ${layer} must be UPDATED or REVIEWED_NA with a reason.`, file: context.config.changeManifestPath }));
  }

  const changedClasses = new Set(meaningful.map((item) => classifyPath(item.path, context.config)));
  if (changedClasses.has("BUSINESS") && !["BUSINESS", "CONFIGURATION"].includes(manifest.type)) findings.push(finding({ severity: "BLOCKING", code: "PROP-BUSINESS-CLASSIFICATION", message: "Canonical Business paths changed but the manifest is not BUSINESS or CONFIGURATION.", file: context.config.changeManifestPath }));
  if (manifest.type === "BUSINESS") {
    if (manifest.affectedRules.length === 0) findings.push(finding({ severity: "BLOCKING", code: "PROP-RULES-MISSING", message: "A BUSINESS change must identify affected Rule IDs.", file: context.config.changeManifestPath }));
    if (manifest.layers.business !== "UPDATED") findings.push(finding({ severity: "BLOCKING", code: "PROP-BUSINESS-NOT-UPDATED", message: "A BUSINESS change must mark the Business layer UPDATED.", file: context.config.changeManifestPath }));
  }
  if (manifest.type === "UX" && manifest.layers.frontend !== "UPDATED") findings.push(finding({ severity: "BLOCKING", code: "PROP-UX-NOT-UPDATED", message: "A UX change must mark frontend UPDATED.", file: context.config.changeManifestPath }));

  const changeLog = join(root, "docs/15_CHANGE_MANAGEMENT/CHANGE_LOG.md");
  if (!existsSync(changeLog) || !readText(changeLog).includes(`| ${manifest.changeId} |`)) findings.push(finding({ severity: "BLOCKING", code: "PROP-CHANGE-LOG", message: `Cumulative Change Log does not contain ${manifest.changeId}.`, file: "docs/15_CHANGE_MANAGEMENT/CHANGE_LOG.md" }));

  return result("PROP-001", `Propagation review for ${manifest.changeId}: ${findings.length === 0 ? "complete" : "incomplete"}.`, findings, startedAt, { layersReviewed: reviewLayers.filter((layer) => validReview(manifest.layers[layer])).length, changedFiles: meaningful.length });
};
