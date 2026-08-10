#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd -P)"
source "${SCRIPT_DIR}/sports-academy-rtk-wp02-env.sh"

missing=0
printf 'Sports Academy RTK WP-RTK-02 preflight (non-mutating)\n'
printf 'OS: %s\nArchitecture: %s\nExecution model: %s\nRepository root: %s\nReal HOME: %s\nSandbox root: %s\n' \
  "$SPORTS_ACADEMY_RTK_OS" "$SPORTS_ACADEMY_RTK_ARCH" "$SPORTS_ACADEMY_RTK_EXECUTION_MODEL" \
  "$SPORTS_ACADEMY_RTK_REPO_ROOT" "$SPORTS_ACADEMY_RTK_REAL_HOME" "$SPORTS_ACADEMY_RTK_SANDBOX_ROOT"
printf 'Bash: %s\n' "$BASH_VERSION"
for command_name in "${SPORTS_ACADEMY_RTK_REQUIRED_COMMANDS[@]}"; do
  if command -v "$command_name" >/dev/null 2>&1; then
    printf 'Prerequisite %-12s AVAILABLE (%s)\n' "$command_name" "$(command -v "$command_name")"
  else
    printf 'Prerequisite %-12s MISSING\n' "$command_name"
    missing=1
  fi
done
if command -v sha256sum >/dev/null 2>&1; then
  printf 'Prerequisite %-12s AVAILABLE (%s)\n' 'SHA-256' "$(command -v sha256sum)"
elif command -v shasum >/dev/null 2>&1; then
  printf 'Prerequisite %-12s AVAILABLE (%s -a 256)\n' 'SHA-256' "$(command -v shasum)"
else
  printf 'Prerequisite %-12s MISSING (install sha256sum or shasum)\n' 'SHA-256'
  missing=1
fi
printf 'Git: %s\n' "$(git --version 2>/dev/null || printf 'MISSING')"
node_version="$(node --version 2>/dev/null || true)"
pnpm_version="$(pnpm --version 2>/dev/null || true)"
printf 'Node: %s (required %s)\n' "${node_version:-MISSING}" "$SPORTS_ACADEMY_RTK_NODE_PIN"
printf 'pnpm: %s (required %s)\n' "${pnpm_version:-MISSING}" "$SPORTS_ACADEMY_RTK_PNPM_PIN"
[[ "${node_version#v}" == "$SPORTS_ACADEMY_RTK_NODE_PIN" ]] || { printf 'Node pin: MISMATCH\n'; missing=1; }
[[ "$pnpm_version" == "$SPORTS_ACADEMY_RTK_PNPM_PIN" ]] || { printf 'pnpm pin: MISMATCH\n'; missing=1; }
printf 'RTK release: %s\nArtifact: %s\nExpected SHA-256: %s\nArchive: %s\nEvidence: %s\n' \
  "$SPORTS_ACADEMY_RTK_RELEASE" "$SPORTS_ACADEMY_RTK_ARTIFACT_NAME" \
  "$SPORTS_ACADEMY_RTK_ARTIFACT_SHA256" "$SPORTS_ACADEMY_RTK_ARCHIVE_TYPE" \
  "$SPORTS_ACADEMY_RTK_ARTIFACT_EVIDENCE"
if [[ "$SPORTS_ACADEMY_RTK_PLATFORM_SUPPORTED" != "yes" ]]; then
  printf 'Platform result: UNSUPPORTED — this WP allows only native Linux/macOS Bash with a verified frozen artifact/checksum; WSL, MSYS/Git Bash/Cygwin, and native PowerShell are unsupported\n'
  exit 1
fi
if (( missing != 0 )); then
  printf 'Preflight result: UNSUPPORTED — install the exact missing prerequisites and repository pins, then rerun preflight. Bootstrap will not use system-level installers.\n'
  exit 1
fi
"${SCRIPT_DIR}/sports-academy-rtk-wp02-verify-isolation.sh"
printf 'Preflight result: SUPPORTED\n'
