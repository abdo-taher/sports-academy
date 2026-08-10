#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd -P)"
REPO_ROOT="$(git -C "$SCRIPT_DIR" rev-parse --show-toplevel)"
[[ "$(pwd -P)" == "$REPO_ROOT" ]] || { printf 'ERROR: run bootstrap from repository root: %s\n' "$REPO_ROOT" >&2; exit 1; }

"${SCRIPT_DIR}/sports-academy-rtk-preflight.sh"
"${SCRIPT_DIR}/sports-academy-rtk-wp02-create-sandbox.sh"
"${SCRIPT_DIR}/sports-academy-rtk-wp02-pre-snapshot.sh"
printf 'Bootstrap complete. RTK was downloaded and isolated but not executed.\n'
printf 'Review PRE evidence before separately authorizing sports-academy-rtk-wp02-run-init.sh.\n'
