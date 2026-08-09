# Business Traceability Matrix

## Purpose

This matrix establishes the first controlled path from Business Domain to Process, Rule, Requirement and future Test. `UNMAPPED` is a registered traceability gap, not invented coverage.

| Business Domain | Canonical Process | Canonical Rules | Existing Requirement / Story Evidence | Technical Layer | Test Coverage Status |
|---|---|---|---|---|---|
| Academy/Branch | Academy and Branch Lifecycles | BR-GOV-001–002 | UNMAPPED | Existing branch technical examples are non-authoritative | MISSING |
| Sport/Level | Sport and Level Availability Lifecycle | BR-SUB-001, BR-EVA-001 | UNMAPPED | Master data and database chapters | MISSING |
| Program | No approved lifecycle | None | UNMAPPED | None should be derived before OQ-BIZ-004 | BLOCKED-BY-DECISION |
| Lead/Trial | Lead, Trial and Student Lifecycle | BR-TRI-001–003 | FR-TRIAL-001–002; US-TRIAL-001–002 | Trial APIs exist as downstream examples | PARTIAL; no ID-linked tests |
| Student | Lead, Trial and Student Lifecycle | BR-STU-001–005 | FR-STU-001–003; US-STU-001–003 | Student DDD/DB/API sections exist | PARTIAL; no BR-linked tests |
| Parent | Parent Lifecycle | BR-PAR-001–005 | FR-PARENT-001–002; US-PARENT-001–002 | Parent DB/API sections exist | PARTIAL; no BR-linked tests |
| Coach | Coach Lifecycle | BR-GRP-001–003, BR-REP-001–002 | UNMAPPED | Coach/group technical sections exist | MISSING |
| Group/Schedule | Group and Schedule Lifecycle | BR-GRP-001–004 | FR-GRP-001–002; US-GRP-001–002 | Group/session DB/API sections exist | PARTIAL; no BR-linked tests |
| Subscription | Subscription Lifecycle | BR-SUB-001–007, BR-FRZ-001–004 | FR-SUB-001–003; US-SUB-001–003 | Subscription DB/API sections exist | PARTIAL; policy cases blocked |
| Payment/Invoice | Payment Lifecycle | BR-FIN-001–005 | UNMAPPED | Finance/database/API content exists | MISSING |
| Attendance | Attendance, Training and Evaluation Lifecycle | BR-ATT-001–005 | FR-ATT-001–002; US-ATT-001–002 | Attendance DB/API sections exist | PARTIAL; no BR-linked tests |
| Evaluation | Attendance, Training and Evaluation Lifecycle | BR-EVA-001–004 | FR-EVAL-001–002; US-EVAL-001–002 | Evaluation DB/API sections exist | PARTIAL; decisions blocked |
| Reports | Attendance/Training/Evaluation and Parent Lifecycles | BR-REP-001–003 | FR-REP-001; US-REP-001–002 | Reporting architecture exists | PARTIAL; no BR-linked tests |
| Communication | Communication Lifecycle | BR-COM-001–002 | FR-COM-001; US-COM-001–002 | Communication engine exists | PARTIAL; timing, retry and escalation policies missing |
| Exit/Archive | Exit and Archive Lifecycle | BR-ARC-001–002, BR-STU-003–004 | FR-STU-003; US-STU-003 | Data lifecycle/database exists | PARTIAL; return cases missing |
| Events | Events and Tournaments Lifecycle | None current | UNMAPPED | Future chapter only | FUTURE/BLOCKED |

## Traceability Rules

- A test must reference at least one canonical Rule ID and Process.
- A requirement must not override an Open Question.
- Technical examples may be linked only after the underlying business rule is confirmed.
- When an Open Question is approved, update its Rule, Process, Requirement and Test mappings together.

## Current Traceability Gaps

- Existing QA documentation contains no direct BR, FR or US ID references.
- Academy, Branch, Sport, Program, Coach, Payment, Freeze, Transfer, Make-up and Renewal lack complete requirement sets.
- Existing requirement and story chapters contain examples but do not reference the canonical rules created during governance.
