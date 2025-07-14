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

<!-- Slider: Swipe-to-confirm actions -->
<button class="pm7-button pm7-button--slider">
  <span class="pm7-button--slider-text">Slide to confirm</span>
  <span class="pm7-button--slider-handle"></span>
</button>
```

### Gradient Borders

Add eye-catching gradient borders to buttons:

```html
<!-- Default gradient border -->
<button class="pm7-button pm7-gradient-border">Gradient Border</button>

<!-- With button variants -->
<button class="pm7-button pm7-button--primary pm7-gradient-border">Primary Gradient</button>
<button class="pm7-button pm7-button--outline pm7-gradient-border">Outline Gradient</button>

<!-- Different gradient colors -->
<button class="pm7-button pm7-gradient-border pm7-gradient-border-blue">Blue Gradient</button>
<button class="pm7-button pm7-gradient-border pm7-gradient-border-green">Green Gradient</button>
<button class="pm7-button pm7-gradient-border pm7-gradient-border-red">Red Gradient</button>

<!-- Different border thicknesses -->
<button class="pm7-button pm7-gradient-border pm7-gradient-border-2">2px Border</button>
<button class="pm7-button pm7-gradient-border pm7-gradient-border-4">4px Border</button>
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

### On Dark Backgrounds

When placing outline or ghost buttons on dark backgrounds in light mode, use the `--on-dark` modifier for proper contrast:

```html
<!-- Outline button on dark background -->
<button class="pm7-button pm7-button--outline pm7-button--on-dark">
  Light Text
</button>

<!-- Ghost button on dark background -->
<button class="pm7-button pm7-button--ghost pm7-button--on-dark">
  Light Text
</button>

<!-- Also works with links styled as buttons -->
<a href="#" class="pm7-button pm7-button--outline pm7-button--on-dark">
  Navigate
</a>
```

**Note**: This modifier is only needed in light mode. In dark mode, buttons automatically have appropriate contrast.

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

### Slider Button

The slider button provides a swipe-to-confirm interaction, perfect for preventing accidental clicks on critical actions:

```html
<!-- Basic slider button -->
<button class="pm7-button pm7-button--slider">
  <span class="pm7-button--slider-text">Slide to confirm</span>
  <span class="pm7-button--slider-handle"></span>
</button>

<!-- Small slider button -->
<button class="pm7-button pm7-button--slider pm7-button--sm">
  <span class="pm7-button--slider-text">Slide to delete</span>
  <span class="pm7-button--slider-handle"></span>
</button>

<!-- Large slider button -->
<button class="pm7-button pm7-button--slider pm7-button--lg">
  <span class="pm7-button--slider-text">Slide to submit order</span>
  <span class="pm7-button--slider-handle"></span>
</button>

<!-- Disabled slider button -->
<button class="pm7-button pm7-button--slider" disabled>
  <span class="pm7-button--slider-text">Processing...</span>
  <span class="pm7-button--slider-handle"></span>
</button>
```

#### Slider Button Events

```javascript
// Listen for slider completion
document.querySelector('.pm7-button--slider').addEventListener('pm7:slider:complete', (e) => {
  console.log('Slider completed!', e.detail.button);
  
  // The button will trigger a click event after completion
  // You can also reset the slider:
  setTimeout(() => {
    e.detail.button.PM7Button.reset();
  }, 2000);
});

// Manual reset
const sliderButton = document.querySelector('.pm7-button--slider');
sliderButton.PM7Button.reset();
```

#### Slider Button Features

