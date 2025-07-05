# PM7 Tooltip Component

The Tooltip component displays informative text when users hover over, focus on, or tap an element. It provides contextual information without cluttering the interface.

## Features

- **Flexible positioning** - Top, bottom, left, or right placement with automatic viewport adjustments
- **Customizable delays** - Configure open and close delays independently
- **Multiple themes** - Dark (default) and light theme variants
- **Touch support** - Works on mobile devices with tap interactions
- **Accessible** - Full keyboard navigation and screen reader support
- **Auto-positioning** - Automatically adjusts position to stay within viewport
- **Size variants** - Small, medium (default), and large sizes

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

Or use via CDN:
```html
<link rel="stylesheet" href="https://unpkg.com/@pm7/core/dist/pm7.css">
<script src="https://unpkg.com/@pm7/core/dist/pm7.js"></script>
```

### React Usage

If you're using the React components:

```bash
npm install @pm7/react @pm7/core
```

```javascript
import { Tooltip } from '@pm7/react';
import '@pm7/core/dist/pm7.css'; // Don't forget this!
```

## Basic Usage

### HTML Structure

```html
<div class="pm7-tooltip">
  <button class="pm7-button pm7-tooltip-trigger">
    Hover for tooltip
  </button>
  <div class="pm7-tooltip-content" data-side="top">
    Tooltip content
    <div class="pm7-tooltip-arrow"></div>
  </div>
</div>
```

### React Component

```jsx
import { Tooltip } from '@pm7/react';

function App() {
  return (
    <Tooltip content="This is a helpful tooltip">
      <button>Hover me</button>
    </Tooltip>
  );
}
```

### With Icons

```jsx
<Tooltip content="Click here to learn more">
  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
    <span>Help</span>
    <InfoIcon />
  </div>
</Tooltip>
```

## Positioning

### Side Positioning

Control tooltip placement with the `data-side` attribute:

```html
<!-- Top (default) -->
<div class="pm7-tooltip-content" data-side="top">

<!-- Bottom -->
<div class="pm7-tooltip-content" data-side="bottom">

<!-- Left -->
<div class="pm7-tooltip-content" data-side="left">

<!-- Right -->
<div class="pm7-tooltip-content" data-side="right">
```

### Alignment

Fine-tune alignment with `data-align`:

```html
<!-- Center (default) -->
<div class="pm7-tooltip-content" data-align="center">

<!-- Start -->
<div class="pm7-tooltip-content" data-align="start">

<!-- End -->
<div class="pm7-tooltip-content" data-align="end">
```

## Variants

### Size Variants

```html
<!-- Small -->
<div class="pm7-tooltip-content pm7-tooltip-content--sm">
  Small tooltip
</div>

<!-- Default -->
<div class="pm7-tooltip-content">
  Default size tooltip
</div>

<!-- Large -->
<div class="pm7-tooltip-content pm7-tooltip-content--lg">
  Large tooltip with more content
</div>
```

### Theme Variants

```html
<!-- Dark (default) -->
<div class="pm7-tooltip-content">
  Dark tooltip
</div>

<!-- Light -->
<div class="pm7-tooltip-content pm7-tooltip-content--light">
  Light themed tooltip
</div>
```

### Multiline Content

```html
<div class="pm7-tooltip-content pm7-tooltip-content--multiline">
  This tooltip contains multiple lines of text 
  to explain complex functionality.
  
  It maintains readability with proper spacing.
</div>
```

## Delays

Configure show/hide delays:

```html
<!-- Delay before showing (200ms) -->
<div class="pm7-tooltip" data-open-delay="200">

<!-- Delay before hiding (100ms) -->
<div class="pm7-tooltip" data-close-delay="100">

<!-- Both delays -->
<div class="pm7-tooltip" data-open-delay="200" data-close-delay="100">
```

## JavaScript API

### Basic Initialization

