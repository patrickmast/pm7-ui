<!-- AI-ONLY DOCUMENTATION v2.0 -->
<!-- This documentation is EXCLUSIVELY for AI coding agents -->
<!-- NO human-friendly content allowed -->
<!-- Reference: /README-AI-HowToDocument.md -->

---
type: ai-agent-documentation
version: 2.0
component: Sidebar
status: stable
audience: ai-coding-agents-only
human-readable: false
category: navigation
framework-support:
  - vanilla: true
  - react: true
  - vue: true
  - angular: true
  - svelte: true
---

# Component: Sidebar

DEFINITION: The Sidebar component provides a collapsible or static navigation panel, typically used for primary application navigation or supplementary content. It supports both CSS-only static and JavaScript-driven interactive modes.

## Installation

```bash
npm install @pm7/core
```

### CSS & JavaScript Import

REQUIRED: Import both the CSS and the main JavaScript file.

```javascript
// ES modules
import '@pm7/core/dist/pm7.css';
import '@pm7/core'; // Imports and initializes all components

// HTML
<link rel="stylesheet" href="node_modules/@pm7/core/dist/pm7.css">
<script src="node_modules/@pm7/core/dist/pm7.js" defer></script>
```

## Required Structure

For an interactive sidebar, the main container (`<aside>`) requires `data-pm7-sidebar` and a unique `id`. It should contain a `.pm7-sidebar-content` wrapper for its main content.

```html
<!-- EXACT pattern for an interactive sidebar - NO deviations allowed -->
<aside class="pm7-sidebar" data-pm7-sidebar id="my-sidebar">
  <div class="pm7-sidebar-content">
    <nav class="pm7-sidebar-nav">
      <a href="#" class="pm7-sidebar-item">Dashboard</a>
      <a href="#" class="pm7-sidebar-item">Settings</a>
    </nav>
  </div>
</aside>

<!-- Trigger button to open the sidebar -->
<button data-pm7-sidebar-trigger="my-sidebar">Open Sidebar</button>
```

### Structural Rules
- **ALWAYS**: The main sidebar container MUST be an `<aside>` element with the class `.pm7-sidebar`.
- **ALWAYS**: For interactive sidebars, the `<aside>` MUST have `data-pm7-sidebar` and a unique `id`.
- **ALWAYS**: All main content within the sidebar MUST be wrapped in a `div` with the class `.pm7-sidebar-content`.
- **ALWAYS**: Trigger buttons to open an interactive sidebar MUST have `data-pm7-sidebar-trigger="sidebar-id"` matching the sidebar's `id`.
- **NEVER**: Omit the `.pm7-sidebar-content` wrapper for sidebar content.

## JavaScript API

### Initialization
Initialization is automatic for sidebars present in the DOM when `@pm7/core` is imported. For dynamically added interactive sidebars, re-initialization is required.

```javascript
// For interactive sidebars added after initial page load
window.PM7.init();
```

### Instance Access

```javascript
const element = document.querySelector('[data-pm7-sidebar]');
const instance = element.PM7Sidebar;
```

### Methods

| Method | Parameters | Return Type | Description |
|---|---|---|---|
| `open` | `(none)` | `void` | Opens the interactive sidebar. |
| `close` | `(none)` | `void` | Closes the interactive sidebar. |
| `toggle` | `(none)` | `void` | Toggles the interactive sidebar's open/closed state. |
| `destroy` | `(none)` | `void` | Removes all event listeners and cleans up the instance. |

### Events

| Event | When | Detail | Bubbles |
|---|---|---|---|---|
| `pm7:sidebar:open` | After the sidebar opens | `{ sidebar: HTMLElement }` | YES |
| `pm7:sidebar:close` | After the sidebar closes | `{ sidebar: HTMLElement }` | YES |

## Attributes

See /docs/ATTRIBUTES.md for cross-component attribute relationships.

