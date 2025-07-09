# Upgrade Guide: PM7 UI v2

This guide covers upgrading from PM7 UI v1.x to v2.x.

## New in v2.1: AI-Agent FIRST Design

All interactive components now automatically add their required CSS classes when initialized via data attributes:
- `data-pm7-accordion` automatically adds `.pm7-accordion`
- `data-pm7-dialog` automatically adds `.pm7-dialog`
- `data-pm7-menu` automatically adds `.pm7-menu`
- `data-pm7-tab-selector` automatically adds `.pm7-tab-selector`
- `data-pm7-tooltip` automatically adds `.pm7-tooltip`
- `data-pm7-theme-switch` automatically adds `.pm7-theme-switch`

**Result**: You only need to add the data attribute - the CSS class is handled automatically!

## Breaking Changes

### 1. React Package Removed

The `@pm7/react` package has been completely removed. PM7 UI is now framework-agnostic and uses pure CSS classes.

**Before (v1.x):**
```jsx
import { Button, Card } from '@pm7/react';

<Button variant="primary">Click me</Button>
<Card title="My Card">Content</Card>
```

**After (v2.x):**
```jsx
import '@pm7/core/dist/pm7.css';

<button className="pm7-button pm7-button--primary">Click me</button>
<div className="pm7-card">
  <div className="pm7-card-header">My Card</div>
  <div className="pm7-card-body">Content</div>
</div>
```

### 2. CSS Class Name Changes

Some CSS class names have been updated for consistency:

| v1.x Class | v2.x Class |
|------------|------------|
| `pm7-btn` | `pm7-button` |
| `pm7-btn-primary` | `pm7-button--primary` |
| `pm7-btn-secondary` | `pm7-button--secondary` |
| `pm7-btn-sm` | `pm7-button--sm` |
| `pm7-btn-lg` | `pm7-button--lg` |

### 3. Component Structure Changes

#### Cards
```html
<!-- v1.x -->
<div class="pm7-card">
  <h3>Title</h3>
  <p>Content</p>
</div>

<!-- v2.x -->
<div class="pm7-card">
  <div class="pm7-card-header">Title</div>
  <div class="pm7-card-body">Content</div>
</div>
```

#### Menus
```html
<!-- v1.x -->
<div class="pm7-dropdown">
  <button>Menu</button>
  <div class="pm7-dropdown-content">
    <a href="#">Item</a>
  </div>
</div>

<!-- v2.x -->
<div class="pm7-menu" data-pm7-menu>
  <button class="pm7-menu-trigger">Menu</button>
  <div class="pm7-menu-content">
    <button class="pm7-menu-item">Item</button>
  </div>
</div>
```

## New Features in v2

### 1. Interactive Components

New JavaScript-powered components with auto-initialization:
- Tab Selector (`data-pm7-tab-selector`)
- Accordion (`data-pm7-accordion`)
- Dialog (`data-pm7-dialog`)
- Toast notifications
- Tooltips (`data-pm7-tooltip`)
- Theme Switch (`data-pm7-theme-switch`)

### 2. Dark Mode Support

Built-in dark mode with automatic detection and theme switching:
```html
<!-- Add to <head> to prevent flicker -->
<script>
  (function() {
    const savedTheme = localStorage.getItem('pm7-theme');
    if (savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark');
    }
  })();
</script>
```

### 3. JavaScript API

For interactive components:
```javascript
import { PM7Menu, PM7TabSelector, showToast } from '@pm7/core';

// Initialize components manually
const menu = new PM7Menu(document.querySelector('.pm7-menu'));
const tabs = new PM7TabSelector(document.querySelector('[data-pm7-tab-selector]'));

// Show toast notification
showToast('Hello!', { type: 'success' });
```

## Migration Steps

1. **Update package.json:**
   ```json
   // Remove
   "@pm7/react": "^1.x.x"
   
   // Add
   "@pm7/core": "^2.x.x"
   ```

2. **Update imports:**
   ```javascript
   // Remove all @pm7/react imports
   // Add CSS import
   import '@pm7/core/dist/pm7.css';
   ```

3. **Replace React components with CSS classes:**
   - Use find/replace to update component usage
   - Update class names according to the mapping table above

4. **Add data attributes for interactive components:**
   - Menus: add `data-pm7-menu`
   - Tab selectors: add `data-pm7-tab-selector`
   - Accordions: add `data-pm7-accordion`
   - Dialogs: add `data-pm7-dialog`

5. **Test thoroughly:**
   - Check all components render correctly
   - Verify interactive components work
   - Test dark mode functionality

## Benefits of v2

- **Framework agnostic**: Works with React, Vue, Angular, or vanilla HTML
- **Smaller bundle size**: No React dependency
- **Better performance**: Pure CSS with minimal JavaScript
- **AI-friendly**: Simple, predictable patterns that AI agents understand
- **More flexible**: Use only what you need

## Need Help?

- Check the [documentation](https://pm7-ui.dev)
- View [component examples](https://pm7-ui.dev/components)
- Open an [issue on GitHub](https://github.com/patrickmast/pm7-ui/issues)