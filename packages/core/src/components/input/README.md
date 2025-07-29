<!-- AI-ONLY DOCUMENTATION v2.0 -->
<!-- This documentation is EXCLUSIVELY for AI coding agents -->
<!-- NO human-friendly content allowed -->
<!-- Reference: /README-AI-HowToDocument.md -->

---
type: ai-agent-documentation
version: 2.0
component: Input
status: stable
audience: ai-coding-agents-only
human-readable: false
category: forms
framework-support:
  - vanilla: true
  - react: true
  - vue: true
  - angular: true
  - svelte: true
---

# Component: Input

DEFINITION: The Input component provides styled, accessible, and framework-agnostic form controls. It is a CSS-only component, meaning it relies on standard HTML elements and CSS classes for styling and behavior.

## Installation

```bash
npm install @pm7/core
```

### CSS Import
REQUIRED: Import CSS from `@pm7/core/dist/pm7.css`
NEVER: Import from `@pm7/core/dist/index.css`

```javascript
// ES modules
import '@pm7/core/dist/pm7.css';

// HTML
<link rel="stylesheet" href="node_modules/@pm7/core/dist/pm7.css">
```

## Required Structure

The most basic implementation of a PM7 Input requires a standard HTML `<input>` element with the `.pm7-input` class.

```html
<!-- EXACT pattern - NO deviations allowed -->
<input type="text" class="pm7-input">
```

### Structural Rules
- **ALWAYS**: For accessible forms, wrap the input and its corresponding `<label>` in a `div` with the class `.pm7-form-group`.
- **ALWAYS**: Associate labels with inputs using the `for` attribute on the label and a matching `id` attribute on the input.
- **NEVER**: Use a `placeholder` attribute as a replacement for a `<label>`.

## JavaScript API

This is a CSS-only component. It does **NOT** have a JavaScript API.
- **No initialization**: No `data-pm7-input` attribute or `new PM7Input()` constructor.
- **No methods**: No `.open()`, `.close()`, etc.
- **No events**: No `pm7:input:change` events are dispatched. Rely on standard DOM events (`input`, `change`, `blur`).

## Attributes

See /docs/ATTRIBUTES.md for cross-component attribute relationships.

| Attribute | Component(s) | Values | Required | Effect |
|---|---|---|---|---|
| `aria-invalid` | Input | `true`, `false` | NO | Indicates that the value of an input is not valid. |
| `aria-describedby` | Input | ID of descriptive element | NO | Links an element to an element that describes it. |

## CSS Classes

| Class | Required | When | Effect |
|-------|----------|------|--------|
| `.pm7-input` | YES | ALWAYS for `<input>` and `<textarea>` | Applies base styling. |
| `.pm7-select` | YES | ALWAYS for `<select>` | Applies base styling for select dropdowns. |
| `.pm7-checkbox` | YES | ALWAYS for checkbox container | Base class for custom checkboxes. |
| `.pm7-radio` | YES | ALWAYS for radio button container | Base class for custom radio buttons. |
| `.pm7-switch` | YES | ALWAYS for switch container | Base class for custom toggle switches. |
| `.pm7-form-group` | NO | Recommended | Wraps a label and input for correct spacing. |
| `.pm7-label` | NO | Recommended | Styles the form label. |
| `.pm7-input--sm` | NO | For smaller inputs | Decreases input height and font size. |
| `.pm7-input--lg` | NO | For larger inputs | Increases input height and font size. |
| `.pm7-input--error` | NO | For validation error state | Applies a red border and focus ring. |
| `.pm7-input--success` | NO | For validation success state | Applies a green border and focus ring. |
| `.pm7-input--with-icon-left` | NO | When an icon is on the left | Adds padding-left for the icon. |
| `.pm7-input--with-icon-right`| NO | When an icon is on the right | Adds padding-right for the icon. |
| `.pm7-input-icon-wrapper` | NO | When using icons | A wrapper to position icons over the input. |
| `.pm7-input-group` | NO | For addons/buttons | Groups an input with another element. |

## Patterns

### Pattern: Input with Label (Recommended)
```html
<div class="pm7-form-group">
  <label for="input-id" class="pm7-label">Label</label>
  <input type="text" id="input-id" class="pm7-input">
</div>
```

### Pattern: Error State
```html
<div class="pm7-form-group">
  <label for="username" class="pm7-label">Username</label>
  <input type="text" id="username" class="pm7-input pm7-input--error" aria-invalid="true" aria-describedby="username-error">
  <p id="username-error" class="pm7-helper-text pm7-helper-text--error">Username already taken</p>
</div>
```

### Pattern: Input with Left Icon
```html
<div class="pm7-input-icon-wrapper">
  <svg class="pm7-input-icon pm7-input-icon--left" width="16" height="16">...</svg>
  <input type="search" class="pm7-input pm7-input--with-icon-left" placeholder="Search...">
</div>
```

