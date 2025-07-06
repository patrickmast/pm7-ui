# AI Agent Guide for pm7-ui

**pm7-ui is the first UI library built specifically for AI Coding Agents.**  
Learn how to leverage its AI-first design for rapid development.

## The First UI Library Built for AI

### Why pm7-ui is Perfect for AI Agents:

1. **Simple CSS Classes** - No complex APIs or component imports. Just use `class="pm7-button"` and it works.
2. **Copy-Paste Ready** - All examples are plain HTML that you can copy directly into any project.
3. **Framework Agnostic** - Works the same in React, Vue, Angular, or vanilla HTML. No context switching.

## Quick Start for AI Agents

### 🤖 AI Tip
Tell your AI agent: "I'm using pm7-ui. Use CSS classes like pm7-button, pm7-card, etc."

### 1. Basic Setup

```javascript
// Just import the CSS once
import '@pm7/core/dist/pm7.css';

// Or in HTML
<link rel="stylesheet" href="https://unpkg.com/@pm7/core/dist/pm7.css">
```

### 2. Use Components

Now you can use any PM7 component with simple CSS classes:

```html
<!-- Buttons -->
<button class="pm7-button pm7-button--primary">Primary Button</button>
<button class="pm7-button pm7-button--secondary">Secondary Button</button>

<!-- Cards -->
<div class="pm7-card">
  <div class="pm7-card-header">Card Title</div>
  <div class="pm7-card-body">Card content</div>
</div>

<!-- Inputs -->
<input type="text" class="pm7-input" placeholder="Enter text...">
```

## Common AI Prompts

### Building a Form

**Prompt:** "Create a login form using pm7-ui classes"

```html
<form class="pm7-card" style="max-width: 400px; margin: 0 auto;">
  <div class="pm7-card-header">
    <h2>Login</h2>
  </div>
  <div class="pm7-card-body">
    <div style="margin-bottom: 1rem;">
      <label for="email">Email</label>
      <input type="email" id="email" class="pm7-input" placeholder="you@example.com">
    </div>
    <div style="margin-bottom: 1.5rem;">
      <label for="password">Password</label>
      <input type="password" id="password" class="pm7-input">
    </div>
    <button type="submit" class="pm7-button pm7-button--primary pm7-button--full">
      Sign In
    </button>
  </div>
</form>
```

### Creating a Navigation Menu

**Prompt:** "Create a dropdown menu with pm7-ui"

```html
<div class="pm7-menu" data-pm7-menu>
  <button class="pm7-menu-trigger">
    Options
  </button>
  <div class="pm7-menu-content">
    <button class="pm7-menu-item">Profile</button>
    <button class="pm7-menu-item">Settings</button>
    <div class="pm7-menu-separator"></div>
    <button class="pm7-menu-item pm7-menu-item--destructive">Logout</button>
  </div>
</div>
```

### Building a Product Card

**Prompt:** "Create a product card with image, title, price, and buy button"

```html
<div class="pm7-card" style="max-width: 300px;">
  <img src="product.jpg" alt="Product" style="width: 100%; height: 200px; object-fit: cover;">
  <div class="pm7-card-body">
    <h3>Product Name</h3>
    <p style="color: var(--pm7-muted-foreground);">Brief product description</p>
    <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 1rem;">
      <span style="font-size: 1.5rem; font-weight: bold;">$99.99</span>
      <button class="pm7-button pm7-button--primary">Add to Cart</button>
    </div>
  </div>
</div>
```

## Framework-Specific Examples

### React
```jsx
// Just use className instead of class
function MyComponent() {
  return (
    <button className="pm7-button pm7-button--primary" onClick={handleClick}>
      React Button
    </button>
  );
}
```

### Vue
```html
<!-- Use class as normal -->
<template>
  <button class="pm7-button pm7-button--primary" @click="handleClick">
    Vue Button
  </button>
</template>
```

### Angular
```html
<!-- Use class with Angular event binding -->
<button class="pm7-button pm7-button--primary" (click)="handleClick()">
  Angular Button
</button>
```

## Interactive Components

Some components need JavaScript for interactivity. They auto-initialize when you include the PM7 script:

```javascript
// Import once in your app
import '@pm7/core';

// Or manually initialize after adding dynamic content
PM7.init();
```

### Components with Auto-initialization
- **Menu** - `[data-pm7-menu]`
- **Dialog** - `[data-pm7-dialog]`
- **Accordion** - `[data-pm7-accordion]`
- **Tab Selector** - `[data-pm7-tab-selector]`
- **Tooltip** - `[data-pm7-tooltip]`
- **Theme Switch** - `[data-pm7-theme-switch]`

## Tips for AI Agents

### 💡 Pro Tip
Always specify "pm7-ui" in your prompts to get consistent results.

### DO:
- ✅ Use simple CSS classes: `pm7-button`, `pm7-card`
- ✅ Combine modifiers: `pm7-button pm7-button--primary pm7-button--lg`
- ✅ Use data attributes for interactive components: `data-pm7-menu`
- ✅ Import CSS once at the top of your app
- ✅ Use CSS variables for colors: `var(--pm7-primary)`

