# Dialog

Dialogs are modal overlays that require user interaction. They're used for critical information, confirmation, or complex tasks that require focus.

## Installation

```bash
npm install @pm7/core
```

### CSS Import (Required!)

```javascript
// For React projects
import '@pm7/core/dist/pm7.css';

// For vanilla HTML
<link rel="stylesheet" href="node_modules/@pm7/core/dist/pm7.css">
```

⚠️ **Important**: The CSS file is located at `@pm7/core/dist/pm7.css`, NOT `@pm7/core/dist/index.css`.

### React Usage

If you're using the React components:

```bash
npm install @pm7/react @pm7/core
```

```javascript
import { Dialog, DialogHeader, DialogTitle, DialogContent, DialogFooter } from '@pm7/react';
import '@pm7/core/dist/pm7.css'; // Don't forget this!
```

## Usage

PM7 Dialog uses a Content Marker system that automatically generates the dialog structure from simple semantic markers:

```html
<!-- Dialog with content markers -->
<div data-pm7-dialog="my-dialog" data-pm7-dialog-size="md" data-pm7-show-close>
  <h2 data-pm7-header>Dialog Title</h2>
  <p data-pm7-subtitle>Optional subtitle text</p>
  
  <div data-pm7-body>
    <p>Your dialog content goes here.</p>
  </div>
  
  <div data-pm7-footer>
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

### Dialog Attributes

Use these attributes on the root `div` with `data-pm7-dialog` and on direct children to define the dialog's structure and content.

| Attribute | Description | Generated Class/Element |
|-----------|-------------|-------------------------|
| `data-pm7-dialog="id"` | Unique dialog identifier | `pm7-dialog` (root) |
| `data-pm7-dialog-size="size"` | Dialog size: `sm` (400px), `md` (600px, default), `lg` (800px), `xl` (1000px), `full` | `pm7-dialog-content--{size}` |
| `data-pm7-dialog-icon="type"` | Icon type: `info`, `warning`, `error`, `success` | `pm7-dialog-icon` (SVG) |
| `data-pm7-show-close` | Shows the X close button in header | `pm7-dialog-close` (button) |
| `data-pm7-header-separator` | Add line separator under header | `pm7-dialog-header-separator` (div) |
| `data-pm7-no-escape` | Prevents closing dialog with ESC key (ESC close is enabled by default) | - |
| `data-pm7-no-overlay-close` | Prevents closing dialog when clicking backdrop (overlay close is enabled by default) | - |
| `data-pm7-header` | Marks the header section. Content within this element becomes the header. | `pm7-dialog-header` |
| `data-pm7-dialog-title="text"` | Text for the main dialog title (used with `data-pm7-header`) | `pm7-dialog-title` (h2) |
| `data-pm7-dialog-subtitle="text"` | Text for the dialog subtitle/description (used with `data-pm7-header`) | `pm7-dialog-description` (p) |
| `data-pm7-body` | Marks the main content area | `pm7-dialog-body` |
| `data-pm7-footer` | Marks the footer section for actions | `pm7-dialog-footer` |

### Dialog Sizes

```html
<!-- Small dialog (400px) -->
<div data-pm7-dialog="small-dialog" data-pm7-dialog-size="sm">
  <!-- Content -->
</div>

<!-- Medium dialog (600px, default) -->
<div data-pm7-dialog="medium-dialog" data-pm7-dialog-size="md">
  <!-- Content -->
</div>

<!-- Large dialog (800px) -->
<div data-pm7-dialog="large-dialog" data-pm7-dialog-size="lg">
  <!-- Content -->
</div>

<!-- Extra large dialog (1000px) -->
<div data-pm7-dialog="xl-dialog" data-pm7-dialog-size="xl">
  <!-- Content -->
</div>

<!-- Full screen dialog -->
<div data-pm7-dialog="full-dialog" data-pm7-dialog-size="full">
  <!-- Content -->
</div>
```

### Dialog Variants

#### Alert Dialog
```html
<div data-pm7-dialog="alert-dialog" data-pm7-dialog-size="sm">
  <div data-pm7-header data-pm7-dialog-title="Error" data-pm7-dialog-icon="error"></div>
  <div data-pm7-body>
    <p>Something went wrong. Please try again.</p>
  </div>
  <div data-pm7-footer>
    <button class="pm7-button pm7-button--destructive" onclick="closeDialog('alert-dialog')">
      OK
    </button>
  </div>
