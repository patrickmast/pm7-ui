<!-- AI-ONLY DOCUMENTATION v2.0 -->
<!-- This documentation is EXCLUSIVELY for AI coding agents -->
<!-- NO human-friendly content allowed -->
<!-- Reference: /README-AI-HowToDocument.md -->

---
type: ai-agent-documentation
version: 2.0
component: Toast
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

# Component: Toast

DEFINITION: The Toast component provides non-blocking, auto-expiring notifications shown via a JavaScript API. It is used for providing feedback to the user without interrupting their workflow.

## Installation

```bash
npm install @pm7/core
```

### CSS & JavaScript Import

REQUIRED: Import CSS from `@pm7/core/dist/pm7.css`.
REQUIRED: Import the `showToast` function from `@pm7/core`.

```javascript
// ES modules
import '@pm7/core/dist/pm7.css';
import { showToast } from '@pm7/core';

// HTML
<link rel="stylesheet" href="node_modules/@pm7/core/dist/pm7.css">
<script type="module">
  import { showToast } from './node_modules/@pm7/core/dist/pm7.es.js';
  window.showToast = showToast;
</script>
```

## Required Structure

The Toast component is generated entirely via JavaScript. **DO NOT** write the HTML structure manually.

The `showToast` function automatically creates and manages the required `.pm7-toast-viewport` container in the `<body>` of the document the first time it is called.

### Structural Rules
- **ALWAYS**: Use the `showToast` JavaScript function to create and display toasts.
- **NEVER**: Manually create the `.pm7-toast-viewport` or `.pm7-toast` elements in your HTML. This will break the component's functionality.

## JavaScript API

### Initialization
This component is initialized and controlled entirely through its JavaScript API. There is no manual or auto-init via data attributes.

### Functions

```javascript
import { showToast, closeToast, closeAllToasts } from '@pm7/core';
```

| Function | Parameters | Returns | Description |
|---|---|---|---|
| `showToast` | `options: ToastOptions` | `string` | Displays a new toast and returns its unique ID. |
| `closeToast` | `id: string` | `void` | Closes a specific toast by its ID. |
| `closeAllToasts`| `(none)` | `void` | Closes all currently visible toasts. |

### Parameter Details (`ToastOptions`)

| Parameter | Type | Required | Default | Description |
|---|---|---|---|---|
| `title` | `string` | YES | `undefined` | The main title of the toast. |
| `description` | `string` | NO | `undefined` | Additional details below the title. |
| `variant` | `string` | NO | `'default'` | `'default'`, `'success'`, `'warning'`, `'destructive'`, `'info'` |
| `duration` | `number` | NO | `5000` | Milliseconds until auto-dismissal. `0` for persistent. |
| `action` | `string` | NO | `undefined` | An HTML string for action buttons. e.g., `'<button class="pm7-button">Undo</button>'` |
| `onClose` | `() => void` | NO | `undefined` | Callback function executed when the toast is closed. |

### Events

| Event | When | Detail | Bubbles |
|---|---|---|---|---|
| `pm7:toast:show` | After a toast appears | `{ id: string, options: object }` | YES |
| `pm7:toast:close`| After a toast closes | `{ id: string, reason: string }` | YES |

## Attributes

See /docs/ATTRIBUTES.md for cross-component attribute relationships.

| Attribute | Component(s) | Values | Required | Effect |
|---|---|---|---|---|
| `aria-live` | Toast | `polite`, `assertive` | AUTO | Indicates that an element will be updated, and describes the types of updates the user agent, assistive technologies, and user can expect. |
| `role` | Toast | `status` | AUTO | Defines the purpose or nature of an element. |

## Patterns

### Pattern: Success Notification
```javascript
showToast({
  title: 'Success!',
  description: 'Your changes have been saved.',
  variant: 'success'
});
```

### Pattern: Error Message
```javascript
showToast({
  title: 'Authentication Failed',
  description: 'Please check your credentials and try again.',
  variant: 'destructive',
  duration: 8000
});
```

### Pattern: Toast with Undo Action
```javascript
showToast({
  title: 'Item Deleted',
  action: '<button class="pm7-button pm7-button--sm pm7-button--ghost" onclick="handleUndo()">Undo</button>',
  duration: 7000
});
```

### Pattern: Persistent Loading Indicator
```javascript
const loadingToastId = showToast({
  title: 'Uploading file...',
  description: 'This may take a moment.',
  duration: 0 // Persistent
});

// After upload completes
closeToast(loadingToastId);
showToast({ title: 'Upload Complete', variant: 'success' });
```

## Anti-Patterns

### NEVER: Use toasts for critical confirmations
```javascript
// NEVER
showToast({
  title: 'Are you sure you want to delete your account?',
  variant: 'destructive',
  action: '<button onclick="confirmDelete()">Yes, delete</button>',
  duration: 0
});

// BECAUSE
Toasts are non-modal and can be missed. Critical actions require a blocking UI to get the user's full attention.

// INSTEAD
// Use a Dialog component for critical confirmations.
const dialog = PM7.Dialog.getInstance(document.querySelector('[data-pm7-dialog="confirm-delete"]'));
dialog.open();
```

### NEVER: Spam multiple toasts for batch operations
```javascript
// NEVER
for (const item of items) {
  processItem(item);
  showToast({ title: `Processed ${item.name}` });
}

// BECAUSE
This creates excessive visual noise and floods the notification area. The user cannot read them all.

// INSTEAD
Promise.all(items.map(processItem)).then(() => {
  showToast({
    title: 'Processing Complete',
    description: `${items.length} items have been processed.`,
    variant: 'success'
  });
});
```

