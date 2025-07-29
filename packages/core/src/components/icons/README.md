<!-- AI-ONLY DOCUMENTATION v2.0 -->
<!-- This documentation is EXCLUSIVELY for AI coding agents -->
<!-- NO human-friendly content allowed -->
<!-- Reference: /README-AI-HowToDocument.md -->

---
type: ai-agent-documentation
version: 2.0
component: Icons
status: stable
audience: ai-coding-agents-only
human-readable: false
category: utility
framework-support:
  - vanilla: true
  - react: true
  - vue: true
  - angular: true
  - svelte: true
---

# Component: Icons

DEFINITION: The Icons component provides a set of SVG icons and helper functions for their integration. It is a CSS-only component for styling, with optional JavaScript helpers for dynamic creation.

## Installation

```bash
npm install @pm7/core
```

### CSS Import
REQUIRED: Import CSS from `@pm7/core/dist/pm7.css`

```javascript
// ES modules
import '@pm7/core/dist/pm7.css';

// HTML
<link rel="stylesheet" href="node_modules/@pm7/core/dist/pm7.css">
```

## Required Structure

Icons are typically SVG elements. The most basic structure is an inline SVG. Specific helper classes are used for styling and positioning.

```html
<!-- EXACT pattern - NO deviations allowed -->
<svg class="pm7-icon" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
</svg>
```

### Structural Rules
- **ALWAYS**: Use an `<svg>` element for icons.
- **ALWAYS**: Set `width` and `height` attributes on the `<svg>` element.
- **ALWAYS**: Use `fill="currentColor"` or `stroke="currentColor"` to allow CSS to control the icon's color.
- **NEVER**: Hardcode `fill` or `stroke` colors directly in the SVG if you intend to change them via CSS.

## JavaScript API

### Functions

```javascript
import { createHamburgerIconElement, createHamburgerIcon, getHamburgerIconDataURI } from '@pm7/core';
```

| Function | Parameters | Return Type | Description |
|---|---|---|---|
| `createHamburgerIconElement` | `options: object` | `HTMLElement` | Creates and returns an SVG `HTMLElement` for the hamburger icon. |
| `createHamburgerIcon` | `options: object` | `string` | Returns an HTML string representation of the hamburger icon SVG. |
| `getHamburgerIconDataURI` | `color: string` | `string` | Returns a Data URI string for the hamburger icon, suitable for CSS `background-image`. |

### Parameter Details (`options` for `createHamburgerIconElement` and `createHamburgerIcon`)

| Parameter | Type | Default | Description |
|---|---|---|---|
| `width` | `number` | `18` | The width of the icon in pixels. |
| `height` | `number` | `15` | The height of the icon in pixels. |
| `color` | `string` | `'currentColor'` | The CSS color value for the icon's fill/stroke. |
| `className` | `string` | `''` | Additional CSS classes to apply to the SVG element. |

## Attributes

See /docs/ATTRIBUTES.md for cross-component attribute relationships.

| Attribute | Component(s) | Values | Required | Effect |
|---|---|---|---|---|
| `aria-label` | Icons | string | YES (icon-only) | Provides an accessible name for an element when no visible text is available. |
| `aria-hidden` | Icons | `true` | AUTO | Indicates that an element is not visible or perceivable to any user. |

## CSS Classes

| Class | Required | When | Effect |
|---|---|---|---|
| `.pm7-icon` | NO | For general icon styling | Applies base icon styles (e.g., `vertical-align`). |
| `.pm7-icon--inline` | NO | When an icon is inline with text | Adjusts vertical alignment for text flow. |
| `.pm7-icon--spin` | NO | For a spinning animation | Applies a continuous rotation animation. |
| `.pm7-input-icon` | NO | For icons inside input fields | Positions and sizes icons within input wrappers. |
| `.pm7-button-icon` | NO | For icons inside buttons with text | Provides correct spacing for icons next to text in buttons. |

## Patterns

### Pattern: Icon in a Button
```html
<button class="pm7-button pm7-button--primary">
  <svg class="pm7-button-icon" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
  </svg>
  <span>Click Me</span>
</button>
```

### Pattern: Icon-Only Button
```html
<button class="pm7-button pm7-button--icon" aria-label="Settings">
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
  </svg>
</button>
```

### Pattern: Inline Icon with Text
```html
<span class="pm7-icon--inline">
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
  </svg>
</span>
  Some text content.
```

## Anti-Patterns

### NEVER: Use an icon as a standalone interactive element
```html
<!-- NEVER -->
<svg onclick="doSomething()" width="24" height="24">...</svg>

<!-- BECAUSE -->
SVG elements are not inherently interactive or keyboard-focusable. This creates accessibility issues.

<!-- INSTEAD -->
<button onclick="doSomething()">
  <svg width="24" height="24">...</svg>
</button>
```

