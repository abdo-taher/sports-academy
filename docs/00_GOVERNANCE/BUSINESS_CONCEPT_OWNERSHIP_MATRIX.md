# Business Concept Ownership Matrix

## Purpose

This matrix assigns one canonical owner to every mandatory business concept. Decision references are approved under BD-003–BD-030. Its final column certifies **ownership and retrieval closure only**, not exhaustive lifecycle completeness. Current capability completeness and the new coverage gaps are governed by `BUSINESS_COVERAGE_CERTIFICATION_MATRIX.md`; no listed concept has competing owners or `MISSING OWNER` status.

| Concept | Definition Available | Canonical Owner | Canonical File | Lifecycle | Rules | Approved Decision Reference | Dependent Domains | Ownership Status |
|---|---|---|---|---|---|---|---|---|
| Academy | Yes | Academy | `02_DOMAINS/ACADEMY/README.md` | Academy | BR-GOV-001, BR-GOV-002 | BD-004, BD-005 | All | READY WITH CONFIGURATION REQUIRED |
| Branch | Yes | Branch | `02_DOMAINS/BRANCH/README.md` | Branch | BR-BRA-001 | BD-004, BD-028 | Sport, Group, Session, Student, Coach, Subscription | READY WITH CONFIGURATION REQUIRED |
| Sport | Yes | Sport | `02_DOMAINS/SPORT/README.md` | Sport | BR-BRA-001, BR-EVA-001, BR-SUB-001 | BD-006, BD-011, BD-022 | Program, Group, Coach, Evaluation, Subscription | READY WITH CONFIGURATION REQUIRED |
| Program | Yes | Program | `02_DOMAINS/PROGRAM/README.md` | Program | BR-PRG-001–003 | BD-006 | Sport, Level, Group, Subscription, Payment | READY WITH CONFIGURATION REQUIRED |
| Level | Yes; criteria configured per Sport/Level | Sport | `02_DOMAINS/SPORT/SPORT_MODEL.md` | Sport; Evaluation for movement | BR-TRI-002, BR-EVA-001, BR-SUB-001 | BD-006, BD-013, BD-022 | Program, Group, Evaluation, Subscription | READY WITH CONFIGURATION REQUIRED |
| Training Group | Yes | Group | `02_DOMAINS/GROUP/README.md` | Group | BR-GRP-001–004 | BD-022, BD-023 | Student, Coach, Session, Subscription | READY WITH CONFIGURATION REQUIRED |
| Coach | Yes | Coach | `02_DOMAINS/COACH/README.md` | Coach | BR-GRP-001, BR-GRP-003, BR-REP-001 | BD-011, BD-025 | Group, Session, Evaluation, Communication | READY WITH CONFIGURATION REQUIRED |
| Student | Yes | Student | `02_DOMAINS/STUDENT/README.md` | Student | BR-STU-001–005, BR-ARC-001–002 | BD-007, BD-008, BD-024 | Parent, Subscription, Group, Attendance, Evaluation, Transfer | READY WITH CONFIGURATION REQUIRED |
| Parent / Guardian | Yes; minor/adult model approved | Parent | `02_DOMAINS/PARENT/README.md` | Parent | BR-PAR-001–005 | BD-010, BD-024 | Student, Payment, Communication, Security | READY WITH CONFIGURATION REQUIRED |
| Service Catalog / Offering | Yes | Program | `02_DOMAINS/PROGRAM/SERVICE_CATALOG.md` | Program; Subscription | BR-PRG-001–003, BR-SUB-001, BR-FIN-004 | BD-006 | Sport, Level, Group, Subscription, Payment | READY WITH CONFIGURATION REQUIRED |
| Subscription | Yes | Subscription | `02_DOMAINS/SUBSCRIPTION/README.md` | Subscription | BR-SUB-001–007 | BD-014, BD-016, BD-020, BD-023 | Student, Payment, Group, Attendance | READY WITH CONFIGURATION REQUIRED |
| Subscription Plan | Yes | Program | `02_DOMAINS/PROGRAM/SERVICE_CATALOG.md` | Program / Subscription | BR-PRG-001–003, BR-SUB-001–004, BR-FIN-004/007 | BD-006; BD-029 | Subscription, Payment, Attendance | READY WITH CONFIGURATION REQUIRED |
| Payment | Yes | Payment | `02_DOMAINS/PAYMENT/FINANCIAL_CONCEPT_MODEL.md` | Payment | BR-FIN-001–005 | BD-014, BD-015 | Subscription, Parent, Student | READY WITH CONFIGURATION REQUIRED |
| Invoice | Yes | Payment | `02_DOMAINS/PAYMENT/FINANCIAL_CONCEPT_MODEL.md` | Payment | BR-FIN-001–004 | BD-014, BD-015 | Subscription, Payment, Parent | READY WITH CONFIGURATION REQUIRED |
| Discount | Yes; types approved and values configured | Payment | `02_DOMAINS/PAYMENT/FINANCIAL_CONCEPT_MODEL.md` | Payment | BR-FIN-003, BR-FIN-004 | BD-025, BD-028, BD-029 | Subscription, Invoice, Branch | READY WITH CONFIGURATION REQUIRED |
| Refund | Yes; authority governed by process matrix | Payment | `02_DOMAINS/PAYMENT/FINANCIAL_CONCEPT_MODEL.md` | Payment / Refund | BR-FIN-002, BR-FIN-003 | BD-025 | Subscription, Parent, Audit | READY WITH CONFIGURATION REQUIRED |
| Adjustment / Reversal | Yes | Payment | `02_DOMAINS/PAYMENT/FINANCIAL_CONCEPT_MODEL.md` | Payment | BR-FIN-002, BR-FIN-003 | BD-025 | Invoice, Outstanding Balance, Audit | READY WITH CONFIGURATION REQUIRED |
| Outstanding Balance | Yes; staged access effect approved | Payment | `02_DOMAINS/PAYMENT/FINANCIAL_CONCEPT_MODEL.md` | Payment | BR-FIN-001–005 | BD-015, BD-024 | Subscription, Student, Parent | READY WITH CONFIGURATION REQUIRED |
| Session Balance / Subscription Ledger | Yes | Subscription | `02_DOMAINS/SUBSCRIPTION/SUBSCRIPTION_MODEL.md` | Subscription; Attendance | BR-SUB-003–005, BR-ATT-003–005 | BD-017, BD-018, BD-021, BD-023 | Attendance, Renewal, Freeze | READY WITH CONFIGURATION REQUIRED |
| Schedule | Yes | Session | `02_DOMAINS/SESSION/SCHEDULING_AND_CALENDAR.md` | Session | BR-GRP-001, BR-TRI-003 | BD-011, BD-022, BD-025 | Group, Coach, Branch, Attendance | READY WITH CONFIGURATION REQUIRED |
| Training Session | Yes | Session | `02_DOMAINS/SESSION/SESSION_MODEL.md` | Session | BR-ATT-001, BR-GRP-003 | BD-030 | Group, Coach, Attendance, Communication | READY WITH CONFIGURATION REQUIRED |
| Session generation | Yes; recurrence values configured | Session | `02_DOMAINS/SESSION/SCHEDULING_AND_CALENDAR.md` | Session | BR-GRP-001, BR-TRI-003 | BD-004, BD-025, BD-030 | Group, Calendar, Coach | READY WITH CONFIGURATION REQUIRED |
| Session status | Yes; states and outcomes approved | Session | `02_DOMAINS/SESSION/SCHEDULING_AND_CALENDAR.md` | Session | BR-ATT-001 | BD-025, BD-030 | Attendance, Subscription, Communication | READY WITH CONFIGURATION REQUIRED |
| Coach assignment | Yes | Coach | `02_DOMAINS/COACH/COACH_ASSIGNMENT.md` | Coach; Group | BR-GRP-001, BR-GRP-003 | BD-011, BD-025 | Group, Session, Evaluation | READY WITH CONFIGURATION REQUIRED |
| Coach replacement | Yes; future effects and authority approved | Coach | `02_DOMAINS/COACH/COACH_ASSIGNMENT.md` | Coach; Session | BR-GRP-003 | BD-011, BD-025, BD-030 | Group, Session, Communication | READY WITH CONFIGURATION REQUIRED |
| Group capacity | Yes; limits and override are configured | Group | `02_DOMAINS/GROUP/GROUP_MODEL.md` | Group; Transfer | BR-GRP-004 | BD-022, BD-025 | Student, Transfer, Subscription | READY WITH CONFIGURATION REQUIRED |
| Student-group membership | Yes; concurrency approved by Subscription context | Group | `02_DOMAINS/GROUP/GROUP_MODEL.md` | Group | BR-GRP-002, BR-GRP-004 | BD-022, BD-023 | Student, Subscription, Attendance | READY WITH CONFIGURATION REQUIRED |
| Transfer | Yes; typed effects approved | Transfer | `02_DOMAINS/TRANSFER/README.md` | Transfer | BR-GRP-002, BR-GRP-004 | BD-022, BD-025 | Student, Group, Branch, Sport, Level, Subscription | READY WITH CONFIGURATION REQUIRED |
| Attendance | Yes | Attendance | `02_DOMAINS/ATTENDANCE/README.md` | Attendance | BR-ATT-001–005 | BD-016–BD-018, BD-023 | Session, Student, Subscription | READY WITH CONFIGURATION REQUIRED |
| Absence | Yes; balance outcome approved | Attendance | `02_DOMAINS/ATTENDANCE/ATTENDANCE_MODEL.md` | Attendance | BR-ATT-001, BR-ATT-005 | BD-018 | Student, Subscription, Parent | READY WITH CONFIGURATION REQUIRED |
| Excused absence | Yes; policy dimensions approved and values configured | Attendance | `02_DOMAINS/ATTENDANCE/EXCUSED_ABSENCE.md` | Attendance / Excuse | BR-ATT-005 | BD-018, BD-025 | Subscription, Parent, Communication | READY WITH CONFIGURATION REQUIRED |
| Make-up session | Yes; no default entitlement approved | Attendance | `02_DOMAINS/ATTENDANCE/MAKE_UP_PROCESS.md` | Attendance / Make-up | BR-ATT-005 | BD-018, BD-030 | Session, Subscription, Communication | READY WITH CONFIGURATION REQUIRED |
| Attendance correction | Yes | Attendance | `02_DOMAINS/ATTENDANCE/ATTENDANCE_CORRECTION.md` | Attendance Correction | BR-ATT-002–004 | BD-017, BD-018, BD-025 | Subscription, Audit | READY WITH CONFIGURATION REQUIRED |
| Session deduction | Yes | Attendance | `02_DOMAINS/ATTENDANCE/ATTENDANCE_MODEL.md` | Attendance | BR-ATT-003, BR-SUB-004–005 | BD-016, BD-017, BD-023 | Subscription, Payment | READY WITH CONFIGURATION REQUIRED |
| Ledger reversal | Yes | Subscription | `02_DOMAINS/ATTENDANCE/ATTENDANCE_CORRECTION.md` | Attendance Correction triggers Subscription Ledger reversal | BR-ATT-004, BR-SUB-004 | BD-017, BD-018 | Attendance, Audit | READY WITH CONFIGURATION REQUIRED |
| Initial evaluation | Yes; authority governed by process matrix | Evaluation | `02_DOMAINS/EVALUATION/EVALUATION_MODEL.md` | Evaluation | BR-TRI-002, BR-EVA-001–004 | BD-009, BD-012, BD-013 | Student, Trial, Level | READY WITH CONFIGURATION REQUIRED |
| Periodic evaluation | Yes | Evaluation | `02_DOMAINS/EVALUATION/EVALUATION_MODEL.md` | Evaluation | BR-EVA-001–004 | BD-012, BD-013 | Student, Coach, Parent | READY WITH CONFIGURATION REQUIRED |
| Evaluation template | Yes | Evaluation | `02_DOMAINS/ACADEMY/ACADEMY_CONFIGURATION_AND_REFERENCE_DATA.md` | Evaluation | BR-EVA-001–004 | BD-012 | Sport, Skill, Coach | READY WITH CONFIGURATION REQUIRED |
| Skill | Yes | Evaluation | `02_DOMAINS/ACADEMY/ACADEMY_CONFIGURATION_AND_REFERENCE_DATA.md` | Evaluation | BR-EVA-001, BR-EVA-003 | BD-013 | Sport, Level, Evaluation Template | READY WITH CONFIGURATION REQUIRED |
| Promotion | Yes; criteria configured per Sport/Level | Evaluation | `02_DOMAINS/EVALUATION/PROMOTION_PROCESS.md` | Evaluation / Promotion | BR-EVA-003–004, BR-GRP-002 | BD-012, BD-013, BD-022 | Level, Group, Transfer | READY WITH CONFIGURATION REQUIRED |
| Demotion | Yes; criteria configured per Sport/Level | Evaluation | `02_DOMAINS/EVALUATION/PROMOTION_PROCESS.md` | Evaluation / Level Movement | BR-EVA-003–006 | BD-013 | Level, Group, Transfer | READY WITH CONFIGURATION REQUIRED |
| Evaluation versioning | Yes | Evaluation | `02_DOMAINS/EVALUATION/EVALUATION_MODEL.md` | Evaluation Correction | BR-EVA-003 | BD-012 | Student Timeline, Parent | READY |
| Approval Request | Yes | Academy | `02_DOMAINS/ACADEMY/BUSINESS_ADMINISTRATION.md` | Business Administration + owning domain | Domain rule requiring approval | BD-025 | All sensitive domains | READY WITH CONFIGURATION REQUIRED |
| Approval Workflow | Yes; process authority matrix approved | Academy | `02_DOMAINS/ACADEMY/BUSINESS_ADMINISTRATION.md` | Business Administration | BR-FRZ-001–002, BR-EVA-004 | BD-025 | Freeze, Transfer, Refund, Evaluation, Archive | READY WITH CONFIGURATION REQUIRED |
| Decision History | Yes | Academy | `02_DOMAINS/ACADEMY/HISTORY_AND_AUDIT_MODEL.md` | Business Administration | BR-GRP-002, BR-FRZ-002–003 | BD-025 | All approval processes | READY WITH CONFIGURATION REQUIRED |
| Delegation | Yes | Academy | `02_DOMAINS/ACADEMY/BUSINESS_ADMINISTRATION.md` | Business Administration | BR-ADM-002 | BD-025 | All sensitive domains | READY WITH CONFIGURATION REQUIRED |
| Temporary authority | Yes | Academy | `02_DOMAINS/ACADEMY/BUSINESS_ADMINISTRATION.md` | Business Administration | BR-ADM-002 | BD-025 | All sensitive domains | READY WITH CONFIGURATION REQUIRED |
| Academy configuration | Yes | Academy | `02_DOMAINS/ACADEMY/ACADEMY_CONFIGURATION_AND_REFERENCE_DATA.md` | Configuration Change | BD-001, BR-GOV-001–002 | BD-028 | All | READY WITH CONFIGURATION REQUIRED |
| Branch configuration | Yes; scopes and precedence approved | Academy | `02_DOMAINS/ACADEMY/ACADEMY_CONFIGURATION_AND_REFERENCE_DATA.md` | Configuration Change; Branch applies effective value | BD-001, BR-BRA-001 | BD-028 | All branch-scoped domains | READY WITH CONFIGURATION REQUIRED |
| Sport-specific policy | Yes; scope values configured | Sport | `02_DOMAINS/SPORT/SPORT_MODEL.md` | Sport | BR-EVA-001, BR-BRA-001 | BD-028 | Evaluation, Group, Subscription | READY WITH CONFIGURATION REQUIRED |
| Program-specific policy | Yes | Program | `02_DOMAINS/PROGRAM/SERVICE_CATALOG.md` | Program | BR-PRG-001–003, BR-CFG-001 | BD-006; BD-028 | Subscription, Payment, Group | READY WITH CONFIGURATION REQUIRED |
| Feature flags | Yes as availability control only | Academy | `02_DOMAINS/ACADEMY/ACADEMY_CONFIGURATION_AND_REFERENCE_DATA.md` | Configuration Change | BR-GOV-001–002 | BD-027, BD-028 | Product capabilities | READY WITH CONFIGURATION REQUIRED |
| Effective dates | Yes | Academy | `02_DOMAINS/ACADEMY/ACADEMY_CONFIGURATION_AND_REFERENCE_DATA.md` | Configuration Change; owning domain applies the date | BR-FIN-004, BR-GRP-002 | BD-022, BD-028 | All policy consumers | READY WITH CONFIGURATION REQUIRED |
| Policy precedence | Yes | Academy | `02_DOMAINS/ACADEMY/ACADEMY_CONFIGURATION_AND_REFERENCE_DATA.md` | Configuration Change | BR-CFG-001 | BD-028 | All configured domains | READY WITH CONFIGURATION REQUIRED |
| Operational calendar | Yes | Session | `02_DOMAINS/SESSION/SCHEDULING_AND_CALENDAR.md` | Scheduling | BR-GRP-001, BR-TRI-003 | BD-004, BD-030 | Branch, Group, Coach, Attendance | READY WITH CONFIGURATION REQUIRED |
| Working days | Yes; values configured | Session | `02_DOMAINS/SESSION/SCHEDULING_AND_CALENDAR.md` | Scheduling | BR-TRI-003 | BD-028 | Group, Session | READY WITH CONFIGURATION REQUIRED |
| Holidays | Yes; values configured | Session | `02_DOMAINS/SESSION/SCHEDULING_AND_CALENDAR.md` | Scheduling | BR-TRI-003 | BD-028, BD-030 | Group, Session, Communication | READY WITH CONFIGURATION REQUIRED |
| Academy closures | Yes; states and effects approved | Academy | `02_DOMAINS/SESSION/SCHEDULING_AND_CALENDAR.md` | Academy + Scheduling | BR-GOV-002 | BD-004, BD-030 | All Branches, Sessions, Attendance | READY WITH CONFIGURATION REQUIRED |
| Branch closures | Yes; states and effects approved | Branch | `02_DOMAINS/SESSION/SCHEDULING_AND_CALENDAR.md` | Branch + Scheduling | BR-BRA-001 | BD-004, BD-030 | Sessions, Groups, Students | READY WITH CONFIGURATION REQUIRED |
| Session cancellation | Yes; outcome approved | Session | `02_DOMAINS/SESSION/SCHEDULING_AND_CALENDAR.md` | Session | BR-ATT-001, BR-SUB-004 | BD-030 | Attendance, Subscription, Communication | READY WITH CONFIGURATION REQUIRED |
| Session rescheduling | Yes; outcome approved | Session | `02_DOMAINS/SESSION/SCHEDULING_AND_CALENDAR.md` | Session | BR-GRP-001, BR-ATT-001 | BD-030 | Group, Coach, Attendance, Communication | READY WITH CONFIGURATION REQUIRED |
| Schedule conflict | Yes; override authority configured | Session | `02_DOMAINS/SESSION/SCHEDULING_AND_CALENDAR.md` | Scheduling | BR-TRI-003, BR-GRP-001 | BD-011, BD-025 | Group, Coach, Branch | READY WITH CONFIGURATION REQUIRED |
| Master/reference data governance | Yes | Academy | `02_DOMAINS/ACADEMY/ACADEMY_CONFIGURATION_AND_REFERENCE_DATA.md` | Configuration Change + consuming lifecycle | Consuming domain rule | BD-006, BD-012, BD-013, BD-018, BD-019, BD-022, BD-028 | All; each named domain owns item meaning | READY WITH CONFIGURATION REQUIRED |
| Dynamic forms/reference data | Yes; content configured by owning process | Documents | `02_DOMAINS/ACADEMY/ACADEMY_CONFIGURATION_AND_REFERENCE_DATA.md` | Documents + consuming lifecycle | BR-GOV-001–002 | BD-028 | All form-consuming domains | READY WITH CONFIGURATION REQUIRED |
| Business Timeline pattern | Yes | Academy | `02_DOMAINS/ACADEMY/HISTORY_AND_AUDIT_MODEL.md` | Entity lifecycle; Student owns the Student Timeline content | BR-STU-003, BR-FRZ-003 | BD-010, BD-024, BD-025 | Student, Parent, Subscription, Evaluation | READY WITH CONFIGURATION REQUIRED |
| Audit Log | Yes | Academy | `02_DOMAINS/ACADEMY/HISTORY_AND_AUDIT_MODEL.md` | Every sensitive lifecycle contributes its events | BR-GOV-001–002 plus domain rules | BD-025 | All | READY WITH CONFIGURATION REQUIRED |
| Activity Log | Yes | Academy | `02_DOMAINS/ACADEMY/HISTORY_AND_AUDIT_MODEL.md` | Communication and operational lifecycles contribute items | BR-COM-002 | BD-010, BD-025 | Communication, Student, Admin | READY WITH CONFIGURATION REQUIRED |
| Approval History | Yes | Academy | `02_DOMAINS/ACADEMY/HISTORY_AND_AUDIT_MODEL.md` | Business Administration | BR-FRZ-001–003, BR-EVA-004 | BD-025 | All approval processes | READY WITH CONFIGURATION REQUIRED |
| Financial Ledger | Yes | Payment | `02_DOMAINS/PAYMENT/FINANCIAL_CONCEPT_MODEL.md` | Payment | BR-FIN-001–004 | BD-015, BD-025, BD-029 | Subscription, Reporting, Audit | READY WITH CONFIGURATION REQUIRED |
| Attendance Ledger | Yes | Attendance | `02_DOMAINS/ACADEMY/HISTORY_AND_AUDIT_MODEL.md` | Attendance Correction | BR-ATT-001–005 | BD-017, BD-018 | Subscription, Student Timeline, Audit | READY WITH CONFIGURATION REQUIRED |
| Notification | Yes | Communication | `02_DOMAINS/COMMUNICATION/COMMUNICATION_MODEL.md` | Communication | BR-COM-001–002 | BD-025, BD-030 | All notifying domains | READY WITH CONFIGURATION REQUIRED |
| Message | Yes | Communication | `02_DOMAINS/COMMUNICATION/COMMUNICATION_MODEL.md` | Communication | BR-COM-001–002 | BD-010, BD-025 | Parent, Coach, Student | READY WITH CONFIGURATION REQUIRED |
| Announcement | Yes | Communication | `02_DOMAINS/COMMUNICATION/COMMUNICATION_MODEL.md` | Communication | BR-COM-001–002 | BD-025 | Academy, Branch, Parent, Coach | READY WITH CONFIGURATION REQUIRED |
| Recipient targeting | Yes | Communication | `02_DOMAINS/COMMUNICATION/COMMUNICATION_MODEL.md` | Communication | BR-COM-001 | BD-010, BD-025 | Parent, Student, Coach, Branch | READY WITH CONFIGURATION REQUIRED |
| Notification templates | Yes | Communication | `02_DOMAINS/ACADEMY/ACADEMY_CONFIGURATION_AND_REFERENCE_DATA.md` | Communication | BR-COM-001–002 | BD-028 | All notifying domains | READY WITH CONFIGURATION REQUIRED |
| Delivery status | Yes; delivery states configured | Communication | `02_DOMAINS/COMMUNICATION/COMMUNICATION_MODEL.md` | Communication | BR-COM-002 | BD-025 | All notifying domains | READY WITH CONFIGURATION REQUIRED |
| Retry / fallback policy | Concept yes; policy values absent | Communication | `02_DOMAINS/COMMUNICATION/COMMUNICATION_LIFECYCLE.md` | Communication | BR-COM-001–002 | BD-028 | All notifying domains | READY WITH CONFIGURATION REQUIRED |
| Post / Feed | Yes | Social | `02_DOMAINS/SOCIAL/README.md` | Social | BR-SOC-001/002 | SRC-015 | Communication, Student, Parent, Coach | READY WITH CONFIGURATION REQUIRED |
| Survey / Poll | Yes | Social | `02_DOMAINS/SOCIAL/README.md` | Social | BR-SRV-001/002 | SRC-015 | Student, Parent, Coach, Reporting | READY WITH CONFIGURATION REQUIRED |
| Session Feedback | Yes | Evaluation | `02_DOMAINS/EVALUATION/SESSION_FEEDBACK.md` | Evaluation | BR-EVA-007/008 | SRC-015 | Session, Parent, Coach | READY WITH CONFIGURATION REQUIRED |
| Stage | Yes | Sport | `02_DOMAINS/SPORT/STAGE_LEVEL_MODEL.md` | Sport/Evaluation | BR-LVL-001–003 | SRC-015 | Program, Level, Evaluation, Student | READY WITH CONFIGURATION REQUIRED |

## Ownership Closure Result

- `MISSING OWNER`: 0.
- Competing canonical owners: 0.
- Open client Business Decisions: 0.
- Program, Service Catalog, authority, delegation and policy precedence are approved.
- Ownership and lifecycle/interaction completeness are closed; NBCG-001–NBCG-012 are approved and propagated.
