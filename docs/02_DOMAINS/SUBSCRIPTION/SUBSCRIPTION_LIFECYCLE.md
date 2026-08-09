# Subscription Lifecycle

## Provenance

Migrated from `Academy_Platform_Documentation/04_BUSINESS_PROCESSES/LIFECYCLES/SUBSCRIPTION_LIFECYCLE.md` and normalized under the Subscription domain.

## Purpose

Controls entitlement, session balance, renewal, freeze and training eligibility.

## Scope

Covers business lifecycle behavior for the Subscription domain only. Cross-domain effects are referenced, not duplicated as truth.

## Trigger

A business event or authorized actor initiates work involving Subscription.

## Preconditions

- The relevant business record is identifiable.
- Actor relationship and approved process authority are established.
- Approved business decisions and mandatory configuration are available.

## Starting State

Operational states are Pending Financial Clearance, Active, Frozen and Expired; Renewal creates a new linked Subscription.

## Actors

Academy Admin and Accountant according to process and authority.

## Owner

See `../../01_BUSINESS_FOUNDATION/ROLE_RESPONSIBILITY_MATRIX.md`.

## Main Flow

1. Identify Student, enabled Branch/Sport/Program, Level and Service/Plan commercial terms under BD-006 and BR-BRA-001/003.
2. Enforce one Student/Sport/Level relationship under BR-SUB-001 and exactly Group or Private under BR-SUB-002.
3. Allocate the Subscription's own session quantity and balance under BR-SUB-003 and preserve the historical price under BR-FIN-004.
4. Record financial outcomes through Payment; activate under BR-SUB-008/009 and handle partial/late/failed outcomes through staged escalation BR-FIN-006.
5. Before training, validate expiry/grace, Freeze effect, balance and unambiguous Subscription selection through BD-016, 015, 017 and 021.
6. Append every deduction, restoration and adjustment to the Subscription Ledger under BR-SUB-004.
7. Process Freeze as request, decision and later resume; BR-FRZ-001–004 govern known behavior and BD-019 governs policy effects.
8. Process Renewal without erasing prior history; BD-020/019/021 govern new-versus-extension, carry-over and overlap.
9. Retain expired/closed Subscription and Ledger history under BR-SUB-006; Archive/Return effects follow BD-024 and require independent relationship decisions.

## Validations

- BR-SUB-001: Each Subscription belongs to one Student, one Sport and one Level.
- BR-SUB-002: A Subscription is either Group or Private, not both.
- BR-SUB-003: Each Subscription has its own session quantity and balance.
- BR-SUB-004: Every session deduction, restoration and manual adjustment is recorded in a Subscription Ledger with its reason and history.
- BR-SUB-005: Normal training requires active, cleared, non-frozen, unexpired eligibility and sufficient balance.
- BR-SUB-006: A Subscription is not permanently deleted; historical records are preserved.
- BR-SUB-007: Renewal creates a new linked Subscription and preserves prior history.
- BR-FRZ-001: A Freeze request is not effective until approved by the authorized role.
- BR-FRZ-002: A Freeze request may be rejected, and the rejection reason is retained.
- BR-FRZ-003: Freeze history is retained in the relevant timeline.
- BR-FRZ-004: Freeze duration, extension, fees and resume behavior are policy-dependent; no generated numeric limit is authoritative.

## Business Rules

See `SUBSCRIPTION_RULES.md`.

## State Transitions

