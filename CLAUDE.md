# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev              # Start dev server at localhost:4321
npm run build            # Production build to ./dist/
npm run preview          # Preview built site locally
npm run astro check      # Type-check .astro files (main correctness gate — no test framework)
```

There is no test framework configured.

## Stack

- **Astro 5** — Static site generator, file-based routing under `src/pages/`
- **Tailwind CSS 3** — All styling via utility classes; no CSS modules or inline styles
- **TypeScript** — Astro strict config; `.astro` files use typed frontmatter
- No backend, no database, no environment variables — purely static

## Architecture

```
src/
  assets/         # Static images/icons (imported in components)
  components/
    ui/           # Design system base components (Button, Card, SectionTitle)
    common/       # Shared layout pieces (Header, Footer, MobileMenu, etc.)
    home/         # Feature components per page
    about-us/
    design/
    projects/
    contact/
  data/           # Static JS data files (projects.js, professionals.js, etc.)
  layouts/        # Main-layout.astro (only layout; loads Google Fonts: Oswald + Open Sans)
  pages/          # Routes: index, about-us, contact, design, 404, projects/*
  styles/         # globals.css (Tailwind directives + body defaults)
```

Pages import feature-specific components; feature components consume data files and use `ui/` primitives. No state management — all data is static JS exports.

**Dynamic routes** live under `src/pages/projects/`:
- `projects/index.astro` — first page of the paginated gallery (8 items per page)
- `projects/[page].astro` — paginated listing, `getStaticPaths` derived from `allProjects` in `data/projects.js`
- `projects/preview/[id].astro` — per-project detail page

When adding/removing entries in `data/projects.js`, both static paths regenerate at build time.

## Design System

Full reference: `DESIGN-SYSTEM.md` at repo root — complete token tables, component APIs, conventions, antipatterns. The summary below is the working subset.

All tokens are defined in `tailwind.config.mjs`. **Never use hardcoded hex values or arbitrary Tailwind values** (e.g., `text-[#333]`). Always use token names.

**Key tokens:**
- Colors: `primary-{50-900}` (teal), `accent-{50-900}` (orange), `neutral-{50-900}` (grays)
- Fonts: `font-oswald` (headings), `font-openSans` (body)
- Shadows: `shadow-card`, `shadow-elevated`
- Gradient: `bg-cta-gradient` (orange CTA gradient)

**UI components** (`src/components/ui/`):
- `Button.astro` — props: `variant` (primary | outline | floating | ghost), `size` (sm | md | lg), `href`
- `Card.astro` — props: `variant` (bordered | elevated | minimal); uses named slots (media, header, body)
- `SectionTitle.astro` — props: `variant` (default | inverse)

When adding new variants or tokens, add them to `tailwind.config.mjs` and the relevant `ui/` component — don't create one-off utility overrides in feature components.

## Astro Patterns

- Frontmatter (between `---`) handles imports, data, and logic; template below is HTML-like
- Static assets served from `public/` are referenced by path (e.g., `/balca-logo.svg`); assets in `src/assets/` are imported and optimized
- Client-side JS lives in `src/scripts/` and is loaded via `<script>` tags in components (e.g., mobile menu)
- Tailwind classes with dynamic values must be complete strings — no string concatenation for class names, as Tailwind purges at build time
- In `src/styles/globals.css`, prefer `theme("colors.primary.500")` over `@apply text-primary-500` — custom tokens with `@apply` can fail in dev because of Tailwind JIT generation order
