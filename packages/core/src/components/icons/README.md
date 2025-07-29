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

SVG icon library with JavaScript API.

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

## JavaScript APIs

### API: createHamburgerIconElement(options)

Creates DOM element.

```javascript
import { createHamburgerIconElement } from '@pm7/core';

// Default
const icon = createHamburgerIconElement();

// Custom
const icon = createHamburgerIconElement({
  width: 24,
  height: 20,
  color: '#1C86EF',
  className: 'my-icon'
});
```

### API: createHamburgerIcon(options)

Returns HTML string.

```javascript
import { createHamburgerIcon } from '@pm7/core';

const html = createHamburgerIcon({
  width: 16,
  height: 13,
  color: 'black',
  className: 'menu-icon'
});
```

### API: getHamburgerIconDataURI(color)

Returns data URI.

```javascript
import { getHamburgerIconDataURI } from '@pm7/core';

const dataURI = getHamburgerIconDataURI('%231C86EF');
element.style.backgroundImage = `url(${dataURI})`;
```

## API Options

| Option | Type | Default | Usage |
|--------|------|---------|-------|
| `width` | number | 18 | Icon width (px) |
| `height` | number | 15 | Icon height (px) |
| `color` | string | 'currentColor' | CSS color |
| `className` | string | '' | CSS classes |

## CSS Classes

| Class | Usage |
|-------|-------|
| `.pm7-icon` | Icon container |
| `.pm7-icon--inline` | Inline with text |
| `.pm7-icon--spin` | Rotation animation |

## Patterns

### Pattern: Button with Icon
```html
<button class="pm7-button pm7-button--primary">
  <svg width="16" height="16">...</svg>
  Menu
</button>
```

### Pattern: Icon-only Button
```html
<button class="pm7-button pm7-button--icon" aria-label="Open menu">
  <svg width="18" height="15">...</svg>
</button>
```

### Pattern: With JavaScript
```javascript
const button = document.querySelector('.menu-button');
const icon = createHamburgerIconElement({ width: 20, height: 16 });
button.appendChild(icon);
```

### Pattern: Inline Icon
```html
<span class="pm7-icon--inline">
  <svg width="14" height="14">...</svg>
</span>
Text content
```

### Pattern: Spinning Icon
```html
<span class="pm7-icon--spin">
  <svg width="16" height="16">...</svg>
</span>
```

### Pattern: Icon in Input
```html
<div class="pm7-input-group">
  <span class="pm7-input-icon">
    <svg width="16" height="16">...</svg>
  </span>
  <input class="pm7-input pm7-input--icon-left" />
</div>
```

### Pattern: Data URI Background
```javascript
import { getHamburgerIconDataURI } from '@pm7/core';

const button = document.querySelector('.button');
button.style.backgroundImage = `url(${getHamburgerIconDataURI('%23000000')})`;
button.style.backgroundRepeat = 'no-repeat';
button.style.backgroundPosition = 'center';
```

## Anti-Patterns

### Anti-Pattern: No Accessible Text
```html
<!-- NEVER -->
<button class="pm7-button pm7-button--icon">
  <svg>...</svg>
</button>

<!-- ALWAYS -->
<button class="pm7-button pm7-button--icon" aria-label="Open menu">
  <svg>...</svg>
</button>
```

### Anti-Pattern: Icon as Interactive Element
```html
<!-- NEVER -->
<svg onclick="doSomething()">...</svg>

<!-- ALWAYS -->
<button onclick="doSomething()">
  <svg>...</svg>
</button>
```

### Anti-Pattern: Conflicting Sizes
```html
<!-- NEVER -->
<svg width="24" height="24" style="width: 32px;">

<!-- ALWAYS - pick one method -->
<svg width="24" height="24">
```

### Anti-Pattern: Unencoded Colors in URLs
```javascript
// NEVER
getHamburgerIconDataURI('#1C86EF');

// ALWAYS
getHamburgerIconDataURI('%231C86EF');
```

### Anti-Pattern: Missing Container
```html
<!-- NEVER -->
<svg>...</svg> Text

<!-- ALWAYS -->
<span class="pm7-icon--inline">
  <svg>...</svg>
</span> Text
```

## Rules

- ALWAYS: Include aria-label on icon-only buttons
- ALWAYS: URL-encode colors for data URIs
- ALWAYS: Use buttons for interactive icons
- ALWAYS: Default to currentColor for flexibility
- NEVER: Use icons as standalone interactive elements
- NEVER: Mix sizing methods (attributes vs CSS)
- NEVER: Omit accessible text alternatives
- NEVER: Use raw # in data URI colors

## Icon Specifications

### Hamburger Icon
- Default: 18×15px
- Bar height: 2.5px
- Bar spacing: 3.75px
- Corner radius: 1.25px
- Fill: currentColor

## Framework Usage

### React
```jsx
import { createHamburgerIcon } from '@pm7/core';

function MenuButton() {
  return (
    <button 
      className="pm7-button pm7-button--icon"
      aria-label="Menu"
      dangerouslySetInnerHTML={{ 
        __html: createHamburgerIcon({ width: 20, height: 16 }) 
      }}
    />
  );
}
```

### Vue
```vue
<template>
  <button 
    class="pm7-button pm7-button--icon"
    aria-label="Menu"
    v-html="iconHtml"
  />
</template>

<script>
import { createHamburgerIcon } from '@pm7/core';

export default {
  computed: {
    iconHtml() {
      return createHamburgerIcon({ width: 20, height: 16 });
    }
  }
}
</script>
```

## Performance

- SVG icons scale without quality loss
- Data URIs eliminate HTTP requests
- currentColor reduces style calculations
- Inline SVG allows CSS manipulation

## Accessibility

- Icons hidden with aria-hidden="true"
- Parent element provides context
- currentColor ensures contrast
- Keyboard navigation on parent

## Related Components

- Button: Icon container
- Input: Icon placement
- Menu: Primary use case