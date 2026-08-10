#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd -P)"
source "${SCRIPT_DIR}/sports-academy-rtk-wp02-env.sh"

[[ "$(git -C "$SPORTS_ACADEMY_RTK_ACTIVE_REPO" rev-parse --show-toplevel)" == "$SPORTS_ACADEMY_RTK_ACTIVE_REPO" ]] || sports_academy_rtk_fail "ACTIVE repository identity failed"
[[ "$SPORTS_ACADEMY_RTK_SANDBOX_ROOT" != "$SPORTS_ACADEMY_RTK_ACTIVE_REPO" ]] || sports_academy_rtk_fail "sandbox equals ACTIVE repository"
case "$SPORTS_ACADEMY_RTK_SANDBOX_ROOT/" in "$SPORTS_ACADEMY_RTK_ACTIVE_REPO/"*) sports_academy_rtk_fail "sandbox is inside ACTIVE repository" ;; esac
case "$SPORTS_ACADEMY_RTK_ACTIVE_REPO/" in "$SPORTS_ACADEMY_RTK_SANDBOX_ROOT/"*) sports_academy_rtk_fail "ACTIVE repository is inside sandbox" ;; esac
[[ "${SPORTS_ACADEMY_RTK_SANDBOX_ROOT##*/}" == "$SPORTS_ACADEMY_RTK_SANDBOX_NAMESPACE" ]] || sports_academy_rtk_fail "instance-qualified sandbox namespace changed"
sports_academy_rtk_assert_no_symlink_ancestors "$SPORTS_ACADEMY_RTK_SANDBOX_ROOT"

for path in "${SPORTS_ACADEMY_RTK_MUTABLE_ROOTS[@]}" "$SPORTS_ACADEMY_RTK_BINARY" "$SPORTS_ACADEMY_RTK_CONFIG_FILE" "$SPORTS_ACADEMY_RTK_INTEGRITY_MANIFEST"; do
  sports_academy_rtk_assert_under_sandbox "$path"
  sports_academy_rtk_assert_no_symlink_ancestors "$path"
done
for prohibited in \
  "${SPORTS_ACADEMY_RTK_REAL_USER_HOME}/.config/rtk" \
  "${SPORTS_ACADEMY_RTK_REAL_USER_HOME}/.local/share/rtk" \
  "${SPORTS_ACADEMY_RTK_REAL_USER_HOME}/.cache/rtk" \
  "${SPORTS_ACADEMY_RTK_REAL_USER_HOME}/.codex"; do
  for path in "${SPORTS_ACADEMY_RTK_MUTABLE_ROOTS[@]}"; do [[ "$path" != "$prohibited" ]] || sports_academy_rtk_fail "real-home target prohibited: $path"; done
done
[[ "$HOME" == "$SPORTS_ACADEMY_RTK_HOME" && "$CODEX_HOME" == "$SPORTS_ACADEMY_RTK_CODEX_HOME" ]] || sports_academy_rtk_fail "isolated HOME/CODEX_HOME mismatch"
[[ "$RTK_TELEMETRY_DISABLED" == "1" && "$RTK_TEE" == "0" && "$RTK_HOOK_AUDIT" == "0" ]] || sports_academy_rtk_fail "privacy controls must remain disabled"
printf 'Isolation PASS: %s\n' "$SPORTS_ACADEMY_RTK_SANDBOX_ROOT"
