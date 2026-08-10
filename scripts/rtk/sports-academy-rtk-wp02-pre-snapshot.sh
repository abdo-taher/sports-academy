#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd -P)"
source "${SCRIPT_DIR}/sports-academy-rtk-wp02-env.sh"
"${SCRIPT_DIR}/sports-academy-rtk-wp02-verify-isolation.sh"

[[ -d "$SPORTS_ACADEMY_RTK_PROJECT_DIR/.git" ]] || sports_academy_rtk_fail "sandbox project missing"
[[ "$(git -C "$SPORTS_ACADEMY_RTK_PROJECT_DIR" rev-parse HEAD)" == "$SPORTS_ACADEMY_RTK_EXPECTED_PROJECT_HEAD" ]] || sports_academy_rtk_fail "sandbox HEAD mismatch"
[[ -z "$(git -C "$SPORTS_ACADEMY_RTK_PROJECT_DIR" status --porcelain)" ]] || sports_academy_rtk_fail "sandbox project must be clean before PRE snapshot"
SNAPSHOT_DIR="${SPORTS_ACADEMY_RTK_EVIDENCE_DIR}/sports-academy-rtk-pre"
[[ ! -e "$SNAPSHOT_DIR" ]] || sports_academy_rtk_fail "PRE snapshot already exists"
sports_academy_rtk_snapshot "$SNAPSHOT_DIR"
git -C "$SPORTS_ACADEMY_RTK_PROJECT_DIR" status --short --branch > "${SNAPSHOT_DIR}/sandbox-git-status.txt"
git -C "$SPORTS_ACADEMY_RTK_PROJECT_DIR" rev-parse HEAD > "${SNAPSHOT_DIR}/sandbox-git-head.txt"
git -C "$SPORTS_ACADEMY_RTK_ACTIVE_REPO" status --porcelain=v1 > "${SNAPSHOT_DIR}/active-git-status.txt"
git -C "$SPORTS_ACADEMY_RTK_ACTIVE_REPO" rev-parse HEAD > "${SNAPSHOT_DIR}/active-git-head.txt"
printf 'ARTIFACT=%s\nARTIFACT_SHA256=%s\nBINARY_SHA256=%s\nRTK_DB_PATH=%s\nRTK_TEE_DIR=%s\nRTK_AUDIT_DIR=%s\nCODEX_HOME=%s\n' \
  "$SPORTS_ACADEMY_RTK_ARTIFACT_NAME" "$SPORTS_ACADEMY_RTK_ARTIFACT_SHA256" \
  "$(sports_academy_rtk_sha256 "$SPORTS_ACADEMY_RTK_BINARY")" "$RTK_DB_PATH" \
  "$RTK_TEE_DIR" "$RTK_AUDIT_DIR" "$CODEX_HOME" > "${SNAPSHOT_DIR}/controls.txt"
printf 'PRE snapshot captured without executing RTK: %s\n' "$SNAPSHOT_DIR"
