# Icons

pm7-ui currently provides a single, versatile hamburger menu icon, designed for consistent navigation across applications. More icons are planned for future releases.

## Installation

```bash
npm install @pm7/core
```

### CSS Import (Required!)

```javascript
// For React projects
import '@pm7/core/dist/pm7.css';

// For vanilla HTML
<link rel="stylesheet" href="node_modules/@pm7/core/dist/pm7.css">
```

⚠️ **Important**: The CSS file is located at `@pm7/core/dist/pm7.css`, NOT `@pm7/core/dist/index.css`.

### React Usage

If you're using the React components:

```bash
npm install @pm7/react @pm7/core
```

```javascript
import { HamburgerIcon } from '@pm7/react';
import '@pm7/core/dist/pm7.css'; // Don't forget this!
```

## Usage

### JavaScript API

The hamburger icon can be used in three ways:

#### 1. createHamburgerIconElement(options)

Creates and returns an SVG DOM element for the hamburger icon.

```javascript
import { createHamburgerIconElement } from '@pm7/core';

// Default icon (18x15px, currentColor)
const iconElement = createHamburgerIconElement();
document.getElementById('my-menu-button').appendChild(iconElement);

// Custom size and color
const customIconElement = createHamburgerIconElement({
  width: 24,   // Width in pixels
  height: 20,  // Height in pixels
  color: '#1C86EF', // Any valid CSS color
  className: 'my-custom-icon' // Optional CSS class
});
document.getElementById('my-other-button').appendChild(customIconElement);
```

#### 2. createHamburgerIcon(options)

Returns the SVG markup for the hamburger icon as an HTML string.

```javascript
import { createHamburgerIcon } from '@pm7/core';

// Get icon as HTML string
const iconHtmlString = createHamburgerIcon({
  width: 16,
  height: 13,
  color: 'black',
  className: 'menu-icon'
});

// Use in your HTML template or innerHTML
const buttonMarkup = `
  <button class="pm7-button">
    ${iconHtmlString}
    <span>Menu</span>
  </button>
`;
```

#### 3. getHamburgerIconDataURI(color)

Returns the SVG markup as a Data URI, useful for CSS `background-image` properties.

```javascript
import { getHamburgerIconDataURI } from '@pm7/core';

// Get data URI for a specific color (URL-encoded color value)
const dataURI = getHamburgerIconDataURI('%231C86EF'); // URL-encoded #1C86EF

// Apply to an element's style
document.getElementById('my-div').style.backgroundImage = `url(${dataURI})`;

// Or use directly in CSS
// .my-element {
//   background-image: url("data:image/svg+xml,%3Csvg ... %3E");
// }
```

## API Reference

### Options for `createHamburgerIconElement` and `createHamburgerIcon`

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `width` | number | 18 | Icon width in pixels. |
| `height` | number | 15 | Icon height in pixels. |
| `color` | string | 'currentColor' | Icon color (any valid CSS color string). |
| `className` | string | '' | CSS class name(s) to apply to the SVG element. |

### Arguments for `getHamburgerIconDataURI`

| Argument | Type | Description |
|----------|------|-------------|
| `color` | string | The color for the icon, URL-encoded (e.g., '%23FF0000' for red). |

## Specifications (Hamburger Icon)

- **Default dimensions:** 18×15 pixels (width x height)
- **Bar height:** 2.5 pixels
- **Bar spacing:** 3.75 pixels between bars
- **Corner radius:** 1.25 pixels (rounded bars)
- **Color:** Inherits from `currentColor` by default, allowing easy CSS customization.

## Accessibility

- The generated SVG includes `role="img"` and `aria-hidden="true"` by default when used decoratively.
- When used as an interactive element (e.g., a menu toggle), ensure the parent button or link has an appropriate `aria-label` or accessible text content.
- Icons inherit `currentColor` by default, ensuring they adapt to text color for better contrast.

## Best Practices

1. **Semantic Usage**: Use icons to enhance meaning, not replace text entirely. Always provide alternative text or `aria-label` for interactive icons.
2. **Consistency**: Use icons consistently throughout your application to avoid user confusion.
3. **Sizing**: Use the `width` and `height` options to control icon size, or scale via CSS `font-size` if `currentColor` is used.
4. **Coloring**: Prefer `currentColor` for icons that should match surrounding text. Use explicit `color` options for standalone icons or specific branding.
5. **Performance**: SVG icons are lightweight and scalable, making them ideal for performance.

## CSS Classes

PM7 Icons are implemented as inline SVG, not CSS classes. However, you can apply these utility classes to icon containers:

