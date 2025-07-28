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

# Component: TabSelector

Component for tabbed content switching.

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
      initTabSelectors?: () => void;
      TabSelector?: new (element: Element) => any;
    }
  }
}
```

## Required Structure

```html
<div class="pm7-tab-selector" data-pm7-tab-selector>
  <div class="pm7-tab-list">
    <button class="pm7-tab-trigger" aria-controls="panel-1">Tab 1</button>
    <button class="pm7-tab-trigger" aria-controls="panel-2">Tab 2</button>
  </div>
  <div class="pm7-tab-content" id="panel-1">Content 1</div>
  <div class="pm7-tab-content" id="panel-2">Content 2</div>
</div>
```

## Attributes

| Attribute | Values | Effect |
|-----------|---------|---------|
| `data-pm7-tab-selector` | presence | Auto-initializes component |
| `data-state` | `active` | Marks active tab/panel |
| `aria-controls` | panel ID | Links trigger to panel (REQUIRED) |
| `disabled` | presence | Disables tab |

## CSS Classes

| Class | Required | Usage |
|-------|----------|-------|
| `.pm7-tab-selector` | YES | Base container |
| `.pm7-tab-list` | YES | Tab button container |
| `.pm7-tab-trigger` | YES | Individual tab button |
| `.pm7-tab-content` | YES | Tab panel content |
| `.pm7-tab-selector--solid` | NO | Solid background variant |
| `.pm7-tab-selector--pills` | NO | Pill-shaped variant |
| `.pm7-tab-selector--sm` | NO | Small size |
| `.pm7-tab-selector--lg` | NO | Large size |
| `.pm7-tab-selector--full-width` | NO | Full width tabs |
| `.pm7-tab-trigger-icon` | NO | Icon within tab |
| `.pm7-tab-trigger-badge` | NO | Badge within tab |

## Patterns

### Pattern: Basic Tabs
```html
<div class="pm7-tab-selector" data-pm7-tab-selector>
  <div class="pm7-tab-list">
    <button class="pm7-tab-trigger" aria-controls="tab-1" data-state="active">Tab 1</button>
    <button class="pm7-tab-trigger" aria-controls="tab-2">Tab 2</button>
  </div>
  <div class="pm7-tab-content" id="tab-1" data-state="active">Content 1</div>
  <div class="pm7-tab-content" id="tab-2">Content 2</div>
</div>
```

### Pattern: Solid Variant
```html
<div class="pm7-tab-selector pm7-tab-selector--solid" data-pm7-tab-selector>
  <div class="pm7-tab-list">
    <button class="pm7-tab-trigger" aria-controls="solid-1">Tab 1</button>
    <button class="pm7-tab-trigger" aria-controls="solid-2">Tab 2</button>
  </div>
  <div class="pm7-tab-content" id="solid-1">Content 1</div>
  <div class="pm7-tab-content" id="solid-2">Content 2</div>
</div>
```

### Pattern: With Icons
```html
<div class="pm7-tab-selector" data-pm7-tab-selector>
  <div class="pm7-tab-list">
    <button class="pm7-tab-trigger" aria-controls="icon-1">
      <svg class="pm7-tab-trigger-icon" width="16" height="16">...</svg>
      Dashboard
    </button>
  </div>
  <div class="pm7-tab-content" id="icon-1">Content</div>
</div>
```

### Pattern: With Badge
```html
<div class="pm7-tab-selector" data-pm7-tab-selector>
  <div class="pm7-tab-list">
    <button class="pm7-tab-trigger" aria-controls="badge-1">
      Messages
      <span class="pm7-tab-trigger-badge">3</span>
    </button>
  </div>
  <div class="pm7-tab-content" id="badge-1">Content</div>
</div>
```

### Pattern: Disabled Tab
```html
<div class="pm7-tab-selector" data-pm7-tab-selector>
  <div class="pm7-tab-list">
    <button class="pm7-tab-trigger" aria-controls="panel-1">Active</button>
    <button class="pm7-tab-trigger" aria-controls="panel-2" disabled>Disabled</button>
  </div>
  <div class="pm7-tab-content" id="panel-1">Content</div>
  <div class="pm7-tab-content" id="panel-2">Disabled content</div>
</div>
```

### Pattern: JavaScript Control
```javascript
// Manual initialization
const element = document.querySelector('.pm7-tab-selector');
const tabs = new PM7.TabSelector(element);

// Methods
tabs.selectTabByIndex(1);
tabs.selectTabById('panel-2');
const activeTab = tabs.getActiveTab();
const activeIndex = tabs.getActiveIndex();

