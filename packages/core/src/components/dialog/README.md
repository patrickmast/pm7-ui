---
# MANDATORY METADATA
type: ai-agent-documentation
version: 2.0
component: Dialog
status: stable
audience: ai-coding-agents-only
human-readable: false

# COMPONENT METADATA
category: overlay
dependencies:
  - component: button (for actions)
  - component: input (for forms)
  - external: none
framework-support:
  - vanilla: true
  - react: true
  - vue: true
  - angular: true
  - svelte: true

# IMPLEMENTATION METADATA
initialization:
  auto: true
  manual: false
  import-required: true
css-prefix: pm7-dialog
data-attribute: data-pm7-dialog
javascript-class: none (uses global functions)
---

# Component: Dialog

DEFINITION: Dialog = HTML div element with data-pm7-dialog="unique-id" attribute containing header, body, and footer sections
PURPOSE: Display modal overlays for user interaction
IMPORT: window object functions via @pm7/core

## Installation

```bash
npm install @pm7/core
```

THEN:
```html
<script src="/node_modules/@pm7/core/dist/pm7.min.js"></script>
<link rel="stylesheet" href="/node_modules/@pm7/core/dist/pm7.min.css">
```

OR:
```javascript
import '@pm7/core'
import '@pm7/core/dist/pm7.min.css'

// TypeScript declarations
declare global {
  interface Window {
    openDialog: (id: string) => void;
    closeDialog: (id: string) => void;
    closeAllDialogs: () => void;
  }
}
```

## Required Structure

MINIMAL:
```html
<div data-pm7-dialog="my-dialog">
  <div data-pm7-header>Title</div>
  <div data-pm7-body>Content</div>
  <div data-pm7-footer>
    <button onclick="window.closeDialog('my-dialog')">Close</button>
  </div>
</div>

<button onclick="window.openDialog('my-dialog')">Open Dialog</button>
```

COMPLETE:
```html
<div 
  data-pm7-dialog="unique-id"
  data-pm7-dialog-size="sm|md|lg|xl|full"
  data-pm7-show-close
  data-pm7-no-escape
  data-pm7-no-overlay-close>
  <div data-pm7-header>Dialog Title</div>
  <div data-pm7-body>
    <!-- Main content -->
  </div>
  <div data-pm7-footer>
    <button onclick="window.closeDialog('unique-id')">Cancel</button>
    <button onclick="handleAction()">Confirm</button>
  </div>
</div>
```

## Initialization

IF auto-init:
  CONDITION: window.PM7 loaded AND dialog element exists in DOM
  TRIGGER: Automatic on library load
  ACTION: Dialog ready for openDialog/closeDialog calls
  RESULT: Dialog functional immediately

IF dynamic-content:
  ```javascript
  // Add dialog to DOM
  document.body.insertAdjacentHTML('beforeend', `
    <div data-pm7-dialog="dynamic">
      <div data-pm7-header>Dynamic Dialog</div>
      <div data-pm7-body>Content</div>
      <div data-pm7-footer>
        <button onclick="window.closeDialog('dynamic')">Close</button>
      </div>
    </div>
  `);
  
  // No initialization needed - auto-detected
  window.openDialog('dynamic');
  ```

NEVER:
  - Manually show/hide with CSS
  - Nest dialogs within dialogs
  - Use duplicate dialog IDs
  - Forget required sections

## Rules

### Rule: Unique ID Required
IF creating dialog
THEN MUST have unique data-pm7-dialog="unique-id"
ELSE dialog functions will fail

EXAMPLE:
```html
<!-- IF creating dialog -->
<div data-pm7-dialog="user-edit-123">
  <!-- content -->
</div>

<!-- ELSE NEVER duplicate IDs -->
<div data-pm7-dialog="dialog">...</div>
<div data-pm7-dialog="dialog">...</div> <!-- FAILS -->
```

### Rule: Three Sections Required
IF dialog element
THEN MUST contain ALL: data-pm7-header, data-pm7-body, data-pm7-footer
ELSE dialog structure broken

