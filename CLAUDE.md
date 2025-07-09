# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## PM7-UI Project Overview

PM7-UI is a framework-agnostic UI component library built with pure CSS and vanilla JavaScript. It provides a complete set of UI components that work with any JavaScript framework without requiring framework-specific wrappers.

## Core Development Commands

### Primary Development
```bash
npm run dev          # Start documentation dev server (http://localhost:5173)
npm run dev:core     # Watch mode for core package development
npm run dev:all      # Run both dev servers simultaneously
npm run build        # Build all packages and documentation
npm run lint         # Run ESLint on all files
npm run format       # Format code with Prettier
```

### Building the Core Library
```bash
cd packages/core
npm run build        # Build CSS, JS, and TypeScript types
npm run build:css    # Build CSS with PostCSS
npm run build:js     # Build JavaScript with Rollup (ESM + UMD)
npm run build:types  # Copy TypeScript definitions
```

## Architecture Overview

### Package Structure
- **@pm7/core** - The main library package containing all components
- **docs-src/** - Documentation website showcasing all components
- Single package design - everything is in @pm7/core, no separate packages per component

### Build System
- **Vite** - Powers the documentation site with hot reload
- **Rollup** - Builds the core library in ESM and UMD formats
- **PostCSS** - Processes CSS with imports, autoprefixer, and minification
- **TypeScript** - Full type definitions without compilation (pure .d.ts files)

### Component Architecture
1. **CSS Components** (`src/styles/components/`) - Pure CSS styling
2. **JavaScript Components** (`src/scripts/`) - Vanilla JS for interactivity
3. **TypeScript Definitions** (`src/types/`) - Type definitions for each component
4. **Documentation** (`src/components/*/README.md`) - Component-specific docs

### Key Design Principles
- **Framework Agnostic** - Works with React, Vue, Angular, or vanilla JS
- **Auto-initialization** - Components with `data-pm7-*` attributes initialize automatically
- **No Build Required** - Can be used directly via CDN
- **Progressive Enhancement** - CSS works without JavaScript

## CSS Naming Convention
```css
.pm7-[component]              /* Base component class */
.pm7-[component]-[element]    /* Sub-elements (single dash) */
.pm7-[component]--[modifier]  /* Modifiers (double dash) */
```

## Component Development Workflow

### Adding a New Component
1. Create CSS in `packages/core/src/styles/components/[name].css`
2. Add JavaScript in `packages/core/src/scripts/[name].js` (if interactive)
3. Create TypeScript types in `packages/core/src/types/[name].d.ts`
4. Import CSS in `packages/core/src/styles/pm7.css`
5. Export JS from `packages/core/src/scripts/index.js`
6. Document in `packages/core/src/components/[name]/README.md`
7. Add demo page in `docs-src/components/[name].html`

### Component Initialization Pattern
```javascript
// Auto-init on DOMContentLoaded
export function initAccordions() {
  const accordions = document.querySelectorAll('[data-pm7-accordion]');
  accordions.forEach(accordion => {
    if (!accordion.dataset.pm7Initialized) {
      // Initialize component
      accordion.dataset.pm7Initialized = 'true';
    }
  });
}
```

## Testing Approach
- No automated test suite currently
- Manual testing through documentation site
- Each component has a dedicated demo page
- Focus on real-world usage examples

## Important Files
- `vite.config.js` - Documentation site configuration
- `packages/core/rollup.config.js` - Library build configuration
- `packages/core/postcss.config.js` - CSS processing configuration
- `AI-README.md` - Technical documentation for AI assistance
- `AI-AGENT.md` - Complete HTML attribute reference

## Development Tips
- Always test components in both light and dark modes
- Verify components work without JavaScript enabled
- Test with multiple frameworks (React, Vue, etc.)
- Check browser compatibility (supports modern browsers)
- Use the documentation site for rapid iteration

## Common Patterns

### CSS Custom Properties
All components use CSS custom properties for theming:
```css
var(--pm7-background)    /* Background colors */
var(--pm7-foreground)    /* Text colors */
var(--pm7-primary)       /* Primary brand color */
var(--pm7-border)        /* Border colors */
```

### Event Handling
Components dispatch custom events for framework integration:
```javascript
element.dispatchEvent(new CustomEvent('pm7:accordion:toggle', {
  detail: { expanded: true },
  bubbles: true
}));
```

### TypeScript Augmentation
All components augment HTMLElement interfaces:
```typescript
interface HTMLElement {
  PM7Accordion?: PM7AccordionInstance;
}
```

## Deployment
- Documentation auto-deploys to Vercel on push to main
- NPM package published as @pm7/core
- CDN available via unpkg and jsdelivr