# Frequently Asked Questions (FAQ)

Find answers to common questions about pm7-ui. Can't find what you're looking for? Feel free to open an issue on our GitHub repository.

## Installation & Setup

### How do I install pm7-ui?

pm7-ui is a single package that works with all frameworks. Install it using npm:

```bash
# Using npm
npm install @pm7/core

# Using yarn
yarn add @pm7/core

# Using pnpm
pnpm add @pm7/core
```

Then import the CSS in your project:

```javascript
// In your main JavaScript/TypeScript file
import '@pm7/core/dist/pm7.css';
```

That's it! You can now use pm7-ui components in React, Vue, Angular, or any other framework.

### Can I use pm7-ui from a CDN?

Yes! You can use unpkg or jsDelivr:

```html
<!-- CSS -->
<link rel="stylesheet" href="https://unpkg.com/@pm7/core@latest/dist/pm7.css">

<!-- JavaScript (optional, only for interactive components) -->
<script src="https://unpkg.com/@pm7/core@latest/dist/pm7.js"></script>
```

Or use jsDelivr for better performance:

```html
<!-- CSS -->
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@pm7/core@latest/dist/pm7.css">

<!-- JavaScript -->
<script src="https://cdn.jsdelivr.net/npm/@pm7/core@latest/dist/pm7.js"></script>
```

### Do I need Tailwind CSS or shadcn/ui to use pm7-ui?

**No, absolutely not!** pm7-ui is a completely standalone component library that doesn't require any external CSS frameworks or dependencies.

pm7-ui includes:
- **Its own design system** - Complete set of design tokens, colors, spacing, typography
- **Zero dependencies** - Just pure CSS and vanilla JavaScript
- **Built-in styling** - All components come fully styled out of the box
- **No conflicts** - Works alongside any existing CSS framework if needed

## Usage & Implementation

### Which components require JavaScript?

Most pm7-ui components work with CSS only. However, these components require JavaScript for interactivity:

- **Menu** - For dropdown functionality
- **Dialog** - For open/close behavior
- **Toast** - For notifications and auto-dismiss
- **Tab Selector** - For tab switching
- **Accordion** - For collapsible panels
- **Tooltip** - For hover tooltips
- **Theme Switch** - For theme toggling

When using these components, make sure to import the JavaScript:

```javascript
import '@pm7/core';  // Auto-initializes all components

// Or import specific components
import { PM7Menu, PM7Dialog, PM7Toast } from '@pm7/core';
```

### How do I prevent dark mode flicker on page load?

When implementing dark mode, you might see a brief flash of light mode before dark mode is applied. To prevent this, add a small script to your `<head>` BEFORE any stylesheets:

```html
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  
  <!-- Dark mode flicker prevention - MUST come before stylesheets -->
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
</head>
```

This script runs synchronously before the page renders, eliminating any flicker.

### Can I customize the dark mode colors?

Yes! pm7-ui's dark mode colors can be customized using CSS variables. Override them in your stylesheet:

```css
.dark {
  /* Background colors */
  --pm7-background: #0a0a0a;
  --pm7-surface: #1a1a1a;
  --pm7-muted: #262626;
  
  /* Text colors */
  --pm7-foreground: #fafafa;
  --pm7-muted-foreground: #a3a3a3;
  
  /* Primary colors */
  --pm7-primary: #3b9eff;
  --pm7-primary-foreground: #ffffff;
  
  /* Borders */
  --pm7-border: #404040;
}
```

All components will automatically use your custom dark mode colors.

### How do I handle events from interactive components?

pm7-ui components emit standard DOM events and custom events:

```javascript
// Menu component
const menu = document.querySelector('.pm7-menu');
menu.addEventListener('pm7-menu-select', (e) => {
  console.log('Selected:', e.detail.item);
});

// Dialog component  
const dialog = document.querySelector('.pm7-dialog');
dialog.addEventListener('pm7-dialog-open', () => {
  console.log('Dialog opened');
});

// Toast notifications
import { showToast } from '@pm7/core';
showToast('Operation successful!', { type: 'success' });
```

