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

# Component: Card

Container component for grouped content.

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
<div class="pm7-card">
  <div class="pm7-card-content">
    Content
  </div>
</div>
```

## CSS Classes

| Class | Required | Usage |
|-------|----------|-------|
| `.pm7-card` | YES | Container |
| `.pm7-card-header` | NO | Header section |
| `.pm7-card-title` | NO | Title text |
| `.pm7-card-description` | NO | Description text |
| `.pm7-card-content` | YES | Main content area |
| `.pm7-card-footer` | NO | Footer section |
| `.pm7-card--outlined` | NO | Thicker border variant |
| `.pm7-card--ghost` | NO | No border/shadow variant |
| `.pm7-card--elevated` | NO | Larger shadow variant |
| `.pm7-card--interactive` | NO | Hover effects |
| `.pm7-card--compact` | NO | Reduced padding |

## Patterns

### Pattern: Basic Card
```html
<div class="pm7-card">
  <div class="pm7-card-content">
    Content here
  </div>
</div>
```

### Pattern: Card with Header
```html
<div class="pm7-card">
  <div class="pm7-card-header">
    <h3 class="pm7-card-title">Title</h3>
    <p class="pm7-card-description">Description</p>
  </div>
  <div class="pm7-card-content">
    Content here
  </div>
</div>
```

### Pattern: Card with Footer
```html
<div class="pm7-card">
  <div class="pm7-card-header">
    <h3 class="pm7-card-title">Title</h3>
  </div>
  <div class="pm7-card-content">
    Content here
  </div>
  <div class="pm7-card-footer">
    <button class="pm7-button pm7-button--primary">Action</button>
  </div>
</div>
```

### Pattern: Outlined Card
```html
<div class="pm7-card pm7-card--outlined">
  <div class="pm7-card-content">
    Outlined style
  </div>
</div>
```

### Pattern: Ghost Card
```html
<div class="pm7-card pm7-card--ghost">
  <div class="pm7-card-content">
    No border or shadow
  </div>
</div>
```

### Pattern: Elevated Card
```html
<div class="pm7-card pm7-card--elevated">
  <div class="pm7-card-content">
    Larger shadow, no border
  </div>
</div>
```

### Pattern: Interactive Card
```html
<div class="pm7-card pm7-card--interactive">
  <div class="pm7-card-content">
    Has hover effects
  </div>
</div>
```

### Pattern: Clickable Card
```html
<a href="/link" class="pm7-card pm7-card--interactive">
  <div class="pm7-card-content">
    Entire card is clickable
  </div>
</a>
```

### Pattern: Card Grid
```html
<div class="pm7-card-grid">
  <div class="pm7-card">
    <div class="pm7-card-content">Card 1</div>
  </div>
  <div class="pm7-card">
    <div class="pm7-card-content">Card 2</div>
  </div>
  <div class="pm7-card">
    <div class="pm7-card-content">Card 3</div>
  </div>
</div>
```

### Pattern: Compact Card
```html
<div class="pm7-card pm7-card--compact">
  <div class="pm7-card-content">
    Less padding
  </div>
</div>
```

### Pattern: Card with Image
```html
<div class="pm7-card">
  <img src="image.jpg" alt="Description" class="pm7-card-image">
  <div class="pm7-card-content">
    Content below image
  </div>
</div>
```

### Pattern: Card with Actions
```html
<div class="pm7-card">
  <div class="pm7-card-header">
    <h3 class="pm7-card-title">Title</h3>
    <button class="pm7-button pm7-button--ghost pm7-button--icon" aria-label="More">
      <svg width="20" height="20">...</svg>
    </button>
  </div>
  <div class="pm7-card-content">
    Content
  </div>
</div>
```

## Anti-Patterns

### Anti-Pattern: Missing Content Wrapper
```html
<!-- NEVER -->
<div class="pm7-card">
  Direct content without wrapper
</div>

<!-- ALWAYS -->
<div class="pm7-card">
  <div class="pm7-card-content">
    Content in wrapper
  </div>
</div>
```

### Anti-Pattern: Multiple Variants
```html
<!-- NEVER -->
<div class="pm7-card pm7-card--outlined pm7-card--elevated">

<!-- ALWAYS - choose one variant -->
<div class="pm7-card pm7-card--outlined">
```

### Anti-Pattern: Nested Cards
```html
<!-- NEVER -->
<div class="pm7-card">
  <div class="pm7-card-content">
    <div class="pm7-card">
      Nested card
    </div>
  </div>
</div>

<!-- ALWAYS - use flat structure -->
<div class="pm7-card">
  <div class="pm7-card-content">Content 1</div>
</div>
<div class="pm7-card">
  <div class="pm7-card-content">Content 2</div>
</div>
```

### Anti-Pattern: Wrong Header Structure
```html
<!-- NEVER -->
<div class="pm7-card">
  <h3>Title without wrapper</h3>
  <div class="pm7-card-content">Content</div>
</div>

<!-- ALWAYS -->
<div class="pm7-card">
  <div class="pm7-card-header">
    <h3 class="pm7-card-title">Title</h3>
  </div>
  <div class="pm7-card-content">Content</div>
</div>
```

### Anti-Pattern: Custom Padding
```html
<!-- NEVER -->
<div class="pm7-card" style="padding: 2rem;">

<!-- ALWAYS - use compact variant -->
<div class="pm7-card pm7-card--compact">
```

## Rules

- ALWAYS: Include `pm7-card-content` wrapper
- ALWAYS: Use semantic HTML for card content
- ALWAYS: Place title in `pm7-card-header` with `pm7-card-title`
- NEVER: Nest cards within cards
- NEVER: Use multiple variant classes
- NEVER: Apply custom padding/margin styles
- NEVER: Use card without content wrapper

## CSS Variables

| Variable | Default Light | Default Dark | Usage |
|----------|---------------|--------------|--------|
| `--pm7-card-padding` | `1.5rem` | `1.5rem` | Content padding |
| `--pm7-card-gap` | `1rem` | `1rem` | Space between sections |
| `--pm7-card-border` | `var(--pm7-border)` | `var(--pm7-border)` | Border color |
| `--pm7-card-shadow` | `0 1px 3px rgba(0,0,0,0.1)` | `0 1px 3px rgba(0,0,0,0.3)` | Shadow |

## Accessibility

- Semantic HTML structure
- Proper heading hierarchy
- Link cards announce as interactive
- Focus indicators preserved

## Framework Usage

### React
```jsx
<div className="pm7-card">
  <div className="pm7-card-header">
    <h3 className="pm7-card-title">{title}</h3>
  </div>
  <div className="pm7-card-content">
    {content}
  </div>
</div>
```

### Vue
```vue
<template>
  <div class="pm7-card">
    <div class="pm7-card-header">
      <h3 class="pm7-card-title">{{ title }}</h3>
    </div>
    <div class="pm7-card-content">
      {{ content }}
    </div>
  </div>
</template>
```

### Next.js Link Card
```jsx
import Link from 'next/link'

<Link href="/page" className="pm7-card pm7-card--interactive">
  <div className="pm7-card-content">
    Clickable card
  </div>
</Link>
```

## Related Components

- Button: For card actions
- Dialog: Cards in modals
- Accordion: Expandable card-like sections