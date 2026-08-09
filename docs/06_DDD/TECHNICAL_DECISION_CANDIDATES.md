# Retired Technical Decision Candidates

This file retains routing for legacy candidate identifiers only. It cannot approve architecture and must not be used as a current option list.

| Legacy candidate | Current disposition |
|---|---|
| ADR-CANDIDATE-001 — financial ledger/session quota separation | Business behavior is governed by current Payment, Subscription and Attendance Rules; any remaining implementation choice follows the technical ADR protocol. |
| ADR-CANDIDATE-002 — generic queue-based communications | Superseded as a tool candidate by `TECH-BASELINE-001`: BullMQ with Redis is locked for appropriate background jobs. |
| ADR-CANDIDATE-003 — generic soft delete | Not approved. Persistence must implement each canonical lifecycle; Archive is not delete and generic `deletedAt` behavior is prohibited. |

New decisions use `TECH-ADR-XXX`, are registered in `../15_CHANGE_MANAGEMENT/TECHNICAL_DECISION_LOG.md`, and follow `../00_GOVERNANCE/TECH_DECISION_PROTOCOL.md`. Legacy `ADR-001`–`ADR-005` entries in the Business Decision Log remain explicitly unverified claims and have no technical authority.
