import { defineConfig } from 'vite';
import { resolve } from 'path';
import { readdirSync, statSync } from 'fs';
import { spaFallback } from './docs-src/scripts/vite-plugin-spa-fallback.js';

// Get all HTML files from docs-src/components
const componentFiles = readdirSync('./docs-src/components')
  .filter(file => file.endsWith('.html'))
  .reduce((acc, file) => {
    const name = file.replace('.html', '');
    acc[`components/${name}`] = resolve(__dirname, `docs-src/components/${file}`);
    return acc;
  }, {});

// Get all HTML files from docs-src/demos
const demoFiles = readdirSync('./docs-src/demos')
  .filter(file => file.endsWith('.html'))
  .reduce((acc, file) => {
    const name = file.replace('.html', '');
    acc[`demos/${name}`] = resolve(__dirname, `docs-src/demos/${file}`);
    return acc;
  }, {});

// Recursively get all HTML files from docs-src/components/demos
function getComponentDemoFiles(dir, basePath = '') {
  const files = {};
  const items = readdirSync(dir);
  
  items.forEach(item => {
    const fullPath = `${dir}/${item}`;
    const stat = statSync(fullPath);
    
    if (stat.isDirectory()) {
      // Recursively process subdirectories
      const subFiles = getComponentDemoFiles(fullPath, basePath ? `${basePath}/${item}` : item);
      Object.assign(files, subFiles);
    } else if (item.endsWith('.html')) {
      // Add HTML files with their relative path
      const name = item.replace('.html', '');
      const key = basePath ? `components/demos/${basePath}/${name}` : `components/demos/${name}`;
      files[key] = resolve(__dirname, fullPath);
    }
  });
  
  return files;
}

const componentDemoFiles = getComponentDemoFiles('./docs-src/components/demos');

export default defineConfig({
  plugins: [spaFallback()],
  root: './docs-src',
  publicDir: './assets',
  assetsInclude: ['**/*.md'],
  css: {
    postcss: {
      plugins: [
        require('postcss-import')()
      ]
    }
  },
  build: {
    outDir: '../docs',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'docs-src/index.html'),
        components: resolve(__dirname, 'docs-src/components.html'),
        gettingStarted: resolve(__dirname, 'docs-src/getting-started.html'),
        faq: resolve(__dirname, 'docs-src/faq.html'),
        aiGuide: resolve(__dirname, 'docs-src/ai-guide.html'),
        upgrade: resolve(__dirname, 'docs-src/upgrade.html'),
        readmeLinks: resolve(__dirname, 'docs-src/readme-links.html'),
        testAllComponents: resolve(__dirname, 'docs-src/test-all-components.html'),
        ...componentFiles,
        ...demoFiles,
        ...componentDemoFiles,
      },
    },
  },
  server: {
    port: 5173,
    open: false,
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