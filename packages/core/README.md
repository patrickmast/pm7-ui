# @pm7/core

Pure CSS and vanilla JavaScript components for PM7 applications. Framework-agnostic UI components that work everywhere.

## Installation

```bash
npm install @pm7/core
```

## Usage

### CSS Only

Include the CSS file in your HTML:

```html
<!-- In your HTML head -->
<link rel="stylesheet" href="node_modules/@pm7/core/dist/pm7.css">
```

Use PM7 components with class names:

```html
<button class="pm7-button pm7-button--primary">
  Click me
</button>

<button class="pm7-button pm7-button--outline pm7-button--sm">
  Small Outline Button
</button>
```

### Interactive Components

For components that require JavaScript (like menus, dialogs), import and initialize:

```javascript
import { PM7Menu } from '@pm7/core';

// Initialize menu component
const menuElement = document.querySelector('[data-pm7-menu]');
new PM7Menu(menuElement);
```

## Available Components

- **Button** - Various styles, sizes, and states
- **Menu** - Dropdown menus with keyboard navigation (coming soon)
- **Dialog** - Modal dialogs (coming soon)
- **Card** - Content containers (coming soon)
- **Input** - Form inputs (coming soon)
- **Toast** - Notifications (coming soon)

## Button Component

### Variants
- `pm7-button--primary` (default)
- `pm7-button--secondary`
- `pm7-button--outline`
- `pm7-button--ghost`
- `pm7-button--destructive`
- `pm7-button--link`

### Sizes
- `pm7-button--sm` - Small
- `pm7-button--md` - Medium (default)
- `pm7-button--lg` - Large

### States
- `disabled` - Disabled state
- `pm7-button--full` - Full width

### Examples

```html
<!-- Primary button -->
<button class="pm7-button pm7-button--primary">
  Save Changes
</button>

<!-- Outline button, small size -->
<button class="pm7-button pm7-button--outline pm7-button--sm">
  Cancel
</button>

<!-- Destructive button, full width -->
<button class="pm7-button pm7-button--destructive pm7-button--full">
  Delete Account
</button>

<!-- Button group -->
<div class="pm7-button-group">
  <button class="pm7-button pm7-button--outline">Left</button>
  <button class="pm7-button pm7-button--outline">Center</button>
  <button class="pm7-button pm7-button--outline">Right</button>
</div>
```

## Customization

PM7 components use CSS custom properties for easy theming:

```css
:root {
  /* Override primary color */
  --pm7-primary: #your-color;
  --pm7-primary-hover: #your-hover-color;
  
  /* Override spacing */
  --pm7-spacing-unit: 0.25rem;
  
  /* Override fonts */
  --pm7-font-sans: 'Your Font', sans-serif;
}
```

## Dark Mode

PM7 components support dark mode automatically via `prefers-color-scheme`. You can also toggle manually:

```html
<html class="dark">
  <!-- Your content -->
</html>
```

## Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)

## License

MIT © Patrick Mast

## Links

- [Documentation](https://pm7-ui.com)
- [GitHub](https://github.com/patrickmast/pm7-ui)
- [Examples](https://pm7-ui.com/components.html)