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

# Component: Sidebar

Navigation panel component with static and interactive modes.

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
      initSidebars?: () => void;
      Sidebar?: new (element: Element) => any;
    }
  }
}
```

## Required Structure

### Static Sidebar (No JavaScript)
```html
<aside class="pm7-sidebar">
  <div class="pm7-sidebar-content">
    <nav class="pm7-sidebar-nav">
      <a href="#" class="pm7-sidebar-item">Link</a>
    </nav>
  </div>
</aside>
```

### Interactive Sidebar (JavaScript Required)
```html
<aside class="pm7-sidebar" data-pm7-sidebar id="sidebar-1">
  <div class="pm7-sidebar-header">
    <h3 class="pm7-sidebar-title">Title</h3>
    <button class="pm7-sidebar-close">×</button>
  </div>
  <div class="pm7-sidebar-content">
    <nav class="pm7-sidebar-nav">
      <a href="#" class="pm7-sidebar-item">Link</a>
    </nav>
  </div>
</aside>
```

## Attributes

| Attribute | Values | Effect |
|-----------|---------|---------|
| `data-pm7-sidebar` | presence | Makes sidebar interactive (hidden by default) |
| `data-pm7-sidebar-trigger` | sidebar ID | Opens specific sidebar |
| `data-state` | `open`, `closed` | Current sidebar state |

## CSS Classes

| Class | Required | Usage |
|-------|----------|-------|
| `.pm7-sidebar` | YES | Base container |
| `.pm7-sidebar-static` | NO | Always visible sidebar |
| `.pm7-sidebar-header` | NO | Header section |
| `.pm7-sidebar-title` | NO | Header title |
| `.pm7-sidebar-close` | NO | Close button |
| `.pm7-sidebar-content` | NO | Content wrapper |
| `.pm7-sidebar-nav` | NO | Navigation container |
| `.pm7-sidebar-item` | NO | Navigation item |
| `.pm7-sidebar-item--active` | NO | Active navigation item |
| `.pm7-sidebar-section` | NO | Content section |
| `.pm7-sidebar-section-title` | NO | Section title |
| `.pm7-sidebar--right` | NO | Right-aligned sidebar |
| `.pm7-sidebar--push` | NO | Push content instead of overlay |
| `.pm7-sidebar--mini` | NO | Collapsed sidebar with icons |

## Patterns

### Pattern: Static Documentation Sidebar
```html
<aside class="pm7-sidebar pm7-sidebar-static">
  <div class="pm7-sidebar-content">
    <div class="pm7-sidebar-section">
      <h3 class="pm7-sidebar-section-title">Documentation</h3>
      <nav class="pm7-sidebar-nav">
        <a href="/docs" class="pm7-sidebar-item pm7-sidebar-item--active">
          Getting Started
        </a>
        <a href="/docs/api" class="pm7-sidebar-item">
          API Reference
        </a>
      </nav>
    </div>
  </div>
</aside>
```

### Pattern: Interactive Mobile Menu
```html
<!-- Trigger -->
<button data-pm7-sidebar-trigger="mobile-menu">Menu</button>

<!-- Sidebar -->
<aside class="pm7-sidebar" data-pm7-sidebar id="mobile-menu">
  <div class="pm7-sidebar-header">
    <h3 class="pm7-sidebar-title">Menu</h3>
    <button class="pm7-sidebar-close">×</button>
  </div>
  <div class="pm7-sidebar-content">
    <nav class="pm7-sidebar-nav">
      <a href="#" class="pm7-sidebar-item">Home</a>
      <a href="#" class="pm7-sidebar-item">About</a>
    </nav>
  </div>
</aside>
```

### Pattern: With Icons
```html
<aside class="pm7-sidebar" data-pm7-sidebar>
  <div class="pm7-sidebar-content">
    <nav class="pm7-sidebar-nav">
      <a href="#" class="pm7-sidebar-item">
        <svg class="pm7-sidebar-item-icon" width="20" height="20">...</svg>
        <span class="pm7-sidebar-item-text">Dashboard</span>
      </a>
    </nav>
  </div>
