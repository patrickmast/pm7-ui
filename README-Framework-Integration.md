<!-- AI-ONLY DOCUMENTATION v2.0 -->
<!-- This documentation is EXCLUSIVELY for AI coding agents -->
<!-- NO human-friendly content allowed -->
<!-- Reference: /README-AI-HowToDocument.md -->

---
type: ai-agent-documentation
version: 2.0
audience: ai-coding-agents-only
style: exact-patterns
human-readable: false
attributes-reference: /docs/ATTRIBUTES.md
---

# Framework Integration Guide

DEFINITION: This guide provides exact patterns and rules for integrating PM7-UI components into modern JavaScript frameworks like React, Vue, and Angular. It addresses common challenges such as timing, state synchronization, and event handling.

## Installation

```bash
npm install @pm7/core
```

### CSS & JavaScript Import

REQUIRED: Import both the CSS and the main JavaScript file.

```javascript
// ES modules
import '@pm7/core/dist/pm7.css';
import '@pm7/core'; // Imports and initializes all components

// HTML
<link rel="stylesheet" href="node_modules/@pm7/core/dist/pm7.css">
<script src="node_modules/@pm7/core/dist/pm7.js" defer></script>
```

## Initialization in Frameworks

PM7-UI components auto-initialize on `DOMContentLoaded`. However, frameworks often render their components after this event. Use `window.PM7.initFramework()` to ensure proper initialization and self-healing.

### Pattern: Standard Framework Initialization

WHEN: Initializing PM7-UI in a framework's root component or layout.

```javascript
// React (in a root component's useEffect hook)
import { useEffect } from 'react';

useEffect(() => {
  window.PM7?.initFramework(); // Handles timing and enables self-healing
}, []);

// Vue (in a root component's mounted hook)
import { onMounted } from 'vue';

onMounted(() => {
  window.PM7?.initFramework();
});

// Angular (in a root component's ngAfterViewInit hook)
import { AfterViewInit } from '@angular/core';

export class AppComponent implements AfterViewInit {
  ngAfterViewInit() {
    window.PM7?.initFramework();
  }
}
```

### Pattern: Dynamic Component Addition

WHEN: Adding PM7-UI components to the DOM after initial page load (e.g., via conditional rendering or AJAX).

```javascript
// After adding new PM7-UI elements to the DOM
window.PM7?.init();
```

## Self-Healing Components (v2.5.0+)

All interactive PM7-UI components automatically detect and recover from framework re-renders. This eliminates the need for manual re-initialization workarounds.

### How Self-Healing Works
1.  Components detect when their DOM elements have been re-rendered by a framework.
2.  Their internal state (e.g., open/closed, active tab) is automatically preserved.
3.  Event listeners are cleaned up and re-attached to the new DOM elements.
4.  The component restores its previous state, ensuring seamless user experience.

### Manual Healing (for advanced use cases)

```javascript
// Heal all components of all types
window.PM7.heal();

// Heal specific component types
window.PM7.healMenus();
window.PM7.healAccordions();
window.PM7.healTabSelectors();
window.PM7.healTooltips();
window.PM7.healSidebars();
```

## State Synchronization

PM7-UI components manage their own internal DOM state. When integrating with frameworks, it is CRITICAL to synchronize the framework's state with the component's DOM state.

### Pattern: Dialog State Synchronization

WHEN: Using PM7-UI Dialogs in a framework where the framework's state controls dialog visibility.

```jsx
// React Example
import React, { useState, useEffect, useRef } from 'react';

function MyDialogComponent({ isOpen, onClose }) {
  const dialogRef = useRef(null);

  // Effect to open/close PM7 dialog based on React's isOpen state
  useEffect(() => {
    if (isOpen) {
      window.openDialog?.('my-dialog-id');
    } else {
      window.closeDialog?.('my-dialog-id');
    }
  }, [isOpen]);

  // Effect to synchronize React's isOpen state with PM7's internal state
  // This handles cases where PM7 dialog is closed by ESC key or overlay click
  useEffect(() => {
    if (!dialogRef.current) return;

    const observer = new MutationObserver(() => {
      const pm7State = dialogRef.current.getAttribute('data-state');
      if (pm7State === 'closed' && isOpen) {
        onClose(); // Call framework's onClose to update its state
      }
    });

    observer.observe(dialogRef.current, {
      attributes: true,
      attributeFilter: ['data-state']
    });

    return () => observer.disconnect();
  }, [isOpen, onClose]);

  // CRITICAL: Conditionally render the dialog. Return null when not open.
  if (!isOpen) return null;

  return (
    <div data-pm7-dialog="my-dialog-id" ref={dialogRef}>
      <div data-pm7-header>My Dialog</div>
      <div data-pm7-body>Content</div>
      <div data-pm7-footer>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}
```