- **Touch and mouse support**: Works on desktop and mobile devices
- **Visual feedback**: Shows progress and success states
- **Automatic reset**: Can be reset programmatically after completion
- **Customizable text**: Change the instruction text as needed
- **Size variants**: Available in small, medium, and large sizes
- **Accessibility**: Fully keyboard accessible with proper ARIA attributes

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
| `pm7-button--slider` | Slider button variant |
| `pm7-button--sm` | Small size (36px height) |
| `pm7-button--lg` | Large size (48px height) |
| `pm7-button--full` | Full width button |
| `pm7-button--icon` | Icon-only button |
| `pm7-button-group` | Container for grouped buttons |
| `pm7-button--slider-text` | Text inside slider button |
| `pm7-button--slider-handle` | Draggable handle for slider |
| `pm7-gradient-border` | Gradient border effect |
| `pm7-gradient-border-blue` | Blue gradient border |
| `pm7-gradient-border-green` | Green gradient border |
| `pm7-gradient-border-red` | Red gradient border |
| `pm7-gradient-border-primary` | Primary color gradient |
| `pm7-gradient-border-2` | 2px gradient border |
| `pm7-gradient-border-4` | 4px gradient border |

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

## Data Attributes

| Attribute | Description | Example |
|-----------|-------------|---------|
| `disabled` | Standard HTML disabled state | `<button disabled>` |
| `type` | Button type (button, submit, reset) | `type="submit"` |
| `aria-label` | Accessibility label for icon-only buttons | `aria-label="Close dialog"` |
| `data-loading` | Custom loading state (requires custom implementation) | `data-loading="true"` |
| `data-pm7-slider-dragging` | Applied while slider is being dragged | Auto-managed |
| `data-pm7-slider-complete` | Applied when slider reaches end | Auto-managed |

## Common Pitfalls

### ❌ Don't add size class for medium buttons
```html
<!-- Wrong - medium is default, no class needed -->
<button class="pm7-button pm7-button--primary pm7-button--md">Click me</button>

<!-- Correct -->
<button class="pm7-button pm7-button--primary">Click me</button>
```

### ❌ Don't forget base class
```html
<!-- Wrong - missing pm7-button base class -->
<button class="pm7-button--primary">Click me</button>

<!-- Correct - always include base class -->
<button class="pm7-button pm7-button--primary">Click me</button>
```

### ❌ Don't use buttons for navigation without proper semantics
```html
<!-- Wrong - button for navigation -->
<button class="pm7-button pm7-button--primary" onclick="window.location.href='/page'">
  Go to page
</button>

<!-- Correct - use anchor tag styled as button -->
<a href="/page" class="pm7-button pm7-button--primary">
  Go to page
</a>
```

### ❌ Don't nest interactive elements
```html
<!-- Wrong - link inside button -->
<button class="pm7-button pm7-button--primary">
  <a href="/page">Click me</a>
</button>

<!-- Correct - use one or the other -->
<a href="/page" class="pm7-button pm7-button--primary">
  Click me
</a>
```

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

### Loading State

```html
<!-- Loading button with spinner -->
<button class="pm7-button pm7-button--primary" disabled>
  <svg class="pm7-spinner" width="16" height="16" viewBox="0 0 24 24">
    <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" fill="none" opacity="0.25"/>
    <path d="M12 2 A10 10 0 0 1 22 12" stroke="currentColor" stroke-width="4" fill="none">
      <animateTransform attributeName="transform" type="rotate" from="0 12 12" to="360 12 12" dur="1s" repeatCount="indefinite"/>
    </path>
  </svg>
  Saving...
</button>

<!-- Simple loading text -->
<button class="pm7-button pm7-button--primary" disabled>
  Processing...
</button>

<!-- With custom loading attribute -->
<button class="pm7-button pm7-button--primary" data-loading="true" disabled>
  <span class="pm7-button-content">Save Changes</span>
</button>
```

**Note**: PM7 doesn't include built-in loading spinners. You'll need to add your own spinner SVG or use a loading library.

### Slider Confirmation

```html
<!-- Delete confirmation slider -->
<div class="pm7-card">
  <div class="pm7-card-content">
    <h3>Delete Account</h3>
    <p>This action cannot be undone. All your data will be permanently deleted.</p>
    
    <button class="pm7-button pm7-button--slider" onclick="deleteAccount()" style="margin-top: 1rem;">
      <span class="pm7-button--slider-text">Slide to delete account</span>
      <span class="pm7-button--slider-handle"></span>
    </button>
  </div>
</div>

<script>
function deleteAccount() {
  // Only called when slider is completed
  console.log('Deleting account...');
  // Add your delete logic here
}
</script>
```

