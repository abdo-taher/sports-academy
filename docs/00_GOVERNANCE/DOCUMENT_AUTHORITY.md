# Document Authority

This register applies DG-002 (one canonical owner), DG-005 (explicit file-level usage classification) and DG-006 (professional English in canonical operational content).

| Document Type | Authority | Usage Rule |
|---|---|---|
| Approved decision log | Highest business authority | Use only entries marked `APPROVED`. |
| Domain README/model/rules/lifecycle | Canonical business source | Use for current business answers. |
| Policy configuration catalog | Canonical policy/configuration index | Use only approved effective values; a missing mandatory production value is `BUSINESS CONFIGURATION REQUIRED`. |
| Canonical technical governance | Highest technical authority after Business Truth/Requirements | `TECH_STACK_LOCK.md`, `ARCHITECTURE_RULES.md`, `DEPENDENCY_RULES.md`, `CODING_STANDARDS.md` and `TESTING_STRATEGY.md` govern implementation tools and patterns; they cannot change Business behavior. |
| Approved technical ADR | Technical exception/change authority only | Use only `TECH-ADR` records marked `APPROVED`; proposals and legacy ADR claims have no authority. |
| Open questions | Historical closed-question register | All current entries are closed; use `DECISION_LOG.md` for approved answers. A newly opened item must follow change governance. |
| Requirements/DDD/DB/API/UX/QA | Downstream derivation | Must trace to domain rules/lifecycles. |
| Derived views | Read-only consumer summary | Never use to override canonical business truth. |
| Legacy chapters/source | Historical evidence | Use only for provenance or migration review. |
| Generated assumptions | Non-authoritative | Must not become policy without approval. |

Every file is additionally classified by its semantic directory and authority banner. Historical per-file audit evidence is retained in the separate historical archive; it is non-authoritative and does not override the current directory/source classification.
