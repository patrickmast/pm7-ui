# PM7 Dialog Component

The PM7 Dialog component provides a flexible and accessible modal dialog system with support for various layouts, sizes, and interaction patterns.

## Installation

```bash
npm install @pm7/core
```

## Basic Usage

```html
<!-- Dialog Structure -->
<div class="pm7-dialog" 
     data-pm7-dialog="my-dialog"
     data-pm7-show-close>
  <div data-pm7-header
       data-pm7-dialog-title="Dialog Title"
       data-pm7-dialog-subtitle="Optional subtitle text"
       data-pm7-header-separator>
  </div>
  <div data-pm7-body>
    <p>Dialog content goes here.</p>
  </div>
  <div data-pm7-footer>
    <button class="pm7-button pm7-button--primary" onclick="closeDialog('my-dialog')">
      Close
    </button>
  </div>
</div>

<!-- Trigger Button -->
<button class="pm7-button" onclick="openDialog('my-dialog')">
  Open Dialog
</button>
```

## CSS Classes

| Class | Description |
|-------|-------------|
| `pm7-dialog` | Base dialog container class |
| `pm7-dialog-overlay` | Backdrop overlay (auto-generated) |
| `pm7-dialog-content` | Content wrapper (auto-generated) |
| `pm7-dialog-content--sm` | Small dialog size (400px) |
| `pm7-dialog-content--md` | Medium dialog size (600px, default) |
| `pm7-dialog-content--lg` | Large dialog size (800px) |
| `pm7-dialog-content--full` | Full screen dialog |
| `pm7-dialog-spinner` | Loading spinner element |

## Data Attributes

### Container Attributes
| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `data-pm7-dialog` | string | required | Unique dialog identifier |
| `data-pm7-dialog-size` | string | "md" | Dialog size: "sm", "md", "lg", "full" |
| `data-pm7-show-close` | boolean | false | Show close button in header |
| `data-pm7-no-escape` | boolean | false | Prevent closing with Escape key |
| `data-pm7-no-overlay-close` | boolean | false | Prevent closing by clicking overlay |

### Content Markers
| Attribute | Type | Description |
|-----------|------|-------------|
| `data-pm7-header` | marker | Marks header section |
| `data-pm7-body` | marker | Marks body section |
| `data-pm7-footer` | marker | Marks footer section |

### Header Options
| Attribute | Type | Description |
|-----------|------|-------------|
| `data-pm7-dialog-title` | string | Dialog title text |
| `data-pm7-dialog-subtitle` | string | Optional subtitle text |
| `data-pm7-dialog-icon` | string | Icon type: "info", "success", "warning", "error" |
| `data-pm7-header-separator` | boolean | Show separator line below header |

## JavaScript API

### Import

```javascript
import { PM7Dialog, createDialog, pm7Alert, pm7Confirm } from '@pm7/core';
```

### Initialize Dialog

```javascript
// For existing HTML structure
const dialogElement = document.querySelector('[data-pm7-dialog="my-dialog"]');
const dialog = new PM7Dialog(dialogElement);

// Methods
dialog.open();        // Open the dialog
dialog.close();       // Close the dialog
dialog.shake();       // Shake animation (e.g., for errors)
dialog.setLoading(true/false); // Toggle loading state
```

### Global Functions

```javascript
// Open/close by ID
openDialog('my-dialog');
closeDialog('my-dialog');

// Alert dialog
pm7Alert('This is an alert message', {
  title: 'Alert',      // Optional
  icon: 'info',        // Optional: info, success, warning, error
  confirmText: 'OK'    // Optional, default: 'OK'
});

// Confirm dialog
pm7Confirm('Are you sure?', (confirmed) => {
  if (confirmed) {
    console.log('User confirmed');
  }
}, {
  title: 'Confirm',           // Optional
  icon: 'warning',            // Optional
  confirmText: 'Yes',         // Optional, default: 'Confirm'
  cancelText: 'No'            // Optional, default: 'Cancel'
});
```

### Programmatic Creation

```javascript
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
  icon: 'info',
  noEscape: false,
  noOverlayClose: false
});

// Dialog is automatically added to DOM and can be opened
openDialog('dynamic-dialog');
```

### Events

