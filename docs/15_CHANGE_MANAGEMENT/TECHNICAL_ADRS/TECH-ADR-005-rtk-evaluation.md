# TECH-ADR-005 — RTK Evaluation and Safe Adoption Gate

- Status: APPROVED
- Date: 2026-08-10
- Decision owner: Project Technical Owner
- Technical approver: Project Technical Owner — explicit limited approval for WP-RTK-02 preparation and disposable observation on 2026-08-10
- Supersedes / superseded by: None
- Related Change ID: CHG-TECH-RTK-001
- Roadmap scope: Phase 1.5 / WP-RTK-01 research and WP-RTK-02 controlled evaluation only
- Business impact: N/A — NO BUSINESS IMPACT

## Context

This is an **evaluation and version-freeze decision record**. It completes
WP-RTK-01 research and now authorizes only preparation and execution of the
controlled disposable WP-RTK-02 observation defined below. It does not approve
canonical RTK installation, ACTIVE-repository initialization, normal-user-home
installation, production use, Phase 1.5 closure, or WP-RTK-03 and later work.
Native shell commands and repository-owned validators remain authoritative.

## Evidence classifications

Every factual statement in the evidence sections below uses one of these labels:

- **VERIFIED CURRENT SOURCE BEHAVIOR** — confirmed in frozen v0.45.0 source or
  immutable release/tag metadata without executing RTK.
- **CURRENT OFFICIAL DOCUMENTATION** — stated by official v0.45.0 material but
  not independently runtime-tested here.
- **SOURCE-BASED EXPECTATION — TO BE TESTED LATER** — inferred from frozen source
  and reserved for disposable WP-RTK-02, WP-RTK-05, or WP-RTK-07 verification.
- **HISTORICAL** — older upstream evidence; not asserted as current behavior.
- **UNRESOLVED** — not proven at WP-RTK-01 and explicitly gated from adoption.

## Frozen evaluation target and tag reconciliation

