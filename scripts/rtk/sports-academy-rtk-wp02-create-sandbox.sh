#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd -P)"
source "${SCRIPT_DIR}/sports-academy-rtk-wp02-env.sh"
"${SCRIPT_DIR}/sports-academy-rtk-wp02-verify-isolation.sh"

[[ "$SPORTS_ACADEMY_RTK_PLATFORM_SUPPORTED" == "yes" ]] || sports_academy_rtk_fail "unsupported OS/architecture or Bash execution model"
[[ "$SPORTS_ACADEMY_RTK_ARCHIVE_TYPE" == "tar.gz" ]] || sports_academy_rtk_fail "only verified tar.gz artifacts are allowed"
[[ "$(pwd -P)" == "$SPORTS_ACADEMY_RTK_ACTIVE_REPO" ]] || sports_academy_rtk_fail "run from ACTIVE repository root"
[[ "$(git branch --show-current)" == "$SPORTS_ACADEMY_RTK_EXPECTED_BRANCH" ]] || sports_academy_rtk_fail "unexpected ACTIVE branch"
[[ "$(git rev-parse HEAD)" == "$SPORTS_ACADEMY_RTK_EXPECTED_PROJECT_HEAD" ]] || sports_academy_rtk_fail "unexpected ACTIVE HEAD"
[[ "$(git rev-parse "origin/${SPORTS_ACADEMY_RTK_EXPECTED_BRANCH}")" == "$SPORTS_ACADEMY_RTK_EXPECTED_PROJECT_HEAD" ]] || sports_academy_rtk_fail "remote branch mismatch"
[[ -z "$(git status --porcelain)" ]] || sports_academy_rtk_fail "ACTIVE repository must be clean"
[[ ! -e "$SPORTS_ACADEMY_RTK_SANDBOX_ROOT" ]] || sports_academy_rtk_fail "sandbox already exists: $SPORTS_ACADEMY_RTK_SANDBOX_ROOT"

sports_academy_rtk_assert_no_symlink_ancestors "$SPORTS_ACADEMY_RTK_SANDBOX_ROOT"
mkdir -p -- "$SPORTS_ACADEMY_RTK_SANDBOX_ROOT"
for path in "${SPORTS_ACADEMY_RTK_MUTABLE_ROOTS[@]}" "$(dirname -- "$SPORTS_ACADEMY_RTK_PROJECT_DIR")"; do
  sports_academy_rtk_assert_under_sandbox "$path"
  sports_academy_rtk_assert_no_symlink_ancestors "$path"
  mkdir -p -- "$path"
done
chmod 700 -- "$SPORTS_ACADEMY_RTK_SANDBOX_ROOT" "$SPORTS_ACADEMY_RTK_HOME" "$SPORTS_ACADEMY_RTK_CODEX_HOME" "$SPORTS_ACADEMY_RTK_TMPDIR"

git clone --no-local --branch "$SPORTS_ACADEMY_RTK_EXPECTED_BRANCH" --single-branch "$SPORTS_ACADEMY_RTK_ACTIVE_REPO" "$SPORTS_ACADEMY_RTK_PROJECT_DIR"
[[ "$(git -C "$SPORTS_ACADEMY_RTK_PROJECT_DIR" rev-parse HEAD)" == "$SPORTS_ACADEMY_RTK_EXPECTED_PROJECT_HEAD" ]] || sports_academy_rtk_fail "sandbox clone HEAD mismatch"
[[ -z "$(git -C "$SPORTS_ACADEMY_RTK_PROJECT_DIR" status --porcelain)" ]] || sports_academy_rtk_fail "sandbox clone is not clean"