```javascript
import { PM7Tooltip } from '@pm7/core';

// Initialize a single tooltip
const element = document.querySelector('.pm7-tooltip');
const tooltip = new PM7Tooltip(element);

// Initialize all tooltips on page
import { initTooltips } from '@pm7/core';
initTooltips();
```

### Methods

```javascript
// Show tooltip programmatically
tooltip.show();

// Hide tooltip
tooltip.hide();

// Update position (useful after content changes)
tooltip.updatePosition();

// Destroy tooltip instance
tooltip.destroy();
```

### Properties

```javascript
// Configuration
tooltip.side = 'bottom';      // Change position
tooltip.align = 'start';      // Change alignment
tooltip.openDelay = 500;      // Set open delay
tooltip.closeDelay = 200;     // Set close delay

// State
const isOpen = tooltip.isOpen;  // Check if tooltip is visible
```

### Events

```javascript
// Listen for tooltip events
element.addEventListener('pm7:tooltip:show', (event) => {
  console.log('Tooltip shown', event.detail.tooltip);
});

element.addEventListener('pm7:tooltip:hide', (event) => {
  console.log('Tooltip hidden', event.detail.tooltip);
});
```

## React Props

```typescript
interface TooltipProps {
  children: ReactNode;
  content: ReactNode;
  side?: 'top' | 'bottom' | 'left' | 'right';
  align?: 'start' | 'center' | 'end';
  delay?: number;
  openDelay?: number;
  closeDelay?: number;
  className?: string;
  contentClassName?: string;
  style?: CSSProperties;
  disabled?: boolean;
  multiline?: boolean;
  theme?: 'dark' | 'light';
  size?: 'sm' | 'md' | 'lg';
  arrow?: boolean;
}
```

## CSS Classes

| Class | Description |
|-------|-------------|
| `.pm7-tooltip` | Base tooltip container |
| `.pm7-tooltip-trigger` | Element that triggers the tooltip |
| `.pm7-tooltip-content` | Tooltip content container |
| `.pm7-tooltip-arrow` | Arrow pointing to trigger |
| `.pm7-tooltip-content--sm` | Small tooltip size |
| `.pm7-tooltip-content--lg` | Large tooltip size |
| `.pm7-tooltip-content--light` | Light theme variant |
| `.pm7-tooltip-content--multiline` | Multiline content support |

## Accessibility

- **ARIA Support**: Uses `aria-describedby` to associate tooltip with trigger
- **Keyboard Navigation**: Shows on focus, hides on blur
- **Escape Key**: Closes tooltip when Escape is pressed
- **Screen Readers**: Announces tooltip content using ARIA live regions
- **Touch Devices**: Supports tap to show/hide on mobile

## Best Practices

1. **Keep content concise** - Tooltips should provide brief, helpful information
2. **Use appropriate delays** - Add delays to prevent tooltips from appearing too quickly
3. **Ensure contrast** - Make sure tooltip text is readable against the background
4. **Position carefully** - Choose positions that don't obscure important content
5. **Mobile consideration** - Test touch interactions on mobile devices

## Examples

### Icon-only Button with Tooltip

```html
<div class="pm7-tooltip">
  <button class="pm7-button pm7-button--ghost pm7-tooltip-trigger" aria-label="Settings">
    <svg><!-- settings icon --></svg>
  </button>
  <div class="pm7-tooltip-content" data-side="bottom">
    Settings
    <div class="pm7-tooltip-arrow"></div>
  </div>
</div>
```

### Form Field Help

```html
<div style="display: flex; align-items: center; gap: 0.5rem;">
  <input type="email" class="pm7-input" placeholder="Email">
  <div class="pm7-tooltip">
    <div class="pm7-tooltip-trigger">
      <svg><!-- info icon --></svg>
    </div>
    <div class="pm7-tooltip-content pm7-tooltip-content--multiline" data-side="right">
      We'll never share your email with anyone else.
      <div class="pm7-tooltip-arrow"></div>
    </div>
  </div>
</div>
```

### Disabled Element Explanation

