#!/usr/bin/env bash
set -euo pipefail

sports_academy_rtk_fail() {
  printf 'ERROR: %s\n' "$*" >&2
  return 1
}

sports_academy_rtk_normalize_absolute() {
  local input="$1" part normalized="/" old_ifs
  [[ "$input" == /* ]] || sports_academy_rtk_fail "path must be absolute: $input"
  [[ "$input" != *$'\n'* && "$input" != *$'\r'* ]] || sports_academy_rtk_fail "path contains a line break"
  old_ifs="$IFS"
  IFS='/'
  read -r -a parts <<< "${input#/}"
  IFS="$old_ifs"
  for part in "${parts[@]}"; do
    case "$part" in
      ''|.) continue ;;
      ..)
        [[ "$normalized" != "/" ]] || sports_academy_rtk_fail "path escapes filesystem root: $input"
        normalized="${normalized%/*}"
        [[ -n "$normalized" ]] || normalized="/"
        ;;
      *)
        if [[ "$normalized" == "/" ]]; then normalized="/$part"; else normalized="$normalized/$part"; fi
        ;;
    esac
  done
  printf '%s\n' "$normalized"
}

sports_academy_rtk_resolve_path() {
  local input="$1" probe suffix="" base parent
  probe="$(sports_academy_rtk_normalize_absolute "$input")"
  while [[ ! -e "$probe" && ! -L "$probe" ]]; do
    base="${probe##*/}"
    suffix="/$base$suffix"
    probe="${probe%/*}"
    [[ -n "$probe" ]] || probe="/"
  done
  [[ ! -L "$probe" ]] || sports_academy_rtk_fail "symlink path component prohibited: $probe"
  if [[ -d "$probe" ]]; then
    probe="$(cd -- "$probe" && pwd -P)"
  else
    base="${probe##*/}"
    parent="${probe%/*}"
    [[ -n "$parent" ]] || parent="/"
    probe="$(cd -- "$parent" && pwd -P)/$base"
  fi
  sports_academy_rtk_normalize_absolute "${probe}${suffix}"
}
sports_academy_rtk_assert_no_symlink_ancestors() {
  local path current="/" part old_ifs
  path="$(sports_academy_rtk_normalize_absolute "$1")"
  old_ifs="$IFS"
  IFS='/'
  read -r -a parts <<< "${path#/}"
  IFS="$old_ifs"
  for part in "${parts[@]}"; do
    [[ -n "$part" ]] || continue
    if [[ "$current" == "/" ]]; then current="/$part"; else current="$current/$part"; fi
    [[ ! -L "$current" ]] || sports_academy_rtk_fail "symlink path component prohibited: $current"
  done
}

sports_academy_rtk_path_is_within() {
  local path root
  path="$(sports_academy_rtk_resolve_path "$1")"
  root="$(sports_academy_rtk_resolve_path "$2")"
  case "$path" in "$root"|"$root"/*) return 0 ;; *) return 1 ;; esac
}

sports_academy_rtk_assert_under_sandbox() {
  local original="$1" path
  sports_academy_rtk_assert_no_symlink_ancestors "$original"
  path="$(sports_academy_rtk_resolve_path "$original")"
  sports_academy_rtk_path_is_within "$path" "$SPORTS_ACADEMY_RTK_SANDBOX_ROOT" || sports_academy_rtk_fail "mutable path escapes sandbox: $path"
  sports_academy_rtk_path_is_within "$path" "$SPORTS_ACADEMY_RTK_REPO_ROOT" && sports_academy_rtk_fail "mutable path enters ACTIVE repository: $path"
  sports_academy_rtk_assert_no_symlink_ancestors "$path"
}

sports_academy_rtk_sha256() {
  local path="$1"
  if command -v sha256sum >/dev/null 2>&1; then
    sha256sum "$path" | awk '{print $1}'
  elif command -v shasum >/dev/null 2>&1; then
    shasum -a 256 "$path" | awk '{print $1}'
  else
    sports_academy_rtk_fail "SHA-256 tool missing; install sha256sum or shasum"
  fi
}

sports_academy_rtk_file_mode() {
  if stat -c '%a' "$1" >/dev/null 2>&1; then stat -c '%a' "$1"; else stat -f '%Lp' "$1"; fi
}

sports_academy_rtk_context_match() {
  local name="$1" expected="$2" inherited=""
  if declare -p "$name" >/dev/null 2>&1; then
    inherited="${!name}"
  fi
  if [[ -n "$inherited" && "$inherited" != "$expected" ]]; then
    sports_academy_rtk_fail "inconsistent inherited host context: $name"
  fi
  printf -v "$name" '%s' "$expected"
  export "$name"
}

SPORTS_ACADEMY_RTK_PROJECT_SLUG="${SPORTS_ACADEMY_RTK_PROJECT_SLUG:-${PROJECT_SLUG:-sports-academy}}"
SPORTS_ACADEMY_INSTANCE="${SPORTS_ACADEMY_INSTANCE:-${INSTANCE:-default}}"
export SPORTS_ACADEMY_RTK_PROJECT_SLUG SPORTS_ACADEMY_INSTANCE
[[ "$SPORTS_ACADEMY_RTK_PROJECT_SLUG" == "sports-academy" ]] || sports_academy_rtk_fail "project slug must remain sports-academy"
[[ "$SPORTS_ACADEMY_INSTANCE" =~ ^[A-Za-z0-9][A-Za-z0-9_-]{0,62}$ ]] || sports_academy_rtk_fail "instance must contain only letters, digits, underscore, or hyphen"
[[ "$SPORTS_ACADEMY_INSTANCE" != *..* && "$SPORTS_ACADEMY_INSTANCE" != */* && "$SPORTS_ACADEMY_INSTANCE" != \\* ]] || sports_academy_rtk_fail "instance path escape prohibited"
command -v git >/dev/null 2>&1 || sports_academy_rtk_fail "Git is required to resolve the repository root"

