---
on:
  push:
    branches: [main]
    paths:
      - "src/**"
      - "index.html"

permissions:
  contents: read
  pull-requests: read

engine: copilot

network: defaults

safe-outputs:
  create-pull-request:
    max: 1

---

# Update README on Product Changes

When a push to main modifies the shopping cart app (files in `src/` or `index.html`), review the diff and update the README.md with a changelog entry.

## Instructions

1. Read the latest commit diff on main to understand what changed in `src/cart.js` or `index.html`
2. Identify what product catalog changes were made (e.g., new item added, items reordered, item removed, price changed)
3. Read the current `README.md`
4. Add a "## Changelog" section at the bottom of `README.md` if it does not already exist
5. Append a new entry to the Changelog section in this format:
   ```
   - **YYYY-MM-DD** — <short description of change> (by @<commit author>)
   ```
6. Open a pull request with the updated README titled "docs: update changelog for latest product change"
