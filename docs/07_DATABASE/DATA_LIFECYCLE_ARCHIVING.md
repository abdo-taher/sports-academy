DOWNSTREAM TECHNICAL DOCUMENT — BUSINESS TRUTH REMAINS CANONICAL

# Data Lifecycle and Archiving

## Canonical Lifecycle First

Archive, restore, correction, supersession, retention and history behavior come from the owning canonical Domain Rules and lifecycle. Database conventions cannot create a universal lifecycle.

## Persistence Rules

- Archive is not delete.
- Do not add `deletedAt`/soft-delete behavior to every model.
- Preserve historical records, actor, reason, effective time and before/after values where the canonical Rule requires them.
- Corrections use the owning Domain's approved correction/version/compensation model; never rewrite immutable history silently.
- Foreign keys and historical references must remain valid across lifecycle transitions.
- Retention and privacy operations require the approved Security/Business basis and do not originate in ORM defaults.

## Operational Archiving

Technical partitioning, cold storage or archival tiers may be introduced only when they preserve current query, audit, restore and retention obligations. Provider or infrastructure choices require the applicable ADR and migration/rollback plan.

## Prohibited Shortcuts

- hard-deleting operational history because a UI record is hidden;
- treating a nullable deletion timestamp as canonical Archive behavior;
- cascading lifecycle state to dependent domains without a canonical Rule;
- changing an old migration to alter history;
- using Redis as the only retained Business record.

Use `CURRENT_RELEASE_DATA_INTEGRITY_MODEL.md` and the owning `../02_DOMAINS/<DOMAIN>/` lifecycle before designing each persisted state transition.
