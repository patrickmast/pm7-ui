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

### Pattern: Dynamic Dialog Addition
WHEN: Adding dialog after page load
```javascript
// Add dialog HTML
document.body.insertAdjacentHTML('beforeend', `
  <div data-pm7-dialog="new-dialog" data-pm7-dialog-size="md">
    <h2 data-pm7-header>Dynamic Dialog</h2>
    <div data-pm7-body>Content</div>
  </div>
`);

// MUST initialize PM7 components
window.PM7.init();

// Now can open
window.PM7.openDialog('new-dialog');
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
        {/* CRITICAL: Use HTML onclick, not React onClick! */}
        <div data-pm7-footer dangerouslySetInnerHTML={{
          __html: `
            <button 
              class="pm7-button pm7-button--primary" 
              onclick="window.PM7.closeDialog('my-dialog')"
            >
              Close
            </button>
          `
        }} />
      </div>
    </>
  );
}
```

## JavaScript API

### Automatic Menu Closing

WHEN: Dialog opens
THEN: All open menus close automatically
WHY: Prevents menu overlap with dialog overlay

### Initialization

IF dialog in DOM at page load THEN auto-initialized
IF dialog added dynamically THEN MUST call `window.PM7.init()`
IF manual init THEN `new PM7.Dialog(element)`
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
| `createDialog()` | options: object | HTMLElement | `window.PM7.createDialog({...})` |
| `alert()` | message: string, options?: object | Promise | `window.PM7.alert('Error!')` |
| `confirm()` | message: string, options?: object | Promise | `window.PM7.confirm('Sure?').then(result => {})` |

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

### Anti-Pattern: Dynamic Dialog Without Init
```javascript
// NEVER - dialog won't work
document.body.innerHTML += `<div data-pm7-dialog="new">...</div>`;
window.PM7.openDialog('new'); // FAILS

// ALWAYS - initialize after adding
document.body.innerHTML += `<div data-pm7-dialog="new">...</div>`;
window.PM7.init(); // REQUIRED
window.PM7.openDialog('new'); // WORKS
```

### Anti-Pattern: Missing PM7 Namespace
```javascript
// NEVER - don't try to call directly on window
window.openDialog('dialog-id');
window.closeDialog('dialog-id');

// ALWAYS - use PM7 namespace
window.PM7.openDialog('dialog-id');
window.PM7.closeDialog('dialog-id');
```

### Anti-Pattern: React onClick in Dialog Footer
```jsx
// NEVER - React onClick handlers don't work in dialog footers!
<div data-pm7-footer>
  <button onClick={handleClick}>This won't work!</button>
</div>

// ALWAYS - Use HTML onclick or dangerouslySetInnerHTML
<div data-pm7-footer dangerouslySetInnerHTML={{
  __html: `<button onclick="handleClick()">This works!</button>`
}} />
```

## Rules

