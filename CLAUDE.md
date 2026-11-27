# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static website (SSG) for Proingenio, an engineering office in Santa Eulalia del Río (Ibiza). Built with Astro and Tailwind CSS v4, deployed to Netlify. Site language: Spanish.

Art direction: "Architectural Editorial / Engineering Corporate" (references: Arup, IDOM, BuroHappold, Ramboll). Precise, sober, generous white space; local Ibiza personality without touristy imagery.

## Development Commands

```bash
npm install        # install dependencies
npm run dev        # dev server at localhost:4321
npm run build      # production build to ./dist/
npm run preview    # preview the production build
```

## Tech Stack

- **Astro 5**, fully static output. No UI framework (no React): pages and components are `.astro` only.
- **Tailwind CSS v4** via the Vite plugin; design tokens in `src/styles/global.css`.
- **No icon library.** Avoid decorative icons; use numbering, thin rules and text links with arrows instead.
- **Images**: use `<Image>` from `astro:assets` with images in `src/assets/`. All photos get the `photo` class for a consistent treatment.
- **Light mode only.** There is no dark mode; do not add `dark:` classes.
- Interactivity is plain `<script>` inside `.astro` components (e.g. the mobile menu in `Navbar.astro`).

## Design System

Tokens and utilities live in `src/styles/global.css`:

- **Colors**: `ink`, `ink-soft`, `ink-mute`, `paper` (white), `lime` (warm whitewash, tiles and alternate sections), `stone`, `line`, `line-dark`. Brand: `accent` = corporate navy `#0a2c6b` (INGENIO in the logo), `accent-deep` (footer), `accent-bright` `#0646a5` (blue end of the logo gradient), `accent-soft` (accent text on navy), `brand-dark`. No gradients in the UI (the only gradient is the one inside the logo).
- **Type**: Inter Tight (`font-display`, headings), Inter (body), IBM Plex Mono (`font-mono`, labels and numbering). Self-hosted via Fontsource; never load Google Fonts.
- **Utilities**: `wrap` (max 1440px container), `grid-12` (4 cols mobile / 12 cols md+), `label` (mono uppercase), `display-xl/lg/md`, `lead`, `photo` (common desaturated photo treatment), `crop-marks` (plan-style corner ticks). No background grids (the client rejected them).
- **Components (CSS)**: `.btn` + `.btn-primary/.btn-ghost/.btn-light` (square corners), `.arrow-link` (text link with growing arrow), `.field` (underline-only form inputs).
- **Animation**: add `data-reveal` (fade up), `data-reveal="line"` (rule draws in) or `data-reveal="image"` (curtain); optional `style="--reveal-delay: 80ms"`. Driven by the observer in `Layout.astro`; content is visible without JS and with reduced motion.
- **Logo**: `Logo.astro` is an exact SVG generated from the vector original `src/assets/PROINGENIO.pdf` (do not use `PROINGENIO.png`, it is kept only as a raster backup). Props: `variante` (`marca` = PRO block + INGENIO, for the header; `completo` = with "OFICINA TÉCNICA DE INGENIERÍA", only at sizes where the tagline is legible) and `tono` (`color` on light backgrounds; `negativo` on navy: white PRO block with cut-out letters).
- **Client reference** (owner's PDF of another firm): navy blocks, logo in a navy square with an offset frame (hero seal), navy services list (home section 02), figure tiles. Its gold accent and serif headings were deliberately not adopted (not Proingenio's identity).
- **Astro components**: `SectionHeader` (numbered section header: numero, etiqueta, titulo, intro, enlace), `PageHeader` (interior page header with breadcrumb + slot).
- **Content data**: `src/data/site.ts` holds company info, navigation, departments, projects and figures; Navbar, Footer and pages read from it.

## Project Structure

```
src/
├── components/
│   ├── Navbar.astro           # Header, departments dropdown, full-screen mobile menu
│   ├── Footer.astro           # Dark footer (prop `cta` toggles the closing call to action)
│   ├── Hero.astro, QuienesSomos.astro, Servicios.astro, ProyectosDestacados.astro, Contacto.astro  # home: hero + sections 01–03
│   ├── ProyectosDestacados.astro  # Unused for now: projects grid for the future /proyectos page
│   ├── SectionHeader.astro, PageHeader.astro
│   └── LegalPage.astro        # Wrapper for legal pages (prose styles, .pendiente highlight)
├── data/site.ts               # Shared content (company, departments, projects, figures)
├── layouts/Layout.astro       # Base layout; props: title, description, noindex, footerCta
├── pages/
│   ├── index.astro            # Home
│   ├── departamentos.astro
│   ├── proyectos.astro        # Under construction
│   ├── aviso-legal.astro, privacidad.astro   # No cookies page: the site sets no cookies (stated in privacidad)
│   ├── gracias.astro          # Contact form success page
│   └── 404.astro
├── styles/global.css          # Design tokens and utilities
└── assets/                    # Images (optimized at build time)
```

Path alias: `@/*` → `./src/*`.

## Navigation

Main menu (Navbar.astro):
- Quiénes somos → `/#estudio`
- Departamentos → `/departamentos` with anchors, in this order: `#instalaciones-interiores` (01), `#infraestructuras` (02), `#proyectos-actividades` (03), `#asesoramiento` (04)
- Proyectos → `/proyectos` (under construction for now; `ProyectosDestacados.astro` + `proyectos` in `site.ts` are ready to reuse there once there are real projects)
- Contacto → `/#contacto`

Keep anchors in Navbar, Footer and page section ids in sync.

## Contact Form

Handled by **Netlify Forms** (`data-netlify="true"`, form name `contacto`, honeypot `bot-field`). It redirects to `/gracias`. Submissions appear in the Netlify dashboard under Forms; email notifications are configured there. It does not work in `npm run dev`, only when deployed.

## Content Status

- Legal pages are filled in with the company data (PROINGENIO INGENIERÍA TÉCNICA S.L., CIF B19479419, Local 6). The `.pendiente` class in `LegalPage.astro` remains available to highlight any future missing data.
- Projects (unused) and figures in `src/data/site.ts` are placeholder content and must be replaced with real data.
- All current photos are stock placeholders (several carry 123RF watermarks). `equipo-fran-luis.jpg` (stock, not the real team) is kept in assets but not used for now.

## Deployment

Netlify, configured in `netlify.toml` (build `npm run build`, publish `dist`). No SPA redirect: Astro emits one HTML file per page plus `404.html`. Pushing to `main` triggers a deploy.
