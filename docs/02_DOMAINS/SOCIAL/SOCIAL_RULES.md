# Social and Survey Rules

This file is the canonical owner of Post, feed interaction, Survey and Poll business behavior. Communication/Notification remains operational message delivery and is not a Post or Survey.

## BR-SOC-001

| Field | Value |
|---|---|
| Name | Audience-Scoped Post Lifecycle |
| Status | CONFIRMED |
| Business Statement | A Post has an explicit Academy, Branch, Sport, Program, Group or selected-authorized audience and follows Draft, Published, Edited, Hidden/Moderated and Archived states; Academy Admin and an authorized Coach may create within scope. |
| Domain Owner | SOCIAL |
| Authority | Academy Admin; authorized Coach within assigned scope; other authors only through explicit process authority. |
| Lifecycle / State | Draft → Published → Edited or Hidden/Moderated → Archived; republishing requires authority. |
| Validation | Author is current and authorized; audience is valid; visibility is checked on every read and interaction. |
| Rejection / Exception | Reject unauthorized publication or out-of-scope access; no author or audience may be inferred. |
| History / Audit | Preserve author, audience, publish time, every edit, moderation action/reason and archive state; never physically erase moderation evidence. |
| Configuration Dependency | Post visibility, comment-enabled flag and additional-author bindings; numeric values remain configuration. |
| Current / Future Scope | CURRENT |
| Decision / NBCG Source | SRC-015 — client-approved Final Business Closure requirement. |
| Canonical References | SOCIAL_LIFECYCLE.md; SOCIAL_MODEL.md; BR-ADM-001/002; BR-HIS-001; BR-COM-001/002 |
## BR-SOC-002

| Field | Value |
|---|---|
| Name | Post Interaction and Moderation |
| Status | CONFIRMED |
| Business Statement | Authorized visible users may react and comment; an author may edit own Post within policy, while Academy Admin or explicitly authorized moderator may hide/moderate Posts or comments, disable comments and record a reason; Coach ownership does not grant Academy-wide moderation. |
| Domain Owner | SOCIAL |
| Authority | Visible authorized user for interaction; author for owned edit; Academy Admin or scoped moderator for moderation. |
| Lifecycle / State | Comment/reaction is Active or Moderated/Removed-from-view while historical authorship remains; Post may disable new comments. |
| Validation | User is active, in audience and permitted; moderated/archived/disabled state blocks new interaction. |
| Rejection / Exception | Reject out-of-scope interaction; hide rather than erase inappropriate content; no Coach Academy-wide moderation unless explicitly granted. |
| History / Audit | Preserve comment author, reaction attribution where required, edit/moderation actor, reason, time and prior visible state. |
| Configuration Dependency | Interaction permissions, reaction catalog, comment-edit window if allowed, and moderation bindings; no universal numbers. |
| Current / Future Scope | CURRENT |
| Decision / NBCG Source | SRC-015 — client-approved Final Business Closure requirement. |
| Canonical References | SOCIAL_LIFECYCLE.md; BR-SOC-001; BR-ADM-001; BR-HIS-001 |
## BR-SRV-001

| Field | Value |
|---|---|
| Name | Survey Structure, Audience and Lifecycle |
| Status | CONFIRMED |
| Business Statement | A Survey contains one or more Questions of Single Choice, Multiple Choice, Yes/No, Rating Scale or Free Text, targets an explicit authorized audience, and follows Draft, Published/Open, Closed and Archived states. |
| Domain Owner | SOCIAL |
| Authority | Academy Admin; authorized Coach only within permitted Group, Program or training scope. |
| Lifecycle / State | Draft → Published/Open → Closed → Archived; open/close period is effective-dated. |
| Validation | Every Question has a supported type; rating range and answer constraints resolve from approved Survey/question configuration; audience and creator scope are valid. |
| Rejection / Exception | Reject empty, invalid, out-of-scope or unauthorized Survey publication; do not invent a universal rating range. |
| History / Audit | Preserve creator, questions/template version, audience, publication/closure times, policy settings and lifecycle transitions. |
| Configuration Dependency | Question constraints, rating range, open/close period and creator/audience bindings; required values are PRODUCTION CONFIGURATION REQUIRED. |
| Current / Future Scope | CURRENT |
| Decision / NBCG Source | SRC-015 — client-approved Final Business Closure requirement. |
| Canonical References | SOCIAL_LIFECYCLE.md; SOCIAL_MODEL.md; BR-ADM-001; BR-HIS-001 |
## BR-SRV-002

| Field | Value |
|---|---|
| Name | Survey Response Governance |
| Status | CONFIRMED |
| Business Statement | Each Survey declares anonymous or identified response policy, single or multiple response policy, edit-before-close policy, individual and aggregate result visibility; closure blocks new or further edits while an in-progress unsubmitted response is rejected or retained only as a non-response draft under declared policy. |
| Domain Owner | SOCIAL |
| Authority | Authorized respondent in audience; Survey owner and specifically authorized analysts see results only at declared visibility. |
| Lifecycle / State | Response Draft where enabled → Submitted; Survey closure makes submitted responses immutable except authorized correction history. |
| Validation | Survey is Open, respondent is in audience, response count/edit policy permits action and visibility rules authorize each result view. |
| Rejection / Exception | Reject late, duplicate, out-of-audience or unauthorized result access; anonymous responses must not expose respondent identity. |
| History / Audit | Preserve Survey/version, response time, policy snapshot, submitted answer history and authorized corrections; anonymity policy governs identity retention/exposure. |
| Configuration Dependency | Anonymity, response multiplicity, pre-close edit, draft retention and result visibility are per-Survey policy. |
| Current / Future Scope | CURRENT |
| Decision / NBCG Source | SRC-015 — client-approved Final Business Closure requirement. |
| Canonical References | SOCIAL_LIFECYCLE.md; BR-SRV-001; BR-HIS-001 |

