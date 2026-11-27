// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
// Sitio 100% estático (SSG): Astro genera HTML en build, sin JavaScript de framework en el cliente.
export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  }
});
