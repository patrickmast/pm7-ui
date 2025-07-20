<!-- AI-ONLY DOCUMENTATION -->
---
type: ai-agent-documentation
audience: ai-coding-agents-only
style: exact-patterns
human-readable: false
documentation-rules:
  - NO storytelling or explanations
  - ONLY exact code patterns
  - Binary IF/THEN decisions
  - Explicit anti-patterns with NEVER/ALWAYS
  - Copy-paste ready code blocks
---

# Component: ThemeSwitch

Light/dark mode toggle switch component.

## Installation

```bash
npm install @pm7/core
```

### CSS Import

```javascript
// ES modules
import '@pm7/core/dist/pm7.css';

// HTML
<link rel="stylesheet" href="node_modules/@pm7/core/dist/pm7.css">
```

### JavaScript Setup

```javascript
// ES modules - adds PM7 to window
import '@pm7/core';

// Dynamic import (Next.js)
import('@pm7/core').then(() => {
  window.PM7.init();
});

// TypeScript declarations
declare global {
  interface Window {
    PM7: {
      init: () => void;
      initThemeSwitches?: () => void;
      ThemeSwitch?: new (element: Element, options?: any) => any;
    }
  }
}
```

## Required Structure

```html
<div data-pm7-theme-switch></div>
```

## Attributes

| Attribute | Values | Effect |
|-----------|---------|---------|
| `data-pm7-theme-switch` | presence | Auto-initializes component |
| `data-theme` | `light`, `dark` | Current theme (auto-managed) |
| `data-default-theme` | `light`, `dark` | Override default |
| `data-storage-key` | string | LocalStorage key |
| `data-apply-to-root` | `true`, `false` | Apply dark class to document |

## CSS Classes

| Class | Required | Usage |
|-------|----------|-------|
| `.pm7-theme-switch` | AUTO | Container (added by JS) |
| `.pm7-theme-switch--sm` | NO | Small size |
| `.pm7-theme-switch--lg` | NO | Large size |
| `.pm7-theme-switch--disabled` | NO | Disabled state |
| `.pm7-theme-switch--no-hover` | NO | No hover effects |
| `.pm7-theme-switch--label-start` | NO | Label before switch |
| `.pm7-theme-switch--fixed` | NO | Fixed position with label |
| `.pm7-theme-switch--fixed-icon` | NO | Fixed icon button |
| `.pm7-theme-switch-button` | AUTO | Toggle button |
| `.pm7-theme-switch-thumb` | AUTO | Moving thumb |
| `.pm7-theme-switch-icon` | AUTO | Icon container |

## Patterns

### Pattern: Basic Theme Switch
```html
<div data-pm7-theme-switch></div>
```

### Pattern: With Label
```html
<div data-pm7-theme-switch>
  <span>Theme</span>
</div>
```

### Pattern: Small Size
```html
<div data-pm7-theme-switch class="pm7-theme-switch--sm">
  <span>Dark mode</span>
</div>
```

### Pattern: Large Size
```html
<div data-pm7-theme-switch class="pm7-theme-switch--lg">
  <span>Theme</span>
</div>
```

### Pattern: Label Start
```html
<div data-pm7-theme-switch class="pm7-theme-switch--label-start">
  <span>Dark mode</span>
</div>
```

### Pattern: Fixed Position Icon
```html
<div class="pm7-theme-switch--fixed-icon" data-pm7-theme-switch></div>
```

### Pattern: Fixed Position with Label
```html
<div class="pm7-theme-switch--fixed" data-pm7-theme-switch>
  <span>Theme</span>
</div>
```

### Pattern: Custom Storage Key
```html
<div data-pm7-theme-switch data-storage-key="my-app-theme"></div>
```

### Pattern: Without Root Class
```html
<div data-pm7-theme-switch data-apply-to-root="false"></div>
```

### Pattern: Force Default Theme
```html
<div data-pm7-theme-switch data-default-theme="dark"></div>
```

