<!-- AI-ONLY DOCUMENTATION -->
---
type: ai-agent-documentation
audience: ai-coding-agents-only
style: exact-patterns
---

# Component: Dialog

Modal overlay component for user interactions. Works automatically in React, Vue, Angular, and vanilla JS.

## Installation

```bash
npm install @pm7/core
```

```javascript
import '@pm7/core/dist/pm7.css';
import '@pm7/core';
```

## Basic Usage

```html
<div data-pm7-dialog="my-dialog">
  <div data-pm7-header>Title</div>
  <div data-pm7-body>Content goes here</div>
  <div data-pm7-footer>
    <button onclick="window.closeDialog('my-dialog')">Close</button>
  </div>
</div>

<button onclick="window.openDialog('my-dialog')">Open Dialog</button>
```

## React Usage

```jsx
export function MyDialog({ isOpen, onClose }) {
  useEffect(() => {
    if (isOpen) {
      window.openDialog?.('my-dialog');
    } else {
      window.closeDialog?.('my-dialog');
    }
  }, [isOpen]);

  // Only render when needed
  if (!isOpen) return null;

  return (
    <div data-pm7-dialog="my-dialog">
      <div data-pm7-header>React Dialog</div>
      <div data-pm7-body>
        <p>Dialog content with React state and props!</p>
      </div>
      <div data-pm7-footer>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}
```

That's it. It just works. No setTimeout, no manual init, no workarounds.

## Attributes

| Attribute | Values | Usage |
|-----------|---------|-------|
| `data-pm7-dialog` | string ID | Required dialog identifier |
| `data-pm7-dialog-size` | `sm`, `md`, `lg`, `xl`, `full` | Dialog width |
| `data-pm7-show-close` | presence | Show X close button |
| `data-pm7-no-escape` | presence | Disable ESC key |
| `data-pm7-no-overlay-close` | presence | Disable overlay click |

## Content Sections

| Attribute | Usage |
|-----------|-------|
| `data-pm7-header` | Header section with title |
| `data-pm7-body` | Main content area |
| `data-pm7-footer` | Footer with actions |

## API Functions

```javascript
// Open dialog
window.openDialog('dialog-id');

// Close dialog  
window.closeDialog('dialog-id');

// Close all dialogs
window.closeAllDialogs();
```

## Common Patterns

### Alert Dialog
```html
<div data-pm7-dialog="alert" data-pm7-dialog-size="sm">
  <div data-pm7-header>Error</div>
  <div data-pm7-body>Something went wrong!</div>
  <div data-pm7-footer>
    <button onclick="window.closeDialog('alert')">OK</button>
  </div>
</div>
```

### Form Dialog
```html
<div data-pm7-dialog="form" data-pm7-show-close>
  <div data-pm7-header>Edit Profile</div>
  <form data-pm7-body>
    <input type="text" class="pm7-input" />
  </form>
  <div data-pm7-footer>
    <button onclick="window.closeDialog('form')">Cancel</button>
    <button type="submit">Save</button>
  </div>
</div>
```

## Framework Notes

### React Footer Buttons
Use `dangerouslySetInnerHTML` for footer buttons to ensure click handlers work:

```jsx
<div data-pm7-footer dangerouslySetInnerHTML={{
  __html: `
    <button onclick="window.closeDialog('id')">Cancel</button>
    <button onclick="window.handleSave()">Save</button>
  `
}} />
```

## Rules

- ALWAYS: Use unique IDs for dialogs
- ALWAYS: Include content markers (data-pm7-header, etc.)
- ALWAYS: Render dialog conditionally in React (`if (!isOpen) return null`)
- NEVER: Nest dialogs inside dialogs
- NEVER: Add manual display styles

## Accessibility

- Focus trap when open
- Focus restored on close  
- ESC key closes (unless disabled)
- ARIA attributes auto-applied

## Related

- Button: For triggers and actions
- Toast: For non-blocking notifications
- Menu: For non-modal dropdowns