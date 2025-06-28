# Dialog

Dialogs are modal overlays that require user interaction. They're used for critical information, confirmation, or complex tasks that require focus.

## Installation

```bash
npm install @pm7/core
```

## Usage

PM7 Dialog supports two approaches: Traditional HTML structure and the new Content Marker system that automatically generates dialog structure.

### Content Marker System (Recommended)

The easiest way to create dialogs using semantic content markers:

```html
<!-- Dialog with content markers -->
<div pm7-dialog="my-dialog" pm7-dialog-size="md" pm7-show-close>
  <h2 pm7-header>Dialog Title</h2>
  <p pm7-subtitle>Optional subtitle text</p>
  
  <div pm7-body>
    <p>Your dialog content goes here.</p>
  </div>
  
  <div pm7-footer>
    <button class="pm7-button pm7-button--outline" onclick="closeDialog('my-dialog')">
      Cancel
    </button>
    <button class="pm7-button pm7-button--primary">
      Confirm
    </button>
  </div>
</div>

<!-- Trigger button -->
<button class="pm7-button pm7-button--primary" onclick="openDialog('my-dialog')">
  Open Dialog
</button>
```

### Content Marker Attributes

The content marker system uses attributes on the root `div` with `pm7-dialog` and on direct children to define the dialog's structure and content.

| Attribute | Description | Generated Class/Element |
|-----------|-------------|-------------------------|
| `pm7-dialog="id"` | Unique dialog identifier | `pm7-dialog` (root) |
| `pm7-dialog-size="size"` | Dialog size: `sm` (400px), `md` (600px, default), `lg` (800px), `xl` (1000px), `full` | `pm7-dialog-content--{size}` |
| `pm7-dialog-icon="type"` | Icon type: `info`, `warning`, `error`, `success` | `pm7-dialog-icon` (SVG) |
| `pm7-show-close` | Shows the X close button in header | `pm7-dialog-close` (button) |
| `pm7-header-separator` | Add line separator under header | `pm7-dialog-header-separator` (div) |
| `pm7-no-escape` | Prevents closing dialog with ESC key (ESC close is enabled by default) | - |
| `pm7-no-overlay-close` | Prevents closing dialog when clicking backdrop (overlay close is enabled by default) | - |
| `pm7-header` | Marks the header section. Content within this element becomes the header. | `pm7-dialog-header` |
| `pm7-dialog-title="text"` | Text for the main dialog title (used with `pm7-header`) | `pm7-dialog-title` (h2) |
| `pm7-dialog-subtitle="text"` | Text for the dialog subtitle/description (used with `pm7-header`) | `pm7-dialog-description` (p) |
| `pm7-body` | Marks the main content area | `pm7-dialog-body` |
| `pm7-footer` | Marks the footer section for actions | `pm7-dialog-footer` |

### Traditional HTML Structure

For full control over dialog structure:

```html
<div class="pm7-dialog" data-pm7-dialog="my-dialog">
  <div class="pm7-dialog-overlay"></div>
  <div class="pm7-dialog-content pm7-dialog-content--md">
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
```

### Dialog Sizes

```html
<!-- Small dialog (400px) -->
<div pm7-dialog="small-dialog" pm7-dialog-size="sm">
  <!-- Content -->
</div>

<!-- Medium dialog (600px, default) -->
<div pm7-dialog="medium-dialog" pm7-dialog-size="md">
  <!-- Content -->
</div>

<!-- Large dialog (800px) -->
<div pm7-dialog="large-dialog" pm7-dialog-size="lg">
  <!-- Content -->
</div>

<!-- Extra large dialog (1000px) -->
<div pm7-dialog="xl-dialog" pm7-dialog-size="xl">
  <!-- Content -->
</div>

<!-- Full screen dialog -->
<div pm7-dialog="full-dialog" pm7-dialog-size="full">
  <!-- Content -->
</div>
```

### Dialog Variants

#### Alert Dialog
```html
<div class="pm7-dialog pm7-dialog--alert" data-pm7-dialog="alert-dialog">
  <div class="pm7-dialog-overlay"></div>
  <div class="pm7-dialog-content pm7-dialog-content--sm">
    <div class="pm7-dialog-header">
      <h2 class="pm7-dialog-title">Error</h2>
    </div>
    <div class="pm7-dialog-body">
      <p>Something went wrong. Please try again.</p>
    </div>
    <div class="pm7-dialog-footer">
      <button class="pm7-button pm7-button--destructive" onclick="closeDialog('alert-dialog')">
        OK
      </button>
    </div>
  </div>
</div>
```

#### Success Dialog
```html
<div class="pm7-dialog pm7-dialog--success" data-pm7-dialog="success-dialog">
  <!-- Similar structure with success styling -->
</div>
```