SPORTS_ACADEMY_RTK_SCRIPT_DIR="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd -P)"
calculated_repo_root="$(git -C "$SPORTS_ACADEMY_RTK_SCRIPT_DIR" rev-parse --show-toplevel)"
if [[ -n "${SPORTS_ACADEMY_RTK_REAL_HOME:-}" ]]; then
  calculated_real_home="$(cd -- "$SPORTS_ACADEMY_RTK_REAL_HOME" && pwd -P)"
else
  calculated_real_home="$(cd -- "${HOME:?HOME must be set}" && pwd -P)"
fi
calculated_real_xdg_config="${SPORTS_ACADEMY_RTK_REAL_XDG_CONFIG:-${XDG_CONFIG_HOME:-${calculated_real_home}/.config}}"
calculated_real_xdg_data="${SPORTS_ACADEMY_RTK_REAL_XDG_DATA:-${XDG_DATA_HOME:-${calculated_real_home}/.local/share}}"
calculated_real_xdg_cache="${SPORTS_ACADEMY_RTK_REAL_XDG_CACHE:-${XDG_CACHE_HOME:-${calculated_real_home}/.cache}}"
calculated_real_codex_home="${SPORTS_ACADEMY_RTK_REAL_CODEX_HOME:-${CODEX_HOME:-${calculated_real_home}/.codex}}"
sports_academy_rtk_context_match SPORTS_ACADEMY_RTK_REPO_ROOT "$calculated_repo_root"
sports_academy_rtk_context_match SPORTS_ACADEMY_RTK_ACTIVE_REPO "$calculated_repo_root"
sports_academy_rtk_context_match SPORTS_ACADEMY_RTK_REAL_HOME "$calculated_real_home"
sports_academy_rtk_context_match SPORTS_ACADEMY_RTK_REAL_USER_HOME "$calculated_real_home"
sports_academy_rtk_context_match SPORTS_ACADEMY_RTK_REAL_XDG_CONFIG "$(sports_academy_rtk_normalize_absolute "$calculated_real_xdg_config")"
sports_academy_rtk_context_match SPORTS_ACADEMY_RTK_REAL_XDG_DATA "$(sports_academy_rtk_normalize_absolute "$calculated_real_xdg_data")"
sports_academy_rtk_context_match SPORTS_ACADEMY_RTK_REAL_XDG_CACHE "$(sports_academy_rtk_normalize_absolute "$calculated_real_xdg_cache")"
sports_academy_rtk_context_match SPORTS_ACADEMY_RTK_REAL_CODEX_HOME "$(sports_academy_rtk_normalize_absolute "$calculated_real_codex_home")"

