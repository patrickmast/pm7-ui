# Button

Buttons trigger actions. They communicate what will happen when users interact with them.

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
import { Button } from '@pm7/react';
import '@pm7/core/dist/pm7.css'; // Don't forget this!
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
<!-- Small (36px height) -->
<button class="pm7-button pm7-button--primary pm7-button--sm">Small</button>

<!-- Medium (40px height, default - no size class needed) -->
<button class="pm7-button pm7-button--primary">Medium</button>

<!-- Large (48px height) -->
<button class="pm7-button pm7-button--primary pm7-button--lg">Large</button>
```

### States

```html
<!-- Normal -->
<button class="pm7-button pm7-button--primary">Enabled</button>

<!-- Disabled -->
<button class="pm7-button pm7-button--primary" disabled>Disabled</button>

<!-- Active state: Button transforms 1px down on click for tactile feedback -->
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

## PM7 Special Features

### 6Stars Hover Effect

Primary buttons feature a unique "6stars" hover animation that creates a subtle sparkle effect, reinforcing the PM7 brand identity.

### Interactive Feedback

Buttons provide tactile feedback with a 1px downward transform on click, making interactions feel more responsive.

## CSS Customization

PM7 buttons can be customized using CSS custom properties:

```css
:root {
  /* Border radius */
  --pm7-button-radius: 0.375rem;
  
  /* Typography */
  --pm7-button-font-size: 0.875rem;
  --pm7-button-font-weight: 500;
  --pm7-button-line-height: 1.25rem;
  
  /* Spacing */
  --pm7-button-padding-y: 0.5rem;
  --pm7-button-padding-x: 1rem;
  
  /* Shadows */
  --pm7-button-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --pm7-button-shadow-hover: 0 4px 6px -1px rgb(0 0 0 / 0.1);
  --pm7-button-shadow-active: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --pm7-button-focus-shadow: 0 0 0 3px rgb(28 134 239 / 0.2);
}
```

## CSS Classes Reference

| Class | Description |
|-------|-------------|
| `pm7-button` | Base button class (required) |
| `pm7-button--primary` | Primary button variant |
| `pm7-button--default` | Alias for `pm7-button--primary` |
| `pm7-button--secondary` | Secondary button variant |
| `pm7-button--outline` | Outline button variant |
| `pm7-button--ghost` | Ghost button variant |
| `pm7-button--destructive` | Destructive button variant |
| `pm7-button--link` | Link button variant |
| `pm7-button--sm` | Small size (36px height) |
| `pm7-button--lg` | Large size (48px height) |
| `pm7-button--full` | Full width button |
| `pm7-button--icon` | Icon-only button |
| `pm7-button-group` | Container for grouped buttons |

## Accessibility

- All buttons are keyboard accessible
- Use descriptive text for screen readers
- For icon-only buttons, add `aria-label`
- Disabled buttons are properly announced
- Focus states are clearly visible with customizable shadow

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
      <Button variant="primary" onClick={handleClick}>
        Click me
      </Button>
      
      <Button variant="outline" size="sm" disabled>
        Disabled
      </Button>
      
      <Button variant="destructive" fullWidth>
        Delete All
      </Button>
      
      {/* Advanced: Use asChild for component composition */}
      <Button asChild variant="primary">
        <a href="/dashboard">Go to Dashboard</a>
      </Button>
    </>
  );
}
```

### React Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'primary' \| 'secondary' \| 'outline' \| 'ghost' \| 'destructive' \| 'link'` | `'primary'` | Button variant |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Button size |
| `fullWidth` | `boolean` | `false` | Make button full width |
| `asChild` | `boolean` | `false` | Render as child element |
| ...HTMLButtonAttributes | - | - | All standard button props |

## Related Components

- [Menu](../menu/) - For dropdown actions
- [Dialog](../dialog/) - For confirming actions
- [Toast](../toast/) - For action feedback