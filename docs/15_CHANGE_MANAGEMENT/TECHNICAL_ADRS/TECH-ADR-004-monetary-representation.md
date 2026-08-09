# TECH-ADR-004 — Monetary Representation

- Status: APPROVED
- Date: 2026-08-10
- Decision owner: Project Technical Owner
- Technical approver: Project Technical Owner
- Supersedes / superseded by: None
- Related Change ID: CHG-TECH-ADR-004
- Business impact: N/A — NO BUSINESS BEHAVIOR CHANGE

## Context

The platform must preserve exact financial truth for prices, invoices, payments,
refunds, adjustments, discounts and outstanding monetary balances.

Canonical Business documents do not currently define one global currency,
monetary decimal scale, precision limit or rounding mode. Those values must not
be invented by technical implementation.

Subscription Session balance is a non-monetary session quantity and remains
separate from Outstanding monetary Balance.

## Decision drivers

The representation must:

1. avoid binary floating-point arithmetic for money;
2. preserve exact historical monetary values;
3. support amount-based and percentage-based financial configuration;
4. keep Business rounding/currency policy outside infrastructure defaults;
5. map safely through TypeScript, Prisma, PostgreSQL and REST/OpenAPI;
6. prevent Prisma/database defaults from silently inventing scale or precision;
7. keep Prisma types out of Domain code.

## Options considered

### Option A — JavaScript Number / PostgreSQL floating point

Rejected because binary floating point is inexact and unsuitable for canonical
financial calculations.

### Option B — Integer minor units

Exact for currencies with a known minor-unit model, but the current Business
baseline does not define a currency model or minor-unit policy. Selecting this
now would introduce currency assumptions.

### Option C — PostgreSQL money

Rejected because its fractional precision and formatting depend on database
locale settings and it would couple canonical values to database monetary
formatting behavior.

### Option D — Exact decimal representation

Use exact decimal arithmetic in application/domain code and PostgreSQL NUMERIC
for persistence.

## Selected option

**APPROVED: Option D — exact decimal representation.**

If approved:

- canonical monetary arithmetic never uses JavaScript `number`;
- Domain/Application monetary values use a dedicated value object backed by the
  generic `decimal.js` library, not `Prisma.Decimal`;
- Prisma Decimal is restricted to the persistence mapping boundary;
- PostgreSQL monetary columns use exact `NUMERIC` / `DECIMAL`, never `real`,
  `double precision` or PostgreSQL `money`;
- REST/OpenAPI monetary amounts are serialized as canonical decimal strings;
- percentage/rate values are exact decimals but are not Money values;
- Session balance/session quantity is not monetary and is excluded from this ADR;
- currency remains explicit where required by canonical Business/configuration
  rules and is never globally hardcoded by this ADR;
- rounding is never implicit. A calculation requiring scale reduction must use
  an approved Business/configuration rounding rule; if none exists, implementation
  stops with a specification gap.

No package is installed by this proposal.

## Precision and scale

This ADR intentionally does not invent one global precision/scale.

Prisma's default Decimal mapping must not be allowed to silently select the
project's financial storage policy. Each monetary database field must declare an
explicit approved PostgreSQL/Prisma precision and scale before its migration is
created.

If the owning Business/configuration requirements do not provide enough
information to choose that field's precision/scale safely, the monetary column
is blocked until the specification gap is resolved.

Database schema design must not use precision/scale as an accidental rounding
policy.

## Domain and persistence boundary

Domain code must not import Prisma. Infrastructure maps exact Domain monetary
values to Prisma Decimal and then to PostgreSQL NUMERIC(p,s).

## API representation

Monetary amounts use decimal strings on the wire to avoid binary floating-point
coercion. Human display formatting and currency symbols are UI concerns and must
not alter canonical monetary values.

## Sign and validation

This ADR does not impose one global sign rule. Owning Business Rules determine
whether a charge, payment, refund, reversal, adjustment or balance may be
positive, zero or negative. Non-finite values are invalid canonical monetary
amounts.

## Historical truth

Historical prices and financial events remain immutable/compensating as required
by canonical Business Rules. Exact decimal representation does not authorize
rewriting historical financial truth.

## Consequences

If approved:

- exact decimal arithmetic becomes mandatory for canonical financial values;
- floating-point financial calculations are prohibited;
- PostgreSQL NUMERIC is the persistence family;
- Prisma is an infrastructure mapper rather than the Domain money type;
- precision/scale and rounding cannot be invented by framework defaults;
- currency behavior remains governed by Business/configuration truth.

## Migration impact

None. The database has not been initialized and no production monetary columns
exist.

## Documentation impact

On approval, propagate to Tech Stack Lock, Coding Standards, Architecture Rules,
DDD, Database design, API specification, Payment/Subscription technical
derivatives, API agent instructions, Technical Open Questions, and deterministic
validation where practical.

## Validation plan

After implementation verify exact arithmetic, explicit field precision/scale,
Prisma/PostgreSQL round-trip, decimal-string API serialization, prohibition of
floating-point monetary calculations, Domain isolation from Prisma, and all
changed/full project validation.

## Approval

**APPROVED — 2026-08-10.**

Explicit approval was provided by the Project Technical Owner.

Exact decimal monetary representation is authorized subject to the existing
Business-first governance. This approval does not invent currency, rounding,
precision or scale policy.
