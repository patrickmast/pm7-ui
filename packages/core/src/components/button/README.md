<!-- AI-ONLY DOCUMENTATION v2.0 -->
<!-- This documentation is EXCLUSIVELY for AI coding agents -->
<!-- NO human-friendly content allowed -->
<!-- Reference: /README-AI-HowToDocument.md -->

---
type: ai-agent-documentation
version: 2.0
component: Button
status: stable
audience: ai-coding-agents-only
human-readable: false
category: actions
framework-support:
  - vanilla: true
  - react: true
  - vue: true
  - angular: true
  - svelte: true
---

# Component: Button

DEFINITION: The Button component provides styled, accessible, and framework-agnostic buttons for user actions. It is a CSS-only component that works with `<button>` and `<a>` elements.

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

The most basic implementation requires a `<button>` element with the `.pm7-button` class and a `type` attribute.

```html
<!-- EXACT pattern - NO deviations allowed -->
<button type="button" class="pm7-button">Button Text</button>
```

### Structural Rules
- **ALWAYS**: Use a `<button>` element for actions within a form or JavaScript-driven interactions.
- **ALWAYS**: Use an `<a>` element with an `href` attribute for navigation.
- **ALWAYS**: Provide a `type` attribute (`button`, `submit`, `reset`) for all `<button>` elements to prevent unintended form submissions.
- **NEVER**: Nest block-level elements (like `<div>` or `<h3>`) inside a button. Use `<span>` for text content.

## JavaScript API

This is a CSS-only component. It does **NOT** have a JavaScript API.
- **No initialization**: Styling is applied directly by CSS classes.
- **No methods**: Control the button using standard DOM properties like `disabled`.
- **No events**: Use standard DOM events like `click`.

## Attributes

See /docs/ATTRIBUTES.md for cross-component attribute relationships.

| Attribute | Component(s) | Values | Required | Effect |
|---|---|---|---|---|
| `data-state` | Button | `loading` | NO | Indicates the loading state of the button. |
| `aria-label` | Button | string | YES (icon-only) | Provides an accessible name for an element when no visible text is available. |

## CSS Classes

| Class | Required | When | Effect |
|-------|----------|------|--------|
| `.pm7-button` | YES | ALWAYS | Applies base button styling. |
| `.pm7-button--primary` | NO | For the main call to action | Applies primary (blue) styling. |
| `.pm7-button--secondary`| NO | For secondary actions | Applies secondary (gray) styling. |
| `.pm7-button--destructive`| NO | For dangerous actions | Applies destructive (red) styling. |
| `.pm7-button--outline` | NO | For a less prominent look | Button with a border and transparent background. |
| `.pm7-button--ghost` | NO | For tertiary actions | Button with no background or border. |
| `.pm7-button--link` | NO | To make a button look like a link | Link-styled button. |
| `.pm7-button--sm` | NO | For smaller buttons | Decreases button height and font size. |
| `.pm7-button--lg` | NO | For larger buttons | Increases button height and font size. |
| `.pm7-button--icon` | NO | For icon-only buttons | Applies square, centered styling. |
| `.pm7-button-icon` | NO | For icons inside buttons with text | Provides correct spacing for the icon. |
| `.pm7-button-group` | NO | To group related buttons | Removes space and joins borders between buttons. |

## Patterns

### Pattern: Primary Action
```html
<button type="button" class="pm7-button pm7-button--primary">Save Changes</button>
```

### Pattern: Destructive Action
```html
<button type="button" class="pm7-button pm7-button--destructive">Delete Account</button>
```

### Pattern: Button with Icon
```html
<button type="button" class="pm7-button">
  <svg class="pm7-button-icon" width="16" height="16">...</svg>
  <span>Save</span>
</button>
```

### Pattern: Icon-only Button
```html
<button type="button" class="pm7-button pm7-button--icon" aria-label="Open Settings">
  <svg width="20" height="20">...</svg>
</button>
```

### Pattern: Loading State
```html
<button type="button" class="pm7-button pm7-button--primary" data-state="loading" disabled>
  <svg class="pm7-spinner" width="16" height="16">...</svg>
  <span>Processing...</span>
</button>
```

### Pattern: Button Group
```html
<div class="pm7-button-group">
  <button type="button" class="pm7-button pm7-button--outline">Left</button>
  <button type="button" class="pm7-button pm7-button--outline">Center</button>
  <button type="button" class="pm7-button pm7-button--outline">Right</button>
</div>
```

