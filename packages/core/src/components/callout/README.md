<!-- AI-ONLY DOCUMENTATION v2.0 -->
<!-- This documentation is EXCLUSIVELY for AI coding agents -->
<!-- NO human-friendly content allowed -->
<!-- Reference: /README-AI-HowToDocument.md -->

---
type: ai-agent-documentation
version: 2.0
component: Callout
status: stable
audience: ai-coding-agents-only
human-readable: false
category: feedback
framework-support:
  - vanilla: true
  - react: true
  - vue: true
  - angular: true
  - svelte: true
---

# Component: Callout

DEFINITION: The Callout component is a styled container used to display important, contextual information or messages to the user. It is a CSS-only component.

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

The most basic Callout requires a `div` with the class `.pm7-callout` and a `div` with the class `.pm7-callout-body` inside it.

```html
<!-- EXACT pattern - NO deviations allowed -->
<div class="pm7-callout">
  <div class="pm7-callout-body">
    <p>Your message here.</p>
  </div>
</div>
```

### Structural Rules
- **ALWAYS**: The main callout container MUST have the class `.pm7-callout`.
- **ALWAYS**: All content within the callout MUST be wrapped in a `div` with the class `.pm7-callout-body`.
- **NEVER**: Place content directly inside `.pm7-callout` without the `.pm7-callout-body` wrapper.

## JavaScript API

This is a CSS-only component. It does **NOT** have a JavaScript API.
- **No initialization**: Styling is applied directly by CSS classes.
- **No methods**: Control the callout by adding/removing CSS classes.
- **No events**: Use standard DOM events on interactive elements within the callout.

## CSS Classes

| Class | Required | When | Effect |
|---|---|---|---|
| `.pm7-callout` | YES | ALWAYS | Applies base callout styling (background, padding, border-radius). |
| `.pm7-callout-body` | YES | ALWAYS | Provides internal padding and ensures proper content flow. |
| `.pm7-callout--info` | NO | For informational messages | Applies a blue theme. |
| `.pm7-callout--success` | NO | For success messages | Applies a green theme. |
| `.pm7-callout--warning` | NO | For warning messages | Applies an orange theme. |
| `.pm7-callout--error` | NO | For error messages | Applies a red theme. |
| `.pm7-callout--tip` | NO | For helpful tips | Applies a purple theme. |
| `.pm7-callout-header` | NO | For a distinct header section | Styles a header area within the callout. |
| `.pm7-callout-icon` | NO | For an icon within the header | Styles an icon to appear next to the header text. |
| `.pm7-callout--sm` | NO | For a smaller callout | Reduces padding and font size. |
| `.pm7-callout--lg` | NO | For a larger callout | Increases padding and font size. |
| `.pm7-callout--no-border` | NO | To remove the left border | Removes the prominent left-side border. |
| `.pm7-callout--center` | NO | To center align text | Centers the text content within the callout body. |
| `.pm7-callout--pulse` | NO | For a subtle pulsing animation | Adds a gentle animation to draw attention. |

## Patterns

### Pattern: Success Message Callout
```html
<div class="pm7-callout pm7-callout--success">
  <div class="pm7-callout-body">
    <p>Your changes have been saved successfully!</p>
  </div>
</div>
```

### Pattern: Warning Callout with Header and Icon
```html
<div class="pm7-callout pm7-callout--warning">
  <h4 class="pm7-callout-header">
    <svg class="pm7-callout-icon" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/>
    </svg>
    Warning
  </h4>
  <div class="pm7-callout-body">
    <p>This action cannot be undone. Please review carefully.</p>
  </div>
</div>
```

### Pattern: Informational Callout with Complex Content
```html
<div class="pm7-callout pm7-callout--info">
  <div class="pm7-callout-body">
    <p><strong>Note:</strong> Please ensure all required fields are filled out before submitting the form.</p>
    <ul>
      <li>Email address</li>
      <li>Password (min 8 characters)</li>
      <li>Username</li>
    </ul>
    <p>For more details, visit our <a href="/help">help center</a>.</p>
  </div>
</div>
```

## Anti-Patterns

### NEVER: Apply multiple variant classes
```html
<!-- NEVER -->
<div class="pm7-callout pm7-callout--info pm7-callout--error">...</div>

<!-- BECAUSE -->
Variant classes (e.g., `--info`, `--success`, `--error`) are mutually exclusive. Applying more than one will result in conflicting styles and unpredictable appearance.

<!-- INSTEAD -->
<div class="pm7-callout pm7-callout--info">...</div> <!-- Choose only one -->
```

### NEVER: Use custom colors to indicate meaning
```html
<!-- NEVER -->
<div class="pm7-callout" style="background-color: #ffcc00;">...</div>

<!-- BECAUSE -->
Custom inline styles bypass the theming system and can lead to inconsistent UI. Use the provided semantic variant classes for color-coding.

<!-- INSTEAD -->
<div class="pm7-callout pm7-callout--warning">...</div>
```

### NEVER: Place an icon directly in the callout body without a header
```html
<!-- NEVER -->
<div class="pm7-callout">
  <div class="pm7-callout-body">
    <svg class="pm7-callout-icon">...</svg> <!-- Icon here -->
    <p>Message</p>
  </div>
</div>

<!-- BECAUSE -->
Icons are designed to be part of the header for proper alignment and semantic grouping. Placing them directly in the body can lead to layout issues.

<!-- INSTEAD -->
<div class="pm7-callout">
  <h4 class="pm7-callout-header">
    <svg class="pm7-callout-icon">...</svg> Title
  </h4>
  <div class="pm7-callout-body">...</div>
</div>
```