SPORTS_ACADEMY_RTK_SANDBOX_NAMESPACE="${SPORTS_ACADEMY_RTK_PROJECT_SLUG}-${SPORTS_ACADEMY_INSTANCE}-rtk-wp02"
calculated_sandbox_root="${SPORTS_ACADEMY_RTK_SANDBOX_ROOT:-${SPORTS_ACADEMY_RTK_REAL_HOME}/Kiro_Sandboxes/${SPORTS_ACADEMY_RTK_SANDBOX_NAMESPACE}}"
calculated_sandbox_root="$(sports_academy_rtk_normalize_absolute "$calculated_sandbox_root")"
[[ "${calculated_sandbox_root##*/}" == "$SPORTS_ACADEMY_RTK_SANDBOX_NAMESPACE" ]] || sports_academy_rtk_fail "sandbox root must end in ${SPORTS_ACADEMY_RTK_SANDBOX_NAMESPACE}"
sports_academy_rtk_context_match SPORTS_ACADEMY_RTK_SANDBOX_ROOT "$calculated_sandbox_root"
sports_academy_rtk_path_is_within "$SPORTS_ACADEMY_RTK_SANDBOX_ROOT" "$SPORTS_ACADEMY_RTK_REPO_ROOT" && sports_academy_rtk_fail "sandbox root may not be inside ACTIVE repository"
for protected_root in "$SPORTS_ACADEMY_RTK_REAL_XDG_CONFIG" "$SPORTS_ACADEMY_RTK_REAL_XDG_DATA" "$SPORTS_ACADEMY_RTK_REAL_XDG_CACHE" "$SPORTS_ACADEMY_RTK_REAL_CODEX_HOME"; do
  sports_academy_rtk_path_is_within "$SPORTS_ACADEMY_RTK_SANDBOX_ROOT" "$protected_root" && sports_academy_rtk_fail "sandbox root may not be inside real host configuration: $protected_root"
done
namespace_ancestor="${SPORTS_ACADEMY_RTK_SANDBOX_ROOT%/*}"
while [[ -n "$namespace_ancestor" && "$namespace_ancestor" != "/" ]]; do
  namespace_component="${namespace_ancestor##*/}"
  if [[ "$namespace_component" == *-rtk-wp02 && "$namespace_component" != "$SPORTS_ACADEMY_RTK_SANDBOX_NAMESPACE" ]]; then
    sports_academy_rtk_fail "sandbox root may not be nested beneath another WP-RTK-02 namespace: $namespace_component"
  fi
  namespace_ancestor="${namespace_ancestor%/*}"
done

