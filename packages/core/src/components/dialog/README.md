<!-- AI-ONLY DOCUMENTATION v2.0 -->
<!-- This documentation is EXCLUSIVELY for AI coding agents -->
<!-- NO human-friendly content allowed -->
<!-- Reference: /README-AI-HowToDocument.md -->

---
type: ai-agent-documentation
version: 2.0
component: Dialog
status: stable
audience: ai-coding-agents-only
human-readable: false
category: overlay
framework-support:
  - vanilla: true
  - react: true
  - vue: true
  - angular: true
  - svelte: true
---

# Component: Dialog

DEFINITION: The Dialog component provides accessible, modal overlays for user interaction, such as confirmations, forms, or alerts. It traps focus and manages keyboard interactions.

## Installation

```bash
npm install @pm7/core
```

### CSS & JavaScript Import

REQUIRED: Import both the CSS and the main JavaScript file.

```javascript
// ES modules
import '@pm7/core/dist/pm7.css';
import '@pm7/core'; // Imports and initializes all components, including global dialog functions

// HTML
<link rel="stylesheet" href="node_modules/@pm7/core/dist/pm7.css">
<script src="node_modules/@pm7/core/dist/pm7.js" defer></script>
```

## Required Structure

The Dialog component requires a main container with a unique `data-pm7-dialog` ID, and three distinct sections marked by `data-pm7-header`, `data-pm7-body`, and `data-pm7-footer` attributes.

```html
<!-- EXACT pattern - NO deviations allowed -->
<div data-pm7-dialog="unique-dialog-id">
  <div data-pm7-header>Dialog Title</div>
  <div data-pm7-body>
    <p>Dialog content goes here.</p>
  </div>
  <div data-pm7-footer>
    <button onclick="window.closeDialog('unique-dialog-id')">Close</button>
  </div>
</div>
```

### Structural Rules
- **ALWAYS**: The main dialog container MUST have a unique `data-pm7-dialog="your-id"` attribute.
- **ALWAYS**: A dialog MUST contain exactly one `div` with `data-pm7-header`, one `div` with `data-pm7-body`, and one `div` with `data-pm7-footer`.
- **ALWAYS**: Use `window.openDialog('your-id')` to open the dialog and `window.closeDialog('your-id')` to close it.
- **NEVER**: Manually apply `display: none` or `display: block` to control dialog visibility.

## JavaScript API

### Initialization
Dialogs are automatically initialized when the `pm7.js` script is loaded and they are present in the DOM. For dynamically added dialogs, `window.PM7.init()` must be called.

### Global Functions

```javascript
// Available globally after pm7.js is loaded
window.openDialog(id: string);
window.closeDialog(id: string);
window.closeAllDialogs();
```

| Function | Parameters | Return Type | Description |
|---|---|---|---|
| `window.openDialog` | `id: string` | `void` | Opens the dialog with the specified `data-pm7-dialog` ID. |
| `window.closeDialog` | `id: string` | `void` | Closes the dialog with the specified `data-pm7-dialog` ID. |
| `window.closeAllDialogs` | `(none)` | `void` | Closes all currently open dialogs. |

### Events

| Event | When | Detail | Bubbles |
|---|---|---|---|---|
| `pm7:dialog:open` | After a dialog opens | `{ dialogId: string }` | YES |
| `pm7:dialog:close` | After a dialog closes | `{ dialogId: string }` | YES |

## Attributes

See /docs/ATTRIBUTES.md for cross-component attribute relationships.

