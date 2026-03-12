# Vike Boilerplate (React + Tailwind + Biome + pnpm)

Generated with vike.dev/new. This repository is a minimal Vike starter using React, Tailwind CSS, Biome for linting/formatting, and pnpm as the package manager.

Important: this boilerplate is configured as a static client-side application — prerender: true and ssr: false. Pages are prerendered at build time and the app runs on the client (no server-side rendering).

## Prerequisites
- Node >= 22
- pnpm (project declares pnpm as packageManager; install via npm i -g pnpm if needed)

## Quick start

1. Install dependencies

```sh
pnpm install
```

2. Start dev server

```sh
pnpm dev
```

3. Build for production

```sh
pnpm build
```

4. Preview production build (prerendered static preview)

```sh
pnpm preview
```

## Available scripts (from package.json)

- pnpm dev — start development server (vike dev)
- pnpm build — build production output (vike build)
- pnpm preview — build + preview
- pnpm run check — run Biome checks
- pnpm run check:write — run Biome and auto-fix
- pnpm run check:unsafe — run Biome with --unsafe fixes

## Core technologies and files

- Vike: routing and app framework (see src/pages for + files)
- React: UI library (react, react-dom)
- Tailwind CSS: utility-first styling (tailwindcss is installed and used via global CSS)
- Biome: linter/formatter (biome.json present and package.json scripts included)
- pnpm: package manager (package.json declares pnpm@10.27.0)
- Vite: dev server & bundler (vite.config.ts present and configured with the Vike and Tailwind plugins)

## Project structure

- package.json — scripts, dependencies, packageManager (pnpm)
- vite.config.ts — Vite configuration (plugins: vike(), react(), @tailwindcss/vite)
- biome.json — Biome configuration (extends ultracite presets; enables Tailwind directive parsing)
- src/pages/+config.ts — Vike config (title/meta). Contains prerender: true and ssr: false for this starter.
- src/pages/+Page.tsx — Root page component (home)
- src/pages/+Layout.tsx — Layout wrapper; imports local/global CSS
- src/pages/globals.css — Global CSS; includes Tailwind directives
- src/pages/local.css — Local styles imported by the layout

### Where prerender / ssr are set

The repository enables prerendering and disables SSR in the Vike config file:

src/pages/+config.ts

```ts
// https://vike.dev/prerendering
prerender: true,
ssr: false,
```

### Routing and + files

- This starter uses Vike's filesystem routing. Add pages by creating folders in src/pages with a +Page.tsx file.
- Common + files you can add or customize per-route:
  - +config.ts — per-route Vike settings (prerender, ssr, head, etc.)
  - +Page.tsx — the page React component
  - +Layout.tsx — layout that wraps pages
  - +data.ts — server/data loader for pages
  - +Head.tsx — set head metadata
  - +onPageTransitionStart.ts / +onPageTransitionEnd.ts — page transition hooks

Note: this starter includes +config.ts, +Page.tsx, and +Layout.tsx in src/pages. Several optional + files are not included by default (e.g. +data.ts, +Head.tsx, +onPageTransitionStart/End, and an /pages/_error page). Add them as needed.

### Tailwind CSS

- Tailwind is installed as a devDependency and imported from src/pages/globals.css (so you can use the @tailwind directives there).
- There is no tailwind.config.* file in the starter — you can add one at the project root to customize your theme, plugins, or content paths.

### Biome (linting / formatting)

- Biome is configured via biome.json at the repo root and integrated through npm scripts (pnpm run check, check:write).
- Biome is set up to understand Tailwind directives in CSS.

### Deployment notes

- Because prerender: true and ssr: false this project builds into a static site. Use pnpm build to produce the production output and serve the generated files with any static host.
- pnpm preview runs a preview server that serves the built output.

### Developer notes

- Node engine requirement is declared in package.json (>=22).
- Vite is configured (vite.config.ts) and uses the @tailwindcss/vite plugin for better Tailwind integration — you may still create a tailwind.config.js/cjs to customize Tailwind.
- If you want server-side rendering instead of a static prerendered site, edit src/pages/+config.ts and toggle ssr/prerender settings per the Vike docs: https://vike.dev/ssr