### Pattern: Dark Mode Flicker Prevention
```html
<head>
  <!-- MUST be BEFORE any stylesheets -->
  <script>
    (function() {
      const savedTheme = localStorage.getItem('pm7-theme');
      if (savedTheme === 'dark' || (!savedTheme && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
      }
    })();
  </script>
  
  <!-- Stylesheets AFTER script -->
  <link rel="stylesheet" href="@pm7/core/dist/pm7.css">
</head>
```

### Pattern: JavaScript Control
```javascript
// Manual initialization
const element = document.querySelector('.my-theme-switch');
const themeSwitch = new PM7.ThemeSwitch(element, {
  defaultTheme: 'dark',
  storageKey: 'my-app-theme',
  applyToRoot: true,
  onChange: (theme) => {
    // theme = 'light' or 'dark'
  }
});

// Methods
themeSwitch.setTheme('dark');
themeSwitch.toggle();
const theme = themeSwitch.getTheme(); // 'light' or 'dark'
```

### Pattern: Next.js Implementation
```jsx
'use client'

import { useEffect } from 'react'

export default function ThemeToggle() {
  useEffect(() => {
    import('@pm7/core').then(() => {
      if (window.PM7?.initThemeSwitches) {
        window.PM7.initThemeSwitches();
      }
    });
  }, []);

  return (
    <div data-pm7-theme-switch>
      <span>Theme</span>
    </div>
  );
}
```

### Pattern: Header with Theme Switch
```html
<header>
  <div style="display: grid; grid-template-columns: 1fr auto 1fr; align-items: center;">
    <div style="display: flex; align-items: center; gap: 1rem;">
      <button class="pm7-menu-trigger" aria-label="Toggle menu">
        <svg width="24" height="24">...</svg>
      </button>
      <div data-pm7-theme-switch class="pm7-theme-switch--sm"></div>
    </div>
    <div style="text-align: center;">
      <img src="logo.svg" alt="Logo" height="32">
    </div>
    <div style="text-align: right;">
      <a href="/login">Login</a>
    </div>
  </div>
</header>
```

### Pattern: Settings Panel
```html
<div class="settings-panel">
  <h3>Appearance</h3>
  <div class="setting-item">
    <label>Theme</label>
    <div data-pm7-theme-switch>
      <span>Dark mode</span>
    </div>
  </div>
</div>
```

### Pattern: Dynamic Theme Switch Addition
WHEN: Adding theme switch after page load
```javascript
// Add theme switch HTML
document.getElementById('container').innerHTML = `
  <div data-pm7-theme-switch>
    <span>Dark mode</span>
  </div>
`;

// MUST initialize PM7 components
window.PM7.init();
```

## JavaScript API

### Initialization

IF theme-switch in DOM at page load THEN auto-initialized
IF theme-switch added dynamically THEN MUST call `window.PM7.init()`
IF manual init THEN `new PM7.ThemeSwitch(element, options)`
IF Next.js THEN dynamic import with optional chaining

### Options

| Option | Type | Default | Effect |
|--------|------|---------|--------|
| `defaultTheme` | `light`, `dark`, `null` | `null` | Initial theme |
| `storageKey` | string | `pm7-theme` | LocalStorage key |
| `applyToRoot` | boolean | `true` | Apply dark class |
| `onChange` | function | `null` | Change callback |

### Methods

| Method | Parameters | Returns | Usage |
|--------|------------|---------|-------|
| `setTheme()` | theme: string | void | `themeSwitch.setTheme('dark')` |
| `getTheme()` | none | string | `themeSwitch.getTheme()` |
| `toggle()` | none | void | `themeSwitch.toggle()` |

## Anti-Patterns

### Anti-Pattern: Wrong Element Type
```html
<!-- NEVER -->
<button data-pm7-theme-switch>Theme</button>

<!-- ALWAYS -->
<div data-pm7-theme-switch>
  <span>Theme</span>
</div>
```