</div>
```

#### Success Dialog
```html
<div data-pm7-dialog="success-dialog" data-pm7-dialog-size="sm">
  <div data-pm7-header data-pm7-dialog-title="Success!" data-pm7-dialog-icon="success"></div>
  <div data-pm7-body>
    <p>Operation completed successfully.</p>
  </div>
  <div data-pm7-footer>
    <button class="pm7-button pm7-button--primary" onclick="closeDialog('success-dialog')">
      Done
    </button>
  </div>
</div>
```

#### Loading Dialog
```html
<div data-pm7-dialog="loading-dialog" data-pm7-dialog-size="sm">
  <div data-pm7-body style="text-align: center; padding: 48px;">
    <div class="pm7-dialog-spinner"></div>
    <p style="margin-top: 16px;">Processing...</p>
  </div>
</div>
```

### Dialog with Icons

Using the content marker system with icons:

```html
<!-- Info dialog -->
<div data-pm7-dialog="info-dialog" data-pm7-dialog-size="sm" data-pm7-dialog-icon="info">
  <h2 data-pm7-header>Information</h2>
  <div data-pm7-body>
    <p>This is an informational message.</p>
  </div>
  <div data-pm7-footer>
    <button class="pm7-button pm7-button--primary" onclick="closeDialog('info-dialog')">
      Got it
    </button>
  </div>
</div>

<!-- Warning dialog -->
<div data-pm7-dialog="warning-dialog" data-pm7-dialog-icon="warning">
  <h2 data-pm7-header>Warning</h2>
  <div data-pm7-body>
    <p>This action may have consequences.</p>
  </div>
</div>

<!-- Error dialog -->
<div data-pm7-dialog="error-dialog" data-pm7-dialog-icon="error">
  <h2 data-pm7-header>Error</h2>
  <div data-pm7-body>
    <p>An error occurred.</p>
  </div>
</div>

<!-- Success dialog -->
<div data-pm7-dialog="success-dialog" data-pm7-dialog-icon="success">
  <h2 data-pm7-header>Success!</h2>
  <div data-pm7-body>
    <p>Operation completed successfully.</p>
  </div>
</div>
```

### JavaScript API

#### Auto-initialization

Dialogs do NOT auto-initialize. You need to either:
1. Use the global helper functions (`openDialog`, `closeDialog`)
2. Manually initialize with `PM7Dialog` class
3. Use the utility functions (`pm7Alert`, `pm7Confirm`)

```javascript
import { PM7Dialog, createDialog, openDialog, closeDialog, pm7Alert, pm7Confirm } from '@pm7/core';
```

#### Class Constructor

```javascript
// Initialize a dialog (for traditional structure)
const dialogElement = document.querySelector('[data-pm7-dialog="my-dialog"]');
const dialog = new PM7Dialog(dialogElement);
```

#### Instance Methods

| Method | Description |
|--------|-------------|
| `open()` | Opens the dialog |
| `close()` | Closes the dialog |
| `shake()` | Adds shake animation (e.g., for validation errors) |
| `setLoading(loading)` | Sets loading state with spinner |

```javascript
// Open/close programmatically
dialog.open();
dialog.close();

// Add shake animation
dialog.shake();

// Set loading state
dialog.setLoading(true);
```

#### Events

| Event | Description | Detail |
|-------|-------------|---------|
| `pm7-dialog-open` | Fired when dialog opens | None |
| `pm7-dialog-close` | Fired when dialog closes | None |

```javascript
dialogElement.addEventListener('pm7-dialog-open', () => {
  console.log('Dialog opened');
});

dialogElement.addEventListener('pm7-dialog-close', () => {
  console.log('Dialog closed');
});
```

#### Global Helper Functions

These functions are available globally after importing PM7Dialog:

```javascript
// Open a dialog by ID
openDialog('my-dialog');

// Close a dialog by ID
closeDialog('my-dialog');