// Events
element.addEventListener('pm7-tab-change', (e) => {
  // e.detail = { tab: HTMLElement, panel: HTMLElement, index: number }
});
```

### Pattern: Dynamic Tab Selector Addition
WHEN: Adding tab selector after page load
```javascript
// Add tab selector HTML
document.getElementById('container').innerHTML = `
  <div class="pm7-tab-selector" data-pm7-tab-selector>
    <div class="pm7-tab-list">
      <button class="pm7-tab-trigger" aria-controls="dyn-1">Tab 1</button>
      <button class="pm7-tab-trigger" aria-controls="dyn-2">Tab 2</button>
    </div>
    <div class="pm7-tab-content" id="dyn-1">Content 1</div>
    <div class="pm7-tab-content" id="dyn-2">Content 2</div>
  </div>
`;

// MUST initialize PM7 components
window.PM7.init();
```

### Pattern: Next.js Implementation
```jsx
'use client'

import { useEffect } from 'react'

export default function TabsPage() {
  useEffect(() => {
    import('@pm7/core').then(() => {
      if (window.PM7?.initTabSelectors) {
        window.PM7.initTabSelectors();
      }
    });
  }, []);

  return (
    <div className="pm7-tab-selector" data-pm7-tab-selector>
      <div className="pm7-tab-list">
        <button className="pm7-tab-trigger" aria-controls="next-1">Tab 1</button>
        <button className="pm7-tab-trigger" aria-controls="next-2">Tab 2</button>
      </div>
      <div className="pm7-tab-content" id="next-1">Content 1</div>
      <div className="pm7-tab-content" id="next-2">Content 2</div>
    </div>
  );
}
```

## JavaScript API

### Initialization

IF tab-selector in DOM at page load THEN auto-initialized
IF tab-selector added dynamically THEN MUST call `window.PM7.init()`
IF React component THEN MUST call `window.PM7.initFramework()` in useEffect (v2.7.0+)
IF Vue component THEN MUST call `window.PM7.initFramework()` in onMounted (v2.7.0+)
IF manual init THEN `new PM7.TabSelector(element)`
IF Next.js THEN dynamic import with optional chaining

### Self-Healing (v2.5.0+)

Tab Selector components automatically detect and recover from framework re-renders:

```javascript
// React - Components self-heal automatically
useEffect(() => {
  PM7.initFramework(); // Includes automatic healing
}, []);

// Manual healing if needed
PM7.healTabSelectors(); // Heal only tab selectors
PM7.heal();             // Heal all components
```

#### How Self-Healing Works:
1. Component detects it was re-rendered by framework
2. Active tab selection is preserved
3. Event listeners are cleaned up and re-attached
4. No manual re-initialization needed

#### When Self-Healing Activates:
- React re-renders component tree
- Vue updates virtual DOM
- Angular change detection cycles
- Any framework that replaces DOM elements

### Methods

| Method | Parameters | Returns | Usage |
|--------|------------|---------|--------|
| `selectTabByIndex()` | index: number | void | `tabs.selectTabByIndex(1)` |
| `selectTabById()` | id: string | void | `tabs.selectTabById('panel-2')` |
| `getActiveTab()` | none | HTMLElement | `tabs.getActiveTab()` |
| `getActiveIndex()` | none | number | `tabs.getActiveIndex()` |

### Events

| Event | When Fired | Detail |
|-------|------------|---------|
| `pm7-tab-change` | On tab change | `{ tab: HTMLElement, panel: HTMLElement, index: number }` |

## Anti-Patterns

### Anti-Pattern: Wrong Classes
```html
<!-- NEVER -->
<div class="pm7-tab-panel">Content</div>

<!-- ALWAYS -->
<div class="pm7-tab-content">Content</div>
```

### Anti-Pattern: Missing Required Attributes
```html
<!-- NEVER -->
<button class="pm7-tab-trigger">Tab</button>

<!-- ALWAYS -->
<button class="pm7-tab-trigger" aria-controls="panel-id">Tab</button>
```

### Anti-Pattern: Role Attributes
```html
<!-- NEVER -->
<div role="tablist" class="pm7-tab-list">
  <button role="tab">Tab</button>
</div>
<div role="tabpanel">Content</div>

<!-- ALWAYS -->
<div class="pm7-tab-list">
  <button class="pm7-tab-trigger" aria-controls="panel-1">Tab</button>
</div>
<div class="pm7-tab-content" id="panel-1">Content</div>
```

### Anti-Pattern: Manual Display Control
```html
<!-- NEVER -->
<div class="pm7-tab-content" style="display: none;">Content</div>

