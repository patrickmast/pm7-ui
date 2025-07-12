# CSS Specificity Guide for PM7-UI

Understanding CSS specificity is crucial when integrating PM7-UI components into your project. This guide helps you avoid common styling conflicts.

## Table of Contents
- [Understanding Specificity](#understanding-specificity)
- [Common Conflicts](#common-conflicts)
- [Best Practices](#best-practices)
- [Solutions by Component](#solutions-by-component)
- [Dark Mode Considerations](#dark-mode-considerations)

## Understanding Specificity

CSS specificity determines which styles apply when multiple rules target the same element. Higher specificity wins.

### Specificity Scale
```css
/* Specificity: 0,0,0,1 */
p { color: blue; }

/* Specificity: 0,0,1,0 */
.text { color: red; }

/* Specificity: 0,0,1,1 */
p.text { color: green; }

/* Specificity: 0,1,0,0 */
#content { color: orange; }

/* Specificity: 1,0,0,0 - Avoid! */
p { color: purple !important; }
```

### PM7 Specificity Approach

PM7 uses moderate specificity to be overridable but not too weak:

```css
/* Base component - Specificity: 0,0,1,0 */
.pm7-button { }

/* Variant - Specificity: 0,0,2,0 */
.pm7-button.pm7-button--primary { }

/* State - Specificity: 0,0,2,0 */
.pm7-button:hover { }

/* Combined - Specificity: 0,0,3,0 */
.pm7-button.pm7-button--primary:hover { }
```

## Common Conflicts

### 1. Global Reset Styles

**Problem**: CSS resets breaking PM7 components
```css
/* Too aggressive reset */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

button {
  all: unset; /* Breaks PM7 buttons */
}
```

**Solution**: Scope your resets
```css
/* Better approach */
*:not([class*="pm7-"]) {
  margin: 0;
  padding: 0;
}

/* Or use :where() for lower specificity */
:where(button:not(.pm7-button)) {
  all: unset;
}
```

### 2. Typography Styles

**Problem**: Global typography affecting components
```css
/* Global styles */
a {
  color: blue;
  text-decoration: underline;
}

/* Breaks PM7 menu items that are links */
```

**Solution**: Be more specific
```css
/* Option 1: Exclude PM7 components */
a:not([class*="pm7-"]) {
  color: blue;
  text-decoration: underline;
}

/* Option 2: Scope to content areas */
.content a,
.article a {
  color: blue;
  text-decoration: underline;
}

/* Option 3: Use cascade layers */
@layer base {
  a { color: blue; }
}

@layer components {
  .pm7-menu-item { color: var(--pm7-foreground); }
}
```

### 3. Dark Mode Conflicts

**Problem**: Dark mode styles overriding components
```css
/* Too broad */
.dark * {
  color: white;
  background: black;
}
```

**Solution**: Use CSS variables
```css
/* Define variables */
:root {
  --text-color: black;
  --bg-color: white;
}

.dark {
  --text-color: white;
  --bg-color: black;
}

/* Use variables */
body {
  color: var(--text-color);
  background: var(--bg-color);
}

/* PM7 components use their own variables */
.pm7-button {
  color: var(--pm7-foreground);
  background: var(--pm7-background);
}
```

## Best Practices

### 1. Use CSS Cascade Layers

Modern approach to manage specificity:

```css
/* Define layer order */
@layer reset, base, components, utilities;

/* Reset layer - lowest priority */
@layer reset {
  * { margin: 0; }
}

/* Base styles */
@layer base {
  a { color: blue; }
}

/* Component styles - higher priority */
@layer components {
  @import '@pm7/core/dist/pm7.css';
}

/* Utility classes - highest priority */
@layer utilities {
  .mt-4 { margin-top: 1rem; }
}
```

### 2. Avoid !important

Instead of using `!important`, increase specificity naturally:

```css
/* Bad */
.my-button {
  color: red !important;
}

/* Better - increase specificity */
.my-app .my-button {
  color: red;
}

/* Best - use data attributes */
[data-theme="custom"] .my-button {
  color: red;
}
```

### 3. Component-Specific Overrides

Override PM7 styles safely:

```css
/* Create custom variants */
.pm7-button--custom {
  --pm7-primary: #your-color;
  /* Inherits all button styles */
}

/* Override specific components */
.my-special-menu .pm7-menu-item {
  /* Your custom styles */
}

/* Use CSS variables for theming */
.my-app {
  --pm7-primary: #custom-primary;
  --pm7-radius: 0; /* Square corners */
}
```

## Solutions by Component

### Menu Component

```css
/* Problem: Global link styles */
a { color: blue; }

/* Solutions */

/* 1. Exclude menu items */
a:not(.pm7-menu-item) { color: blue; }

/* 2. Higher specificity for PM7 */
.pm7-menu a.pm7-menu-item {
  color: var(--pm7-foreground);
}

/* 3. Use :where() for lower specificity globals */
:where(a) { color: blue; }
.pm7-menu-item { color: var(--pm7-foreground); }
```

### Button Component

```css
/* Problem: Button resets */
button {
  background: none;
  border: none;
  padding: 0;
}

/* Solution: Restore PM7 buttons */
.pm7-button {
  /* PM7 styles already have higher specificity */
  /* But you can ensure with: */
  background: var(--pm7-background);
  border: 1px solid var(--pm7-border);
  padding: 0.5rem 1rem;
}
```

### Dialog Component

```css
/* Problem: Z-index conflicts */
.header { z-index: 9999; }

/* Solution: Use PM7 z-index scale */
:root {
  --header-z: 10;
  --pm7-dialog-z: 100; /* Higher than header */
}
```

## Dark Mode Considerations

### Proper Dark Mode Implementation

```css
/* Define color schemes properly */
:root {
  /* Light mode colors */
  --pm7-background: hsl(0 0% 100%);
  --pm7-foreground: hsl(222.2 84% 4.9%);
}

.dark {
  /* Dark mode colors */
  --pm7-background: hsl(222.2 84% 4.9%);
  --pm7-foreground: hsl(210 40% 98%);
}

/* Component uses variables */
.pm7-component {
  background: var(--pm7-background);
  color: var(--pm7-foreground);
}
```

### Testing Dark Mode

Always test components in both modes:

```javascript
// Toggle helper for testing
function toggleDarkMode() {
  document.documentElement.classList.toggle('dark');
}

// Check current mode
const isDark = document.documentElement.classList.contains('dark');
```

## Debugging Specificity Issues

### Browser DevTools

1. Inspect element
2. Look at "Styles" panel
3. Crossed-out styles = overridden
4. Hover over selector to see specificity

### Specificity Calculator

```javascript
// Helper to calculate specificity
function getSpecificity(selector) {
  // Simplified example
  const ids = (selector.match(/#/g) || []).length;
  const classes = (selector.match(/\./g) || []).length;
  const elements = (selector.match(/^[a-z]/gi) || []).length;
  
  return `0,${ids},${classes},${elements}`;
}

console.log(getSpecificity('.pm7-button.pm7-button--primary'));
// Output: "0,0,2,0"
```

## Quick Reference

### Do's ✅
- Use CSS variables for theming
- Scope global styles properly
- Test in both light and dark modes
- Use cascade layers for organization
- Leverage PM7's CSS variable system

### Don'ts ❌
- Don't use `!important` unless absolutely necessary
- Don't use overly broad selectors
- Don't reset all styles globally
- Don't hardcode colors - use variables
- Don't assume one theme mode

## Need Help?

If you're experiencing specificity issues:

1. Check browser DevTools to see which styles are winning
2. Use more specific selectors rather than `!important`
3. Consider using CSS cascade layers
4. Test with PM7's default theme first
5. Report persistent issues on [GitHub](https://github.com/patrickmast/pm7-ui/issues)