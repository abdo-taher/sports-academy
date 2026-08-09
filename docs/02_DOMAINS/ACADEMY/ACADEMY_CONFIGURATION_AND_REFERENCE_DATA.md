# Academy Configuration and Reference Data

## Canonical Ownership

The Academy domain owns the business governance of configuration and shared reference data. Individual domains own the meaning and validation of their settings; the Academy domain owns publication, scope, effective dating and precedence.

## Approved Configuration Facts

- The current operating model is one Academy with multiple Branches; configuration follows approved hierarchical scope under BD-005 and BD-028.
- A Sport is available in a Branch only when enabled for that Branch under BD-002 and BR-BRA-001.
- Branch Sport availability is approved and is not part of BD-028.
- Unsupported generated values are not configuration defaults.
- An effective configuration value must retain its scope, effective date and change history.

## Configuration Scope and Precedence

For every business setting, the canonical domain must identify whether it is a fixed invariant or configurable policy. A configurable policy must identify its allowed scope: Academy, Branch, Sport or Program.

BD-028 approves `Academy Default → explicitly allowed more-specific override`. Each catalog item declares allowed scope and precedence. A missing override uses the Academy default; Program-scoped configuration follows the approved Program model under BD-006.

## Feature Flags

A business feature flag controls whether an approved capability is available; it does not approve the capability or create new business behavior. The Academy domain owns availability governance, while the capability-owning domain defines eligibility and effects. Events and Tournaments are future scope under BD-027 and cannot be made current-release capability by a feature flag.

## Master and Reference Data Ownership

| Reference Data | Meaning Owner | Publication / Governance Owner | Current Constraint |
|---|---|---|---|
| Sports | Sport | Academy | Branch availability follows BR-BRA-001. |
| Levels | Sport | Academy | Criteria are Sport/Level configuration under BD-013 and BR-EVA-006. |
| Skills | Evaluation | Academy | Sport-specific models are allowed by BR-EVA-001. |
| Evaluation templates | Evaluation | Academy | Coach creates; Supervisor/authorized Admin approves/publishes under BD-012. |
| Excuse types | Attendance | Academy | Eligibility/evidence are configured under BD-018 and CFG-EXC-001. |
| Freeze reasons | Subscription | Academy | Eligibility/duration/fee values are configured under BD-019 and CFG-FRZ entries. |
| Transfer reasons | Transfer | Academy | Separate Transfer types follow BD-022 and typed CFG-TRN entries. |
| Session types | Session | Academy | Program meaning follows BD-006; catalog values are configuration. |
| Notification templates | Communication | Academy | Audience and visibility follow BR-COM-001. |
| Dynamic forms and other reference lists | Documents and the consuming domain | Academy | A form cannot establish business truth that is absent from its owning domain. |

## Change Lifecycle

1. The meaning-owning domain proposes a value or policy change.
2. Validate actor/approval authority through the Process Authority Matrix.
3. Validate allowed scope/precedence through `../../04_POLICIES/POLICY_CONFIGURATION_CATALOG.md`.
4. The change is scheduled with an effective date; retroactive alteration of historical financial truth is prohibited by BR-FIN-004.
5. The prior value remains available for historical interpretation.
6. Affected users are notified only under Communication domain rules.

## Approved Business Decisions

- BD-006 — approved; see Decision Log and linked canonical Rules.
- BD-025 — approved; see Decision Log and linked canonical Rules.
- BD-027 — approved; see Decision Log and linked canonical Rules.
- BD-028 — approved; see Decision Log and linked canonical Rules.
- BD-029 — approved; see Decision Log and linked canonical Rules.