// Close all open dialogs
closeAllDialogs();
```

#### Programmatic Dialog Creation

Create dialogs dynamically with JavaScript:

```javascript
const dialog = createDialog({
  id: 'dynamic-dialog',           // Required: unique ID
  title: 'Dynamic Dialog',        // Dialog title
  subtitle: 'Optional subtitle',  // Optional subtitle
  body: '<p>HTML content</p>',    // Body HTML
  footer: '<button>...</button>', // Footer HTML
  size: 'md',                     // Size: sm, md, lg, xl, full
  variant: 'default',             // Variant: default, alert, success
  showClose: true,                // Show close button
  icon: 'info',                   // Icon: info, warning, error, success
  noEscape: false,                // Disable ESC key closing
  noOverlayClose: false,          // Disable overlay click closing
  buttons: [                      // Optional: button shortcuts
    {
      text: 'Cancel',
      variant: 'outline',
      onClick: () => closeDialog('dynamic-dialog')
    },
    {
      text: 'Confirm',
      variant: 'primary',
      onClick: () => console.log('Confirmed!')
    }
  ]
});

// Open the created dialog
openDialog('dynamic-dialog');
```

#### Utility Functions

Quick alert and confirm dialogs:

```javascript
// Simple alert
pm7Alert('This is an alert message');

// Alert with title
pm7Alert('Operation failed', 'Error');

// Confirm dialog with callback
pm7Confirm('Are you sure?', (confirmed) => {
  if (confirmed) {
    console.log('User confirmed');
  }
});

// Confirm with custom title
pm7Confirm('Delete this item?', (confirmed) => {
  // Handle response
}, 'Confirm Deletion');
```

#### Accessibility Features

The dialog component includes:
- **Focus trap**: Keeps focus within dialog while open
- **Focus restoration**: Returns focus to trigger element on close
- **ESC key**: Closes dialog (unless disabled)
- **Overlay click**: Closes dialog (unless disabled)
- **ARIA attributes**: Proper roles and labels

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
<div data-pm7-dialog="form-dialog" data-pm7-dialog-size="md" data-pm7-show-close>
  <h2 data-pm7-header>Edit Profile</h2>
  
  <form data-pm7-body>
    <div class="pm7-form-group">
      <label class="pm7-label" for="name">Name</label>
      <input type="text" id="name" class="pm7-input" required>
    </div>
    <div class="pm7-form-group">
      <label class="pm7-label" for="email">Email</label>
      <input type="email" id="email" class="pm7-input" required>
    </div>
  </form>
  
  <div data-pm7-footer>
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
<div data-pm7-dialog="wizard" data-pm7-dialog-size="lg" data-pm7-no-escape>
  <h2 data-pm7-header>Setup Wizard</h2>
  <p data-pm7-subtitle>Step <span id="current-step">1</span> of 3</p>
  
  <div data-pm7-body>
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
  
  <div data-pm7-footer>
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

### Basic Example (Custom Layout)

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
        variant="default"
      >
        <div style={{ padding: '1.5rem', minWidth: '400px' }}>
          <h2 style={{ marginTop: 0 }}>Dialog Title</h2>
          <p style={{ marginBottom: '1.5rem' }}>Dialog content goes here</p>
          
          <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'flex-end' }}>
            <Button variant="outline" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button variant="primary" onClick={() => {
              // Handle save
              setOpen(false);
            }}>
              Save Changes
            </Button>
          </div>
        </div>
      </Dialog>
    </>
  );
}
```

### Recommended: Using PM7 Dialog Structure

For consistent styling with PM7 design system, use the proper dialog structure classes:

```jsx
import { Dialog, Button } from '@pm7/react';

function MyComponent() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Dialog</Button>
      
      <Dialog
        open={open}
        onOpenChange={setOpen}
        size="md"
      >
        <div className="pm7-dialog-header">
          <div className="pm7-dialog-header-text">
            <h2 className="pm7-dialog-title">Dialog Title</h2>
            <p className="pm7-dialog-description">Optional subtitle or description</p>
          </div>
        </div>
        <div className="pm7-dialog-header-separator"></div>
        
        <div className="pm7-dialog-body">
          <p>Your dialog content goes here.</p>
          {/* Form fields, content, etc. */}
        </div>
        
        <div className="pm7-dialog-footer">
          <Button variant="outline" onClick={() => setOpen(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={() => {
            // Handle save
            setOpen(false);
          }}>
            Save Changes
          </Button>
        </div>
      </Dialog>
    </>
  );
}
```

### Dialog with Icon

Icons should be placed in the header actions area (right side):

