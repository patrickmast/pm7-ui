# Toast

Toasts provide brief notifications to the user. They appear temporarily and shouldn't interrupt the user experience.

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
import { Toast, useToast } from '@pm7/react';
import '@pm7/core/dist/pm7.css'; // Don't forget this!
```

## Usage

### Basic Toast

```javascript
import { showToast } from '@pm7/core';

// Show a simple toast
showToast({
  title: 'Success!',
  description: 'Your changes have been saved.'
});
```

### Toast Variants

```javascript
// Default toast
showToast({
  title: 'Notification',
  description: 'This is a default toast message.'
});

// Success toast
showToast({
  title: 'Success!',
  description: 'Operation completed successfully.',
  variant: 'success'
});

// Warning toast
showToast({
  title: 'Warning',
  description: 'Please review your input.',
  variant: 'warning'
});

// Error/Destructive toast
showToast({
  title: 'Error',
  description: 'Something went wrong. Please try again.',
  variant: 'destructive'
});

// Info toast
showToast({
  title: 'Information',
  description: 'New updates are available.',
  variant: 'info'
});
```

### Toast with Action

```javascript
showToast({
  title: 'File uploaded',
  description: 'document.pdf has been uploaded successfully.',
  action: '<button class="pm7-button pm7-button--sm pm7-button--outline">View</button>'
});
```

### Custom Duration

```javascript
// Short duration (3 seconds)
showToast({
  title: 'Quick message',
  duration: 3000
});

// Long duration (10 seconds)
showToast({
  title: 'Important notice',
  description: 'This message will stay longer.',
  duration: 10000
});

// Persistent toast (no auto-dismiss)
showToast({
  title: 'Action required',
  description: 'Please complete your profile.',
  duration: 0  // Will not auto-dismiss
});
```

### Manual Toast Management

```javascript
import { showToast, closeToast, closeAllToasts } from '@pm7/core';

// Show toast and get ID
const toastId = showToast({
  title: 'Processing...',
  duration: 0  // Don't auto-dismiss
});

// Close specific toast
setTimeout(() => {
  closeToast(toastId);
}, 5000);

// Close all toasts
closeAllToasts();
```

### HTML Structure

Toasts are dynamically created by the `showToast` function. The basic structure of a toast is:

```html
<div class="pm7-toast-viewport">
  <div class="pm7-toast pm7-toast--default" data-state="open">
    <div class="pm7-toast-header">
      <div>
        <h3 class="pm7-toast-title">Toast Title</h3>
        <p class="pm7-toast-description">Toast description goes here.</p>
      </div>
      <button class="pm7-toast-close" aria-label="Close">&times;</button>
    </div>
    <!-- Optional action button container -->
    <div class="pm7-toast-action">
      <button class="pm7-button pm7-button--sm pm7-button--primary">Action</button>
    </div>
    <!-- Progress bar for auto-dismiss -->
    <div class="pm7-toast-progress"></div>
  </div>
</div>
```

### Toast with Callback

```javascript
showToast({
  title: 'Saved',
  description: 'Your preferences have been saved.',
  onClose: () => {
    console.log('Toast closed');
  }
});
```

## API Reference

### showToast(options)

Shows a new toast notification.

#### Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `title` | string | '' | Toast title |
| `description` | string | '' | Toast description |
| `variant` | string | 'default' | Toast variant: 'default', 'success', 'warning', 'destructive', 'info' |
| `duration` | number | 5000 | Auto-dismiss duration in milliseconds. Use 0 for persistent |
| `action` | string | null | HTML string for action buttons |
| `onClose` | function | null | Callback when toast is closed |

#### Returns

- `string` - Toast ID that can be used with `closeToast()`

### closeToast(id)

Closes a specific toast.

- `id` (string) - The toast ID returned by `showToast()`

### closeAllToasts()

Closes all open toasts.

## CSS Classes Reference

| Class | Description |
|-------|-------------|
| `pm7-toast-viewport` | Container for all toasts |
| `pm7-toast` | Individual toast container |
| `pm7-toast--default` | Default toast variant |
| `pm7-toast--success` | Success toast variant |
| `pm7-toast--warning` | Warning toast variant |
| `pm7-toast--destructive` | Error/destructive toast variant |
| `pm7-toast--info` | Info toast variant |
| `pm7-toast-header` | Toast header container |
| `pm7-toast-title` | Toast title |
| `pm7-toast-description` | Toast description |
| `pm7-toast-close` | Close button |
| `pm7-toast-action` | Action button container |
| `pm7-toast-progress` | Progress bar for auto-dismiss |

## Best Practices

1. **Keep it brief**: Toast messages should be concise
2. **Non-blocking**: Don't use toasts for critical information
3. **Appropriate variant**: Use the correct variant for the message type
4. **Actionable**: Include an action button when appropriate
5. **Timing**: Default 5 seconds is good for most messages

## Advanced Examples

### Upload Progress Toast

```javascript
// Show upload started
const uploadToast = showToast({
  title: 'Uploading file...',
  description: 'Please wait',
  duration: 0
});

