# Business Coverage Certification Matrix

Updated: 2026-08-09  
Scope: final current-scope Business closure  
Result: **0 CURRENT-SCOPE BUSINESS GAPS**

## Capability Coverage

| Capability | Owner | Governing Rules | Deterministic coverage | Status |
|---|---|---|---|---|
| Academy operation | Academy | BR-ACA-001/002 | States plus mandatory dependency review | COMPLETE |
| Branch operation | Branch | BR-BRA-001–004; BR-SES-003 | States, closure Session disposition, prospective availability withdrawal | COMPLETE |
| Sport catalog | Sport | BR-SPT-001; BR-BRA-001 | Lifecycle and grandfathered retirement | COMPLETE |
| Program | Program | BR-PRG-001–004 | Hierarchy, availability and lifecycle | COMPLETE |
| Service/Plan | Program/Subscription | BR-PLAN-001; BR-SUB | Version pinning and renewal acceptance | COMPLETE |
| Lead/Trial | Student | BR-LEA-001–003; BR-TRI | Full Lead and Trial lifecycles | COMPLETE |
| Student | Student | BR-STU; BR-ARC | State, identity, archive/return | COMPLETE |
| Guardian | Parent | BR-PAR-001–009 | Relationship, access and pending authority | COMPLETE |
| Coach | Coach | BR-COA; BR-GRP | Assignments and future-only responsibility changes | COMPLETE |
| Group | Group | BR-GRP-001–006 | Capacity, membership, transfer and closure | COMPLETE |
| Session/Schedule | Session | BR-SES-001–004 | Full states, cancellation, reschedule and closure | COMPLETE |
| Subscription | Subscription | BR-SUB; BR-FRZ; BR-PLAN-001 | Activation, ledger, freeze, renewal, overlap, version | COMPLETE WITH CONFIGURATION |
| Payment/Discount | Payment | BR-FIN | Clearance, escalation, debt, discount | COMPLETE WITH CONFIGURATION |
| Attendance/Excuse | Attendance | BR-ATT-001–008 | Eligibility, ledger, correction, void outcome | COMPLETE |
| Evaluation | Evaluation | BR-EVA-001–009 | Five types, approval, versions and feedback | COMPLETE WITH CONFIGURATION |
| Stage/Level | Sport/Evaluation | BR-LVL-001–003 | Hierarchy, criteria versions and human progression | COMPLETE WITH CONFIGURATION |
| Transfer | Transfer | BR-TRN-001/002 | Typed approved effective transfer | COMPLETE WITH CONFIGURATION |
| Communication | Communication | BR-COM; BR-REP | Operational delivery and history | COMPLETE WITH CONFIGURATION |
| Posts/Feed | Social | BR-SOC-001/002 | Audience, lifecycle, interaction and moderation | COMPLETE WITH CONFIGURATION |
| Surveys/Polls | Social | BR-SRV-001/002 | Typed questions, lifecycle and responses | COMPLETE WITH CONFIGURATION |
| Documents/Forms | Documents | BR-DOC-001 | Base lifecycle and class profiles | COMPLETE WITH CONFIGURATION |
| History/Audit | Academy | BR-HIS-001 | Version/compensation and interpretable history | COMPLETE |
| Authority/Delegation | Academy | BR-ADM-001/002 | Process roles and bounded delegation | COMPLETE WITH CONFIGURATION |
| Configuration | Academy | BR-CFG-001 | Owner, scope, precedence, effective date and audit | COMPLETE WITH CONFIGURATION |
| Archive/Return | Student | BR-ARC | Relationship review and no auto-reactivation | COMPLETE |
| Reporting | Communication/owners | BR-REP; BR-HIS | Canonical state/version meanings | COMPLETE |

## Cross-Domain Interaction Retest

