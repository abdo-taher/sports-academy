export type DecisionBaselineRange = {
  prefix: string;
  minimum: number;
  maximum: number;
};

export type AdrException = {
  dependency: string;
  adr: `TECH-ADR-${string}`;
  reason: string;
};

export type PathClassification =
  | "BUSINESS"
  | "REQUIREMENTS"
  | "DDD"
  | "DATABASE"
  | "API"
  | "UX"
  | "SECURITY"
  | "QA"
  | "ANALYTICS"
  | "DERIVED"
  | "BACKEND_CODE"
  | "FRONTEND_CODE"
  | "INFRASTRUCTURE"
  | "GOVERNANCE"
  | "TOOLING"
  | "UNKNOWN";

export type ValidationConfig = {
  activeDocumentationRoot: string;
  archivePaths: string[];
  canonicalBusinessPaths: string[];
  approvedRootDirectories: string[];
  approvedRootFiles: string[];
  expectedBusinessRuleCount: number;
  expectedApprovedDecisionCount: number;
  expectedOpenDecisionCount: number;
  decisionBaseline: DecisionBaselineRange[];
  approvedPackageManager: "pnpm";
  approvedFrontendTechnologies: string[];
  approvedBackendTechnologies: string[];
  prohibitedDependencies: string[];
  allowedExceptions: AdrException[];
  documentationIndexLocations: string[];
  requiredGovernanceFiles: string[];
  validationExclusions: string[];
  pathOwnership: Partial<Record<PathClassification, string[]>>;
  allowedRawFetchPaths: string[];
  changeManifestPath: string;
};
