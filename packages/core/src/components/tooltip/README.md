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
<!-- AI-Agent FIRST: Only data-pm7-tooltip needed on trigger element -->
<button class="pm7-button" data-pm7-tooltip="Tooltip content">
  Hover for tooltip
</button>

<!-- Or for custom structured tooltips (auto-initialized) -->
<div data-pm7-tooltip>
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

<!-- Large (max-width: 400px) -->
<div class="pm7-tooltip-content pm7-tooltip-content--lg">
  Large tooltip with extended width for more detailed content
</div>
```

#### Size Comparison

| Size | Class | Max Width | Use Case |
|------|-------|-----------|----------|
| Small | `pm7-tooltip-content--sm` | 200px | Brief hints and labels |
| Default | - | 250px | Standard explanations |
| Large | `pm7-tooltip-content--lg` | 400px | Detailed information, code examples |

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

### Wide Tooltips

For cases where you need even more space for content:

```html
<!-- Large tooltip with extended width -->
<div class="pm7-tooltip-content pm7-tooltip-content--lg pm7-tooltip-content--multiline">
  This large tooltip can contain detailed information, 
  code examples, or longer explanations without becoming too cramped.
</div>

<!-- Custom width tooltip -->
<div class="pm7-tooltip-content pm7-tooltip-content--lg pm7-tooltip-content--multiline" 
     style="max-width: 600px;">
  <strong>Custom Width Example</strong><br><br>
  This tooltip has a custom max-width of 600px for displaying 
  extensive content like API documentation or complex code examples.
</div>
```

## Delays

Configure show/hide delays to prevent tooltips from appearing too quickly during casual mouse movements:

```html
<!-- Short delay (200ms) - Good for navigation menus -->
<div data-pm7-tooltip data-open-delay="200">
  <button class="pm7-tooltip-trigger">Quick Info</button>
  <div class="pm7-tooltip-content">
    Opens after 200ms
    <div class="pm7-tooltip-arrow"></div>
  </div>
</div>

<!-- Medium delay (600ms) - Good for form fields -->
<div data-pm7-tooltip data-open-delay="600">
  <button class="pm7-tooltip-trigger">Detailed Help</button>
  <div class="pm7-tooltip-content">
    Opens after 600ms
    <div class="pm7-tooltip-arrow"></div>
  </div>
</div>

<!-- Custom open and close delays -->
<div data-pm7-tooltip data-open-delay="300" data-close-delay="150">
  <button class="pm7-tooltip-trigger">Custom Timing</button>
  <div class="pm7-tooltip-content">
    Opens after 300ms, closes after 150ms
    <div class="pm7-tooltip-arrow"></div>
  </div>
</div>
```

#### Recommended Delay Values

| Use Case | Open Delay | Close Delay | Rationale |
|----------|------------|-------------|-----------|
| Navigation items | 200ms | 0ms | Quick response for menus |
| Form field help | 600ms | 100ms | Avoid accidental triggers |
| Icon buttons | 300ms | 0ms | Balance between speed and prevention |
| Detailed info | 800ms | 200ms | Only show when user really hovers |

## JavaScript API

### Auto-initialization

Tooltips with `data-pm7-tooltip` attribute are automatically initialized when the DOM loads. The CSS class `.pm7-tooltip` is automatically added when JavaScript runs.

```javascript
import { PM7Tooltip, initTooltips } from '@pm7/core';
```

### Class Constructor

```javascript
// For simple tooltips
const buttonElement = document.querySelector('[data-pm7-tooltip]');

// For structured tooltips
const tooltipElement = document.querySelector('[data-pm7-tooltip]');
const tooltip = new PM7Tooltip(tooltipElement);
```

#### Constructor Configuration

The tooltip reads configuration from the element and its children:

| Element | Attribute | Description | Default |
|---------|-----------|-------------|---------|
| `[data-pm7-tooltip]` | `data-delay` | General delay for open/close (ms) | `0` |
| `[data-pm7-tooltip]` | `data-open-delay` | Delay before showing (ms) | `0` |
| `[data-pm7-tooltip]` | `data-close-delay` | Delay before hiding (ms) | `0` |
| `.pm7-tooltip-content` | `data-side` | Placement: `top`, `bottom`, `left`, `right` | `'top'` |
| `.pm7-tooltip-content` | `data-align` | Alignment: `start`, `center`, `end` | `'center'` |

### Instance Methods

| Method | Description |
|--------|-------------|
| `show()` | Shows the tooltip |
| `hide()` | Hides the tooltip |
| `updatePosition()` | Recalculates and updates tooltip position |
| `destroy()` | Removes all event listeners and cleans up |

```javascript
// Show tooltip programmatically
tooltip.show();

// Hide tooltip
tooltip.hide();

// Update position (e.g., after content change)
tooltip.updatePosition();

// Clean up when done
tooltip.destroy();
```

### Events

| Event | Description | Detail Object |
|-------|-------------|---------------|
| `pm7:tooltip:show` | Fired when tooltip becomes visible | `{ tooltip: PM7Tooltip }` |
| `pm7:tooltip:hide` | Fired when tooltip is hidden | `{ tooltip: PM7Tooltip }` |

```javascript
tooltipElement.addEventListener('pm7:tooltip:show', (e) => {
  console.log('Tooltip shown', e.detail.tooltip);
});

