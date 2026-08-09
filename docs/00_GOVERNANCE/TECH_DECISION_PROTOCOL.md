# Technical Decision Protocol

## Purpose

This protocol is the only route for changing a locked technology, architecture, dependency concern or fixed structure. It governs technical choices only and cannot approve or alter Business behavior.

## When a `TECH-ADR` Is Required

Create and approve `TECH-ADR-XXX` before:

- replacing or adding a framework, ORM, database, queue, state library, validation library, UI system or test runner;
- changing Modular Monolith to distributed services;
- introducing a second active tool for one concern;
- changing a fixed application/module/feature structure;
- changing runtime or a major framework/package version;
- selecting a concern marked `NOT YET LOCKED — ADR REQUIRED BEFORE IMPLEMENTATION`;
- coupling to an authentication, storage or realtime provider;
- creating a temporary migration exception to the stack lock.

Normal exact-version initialization of already approved application dependencies is recorded in the cumulative Change Log and lockfile. A compatible security patch may follow `DEPENDENCY_RULES.md`. Neither path may replace the approved technology.

## Conflict Behavior

When a request or generated proposal conflicts with the lock:

1. stop before files or dependencies change;
2. report `TECH STACK CONFLICT — ADR REQUIRED` or `PROPOSED TECHNOLOGY CHANGE REQUIRES ADR`;
3. name the current locked solution and proposed conflict;
4. optionally prepare a proposed ADR for review;
5. do not implement until the ADR status is `APPROVED`.

## Record Location and Identity

- Register every record in `docs/15_CHANGE_MANAGEMENT/TECHNICAL_DECISION_LOG.md`.
- Store the full record at `docs/15_CHANGE_MANAGEMENT/TECHNICAL_ADRS/TECH-ADR-XXX-<kebab-case-title>.md`.
- Allocate the next unused three-digit ID from the log; never recycle an ID.
- The initial stack lock is baseline `TECH-BASELINE-001`, not a retroactive ADR.

## Required Record

```markdown
# TECH-ADR-XXX — Title

- Status: PROPOSED | APPROVED | REJECTED | SUPERSEDED
- Date:
- Decision owner:
- Technical approver:
- Supersedes / superseded by:
- Related Change ID:
- Business impact: N/A — NO BUSINESS IMPACT | BUSINESS CHANGE PROTOCOL REQUIRED

## Context
## Existing solution
## Problem
## Constraints
## Options considered
## Selected option
## Why
## Consequences and trade-offs
## Migration impact
## Affected apps/packages
## Documentation impact
## Security and operational impact
## Test and validation plan
## Rollback considerations
## Approval
```

The options section must fairly include the locked solution. Approval must be explicit from the authorized project technical approver; an AI cannot self-approve.

## Lifecycle

```text
PROPOSED -> APPROVED -> IMPLEMENTED through a governed Change Log entry
         -> REJECTED
APPROVED -> SUPERSEDED by a later approved TECH-ADR
```

- A proposal has no implementation authority.
- Approval precedes dependency, structure and code changes.
- Implementation updates the stack lock and every affected governance, technical, CI and agent-routing file in the same governed change.
- A superseded record is retained permanently for history and linked from its replacement.
- A rollback follows the approved record's rollback plan and is logged; it never silently restores an old stack.

## Business Gate

If a proposed technical decision changes what the platform permits, requires, records, calculates or exposes to a Business actor, stop the technical ADR and run `AI_CHANGE_PROPAGATION_PROTOCOL.md` first. The technical ADR may proceed only after the Business Gate passes. A technical implementation detail with proven zero Business effect records `N/A — NO BUSINESS IMPACT`.

## Initial and Open Decisions

The approved baseline is recorded in `TECHNICAL_DECISION_LOG.md`. Concerns intentionally left open are listed in `TECH_STACK_LOCK.md` and `TECHNICAL_OPEN_QUESTIONS.md`; no AI may fill them silently.