<!-- ALWAYS -->
<div class="pm7-tab-content">Content</div>
```

### Anti-Pattern: onClick Handlers
```html
<!-- NEVER -->
<button class="pm7-tab-trigger" onClick="handleTabChange('tab1')">Tab</button>

<!-- ALWAYS -->
<button class="pm7-tab-trigger" aria-controls="tab1">Tab</button>
```

### Anti-Pattern: Direct Method Calls
```javascript
// NEVER
window.PM7.initTabSelectors();

// ALWAYS
if (window.PM7?.initTabSelectors) {
  window.PM7.initTabSelectors();
}
```

### Anti-Pattern: Multiple Initializations
```javascript
// NEVER - initialize in multiple components
// Component A
window.PM7.init();
// Component B  
window.PM7.init();

// ALWAYS - single global initialization
// PM7Init.tsx
import('@pm7/core').then(() => {
  if (window.PM7) {
    window.PM7.init();
  }
});
```

### Anti-Pattern: Dynamic Tab Selector Without Init
```javascript
// NEVER - tab selector won't work
document.body.innerHTML += `
  <div class="pm7-tab-selector" data-pm7-tab-selector>
    <div class="pm7-tab-list">
      <button class="pm7-tab-trigger" aria-controls="fail-1">Tab 1</button>
    </div>
    <div class="pm7-tab-content" id="fail-1">Content</div>
  </div>
`;
// Tab selector is not interactive

// ALWAYS - initialize after adding
document.body.innerHTML += `
  <div class="pm7-tab-selector" data-pm7-tab-selector>
    <div class="pm7-tab-list">
      <button class="pm7-tab-trigger" aria-controls="work-1">Tab 1</button>
    </div>
    <div class="pm7-tab-content" id="work-1">Content</div>
  </div>
`;
window.PM7.init(); // REQUIRED
// Tab selector now works
```

## Rules

- ALWAYS: Include both `class="pm7-tab-selector"` AND `data-pm7-tab-selector`
- ALWAYS: Use `aria-controls` on triggers pointing to panel `id`
- ALWAYS: Check `window.PM7` exists before calling methods
- ALWAYS: Use optional chaining for PM7 methods that might not exist
- ALWAYS: Call window.PM7.init() after adding tab selectors dynamically
- NEVER: Use role attributes (auto-applied)
- NEVER: Use deprecated attributes (`data-tab`, `data-panel`, `data-tab-key`)
- NEVER: Mix React components with vanilla classes
- NEVER: Manually set `display: none` on tab content
- NEVER: Add onClick handlers when using PM7 tabs
- NEVER: Call PM7 methods without checking they exist
- NEVER: Expect tab selector to work without PM7.init() for dynamic content

## CSS Variables

| Variable | Default Light | Default Dark | Usage |
|----------|---------------|--------------|--------|
| `--pm7-tab-trigger-padding` | `0.5rem 1rem` | `0.5rem 1rem` | Tab padding |
| `--pm7-tab-trigger-color` | `var(--pm7-text-secondary)` | `var(--pm7-text-secondary)` | Tab text color |
| `--pm7-tab-trigger-color-active` | `var(--pm7-primary)` | `var(--pm7-primary)` | Active tab color |
| `--pm7-tab-indicator-size` | `2px` | `2px` | Indicator height |
| `--pm7-tab-indicator-color` | `var(--pm7-primary)` | `var(--pm7-primary)` | Indicator color |

## Keyboard Navigation

- Tab: Enter tab list
- ArrowLeft/ArrowUp: Previous tab
- ArrowRight/ArrowDown: Next tab
- Home: First tab
- End: Last tab
- Enter/Space: Activate tab

## Framework Usage

### React (Vanilla in React)
```jsx
'use client'

<div className="pm7-tab-selector" data-pm7-tab-selector>
  <div className="pm7-tab-list">
    <button className="pm7-tab-trigger" aria-controls="react-1">Tab 1</button>
  </div>
  <div className="pm7-tab-content" id="react-1">Content</div>
</div>
```

### Vue
```vue
<template>
  <div class="pm7-tab-selector" data-pm7-tab-selector>
    <div class="pm7-tab-list">
      <button class="pm7-tab-trigger" aria-controls="vue-1">Tab 1</button>
    </div>
    <div class="pm7-tab-content" id="vue-1">Content</div>
  </div>
</template>
```

## Related Components

- Button: Tab triggers are specialized buttons
- Card: Often used within tab panels