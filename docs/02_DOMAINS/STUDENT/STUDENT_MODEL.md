# Student Model

## Definition

The person receiving training and tracked throughout the academy lifecycle.

## Purpose

Preserves identity, subscriptions, attendance, evaluations, transfers and timeline.

## Business Ownership

Reception/Academy Admin for setup; operational roles by process.

## Actors

Use `../../01_BUSINESS_FOUNDATION/ROLE_RESPONSIBILITY_MATRIX.md`. Authority follows BD-025; a missing production role binding is `BUSINESS CONFIGURATION REQUIRED`.

## Business-Level Attributes

Business attributes are limited to concepts required by approved rules and lifecycles. Do not infer database fields as business policy.

## Relationships

- Parent
- Branch
- Subscription
- Training Group
- Attendance
- Evaluation
- Transfer
- Archive

## Business Invariants

- BR-STU-001: Each Student has a unique identity within the governed business context. The unique business identifier itself still requires definition.
- BR-STU-002: A Student keeps a persistent QR identity across subscription renewal.
- BR-STU-003: Student history, attendance, evaluations, transfers and timeline are preserved and are not permanently removed through normal operation.
- BR-STU-004: An Archived Student cannot receive a new Subscription before an approved restore/reactivation decision.
- BR-STU-005: A Student can have multiple subscription records; constraints on concurrently active subscriptions remain policy-dependent.
- BR-TRI-001: A Trial does not create a Subscription automatically.
- BR-TRI-002: A Level recommendation is not produced without an Evaluation.
- BR-TRI-003: A Trial booking uses an available time.
- BR-ARC-001: Archive preserves historical records and is not equivalent to permanent deletion.
- BR-ARC-002: Restore does not automatically reactivate a Student, Subscription, Group or Account.

## Lifecycle Relevance

See `STUDENT_LIFECYCLE.md`.

## History Requirements

History is preserved when required by rule, lifecycle, finance, audit, archive or timeline behavior. Archive is not permanent deletion.

## Branch / Academy Scope

Use `../../01_BUSINESS_FOUNDATION/ACADEMY_OPERATING_MODEL.md` and domain-specific policy files. Resolve scope and precedence through `../../04_POLICIES/POLICY_CONFIGURATION_CATALOG.md`; missing production values are configuration errors.

## Permissions Relevance

Permissions must derive from roles, state, actor relationship and approved process ownership.

## Approved Decisions

- BD-007 — approved; see Decision Log and linked canonical Rules.
- BD-008 — approved; see Decision Log and linked canonical Rules.
- BD-009 — approved; see Decision Log and linked canonical Rules.
- BD-010 — approved; see Decision Log and linked canonical Rules.
- BD-024 — approved; see Decision Log and linked canonical Rules.
- BD-016 — approved; see Decision Log and linked canonical Rules.
- BD-023 — approved; see Decision Log and linked canonical Rules.