## JavaScript API

### Auto-initialization

Buttons with `.pm7-button--primary` or `.pm7-button--default` classes automatically receive the 6stars effect when the DOM loads.

```javascript
import { PM7Button, initButtons } from '@pm7/core';
```

### Class Constructor

```javascript
const buttonElement = document.querySelector('.pm7-button');
const button = new PM7Button(buttonElement);
```

The PM7Button class is minimal and primarily handles the 6stars effect for primary buttons. Most button functionality is achieved through CSS classes.

### Methods

#### For Slider Buttons

##### reset()

Resets the slider button to its initial state.

```javascript
const sliderButton = document.querySelector('.pm7-button--slider');
sliderButton.PM7Button.reset();
```

#### Events

##### pm7:slider:complete

Fired when the slider reaches the end and completes the action.

```javascript
button.addEventListener('pm7:slider:complete', (e) => {
  console.log('Slider completed', e.detail.button);
});
```

The event detail contains:
- `button`: The button element that triggered the event

### Global Functions

#### initButtons()

Initializes 6stars effect on all primary and default buttons.

```javascript
import { initButtons } from '@pm7/core';

// Manually initialize buttons (e.g., after adding buttons dynamically)
initButtons();
```

This is called automatically on DOMContentLoaded, but can be called manually for dynamically added buttons.

### 6stars Effect

The 6stars effect is automatically added to primary and default variant buttons. It creates an animated background effect with 6 rotating star elements.

```html
<!-- These buttons get 6stars effect automatically -->
<button class="pm7-button pm7-button--primary">Primary</button>
<button class="pm7-button pm7-button--default">Default</button>

<!-- These buttons do not get the effect -->
<button class="pm7-button pm7-button--outline">Outline</button>
<button class="pm7-button pm7-button--ghost">Ghost</button>
```

### CSS Classes Reference

| Class | Description |
|-------|-------------|
| **Base Classes** | |
| `pm7-button` | Base button class (required) |
| **Variants** | |
| `pm7-button--primary` | Primary button (default, includes 6stars) |
| `pm7-button--default` | Default button (includes 6stars) |
| `pm7-button--secondary` | Secondary button |
| `pm7-button--outline` | Outline button |
| `pm7-button--ghost` | Ghost button (minimal styling) |
| `pm7-button--destructive` | Destructive/danger button |
| `pm7-button--link` | Link-style button |
| `pm7-button--slider` | Slider button |
| **Modifiers** | |
| `pm7-button--on-dark` | For outline/ghost buttons on dark backgrounds |
| **Sizes** | |
| `pm7-button--xs` | Extra small size |
| `pm7-button--sm` | Small size |
| `pm7-button--lg` | Large size |
| **States** | |
| `pm7-button--full-width` | Full width button |
| `pm7-button--icon-only` | Icon-only button (square) |
| `pm7-button__6stars` | Container for 6stars effect (auto-added) |

### Button States

Buttons respond to standard HTML attributes:

```html
<!-- Disabled state -->
<button class="pm7-button pm7-button--primary" disabled>
  Disabled
</button>

<!-- Loading state (custom implementation) -->
<button class="pm7-button pm7-button--primary" disabled data-loading="true">
  Loading...
</button>

<!-- Active/pressed state (CSS handles :active) -->
<button class="pm7-button pm7-button--primary">
  Click me
</button>
```

### Accessibility

PM7 buttons are built on native HTML button elements and links, ensuring:
- Full keyboard support (Tab, Enter, Space)
- Screen reader compatibility
- Focus states
- Disabled state handling

For icon-only buttons, always include descriptive text or aria-label:

```html
<!-- Icon-only button with aria-label -->
<button class="pm7-button pm7-button--ghost pm7-button--icon-only" aria-label="Settings">
  <svg>...</svg>
</button>

<!-- Icon-only button with screen reader text -->
<button class="pm7-button pm7-button--ghost pm7-button--icon-only">
  <svg aria-hidden="true">...</svg>
  <span class="pm7-sr-only">Settings</span>
</button>
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