| From | Action | To | Initiator | Approver | Preconditions | Rejection | Effective Date / Effects | History / Audit |
|---|---|---|---|---|---|---|---|---|
| Created / Pending Financial Clearance | Activate | Active | Authorized Subscription executor | Financial clearance or manual exception approver | BR-SUB-008 or BR-SUB-009 satisfied | Remain pending; reason recorded | Activation time begins eligibility subject to dates/balance | Clearance/exception evidence and actor |
| Active | Start approved Freeze | Frozen | Parent/Guardian or authorized initiator | Freeze approver | Eligibility/configuration valid | Remain Active with rejection reason | Normal training pauses; expiry extends by frozen duration | Request, approval, dates and prior expiry |
| Frozen | Approved early Resume | Active | Authorized Resume initiator | Resume approver | Early Resume policy satisfied | Remain Frozen | Resume time ends Freeze; expiry extension reflects actual approved frozen duration | Resume decision/history |
| Frozen | Automatic Resume at approved end | Active | System | Prior Freeze approval | No earlier approved Resume; end date reached | Operational exception alert if unable | Resume at approved end | System event tied to Freeze |
| Active | Reach expiry | Expired | System | None | Expiry reached | N/A | Normal Attendance prohibited; Student state unchanged | Expiry event |
| Any prior Subscription | Renew | New linked Subscription: Pending Financial Clearance | Parent/Guardian or authorized actor | Per Renewal/finance authority | New terms and eligibility valid | Old Subscription unchanged | New commercial period; old record immutable | Previous/new link, pricing, carry-over provenance |

## Success Result

A permitted business outcome is recorded with required history.

## Failure / Rejection

If authority or eligibility fails, reject; if mandatory configuration is missing, hold as `BUSINESS CONFIGURATION REQUIRED` with the Rule/Configuration ID.

## Cancellation

Cancellation effects are valid only when approved in rules, lifecycle or decision log.

## Exceptions

- Expired Subscription Attendance: BD-016.
- Frozen Subscription Attendance: BD-019.
- Negative balance: BD-017; do not infer an override.
- Multiple eligible Subscriptions or overlapping renewal: BD-021/021; never select a ledger arbitrarily.
- Early Renewal and carry-over: BD-020/019.
- Archive with current obligations: BD-024.

## Permissions

Use role responsibility and permission artifacts. Authority follows the approved process matrix; an unbound implementation role is BUSINESS CONFIGURATION REQUIRED.

## Audit

Record actor, timestamp, reason and affected records for decisions, corrections, financial events and history-affecting changes.

## Timeline / History

Preserve historical records where required by canonical rules.

## Notifications

Use Communication domain; do not invent timing, template or escalation values.

## Cross-Domain Effects

- Student
- Sport
- Level
- Payment
- Attendance
- Ledger
- Freeze
- Renewal

## Approved Business Decisions

- BD-014 — approved; see Decision Log and linked canonical Rules.
- BD-016 — approved; see Decision Log and linked canonical Rules.
- BD-020 — approved; see Decision Log and linked canonical Rules.
- BD-021 — approved; see Decision Log and linked canonical Rules.
- BD-023 — approved; see Decision Log and linked canonical Rules.
- BD-006 — approved; see Decision Log and linked canonical Rules.
- BD-008 — approved; see Decision Log and linked canonical Rules.
- BD-009 — approved; see Decision Log and linked canonical Rules.
- BD-013 — approved; see Decision Log and linked canonical Rules.
- BD-015 — approved; see Decision Log and linked canonical Rules.
- BD-017 — approved; see Decision Log and linked canonical Rules.
- BD-018 — approved; see Decision Log and linked canonical Rules.
- BD-019 — approved; see Decision Log and linked canonical Rules.
- BD-022 — approved; see Decision Log and linked canonical Rules.
- BD-024 — approved; see Decision Log and linked canonical Rules.
- BD-026 — approved; see Decision Log and linked canonical Rules.
- BD-029 — approved; see Decision Log and linked canonical Rules.
- BD-030 — approved; see Decision Log and linked canonical Rules.

## Downstream References

Downstream files must cite this lifecycle and the relevant Rule/Decision IDs.

## Source Extract

The previous lifecycle source was read during migration. Canonical behavior is represented above; historical evidence is isolated outside ACTIVE under the workspace `ARCHIVE/historical-documentation/` area.
