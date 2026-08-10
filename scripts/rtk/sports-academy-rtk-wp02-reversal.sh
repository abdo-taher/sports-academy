#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd -P)"
source "${SCRIPT_DIR}/sports-academy-rtk-wp02-env.sh"
"${SCRIPT_DIR}/sports-academy-rtk-wp02-verify-isolation.sh"

[[ "$(pwd -P)" == "$SPORTS_ACADEMY_RTK_PROJECT_DIR" ]] || sports_academy_rtk_fail "run only from disposable project root"
[[ -d "${SPORTS_ACADEMY_RTK_EVIDENCE_DIR}/sports-academy-rtk-post" ]] || sports_academy_rtk_fail "POST snapshot required before reversal"
[[ "$(git rev-parse HEAD)" == "$SPORTS_ACADEMY_RTK_EXPECTED_PROJECT_HEAD" ]] || sports_academy_rtk_fail "sandbox HEAD mismatch"
agents_path="${SPORTS_ACADEMY_RTK_PROJECT_DIR}/AGENTS.md"
rtk_md_path="${SPORTS_ACADEMY_RTK_PROJECT_DIR}/RTK.md"
for path in "$agents_path" "$rtk_md_path"; do
  sports_academy_rtk_assert_under_sandbox "$path"
  [[ ! -L "$path" ]] || sports_academy_rtk_fail "symlink target prohibited: $path"
done
[[ -f "$agents_path" ]] || sports_academy_rtk_fail "AGENTS.md missing; refusing reversal"
[[ "$(grep -Fxc '@RTK.md' "$agents_path" || true)" == "1" ]] || sports_academy_rtk_fail "expected exactly one generated @RTK.md line"
[[ -f "$rtk_md_path" ]] || sports_academy_rtk_fail "generated RTK.md missing; refusing partial reversal"

original_mode="$(sports_academy_rtk_file_mode "$agents_path")"
original_agents="$(mktemp "${SPORTS_ACADEMY_RTK_TMPDIR}/sports-academy-agents-original.XXXXXX")"
expected_agents="$(mktemp "${SPORTS_ACADEMY_RTK_TMPDIR}/sports-academy-agents-expected.XXXXXX")"
git show HEAD:AGENTS.md > "$original_agents"
printf '%s\n\n@RTK.md\n' "$(cat "$original_agents")" > "$expected_agents"
[[ "$(sports_academy_rtk_sha256 "$agents_path")" == "$(sports_academy_rtk_sha256 "$expected_agents")" ]] || sports_academy_rtk_fail "AGENTS.md contains changes beyond the exact generated reference"
cp -- "$original_agents" "$agents_path"
chmod "$original_mode" "$agents_path"
rm -f -- "$original_agents" "$expected_agents"
rm -- "$rtk_md_path"
[[ -z "$(git status --porcelain)" ]] || sports_academy_rtk_fail "reversal did not restore clean disposable project"
reversal_dir="${SPORTS_ACADEMY_RTK_EVIDENCE_DIR}/sports-academy-rtk-reversal"
sports_academy_rtk_snapshot "$reversal_dir"
printf 'Reversal PASS; discard the exact sandbox root after evidence review: %s\n' "$SPORTS_ACADEMY_RTK_SANDBOX_ROOT"
