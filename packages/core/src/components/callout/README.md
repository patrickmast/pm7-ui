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

# Component: Callout

Highlighted information container with semantic variants.

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
<div class="pm7-callout">
  <div class="pm7-callout-body">
    Content
  </div>
</div>
```

## CSS Classes

| Class | Required | Usage |
|-------|----------|-------|
| `.pm7-callout` | YES | Container |
| `.pm7-callout-body` | YES | Content wrapper |
| `.pm7-callout-header` | NO | Header section |
| `.pm7-callout-icon` | NO | Icon styling |
| `.pm7-callout--info` | NO | Info variant (default) |
| `.pm7-callout--success` | NO | Success variant |
| `.pm7-callout--warning` | NO | Warning variant |
| `.pm7-callout--error` | NO | Error variant |
| `.pm7-callout--tip` | NO | Tip variant |
| `.pm7-callout--neutral` | NO | Neutral variant |
| `.pm7-callout--sm` | NO | Small size |
| `.pm7-callout--lg` | NO | Large size |
| `.pm7-callout--no-border` | NO | Remove left border |
| `.pm7-callout--center` | NO | Center align text |
| `.pm7-callout--pulse` | NO | Pulse animation |

## Patterns

### Pattern: Basic Callout
```html
<div class="pm7-callout">
  <div class="pm7-callout-body">
    Default callout content
  </div>
</div>
```

### Pattern: Info Callout
```html
<div class="pm7-callout pm7-callout--info">
  <div class="pm7-callout-body">
    Information message
  </div>
</div>
```

### Pattern: Success Callout
```html
<div class="pm7-callout pm7-callout--success">
  <div class="pm7-callout-body">
    Success! Operation completed.
  </div>
</div>
```

### Pattern: Warning Callout
```html
<div class="pm7-callout pm7-callout--warning">
  <div class="pm7-callout-body">
    Warning: Review before proceeding.
  </div>
</div>
```

### Pattern: Error Callout
```html
<div class="pm7-callout pm7-callout--error">
  <div class="pm7-callout-body">
    Error: Something went wrong.
  </div>
</div>
```

### Pattern: Tip Callout
```html
<div class="pm7-callout pm7-callout--tip">
  <div class="pm7-callout-body">
    Pro tip: Use keyboard shortcuts.
  </div>
</div>
```

### Pattern: Callout with Header
```html
<div class="pm7-callout pm7-callout--info">
  <h4 class="pm7-callout-header">Information</h4>
  <div class="pm7-callout-body">
    Detailed information message
  </div>
</div>
```

### Pattern: Callout with Icon
```html
<div class="pm7-callout pm7-callout--warning">
  <h4 class="pm7-callout-header">
    <svg class="pm7-callout-icon" width="16" height="16">...</svg>
    Warning
  </h4>
  <div class="pm7-callout-body">
    Important warning message
  </div>
</div>
```

### Pattern: Small Callout
```html
<div class="pm7-callout pm7-callout--info pm7-callout--sm">
  <div class="pm7-callout-body">
    Small callout
  </div>
</div>
```

### Pattern: Large Callout
```html
<div class="pm7-callout pm7-callout--info pm7-callout--lg">
  <div class="pm7-callout-body">
    Large callout
  </div>
</div>
```

### Pattern: No Border Callout
```html
<div class="pm7-callout pm7-callout--info pm7-callout--no-border">
  <div class="pm7-callout-body">
    Callout without left border
  </div>
</div>
```

### Pattern: Centered Callout
```html
<div class="pm7-callout pm7-callout--info pm7-callout--center">
  <div class="pm7-callout-body">
    Centered text callout
  </div>
</div>
```

### Pattern: Pulsing Callout
```html
<div class="pm7-callout pm7-callout--warning pm7-callout--pulse">
  <div class="pm7-callout-body">
    Attention: This pulses
  </div>
</div>
```

### Pattern: Complex Content
```html
<div class="pm7-callout pm7-callout--tip">
  <h4 class="pm7-callout-header">Getting Started</h4>
  <div class="pm7-callout-body">
    <p>Follow these steps:</p>
    <ul>
      <li>Step 1</li>
      <li>Step 2</li>
    </ul>
    <p>See <a href="/docs">documentation</a>.</p>
  </div>
</div>
```

## Anti-Patterns

### Anti-Pattern: Missing Body Wrapper
```html
<!-- NEVER -->
<div class="pm7-callout">
  Direct content without wrapper
</div>

<!-- ALWAYS -->
<div class="pm7-callout">
  <div class="pm7-callout-body">
    Content in wrapper
  </div>
</div>
```

### Anti-Pattern: Multiple Variants
```html
<!-- NEVER -->
<div class="pm7-callout pm7-callout--info pm7-callout--success">

<!-- ALWAYS - choose one variant -->
<div class="pm7-callout pm7-callout--info">
```

### Anti-Pattern: Wrong Header Structure
```html
<!-- NEVER -->
<div class="pm7-callout">
  <h4>Header without class</h4>
  <div class="pm7-callout-body">Content</div>
</div>

<!-- ALWAYS -->
<div class="pm7-callout">
  <h4 class="pm7-callout-header">Header</h4>
  <div class="pm7-callout-body">Content</div>
</div>
```

### Anti-Pattern: Custom Colors
```html
<!-- NEVER -->
<div class="pm7-callout" style="background-color: pink;">

<!-- ALWAYS - use variants -->
<div class="pm7-callout pm7-callout--info">
```

### Anti-Pattern: Icon Without Header
```html
<!-- NEVER -->
<div class="pm7-callout">
  <svg class="pm7-callout-icon">...</svg>
  <div class="pm7-callout-body">Content</div>
</div>

<!-- ALWAYS -->
<div class="pm7-callout">
  <h4 class="pm7-callout-header">
    <svg class="pm7-callout-icon">...</svg>
    Title
  </h4>
  <div class="pm7-callout-body">Content</div>
</div>
```

## Rules

- ALWAYS: Include `pm7-callout-body` wrapper
- ALWAYS: Use semantic HTML for headers (h3, h4)
- ALWAYS: Place icons inside header element
- NEVER: Use multiple variant classes
- NEVER: Apply custom background/border colors
- NEVER: Mix size modifiers (sm + lg)
- NEVER: Place content directly in callout container

## CSS Variables

| Variable | Default Light | Default Dark | Usage |
|----------|---------------|--------------|--------|
| `--pm7-callout-padding` | `1rem` | `1rem` | Content padding |
| `--pm7-callout-border-width` | `4px` | `4px` | Left border width |
| `--pm7-callout-radius` | `var(--pm7-radius)` | `var(--pm7-radius)` | Border radius |

## Variant Semantics

- `info`: General information, neutral messages
- `success`: Positive outcomes, confirmations
- `warning`: Caution, attention required
- `error`: Failures, critical issues
- `tip`: Helpful hints, best practices
- `neutral`: No semantic meaning

## Accessibility

- Semantic HTML headings required
- Color not sole indicator of meaning
- Icons are decorative only
- Links maintain proper contrast

## Framework Usage

### React
```jsx
<div className="pm7-callout pm7-callout--info">
  <h4 className="pm7-callout-header">{title}</h4>
  <div className="pm7-callout-body">
    {content}
  </div>
</div>
```

### Vue
```vue
<template>
  <div class="pm7-callout pm7-callout--info">
    <h4 class="pm7-callout-header">{{ title }}</h4>
    <div class="pm7-callout-body">
      {{ content }}
    </div>
  </div>
</template>
```

## Related Components

- Card: For general content containers
- Toast: For temporary notifications
- Dialog: For modal alerts