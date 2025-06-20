import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
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
        gettingStarted: resolve(__dirname, 'docs-src/getting-started.html'),
      },
    },
  },
  server: {
    port: 5173,
    open: true,
  },
  resolve: {
    alias: {
      '/packages/core/src/styles': resolve(__dirname, './packages/core/src/styles'),
    },
  },
});