```html
<div class="pm7-tooltip">
  <button class="pm7-button pm7-tooltip-trigger" disabled>
    Disabled Action
  </button>
  <div class="pm7-tooltip-content" data-side="top">
    This action requires admin privileges
    <div class="pm7-tooltip-arrow"></div>
  </div>
</div>
```

## Data Attributes

| Attribute | Description | Values | Example |
|-----------|-------------|--------|---------|
| `data-pm7-tooltip` | Auto-initialize tooltip | - | `data-pm7-tooltip` |
| `data-side` | Preferred placement | `top`, `right`, `bottom`, `left` | `data-side="top"` |
| `data-delay` | Show delay in ms | Number | `data-delay="500"` |
| `data-state` | Visibility state | `open`, `closed` | `data-state="open"` |
| `data-sticky` | Keeps tooltip open on hover | `true`, `false` | `data-sticky="true"` |
| `aria-describedby` | Links trigger to tooltip | Tooltip ID | `aria-describedby="tooltip-1"` |
| `role` | ARIA role | `tooltip` | `role="tooltip"` |

## Common Pitfalls

### ❌ Don't forget the tooltip structure
```html
<!-- Wrong - missing arrow -->
<div class="pm7-tooltip">
  <button class="pm7-tooltip-trigger">Hover me</button>
  <div class="pm7-tooltip-content">
    Tooltip text
  </div>
</div>

<!-- Correct - include arrow element -->
<div class="pm7-tooltip">
  <button class="pm7-tooltip-trigger">Hover me</button>
  <div class="pm7-tooltip-content">
    Tooltip text
    <div class="pm7-tooltip-arrow"></div>
  </div>
</div>
```

### ❌ Don't use tooltips for essential information
```html
<!-- Wrong - critical info in tooltip -->
<button class="pm7-button pm7-tooltip-trigger">
  Delete
</button>
<div class="pm7-tooltip-content">
  Warning: This will permanently delete all data!
</div>

<!-- Correct - use visible text or dialog -->
<button class="pm7-button pm7-button--destructive">
  Delete All Data
</button>
```

### ❌ Don't make tooltips too long
```html
<!-- Wrong - paragraph in tooltip -->
<div class="pm7-tooltip-content">
  This is a very long explanation that goes on and on about 
  the feature and includes multiple sentences that are hard 
  to read in a tooltip format...
</div>

<!-- Correct - keep it concise -->
<div class="pm7-tooltip-content">
  Click to save your changes
</div>
```

### ❌ Don't use tooltips on mobile/touch devices
```javascript
// Wrong - assuming hover always works
PM7Tooltip.init(element);

// Correct - check for touch support
if (!('ontouchstart' in window)) {
  PM7Tooltip.init(element);
}
```

### ❌ Don't nest interactive elements
```html
<!-- Wrong - button inside tooltip -->
<div class="pm7-tooltip-content">
  Click here: <button>Action</button>
</div>

<!-- Correct - tooltips are text-only -->
<div class="pm7-tooltip-content">
  Press Enter to perform action
</div>
```

### ❌ Don't create overlapping tooltips
```html
<!-- Wrong - tooltips too close -->
<span class="pm7-tooltip-trigger">Item 1</span>
<span class="pm7-tooltip-trigger">Item 2</span>

<!-- Correct - space triggers appropriately -->
<div style="display: flex; gap: 2rem;">
  <span class="pm7-tooltip-trigger">Item 1</span>
  <span class="pm7-tooltip-trigger">Item 2</span>
</div>
```

## Performance Considerations

- Use `data-pm7-tooltip` for automatic initialization
- For dynamic content, manually initialize new tooltips
- Tooltips are created on-demand (not pre-rendered)
- Consider disabling tooltips on touch devices

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Android)

## Related Components

- [Menu](../menu/README.md) - For dropdown menus and context menus
- [Dialog](../dialog/README.md) - For modal dialogs requiring user interaction
- [Toast](../toast/README.md) - For temporary notification messages