#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd -P)"
source "${SCRIPT_DIR}/sports-academy-rtk-wp02-env.sh"
"${SCRIPT_DIR}/sports-academy-rtk-wp02-verify-isolation.sh"

[[ "$SPORTS_ACADEMY_RTK_PLATFORM_SUPPORTED" == "yes" ]] || sports_academy_rtk_fail "unsupported execution platform"
[[ "$(pwd -P)" == "$SPORTS_ACADEMY_RTK_PROJECT_DIR" ]] || sports_academy_rtk_fail "run only from disposable project root"
[[ "$(git rev-parse --show-toplevel)" == "$SPORTS_ACADEMY_RTK_PROJECT_DIR" ]] || sports_academy_rtk_fail "unexpected Git target"
[[ "$(git rev-parse HEAD)" == "$SPORTS_ACADEMY_RTK_EXPECTED_PROJECT_HEAD" ]] || sports_academy_rtk_fail "sandbox HEAD mismatch"
[[ -f "${SPORTS_ACADEMY_RTK_EVIDENCE_DIR}/sports-academy-rtk-pre/manifest.tsv" ]] || sports_academy_rtk_fail "PRE snapshot required"
[[ -f "$SPORTS_ACADEMY_RTK_BINARY" && ! -L "$SPORTS_ACADEMY_RTK_BINARY" ]] || sports_academy_rtk_fail "regular RTK binary required"
[[ "$(sports_academy_rtk_file_mode "$SPORTS_ACADEMY_RTK_CONFIG_FILE")" == "600" ]] || sports_academy_rtk_fail "privacy config mode changed"
[[ "$RTK_TELEMETRY_DISABLED" == "1" && "$RTK_TEE" == "0" && "$RTK_HOOK_AUDIT" == "0" ]] || sports_academy_rtk_fail "privacy controls not enforced"
grep -Fqx '[telemetry]' "$SPORTS_ACADEMY_RTK_CONFIG_FILE" || sports_academy_rtk_fail "telemetry section missing"
grep -Fqx 'consent_given = false' "$SPORTS_ACADEMY_RTK_CONFIG_FILE" || sports_academy_rtk_fail "telemetry consent control missing"
grep -Fqx '[tracking]' "$SPORTS_ACADEMY_RTK_CONFIG_FILE" || sports_academy_rtk_fail "tracking section missing"
[[ "$(grep -Fxc 'enabled = false' "$SPORTS_ACADEMY_RTK_CONFIG_FILE")" == "3" ]] || sports_academy_rtk_fail "expected three disabled config controls"

