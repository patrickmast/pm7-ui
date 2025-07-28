# pm7-ui Technical Documentation for AI Coding Agents

pm7-ui is a framework-agnostic UI component library built with pure CSS and vanilla JavaScript with full TypeScript support.

## Key Principles
*   **100% Framework-Agnostic:** Built with pure vanilla JavaScript and CSS. It is **NOT** a React, Vue, or Angular library, but works seamlessly inside of them or with plain HTML.
*   **AI-First Design:** Components, class names, and documentation are optimized for clarity and predictability, ensuring AI agents can easily understand and use the library without guesswork.
*   **Lightweight & Performant:** No external dependencies. No complex build steps. Just pure, efficient code.
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
<script src="https://unpkg.com/@pm7/core@latest/dist/pm7.js"></script>

<!-- Specific version -->
<link rel="stylesheet" href="https://unpkg.com/@pm7/core@3.0.0/dist/pm7.css">
<script src="https://unpkg.com/@pm7/core@3.0.0/dist/pm7.js"></script>

<!-- Alternative CDN (jsDelivr) -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@pm7/core@latest/dist/pm7.css">
<script src="https://cdn.jsdelivr.net/npm/@pm7/core@latest/dist/pm7.js"></script>
```

## Import CSS

**Import the CSS file once in your project:**

```javascript
// ES modules (React, Vue, etc.)
import '@pm7/core/dist/pm7.css';

// Vanilla HTML
<link rel="stylesheet" href="node_modules/@pm7/core/dist/pm7.css">
```

## Basic Usage

### Vanilla HTML

```html
<!-- Include CSS -->
<link rel="stylesheet" href="node_modules/@pm7/core/dist/pm7.css">

<!-- Use components -->
<button class="pm7-button pm7-button--primary">Click me</button>

<div class="pm7-card">
  <div class="pm7-card-header">Card Title</div>
  <div class="pm7-card-body">Card content</div>
</div>

<!-- Include JavaScript for interactive components -->
<script type="module">
  import '@pm7/core';
  // Components auto-initialize
</script>
```

### React

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

### Vue

```vue
<template>
  <div>
    <button class="pm7-button pm7-button--primary" @click="handleClick">
      Click me
    </button>
    
    <div class="pm7-card">
      <div class="pm7-card-header">Card Title</div>
      <div class="pm7-card-body">Card content</div>
    </div>
  </div>
</template>

<script>
import '@pm7/core/dist/pm7.css';
</script>
```

### Angular

```html
<button class="pm7-button pm7-button--primary" (click)="handleClick()">
  Angular Button
</button>
```

## CSS Naming Convention

**NOT traditional BEM** - pm7-ui uses a modified naming convention:

- **Base classes**: `pm7-[component]` (e.g., `pm7-button`, `pm7-menu`)
- **Sub-elements**: `pm7-[component]-[element]` with single dashes (e.g., `pm7-menu-trigger`, `pm7-menu-item`)
- **Modifiers**: `pm7-[component]--[modifier]` with double dashes (e.g., `pm7-button--primary`, `pm7-input--sm`)

**Important**: Never use double underscores (`__`). Always use single dashes for sub-elements.

### Examples

```css
/* ✅ Correct */
.pm7-menu {}
.pm7-menu-trigger {}
.pm7-menu-content {}
.pm7-menu-item {}
.pm7-menu-item--disabled {}

/* ❌ Incorrect */
.pm7-menu__trigger {}
.pm7-menu__content {}
```

## Components That Need JavaScript

Most components work with CSS only. These require JavaScript for interactivity:

- **Menu** (`[data-pm7-menu]`) - Dropdown functionality
- **Dialog** (`[data-pm7-dialog]`) - Modal behavior
- **Toast** (`[data-pm7-toast]`) - Notifications
- **Accordion** (`[data-pm7-accordion]`) - Collapsible panels
- **Tab Selector** (`[data-pm7-tab-selector]`) - Tab switching
- **Tooltip** (`[data-pm7-tooltip]`) - Hover tooltips
- **Theme Switch** (`[data-pm7-theme-switch]`) - Theme toggling

## Component Auto-initialization

Many PM7 components support automatic initialization when the DOM loads:

```javascript
// Auto-initialization happens automatically when you include:
import '@pm7/core';

