<!-- AI-ONLY DOCUMENTATION -->
<!-- This documentation is EXCLUSIVELY for AI coding agents (Claude, ChatGPT, Copilot, etc.) -->
<!-- DO NOT write human-friendly explanations. Use exact patterns and code blocks only. -->
<!-- Style: Binary decisions, exact code patterns, explicit anti-patterns -->

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

# Component: [ComponentName]

[One-line description. No marketing language.]

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
<!-- Base structure - no deviations -->
<div class="pm7-[component]" data-pm7-[component]>
  <!-- Required children elements -->
</div>
```

## Attributes

| Attribute | Values | Effect |
|-----------|---------|---------|
| `data-pm7-[component]` | presence | Auto-initializes component |
| `data-[attribute]` | `value1`, `value2` | [Exact behavior] |

## CSS Classes

| Class | Required | Usage |
|-------|----------|-------|
| `.pm7-[component]` | YES | Base component class |
| `.pm7-[component]-[element]` | YES/NO | [Specific usage] |
| `.pm7-[component]--[modifier]` | NO | [Modifier effect] |

## Patterns

### Pattern: Basic Usage
```html
<!-- Exact code pattern -->
<div class="pm7-[component]" data-pm7-[component]>
  <!-- Content -->
</div>
```

### Pattern: [Specific Use Case]
WHEN: [condition]
```html
<!-- Exact code pattern -->
```

### Pattern: With JavaScript Control
```javascript
// Manual initialization
const element = document.querySelector('[data-pm7-[component]]');
const instance = new PM7[ComponentName](element);

// Methods
instance.methodName();
```

## JavaScript API

### Initialization

IF auto-init THEN add data-pm7-[component]
IF manual THEN new PM7[ComponentName](element)

### Methods

| Method | Parameters | Returns | Usage |
|--------|------------|---------|--------|
| `open()` | none | void | `instance.open()` |
| `close()` | none | void | `instance.close()` |

### Events

| Event | When Fired | Detail |
|-------|------------|---------|
| `pm7-[component]-open` | On open | `{ element: HTMLElement }` |
| `pm7-[component]-close` | On close | `{ element: HTMLElement }` |

## Anti-Patterns

### Anti-Pattern: [Common Mistake]
```html
<!-- NEVER -->
<div role="[aria-role]">
  <!-- Wrong structure -->
</div>

<!-- ALWAYS -->
<div class="pm7-[component]" data-pm7-[component]>
  <!-- Correct structure -->
</div>
```

## Rules

- ALWAYS: Use data-pm7-[component] for auto-initialization
- ALWAYS: Include window.PM7 before using
- NEVER: Use ARIA roles (auto-applied)
- NEVER: Nest [component] inside [component]
- NEVER: Override component styles without !important

## CSS Variables

| Variable | Default Light | Default Dark | Usage |
|----------|---------------|--------------|--------|
| `--pm7-[component]-bg` | `value` | `value` | Background color |
| `--pm7-[component]-color` | `value` | `value` | Text color |

## Accessibility

- Focus management: [AUTOMATIC/MANUAL]
- Keyboard navigation: [Keys and behavior]
- ARIA attributes: AUTO-APPLIED
- Screen reader: [Specific requirements]

## Framework Usage

### React
```jsx
// IF using React wrapper
import { [ComponentName] } from '@pm7/react';

// IF using vanilla in React
<div className="pm7-[component]" data-pm7-[component]>
  {/* Content */}
</div>
```

### Vue
```vue
<template>
  <div class="pm7-[component]" data-pm7-[component]>
    <!-- Content -->
  </div>
</template>
```

## Related Components

- [Component1]: [Relationship]
- [Component2]: [Relationship]