| Attribute | Component(s) | Values | Required | Effect |
|---|---|---|---|---|
| `data-pm7-dialog` | Dialog | unique string ID | YES | Initializes Dialog component; used for `openDialog`/`closeDialog`. |
| `data-pm7-dialog-size` | Dialog | `sm`, `md`, `lg`, `xl`, `full` | NO | Sets the width of the dialog. |
| `data-pm7-show-close` | Dialog | presence | NO | Displays a close (X) button in the dialog header. |
| `data-pm7-no-escape` | Dialog | presence | NO | Prevents closing the dialog with the ESC key. |
| `data-pm7-no-overlay-close` | Dialog | presence | NO | Prevents closing the dialog by clicking the overlay. |
| `data-pm7-header` | Dialog | presence | YES | Marks the header section of a dialog. |
| `data-pm7-body` | Dialog | presence | YES | Marks the body section of a dialog. |
| `data-pm7-footer` | Dialog | presence | YES | Marks the footer section of a dialog. |
| `data-state` | Dialog | `open`, `closed` | AUTO | Managed by JS to reflect component's open/closed state. |
| `aria-modal` | Dialog | `true` | AUTO | Indicates that an element is a modal dialog and disables interaction with other content. |
| `role` | Dialog | `dialog` | AUTO | Defines the purpose or nature of an element. |

## CSS Classes

| Class | Auto-Applied | Purpose |
|---|---|---|
| `.pm7-dialog` | YES | Base styling for the dialog content. |
| `.pm7-dialog-overlay` | YES | Styles the backdrop behind the dialog. |
| `.pm7-dialog-container` | YES | Positions the dialog centrally. |
| `.pm7-dialog-header` | YES | Styles the header section. |
| `.pm7-dialog-body` | YES | Styles the main content area. |
| `.pm7-dialog-footer` | YES | Styles the action button area. |
| `.pm7-dialog-close` | YES | Styles the auto-generated close button (if `data-pm7-show-close` is used). |

## Patterns

### Pattern: Basic Confirmation Dialog
```html
<button onclick="window.openDialog('confirm-delete')">Delete Item</button>

<div data-pm7-dialog="confirm-delete">
  <div data-pm7-header>Confirm Deletion</div>
  <div data-pm7-body>
    <p>Are you sure you want to delete this item? This action cannot be undone.</p>
  </div>
  <div data-pm7-footer>
    <button onclick="window.closeDialog('confirm-delete')">Cancel</button>
    <button onclick="performDelete()" class="pm7-button pm7-button--destructive">Delete</button>
  </div>
</div>

<script>
  function performDelete() {
    // Logic to delete item
    console.log('Item deleted!');
    window.closeDialog('confirm-delete');
  }
</script>
```

### Pattern: Dialog with Form Input
```html
<button onclick="window.openDialog('edit-profile')">Edit Profile</button>

<div data-pm7-dialog="edit-profile" data-pm7-dialog-size="md" data-pm7-show-close>
  <div data-pm7-header>Edit Your Profile</div>
  <form data-pm7-body id="profile-form">
    <div class="pm7-form-group">
      <label for="name" class="pm7-label">Name</label>
      <input type="text" id="name" name="name" class="pm7-input" required>
    </div>
    <div class="pm7-form-group">
      <label for="email" class="pm7-label">Email</label>
      <input type="email" id="email" name="email" class="pm7-input" required>
    </div>
  </form>
  <div data-pm7-footer>
    <button onclick="window.closeDialog('edit-profile')">Cancel</button>
    <button onclick="submitProfileForm()" class="pm7-button pm7-button--primary">Save Changes</button>
  </div>
</div>

<script>
  function submitProfileForm() {
    const form = document.getElementById('profile-form');
    if (form.checkValidity()) {
      const formData = new FormData(form);
      console.log('Form data:', Object.fromEntries(formData));
      window.closeDialog('edit-profile');
    } else {
      form.reportValidity();
    }
  }
</script>
```

### Pattern: Alert Dialog (Non-dismissible by ESC/Overlay)
```html
<button onclick="window.openDialog('critical-alert')">Show Alert</button>

<div data-pm7-dialog="critical-alert" data-pm7-dialog-size="sm" data-pm7-no-escape data-pm7-no-overlay-close>
  <div data-pm7-header>Important Alert</div>
  <div data-pm7-body>
    <p class="pm7-text-danger">Your session has expired. Please log in again.</p>
  </div>
  <div data-pm7-footer>
    <button onclick="window.closeDialog('critical-alert')" class="pm7-button pm7-button--primary">OK</button>
  </div>
</div>
```