// Components with data attributes auto-initialize and attach to elements:
// <div data-pm7-menu>...</div>
// <div data-pm7-tab-selector>...</div>
// <div data-pm7-accordion>...</div>

// For auto-initialized components, create a new instance to control:
const menuElement = document.querySelector('[data-pm7-menu]');
const menu = new PM7Menu(menuElement);
menu.open();

// Manual initialization for dynamic content:
const newMenu = document.createElement('div');
newMenu.className = 'pm7-menu';
// ... add menu content ...
const menu = new PM7Menu(newMenu);
menu.open(); // Use the instance directly

// Re-initialize all components after adding dynamic content
PM7.init();
```

## Framework Integration (v2.7.0+)

### React/Vue/Angular Self-Healing Components

All interactive PM7 components now feature **self-healing** - they automatically detect and recover from framework re-renders:

```javascript
// React - Use initFramework() for better timing + automatic healing
useEffect(() => {
  PM7.initFramework(); // Waits 50ms + enables healing
}, []);

// Vue
mounted() {
  this.$nextTick(() => {
    PM7.initFramework();
  });
}

// Angular
ngAfterViewInit() {
  PM7.initFramework();
}
```

### Self-Healing Features (v2.5.0+)

**Components with self-healing:**
- Menu - Preserves open/close state
- Accordion - Preserves expanded sections
- Tab Selector - Preserves active tab
- Tooltip - Preserves open state
- Sidebar - Preserves open state and collapsible sections
- Dialog - Preserves content during transforms

**How it works:**
1. Components detect framework re-renders automatically
2. State is preserved during re-initialization
3. Event listeners are cleaned up and re-attached
4. No manual workarounds needed!

### Manual Healing

```javascript
// Heal all components
PM7.heal();

// Heal specific component types
PM7.healMenus();
PM7.healAccordions();
PM7.healTabSelectors();
PM7.healTooltips();
PM7.healSidebars();

// Automatic healing runs every second by default
// To disable: clearInterval(window.__PM7_SELF_HEALING_INTERVAL__)
```

## Common Patterns

### Login Form

```html
<form class="pm7-card" style="max-width: 400px; margin: 0 auto;">
  <div class="pm7-card-header">
    <h2>Login</h2>
  </div>
  <div class="pm7-card-body">
    <div style="margin-bottom: 1rem;">
      <label for="email">Email</label>
      <input type="email" id="email" class="pm7-input" placeholder="you@example.com">
    </div>
    <div style="margin-bottom: 1.5rem;">
      <label for="password">Password</label>
      <input type="password" id="password" class="pm7-input">
    </div>
    <button type="submit" class="pm7-button pm7-button--primary pm7-button--full">
      Sign In
    </button>
  </div>
</form>
```

### Dropdown Menu

```html
<div class="pm7-menu" data-pm7-menu>
  <button class="pm7-menu-trigger">Options</button>
  <div class="pm7-menu-content">
    <button class="pm7-menu-item">Profile</button>
    <button class="pm7-menu-item">Settings</button>
    <div class="pm7-menu-separator"></div>
    <button class="pm7-menu-item pm7-menu-item--destructive">Logout</button>
  </div>
</div>
```

### Product Card

```html
<div class="pm7-card" style="max-width: 300px;">
  <img src="product.jpg" alt="Product" style="width: 100%; height: 200px; object-fit: cover;">
  <div class="pm7-card-body">
    <h3>Product Name</h3>
    <p style="color: var(--pm7-muted-foreground);">Brief description</p>
    <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 1rem;">
      <span style="font-size: 1.5rem; font-weight: bold;">$99.99</span>
      <button class="pm7-button pm7-button--primary">Add to Cart</button>
    </div>
  </div>