## Event Handling

PM7-UI components attach their own event listeners. When using frameworks, avoid attaching duplicate event listeners or relying on framework-specific event delegation for PM7-UI's internal elements.

### Pattern: Dialog Footer Buttons with `onClick`

WHEN: Placing buttons in a `data-pm7-footer` section of a dialog, where direct framework `onClick` handlers might not work due to DOM manipulation.

```jsx
// React Example
import React, { useEffect } from 'react';

function MyDialogWithAction({ onConfirm }) {
  useEffect(() => {
    // Expose a global function that can be called from inline HTML
    window.handleDialogConfirm = () => {
      onConfirm();
      window.closeDialog?.('my-action-dialog');
    };
    // Clean up the global function when component unmounts
    return () => delete window.handleDialogConfirm;
  }, [onConfirm]);

  return (
    <div data-pm7-dialog="my-action-dialog">
      <div data-pm7-header>Confirm Action</div>
      <div data-pm7-body>Are you sure?</div>
      <div data-pm7-footer>
        <button onClick={() => window.closeDialog?.('my-action-dialog')}>Cancel</button>
        {/* Use dangerouslySetInnerHTML to render HTML with inline onclick */}
        <div dangerouslySetInnerHTML={{
          __html: '<button class="pm7-button pm7-button--primary" onclick="window.handleDialogConfirm()">Confirm</button>'
        }} />
      </div>
    </div>
  );
}
```

## Anti-Patterns

### NEVER: Manually re-initialize components after every render
```javascript
// React Example
useEffect(() => {
  // NEVER do this after every render
  window.PM7?.init();
});

// BECAUSE
This is inefficient and can lead to duplicate event listeners or unexpected behavior. PM7-UI's self-healing handles re-renders automatically.

// INSTEAD
// Use `window.PM7.initFramework()` once in the root component's mount hook.
useEffect(() => {
  window.PM7?.initFramework();
}, []);
```

### NEVER: Omit conditional rendering for interactive components
```jsx
// React Example
function MyComponent({ showDialog }) {
  return (
    <>
      {/* NEVER render the dialog element if showDialog is false */}
      <div data-pm7-dialog="my-dialog" style={{ display: showDialog ? 'block' : 'none' }}>
        ...
      </div>
    </>
  );
}

// BECAUSE
PM7-UI components are designed to be added/removed from the DOM. Simply hiding them with CSS breaks their lifecycle, focus management, and self-healing.

// INSTEAD
function MyComponent({ showDialog }) {
  if (!showDialog) return null; // CRITICAL: Return null when not visible
  return (
    <div data-pm7-dialog="my-dialog">
      ...
    </div>
  );
}
```

## Rules

### ALWAYS
- **ALWAYS**: Call `window.PM7.initFramework()` once in the root component's mount lifecycle hook (e.g., `useEffect` for React, `onMounted` for Vue, `ngAfterViewInit` for Angular).
- **ALWAYS**: Conditionally render interactive PM7-UI components in frameworks (return `null` or `v-if="false"` when the component should not be visible).
- **ALWAYS**: Synchronize framework state with PM7-UI's internal DOM state for interactive components (e.g., using `MutationObserver` for dialogs).

### NEVER
- **NEVER**: Manually call `window.PM7.init()` or component-specific `init` methods on every framework render.
- **NEVER**: Use framework-specific event handlers directly on PM7-UI's internal elements if they are dynamically manipulated by PM7-UI (e.g., dialog footer buttons).
- **NEVER**: Attempt to control PM7-UI component visibility or state using framework-specific CSS classes or inline styles.

