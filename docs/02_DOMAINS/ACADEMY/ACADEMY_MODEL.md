# Academy Model

## Definition

The organization providing sports training and operating Branches.

## Purpose

Represents the top-level business operating entity.

## Business Ownership

Academy Admin / Super Admin according to approved authority.

## Actors

Use `../../01_BUSINESS_FOUNDATION/ROLE_RESPONSIBILITY_MATRIX.md`. Authority follows BD-025; a missing production role binding is `BUSINESS CONFIGURATION REQUIRED`.

## Business-Level Attributes

Business attributes are limited to concepts required by approved rules and lifecycles. Do not infer database fields as business policy.

## Relationships

- Branch
- Sport
- Policy
- Actor

## Business Invariants

- BR-GOV-001: A generated example, recommendation or technical design is not a business rule unless supported by a verified decision.
- BR-GOV-002: An unresolved conflict is recorded as an Open Question and is not resolved by assumption.

## Lifecycle Relevance

See `ACADEMY_LIFECYCLE.md`.

## History Requirements

History is preserved when required by rule, lifecycle, finance, audit, archive or timeline behavior. Archive is not permanent deletion.

## Branch / Academy Scope

Use `../../01_BUSINESS_FOUNDATION/ACADEMY_OPERATING_MODEL.md` and domain-specific policy files. Resolve scope and precedence through `../../04_POLICIES/POLICY_CONFIGURATION_CATALOG.md`; missing production values are configuration errors.

## Permissions Relevance

Permissions must derive from roles, state, actor relationship and approved process ownership.

## Approved Decisions

- BD-004 — approved; see Decision Log and linked canonical Rules.
- BD-005 — approved; see Decision Log and linked canonical Rules.
- BD-025 — approved; see Decision Log and linked canonical Rules.
- BD-028 — approved; see Decision Log and linked canonical Rules.
- BD-030 — approved; see Decision Log and linked canonical Rules.
