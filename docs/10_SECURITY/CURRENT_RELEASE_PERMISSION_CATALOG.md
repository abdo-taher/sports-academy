# Current Release Permission Catalog

Permissions are process actions, not proof of business authority. The canonical Process Authority Matrix determines role binding and delegation.

| Permission Set | Capability | Sensitive Actions | Scope / Approval Guard |
| --- | --- | --- | --- |
| PERM-CAP-01 | CAP-01 | Use only approved Decision Log and canonical business sources; prevent non-authoritative promotion | Canonical baseline selected; Legacy/Derived/technical conflict resolves to canonical; change is audited |
| PERM-CAP-02 | CAP-02 | Operate one Academy with multiple Branches using approved state transitions | Only allowed transitions; Branch closure blocks normal Branch operation without changing Student/Subscription state |
| PERM-CAP-03 | CAP-03 | Resolve Academy default then only approved effective more-specific override | Mandatory configuration present; non-overridable invariants protected; missing override uses Academy default |
| PERM-CAP-04 | CAP-04 | Resolve process-level authority and bounded delegation for every sensitive action | No technical-access shortcut; delegation valid, revocable, within authority and audited |
| PERM-CAP-05 | CAP-05 | Manage Sport → Program → Service/Plan and explicit Branch Sport/Program availability | Program distinct from Plan/Subscription/Payment; unavailable catalog item cannot be selected |
| PERM-CAP-06 | CAP-06 | Track separate Lead, optional Trial/bypass, duplicate resolution and formal Student creation | No automatic Student/Subscription; one identity; approved Trial states; provenance linked |
| PERM-CAP-07 | CAP-07 | Maintain minor/adult, Primary/additional Guardian, billing and scoped access relationships | Minor has at least one and exactly one Primary; adult self-management permitted; changes audited |
| PERM-CAP-08 | CAP-08 | Manage multiple qualified effective Branch/Sport assignments and future responsibility changes | Conflict/qualification validation; Substitute not Primary; historical work unchanged |
| PERM-CAP-09 | CAP-09 | Manage Group capacity, Primary Coach, recurring Schedule and dated Session lifecycle | Capacity and conflicts validated; Schedule distinct from Session; cancellation/reschedule effects deterministic |
| PERM-CAP-10 | CAP-10 | Create Student Subscription from Branch-enabled Plan with own balance and Group/Private type | One Student/Sport/Level and Program/Plan context; history retained; no silent deletion |
| PERM-CAP-11 | CAP-11 | Record Payment/Invoice, staged escalation, clearance, Discount and compensating finance events | Activation only after clearance/exception; access changes named; original finance retained |
| PERM-CAP-12 | CAP-12 | Record Session-specific Attendance with one eligible funding Subscription and compensating corrections | No duplicate, expiry grace or negative balance; one Attendance funds exactly one Subscription |
| PERM-CAP-13 | CAP-13 | Record, approve, publish and version Evaluations and governed placement/movement | Creator/reviewer separation; Sport/Level criteria; original/override/correction history retained |
| PERM-CAP-14 | CAP-14 | Request/approve/reject time-bound Freeze, pause eligibility, extend expiry and Resume | Not effective before approval; early approved or automatic end Resume; Student state unchanged |
| PERM-CAP-15 | CAP-15 | Create new linked Renewal, apply configured carry-over and deterministic overlap funding | Old record immutable; no default/cross-Sport carry-over; provenance visible; ambiguity blocks |
| PERM-CAP-16 | CAP-16 | Process separate Group, Level, Sport and Branch Transfer policies from request to effective date | Availability/capacity/criteria pass; history unchanged; future assignments update from effective date |
| PERM-CAP-17 | CAP-17 | Review active relationships, Archive non-destructively and Return through fresh independent decisions | Nothing disappears; no automatic Student/Subscription/Group/account/entitlement reactivation |
| PERM-CAP-18 | CAP-18 | Send targeted message/notification/announcement and preserve official reports/comments separately | Relationship/scope authorization; delivery failure does not alter business event; history retained |
| PERM-CAP-19 | CAP-19 | Use versioned forms/documents only as evidence/input for owning domain process | Form cannot create missing Business Truth or approval; versions/visibility/retention follow owner |
| PERM-CAP-20 | CAP-20 | Keep independent tenants, Events, Tournaments, Camps, related Certificates and community/marketplace out of current behavior | No current rule, charge, Attendance, Subscription consumption, API/UX/QA requirement |