```jsx
<Dialog open={open} onOpenChange={setOpen}>
  <div className="pm7-dialog-header">
    <div className="pm7-dialog-header-text">
      <h2 className="pm7-dialog-title">Secure Action</h2>
      <p className="pm7-dialog-description">This action requires authentication</p>
    </div>
    <div className="pm7-dialog-header-actions">
      <div className="pm7-dialog-icon">
        <Lock size={24} style={{ color: '#1C86EF' }} />
      </div>
    </div>
  </div>
  <div className="pm7-dialog-header-separator"></div>
  
  <div className="pm7-dialog-body">
    {/* Content */}
  </div>
  
  <div className="pm7-dialog-footer">
    {/* Actions */}
  </div>
</Dialog>
```

### Dialog Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `open` | `boolean` | `false` | Controls whether the dialog is open |
| `onOpenChange` | `(open: boolean) => void` | - | Callback when the dialog open state changes |
| `children` | `React.ReactNode` | - | The content of the dialog |
| `className` | `string` | - | Additional CSS classes |
| `size` | `'sm' \| 'md' \| 'lg' \| 'xl' \| 'full'` | `'md'` | Dialog size |
| `variant` | `'default' \| 'alert' \| 'success'` | `'default'` | Dialog variant |

### Important Notes

- The Dialog component wraps its children in the necessary dialog structure
- Use `onOpenChange` instead of `onClose` - it handles both opening and closing
- The component automatically handles backdrop clicks and ESC key presses
- Focus management is handled automatically

### Key Structure Classes for React

When using the Dialog component in React, these classes provide proper PM7 styling:

| Class | Purpose |
|-------|---------|
| `pm7-dialog-header` | Container for header content (uses flexbox) |
| `pm7-dialog-header-text` | **Important**: Left side wrapper for title and description |
| `pm7-dialog-header-actions` | Right side container for icon and/or close button |
| `pm7-dialog-icon` | Wrapper for dialog icon |
| `pm7-dialog-title` | The main dialog title |
| `pm7-dialog-description` | Subtitle or additional context |
| `pm7-dialog-header-separator` | Visual separator line between header and body |
| `pm7-dialog-body` | Main content area |
| `pm7-dialog-footer` | Action buttons container |

**Note**: Without `pm7-dialog-header-text`, the title and description will appear side-by-side due to flexbox layout.

## Common Pitfalls

### ❌ Don't forget to use Content Markers
```html
<!-- Wrong - no content markers -->
<div data-pm7-dialog="my-dialog">
  <h2>Title</h2>
  <p>Content</p>
</div>

<!-- Correct - use content markers -->
<div data-pm7-dialog="my-dialog">
  <div data-pm7-header data-pm7-dialog-title="Title"></div>
  <div data-pm7-body>
    <p>Content</p>
  </div>
</div>
```

### ❌ Don't forget to handle dialog state properly
```javascript
// Wrong - only opening, no way to close
openDialog('my-dialog');

// Correct - provide close functionality
openDialog('my-dialog');
// In dialog: onclick="closeDialog('my-dialog')"
// Or: ESC key and backdrop click work by default
```

### ❌ Don't use conflicting size attributes
```html
<!-- Wrong - multiple size definitions -->
<div data-pm7-dialog="my-dialog" data-pm7-dialog-size="md" class="pm7-dialog-content--lg">

<!-- Correct - use one size method -->
<div data-pm7-dialog="my-dialog" data-pm7-dialog-size="lg">
```

### ❌ Don't nest dialogs
```html
<!-- Wrong - dialog inside dialog -->
<div data-pm7-dialog="outer">
  <div data-pm7-body>
    <div data-pm7-dialog="inner">...</div>
  </div>
</div>

<!-- Correct - close first dialog before opening second -->
<button onclick="closeDialog('first'); openDialog('second')">
  Next Step
</button>
```

### ❌ React: Don't forget header-text wrapper
```jsx
// Wrong - title and description will be side-by-side
<div className="pm7-dialog-header">
  <h2 className="pm7-dialog-title">Title</h2>
  <p className="pm7-dialog-description">Description</p>
</div>

// Correct - wrap in header-text
<div className="pm7-dialog-header">
  <div className="pm7-dialog-header-text">
    <h2 className="pm7-dialog-title">Title</h2>
    <p className="pm7-dialog-description">Description</p>
  </div>
</div>
```

## Related Components

- [Button](../button/) - Common trigger for dialogs
- [Menu](../menu/) - For non-modal overlays
- [Toast](../toast/) - For non-blocking notifications