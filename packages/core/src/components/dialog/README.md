# Dialog

Dialogs are modal overlays that require user interaction. They're used for critical information, confirmation, or complex tasks that require focus.

## Installation

```bash
npm install @pm7/core
```

## Usage

### Basic Dialog

```html
<div class="pm7-dialog" data-pm7-dialog="my-dialog">
  <div class="pm7-dialog-overlay"></div>
  <div class="pm7-dialog-content">
    <div class="pm7-dialog-header">
      <h2 class="pm7-dialog-title">Dialog Title</h2>
      <button class="pm7-dialog-close" aria-label="Close">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <line x1="18" y1="6" x2="6" y2="18"/>
          <line x1="6" y1="6" x2="18" y2="18"/>
        </svg>
      </button>
    </div>
    <div class="pm7-dialog-body">
      <p>Dialog content goes here.</p>
    </div>
    <div class="pm7-dialog-footer">
      <button class="pm7-button pm7-button--outline" onclick="closeDialog('my-dialog')">
        Cancel
      </button>
      <button class="pm7-button pm7-button--primary">
        Confirm
      </button>
    </div>
  </div>
</div>

<!-- Trigger button -->
<button class="pm7-button pm7-button--primary" onclick="openDialog('my-dialog')">
  Open Dialog
</button>
```

### JavaScript API

```javascript
import { PM7Dialog } from '@pm7/core';

// Initialize a dialog
const dialogElement = document.querySelector('[data-pm7-dialog="my-dialog"]');
const dialog = new PM7Dialog(dialogElement);

// Open/close programmatically
dialog.open();
dialog.close();

// Listen for events
dialogElement.addEventListener('pm7-dialog-open', () => {
  console.log('Dialog opened');
});

dialogElement.addEventListener('pm7-dialog-close', () => {
  console.log('Dialog closed');
});

// Global functions (auto-loaded)
openDialog('my-dialog');
closeDialog('my-dialog');
```

### Dialog Sizes

```html
<!-- Small dialog -->
<div class="pm7-dialog-content pm7-dialog-content--sm">
  <!-- max-width: 400px -->
</div>

<!-- Medium dialog (default) -->
<div class="pm7-dialog-content pm7-dialog-content--md">
  <!-- max-width: 600px -->
</div>

<!-- Large dialog -->
<div class="pm7-dialog-content pm7-dialog-content--lg">
  <!-- max-width: 800px -->
</div>

<!-- Full screen dialog -->
<div class="pm7-dialog-content pm7-dialog-content--full">
  <!-- Full viewport -->
</div>
```

### Alert Dialog

```html
<div class="pm7-dialog" data-pm7-dialog="alert-dialog">
  <div class="pm7-dialog-overlay"></div>
  <div class="pm7-dialog-content pm7-dialog-content--sm">
    <div class="pm7-dialog-header">
      <h2 class="pm7-dialog-title">⚠️ Warning</h2>
    </div>
    <div class="pm7-dialog-body">
      <p>This action cannot be undone. Are you sure you want to continue?</p>
    </div>
    <div class="pm7-dialog-footer">
      <button class="pm7-button pm7-button--outline" onclick="closeDialog('alert-dialog')">
        Cancel
      </button>
      <button class="pm7-button pm7-button--destructive">
        Delete
      </button>
    </div>
  </div>
</div>
```

### Form Dialog

```html
<div class="pm7-dialog" data-pm7-dialog="form-dialog">
  <div class="pm7-dialog-overlay"></div>
  <div class="pm7-dialog-content">
    <form>
      <div class="pm7-dialog-header">
        <h2 class="pm7-dialog-title">Edit Profile</h2>
        <button type="button" class="pm7-dialog-close" aria-label="Close">
          <svg>...</svg>
        </button>
      </div>
      <div class="pm7-dialog-body">
        <div class="pm7-form-group">
          <label class="pm7-label" for="name">Name</label>
          <input type="text" id="name" class="pm7-input" placeholder="Enter your name">
        </div>
        <div class="pm7-form-group">
          <label class="pm7-label" for="email">Email</label>
          <input type="email" id="email" class="pm7-input" placeholder="Enter your email">
        </div>
      </div>
      <div class="pm7-dialog-footer">
        <button type="button" class="pm7-button pm7-button--ghost" onclick="closeDialog('form-dialog')">
          Cancel
        </button>
        <button type="submit" class="pm7-button pm7-button--primary">
          Save Changes
        </button>
      </div>
    </form>
  </div>
</div>
```

### Scrollable Content