```javascript
dialogElement.addEventListener('pm7-dialog-open', () => {
  console.log('Dialog opened');
});

dialogElement.addEventListener('pm7-dialog-close', () => {
  console.log('Dialog closed');
});
```

## Dialog Sizes

- **Small (sm)**: 400px wide - Perfect for confirmations and simple messages
- **Medium (md)**: 600px wide - Default size for general purpose dialogs
- **Large (lg)**: 800px wide - Good for complex forms or detailed content
- **Full**: Full screen - Immersive experiences or complex workflows

## Content Sections

Dialogs can have any combination of header, body, and footer sections:

### Full Dialog
```html
<div class="pm7-dialog" data-pm7-dialog="full-dialog">
  <div data-pm7-header data-pm7-dialog-title="Title"></div>
  <div data-pm7-body>Content</div>
  <div data-pm7-footer>Actions</div>
</div>
```

### Header + Body
```html
<div class="pm7-dialog" data-pm7-dialog="header-body">
  <div data-pm7-header data-pm7-dialog-title="Title"></div>
  <div data-pm7-body>Content</div>
</div>
```

### Body Only
```html
<div class="pm7-dialog" data-pm7-dialog="body-only">
  <div data-pm7-body>Content</div>
</div>
```

### Custom Header Content
```html
<div data-pm7-header>
  <!-- Title is auto-generated if data-pm7-dialog-title is set -->
  <!-- Your custom content appears after the title -->
  <div class="custom-header-content">
    Custom header elements
  </div>
</div>
```

## Icons

Dialogs support built-in icons for common use cases:

```html
<div data-pm7-header
     data-pm7-dialog-title="Success!"
     data-pm7-dialog-icon="success">
</div>
```

Available icons:
- `info` - Information/help dialogs
- `success` - Success confirmations
- `warning` - Warning messages
- `error` - Error alerts

## Accessibility

- **Focus Management**: Focus is trapped within the dialog while open
- **Keyboard Navigation**: 
  - `Tab` - Navigate through interactive elements
  - `Escape` - Close dialog (unless `data-pm7-no-escape`)
- **Screen Readers**: Proper ARIA attributes and roles
- **Focus Restoration**: Focus returns to trigger element on close

## CSS Customization

```css
/* Custom theme */
:root {
  --pm7-dialog-bg: white;
  --pm7-dialog-overlay-bg: rgb(0 0 0 / 0.5);
  --pm7-dialog-max-height: 90vh;
}

/* Dark mode */
[data-theme="dark"] {
  --pm7-dialog-bg: #1a1a1a;
  --pm7-dialog-overlay-bg: rgb(0 0 0 / 0.8);
}
```

## Best Practices

1. **Unique IDs**: Always use unique `data-pm7-dialog` values
2. **Focus Management**: Ensure focusable elements in dialogs
3. **Loading States**: Use `setLoading()` for async operations
4. **Error Handling**: Use `shake()` animation for validation errors
5. **Responsive**: Test dialogs on mobile devices
6. **Accessibility**: Include proper labels and descriptions

## Examples

### Confirmation Dialog
```javascript
pm7Confirm('Delete this item?', (confirmed) => {
  if (confirmed) {
    deleteItem();
  }
}, {
  title: 'Confirm Deletion',
  icon: 'warning',
  confirmText: 'Delete',
  cancelText: 'Keep'
});
```

### Form Dialog with Validation
```javascript
const dialog = new PM7Dialog(formDialog);

formDialog.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault();
  
  if (!validateForm()) {
    dialog.shake();
    return;
  }
  
  dialog.setLoading(true);
  submitForm().then(() => {
    dialog.close();
  }).finally(() => {
    dialog.setLoading(false);
  });
});
```

### Dynamic Content Loading
```javascript
async function showUserProfile(userId) {
  const dialog = createDialog({
    id: 'user-profile',
    title: 'Loading...',
    body: '<div class="pm7-dialog-spinner"></div>',
    size: 'md'
  });
  
  openDialog('user-profile');
  
  const userData = await fetchUserData(userId);
  
  // Update dialog content
  document.querySelector('[data-pm7-dialog="user-profile"] [data-pm7-header]')
    .setAttribute('data-pm7-dialog-title', userData.name);
  
  document.querySelector('[data-pm7-dialog="user-profile"] [data-pm7-body]')
    .innerHTML = renderUserProfile(userData);
}
```