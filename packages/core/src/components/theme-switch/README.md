# PM7 Theme Switch Component

A modern, accessible theme toggle switch for switching between light and dark modes. Features automatic system preference detection, localStorage persistence, and smooth animations.

## Installation

```bash
npm install @pm7/core
```

Import the CSS and JavaScript:

```javascript
// CSS
import '@pm7/core/dist/pm7.css';

// JavaScript (if using the component programmatically)
import { PM7ThemeSwitch } from '@pm7/core';
```

## Basic Usage

### HTML

```html
<!-- Basic theme switch with label -->
<div class="pm7-theme-switch" data-pm7-theme-switch>
  <span>Theme</span>
</div>

<!-- Without label -->
<div class="pm7-theme-switch" data-pm7-theme-switch></div>

<!-- Small size -->
<div class="pm7-theme-switch pm7-theme-switch--sm" data-pm7-theme-switch>
  <span>Dark mode</span>
</div>
```

### React

```jsx
function ThemeToggle() {
  return (
    <div className="pm7-theme-switch" data-pm7-theme-switch>
      <span>Theme</span>
    </div>
  );
}
```

### Vue

```vue
<template>
  <div class="pm7-theme-switch" data-pm7-theme-switch>
    <span>Theme</span>
  </div>
</template>
```

## Features

- **Auto-initialization**: Components with `data-pm7-theme-switch` are automatically initialized
- **System preference detection**: Respects user's OS theme preference
- **LocalStorage persistence**: Remembers user's choice across sessions
- **Smooth animations**: Elegant transitions between states
- **Keyboard accessible**: Full keyboard navigation support
- **Framework agnostic**: Works with any JavaScript framework
- **Zero dependencies**: Pure CSS and vanilla JavaScript

## CSS Classes

### Base Classes
- `pm7-theme-switch` - Container element
- `pm7-theme-switch-button` - Toggle button (auto-created)
- `pm7-theme-switch-thumb` - Moving thumb indicator (auto-created)
- `pm7-theme-switch-icon` - Icon container (auto-created)

### Size Modifiers
- `pm7-theme-switch--sm` - Small size (42px × 21px)
- `pm7-theme-switch--lg` - Large size (70px × 35px)

### State Modifiers
- `pm7-theme-switch--disabled` - Disabled state
- `pm7-theme-switch--no-hover` - Removes hover effects

### Layout Modifiers
- `pm7-theme-switch--label-start` - Places label before the switch

### Position Modifiers
- `pm7-theme-switch--fixed` - Fixed position (bottom right) with label
- `pm7-theme-switch--fixed-icon` - Fixed position circular button (icon only)

## Data Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `data-pm7-theme-switch` | boolean | - | Marks element for auto-initialization |
| `data-theme` | string | 'light' | Current theme state (auto-managed) |
| `data-default-theme` | string | null | Override default theme |
| `data-storage-key` | string | 'pm7-theme' | LocalStorage key |
| `data-apply-to-root` | boolean | true | Apply 'dark' class to document |

## JavaScript API

### Initialization

```javascript
import { PM7ThemeSwitch } from '@pm7/core';

// Auto-initialization (happens on DOMContentLoaded)
// Elements with data-pm7-theme-switch are initialized automatically

// Manual initialization
const element = document.querySelector('.my-theme-switch');
const themeSwitch = new PM7ThemeSwitch(element, {
  defaultTheme: 'dark',
  storageKey: 'my-app-theme',
  applyToRoot: true,
  onChange: (theme) => {
    console.log('Theme changed to:', theme);
  }
});
```

### Methods

```javascript
// Set theme programmatically
themeSwitch.setTheme('dark');

// Get current theme
const currentTheme = themeSwitch.getTheme(); // 'light' or 'dark'

// Toggle theme
themeSwitch.toggle();
```

### Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `defaultTheme` | string | null | Initial theme ('light', 'dark', or null for auto) |
| `storageKey` | string | 'pm7-theme' | LocalStorage key for persistence |
| `applyToRoot` | boolean | true | Apply 'dark' class to document root |
| `onChange` | function | null | Callback when theme changes |

## Examples

### Custom Storage Key

```html
<div class="pm7-theme-switch" 
     data-pm7-theme-switch
     data-storage-key="my-app-theme">
</div>
```

### Without Root Class Application

```html
<!-- Useful when managing theme at component level -->
<div class="pm7-theme-switch" 
     data-pm7-theme-switch
     data-apply-to-root="false">
</div>
```

### Force Default Theme

```html
<!-- Always start with dark theme -->
<div class="pm7-theme-switch" 
     data-pm7-theme-switch
     data-default-theme="dark">
</div>
```

### In a Navigation Bar

```html
<nav class="navbar">
  <div class="navbar-brand">My App</div>
  <div class="navbar-menu">
    <a href="#">Home</a>
    <a href="#">About</a>
  </div>
  <div class="pm7-theme-switch pm7-theme-switch--sm" data-pm7-theme-switch></div>
</nav>
```

### Fixed/Floating Theme Switch

Create a persistent theme switch that stays fixed in the corner of the viewport:

```html
<!-- Fixed icon-only variant (recommended) -->
<div class="pm7-theme-switch--fixed-icon" data-pm7-theme-switch></div>

<!-- Fixed with label -->
<div class="pm7-theme-switch--fixed" data-pm7-theme-switch>
  <span>Theme</span>
</div>

<!-- Small fixed icon -->
<div class="pm7-theme-switch--fixed-icon pm7-theme-switch--sm" data-pm7-theme-switch></div>
```

The fixed theme switch:
- Stays in the bottom-right corner (24px from edges)
- Remains visible when scrolling
- Has a higher z-index (9999) to stay above other content
- Includes entrance animation
- Scales on hover for better interaction feedback

### Header with Menu and Centered Logo

Common pattern for headers with hamburger menu, theme switch, and centered logo:

```html
<header class="header">
  <div style="display: grid; grid-template-columns: 1fr auto 1fr; align-items: center;">
    <!-- Left: Menu button and Theme Switch -->
    <div style="display: flex; align-items: center; gap: 1rem;">
      <button class="pm7-menu-trigger" aria-label="Toggle menu">
        <svg width="24" height="24"><!-- hamburger icon --></svg>
      </button>
      <div class="pm7-theme-switch pm7-theme-switch--sm" data-pm7-theme-switch></div>
    </div>
    
    <!-- Center: Logo -->
    <div style="text-align: center;">
      <img src="logo.svg" alt="Company Logo" height="32">
    </div>
    
    <!-- Right: Additional navigation -->
    <div style="text-align: right;">
      <a href="/login">Login</a>
    </div>
  </div>
</header>
```

### Settings Panel

```html
<div class="settings-panel">
  <h3>Appearance</h3>
  <div class="setting-item">
    <label>Theme</label>
    <div class="pm7-theme-switch" data-pm7-theme-switch>
      <span>Dark mode</span>
    </div>
  </div>
</div>
```

### With Custom onChange Handler

```javascript
const themeSwitch = new PM7ThemeSwitch(element, {
  onChange: (theme) => {
    // Update your app's theme
    updateAppTheme(theme);
    
    // Track analytics
    analytics.track('theme_changed', { theme });
    
    // Update other components
    document.querySelectorAll('.theme-aware').forEach(el => {
      el.dataset.theme = theme;
    });
  }
});
```

## Dark Mode Implementation

### Preventing Dark Mode Flicker

To prevent a flash of light mode when your page loads in dark mode, add this script to your `<head>` BEFORE any stylesheets:

