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

# Component: Icons

PM7 standard icons. Currently: hamburger menu icon.

## Installation

```bash
npm install @pm7/core
```

### JS Import

```javascript
// ES modules
import { createHamburgerIconElement, createHamburgerIcon, getHamburgerIconDataURI } from '@pm7/core';

// CommonJS
const { createHamburgerIconElement } = require('@pm7/core');

// Global (via CDN)
const { createHamburgerIconElement } = window.PM7;
```

## Icon Specifications

| Icon | Dimensions | Details |
|------|------------|---------|
| Hamburger | 18×15px | 3 bars, 2.5px height, 3.75px spacing, 1.25px radius |

## Patterns

### Pattern: Hamburger Icon Element
```javascript
// Default (18x15)
const icon = createHamburgerIconElement();
document.getElementById('menu-trigger').appendChild(icon);

// Custom size
const icon = createHamburgerIconElement({ width: 24, height: 20 });

// Custom color
const icon = createHamburgerIconElement({ color: '#1C86EF' });

// With CSS class
const icon = createHamburgerIconElement({ className: 'menu-icon' });
```

### Pattern: Hamburger Icon HTML String
```javascript
const iconHTML = createHamburgerIcon({ className: 'my-icon' });
document.getElementById('container').innerHTML = iconHTML;

// In template literal
const button = `
  <button class="pm7-button">
    ${createHamburgerIcon()}
    <span>Menu</span>
  </button>
`;
```

### Pattern: Hamburger Icon Data URI
```javascript
// For CSS background (color must be URL-encoded)
const dataURI = getHamburgerIconDataURI('%231C86EF');
element.style.backgroundImage = `url(${dataURI})`;

// Default color
const dataURI = getHamburgerIconDataURI('currentColor');
```

### Pattern: Icon Button
```html
<button type="button" class="pm7-button pm7-button--ghost pm7-button--icon" aria-label="Menu">
  <svg width="18" height="15" viewBox="0 0 18 15" fill="currentColor">
    <rect x="0" y="0" width="18" height="2.5" rx="1.25" />
    <rect x="0" y="6.25" width="18" height="2.5" rx="1.25" />
    <rect x="0" y="12.5" width="18" height="2.5" rx="1.25" />
  </svg>
</button>
```

### Pattern: Icon with Text Button
```html
<button type="button" class="pm7-button pm7-button--primary">
  <svg class="pm7-button-icon" width="18" height="15" viewBox="0 0 18 15" fill="currentColor">
    <rect x="0" y="0" width="18" height="2.5" rx="1.25" />
    <rect x="0" y="6.25" width="18" height="2.5" rx="1.25" />
    <rect x="0" y="12.5" width="18" height="2.5" rx="1.25" />
  </svg>
  <span>Menu</span>
</button>
```

### Pattern: Dynamic Icon Creation
```javascript
// Create and append
const button = document.querySelector('.menu-button');
const icon = createHamburgerIconElement({ width: 16, height: 13 });
button.appendChild(icon);

// Replace existing
const oldIcon = button.querySelector('svg');
const newIcon = createHamburgerIconElement({ color: '#FF0000' });
button.replaceChild(newIcon, oldIcon);
```

### Pattern: CSS Background Icon
```css
.menu-trigger::before {
  content: '';
  display: inline-block;
  width: 18px;
  height: 15px;
  background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="18" height="15" viewBox="0 0 18 15" fill="currentColor"><rect x="0" y="0" width="18" height="2.5" rx="1.25"/><rect x="0" y="6.25" width="18" height="2.5" rx="1.25"/><rect x="0" y="12.5" width="18" height="2.5" rx="1.25"/></svg>');
  background-repeat: no-repeat;
  background-position: center;
}
```

## Anti-Patterns

### Anti-Pattern: Missing Aria Label
```javascript
// NEVER - icon-only button without label
<button class="pm7-button pm7-button--icon">
  ${createHamburgerIcon()}
</button>

// ALWAYS
<button class="pm7-button pm7-button--icon" aria-label="Open menu">
  ${createHamburgerIcon()}
</button>
```

### Anti-Pattern: Wrong Color Format for Data URI
```javascript
// NEVER - unencoded color
const dataURI = getHamburgerIconDataURI('#1C86EF');

// ALWAYS - URL-encoded color
const dataURI = getHamburgerIconDataURI('%231C86EF');
```

### Anti-Pattern: Hardcoded SVG Without ViewBox
```html
<!-- NEVER -->
<svg width="18" height="15">
  <rect x="0" y="0" width="18" height="2.5" />
</svg>

<!-- ALWAYS -->
<svg width="18" height="15" viewBox="0 0 18 15">
  <rect x="0" y="0" width="18" height="2.5" rx="1.25" />
</svg>
```

### Anti-Pattern: Scaling Without Aspect Ratio
```javascript
// NEVER - arbitrary dimensions
createHamburgerIconElement({ width: 30, height: 15 });

// ALWAYS - maintain aspect ratio
createHamburgerIconElement({ width: 24, height: 20 }); // 1.2:1 ratio
createHamburgerIconElement({ width: 12, height: 10 }); // 1.2:1 ratio
```

## API Reference

### createHamburgerIconElement(options)

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `width` | number | 18 | Icon width |
| `height` | number | 15 | Icon height |
| `color` | string | 'currentColor' | Icon color |
| `className` | string | '' | CSS class |

Returns: `SVGElement`

### createHamburgerIcon(options)

Same options as `createHamburgerIconElement`.
Returns: `string` (HTML)

### getHamburgerIconDataURI(color)

| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `color` | string | 'currentColor' | URL-encoded color |

Returns: `string` (data URI)

## Rules

- ALWAYS: Include `aria-label` on icon-only buttons
- ALWAYS: URL-encode colors for data URIs
- ALWAYS: Include `viewBox` on SVG elements
- ALWAYS: Maintain 1.2:1 aspect ratio for hamburger icon
- NEVER: Use icons without accessible text/labels
- NEVER: Hardcode dimensions without viewBox
- NEVER: Apply transform/scale CSS to icons

## Framework Usage

### React
```jsx
import { HamburgerIcon } from '@pm7/react';

<button className="pm7-button pm7-button--ghost">
  <HamburgerIcon width={16} height={13} />
  <span>Menu</span>
</button>
```

### Vue
```vue
<template>
  <button class="pm7-button pm7-button--ghost">
    <hamburger-icon :width="16" :height="13" />
    <span>Menu</span>
  </button>
</template>

<script>
import { HamburgerIcon } from '@pm7/vue';
export default {
  components: { HamburgerIcon }
}
</script>
```

## Related Components

- Button: Icon buttons
- Menu: Triggered by hamburger icon