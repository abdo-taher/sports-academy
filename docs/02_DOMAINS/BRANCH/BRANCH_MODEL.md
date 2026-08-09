# Branch Model

## Definition

An operating location belonging to an Academy.

## Purpose

Scopes location-specific operation while preserving academy standards.

## Business Ownership

Branch Admin within Branch scope; Academy Admin for Academy-wide/cross-Branch governance, under BD-025.

## Actors

Use `../../01_BUSINESS_FOUNDATION/ROLE_RESPONSIBILITY_MATRIX.md`. Authority follows BD-025; a missing production role binding is `BUSINESS CONFIGURATION REQUIRED`.

## Business-Level Attributes

Business attributes are limited to concepts required by approved rules and lifecycles. Do not infer database fields as business policy.

## Relationships

- Academy
- Sport
- Coach
- Training Group
- Schedule
- Student
- Subscription

## Business Invariants

- BR-BRA-001: A Sport must not be shown as available in a Branch unless that Branch supports or enables that Sport. This applies to registration, Trial booking, service selection, Groups, Scheduling, Subscription creation, Frontend filtering and API validation.

## Lifecycle Relevance

See `BRANCH_LIFECYCLE.md`.

## History Requirements

History is preserved when required by rule, lifecycle, finance, audit, archive or timeline behavior. Archive is not permanent deletion.

## Branch / Academy Scope

Use `../../01_BUSINESS_FOUNDATION/ACADEMY_OPERATING_MODEL.md` and domain-specific policy files. Resolve scope and precedence through `../../04_POLICIES/POLICY_CONFIGURATION_CATALOG.md`; missing production values are configuration errors.

## Permissions Relevance

Permissions must derive from roles, state, actor relationship and approved process ownership.

## Approved Decisions

- BD-004 — approved; see Decision Log and linked canonical Rules.
- BD-028 — approved; see Decision Log and linked canonical Rules.
- BD-025 — approved; see Decision Log and linked canonical Rules.
- BD-006 — approved; see Decision Log and linked canonical Rules.
- BD-011 — approved; see Decision Log and linked canonical Rules.
- BD-022 — approved; see Decision Log and linked canonical Rules.
