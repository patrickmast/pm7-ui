# @pm7/core

The First UI Library Built for AI Coding Agents - Pure CSS and vanilla JavaScript components that work with ALL frameworks.

## Installation

```bash
npm install @pm7/core
```

## Quick Start

```javascript
// Import CSS (required)
import '@pm7/core/dist/pm7.css';

// Import JavaScript for interactive components (optional)
import '@pm7/core';
```

Or use via CDN:

```html
<link rel="stylesheet" href="https://unpkg.com/@pm7/core/dist/pm7.css">
<script type="module" src="https://unpkg.com/@pm7/core/dist/pm7.js"></script>
```

## Why PM7?

- **🤖 AI-First**: Built specifically for AI coding agents with self-contained components
- **🎯 Framework Agnostic**: Works with React, Vue, Angular, or vanilla HTML
- **🚀 Zero Dependencies**: Pure CSS + vanilla JS, no framework required
- **🎨 Dark Mode**: Built-in dark mode with flicker-free theme switching
- **♿ Accessible**: WCAG compliant with full keyboard navigation
- **📱 Responsive**: Mobile-first design that works everywhere

## Available Components

### Core Components
- **Button** - 7 variants, 4 sizes, with 6stars effect on primary buttons
- **Callout** - Highlight important information with distinctive visual styles
- **Card** - Content containers with hover effects
- **Input** - Text inputs with validation states
- **Badge** - Status indicators and labels
- **Avatar** - User profile images with fallbacks
- **Progress** - Progress bars and loading indicators
- **Table** - Data tables with sorting

### Interactive Components
- **Accordion** - Collapsible content panels with smooth animations
- **Dialog** - Modal dialogs with backdrop and focus management
- **Menu** - Dropdown menus with keyboard navigation
- **Tab Selector** - Tab interfaces with ARIA support
- **Theme Switch** - Dark/light mode toggle with persistence
- **Toast** - Non-blocking notifications
- **Tooltip** - Contextual information on hover

### Layout Components
- **Container** - Responsive content wrapper
- **Spacing** - Margin/padding utilities

## Basic Usage

### Buttons

```html
<!-- Primary button with 6stars effect -->
<button class="pm7-button pm7-button--primary">
  Save Changes
</button>

<!-- Other variants -->
<button class="pm7-button pm7-button--secondary">Secondary</button>
<button class="pm7-button pm7-button--outline">Outline</button>
<button class="pm7-button pm7-button--ghost">Ghost</button>
<button class="pm7-button pm7-button--destructive">Delete</button>

<!-- Sizes -->
<button class="pm7-button pm7-button--primary pm7-button--xs">Extra Small</button>
<button class="pm7-button pm7-button--primary pm7-button--sm">Small</button>
<button class="pm7-button pm7-button--primary pm7-button--lg">Large</button>
```

### Dialogs

```html
<!-- Auto-initialized dialog -->
<div class="pm7-dialog" data-pm7-dialog="my-dialog">
  <div class="pm7-dialog-overlay"></div>
  <div class="pm7-dialog-content">
    <div class="pm7-dialog-header">
      <h2 class="pm7-dialog-title">Dialog Title</h2>
      <button class="pm7-dialog-close" aria-label="Close">&times;</button>
    </div>
    <div class="pm7-dialog-body">
      <p>Dialog content goes here.</p>
    </div>
    <div class="pm7-dialog-footer">
      <button class="pm7-button pm7-button--outline" onclick="closeDialog('my-dialog')">
        Cancel
      </button>
      <button class="pm7-button pm7-button--primary">
        Confirm
      </button>
    </div>
  </div>
</div>

<!-- Trigger -->
<button class="pm7-button pm7-button--primary" onclick="openDialog('my-dialog')">
  Open Dialog
</button>
```

### Menus

```html
<!-- Auto-initialized dropdown menu -->
<div class="pm7-menu" data-pm7-menu>
  <button class="pm7-menu-trigger pm7-button pm7-button--outline">
    Options
  </button>
  <div class="pm7-menu-content">
    <button class="pm7-menu-item">Edit</button>
    <button class="pm7-menu-item">Duplicate</button>
    <div class="pm7-menu-separator"></div>
    <button class="pm7-menu-item pm7-menu-item--destructive">Delete</button>
  </div>
</div>
```

