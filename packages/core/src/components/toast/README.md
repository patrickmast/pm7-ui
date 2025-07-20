<!-- AI-ONLY DOCUMENTATION -->
---
type: ai-agent-documentation
audience: ai-coding-agents-only
style: exact-patterns
human-readable: false
documentation-rules:
  - NO storytelling or explanations
  - ONLY exact code patterns
  - Binary IF/THEN decisions
  - Explicit anti-patterns with NEVER/ALWAYS
  - Copy-paste ready code blocks
---

# Component: Toast

Temporary notification messages.

## Installation

```bash
npm install @pm7/core
```

### CSS Import

```javascript
// ES modules
import '@pm7/core/dist/pm7.css';

// HTML
<link rel="stylesheet" href="node_modules/@pm7/core/dist/pm7.css">
```

### JavaScript Setup

```javascript
// ES modules
import { showToast, closeToast, closeAllToasts } from '@pm7/core';

// Dynamic import (Next.js)
import('@pm7/core').then((module) => {
  const { showToast } = module;
  showToast({ title: 'Ready' });
});

// TypeScript declarations
declare global {
  interface Window {
    PM7: {
      showToast?: (options: ToastOptions) => string;
      closeToast?: (id: string) => void;
      closeAllToasts?: () => void;
    }
  }
}
```

## Usage

```javascript
import { showToast } from '@pm7/core';

showToast({
  title: 'Success',
  description: 'Operation completed'
});
```

## Options

| Option | Type | Default | Effect |
|--------|------|---------|--------|
| `title` | string | `''` | Toast title (required) |
| `description` | string | `''` | Toast message |
| `variant` | string | `'default'` | Style variant |
| `duration` | number | `5000` | Auto-dismiss ms (0 = persistent) |
| `action` | string | `null` | HTML for action buttons |
| `onClose` | function | `null` | Close callback |

## Variants

| Variant | Usage |
|---------|-------|
| `default` | General notifications |
| `success` | Success messages |
| `warning` | Warning messages |
| `destructive` | Error messages |
| `info` | Information messages |

## Patterns

### Pattern: Basic Toast
```javascript
showToast({
  title: 'Notification',
  description: 'This is a message'
});
```

### Pattern: Success Toast
```javascript
showToast({
  title: 'Success!',
  description: 'Changes saved',
  variant: 'success'
});
```

### Pattern: Error Toast
```javascript
showToast({
  title: 'Error',
  description: 'Operation failed',
  variant: 'destructive'
});
```

### Pattern: Toast with Action
```javascript
showToast({
  title: 'File uploaded',
  description: 'document.pdf',
  action: '<button class="pm7-button pm7-button--sm pm7-button--outline">View</button>'
});
```

### Pattern: Persistent Toast
```javascript
showToast({
  title: 'Action required',
  description: 'Please complete your profile',
  duration: 0
});
```

### Pattern: Custom Duration
```javascript
showToast({
  title: 'Important',
  description: 'This stays longer',
  duration: 10000
});
```

### Pattern: Manual Close
```javascript
const toastId = showToast({
  title: 'Processing...',
  duration: 0
});

setTimeout(() => {
  closeToast(toastId);
}, 3000);
```

### Pattern: Close All
```javascript
closeAllToasts();
```

### Pattern: With Callback
```javascript
showToast({
  title: 'Saved',
  description: 'Preferences updated',
  onClose: () => {
    console.log('Toast closed');
  }
});
```

### Pattern: Upload Progress
```javascript
const uploadToast = showToast({
  title: 'Uploading...',
  duration: 0
});

// After upload
closeToast(uploadToast);
showToast({
  title: 'Upload complete!',
  variant: 'success',
  action: '<button class="pm7-button pm7-button--sm">View</button>'
});
```

### Pattern: Error Handling
```javascript
try {
  await saveData();
  showToast({
    title: 'Saved',
    variant: 'success'
  });
} catch (error) {
  showToast({
    title: 'Error',
    description: error.message,
    variant: 'destructive',
    duration: 10000
  });
}
```

### Pattern: Dynamic Toast Addition
WHEN: Adding toast after page load
```javascript
// Add toast HTML
document.getElementById('container').innerHTML = `
  <button id="show-toast">Show Toast</button>
`;

// MUST initialize PM7 components
window.PM7.init();

// Then use showToast function
document.getElementById('show-toast').onclick = () => {
  window.PM7.showToast({
    title: 'Dynamic Toast',
    description: 'Added after page load'
  });
};
```

### Pattern: Next.js Implementation
```jsx
'use client'

import { useEffect } from 'react'

export default function ToastDemo() {
  useEffect(() => {
    import('@pm7/core').then(({ showToast }) => {
      window.showToast = showToast;
    });
  }, []);

  const handleClick = () => {
    window.showToast?.({
      title: 'Hello from Next.js',
      variant: 'success'
    });
  };

  return <button onClick={handleClick}>Show Toast</button>;
}
```

## Generated Structure

```html
<div class="pm7-toast-viewport" data-pm7-toast-viewport>
  <div class="pm7-toast pm7-toast--default" data-state="open">
    <div class="pm7-toast-header">
      <div>
        <h3 class="pm7-toast-title">Title</h3>
        <p class="pm7-toast-description">Description</p>
      </div>
      <button class="pm7-toast-close" aria-label="Close">&times;</button>
    </div>
    <div class="pm7-toast-action">
      <!-- Action HTML -->
    </div>
    <div class="pm7-toast-progress"></div>
  </div>
</div>
```

