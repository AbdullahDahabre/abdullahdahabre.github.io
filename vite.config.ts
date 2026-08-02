import fs from 'fs';
import path from 'path';
import { defineConfig, Plugin } from 'vite';
import react from '@vitejs/plugin-react';

/** Client-side routes that need a real document on disk. Keep in sync with App.tsx. */
const STATIC_ROUTES = ['projects'];

/**
 * GitHub Pages has no server-side rewrite, so a direct visit to /projects would
 * otherwise fall through to the 404 handler.
 *
 * Two things ship for that:
 *  - `<route>/index.html`: a real 200 document per known route, so direct hits
 *    and crawlers get a success status rather than a soft 404.
 *  - `404.html`: the catch-all Pages serves for genuinely unknown paths; it
 *    still boots the SPA, which renders the in-app NotFound page.
 */
const spaHtmlFallbacks = (): Plugin => ({
  name: 'spa-html-fallbacks',
  apply: 'build',
  closeBundle() {
    const outDir = path.resolve(__dirname, 'dist');
    const indexHtml = path.join(outDir, 'index.html');
    if (!fs.existsSync(indexHtml)) return;

    fs.copyFileSync(indexHtml, path.join(outDir, '404.html'));

    for (const route of STATIC_ROUTES) {
      const routeDir = path.join(outDir, route);
      fs.mkdirSync(routeDir, { recursive: true });
      fs.copyFileSync(indexHtml, path.join(routeDir, 'index.html'));
    }
  },
});

export default defineConfig(() => {
    return {
      base: '/',
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [react(), spaHtmlFallbacks()],
      define: {},
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});