### DON'T:
- ❌ Import React components from @pm7/react (package removed in v2)
- ❌ Use complex component APIs
- ❌ Worry about framework-specific syntax
- ❌ Use hardcoded colors like `white` or `#000` (use CSS variables)

## Complete Example

Here's a complete example you can copy and paste:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>pm7-ui Example</title>
  
  <!-- Dark mode flicker prevention -->
  <script>
    (function() {
      const savedTheme = localStorage.getItem('pm7-theme');
      if (savedTheme === 'dark' || (!savedTheme && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
      }
    })();
  </script>
  
  <link rel="stylesheet" href="https://unpkg.com/@pm7/core/dist/pm7.css">
</head>
<body>
  <div style="max-width: 1200px; margin: 0 auto; padding: 2rem;">
    <!-- Header -->
    <header style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 2rem;">
      <h1>My App</h1>
      
      <!-- Theme Switch -->
      <div class="pm7-theme-switch pm7-theme-switch--sm" data-pm7-theme-switch></div>
      
      <!-- Menu -->
      <div class="pm7-menu" data-pm7-menu>
        <button class="pm7-menu-trigger">Menu</button>
        <div class="pm7-menu-content">
          <button class="pm7-menu-item">Home</button>
          <button class="pm7-menu-item">About</button>
          <button class="pm7-menu-item">Contact</button>
        </div>
      </div>
    </header>
    
    <!-- Content -->
    <div class="pm7-card">
      <div class="pm7-card-header">
        <h2>Welcome</h2>
      </div>
      <div class="pm7-card-body">
        <p>This is a complete pm7-ui example.</p>
        <button class="pm7-button pm7-button--primary">Get Started</button>
      </div>
    </div>
  </div>
  
  <script src="https://unpkg.com/@pm7/core"></script>
</body>
</html>
```

## Component Documentation Links

For detailed documentation on specific components, use these GitHub URLs:

- **Button**: https://raw.githubusercontent.com/patrickmast/pm7-ui/main/packages/core/src/components/button/README.md
- **Card**: https://raw.githubusercontent.com/patrickmast/pm7-ui/main/packages/core/src/components/card/README.md
- **Dialog**: https://raw.githubusercontent.com/patrickmast/pm7-ui/main/packages/core/src/components/dialog/README.md
- **Menu**: https://raw.githubusercontent.com/patrickmast/pm7-ui/main/packages/core/src/components/menu/README.md
- **Input**: https://raw.githubusercontent.com/patrickmast/pm7-ui/main/packages/core/src/components/input/README.md
- **Accordion**: https://raw.githubusercontent.com/patrickmast/pm7-ui/main/packages/core/src/components/accordion/README.md
- **Theme Switch**: https://raw.githubusercontent.com/patrickmast/pm7-ui/main/packages/core/src/components/theme-switch/README.md
- **Tab Selector**: https://raw.githubusercontent.com/patrickmast/pm7-ui/main/packages/core/src/components/tab-selector/README.md
- **Toast**: https://raw.githubusercontent.com/patrickmast/pm7-ui/main/packages/core/src/components/toast/README.md
- **Tooltip**: https://raw.githubusercontent.com/patrickmast/pm7-ui/main/packages/core/src/components/tooltip/README.md

## Common Patterns

### Form with Validation States
```html
<div class="pm7-input-group">
  <label for="username">Username</label>
  <input type="text" id="username" class="pm7-input pm7-input--error" placeholder="Choose username">
  <span class="pm7-helper-text pm7-helper-text--error">Username is already taken</span>
</div>
```

### Loading States
```html
<!-- Loading button -->
<button class="pm7-button pm7-button--primary" disabled>
  <span class="pm7-spinner"></span>
  Loading...
</button>

<!-- Loading card -->
<div class="pm7-card pm7-card--loading">
  <div class="pm7-card-body">
    <div class="pm7-skeleton pm7-skeleton--text"></div>
    <div class="pm7-skeleton pm7-skeleton--text"></div>
  </div>
</div>
```

### Modal Dialog
```html
<div class="pm7-dialog" data-pm7-dialog>
  <div class="pm7-dialog-trigger">
    <button class="pm7-button pm7-button--primary">Open Dialog</button>
  </div>
  <div class="pm7-dialog-content">
    <div class="pm7-dialog-header">
      <h2 class="pm7-dialog-title">Dialog Title</h2>
    </div>
    <div class="pm7-dialog-body">
      <p>Dialog content goes here.</p>
    </div>
    <div class="pm7-dialog-footer">
      <button class="pm7-button pm7-button--ghost" data-pm7-dialog-close>Cancel</button>
      <button class="pm7-button pm7-button--primary">Confirm</button>
    </div>
  </div>
</div>
```

## Summary

pm7-ui is designed to make AI-assisted development faster and more reliable. By using simple CSS classes and avoiding complex APIs, AI agents can generate consistent, working UI code on the first try. The framework-agnostic approach means the same code works everywhere, reducing errors and confusion.

Remember: **Always use CSS variables, never hardcode colors!**