## Troubleshooting

### Problem: PM7-UI component not working in framework

- **CAUSE**: PM7-UI JavaScript not initialized or initialized at the wrong time.
- **FIX**: Ensure `window.PM7?.initFramework()` is called in the framework's root component's mount lifecycle hook.

### Problem: Dialog closes via ESC/overlay but framework state is out of sync

- **CAUSE**: Framework state is not being updated when PM7-UI internally closes the dialog.
- **FIX**: Implement a `MutationObserver` to watch for `data-state="closed"` on the dialog element and update the framework's state accordingly (see `Pattern: Dialog State Synchronization`).

### Problem: `onClick` handlers on dialog/menu items not firing in React

- **CAUSE**: React's event delegation is bypassed when PM7-UI dynamically manipulates the DOM structure of the dialog/menu.
- **FIX**: Use global functions with `dangerouslySetInnerHTML` for `onClick` handlers on such elements (see `Pattern: Dialog Footer Buttons with onClick`).

### Problem: Components not self-healing after re-render

- **CAUSE**: `window.PM7.initFramework()` was not called, or an older version of PM7-UI is being used.
- **FIX**: Update to PM7-UI v2.5.0+ and ensure `window.PM7.initFramework()` is called correctly.

## Complete Example: React Application with PM7-UI Dialog

SCENARIO: A React application that uses a PM7-UI Dialog for user confirmation, demonstrating proper state synchronization and event handling.

```jsx
import React, { useState, useEffect, useRef } from 'react';
import '@pm7/core/dist/pm7.css';
import '@pm7/core'; // Imports PM7-UI core and initializes components

function ConfirmDialog({ message, onConfirm, onCancel, isOpen }) {
  const dialogRef = useRef(null);

  // Effect to open/close PM7 dialog based on React's isOpen state
  useEffect(() => {
    if (isOpen) {
      window.openDialog?.('confirm-dialog');
    } else {
      window.closeDialog?.('confirm-dialog');
    }
  }, [isOpen]);

  // Effect to synchronize React's isOpen state with PM7's internal state
  // This handles cases where PM7 dialog is closed by ESC key or overlay click
  useEffect(() => {
    if (!dialogRef.current) return;

    const observer = new MutationObserver(() => {
      const pm7State = dialogRef.current.getAttribute('data-state');
      if (pm7State === 'closed' && isOpen) {
        onCancel(); // Call framework's onClose to update its state
      }
    });

    observer.observe(dialogRef.current, {
      attributes: true,
      attributeFilter: ['data-state']
    });

    return () => observer.disconnect();
  }, [isOpen, onCancel]);

  // CRITICAL: Conditionally render the dialog. Return null when not open.
  if (!isOpen) return null;

  return (
    <div data-pm7-dialog="confirm-dialog" ref={dialogRef}>
      <div data-pm7-header>Confirmation</div>
      <div data-pm7-body>
        <p>{message}</p>
      </div>
      <div data-pm7-footer>
        <button onClick={onCancel}>Cancel</button>
        {/* Use dangerouslySetInnerHTML for the confirm button to ensure event fires */}
        <div dangerouslySetInnerHTML={{
          __html: '<button class="pm7-button pm7-button--primary" onclick="window.handleConfirmAction()">Confirm</button>'
        }} />
      </div>
    </div>
  );
}

function App() {
  const [showConfirm, setShowConfirm] = useState(false);

  // Expose global function for dialog's inline onclick
  useEffect(() => {
    window.handleConfirmAction = () => {
      alert('Action Confirmed!');
      setShowConfirm(false);
    };
    return () => delete window.handleConfirmAction;
  }, []);

  // Initialize PM7-UI for the entire application
  useEffect(() => {
    window.PM7?.initFramework();
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h1>PM7-UI React Integration Demo</h1>
      <button className="pm7-button pm7-button--primary" onClick={() => setShowConfirm(true)}>
        Perform Action
      </button>

      <ConfirmDialog
        message="Are you sure you want to perform this action?"
        isOpen={showConfirm}
        onConfirm={() => setShowConfirm(false)}
        onCancel={() => setShowConfirm(false)}
      />
    </div>
  );
}

export default App;
```