## Rules

### ALWAYS
- **ALWAYS**: Provide a `title` for every toast for accessibility and clarity.
- **ALWAYS**: Use the appropriate `variant` to match the message type (e.g., `destructive` for errors).
- **ALWAYS**: Keep toast messages concise and to the point.

### NEVER
- **NEVER**: Manually write the HTML for a toast or its viewport.
- **NEVER**: Use a toast for information that must be acted upon. Use a Dialog instead.
- **NEVER**: Show more than one or two toasts at a time for a single user action.
- **NEVER**: Use extremely long `duration` values for simple, informational toasts.

## CSS Variables

### Component-Specific Variables
Toast does not define its own CSS variables. All styling is controlled through global PM7 design tokens.

### Required Global Variables

| Variable | Light Mode | Dark Mode | Usage in Toast |
|----------|------------|-----------|----------------|
| `--pm7-background` | `#ffffff` | `#121212` | Toast background |
| `--pm7-foreground` | `#000000` | `#e0e0e0` | Title text color |
| `--pm7-muted-foreground` | `#333333` | `#e6e6e6` | Description text, close button |
| `--pm7-border` | `#e0e0e0` | `#444` | Toast border |
| `--pm7-muted` | `#f5f5f5` | `#2d2d2d` | Close button hover background |
| `--pm7-destructive` | `#ef4444` | `#ef4444` | Destructive variant background |
| `--pm7-destructive-foreground` | `#ffffff` | `#ffffff` | Destructive variant text |
| `--pm7-success-light` | `#dcfce7` | `#052e16` | Success variant background |
| `--pm7-success` | `#22c55e` | `#22c55e` | Success variant border |
| `--pm7-success-dark` | `#166534` | `#22c55e` | Success variant title |
| `--pm7-warning-light` | `#fef3c7` | `#451a03` | Warning variant background |
| `--pm7-warning` | `#f59e0b` | `#f59e0b` | Warning variant border |
| `--pm7-warning-dark` | `#92400e` | `#f59e0b` | Warning variant title |
| `--pm7-info-light` | `#dbeafe` | `#1e3a8a` | Info variant background |
| `--pm7-info` | `#3b82f6` | `#3b82f6` | Info variant border |
| `--pm7-info-dark` | `#1e40af` | `#3b82f6` | Info variant title |
| `--pm7-primary` | `#1C86EF` | `#3b9eff` | Progress bar color |
| `--pm7-radius` | `0.375rem` | `0.375rem` | Toast border radius |
| `--pm7-radius-sm` | `0.125rem` | `0.125rem` | Close button radius |
| `--pm7-shadow-md` | `0 4px 6px -1px rgb(0 0 0 / 0.1)` | `0 4px 6px -1px rgb(0 0 0 / 0.2)` | Toast shadow |
| `--pm7-spacing-2` | `0.5rem` | `0.5rem` | Toast gap in viewport |
| `--pm7-spacing-3` | `0.75rem` | `0.75rem` | Action margin |
| `--pm7-spacing-4` | `1rem` | `1rem` | Toast padding, viewport position |
| `--pm7-text-sm` | `0.875rem` | `0.875rem` | Text size |
| `--pm7-font-semibold` | `600` | `600` | Title font weight |

### Customization Example
```css
/* Custom toast styling */
.my-app {
  --pm7-success-light: #f0fdf4;
  --pm7-success-dark: #15803d;
  --pm7-shadow-md: 0 2px 8px rgba(0, 0, 0, 0.15);
}

/* Position toasts at bottom */
.my-app .pm7-toast-viewport {
  top: auto;
  bottom: var(--pm7-spacing-4);
}
```

## Cross-Component Dependencies

### Works With
- **Button**: Action buttons in toasts use PM7 button classes
- **Dialog**: Often show toasts after dialog actions complete
- **Form**: Show validation or submission feedback via toasts

### Conflicts With
- **Alert**: Don't use toasts for critical alerts that require user action
- **Modal**: Toasts appear above modal overlays (z-index: 9999)

## Accessibility

- **Focus**: Toasts do not steal focus from the user's current task.
- **Keyboard**: Toasts are not keyboard focusable by design, but if they contain actions, those actions must be keyboard-operable.
- **ARIA**: The toast viewport uses `aria-live="polite"` and `role="status"` to ensure screen readers announce new toasts as they appear.
- **Screen reader**: A `title` is mandatory for screen readers to provide context.

## Complete Example: Form Submission

SCENARIO: A user submits a form, gets a loading indicator, and then a success or error message.

```html
<form id="profile-form">
  <input type="text" class="pm7-input" name="name" value="John Doe">
  <button type="submit" class="pm7-button pm7-button--primary">Save</button>
</form>

<script type="module">
  import { showToast, closeToast } from './node_modules/@pm7/core/dist/pm7.es.js';

  document.getElementById('profile-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const loadingId = showToast({ title: 'Saving profile...', duration: 0 });

    try {
      // Simulate network request
      await new Promise(res => setTimeout(res, 1500));
      // throw new Error('Connection failed'); // Uncomment to test error case

      closeToast(loadingId);
      showToast({ 
        title: 'Profile Saved',
        description: 'Your changes have been successfully updated.',
        variant: 'success' 
      });
    } catch (error) {
      closeToast(loadingId);
      showToast({
        title: 'Save Failed',
        description: error.message,
        variant: 'destructive'
      });
    }
  });
</script>
```