</div>
```

### Modal Dialog

```html
<div class="pm7-dialog" data-pm7-dialog>
  <div class="pm7-dialog-trigger">
    <button class="pm7-button pm7-button--primary">Open Dialog</button>
  </div>
  <div class="pm7-dialog-content">
    <div class="pm7-dialog-header">
      <h2 class="pm7-dialog-title">Dialog Title</h2>
    </div>
    <div class="pm7-dialog-body">
      <p>Dialog content goes here.</p>
    </div>
    <div class="pm7-dialog-footer">
      <button class="pm7-button pm7-button--ghost" data-pm7-dialog-close>Cancel</button>
      <button class="pm7-button pm7-button--primary">Confirm</button>
    </div>
  </div>
</div>
```

### Form with Validation States

```html
<div class="pm7-input-group">
  <label for="username">Username</label>
  <input type="text" id="username" class="pm7-input pm7-input--error" placeholder="Choose username">
  <span class="pm7-helper-text pm7-helper-text--error">Username is already taken</span>
</div>
```

### Loading States

```html
<!-- Loading button -->
<button class="pm7-button pm7-button--primary" disabled>
  <span class="pm7-spinner"></span>
  Loading...
</button>

<!-- Loading card -->
<div class="pm7-card pm7-card--loading">
  <div class="pm7-card-body">
    <div class="pm7-skeleton pm7-skeleton--text"></div>
    <div class="pm7-skeleton pm7-skeleton--text"></div>
  </div>
</div>
```

## Dark Mode Support

### Features
- **Automatic Detection** - Respects system theme preferences
- **Theme Switch Component** - Built-in toggle for user control
- **Zero Flicker** - No flash of light mode on page load
- **LocalStorage Persistence** - Remembers user preference

### Basic Usage

```html
<!-- Theme Switch component -->
<div class="pm7-theme-switch" data-pm7-theme-switch>
  <span>Theme</span>
