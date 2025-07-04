# pm7-ui - The First UI Library Built for AI Coding Agents

**Made for AI Coding Agents. Ready for Any Framework.**

## Overview

pm7-ui is the first UI component library designed specifically for AI Coding Agents.  
It's lightweight, framework-agnostic, and built with pure CSS and optional vanilla JavaScript.  
Use it anywhere—whether you're working in React, Vue, Angular, Svelte, or just plain HTML.

Effortless styling. Universal compatibility. Ready to power your AI-driven workflows.

### Why pm7-ui?

- **🤖 AI-First Design** - Simple CSS classes that AI agents understand instantly
- **🌍 Universal** - One package works with ALL frameworks
- **📦 Lightweight** - Pure CSS + optional vanilla JS, no dependencies
- **🚀 Copy & Paste** - AI agents can use examples directly
- **✨ Beautiful** - Pre-designed components that look great out of the box

## Upgrading from v1

**⚠️ Breaking Change**: v2.0 removes the @pm7/react package. See our [comprehensive upgrade guide](UPGRADE-v2.md) for migration instructions.

## Installation

```bash
# One package for all projects
npm install @pm7/core
```

## Important: CSS Import

⚠️ **Import the CSS file once in your project:**

```javascript
// ES modules (React, Vue, etc.)
import '@pm7/core/dist/pm7.css';

// Vanilla HTML
<link rel="stylesheet" href="node_modules/@pm7/core/dist/pm7.css">
```

## Usage

### Vanilla HTML/CSS/JS

```html
<!-- Include CSS -->
<link rel="stylesheet" href="node_modules/@pm7/core/dist/pm7.css">

<!-- Use components -->
<button class="pm7-button pm7-button--primary">
  Click me
</button>

<!-- Include JavaScript for interactive components -->
<script type="module">
  import { PM7Menu } from '@pm7/core';
  
  const menuElement = document.querySelector('[data-pm7-menu]');
  new PM7Menu(menuElement);
</script>
```

### Component Auto-initialization

Many PM7 components support automatic initialization when the DOM loads:

```javascript
// These components auto-initialize on DOMContentLoaded:
// - PM7Menu (looks for [data-pm7-menu])
// - PM7Dialog (looks for [data-pm7-dialog])
// - PM7Toast (automatically ready, no init needed)
// - PM7Accordion (looks for [data-pm7-accordion])
// - PM7TabSelector (looks for [data-pm7-tab-selector])
// - PM7Tooltip (looks for [data-pm7-tooltip])
// - PM7Button (looks for .pm7-button with [data-*] attributes)

// Auto-initialization happens automatically when you include the main script:
import '@pm7/core';

// Or you can manually initialize components:
import { PM7Menu } from '@pm7/core';

// Manual initialization for dynamic content
const menu = new PM7Menu(document.querySelector('.pm7-menu'));

// For accordion with options:
const accordion = new PM7Accordion(element, {
  allowMultiple: true,
  defaultOpen: 0,
  iconPosition: 'start'
});
```

**Note**: Components with auto-initialization will automatically find and initialize all matching elements on page load. For dynamically added content, use the manual initialization methods.

### React Example

```jsx
import '@pm7/core/dist/pm7.css';

function App() {
  return (
    <div>
      <button className="pm7-button pm7-button--primary" onClick={() => alert('Clicked!')}>
        Click me
      </button>
      
      <div className="pm7-menu" data-pm7-menu>
        <button className="pm7-menu-trigger">Menu</button>
        <div className="pm7-menu-content">
          <button className="pm7-menu-item">Option 1</button>
          <button className="pm7-menu-item">Option 2</button>
        </div>
      </div>
    </div>
  );
}
```

## CSS Naming Convention

pm7-ui uses a modified naming convention (NOT traditional BEM):

- **Base classes**: `pm7-[component]` (e.g., `pm7-button`, `pm7-menu`)
- **Sub-elements**: `pm7-[component]-[element]` with single dashes (e.g., `pm7-menu-trigger`, `pm7-menu-item`)
- **Modifiers**: `pm7-[component]--[modifier]` with double dashes (e.g., `pm7-button--primary`, `pm7-input--sm`)

**Important**: We do NOT use double underscores (`__`) for elements. Always use single dashes for sub-elements.

