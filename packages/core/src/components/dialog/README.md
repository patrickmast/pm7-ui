<!-- AI-CODING-AGENT ONLY DOCUMENTATION -->
---
type: ai-agent-documentation
audience: ai-coding-agents-only
style: exact-patterns
documentation-rules:
  - NO simplified syntax examples
  - ONLY working full HTML structure
  - Binary IF/THEN decisions
  - Explicit anti-patterns with NEVER/ALWAYS
  - Copy-paste ready code blocks
---

# Component: Dialog (AI-CODING-AGENT ONLY)

**⚠️ CRITICAL FOR AI AGENTS: This documentation shows ONLY the working syntax. Copy the exact HTML structure.**

## Installation

```bash
npm install @pm7/core
```

```javascript
// ES modules
import '@pm7/core/dist/pm7.css';
import '@pm7/core';

// TypeScript declarations
declare global {
  interface Window {
    openDialog: (id: string) => void;
    closeDialog: (id: string) => void;
    closeAllDialogs: () => void;
  }
}
```

## WORKING STRUCTURE - USE THIS EXACTLY

### ✅ CORRECT: Full Dialog Structure (COPY THIS)
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

## WORKING EXAMPLES - COPY EXACTLY

### Example: Basic Dialog
```html
<div data-pm7-dialog="basic-dialog">
  <div data-pm7-header>Dialog Title</div>
  <div data-pm7-body>
    <p>This is the dialog content.</p>
  </div>
  <div data-pm7-footer>
    <button onclick="window.closeDialog('basic-dialog')">Close</button>
  </div>
</div>

<button onclick="window.openDialog('basic-dialog')">Open Dialog</button>
```

### Example: Alert Dialog (Small)
```html
<div data-pm7-dialog="alert" data-pm7-dialog-size="sm">
  <div data-pm7-header>Error</div>
  <div data-pm7-body>
    <p>Something went wrong!</p>
  </div>
  <div data-pm7-footer>
    <button onclick="window.closeDialog('alert')">OK</button>
  </div>
</div>

<button onclick="window.openDialog('alert')">Show Alert</button>
```

### Example: Form Dialog with Close Button
```html
<div data-pm7-dialog="form-dialog" data-pm7-show-close data-pm7-dialog-size="md">
  <div data-pm7-header>Edit Profile</div>
  <form data-pm7-body>
    <label class="pm7-label">Name</label>
    <input type="text" class="pm7-input" />
    
    <label class="pm7-label">Email</label>
    <input type="email" class="pm7-input" />
  </form>
  <div data-pm7-footer>
    <button onclick="window.closeDialog('form-dialog')">Cancel</button>
    <button onclick="handleSave()">Save</button>
  </div>
</div>

<button onclick="window.openDialog('form-dialog')">Edit Profile</button>
```

### Example: Large Dialog
```html
<div data-pm7-dialog="large-content" data-pm7-dialog-size="lg" data-pm7-show-close>
  <div data-pm7-header>Terms and Conditions</div>
  <div data-pm7-body>
    <p>Long content goes here...</p>
    <p>Multiple paragraphs...</p>
  </div>
  <div data-pm7-footer>
    <button onclick="window.closeDialog('large-content')">Decline</button>
    <button onclick="acceptTerms()">Accept</button>
  </div>
</div>
```

### Example: No Escape/Overlay Close
```html
<div data-pm7-dialog="critical-action" data-pm7-no-escape data-pm7-no-overlay-close data-pm7-dialog-size="sm">
  <div data-pm7-header>Confirm Delete</div>
  <div data-pm7-body>
    <p>Are you sure you want to delete this item?</p>
    <p>This action cannot be undone.</p>
  </div>
  <div data-pm7-footer>
    <button onclick="window.closeDialog('critical-action')">Cancel</button>
    <button onclick="confirmDelete()" class="pm7-button pm7-button--destructive">Delete</button>
  </div>
</div>
```

## React Implementation