| Attribute | Component(s) | Values | Required | Effect |
|---|---|---|---|---|
| `data-pm7-sidebar` | Sidebar | presence | YES | Initializes interactive Sidebar component. |
| `data-pm7-sidebar-trigger` | Sidebar | sidebar ID | YES | Links a button to open/close a specific sidebar. |
| `data-state` | Sidebar | `open`, `closed` | AUTO | Managed by JS to reflect component's open/closed state. |
| `aria-expanded` | Sidebar | `true`, `false` | AUTO | Indicates whether a collapsible element is currently expanded or collapsed. |
| `aria-modal` | Sidebar | `true` | AUTO | Indicates that an element is a modal dialog and disables interaction with other content. |
| `role` | Sidebar | `dialog` | AUTO | Defines the purpose or nature of an element. |

## CSS Classes

| Class | Required | When | Effect |
|---|---|---|---|
| `.pm7-sidebar` | YES | ALWAYS on the `<aside>` element | Applies base sidebar styling (width, background, shadow). |
| `.pm7-sidebar-content` | YES | ALWAYS | Provides internal padding and scrollability for sidebar content. |
| `.pm7-sidebar-static` | NO | For a non-interactive, always-visible sidebar | Removes JavaScript-controlled behavior and makes it always visible. |
| `.pm7-sidebar--right` | NO | To position the sidebar on the right | Aligns the sidebar to the right side of the viewport. |
| `.pm7-sidebar--push` | NO | To make the sidebar push content | Instead of overlaying, the sidebar pushes the main content. |
| `.pm7-sidebar--mini` | NO | For a collapsed, icon-only sidebar | Reduces width and hides text, showing only icons. |
| `.pm7-sidebar-header` | NO | For a distinct header section | Styles a header area within the sidebar. |
| `.pm7-sidebar-title` | NO | For the main title in the header | Styles the primary heading within the sidebar header. |
| `.pm7-sidebar-close` | NO | For a close button within the sidebar | Styles a button to close the sidebar. |
| `.pm7-sidebar-nav` | NO | For a navigation list within the sidebar | Styles a container for navigation items. |
| `.pm7-sidebar-item` | NO | For individual navigation links | Styles a navigation link within the sidebar. |
| `.pm7-sidebar-item-icon` | NO | For icons within navigation items | Styles an icon to appear next to navigation text. |

## Patterns

### Pattern: Static Sidebar (CSS-only)
```html
<aside class="pm7-sidebar pm7-sidebar-static">
  <div class="pm7-sidebar-content">
    <nav class="pm7-sidebar-nav">
      <a href="#" class="pm7-sidebar-item">Home</a>
      <a href="#" class="pm7-sidebar-item">About</a>
    </nav>
  </div>
</aside>
```

### Pattern: Interactive Sidebar with Header and Close Button
```html
<button data-pm7-sidebar-trigger="app-sidebar">Open App Menu</button>

<aside class="pm7-sidebar" data-pm7-sidebar id="app-sidebar">
  <div class="pm7-sidebar-header">
    <h3 class="pm7-sidebar-title">Application Menu</h3>
    <button class="pm7-sidebar-close">×</button>
  </div>
  <div class="pm7-sidebar-content">
    <nav class="pm7-sidebar-nav">
      <a href="#" class="pm7-sidebar-item">Dashboard</a>
      <a href="#" class="pm7-sidebar-item">Users</a>
    </nav>
  </div>
</aside>
```

### Pattern: Sidebar Pushing Content
Add `pm7-sidebar--push` to the sidebar. The main content area should be a sibling to the sidebar.

```html
<div style="display: flex;">
  <aside class="pm7-sidebar pm7-sidebar--push" data-pm7-sidebar id="push-sidebar">
    <div class="pm7-sidebar-content">...</div>
  </aside>
  <main style="flex-grow: 1; padding: 1rem;">
    <h1>Main Content Area</h1>
    <p>This content will be pushed by the sidebar.</p>
  </main>
</div>
```

## Anti-Patterns

### NEVER: Omit `data-pm7-sidebar` for interactive sidebars
```html
<!-- NEVER -->
<aside class="pm7-sidebar" id="my-sidebar">
  <!-- Content -->
</aside>

<!-- BECAUSE -->
Without `data-pm7-sidebar`, the component's JavaScript will not initialize, and the sidebar will not open/close interactively.

<!-- INSTEAD -->
<aside class="pm7-sidebar" data-pm7-sidebar id="my-sidebar">
  <!-- Content -->
</aside>
```