## Anti-Patterns

### NEVER: Omit the base class
```html
<!-- NEVER -->
<button type="button" class="pm7-button--primary">Save</button>

<!-- BECAUSE -->
The base `.pm7-button` class contains essential styles like padding, font-size, and transitions. Modifier classes will not work without it.

<!-- INSTEAD -->
<button type="button" class="pm7-button pm7-button--primary">Save</button>
```

### NEVER: Combine multiple variants
```html
<!-- NEVER -->
<button type="button" class="pm7-button pm7-button--primary pm7-button--destructive">

<!-- BECAUSE -->
Variant classes (primary, secondary, destructive, etc.) are mutually exclusive and will result in conflicting styles.

<!-- INSTEAD -->
<button type="button" class="pm7-button pm7-button--primary">Choose One Variant</button>
```

### NEVER: Use non-semantic elements
```html
<!-- NEVER -->
<div class="pm7-button">Click Me</div>

<!-- BECAUSE -->
`<div>` and `<span>` are not keyboard accessible, do not have correct ARIA roles by default, and do not work with forms.

<!-- INSTEAD -->
<button type="button" class="pm7-button">Click Me</button>
```

## Rules

### ALWAYS
- **ALWAYS**: Include the base `.pm7-button` class on every button.
- **ALWAYS**: Specify `type="button"`, `type="submit"`, or `type="reset"` on every `<button>` element.
- **ALWAYS**: Add an `aria-label` to icon-only buttons for screen reader accessibility.
- **ALWAYS**: Add the `disabled` attribute when a button is in a `data-state="loading"` state.

### NEVER
- **NEVER**: Combine multiple variant classes (e.g., `.pm7-button--primary` and `.pm7-button--secondary`).
- **NEVER**: Use a `<div>` or `<span>` to create a button. Use `<button>` or `<a>`.
- **NEVER**: Place block-level elements inside a `<button>`.
- **NEVER**: Omit the `aria-label` on buttons that contain only an icon.

## CSS Variables

### Component-Specific Variables

| Variable | Light Mode | Dark Mode | Usage |
|----------|------------|-----------|--------|
| `--pm7-button-radius` | `var(--pm7-radius)` | `var(--pm7-radius)` | Button border radius |
| `--pm7-button-border-width` | `1px` | `1px` | Border width |
| `--pm7-button-font-size` | `var(--pm7-text-sm)` | `var(--pm7-text-sm)` | Font size |
| `--pm7-button-font-weight` | `var(--pm7-font-medium)` | `var(--pm7-font-medium)` | Font weight |
| `--pm7-button-line-height` | `var(--pm7-leading-normal)` | `var(--pm7-leading-normal)` | Line height |
| `--pm7-button-padding-x` | `var(--pm7-spacing-4)` | `var(--pm7-spacing-4)` | Horizontal padding |
| `--pm7-button-padding-y` | `var(--pm7-spacing-2)` | `var(--pm7-spacing-2)` | Vertical padding |
| `--pm7-button-padding-x-sm` | `var(--pm7-spacing-3)` | `var(--pm7-spacing-3)` | Small button horizontal padding |
| `--pm7-button-padding-y-sm` | `var(--pm7-spacing-1)` | `var(--pm7-spacing-1)` | Small button vertical padding |
| `--pm7-button-padding-x-lg` | `var(--pm7-spacing-6)` | `var(--pm7-spacing-6)` | Large button horizontal padding |
| `--pm7-button-padding-y-lg` | `var(--pm7-spacing-3)` | `var(--pm7-spacing-3)` | Large button vertical padding |
| `--pm7-button-shadow` | `var(--pm7-shadow-sm)` | `var(--pm7-shadow-sm)` | Default shadow |
| `--pm7-button-shadow-hover` | `var(--pm7-shadow)` | `var(--pm7-shadow)` | Hover shadow |
| `--pm7-button-shadow-active` | `var(--pm7-shadow-none)` | `var(--pm7-shadow-none)` | Active shadow |
| `--pm7-button-focus-shadow` | `0 0 0 3px rgb(28 134 239 / 0.2)` | `0 0 0 3px rgb(59 158 255 / 0.3)` | Focus ring shadow |

### Required Global Variables