SPORTS_ACADEMY_RTK_EXPECTED_BRANCH="${SPORTS_ACADEMY_RTK_EXPECTED_BRANCH:-tech/rtk-integration}"
SPORTS_ACADEMY_RTK_EXPECTED_PROJECT_HEAD="${SPORTS_ACADEMY_RTK_EXPECTED_PROJECT_HEAD:-$(git -C "$SPORTS_ACADEMY_RTK_REPO_ROOT" rev-parse HEAD)}"
export SPORTS_ACADEMY_RTK_EXPECTED_BRANCH SPORTS_ACADEMY_RTK_EXPECTED_PROJECT_HEAD
sports_academy_rtk_context_match SPORTS_ACADEMY_RTK_PROJECT_DIR "${SPORTS_ACADEMY_RTK_SANDBOX_ROOT}/project/${SPORTS_ACADEMY_RTK_PROJECT_SLUG}"
sports_academy_rtk_context_match SPORTS_ACADEMY_RTK_HOME "${SPORTS_ACADEMY_RTK_SANDBOX_ROOT}/home"
sports_academy_rtk_context_match SPORTS_ACADEMY_RTK_XDG_CONFIG "${SPORTS_ACADEMY_RTK_SANDBOX_ROOT}/xdg-config"
sports_academy_rtk_context_match SPORTS_ACADEMY_RTK_XDG_DATA "${SPORTS_ACADEMY_RTK_SANDBOX_ROOT}/xdg-data"
sports_academy_rtk_context_match SPORTS_ACADEMY_RTK_XDG_CACHE "${SPORTS_ACADEMY_RTK_SANDBOX_ROOT}/xdg-cache"
sports_academy_rtk_context_match SPORTS_ACADEMY_RTK_CODEX_HOME "${SPORTS_ACADEMY_RTK_SANDBOX_ROOT}/codex-home"
sports_academy_rtk_context_match SPORTS_ACADEMY_RTK_BIN_DIR "${SPORTS_ACADEMY_RTK_SANDBOX_ROOT}/bin"
sports_academy_rtk_context_match SPORTS_ACADEMY_RTK_EVIDENCE_DIR "${SPORTS_ACADEMY_RTK_SANDBOX_ROOT}/evidence"
sports_academy_rtk_context_match SPORTS_ACADEMY_RTK_TMPDIR "${SPORTS_ACADEMY_RTK_SANDBOX_ROOT}/tmp"
sports_academy_rtk_context_match SPORTS_ACADEMY_RTK_TEE_DIR "${SPORTS_ACADEMY_RTK_SANDBOX_ROOT}/tee"
sports_academy_rtk_context_match SPORTS_ACADEMY_RTK_AUDIT_DIR "${SPORTS_ACADEMY_RTK_SANDBOX_ROOT}/audit"
sports_academy_rtk_context_match SPORTS_ACADEMY_RTK_DB_DIR "${SPORTS_ACADEMY_RTK_XDG_DATA}/${SPORTS_ACADEMY_RTK_PROJECT_SLUG}-rtk"
sports_academy_rtk_context_match SPORTS_ACADEMY_RTK_DB_PATH "${SPORTS_ACADEMY_RTK_DB_DIR}/${SPORTS_ACADEMY_RTK_PROJECT_SLUG}-rtk-history.db"
sports_academy_rtk_context_match SPORTS_ACADEMY_RTK_CONFIG_FILE "${SPORTS_ACADEMY_RTK_XDG_CONFIG}/rtk/config.toml"
sports_academy_rtk_context_match SPORTS_ACADEMY_RTK_INTEGRITY_MANIFEST "${SPORTS_ACADEMY_RTK_EVIDENCE_DIR}/sports-academy-rtk-wp02-binary-integrity.env"

SPORTS_ACADEMY_RTK_RELEASE="v0.45.0"
SPORTS_ACADEMY_RTK_COMMIT="b34be37caf3796b69a50952a28e60e32b5daad43"
SPORTS_ACADEMY_RTK_ARTIFACT_EVIDENCE="Official GitHub RTK v0.45.0 release assets and published checksums: https://github.com/rtk-ai/rtk/releases/tag/v0.45.0"
raw_os="$(uname -s 2>/dev/null || printf unknown)"
raw_arch="$(uname -m 2>/dev/null || printf unknown)"
SPORTS_ACADEMY_RTK_EXECUTION_MODEL="unsupported"
case "$raw_os" in
  Linux)
    if grep -qi microsoft /proc/sys/kernel/osrelease 2>/dev/null; then SPORTS_ACADEMY_RTK_OS="windows-wsl"; else SPORTS_ACADEMY_RTK_OS="linux"; SPORTS_ACADEMY_RTK_EXECUTION_MODEL="native-bash"; fi
    ;;
  Darwin) SPORTS_ACADEMY_RTK_OS="macos"; SPORTS_ACADEMY_RTK_EXECUTION_MODEL="native-bash" ;;
  MINGW*|MSYS*|CYGWIN*) SPORTS_ACADEMY_RTK_OS="windows-msys" ;;
  *) SPORTS_ACADEMY_RTK_OS="unsupported" ;;
