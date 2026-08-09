# Evaluation Model

## Definition

A recorded assessment of Student performance.

## Purpose

Supports level recommendation, progress tracking and parent/admin visibility.

## Business Ownership

Coach records; Supervisor or specifically authorized Admin reviews/approves and publishes official Evaluation.

## Actors

Use `../../01_BUSINESS_FOUNDATION/ROLE_RESPONSIBILITY_MATRIX.md`. Authority follows BD-025; a missing production role binding is `BUSINESS CONFIGURATION REQUIRED`.

## Business-Level Attributes

Business attributes are limited to concepts required by approved rules and lifecycles. Do not infer database fields as business policy.

## Relationships

- Student
- Sport
- Level
- Coach
- Parent
- Promotion

## Business Invariants

- BR-EVA-001: Each Sport may use a different Evaluation model.
- BR-EVA-002: Periodic Evaluation scheduling is configurable by authorized administration.
- BR-EVA-003: An approved Evaluation is not deleted or overwritten; a correction preserves the earlier version.
- BR-EVA-004: Official Evaluation uses creator/reviewer separation and required approval before publication.

## Lifecycle Relevance

See `EVALUATION_LIFECYCLE.md`.

## History Requirements

History is preserved when required by rule, lifecycle, finance, audit, archive or timeline behavior. Archive is not permanent deletion.

## Branch / Academy Scope

Use `../../01_BUSINESS_FOUNDATION/ACADEMY_OPERATING_MODEL.md` and domain-specific policy files. Resolve scope and precedence through `../../04_POLICIES/POLICY_CONFIGURATION_CATALOG.md`; missing production values are configuration errors.

## Permissions Relevance

Permissions must derive from roles, state, actor relationship and approved process ownership.

## Approved Decisions

- BD-012 — approved; see Decision Log and linked canonical Rules.
- BD-013 — approved; see Decision Log and linked canonical Rules.
- BD-009 — approved; see Decision Log and linked canonical Rules.