</div>
```

### Preventing Dark Mode Flicker

**CRITICAL**: Add this script to your `<head>` BEFORE any stylesheets:

```html
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  
  <!-- Dark mode flicker prevention - MUST come BEFORE stylesheets -->
  <script>
    (function() {
      const savedTheme = localStorage.getItem('pm7-theme');
      if (savedTheme === 'dark' || (!savedTheme && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
      }
    })();
  </script>
  
  <!-- Your stylesheets come AFTER the script -->
  <link rel="stylesheet" href="@pm7/core/dist/pm7.css">
</head>
```

### Manual Control

```javascript
// Toggle dark mode
document.documentElement.classList.toggle('dark');

// Set theme explicitly
document.documentElement.classList.add('dark');    // Dark mode
document.documentElement.classList.remove('dark'); // Light mode

// Save preference to localStorage
localStorage.setItem('pm7-theme', 'dark');  // or 'light'
```

### Dark Mode Best Practices

#### 1. **Always Use CSS Variables**
```css
/* ❌ WRONG - Never use hardcoded colors */
.my-component {
  background: white;
  color: #000000;
  border: 1px solid #e5e5e5;
}

/* ✅ CORRECT - Always use CSS variables */
.my-component {
  background: var(--pm7-surface);
  color: var(--pm7-foreground);
  border: 1px solid var(--pm7-border);
}
```

#### 2. **Define Link Colors Explicitly**
```css
/* Add to your global styles */
a {
  color: var(--pm7-primary);
  text-decoration: underline;
}

a:hover {
  color: var(--pm7-primary-hover);
}

/* Prevent purple visited links in dark mode */
.dark a:visited {
  color: var(--pm7-primary);
}
```

#### 3. **Test Every Component State**
- Hover states
- Focus states  
- Active states
- Disabled states
- Selected states

#### 4. **Avoid Inline Styles**
```html
<!-- ❌ WRONG -->
<div style="background-color: #F8F9FA; color: #000;">

<!-- ✅ CORRECT -->
<div class="pm7-card">
```

#### 5. **Header with Theme Switch Integration**
```html
<header class="header">
  <div style="display: grid; grid-template-columns: 1fr auto 1fr; align-items: center;">
    <!-- Left: Navigation controls -->
    <div style="display: flex; align-items: center; gap: 1rem;">
      <button class="pm7-menu-trigger">Menu</button>
      <div class="pm7-theme-switch pm7-theme-switch--sm" data-pm7-theme-switch></div>
    </div>
    
    <!-- Center: Logo -->
    <div style="text-align: center;">
      <img src="logo.svg" alt="Logo">
    </div>
    
    <!-- Right: Other navigation -->
    <div style="text-align: right;">
      <!-- Additional nav items -->
    </div>
  </div>
</header>
```

### Common Dark Mode Issues & Solutions

| Issue | Solution |
|-------|----------|
| Flash of light mode on page load | Add flicker prevention script BEFORE stylesheets |
| Purple visited links | Define explicit link colors with CSS variables |
| Components not updating | Ensure JS preserves existing CSS classes when initializing |
| Inconsistent colors across pages | Use ONLY CSS variables, never hardcode colors |
| Images too bright in dark mode | Use CSS filters: `.dark img { filter: brightness(0.8); }` |
| Menu items showing wrong colors | Use specific selectors or exclude menu items from global link styles |

### CSS Specificity: Menu Components with Links

**Problem**: When using `<a>` tags inside menu components, global link styles can override PM7 component styles, causing menu items to appear with incorrect colors (e.g., blue text in dark mode).

**Cause**: CSS specificity - global `a` tag styles have higher specificity than PM7's `.pm7-menu-item` class when applied to the same element.

**Example of the Problem**:
```css
/* Global styles that cause issues */
a {
  color: #0066cc;  /* This overrides menu item colors */
}

.dark a {
  color: #66b3ff;  /* This makes menu items blue in dark mode */
}
```

```html
<!-- Menu items showing wrong colors -->
<div class="pm7-menu" data-pm7-menu>
  <button class="pm7-menu-trigger">Menu</button>
  <div class="pm7-menu-content">
    <a href="/home" class="pm7-menu-item">Home</a>  <!-- Shows blue instead of menu colors -->
    <a href="/about" class="pm7-menu-item">About</a>
  </div>
</div>
```

**Solutions**:

1. **Exclude menu items from global link styles** (Recommended):
```css
/* Global link styles that exclude PM7 components */
a:not(.pm7-menu-item):not(.pm7-button) {
  color: var(--pm7-primary);
  text-decoration: underline;
}

.dark a:not(.pm7-menu-item):not(.pm7-button) {
  color: var(--pm7-primary);
}
```

2. **Use more specific selectors for menu items**:
```css
/* Override with higher specificity */
.pm7-menu-content a.pm7-menu-item {
  color: var(--pm7-foreground);
  text-decoration: none;
}

.pm7-menu-content a.pm7-menu-item:hover {
  background-color: var(--pm7-accent);
  color: var(--pm7-accent-foreground);
}
```

3. **Use buttons instead of links when possible**:
```html
<!-- Better approach for menu actions -->
<div class="pm7-menu" data-pm7-menu>
  <button class="pm7-menu-trigger">Menu</button>
  <div class="pm7-menu-content">
    <button class="pm7-menu-item" onclick="window.location.href='/home'">Home</button>
    <button class="pm7-menu-item" onclick="window.location.href='/about'">About</button>
  </div>
</div>
```

**Best Practices**:
- Test all components with `<a>` tags to catch specificity conflicts
- Use CSS variables for all colors to ensure consistency
- Consider component context when writing global styles
- Document any custom overrides needed for your application

## CSS Classes Reference

### Buttons
```html
<button class="pm7-button pm7-button--primary">Primary</button>
<button class="pm7-button pm7-button--secondary">Secondary</button>
<button class="pm7-button pm7-button--ghost">Ghost</button>
<button class="pm7-button pm7-button--outline">Outline</button>
<button class="pm7-button pm7-button--destructive">Destructive</button>

<!-- Sizes -->
<button class="pm7-button pm7-button--sm">Small</button>
<button class="pm7-button pm7-button--lg">Large</button>

<!-- States -->
<button class="pm7-button" disabled>Disabled</button>
<button class="pm7-button pm7-button--loading">Loading</button>

<!-- Full width -->
<button class="pm7-button pm7-button--full">Full Width</button>
```

### Cards
```html
<div class="pm7-card">
  <div class="pm7-card-header">Header</div>
  <div class="pm7-card-body">Content</div>
  <div class="pm7-card-footer">Footer</div>
</div>

<!-- Variants -->
<div class="pm7-card pm7-card--elevated">Elevated</div>
<div class="pm7-card pm7-card--ghost">Ghost</div>
```

### Inputs
```html
<input class="pm7-input" type="text" placeholder="Default">

<!-- Sizes -->
<input class="pm7-input pm7-input--sm" type="text">
<input class="pm7-input pm7-input--lg" type="text">

<!-- States -->
<input class="pm7-input pm7-input--error" type="text">
<input class="pm7-input" disabled type="text">
```

### Other Components
- `.pm7-menu`, `.pm7-menu-trigger`, `.pm7-menu-content`, `.pm7-menu-item`
- `.pm7-dialog`, `.pm7-dialog-overlay`, `.pm7-dialog-content`
- `.pm7-toast`, `.pm7-toast-container`
- `.pm7-tooltip`
- `.pm7-tab-selector`, `.pm7-tab-button`
- `.pm7-accordion`, `.pm7-accordion-item`, `.pm7-accordion-trigger`, `.pm7-accordion-content`
- `.pm7-badge`, `.pm7-badge--primary`, `.pm7-badge--secondary`
- `.pm7-theme-switch`, `.pm7-theme-switch--sm`, `.pm7-theme-switch--lg`

## JavaScript API

### Initialization

```javascript
// Auto-initialization (recommended)
import '@pm7/core';

// Or import specific components
import { PM7Menu, PM7Dialog, PM7Toast, PM7Accordion, PM7TabSelector } from '@pm7/core';

// Manual initialization
const element = document.querySelector('.pm7-menu');
const menu = new PM7Menu(element);

// Access component instance
menu.open();
menu.close();
```

### Event Handling

```javascript
// Menu events
const menuElement = document.querySelector('.pm7-menu');
const menu = new PM7Menu(menuElement);

// Access instance methods
menu.open();
menu.close();

// Event handling
menuElement.addEventListener('pm7-menu-select', (e) => {
  console.log('Selected:', e.detail.item);
});

// Dialog events  
const dialog = document.querySelector('.pm7-dialog');
dialog.addEventListener('pm7-dialog-open', () => {
  console.log('Dialog opened');
});
dialog.addEventListener('pm7-dialog-close', () => {
  console.log('Dialog closed');
});

// Toast notifications
import { showToast } from '@pm7/core';
showToast('Success!', { type: 'success', duration: 3000 });
```

### Component Usage Pattern

All components follow the same simple initialization pattern.

```javascript
// Standard pattern for all components
const element = document.querySelector('[data-pm7-tab-selector]');
const tabs = new PM7TabSelector(element);
tabs.selectTabById('settings');
```

#### Examples for All Components:

```javascript
// Tab Selector
const tabElement = document.querySelector('[data-pm7-tab-selector]');
const tabs = new PM7TabSelector(tabElement);
tabs.selectTabById('tab-2');
tabs.getActiveIndex();

// Menu
const menuElement = document.querySelector('[data-pm7-menu]');
const menu = new PM7Menu(menuElement);
menu.open();
menu.close();

// Dialog
const dialogElement = document.querySelector('[data-pm7-dialog]');
const dialog = new PM7Dialog(dialogElement);
dialog.open();
dialog.close();

// Accordion
const accordionElement = document.querySelector('[data-pm7-accordion]');
const accordion = new PM7Accordion(accordionElement);
accordion.openAll();
accordion.closeAll();

// Tooltip
const tooltipElement = document.querySelector('[data-pm7-tooltip]');
const tooltip = new PM7Tooltip(tooltipElement);
tooltip.show();
tooltip.hide();

// Theme Switch
const themeSwitchElement = document.querySelector('[data-pm7-theme-switch]');
const themeSwitch = new PM7ThemeSwitch(themeSwitchElement);
themeSwitch.setTheme('dark');
themeSwitch.toggleTheme();
```

#### TypeScript Support:

```typescript
// Type-safe component usage
const element = document.querySelector('[data-pm7-menu]') as HTMLElement;
const menu = new PM7Menu(element);
menu.open(); // Full IntelliSense support

// Handle nullable elements
const menuElement = document.querySelector('[data-pm7-menu]');
if (menuElement) {
  const menu = new PM7Menu(menuElement as HTMLElement);
  menu.open();
}
```

#### React Example:

```jsx
import { useEffect, useRef } from 'react';
import { PM7Menu } from '@pm7/core';

function MyComponent() {
  const menuRef = useRef(null);
  const menuInstanceRef = useRef(null);
  
  useEffect(() => {
    if (menuRef.current && !menuInstanceRef.current) {
      menuInstanceRef.current = new PM7Menu(menuRef.current);
    }
  }, []);
  
  const handleOpenMenu = () => {
    menuInstanceRef.current?.open();
  };
  
  return (
    <div>
      <button onClick={handleOpenMenu}>Open Menu</button>
      <div ref={menuRef} className="pm7-menu" data-pm7-menu>
        <button className="pm7-menu-trigger">Menu</button>
        <div className="pm7-menu-content">
          <button className="pm7-menu-item">Option 1</button>
        </div>
      </div>
    </div>
  );
}
```

## Component Documentation Links

For detailed documentation on specific components:

- **[Accordion](https://raw.githubusercontent.com/patrickmast/pm7-ui/main/packages/core/src/components/accordion/README.md)**
- **[Button](https://raw.githubusercontent.com/patrickmast/pm7-ui/main/packages/core/src/components/button/README.md)**
- **[Card](https://raw.githubusercontent.com/patrickmast/pm7-ui/main/packages/core/src/components/card/README.md)**
- **[Dialog](https://raw.githubusercontent.com/patrickmast/pm7-ui/main/packages/core/src/components/dialog/README.md)**
- **[Input](https://raw.githubusercontent.com/patrickmast/pm7-ui/main/packages/core/src/components/input/README.md)**
- **[Menu](https://raw.githubusercontent.com/patrickmast/pm7-ui/main/packages/core/src/components/menu/README.md)**
- **[Tab Selector](https://raw.githubusercontent.com/patrickmast/pm7-ui/main/packages/core/src/components/tab-selector/README.md)**
- **[Theme Switch](https://raw.githubusercontent.com/patrickmast/pm7-ui/main/packages/core/src/components/theme-switch/README.md)**
- **[Toast](https://raw.githubusercontent.com/patrickmast/pm7-ui/main/packages/core/src/components/toast/README.md)**
- **[Tooltip](https://raw.githubusercontent.com/patrickmast/pm7-ui/main/packages/core/src/components/tooltip/README.md)**

## Technical Details

### Compatibility
Works in all modern browsers. Internet Explorer not supported.

### TypeScript Support
Full TypeScript declarations for all components and utilities.

```typescript
// Type-safe component usage
const tabElement = document.querySelector('[data-pm7-tab-selector]') as HTMLElement;
const tabs = new PM7TabSelector(tabElement);
tabs.selectTabById('settings');

// Full IntelliSense and type checking
const menuElement = document.querySelector('[data-pm7-menu]') as HTMLElement;
const menu = new PM7Menu(menuElement);
menu.open();
```

### SSR Support
Works with Next.js, Nuxt, SvelteKit:

```javascript
// Next.js (_app.js)
import '@pm7/core/dist/pm7.css';

// Nuxt (nuxt.config.js)
css: ['@pm7/core/dist/pm7.css']

// SvelteKit (app.html)
<link rel="stylesheet" href="/node_modules/@pm7/core/dist/pm7.css">
```

## Important Notes

1. **Always use CSS variables** - Never hardcode colors like `white` or `#000`
2. **One package for everything** - No separate React/Vue packages needed
3. **Import CSS once** - At the top level of your application
4. **Components auto-initialize** - Interactive components work automatically and attach to DOM elements
5. **Framework agnostic** - Same classes work everywhere
6. **TypeScript Support** - Full type definitions for all components

## Quick Attribute Reference

### AI-Agent FIRST Design
All interactive components automatically add their required CSS classes when initialized:
- `data-pm7-accordion` automatically adds `.pm7-accordion` class
- `data-pm7-dialog` automatically adds `.pm7-dialog` class  
- `data-pm7-menu` automatically adds `.pm7-menu` class
- `data-pm7-tab-selector` automatically adds `.pm7-tab-selector` class
- `data-pm7-tooltip` automatically adds `.pm7-tooltip` class
- `data-pm7-theme-switch` automatically adds `.pm7-theme-switch` class

**Result**: ONE attribute = fully working component!

### Component Attributes

#### Accordion
| Attribute | Description | Values |
|-----------|-------------|---------|
| `data-pm7-accordion` | Auto-initialize accordion | - |
| `data-allow-multiple` | Allow multiple open items | `true`, `false` |
| `data-default-open` | Default open item | number, `all` |
| `data-icon-position` | Icon position | `start`, `end` |
| `data-text-align` | Text alignment | `left`, `center`, `right` |

#### Menu  
| Attribute | Description | Values |
|-----------|-------------|---------|
| `data-pm7-menu` | Auto-initialize menu | - |
| `data-position` | Menu position | `bottom-start`, `bottom-end`, etc. |
| `data-checked` | Checkable item state | `true`, `false` |
| `data-submenu-open` | Submenu state | `true`, `false` |

#### Dialog
| Attribute | Description | Values |
|-----------|-------------|---------|
| `data-pm7-dialog` | Dialog identifier | string |
| `data-pm7-dialog-size` | Dialog size | `sm`, `md`, `lg`, `xl`, `full` |
| `data-pm7-dialog-icon` | Icon type | `info`, `warning`, `error`, `success` |
| `data-pm7-show-close` | Shows close button | - |
| `data-pm7-no-escape` | Prevent ESC close | - |
| `data-pm7-no-overlay-close` | Prevent overlay close | - |

#### Tab Selector
| Attribute | Description | Values |
|-----------|-------------|---------|
| `data-pm7-tab-selector` | Auto-initialize tabs | - |
| `data-state` | Tab state | `active`, `inactive` |

#### Theme Switch
| Attribute | Description | Values |
|-----------|-------------|---------|
| `data-pm7-theme-switch` | Auto-initialize theme switch | - |
| `data-theme` | Current theme | `light`, `dark` |

#### Tooltip
| Attribute | Description | Values |
|-----------|-------------|---------|
| `data-pm7-tooltip` | Tooltip content | string |
| `data-side` | Preferred side | `top`, `right`, `bottom`, `left` |
| `data-align` | Alignment | `start`, `center`, `end` |
| `data-delay` | Show delay (ms) | number |

### Global JavaScript Functions
```javascript
// Dialog functions (available on window)
openDialog('dialog-id')
closeDialog('dialog-id')
pm7Alert('Message', { title: 'Alert' })
pm7Confirm('Are you sure?', { title: 'Confirm' })

// Manual component initialization
new PM7Accordion(element)
new PM7Menu(element)
new PM7Dialog(element)
new PM7TabSelector(element)
new PM7ThemeSwitch(element)
new PM7Tooltip(element)
```

## Important Development Guidelines

### Testing Components in Isolation
**CRITICAL**: Always test components without documentation-specific CSS to ensure they work correctly for end users.

1. **NEVER** add component functionality only in `docs.css` or documentation-specific files
2. **ALWAYS** test components in isolation (without docs.css loaded)
3. **ENSURE** that what works in the documentation site also works in production

#### Why This Matters
We discovered that checkbox/radio hover states worked in our documentation but not in production because the styling was only in docs.css. This creates a poor developer experience where components behave differently than documented.

#### How to Test
- Create test pages that only load core PM7 CSS (like our demo pages)
- Verify all visual states (normal, hover, active, disabled) work correctly
- If something only works with docs.css loaded, it needs to be moved to the core component CSS

## Development Setup Issues & Solutions

### CSS @import Not Working in Vite (Missing Shadows/Styles)

**Problem**: When using Vite for development, CSS variables defined in imported files (like shadows, colors) may not load, causing missing styles (e.g., no shadow on menu dropdowns).

**Symptoms**:
- Styles work in production build but not in development
- CSS variables return empty values
- Components appear without shadows, proper colors, or borders

**Root Cause**: Vite doesn't process CSS `@import` statements by default during development.

**Solution**: Configure Vite to use postcss-import:

```javascript
// vite.config.js
import { defineConfig } from 'vite';

export default defineConfig({
  css: {
    postcss: {
      plugins: [
        require('postcss-import')()
      ]
    }
  },
  // ... rest of config
});
```

**Installation**:
```bash
npm install -D postcss-import
```

**Note**: This is only needed for development. Production builds using PostCSS work correctly by default.

### CSS Variable Dependencies

**Problem**: When refactoring hardcoded CSS values to use CSS variables, missing variable definitions cause styles to fail silently.

**Example Case**: Menu hover shadows stopped working after changing from hardcoded values to `var(--pm7-menu-hover-shadow)` without defining the variable.

**Prevention**:
1. **Always define variables before using them** - When converting hardcoded values to CSS variables, immediately add the variable definition
2. **Check all variable references** - Use grep to ensure all CSS variables used in components are defined:
   ```bash
   # Find all CSS variable usage
   grep -r "var(--pm7-" packages/core/src/styles/components/
   
   # Check if a specific variable is defined
   grep -r "--pm7-menu-hover-shadow:" packages/core/src/styles/
   ```
3. **Test after refactoring** - Always verify styles still work after converting to CSS variables
4. **Document new variables** - Add comments explaining what component-specific variables are for

**Common Pattern for Adding CSS Variables**:
```css
/* In tokens/shadows.css */
:root {
  /* Component-specific shadow variants */
  --pm7-menu-shadow: var(--pm7-shadow-lg);
  --pm7-menu-hover-shadow: rgba(0, 0, 0, 0.08) 0px 5px 15px 0px, rgba(25, 28, 33, 0.2) 0px 15px 35px -5px;
}

.dark {
  /* Dark mode overrides */
  --pm7-menu-hover-shadow: rgba(255, 255, 255, 0.05) 0px 5px 15px 0px, rgba(255, 255, 255, 0.1) 0px 15px 35px -5px;
}
```

**Key Takeaway**: CSS fails silently when variables are undefined - the browser simply ignores the property. Always verify variable definitions when refactoring.

## Complete Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>pm7-ui Example</title>
  
  <!-- Dark mode flicker prevention -->
  <script>
    (function() {
      const savedTheme = localStorage.getItem('pm7-theme');
      if (savedTheme === 'dark' || (!savedTheme && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
      }
    })();
  </script>
  
  <link rel="stylesheet" href="https://unpkg.com/@pm7/core@3/dist/pm7.css">
</head>
<body>
  <div style="max-width: 1200px; margin: 0 auto; padding: 2rem;">
    <!-- Header -->
    <header style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 2rem;">
      <h1>My App</h1>
      
      <!-- Theme Switch -->
      <div class="pm7-theme-switch pm7-theme-switch--sm" data-pm7-theme-switch></div>
      
      <!-- Menu -->
      <div class="pm7-menu" data-pm7-menu>
        <button class="pm7-menu-trigger">Menu</button>
        <div class="pm7-menu-content">
          <button class="pm7-menu-item">Home</button>
          <button class="pm7-menu-item">About</button>
          <button class="pm7-menu-item">Contact</button>
        </div>
      </div>
    </header>
    
    <!-- Content -->
    <div class="pm7-card">
      <div class="pm7-card-header">
        <h2>Welcome</h2>
      </div>
      <div class="pm7-card-body">
        <p>This is a complete pm7-ui example.</p>
        <button class="pm7-button pm7-button--primary">Get Started</button>
      </div>
    </div>
  </div>
  
  <script src="https://unpkg.com/@pm7/core@3"></script>
</body>
</html>
```