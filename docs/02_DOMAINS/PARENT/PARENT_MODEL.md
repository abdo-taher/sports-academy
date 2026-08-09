# Parent Model

## Definition

The person linked to and responsible for one or more Students under the current model.

## Purpose

Provides access, monitoring, requests, comments and payment participation.

## Business Ownership

Reception/Academy Admin manage setup; Parent owns requests and payments where applicable.

## Actors

Use `../../01_BUSINESS_FOUNDATION/ROLE_RESPONSIBILITY_MATRIX.md`. Authority follows BD-025; a missing production role binding is `BUSINESS CONFIGURATION REQUIRED`.

## Business-Level Attributes

Business attributes are limited to concepts required by approved rules and lifecycles. Do not infer database fields as business policy.

## Relationships

- Student
- Subscription
- Payment
- Request
- Communication

## Business Invariants

- BR-PAR-001: A Parent can be linked to multiple Students.
- BR-PAR-002: A Parent may access only linked Students.
- BR-PAR-003: A Parent may request, comment and monitor but may not modify official Attendance or Evaluation records.
- BR-PAR-004: A Parent linked to Student history is archived rather than permanently deleted.
- BR-PAR-005: Changing a Student's Parent relationship preserves the previous history.

## Lifecycle Relevance

See `PARENT_LIFECYCLE.md`.

## History Requirements

History is preserved when required by rule, lifecycle, finance, audit, archive or timeline behavior. Archive is not permanent deletion.

## Branch / Academy Scope

Use `../../01_BUSINESS_FOUNDATION/ACADEMY_OPERATING_MODEL.md` and domain-specific policy files. Resolve scope and precedence through `../../04_POLICIES/POLICY_CONFIGURATION_CATALOG.md`; missing production values are configuration errors.

## Permissions Relevance

Permissions must derive from roles, state, actor relationship and approved process ownership.

## Approved Decisions

- BD-010 — approved; see Decision Log and linked canonical Rules.
- BD-024 — approved; see Decision Log and linked canonical Rules.
- BD-012 — approved; see Decision Log and linked canonical Rules.
