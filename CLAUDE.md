# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

PM7 UI is a framework-agnostic UI component library that provides consistent styling and behavior for PM7 applications. It's built as a monorepo using npm workspaces with three main packages:

- **@pm7/core** - Pure CSS and vanilla JavaScript components
- **@pm7/react** - React component wrappers  
- **@pm7/vue** - Vue component wrappers (in development)

## Architecture

The project follows a three-layer architecture:

1. **Base Layer**: Design tokens and CSS custom properties define colors, spacing, typography
2. **Component Layer**: Styled UI components using CSS classes and vanilla JavaScript
3. **Framework Layer**: Framework-specific wrappers (React, Vue) that use the core components

### Key Design Decisions

- **CSS-first approach**: All styling is done in CSS, making components framework-agnostic
- **Progressive enhancement**: JavaScript adds interactivity but components work without it
- **Design tokens**: All design decisions (colors, spacing, etc.) are defined as CSS custom properties
- **BEM methodology**: CSS classes follow BEM naming convention (e.g., `pm7-button`, `pm7-button--primary`)

## Development Commands

```bash
# Install all dependencies
npm install

# Development
npm run dev              # Start documentation site (port 5173)
npm run dev:core        # Development mode for core package
npm run dev:all         # Run both dev servers simultaneously

# Building
npm run build           # Build all packages and documentation
npm run build:packages  # Build only the packages
npm run build:docs      # Build only the documentation site

# Code Quality
npm run lint            # Run ESLint on all files
npm run format          # Format code with Prettier
npm run test            # Run tests in all workspaces
```

## Package Structure

```
packages/
├── core/           # CSS + vanilla JS implementation
│   ├── src/
│   │   ├── styles/     # All CSS files
│   │   │   ├── base/       # Reset and root styles
│   │   │   ├── components/ # Component-specific styles
│   │   │   ├── tokens/     # Design tokens
│   │   │   └── utilities/ # Helper classes
│   │   └── scripts/    # Vanilla JS for interactive components
│   └── dist/       # Built files (@pm7/core npm package)
│
├── react/          # React wrappers
│   ├── src/
│   │   └── components/  # React component implementations
│   └── dist/           # Built files (@pm7/react npm package)
│
└── vue/            # Vue wrappers (in development)
```

## Component Development

### Adding a New Component

1. **Core Package** - Create the base implementation:
   ```
   packages/core/src/
   ├── styles/components/[component].css  # Component styles
   └── scripts/[component].js            # Interactive behavior (if needed)
   ```

2. **React Package** - Create the React wrapper:
   ```
   packages/react/src/components/
   └── [Component]/
       ├── [Component].tsx
       └── index.ts
   ```

3. **Documentation** - Add to docs-src:
   ```
   docs-src/components/[component].html
   ```

### CSS Architecture

Components use CSS custom properties for theming:

```css
/* Define in tokens */
--pm7-color-primary: #1C86EF;
--pm7-border-radius: 0.375rem;

/* Use in components */
.pm7-button {
  background-color: var(--pm7-color-primary);
  border-radius: var(--pm7-border-radius);
}
```

### JavaScript Components

Interactive components (Menu, Dialog, Toast) follow this pattern:

```javascript
// packages/core/src/scripts/menu.js
export class PM7Menu {
  constructor(element) {
    this.element = element;
    this.init();
  }
  
  init() {
    // Setup event listeners and initial state
  }
}
```

## Documentation Site

The documentation site (docs-src/) serves as both documentation and a development environment:

- **Live Examples**: Each component page includes live, interactive examples
- **Component Gallery**: `/components/` shows all available components
- **Getting Started**: Installation and usage instructions
- **Responsive Preview**: Test components at different screen sizes

### Documentation Development

```bash
# Start the documentation dev server
npm run dev

# The site will open at http://localhost:5173
# Changes to packages/core/src/styles/ are hot-reloaded
```

## Build Process

### Core Package Build
1. PostCSS processes all CSS files with:
   - `postcss-import`: Combines @import statements
   - `autoprefixer`: Adds vendor prefixes
   - `cssnano`: Minifies production CSS
2. Rollup bundles JavaScript modules into UMD and ESM formats

### React Package Build  
Uses tsup to build TypeScript components with:
- Tree-shaking support
- TypeScript declarations
- Both CJS and ESM outputs

## Testing Approach

Currently, testing is done through:
1. Visual testing in the documentation site
2. Manual testing of interactive components
3. Framework-specific testing in consumer applications

## Important Notes

- The monorepo uses npm workspaces - always run `npm install` from the root
- Component styles must work without JavaScript (progressive enhancement)
- All public classes should follow the `pm7-` prefix convention
- Design tokens should be used for all design decisions (colors, spacing, etc.)
- The documentation site is the source of truth for component behavior

## Component Documentation Structure

All component documentation pages follow a consistent 4-tab structure:

1. **Overview** - Component introduction
   - What the component is
   - When to use it
   - Key features
   - Component anatomy

2. **Demo** - Live demonstrations
   - All component variants
   - Interactive examples
   - Visual states (hover, active, disabled)
   - Different configurations

3. **Usage** - Developer reference
   - Installation instructions
   - Basic usage code
   - Props/attributes table
   - CSS classes reference
   - JavaScript API
   - Accessibility notes
   - Framework-specific usage (React, etc.)

4. **Documentation** - AI-optimized docs
   - GitHub README link
   - Copy-to-clipboard functionality
   - AI assistant information
   - Link to complete markdown documentation

### Tab Implementation
Components use the PM7 tab-selector component with default (underline) variant.
The tab-selector styling exactly matches the pm7-ui-style-guide project specifications.