## Anti-Patterns

### NEVER: Nest dialogs
```html
<!-- NEVER -->
<div data-pm7-dialog="outer-dialog">
  <div data-pm7-body>
    <div data-pm7-dialog="inner-dialog">...</div>
  </div>
</div>

<!-- BECAUSE -->
Nesting dialogs breaks focus management, accessibility, and can lead to unexpected visual stacking issues.

<!-- INSTEAD -->
// Use separate dialogs and open them sequentially if needed.
// For example, close the first dialog before opening the second.
```

### NEVER: Use duplicate `data-pm7-dialog` IDs
```html
<!-- NEVER -->
<div data-pm7-dialog="my-dialog">...</div>
<div data-pm7-dialog="my-dialog">...</div>

<!-- BECAUSE -->
Dialog functions (`openDialog`, `closeDialog`) rely on unique IDs to target specific dialogs. Duplicates will cause unpredictable behavior.

<!-- INSTEAD -->
<div data-pm7-dialog="my-first-dialog">...</div>
<div data-pm7-dialog="my-second-dialog">...</div>
```

### NEVER: Conditionally render dialogs without `null` check in frameworks
```jsx
// NEVER (React example)
function MyDialog({ isOpen }) {
  // This will cause issues as the dialog element is always in the DOM
  return (
    <div data-pm7-dialog="my-react-dialog" style={{ display: isOpen ? 'block' : 'none' }}>
      ...
    </div>
  );
}

// BECAUSE
PM7 Dialogs are designed to be added/removed from the DOM. Simply hiding them with CSS breaks their lifecycle and focus management.

// INSTEAD
function MyDialog({ isOpen }) {
  if (!isOpen) return null; // CRITICAL: Render null when not open
  return (
    <div data-pm7-dialog="my-react-dialog">
      ...
    </div>
  );
}
```

## Rules

### ALWAYS
- **ALWAYS**: Provide a unique `data-pm7-dialog` ID for every dialog.
- **ALWAYS**: Include `data-pm7-header`, `data-pm7-body`, and `data-pm7-footer` sections.
- **ALWAYS**: Use `window.openDialog()` and `window.closeDialog()` to control dialog visibility.
- **ALWAYS**: In frameworks like React/Vue, conditionally render the dialog component (return `null` when not open) to ensure proper DOM management.

### NEVER
- **NEVER**: Nest one dialog inside another.
- **NEVER**: Use duplicate `data-pm7-dialog` IDs.
- **NEVER**: Manually control dialog visibility using CSS `display` properties.
- **NEVER**: Forget to call `window.PM7.init()` if you add dialogs to the DOM dynamically after initial page load.

## CSS Variables

### Component-Specific Variables
Dialog does not define its own CSS variables. All styling is controlled through global PM7 design tokens.

### Required Global Variables

| Variable | Light Mode | Dark Mode | Usage in Dialog |
|----------|------------|-----------|-----------------|
| `--pm7-background` | `#ffffff` | `#121212` | Dialog content background |
| `--pm7-foreground` | `#000000` | `#e0e0e0` | Dialog title and body text |
| `--pm7-muted` | `#f5f5f5` | `#2d2d2d` | Footer background, close button hover |
| `--pm7-muted-foreground` | `#333333` | `#e6e6e6` | Dialog description text, close button icon |
| `--pm7-border` | `#e0e0e0` | `#444` | Dialog border, footer separator |
| `--pm7-radius-lg` | `0.75rem` | `0.75rem` | Dialog border radius |
| `--pm7-ring` | `#1C86EF` | `#3b9eff` | Focus ring for close button |
| `--pm7-spacing-4` | `1rem` | `1rem` | Close button position, mobile padding |
| `--pm7-spacing-6` | `1.5rem` | `1.5rem` | Header/body padding |
| `--pm7-error` | `#ef4444` | `#ef4444` | Alert dialog header background |
| `--pm7-error-foreground` | `#ffffff` | `#ffffff` | Alert dialog header text |
| `--pm7-success` | `#22c55e` | `#22c55e` | Success dialog header background |
| `--pm7-success-foreground` | `#ffffff` | `#ffffff` | Success dialog header text |
| `--pm7-primary` | `#1C86EF` | `#3b9eff` | Loading spinner color |

