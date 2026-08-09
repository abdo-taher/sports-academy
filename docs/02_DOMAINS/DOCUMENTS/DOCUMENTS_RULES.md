# Documents Rules

This file is the canonical rule definition file for the Documents domain.

No separate Documents-specific invariant is required for the current release. Documents/forms obey the rules, authority, history and configuration of the business process they support and cannot originate Business Truth.

## BR-DOC-001

| Field | Value |
|---|---|
| Name | Governed Document/Form Lifecycle |
| Status | CONFIRMED |
| Business Statement | Documents/forms use Submitted, Under Review, Approved, Rejected, Expired, Superseded and Archived base states; each class profile governs optional Draft/Withdrawn states, authority, validity, renewal, downstream effects and retention. |
| Domain Owner | DOCUMENTS |
| Authority | Class-profile submitter/reviewer/approver; self-approval only when expressly permitted; owning domain controls business effect. |
| Lifecycle / State | Optional Draft → Submitted → Under Review → Approved/Rejected → Expired or Superseded → Archived; optional Withdrawn by profile. |
| Validation | Class, version, owner, required evidence, authority and effective validity profile are resolved; dependent process revalidates current approved evidence. |
| Rejection / Exception | Reject invalid transition, unauthorized/self approval or destructive overwrite; hold dependent process when required evidence is not valid. |
| History / Audit | Preserve every version/state, actor, reason, review/approval, validity, supersession and retention action. |
| Configuration Dependency | Document-class profile: optional states, validity, reminders, authority, privacy and retention; production values required. |
| Current / Future Scope | CURRENT |
| Decision / NBCG Source | NBCG-DEC-012 / NBCG-012 |
| Canonical References | DOCUMENT_LIFECYCLE.md; DOCUMENTS_MODEL.md; BR-HIS-001; BR-ADM-001 |