- ALWAYS: Use unique IDs for `data-pm7-dialog`
- ALWAYS: Include content markers (`data-pm7-header`, `data-pm7-body`, etc.)
- ALWAYS: Check PM7 exists before calling methods
- ALWAYS: Call `window.PM7.init()` after adding dialogs dynamically
- ALWAYS: Use `window.PM7.openDialog()` for opening dialogs
- ALWAYS: Provide close mechanism (button, ESC, or overlay)
- ALWAYS: Use HTML `onclick` for buttons in dialog footers (React)
- NEVER: Nest dialogs inside dialogs
- NEVER: Use role attributes (auto-applied)
- NEVER: Initialize same dialog multiple times
- NEVER: Add manual display styles
- NEVER: Mix size attributes and classes
- NEVER: Call dialog functions without PM7.init() for dynamic content
- NEVER: Use React `onClick` handlers in dialog footers (they won't work!)

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

### React Integration - CRITICAL WARNING

⚠️ **CRITICAL**: React's `onClick` handlers DO NOT WORK inside dialog footers!

PM7 manipulates the dialog DOM structure during initialization, which causes React event handlers to be lost. This is a known limitation when PM7 reconstructs the dialog for proper styling and functionality.

#### ❌ WRONG - This will NOT work:
```jsx
// Button onClick will never fire!
<div data-pm7-footer>
  <button onClick={() => handleSave()}>Save</button>
  <button onClick={() => window.PM7.closeDialog('id')}>Close</button>
</div>
```

#### ✅ CORRECT - Use one of these approaches:

**Option 1: HTML onclick with global functions**
```jsx
'use client'

export function MyDialog() {
  const [data, setData] = useState('');
  
  // Make function globally available
  useEffect(() => {
    window.handleSave = () => {
      console.log('Saving:', data);
      // Your save logic here
      window.PM7.closeDialog('my-dialog');
    };
    
    return () => {
      delete window.handleSave;
    };
  }, [data]);

  return (
    <div data-pm7-dialog="my-dialog" data-pm7-dialog-size="md">
      <h2 data-pm7-header>React Dialog</h2>
      <div data-pm7-body>
        <input 
          type="text" 
          className="pm7-input" 
          value={data}
          onChange={(e) => setData(e.target.value)}
        />
      </div>
      <div data-pm7-footer dangerouslySetInnerHTML={{
        __html: `
          <button 
            class="pm7-button pm7-button--outline" 
            onclick="window.PM7.closeDialog('my-dialog')"
          >
            Cancel
          </button>
          <button 
            class="pm7-button pm7-button--primary" 
            onclick="window.handleSave()"
          >
            Save
          </button>
        `
      }} />
    </div>
  );
}
```

**Option 2: Event delegation on dialog body**
```jsx
'use client'

export function MyDialog() {
  const dialogRef = useRef(null);
  
  useEffect(() => {
    const handleClick = (e) => {
      if (e.target.matches('[data-action="save"]')) {
        // Handle save
        window.PM7.closeDialog('my-dialog');
      }
    };
    
    dialogRef.current?.addEventListener('click', handleClick);
    return () => {
      dialogRef.current?.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <div ref={dialogRef} data-pm7-dialog="my-dialog" data-pm7-dialog-size="md">
      <h2 data-pm7-header>React Dialog</h2>
      <div data-pm7-body>Content</div>
      <div data-pm7-footer>
        <button 
          className="pm7-button pm7-button--primary"
          data-action="save"
        >
          Save
        </button>
      </div>
    </div>
  );
}
```

### Complete React Form Dialog Example
```jsx
'use client'

import { useState, useEffect, useRef } from 'react';

export function UserFormDialog({ isOpen, onClose, onSave }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const dialogRef = useRef(null);
  
  // Open/close dialog based on isOpen prop
  useEffect(() => {
    if (isOpen && window.PM7?.openDialog) {
      window.PM7.openDialog('user-form-dialog');
    }
  }, [isOpen]);
  
  // Make save function globally available for onclick
  useEffect(() => {
    window.saveUserForm = () => {
      if (formData.name && formData.email) {
        onSave(formData);
        window.PM7?.closeDialog('user-form-dialog');
      }
    };
    
    window.cancelUserForm = () => {
      onClose();
      window.PM7?.closeDialog('user-form-dialog');
    };
    
    return () => {
      delete window.saveUserForm;
      delete window.cancelUserForm;
    };
  }, [formData, onSave, onClose]);
  
  return (
    <div 
      ref={dialogRef} 
      data-pm7-dialog="user-form-dialog" 
      data-pm7-dialog-size="md" 
      data-pm7-show-close
      data-pm7-header-separator
    >
      <div data-pm7-header>
        <h2 className="pm7-dialog-title">Edit User</h2>
      </div>
      
      <div data-pm7-body>
        <div className="pm7-form-group">
          <label htmlFor="name" className="pm7-label pm7-label--required">
            Name
          </label>
          <input
            id="name"
            type="text"
            className="pm7-input"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
            placeholder="Enter user name"
          />
        </div>
        
        <div className="pm7-form-group">
          <label htmlFor="email" className="pm7-label pm7-label--required">
            Email
          </label>
          <input
            id="email"
            type="email"
            className="pm7-input"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
            placeholder="user@example.com"
          />
        </div>
        
        <div className="pm7-form-group">
          <label htmlFor="role" className="pm7-label">
            Role
          </label>
          <select
            id="role"
            className="pm7-select"
            value={formData.role}
            onChange={(e) => setFormData({...formData, role: e.target.value})}
          >
            <option value="">Select a role</option>
            <option value="admin">Admin</option>
            <option value="user">User</option>
            <option value="guest">Guest</option>
          </select>
        </div>
      </div>
      
      {/* CRITICAL: Use dangerouslySetInnerHTML for footer buttons! */}
      <div data-pm7-footer dangerouslySetInnerHTML={{
        __html: `
          <button 
            type="button"
            class="pm7-button pm7-button--outline" 
            onclick="window.cancelUserForm()"
          >
            Cancel
          </button>
          <button 
            type="button"
            class="pm7-button pm7-button--primary" 
            onclick="window.saveUserForm()"
            ${!formData.name || !formData.email ? 'disabled' : ''}
          >
            Save User
          </button>
        `
      }} />
    </div>
  );
}
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

## Troubleshooting

### Common Issues and Solutions

#### 1. Buttons in dialog footer don't respond to clicks (React)
**Problem**: React `onClick` handlers don't fire on buttons inside `data-pm7-footer`.

**Cause**: PM7 reconstructs the dialog DOM during initialization, breaking React event bindings.

**Solution**: Use HTML `onclick` with global functions or `dangerouslySetInnerHTML`:
```jsx
// Instead of:
<button onClick={handleClick}>Save</button>

// Use:
<div data-pm7-footer dangerouslySetInnerHTML={{
  __html: `<button onclick="window.handleClick()">Save</button>`
}} />
```

#### 2. Dialog doesn't open/close
**Problem**: `window.PM7.openDialog()` or `closeDialog()` not working.

**Solutions**:
- Ensure PM7 is loaded: `import '@pm7/core'`
- Check if dialog ID matches: `data-pm7-dialog="my-id"` and `openDialog('my-id')`
- Verify PM7 is initialized: `window.PM7.init()` after dynamic dialog creation
- Use correct namespace: `window.PM7.openDialog()` not `window.openDialog()`

#### 3. Dialog content not updating (React)
**Problem**: Dialog shows stale data when reopened.

**Solution**: Reset state when dialog opens:
```jsx
useEffect(() => {
  if (isOpen) {
    // Reset form data
    setFormData(initialData);
    window.PM7?.openDialog('dialog-id');
  }
}, [isOpen]);
```

#### 4. Multiple dialogs interfering
**Problem**: Opening one dialog affects another.

**Solution**: Use unique IDs for each dialog:
```jsx
<div data-pm7-dialog="user-dialog-1">...</div>
<div data-pm7-dialog="confirm-dialog-2">...</div>
```

#### 5. Dialog not styled correctly
**Problem**: Dialog appears unstyled or broken.

**Solutions**:
- Import CSS: `import '@pm7/core/dist/pm7.css'`
- Use correct structure with data attributes
- Don't mix traditional and content marker patterns
- Ensure no CSS conflicts with global styles

## Related Components

- Button: Trigger and action elements
- Toast: Non-blocking notifications
- Menu: Non-modal dropdowns