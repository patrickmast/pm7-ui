<!-- AI-ONLY DOCUMENTATION v2.0 -->
<!-- This documentation is EXCLUSIVELY for AI coding agents -->
<!-- NO human-friendly content allowed -->
<!-- Reference: /README-AI-HowToDocument.md -->

---
type: ai-agent-documentation
version: 2.0
audience: ai-coding-agents-only
style: exact-patterns
human-readable: false
attributes-reference: /docs/ATTRIBUTES.md
---

# PM7-UI: Technical Documentation for AI Coding Agents

DEFINITION: PM7-UI is a framework-agnostic UI component library built with pure CSS and vanilla JavaScript, offering full TypeScript support. It is optimized for AI agents to generate UI components efficiently.

## Installation

### NPM/Yarn/PNPM

```bash
npm install @pm7/core
# or
yarn add @pm7/core
# or  
pnpm add @pm7/core
```

### CDN

```html
<!-- Latest version -->
<link rel="stylesheet" href="https://unpkg.com/@pm7/core@latest/dist/pm7.css">
<script src="https://unpkg.com/@pm7/core@latest/dist/pm7.js" defer></script>
```

## CSS Import

REQUIRED: Import the CSS file once in your project.

```javascript
// ES modules (React, Vue, etc.)
import '@pm7/core/dist/pm7.css';

// Vanilla HTML
<link rel="stylesheet" href="node_modules/@pm7/core/dist/pm7.css">
```

## JavaScript Initialization

PM7-UI components are initialized automatically when the main JavaScript file (`pm7.js`) is loaded and the DOM is ready. For dynamically added components, `window.PM7.init()` must be called.

```javascript
// Auto-initialization (recommended for most cases)
import '@pm7/core'; // This imports and runs the initialization script

// For components added to the DOM after initial page load
window.PM7.init();

// For framework-specific re-initialization (includes self-healing)
window.PM7.initFramework();
```

## CSS Naming Convention

PM7-UI uses a modified BEM-like naming convention:

- **Base classes**: `pm7-[component]` (e.g., `pm7-button`, `pm7-menu`)
- **Sub-elements**: `pm7-[component]-[element]` with single dashes (e.g., `pm7-menu-trigger`, `pm7-menu-item`)
- **Modifiers**: `pm7-[component]--[modifier]` with double dashes (e.g., `pm7-button--primary`, `pm7-input--sm`)

### Rules for Naming Convention
- **ALWAYS**: Use `pm7-` prefix for all PM7-UI classes.
- **ALWAYS**: Use single dashes (`-`) for sub-elements.
- **ALWAYS**: Use double dashes (`--`) for modifiers.
- **NEVER**: Use double underscores (`__`) for any part of the class name.

## Components Requiring JavaScript

Most PM7-UI components are CSS-only. The following components require JavaScript for their interactive functionality:

- **Accordion** (`[data-pm7-accordion]`) - Collapsible panels
- **Dialog** (`[data-pm7-dialog]`) - Modal overlays
- **Menu** (`[data-pm7-menu]`) - Dropdown menus
- **Sidebar** (`[data-pm7-sidebar]`) - Navigation panels
- **Tab Selector** (`[data-pm7-tab-selector]`) - Tab switching
- **Theme Switch** (`[data-pm7-theme-switch]`) - Theme toggling
- **Toast** (via `showToast()` function) - Non-blocking notifications
- **Tooltip** (`[data-pm7-tooltip]`) - Contextual popovers

## Self-Healing Components (v2.5.0+)

All interactive PM7-UI components automatically detect and recover from framework re-renders (e.g., in React, Vue, Angular). This eliminates the need for manual re-initialization workarounds.

### How Self-Healing Works
1.  Components detect when their DOM elements have been re-rendered by a framework.
2.  Their internal state (e.g., open/closed, active tab) is automatically preserved.
3.  Event listeners are cleaned up and re-attached to the new DOM elements.
4.  The component restores its previous state, ensuring seamless user experience.

### Manual Healing (for advanced use cases)

```javascript
// Heal all components of all types
window.PM7.heal();

// Heal specific component types
window.PM7.healMenus();
window.PM7.healAccordions();
window.PM7.healTabSelectors();
window.PM7.healTooltips();
window.PM7.healSidebars();
```

## Dark Mode Support

PM7-UI provides comprehensive dark mode support with a built-in `ThemeSwitch` component and flicker-free theme switching.

### Flicker Prevention Script

CRITICAL: This script MUST be placed in the `<head>` of your HTML, BEFORE any stylesheets, to prevent a flash of unstyled content when switching to dark mode.