### Basic React Dialog
```jsx
export function MyDialog({ isOpen, onClose }) {
  useEffect(() => {
    if (isOpen) {
      window.openDialog?.('my-react-dialog');
    } else {
      window.closeDialog?.('my-react-dialog');
    }
  }, [isOpen]);

  // CRITICAL: Only render when needed
  if (!isOpen) return null;

  return (
    <div data-pm7-dialog="my-react-dialog">
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

### React Dialog with Form
```jsx
export function FormDialog({ isOpen, onClose, onSave }) {
  const [formData, setFormData] = useState({ name: '', email: '' });

  useEffect(() => {
    if (isOpen) {
      window.openDialog?.('form-dialog');
    } else {
      window.closeDialog?.('form-dialog');
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSave = () => {
    onSave(formData);
    onClose();
  };

  return (
    <div data-pm7-dialog="form-dialog" data-pm7-show-close>
      <div data-pm7-header>Edit User</div>
      <div data-pm7-body>
        <label className="pm7-label">Name</label>
        <input 
          type="text" 
          className="pm7-input"
          value={formData.name}
          onChange={(e) => setFormData({...formData, name: e.target.value})}
        />
        
        <label className="pm7-label">Email</label>
        <input 
          type="email" 
          className="pm7-input"
          value={formData.email}
          onChange={(e) => setFormData({...formData, email: e.target.value})}
        />
      </div>
      <div data-pm7-footer>
        <button onClick={onClose}>Cancel</button>
        <button onClick={handleSave}>Save</button>
      </div>
    </div>
  );
}
```

### React Footer with Inline Handlers
```jsx
// For inline onclick handlers in React, use dangerouslySetInnerHTML
<div data-pm7-footer dangerouslySetInnerHTML={{
  __html: `
    <button onclick="window.closeDialog('dialog-id')">Cancel</button>
    <button onclick="window.handleSave()">Save</button>
  `
}} />
```

## Attributes Reference

| Attribute | Values | Effect |
|-----------|---------|---------|
| `data-pm7-dialog` | string ID | **REQUIRED** - Unique dialog identifier |
| `data-pm7-dialog-size` | `sm`, `md`, `lg`, `xl`, `full` | Dialog width |
| `data-pm7-show-close` | presence | Show X close button in header |
| `data-pm7-no-escape` | presence | Disable ESC key closing |
| `data-pm7-no-overlay-close` | presence | Disable overlay click closing |

## Content Section Attributes

| Attribute | Required | Usage |
|-----------|----------|-------|
| `data-pm7-header` | YES | Header section with title |
| `data-pm7-body` | YES | Main content area |
| `data-pm7-footer` | YES | Footer with action buttons |

## JavaScript API

### Open Dialog
```javascript
// Open a specific dialog
window.openDialog('dialog-id');

// Safe usage with optional chaining
window.openDialog?.('dialog-id');
```

### Close Dialog
```javascript
// Close a specific dialog
window.closeDialog('dialog-id');

// Close all open dialogs
window.closeAllDialogs();

// Safe usage
window.closeDialog?.('dialog-id');
```

### Dynamic Dialog Creation
```javascript
// Create dialog HTML
document.body.innerHTML += `
  <div data-pm7-dialog="dynamic-dialog" data-pm7-dialog-size="md">
    <div data-pm7-header>Dynamic Dialog</div>
    <div data-pm7-body>
      <p>This dialog was created dynamically</p>
    </div>
    <div data-pm7-footer>
      <button onclick="window.closeDialog('dynamic-dialog')">Close</button>
    </div>
  </div>
`;

// Dialog is auto-initialized, just open it
window.openDialog('dynamic-dialog');
```

## Size Specifications

| Size | Class | Width |
|------|-------|-------|
| Small | `sm` | 400px |
| Medium | `md` | 600px (default) |
| Large | `lg` | 800px |
| Extra Large | `xl` | 1000px |
| Full | `full` | 95vw |

## Critical Anti-Patterns

### ❌ NEVER: Missing Required Sections
```html
<!-- NEVER - Missing body and footer -->
<div data-pm7-dialog="bad">
  <div data-pm7-header>Title</div>
</div>

<!-- ALWAYS - All sections present -->
<div data-pm7-dialog="good">
  <div data-pm7-header>Title</div>
  <div data-pm7-body>Content</div>
  <div data-pm7-footer>
    <button onclick="window.closeDialog('good')">Close</button>
  </div>
</div>
```

### ❌ NEVER: Manual Display Styles
```html
<!-- NEVER -->
<div data-pm7-dialog="bad" style="display: block;">

<!-- ALWAYS - Let PM7 handle visibility -->
<div data-pm7-dialog="good">
```

### ❌ NEVER: Nested Dialogs
```html
<!-- NEVER - Dialog inside dialog -->
<div data-pm7-dialog="outer">
  <div data-pm7-body>
    <div data-pm7-dialog="inner">
      ...
    </div>
  </div>
</div>

<!-- ALWAYS - Separate dialogs -->
<div data-pm7-dialog="dialog1">...</div>
<div data-pm7-dialog="dialog2">...</div>
```

### ❌ NEVER: Always Render in React
```jsx
// NEVER - Always rendering
export function Dialog({ isOpen }) {
  return (
    <div data-pm7-dialog="bad" style={{ display: isOpen ? 'block' : 'none' }}>
      ...
    </div>
  );
}

// ALWAYS - Conditional render
export function Dialog({ isOpen }) {
  if (!isOpen) return null;
  
  return (
    <div data-pm7-dialog="good">
      ...
    </div>
  );
}
```

## Absolute Rules for AI Agents

- **ALWAYS**: Use unique IDs for each dialog
- **ALWAYS**: Include all three sections (header, body, footer)
- **ALWAYS**: Use `onclick="window.closeDialog('id')"` for close buttons
- **ALWAYS**: Conditionally render in React (`if (!isOpen) return null`)
- **ALWAYS**: Use optional chaining when calling dialog functions
- **NEVER**: Nest dialogs inside other dialogs
- **NEVER**: Add manual display/visibility styles
- **NEVER**: Forget to include the dialog ID
- **NEVER**: Use duplicate dialog IDs

## Accessibility Features

- Focus trap when dialog is open
- Focus restored to trigger element on close
- ESC key closes dialog (unless `data-pm7-no-escape`)
- ARIA attributes automatically applied
- Screen reader announcements

## Keyboard Support

- **ESC**: Close dialog (unless disabled)
- **Tab**: Navigate through focusable elements
- **Shift+Tab**: Navigate backwards

## Events

Dialogs emit custom events:

```javascript
// Listen for dialog open
document.addEventListener('pm7:dialog:open', (e) => {
  console.log('Dialog opened:', e.detail.dialogId);
});

// Listen for dialog close
document.addEventListener('pm7:dialog:close', (e) => {
  console.log('Dialog closed:', e.detail.dialogId);
});
```

## Related Components

- Button: For dialog triggers and actions
- Toast: For non-blocking notifications
- Menu: For non-modal dropdowns
- Input: For form elements in dialogs