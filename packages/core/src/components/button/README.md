# Button

Buttons trigger actions. They communicate what will happen when users interact with them.

## Installation

```bash
npm install @pm7/core
```

## Usage

### Basic Button

```html
<button class="pm7-button pm7-button--primary">
  Click me
</button>
```

### Variants

PM7 buttons come in several variants, each with a specific purpose:

```html
<!-- Primary: Main actions -->
<button class="pm7-button pm7-button--primary">Primary</button>

<!-- Secondary: Alternative actions -->
<button class="pm7-button pm7-button--secondary">Secondary</button>

<!-- Outline: Less prominent actions -->
<button class="pm7-button pm7-button--outline">Outline</button>

<!-- Ghost: Minimal styling -->
<button class="pm7-button pm7-button--ghost">Ghost</button>

<!-- Destructive: Dangerous actions -->
<button class="pm7-button pm7-button--destructive">Delete</button>

<!-- Link: Navigation styled as button -->
<button class="pm7-button pm7-button--link">Link</button>
```

### Sizes

Three sizes are available to fit different contexts:

```html
<!-- Small -->
<button class="pm7-button pm7-button--primary pm7-button--sm">Small</button>

<!-- Medium (default) -->
<button class="pm7-button pm7-button--primary pm7-button--md">Medium</button>

<!-- Large -->
<button class="pm7-button pm7-button--primary pm7-button--lg">Large</button>
```

### States

```html
<!-- Normal -->
<button class="pm7-button pm7-button--primary">Enabled</button>

<!-- Disabled -->
<button class="pm7-button pm7-button--primary" disabled>Disabled</button>

<!-- Loading (with spinner icon) -->
<button class="pm7-button pm7-button--primary" disabled>
  <svg class="pm7-spinner" width="16" height="16">...</svg>
  Loading...
</button>
```

### Full Width

Make a button span the full width of its container:

```html
<button class="pm7-button pm7-button--primary pm7-button--full">
  Full Width Button
</button>
```

### With Icons

Add icons to buttons for better visual communication:

```html
<!-- Icon on left -->
<button class="pm7-button pm7-button--primary">
  <svg width="16" height="16">...</svg>
  Add Item
</button>

<!-- Icon on right -->
<button class="pm7-button pm7-button--outline">
  Settings
  <svg width="16" height="16">...</svg>
</button>

<!-- Icon only -->
<button class="pm7-button pm7-button--ghost pm7-button--icon">
  <svg width="16" height="16">...</svg>
</button>
```

### Button Groups

Group related actions together:

```html
<div class="pm7-button-group">
  <button class="pm7-button pm7-button--outline">Left</button>
  <button class="pm7-button pm7-button--outline">Center</button>
  <button class="pm7-button pm7-button--outline">Right</button>
</div>
```

## CSS Classes Reference

| Class | Description |
|-------|-------------|
| `pm7-button` | Base button class (required) |
| `pm7-button--primary` | Primary button variant |
| `pm7-button--secondary` | Secondary button variant |
| `pm7-button--outline` | Outline button variant |
| `pm7-button--ghost` | Ghost button variant |
| `pm7-button--destructive` | Destructive button variant |
| `pm7-button--link` | Link button variant |
| `pm7-button--sm` | Small size |
| `pm7-button--md` | Medium size (default) |
| `pm7-button--lg` | Large size |
| `pm7-button--full` | Full width button |
| `pm7-button--icon` | Icon-only button |
| `pm7-button-group` | Container for grouped buttons |

## Accessibility

- All buttons are keyboard accessible
- Use descriptive text for screen readers
- For icon-only buttons, add `aria-label`
- Disabled buttons have `aria-disabled="true"`
- Focus states are clearly visible

## Best Practices

1. **Be descriptive**: Use clear, action-oriented text (e.g., "Save Changes" not just "Save")
2. **Limit options**: Too many buttons can overwhelm users
3. **Primary action**: Only one primary button per section
4. **Dangerous actions**: Use destructive variant for delete/remove actions
5. **Icon usage**: Icons should enhance, not replace, text labels

## Examples

### Form Actions

```html
<form>
  <!-- Form fields -->
  
  <div class="pm7-form-actions">
    <button type="button" class="pm7-button pm7-button--outline">
      Cancel
    </button>
    <button type="submit" class="pm7-button pm7-button--primary">
      Save Changes
    </button>
  </div>
</form>
```

### Confirmation Dialog

```html
<div class="pm7-dialog-footer">
  <button class="pm7-button pm7-button--ghost">
    Cancel
  </button>
  <button class="pm7-button pm7-button--destructive">
    Delete Account
  </button>
</div>
```

### Navigation Actions

```html
<div class="pm7-button-group">
  <button class="pm7-button pm7-button--outline pm7-button--sm">
    <svg>...</svg>
    Previous
  </button>
  <button class="pm7-button pm7-button--outline pm7-button--sm">
    Next
    <svg>...</svg>
  </button>
</div>
```

## React Usage

When using @pm7/react:

```jsx
import { Button } from '@pm7/react';

function MyComponent() {
  return (
    <>
      <Button variant="primary" size="md" onClick={handleClick}>
        Click me
      </Button>
      
      <Button variant="outline" disabled>
        Disabled
      </Button>
      
      <Button variant="destructive" fullWidth>
        Delete All
      </Button>
    </>
  );
}
```

## Related Components

- [Menu](../menu/) - For dropdown actions
- [Dialog](../dialog/) - For confirming actions
- [Toast](../toast/) - For action feedback