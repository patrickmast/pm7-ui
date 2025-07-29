<!-- AI-CODING-AGENT ONLY DOCUMENTATION -->
---
type: ai-agent-documentation
audience: ai-coding-agents-only
style: exact-patterns
human-readable: false
documentation-rules:
  - NO simple syntax examples
  - ONLY working structured syntax
  - Binary IF/THEN decisions
  - Explicit anti-patterns with NEVER/ALWAYS
  - Copy-paste ready code blocks
---

# Component: Tooltip (AI-CODING-AGENT ONLY)

**⚠️ CRITICAL FOR AI AGENTS: This documentation shows ONLY the working syntax. Do NOT use simplified syntax.**

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

## WORKING STRUCTURE - USE THIS EXACTLY

### ✅ CORRECT: Full Structured Tooltip (COPY THIS)
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

### ❌ DO NOT USE: Simple syntax (may not work)
```html
<!-- NEVER USE THIS -->
<button data-pm7-tooltip="Tooltip content">
  Trigger
</button>
```

## WORKING EXAMPLES - COPY EXACTLY

### Example: Basic Tooltip
```html
<div data-pm7-tooltip>
  <button class="pm7-tooltip-trigger">
    Hover me
  </button>
  <div class="pm7-tooltip-content">
    Tooltip text here
    <div class="pm7-tooltip-arrow"></div>
  </div>
</div>
```

### Example: Bottom Placement
```html
<div data-pm7-tooltip>
  <button class="pm7-tooltip-trigger">Hover</button>
  <div class="pm7-tooltip-content" data-side="bottom">
    Bottom tooltip
    <div class="pm7-tooltip-arrow"></div>
  </div>
</div>
```

### Example: Right Placement
```html
<div data-pm7-tooltip>
  <span class="pm7-tooltip-trigger">?</span>
  <div class="pm7-tooltip-content" data-side="right">
    Help text
    <div class="pm7-tooltip-arrow"></div>
  </div>
</div>
```

### Example: Start Alignment
```html
<div data-pm7-tooltip>
  <button class="pm7-tooltip-trigger">Align Start</button>
  <div class="pm7-tooltip-content" data-side="top" data-align="start">
    Aligned to start
    <div class="pm7-tooltip-arrow"></div>
  </div>
</div>
```

### Example: Small Tooltip
```html
<div data-pm7-tooltip>
  <button class="pm7-tooltip-trigger">Small</button>
  <div class="pm7-tooltip-content pm7-tooltip-content--sm">
    Brief text
    <div class="pm7-tooltip-arrow"></div>
  </div>
</div>
```

### Example: Large Tooltip
```html
<div data-pm7-tooltip>
  <button class="pm7-tooltip-trigger">Large</button>
  <div class="pm7-tooltip-content pm7-tooltip-content--lg">
    Extended information with more space
    <div class="pm7-tooltip-arrow"></div>
  </div>
</div>
```

### Example: Light Theme
```html
<div data-pm7-tooltip>
  <button class="pm7-tooltip-trigger">Light</button>
  <div class="pm7-tooltip-content pm7-tooltip-content--light">
    Light themed tooltip
    <div class="pm7-tooltip-arrow"></div>
  </div>
</div>
```

### Example: Multiline Content
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

### Example: With Delays
```html
<div data-pm7-tooltip data-open-delay="600" data-close-delay="100">
  <button class="pm7-tooltip-trigger">Delayed</button>
  <div class="pm7-tooltip-content">
    Opens after 600ms, closes after 100ms
    <div class="pm7-tooltip-arrow"></div>
  </div>
</div>
```

### Example: Icon Button
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

### Example: Form Field Help
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

## Attributes

| Attribute | Values | Effect |
|-----------|---------|---------|
| `data-pm7-tooltip` | presence only | Auto-initializes tooltip container |
| `data-side` | `top`, `bottom`, `left`, `right` | Placement side |
| `data-align` | `start`, `center`, `end` | Alignment on side |
| `data-delay` | number | General delay (ms) |
| `data-open-delay` | number | Show delay (ms) |
| `data-close-delay` | number | Hide delay (ms) |
| `data-sticky` | `true`, `false` | Keep open on hover |
| `data-state` | `open`, `closed` | Visibility state |