EXAMPLE:
```html
<!-- IF valid dialog -->
<div data-pm7-dialog="complete">
  <div data-pm7-header>Title</div>
  <div data-pm7-body>Content</div>
  <div data-pm7-footer>Actions</div>
</div>

<!-- ELSE NEVER partial -->
<div data-pm7-dialog="incomplete">
  <div data-pm7-header>Title</div>
  <!-- Missing body and footer -->
</div>
```

### Rule: Close Button Handler
IF close button in dialog
THEN MUST use onclick="window.closeDialog('dialog-id')"
ELSE dialog won't close properly

EXAMPLE:
```html
<!-- IF close button -->
<button onclick="window.closeDialog('my-dialog')">Close</button>

<!-- ELSE NEVER custom close -->
<button onclick="document.querySelector('[data-pm7-dialog]').style.display='none'">Bad</button>
```

### Rule: Conditional Rendering
IF using React/Vue/Angular
THEN MUST conditionally render based on open state
ELSE dialog initialization breaks

EXAMPLE:
```jsx
<!-- IF React component -->
function Dialog({ isOpen }) {
  if (!isOpen) return null; // CRITICAL
  
  return (
    <div data-pm7-dialog="react-dialog">
      <!-- content -->
    </div>
  );
}

<!-- ELSE NEVER always render -->
function BadDialog({ isOpen }) {
  return (
    <div data-pm7-dialog="bad" style={{ display: isOpen ? 'block' : 'none' }}>
      <!-- DON'T DO THIS -->
    </div>
  );
}
```

### Rule: Size Variants
IF specific width needed
THEN use data-pm7-dialog-size="sm|md|lg|xl|full"
ELSE default to md (600px)

EXAMPLE:
```html
<!-- IF small alert -->
<div data-pm7-dialog="alert" data-pm7-dialog-size="sm">

<!-- IF large content -->
<div data-pm7-dialog="terms" data-pm7-dialog-size="lg">

<!-- IF fullscreen -->
<div data-pm7-dialog="editor" data-pm7-dialog-size="full">
```

## Patterns

### Pattern: Basic Dialog
WHEN: Simple confirmation or message
USE:
```html
<div data-pm7-dialog="confirm-action">
  <div data-pm7-header>Confirm Action</div>
  <div data-pm7-body>
    <p>Are you sure you want to proceed?</p>
  </div>
  <div data-pm7-footer>
    <button onclick="window.closeDialog('confirm-action')">Cancel</button>
    <button onclick="confirmAndClose()" class="pm7-button pm7-button--primary">Confirm</button>
  </div>
</div>

<script>
function confirmAndClose() {
  // Perform action
  console.log('Confirmed');
  window.closeDialog('confirm-action');
}
</script>
```

RESULT: Modal dialog with confirmation options

### Pattern: Form Dialog
WHEN: User input needed
USE:
```html
<div data-pm7-dialog="user-form" data-pm7-dialog-size="md" data-pm7-show-close>
  <div data-pm7-header>Edit User</div>
  <form data-pm7-body id="user-form-content">
    <div class="pm7-form-group">
      <label class="pm7-label">Name</label>
      <input type="text" class="pm7-input" name="name" required>
    </div>
    <div class="pm7-form-group">
      <label class="pm7-label">Email</label>
      <input type="email" class="pm7-input" name="email" required>
    </div>
  </form>
  <div data-pm7-footer>
    <button onclick="window.closeDialog('user-form')">Cancel</button>
    <button onclick="submitForm()" class="pm7-button pm7-button--primary">Save</button>
  </div>
</div>

<script>
function submitForm() {
  const form = document.getElementById('user-form-content');
  if (form.checkValidity()) {
    const formData = new FormData(form);
    // Process form data
    window.closeDialog('user-form');
  }
}
</script>
```

RESULT: Form dialog with validation

### Pattern: Alert Dialog
WHEN: Important message requiring acknowledgment
USE:
```html
<div data-pm7-dialog="error-alert" data-pm7-dialog-size="sm" data-pm7-no-escape data-pm7-no-overlay-close>
  <div data-pm7-header>Error</div>
  <div data-pm7-body>
    <p class="pm7-text-danger">Failed to save changes. Please try again.</p>
  </div>
  <div data-pm7-footer>
    <button onclick="window.closeDialog('error-alert')" class="pm7-button pm7-button--primary">OK</button>
  </div>
</div>
```

