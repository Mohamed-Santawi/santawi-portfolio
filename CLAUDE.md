# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
npm run dev      # Start dev server at localhost:3000
npm run build    # Production build
npm run lint     # Run ESLint
```

No test suite is configured.

## Stack

- **Next.js 16** (App Router) with **React 19** and **TypeScript**
- **Tailwind CSS v4** — configured via `@import "tailwindcss"` in `app/globals.css`, not a `tailwind.config` file. Theme tokens are declared inside `@theme inline {}` in that same CSS file.
- **Framer Motion** for scroll-triggered animations
- **react-icons** (Feather subset via `fi` prefix)

## Architecture

Single-page portfolio. `app/page.tsx` composes all sections in order; the layout (`app/layout.tsx`) adds the `<Navbar>` and wraps content in `<main>`.

**Component structure:**

- `components/` — one file per section (`Hero`, `About`, `Experience`, `Projects`, `Skills`, `Education`, `Contact`, `Navbar`)
- `components/ui/Section.tsx` — shared wrapper used by every section. Applies `py-20`, scroll-triggered fade-in via Framer Motion (`whileInView`), and accepts an optional `id` for anchor links. **Wrap every new section in this.**

**Styling conventions:**

- Dark theme: `bg-slate-900`, `text-slate-50`. Primary accent: `yellow-400/500/600`. Secondary accent: `sky-400/500`.
- `globals.css` defines two reusable utility classes: `.glass` (navbar blur) and `.glass-card` (project/content cards). Use these instead of duplicating backdrop-filter styles.
- `.text-gradient` applies a sky→yellow gradient via `background-clip: text`.

**Content is hardcoded** in each component as local arrays/objects — there is no CMS or data layer. To update content (projects, experience, skills), edit the relevant component file directly.

**Navigation** anchors (`#about`, `#experience`, etc.) must match the `id` prop passed to `<Section>` in each component.

**Assets:** Profile photo at `public/image.jpeg`; project screenshots at `public/projects/<name>.png`; CV PDF at `public/Mohamed_Santawi_CV.pdf`.
