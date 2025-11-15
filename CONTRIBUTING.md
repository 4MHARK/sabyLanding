# Contributing to Saby Landing

Thanks for helping improve the Saby marketing experience! This doc captures the
ground rules so collaborators can ship confidently.

## Prerequisites

- Node.js ≥ 18 and npm ≥ 9
- Fork/clone of this repo
- Familiarity with React, Next.js, and Tailwind CSS

## Branching & Commits

- Branch from `main` (protected) using `feature/<topic>` or `fix/<topic>`.
- Keep commits scoped. Squash or rebase before opening a PR so history stays
  clean.
- Reference issues in commit messages and PR descriptions (`Fixes #123`).

## Pull Request Checklist

- [ ] `npm run lint`
- [ ] `npm run build`
- [ ] Screenshots or short clips for UI changes (light & dark themes)
- [ ] Notes on responsive checks (mobile, tablet, desktop)
- [ ] Mention any new dependencies or env vars

## CSS / Design Expectations

- Tokens first: extend `tailwind.config.js` with brand colors, spacing, or
  typography instead of sprinkling inline hex values.
- Avoid duplicate background animations; coordinate with design before adding
  new motion layers.
- Prefer accessible semantic elements (`<header>`, `<section>`, `<dl>`) and aim
  for WCAG AA contrast.

## Assets & Media

- Store images/illustrations under `public/` and import via `next/image`.
- Provide 1x/2x versions or leverage `next/image` responsive props; no hotlinks
  to third-party CDNs unless temporary.
- Compress large SVGs (SVGO) and document any licensing requirements.

## Issue Labels

- `design` – layout/visual polish issues
- `good-first-issue` – scoped tasks appropriate for newcomers
- `needs-mock` – blocked until design assets are provided
- `needs-copy` – pending marketing/legal text

## Code of Conduct

Be considerate and respectful. Follow the spirit of the
[Contributor Covenant](https://www.contributor-covenant.org/) in all project
channels.

## Getting Help

Open a GitHub discussion or drop into the Saby Discord (`https://discord.gg/saby`)
for help. For urgent production issues, tag `@designops` in the relevant thread.
