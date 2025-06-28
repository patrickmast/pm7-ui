import { defineConfig } from 'vite';
import { resolve } from 'path';
import { spaFallback } from './docs-src/scripts/vite-plugin-spa-fallback.js';

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
        componentsIndex: resolve(__dirname, 'docs-src/components/index.html'),
        componentsButton: resolve(__dirname, 'docs-src/components/button.html'),
        componentsCard: resolve(__dirname, 'docs-src/components/card.html'),
        componentsDialog: resolve(__dirname, 'docs-src/components/dialog.html'),
        componentsIcons: resolve(__dirname, 'docs-src/components/icons.html'),
        componentsInput: resolve(__dirname, 'docs-src/components/input.html'),
        componentsMenu: resolve(__dirname, 'docs-src/components/menu.html'),
        componentsTabSelector: resolve(__dirname, 'docs-src/components/tab-selector.html'),
        componentsToast: resolve(__dirname, 'docs-src/components/toast.html'),
        gettingStarted: resolve(__dirname, 'docs-src/getting-started.html'),
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
    },
  },
});