# Subscription Model

## Definition

The agreement granting a Student access to a defined training service for a period and session quantity.

## Purpose

Controls entitlement, session balance, renewal, freeze and training eligibility.

## Business Ownership

Academy Admin and Accountant according to process and authority.

## Actors

Use `../../01_BUSINESS_FOUNDATION/ROLE_RESPONSIBILITY_MATRIX.md`. Authority follows BD-025; a missing production role binding is `BUSINESS CONFIGURATION REQUIRED`.

## Business-Level Attributes

Business attributes are limited to concepts required by approved rules and lifecycles. Do not infer database fields as business policy.

## Relationships

- Student
- Sport
- Level
- Payment
- Attendance
- Ledger
- Freeze
- Renewal

## Business Invariants

- BR-SUB-001: Each Subscription belongs to one Student, one Sport and one Level.
- BR-SUB-002: A Subscription is either Group or Private, not both.
- BR-SUB-003: Each Subscription has its own session quantity and balance.
- BR-SUB-004: Every session deduction, restoration and manual adjustment is recorded in a Subscription Ledger with its reason and history.
- BR-SUB-005: Normal training requires active, cleared, non-frozen, unexpired eligibility and sufficient balance.
- BR-SUB-006: A Subscription is not permanently deleted; historical records are preserved.
- BR-SUB-007: Renewal creates a new linked Subscription and preserves the previous period/history.
- BR-FRZ-001: A Freeze request is not effective until approved by the authorized role.
- BR-FRZ-002: A Freeze request may be rejected, and the rejection reason is retained.
- BR-FRZ-003: Freeze history is retained in the relevant timeline.
- BR-FRZ-004: Freeze duration, extension, fees and resume behavior are policy-dependent; no generated numeric limit is authoritative.

## Lifecycle Relevance

See `SUBSCRIPTION_LIFECYCLE.md`.

## History Requirements

History is preserved when required by rule, lifecycle, finance, audit, archive or timeline behavior. Archive is not permanent deletion.

## Branch / Academy Scope

Use `../../01_BUSINESS_FOUNDATION/ACADEMY_OPERATING_MODEL.md` and domain-specific policy files. Resolve scope and precedence through `../../04_POLICIES/POLICY_CONFIGURATION_CATALOG.md`; missing production values are configuration errors.

## Permissions Relevance

Permissions must derive from roles, state, actor relationship and approved process ownership.

## Approved Decisions

- BD-014 — approved; see Decision Log and linked canonical Rules.
- BD-016 — approved; see Decision Log and linked canonical Rules.
- BD-020 — approved; see Decision Log and linked canonical Rules.
- BD-021 — approved; see Decision Log and linked canonical Rules.
- BD-023 — approved; see Decision Log and linked canonical Rules.
- BD-006 — approved; see Decision Log and linked canonical Rules.
- BD-008 — approved; see Decision Log and linked canonical Rules.
- BD-009 — approved; see Decision Log and linked canonical Rules.
- BD-013 — approved; see Decision Log and linked canonical Rules.
- BD-015 — approved; see Decision Log and linked canonical Rules.
- BD-017 — approved; see Decision Log and linked canonical Rules.
- BD-018 — approved; see Decision Log and linked canonical Rules.
- BD-019 — approved; see Decision Log and linked canonical Rules.
- BD-022 — approved; see Decision Log and linked canonical Rules.
- BD-024 — approved; see Decision Log and linked canonical Rules.
- BD-026 — approved; see Decision Log and linked canonical Rules.
- BD-029 — approved; see Decision Log and linked canonical Rules.
- BD-030 — approved; see Decision Log and linked canonical Rules.
