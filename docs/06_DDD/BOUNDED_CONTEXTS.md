DOWNSTREAM TECHNICAL DOCUMENT — BUSINESS TRUTH REMAINS CANONICAL

# Bounded Contexts and Module Boundaries

## Source and Purpose

Canonical Domain ownership is defined under `../02_DOMAINS/`, with the current projection in `CURRENT_RELEASE_DOMAIN_MODEL.md`. This file describes implementation boundaries only.

## Modular Monolith Mapping

Each substantial Business domain is implemented as a Nest module under `apps/api/src/modules/<domain>/`. Candidate module names follow current Domain ownership: academy, branches, sports, programs, students, guardians, coaches, groups, sessions, attendance, evaluations, subscriptions, payments, transfers, social, surveys, notifications and audit.

A candidate is not authorization to implement future or unsupported Business scope.

## Ownership Rules

- A module owns its Domain model, application use cases, persistence adapters, HTTP presentation and tests.
- Business language and invariant ownership come from the canonical Domain documentation.
- A module exposes an intentionally small public application/domain contract.
- Another module does not import infrastructure internals or directly query owned tables.
- `packages/shared` never becomes a cross-domain Business layer.
- `packages/business-types` contains only stable semantic primitives, not shared Backend entities.

## Interaction

Use the narrowest correct mechanism:

1. an application interface for synchronous capability use;
2. an orchestrating use case for a cross-domain transaction;
3. a domain event for in-process reaction;
4. BullMQ only for work that may correctly complete asynchronously.

Do not trade immediate Business correctness for eventual processing. Event names and payloads derive from approved Business concepts and API/data contracts.

## Standard Module Shape

```text
modules/<domain>/
├── domain/
├── application/
├── infrastructure/
├── presentation/http/
├── <domain>.module.ts
└── index.ts
```

The required subdirectories and layer dependencies are canonical in `../00_GOVERNANCE/ARCHITECTURE_RULES.md`. Omit unused folders rather than creating placeholders.

## Extraction

There is no automatic microservice roadmap. Extracting a module into a distributed service requires an approved `TECH-ADR`, measured operational need, contract/transaction analysis, migration and rollback plans, and a completed Business impact gate.
