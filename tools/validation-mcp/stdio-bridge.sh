#!/usr/bin/env bash
set -euo pipefail

# Inspector 2.1.0 can close a directly spawned Node child's pipe before the
# initialization exchange in managed terminals. Native relays keep both STDIO
# legs attached while leaving the protocol bytes unchanged.
cat | node --import tsx src/server.ts | cat
