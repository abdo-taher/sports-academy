# Coach Assignment

Approved facts:

- BR-GRP-001 — Every Training Group has a Primary Coach and weekly schedule.
- BR-GRP-003 — A Substitute Coach assigned to a Session does not become the Group's Primary Coach automatically.

BD-011 approves multiple explicit Branch/Sport assignments after qualification and schedule-conflict checks. Assignments are approved, effective-dated, historical and auditable. Reassignment, suspension and exit change future responsibility only; future Groups/Sessions are reassigned without rewriting historical Groups, Sessions, Evaluations or assignments. Exact role binding follows the Process Authority Matrix.

## Assignment Transitions

| From | Action | To | Initiator | Approver | Preconditions | Rejection Behavior | Effective Date / Downstream Effects | History / Audit |
|---|---|---|---|---|---|---|---|---|
| No assignment for scope | Approve Branch/Sport assignment | Active effective assignment | Branch Admin or Academy Admin | Configured Coach assignment authority | Qualification, scope and scheduling-conflict checks pass | No assignment; reason retained | Responsibility begins at effective time; Group Primary Coach requires separate explicit assignment | Actor, approver, qualifications, checks, scope and effective dates |
| Active assignment | Reassign future responsibility | Assignment ended/re-scoped from effective date | Branch Admin or Academy Admin | Configured assignment authority | Replacement/continuity and conflict review complete | Existing assignment remains | Future Groups/Sessions change from effective date; historical work unchanged | Old/new scope, reason, actors and effective date |
| Active assignment | Suspend | Suspended for future operation | Branch Admin or Academy Admin | Configured suspension authority | Impact and reassignment review complete | Assignment remains Active with reason | Future responsibility stops/reassigns; prior Sessions/Evaluations unchanged | Before/after, reason, decision and affected future work |
| Active or Suspended assignment | End on Coach exit | Ended | Branch Admin or Academy Admin | Configured exit authority | All future responsibility assigned or explicitly handled | Remain current state pending resolution | Assignment ends at effective date; historical assignment remains visible | Exit decision, effective date, reassignment and full history |
| Active Group assignment | Assign Substitute for one Session | Primary assignment unchanged | Authorized scheduling actor | Configured Session assignment authority | Substitute qualified/available for Session | Substitute rejected; Primary unchanged | Substitute owns only named Session; no automatic Group Primary change | Session, substitute, reason, actor and time |
