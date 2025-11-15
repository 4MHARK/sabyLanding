# Saby Landing

Marketing landing experience for the Saby platform, built with Next.js 14,
TypeScript, and Tailwind CSS. This package hosts the public marketing routes
(`index`, `product`, `pricing`, `resources`, etc.) plus the shared component
library that backs them.

## Getting Started

```bash
# install deps (Node 18+ recommended)
npm install

# run the dev server (defaults to http://localhost:3000)
npm run dev
```

> If port `3000` is taken, Next.js automatically increments (e.g. `3001`).

### Available Scripts

- `npm run dev` – local development with hot reload
- `npm run build` – production build
- `npm run start` – serve the production build
- `npm run lint` – run ESLint/Next checks

## Project Structure

- `pages/` – Next.js route files (marketing pages + auth flow)
- `src/components/` – shared UI blocks (hero, navigation, pricing cards, etc.)
- `src/contexts/ThemeContext.tsx` – light/dark theme state shared via context
- `public/` – (add) static assets such as logos, optimized imagery, favicons
- `pages/todo.tsx` – the living roadmap for upcoming landing improvements

## Design & CSS Guidance

We rely on Tailwind utilities plus a thin layer of custom components. Before
modifying colors, spacing, or gradients, prefer adding tokens to
`tailwind.config.js` so we maintain visual consistency across all routes.

Animated backgrounds live in `src/components/*Background.tsx`; try to keep one
ambient effect per page to reduce GPU load.

## Collaboration & Workflow

1. **Create a branch** from `main` using the pattern
   `feature/<short-description>` or `fix/<short-description>`.
2. **Keep commits focused.** Each commit should represent a logical change
   (feature slice, bug fix, doc update).
3. **Lint & test** via `npm run lint` and `npm run build` (when relevant)
   before pushing.
4. **Open a pull request** that links to an issue (or clearly states the scope)
   and includes screenshots/GIFs for visual changes.
5. **Reviews** – at least one reviewer should verify layout/theme behavior in
   both light and dark modes.
6. **Deploy previews** – configure Vercel or your CI to comment preview URLs so
   designers can QA without pulling the branch locally.

See `CONTRIBUTING.md` for deeper guidelines, issue labels, and definition of
done for CSS/imagery work.