## CSS Classes

| Class | Auto-Applied | Usage |
|-------|--------------|-------|
| `.pm7-toast-viewport` | YES | Container for all toasts |
| `.pm7-toast` | YES | Individual toast |
| `.pm7-toast--default` | YES | Default variant |
| `.pm7-toast--success` | YES | Success variant |
| `.pm7-toast--warning` | YES | Warning variant |
| `.pm7-toast--destructive` | YES | Error variant |
| `.pm7-toast--info` | YES | Info variant |
| `.pm7-toast-header` | YES | Header container |
| `.pm7-toast-title` | YES | Title element |
| `.pm7-toast-description` | YES | Description element |
| `.pm7-toast-close` | YES | Close button |
| `.pm7-toast-action` | YES | Action container |
| `.pm7-toast-progress` | YES | Progress bar |

## Anti-Patterns

### Anti-Pattern: Missing Title
```javascript
// NEVER
showToast({
  description: 'No title provided'
});

// ALWAYS
showToast({
  title: 'Notification',
  description: 'Always include a title'
});
```

### Anti-Pattern: Long Duration for Simple Messages
```javascript
// NEVER
showToast({
  title: 'Saved',
  duration: 10000
});

// ALWAYS
showToast({
  title: 'Saved',
  duration: 3000
});
```

### Anti-Pattern: Critical Actions in Toast
```javascript
// NEVER
showToast({
  title: 'Delete account?',
  action: '<button onclick="deleteAccount()">Delete</button>'
});

// ALWAYS - use dialog for critical actions
openDialog('delete-confirmation');
```

### Anti-Pattern: Spam Toasts
```javascript
// NEVER
items.forEach(item => {
  showToast({ title: `Processed ${item}` });
});

// ALWAYS
showToast({ 
  title: `Processed ${items.length} items`
});
```

### Anti-Pattern: Manual Container Creation
```html
<!-- NEVER -->
<div class="pm7-toast-viewport">
  <div class="pm7-toast">...</div>
</div>

<!-- ALWAYS - auto-created by showToast() -->
<script>
showToast({ title: 'Auto-created' });
</script>
```

### Anti-Pattern: Dynamic Toast Without Init
```javascript
// NEVER - toast won't work
document.body.innerHTML += `
  <button onclick="window.PM7.showToast({ title: 'Test' })">Show</button>
`;
// Toast is not interactive

// ALWAYS - initialize after adding
document.body.innerHTML += `
  <button id="toast-btn">Show</button>
`;
window.PM7.init(); // REQUIRED
document.getElementById('toast-btn').onclick = () => {
  window.PM7.showToast({ title: 'Test' });
};
// Toast now works
```

## Rules

- ALWAYS: Include title for accessibility
- ALWAYS: Use appropriate variant for message type
- ALWAYS: Keep messages brief
- ALWAYS: Handle errors in action callbacks
- ALWAYS: Call window.PM7.init() after adding toasts dynamically
- NEVER: Use toasts for critical user decisions
- NEVER: Show multiple toasts for batch operations
- NEVER: Create viewport container manually
- NEVER: Use long durations for simple messages
- NEVER: Expect toast to work without PM7.init() for dynamic content

## JavaScript API

### Initialization

IF toast in DOM at page load THEN auto-initialized
IF toast added dynamically THEN MUST call `window.PM7.init()`
IF manual init THEN use `showToast()` function
IF Next.js THEN dynamic import with optional chaining

### Functions

| Function | Parameters | Returns | Usage |
|----------|------------|---------|-------|
| `showToast()` | options: object | string (ID) | `showToast({ title: 'Hi' })` |
| `closeToast()` | id: string | void | `closeToast(toastId)` |
| `closeAllToasts()` | none | void | `closeAllToasts()` |

### Toast Manager Instance

```javascript
import { PM7Toast } from '@pm7/core';

const manager = PM7Toast.getInstance();
manager.show({ title: 'Hello' });
```

## Attributes

| Attribute | Values | Usage |
|-----------|---------|-------|
| `data-state` | `open`, `closed` | Visibility state |
| `data-swipe` | `end` | Swipe direction |
| `data-swipe-direction` | `right` | Allowed swipe |
| `aria-live` | `polite` | Screen reader |
| `aria-atomic` | `true` | Read entire content |
| `role` | `status` | ARIA role |

## Position

- Default: Bottom-right viewport
- Stack: Newer toasts appear above
- Spacing: 1rem between toasts
- Offset: 1rem from viewport edge

## Accessibility

- Screen reader announcements
- Keyboard accessible close button
- Does not steal focus
- Proper ARIA attributes

## Framework Usage

### React
```jsx
'use client'

import { showToast } from '@pm7/core'

<button onClick={() => showToast({ title: 'React Toast' })}>
  Show Toast
</button>
```

### Vue
```vue
<template>
  <button @click="notify">Show Toast</button>
</template>

<script>
import { showToast } from '@pm7/core'

export default {
  methods: {
    notify() {
      showToast({ title: 'Vue Toast' })
    }
  }
}
</script>
```

## Related Components

- Dialog: For important user decisions
- Button: For toast actions