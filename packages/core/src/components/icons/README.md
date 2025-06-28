# Icons

pm7-ui currently provides a single, versatile hamburger menu icon, designed for consistent navigation across applications. More icons are planned for future releases.

## Installation

```bash
npm install @pm7/core
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

## Related Components

- [Button](../button/) - Icons are frequently used within buttons.
- [Menu](../menu/) - The hamburger icon is primarily designed for menu toggles.
- [Input](../input/) - Icons can be used within input fields for visual cues.