### Customization Example
```css
/* Custom branded dialog */
.my-app {
  --pm7-background: #f8f9fa;
  --pm7-foreground: #212529;
  --pm7-muted: #e9ecef;
  --pm7-border: #dee2e6;
  --pm7-radius-lg: 1rem;
}

/* Dark mode overrides */
.my-app.dark {
  --pm7-background: #1a1a1a;
  --pm7-foreground: #f8f9fa;
  --pm7-muted: #2d2d2d;
  --pm7-border: #495057;
}
```

## Cross-Component Dependencies

### Works With
- **Button**: Often used in dialog footers for actions (Save, Cancel, Delete)
- **Menu**: Can trigger dialogs from menu items via `onclick` handlers
- **Toast**: Show toast notifications after dialog actions complete
- **Input**: Form elements frequently used in dialog bodies

### Conflicts With
- **Tooltip**: NEVER use tooltips on dialog triggers or inside dialogs (focus management conflicts)
- **Sidebar**: Both use modal overlays - avoid opening simultaneously

## Accessibility

- **Focus**: Dialogs implement a focus trap, ensuring keyboard focus remains within the open dialog.
- **Keyboard**: `Escape` key closes the dialog (unless `data-pm7-no-escape` is present). `Tab` and `Shift+Tab` navigate within the dialog.
- **ARIA**: Dialogs automatically apply `role="dialog"`, `aria-modal="true"`, and manage `aria-labelledby` and `aria-describedby` if a title/description is present.
- **Screen reader**: Fully accessible to screen readers, announcing the modal nature and content.

## Complete Example: User Profile Management

SCENARIO: A user can view and edit their profile details through a dialog.

```html
<button onclick="window.openDialog('user-profile-dialog')">View/Edit Profile</button>

<div data-pm7-dialog="user-profile-dialog" data-pm7-dialog-size="lg" data-pm7-show-close>
  <div data-pm7-header>User Profile</div>
  <div data-pm7-body>
    <div class="pm7-form-group">
      <label for="profile-name" class="pm7-label">Name</label>
      <input type="text" id="profile-name" class="pm7-input" value="Jane Doe">
    </div>
    <div class="pm7-form-group">
      <label for="profile-email" class="pm7-label">Email</label>
      <input type="email" id="profile-email" class="pm7-input" value="jane.doe@example.com">
    </div>
    <div class="pm7-form-group">
      <label for="profile-bio" class="pm7-label">Bio</label>
      <textarea id="profile-bio" class="pm7-input" rows="4">Frontend developer with a passion for accessible UI.</textarea>
    </div>
  </div>
  <div data-pm7-footer>
    <button onclick="window.closeDialog('user-profile-dialog')">Cancel</button>
    <button onclick="saveProfile()" class="pm7-button pm7-button--primary">Save Changes</button>
  </div>
</div>

<script>
  function saveProfile() {
    const name = document.getElementById('profile-name').value;
    const email = document.getElementById('profile-email').value;
    const bio = document.getElementById('profile-bio').value;
    
    console.log('Saving profile:', { name, email, bio });
    window.closeDialog('user-profile-dialog');
    // Optionally show a toast notification
    // window.showToast({ title: 'Profile saved!', variant: 'success' });
  }
</script>
```