| Item | Classification | Frozen evidence |
|---|---|---|
| Official repository | CURRENT OFFICIAL DOCUMENTATION | [`rtk-ai/rtk`](https://github.com/rtk-ai/rtk) |
| Selected release | VERIFIED CURRENT SOURCE BEHAVIOR | [`v0.45.0`](https://github.com/rtk-ai/rtk/releases/tag/v0.45.0), released 2026-08-07 |
| Immutable commit | VERIFIED CURRENT SOURCE BEHAVIOR | [`b34be37caf3796b69a50952a28e60e32b5daad43`](https://github.com/rtk-ai/rtk/commit/b34be37caf3796b69a50952a28e60e32b5daad43) |
| License | CURRENT OFFICIAL DOCUMENTATION | Apache License 2.0 |
| Linux x86_64 artifact | CURRENT OFFICIAL DOCUMENTATION | `rtk-x86_64-unknown-linux-musl.tar.gz` |
| SHA-256 | VERIFIED CURRENT SOURCE BEHAVIOR | Published and recomputed: `c4c036fbf181fc55ef329786c8c17e0d427972b053b825944d968a6aafef1ba4` |
| Source build minimum | VERIFIED CURRENT SOURCE BEHAVIOR | Rust `1.91` |

**VERIFIED CURRENT SOURCE BEHAVIOR:** `v0.45.0` is a lightweight tag pointing
directly to the immutable release commit. `latest` is an annotated tag whose
peeled target is the same commit. Local and upstream refs agree. There is no
release/tag discrepancy. The exact tag source, not a moving branch, controls.

## Existing solution

Native shell commands plus repository-owned tools and validators are the current
approved solution.

## Problem

Repeated output consumes agent context, but a compression layer can hide material
output, mutate instructions, persist sensitive commands, or alter observable
shell semantics.

## Constraints

1. Preserve Business baseline `114 / 40 / 0` and canonical governance.
2. Never allow RTK to overwrite, weaken, or outrank project `AGENTS.md`.
3. Remote telemetry remains disabled unless separately approved.
4. Canonical adoption requires enforceable control of command/path/raw-output
   persistence; isolation alone is not canonical approval.
5. Native commands remain available; final governance, Git, migration, security,
   privacy, and release evidence remains raw.
6. RTK installation and initialization may target only the approved disposable,
   project-and-instance-qualified sandbox; the ACTIVE repository, real host home,
   host configuration roots, system PATH, and shell profiles remain prohibited.
7. Preparation uses native Bash on allowlisted Linux/macOS targets only. WSL,
   Git Bash/MSYS/Cygwin, and native Windows PowerShell are unsupported for this
   work package; no separate PowerShell implementation is authorized.

## Options considered

| Option | Result |
|---|---|
| A — retain native tooling only | Current approved and safest state. |
| B — adopt v0.45.0 immediately | Rejected due to governance/privacy blockers. |
| C — freeze v0.45.0 for disposable evaluation only | **APPROVED selected option, limited to WP-RTK-02.** |
| D — wait for a later signed release | Remains available; requires a new exact-version review. |

## Selected option

**APPROVED WITH LIMITED AUTHORITY: Option C — freeze v0.45.0 for disposable
evaluation through WP-RTK-02 only.**

WP-RTK-01 creates no migration and affects no Product app/package. The Project
Technical Owner explicitly authorizes preparation and later controlled execution
of WP-RTK-02 in the project-prefixed disposable sandbox. The least-destructive
method is direct invocation of the checksum-pinned binary in a disposable
sandbox with isolated `HOME`, XDG roots, agent roots, and `RTK_DB_PATH`; no
`rtk init`, hook, or instruction mutation is allowed in the ACTIVE repository.

## Why

This option preserves native correctness and creates a reproducible target for
later observation without normalizing an unverified tool. Immediate adoption is
not justified by the frozen source evidence.

## Consequences and trade-offs

Native tooling remains the sole approved path, no WP-RTK-01 output savings are
realized, and every later work package remains separately gated. A future RTK
revision receives no inherited approval.

## Migration impact

None. WP-RTK-01 installs no binary, dependency, hook, instruction, configuration,
or runtime integration.

## Affected apps/packages

None. Product apps, packages, validators, and runtime infrastructure are unchanged.

## Installation provenance, prerequisites, and behavior

| Claim | Classification | Evidence/result |
|---|---|---|
| Methods | CURRENT OFFICIAL DOCUMENTATION | Homebrew, Cargo/Git, release asset, install script, Debian, and RPM. |
| Platforms | CURRENT OFFICIAL DOCUMENTATION | Linux x86_64/aarch64, macOS x86_64/aarch64, Windows x86_64. The shell installer itself supports Linux and Darwin. |
| Binary form | VERIFIED CURRENT SOURCE BEHAVIOR | Native Rust executable with bundled SQLite support; some filters invoke external `rg`. |
| Script shell/tools | VERIFIED CURRENT SOURCE BEHAVIOR | POSIX `sh`; `uname`, `curl`, `grep`, `sed`, `tr`, `mktemp`, `awk`, `tar`, `mkdir`, `mv`, `chmod`, `rm`, and `sha256sum` or `shasum`. Network/TLS access to GitHub release metadata/assets/checksums is required. |
| Script destination | VERIFIED CURRENT SOURCE BEHAVIOR | Defaults to `~/.local/bin/rtk`; `RTK_INSTALL_DIR` overrides it. |
| Version pin | VERIFIED CURRENT SOURCE BEHAVIOR | `RTK_VERSION=v0.45.0`; an unpinned moving script is prohibited here. |
| Verification | VERIFIED CURRENT SOURCE BEHAVIOR | Script downloads checksums, verifies SHA-256 unless unsafe `RTK_SKIP_CHECKSUM=1`, moves/chmods the binary, executes `rtk --version`, then checks `PATH`. The project-owned preparation does not use that installer or execute `rtk --version`. |
| Observation installation | UNRESOLVED | Actual install effects are intentionally deferred to authorized disposable WP-RTK-02 execution. |

### Frozen artifact allowlist for WP-RTK-02

Every supported entry below was established from the official GitHub RTK
[`v0.45.0` release assets and published checksums](https://github.com/rtk-ai/rtk/releases/tag/v0.45.0).
Names and hashes are explicit allowlist data; scripts do not generate filenames
or infer support. The downloaded archive is reverified before extraction.

| Normalized OS | Normalized architecture | Exact v0.45.0 asset | Exact SHA-256 | WP-RTK-02 execution model |
|---|---|---|---|---|
| `linux` | `x86_64` | `rtk-x86_64-unknown-linux-musl.tar.gz` | `c4c036fbf181fc55ef329786c8c17e0d427972b053b825944d968a6aafef1ba4` | Supported — native Bash |
| `linux` | `aarch64` | `rtk-aarch64-unknown-linux-gnu.tar.gz` | `80a746dd305ef944ff50ef011ae4ce3878dd5ba88dfe35d859d05498191637c3` | Supported — native Bash |
| `macos` | `x86_64` | `rtk-x86_64-apple-darwin.tar.gz` | `9ea02f889d5a2779e4fb700df4587824303c5a57cda22e903e30058079fca0ef` | Supported — native Bash |
| `macos` | `aarch64` | `rtk-aarch64-apple-darwin.tar.gz` | `064151cfc2d50b24d810b06a0af2e41b9c945e83534e4c438c3d3eae607fc3f4` | Supported — native Bash |

The same official release publishes Windows x86_64 asset
`rtk-x86_64-pc-windows-msvc.zip` with SHA-256
`34cea9009a8099acdaf85147b971d95f65efabfa63fb3aea7d3e2b73e6f517c3`,
but that binary does not make this repository-managed Bash workflow safe on
Windows. WSL is classified separately and unsupported because it is not native
Linux for this observation; Git Bash/MSYS/Cygwin and native PowerShell are also
unsupported. All other OS/architecture combinations fail closed. No artifact may
enter the repository.

## Supported integrations and Kiro implication

**CURRENT OFFICIAL DOCUMENTATION:** Claude Code, GitHub Copilot, Cursor, Gemini,
OpenCode, OpenClaw, Pi, Hermes, Factory Droid, Cline/Roo Code, Windsurf, Codex,
Kilo Code, Google Antigravity, and Mistral Vibe are documented. Frozen source
also implements Kimi. OpenClaw uses a separate plugin path rather than an
`rtk init` branch.

**VERIFIED CURRENT SOURCE BEHAVIOR:** Kiro is not a supported integration and has
no defined hook/settings/instruction contract. RTK must not be initialized as a
different agent on Kiro's behalf. Any future Kiro integration requires separate
governance; manual isolated invocation is the only candidate evaluation method.

## Initialization and mutation inventory

Dynamic atomic-write temporary basenames are runtime-generated sibling files and
cannot be enumerated; listed target paths remain exact. Symlinked targets may
cause their canonical targets to be written.

| Integration/scope | Classification | Project or user/global targets that init may create, modify, or delete |
|---|---|---|
| Shared conditional state | VERIFIED CURRENT SOURCE BEHAVIOR | `<config>/rtk/config.toml`; `<data-local>/rtk/trusted_filters.json`; `<data-local>/rtk/.hook_warn_last`; telemetry/tracking paths listed below. |
| Claude project | VERIFIED CURRENT SOURCE BEHAVIOR | `./CLAUDE.md`, `./.rtk/filters.toml`, parent directories. |
| Claude global | VERIFIED CURRENT SOURCE BEHAVIOR | `$CLAUDE_CONFIG_DIR` or `~/.claude`: `RTK.md`, `CLAUDE.md`, `settings.json`, `settings.json.bak`; `<config>/rtk/filters.toml`; may delete legacy Claude/Cursor hook/hash files under home. |
| OpenCode global | VERIFIED CURRENT SOURCE BEHAVIOR | `~/.config/opencode/plugins/rtk.ts`. |
| Cursor global | VERIFIED CURRENT SOURCE BEHAVIOR | `~/.cursor/hooks.json`, `.bak`; may delete `~/.cursor/hooks/rtk-rewrite.sh`. |
| Windsurf | VERIFIED CURRENT SOURCE BEHAVIOR | `./.windsurfrules`; implementation writes project-local even though CLI requires `--global`, a scope mismatch. |
| Cline/Roo | VERIFIED CURRENT SOURCE BEHAVIOR | `./.clinerules`, including when `--global` is supplied. |
| Kilo project | VERIFIED CURRENT SOURCE BEHAVIOR | `./.kilocode/rules/rtk-rules.md`; global rejected. |
| Antigravity project | VERIFIED CURRENT SOURCE BEHAVIOR | `./.agents/rules/antigravity-rtk-rules.md`; global rejected. |
| Kimi project | VERIFIED CURRENT SOURCE BEHAVIOR | `./AGENTS.md` receives an RTK marker block; global rejected. `.kimirules` is not used. |
| Codex project | VERIFIED CURRENT SOURCE BEHAVIOR | `./RTK.md` and direct `@RTK.md` reference in root `./AGENTS.md`. It does not target `AGENTS.override.md`. |
| Codex global | VERIFIED CURRENT SOURCE BEHAVIOR | `$CODEX_HOME` or `~/.codex`: `RTK.md`, `AGENTS.md`, and parent. |
| Pi project/global | VERIFIED CURRENT SOURCE BEHAVIOR | Project `./.pi/extensions/rtk.ts`; global `$PI_CODING_AGENT_DIR` or `~/.pi/agent/extensions/rtk.ts`. |
| Hermes | VERIFIED CURRENT SOURCE BEHAVIOR | `$HERMES_HOME` or `~/.hermes`: `plugins/rtk-rewrite/{__init__.py,plugin.yaml}` and `config.yaml`. |
| Factory Droid | VERIFIED CURRENT SOURCE BEHAVIOR | Project `./.factory` or global `$FACTORY_HOME_OVERRIDE/.factory`/`~/.factory`; candidate `hooks.json`, `hooks/hooks.json`, `settings.json`, and `.bak` files. |
| Gemini global | VERIFIED CURRENT SOURCE BEHAVIOR | `~/.gemini/hooks/rtk-hook-gemini.sh`, `.rtk-hook.sha256`, `GEMINI.md`, `settings.json`. |
| Vibe global | VERIFIED CURRENT SOURCE BEHAVIOR | `~/.vibe/hooks.toml`, `~/.vibe/prompts/rtk.md`. |
| Copilot project | VERIFIED CURRENT SOURCE BEHAVIOR | `./.github/hooks/rtk-rewrite.json`, `./.github/copilot-instructions.md`. |
| Copilot global | VERIFIED CURRENT SOURCE BEHAVIOR | `$COPILOT_HOME` or `~/.copilot`: `hooks/rtk-rewrite.json`, `copilot-instructions.md`. An empty `COPILOT_HOME` becomes a relative root. |

Kimi and Codex project initialization are explicitly prohibited because both
write canonical root `AGENTS.md`. Open upstream [issue #1943](https://github.com/rtk-ai/rtk/issues/1943)
describes the Codex instruction-layer concern; frozen source confirms the current
v0.45.0 behavior.

## Environment-variable inventory

| Variable(s) | Classification | Effect |
|---|---|---|
| `RTK_INSTALL_DIR`, `RTK_VERSION`, `RTK_SKIP_CHECKSUM` | VERIFIED CURRENT SOURCE BEHAVIOR | Installer destination, version pin, and unsafe checksum bypass. |
| `RTK_TELEMETRY_DISABLED=1` | VERIFIED CURRENT SOURCE BEHAVIOR | Disables remote ping and generic init consent prompt. |
| `RTK_DB_PATH` | VERIFIED CURRENT SOURCE BEHAVIOR | Overrides tracking SQLite path. |
| `RTK_TEE=0`, `RTK_TEE_DIR` | VERIFIED CURRENT SOURCE BEHAVIOR | Disable/redirect raw-output tee. |
| `RTK_DISABLED` | VERIFIED CURRENT SOURCE BEHAVIOR | Presence in command environment-prefix text prevents hook rewrite; actual native behavior remains for later execution tests. |
| `RTK_NO_TOML=1`, `RTK_TOML_DEBUG` | VERIFIED CURRENT SOURCE BEHAVIOR | Disable TOML filters / enable diagnostics. |
| `RTK_HOOK_AUDIT=1`, `RTK_AUDIT_DIR` | VERIFIED CURRENT SOURCE BEHAVIOR | Enable and locate hook audit persistence. Must remain disabled. |
| `RTK_TRUST_PROJECT_FILTERS=1` plus recognized CI markers | VERIFIED CURRENT SOURCE BEHAVIOR | Enables project filters in qualifying CI context. Must not be enabled in baseline observation. |
| `CLAUDE_CONFIG_DIR`, `CODEX_HOME`, `PI_CODING_AGENT_DIR`, `HERMES_HOME`, `FACTORY_HOME_OVERRIDE`, `COPILOT_HOME` | VERIFIED CURRENT SOURCE BEHAVIOR | Override integration roots as detailed above. |
| `HOME`, `XDG_CONFIG_HOME`, `XDG_DATA_HOME`, platform equivalents | VERIFIED CURRENT SOURCE BEHAVIOR | Indirectly select home/config/local-data roots through the `dirs` library. |
| `GEMINI_CLI_TRUST_WORKSPACE`, `COMPOSER_BIN_DIR`, `PATH` | VERIFIED CURRENT SOURCE BEHAVIOR | Runtime permission/tool-discovery companions; not privacy-off switches. |
| `RTK_TELEMETRY_URL`, `RTK_TELEMETRY_TOKEN` | VERIFIED CURRENT SOURCE BEHAVIOR | Compile-time release-build values, **not** runtime privacy controls. |

## Privacy: local state versus remote transmission

| Concern | Classification | Frozen evidence |
|---|---|---|
| Remote telemetry default | VERIFIED CURRENT SOURCE BEHAVIOR | Disabled; sending requires consent and enabled configuration. `RTK_TELEMETRY_DISABLED=1` independently blocks it. |
| Remote endpoint | VERIFIED CURRENT SOURCE BEHAVIOR | Release binary embeds `https://telemetry.rtk-ai.app/ping`; source appends `/erasure` for erasure. |
| Potential transmitted fields | VERIFIED CURRENT SOURCE BEHAVIOR | Salted device hash, version/platform/install method, aggregate command/savings/retention/activity/integration/project/config/feature metrics; no source file body is intended. |
| Remote cadence | VERIFIED CURRENT SOURCE BEHAVIOR | At most once per 23 hours with a short background timeout when enabled/consented. |
| Local tracking default | VERIFIED CURRENT SOURCE BEHAVIOR | Enabled independently of remote telemetry. Stores full original/RTK commands, canonical project path, timestamps, estimates, durations, and raw parse-failure commands/errors. |
| Tracking location | VERIFIED CURRENT SOURCE BEHAVIOR | `$RTK_DB_PATH`, configured path, or `<data-local>/rtk/history.db`, with fallback `./rtk/history.db`; SQLite may add `-wal`/`-shm`. |
| Documented tracking disable | CURRENT OFFICIAL DOCUMENTATION | Configuration guide claims `[tracking] enabled = false`. |
| Effective tracking disable | UNRESOLVED | Frozen recording paths do not consult `tracking.enabled`; `RTK_TRACK=0` is absent. Canonical installation is blocked. |
| Tee | VERIFIED CURRENT SOURCE BEHAVIOR | Raw failure output can be stored; `RTK_TEE=0`/config and isolated `RTK_TEE_DIR` are required in observation. |
| Other local state | VERIFIED CURRENT SOURCE BEHAVIOR | Config, filters, trust hashes, hook warning/audit, telemetry marker/device salt, instruction files, backups, and dynamic atomic temp files may be created. |
| Actual network and filesystem effects | UNRESOLVED | Must be observed in disposable WP-RTK-02; no execution occurred in WP-RTK-01. |

Required observation controls are `RTK_TELEMETRY_DISABLED=1`, telemetry disabled
and unconsented in isolated config, `RTK_TEE=0`, isolated tee/data/config/home and
agent roots, and an isolated `RTK_DB_PATH`. Isolation contains local tracking; it
does not prove that tracking is disabled.

## Native, raw, passthrough, exit, and error behavior

| Claim | Classification | Result |
|---|---|---|
| Child exit codes | SOURCE-BASED EXPECTATION — TO BE TESTED LATER | Generally propagated through RTK. |
| Passthrough | SOURCE-BASED EXPECTATION — TO BE TESTED LATER | Inherits stdin and streams raw output. Unsupported/risky hook rewrites return passthrough. |
| `rtk proxy` | VERIFIED CURRENT SOURCE BEHAVIOR | Explicit raw passthrough path, but still records local tracking. |
| Disabled mode | VERIFIED CURRENT SOURCE BEHAVIOR | `RTK_DISABLED` in a command environment prefix suppresses rewrite; native equivalence remains to test. |
| Shell safety | VERIFIED CURRENT SOURCE BEHAVIOR | Several substitutions, redirects, compounds, and machine-oriented Git cases are intentionally not rewritten. |
| stderr | SOURCE-BASED EXPECTATION — TO BE TESTED LATER | Some failures re-emit raw streams, while captured filters may combine stdout/stderr; universal separation is not established. |
| Command coverage | VERIFIED CURRENT SOURCE BEHAVIOR | Git/GitHub, file/search and JS/TS tools including pnpm, Vitest, Playwright, TypeScript, Next.js, Prisma, and other ecosystems. Project validators receive generic script handling, not special authority. |
| Semantic equivalence | UNRESOLVED | WP-RTK-05/07 must compare outputs, warnings, exit codes, raw recovery, latency, and mutation. |

Final Git, validator, migration, privacy, security, release, and machine-readable
evidence remains native/raw even if RTK is later approved.

## Rollback considerations

### Uninstall, rollback, and recovery matrix

| Integration/scope | Classification | Frozen uninstall/reversal behavior |
|---|---|---|
| Claude project | VERIFIED CURRENT SOURCE BEHAVIOR | Project uninstall rejected; manually remove RTK from `CLAUDE.md` and `.rtk` artifacts. |
| Claude global | VERIFIED CURRENT SOURCE BEHAVIOR | Removes `RTK.md`, strips RTK from `CLAUDE.md`/settings, and attempts legacy OpenCode/Cursor cleanup; leaves filters, backups, shared state, and directories. |
| Codex project | VERIFIED CURRENT SOURCE BEHAVIOR | **No project uninstall.** Command is rejected; manual removal must delete `./RTK.md` and only the generated RTK reference/block from `./AGENTS.md`. Error text mentions AGENTS cleanup but omits RTK.md deletion. |
| Codex global | VERIFIED CURRENT SOURCE BEHAVIOR | Deletes global `RTK.md`, removes generated content from global `AGENTS.md`; leaves an empty AGENTS file/directories and shared state. |
| Kimi project | VERIFIED CURRENT SOURCE BEHAVIOR | No Kimi uninstaller. Manually remove only the generated block from `./AGENTS.md`; global uninstall does not reverse it. |
| Cline/Roo, Windsurf, Kilo, Antigravity | VERIFIED CURRENT SOURCE BEHAVIOR | No dedicated reversal; manually remove their listed project rules file/content. |
| OpenCode | VERIFIED CURRENT SOURCE BEHAVIOR | Broad global cleanup can remove plugin but also enters Claude/Cursor cleanup; directories/shared state remain. |
| Cursor global | VERIFIED CURRENT SOURCE BEHAVIOR | Strips RTK entries and legacy script; can create `.bak`; leaves JSON/directories. |
| Gemini global | VERIFIED CURRENT SOURCE BEHAVIOR | Deletes hook/GEMINI guidance and strips settings, but leaves settings/directories and orphan hash sidecar. |
| Pi | VERIFIED CURRENT SOURCE BEHAVIOR | Removes `rtk.ts`; directories remain. |
| Hermes | VERIFIED CURRENT SOURCE BEHAVIOR | Deletes RTK plugin directory and removes RTK config content; parent/config may remain. |
| Droid | VERIFIED CURRENT SOURCE BEHAVIOR | Strips RTK from three candidate JSON files, preserving other entries and creating backups; leaves files/directories. |
| Vibe | VERIFIED CURRENT SOURCE BEHAVIOR | Removes prompt and hook block; may remove empty hooks file; leaves directories. |
| Copilot | VERIFIED CURRENT SOURCE BEHAVIOR | Removes hook JSON and instruction block; leaves instruction file/directories. |
| Shared state | VERIFIED CURRENT SOURCE BEHAVIOR | Agent uninstall does not remove config, telemetry markers/salt, tracking DB/sidecars, tee/audit/trust/filter files. |
| Actual completeness | UNRESOLVED | Before/after and uninstall completeness require disposable WP-RTK-02 observation. |

Disposable recovery must preserve before/after hashes; run only a verified
scope-appropriate uninstaller; manually remove generated content where no safe
uninstaller exists; delete isolated binary/config/data/DB/sidecars/tee/audit/
trust/telemetry/temp state; verify no mutation remains; then discard the entire
sandbox. `rtk telemetry forget` can make a remote erasure request and may not
cover custom `RTK_DB_PATH`, so it is not the primary cleanup mechanism.

## Known issues and evidence status

| Issue | Classification | WP-RTK-01 conclusion |
|---|---|---|
| Codex writes root `AGENTS.md`, not override layer | VERIFIED CURRENT SOURCE BEHAVIOR | Blocks direct canonical init. |
| Kimi writes root `AGENTS.md` | VERIFIED CURRENT SOURCE BEHAVIOR | Blocks direct canonical init. |
| Kiro integration absent | VERIFIED CURRENT SOURCE BEHAVIOR | No speculative agent emulation. |
| Local tracking disable contradiction | UNRESOLVED | Blocks canonical adoption; containment only in sandbox. |
| Windsurf/Cline global-scope mismatch | VERIFIED CURRENT SOURCE BEHAVIOR | Must be observed; no canonical init. |
| Incomplete uninstall paths | VERIFIED CURRENT SOURCE BEHAVIOR | Manual and whole-sandbox recovery required. |
| Tee/raw error persistence | VERIFIED CURRENT SOURCE BEHAVIOR | Disable and isolate during observation. |
| Exit/stderr/filter equivalence | UNRESOLVED | Reserved for WP-RTK-05/07. |
| Earlier overwrite/data-loss, Git, and privacy reports | HISTORICAL | [Discussion #1989](https://github.com/rtk-ai/rtk/discussions/1989) informs risk only; no historical claim is promoted over frozen source. |
| Codex instruction override proposal | CURRENT OFFICIAL DOCUMENTATION | [Issue #1943](https://github.com/rtk-ai/rtk/issues/1943) remains relevant; current source controls the actual v0.45.0 finding. |

## Test and validation plan

### Acceptance criteria for later work packages

These criteria describe gates only and grant no authority:

- **WP-RTK-02:** approved disposable sandbox; before/after path+hash inventory;
  network observation; effective config; actual DB/tee contents; init/uninstall
  completeness; no ACTIVE-repo or normal-home mutation.
- **WP-RTK-03:** canonical governance remains superior; no generated instruction
  redefines Business, stack, architecture, validation, staging, commit, or merge.
- **WP-RTK-04:** remote telemetry demonstrably disabled; all local persistence
  characterized and either enforceably disabled or rejected for adoption.
- **WP-RTK-05:** representative native/RTK matrix proves exit codes, critical
  failures/warnings, raw recovery, duration, output size, and no ordinary-use
  repository mutation.
- **WP-RTK-06:** final-evidence native/raw command policy is explicit and usable.
- **WP-RTK-07:** unsupported, unavailable, disabled, malformed, non-zero,
  stderr-heavy, piped/compound, long failure, validator blocker, and raw-output
  cases preserve operability and recoverability.

## WP-RTK-01 roadmap completeness matrix

| Requirement | Evidence | Status |
|---|---|---|
| Current selected release/tag/commit | v0.45.0, immutable commit and reconciled local/upstream refs recorded | PASS |
| License | Apache-2.0 recorded from frozen release | PASS |
| Installation method | Official methods and checksum-pinned observation method recorded | PASS |
| Binary location | Default and override recorded | PASS |
| Shell requirements | POSIX shell, host tools, network, architecture, and script behavior recorded | PASS |
| Codex integration method | Exact project/global paths and AGENTS behavior recorded | PASS |
| Generated files | Exact integration target inventory plus dynamic-temp qualification recorded | PASS |
| Global vs project changes | Per-integration scope and override roots recorded | PASS |
| Uninstall behavior | Integration/scope matrix and Codex/Kimi manual cleanup recorded | PASS |
| Telemetry/tracking state | Remote default/controls and independent local tracking contradiction recorded | PASS |
| Local database/cache | DB/path/sidecars, tee, config, audit, trust, filter, marker/salt state recorded | PASS |
| Passthrough/native support | Source behavior and later-test boundary recorded | PASS |
| Disabled mode | Source recognition and later native-equivalence test recorded | PASS |
| Error/fallback behavior | Source expectations and unresolved stderr/semantic test gate recorded | PASS |
| Exact artifact before installation | Artifact/checksum/revision frozen; no installation performed | PASS |
| Rollback/uninstall understood for research entry | Safe whole-sandbox recovery and unsafe/incomplete agent uninstall limits recorded | PASS |
| Deliverable: RTK Integration Decision Record | This approved ADR, limited to controlled WP-RTK-02 evaluation and explicitly not canonical adoption | PASS |
| Product tests/typecheck/lint/build | No Product/code/dependency change; repository tooling preparation only | N/A — NO PRODUCT IMPLEMENTATION |
| Phase 1.5 runtime exit criteria | Generated-file observation, privacy runtime verification, semantic comparison, and failures belong to WP-RTK-02–07 | N/A — NOT WP-RTK-01 CLOSURE |

The unresolved runtime findings do not block closure of **research/version-freeze
WP-RTK-01**, because they are identified as adoption blockers and have explicit
later test gates. They do block canonical adoption. WP-RTK-01 closed through
validated commit `e3e169d8d97b977a7584927e6905721af383b64c`; this approval opens
only WP-RTK-02 preparation and disposable observation.

## Documentation impact

This approved, evaluation-only ADR, its technical register entry, cumulative
Change Log row, and nine repository-owned `scripts/rtk/` preparation files are
updated. No stack lock, Product specification, or canonical adoption authority
changes.

## Security and operational impact

The scripts dynamically resolve the Git root and immutable real host context,
validate a sanitized instance suffix, and isolate every mutable root beneath
`${REAL_HOME}/Kiro_Sandboxes/sports-academy-${INSTANCE}-rtk-wp02` by default.
Safe absolute sandbox override is allowed only when its resolved path preserves
the exact instance-qualified basename, remains outside the ACTIVE repository and
real host configuration roots, is not nested under another WP-RTK-02 namespace,
and contains no symlink escape. Child scripts inherit and verify the resolved
host and sandbox context after `HOME`/XDG isolation.

Preflight is non-mutating. Bootstrap may create only disposable sandbox state,
clone the approved branch, download/reverify/extract the explicit frozen asset,
write disabled privacy configuration, and capture PRE evidence. It never runs
RTK, installs host prerequisites, changes permanent `PATH`, or edits profiles.
Only the separately controlled run script encodes `rtk init --codex`; even
`rtk --version` remains dormant. No dependency, Product code/runtime, hook,
normal host home, or ACTIVE-repository integration changes. Business impact is
`N/A — NO BUSINESS IMPACT`; baseline remains `114 / 40 / 0`.

## Recommendation

Do not install or initialize v0.45.0 in the ACTIVE repository or normal user
home. Retain the immutable revision only as a possible disposable observation
target. Prefer reassessment if a newer signed release fixes Codex instruction
layering and enforceable local tracking control.

## Approval

**APPROVED WITH LIMITED AUTHORITY — WP-RTK-02 ONLY.**

On 2026-08-10, the Project Technical Owner explicitly approved Option C only:
preparation and controlled execution of WP-RTK-02 against RTK v0.45.0 at
`b34be37caf3796b69a50952a28e60e32b5daad43` in the project-and-instance-specific
`sports-academy-${INSTANCE}-rtk-wp02` disposable namespace (default instance:
`sports-academy-default-rtk-wp02`).

This approval does not authorize canonical adoption, ACTIVE-repository or normal
user-home installation, system-wide/PATH installation, production use, Phase 1.5
closure, or WP-RTK-03 and later work. Telemetry remains disabled. Preparation
scripts must be reviewed and validated before `rtk init --codex` may execute.
WP-RTK-02 runtime evidence must be reviewed before any further authority exists.

## Primary sources

- [Official v0.45.0 release and checksums](https://github.com/rtk-ai/rtk/releases/tag/v0.45.0)
- [Frozen source tree](https://github.com/rtk-ai/rtk/tree/v0.45.0)
- [Exact release commit](https://github.com/rtk-ai/rtk/commit/b34be37caf3796b69a50952a28e60e32b5daad43)
- [Official license](https://github.com/rtk-ai/rtk/blob/v0.45.0/LICENSE)
- [Installation reference](https://github.com/rtk-ai/rtk/blob/v0.45.0/INSTALL.md)
- [Telemetry specification](https://github.com/rtk-ai/rtk/blob/v0.45.0/docs/TELEMETRY.md)
- [Technical architecture](https://github.com/rtk-ai/rtk/blob/v0.45.0/docs/contributing/TECHNICAL.md)
- [Supported agents](https://github.com/rtk-ai/rtk/blob/v0.45.0/docs/guide/getting-started/supported-agents.md)
- [Codex instruction-layer issue #1943](https://github.com/rtk-ai/rtk/issues/1943)
- [Historical integration/privacy discussion #1989](https://github.com/rtk-ai/rtk/discussions/1989)

External-source content was paraphrased for licensing compliance. Source and
binary findings were cross-checked against the exact frozen revision without
installing or executing RTK.