```html
<div class="pm7-dialog" data-pm7-dialog="scrollable-dialog">
  <div class="pm7-dialog-overlay"></div>
  <div class="pm7-dialog-content">
    <div class="pm7-dialog-header">
      <h2 class="pm7-dialog-title">Terms of Service</h2>
      <button class="pm7-dialog-close" aria-label="Close">
        <svg>...</svg>
      </button>
    </div>
    <div class="pm7-dialog-body pm7-dialog-body--scrollable">
      <!-- Long content that scrolls -->
      <p>Lorem ipsum dolor sit amet...</p>
      <!-- More content... -->
    </div>
    <div class="pm7-dialog-footer">
      <button class="pm7-button pm7-button--outline" onclick="closeDialog('scrollable-dialog')">
        Decline
      </button>
      <button class="pm7-button pm7-button--primary">
        Accept
      </button>
    </div>
  </div>
</div>
```

## CSS Classes Reference

| Class | Description |
|-------|-------------|
| `pm7-dialog` | Dialog container (hidden by default) |
| `pm7-dialog-overlay` | Semi-transparent backdrop |
| `pm7-dialog-content` | Dialog content container |
| `pm7-dialog-content--sm` | Small dialog (max-width: 400px) |
| `pm7-dialog-content--md` | Medium dialog (max-width: 600px) |
| `pm7-dialog-content--lg` | Large dialog (max-width: 800px) |
| `pm7-dialog-content--full` | Full screen dialog |
| `pm7-dialog-header` | Dialog header section |
| `pm7-dialog-title` | Dialog title |
| `pm7-dialog-close` | Close button |
| `pm7-dialog-body` | Dialog body content |
| `pm7-dialog-body--scrollable` | Scrollable body content |
| `pm7-dialog-footer` | Dialog footer with actions |

## Accessibility Features

- Focus trap: Focus stays within dialog while open
- Escape key closes the dialog
- Click outside (overlay) closes the dialog
- Focus returns to trigger element on close
- ARIA attributes for screen readers
- Proper heading hierarchy
- Close button has accessible label

## Best Practices

1. **Use sparingly**: Dialogs interrupt user flow, use only when necessary
2. **Clear titles**: Use descriptive titles that explain the dialog's purpose
3. **Focused content**: Keep dialog content concise and relevant
4. **Clear actions**: Use descriptive button labels (not just "OK"/"Cancel")
5. **Escape hatch**: Always provide a way to close/cancel
6. **Size appropriately**: Choose the right size for your content

## Advanced Examples

### Confirmation Dialog with Icon

```html
<div class="pm7-dialog" data-pm7-dialog="delete-confirm">
  <div class="pm7-dialog-overlay"></div>
  <div class="pm7-dialog-content pm7-dialog-content--sm">
    <div class="pm7-dialog-body" style="text-align: center; padding: 32px;">
      <div style="color: var(--pm7-destructive); margin-bottom: 16px;">
        <svg width="48" height="48">...</svg>
      </div>
      <h2 style="margin-bottom: 8px;">Delete Item?</h2>
      <p style="color: var(--pm7-muted-foreground);">This action cannot be undone.</p>
    </div>
    <div class="pm7-dialog-footer">
      <button class="pm7-button pm7-button--outline pm7-button--full" onclick="closeDialog('delete-confirm')">
        Cancel
      </button>
      <button class="pm7-button pm7-button--destructive pm7-button--full">
        Delete
      </button>
    </div>
  </div>
</div>
```

### Multi-Step Dialog

```html
<div class="pm7-dialog" data-pm7-dialog="wizard-dialog">
  <div class="pm7-dialog-overlay"></div>
  <div class="pm7-dialog-content pm7-dialog-content--lg">
    <div class="pm7-dialog-header">
      <h2 class="pm7-dialog-title">Setup Wizard - Step 1 of 3</h2>
    </div>
    <div class="pm7-dialog-body">
      <!-- Step content -->
    </div>
    <div class="pm7-dialog-footer">
      <button class="pm7-button pm7-button--ghost" onclick="closeDialog('wizard-dialog')">
        Cancel
      </button>
      <div style="margin-left: auto;">
        <button class="pm7-button pm7-button--outline" disabled>
          Previous
        </button>
        <button class="pm7-button pm7-button--primary">
          Next
        </button>
      </div>
    </div>
  </div>
</div>
```

## React Usage

When using @pm7/react:

```jsx
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogBody, DialogFooter } from '@pm7/react';

function MyComponent() {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>
        <Button>Open Dialog</Button>
      </DialogTrigger>
      <DialogContent size="md">
        <DialogHeader>
          <DialogTitle>Edit Profile</DialogTitle>
        </DialogHeader>
        <DialogBody>
          <p>Dialog content goes here</p>
        </DialogBody>
        <DialogFooter>
          <Button variant="outline" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button variant="primary">
            Save Changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
```

## Related Components

- [Button](../button/) - Common trigger for dialogs
- [Menu](../menu/) - For non-modal overlays
- [Toast](../toast/) - For non-blocking notifications