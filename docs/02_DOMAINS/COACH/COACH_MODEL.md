# Coach Model

## Definition

A person responsible for assigned group or private training, evaluations and reports.

## Purpose

Delivers training and creates operational records within assignment scope.

## Business Ownership

Academy/Supervisor according to approved responsibility model.

## Actors

Use `../../01_BUSINESS_FOUNDATION/ROLE_RESPONSIBILITY_MATRIX.md`. Authority follows BD-025; a missing production role binding is `BUSINESS CONFIGURATION REQUIRED`.

## Business-Level Attributes

Business attributes are limited to concepts required by approved rules and lifecycles. Do not infer database fields as business policy.

## Relationships

- Sport
- Branch
- Training Group
- Training Session
- Attendance
- Evaluation
- Report

## Business Invariants

- No approved invariant specific to this domain yet.

## Lifecycle Relevance

See `COACH_LIFECYCLE.md`.

## History Requirements

History is preserved when required by rule, lifecycle, finance, audit, archive or timeline behavior. Archive is not permanent deletion.

## Branch / Academy Scope

Use `../../01_BUSINESS_FOUNDATION/ACADEMY_OPERATING_MODEL.md` and domain-specific policy files. Resolve scope and precedence through `../../04_POLICIES/POLICY_CONFIGURATION_CATALOG.md`; missing production values are configuration errors.

## Permissions Relevance

Permissions must derive from roles, state, actor relationship and approved process ownership.

## Approved Decisions

- BD-011 — approved; see Decision Log and linked canonical Rules.
- BD-025 — approved; see Decision Log and linked canonical Rules.
- BD-012 — approved; see Decision Log and linked canonical Rules.
- BD-022 — approved; see Decision Log and linked canonical Rules.