| Interaction | Governing Rule(s) | Deterministic result | Status |
|---|---|---|---|
| Academy × Branch | BR-ACA-002 | Dependency review records Branch outcome | PASS |
| Academy × Subscription | BR-ACA-002 | No silent entitlement/financial change | PASS |
| Academy × pending approval | BR-ACA-002; BR-ADM | Explicit disposition and current authority | PASS |
| Branch × Session | BR-SES-003 | Every future Session gets an outcome | PASS |
| Branch × Sport | BR-BRA-004 | New use blocked; existing use grandfathered | PASS |
| Branch × Program | BR-BRA-004 | New use blocked; existing use grandfathered | PASS |
| Branch × Freeze | BR-SES-003; BR-FRZ | Freeze record remains; Session outcome explicit | PASS |
| Sport × Program | BR-SPT-001; BR-PRG-004 | Prospective retirement preserves current use | PASS |
| Sport × Stage | BR-LVL-001 | Stage belongs to Sport/Program context | PASS |
| Stage × Level | BR-LVL-001 | Stage contains ordered Levels | PASS |
| Level × criteria | BR-LVL-002 | Evaluation uses effective criteria version | PASS |
| Level × Stage progression | BR-LVL-003 | Final Level can enter next Stage after approval | PASS |
| Program × Plan | BR-PRG-004; BR-PLAN-001 | Retirement and version identities stay distinct | PASS |
| Plan × Subscription | BR-PLAN-001 | Purchased version remains governing | PASS |
| Plan × Renewal | BR-PLAN-001; BR-SUB-007 | Renewal accepts current active version | PASS |
| Renewal × debt | BR-SUB; BR-FIN | New linked renewal does not erase debt | PASS |
| Renewal × Freeze | BR-SUB; BR-FRZ | Records remain independent/effective-dated | PASS |
| Lead × Student | BR-LEA-003 | Conversion preserves provenance and blocks duplicate | PASS |
| Guardian × request | BR-PAR-009 | Revalidate at decision/execution | PASS |
| Guardian × Session Feedback | BR-EVA-008; BR-PAR-003 | May comment only on shareable linked content | PASS |
| Group × Session | BR-GRP-006; BR-SES-004 | Closing disposes future Sessions | PASS |
| Group × Transfer | BR-GRP-006; BR-TRN | Pending transfer explicitly disposed/revalidated | PASS |
| Session × Attendance | BR-SES-004; BR-ATT | Specific occurrence remains canonical | PASS |
| Session cancellation × Attendance | BR-ATT-008 | Attendance voided, retained and excluded from KPI | PASS |
| Session cancellation × Ledger | BR-SES-001; BR-ATT-008 | Exactly one restoration | PASS |
| Coach suspension × Session | BD-011; BR-SES-004 | Future responsibility changes, history remains | PASS |
| Initial Evaluation × evaluator | BR-EVA-009 | Coach or authorized Admin/Evaluator may assess | PASS |
| Evaluation × system recommendation | BR-EVA-009 | Advisory only | PASS |
| Evaluation × final Level | BR-EVA-009; BR-LVL-003 | Human approver decides | PASS |
| Evaluation correction × history | BR-EVA-003/006 | New version, original remains | PASS |
| Session Feedback × Official Evaluation | BR-EVA-007 | Distinct records; feedback cannot move Level | PASS |
| Comment × Official Evaluation | BR-EVA-008 | Append-only and never correction | PASS |
| Parent × Official Evaluation | BR-PAR-003 | Cannot edit/overwrite | PASS |
| Transfer × pending progression | BR-LVL-003; BR-TRN | Destination/current eligibility revalidated before execution | PASS |
| Archive × pending Evaluation | BR-LVL-003; BR-ARC | Movement held; archive review controls current state | PASS |
| Program transfer × Stage/Level | BR-LVL-003; BR-TRN | Destination hierarchy revalidated, no silent mapping | PASS |
| Post × audience | BR-SOC-001 | Visibility checked for reads/interactions | PASS |
| Post × Coach author | BR-SOC-001 | Only assigned scope; no global moderation | PASS |
| Post × comment | BR-SOC-002 | Visible authorized users only | PASS |
| Post × moderation | BR-SOC-002 | Hide with reason/history, no physical erase | PASS |
| Survey × Question | BR-SRV-001 | One or more supported typed Questions | PASS |
| Survey × audience | BR-SRV-001 | Explicit scoped target | PASS |
| Survey × closure | BR-SRV-002 | No new/edited submission after close | PASS |
| Survey × anonymity | BR-SRV-002 | Declared policy controls identity visibility | PASS |
| Document × pending process | BR-DOC-001 | Owning process revalidates current valid evidence | PASS |
| Policy change × in-flight request | BR-CFG-001; owning Rule | Policy version/effective time retained; owning checkpoint rule applies | PASS |
| Delegation expiry × approval | BR-ADM-002 | Expired delegation cannot approve/execute | PASS |
| Archive × debt | BR-ARC; BR-FIN | Debt/history remains | PASS |
| Communication × Post | BR-COM; BR-SOC | Notification delivery is not feed content | PASS |
| Communication × Survey | BR-COM; BR-SRV | Notification delivery is not response collection | PASS |

## Closure Metrics

- Capabilities tested: **26**.
- Cross-domain interactions tested: **50**.
- Interactions exposing current-scope Business gaps: **0**.
- NBCG gaps remaining: **0**.
- Open current-scope Business Decisions: **0**.
- Unapproved inference: **0**.
- Legacy current-truth dependency: **0**.

Numeric values explicitly governed by configuration remain **PRODUCTION CONFIGURATION REQUIRED** and do not reduce Business completeness.