artifact_path="${SPORTS_ACADEMY_RTK_TMPDIR}/${SPORTS_ACADEMY_RTK_ARTIFACT_NAME}"
extract_dir="${SPORTS_ACADEMY_RTK_TMPDIR}/artifact-extract"
sports_academy_rtk_assert_under_sandbox "$artifact_path"
curl --fail --silent --show-error --location "$SPORTS_ACADEMY_RTK_ARTIFACT_URL" --output "$artifact_path"
[[ "$(sports_academy_rtk_sha256 "$artifact_path")" == "$SPORTS_ACADEMY_RTK_ARTIFACT_SHA256" ]] || sports_academy_rtk_fail "RTK artifact checksum mismatch"
mkdir -p -- "$extract_dir"
[[ "$(tar -tzf "$artifact_path")" == "$SPORTS_ACADEMY_RTK_ARCHIVE_BINARY" ]] || sports_academy_rtk_fail "unexpected tar archive layout"
[[ "$(tar -tvzf "$artifact_path" | cut -c1)" == "-" ]] || sports_academy_rtk_fail "RTK tar member must be a regular file"
tar -xzf "$artifact_path" -C "$extract_dir" -- "$SPORTS_ACADEMY_RTK_ARCHIVE_BINARY"
extracted_binary="${extract_dir}/${SPORTS_ACADEMY_RTK_ARCHIVE_BINARY}"
[[ -f "$extracted_binary" && ! -L "$extracted_binary" ]] || sports_academy_rtk_fail "extracted RTK must be one regular file"
[[ "$(find "$extract_dir" -mindepth 1 -maxdepth 1 -print | wc -l | tr -d ' ')" == "1" ]] || sports_academy_rtk_fail "unexpected extracted content"
cp -- "$extracted_binary" "$SPORTS_ACADEMY_RTK_BINARY"
chmod 700 -- "$SPORTS_ACADEMY_RTK_BINARY"
provisioned_binary_sha256="$(sports_academy_rtk_sha256 "$SPORTS_ACADEMY_RTK_BINARY")"
if [[ -n "$SPORTS_ACADEMY_RTK_EXPECTED_BINARY_SHA256" ]]; then
  [[ "$provisioned_binary_sha256" == "$SPORTS_ACADEMY_RTK_EXPECTED_BINARY_SHA256" ]] || sports_academy_rtk_fail "RTK extracted binary checksum mismatch"
fi
printf '%s  %s\n' "$SPORTS_ACADEMY_RTK_ARTIFACT_SHA256" "$SPORTS_ACADEMY_RTK_ARTIFACT_NAME" > "${SPORTS_ACADEMY_RTK_EVIDENCE_DIR}/artifact.sha256"
printf '%s  %s\n' "$provisioned_binary_sha256" "$SPORTS_ACADEMY_RTK_BINARY_NAME" > "${SPORTS_ACADEMY_RTK_EVIDENCE_DIR}/binary.sha256"

sports_academy_rtk_assert_under_sandbox "$SPORTS_ACADEMY_RTK_INTEGRITY_MANIFEST"
[[ ! -e "$SPORTS_ACADEMY_RTK_INTEGRITY_MANIFEST" && ! -L "$SPORTS_ACADEMY_RTK_INTEGRITY_MANIFEST" ]] || sports_academy_rtk_fail "binary integrity manifest already exists"
integrity_tmp="$(mktemp "${SPORTS_ACADEMY_RTK_EVIDENCE_DIR}/sports-academy-rtk-wp02-binary-integrity.XXXXXX")"
sports_academy_rtk_assert_under_sandbox "$integrity_tmp"
[[ -f "$integrity_tmp" && ! -L "$integrity_tmp" ]] || sports_academy_rtk_fail "integrity manifest temporary file must be regular"
printf '%s\n' \
  "PROJECT_SLUG=$SPORTS_ACADEMY_RTK_PROJECT_SLUG" \
  "INSTANCE=$SPORTS_ACADEMY_INSTANCE" \
  "SANDBOX_ROOT=$SPORTS_ACADEMY_RTK_SANDBOX_ROOT" \
  "RTK_RELEASE=$SPORTS_ACADEMY_RTK_RELEASE" \
  "RTK_COMMIT=$SPORTS_ACADEMY_RTK_COMMIT" \
  "ARTIFACT_NAME=$SPORTS_ACADEMY_RTK_ARTIFACT_NAME" \
  "ARTIFACT_SHA256=$SPORTS_ACADEMY_RTK_ARTIFACT_SHA256" \
  "BINARY_PATH=$SPORTS_ACADEMY_RTK_BINARY" \
  "BINARY_SHA256=$provisioned_binary_sha256" > "$integrity_tmp"
chmod 400 -- "$integrity_tmp"
mv -- "$integrity_tmp" "$SPORTS_ACADEMY_RTK_INTEGRITY_MANIFEST"
[[ -f "$SPORTS_ACADEMY_RTK_INTEGRITY_MANIFEST" && ! -L "$SPORTS_ACADEMY_RTK_INTEGRITY_MANIFEST" ]] || sports_academy_rtk_fail "binary integrity manifest must be regular"
[[ "$(sports_academy_rtk_file_mode "$SPORTS_ACADEMY_RTK_INTEGRITY_MANIFEST")" == "400" ]] || sports_academy_rtk_fail "binary integrity manifest permissions changed"

mkdir -p -- "$(dirname -- "$SPORTS_ACADEMY_RTK_CONFIG_FILE")"
printf '%s\n' '[telemetry]' 'enabled = false' 'consent_given = false' '' '[tracking]' 'enabled = false' '' '[tee]' 'enabled = false' 'mode = "never"' > "$SPORTS_ACADEMY_RTK_CONFIG_FILE"
chmod 600 -- "$SPORTS_ACADEMY_RTK_CONFIG_FILE"
printf 'Sandbox prepared without executing RTK: %s\n' "$SPORTS_ACADEMY_RTK_SANDBOX_ROOT"
