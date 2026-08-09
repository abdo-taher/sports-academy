# Communication Model

## Definition

Business messages and notifications sent to authorized audiences.

## Purpose

Keeps stakeholders informed while respecting relationship visibility and audit requirements.

## Business Ownership

Academy Admin or responsible operational role according to approved responsibility model.

## Actors

Use `../../01_BUSINESS_FOUNDATION/ROLE_RESPONSIBILITY_MATRIX.md`. Authority follows BD-025; a missing production role binding is `BUSINESS CONFIGURATION REQUIRED`.

## Business-Level Attributes

Business attributes are limited to concepts required by approved rules and lifecycles. Do not infer database fields as business policy.

## Relationships

- Parent
- Student
- Coach
- Session
- Payment
- Request
- Notification

## Business Invariants

- BR-REP-001: A Coach may write a report for an assigned Session.
- BR-REP-002: A Supervisor may write a report when responsible for the Session under the approved responsibility model.
- BR-REP-003: Parent and administration comments do not replace or erase the official report.
- BR-COM-001: Communication requires an authorized audience and respects relationship-based visibility.
- BR-COM-002: Business communication history is auditable and is not silently removed.

## Lifecycle Relevance

See `COMMUNICATION_LIFECYCLE.md`.

## History Requirements

History is preserved when required by rule, lifecycle, finance, audit, archive or timeline behavior. Archive is not permanent deletion.

## Branch / Academy Scope

Use `../../01_BUSINESS_FOUNDATION/ACADEMY_OPERATING_MODEL.md` and domain-specific policy files. Resolve scope and precedence through `../../04_POLICIES/POLICY_CONFIGURATION_CATALOG.md`; missing production values are configuration errors.

## Permissions Relevance

Permissions must derive from roles, state, actor relationship and approved process ownership.

## Approved Decisions

- BD-025 — approved; see Decision Log and linked canonical Rules.
- BD-030 — approved; see Decision Log and linked canonical Rules.
