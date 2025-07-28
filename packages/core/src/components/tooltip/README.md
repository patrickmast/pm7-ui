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

# Component: Tooltip

Contextual information on hover/focus.

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
      initTooltips?: () => void;
      Tooltip?: new (element: Element) => any;
    }
  }
}
```

## Required Structure

### Simple Tooltip
```html
<button data-pm7-tooltip="Tooltip content">
  Trigger
</button>
```

### Structured Tooltip
```html
<div data-pm7-tooltip>
  <button class="pm7-tooltip-trigger">
    Trigger
  </button>
  <div class="pm7-tooltip-content">
    Content
    <div class="pm7-tooltip-arrow"></div>
  </div>
</div>
```

## Attributes

| Attribute | Values | Effect |
|-----------|---------|---------|
| `data-pm7-tooltip` | string or presence | Auto-initializes tooltip |
| `data-side` | `top`, `bottom`, `left`, `right` | Placement side |
| `data-align` | `start`, `center`, `end` | Alignment on side |
| `data-delay` | number | General delay (ms) |
| `data-open-delay` | number | Show delay (ms) |
| `data-close-delay` | number | Hide delay (ms) |
| `data-sticky` | `true`, `false` | Keep open on hover |
| `data-state` | `open`, `closed` | Visibility state |

## CSS Classes

| Class | Required | Usage |
|-------|----------|-------|
| `.pm7-tooltip` | AUTO | Container (added by JS) |
| `.pm7-tooltip-trigger` | YES* | Trigger element (*for structured) |
| `.pm7-tooltip-content` | YES* | Content container (*for structured) |
| `.pm7-tooltip-arrow` | YES* | Arrow element (*for structured) |
| `.pm7-tooltip-content--sm` | NO | Small size (200px) |
| `.pm7-tooltip-content--lg` | NO | Large size (400px) |
| `.pm7-tooltip-content--light` | NO | Light theme |
| `.pm7-tooltip-content--multiline` | NO | Multiline spacing |

## Patterns

### Pattern: Basic Tooltip
```html
<button data-pm7-tooltip="Save changes">
  Save
</button>
```

### Pattern: Structured Tooltip
```html
<div data-pm7-tooltip>
  <button class="pm7-tooltip-trigger">
    Info
  </button>
  <div class="pm7-tooltip-content" data-side="top">
    Helpful information
    <div class="pm7-tooltip-arrow"></div>
  </div>
</div>
```

### Pattern: Bottom Placement
```html
<div data-pm7-tooltip>
  <button class="pm7-tooltip-trigger">Hover</button>
  <div class="pm7-tooltip-content" data-side="bottom">
    Bottom tooltip
    <div class="pm7-tooltip-arrow"></div>
  </div>
</div>
```

### Pattern: Right Placement
```html
<div data-pm7-tooltip>
  <span class="pm7-tooltip-trigger">?</span>
  <div class="pm7-tooltip-content" data-side="right">
    Help text
    <div class="pm7-tooltip-arrow"></div>
  </div>
</div>
```

### Pattern: Start Alignment
```html
<div data-pm7-tooltip>
  <button class="pm7-tooltip-trigger">Align Start</button>
  <div class="pm7-tooltip-content" data-side="top" data-align="start">
    Aligned to start
    <div class="pm7-tooltip-arrow"></div>
  </div>
</div>
```

### Pattern: Small Tooltip
```html
<div data-pm7-tooltip>
  <button class="pm7-tooltip-trigger">Small</button>
  <div class="pm7-tooltip-content pm7-tooltip-content--sm">
    Brief text
    <div class="pm7-tooltip-arrow"></div>
  </div>
</div>
```

### Pattern: Large Tooltip
```html
<div data-pm7-tooltip>
  <button class="pm7-tooltip-trigger">Large</button>
  <div class="pm7-tooltip-content pm7-tooltip-content--lg">
    Extended information with more space
    <div class="pm7-tooltip-arrow"></div>
  </div>
</div>
```

### Pattern: Light Theme
```html
<div data-pm7-tooltip>
  <button class="pm7-tooltip-trigger">Light</button>
  <div class="pm7-tooltip-content pm7-tooltip-content--light">
    Light themed tooltip
    <div class="pm7-tooltip-arrow"></div>
  </div>