RESULT: Small alert dialog that requires button click to close

### Pattern: Loading Dialog
WHEN: Async operation in progress
USE:
```html
<div data-pm7-dialog="loading" data-pm7-dialog-size="sm" data-pm7-no-escape data-pm7-no-overlay-close>
  <div data-pm7-header>Processing</div>
  <div data-pm7-body style="text-align: center;">
    <div class="pm7-spinner"></div>
    <p>Please wait...</p>
  </div>
  <div data-pm7-footer style="display: none;">
    <!-- No actions during loading -->
  </div>
</div>

<script>
async function performAction() {
  window.openDialog('loading');
  try {
    await someAsyncOperation();
  } finally {
    window.closeDialog('loading');
  }
}
</script>
```

RESULT: Non-closeable loading indicator

## Anti-Patterns

### Anti-Pattern: Missing Required Sections
NEVER:
```html
<div data-pm7-dialog="incomplete">
  <div data-pm7-header>Title</div>
  <!-- Missing body and footer -->
</div>
```

BECAUSE: Dialog structure requires all three sections for proper layout and accessibility
INSTEAD:
```html
<div data-pm7-dialog="complete">
  <div data-pm7-header>Title</div>
  <div data-pm7-body>
    <p>Content is required even if minimal</p>
  </div>
  <div data-pm7-footer>
    <button onclick="window.closeDialog('complete')">Close</button>
  </div>
</div>
```

### Anti-Pattern: Manual Visibility Control
NEVER:
```html
<div data-pm7-dialog="manual" style="display: block;">
  <!-- Content -->
</div>

<script>
// Don't manually control visibility
document.querySelector('[data-pm7-dialog="manual"]').style.display = 'none';
</script>
```

BECAUSE: PM7 manages dialog state, z-index stacking, focus trap, and animations
INSTEAD:
```html
<div data-pm7-dialog="proper">
  <!-- Content -->
</div>

<script>
// Use provided API
window.openDialog('proper');
window.closeDialog('proper');
</script>
```

### Anti-Pattern: Nested Dialogs
NEVER:
```html
<div data-pm7-dialog="parent">
  <div data-pm7-body>
    <div data-pm7-dialog="nested">
      <!-- Don't nest dialogs -->
    </div>
  </div>
</div>
```

BECAUSE: Creates z-index issues, breaks focus management, and confuses screen readers
INSTEAD:
```html
<!-- Separate dialogs -->
<div data-pm7-dialog="dialog1">
  <div data-pm7-body>
    <button onclick="window.openDialog('dialog2')">Open Next</button>
  </div>
</div>

<div data-pm7-dialog="dialog2">
  <!-- Second dialog content -->
</div>
```

### Anti-Pattern: Duplicate Dialog IDs
NEVER:
```html
<div data-pm7-dialog="user-edit">...</div>
<!-- Somewhere else in the app -->
<div data-pm7-dialog="user-edit">...</div>
```

BECAUSE: ID conflicts prevent proper dialog targeting
INSTEAD:
```html
<!-- Use unique, descriptive IDs -->
<div data-pm7-dialog="user-edit-modal">...</div>
<div data-pm7-dialog="user-edit-profile">...</div>
<!-- Or with dynamic IDs -->
<div data-pm7-dialog="user-edit-123">...</div>
```

### Anti-Pattern: Always Rendering in Frameworks
NEVER:
```jsx
// React - Always rendering with display control
function Dialog({ isOpen }) {
  return (
    <div data-pm7-dialog="always-rendered" style={{ display: isOpen ? 'block' : 'none' }}>
      {/* Content */}
    </div>
  );
}
```

BECAUSE: Breaks PM7's initialization and state management
INSTEAD:
```jsx
// Conditional rendering
function Dialog({ isOpen, onClose }) {
  useEffect(() => {
    if (isOpen) {
      window.openDialog?.('conditional-dialog');
    }
  }, [isOpen]);

  if (!isOpen) return null; // Critical!

  return (
    <div data-pm7-dialog="conditional-dialog">
      <div data-pm7-header>Title</div>
      <div data-pm7-body>Content</div>
      <div data-pm7-footer>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}
```