### NEVER: Manually control sidebar visibility with CSS `display` or `transform`
```html
<!-- NEVER -->
<aside class="pm7-sidebar" style="transform: translateX(0);">...</aside>

<!-- BECAUSE -->
The Sidebar component manages its own visibility, animations, and focus trapping. Manual CSS control will interfere with its functionality.

<!-- INSTEAD -->
// Use the `data-pm7-sidebar-trigger` button or the JavaScript API methods `open()`/`close()`.
```

### NEVER: Nest interactive sidebars
```html
<!-- NEVER -->
<aside class="pm7-sidebar" data-pm7-sidebar id="outer-sidebar">
  <div class="pm7-sidebar-content">
    <aside class="pm7-sidebar" data-pm7-sidebar id="inner-sidebar">...</aside>
  </div>
</aside>

<!-- BECAUSE -->
Nesting interactive sidebars can lead to conflicting event listeners, focus management issues, and unpredictable behavior.

<!-- INSTEAD -->
// Use a single sidebar with nested navigation, or consider a different component for nested content.
```

## Rules

### ALWAYS
- **ALWAYS**: Use an `<aside>` element as the root for the sidebar.
- **ALWAYS**: Wrap the main content of the sidebar in a `div` with the class `.pm7-sidebar-content`.
- **ALWAYS**: For interactive sidebars, provide a unique `id` and the `data-pm7-sidebar` attribute.
- **ALWAYS**: Use `data-pm7-sidebar-trigger="sidebar-id"` on buttons that should open/close the sidebar.

### NEVER
- **NEVER**: Manually control the `display` or `transform` properties of an interactive sidebar.
- **NEVER**: Nest interactive sidebars within each other.
- **NEVER**: Forget to call `window.PM7.init()` if you add an interactive sidebar to the DOM dynamically after initial page load.

## CSS Variables

### Component-Specific Variables

| Variable | Light Mode | Dark Mode | Usage |
|----------|------------|-----------|--------|
| `--pm7-sidebar-width` | `280px` | `280px` | Default sidebar width |
| `--pm7-sidebar-bg` | `var(--pm7-background)` | `var(--pm7-card)` | Sidebar background |
| `--pm7-sidebar-item-hover-bg` | `transparent` | `transparent` | Item hover background |

### Required Global Variables

| Variable | Light Mode | Dark Mode | Usage in Sidebar |
|----------|------------|-----------|------------------|
| `--pm7-background` | `#ffffff` | `#121212` | Default sidebar background |
| `--pm7-card` | `#ffffff` | `#1e1e1e` | Dark mode sidebar background |
| `--pm7-foreground` | `#000000` | `#e0e0e0` | Text color, item hover color |
| `--pm7-muted-foreground` | `#333333` | `#e6e6e6` | Default item text, section titles |
| `--pm7-border` | `#e0e0e0` | `#444` | Sidebar border, dividers |
| `--pm7-muted` | `#f5f5f5` | `#2d2d2d` | Trigger hover, close button hover |
| `--pm7-primary` | `#1C86EF` | `#3b9eff` | Active item background |
| `--pm7-ring` | `var(--pm7-primary)` | `var(--pm7-primary)` | Focus ring color |
| `--pm7-radius` | `0.375rem` | `0.375rem` | Item border radius |
| `--pm7-radius-lg` | `0.75rem` | `0.75rem` | Floating variant radius |
| `--pm7-shadow-lg` | `0 10px 15px -3px rgb(0 0 0 / 0.1)` | `0 10px 15px -3px rgb(0 0 0 / 0.3)` | Floating variant shadow |
| `--pm7-font-size-sm` | `0.875rem` | `0.875rem` | Item text size |
| `--pm7-font-size-xs` | `0.75rem` | `0.75rem` | Section titles, compact mode |
| `--pm7-spacing-1` | `0.25rem` | `0.25rem` | Nav item gap, section margin |
| `--pm7-spacing-2` | `0.5rem` | `0.5rem` | Item padding, nav padding |
| `--pm7-spacing-3` | `0.75rem` | `0.75rem` | Item icon gap, compact padding |
| `--pm7-spacing-4` | `1rem` | `1rem` | Header/content padding, item padding |
| `--pm7-spacing-8` | `2rem` | `2rem` | Nested nav padding |