sports_academy_rtk_verify_binary_integrity() {
  local key value remainder current_binary_sha256 field_count=0
  local manifest_project_slug manifest_instance manifest_sandbox_root
  local manifest_rtk_release manifest_rtk_commit manifest_artifact_name
  local manifest_artifact_sha256 manifest_binary_path manifest_binary_sha256
  sports_academy_rtk_assert_under_sandbox "$SPORTS_ACADEMY_RTK_BINARY"
  sports_academy_rtk_assert_under_sandbox "$SPORTS_ACADEMY_RTK_INTEGRITY_MANIFEST"
  [[ -f "$SPORTS_ACADEMY_RTK_BINARY" && ! -L "$SPORTS_ACADEMY_RTK_BINARY" ]] || sports_academy_rtk_fail "regular RTK binary required"
  [[ -f "$SPORTS_ACADEMY_RTK_INTEGRITY_MANIFEST" && ! -L "$SPORTS_ACADEMY_RTK_INTEGRITY_MANIFEST" ]] || sports_academy_rtk_fail "regular binary integrity manifest required"
  [[ "$(sports_academy_rtk_file_mode "$SPORTS_ACADEMY_RTK_INTEGRITY_MANIFEST")" == "400" ]] || sports_academy_rtk_fail "binary integrity manifest permissions changed"
  while IFS='=' read -r key value remainder; do
    [[ -n "$key" && -n "$value" && -z "$remainder" ]] || sports_academy_rtk_fail "malformed binary integrity manifest"
    case "$key" in
      PROJECT_SLUG) [[ -z "${manifest_project_slug+x}" ]] || sports_academy_rtk_fail "duplicate binary integrity manifest field: $key"; manifest_project_slug="$value" ;;
      INSTANCE) [[ -z "${manifest_instance+x}" ]] || sports_academy_rtk_fail "duplicate binary integrity manifest field: $key"; manifest_instance="$value" ;;
      SANDBOX_ROOT) [[ -z "${manifest_sandbox_root+x}" ]] || sports_academy_rtk_fail "duplicate binary integrity manifest field: $key"; manifest_sandbox_root="$value" ;;
      RTK_RELEASE) [[ -z "${manifest_rtk_release+x}" ]] || sports_academy_rtk_fail "duplicate binary integrity manifest field: $key"; manifest_rtk_release="$value" ;;
      RTK_COMMIT) [[ -z "${manifest_rtk_commit+x}" ]] || sports_academy_rtk_fail "duplicate binary integrity manifest field: $key"; manifest_rtk_commit="$value" ;;
      ARTIFACT_NAME) [[ -z "${manifest_artifact_name+x}" ]] || sports_academy_rtk_fail "duplicate binary integrity manifest field: $key"; manifest_artifact_name="$value" ;;
      ARTIFACT_SHA256) [[ -z "${manifest_artifact_sha256+x}" ]] || sports_academy_rtk_fail "duplicate binary integrity manifest field: $key"; manifest_artifact_sha256="$value" ;;
      BINARY_PATH) [[ -z "${manifest_binary_path+x}" ]] || sports_academy_rtk_fail "duplicate binary integrity manifest field: $key"; manifest_binary_path="$value" ;;
      BINARY_SHA256) [[ -z "${manifest_binary_sha256+x}" ]] || sports_academy_rtk_fail "duplicate binary integrity manifest field: $key"; manifest_binary_sha256="$value" ;;
      *) sports_academy_rtk_fail "unknown binary integrity manifest field: $key" ;;
    esac
    field_count=$((field_count + 1))
  done < "$SPORTS_ACADEMY_RTK_INTEGRITY_MANIFEST"
  [[ "$field_count" == "9" ]] || sports_academy_rtk_fail "binary integrity manifest field count mismatch"
  [[ "${manifest_project_slug-}" == "$SPORTS_ACADEMY_RTK_PROJECT_SLUG" ]] || sports_academy_rtk_fail "binary integrity project slug mismatch"
  [[ "${manifest_instance-}" == "$SPORTS_ACADEMY_INSTANCE" ]] || sports_academy_rtk_fail "binary integrity instance mismatch"
  [[ "${manifest_sandbox_root-}" == "$SPORTS_ACADEMY_RTK_SANDBOX_ROOT" ]] || sports_academy_rtk_fail "binary integrity sandbox mismatch"
  [[ "${manifest_rtk_release-}" == "$SPORTS_ACADEMY_RTK_RELEASE" ]] || sports_academy_rtk_fail "binary integrity release mismatch"
  [[ "${manifest_rtk_commit-}" == "$SPORTS_ACADEMY_RTK_COMMIT" ]] || sports_academy_rtk_fail "binary integrity commit mismatch"
  [[ "${manifest_artifact_name-}" == "$SPORTS_ACADEMY_RTK_ARTIFACT_NAME" ]] || sports_academy_rtk_fail "binary integrity artifact mismatch"
  [[ "${manifest_artifact_sha256-}" == "$SPORTS_ACADEMY_RTK_ARTIFACT_SHA256" ]] || sports_academy_rtk_fail "binary integrity archive checksum mismatch"
  [[ "${manifest_binary_path-}" == "$SPORTS_ACADEMY_RTK_BINARY" ]] || sports_academy_rtk_fail "binary integrity path mismatch"
  [[ "${manifest_binary_sha256-}" =~ ^[0-9a-f]{64}$ ]] || sports_academy_rtk_fail "missing or malformed expected executable checksum"
  current_binary_sha256="$(sports_academy_rtk_sha256 "$SPORTS_ACADEMY_RTK_BINARY")"
  [[ "$current_binary_sha256" == "$manifest_binary_sha256" ]] || sports_academy_rtk_fail "RTK executable checksum mismatch"
}

run_id="sports-academy-rtk-init"
stdout_file="${SPORTS_ACADEMY_RTK_EVIDENCE_DIR}/${run_id}.stdout.txt"
stderr_file="${SPORTS_ACADEMY_RTK_EVIDENCE_DIR}/${run_id}.stderr.txt"
meta_file="${SPORTS_ACADEMY_RTK_EVIDENCE_DIR}/${run_id}.meta.txt"
trace_file="${SPORTS_ACADEMY_RTK_EVIDENCE_DIR}/${run_id}.network.trace"
for path in "$stdout_file" "$stderr_file" "$meta_file" "$trace_file"; do [[ ! -e "$path" ]] || sports_academy_rtk_fail "run evidence already exists: $path"; done
printf 'COMMAND=%q init --codex\nNETWORK_OBSERVER=unavailable\n' "$SPORTS_ACADEMY_RTK_BINARY" > "$meta_file"
start_seconds="$(date +%s)"
if [[ "$SPORTS_ACADEMY_RTK_OS" == "linux" ]] && command -v strace >/dev/null 2>&1; then
  sed -i.bak 's/NETWORK_OBSERVER=unavailable/NETWORK_OBSERVER=strace/' "$meta_file" && rm -f -- "${meta_file}.bak"
  sports_academy_rtk_verify_binary_integrity
  set +e
  strace -f -e trace=network -o "$trace_file" -- "${SPORTS_ACADEMY_RTK_INIT_COMMAND[@]}" >"$stdout_file" 2>"$stderr_file"
  exit_code=$?
  set -e
else
  printf 'NETWORK_OBSERVATION_UNAVAILABLE\n' > "$trace_file"
  sports_academy_rtk_verify_binary_integrity
  set +e
  "${SPORTS_ACADEMY_RTK_INIT_COMMAND[@]}" >"$stdout_file" 2>"$stderr_file"
  exit_code=$?
  set -e
fi
printf 'EXIT_CODE=%s\nDURATION_SECONDS=%s\n' "$exit_code" "$(( $(date +%s) - start_seconds ))" >> "$meta_file"
exit "$exit_code"