| Class | Description | Example |
|-------|-------------|---------|
| `pm7-icon` | Base class for icon containers (optional) | `<span class="pm7-icon">SVG here</span>` |
| `pm7-icon--inline` | Inline icon with text | `<span class="pm7-icon--inline">SVG</span> Text` |
| `pm7-icon--spin` | Rotating animation (for spinners) | `<span class="pm7-icon--spin">SVG</span>` |

## Common Pitfalls

### ❌ Don't rely on icons alone for meaning
```html
<!-- Wrong - no text alternative -->
<button class="pm7-button pm7-button--icon">
  <pm7-icon-hamburger></pm7-icon-hamburger>
</button>

<!-- Correct - include aria-label -->
<button class="pm7-button pm7-button--icon" aria-label="Open menu">
  <pm7-icon-hamburger></pm7-icon-hamburger>
</button>
```

### ❌ Don't hardcode dimensions in both HTML and CSS
```html
<!-- Wrong - conflicting size definitions -->
<pm7-icon-hamburger width="24" height="24" style="width: 32px; height: 32px;"></pm7-icon-hamburger>

<!-- Correct - use one method -->
<pm7-icon-hamburger width="24" height="24"></pm7-icon-hamburger>
<!-- OR -->
<pm7-icon-hamburger style="font-size: 24px;"></pm7-icon-hamburger>
```

### ❌ Don't forget to URL-encode colors
```javascript
// Wrong - unencoded hash
PM7Icons.hamburger({ color: '#1C86EF' });

// Correct - URL-encoded
PM7Icons.hamburger({ color: '%231C86EF' });
// OR use CSS
<pm7-icon-hamburger style="color: #1C86EF;"></pm7-icon-hamburger>
```

### ❌ Don't use icons in place of proper HTML elements
```html
<!-- Wrong - icon as clickable element -->
<pm7-icon-hamburger onclick="toggleMenu()"></pm7-icon-hamburger>

<!-- Correct - icon inside button -->
<button onclick="toggleMenu()" aria-label="Toggle menu">
  <pm7-icon-hamburger></pm7-icon-hamburger>
</button>
```

## Usage Examples in Different Contexts

### In Buttons
```html
<!-- Icon with text -->
<button class="pm7-button pm7-button--primary">
  <pm7-icon-hamburger width="16" height="16"></pm7-icon-hamburger>
  Menu
</button>

<!-- Icon-only button -->
<button class="pm7-button pm7-button--ghost pm7-button--icon" aria-label="Open menu">
  <pm7-icon-hamburger></pm7-icon-hamburger>
</button>
```

### In Navigation
```html
<!-- Mobile menu toggle -->
<nav class="pm7-navbar">
  <button class="pm7-menu-toggle" aria-label="Toggle navigation">
    <pm7-icon-hamburger></pm7-icon-hamburger>
  </button>
  <div class="pm7-navbar-brand">My App</div>
</nav>
```

### In Cards
```html
<!-- Card with icon header -->
<div class="pm7-card">
  <div class="pm7-card-header">
    <div style="display: flex; align-items: center; gap: 0.5rem;">
      <pm7-icon-hamburger style="color: var(--pm7-primary);"></pm7-icon-hamburger>
      <h3 class="pm7-card-title">Menu Options</h3>
    </div>
  </div>
  <div class="pm7-card-content">
    <!-- Content -->
  </div>
</div>
```

### With Loading States
```html
<!-- Custom spinner using SVG -->
<button class="pm7-button pm7-button--primary" disabled>
  <span class="pm7-icon--spin">
    <svg width="16" height="16" viewBox="0 0 24 24">
      <!-- Your spinner SVG -->
    </svg>
  </span>
  Loading...
</button>
```

### In Form Fields
```html
<!-- Search input with icon -->
<div class="pm7-input-group">
  <span class="pm7-input-icon">
    <svg width="16" height="16"><!-- Search icon --></svg>
  </span>
  <input type="search" class="pm7-input pm7-input--icon-left" placeholder="Search...">
</div>
```

## Browser Compatibility

PM7 Icons work in all modern browsers that support:
- Custom Elements (Web Components)
- SVG inline rendering
- ES6 modules (for JavaScript usage)

| Browser | Minimum Version |
|---------|----------------|
| Chrome | 54+ |
| Firefox | 63+ |
| Safari | 10.1+ |
| Edge | 79+ |

For older browsers, use the JavaScript API with polyfills for custom elements.

## Related Components

- [Button](../button/) - Icons are frequently used within buttons.
- [Menu](../menu/) - The hamburger icon is primarily designed for menu toggles.
- [Input](../input/) - Icons can be used within input fields for visual cues.