### Customization Example
```css
/* Custom sidebar styling */
.my-app {
  --pm7-sidebar-width: 320px;
  --pm7-sidebar-bg: #f8f9fa;
  --pm7-sidebar-item-hover-bg: #e9ecef;
}

/* Narrow sidebar */
.narrow-sidebar {
  --pm7-sidebar-width: 240px;
}

/* Custom active item color */
.custom-sidebar {
  --pm7-primary: #10b981; /* Green active items */
}
```

## Cross-Component Dependencies

### Works With
- **Icons**: Sidebar items often include icons
- **Button**: Trigger buttons and close buttons
- **Navigation**: Sidebar provides primary navigation
- **Accordion**: Can contain collapsible sections

### Conflicts With
- **Dialog**: Both manage focus, avoid simultaneous use
- **Menu**: Don't use menus inside sidebars on mobile
- **Toast**: Ensure proper z-index layering

## Accessibility

- **Focus**: When an interactive sidebar opens, focus is trapped within it. On close, focus returns to the trigger.
- **Keyboard**: `Escape` key closes the sidebar. `Tab` and `Shift+Tab` navigate within the sidebar.
- **ARIA**: The component automatically applies `role="dialog"` (for overlay mode), `aria-modal="true"`, and manages `aria-hidden` and `aria-expanded` attributes.
- **Screen reader**: Fully accessible to screen readers, announcing the sidebar's state and content.

## Complete Example: Responsive Application Layout

SCENARIO: A common application layout with a main content area and a sidebar that is static on desktop and interactive on mobile.

```html
<div style="display: flex; min-height: 100vh;">
  <!-- Sidebar - Static on desktop, interactive on mobile -->
  <aside class="pm7-sidebar pm7-sidebar-static" data-pm7-sidebar id="app-layout-sidebar">
    <div class="pm7-sidebar-header">
      <h3 class="pm7-sidebar-title">Application</h3>
      <button class="pm7-sidebar-close" style="display: none;">×</button> <!-- Hidden on desktop -->
    </div>
    <div class="pm7-sidebar-content">
      <nav class="pm7-sidebar-nav">
        <a href="#" class="pm7-sidebar-item">Dashboard</a>
        <a href="#" class="pm7-sidebar-item">Analytics</a>
        <a href="#" class="pm7-sidebar-item">Reports</a>
        <a href="#" class="pm7-sidebar-item">Settings</a>
      </nav>
    </div>
  </aside>

  <!-- Main content area -->
  <main style="flex-grow: 1; padding: 1.5rem;">
    <button data-pm7-sidebar-trigger="app-layout-sidebar" class="pm7-button" style="display: none;">Open Menu</button> <!-- Hidden on desktop -->
    <h1>Welcome to the Dashboard</h1>
    <p>This is the main content area of your application.</p>
    <p>The sidebar on the left is static on larger screens and becomes a mobile menu on smaller screens.</p>
  </main>
</div>

<style>
  /* Responsive adjustments for mobile */
  @media (max-width: 768px) {
    .pm7-sidebar-static {
      position: fixed;
      top: 0;
      left: 0;
      height: 100%;
      z-index: 1000;
      transform: translateX(-100%); /* Hidden by default on mobile */
      transition: transform 0.3s ease-out;
    }
    .pm7-sidebar-static[data-state="open"] {
      transform: translateX(0);
    }
    .pm7-sidebar-static .pm7-sidebar-close {
      display: block !important; /* Show close button on mobile */
    }
    main > .pm7-button[data-pm7-sidebar-trigger] {
      display: block !important; /* Show trigger button on mobile */
      margin-bottom: 1rem;
    }
  }
</style>
```
