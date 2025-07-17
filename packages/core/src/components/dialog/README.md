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

# Component: Dialog

Modal overlay component for focused user interactions.

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
// ES modules - adds PM7 to window
import '@pm7/core';

// Dynamic import (Next.js)
import('@pm7/core').then(() => {
  window.PM7.init();
});

// TypeScript declarations
declare global {
  interface Window {
    PM7: {
      init: () => void;
      Dialog?: new (element: Element) => any;
      openDialog?: (id: string) => void;
      closeDialog?: (id: string) => void;
      closeAllDialogs?: () => void;
      createDialog?: (options: any) => HTMLElement;
      pm7Alert?: (message: string, title?: string) => void;
      pm7Confirm?: (message: string, callback: (confirmed: boolean) => void, title?: string) => void;
    }
  }
}
```

## Required Structure

```html
<div data-pm7-dialog="dialog-id" data-pm7-dialog-size="md">
  <h2 data-pm7-header>Title</h2>
  <div data-pm7-body>
    Content
  </div>
  <div data-pm7-footer>
    <button class="pm7-button pm7-button--primary">Action</button>
  </div>
</div>
```

## Attributes

| Attribute | Values | Effect |
|-----------|---------|---------|
| `data-pm7-dialog` | string ID | Dialog identifier |
| `data-pm7-dialog-size` | `sm`, `md`, `lg`, `xl`, `full` | Dialog width |
| `data-pm7-dialog-icon` | `info`, `warning`, `error`, `success` | Header icon |
| `data-pm7-show-close` | presence | Show close button |
| `data-pm7-header-separator` | presence | Show header line |
| `data-pm7-no-escape` | presence | Disable ESC key |
| `data-pm7-no-overlay-close` | presence | Disable overlay click |
| `data-pm7-header` | presence | Header marker |
| `data-pm7-body` | presence | Body marker |
| `data-pm7-footer` | presence | Footer marker |
| `data-pm7-dialog-title` | string | Set title text |
| `data-pm7-dialog-subtitle` | string | Set subtitle text |

## CSS Classes

| Class | Required | Usage |
|-------|----------|-------|
| `.pm7-dialog` | AUTO | Dialog container |
| `.pm7-dialog-overlay` | AUTO | Background overlay |
| `.pm7-dialog-content` | AUTO | Dialog box |
| `.pm7-dialog-header` | AUTO | Header section |
| `.pm7-dialog-title` | AUTO | Title text |
| `.pm7-dialog-description` | AUTO | Subtitle text |
| `.pm7-dialog-body` | AUTO | Content area |
| `.pm7-dialog-footer` | AUTO | Footer area |
| `.pm7-dialog-close` | AUTO | Close button |
| `.pm7-dialog-icon` | AUTO | Icon container |
| `.pm7-dialog-spinner` | NO | Loading spinner |
| `.pm7-dialog--alert` | NO | Red header variant |
| `.pm7-dialog--success` | NO | Green header variant |
| `.pm7-dialog--loading` | NO | Loading state |
| `.pm7-dialog--shake` | NO | Shake animation |

## Patterns

### Pattern: Basic Dialog
```html
<div data-pm7-dialog="basic-dialog" data-pm7-dialog-size="md">
  <h2 data-pm7-header>Dialog Title</h2>
  <div data-pm7-body>
    <p>Dialog content goes here.</p>
  </div>
  <div data-pm7-footer>
    <button class="pm7-button pm7-button--outline" onclick="window.PM7?.closeDialog?.('basic-dialog')">
      Cancel
    </button>
    <button class="pm7-button pm7-button--primary">
      Confirm
    </button>
  </div>
</div>

<button onclick="window.PM7?.openDialog?.('basic-dialog')">Open Dialog</button>
```

### Pattern: Alert Dialog
```html
<div data-pm7-dialog="alert-dialog" data-pm7-dialog-size="sm" data-pm7-dialog-icon="error">
  <h2 data-pm7-header>Error</h2>
  <div data-pm7-body>
    <p>Something went wrong. Please try again.</p>
  </div>
  <div data-pm7-footer>
    <button class="pm7-button pm7-button--destructive" onclick="window.PM7?.closeDialog?.('alert-dialog')">
      OK
    </button>
  </div>
