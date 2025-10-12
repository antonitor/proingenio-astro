# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an Astro-based website for Proingenio, configured with React integration, Tailwind CSS v4, and shadcn/ui components. The site is deployed to GitHub Pages at `https://antonitor.github.io/proingenio-astro/`.

## Development Commands

```bash
# Install dependencies
npm install

# Start development server (runs on localhost:4321)
npm run dev

# Build for production (outputs to ./dist/)
npm run build

# Preview production build locally
npm run preview

# Run Astro CLI commands
npm run astro [command]
```

## Architecture

### Tech Stack
- **Framework**: Astro 5.x with React integration
- **Styling**: Tailwind CSS v4 (via Vite plugin)
- **UI Components**: shadcn/ui (New York style) + Radix UI primitives
- **Icons**: Lucide React
- **TypeScript**: Strict mode enabled

### Project Structure
```
src/
├── components/          # React and Astro components
│   ├── ui/             # shadcn/ui components (Button, NavigationMenu, etc.)
│   ├── MainMenu.tsx    # Main navigation with mobile menu
│   ├── ModeToggle.tsx  # Light/dark theme toggle
│   └── Welcome.astro   # Welcome component
├── layouts/
│   └── Layout.astro    # Base layout with navbar
├── pages/
│   └── index.astro     # Homepage with theme initialization
├── lib/
│   └── utils.ts        # Utility functions (cn for className merging)
├── styles/
│   └── global.css      # Global styles with Tailwind and CSS variables
└── assets/             # Static assets
```

### Key Patterns

**Path Aliases**: The project uses `@/*` alias for imports (maps to `./src/*`)
```typescript
import MainMenu from "@/components/MainMenu";
import { cn } from "@/lib/utils";
```

**Component Integration**:
- Astro pages use `.astro` extension and support frontmatter
- React components use `.tsx` and are integrated with `client:` directives
- The Navbar component uses `client:load` in Layout.astro:17

**Theme System**:
- Dark mode implemented via class-based approach on `<html>` element
- Theme preference stored in localStorage
- Theme initialization script runs inline in index.astro:10-32
- ModeToggle component provides UI controls
- CSS variables defined in global.css for theming

**Styling Approach**:
- Tailwind CSS v4 integrated via Vite plugin (not PostCSS)
- shadcn/ui components use CSS variables for theming
- `cn()` utility combines clsx and tailwind-merge for conditional classes

## Deployment

The site deploys automatically to GitHub Pages via `.github/workflows/astro.yml`:
- Triggers on push to `main` branch
- Builds with base path `/proingenio-astro/`
- Site URL configured in astro.config.mjs:13-14

**Important**: When adding new routes or assets, ensure they work with the base path `/proingenio-astro/`.

## Adding shadcn/ui Components

The project is configured for shadcn/ui with settings in `components.json`:
- Style: new-york
- Base color: slate
- Icons: lucide-react
- Components path: `@/components/ui`

When adding new shadcn components, they should be placed in `src/components/ui/` and use the configured aliases.

## React in Astro

When adding React components:
1. Use `.tsx` extension
2. Add `client:` directive in Astro files where used (e.g., `client:load`, `client:visible`)
3. React 19 is installed, ensure compatibility with component patterns
4. TypeScript is configured with `jsx: "react-jsx"` in tsconfig.json

## Navigation Structure

The main navigation (MainMenu.tsx) includes sections for:
- Quienes somos
- Departamentos (with dropdown submenu)
  - Proyectos de actividades
  - Proyectos de instalaciones interiores
  - Proyectos de Infraestructuras
  - Asesoramiento e instaladores
- Proyectos destacados
- Contacto

When creating new pages, ensure routes match these navigation paths.