### Pattern: Input Group with Button
```html
<div class="pm7-input-group">
  <input type="text" class="pm7-input" placeholder="Enter code">
  <button class="pm7-button pm7-button--primary">Apply</button>
</div>
```

### Pattern: Checkbox
```html
<label class="pm7-checkbox">
  <input type="checkbox">
  <span class="pm7-checkbox-indicator"></span>
  <span class="pm7-checkbox-label">Label</span>
</label>
```

### Pattern: Select
```html
<div class="pm7-form-group">
    <label for="form-country" class="pm7-label">Country</label>
    <select id="form-country" class="pm7-select">
      <option value="">Select country</option>
      <option value="us">United States</option>
    </select>
</div>
```

## Anti-Patterns

### NEVER: Use placeholder as a label
```html
<!-- NEVER -->
<input type="text" class="pm7-input" placeholder="Full Name">

<!-- BECAUSE -->
Placeholders disappear on input, have low contrast, and are not a substitute for a persistent, accessible label.

<!-- INSTEAD -->
<div class="pm7-form-group">
  <label for="name" class="pm7-label">Full Name</label>
  <input type="text" id="name" class="pm7-input">
</div>
```

### NEVER: Omit `for` and `id` attributes
```html
<!-- NEVER -->
<label class="pm7-label">Email</label>
<input type="email" class="pm7-input">

<!-- BECAUSE -->
The label is not programmatically associated with the input. This breaks accessibility for screen readers and prevents users from clicking the label to focus the input.

<!-- INSTEAD -->
<label for="user-email" class="pm7-label">Email</label>
<input type="email" id="user-email" class="pm7-input">
```

### NEVER: Forget ARIA attributes for errors
```html
<!-- NEVER -->
<input type="email" class="pm7-input pm7-input--error">
<p class="pm7-helper-text pm7-helper-text--error">Invalid email</p>

<!-- BECAUSE -->
Screen readers will not announce that the field has an error or what the error message is.

<!-- INSTEAD -->
<input type="email" class="pm7-input pm7-input--error" aria-invalid="true" aria-describedby="email-error">
<p id="email-error" class="pm7-helper-text pm7-helper-text--error">Invalid email</p>
```

## Rules

### ALWAYS
- **ALWAYS**: Use `.pm7-form-group` to wrap a label and its corresponding input for correct spacing and semantic grouping.
- **ALWAYS**: Associate labels with inputs using matching `for` and `id` attributes.
- **ALWAYS**: For custom controls like `.pm7-checkbox`, `.pm7-radio`, and `.pm7-switch`, include all required child `<span>` elements as shown in the patterns.
- **ALWAYS**: When applying an error state (`.pm7-input--error`), also set `aria-invalid="true"` and link to the error message via `aria-describedby`.
- **ALWAYS**: Use the correct semantic HTML element (`<input>`, `<textarea>`, `<select>`).

### NEVER
- **NEVER**: Use a `placeholder` as the only label for an input.
- **NEVER**: Apply multiple size modifiers (e.g., `.pm7-input--sm` and `.pm7-input--lg`) to the same element.
- **NEVER**: Omit the required `<span>` structure for checkboxes, radios, or switches.
- **NEVER**: Manually style error states without using the provided classes and ARIA attributes.

## CSS Variables

### Component-Specific Variables

| Variable | Light Mode | Dark Mode | Usage |
|----------|------------|-----------|--------|
| `--pm7-input` | `#ffffff` | `#1e1e1e` | Input background color |
| `--pm7-input-radius` | `var(--pm7-radius)` | `var(--pm7-radius)` | Input border radius |
| `--pm7-input-border-width` | `1px` | `1px` | Border width |
| `--pm7-input-padding-x` | `var(--pm7-spacing-3)` | `var(--pm7-spacing-3)` | Horizontal padding |
| `--pm7-input-padding-y` | `var(--pm7-spacing-2)` | `var(--pm7-spacing-2)` | Vertical padding |
| `--pm7-input-font-size` | `var(--pm7-text-base)` | `var(--pm7-text-base)` | Font size |
| `--pm7-input-font-weight` | `var(--pm7-font-normal)` | `var(--pm7-font-normal)` | Font weight |
| `--pm7-input-line-height` | `var(--pm7-leading-normal)` | `var(--pm7-leading-normal)` | Line height |

### Required Global Variables

