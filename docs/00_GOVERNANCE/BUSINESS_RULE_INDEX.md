# Business Rule Index

This index contains every canonical Business Rule after propagation of BD-003–BD-030. Rule definitions remain authoritative in the linked domain files; this index does not duplicate rule authority.

## ACADEMY

- [BR-GOV-003](../02_DOMAINS/ACADEMY/ACADEMY_RULES.md#br-gov-003) — The current canonical business repository and approved Decision Log are authoritative; Legacy, audit, generated, technical and Derived material cannot create or override Business Truth.
- [BR-SCP-001](../02_DOMAINS/ACADEMY/ACADEMY_RULES.md#br-scp-001) — Events, Tournaments, Camps, related Certificates and marketplace/community modules are Future scope and create no current business or implementation requirement.
- [BR-ACA-001](../02_DOMAINS/ACADEMY/ACADEMY_RULES.md#br-aca-001) — Academy state is Active, Suspended or Archived; every authorized transition is effective-dated, reasoned, historical and auditable, and Archive never deletes history.
- [BR-CFG-001](../02_DOMAINS/ACADEMY/ACADEMY_RULES.md#br-cfg-001) — Academy default applies unless an explicitly Branch-, Sport-, Program- or Plan-configurable item has an authorized effective override; governance-critical invariants are non-overridable.
- [BR-ADM-001](../02_DOMAINS/ACADEMY/ACADEMY_RULES.md#br-adm-001) — Every sensitive process identifies initiator, reviewer, approver, rejector and executor as applicable; elevated technical access alone grants no business authority.
- [BR-ADM-002](../02_DOMAINS/ACADEMY/ACADEMY_RULES.md#br-adm-002) — Delegation is explicit, revocable, time- and scope-bound, auditable, never exceeds delegator authority and never permanently changes the delegate role.
- [BR-HIS-001](../02_DOMAINS/ACADEMY/ACADEMY_RULES.md#br-his-001) — State changes, corrections, approvals, rejections, exceptions, financial changes and assignment changes preserve before/after truth through history, versioning or compensating records.
- [BR-GOV-001](../02_DOMAINS/ACADEMY/ACADEMY_RULES.md#br-gov-001) — A generated example, recommendation or technical design is not a business rule unless supported by a verified decision.
- [BR-GOV-002](../02_DOMAINS/ACADEMY/ACADEMY_RULES.md#br-gov-002) — An unresolved conflict is recorded as an Open Question and is not resolved by assumption.

## ATTENDANCE

- [BR-ATT-006](../02_DOMAINS/ATTENDANCE/ATTENDANCE_RULES.md#br-att-006) — Normal Attendance is rejected after Subscription expiry; renewal pending creates no implicit grace or eligibility.
- [BR-ATT-007](../02_DOMAINS/ATTENDANCE/ATTENDANCE_RULES.md#br-att-007) — Attendance requiring entitlement is rejected when the selected eligible Subscription lacks Session balance; balance never becomes negative and correction uses compensating Ledger entries.
- [BR-ATT-001](../02_DOMAINS/ATTENDANCE/ATTENDANCE_RULES.md#br-att-001) — Attendance belongs to a specific Training Session, not merely a calendar day.
- [BR-ATT-002](../02_DOMAINS/ATTENDANCE/ATTENDANCE_RULES.md#br-att-002) — The same Student cannot have duplicate Attendance for the same Session.
- [BR-ATT-003](../02_DOMAINS/ATTENDANCE/ATTENDANCE_RULES.md#br-att-003) — Confirmed present Attendance deducts a session from the eligible Subscription Ledger.
- [BR-ATT-004](../02_DOMAINS/ATTENDANCE/ATTENDANCE_RULES.md#br-att-004) — Attendance correction preserves who changed it, the reason, timestamp and resulting ledger adjustment.
- [BR-ATT-005](../02_DOMAINS/ATTENDANCE/ATTENDANCE_RULES.md#br-att-005) — An approved Excuse prevents one Session deduction when processed before deduction or restores one deducted Session through a compensating Subscription Ledger entry; Make-up entitlement or date extension is not the default.

## BRANCH

- [BR-BRA-002](../02_DOMAINS/BRANCH/BRANCH_RULES.md#br-bra-002) — Branch state is Planned, Active, Temporarily Closed or Archived; authorized transitions preserve history, and temporary closure prevents normal Branch operations without changing Student or Subscription state automatically.
- [BR-BRA-003](../02_DOMAINS/BRANCH/BRANCH_RULES.md#br-bra-003) — A Program must not be offered, selected, scheduled or subscribed in a Branch unless that Branch explicitly enables the Program and its Sport.
- [BR-BRA-001](../02_DOMAINS/BRANCH/BRANCH_RULES.md#br-bra-001) — A Sport must not be shown as available in a Branch unless that Branch supports or enables that Sport. This applies to registration, Trial booking, service selection, Groups, Scheduling, Subscription creation, Frontend filtering and API validation.

## COACH

- [BR-COA-001](../02_DOMAINS/COACH/COACH_RULES.md#br-coa-001) — A Coach may hold multiple explicit approved, qualification-checked, conflict-checked and effective-dated Branch and Sport assignments, each with history and audit.
- [BR-COA-002](../02_DOMAINS/COACH/COACH_RULES.md#br-coa-002) — Coach reassignment, suspension or exit changes future Group/Session responsibility and never rewrites historical Groups, Sessions, Evaluations or assignments.

## COMMUNICATION

- [BR-COM-003](../02_DOMAINS/COMMUNICATION/COMMUNICATION_RULES.md#br-com-003) — Primary Guardian is the default operational communication and notification contact for a minor, while additional authorized Guardians may receive only their scoped communications.
- [BR-REP-001](../02_DOMAINS/COMMUNICATION/COMMUNICATION_RULES.md#br-rep-001) — A Coach may write a report for an assigned Session.
- [BR-REP-002](../02_DOMAINS/COMMUNICATION/COMMUNICATION_RULES.md#br-rep-002) — A Supervisor may write a report when responsible for the Session under the approved responsibility model.
- [BR-REP-003](../02_DOMAINS/COMMUNICATION/COMMUNICATION_RULES.md#br-rep-003) — Parent and administration comments do not replace or erase the official report.
- [BR-COM-001](../02_DOMAINS/COMMUNICATION/COMMUNICATION_RULES.md#br-com-001) — Communication requires an authorized audience and respects relationship-based visibility.
- [BR-COM-002](../02_DOMAINS/COMMUNICATION/COMMUNICATION_RULES.md#br-com-002) — Business communication history is auditable and is not silently removed.

## EVALUATION

- [BR-EVA-005](../02_DOMAINS/EVALUATION/EVALUATION_RULES.md#br-eva-005) — Initial assignment, promotion, demotion and re-evaluation use maintainable criteria per Sport/Level; Coach recommends and Supervisor or specifically authorized decision role makes the final decision.
- [BR-EVA-006](../02_DOMAINS/EVALUATION/EVALUATION_RULES.md#br-eva-006) — Rejected or overridden Level recommendations retain the original recommendation, final decision, reason, decision actor and history.
- [BR-EVA-001](../02_DOMAINS/EVALUATION/EVALUATION_RULES.md#br-eva-001) — Each Sport may use a different Evaluation model.
- [BR-EVA-002](../02_DOMAINS/EVALUATION/EVALUATION_RULES.md#br-eva-002) — Periodic Evaluation scheduling is configurable by authorized administration.
- [BR-EVA-003](../02_DOMAINS/EVALUATION/EVALUATION_RULES.md#br-eva-003) — An approved Evaluation is not deleted or overwritten; a correction preserves the earlier version.
- [BR-EVA-004](../02_DOMAINS/EVALUATION/EVALUATION_RULES.md#br-eva-004) — Official Evaluation is recorded by a Coach and reviewed/approved before publication by a Supervisor or specifically authorized Admin; governed placement outcomes cannot bypass approval.

## GROUP

- [BR-GRP-005](../02_DOMAINS/GROUP/GROUP_RULES.md#br-grp-005) — A Student may belong to multiple current Groups when supported by active Subscriptions; each membership retains its Sport, Program and Subscription context.
- [BR-GRP-001](../02_DOMAINS/GROUP/GROUP_RULES.md#br-grp-001) — Every Training Group has a Primary Coach and an established weekly schedule.
- [BR-GRP-002](../02_DOMAINS/GROUP/GROUP_RULES.md#br-grp-002) — A Student transfer preserves old and new assignments, effective date, reason and decision history to the extent collected.
- [BR-GRP-003](../02_DOMAINS/GROUP/GROUP_RULES.md#br-grp-003) — A Substitute Coach assigned to a Session does not become the Group's Primary Coach automatically.
- [BR-GRP-004](../02_DOMAINS/GROUP/GROUP_RULES.md#br-grp-004) — The receiving Group's suitability and capacity must be checked before transfer; limits and override authority require approval.

## PARENT

- [BR-PAR-006](../02_DOMAINS/PARENT/PARENT_RULES.md#br-par-006) — A minor Student has at least one linked Guardian and exactly one Primary Guardian at a time.
- [BR-PAR-007](../02_DOMAINS/PARENT/PARENT_RULES.md#br-par-007) — A Student may have multiple Guardians with scoped access; Primary Guardian is default operational contact, while billing responsibility may belong to another explicitly authorized linked Guardian.
- [BR-PAR-008](../02_DOMAINS/PARENT/PARENT_RULES.md#br-par-008) — An adult Student may manage own account, consent and billing; Guardian relationship is optional unless explicit legal/Academy policy requires it.
- [BR-PAR-001](../02_DOMAINS/PARENT/PARENT_RULES.md#br-par-001) — A Parent can be linked to multiple Students.
- [BR-PAR-002](../02_DOMAINS/PARENT/PARENT_RULES.md#br-par-002) — A Parent may access only linked Students.
- [BR-PAR-003](../02_DOMAINS/PARENT/PARENT_RULES.md#br-par-003) — A Parent may request, comment and monitor but may not modify official Attendance or Evaluation records.
- [BR-PAR-004](../02_DOMAINS/PARENT/PARENT_RULES.md#br-par-004) — A Parent linked to Student history is archived rather than permanently deleted.
- [BR-PAR-005](../02_DOMAINS/PARENT/PARENT_RULES.md#br-par-005) — Changing a Student's Parent relationship preserves the previous history.

## PAYMENT

- [BR-FIN-006](../02_DOMAINS/PAYMENT/PAYMENT_RULES.md#br-fin-006) — Partial, late and failed Payment uses explicit status, Finance owner, notification, next action, named access consequence and terminal outcome; access changes only at an approved stage.
- [BR-FIN-007](../02_DOMAINS/PAYMENT/PAYMENT_RULES.md#br-fin-007) — Current Discount types may include family, multi-Sport, seasonal, employee and exceptional; numeric values are configuration, and exceptional/manual Discount requires authorized reasoned approval and Audit History.
- [BR-FIN-001](../02_DOMAINS/PAYMENT/PAYMENT_RULES.md#br-fin-001) — A Payment record is linked to a Subscription under the current model.
- [BR-FIN-002](../02_DOMAINS/PAYMENT/PAYMENT_RULES.md#br-fin-002) — An approved Payment is not deleted; a Reversal or Refund preserves the original history.
- [BR-FIN-003](../02_DOMAINS/PAYMENT/PAYMENT_RULES.md#br-fin-003) — Financial changes, exceptional discounts and adjustments preserve reason, actor and date.
- [BR-FIN-004](../02_DOMAINS/PAYMENT/PAYMENT_RULES.md#br-fin-004) — Historical Subscription prices are not changed retroactively.
- [BR-FIN-005](../02_DOMAINS/PAYMENT/PAYMENT_RULES.md#br-fin-005) — Subscription activation requires financial clearance through full approved Payment or a compliant approved installment/debt plan; manual activation exception requires explicit approval and audit, and Session balance may never be negative.

## PROGRAM

- [BR-PRG-001](../02_DOMAINS/PROGRAM/PROGRAM_RULES.md#br-prg-001) — Program is a business-level training offering belonging to one Sport and sits in the hierarchy Sport → Program → Service/Subscription Plan → Student Subscription.
- [BR-PRG-002](../02_DOMAINS/PROGRAM/PROGRAM_RULES.md#br-prg-002) — Program defines what training experience is offered and may define target Level/audience and format; it is not a Student entitlement, transactional Payment or Subscription.
- [BR-PRG-003](../02_DOMAINS/PROGRAM/PROGRAM_RULES.md#br-prg-003) — Program operational use requires explicit availability, including explicit Branch enablement; global existence alone never makes it available in a Branch.

## SESSION

- [BR-SES-001](../02_DOMAINS/SESSION/SESSION_RULES.md#br-ses-001) — Academy cancellation before Attendance causes no Session deduction; if deduction already occurred, one compensating Subscription Ledger restoration is recorded.
- [BR-SES-002](../02_DOMAINS/SESSION/SESSION_RULES.md#br-ses-002) — Rescheduling preserves the original Session/change history and consumes no additional Session entitlement by itself.

## STUDENT

- [BR-LEA-001](../02_DOMAINS/STUDENT/STUDENT_RULES.md#br-lea-001) — Lead/Prospect is a separate pre-Student record for inquiry, Trial, follow-up and conversion tracking; it is not a Student state.
- [BR-LEA-002](../02_DOMAINS/STUDENT/STUDENT_RULES.md#br-lea-002) — Student is created at formal enrollment after applicable Trial/Evaluation and before Subscription; Lead/Trial/Evaluation provenance transfers to the Student without silent deletion or duplicate identity.
- [BR-TRI-004](../02_DOMAINS/STUDENT/STUDENT_RULES.md#br-tri-004) — Trial is optional according to approved Academy/Program policy; authorized bypass is allowed only where policy permits and is recorded.
- [BR-TRI-005](../02_DOMAINS/STUDENT/STUDENT_RULES.md#br-tri-005) — Trial preserves Requested, Scheduled, Confirmed, Attended, Cancelled, No-show, Evaluated where required and Closed/Non-converted outcomes; retry/reschedule limits are configuration and Trial creates neither Student nor Subscription automatically.
- [BR-STU-006](../02_DOMAINS/STUDENT/STUDENT_RULES.md#br-stu-006) — Student state is Registered, Active, Temporarily Inactive or Archived and is independent of Subscription expiry/Freeze, Payment status and Session balance.
- [BR-STU-007](../02_DOMAINS/STUDENT/STUDENT_RULES.md#br-stu-007) — Every Student state transition records prior/new state, effective date/time, actor, reason where applicable and Audit History; Archive is not deletion.
- [BR-ARC-003](../02_DOMAINS/STUDENT/STUDENT_RULES.md#br-arc-003) — Archive requires active-relationship review; Restore/Return requires fresh authorized review and never automatically reactivates Student state, Subscription, Group membership, account access or prior entitlement.
- [BR-STU-001](../02_DOMAINS/STUDENT/STUDENT_RULES.md#br-stu-001) — Each Student has one governed identity; formal creation requires duplicate matching, and a matching Lead is associated/merged through authorized resolution without silent duplicate creation or history loss.
- [BR-STU-002](../02_DOMAINS/STUDENT/STUDENT_RULES.md#br-stu-002) — A Student keeps a persistent QR identity across subscription renewal.
- [BR-STU-003](../02_DOMAINS/STUDENT/STUDENT_RULES.md#br-stu-003) — Student history, attendance, evaluations, transfers and timeline are preserved and are not permanently removed through normal operation.
- [BR-STU-004](../02_DOMAINS/STUDENT/STUDENT_RULES.md#br-stu-004) — An Archived Student cannot receive a new Subscription before an approved restore/reactivation decision.
- [BR-STU-005](../02_DOMAINS/STUDENT/STUDENT_RULES.md#br-stu-005) — A Student may have multiple active Subscriptions and multiple current Groups; every consuming Attendance must resolve to exactly one eligible Subscription and balances never merge silently.
- [BR-TRI-001](../02_DOMAINS/STUDENT/STUDENT_RULES.md#br-tri-001) — A Trial does not create a Subscription automatically.
- [BR-TRI-002](../02_DOMAINS/STUDENT/STUDENT_RULES.md#br-tri-002) — A Level recommendation is not produced without an Evaluation.
- [BR-TRI-003](../02_DOMAINS/STUDENT/STUDENT_RULES.md#br-tri-003) — A Trial booking uses an available time.
- [BR-ARC-001](../02_DOMAINS/STUDENT/STUDENT_RULES.md#br-arc-001) — Archive preserves historical records and is not equivalent to permanent deletion.
- [BR-ARC-002](../02_DOMAINS/STUDENT/STUDENT_RULES.md#br-arc-002) — Restore does not automatically reactivate a Student, Subscription, Group or Account.

## SUBSCRIPTION

- [BR-SUB-008](../02_DOMAINS/SUBSCRIPTION/SUBSCRIPTION_RULES.md#br-sub-008) — Subscription activates only after full approved Payment or satisfaction of the required initial conditions of an approved installment/debt plan.
- [BR-SUB-009](../02_DOMAINS/SUBSCRIPTION/SUBSCRIPTION_RULES.md#br-sub-009) — Activation outside normal financial clearance requires explicit authorized approval with reason, actor, date/time and Audit History.
- [BR-SUB-010](../02_DOMAINS/SUBSCRIPTION/SUBSCRIPTION_RULES.md#br-sub-010) — Unused Session carry-over is allowed only by Subscription Plan policy; permitted transfer is recorded in the new Subscription Ledger with source provenance and never silently crosses Sport.
- [BR-SUB-011](../02_DOMAINS/SUBSCRIPTION/SUBSCRIPTION_RULES.md#br-sub-011) — Each Attendance consuming entitlement funds exactly one eligible Subscription selected from Session Sport, Program, Group, eligibility period and approved overlap policy; balances never merge.
- [BR-SUB-001](../02_DOMAINS/SUBSCRIPTION/SUBSCRIPTION_RULES.md#br-sub-001) — Each Subscription belongs to one Student, one Sport and one Level.
- [BR-SUB-002](../02_DOMAINS/SUBSCRIPTION/SUBSCRIPTION_RULES.md#br-sub-002) — A Subscription is either Group or Private, not both.
- [BR-SUB-003](../02_DOMAINS/SUBSCRIPTION/SUBSCRIPTION_RULES.md#br-sub-003) — Each Subscription has its own session quantity and balance.
- [BR-SUB-004](../02_DOMAINS/SUBSCRIPTION/SUBSCRIPTION_RULES.md#br-sub-004) — Every session deduction, restoration and manual adjustment is recorded in a Subscription Ledger with its reason and history.
- [BR-SUB-005](../02_DOMAINS/SUBSCRIPTION/SUBSCRIPTION_RULES.md#br-sub-005) — Normal training requires an active, financially cleared, non-frozen, unexpired eligible Subscription with sufficient Session balance; no implicit expiry grace or negative balance is allowed.
- [BR-SUB-006](../02_DOMAINS/SUBSCRIPTION/SUBSCRIPTION_RULES.md#br-sub-006) — A Subscription is not permanently deleted; historical records are preserved.
- [BR-SUB-007](../02_DOMAINS/SUBSCRIPTION/SUBSCRIPTION_RULES.md#br-sub-007) — Renewal creates a new Subscription linked to the previous Subscription and preserves the prior period, balance, Payment, Ledger and historical price records.
- [BR-FRZ-001](../02_DOMAINS/SUBSCRIPTION/SUBSCRIPTION_RULES.md#br-frz-001) — A Freeze request is not effective until approved by the authorized role.
- [BR-FRZ-002](../02_DOMAINS/SUBSCRIPTION/SUBSCRIPTION_RULES.md#br-frz-002) — A Freeze request may be rejected, and the rejection reason is retained.
- [BR-FRZ-003](../02_DOMAINS/SUBSCRIPTION/SUBSCRIPTION_RULES.md#br-frz-003) — Freeze history is retained in the relevant timeline.
- [BR-FRZ-004](../02_DOMAINS/SUBSCRIPTION/SUBSCRIPTION_RULES.md#br-frz-004) — An approved Freeze pauses normal training eligibility and extends Subscription expiry by its approved frozen duration; early Resume may be approved and otherwise automatic Resume occurs at the approved end date. Duration, limits and fees remain configuration.

## TRANSFER

- [BR-TRN-001](../02_DOMAINS/TRANSFER/TRANSFER_RULES.md#br-trn-001) — Group, Level, Sport and Branch Transfer are separate policy types; each validates its own eligibility, capacity/availability, approval and Subscription/balance effects.
- [BR-TRN-002](../02_DOMAINS/TRANSFER/TRANSFER_RULES.md#br-trn-002) — Approved Transfer changes future assignments from its effective date and preserves old/new assignment, request/decision actors, approval/rejection, reason, cancellation and Audit History without rewriting past Sessions.

## FINAL BUSINESS CLOSURE RULES

- [BR-ACA-002](../02_DOMAINS/ACADEMY/ACADEMY_RULES.md#br-aca-002) — Academy suspension/archive requires completed dependency review.
- [BR-BRA-004](../02_DOMAINS/BRANCH/BRANCH_RULES.md#br-bra-004) — availability withdrawal grandfathers existing relationships.
- [BR-SPT-001](../02_DOMAINS/SPORT/SPORT_RULES.md#br-spt-001) — Sport lifecycle uses prospective retirement.
- [BR-PRG-004](../02_DOMAINS/PROGRAM/PROGRAM_RULES.md#br-prg-004) — Program lifecycle uses prospective retirement.
- [BR-PLAN-001](../02_DOMAINS/PROGRAM/PROGRAM_RULES.md#br-plan-001) — active Subscription is pinned to its accepted Plan version.
- [BR-LEA-003](../02_DOMAINS/STUDENT/STUDENT_RULES.md#br-lea-003) — Lead has controlled states, reasons and reopening.
- [BR-PAR-009](../02_DOMAINS/PARENT/PARENT_RULES.md#br-par-009) — Guardian authority is revalidated at decision/execution.
- [BR-GRP-006](../02_DOMAINS/GROUP/GROUP_RULES.md#br-grp-006) — Group Closing requires dependency disposition.
- [BR-SES-003](../02_DOMAINS/SESSION/SESSION_RULES.md#br-ses-003) — Branch closure gives every future Session an outcome.
- [BR-SES-004](../02_DOMAINS/SESSION/SESSION_RULES.md#br-ses-004) — Session states and reschedule linkage are fixed.
- [BR-ATT-008](../02_DOMAINS/ATTENDANCE/ATTENDANCE_RULES.md#br-att-008) — post-cancellation Attendance becomes Voided — Session Cancelled.
- [BR-DOC-001](../02_DOMAINS/DOCUMENTS/DOCUMENTS_RULES.md#br-doc-001) — Documents use a governed base lifecycle and class profiles.
- [BR-SOC-001](../02_DOMAINS/SOCIAL/SOCIAL_RULES.md#br-soc-001) — Posts are audience-scoped and lifecycle governed.
- [BR-SOC-002](../02_DOMAINS/SOCIAL/SOCIAL_RULES.md#br-soc-002) — visible users interact under scoped moderation.
- [BR-SRV-001](../02_DOMAINS/SOCIAL/SOCIAL_RULES.md#br-srv-001) — Surveys contain supported typed Questions and a lifecycle.
- [BR-SRV-002](../02_DOMAINS/SOCIAL/SOCIAL_RULES.md#br-srv-002) — response/anonymity/edit/result policy is explicit.
- [BR-EVA-007](../02_DOMAINS/EVALUATION/EVALUATION_RULES.md#br-eva-007) — Session Feedback is distinct and visibility classified.
- [BR-EVA-008](../02_DOMAINS/EVALUATION/EVALUATION_RULES.md#br-eva-008) — feedback/Evaluation comments are append-only.
- [BR-EVA-009](../02_DOMAINS/EVALUATION/EVALUATION_RULES.md#br-eva-009) — Initial Evaluation permits authorized Coach/Admin evaluator and human final placement.
- [BR-LVL-001](../02_DOMAINS/SPORT/SPORT_RULES.md#br-lvl-001) — Sport/Program → Stage → Level hierarchy is canonical.
- [BR-LVL-002](../02_DOMAINS/SPORT/SPORT_RULES.md#br-lvl-002) — Level criteria are effective-dated/versioned.
- [BR-LVL-003](../02_DOMAINS/SPORT/SPORT_RULES.md#br-lvl-003) — Level/Stage progression is Evaluation-driven and human-approved.

## Metrics

- Total canonical Rules: 114.
- Duplicate Rule IDs: 0.
- Open client Business Decisions: 0.