#### Loading Dialog
```html
<div class="pm7-dialog pm7-dialog--loading" data-pm7-dialog="loading-dialog">
  <div class="pm7-dialog-overlay"></div>
  <div class="pm7-dialog-content pm7-dialog-content--sm">
    <div class="pm7-dialog-body" style="text-align: center; padding: 48px;">
      <div class="pm7-dialog-spinner"></div>
      <p style="margin-top: 16px;">Processing...</p>
    </div>
  </div>
</div>
```

### Dialog with Icons

Using the content marker system with icons:

```html
<!-- Info dialog -->
<div pm7-dialog="info-dialog" pm7-dialog-size="sm" pm7-dialog-icon="info">
  <h2 pm7-header>Information</h2>
  <div pm7-body>
    <p>This is an informational message.</p>
  </div>
  <div pm7-footer>
    <button class="pm7-button pm7-button--primary" onclick="closeDialog('info-dialog')">
      Got it
    </button>
  </div>
</div>

<!-- Warning dialog -->
<div pm7-dialog="warning-dialog" pm7-dialog-icon="warning">
  <h2 pm7-header>Warning</h2>
  <div pm7-body>
    <p>This action may have consequences.</p>
  </div>
</div>

<!-- Error dialog -->
<div pm7-dialog="error-dialog" pm7-dialog-icon="error">
  <h2 pm7-header>Error</h2>
  <div pm7-body>
    <p>An error occurred.</p>
  </div>
</div>

<!-- Success dialog -->
<div pm7-dialog="success-dialog" pm7-dialog-icon="success">
  <h2 pm7-header>Success!</h2>
  <div pm7-body>
    <p>Operation completed successfully.</p>
  </div>
</div>
```

### JavaScript API

```javascript
import { PM7Dialog } from '@pm7/core';

// Initialize a dialog (for traditional structure)
const dialogElement = document.querySelector('[data-pm7-dialog="my-dialog"]');
const dialog = new PM7Dialog(dialogElement);

// Open/close programmatically
dialog.open();
dialog.close();

// Add shake animation
dialog.shake();

// Set loading state
dialog.setLoading(true);

// Listen for events
dialogElement.addEventListener('pm7-dialog-open', () => {
  console.log('Dialog opened');
});

dialogElement.addEventListener('pm7-dialog-close', () => {
  console.log('Dialog closed');
});

// Global functions (auto-loaded for convenience, but can be imported)
openDialog('my-dialog');
closeDialog('my-dialog');
pm7Alert('This is an alert message');
pm7Confirm('Are you sure?', (confirmed) => {
  if (confirmed) {
    console.log('User confirmed');
  }
});

// Programmatic dialog creation
const dialog = createDialog({
  id: 'dynamic-dialog',
  title: 'Dynamic Dialog',
  subtitle: 'Created programmatically',
  body: '<p>This dialog was created with JavaScript.</p>',
  footer: `
    <button class="pm7-button pm7-button--primary" onclick="closeDialog('dynamic-dialog')">
      Close
    </button>
  `,
  size: 'md',
  showClose: true,
  icon: 'info'
});

// Utility functions
pm7Alert('This is an alert message');
pm7Confirm('Are you sure?', (confirmed) => {
  if (confirmed) {
    console.log('User confirmed');
  }
});
```

## CSS Classes Reference

| Class | Description |
|-------|-------------|
| `pm7-dialog` | Root dialog container (hidden by default, controlled by `data-state` attribute) |
| `pm7-dialog--alert` | Alert variant (red header) |
| `pm7-dialog--success` | Success variant (green header) |
| `pm7-dialog--loading` | Loading variant with spinner |
| `pm7-dialog--shake` | Shake animation |
| `pm7-dialog-overlay` | Semi-transparent backdrop that covers the page when dialog is open |
| `pm7-dialog-content` | Container for the dialog box itself (header, body, footer) |
| `pm7-dialog-content--sm` | Small dialog (max-width: 400px) |
| `pm7-dialog-content--md` | Medium dialog (max-width: 600px, default) |
| `pm7-dialog-content--lg` | Large dialog (max-width: 800px) |
| `pm7-dialog-content--xl` | Extra large dialog (max-width: 1000px) |
| `pm7-dialog-content--full` | Full screen dialog |
| `pm7-dialog-header` | Dialog header section (generated by `pm7-header` attribute) |
| `pm7-dialog-header-text` | Container for dialog title and description within the header |
| `pm7-dialog-header-actions` | Container for icon and close button within the header |
| `pm7-dialog-header-separator` | Horizontal line separator below the header |
| `pm7-dialog-title` | Main title of the dialog (generated by `pm7-dialog-title` attribute) |
| `pm7-dialog-description` | Subtitle or description of the dialog (generated by `pm7-dialog-subtitle` attribute) |
| `pm7-dialog-icon` | Container for the dialog icon (generated by `pm7-dialog-icon` attribute) |
| `pm7-dialog-close` | Close button (generated by `pm7-show-close` attribute) |
| `pm7-dialog-body` | Main content area of the dialog (generated by `pm7-body` attribute) |
| `pm7-dialog-footer` | Footer section for actions (generated by `pm7-footer` attribute) |
| `pm7-dialog-spinner` | Loading spinner element |

