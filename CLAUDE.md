# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Repository Overview

pm7-ui is a framework-agnostic UI component library that provides consistent styling and behavior for PM7 applications. It contains a single, powerful package:

- **@pm7/core** - Pure CSS and vanilla JavaScript components that work with ALL frameworks

## Architecture

The project follows a two-layer architecture:

1. **Base Layer**: Design tokens and CSS custom properties define colors, spacing, typography
2. **Component Layer**: Styled UI components using CSS classes and vanilla JavaScript

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
└── core/           # CSS + vanilla JS implementation
    ├── src/
    │   ├── styles/     # All CSS files
    │   │   ├── base/       # Reset and root styles
    │   │   ├── components/ # Component-specific styles
    │   │   ├── tokens/     # Design tokens
    │   │   └── utilities/  # Helper classes
    │   └── scripts/    # Vanilla JS for interactive components
    └── dist/           # Built files (@pm7/core npm package)
```

## Component Development

### Adding a New Component

1. **Core Package** - Create the implementation:
   ```
   packages/core/src/
   ├── styles/components/[component].css  # Component styles
   └── scripts/[component].js            # Interactive behavior (if needed)
   ```

2. **Documentation** - Add to docs-src:
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

### Shared Components Architecture

The documentation site uses JavaScript-based component injection to avoid code duplication:

- **Header and Footer**: Defined once in `/docs-src/scripts/components.js`
- **Dynamic Loading**: Components are loaded via `loadHeader()` and `loadFooter()` functions
- **Placeholders**: HTML pages use `<div id="header-placeholder">` and `<div id="footer-placeholder">`
- **Active State**: Navigation active state is determined dynamically based on current URL

This approach:
- Eliminates code duplication across 16+ HTML files
- Makes maintenance easier (single source of truth)
- Requires no build tools or additional dependencies
- Works seamlessly with the existing Vite development server

## Build Process

### Build Process
1. PostCSS processes all CSS files with:
   - `postcss-import`: Combines @import statements
   - `autoprefixer`: Adds vendor prefixes
   - `cssnano`: Minifies production CSS
2. Rollup bundles JavaScript modules into UMD and ESM formats

## Testing Approach

Currently, testing is done through:
1. Visual testing in the documentation site
2. Manual testing of interactive components
3. Framework-specific testing in consumer applications

## Important Notes

- Always run `npm install` from the root directory
- Component styles must work without JavaScript (progressive enhancement)
- All public classes should follow the `pm7-` prefix convention
- Design tokens should be used for all design decisions (colors, spacing, etc.)
- The documentation site is the source of truth for component behavior
- pm7-ui works with ALL frameworks without needing framework-specific wrappers

## CSS Naming Convention

pm7-ui uses a modified naming convention (NOT traditional BEM):

- **Base classes**: `pm7-[component]` (e.g., `pm7-button`, `pm7-menu`)
- **Sub-elements**: `pm7-[component]-[element]` with single dashes (e.g., `pm7-menu-trigger`, `pm7-menu-item`)
- **Modifiers**: `pm7-[component]--[modifier]` with double dashes (e.g., `pm7-button--primary`, `pm7-input--sm`)

**DO NOT USE** double underscores (`__`) for elements. Always use single dashes for sub-elements.

Examples:
```css
/* ✅ Correct */
.pm7-menu {}
.pm7-menu-trigger {}
.pm7-menu-content {}
.pm7-menu-item {}
.pm7-menu-item--disabled {}

