# Student Journey

## Authority

This journey is a navigation and hand-off view. Canonical truth remains in the referenced domain models, rules and lifecycles.

## End-to-End Stages

| Stage | Trigger / Actor | Required Preconditions and Validation | Approved Result | Rejection / Exception | History and Notification | Canonical Source |
|---|---|---|---|---|---|---|
| Lead / Prospect | Parent, Reception or approved channel expresses interest | BR-LEA-001; separate Lead identity | Inquiry/Trial/follow-up recorded without Student creation | Duplicate matching and authorized association/merge under BR-STU-001/BR-LEA-002 | Preserve provenance and Audit History | Student |
| Trial booking | Authorized actor selects an available time | BR-TRI-003–005; Branch enables Sport/Program | Optional Trial or recorded bypass; approved state outcome | Configured cancellation/no-show/retry rules; no numeric limit inferred | Booking/change history and communication | Student, Program, Branch, Session |
| Initial Evaluation | Assigned Coach assesses where policy requires | BR-EVA-001/004–006 | Supervisor/authorized Admin approves official outcome | No governed placement without required approval/criteria | Versions and approval history retained | Evaluation |
| Student identity | Formal enrollment after duplicate check | BR-STU-001, BR-LEA-002 | One Registered Student created before Subscription | Matching identity blocks duplicate and routes authorized history association | Lead/Trial/Evaluation provenance linked | Student |
| Subscription | Select Branch-enabled Sport/Program and Service/Plan | BR-PRG-001–003, BR-SUB-001–003 | New Subscription pending financial clearance | Multiple active records allowed only with deterministic funding | Terms and historical price retained | Program, Subscription |
| Payment | Record full Payment or approved installment/debt plan | BR-FIN-001–007, BR-SUB-008–009 | Financial clearance or staged deterministic follow-up | Access changes only at named configured stage | Append-only Financial Ledger | Payment |
| Group and Schedule | Assign compatible Group and approved Coach/Schedule | BR-GRP-001/004/005, BR-COA-001 | One or more current Group memberships with Subscription context | Capacity/conflict/authority validation | Effective assignment history | Group, Session |
| Training Session | Deliver a dated Session | Valid Group, Coach and operational calendar | Session is concrete Attendance context | Cancellation/reschedule follows BR-SES-001/002 | Original/change history and notification | Session, Coach |
| Attendance | Record specific Student/Session with exactly one eligible funding Subscription | BR-ATT-001–007, BR-SUB-011 | At most one deduction; no expiry grace or negative balance | Duplicate/ambiguous/ineligible outcome rejected deterministically | Attendance and Ledger linked | Attendance, Subscription |
| Progress | Complete approved Evaluation flow | BR-EVA-001–006 | Governed assignment/promotion/demotion/re-evaluation result | Rejection/override retains reason/history | Student Timeline may show authorized result | Evaluation, Student |
| Renewal / Freeze / Transfer | Execute approved configured process | BR-FRZ-001–004, BR-SUB-007/010, BR-TRN-001–002 | New linked Renewal, time-bound Freeze, or typed effective Transfer | Invalid policy/authority/configuration rejects with reason | Decision/effective-date history | Subscription, Transfer |
| Exit / Archive | Apply state change after active-relationship review | BR-STU-006–007, BR-ARC-001–003 | Temporarily Inactive or non-destructive Archive | Missing review blocks Archive | Review, actor, reason and obligations retained | Student |
| Restore / Return | Fresh review and explicit transition | BR-ARC-002–003 | Student state may transition as approved | No automatic Subscription, Group, account or entitlement restoration | Each relationship decision separate | Student, Subscription, Group |

## State Boundary

Student state, Subscription state and Freeze are separate. Approved Student states are Registered, Active, Temporarily Inactive and Archived. Subscription expiry, Freeze, Payment or balance never changes Student state automatically.

## Journey Completeness

`PARTIAL — BUSINESS GAP NBCG-007`: Student and Trial journeys are deterministic; the complete Lead closure/reopen lifecycle is not.
