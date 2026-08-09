# Sport Rules

This file is the canonical rule definition file for the Sport domain.

Sport-specific behavior is governed by BR-BRA-001, BR-BRA-003, BR-PRG-001–003 and BR-EVA-001/005. No duplicate Sport rule is created merely to mirror those canonical invariants.

## BR-SPT-001

| Field | Value |
|---|---|
| Name | Sport Grandfathered Retirement |
| Status | CONFIRMED |
| Business Statement | Sport states are Draft, Active, Suspended and Retired; suspension/retirement blocks new dependencies while existing approved relationships continue to normal completion, and reactivation requires authorized approval. |
| Domain Owner | SPORT |
| Authority | Academy Sport lifecycle approver; dependent-domain changes require their own authority. |
| Lifecycle / State | Draft → Active ↔ Suspended → Retired; Retired → Active only by approved reactivation. |
| Validation | Dependent population recorded; new use blocked; Branch availability still explicit. |
| Rejection / Exception | Reject new Program/relationship against Suspended/Retired Sport; never terminate existing commitments silently. |
| History / Audit | Preserve transitions, dependencies, actor, reason, approval, effective time and grandfather status. |
| Configuration Dependency | Catalog visibility, notices and reason codes; state meaning fixed. |
| Current / Future Scope | CURRENT |
| Decision / NBCG Source | NBCG-DEC-004 / NBCG-004 |
| Canonical References | SPORT_LIFECYCLE.md; SPORT_MODEL.md; BR-BRA-001 |


## BR-LVL-001

| Field | Value |
|---|---|
| Name | Sport Program Stage Level Hierarchy |
| Status | CONFIRMED |
| Business Statement | Progression hierarchy is Sport → Program where applicable → Stage → Level; Stage is a broader ordered phase containing one or more ordered Levels, and Level is the finer Student progression unit. |
| Domain Owner | SPORT / EVALUATION |
| Authority | Authorized Sport/Program configuration owner; no operational actor may invent hierarchy. |
| Lifecycle / State | Stage/Level definitions are versioned Active/Inactive configuration; Student current Stage is derived from assigned current Level. |
| Validation | Every Level belongs to one Stage and Sport/Program context; ordering is complete; exact Levels per Stage are configured. |
| Rejection / Exception | Reject orphan Level, ambiguous order or manual Stage assignment detached from Level. |
| History / Audit | Preserve hierarchy versions, ordering, activation, actor, approval and effective dates. |
| Configuration Dependency | Number/names/order of Stages/Levels per Sport/Program; no global count. |
| Current / Future Scope | CURRENT |
| Decision / NBCG Source | SRC-015 — client-approved Final Business Closure requirement. |
| Canonical References | STAGE_LEVEL_MODEL.md; BR-EVA-001/005; BR-CFG-001 |


## BR-LVL-002

| Field | Value |
|---|---|
| Name | Versioned Level Criteria |
| Status | CONFIRMED |
| Business Statement | Each Level has effective-dated evaluation criteria and progression requirements in its Sport/Program context; an Evaluation remains interpreted under the criteria version effective for that Evaluation. |
| Domain Owner | SPORT / EVALUATION |
| Authority | Authorized criteria editor and approver; evaluator applies effective approved version. |
| Lifecycle / State | Criteria Draft → Approved/Active → Superseded/Inactive; old versions remain historical. |
| Validation | Criteria version active at assessment time, required evidence complete and thresholds resolved from configuration. |
| Rejection / Exception | Block evaluation/progression if mandatory criteria are absent; never retroactively reinterpret earlier Evaluation. |
| History / Audit | Preserve criteria versions, assessment snapshot, calculations, actors, approval and effective times. |
| Configuration Dependency | Sport/Program/Level criteria and thresholds; no universal numbers. |
| Current / Future Scope | CURRENT |
| Decision / NBCG Source | SRC-015; BD-013 |
| Canonical References | STAGE_LEVEL_MODEL.md; EVALUATION_LIFECYCLE.md; CFG-EVA-001 |


## BR-LVL-003

| Field | Value |
|---|---|
| Name | Human-Governed Level and Stage Progression |
| Status | CONFIRMED |
| Business Statement | Level Evaluation may result in remain, next-Level progression, re-evaluation, or approved movement/demotion; system support is advisory and final movement requires human approval. Passing the final Level may move to the first eligible Level of the next Stage, and no unrelated manual Stage change may bypass Level rules except an explicit audited exception. |
| Domain Owner | SPORT / EVALUATION |
| Authority | Evaluator recommends; Supervisor or authorized progression approver decides; authorized executor applies movement. |
| Lifecycle / State | Current Level → approved outcome; cross-Stage movement occurs only through approved final-Level progression or explicit exception. |
| Validation | Current Level, criteria version, Evaluation, destination eligibility, Program context and authority are valid; pending Transfer/Archive is revalidated before execution. |
| Rejection / Exception | Hold movement on pending Transfer/Archive or changed eligibility; reject system-only decision and bypassed Stage change. |
| History / Audit | Preserve old/new Program, Stage, Level, Evaluation, recommendations, decision, reason, actor, effective date and exception. |
| Configuration Dependency | Criteria, thresholds, re-evaluation policy and exception authority; no global threshold. |
| Current / Future Scope | CURRENT |
| Decision / NBCG Source | SRC-015; BD-013; BD-022; BD-024 |
| Canonical References | STAGE_LEVEL_MODEL.md; PROMOTION_PROCESS.md; BR-EVA-005/006/009 |
