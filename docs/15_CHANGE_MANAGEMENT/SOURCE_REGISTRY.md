# Source Registry

## Purpose

This registry records provenance and permitted use. It does not upgrade a draft, generated block, example or future idea into an approved business requirement.

| Source ID | Source | Origin | Classification | Verification Status | Permitted Use |
|---|---|---|---|---|---|
| SRC-001 | `source/Academy_Platform_Business_Documentation.md` | Supplied base documentation | `DRAFT_SOURCE` | Draft; no business-owner approval record found | Evidence for confirmed common statements; conflicts go to Open Questions |
| SRC-002 | `Sports Academy Business Blueprint 3b4ef05bfc208025a051da039cd307f8.md` | Preserved pre-split document | `LEGACY_SOURCE` | Duplicated and not independently approved | Provenance and historical comparison only |
| SRC-003 | Numbered `Chapter_*` files | Split or derived from the base documentation | `SUPPORTING_SOURCE` | Mixed draft, generated and technical content | Supporting evidence under the authority order in `../00_GOVERNANCE/SOURCE_OF_TRUTH.md` |
| SRC-004 | Content introduced by `smart_splitter.py` | Automated generation | `GENERATED_CONTENT` | Unverified | Structure or candidate wording only; generated decisions are not approved |
| SRC-005 | Content introduced by `enhance_docs.py` | Automated enhancement | `GENERATED_CONTENT` | Unverified | Navigation and technical illustration only; no business authority |
| SRC-006 | Content introduced by `fill_gaps.py` | Automated gap filling | `ASSUMPTION` | Unverified | Must remain quarantined until independently approved |
| SRC-007 | Content introduced by `add_branch_setup.py` | Automated branch additions | `ASSUMPTION` | Unverified | Must remain quarantined until independently approved |
| SRC-008 | Current master audit and closure directive | User instruction dated 2026-08-08 | `APPROVED_GOVERNANCE_DIRECTIVE` | Approved for documentation governance and the Hybrid Academy/Branch scope only | Governs this remediation; does not answer historical closed-question working material retained in the archive |
| SRC-009 | `DECISION_LOG.md` entries with status `APPROVED` | Recorded governance or business decision | `APPROVED_DECISION` | Approved only to the stated scope | May govern canonical documents; must not be generalized beyond its wording |
| SRC-010 | Business Source of Truth Agent Mission | User instruction dated 2026-08-08 | `APPROVED_GOVERNANCE_DIRECTIVE` | Approved for repository governance, derivation contract and Branch Sport availability rule | Governs v1.3.0 updates; approves BD-002 only for Branch Sport availability and does not close unrelated Open Questions |
| SRC-011 | Business Decision Closure and Traceability Mission | User instruction dated 2026-08-08 | `APPROVED_GOVERNANCE_DIRECTIVE` | Approved for decision packaging, dependency mapping, propagation protocol, derived views and traceability expansion | Governs v1.4.0 updates; does not approve answers to the 28 Open Questions |
| SRC-012 | Current State Handoff + Approved Decision Propagation Mission | Explicit client/Product Owner instruction dated 2026-08-09 | `APPROVED_BUSINESS_DECISION_SOURCE` | Approves the stated answers for all 28 registered Business OQs and the eight global invariants | Governs v1.5.0; authoritative input for BD-003 through BD-030 and their current-release propagation |
| SRC-013 | Business Coverage & AI Consumption Certification Mission | User audit directive dated 2026-08-09 | `APPROVED_GOVERNANCE_DIRECTIVE` | Authorizes stress testing, navigation/index improvements and gap reporting; approves no new Business behavior | Governs v1.6.0 certification evidence and `NBCG-001`–`NBCG-012`; does not reopen BD-003–BD-030 |
| SRC-014 | NBCG Business Gap Closure Mission | User governance directive dated 2026-08-09 | `APPROVED_GOVERNANCE_DIRECTIVE` | Authorized NBCG classification, neutral Type-C decision packs and Phase-1 retesting; approved no option at that phase | Historical v1.7.0 Phase-1 authority; superseded for approvals by SRC-015 |
| SRC-015 | Final Business Closure — NBCG + Social + Evaluation + Progression | Explicit client/Product Owner instruction dated 2026-08-09 | `APPROVED_BUSINESS_DECISION_SOURCE` | Delegates approval of NBCG-DEC-001–012 and explicitly approves current-scope Social Posts, Surveys, Session Feedback, Initial Placement and Stage/Level progression requirements | Governs v1.8.0 final Business closure and authorizes the selected NBCG outcomes plus new/revised canonical Rules |
| SRC-016 | Technology Stack, Tooling & Architecture Lock | Explicit user technical-governance directive dated 2026-08-09 | `APPROVED_TECHNICAL_GOVERNANCE_DIRECTIVE` | Approves the named stack, fixed architecture, dependency/test rules and ADR protocol; approves no Business behavior | Governs v1.9.0 technical baseline `TECH-BASELINE-001`; Business Rules and Decisions remain unchanged |
| SRC-017 | Validation Engine + MCP Server + CLI + CI Implementation | Explicit user technical-governance directive dated 2026-08-09 | `APPROVED_TECHNICAL_GOVERNANCE_DIRECTIVE` | Approves one deterministic validator core, official MCP TypeScript SDK v2 STDIO adapter, developer CLI and CI enforcement; approves no Business behavior | Governs v1.10.0 technical baseline `TECH-BASELINE-002` and `CHG-TECH-VAL-001`; Business Rules and Decisions remain unchanged |

## Registration Rules

- Every new external business source receives a Source ID, owner, date, classification and approval status before it changes canonical rules.
- A decision may cite one or more Source IDs, but evidence alone is not approval.
- Examples, recommendations, technical decisions and future considerations keep their classification even when repeated.
- If provenance cannot be established, classify the statement as `UNKNOWN_SOURCE` and add it to the gap register or open questions.
