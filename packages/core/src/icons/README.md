# Icons

PM7 UI provides a set of standard icons that maintain consistency across applications. Currently featuring the distinctive PM7 hamburger menu icon with more icons planned.

## Installation

```bash
npm install @pm7/core
```

## Usage

### Import Methods

```javascript
// ES6 import
import { 
  createHamburgerIconElement, 
  createHamburgerIcon, 
  getHamburgerIconDataURI 
} from '@pm7/core';

// CommonJS
const { createHamburgerIconElement } = require('@pm7/core');

// Via CDN
<script src="https://unpkg.com/@pm7/core"></script>
```

## Hamburger Menu Icon

The standard PM7 hamburger menu icon features distinctive rounded bars.

### Specifications

- **Default dimensions:** 18×15 pixels
- **Bar height:** 2.5 pixels
- **Bar spacing:** 3.75 pixels between bars
- **Corner radius:** 1.25 pixels (rounded bars)
- **Color:** Inherits from currentColor by default

### Create DOM Element

```javascript
import { createHamburgerIconElement } from '@pm7/core';

// Default icon (18x15)
const icon = createHamburgerIconElement();
document.getElementById('menu-trigger').appendChild(icon);

// Custom size
const smallIcon = createHamburgerIconElement({ 
  width: 12, 
  height: 10 
});

// Custom color
const coloredIcon = createHamburgerIconElement({ 
  color: '#1C86EF' 
});

// With CSS class
const styledIcon = createHamburgerIconElement({ 
  className: 'menu-icon' 
});
```

### Get HTML String

```javascript
import { createHamburgerIcon } from '@pm7/core';

// Get icon as HTML string
const iconHTML = createHamburgerIcon({
  className: 'my-hamburger-icon'
});

// Use in template
const button = `
  <button class="pm7-button">
    ${iconHTML}
    <span>Menu</span>
  </button>
`;

// Insert into DOM
document.getElementById('container').innerHTML = iconHTML;
```

### Use as CSS Background

```javascript
import { getHamburgerIconDataURI } from '@pm7/core';

// Get data URI for CSS
const dataURI = getHamburgerIconDataURI('%231C86EF'); // Blue color

// Apply as background
button.style.backgroundImage = `url(${dataURI})`;

// Or use in stylesheet
const style = `
  .menu-button::before {
    content: '';
    width: 18px;
    height: 15px;
    background-image: url(${dataURI});
    background-repeat: no-repeat;
    background-position: center;
  }
`;
```

## API Reference

### Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `width` | number | 18 | Icon width in pixels |
| `height` | number | 15 | Icon height in pixels |
| `color` | string | 'currentColor' | Icon color (any valid CSS color) |
| `className` | string | '' | CSS class name to apply to the SVG |

### Functions

#### createHamburgerIconElement(options)
Creates and returns a DOM element (SVG) for the hamburger icon.

```javascript
const icon = createHamburgerIconElement({
  width: 24,
  height: 20,
  color: '#1C86EF',
  className: 'custom-icon'
});
```

#### createHamburgerIcon(options)
Returns the hamburger icon as an HTML string.

```javascript
const iconHTML = createHamburgerIcon({
  width: 16,
  height: 13,
  className: 'menu-trigger-icon'
});
```

#### getHamburgerIconDataURI(color)
Returns a data URI for use in CSS or as an image source.

```javascript
// Note: Color must be URL-encoded
const dataURI = getHamburgerIconDataURI('%23FF0000'); // Red
const dataURI = getHamburgerIconDataURI('currentColor'); // Inherit color
```

## Integration Examples

### With PM7 Button

```html
<button class="pm7-button pm7-button--ghost">
  <span id="menu-icon"></span>
  <span>Menu</span>
</button>

<script>
  const icon = createHamburgerIconElement({ width: 16, height: 13 });
  document.getElementById('menu-icon').appendChild(icon);
</script>
```

### In Navigation

```javascript
// Create navigation menu trigger
const navTrigger = document.createElement('button');
navTrigger.className = 'nav-menu-trigger';
navTrigger.setAttribute('aria-label', 'Open navigation menu');

const icon = createHamburgerIconElement();
navTrigger.appendChild(icon);

document.querySelector('.navbar').appendChild(navTrigger);
```

### Responsive Sizes

```javascript
// Use different icon sizes for different screens
function getIconSize() {
  const width = window.innerWidth;
  if (width < 640) return { width: 16, height: 13 };
  if (width < 1024) return { width: 18, height: 15 };
  return { width: 24, height: 20 };
}

const icon = createHamburgerIconElement(getIconSize());
```

## React Usage

When using @pm7/react:

```jsx
import { HamburgerIcon } from '@pm7/react';

function MenuButton() {
  return (
    <button className="pm7-button pm7-button--ghost">
      <HamburgerIcon width={16} height={13} />
      <span>Menu</span>
    </button>
  );
}

// With custom props
function CustomMenuIcon() {
  return (
    <HamburgerIcon 
      width={24} 
      height={20} 
      color="#1C86EF" 
      className="large-menu-icon"
    />
  );
}
```

## Vue Usage

When using @pm7/vue:

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

## Accessibility

- The icon SVG includes proper viewBox for scaling
- When used as a button, always include descriptive text or aria-label
- The icon color inherits from currentColor for proper contrast
- Maintains aspect ratio when scaled

## Best Practices

1. **Consistent sizing**: Use the default 18×15 size for most cases
2. **Color inheritance**: Let the icon inherit color from its parent when possible
3. **Accessible labels**: Always pair with descriptive text or ARIA labels
4. **Responsive design**: Consider using smaller sizes on mobile devices
5. **Performance**: Use data URIs for CSS backgrounds to reduce HTTP requests

## Related Components

- [Button](../button/) - Often used with icon buttons
- [Menu](../menu/) - Hamburger icon typically triggers menu components