esac
case "$raw_arch" in x86_64|amd64) SPORTS_ACADEMY_RTK_ARCH="x86_64" ;; arm64|aarch64) SPORTS_ACADEMY_RTK_ARCH="aarch64" ;; *) SPORTS_ACADEMY_RTK_ARCH="unsupported" ;; esac

SPORTS_ACADEMY_RTK_PLATFORM_SUPPORTED="yes"
SPORTS_ACADEMY_RTK_EXPECTED_BINARY_SHA256=""
case "${SPORTS_ACADEMY_RTK_OS}/${SPORTS_ACADEMY_RTK_ARCH}" in
  linux/x86_64)
    SPORTS_ACADEMY_RTK_ARTIFACT_NAME="rtk-x86_64-unknown-linux-musl.tar.gz"
    SPORTS_ACADEMY_RTK_ARTIFACT_SHA256="c4c036fbf181fc55ef329786c8c17e0d427972b053b825944d968a6aafef1ba4"
    SPORTS_ACADEMY_RTK_EXPECTED_BINARY_SHA256="99e0cff729d52297a23eb832f809d9773ba7c32de818dfe76b2cdd900a951535"
    ;;
  linux/aarch64)
    SPORTS_ACADEMY_RTK_ARTIFACT_NAME="rtk-aarch64-unknown-linux-gnu.tar.gz"
    SPORTS_ACADEMY_RTK_ARTIFACT_SHA256="80a746dd305ef944ff50ef011ae4ce3878dd5ba88dfe35d859d05498191637c3"
    ;;
  macos/x86_64)
    SPORTS_ACADEMY_RTK_ARTIFACT_NAME="rtk-x86_64-apple-darwin.tar.gz"
    SPORTS_ACADEMY_RTK_ARTIFACT_SHA256="9ea02f889d5a2779e4fb700df4587824303c5a57cda22e903e30058079fca0ef"
    ;;
  macos/aarch64)
    SPORTS_ACADEMY_RTK_ARTIFACT_NAME="rtk-aarch64-apple-darwin.tar.gz"
    SPORTS_ACADEMY_RTK_ARTIFACT_SHA256="064151cfc2d50b24d810b06a0af2e41b9c945e83534e4c438c3d3eae607fc3f4"
    ;;
  *) SPORTS_ACADEMY_RTK_PLATFORM_SUPPORTED="no"; SPORTS_ACADEMY_RTK_ARTIFACT_NAME="NONE"; SPORTS_ACADEMY_RTK_ARTIFACT_SHA256="NONE" ;;
