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

# Component: Accordion

Expandable content sections component.

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
      initAccordions?: () => void;
      Accordion?: new (element: Element, options?: any) => any;
    }
  }
}
```

## Required Structure

```html
<div class="pm7-accordion" data-pm7-accordion>
  <div class="pm7-accordion-item">
    <button class="pm7-accordion-trigger">
      <span>Title</span>
      <svg class="pm7-accordion-icon" width="16" height="16">...</svg>
    </button>
    <div class="pm7-accordion-content">
      <div class="pm7-accordion-content-inner">
        Content
      </div>
    </div>
  </div>
</div>
```

## Attributes

| Attribute | Values | Effect |
|-----------|---------|---------|
| `data-pm7-accordion` | presence | Auto-initializes component |
| `data-state` | `open`, `closed` | Item state |
| `data-allow-multiple` | `true`, `false` | Allow multiple open items |
| `data-default-open` | index or `all` | Initially open items |

## CSS Classes

| Class | Required | Usage |
|-------|----------|-------|
| `.pm7-accordion` | YES | Container |
| `.pm7-accordion-item` | YES | Individual item |
| `.pm7-accordion-trigger` | YES | Clickable header |
| `.pm7-accordion-icon` | NO | Expand/collapse icon |
| `.pm7-accordion-content` | YES | Content wrapper |
| `.pm7-accordion-content-inner` | YES | Content padding container |
| `.pm7-accordion--bordered` | NO | Add borders |
| `.pm7-accordion--spaced` | NO | Add spacing between items |
| `.pm7-accordion--flush` | NO | Remove outer padding |

## Patterns

### Pattern: Basic Accordion
```html
<div class="pm7-accordion" data-pm7-accordion>
  <div class="pm7-accordion-item" data-state="open">
    <button class="pm7-accordion-trigger">
      <span>Section 1</span>
      <svg class="pm7-accordion-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <polyline points="6 9 12 15 18 9"></polyline>
      </svg>
    </button>
    <div class="pm7-accordion-content">
      <div class="pm7-accordion-content-inner">
        Content for section 1
      </div>
    </div>
  </div>
  <div class="pm7-accordion-item">
    <button class="pm7-accordion-trigger">
      <span>Section 2</span>
      <svg class="pm7-accordion-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <polyline points="6 9 12 15 18 9"></polyline>
      </svg>
    </button>
    <div class="pm7-accordion-content">
      <div class="pm7-accordion-content-inner">
        Content for section 2
      </div>
    </div>
  </div>
</div>
```

### Pattern: Multiple Open
```html
<div class="pm7-accordion" data-pm7-accordion data-allow-multiple="true">
  <div class="pm7-accordion-item" data-state="open">
    <button class="pm7-accordion-trigger">
      <span>Item 1</span>
    </button>
    <div class="pm7-accordion-content">
      <div class="pm7-accordion-content-inner">Content 1</div>
    </div>
  </div>
  <div class="pm7-accordion-item" data-state="open">
    <button class="pm7-accordion-trigger">
      <span>Item 2</span>
    </button>
    <div class="pm7-accordion-content">
      <div class="pm7-accordion-content-inner">Content 2</div>
    </div>
  </div>
</div>
```

### Pattern: Bordered Variant
```html
<div class="pm7-accordion pm7-accordion--bordered" data-pm7-accordion>
  <div class="pm7-accordion-item">
    <button class="pm7-accordion-trigger">
      <span>Bordered Item</span>
    </button>
    <div class="pm7-accordion-content">
      <div class="pm7-accordion-content-inner">Content</div>
    </div>
  </div>
</div>
```

### Pattern: Icon Position Start
```html
<div class="pm7-accordion" data-pm7-accordion>
  <div class="pm7-accordion-item">
    <button class="pm7-accordion-trigger">
      <svg class="pm7-accordion-icon pm7-accordion-icon--start" width="16" height="16">...</svg>
      <span>Icon at Start</span>
    </button>
    <div class="pm7-accordion-content">
      <div class="pm7-accordion-content-inner">Content</div>
    </div>
  </div>
</div>
```

### Pattern: JavaScript Control
```javascript
// Manual initialization
const element = document.querySelector('.pm7-accordion');
const accordion = new PM7.Accordion(element, {
  allowMultiple: false,
  defaultOpen: 0,
  iconPosition: 'end',
  textAlign: 'left'
});

// Methods
accordion.open(0);
accordion.close(0);
accordion.toggle(0);
accordion.openAll();
accordion.closeAll();

// Get state
const isOpen = accordion.isOpen(0);
```

### Pattern: Next.js Implementation
```jsx
'use client'

import { useEffect } from 'react'