/* ❌ Incorrect (traditional BEM) */
.pm7-menu__trigger {}
.pm7-menu__content {}
.pm7-menu__item {}
```

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

## Component Documentation Page Structure

### Usage Tab Section Order
When creating or updating component documentation pages, the Usage tab MUST follow this exact section order:

1. **Installation** - Simple npm install command
   ```html
   <h3>Installation</h3>
   <pre><code class="language-bash">npm install @pm7/core</code></pre>
   ```

2. **CSS Classes** - Complete table with grouped categories
   - Base classes
   - Variants (if applicable)
   - Size modifiers (if applicable)
   - Theme variants (if applicable)
   - State modifiers (if applicable)
   - Structure classes (if applicable)
   
3. **Data Attributes** - Table with all data-* attributes
   - Include: Attribute name, Type, Default value, Description
   
4. **Basic Usage** - Simple HTML example showing the most common use case
   - Framework examples (React, Vue, etc.) showing CSS class usage
   - Other code examples follow (Positioning, Sizes, Themes, etc.)
   
5. **JavaScript API** - If the component has JavaScript functionality
   - Import statement
   - Initialization
   - Methods
   - Events
   
6. **Accessibility** - Accessibility features and requirements

### Demo Tab Structure
- Use `pm7-docs-example` class for sections
- Use `pm7-docs-preview` class for demo containers
- Use `<h3>` for section headers
- Group related demos logically

### Important Notes:
- Always use `<section class="pm7-docs-section">` wrapper
- Headers within Usage tab should be `<h3>` not `<h2>`
- No `pm7-card` wrappers around code blocks
- Use `<pre><code class="language-*">` directly for code examples
- Table section headers use gray background: `<tr style="background-color: #f9f9f9;">`

## Dogfooding Rule for pm7-ui Documentation Site
**CRITICAL**: The pm7-ui documentation site MUST use pm7-ui components throughout. This serves two purposes:
1. **Testing**: We test our own components in real-world usage
2. **Showcase**: We demonstrate best practices and component capabilities

### Required Component Usage:
- Use `pm7-card` instead of custom card classes like `pm7-docs-card`
- Use `pm7-button` for all buttons
- Use `pm7-input` for all form inputs
- Use `pm7-dialog` for all modals/dialogs
- Use `pm7-menu` for all dropdowns and menus
- Use `pm7-toast` for all notifications

### Implementation:
- Replace ALL custom documentation-specific component classes with pm7-ui components
- Add custom styling through additional classes or inline styles when needed
- This applies to the entire documentation site, including navigation, sidebars, and content areas

## Component Auto-initialization

Interactive components (Menu, Dialog, Toast) automatically initialize when the DOM loads:

```javascript
// Auto-initialization in packages/core/src/scripts/main.js
document.addEventListener('DOMContentLoaded', () => {
  PM7Menu.autoInit();
  PM7Dialog.autoInit();
  PM7Toast.autoInit();
});
```

Components can also be manually initialized for dynamic content:
```javascript
import { PM7Menu } from '@pm7/core';
const menu = new PM7Menu(document.querySelector('.pm7-menu'));
```

## Available Components

The following components are currently implemented:

**Core Components:**
- Button (`pm7-button`)
- Card (`pm7-card`)
- Input (`pm7-input`)
- Badge (`pm7-badge`)
- Avatar (`pm7-avatar`)
- Tab Selector (`pm7-tab-selector`)

**Interactive Components:**
- Menu (`pm7-menu`) - Dropdown menus with keyboard navigation
- Dialog (`pm7-dialog`) - Modal dialogs with backdrop
- Toast (`pm7-toast`) - Notification system

**Utility Classes:**
- Container (`pm7-container`)
- Spacing utilities (`pm7-space-*`)

## Debug Test Files

The `docs-src/test/` directory contains isolated test files for debugging specific issues:
- Component-specific tests (e.g., `menu-test.html`, `dialog-test.html`)
- Integration tests for complex scenarios
- Performance testing pages

## Deployment

The documentation site is deployed to Vercel using the Vercel CLI:
- **Production URL**: https://pm7-ui.vercel.app
- **Build Command**: `npm run build`
- **Output Directory**: `docs`
- **URL Rewrites**: Configured for clean URLs without `.html` extensions
- **Deploy Command**: `vercel --prod` (always use Vercel CLI for deployment)

## Project Memories

### pm7-ui Style Guide Reference
- Als ik het over "het" of "ons" "origineel project" he, dan bedoel ik "pm7-ui Style Guide" welke je hier kan vinden:
  - Lokaal: /Users/patrickmast/Dev/pm7-ui-style-guide
  - Online: https://tools-y0etdl1ve-pm7-projects.vercel.app
  - Github: https://github.com/patrickmast/pm7-ui-style-guide
- Dit project is daaruit voortgekomen en vormt een duidelijke verbetering van het origineel.