| Variable | Light Mode | Dark Mode | Usage in Input |
|----------|------------|-----------|----------------|
| `--pm7-foreground` | `#000000` | `#e0e0e0` | Input text color |
| `--pm7-muted` | `#f5f5f5` | `#2d2d2d` | Disabled background |
| `--pm7-muted-foreground` | `#333333` | `#e6e6e6` | Placeholder, helper text |
| `--pm7-border` | `#e0e0e0` | `#444` | Default border color |
| `--pm7-border-hover` | `#c0c0c0` | `#666666` | Hover border color |
| `--pm7-ring` | `#1C86EF` | `#3b9eff` | Focus border color |
| `--pm7-focus-shadow` | `0 0 0 3px rgba(28, 134, 239, 0.2)` | `0 0 0 3px rgba(59, 158, 255, 0.2)` | Focus shadow |
| `--pm7-error` | `#ef4444` | `#ef4444` | Error state color |
| `--pm7-error-focus-shadow` | `0 0 0 3px rgba(239, 68, 68, 0.2)` | `0 0 0 3px rgba(239, 68, 68, 0.2)` | Error focus shadow |
| `--pm7-success` | `#22c55e` | `#22c55e` | Success state color |
| `--pm7-success-focus-shadow` | `0 0 0 3px rgba(34, 197, 94, 0.2)` | `0 0 0 3px rgba(34, 197, 94, 0.2)` | Success focus shadow |
| `--pm7-primary` | `#1C86EF` | `#3b9eff` | Checkbox/radio checked background |
| `--pm7-primary-foreground` | `#ffffff` | `#ffffff` | Checkbox checkmark color |
| `--pm7-background` | `#ffffff` | `#121212` | Switch thumb background |
| `--pm7-shadow-sm` | `0 1px 2px 0 rgb(0 0 0 / 0.05)` | `0 1px 2px 0 rgb(0 0 0 / 0.1)` | Switch thumb shadow |
| `--pm7-font-medium` | `500` | `500` | Label font weight |
| `--pm7-font-normal` | `400` | `400` | Input font weight |
| `--pm7-text-sm` | `0.875rem` | `0.875rem` | Label, helper text size |
| `--pm7-text-lg` | `1.125rem` | `1.125rem` | Large input size |
| `--pm7-spacing-2` | `0.5rem` | `0.5rem` | Various spacing |
| `--pm7-spacing-4` | `1rem` | `1rem` | Form group spacing |
| `--pm7-radius` | `0.375rem` | `0.375rem` | Default border radius |
| `--pm7-radius-sm` | `0.125rem` | `0.125rem` | Checkbox border radius |
| `--pm7-radius-full` | `9999px` | `9999px` | Radio/switch border radius |

### Customization Example
```css
/* Custom input styling */
.my-app {
  --pm7-input: #f8f9fa;
  --pm7-border: #ced4da;
  --pm7-ring: #0066cc;
  --pm7-input-radius: 0.5rem;
  --pm7-input-padding-x: 1rem;
}

/* Dark mode overrides */
.my-app.dark {
  --pm7-input: #2a2a2a;
  --pm7-border: #555;
  --pm7-ring: #66b3ff;
  --pm7-muted-foreground: #aaa;
}
```

## Cross-Component Dependencies

### Works With
- **Label**: Use `.pm7-label` for form labels
- **Button**: Often used in input groups with buttons
- **Icons**: Input icons for visual context
- **Form Group**: `.pm7-form-group` for proper spacing

### Conflicts With
- **Menu**: Don't use Menu component for select dropdowns (use native select)
- **Dialog**: Form inputs are commonly used in dialogs

## Accessibility

- **Focus**: Focus management is handled by the browser. PM7 provides clear, visible focus states.
- **Keyboard**: All inputs are keyboard accessible using standard browser behavior (Tab, Shift+Tab, Space, Arrow keys).
- **ARIA**: It is **MANDATORY** to apply `aria-invalid` and `aria-describedby` for validation states.
- **Screen reader**: Correctly structured forms with associated labels are fully accessible.

## Complete Example: User Registration Form

SCENARIO: A complete, accessible, and responsive registration form demonstrating various input types, validation states, and layout patterns.

```html
<form class="registration-form" id="registration">
  <h1>Create Account</h1>
  
  <div class="pm7-form-group">
    <label for="first-name" class="pm7-label pm7-label--required">First Name</label>
    <input type="text" id="first-name" name="firstName" class="pm7-input" required>
  </div>
  
  <div class="pm7-form-group">
    <label for="email" class="pm7-label pm7-label--required">Email</label>
    <div class="pm7-input-icon-wrapper">
      <svg class="pm7-input-icon pm7-input-icon--left" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <rect x="2" y="4" width="20" height="16" rx="2"></rect>
        <path d="m22 7-10 5L2 7"></path>
      </svg>
      <input type="email" id="email" name="email" class="pm7-input pm7-input--with-icon-left" required aria-describedby="email-error" placeholder="you@example.com">
    </div>
    <p id="email-error" class="pm7-helper-text pm7-helper-text--error" style="display: none;"></p>
  </div>
  
  <div class="pm7-form-group">
    <label for="password" class="pm7-label pm7-label--required">Password</label>
    <input type="password" id="password" name="password" class="pm7-input" required minlength="8">
  </div>
  
  <div class="pm7-form-group">
    <label class="pm7-checkbox">
      <input type="checkbox" name="terms" required>
      <span class="pm7-checkbox-indicator"></span>
      <span class="pm7-checkbox-label">
        I agree to the <a href="#">Terms of Service</a>
      </span>
    </label>
  </div>
  
  <button type="submit" class="pm7-button pm7-button--primary">Create Account</button>
</form>
```
