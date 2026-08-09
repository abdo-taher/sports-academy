# Program Model

## Definition

A business-level training offering belonging to a Sport and defining what training experience the Academy provides.

## Purpose

Separates training-offering meaning from commercial packaging and an individual Student's purchased entitlement.

## Business Ownership

Academy Program/catalog authority; Branch availability is controlled within approved scope.

## Actors

Use `../../01_BUSINESS_FOUNDATION/ROLE_RESPONSIBILITY_MATRIX.md`. Authority follows BD-025; a missing production role binding is `BUSINESS CONFIGURATION REQUIRED`.

## Business-Level Attributes

Business attributes are limited to concepts required by approved rules and lifecycles. Do not infer database fields as business policy.

## Relationships

- Sport (owner relationship)
- target Level/audience where defined
- training format where defined
- Service / Subscription Plan (commercial package)
- Student Subscription (purchased instance)
- Branch Program availability

## Business Invariants

- BR-PRG-001: Program belongs to a Sport and sits above Service/Subscription Plan.
- BR-PRG-002: Program is not Student entitlement, Payment or Subscription.
- BR-PRG-003: Program use in a Branch requires explicit enablement.

## Lifecycle Relevance

See `PROGRAM_LIFECYCLE.md`.

## History Requirements

History is preserved when required by rule, lifecycle, finance, audit, archive or timeline behavior. Archive is not permanent deletion.

## Branch / Academy Scope

Use `../../01_BUSINESS_FOUNDATION/ACADEMY_OPERATING_MODEL.md` and domain-specific policy files. Resolve scope and precedence through `../../04_POLICIES/POLICY_CONFIGURATION_CATALOG.md`; missing production values are configuration errors.

## Permissions Relevance

Permissions must derive from roles, state, actor relationship and approved process ownership.

## Approved Decisions

- BD-006.
- BD-028.