### Toasts

```javascript
import { showToast } from '@pm7/core';

// Show a toast notification
showToast({
  title: 'Success!',
  description: 'Your changes have been saved.',
  variant: 'success' // default, success, warning, destructive, info
});
```

### Theme Switch

```html
<!-- Add theme switch to your header -->
<div data-pm7-theme-switch class="pm7-theme-switch--sm"></div>

<!-- Prevent flicker on page load (add to <head>) -->
<script>
  (function() {
    const saved = localStorage.getItem('pm7-theme');
    if (saved) {
      document.documentElement.classList.toggle('dark', saved === 'dark');
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      document.documentElement.classList.add('dark');
    }
  })();
</script>
```

## Auto-initialization

Interactive components with data attributes are automatically initialized:

- `data-pm7-accordion` - Accordion
- `data-pm7-dialog` - Dialog (requires manual open/close)
- `data-pm7-menu` - Dropdown menu
- `data-pm7-tab-selector` - Tab interface
- `data-pm7-theme-switch` - Theme switcher

## JavaScript API

```javascript
import {
  PM7Accordion,
  PM7Dialog,
  PM7Menu,
  PM7TabSelector,
  PM7ThemeSwitch,
  PM7Toast,
  PM7Tooltip,
  showToast,
  openDialog,
  closeDialog,
  pm7Alert,
  pm7Confirm
} from '@pm7/core';

// Manual initialization
const menu = new PM7Menu(element);
const dialog = new PM7Dialog(element);
const accordion = new PM7Accordion(element, { allowMultiple: true });

// Helper functions
showToast({ title: 'Hello!' });
openDialog('my-dialog');
pm7Alert('This is an alert');
pm7Confirm('Are you sure?', (confirmed) => {
  if (confirmed) console.log('Confirmed!');
});
```

## Dark Mode

PM7 includes a complete dark mode implementation:

1. **Automatic**: Respects system preferences via `prefers-color-scheme`
2. **Manual**: Toggle with Theme Switch component
3. **Persistent**: Saves preference to localStorage
4. **Flicker-free**: No flash of wrong theme on page load

## Customization

Override CSS variables for custom theming:

```css
:root {
  /* Colors */
  --pm7-primary: #your-brand-color;
  --pm7-primary-hover: #your-brand-hover;
  
  /* Spacing */
  --pm7-spacing-1: 0.25rem;
  --pm7-spacing-2: 0.5rem;
  
  /* Typography */
  --pm7-font-family: 'Your Font', system-ui, sans-serif;
  
  /* Borders */
  --pm7-radius: 0.375rem;
  --pm7-border: 1px solid var(--pm7-border-color);
}
```

## Framework Integration

PM7 works with any framework:

### React
```jsx
import '@pm7/core/dist/pm7.css';

function App() {
  return (
    <button className="pm7-button pm7-button--primary">
      React Button
    </button>
  );
}
```

### Vue
```vue
<template>
  <button class="pm7-button pm7-button--primary">
    Vue Button
  </button>
</template>

<script>
import '@pm7/core/dist/pm7.css';
</script>
```

### Angular
```typescript
import '@pm7/core/dist/pm7.css';

@Component({
  template: `
    <button class="pm7-button pm7-button--primary">
      Angular Button
    </button>
  `
})
```

## AI-Optimized Documentation

PM7 is the first UI library built specifically for AI coding agents. Give your AI assistant this link for complete documentation:

```
https://raw.githubusercontent.com/patrickmast/pm7-ui/main/AI-README.md
```

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Opera 76+

## License

MIT © Patrick Mast

## Links

- [Documentation](https://pm7-ui.dev)
- [GitHub](https://github.com/patrickmast/pm7-ui)
- [Examples](https://pm7-ui.dev/components)
- [NPM](https://www.npmjs.com/package/@pm7/core)