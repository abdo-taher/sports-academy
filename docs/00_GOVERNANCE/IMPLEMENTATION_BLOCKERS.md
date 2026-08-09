# Implementation Blockers

Updated: 2026-08-09

## Business Blockers

None. All 28 original and 12 NBCG client Decisions are approved and closed. All 114 current-scope canonical Rules are deterministic, discoverable and traced.

## Mandatory Configuration Before Production

Values marked mandatory in `04_POLICIES/POLICY_CONFIGURATION_CATALOG.md` must be provided for their declared scope/effective date. They include Trial, availability, Plan, Evaluation/Stage/Level, payment, Discount, Excuse, Freeze, Renewal, overlap, Transfer, communication, Social moderation, Survey response, Session Feedback and Document-class policy.

Missing configuration must fail safely with `BUSINESS CONFIGURATION REQUIRED — CFG-...`; it must never be replaced by a hard-coded or inferred number.

## Product and Design Work

- Confirm copy, information architecture, accessibility behavior, responsive layout and empty/loading presentation.
- Prepare production forms/templates and localized labels without changing canonical states or outcomes.
- Convert capability acceptance boundaries into delivery slices and release sequencing.

These are delivery tasks, not unresolved business policy.

## Technical Implementation Work

- Choose concrete storage, framework, endpoint naming, error envelope and event-delivery mechanisms.
- Implement migrations, integrity constraints, transactions, idempotency, authorization, audit and observability.
- Load effective-dated production configuration and validate it before release.
- Execute security, performance, recovery and integration testing.

These are technical decisions constrained by the current-release DDD, database, API, permission and QA catalogs.

## Future Scope

Independent Academy tenants, Events, Tournaments, Camps, related certificates and marketplace/community modules are explicitly excluded from current-release implementation.