</aside>
```

### Pattern: Mini Sidebar
```html
<aside class="pm7-sidebar pm7-sidebar--mini" data-pm7-sidebar>
  <div class="pm7-sidebar-content">
    <nav class="pm7-sidebar-nav">
      <a href="#" class="pm7-sidebar-item" title="Dashboard">
        <svg class="pm7-sidebar-item-icon" width="20" height="20">...</svg>
      </a>
    </nav>
  </div>
</aside>
```

### Pattern: JavaScript Control
```javascript
// Manual initialization
const sidebar = document.querySelector('[data-pm7-sidebar]');
const instance = new PM7.Sidebar(sidebar);

// Methods
instance.open();
instance.close();
instance.toggle();

// Check state
const isOpen = sidebar.getAttribute('data-state') === 'open';

// Events
sidebar.addEventListener('pm7-sidebar-open', (e) => {
  // e.detail = { sidebar: HTMLElement }
});

sidebar.addEventListener('pm7-sidebar-close', (e) => {
  // e.detail = { sidebar: HTMLElement }
});
```

### Pattern: Dynamic Sidebar Addition
WHEN: Adding interactive sidebar after page load
```javascript
// Add sidebar HTML
document.body.insertAdjacentHTML('beforeend', `
  <aside class="pm7-sidebar pm7-sidebar--right" data-pm7-sidebar>
    <button class="pm7-sidebar-toggle" aria-label="Toggle sidebar">
      <svg>...</svg>
    </button>
    <div class="pm7-sidebar-content">
      <h2>Dynamic Sidebar</h2>
    </div>
  </aside>
`);

// MUST initialize PM7 components
window.PM7.init();
```

### Pattern: Next.js Implementation
```jsx
'use client'

export default function Layout({ children }) {
  return (
    <>
      <aside className="pm7-sidebar pm7-sidebar-static">
        <div className="pm7-sidebar-content">
          <nav className="pm7-sidebar-nav">
            <Link href="/" className="pm7-sidebar-item">
              Home
            </Link>
          </nav>
        </div>
      </aside>
      <main>{children}</main>
    </>
  );
}
```

### Pattern: Layout Integration
```html
<!-- Documentation Layout -->
<div class="pm7-docs-layout">
  <aside class="pm7-sidebar pm7-sidebar-static">
    <!-- sidebar content -->
  </aside>
  <main class="pm7-docs-content">
    <!-- main content -->
  </main>
</div>
```

## JavaScript API

### Initialization

IF static sidebar THEN no JavaScript needed
IF interactive sidebar in DOM at page load THEN auto-initialized
IF interactive sidebar added dynamically THEN MUST call `window.PM7.init()`
IF React component THEN MUST call `window.PM7.initFramework()` in useEffect (v2.7.0+)
IF Vue component THEN MUST call `window.PM7.initFramework()` in onMounted (v2.7.0+)
IF manual control THEN `new PM7.Sidebar(element)`

### Self-Healing (v2.6.0+)

Sidebar components automatically detect and recover from framework re-renders:

```javascript
// React - Components self-heal automatically
useEffect(() => {
  PM7.initFramework(); // Includes automatic healing
}, []);

// Manual healing if needed
PM7.healSidebars(); // Heal only sidebars
PM7.heal();         // Heal all components
```

#### How Self-Healing Works:
1. Component detects it was re-rendered by framework
2. Open/closed state is preserved
3. Collapsible section states are maintained
4. Event listeners are cleaned up and re-attached
5. No manual re-initialization needed

#### When Self-Healing Activates:
- React re-renders component tree
- Vue updates virtual DOM
- Angular change detection cycles
- Any framework that replaces DOM elements

### Methods

| Method | Parameters | Returns | Usage |
|--------|------------|---------|--------|
| `open()` | none | void | `sidebar.open()` |
| `close()` | none | void | `sidebar.close()` |
| `toggle()` | none | void | `sidebar.toggle()` |
| `destroy()` | none | void | `sidebar.destroy()` |

### Events

| Event | When Fired | Detail |
|-------|------------|---------|
| `pm7-sidebar-open` | On open | `{ sidebar: HTMLElement }` |
| `pm7-sidebar-close` | On close | `{ sidebar: HTMLElement }` |

## Anti-Patterns

### Anti-Pattern: Wrong Structure
```html
<!-- NEVER -->
<div class="sidebar">
  <nav>Links</nav>