| Variable | Light Mode | Dark Mode | Usage in Button |
|----------|------------|-----------|-----------------|
| `--pm7-primary` | `#1C86EF` | `#3b9eff` | Primary button background |
| `--pm7-primary-hover` | `#1976D2` | `#2a8fe5` | Primary button hover |
| `--pm7-primary-active` | `#1565C0` | `#1976D2` | Primary button active |
| `--pm7-primary-foreground` | `#ffffff` | `#ffffff` | Primary button text |
| `--pm7-muted` | `#f5f5f5` | `#2d2d2d` | Secondary/disabled background |
| `--pm7-muted-foreground` | `#333333` | `#e6e6e6` | Secondary/disabled text |
| `--pm7-foreground` | `#000000` | `#e0e0e0` | Default text color |
| `--pm7-background` | `#ffffff` | `#121212` | Secondary hover text |
| `--pm7-border` | `#e0e0e0` | `#444` | Outline button border |
| `--pm7-border-hover` | `#c0c0c0` | `#666666` | Outline button hover border |
| `--pm7-error` | `#ef4444` | `#ef4444` | Destructive button background |
| `--pm7-error-foreground` | `#ffffff` | `#ffffff` | Destructive button text |
| `--pm7-radius` | `0.375rem` | `0.375rem` | Default border radius |
| `--pm7-text-sm` | `0.875rem` | `0.875rem` | Small text size |
| `--pm7-text-lg` | `1.125rem` | `1.125rem` | Large text size |
| `--pm7-font-medium` | `500` | `500` | Medium font weight |
| `--pm7-leading-normal` | `1.5` | `1.5` | Normal line height |
| `--pm7-spacing-1` | `0.25rem` | `0.25rem` | Smallest spacing |
| `--pm7-spacing-2` | `0.5rem` | `0.5rem` | Small spacing |
| `--pm7-spacing-3` | `0.75rem` | `0.75rem` | Medium spacing |
| `--pm7-spacing-4` | `1rem` | `1rem` | Default spacing |
| `--pm7-spacing-6` | `1.5rem` | `1.5rem` | Large spacing |

### Customization Example
```css
/* Custom button styling */
.my-app {
  --pm7-primary: #0066cc;
  --pm7-primary-hover: #0052a3;
  --pm7-primary-active: #004080;
  --pm7-button-radius: 0.25rem;
  --pm7-button-font-weight: 600;
}

/* Flat design without shadows */
.my-app {
  --pm7-button-shadow: none;
  --pm7-button-shadow-hover: none;
  --pm7-button-focus-shadow: 0 0 0 2px currentColor;
}
```

## Cross-Component Dependencies

### Works With
- **Icons**: Buttons frequently include icons via `.pm7-button-icon`
- **Dialog**: Buttons are used in dialog footers for actions
- **Menu**: Menu triggers are often styled as buttons
- **Input**: Buttons are used in input groups
- **Form**: Submit and reset buttons in forms

### Conflicts With
- **Link**: Don't combine `.pm7-button--link` with other button variants
- **Size Modifiers**: Never apply multiple size classes (sm, lg) to the same button

## Accessibility

- **Focus**: Focus is handled by the browser. PM7 provides a clear, visible focus ring.
- **Keyboard**: Buttons are fully keyboard accessible (`Tab` to focus, `Enter`/`Space` to activate).
- **ARIA**: It is **MANDATORY** to provide an `aria-label` for icon-only buttons.
- **Screen reader**: When using semantic `<button>` or `<a>` elements, screen readers announce them correctly.

## Complete Example: Data Table Actions

SCENARIO: An admin data table with bulk actions in the toolbar and inline actions for each row.

```html
<div class="pm7-container">
  <div class="toolbar" style="margin-bottom: 1rem;">
    <button type="button" class="pm7-button pm7-button--primary">
      <svg class="pm7-button-icon" width="16" height="16">...</svg>
      <span>Add User</span>
    </button>
  </div>
  <table class="pm7-table">
    <thead>
      <tr><th>Name</th><th>Actions</th></tr>
    </thead>
    <tbody>
      <tr>
        <td>John Doe</td>
        <td>
          <div style="display: flex; gap: 0.25rem;">
            <button type="button" class="pm7-button pm7-button--ghost pm7-button--sm pm7-button--icon" aria-label="Edit user">
              <svg width="16" height="16">...</svg>
            </button>
            <button type="button" class="pm7-button pm7-button--ghost pm7-button--sm pm7-button--icon pm7-button--destructive" aria-label="Delete user">
              <svg width="16" height="16">...</svg>
            </button>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</div>
```
