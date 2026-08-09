# Group Model

## Definition

A Training Group is a recurring training unit associated with a Sport, Level, Primary Coach and schedule.

## Purpose

Organizes Students into recurring training operations.

## Business Ownership

Academy Admin/Supervisor according to approved authority.

## Actors

Use `../../01_BUSINESS_FOUNDATION/ROLE_RESPONSIBILITY_MATRIX.md`. Authority follows BD-025; a missing production role binding is `BUSINESS CONFIGURATION REQUIRED`.

## Business-Level Attributes

Business attributes are limited to concepts required by approved rules and lifecycles. Do not infer database fields as business policy.

## Relationships

- Sport
- Level
- Coach
- Student
- Schedule
- Training Session

## Business Invariants

- BR-GRP-001: Every Training Group has a Primary Coach and an established weekly schedule.
- BR-GRP-002: A Student transfer preserves old and new assignments, effective date, reason and decision history to the extent collected.
- BR-GRP-003: A Substitute Coach assigned to a Session does not become the Group's Primary Coach automatically.
- BR-GRP-004: The receiving Group's suitability and capacity must be checked before transfer; limits and override authority require approval.

## Lifecycle Relevance

See `GROUP_LIFECYCLE.md`.

## History Requirements

History is preserved when required by rule, lifecycle, finance, audit, archive or timeline behavior. Archive is not permanent deletion.

## Branch / Academy Scope

Use `../../01_BUSINESS_FOUNDATION/ACADEMY_OPERATING_MODEL.md` and domain-specific policy files. Resolve scope and precedence through `../../04_POLICIES/POLICY_CONFIGURATION_CATALOG.md`; missing production values are configuration errors.

## Permissions Relevance

Permissions must derive from roles, state, actor relationship and approved process ownership.

## Approved Decisions

- BD-022 — approved; see Decision Log and linked canonical Rules.
- BD-023 — approved; see Decision Log and linked canonical Rules.
- BD-025 — approved; see Decision Log and linked canonical Rules.
- BD-006 — approved; see Decision Log and linked canonical Rules.
- BD-011 — approved; see Decision Log and linked canonical Rules.
- BD-013 — approved; see Decision Log and linked canonical Rules.
- BD-019 — approved; see Decision Log and linked canonical Rules.
- BD-024 — approved; see Decision Log and linked canonical Rules.