</div>
```

### Pattern: Success Dialog
```html
<div data-pm7-dialog="success-dialog" data-pm7-dialog-size="sm" data-pm7-dialog-icon="success">
  <h2 data-pm7-header>Success!</h2>
  <div data-pm7-body>
    <p>Operation completed successfully.</p>
  </div>
  <div data-pm7-footer>
    <button class="pm7-button pm7-button--primary" onclick="window.PM7?.closeDialog?.('success-dialog')">
      Done
    </button>
  </div>
</div>
```

### Pattern: Form Dialog
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
    <button type="button" class="pm7-button pm7-button--ghost" onclick="window.PM7?.closeDialog?.('form-dialog')">
      Cancel
    </button>
    <button type="submit" class="pm7-button pm7-button--primary">
      Save Changes
    </button>
  </div>
</div>
```

### Pattern: Loading Dialog
```html
<div data-pm7-dialog="loading-dialog" data-pm7-dialog-size="sm" data-pm7-no-escape data-pm7-no-overlay-close>
  <div data-pm7-body style="text-align: center; padding: 48px;">
    <div class="pm7-dialog-spinner"></div>
    <p style="margin-top: 16px;">Processing...</p>
  </div>
</div>
```

### Pattern: JavaScript Control
```javascript
// Open dialog
if (window.PM7?.openDialog) {
  window.PM7.openDialog('dialog-id');
}

// Close dialog
if (window.PM7?.closeDialog) {
  window.PM7.closeDialog('dialog-id');
}

// Close all dialogs
if (window.PM7?.closeAllDialogs) {
  window.PM7.closeAllDialogs();
}

// Create dialog programmatically
if (window.PM7?.createDialog) {
  const dialog = window.PM7.createDialog({
    id: 'dynamic-dialog',
    title: 'Dynamic Dialog',
    body: '<p>Content</p>',
    footer: '<button class="pm7-button pm7-button--primary">OK</button>',
    size: 'md',
    showClose: true
  });
  window.PM7.openDialog('dynamic-dialog');
}

// Alert utility
if (window.PM7?.pm7Alert) {
  window.PM7.pm7Alert('Alert message', 'Alert Title');
}

// Confirm utility
if (window.PM7?.pm7Confirm) {
  window.PM7.pm7Confirm('Are you sure?', (confirmed) => {
    if (confirmed) {
      // Handle confirmation
    }
  }, 'Confirm Action');
}
```

### Pattern: Next.js Implementation
```jsx
'use client'

import { useEffect } from 'react'

export default function DialogPage() {
  useEffect(() => {
    import('@pm7/core').then(() => {
      // Dialog functions are available globally after import
    });
  }, []);

  const openDialog = () => {
    window.PM7?.openDialog?.('my-dialog');
  };

  return (
    <>
      <button className="pm7-button pm7-button--primary" onClick={openDialog}>
        Open Dialog
      </button>

      <div data-pm7-dialog="my-dialog" data-pm7-dialog-size="md">
        <h2 data-pm7-header>Dialog Title</h2>
        <div data-pm7-body>
          <p>Dialog content</p>
        </div>
        <div data-pm7-footer>
          <button 
            className="pm7-button pm7-button--primary" 
            onClick={() => window.PM7?.closeDialog?.('my-dialog')}
          >
            Close
          </button>
        </div>
      </div>
    </>
  );
}
```

## JavaScript API

### Initialization

IF dialog element exists THEN `new PM7.Dialog(element)`
IF open dialog THEN `window.PM7.openDialog(id)`
IF close dialog THEN `window.PM7.closeDialog(id)`

### Methods

| Method | Parameters | Returns | Usage |
|--------|------------|---------|-------|
| `open()` | none | void | `dialog.open()` |
| `close()` | none | void | `dialog.close()` |
| `shake()` | none | void | `dialog.shake()` |
| `setLoading()` | loading: boolean | void | `dialog.setLoading(true)` |

### Global Functions

| Function | Parameters | Returns | Usage |
|----------|------------|---------|-------|
| `openDialog()` | id: string | void | `window.PM7.openDialog('id')` |
| `closeDialog()` | id: string | void | `window.PM7.closeDialog('id')` |
| `closeAllDialogs()` | none | void | `window.PM7.closeAllDialogs()` |
| `createDialog()` | options: object | HTMLElement | `window.PM7.createDialog({...})` |
| `pm7Alert()` | message: string, title?: string | void | `window.PM7.pm7Alert('Error!')` |
| `pm7Confirm()` | message: string, callback: function, title?: string | void | `window.PM7.pm7Confirm('Sure?', (yes) => {})` |

### Events

