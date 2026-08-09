# Attendance Model

## Definition

The record of Student or Coach participation in a Training Session.

## Purpose

Records participation and drives session deduction/restoration where eligible.

## Business Ownership

Coach/Supervisor/Admin according to approved authority.

## Actors

Use `../../01_BUSINESS_FOUNDATION/ROLE_RESPONSIBILITY_MATRIX.md`. Authority follows BD-025; a missing production role binding is `BUSINESS CONFIGURATION REQUIRED`.

## Business-Level Attributes

Business attributes are limited to concepts required by approved rules and lifecycles. Do not infer database fields as business policy.

## Relationships

- Training Session
- Student
- Subscription Ledger
- Excuse
- Make-up Session
- Evaluation

## Business Invariants

- BR-ATT-001: Attendance belongs to a specific Training Session, not merely a calendar day.
- BR-ATT-002: The same Student cannot have duplicate Attendance for the same Session.
- BR-ATT-003: Confirmed present Attendance deducts a session from the eligible Subscription Ledger.
- BR-ATT-004: Attendance correction preserves who changed it, the reason, timestamp and resulting ledger adjustment.
- BR-ATT-005: An accepted excuse may prevent deduction or restore a deducted session; make-up/extension selection is policy-dependent.

## Lifecycle Relevance

See `ATTENDANCE_LIFECYCLE.md`.

## History Requirements

History is preserved when required by rule, lifecycle, finance, audit, archive or timeline behavior. Archive is not permanent deletion.

## Branch / Academy Scope

Use `../../01_BUSINESS_FOUNDATION/ACADEMY_OPERATING_MODEL.md` and domain-specific policy files. Resolve scope and precedence through `../../04_POLICIES/POLICY_CONFIGURATION_CATALOG.md`; missing production values are configuration errors.

## Permissions Relevance

Permissions must derive from roles, state, actor relationship and approved process ownership.

## Approved Decisions

- BD-016 — approved; see Decision Log and linked canonical Rules.
- BD-017 — approved; see Decision Log and linked canonical Rules.
- BD-018 — approved; see Decision Log and linked canonical Rules.
- BD-025 — approved; see Decision Log and linked canonical Rules.
- BD-030 — approved; see Decision Log and linked canonical Rules.
- BD-008 — approved; see Decision Log and linked canonical Rules.
- BD-014 — approved; see Decision Log and linked canonical Rules.
- BD-019 — approved; see Decision Log and linked canonical Rules.
- BD-021 — approved; see Decision Log and linked canonical Rules.
- BD-023 — approved; see Decision Log and linked canonical Rules.
- BD-027 — approved; see Decision Log and linked canonical Rules.