### How do I use pm7-ui with server-side rendering (SSR)?

pm7-ui works great with SSR frameworks like Next.js, Nuxt, and SvelteKit:

- **Import the CSS** in your app's entry point
- **Interactive components** will auto-initialize on the client side
- **No hydration issues** since we use vanilla JavaScript

```javascript
// Next.js example (_app.js)
import '@pm7/core/dist/pm7.css';

// Nuxt example (nuxt.config.js)
css: ['@pm7/core/dist/pm7.css']

// SvelteKit example (app.html)
<link rel="stylesheet" href="/node_modules/@pm7/core/dist/pm7.css">
```

## Technical Details

### What is the bundle size of pm7-ui?

The entire pm7-ui library is lightweight:

- **CSS** - ~70KB minified (~12KB gzipped)
- **JavaScript** - ~10KB minified (~3KB gzipped)
- **Total** - ~80KB minified (~15KB gzipped)

This includes ALL components, utilities, and features.

### Why is pm7-ui just one package?

pm7-ui uses a CSS-first approach with a single **@pm7/core** package that contains:

- All CSS styles and design tokens
- Vanilla JavaScript for interactive components
- Framework-agnostic implementation

This design has several benefits:
- **Simplicity** - One package to install and maintain
- **Smaller bundles** - No framework-specific wrapper overhead
- **Future-proof** - Works with any framework, even ones that don't exist yet
- **AI-friendly** - Simple CSS classes that AI coding assistants understand

### What browsers does pm7-ui support?

pm7-ui supports all modern browsers:

- **Chrome, Firefox, Safari, Edge** - Latest versions
- **iOS Safari** - Version 12+
- **Chrome/Firefox on Android** - Latest versions

**Note:** Internet Explorer is not supported.

### Does pm7-ui support TypeScript?

Yes! pm7-ui includes TypeScript declarations:

- **Full type support** for all components and utilities
- **IntelliSense** works out of the box in VS Code and other IDEs
- **Type-safe** component props and methods

TypeScript support is built-in, no additional packages needed!

## Troubleshooting

### Theme not persisting between pages

- Check if localStorage is available/enabled
- Verify the storage key isn't conflicting with other scripts
- Ensure JavaScript is loaded and executing
- Make sure you're using the same `storageKey` across your app (default: 'pm7-theme')

### Components not initializing

- Ensure you've imported the JavaScript: `import '@pm7/core'`
- For dynamically added content, call `PM7.init()` after adding elements
- Check that data attributes are correct (e.g., `data-pm7-menu`, `data-pm7-dialog`)

### CSS conflicts with existing styles

pm7-ui is designed to avoid conflicts:

- **Prefixed classes** - All classes use the `pm7-` prefix
- **Scoped styles** - Styles only affect pm7 components
- **CSS variables** - Easy to override without modifying source

You can safely use pm7-ui alongside Bootstrap, Tailwind, or any other CSS framework.

## Common Dark Mode Implementation Mistakes

Based on real-world experience, here are common mistakes to avoid:

1. **Hardcoded colors** - Using `background: white` or `color: #000` instead of CSS variables
2. **Missing link styles** - Forgetting to style links, resulting in purple visited links in dark mode
3. **Inline styles** - Using `style="background-color: #F8F9FA"` which doesn't adapt to dark mode
4. **Component state bugs** - Not preserving CSS classes when JavaScript initializes components
5. **Incomplete coverage** - Only adding dark mode to some pages, not the entire site
6. **Missing flicker prevention** - Not adding the prevention script, causing a flash of light mode

**Solution:** Always use CSS variables, test every page, and follow the dark mode implementation guide in our documentation.

## Need More Help?

- Check our [comprehensive documentation](https://pm7-ui.vercel.app)
- View [component examples](https://pm7-ui.vercel.app/components)
- Read the [AI Agent Guide](AI-GUIDE.md)
- Open an [issue on GitHub](https://github.com/patrickmast/pm7-ui/issues)
- View [source code](https://github.com/patrickmast/pm7-ui)