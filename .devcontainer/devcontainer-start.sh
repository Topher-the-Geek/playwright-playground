#!/usr/bin/bash

set -xeo pipefail

pnpm install
DEBIAN_FRONTEND=noninteractive pnpm exec playwright install-deps chromium firefox webkit