### Anti-Pattern: Manual Button Creation
```html
<!-- NEVER -->
<div data-pm7-theme-switch>
  <button class="pm7-theme-switch-button">
    <div class="pm7-theme-switch-thumb"></div>
  </button>
</div>

<!-- ALWAYS -->
<div data-pm7-theme-switch></div>
```

### Anti-Pattern: Multiple Initializations
```javascript
// NEVER
const switch1 = new PM7.ThemeSwitch(element);
const switch2 = new PM7.ThemeSwitch(element);

// ALWAYS
const themeSwitch = new PM7.ThemeSwitch(element);
```

### Anti-Pattern: Direct Method Calls
```javascript
// NEVER
window.PM7.initThemeSwitches();

// ALWAYS
if (window.PM7?.initThemeSwitches) {
  window.PM7.initThemeSwitches();
}
```

### Anti-Pattern: Flicker Script After Styles
```html
<!-- NEVER -->
<head>
  <link rel="stylesheet" href="styles.css">
  <script>/* flicker prevention */</script>
</head>

<!-- ALWAYS -->
<head>
  <script>/* flicker prevention */</script>
  <link rel="stylesheet" href="styles.css">
</head>
```

### Anti-Pattern: Dynamic Theme Switch Without Init
```javascript
// NEVER - theme switch won't work
document.body.innerHTML += `
  <div data-pm7-theme-switch>
    <span>Theme</span>
  </div>
`;
// Theme switch is not interactive

// ALWAYS - initialize after adding
document.body.innerHTML += `
  <div data-pm7-theme-switch>
    <span>Theme</span>
  </div>
`;
window.PM7.init(); // REQUIRED
// Theme switch now works
```

## Rules

- ALWAYS: Use `div` element for container
- ALWAYS: Place flicker prevention script BEFORE stylesheets
- ALWAYS: Check PM7 exists before calling methods
- ALWAYS: Use data attributes for configuration
- ALWAYS: Call window.PM7.init() after adding theme switches dynamically
- NEVER: Create button structure manually
- NEVER: Use button element as container
- NEVER: Initialize same element multiple times
- NEVER: Apply manual styles to internal elements
- NEVER: Expect theme switch to work without PM7.init() for dynamic content

## CSS Variables

| Variable | Default Light | Default Dark | Usage |
|----------|---------------|--------------|-------|
| `--pm7-theme-switch-bg` | `white` | `white` | Background |
| `--pm7-theme-switch-thumb-bg-light` | `#FFD43B` | `#FFD43B` | Light thumb |
| `--pm7-theme-switch-thumb-bg-dark` | `#6E6E6E` | `#6E6E6E` | Dark thumb |
| `--pm7-theme-switch-icon-light` | `black` | `black` | Light icon |
| `--pm7-theme-switch-icon-dark` | `white` | `white` | Dark icon |
| `--pm7-theme-switch-width` | `56px` | `56px` | Width |
| `--pm7-theme-switch-height` | `28px` | `28px` | Height |
| `--pm7-theme-switch-thumb-size` | `24px` | `24px` | Thumb size |

## Sizes

| Size | Width × Height | Thumb |
|------|----------------|-------|
| Small | `42px × 21px` | `18px` |
| Default | `56px × 28px` | `24px` |
| Large | `70px × 35px` | `30px` |

## Theme Detection Order

1. LocalStorage saved preference
2. System preference via `prefers-color-scheme`
3. Default to light mode

## Accessibility

- Role: `switch`
- ARIA: `aria-checked` reflects state
- ARIA: `aria-label` provides context
- Keyboard: Space/Enter toggles
- Focus: Visible focus indicator
- Motion: Respects `prefers-reduced-motion`

## Framework Usage

### React
```jsx
'use client'

<div data-pm7-theme-switch>
  <span>Theme</span>
</div>
```

### Vue
```vue
<template>
  <div data-pm7-theme-switch>
    <span>Theme</span>
  </div>
</template>
```

### Svelte
```svelte
<div data-pm7-theme-switch>
  <span>Theme</span>
</div>
```

## Related Components

- Button: Alternative toggle style
- Menu: Theme options in dropdown
- Settings: Common usage context