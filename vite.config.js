import { defineConfig } from 'vite';
import { resolve } from 'path';
import { readdirSync } from 'fs';
import { spaFallback } from './docs-src/scripts/vite-plugin-spa-fallback.js';

// Get all HTML files from docs-src/components
const componentFiles = readdirSync('./docs-src/components')
  .filter(file => file.endsWith('.html'))
  .reduce((acc, file) => {
    const name = file.replace('.html', '');
    acc[`components/${name}`] = resolve(__dirname, `docs-src/components/${file}`);
    return acc;
  }, {});

export default defineConfig({
  plugins: [spaFallback()],
  root: './docs-src',
  publicDir: './assets',
  build: {
    outDir: '../docs',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'docs-src/index.html'),
        components: resolve(__dirname, 'docs-src/components.html'),
        gettingStarted: resolve(__dirname, 'docs-src/getting-started.html'),
        faq: resolve(__dirname, 'docs-src/faq.html'),
        ...componentFiles,
      },
    },
  },
  server: {
    port: 5173,
    open: true,
    fs: {
      // Allow serving files from packages directory
      allow: ['..']
    }
  },
  resolve: {
    alias: {
      '/packages/core/src/styles': resolve(__dirname, './packages/core/src/styles'),
      '/packages/core/src/scripts': resolve(__dirname, './packages/core/src/scripts'),
      '/packages/core/src/components': resolve(__dirname, './packages/core/src/components'),
      '/packages/core/src/icons': resolve(__dirname, './packages/core/src/icons'),
    },
  },
});