## Accessibility Features

- **Focus trap**: Focus stays within dialog while open
- **Escape key**: Closes the dialog (unless `pm7-no-escape` is set)
- **Click outside**: Closes dialog by clicking overlay (unless `pm7-no-overlay-close` is set)
- **Focus restoration**: Focus returns to trigger element on close
- **ARIA attributes**: Proper roles and labels for screen readers
- **Heading hierarchy**: Semantic heading structure
- **Keyboard navigation**: Tab through interactive elements

## Best Practices

1. **Use sparingly**: Dialogs interrupt user flow, use only when necessary
2. **Clear titles**: Use descriptive titles that explain the dialog's purpose
3. **Focused content**: Keep dialog content concise and relevant
4. **Clear actions**: Use descriptive button labels (not just "OK"/"Cancel")
5. **Escape hatch**: Always provide a way to close/cancel
6. **Size appropriately**: Choose the right size for your content
7. **Icons for context**: Use icons to reinforce the message type

## Advanced Examples

### Form Dialog with Validation

```html
<div pm7-dialog="form-dialog" pm7-dialog-size="md" pm7-show-close>
  <h2 pm7-header>Edit Profile</h2>
  
  <form pm7-body>
    <div class="pm7-form-group">
      <label class="pm7-label" for="name">Name</label>
      <input type="text" id="name" class="pm7-input" required>
    </div>
    <div class="pm7-form-group">
      <label class="pm7-label" for="email">Email</label>
      <input type="email" id="email" class="pm7-input" required>
    </div>
  </form>
  
  <div pm7-footer>
    <button type="button" class="pm7-button pm7-button--ghost" onclick="closeDialog('form-dialog')">
      Cancel
    </button>
    <button type="submit" class="pm7-button pm7-button--primary">
      Save Changes
    </button>
  </div>
</div>
```

### Multi-Step Dialog

```html
<div pm7-dialog="wizard" pm7-dialog-size="lg" pm7-no-escape>
  <h2 pm7-header>Setup Wizard</h2>
  <p pm7-subtitle>Step <span id="current-step">1</span> of 3</p>
  
  <div pm7-body>
    <div id="step-1" class="wizard-step">
      <!-- Step 1 content -->
    </div>
    <div id="step-2" class="wizard-step" style="display: none;">
      <!-- Step 2 content -->
    </div>
    <div id="step-3" class="wizard-step" style="display: none;">
      <!-- Step 3 content -->
    </div>
  </div>
  
  <div pm7-footer>
    <button class="pm7-button pm7-button--ghost" onclick="closeDialog('wizard')">
      Cancel
    </button>
    <div style="margin-left: auto;">
      <button id="prev-btn" class="pm7-button pm7-button--outline" onclick="prevStep()" disabled>
        Previous
      </button>
      <button id="next-btn" class="pm7-button pm7-button--primary" onclick="nextStep()">
        Next
      </button>
    </div>
  </div>
</div>
```

### Dark Mode Support

Dialogs automatically adapt to dark mode using CSS custom properties. Override for specific themes:

```css
:root {
  --pm7-dialog-bg: white;
  --pm7-dialog-overlay-bg: rgb(0 0 0 / 0.5);
}

[data-theme="dark"] {
  --pm7-dialog-bg: #1a1a1a;
  --pm7-dialog-overlay-bg: rgb(0 0 0 / 0.8);
}
```

## React Usage

The React Dialog component currently uses the traditional structure. Full content marker support is coming soon.

```jsx
import { Dialog } from '@pm7/react';

function MyComponent() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Dialog</Button>
      
      <Dialog
        open={open}
        onOpenChange={setOpen}
        size="md"
        title="Dialog Title"
        showClose
      >
        <div className="pm7-dialog-body">
          <p>Dialog content goes here</p>
        </div>
        <div className="pm7-dialog-footer">
          <Button variant="outline" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button variant="primary">
            Save Changes
          </Button>
        </div>
      </Dialog>
    </>
  );
}
```

## Related Components

- [Button](../button/) - Common trigger for dialogs
- [Menu](../menu/) - For non-modal overlays
- [Toast](../toast/) - For non-blocking notifications