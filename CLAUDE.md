# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static website (SSG) for Proingenio, an engineering office in Santa Eulalia del Río (Ibiza). Built with Astro and Tailwind CSS v4, deployed to Netlify. Site language: Spanish.

The visual design is intentionally plain default Tailwind for now; a dedicated design phase will come later.

## Development Commands

```bash
npm install        # install dependencies
npm run dev        # dev server at localhost:4321
npm run build      # production build to ./dist/
npm run preview    # preview the production build
```

## Tech Stack

- **Astro 5**, fully static output. No UI framework (no React): pages and components are `.astro` only.
- **Tailwind CSS v4** via the Vite plugin (`src/styles/global.css` just imports Tailwind).
- **Icons**: `@lucide/astro` (`import { Mail } from "@lucide/astro"`, use `class`, not `className`).
- **Images**: use `<Image>` from `astro:assets` with images in `src/assets/`. Exception: `departamentos-infraestructuras.jpg` is served as the original JPG because re-encoding made it larger.
- **Light mode only.** There is no dark mode; do not add `dark:` classes.
- Interactivity is plain `<script>` inside `.astro` components (e.g. the mobile menu in `Navbar.astro`).

## Project Structure

```
src/
├── components/
│   ├── Navbar.astro           # Header + dropdown + mobile menu
│   ├── Footer.astro
│   ├── Hero.astro, QuienesSomos.astro, ProyectosDestacados.astro, Contacto.astro  # home sections
│   └── LegalPage.astro        # Wrapper for legal pages (prose styles, .pendiente highlight)
├── layouts/Layout.astro       # Base layout; props: title, description, noindex
├── pages/
│   ├── index.astro            # Home
│   ├── departamentos.astro
│   ├── aviso-legal.astro, privacidad.astro, cookies.astro
│   ├── gracias.astro          # Contact form success page
│   └── 404.astro
├── styles/global.css
└── assets/                    # Images (optimized at build time)
```

Path alias: `@/*` → `./src/*`.

## Navigation

Main menu (Navbar.astro):
- Quienes somos → `/#quienes-somos`
- Departamentos → `/departamentos` with anchors `#proyectos-actividades`, `#instalaciones-interiores`, `#infraestructuras`, `#asesoramiento`
- Proyectos destacados → `/#proyectos`
- Contacto → `/#contacto`

Keep anchors in Navbar, Footer and page section ids in sync.

## Contact Form

Handled by **Netlify Forms** (`data-netlify="true"`, form name `contacto`, honeypot `bot-field`). It redirects to `/gracias`. Submissions appear in the Netlify dashboard under Forms; email notifications are configured there. It does not work in `npm run dev`, only when deployed.

## Content Status

- Legal pages contain placeholders highlighted with `<span class="pendiente">` (company name, NIF/CIF, registry data). They must be filled in by the company before launch.
- Projects in `ProyectosDestacados.astro` are placeholder examples and must be replaced with real projects.
- Figures in `Stats.astro` (projects, clients, success rate) are unconfirmed examples.
- Fonts (Inter for body, Outfit for headings) are self-hosted via Fontsource; do not load Google Fonts (GDPR, and the cookies page states there are no third-party requests).

## Deployment

Netlify, configured in `netlify.toml` (build `npm run build`, publish `dist`). No SPA redirect: Astro emits one HTML file per page plus `404.html`. Pushing to `main` triggers a deploy.
