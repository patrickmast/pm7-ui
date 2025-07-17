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

# Component: Button

Clickable action trigger component.

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

## Required Structure

```html
<button class="pm7-button pm7-button--primary">
  Button Text
</button>
```

## Attributes

| Attribute | Values | Effect |
|-----------|---------|---------|
| `type` | `button`, `submit`, `reset` | Button behavior |
| `disabled` | presence | Disables button |
| `aria-label` | text | Accessibility label |
| `data-state` | `loading` | Loading state |

## CSS Classes

| Class | Required | Usage |
|-------|----------|-------|
| `.pm7-button` | YES | Base button class |
| `.pm7-button--primary` | NO | Primary action variant |
| `.pm7-button--secondary` | NO | Secondary action variant |
| `.pm7-button--outline` | NO | Outline variant |
| `.pm7-button--ghost` | NO | Ghost variant |
| `.pm7-button--destructive` | NO | Destructive action variant |
| `.pm7-button--link` | NO | Link style variant |
| `.pm7-button--slider` | NO | Slider confirmation variant |
| `.pm7-button--sm` | NO | Small size |
| `.pm7-button--lg` | NO | Large size |
| `.pm7-button--icon` | NO | Icon-only button |
| `.pm7-button--full-width` | NO | Full width button |
| `.pm7-gradient-border` | NO | Gradient border effect |

## Patterns

### Pattern: Primary Button
```html
<button type="button" class="pm7-button pm7-button--primary">
  Primary Action
</button>
```

### Pattern: Secondary Button
```html
<button type="button" class="pm7-button pm7-button--secondary">
  Secondary Action
</button>
```

### Pattern: Destructive Button
```html
<button type="button" class="pm7-button pm7-button--destructive">
  Delete
</button>
```

### Pattern: Button with Icon
```html
<button type="button" class="pm7-button pm7-button--primary">
  <svg class="pm7-button-icon" width="16" height="16">...</svg>
  <span>Save</span>
</button>
```

### Pattern: Icon-Only Button
```html
<button type="button" class="pm7-button pm7-button--ghost pm7-button--icon" aria-label="Settings">
  <svg width="20" height="20">...</svg>
</button>
```

### Pattern: Loading State
```html
<button type="button" class="pm7-button pm7-button--primary" data-state="loading" disabled>
  <svg class="pm7-spinner" width="16" height="16">...</svg>
  <span>Loading...</span>
</button>
```

### Pattern: Button Group
```html
<div class="pm7-button-group">
  <button class="pm7-button pm7-button--outline">Left</button>
  <button class="pm7-button pm7-button--outline">Center</button>
  <button class="pm7-button pm7-button--outline">Right</button>
</div>
```

### Pattern: Slider Button
```html
<button type="button" class="pm7-button pm7-button--slider">
  <span class="pm7-button--slider-text">Slide to confirm</span>
  <span class="pm7-button--slider-handle"></span>
</button>
```

### Pattern: Gradient Border
```html
<button type="button" class="pm7-button pm7-button--primary pm7-gradient-border">
  Gradient Button
</button>

<!-- Colored gradients -->
<button type="button" class="pm7-button pm7-gradient-border pm7-gradient-border-blue">
  Blue Gradient
</button>
```

### Pattern: Link as Button
```html
<a href="/path" class="pm7-button pm7-button--primary">
  Link Button
</a>
```

### Pattern: Form Submit
```html
<form>
  <button type="submit" class="pm7-button pm7-button--primary">
    Submit Form
  </button>
</form>
```

### Pattern: Full Width
```html
<button type="button" class="pm7-button pm7-button--primary pm7-button--full-width">
  Full Width Button
</button>
```

### Pattern: Button Sizes
```html
<!-- Small -->
<button type="button" class="pm7-button pm7-button--primary pm7-button--sm">
  Small
</button>

<!-- Default -->
<button type="button" class="pm7-button pm7-button--primary">
  Default
</button>

<!-- Large -->
<button type="button" class="pm7-button pm7-button--primary pm7-button--lg">
  Large
</button>
```

## Anti-Patterns

### Anti-Pattern: Missing Base Class
```html
<!-- NEVER -->
<button class="pm7-button--primary">Button</button>

<!-- ALWAYS -->
<button class="pm7-button pm7-button--primary">Button</button>
```

### Anti-Pattern: Multiple Variants
```html
<!-- NEVER -->
<button class="pm7-button pm7-button--primary pm7-button--secondary">

<!-- ALWAYS - choose one variant -->
<button class="pm7-button pm7-button--primary">
```

### Anti-Pattern: Custom onClick with Disabled
```html
<!-- NEVER -->
<button class="pm7-button" disabled onclick="handleClick()">

<!-- ALWAYS - disabled buttons shouldn't have handlers -->
<button class="pm7-button" disabled>
```

### Anti-Pattern: Div as Button
```html
<!-- NEVER -->
<div class="pm7-button pm7-button--primary" onclick="handleClick()">

<!-- ALWAYS -->
<button type="button" class="pm7-button pm7-button--primary">
```

### Anti-Pattern: Missing Type Attribute
```html
<!-- NEVER -->
<button class="pm7-button pm7-button--primary">

<!-- ALWAYS -->
<button type="button" class="pm7-button pm7-button--primary">
```

### Anti-Pattern: Icon Without Spacing
```html
<!-- NEVER -->
<button class="pm7-button">
  <svg>...</svg>Text
</button>

<!-- ALWAYS -->
<button class="pm7-button">
  <svg class="pm7-button-icon">...</svg>
  <span>Text</span>
</button>
```

## Rules

- ALWAYS: Include `pm7-button` base class
- ALWAYS: Specify `type` attribute on `<button>` elements
- ALWAYS: Use `aria-label` for icon-only buttons
- ALWAYS: Disable button when `data-state="loading"`
- NEVER: Use multiple variant classes together
- NEVER: Use `<div>` or `<span>` as buttons
- NEVER: Apply custom `cursor` styles
- NEVER: Remove `outline` on focus

## CSS Variables

| Variable | Default Light | Default Dark | Usage |
|----------|---------------|--------------|--------|
| `--pm7-button-height` | `2.5rem` | `2.5rem` | Default button height |
| `--pm7-button-padding-x` | `1rem` | `1rem` | Horizontal padding |
| `--pm7-button-font-size` | `0.875rem` | `0.875rem` | Text size |
| `--pm7-button-radius` | `var(--pm7-radius)` | `var(--pm7-radius)` | Border radius |

## States

- Default: Base appearance
- Hover: Brightness/opacity change
- Focus: Visible outline
- Active: Pressed appearance
- Disabled: Reduced opacity, no pointer events
- Loading: Shows spinner, disabled

## Accessibility

- Keyboard navigation enabled
- Focus indicators preserved
- ARIA attributes supported
- Screen reader compatible

## Framework Usage

### React
```jsx
<button type="button" className="pm7-button pm7-button--primary">
  React Button
</button>
```

### Vue
```vue
<template>
  <button type="button" class="pm7-button pm7-button--primary">
    Vue Button
  </button>
</template>
```

### Next.js Link
```jsx
import Link from 'next/link'

<Link href="/page" className="pm7-button pm7-button--primary">
  Next.js Link Button
</Link>
```

## Related Components

- ButtonGroup: For grouped button actions
- Menu: For dropdown button menus
- Dialog: Often triggered by buttons