```html
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  
  <!-- Dark mode flicker prevention - MUST come BEFORE stylesheets -->
  <script>
    (function() {
      const savedTheme = localStorage.getItem('pm7-theme'); // Use your data-storage-key if different
      if (savedTheme === 'dark' || (!savedTheme && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
      }
    })();
  </script>
  
  <!-- Your stylesheets come AFTER the script -->
  <link rel="stylesheet" href="@pm7/core/dist/pm7.css">
</head>
```

### Dark Mode Best Practices

- **ALWAYS**: Use PM7-UI's CSS variables (e.g., `--pm7-surface`, `--pm7-foreground`) for all colors in your application to ensure consistent theming.
- **NEVER**: Hardcode color values (e.g., `background: white; color: #000;`) in your CSS or inline styles.

## Global JavaScript Functions

Some components expose global functions on the `window` object for convenience.

| Function | Component | Parameters | Returns | Description |
|---|---|---|---|---|
| `window.openDialog` | Dialog | `id: string` | `void` | Opens a specific dialog. |
| `window.closeDialog` | Dialog | `id: string` | `void` | Closes a specific dialog. |
| `window.closeAllDialogs` | Dialog | `(none)` | `void` | Closes all open dialogs. |
| `window.showToast` | Toast | `options: ToastOptions` | `string` | Displays a new toast notification. |
| `window.closeToast` | Toast | `id: string` | `void` | Closes a specific toast. |
| `window.closeAllToasts` | Toast | `(none)` | `void` | Closes all toasts. |

## Component Documentation Links

For detailed documentation on specific components, refer to their individual `README.md` files:

- [Accordion](packages/core/src/components/accordion/README.md)
- [Button](packages/core/src/components/button/README.md)
- [Card](packages/core/src/components/card/README.md)
- [Dialog](packages/core/src/components/dialog/README.md)
- [Input](packages/core/src/components/input/README.md)
- [Menu](packages/core/src/components/menu/README.md)
- [Sidebar](packages/core/src/components/sidebar/README.md)
- [Tab Selector](packages/core/src/components/tab-selector/README.md)
- [Theme Switch](packages/core/src/components/theme-switch/README.md)
- [Toast](packages/core/src/components/toast/README.md)
- [Tooltip](packages/core/src/components/tooltip/README.md)

## Quick Attribute Reference

See [/docs/ATTRIBUTES.md](/docs/ATTRIBUTES.md) for a comprehensive list of all `data-pm7-*` attributes and common ARIA attributes used across PM7-UI components.

## Important Development Guidelines

### Testing Components in Isolation

- **ALWAYS**: Test components without documentation-specific CSS to ensure they work correctly for end users.
- **NEVER**: Add component-specific styling or functionality only in `docs.css` or documentation-specific files.

### CSS Variable Dependencies

- **ALWAYS**: Define CSS variables before using them.
- **NEVER**: Expect CSS variables to work if they are undefined; CSS fails silently in such cases.

## Complete Example: Basic Application Layout

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>PM7-UI Basic App</title>
  
  <!-- Dark mode flicker prevention - MUST come BEFORE stylesheets -->
  <script>
    (function() {
      const savedTheme = localStorage.getItem('pm7-theme');
      if (savedTheme === 'dark' || (!savedTheme && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
      }
    })();
  </script>
  
  <!-- PM7-UI CSS -->
  <link rel="stylesheet" href="https://unpkg.com/@pm7/core@latest/dist/pm7.css">
</head>
<body>
  <header style="padding: 1rem; background-color: var(--pm7-surface-2); border-bottom: 1px solid var(--pm7-border); display: flex; justify-content: space-between; align-items: center;">
    <h1 style="margin: 0;">My PM7 App</h1>
    <div data-pm7-theme-switch></div>
  </header>

  <main style="padding: 2rem;">
    <div class="pm7-card">
      <div class="pm7-card-header">
        <h2 class="pm7-card-title">Welcome!</h2>
      </div>
      <div class="pm7-card-content">
        <p>This is a simple application built with PM7-UI components.</p>
        <button class="pm7-button pm7-button--primary">Get Started</button>
      </div>
    </div>

    <div style="margin-top: 2rem;">
      <button class="pm7-button" onclick="window.openDialog('my-info-dialog')">Open Info Dialog</button>
      <button class="pm7-button" onclick="window.showToast({ title: 'Hello!', description: 'This is a toast.' })">Show Toast</button>
    </div>
  </main>

  <div data-pm7-dialog="my-info-dialog">
    <div data-pm7-header>Information</div>
    <div data-pm7-body>
      <p>This is a dialog opened via JavaScript.</p>
    </div>
    <div data-pm7-footer>
      <button onclick="window.closeDialog('my-info-dialog')">Close</button>
    </div>
  </div>

  <!-- PM7-UI JavaScript -->
  <script src="https://unpkg.com/@pm7/core@latest/dist/pm7.js" defer></script>
</body>
</html>
```