export default function AccordionPage() {
  useEffect(() => {
    import('@pm7/core').then(() => {
      if (window.PM7?.initAccordions) {
        window.PM7.initAccordions();
      }
    });
  }, []);

  return (
    <div className="pm7-accordion" data-pm7-accordion>
      <div className="pm7-accordion-item">
        <button className="pm7-accordion-trigger">
          <span>FAQ Question</span>
          <svg className="pm7-accordion-icon" width="16" height="16">...</svg>
        </button>
        <div className="pm7-accordion-content">
          <div className="pm7-accordion-content-inner">
            Answer content
          </div>
        </div>
      </div>
    </div>
  );
}
```

## JavaScript API

### Initialization

IF auto-init THEN add `data-pm7-accordion`
IF manual THEN `new PM7.Accordion(element, options)`
IF Next.js THEN dynamic import with optional chaining

### Options

| Option | Type | Default | Effect |
|--------|------|---------|---------|
| `allowMultiple` | boolean | false | Allow multiple open items |
| `defaultOpen` | number \| 'all' | null | Initially open items |
| `iconPosition` | 'start' \| 'end' | 'end' | Icon position |
| `textAlign` | 'left' \| 'center' \| 'right' | 'left' | Text alignment |

### Methods

| Method | Parameters | Returns | Usage |
|--------|------------|---------|--------|
| `open()` | index: number | void | `accordion.open(0)` |
| `close()` | index: number | void | `accordion.close(0)` |
| `toggle()` | index: number | void | `accordion.toggle(0)` |
| `openAll()` | none | void | `accordion.openAll()` |
| `closeAll()` | none | void | `accordion.closeAll()` |
| `isOpen()` | index: number | boolean | `accordion.isOpen(0)` |

### Events

| Event | When Fired | Detail |
|-------|------------|---------|
| `pm7-accordion-open` | On item open | `{ index: number, item: HTMLElement }` |
| `pm7-accordion-close` | On item close | `{ index: number, item: HTMLElement }` |

## Anti-Patterns

### Anti-Pattern: Missing Inner Content Wrapper
```html
<!-- NEVER -->
<div class="pm7-accordion-content">
  Direct content without wrapper
</div>

<!-- ALWAYS -->
<div class="pm7-accordion-content">
  <div class="pm7-accordion-content-inner">
    Content with proper wrapper
  </div>
</div>
```

### Anti-Pattern: Wrong Icon Class
```html
<!-- NEVER -->
<svg class="icon">...</svg>

<!-- ALWAYS -->
<svg class="pm7-accordion-icon">...</svg>
```

### Anti-Pattern: Direct Method Calls
```javascript
// NEVER
window.PM7.initAccordions();

// ALWAYS
if (window.PM7?.initAccordions) {
  window.PM7.initAccordions();
}
```

### Anti-Pattern: Manual State Management
```html
<!-- NEVER -->
<div class="pm7-accordion-item" style="display: none;">

<!-- ALWAYS -->
<div class="pm7-accordion-item" data-state="closed">
```

### Anti-Pattern: Nested Accordions
```html
<!-- NEVER -->
<div class="pm7-accordion" data-pm7-accordion>
  <div class="pm7-accordion-item">
    <div class="pm7-accordion" data-pm7-accordion>
      <!-- Nested accordion -->
    </div>
  </div>
</div>

<!-- ALWAYS - use separate accordions -->
<div class="pm7-accordion" data-pm7-accordion>
  <!-- First accordion -->
</div>
<div class="pm7-accordion" data-pm7-accordion>
  <!-- Second accordion -->
</div>
```

## Rules

- ALWAYS: Include both trigger and content elements
- ALWAYS: Use `pm7-accordion-content-inner` for content padding
- ALWAYS: Check PM7 exists before calling methods
- ALWAYS: Include proper SVG icon with class
- NEVER: Use role attributes (auto-applied)
- NEVER: Manually toggle display styles
- NEVER: Nest accordions within accordions
- NEVER: Omit the content inner wrapper

## CSS Variables

| Variable | Default Light | Default Dark | Usage |
|----------|---------------|--------------|--------|
| `--pm7-accordion-trigger-padding` | `1rem` | `1rem` | Trigger padding |
| `--pm7-accordion-content-padding` | `1rem` | `1rem` | Content padding |
| `--pm7-accordion-border-color` | `var(--pm7-border)` | `var(--pm7-border)` | Border color |
| `--pm7-accordion-icon-size` | `1rem` | `1rem` | Icon size |
| `--pm7-accordion-transition` | `200ms ease` | `200ms ease` | Animation timing |

## Keyboard Navigation

- Enter/Space: Toggle focused item
- ArrowDown: Focus next item
- ArrowUp: Focus previous item
- Home: Focus first item
- End: Focus last item

## Accessibility

- ARIA attributes auto-applied
- Keyboard navigation enabled
- Focus management
- Screen reader announcements

## Framework Usage

### React (Vanilla in React)
```jsx
'use client'

<div className="pm7-accordion" data-pm7-accordion>
  <div className="pm7-accordion-item">
    <button className="pm7-accordion-trigger">
      <span>React Accordion</span>
    </button>
    <div className="pm7-accordion-content">
      <div className="pm7-accordion-content-inner">
        {content}
      </div>
    </div>
  </div>
</div>
```

### Vue
```vue
<template>
  <div class="pm7-accordion" data-pm7-accordion>
    <div class="pm7-accordion-item">
      <button class="pm7-accordion-trigger">
        <span>Vue Accordion</span>
      </button>
      <div class="pm7-accordion-content">
        <div class="pm7-accordion-content-inner">
          {{ content }}
        </div>
      </div>
    </div>
  </div>
</template>
```

## Related Components

- TabSelector: For horizontal content switching
- Dialog: For modal content display