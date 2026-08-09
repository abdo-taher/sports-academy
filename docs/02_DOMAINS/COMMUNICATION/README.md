# Communication Domain

## Business Completeness

`BUSINESS READY WITH CONFIGURATION REQUIRED` — The domain business model is approved. Any remaining percentages, amounts, durations, limits, thresholds, deadlines, role bindings or catalog values are governed configuration and are not open client Business Decisions.

## Definition

Business messages and notifications sent to authorized audiences.

Communication/Notification is operational delivery of business events/messages. It is not a Social Post/feed item and not a Survey. Interactive content and structured responses are owned by [Social and Survey](../SOCIAL/README.md).

## Business Purpose

Keeps stakeholders informed while respecting relationship visibility and audit requirements.

## Ownership

Academy Admin or responsible operational role according to approved responsibility model.

## Core Relationships

```text
Communication → Parent → Student → Coach → Session → Payment → Request → Notification
```

## Approved States

Recipient, timing, retention and authority are policy-dependent.

## Core Rules

- [BR-REP-001](./COMMUNICATION_RULES.md#br-rep-001) — A Coach may write a report for an assigned Session.
- [BR-REP-002](./COMMUNICATION_RULES.md#br-rep-002) — A Supervisor may write a report when responsible for the Session under the approved responsibility model.
- [BR-REP-003](./COMMUNICATION_RULES.md#br-rep-003) — Parent and administration comments do not replace or erase the official report.
- [BR-COM-001](./COMMUNICATION_RULES.md#br-com-001) — Communication requires an authorized audience and respects relationship-based visibility.
- [BR-COM-002](./COMMUNICATION_RULES.md#br-com-002) — Business communication history is auditable and is not silently removed.

## Main Lifecycles

- [`COMMUNICATION_LIFECYCLE.md`](./COMMUNICATION_LIFECYCLE.md)

## Main Processes

- See the lifecycle file for process sequence, validations, exceptions, audit, timeline/history and cross-domain effects.

## Related Policies

- [`COMMUNICATION_POLICIES.md`](../../04_POLICIES/COMMUNICATION_POLICIES.md) where a policy file exists.

## Approved Business Decisions

- BD-025 — approved; see Decision Log and linked canonical Rules.
- BD-030 — approved; see Decision Log and linked canonical Rules.

## Downstream References

- Requirements: `../../05_REQUIREMENTS/`
- DDD: `../../06_DDD/`
- Database: `../../07_DATABASE/`
- API: `../../08_API/`
- UX/UI: `../../09_UX_UI/`
- QA: `../../12_QA/`
