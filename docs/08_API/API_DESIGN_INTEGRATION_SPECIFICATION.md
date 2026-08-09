DOWNSTREAM TECHNICAL DOCUMENT — BUSINESS TRUTH REMAINS CANONICAL

# API Design and Integration Specification

## Sources

Use `CURRENT_RELEASE_API_BEHAVIOR_CATALOG.md` for Rule-derived current behavior, the owning Domain/Requirements for outcomes and the Permission Catalog for authorization. This file defines the locked transport pattern.

## API Lock

- REST over HTTP/JSON.
- One `/api/v1` strategy across modules.
- OpenAPI is the machine-readable contract.
- NestJS controllers are the presentation boundary.
- GraphQL, tRPC and blindly generated table CRUD are prohibited.

## Design Flow

```text
Business action
  -> Requirement
  -> application use case
  -> authorization and server validation
  -> REST contract
  -> OpenAPI
  -> generated/approved client artifact
```

Canonical Business entity resource identifiers follow `TECH-ADR-003`: application-generated UUID v7, serialized through REST/OpenAPI as `type: string` with `format: uuid`. Identifier validation is transport-level validation only; authorization still requires actor identity, permission, scope and applicable Business Rules.

Reads use resource-oriented GET operations. Governed state changes use explicit command endpoints, for example `POST /subscriptions/:id/freeze`, when current Rules define that action. Do not substitute a generic status patch or generic DELETE/soft-delete operation for a governed lifecycle transition.

## Contracts

- Request DTOs validate all external input on the server.
- Responses map from application/domain results; they do not expose Prisma records.
- Breaking changes require compatibility review and the applicable technical decision.
- `packages/contracts` owns generated client/schema artifacts, not Business logic.
- Backend and Frontend must not independently invent duplicate response types.

## Error Envelope

Every module uses one envelope containing, where applicable:

```json
{
  "code": "STABLE_ERROR_CODE",
  "message": "Readable message",
  "fieldErrors": {},
  "requestId": "correlation-id"
}
```

Exact codes and messages derive from approved Requirements/behavior and shared technical conventions; Controllers do not invent Business outcomes.

## Security and Integrations

- Backend authorization is authoritative for every command/query.
- Authentication technology remains blocked until its technical ADR.
- Webhooks and provider integrations use infrastructure adapters, validation, idempotency and audit/history where current specifications require them.
- Binary storage is provider-neutral; Frontend code does not couple directly to a storage vendor.
- Realtime transports are disabled without a confirmed requirement and ADR.

## Testing

Validate success, negative, authorization, validation, state, invariant, error-envelope and compatibility behavior under `../00_GOVERNANCE/TESTING_STRATEGY.md`.