### NEVER: Omit `aria-label` for icon-only interactive elements
```html
<!-- NEVER -->
<button class="pm7-button pm7-button--icon">
  <svg width="20" height="20">...</svg>
</button>

<!-- BECAUSE -->
Screen readers cannot convey the purpose of an icon without descriptive text. This makes the interface inaccessible.

<!-- INSTEAD -->
<button class="pm7-button pm7-button--icon" aria-label="Open Menu">
  <svg width="20" height="20">...</svg>
</button>
```

## Rules

### ALWAYS
- **ALWAYS**: Use `<svg>` elements for icons.
- **ALWAYS**: Set `width` and `height` attributes on the `<svg>` element.
- **ALWAYS**: Use `fill="currentColor"` or `stroke="currentColor"` in the SVG to allow color control via CSS.
- **ALWAYS**: Provide an `aria-label` for interactive elements that contain only an icon.

### NEVER
- **NEVER**: Hardcode `fill` or `stroke` colors directly in the SVG if you intend to change them via CSS.
- **NEVER**: Use an icon as a standalone interactive element; always wrap it in a semantic interactive element like `<button>` or `<a>`.
- **NEVER**: Use unencoded `#` characters in colors when generating Data URIs for `background-image` (e.g., `getHamburgerIconDataURI('%231C86EF')`).

## CSS Variables

### Component-Specific Variables

Icons do not define their own CSS variables. They inherit color from their parent elements using `currentColor`.

### Required Global Variables

| Variable | Light Mode | Dark Mode | Usage in Icons |
|----------|------------|-----------|----------------|
| `--pm7-foreground` | `#000000` | `#e0e0e0` | Default icon color via currentColor |
| `--pm7-muted-foreground` | `#333333` | `#e6e6e6` | Muted icon color |
| `--pm7-primary` | `#1C86EF` | `#3b9eff` | Primary action icons |
| `--pm7-destructive` | `#ef4444` | `#ef4444` | Delete/danger icons |
| `--pm7-success` | `#22c55e` | `#22c55e` | Success/check icons |
| `--pm7-warning` | `#f59e0b` | `#f59e0b` | Warning icons |
| `--pm7-info` | `#3b82f6` | `#3b82f6` | Info icons |

### Customization Example
```css
/* Custom icon colors */
.my-app {
  color: var(--pm7-foreground); /* Icons inherit this */
}

/* Specific icon colors */
.icon-primary {
  color: var(--pm7-primary);
}

.icon-danger {
  color: var(--pm7-destructive);
}

/* Icon animations */
.pm7-icon--spin {
  animation: spin 1s linear infinite;
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
```

## Cross-Component Dependencies

### Works With
- **Button**: Icons commonly used in buttons
- **Input**: Icons for input field decoration
- **Menu**: Icons in menu items
- **Sidebar**: Icons in navigation items
- **Tab Selector**: Icons in tab triggers
- **Toast**: Icons for toast message types

### Conflicts With
- **None**: Icons are designed to work within all components

## Accessibility

- **Focus**: Icons themselves are generally not focusable. Their parent interactive elements (buttons, links) should be.
- **Keyboard**: Keyboard navigation is handled by the parent interactive element.
- **ARIA**: For decorative icons, `aria-hidden="true"` should be used. For interactive icons, the parent element (e.g., `<button>`) should have an `aria-label`.
- **Screen reader**: Ensure icons have a text alternative or are hidden from screen readers if purely decorative.

## Complete Example: Navigation Bar with Icons

SCENARIO: A responsive navigation bar featuring icons for common actions.

```html
<nav style="display: flex; justify-content: space-between; align-items: center; padding: 1rem; background-color: var(--pm7-card); border-bottom: 1px solid var(--pm7-border);">
  <a href="/" style="font-weight: bold; font-size: 1.2rem;">My App</a>
  <div style="display: flex; gap: 0.5rem;">
    <button class="pm7-button pm7-button--icon" aria-label="Search">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/>
      </svg>
    </button>
    <button class="pm7-button pm7-button--icon" aria-label="Notifications">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6V9c0-3.07-1.63-5.64-4.5-6.32V4c0-.55-.45-1-1-1s-1 .45-1 1v.68C7.63 3.36 6 5.93 6 9v7l-2 2v1h16v-1l-2-2zm-2 1H8V9c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v8z"/>
      </svg>
    </button>
    <button class="pm7-button pm7-button--icon" aria-label="User Profile">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.29-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.93-3.5 3.22-6 3.22z"/>
      </svg>
    </button>
  </div>
</nav>
```
