#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd -P)"
source "${SCRIPT_DIR}/sports-academy-rtk-wp02-env.sh"
"${SCRIPT_DIR}/sports-academy-rtk-wp02-verify-isolation.sh"

meta_file="${SPORTS_ACADEMY_RTK_EVIDENCE_DIR}/sports-academy-rtk-init.meta.txt"
[[ -f "$meta_file" ]] || sports_academy_rtk_fail "completed init metadata required"
grep -Fqx 'EXIT_CODE=0' "$meta_file" || sports_academy_rtk_fail "successful init required before POST snapshot"
SNAPSHOT_DIR="${SPORTS_ACADEMY_RTK_EVIDENCE_DIR}/sports-academy-rtk-post"
[[ ! -e "$SNAPSHOT_DIR" ]] || sports_academy_rtk_fail "POST snapshot already exists"
sports_academy_rtk_snapshot "$SNAPSHOT_DIR"
git -C "$SPORTS_ACADEMY_RTK_PROJECT_DIR" status --short --branch > "${SNAPSHOT_DIR}/sandbox-git-status.txt"
git -C "$SPORTS_ACADEMY_RTK_PROJECT_DIR" --no-pager diff --binary > "${SNAPSHOT_DIR}/sandbox-git-diff.patch"
git -C "$SPORTS_ACADEMY_RTK_PROJECT_DIR" ls-files --others --exclude-standard > "${SNAPSHOT_DIR}/sandbox-untracked.txt"
git -C "$SPORTS_ACADEMY_RTK_ACTIVE_REPO" status --porcelain=v1 > "${SNAPSHOT_DIR}/active-git-status.txt"
git -C "$SPORTS_ACADEMY_RTK_ACTIVE_REPO" rev-parse HEAD > "${SNAPSHOT_DIR}/active-git-head.txt"
find "$SPORTS_ACADEMY_RTK_SANDBOX_ROOT" -xdev \( -name 'AGENTS.md' -o -name 'RTK.md' -o -name '*.bak' -o -name '*.db' -o -name '*.db-wal' -o -name '*.db-shm' \) -print > "${SNAPSHOT_DIR}/sensitive-paths.txt"
if command -v sqlite3 >/dev/null 2>&1 && [[ -f "$RTK_DB_PATH" && ! -L "$RTK_DB_PATH" ]]; then
  sqlite3 "$RTK_DB_PATH" '.schema' > "${SNAPSHOT_DIR}/db-schema.sql"
  sqlite3 "$RTK_DB_PATH" '.tables' > "${SNAPSHOT_DIR}/db-tables.txt"
else
  printf 'SQLITE_INSPECTION_UNAVAILABLE_OR_DB_ABSENT\n' > "${SNAPSHOT_DIR}/db-inspection.txt"
fi
printf 'POST snapshot captured: %s\n' "$SNAPSHOT_DIR"