| Event | When Fired | Detail |
|-------|------------|---------|
| `pm7-dialog-open` | After open | `{}` |
| `pm7-dialog-close` | After close | `{}` |

## Anti-Patterns

### Anti-Pattern: Missing Content Markers
```html
<!-- NEVER -->
<div data-pm7-dialog="dialog">
  <h2>Title</h2>
  <p>Content</p>
</div>

<!-- ALWAYS -->
<div data-pm7-dialog="dialog">
  <h2 data-pm7-header>Title</h2>
  <div data-pm7-body>
    <p>Content</p>
  </div>
</div>
```

### Anti-Pattern: Direct Method Calls
```javascript
// NEVER
window.PM7.openDialog('dialog');

// ALWAYS
if (window.PM7?.openDialog) {
  window.PM7.openDialog('dialog');
}
```

### Anti-Pattern: Nested Dialogs
```html
<!-- NEVER -->
<div data-pm7-dialog="outer">
  <div data-pm7-body>
    <div data-pm7-dialog="inner">...</div>
  </div>
</div>

<!-- ALWAYS - close first, open second -->
<button onclick="window.PM7?.closeDialog?.('first'); window.PM7?.openDialog?.('second')">
  Next
</button>
```

### Anti-Pattern: Wrong Size Method
```html
<!-- NEVER -->
<div data-pm7-dialog="dialog" data-pm7-dialog-size="md" class="pm7-dialog-content--lg">

<!-- ALWAYS -->
<div data-pm7-dialog="dialog" data-pm7-dialog-size="lg">
```

### Anti-Pattern: Manual Display Control
```html
<!-- NEVER -->
<div data-pm7-dialog="dialog" style="display: block;">

<!-- ALWAYS -->
<div data-pm7-dialog="dialog">
```

## Rules

- ALWAYS: Use unique IDs for `data-pm7-dialog`
- ALWAYS: Include content markers (`data-pm7-header`, `data-pm7-body`, etc.)
- ALWAYS: Check PM7 exists before calling methods
- ALWAYS: Provide close mechanism (button, ESC, or overlay)
- NEVER: Nest dialogs inside dialogs
- NEVER: Use role attributes (auto-applied)
- NEVER: Initialize same dialog multiple times
- NEVER: Add manual display styles
- NEVER: Mix size attributes and classes

## CSS Variables

| Variable | Default Light | Default Dark | Usage |
|----------|---------------|--------------|-------|
| `--pm7-dialog-bg` | `white` | `#1a1a1a` | Dialog background |
| `--pm7-dialog-overlay-bg` | `rgba(0,0,0,0.5)` | `rgba(0,0,0,0.8)` | Overlay background |
| `--pm7-dialog-padding` | `1.5rem` | `1.5rem` | Content padding |
| `--pm7-dialog-radius` | `var(--pm7-radius)` | `var(--pm7-radius)` | Border radius |
| `--pm7-dialog-shadow` | complex shadow | complex shadow | Box shadow |

## Sizes

| Size | Max Width | Usage |
|------|-----------|-------|
| `sm` | `400px` | Alerts, confirmations |
| `md` | `600px` | Default, forms |
| `lg` | `800px` | Complex forms |
| `xl` | `1000px` | Large content |
| `full` | `100%` | Fullscreen |

## Accessibility

- Focus trap when open
- Focus restoration on close
- ESC key closes (unless `data-pm7-no-escape`)
- Overlay click closes (unless `data-pm7-no-overlay-close`)
- ARIA attributes auto-applied
- Keyboard navigation preserved

## Framework Usage

### React
```jsx
'use client'

<>
  <button onClick={() => window.PM7?.openDialog?.('react-dialog')}>
    Open
  </button>
  <div data-pm7-dialog="react-dialog" data-pm7-dialog-size="md">
    <h2 data-pm7-header>React Dialog</h2>
    <div data-pm7-body>{content}</div>
  </div>
</>
```

### Vue
```vue
<template>
  <div>
    <button @click="$refs.PM7?.openDialog?.('vue-dialog')">
      Open
    </button>
    <div data-pm7-dialog="vue-dialog" data-pm7-dialog-size="md">
      <h2 data-pm7-header>Vue Dialog</h2>
      <div data-pm7-body>{{ content }}</div>
    </div>
  </div>
</template>
```

## Related Components

- Button: Trigger and action elements
- Toast: Non-blocking notifications
- Menu: Non-modal dropdowns