### Anti-Pattern: Inline Styles on Dialog
NEVER:
```html
<div data-pm7-dialog="styled" style="width: 800px; height: 600px; padding: 20px;">
  <!-- Don't apply direct styles -->
</div>
```

BECAUSE: Conflicts with PM7's responsive sizing and theming system
INSTEAD:
```html
<!-- Use size variants -->
<div data-pm7-dialog="properly-sized" data-pm7-dialog-size="lg">
  <!-- Content -->
</div>

<!-- Or style the content -->
<div data-pm7-dialog="styled-content">
  <div data-pm7-body>
    <div style="min-height: 400px;">
      <!-- Style content, not dialog -->
    </div>
  </div>
</div>
```

## Attributes

| Attribute | Type | Values | Default | Required | Effect |
|-----------|------|--------|---------|----------|---------|
| `data-pm7-dialog` | string | unique ID | - | YES | Dialog identifier for open/close functions |
| `data-pm7-dialog-size` | string | `sm`\|`md`\|`lg`\|`xl`\|`full` | `md` | NO | Sets dialog width |
| `data-pm7-show-close` | boolean | presence | - | NO | Shows X button in header |
| `data-pm7-no-escape` | boolean | presence | - | NO | Disables ESC key closing |
| `data-pm7-no-overlay-close` | boolean | presence | - | NO | Disables click-outside closing |
| `data-pm7-header` | boolean | presence | - | YES | Marks header section |
| `data-pm7-body` | boolean | presence | - | YES | Marks body section |
| `data-pm7-footer` | boolean | presence | - | YES | Marks footer section |

> **Note**: For complete PM7 data attribute reference, see [ATTRIBUTES.md](../../ATTRIBUTES.md).

## CSS Classes

| Class | Purpose | Combinable | Parent Required |
|-------|---------|------------|------------------|
| .pm7-dialog | Auto-applied to dialog | NO | NO |
| .pm7-dialog-overlay | Auto-applied to backdrop | NO | NO |
| .pm7-dialog-container | Auto-applied wrapper | NO | NO |
| .pm7-dialog-header | Auto-applied to header | NO | YES |
| .pm7-dialog-body | Auto-applied to body | NO | YES |
| .pm7-dialog-footer | Auto-applied to footer | NO | YES |
| .pm7-dialog-close | Auto-applied to X button | NO | YES |

## JavaScript API

### Global Functions

| Function | Parameters | Returns | Throws | Description |
|----------|------------|---------|--------|-------------|
| `window.openDialog(id)` | `id: string` | `void` | Never | Opens dialog with specified ID |
| `window.closeDialog(id)` | `id: string` | `void` | Never | Closes dialog with specified ID |
| `window.closeAllDialogs()` | none | `void` | Never | Closes all open dialogs |

#### Function Details

**openDialog(id)**
```javascript
// Opens a specific dialog
window.openDialog('user-edit');

// Safe usage with optional chaining
window.openDialog?.('user-edit');

// With existence check
if (window.openDialog) {
  window.openDialog('user-edit');
}
```

**closeDialog(id)**
```javascript
// Close specific dialog
window.closeDialog('user-edit');

// In event handler
<button onclick="window.closeDialog('user-edit')">Close</button>

// In async function
async function saveAndClose() {
  await saveData();
  window.closeDialog('user-edit');
}
```

**closeAllDialogs()**
```javascript
// Close all open dialogs
window.closeAllDialogs();

// Useful for route changes
router.beforeEach(() => {
  window.closeAllDialogs?.();
});
```

### Events

| Event | Bubbles | Cancelable | Detail Schema | Description |
|-------|---------|------------|---------------|-------------|
| `pm7:dialog:open` | YES | NO | `{dialogId: string}` | Fired when dialog opens |
| `pm7:dialog:close` | YES | NO | `{dialogId: string}` | Fired when dialog closes |

#### Event Usage Examples