```html
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  
  <!-- Dark mode flicker prevention - MUST come BEFORE stylesheets -->
  <script>
    (function() {
      const savedTheme = localStorage.getItem('pm7-theme');
      if (savedTheme === 'dark' || (!savedTheme && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
      }
    })();
  </script>
  
  <!-- Your stylesheets come AFTER the script -->
  <link rel="stylesheet" href="@pm7/core/dist/pm7.css">
  <link rel="stylesheet" href="your-styles.css">
</head>
```

### Full Implementation Example

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <!-- Flicker prevention script here -->
  <script>
    (function() {
      const savedTheme = localStorage.getItem('pm7-theme');
      if (savedTheme === 'dark' || (!savedTheme && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
      }
    })();
  </script>
  
  <link rel="stylesheet" href="@pm7/core/dist/pm7.css">
</head>
<body>
  <!-- Theme switch auto-initializes on page load -->
  <div class="pm7-theme-switch" data-pm7-theme-switch>
    <span>Theme</span>
  </div>
  
  <script type="module">
    import '@pm7/core';
    // Theme switch is now active!
  </script>
</body>
</html>
```

## Styling

### CSS Variables

The component uses these CSS variables:

```css
:root {
  --pm7-theme-switch-bg: white;
  --pm7-theme-switch-thumb-bg-light: #FFD43B;
  --pm7-theme-switch-thumb-bg-dark: #6E6E6E;
  --pm7-theme-switch-icon-light: black;
  --pm7-theme-switch-icon-dark: white;
  --pm7-theme-switch-width: 56px;
  --pm7-theme-switch-height: 28px;
  --pm7-theme-switch-thumb-size: 24px;
}
```

### Custom Styling

```css
/* Custom colors */
.my-custom-switch {
  --pm7-theme-switch-thumb-bg-light: #FFA500;
  --pm7-theme-switch-thumb-bg-dark: #4B0082;
}

/* Custom size */
.my-custom-switch {
  --pm7-theme-switch-width: 80px;
  --pm7-theme-switch-height: 40px;
  --pm7-theme-switch-thumb-size: 36px;
}
```

## Accessibility

The Theme Switch component follows WCAG 2.1 AA guidelines:

- **Keyboard Navigation**: Fully navigable with Tab key
- **Keyboard Activation**: Toggle with Space or Enter keys
- **ARIA Attributes**: 
  - `role="switch"` on the button
  - `aria-checked` reflects current state
  - `aria-label` provides context
- **Focus Indicators**: Clear focus state for keyboard users
- **Motion Preferences**: Respects `prefers-reduced-motion`
- **Screen Reader Support**: Announces state changes

## Browser Support

- Chrome/Edge: Latest versions
- Firefox: Latest version
- Safari: 14+
- Mobile browsers: iOS Safari 14+, Chrome Android

## Tips

1. **Place strategically**: Common locations include header navigation, settings panels, or footer
2. **Use appropriate size**: Small for navigation bars, medium/large for settings pages
3. **Consider label**: Include label for clarity, especially in settings contexts
4. **Test both themes**: Ensure your app looks good in both light and dark modes
5. **Respect user choice**: The component automatically remembers and applies user preference

## Common Issues

### Theme not persisting
- Check if localStorage is available/enabled
- Verify the storage key isn't conflicting with other scripts
- Ensure JavaScript is loaded and executing

### Theme not applying to page
- Verify `data-apply-to-root` isn't set to "false"
- Check if your CSS uses the `.dark` class for dark mode styles
- Ensure the component is initialized before other theme-dependent scripts

### Icons not showing
- The component creates SVG icons automatically
- If overriding styles, ensure the icons remain visible
- Check for CSS conflicts that might hide the SVG elements

### Size modifiers not working
- The component preserves existing CSS classes when initializing
- Ensure size modifier classes (e.g., `pm7-theme-switch--sm`) are present in the HTML
- If adding size dynamically, do so before initialization or reinitialize the component

### Dark mode flicker on page load
- Add the flicker prevention script to your `<head>` BEFORE any stylesheets
- The script must run synchronously to set the dark class before rendering
- See the "Dark Mode Implementation" section for the complete solution