// Simulate upload complete
setTimeout(() => {
  closeToast(uploadToast);
  showToast({
    title: 'Upload complete!',
    description: 'File uploaded successfully',
    variant: 'success',
    action: '<button class="pm7-button pm7-button--sm pm7-button--primary">View File</button>'
  });
}, 3000);
```

### Error Handling Toast

```javascript
try {
  await saveData();
  showToast({
    title: 'Saved',
    variant: 'success'
  });
} catch (error) {
  showToast({
    title: 'Error saving data',
    description: error.message,
    variant: 'destructive',
    duration: 10000,
    action: '<button class="pm7-button pm7-button--sm pm7-button--outline" onclick="retry()">Retry</button>'
  });
}
```

### Queue Multiple Toasts

```javascript
// Show multiple toasts in sequence
const messages = [
  { title: 'Step 1 complete', variant: 'success' },
  { title: 'Step 2 complete', variant: 'success' },
  { title: 'All done!', description: 'Process completed successfully', variant: 'success' }
];

messages.forEach((msg, index) => {
  setTimeout(() => showToast(msg), index * 1000);
});
```

## React Usage

When using @pm7/react:

```jsx
import { useToast } from '@pm7/react';

function MyComponent() {
  const { toast } = useToast();

  const handleSave = () => {
    // Save logic...
    toast({
      title: 'Saved successfully',
      description: 'Your changes have been saved.',
      variant: 'success'
    });
  };

  return (
    <button onClick={handleSave}>Save</button>
  );
}
```

## Data Attributes

| Attribute | Description | Example |
|-----------|-------------|---------|
| `data-state` | Toast visibility state | `data-state="open"` |
| `data-swipe` | Swipe direction | `data-swipe="end"` |
| `data-swipe-direction` | Allowed swipe direction | `data-swipe-direction="right"` |
| `aria-live` | Screen reader announcement | `aria-live="polite"` |
| `aria-atomic` | Read entire toast | `aria-atomic="true"` |
| `role` | ARIA role | `role="status"` |

## Common Pitfalls

### ❌ Don't create toasts without the container
```javascript
// Wrong - no container for toasts
PM7Toast.show({
  title: 'Hello'
});

// Correct - ensure container exists
// Add to your HTML: <div class="pm7-toast-container"></div>
PM7Toast.show({
  title: 'Hello'
});
```

### ❌ Don't use toasts for critical actions
```javascript
// Wrong - critical action in toast
PM7Toast.show({
  title: 'Delete account?',
  action: {
    label: 'Delete',
    onClick: () => deleteAccount()
  }
});

// Correct - use dialog for critical actions
openDialog('delete-account-dialog');
```

### ❌ Don't create multiple toast containers
```html
<!-- Wrong - multiple containers -->
<div class="pm7-toast-container"></div>
<div class="pm7-toast-container"></div>

<!-- Correct - single container -->
<div class="pm7-toast-container"></div>
```

### ❌ Don't show too many toasts at once
```javascript
// Wrong - spam user with toasts
items.forEach(item => {
  PM7Toast.show({ title: `Processed ${item}` });
});

// Correct - batch notifications
PM7Toast.show({ 
  title: `Processed ${items.length} items successfully` 
});
```

### ❌ Don't use long durations for simple messages
```javascript
// Wrong - 10 second toast for simple message
PM7Toast.show({
  title: 'Saved',
  duration: 10000
});

// Correct - use default or shorter duration
PM7Toast.show({
  title: 'Saved',
  duration: 3000 // or omit for default
});
```

### ❌ Don't forget to handle errors in actions
```javascript
// Wrong - no error handling
PM7Toast.show({
  title: 'File uploaded',
  action: {
    label: 'Undo',
    onClick: () => deleteFile()
  }
});

// Correct - handle action errors
PM7Toast.show({
  title: 'File uploaded',
  action: {
    label: 'Undo',
    onClick: async () => {
      try {
        await deleteFile();
        PM7Toast.show({ title: 'Upload undone' });
      } catch (error) {
        PM7Toast.show({ 
          title: 'Failed to undo', 
          variant: 'error' 
        });
      }
    }
  }
});
```

## Accessibility

- Toasts are announced to screen readers
- Close button has proper aria-label
- Toasts don't steal focus
- Important messages should not rely solely on toasts

## Related Components

- [Dialog](../dialog/) - For important messages requiring user action
- [Button](../button/) - For toast actions