## Rules

### ALWAYS
- **ALWAYS**: Wrap all content within a callout in `.pm7-callout-body`.
- **ALWAYS**: Choose only one semantic variant class (e.g., `--info`, `--success`) per callout.
- **ALWAYS**: If including an icon, place it inside a `.pm7-callout-header` element.

### NEVER
- **NEVER**: Apply custom background or border colors directly to the callout; use variant classes instead.
- **NEVER**: Mix size modifier classes (e.g., `--sm` and `--lg`) on the same callout.
- **NEVER**: Use a callout for critical, blocking information that requires immediate user interaction (use a Dialog instead).

## CSS Variables

### Component-Specific Variables

Callout does not define its own CSS variables. All styling is controlled through global PM7 design tokens.

### Required Global Variables

| Variable | Light Mode | Dark Mode | Usage in Callout |
|----------|------------|-----------|------------------|
| `--pm7-foreground` | `#000000` | `#e0e0e0` | Default text color |
| `--pm7-muted` | `#f5f5f5` | `#2d2d2d` | Default background |
| `--pm7-border` | `#e0e0e0` | `#444` | Default border color |
| `--pm7-radius` | `0.375rem` | `0.375rem` | Border radius |
| `--pm7-primary` | `#1C86EF` | `#3b9eff` | Link color, tip border |
| `--pm7-primary-light` | `#e6f2ff` | `rgba(28, 134, 239, 0.1)` | Tip variant background |
| `--pm7-primary-dark` | `#1565C0` | `var(--pm7-primary)` | Tip header color |
| `--pm7-info` | `#3b82f6` | `#3b82f6` | Info variant border |
| `--pm7-info-light` | `#dbeafe` | `rgba(59, 130, 246, 0.1)` | Info variant background |
| `--pm7-info-dark` | `#1e40af` | `var(--pm7-info)` | Info header color |
| `--pm7-success` | `#22c55e` | `#22c55e` | Success variant border |
| `--pm7-success-light` | `#dcfce7` | `rgba(34, 197, 94, 0.1)` | Success variant background |
| `--pm7-success-dark` | `#166534` | `var(--pm7-success)` | Success header color |
| `--pm7-warning` | `#f59e0b` | `#f59e0b` | Warning variant border |
| `--pm7-warning-light` | `#fef3c7` | `rgba(245, 158, 11, 0.1)` | Warning variant background |
| `--pm7-warning-dark` | `#92400e` | `var(--pm7-warning)` | Warning header color |
| `--pm7-error` | `#ef4444` | `#ef4444` | Error variant border |
| `--pm7-error-light` | `#fee2e2` | `rgba(239, 68, 68, 0.1)` | Error variant background |
| `--pm7-error-dark` | `#991b1b` | `var(--pm7-error)` | Error header color |

### Customization Example
```css
/* Custom callout styling */
.my-app {
  --pm7-info-light: #e0f2fe;
  --pm7-success-light: #f0fdf4;
  --pm7-warning-light: #fefce8;
  --pm7-error-light: #fef2f2;
}

/* Rounded callouts */
.rounded-callout {
  --pm7-radius: 1rem;
}

/* Gradient borders */
.gradient-callout.pm7-callout--info {
  border-image: linear-gradient(45deg, #3b82f6, #60a5fa) 1;
}
```

## Cross-Component Dependencies

### Works With
- **Icons**: Callout headers often include icons
- **Links**: Callouts frequently contain action links
- **Lists**: Structured content in callout bodies
- **Code**: Inline code snippets in technical callouts

### Conflicts With
- **Toast**: Both provide feedback; use Toast for transient messages
- **Dialog**: Use Dialog for critical actions requiring user response

## Accessibility

- **Color**: Color is used to convey meaning, but it is not the sole indicator. Ensure important messages are also conveyed through text.
- **Semantic HTML**: Use appropriate heading levels (`h3`, `h4`) within the callout header for screen reader navigation.
- **Icons**: Icons are primarily decorative. Ensure any critical information conveyed by an icon is also present in the text.

## Complete Example: Dashboard Notifications

SCENARIO: Displaying various system notifications and tips on a dashboard.

```html
<div style="display: grid; gap: 1rem; max-width: 800px; margin: 2rem auto;">
  <div class="pm7-callout pm7-callout--info">
    <div class="pm7-callout-body">
      <p>Welcome back, John! Check out the new analytics features.</p>
    </div>
  </div>

  <div class="pm7-callout pm7-callout--warning pm7-callout--pulse">
    <h4 class="pm7-callout-header">
      <svg class="pm7-callout-icon" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"/>
      </svg>
      Action Required
    </h4>
    <div class="pm7-callout-body">
      <p>Your subscription is expiring in 7 days. <a href="#">Renew now</a> to avoid service interruption.</p>
    </div>
  </div>

  <div class="pm7-callout pm7-callout--success">
    <div class="pm7-callout-body">
      <p>All systems are operational. No issues detected.</p>
    </div>
  </div>

  <div class="pm7-callout pm7-callout--tip pm7-callout--no-border">
    <h4 class="pm7-callout-header">
      <svg class="pm7-callout-icon" width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
      </svg>
      Pro Tip
    </h4>
    <div class="pm7-callout-body">
      <p>You can customize your dashboard layout by dragging and dropping widgets.</p>
    </div>
  </div>
</div>
```