esac
SPORTS_ACADEMY_RTK_ARCHIVE_TYPE="tar.gz"
SPORTS_ACADEMY_RTK_BINARY_NAME="rtk"
SPORTS_ACADEMY_RTK_ARCHIVE_BINARY="rtk"
SPORTS_ACADEMY_RTK_BINARY="${SPORTS_ACADEMY_RTK_BIN_DIR}/rtk"
SPORTS_ACADEMY_RTK_ARTIFACT_URL="https://github.com/rtk-ai/rtk/releases/download/${SPORTS_ACADEMY_RTK_RELEASE}/${SPORTS_ACADEMY_RTK_ARTIFACT_NAME}"
SPORTS_ACADEMY_RTK_NODE_PIN="$(tr -d '[:space:]' < "${SPORTS_ACADEMY_RTK_REPO_ROOT}/.node-version")"
SPORTS_ACADEMY_RTK_PNPM_PIN="$(sed -n 's/.*"packageManager": "pnpm@\([^"]*\)".*/\1/p' "${SPORTS_ACADEMY_RTK_REPO_ROOT}/package.json")"
SPORTS_ACADEMY_RTK_REQUIRED_COMMANDS=(
  git curl awk sed grep find sort tar stat chmod mkdir cp mv wc tr cut uname date
  mktemp dirname rm cat
)
SPORTS_ACADEMY_RTK_MUTABLE_ROOTS=(
  "$SPORTS_ACADEMY_RTK_PROJECT_DIR" "$SPORTS_ACADEMY_RTK_HOME"
  "$SPORTS_ACADEMY_RTK_XDG_CONFIG" "$SPORTS_ACADEMY_RTK_XDG_DATA"
  "$SPORTS_ACADEMY_RTK_XDG_CACHE" "$SPORTS_ACADEMY_RTK_CODEX_HOME"
  "$SPORTS_ACADEMY_RTK_BIN_DIR" "$SPORTS_ACADEMY_RTK_EVIDENCE_DIR"
  "$SPORTS_ACADEMY_RTK_TMPDIR" "$SPORTS_ACADEMY_RTK_TEE_DIR"
  "$SPORTS_ACADEMY_RTK_AUDIT_DIR" "$SPORTS_ACADEMY_RTK_DB_DIR"
)
for mutable_path in "${SPORTS_ACADEMY_RTK_MUTABLE_ROOTS[@]}" "$SPORTS_ACADEMY_RTK_DB_PATH" "$SPORTS_ACADEMY_RTK_CONFIG_FILE" "$SPORTS_ACADEMY_RTK_BINARY" "$SPORTS_ACADEMY_RTK_INTEGRITY_MANIFEST"; do
  sports_academy_rtk_assert_under_sandbox "$mutable_path"
done

export HOME="$SPORTS_ACADEMY_RTK_HOME"
export XDG_CONFIG_HOME="$SPORTS_ACADEMY_RTK_XDG_CONFIG"
export XDG_DATA_HOME="$SPORTS_ACADEMY_RTK_XDG_DATA"
export XDG_CACHE_HOME="$SPORTS_ACADEMY_RTK_XDG_CACHE"
export CODEX_HOME="$SPORTS_ACADEMY_RTK_CODEX_HOME"
export TMPDIR="$SPORTS_ACADEMY_RTK_TMPDIR"
export RTK_DB_PATH="$SPORTS_ACADEMY_RTK_DB_PATH"
export RTK_TEE_DIR="$SPORTS_ACADEMY_RTK_TEE_DIR"
export RTK_AUDIT_DIR="$SPORTS_ACADEMY_RTK_AUDIT_DIR"
export RTK_TELEMETRY_DISABLED=1
export RTK_TEE=0
export RTK_HOOK_AUDIT=0
SPORTS_ACADEMY_RTK_INIT_COMMAND=("$SPORTS_ACADEMY_RTK_BINARY" init --codex)

sports_academy_rtk_snapshot() {
  local destination="$1" root path relative type digest mode size
  sports_academy_rtk_assert_under_sandbox "$destination"
  [[ ! -e "$destination" ]] || sports_academy_rtk_fail "snapshot destination exists: $destination"
  mkdir -p -- "$destination"
  : > "${destination}/manifest.tsv"
  for root in "${SPORTS_ACADEMY_RTK_MUTABLE_ROOTS[@]}"; do
    sports_academy_rtk_assert_under_sandbox "$root"
    [[ -e "$root" ]] || continue
    while IFS= read -r -d '' path; do
      case "$path" in "$SPORTS_ACADEMY_RTK_EVIDENCE_DIR"|"$SPORTS_ACADEMY_RTK_EVIDENCE_DIR"/*) continue ;; esac
      sports_academy_rtk_assert_no_symlink_ancestors "$path"
      relative="${path#${SPORTS_ACADEMY_RTK_SANDBOX_ROOT}/}"
      [[ "$relative" != *$'\n'* && "$relative" != *$'\t'* && "$relative" != *$'\r'* ]] || sports_academy_rtk_fail "snapshot path contains unsupported control characters"
      if [[ -f "$path" && ! -L "$path" ]]; then
        type="file"; digest="$(sports_academy_rtk_sha256 "$path")"; size="$(wc -c < "$path" | tr -d ' ')"
      elif [[ -d "$path" && ! -L "$path" ]]; then
        type="directory"; digest="-"; size="-"
      else
        type="other"; digest="-"; size="-"
      fi
      mode="$(sports_academy_rtk_file_mode "$path")"
      printf '%s\t%s\t%s\t%s\t%s\n' "$type" "$mode" "$size" "$digest" "$relative" >> "${destination}/manifest.tsv"
    done < <(find "$root" -xdev -print0)
  done
  LC_ALL=C sort -o "${destination}/manifest.tsv" "${destination}/manifest.tsv"
}