## REQUIRED CSS Classes

| Class | Required | Usage |
|-------|----------|-------|
| `.pm7-tooltip` | AUTO | Container (added by JS) |
| `.pm7-tooltip-trigger` | **YES** | Trigger element |
| `.pm7-tooltip-content` | **YES** | Content container |
| `.pm7-tooltip-arrow` | **YES** | Arrow element |
| `.pm7-tooltip-content--sm` | NO | Small size (200px) |
| `.pm7-tooltip-content--lg` | NO | Large size (400px) |
| `.pm7-tooltip-content--light` | NO | Light theme |
| `.pm7-tooltip-content--multiline` | NO | Multiline spacing |

## JavaScript Control

### Manual initialization
```javascript
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

### Dynamic Tooltip Addition
```javascript
// Add tooltip HTML - MUST use full structure
document.getElementById('container').innerHTML = `
  <div data-pm7-tooltip>
    <button class="pm7-tooltip-trigger">
      Hover for info
    </button>
    <div class="pm7-tooltip-content">
      Dynamic tooltip content
      <div class="pm7-tooltip-arrow"></div>
    </div>
  </div>
`;

// MUST initialize PM7 components
window.PM7.init();
```

### Next.js Implementation
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
    <div data-pm7-tooltip>
      <button className="pm7-tooltip-trigger">
        Hover me
      </button>
      <div className="pm7-tooltip-content">
        Next.js tooltip
        <div className="pm7-tooltip-arrow"></div>
      </div>
    </div>
  );
}
```

### React Implementation
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

## Initialization Rules

IF tooltip in DOM at page load THEN auto-initialized
IF tooltip added dynamically THEN MUST call `window.PM7.init()`
IF React component THEN MUST call `window.PM7.initFramework()` in useEffect (v2.7.0+)
IF Vue component THEN MUST call `window.PM7.initFramework()` in onMounted (v2.7.0+)
IF manual init THEN `new PM7.Tooltip(element)`
IF Next.js THEN dynamic import with optional chaining

## Self-Healing (v2.6.0+)

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

## Critical Anti-Patterns

### ❌ NEVER: Missing Required Structure
```html
<!-- NEVER - Missing container -->
<button class="pm7-tooltip-trigger">
  Trigger
</button>
<div class="pm7-tooltip-content">
  Content
</div>

<!-- ALWAYS - Full structure -->
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

### ❌ NEVER: Missing Arrow
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

### ❌ NEVER: Dynamic Tooltip Without Init
```javascript
// NEVER - tooltip won't work
document.body.innerHTML += `
  <div data-pm7-tooltip>...</div>
`;
// Tooltip is not interactive

// ALWAYS - initialize after adding
document.body.innerHTML += `
  <div data-pm7-tooltip>...</div>
`;
window.PM7.init(); // REQUIRED
```

## Absolute Rules for AI Agents

- **ALWAYS**: Use full structured syntax with all required elements
- **ALWAYS**: Include `.pm7-tooltip-trigger` class on trigger
- **ALWAYS**: Include `.pm7-tooltip-content` class on content
- **ALWAYS**: Include `.pm7-tooltip-arrow` element inside content
- **ALWAYS**: Initialize with `PM7.init()` after dynamic addition
- **NEVER**: Use simplified `data-pm7-tooltip="text"` syntax
- **NEVER**: Omit any required wrapper divs or classes
- **NEVER**: Forget the arrow element
- **NEVER**: Expect tooltips to work without initialization

## Size Specifications

| Size | Class | Max Width |
|------|-------|-----------|
| Small | `pm7-tooltip-content--sm` | 200px |
| Default | (no class) | 250px |
| Large | `pm7-tooltip-content--lg` | 400px |

## Delay Recommendations

| Use Case | Open Delay | Close Delay |
|----------|------------|-------------|
| Navigation | 200ms | 0ms |
| Form fields | 600ms | 100ms |
| Icon buttons | 300ms | 0ms |
| Detailed info | 800ms | 200ms |

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

## Related Components

- Menu: For dropdown menus
- Dialog: For modal interactions
- Toast: For notifications