tooltipElement.addEventListener('pm7:tooltip:hide', (e) => {
  console.log('Tooltip hidden', e.detail.tooltip);
});
```

### Global Functions

#### initTooltips(container)

Initializes all tooltips within a container.

```javascript
import { initTooltips } from '@pm7/core';

// Initialize all tooltips on page
initTooltips();

// Initialize tooltips in specific container
const container = document.querySelector('.my-container');
initTooltips(container);
```

### Behavior Details

#### Auto-positioning

The tooltip automatically adjusts its position to stay within the viewport:

1. If `side="top"` but there's no space above, it flips to `bottom`
2. If `side="bottom"` but there's no space below, it flips to `top`
3. If `side="left"` but there's no space on left, it flips to `right`
4. If `side="right"` but there's no space on right, it flips to `left`
5. Alignment also adjusts to prevent horizontal overflow

#### Touch Device Support

On touch devices, tooltips:
- Show on tap instead of hover
- Hide when tapping outside
- Do not show on focus events

#### Keyboard Support

- **Tab**: Focus trigger shows tooltip
- **Escape**: Closes tooltip and returns focus to trigger
- **Blur**: Hiding tooltip when trigger loses focus

#### Screen Reader Support

Tooltips announce their content to screen readers using:
- `aria-describedby` to associate tooltip with trigger
- `role="tooltip"` on content element
- Live region announcements when tooltip shows

### Advanced Usage

#### Dynamic Tooltip Content

```javascript
const tooltip = new PM7Tooltip(element);

// Update content
element.querySelector('.pm7-tooltip-content').textContent = 'New content';

// Update position after content change
tooltip.updatePosition();
```

#### Programmatic Control

```javascript
// Show tooltip on custom event
button.addEventListener('customEvent', () => {
  tooltip.show();
  
  // Hide after 3 seconds
  setTimeout(() => tooltip.hide(), 3000);
});
```

#### Custom Delays Per Instance

```html
<!-- Quick show (0ms), slow hide (500ms) -->
<div class="pm7-tooltip" data-open-delay="0" data-close-delay="500">
  <button class="pm7-tooltip-trigger">Hover me</button>
  <div class="pm7-tooltip-content">
    I appear instantly but disappear slowly
    <div class="pm7-tooltip-arrow"></div>
  </div>
</div>
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

### Core Classes

| Class | Description |
|-------|-------------|
| `.pm7-tooltip` | Base tooltip container |
| `.pm7-tooltip-trigger` | Element that triggers the tooltip |
| `.pm7-tooltip-content` | Tooltip content container |
| `.pm7-tooltip-arrow` | Arrow pointing to trigger |

### Size Modifiers

| Class | Description | Max Width |
|-------|-------------|-----------|
| `.pm7-tooltip-content--sm` | Small tooltip size | 200px |
| `.pm7-tooltip-content--lg` | Large tooltip size | 400px |

### Style Modifiers

| Class | Description |
|-------|-------------|
| `.pm7-tooltip-content--light` | Light theme variant |
| `.pm7-tooltip-content--multiline` | Enables multiline content with proper spacing |

### Custom Styling

You can override the default max-width for specific use cases:

```css
/* Extra wide tooltip for complex content */
.pm7-tooltip-content.custom-wide {
  max-width: 600px;
}

/* Or use inline styles */
style="max-width: 500px;"
```

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

### Wide Tooltip with Code Example

```html
<div class="pm7-tooltip" data-open-delay="300">
  <button class="pm7-button pm7-tooltip-trigger">
    View Code Example
  </button>
  <div class="pm7-tooltip-content pm7-tooltip-content--lg pm7-tooltip-content--light pm7-tooltip-content--multiline" 
       data-side="bottom" style="max-width: 500px;">
    <strong>Button Component Usage:</strong>
    <code style="display: block; margin-top: 8px; padding: 8px; background: var(--pm7-muted); border-radius: 4px;">
      &lt;button class="pm7-button pm7-button--primary pm7-button--lg"&gt;<br>
      &nbsp;&nbsp;Click Me<br>
      &lt;/button&gt;
    </code>
    <div class="pm7-tooltip-arrow"></div>
  </div>
</div>
```

## Data Attributes

| Attribute | Description | Values | Example |
|-----------|-------------|--------|---------|
| `data-pm7-tooltip` | Auto-initialize tooltip | - | `data-pm7-tooltip` |
| `data-side` | Preferred placement | `top`, `right`, `bottom`, `left` | `data-side="top"` |
| `data-align` | Alignment on the side | `start`, `center`, `end` | `data-align="center"` |
| `data-delay` | General delay for open/close | Number (ms) | `data-delay="500"` |
| `data-open-delay` | Delay before showing | Number (ms) | `data-open-delay="200"` |
| `data-close-delay` | Delay before hiding | Number (ms) | `data-close-delay="100"` |
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