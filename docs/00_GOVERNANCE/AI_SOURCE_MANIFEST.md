# AI Source Manifest

> NON-AUTHORITATIVE INDEX — CANONICAL SOURCE FILES REMAIN THE BUSINESS TRUTH

This manifest is enumeration/routing metadata only. It does not copy Rule statements or close coverage gaps.

NBCG-001–NBCG-012 are **APPROVED AND PROPAGATED**. Route closure provenance through `DECISION_LOG.md` and current behavior through owning canonical Rules.

| Domain / capability | Canonical concept source | Rule IDs | Decision IDs | Lifecycle | Policy / configuration | Scope | Authority level |
|---|---|---|---|---|---|---|---|
| Academy | `../02_DOMAINS/ACADEMY/README.md` | BR-ACA-001–002; BR-GOV-001–003; BR-SCP-001 | BD-003–005; BD-027 | `ACADEMY_LIFECYCLE.md` | Academy defaults; authority matrix | Current | Canonical business |
| Branch | `../02_DOMAINS/BRANCH/README.md` | BR-BRA-001–004 | BD-002; BD-004–006; BD-028 | `BRANCH_LIFECYCLE.md` | CFG-PRG-001; permitted overrides | Current | Canonical business |
| Sport | `../02_DOMAINS/SPORT/README.md` | BR-SPT-001; BR-LVL-001–003; BR-BRA-001 | BD-002; BD-006; BD-011; BD-013 | `SPORT_LIFECYCLE.md` | Sport/Level criteria | Current | Canonical business |
| Program | `../02_DOMAINS/PROGRAM/README.md` | BR-PRG-001–004; BR-BRA-003 | BD-006; BD-028 | `PROGRAM_LIFECYCLE.md` | CFG-PRG-001 | Current | Canonical business |
| Service / Subscription Plan | `../02_DOMAINS/PROGRAM/SERVICE_CATALOG.md` | BR-PLAN-001; BR-PRG-001–004; BR-SUB-001–011 | BD-006; BD-014; BD-020–021; BD-029 | Program/Subscription lifecycles | CFG-PLAN-001; CFG-FIN; CFG-DIS; CFG-REN | Current | Canonical business |
| Lead / Trial | `../02_DOMAINS/STUDENT/STUDENT_LIFECYCLE.md` | BR-LEA-001–003; BR-TRI-001–005 | BD-007; BD-009 | Student lifecycle / Trial table | CFG-TRI-001–003 | Current | Canonical business |
| Student | `../02_DOMAINS/STUDENT/README.md` | BR-STU-001–007; BR-ARC-001–003 | BD-007–008; BD-023–024 | `STUDENT_LIFECYCLE.md` | Identity/overlap/return bindings | Current | Canonical business |
| Parent / Guardian | `../02_DOMAINS/PARENT/README.md` | BR-PAR-001–009 | BD-010; BD-024–025 | `PARENT_LIFECYCLE.md` | Relationship access/binding | Current | Canonical business |
| Coach | `../02_DOMAINS/COACH/README.md` | BR-COA-001–002; BR-GRP-001/003 | BD-011; BD-025 | `COACH_LIFECYCLE.md`; `COACH_ASSIGNMENT.md` | Qualification/assignment bindings | Current | Canonical business |
| Group | `../02_DOMAINS/GROUP/README.md` | BR-GRP-001–006 | BD-011; BD-022–023 | `GROUP_LIFECYCLE.md` | Capacity; CFG-TRN-001 | Current | Canonical business |
| Session / Scheduling | `../02_DOMAINS/SESSION/README.md` | BR-SES-001–004; BR-GRP-001/003; BR-ATT-001 | BD-004; BD-011; BD-022; BD-030 | `SESSION_LIFECYCLE.md`; `SCHEDULING_AND_CALENDAR.md` | Calendar/conflict values | Current | Canonical business |
| Subscription | `../02_DOMAINS/SUBSCRIPTION/README.md` | BR-SUB-001–011; BR-FRZ-001–004 | BD-006; BD-014; BD-016–023 | `SUBSCRIPTION_LIFECYCLE.md` | CFG-PLAN/FIN/FRZ/REN/SUB | Current | Canonical business |
| Payment / Discount | `../02_DOMAINS/PAYMENT/README.md` | BR-FIN-001–007 | BD-014–015; BD-029 | `PAYMENT_LIFECYCLE.md` | CFG-FIN-001–003; CFG-DIS-001–005 | Current | Canonical business |
| Attendance / Excuse | `../02_DOMAINS/ATTENDANCE/README.md` | BR-ATT-001–008; BR-SUB-004/005/011 | BD-016–018; BD-023; BD-030 | `ATTENDANCE_LIFECYCLE.md`; correction/excuse files | CFG-EXC-001 | Current | Canonical business |
| Evaluation / Level | `../02_DOMAINS/EVALUATION/README.md` | BR-EVA-001–009; BR-LVL-001–003 | BD-012–013; BD-025 | `EVALUATION_LIFECYCLE.md`; `PROMOTION_PROCESS.md` | CFG-EVA-001 | Current | Canonical business |
| Transfer | `../02_DOMAINS/TRANSFER/README.md` | BR-TRN-001–002; BR-GRP-002/004 | BD-022; BD-025 | `TRANSFER_LIFECYCLE.md` | CFG-TRN-001–004 | Current | Canonical business |
| Communication | `../02_DOMAINS/COMMUNICATION/README.md` | BR-COM-001–003; BR-REP-001–003 | BD-010; BD-025; BD-028; BD-030 | `COMMUNICATION_LIFECYCLE.md` | CFG-COM-001 | Current | Canonical business |
| Social Posts / Surveys | `../02_DOMAINS/SOCIAL/README.md` | BR-SOC-001/002; BR-SRV-001/002 | SRC-015 | `SOCIAL_LIFECYCLE.md` | CFG-SOC-001/002; CFG-SRV-001/002 | Current | Canonical business |
| Session Feedback | `../02_DOMAINS/EVALUATION/SESSION_FEEDBACK.md` | BR-EVA-007/008 | SRC-015 | Evaluation/feedback lifecycle | CFG-FBK-001 | Current | Canonical business |
| Stage / Level Progression | `../02_DOMAINS/SPORT/STAGE_LEVEL_MODEL.md` | BR-LVL-001–003; BR-EVA-009 | SRC-015; BD-013 | Evaluation lifecycle | CFG-LVL-001/002; CFG-EVA-001 | Current | Canonical business |
| Documents / Forms | `../02_DOMAINS/DOCUMENTS/README.md` | BR-DOC-001; BR-GOV-001/003 | NBCG-DEC-012; BD-025 | `DOCUMENT_LIFECYCLE.md` | CFG-DOC-001 | Current | Canonical business boundary |
| History / Audit | `../02_DOMAINS/ACADEMY/HISTORY_AND_AUDIT_MODEL.md` | BR-HIS-001 plus owning-domain history Rules | BD-003–004; BD-025 | Every owning lifecycle | Non-configurable history invariants | Current | Canonical cross-domain business |
| Configuration / Reference Data | `../02_DOMAINS/ACADEMY/ACADEMY_CONFIGURATION_AND_REFERENCE_DATA.md` | BR-CFG-001 | BD-028 | Configuration change lifecycle | `../04_POLICIES/POLICY_CONFIGURATION_CATALOG.md` | Current | Canonical cross-domain business |
| Future scope guard | `../01_BUSINESS_FOUNDATION/BUSINESS_SCOPE.md` | BR-SCP-001 | BD-005; BD-026–027 | None current | None current | Future | Canonical scope boundary |

For the authoritative Rule text, always follow `BUSINESS_RULE_INDEX.md` to the owning `*_RULES.md` file.