</div>

<!-- ALWAYS -->
<aside class="pm7-sidebar">
  <div class="pm7-sidebar-content">
    <nav class="pm7-sidebar-nav">Links</nav>
  </div>
</aside>
```

### Anti-Pattern: Direct Method Calls
```javascript
// NEVER
window.PM7.initSidebars();

// ALWAYS
if (window.PM7?.initSidebars) {
  window.PM7.initSidebars();
}
```

### Anti-Pattern: Inline Styles for Layout
```html
<!-- NEVER -->
<aside class="pm7-sidebar" style="width: 280px; background: #f3f4f6;">

<!-- ALWAYS -->
<aside class="pm7-sidebar">
```

### Anti-Pattern: Missing Trigger Association
```html
<!-- NEVER -->
<button onclick="openSidebar()">Menu</button>

<!-- ALWAYS -->
<button data-pm7-sidebar-trigger="sidebar-id">Menu</button>
```

### Anti-Pattern: PM7 Layout Classes Not Documented
```html
<!-- NEVER - these don't exist in PM7 -->
<div class="pm7-layout pm7-layout-sidebar">

<!-- ALWAYS - use custom CSS for layouts -->
<div style="display: flex;">
  <aside class="pm7-sidebar">...</aside>
  <main style="flex: 1;">...</main>
</div>
```

### Anti-Pattern: Dynamic Interactive Sidebar Without Init
```javascript
// NEVER - toggle won't work
document.body.innerHTML += `<aside data-pm7-sidebar>...</aside>`;
// Sidebar toggle is not functional

// ALWAYS - initialize after adding
document.body.innerHTML += `<aside data-pm7-sidebar>...</aside>`;
window.PM7.init(); // REQUIRED for interactive features
// Toggle now works
```

## Rules

- ALWAYS: Use `<aside>` element for sidebars
- ALWAYS: Include `pm7-sidebar` class
- ALWAYS: Check PM7 exists before calling methods
- ALWAYS: Use `data-pm7-sidebar-trigger` for trigger buttons
- ALWAYS: Call `window.PM7.init()` after adding interactive sidebars dynamically
- NEVER: Use role attributes (auto-applied)
- NEVER: Apply manual transform or visibility styles
- NEVER: Nest interactive sidebars
- NEVER: Initialize sidebars multiple times
- NEVER: Expect toggle functionality without PM7.init() for dynamic content

## CSS Variables

| Variable | Default Light | Default Dark | Usage |
|----------|---------------|--------------|--------|
| `--pm7-sidebar-width` | `280px` | `280px` | Sidebar width |
| `--pm7-sidebar-bg` | `#f3f4f6` | `#1E1E1E` | Background color |
| `--pm7-sidebar-item-hover` | `#ffffff` | `var(--pm7-surface-hover)` | Item hover background |
| `--pm7-sidebar-active` | `var(--pm7-primary)` | `#2a2a2a` | Active item background |

## State Management

IF `data-pm7-sidebar` THEN hidden by default with `transform: translateX(-100%)`
IF `data-state="open"` THEN visible with `transform: translateX(0)`
IF static sidebar THEN always visible, no transform

## Keyboard Navigation

- Escape: Close sidebar
- Tab: Navigate through sidebar items
- Enter/Space: Activate focused item

## Accessibility

- Focus trap when open
- ARIA attributes auto-applied
- Keyboard navigation enabled
- Screen reader announcements

## Framework Usage

### React
```jsx
'use client'

<aside className="pm7-sidebar" data-pm7-sidebar id="react-sidebar">
  <div className="pm7-sidebar-content">
    <nav className="pm7-sidebar-nav">
      <Link href="/" className="pm7-sidebar-item">Home</Link>
    </nav>
  </div>
</aside>
```

### Vue
```vue
<template>
  <aside class="pm7-sidebar" data-pm7-sidebar id="vue-sidebar">
    <div class="pm7-sidebar-content">
      <nav class="pm7-sidebar-nav">
        <router-link to="/" class="pm7-sidebar-item">Home</router-link>
      </nav>
    </div>
  </aside>
</template>
```

## Related Components

- Menu: For dropdown navigation
- Button: For trigger elements