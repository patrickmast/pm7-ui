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

# Component: [ComponentName]

[Single-line technical description. NO marketing language.]

## Installation

```bash
npm install @pm7/core
```

### CSS Import
REQUIRED: Import CSS from `@pm7/core/dist/pm7.css`
NEVER: Import from `@pm7/core/dist/index.css`

```javascript
// ES modules
import '@pm7/core/dist/pm7.css';

// HTML
<link rel="stylesheet" href="node_modules/@pm7/core/dist/pm7.css">
```

## Required Structure

```html
<!-- EXACT pattern - NO deviations allowed -->
<div class="pm7-[component]" data-pm7-[component]="unique-id">
  <!-- Required children with exact class names -->
</div>
```

### Structural Rules
- ALWAYS: [specific requirement with code]
- NEVER: [forbidden pattern with code]

## Attributes

See `/docs/ATTRIBUTES.md` for cross-component attribute relationships.

| Attribute | Values | Required | Effect | Related Components |
|-----------|---------|----------|--------|-------------------|
| `data-pm7-[component]` | `string` | YES | Component ID and auto-init | - |
| `data-pm7-trigger` | `target-id` | NO | Links to target | Menu, Dialog, Tooltip |
| `data-[specific]` | `value1`, `value2` | NO | [Exact behavior] | [Related] |

## CSS Classes

| Class | Required | When | Effect |
|-------|----------|------|--------|
| `.pm7-[component]` | YES | ALWAYS | Base styling |
| `.pm7-[component]-[element]` | YES/NO | IF [condition] | [Exact effect] |
| `.pm7-[component]--[modifier]` | NO | IF [condition] | [Exact modification] |

## JavaScript API

### Initialization
```javascript
// Auto-init
<div data-pm7-[component]="id">

// Manual init
const instance = new PM7[ComponentName](element, options);
```

### Methods

| Method | Parameters | Return Type | Example |
|--------|------------|-------------|---------|
| `open()` | none | `void` | `instance.open()` |
| `close()` | none | `void` | `instance.close()` |
| `toggle(state)` | `state: boolean` | `boolean` | `instance.toggle(true)` |
| `destroy()` | none | `void` | `instance.destroy()` |

### Parameter Details

| Parameter | Type | Required | Default | Description |
|-----------|------|----------|---------|-------------|
| `options.animation` | `boolean` | NO | `true` | Enable animations |
| `options.closeOnEsc` | `boolean` | NO | `true` | ESC key closes |

### Events

| Event | When | Detail | Bubbles |
|-------|------|--------|---------|
| `pm7:[component]:open` | After open | `{ element, trigger }` | YES |
| `pm7:[component]:close` | Before close | `{ element, reason }` | YES |

## Complete Examples in Context

### Example: [Real Use Case 1]
```html
<!-- Complete HTML structure showing real usage -->
<div class="app-layout">
  <button data-pm7-trigger="example-1" class="pm7-button">
    Open [Component]
  </button>
  
  <div data-pm7-[component]="example-1" class="pm7-[component]">
    <!-- Complete realistic content -->
    <div class="pm7-[component]-header">
      <h2>Title</h2>
      <button data-pm7-close aria-label="Close">×</button>
    </div>
    <div class="pm7-[component]-body">
      <!-- Real content -->
    </div>
    <div class="pm7-[component]-footer">
      <button class="pm7-button pm7-button--primary">Action</button>
      <button class="pm7-button" data-pm7-close>Cancel</button>
    </div>
  </div>
</div>
```

### Example: [Real Use Case 2]
```html
<!-- Another complete realistic example -->
<nav class="app-navigation">
  <button data-pm7-trigger="nav-component" class="pm7-button pm7-button--ghost">
    <i class="pm7-icon">menu</i>
  </button>
  
  <div data-pm7-[component]="nav-component" class="pm7-[component] pm7-[component]--[variant]">
    <!-- Complete navigation UI -->
  </div>
</nav>
```

## Anti-Patterns

### NEVER: Use role attributes
```html
<!-- NEVER -->
<div role="[aria-role]" aria-modal="true">

<!-- BECAUSE -->
PM7 components auto-apply ALL ARIA attributes. Manual ARIA conflicts with internal state management.

<!-- INSTEAD -->
<div data-pm7-[component]="id">
```

### NEVER: Nest same component types
```html
<!-- NEVER -->
<div data-pm7-[component]="outer">
  <div data-pm7-[component]="inner">

<!-- BECAUSE -->
Event bubbling breaks. Focus management conflicts. Z-index wars. State synchronization fails.

<!-- INSTEAD -->
<div data-pm7-[component]="main">
  <button onclick="switchComponent('main', 'secondary')">
```

### NEVER: Override component CSS without !important
```css
/* NEVER */
.pm7-[component] { background: red; }

/* BECAUSE */
PM7 uses CSS specificity isolation. Your styles WILL be ignored silently.

/* INSTEAD */
.my-custom-[component] { background: red !important; }
/* OR use CSS variables */
.pm7-[component] { --pm7-[component]-bg: red; }
```

## Patterns

### Pattern: Basic Usage
```html
<div class="pm7-[component]" data-pm7-[component]="basic">
  <!-- Minimum required structure -->
</div>
```

### Pattern: [Specific Use Case]
WHEN: [Exact condition]
```html
<!-- Exact code pattern for this case -->
```

### Pattern: With JavaScript Control
WHEN: Programmatic control needed
```javascript
// Get instance
const element = document.querySelector('[data-pm7-[component]="my-id"]');
const instance = PM7[ComponentName].getInstance(element);

// Control
instance.open();
instance.on('pm7:[component]:close', (e) => {
  console.log('Closed:', e.detail);
});
```

## Cross-Component Dependencies

### Works With
- **[Component]**: [How they interact]
- **Button**: [Integration pattern]
- **[Component]**: [Shared attributes]

### Conflicts With
- **[Component]**: [Why and avoidance]
- **[Component]**: [Specific conflict]

## CSS Variables

| Variable | Light Mode | Dark Mode | Usage |
|----------|------------|-----------|--------|
| `--pm7-[component]-bg` | `#ffffff` | `#1a1a1a` | Background |
| `--pm7-[component]-color` | `#000000` | `#ffffff` | Text color |
| `--pm7-[component]-border` | `#e5e5e5` | `#333333` | Borders |

## Accessibility

- Focus: [AUTOMATIC/MANUAL] via [method]
- Keyboard: [Keys] = [actions]
- ARIA: AUTO-APPLIED ([list attributes])
- Screen reader: [Specific behavior]

## Framework Integration

### React
```jsx
// Vanilla approach (RECOMMENDED)
<div data-pm7-[component]="id" ref={ref}>
  {/* Content */}
</div>

// Wrapper (if available)
import { [Component] } from '@pm7/react';
<[Component] id="id">
  {/* Content */}
</[Component]>
```

### Vue
```vue
<template>
  <div data-pm7-[component]="id" ref="componentRef">
    <!-- Content -->
  </div>
</template>

<script>
export default {
  mounted() {
    // Access: this.$refs.componentRef
  }
}
</script>
```

## Rules

### ALWAYS
- Use `data-pm7-[component]="unique-id"` for initialization
- Include PM7 CSS before component usage
- Test with 50+ instances for performance
- Use semantic HTML inside component

### NEVER
- Add ARIA attributes manually
- Nest same component types
- Override styles without CSS variables or !important
- Initialize before DOM ready
- Use jQuery or other DOM libraries on PM7 components