</div>
```

### Pattern: Multiline Content
```html
<div data-pm7-tooltip>
  <button class="pm7-tooltip-trigger">Multiline</button>
  <div class="pm7-tooltip-content pm7-tooltip-content--multiline">
    Line one of text
    Line two of text
    <div class="pm7-tooltip-arrow"></div>
  </div>
</div>
```

### Pattern: With Delays
```html
<div data-pm7-tooltip data-open-delay="600" data-close-delay="100">
  <button class="pm7-tooltip-trigger">Delayed</button>
  <div class="pm7-tooltip-content">
    Opens after 600ms, closes after 100ms
    <div class="pm7-tooltip-arrow"></div>
  </div>
</div>
```

### Pattern: Icon Button
```html
<div data-pm7-tooltip>
  <button class="pm7-button pm7-button--icon pm7-tooltip-trigger" aria-label="Settings">
    <svg width="16" height="16">...</svg>
  </button>
  <div class="pm7-tooltip-content" data-side="bottom">
    Settings
    <div class="pm7-tooltip-arrow"></div>
  </div>
</div>
```

### Pattern: Form Field Help
```html
<div style="display: flex; align-items: center; gap: 0.5rem;">
  <input type="email" class="pm7-input" placeholder="Email">
  <div data-pm7-tooltip>
    <svg class="pm7-tooltip-trigger" width="16" height="16">...</svg>
    <div class="pm7-tooltip-content" data-side="right">
      We'll never share your email
      <div class="pm7-tooltip-arrow"></div>
    </div>
  </div>
</div>
```

### Pattern: JavaScript Control
```javascript
// Manual initialization
const element = document.querySelector('[data-pm7-tooltip]');
const tooltip = new PM7.Tooltip(element);

// Methods
tooltip.show();
tooltip.hide();
tooltip.updatePosition();
tooltip.destroy();

// Events
element.addEventListener('pm7:tooltip:show', (e) => {
  // e.detail = { tooltip: PM7Tooltip }
});
```

### Pattern: Dynamic Tooltip Addition
WHEN: Adding tooltip after page load
```javascript
// Add tooltip HTML
document.getElementById('container').innerHTML = `
  <button data-pm7-tooltip="Dynamic tooltip">
    Hover for info
  </button>
`;

// MUST initialize PM7 components
window.PM7.init();
```

### Pattern: Next.js Implementation
```jsx
'use client'

import { useEffect } from 'react'

export default function TooltipDemo() {
  useEffect(() => {
    import('@pm7/core').then(() => {
      if (window.PM7?.initTooltips) {
        window.PM7.initTooltips();
      }
    });
  }, []);

  return (
    <button data-pm7-tooltip="Next.js tooltip">
      Hover me
    </button>
  );
}
```

## JavaScript API

### Initialization

IF tooltip in DOM at page load THEN auto-initialized
IF tooltip added dynamically THEN MUST call `window.PM7.init()`
IF React component THEN MUST call `window.PM7.initFramework()` in useEffect (v2.7.0+)
IF Vue component THEN MUST call `window.PM7.initFramework()` in onMounted (v2.7.0+)
IF manual init THEN `new PM7.Tooltip(element)`
IF simple tooltip THEN use `data-pm7-tooltip="content"`
IF structured tooltip THEN use `data-pm7-tooltip` on container
IF Next.js THEN dynamic import with optional chaining

### Self-Healing (v2.6.0+)

Tooltip components automatically detect and recover from framework re-renders:

```javascript
// React - Components self-heal automatically
useEffect(() => {
  PM7.initFramework(); // Includes automatic healing
}, []);

// Manual healing if needed
PM7.healTooltips(); // Heal only tooltips
PM7.heal();         // Heal all components
```

#### How Self-Healing Works:
1. Component detects it was re-rendered by framework
2. Open state and position are preserved
3. Event listeners are cleaned up and re-attached
4. No manual re-initialization needed

#### When Self-Healing Activates:
- React re-renders component tree
- Vue updates virtual DOM
- Angular change detection cycles
- Any framework that replaces DOM elements

### Methods

| Method | Parameters | Returns | Usage |
|--------|------------|---------|-------|
| `show()` | none | void | `tooltip.show()` |
| `hide()` | none | void | `tooltip.hide()` |
| `updatePosition()` | none | void | `tooltip.updatePosition()` |
| `destroy()` | none | void | `tooltip.destroy()` |

### Events

| Event | When Fired | Detail |
|-------|------------|---------|
| `pm7:tooltip:show` | Tooltip shown | `{ tooltip: PM7Tooltip }` |
| `pm7:tooltip:hide` | Tooltip hidden | `{ tooltip: PM7Tooltip }` |

## Delay Recommendations

| Use Case | Open Delay | Close Delay |
|----------|------------|-------------|
| Navigation | 200ms | 0ms |
| Form fields | 600ms | 100ms |
| Icon buttons | 300ms | 0ms |
| Detailed info | 800ms | 200ms |

## Anti-Patterns

### Anti-Pattern: Missing Arrow
```html
<!-- NEVER -->
<div class="pm7-tooltip-content">
  Tooltip text