```javascript
// Listen for any dialog open
document.addEventListener('pm7:dialog:open', (e) => {
  console.log('Dialog opened:', e.detail.dialogId);
  // Track analytics, pause video, etc.
});

// Listen for specific dialog close
document.addEventListener('pm7:dialog:close', (e) => {
  if (e.detail.dialogId === 'user-edit') {
    console.log('User edit dialog closed');
    // Refresh data, clear form, etc.
  }
});
```

## Complete Examples in Context

### Example: Full Application with Multiple Dialogs
SCENARIO: User management interface with view, edit, and delete dialogs
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <link rel="stylesheet" href="/node_modules/@pm7/core/dist/pm7.min.css">
  <title>User Management</title>
</head>
<body>
  <div class="pm7-container">
    <h1>User Management</h1>
    
    <table class="pm7-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>John Doe</td>
          <td>john@example.com</td>
          <td>
            <button onclick="viewUser(1)" class="pm7-button pm7-button--sm">View</button>
            <button onclick="editUser(1)" class="pm7-button pm7-button--sm">Edit</button>
            <button onclick="confirmDelete(1)" class="pm7-button pm7-button--sm pm7-button--destructive">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>

  <!-- View User Dialog -->
  <div data-pm7-dialog="view-user" data-pm7-dialog-size="md" data-pm7-show-close>
    <div data-pm7-header>User Details</div>
    <div data-pm7-body>
      <dl class="pm7-description-list">
        <dt>Name</dt>
        <dd id="view-name">-</dd>
        <dt>Email</dt>
        <dd id="view-email">-</dd>
        <dt>Joined</dt>
        <dd id="view-joined">-</dd>
      </dl>
    </div>
    <div data-pm7-footer>
      <button onclick="window.closeDialog('view-user')">Close</button>
      <button onclick="editUser(currentUserId)" class="pm7-button pm7-button--primary">Edit User</button>
    </div>
  </div>

  <!-- Edit User Dialog -->
  <div data-pm7-dialog="edit-user" data-pm7-dialog-size="md" data-pm7-show-close>
    <div data-pm7-header>Edit User</div>
    <form data-pm7-body id="edit-user-form">
      <div class="pm7-form-group">
        <label class="pm7-label" for="edit-name">Name</label>
        <input type="text" class="pm7-input" id="edit-name" name="name" required>
      </div>
      <div class="pm7-form-group">
        <label class="pm7-label" for="edit-email">Email</label>
        <input type="email" class="pm7-input" id="edit-email" name="email" required>
      </div>
      <div class="pm7-form-group">
        <label class="pm7-label" for="edit-role">Role</label>
        <select class="pm7-select" id="edit-role" name="role">
          <option value="user">User</option>
          <option value="admin">Admin</option>
        </select>
      </div>
    </form>
    <div data-pm7-footer>
      <button onclick="window.closeDialog('edit-user')">Cancel</button>
      <button onclick="saveUser()" class="pm7-button pm7-button--primary">Save Changes</button>
    </div>
  </div>

  <!-- Delete Confirmation Dialog -->
  <div data-pm7-dialog="delete-confirm" data-pm7-dialog-size="sm" data-pm7-no-escape data-pm7-no-overlay-close>
    <div data-pm7-header>Confirm Delete</div>
    <div data-pm7-body>
      <p class="pm7-text-danger">Are you sure you want to delete this user?</p>
      <p>This action cannot be undone.</p>
    </div>
    <div data-pm7-footer>
      <button onclick="window.closeDialog('delete-confirm')">Cancel</button>
      <button onclick="deleteUser()" class="pm7-button pm7-button--destructive">Delete User</button>
    </div>
  </div>

  <!-- Success Toast-like Dialog -->
  <div data-pm7-dialog="success-message" data-pm7-dialog-size="sm">
    <div data-pm7-header>Success</div>
    <div data-pm7-body>
      <p id="success-text">Operation completed successfully!</p>
    </div>
    <div data-pm7-footer>
      <button onclick="window.closeDialog('success-message')" class="pm7-button pm7-button--primary">OK</button>
    </div>
  </div>

  <script src="/node_modules/@pm7/core/dist/pm7.min.js"></script>
  <script>
    let currentUserId = null;

    function viewUser(id) {
      currentUserId = id;
      // Fetch and display user data
      fetch(`/api/users/${id}`)
        .then(res => res.json())
        .then(user => {
          document.getElementById('view-name').textContent = user.name;
          document.getElementById('view-email').textContent = user.email;
          document.getElementById('view-joined').textContent = new Date(user.joined).toLocaleDateString();
          window.openDialog('view-user');
        });
    }

    function editUser(id) {
      currentUserId = id;
      window.closeDialog('view-user'); // Close view dialog if open
      
      // Fetch and populate form
      fetch(`/api/users/${id}`)
        .then(res => res.json())
        .then(user => {
          document.getElementById('edit-name').value = user.name;
          document.getElementById('edit-email').value = user.email;
          document.getElementById('edit-role').value = user.role;
          window.openDialog('edit-user');
        });
    }

    function saveUser() {
      const form = document.getElementById('edit-user-form');
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }

      const formData = new FormData(form);
      const userData = Object.fromEntries(formData);

      fetch(`/api/users/${currentUserId}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(userData)
      })
      .then(res => res.json())
      .then(() => {
        window.closeDialog('edit-user');
        showSuccess('User updated successfully!');
        refreshTable();
      });
    }

    function confirmDelete(id) {
      currentUserId = id;
      window.openDialog('delete-confirm');
    }

    function deleteUser() {
      fetch(`/api/users/${currentUserId}`, { method: 'DELETE' })
        .then(() => {
          window.closeDialog('delete-confirm');
          showSuccess('User deleted successfully!');
          refreshTable();
        });
    }

    function showSuccess(message) {
      document.getElementById('success-text').textContent = message;
      window.openDialog('success-message');
      
      // Auto-close after 3 seconds
      setTimeout(() => {
        window.closeDialog('success-message');
      }, 3000);
    }

    function refreshTable() {
      // Reload table data
      location.reload(); // Simple refresh for demo
    }
  </script>
</body>
</html>
```

RESULT: Complete user management system with view, edit, and delete dialogs

### Example: React Dialog System
SCENARIO: React component with multiple dialog states
```jsx
import React, { useState, useEffect } from 'react';
import '@pm7/core/dist/pm7.min.css';
import '@pm7/core';

function UserManager() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [dialogState, setDialogState] = useState({
    view: false,
    edit: false,
    delete: false
  });

  // Dialog component
  function UserDialog({ type, user, isOpen, onClose }) {
    useEffect(() => {
      if (isOpen) {
        window.openDialog?.(`user-${type}`);
      } else {
        window.closeDialog?.(`user-${type}`);
      }
    }, [isOpen, type]);

    if (!isOpen) return null;

    return (
      <div data-pm7-dialog={`user-${type}`} data-pm7-dialog-size="md" data-pm7-show-close>
        <div data-pm7-header>
          {type === 'view' && 'User Details'}
          {type === 'edit' && 'Edit User'}
          {type === 'delete' && 'Confirm Delete'}
        </div>
        <div data-pm7-body>
          {type === 'view' && (
            <div>
              <p><strong>Name:</strong> {user?.name}</p>
              <p><strong>Email:</strong> {user?.email}</p>
            </div>
          )}
          {type === 'edit' && (
            <form id="edit-form">
              <div className="pm7-form-group">
                <label className="pm7-label">Name</label>
                <input type="text" className="pm7-input" defaultValue={user?.name} name="name" />
              </div>
              <div className="pm7-form-group">
                <label className="pm7-label">Email</label>
                <input type="email" className="pm7-input" defaultValue={user?.email} name="email" />
              </div>
            </form>
          )}
          {type === 'delete' && (
            <p className="pm7-text-danger">
              Are you sure you want to delete {user?.name}?
            </p>
          )}
        </div>
        <div data-pm7-footer>
          <button onClick={onClose}>
            {type === 'delete' ? 'Cancel' : 'Close'}
          </button>
          {type === 'edit' && (
            <button onClick={() => handleSave(user.id)} className="pm7-button pm7-button--primary">
              Save
            </button>
          )}
          {type === 'delete' && (
            <button onClick={() => handleDelete(user.id)} className="pm7-button pm7-button--destructive">
              Delete
            </button>
          )}
        </div>
      </div>
    );
  }

  function handleSave(userId) {
    const form = document.getElementById('edit-form');
    const formData = new FormData(form);
    // Save logic here
    setDialogState({ ...dialogState, edit: false });
  }

  function handleDelete(userId) {
    // Delete logic here
    setDialogState({ ...dialogState, delete: false });
  }

  return (
    <div className="pm7-container">
      <h1>Users</h1>
      <table className="pm7-table">
        <tbody>
          {users.map(user => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>
                <button 
                  onClick={() => {
                    setSelectedUser(user);
                    setDialogState({ ...dialogState, view: true });
                  }}
                  className="pm7-button pm7-button--sm"
                >
                  View
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Dialogs */}
      <UserDialog 
        type="view" 
        user={selectedUser} 
        isOpen={dialogState.view}
        onClose={() => setDialogState({ ...dialogState, view: false })}
      />
      <UserDialog 
        type="edit" 
        user={selectedUser} 
        isOpen={dialogState.edit}
        onClose={() => setDialogState({ ...dialogState, edit: false })}
      />
      <UserDialog 
        type="delete" 
        user={selectedUser} 
        isOpen={dialogState.delete}
        onClose={() => setDialogState({ ...dialogState, delete: false })}
      />
    </div>
  );
}
```

RESULT: React component with properly managed dialog states

## Cross-Component Dependencies

### Required for Common Patterns

| Pattern | Required Components | Example |
|---------|-------------------|---------|
| Form Dialogs | pm7-input, pm7-label, pm7-form-group | `<input class="pm7-input">` |
| Action Buttons | pm7-button | `<button class="pm7-button pm7-button--primary">` |
| Loading States | pm7-spinner | `<div class="pm7-spinner"></div>` |
| Alerts | pm7-text utilities | `<p class="pm7-text-danger">` |
| Lists in Dialogs | pm7-list | `<ul class="pm7-list">` |

### CSS Variable Dependencies

Dialogs inherit these CSS variables from the PM7 theme:
- `--pm7-dialog-background`: Dialog background color
- `--pm7-dialog-foreground`: Text color
- `--pm7-overlay-background`: Backdrop color
- `--pm7-border`: Border color
- `--pm7-radius`: Border radius
- `--pm7-dialog-shadow`: Dialog shadow
- `--pm7-primary`: Primary button color

### JavaScript Dependencies

Dialog component requires:
- PM7 core library loaded (`window.PM7`)
- Global functions available (`window.openDialog`, etc.)
- DOM ready for auto-initialization

### Size Specifications

| Size | Width | Use Case |
|------|-------|----------|
| `sm` | 400px | Alerts, confirmations |
| `md` | 600px | Forms, standard content (default) |
| `lg` | 800px | Complex forms, detailed content |
| `xl` | 1000px | Tables, large content |
| `full` | 95vw | Full-screen editors, maximized view |

### Accessibility Features

Built-in accessibility:
- Focus trap when open
- Focus restoration on close
- ESC key handling (unless disabled)
- ARIA attributes (role, aria-modal, aria-labelledby)
- Screen reader announcements
- Keyboard navigation

## Related Components

- **Button**: For dialog triggers and actions
- **Input**: For form elements in dialogs
- **Toast**: For non-blocking notifications (alternative to alert dialogs)
- **Menu**: For non-modal dropdowns
- **Card**: For dialog content structure
- **Spinner**: For loading states
- **Form Elements**: For complex dialog forms

## Validation Checklist

STRUCTURE:
- [ ] Has unique data-pm7-dialog ID
- [ ] Contains all three sections (header, body, footer)
- [ ] Close buttons use window.closeDialog()
- [ ] No nested dialogs

IMPLEMENTATION:
- [ ] Conditional rendering in frameworks
- [ ] No manual visibility control
- [ ] Proper size variant used
- [ ] Event handlers attached

ACCESSIBILITY:
- [ ] Keyboard navigation works
- [ ] ESC closes (unless disabled)
- [ ] Focus trap active
- [ ] Screen reader compatible

BEHAVIOR:
- [ ] Opens with openDialog()
- [ ] Closes with closeDialog()
- [ ] Multiple dialogs work correctly
- [ ] Z-index stacking correct