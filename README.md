# PM7 UI

Framework-agnostic UI components for PM7 applications.

## Overview

PM7 UI provides a comprehensive set of UI components that work across different frameworks. Built with accessibility and performance in mind, these components offer consistent styling and behavior for all PM7 applications.

### Packages

- **@pm7/core** - Pure CSS and vanilla JavaScript components
- **@pm7/react** - React component wrappers
- **@pm7/vue** - Vue component wrappers (coming soon)

## Installation

```bash
# For vanilla HTML/CSS/JS projects
npm install @pm7/core

# For React projects
npm install @pm7/react

# For Vue projects (coming soon)
npm install @pm7/vue
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

### React

```jsx
import { Button, Menu, Dialog } from '@pm7/react';

function App() {
  return (
    <div>
      <Button variant="primary" onClick={() => alert('Clicked!')}>
        Click me
      </Button>
      
      <Menu
        items={[
          { label: 'Option 1', onClick: () => {} },
          { label: 'Option 2', onClick: () => {} }
        ]}
      />
    </div>
  );
}
```

## CSS Naming Convention

PM7 UI uses a modified naming convention (NOT traditional BEM):

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

When developing PM7 UI components and testing them in another project, use npm link:

```bash
# In PM7 UI root directory
cd packages/react
npm link

cd ../core  
npm link

# In your project that uses PM7 UI
cd ~/your-project
npm link @pm7/react @pm7/core

# After making changes to PM7 UI, rebuild:
cd ~/pm7-ui
npm run build:packages

# Your linked project will automatically use the latest local build
```

#### Alternative: Direct file reference

For temporary development, you can also reference local packages directly in package.json:

```json
{
  "dependencies": {
    "@pm7/core": "file:../pm7-ui/packages/core",
    "@pm7/react": "file:../pm7-ui/packages/react"
  }
}
```

Then run `npm install` to install the local packages.

**Note**: Remember to switch back to npm version numbers before committing:
```json
{
  "dependencies": {
    "@pm7/core": "^1.1.0",
    "@pm7/react": "^1.1.0"
  }
}
```

## Project Structure

```
pm7-ui/
├── packages/
│   ├── core/          # Pure CSS + vanilla JS
│   ├── react/         # React components
│   └── vue/           # Vue components
├── examples/
│   ├── vanilla/       # Vanilla HTML/JS examples
│   ├── react/         # React example app
│   └── vue/           # Vue example app
└── docs/              # Documentation
```

### Documentation

- [Framework Wrapper Patterns](docs/FRAMEWORK_WRAPPERS.md) - How to create framework-specific wrappers
- Component documentation available at `/docs` when running `npm run dev`

## Package Exports

### @pm7/core

The core package exports JavaScript classes for interactive components and utilities:

```javascript
// Component classes
export { PM7Menu } from './menu';
export { PM7Dialog } from './dialog'; 
export { PM7Toast } from './toast';
export { PM7Accordion } from './accordion';
export { PM7TabSelector } from './tab-selector';

// Utility functions
export { initializeAllComponents } from './utils';
```

### @pm7/react

The React package exports all component wrappers:

```javascript
// Components
export { Button } from './components/Button';
export { Card } from './components/Card';
export { Input } from './components/Input';
export { Menu, MenuItem, MenuTrigger, MenuContent } from './components/Menu';
export { Dialog, DialogTrigger, DialogContent } from './components/Dialog';
export { Toast, ToastProvider, useToast } from './components/Toast';
export { Tooltip } from './components/Tooltip';
export { TabSelector } from './components/TabSelector';
export { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from './components/Accordion';

// Icons
export { CheckIcon, CloseIcon, ChevronDownIcon } from './components/Icons';

// Hooks
export { useClickOutside } from './hooks/useClickOutside';
export { useEscapeKey } from './hooks/useEscapeKey';
```

### CSS Classes Reference

All components are available as CSS classes in `@pm7/core/dist/pm7.css`:

- `.pm7-button` (with variants: `--primary`, `--secondary`, `--ghost`, `--outline`)
- `.pm7-card`, `.pm7-card-header`, `.pm7-card-body`, `.pm7-card-footer`
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