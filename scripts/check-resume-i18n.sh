#!/usr/bin/env bash
set -euo pipefail

BASE_URL="${BASE_URL:-http://localhost:3000}"

check_locale() {
  local locale="$1"
  local expected_suffix="$2"
  local html

  html="$(curl -sS --fail -H "Cookie: NEXT_LOCALE=${locale}" "${BASE_URL}")"

  if echo "${html}" | grep -q "ResumeHassineHelmi${expected_suffix}.pdf"; then
    echo "✓ ${locale}: ResumeHassineHelmi${expected_suffix}.pdf detected"
  else
    echo "✗ ${locale}: expected ResumeHassineHelmi${expected_suffix}.pdf not found" >&2
    exit 1
  fi
}

echo "Checking resume locale switching against ${BASE_URL}"
check_locale "en" "EN"
check_locale "fr" "FR"
echo "All resume i18n checks passed"