### Examples

```css
/* ✅ Correct PM7 naming */
.pm7-menu {}
.pm7-menu-trigger {}
.pm7-menu-content {}
.pm7-menu-item {}
.pm7-menu-item--disabled {}

.pm7-button {}
.pm7-button--primary {}
.pm7-button--lg {}

.pm7-card {}
.pm7-card-header {}
.pm7-card-body {}
.pm7-card-footer {}

/* ❌ Incorrect (traditional BEM) */
.pm7-menu__trigger {}      /* Don't use __ */
.pm7-menu__content {}      /* Don't use __ */
.pm7-button__icon {}       /* Don't use __ */
```

### Component Structure

When building components, follow this HTML structure pattern:

```html
<!-- Container with base class -->
<div class="pm7-accordion">
  <!-- Sub-element with single dash -->
  <div class="pm7-accordion-item">
    <!-- Another sub-element -->
    <button class="pm7-accordion-trigger">
      Accordion Header
    </button>
    <!-- Content sub-element -->
    <div class="pm7-accordion-content">
      Content goes here
    </div>
  </div>
</div>

<!-- With modifiers -->
<button class="pm7-button pm7-button--primary pm7-button--lg">
  Large Primary Button
</button>
```

## Development

This is a monorepo managed with npm workspaces.

```bash
# Install dependencies
npm install

# Start development
npm run dev

# Build all packages
npm run build

# Run tests
npm run test

# Lint code
npm run lint
```

### Development Setup with npm link

When developing pm7-ui components and testing them in another project, use npm link:

```bash
# In pm7-ui root directory
cd packages/core
npm link

# In your project that uses pm7-ui
cd ~/your-project
npm link @pm7/core

# After making changes to pm7-ui, rebuild:
cd ~/pm7-ui
npm run build:packages

# Your linked project will automatically use the latest local build
```

#### Alternative: Direct file reference

For temporary development, you can also reference the package directly in package.json:

```json
{
  "dependencies": {
    "@pm7/core": "file:../pm7-ui/packages/core"
  }
}
```

Then run `npm install` to install the local package.

**Note**: Remember to switch back to npm version numbers before committing:
```json
{
  "dependencies": {
    "@pm7/core": "^2.0.0"
  }
}
```

## Project Structure

```
pm7-ui/
├── packages/
│   └── core/          # Pure CSS + vanilla JS - The only package you need!
├── docs-src/          # Documentation source
└── docs/              # Built documentation
```

### Documentation

- Component documentation available at https://pm7-ui.vercel.app
- Run `npm run dev` to view documentation locally

## @pm7/core Exports

The core package exports JavaScript classes for interactive components:

```javascript
// Auto-initialization (recommended)
import '@pm7/core';

// Or import specific components
import { PM7Menu, PM7Dialog, PM7Toast, PM7Accordion, PM7TabSelector } from '@pm7/core';

// Manual initialization
const menu = new PM7Menu(document.querySelector('.pm7-menu'));
```

### CSS Classes Reference

All components are available as CSS classes in `@pm7/core/dist/pm7.css`:

#### Buttons
```html
<button class="pm7-button pm7-button--primary">Primary</button>
<button class="pm7-button pm7-button--secondary">Secondary</button>
<button class="pm7-button pm7-button--ghost">Ghost</button>
<button class="pm7-button pm7-button--outline">Outline</button>
```

#### Cards
```html
<div class="pm7-card">
  <div class="pm7-card-header">Header</div>
  <div class="pm7-card-body">Content</div>
  <div class="pm7-card-footer">Footer</div>
</div>
```

#### Other Components
- `.pm7-input` (with sizes: `--sm`, `--lg`)
- `.pm7-menu`, `.pm7-menu-trigger`, `.pm7-menu-content`, `.pm7-menu-item`
- `.pm7-dialog`, `.pm7-dialog-overlay`, `.pm7-dialog-content`
- `.pm7-toast`, `.pm7-toast-container`
- `.pm7-tooltip`
- `.pm7-tab-selector`, `.pm7-tab-button`
- `.pm7-accordion`, `.pm7-accordion-item`, `.pm7-accordion-trigger`, `.pm7-accordion-content`

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

MIT © Patrick Mast