</div>

<!-- ALWAYS -->
<div class="pm7-tooltip-content">
  Tooltip text
  <div class="pm7-tooltip-arrow"></div>
</div>
```

### Anti-Pattern: Essential Information
```html
<!-- NEVER -->
<button data-pm7-tooltip="Warning: This will delete all data!">
  Delete
</button>

<!-- ALWAYS -->
<button class="pm7-button pm7-button--destructive">
  Delete All Data
</button>
```

### Anti-Pattern: Long Content
```html
<!-- NEVER -->
<div data-pm7-tooltip="This is a very long explanation that goes on...">

<!-- ALWAYS -->
<div data-pm7-tooltip="Click to save changes">
```

### Anti-Pattern: Interactive Content
```html
<!-- NEVER -->
<div class="pm7-tooltip-content">
  Click here: <button>Action</button>
</div>

<!-- ALWAYS -->
<div class="pm7-tooltip-content">
  Press Enter to perform action
</div>
```

### Anti-Pattern: Direct Method Calls
```javascript
// NEVER
window.PM7.initTooltips();

// ALWAYS
if (window.PM7?.initTooltips) {
  window.PM7.initTooltips();
}
```

### Anti-Pattern: Custom Width Without Max-Width
```html
<!-- NEVER -->
<div class="pm7-tooltip-content" style="width: 500px;">

<!-- ALWAYS -->
<div class="pm7-tooltip-content" style="max-width: 500px;">
```

### Anti-Pattern: Dynamic Tooltip Without Init
```javascript
// NEVER - tooltip won't work
document.body.innerHTML += `
  <button data-pm7-tooltip="This won't show">
    Hover me
  </button>
`;
// Tooltip is not interactive

// ALWAYS - initialize after adding
document.body.innerHTML += `
  <button data-pm7-tooltip="This will show">
    Hover me
  </button>
`;
window.PM7.init(); // REQUIRED
// Tooltip now works
```

## Rules

- ALWAYS: Include arrow element in structured tooltips
- ALWAYS: Keep content brief and helpful
- ALWAYS: Use appropriate delays for context
- ALWAYS: Check PM7 exists before calling methods
- ALWAYS: Call window.PM7.init() after adding tooltips dynamically
- NEVER: Put essential information only in tooltips
- NEVER: Include interactive elements in tooltips
- NEVER: Make tooltips wider than viewport
- NEVER: Use tooltips for mobile-primary interfaces
- NEVER: Expect tooltip to work without PM7.init() for dynamic content

## Size Specifications

| Size | Class | Max Width |
|------|-------|-----------|
| Small | `--sm` | 200px |
| Default | none | 250px |
| Large | `--lg` | 400px |

## Position Behavior

IF no space on preferred side THEN flip to opposite side
IF no space for center align THEN adjust to start/end
IF element near viewport edge THEN shift to stay visible

## Touch Device Behavior

IF touch device THEN:
- Show on tap instead of hover
- Hide when tapping outside
- No show on focus events

## Keyboard Support

- Tab: Focus shows tooltip
- Escape: Close tooltip
- Blur: Hide tooltip

## Accessibility

- Role: `tooltip`
- ARIA: `aria-describedby` links trigger to tooltip
- Live region announcements
- Focus management preserved

## Framework Usage

### React
```jsx
'use client'

<button data-pm7-tooltip="React tooltip">
  Hover me
</button>
```

### Vue
```vue
<template>
  <button data-pm7-tooltip="Vue tooltip">
    Hover me
  </button>
</template>
```

### Structured in React
```jsx
<div data-pm7-tooltip>
  <button className="pm7-tooltip-trigger">
    Info
  </button>
  <div className="pm7-tooltip-content">
    React structured tooltip
    <div className="pm7-tooltip-arrow"></div>
  </div>
</div>
```

## Related Components

- Menu: For dropdown menus
- Dialog: For modal interactions
- Toast: For notifications