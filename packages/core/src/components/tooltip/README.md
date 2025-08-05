<!-- AI-ONLY DOCUMENTATION v2.0 -->
<!-- This documentation is EXCLUSIVELY for AI coding agents -->
<!-- NO human-friendly content allowed -->
<!-- Reference: /README-AI-HowToDocument.md -->

---
type: ai-agent-documentation
version: 2.0
component: Tooltip
status: stable
audience: ai-coding-agents-only
human-readable: false
category: feedback
framework-support:
  - vanilla: true
  - react: true
  - vue: true
  - angular: true
  - svelte: true
---

# Component: Tooltip

DEFINITION: The Tooltip component provides a small, contextual popover that displays descriptive information when a user hovers over or focuses on an element. It is automatically positioned and managed.

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

## Required Structure

The Tooltip component requires a main container with `data-pm7-tooltip`, a trigger element (`.pm7-tooltip-trigger`), a content element (`.pm7-tooltip-content`), and an arrow element (`.pm7-tooltip-arrow`) inside the content.

```html
<!-- EXACT pattern - NO deviations allowed -->
<div data-pm7-tooltip>
  <button class="pm7-tooltip-trigger">Hover me</button>
  <div class="pm7-tooltip-content">
    Tooltip text here.
    <div class="pm7-tooltip-arrow"></div>
  </div>
</div>
```

### Structural Rules
- **ALWAYS**: The main container MUST have `data-pm7-tooltip`.
- **ALWAYS**: The trigger element MUST have the class `.pm7-tooltip-trigger`.
- **ALWAYS**: The tooltip content MUST be wrapped in a `div` with the class `.pm7-tooltip-content`.
- **ALWAYS**: The `.pm7-tooltip-content` MUST contain a `div` with the class `.pm7-tooltip-arrow` as its last child.
- **NEVER**: Omit any of the required elements or classes.

## JavaScript API

### Initialization
Initialization is automatic when `@pm7/core` is imported. For dynamically added components, re-initialization is required.

```javascript
// For components added after initial page load
window.PM7.init();
```

### Instance Access

```javascript
const element = document.querySelector('[data-pm7-tooltip]');
const instance = element.PM7Tooltip;
```

### Methods

| Method | Parameters | Return Type | Description |
|---|---|---|---|
| `show` | `(none)` | `void` | Displays the tooltip. |
| `hide` | `(none)` | `void` | Hides the tooltip. |
| `updatePosition` | `(none)` | `void` | Recalculates and adjusts the tooltip's position. |
| `destroy` | `(none)` | `void` | Removes all event listeners and cleans up the instance. |

### Events

| Event | When | Detail | Bubbles |
|---|---|---|---|---|
| `pm7:tooltip:show` | After the tooltip becomes visible | `{ tooltip: PM7TooltipInstance }` | YES |
| `pm7:tooltip:hide` | After the tooltip becomes hidden | `{ tooltip: PM7TooltipInstance }` | YES |

## Attributes

See /docs/ATTRIBUTES.md for cross-component attribute relationships.

| Attribute | Component(s) | Values | Required | Effect |
|---|---|---|---|---|
| `data-pm7-tooltip` | Tooltip | presence | YES | Initializes Tooltip component. |
| `data-side` | Tooltip | `top`, `bottom`, `left`, `right` | NO | Sets the primary placement side of the tooltip. |
| `data-align` | Tooltip | `start`, `center`, `end` | NO | Aligns the tooltip along its primary axis. |
| `data-open-delay` | Tooltip | number (ms) | NO | Delay before tooltip opens on hover. |
| `data-close-delay` | Tooltip | number (ms) | NO | Delay before tooltip closes on hover out. |
| `data-state` | Tooltip | `open`, `closed` | AUTO | Managed by JS to reflect component's open/closed state. |
| `aria-label` | Tooltip | string | YES (icon-only) | Provides an accessible name for an element when no visible text is available. |
| `aria-describedby` | Tooltip | ID of descriptive element | NO | Links an element to an element that describes it. |
| `role` | Tooltip | `tooltip` | AUTO | Defines the purpose or nature of an element. |

## CSS Classes

| Class | Required | When | Effect |
|---|---|---|---|
| `.pm7-tooltip` | AUTO | Applied by JS to the main container | Base styling for the tooltip container. |
| `.pm7-tooltip-trigger` | YES | On the element that triggers the tooltip | Styles the trigger element. |
| `.pm7-tooltip-content` | YES | On the element containing the tooltip text | Styles the tooltip popover content. |
| `.pm7-tooltip-arrow` | YES | Inside `.pm7-tooltip-content` | Creates the visual arrow pointing to the trigger. |
| `.pm7-tooltip-content--sm` | NO | For a smaller tooltip width | Sets max-width to 200px. |
| `.pm7-tooltip-content--lg` | NO | For a larger tooltip width | Sets max-width to 400px. |
| `.pm7-tooltip-content--light` | NO | For a light-themed tooltip | Applies a light background and dark text. |
| `.pm7-tooltip-content--multiline` | NO | For multiline text wrapping | Adjusts line-height and text alignment for multiline content. |

## Patterns

### Pattern: Basic Tooltip
```html
<div data-pm7-tooltip>
  <button class="pm7-tooltip-trigger">Hover over me</button>
  <div class="pm7-tooltip-content">
    This is a basic tooltip.
    <div class="pm7-tooltip-arrow"></div>
  </div>
</div>
```

### Pattern: Tooltip with Custom Placement
Use `data-side` for `top`, `bottom`, `left`, `right` and `data-align` for `start`, `center`, `end`.

```html
<div data-pm7-tooltip>
  <button class="pm7-tooltip-trigger">Top-End Tooltip</button>
  <div class="pm7-tooltip-content" data-side="top" data-align="end">
    This tooltip appears at the top-end.
    <div class="pm7-tooltip-arrow"></div>
  </div>
</div>
```

### Pattern: Tooltip with Custom Delays
Use `data-open-delay` and `data-close-delay` attributes on the `data-pm7-tooltip` container.

```html
<div data-pm7-tooltip data-open-delay="500" data-close-delay="200">
  <button class="pm7-tooltip-trigger">Delayed Tooltip</button>
  <div class="pm7-tooltip-content">
    Opens after 500ms, closes after 200ms.
    <div class="pm7-tooltip-arrow"></div>
  </div>
</div>
```

## Anti-Patterns

### NEVER: Use simplified `data-pm7-tooltip="Tooltip text"` syntax
```html
<!-- NEVER -->
<button data-pm7-tooltip="This is a simplified tooltip.">Hover me</button>

<!-- BECAUSE -->
This simplified syntax is not supported by the PM7 Tooltip component. It will not initialize or display correctly.

<!-- INSTEAD -->
<div data-pm7-tooltip>
  <button class="pm7-tooltip-trigger">Hover me</button>
  <div class="pm7-tooltip-content">
    This is the correct structured tooltip.
    <div class="pm7-tooltip-arrow"></div>
  </div>
</div>
```

### NEVER: Omit the `.pm7-tooltip-arrow` element
```html
<!-- NEVER -->
<div data-pm7-tooltip>
  <button class="pm7-tooltip-trigger">Trigger</button>
  <div class="pm7-tooltip-content">
    No arrow here.
  </div>
</div>

<!-- BECAUSE -->
The arrow element is crucial for visual positioning and styling. Without it, the tooltip may look broken or misaligned.

<!-- INSTEAD -->
<div data-pm7-tooltip>
  <button class="pm7-tooltip-trigger">Trigger</button>
  <div class="pm7-tooltip-content">
    Arrow is present.
    <div class="pm7-tooltip-arrow"></div>
  </div>
</div>
```

### NEVER: Manually control tooltip visibility with CSS
```html
<!-- NEVER -->
<div data-pm7-tooltip>
  <button class="pm7-tooltip-trigger">Trigger</button>
  <div class="pm7-tooltip-content" style="display: block;">...</div>
</div>

<!-- BECAUSE -->
The Tooltip component manages its own visibility, positioning, and event listeners. Manual CSS control will interfere with its functionality and animations.

<!-- INSTEAD -->
// Let the component handle visibility automatically on hover/focus, or use the JavaScript API methods `show()` and `hide()`.
```

## React Integration

> **📚 Framework Integration Guide**: For Vue, Angular, and other framework integrations, see the comprehensive [Framework Integration Guide](https://raw.githubusercontent.com/patrickmast/pm7-ui/main/README-Framework-Integration.md)

### Basic Tooltip Usage in React

PM7-UI Tooltips work seamlessly in React applications:

```jsx
function TooltipExample() {
  useEffect(() => {
    window.PM7?.initFramework();
  }, []);

  return (
    <div data-pm7-tooltip>
      <button className="pm7-tooltip-trigger pm7-button">
        Hover for info
      </button>
      <div className="pm7-tooltip-content">
        This is helpful information about the button.
        <div className="pm7-tooltip-arrow"></div>
      </div>
    </div>
  );
}
```

### Dynamic Tooltip Content

When tooltip content changes dynamically, ensure PM7 updates the positioning:

```jsx
function DynamicTooltip({ message, isLoading }) {
  const tooltipRef = useRef(null);

  useEffect(() => {
    window.PM7?.initFramework();
  }, []);

  useEffect(() => {
    // Update position when content changes
    const tooltip = tooltipRef.current?.PM7Tooltip;
    if (tooltip) {
      tooltip.updatePosition();
    }
  }, [message]);

  return (
    <div data-pm7-tooltip ref={tooltipRef}>
      <button className="pm7-tooltip-trigger pm7-button">
        Status Info
      </button>
      <div className="pm7-tooltip-content">
        {isLoading ? 'Loading...' : message}
        <div className="pm7-tooltip-arrow"></div>
      </div>
    </div>
  );
}
```

### Icon Buttons with Tooltips

Common pattern for icon-only buttons that need text labels:

```jsx
function IconButton({ icon, label, onClick }) {
  useEffect(() => {
    window.PM7?.initFramework();
  }, []);

  return (
    <div data-pm7-tooltip>
      <button 
        className="pm7-tooltip-trigger pm7-button pm7-button--icon"
        onClick={onClick}
        aria-label={label}
      >
        {icon}
      </button>
      <div className="pm7-tooltip-content">
        {label}
        <div className="pm7-tooltip-arrow"></div>
      </div>
    </div>
  );
}

// Usage
<IconButton 
  icon={<EditIcon />} 
  label="Edit this item" 
  onClick={handleEdit} 
/>
```

### Form Field Help Tooltips

Providing contextual help for form fields:

```jsx
function FormFieldWithHelp({ label, helpText, ...inputProps }) {
  useEffect(() => {
    window.PM7?.initFramework();
  }, []);

  return (
    <div className="pm7-form-group">
      <label className="pm7-label">{label}</label>
      <div className="flex items-center gap-2">
        <input className="pm7-input" {...inputProps} />
        {helpText && (
          <div data-pm7-tooltip>
            <button 
              className="pm7-tooltip-trigger pm7-button pm7-button--icon pm7-button--ghost"
              aria-label={`Help for ${label}`}
            >
              <HelpIcon />
            </button>
            <div className="pm7-tooltip-content" data-side="right">
              {helpText}
              <div className="pm7-tooltip-arrow"></div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
```

### Programmatic Tooltip Control

```jsx
function ProgrammaticTooltip() {
  const tooltipRef = useRef(null);
  const [isShown, setIsShown] = useState(false);

  useEffect(() => {
    window.PM7?.initFramework();
  }, []);

  const showTooltip = () => {
    const tooltip = tooltipRef.current?.PM7Tooltip;
    if (tooltip) {
      tooltip.show();
      setIsShown(true);
    }
  };

  const hideTooltip = () => {
    const tooltip = tooltipRef.current?.PM7Tooltip;
    if (tooltip) {
      tooltip.hide();
      setIsShown(false);
    }
  };

  return (
    <>
      <div className="flex gap-2 mb-4">
        <button onClick={showTooltip} className="pm7-button">
          Show Tooltip
        </button>
        <button onClick={hideTooltip} className="pm7-button pm7-button--secondary">
          Hide Tooltip
        </button>
      </div>
      
      <div data-pm7-tooltip ref={tooltipRef}>
        <span className="pm7-tooltip-trigger" tabIndex={0}>
          Target element (Status: {isShown ? 'Shown' : 'Hidden'})
        </span>
        <div className="pm7-tooltip-content">
          This tooltip is controlled programmatically.
          <div className="pm7-tooltip-arrow"></div>
        </div>
      </div>
    </>
  );
}
```

### Tooltip List Items

When rendering multiple tooltips in a list:

```jsx
function TooltipList({ items }) {
  useEffect(() => {
    // Re-initialize when items change
    window.PM7?.init();
  }, [items]);

  return (
    <div className="grid grid-cols-4 gap-2">
      {items.map((item) => (
        <div key={item.id} data-pm7-tooltip>
          <button className="pm7-tooltip-trigger pm7-button pm7-button--icon">
            <img src={item.icon} alt={item.name} />
          </button>
          <div className="pm7-tooltip-content">
            <strong>{item.name}</strong>
            <br />
            {item.description}
            <div className="pm7-tooltip-arrow"></div>
          </div>
        </div>
      ))}
    </div>
  );
}
```

### Custom Delay Configuration

```jsx
function CustomDelayTooltips() {
  useEffect(() => {
    window.PM7?.initFramework();
  }, []);

  return (
    <div className="flex gap-4">
      {/* Fast tooltip */}
      <div data-pm7-tooltip data-open-delay="0" data-close-delay="0">
        <button className="pm7-tooltip-trigger pm7-button">
          Instant
        </button>
        <div className="pm7-tooltip-content">
          No delay on hover
          <div className="pm7-tooltip-arrow"></div>
        </div>
      </div>

      {/* Slow tooltip */}
      <div data-pm7-tooltip data-open-delay="1000" data-close-delay="500">
        <button className="pm7-tooltip-trigger pm7-button">
          Delayed
        </button>
        <div className="pm7-tooltip-content">
          1 second open delay, 0.5 second close delay
          <div className="pm7-tooltip-arrow"></div>
        </div>
      </div>
    </div>
  );
}
```

### Key Points for React:
- Tooltips are fully declarative - just provide the HTML structure
- Use `PM7.init()` when dynamically adding tooltips
- Update tooltip position when content changes with `updatePosition()`
- Tooltips handle their own event listeners and positioning
- Always include the arrow element for proper rendering
- Use `tabIndex={0}` on non-interactive triggers to ensure keyboard accessibility

## Rules

### ALWAYS
- **ALWAYS**: Use the full structured HTML pattern for the Tooltip component.
- **ALWAYS**: Ensure the trigger element is focusable (e.g., `<button>`, `<a>`, or an element with `tabindex="0"`).
- **ALWAYS**: Include the `.pm7-tooltip-arrow` element inside the `.pm7-tooltip-content`.
- **ALWAYS**: Call `window.PM7.init()` after dynamically adding tooltips to the DOM.

### NEVER
- **NEVER**: Use the simplified `data-pm7-tooltip="text"` syntax.
- **NEVER**: Omit any of the required HTML elements or classes from the `Required Structure`.
- **NEVER**: Manually control the `display` or `visibility` of the tooltip content with CSS or JavaScript.
- **NEVER**: Use tooltips for critical information that requires user interaction or cannot be missed.

## CSS Variables

### Component-Specific Variables

| Variable | Light Mode | Dark Mode | Usage |
|----------|------------|-----------|--------|
| `--pm7-tooltip-bg` | `rgba(0, 0, 0, 0.9)` | `rgba(255, 255, 255, 0.9)` | Tooltip background color |
| `--pm7-tooltip-color` | `#ffffff` | `#000000` | Tooltip text color |
| `--pm7-tooltip-delay` | `200ms` | `200ms` | Delay before showing tooltip |

### Required Global Variables

| Variable | Light Mode | Dark Mode | Usage in Tooltip |
|----------|------------|-----------|------------------|
| `--pm7-background` | `#ffffff` | `#121212` | Light theme tooltip background |
| `--pm7-foreground` | `#000000` | `#e0e0e0` | Light theme tooltip text |
| `--pm7-border` | `#e0e0e0` | `#444` | Light theme tooltip border |
| `--pm7-color-focus` | `var(--pm7-primary)` | `var(--pm7-primary)` | Focus outline color |
| `--pm7-radius-sm` | `0.125rem` | `0.125rem` | Focus outline radius |
| `--pm7-radius-md` | `0.5rem` | `0.5rem` | Tooltip border radius |
| `--pm7-font-size-sm` | `0.875rem` | `0.875rem` | Default tooltip text size |
| `--pm7-font-size-xs` | `0.75rem` | `0.75rem` | Small tooltip text size |
| `--pm7-line-height-sm` | `1.5` | `1.5` | Tooltip text line height |
| `--pm7-shadow-lg` | `0 10px 15px -3px rgb(0 0 0 / 0.1)` | `0 10px 15px -3px rgb(0 0 0 / 0.3)` | Tooltip shadow |
| `--pm7-transition-fast` | `150ms ease` | `150ms ease` | Animation duration |

### Customization Example
```css
/* Custom tooltip styling */
.my-app {
  --pm7-tooltip-bg: #2c3e50;
  --pm7-tooltip-color: #ecf0f1;
  --pm7-tooltip-delay: 300ms;
  --pm7-shadow-lg: 0 4px 12px rgba(0, 0, 0, 0.25);
}

/* Colorful tooltips */
.tooltip-success {
  --pm7-tooltip-bg: #27ae60;
  --pm7-tooltip-color: #ffffff;
}

.tooltip-error {
  --pm7-tooltip-bg: #e74c3c;
  --pm7-tooltip-color: #ffffff;
}
```

## Cross-Component Dependencies

### Works With
- **Button**: Icon buttons often need tooltips for clarity
- **Icons**: Tooltips provide text labels for icon-only interfaces
- **Form Elements**: Help text for form fields
- **Menu**: Tooltips can explain menu items

### Conflicts With
- **Dialog**: Don't show tooltips inside modal dialogs (z-index issues)
- **Menu**: Tooltips should not overlap with open menus
- **Toast**: Both are temporary UI elements, avoid showing simultaneously

## Accessibility

- **Focus**: Tooltips appear on hover and focus. When the trigger is focused, the tooltip becomes visible.
- **Keyboard**: Tooltips are accessible via keyboard navigation (Tab to trigger, Escape to hide).
- **ARIA**: The component automatically manages `role="tooltip"` and links the trigger to the tooltip content using `aria-describedby`.
- **Screen reader**: Tooltip content is announced by screen readers when the trigger is focused.

## Complete Example: Form Field Help Tooltips

SCENARIO: Providing contextual help for form fields using tooltips.

```html
<div style="display: flex; flex-direction: column; gap: 1.5rem; max-width: 400px; margin: 2rem auto;">
  <div class="pm7-form-group">
    <label for="username" class="pm7-label">Username</label>
    <div style="display: flex; align-items: center; gap: 0.5rem;">
      <input type="text" id="username" class="pm7-input" placeholder="Enter your username">
      <div data-pm7-tooltip>
        <button class="pm7-tooltip-trigger pm7-button pm7-button--icon pm7-button--ghost" aria-label="Username help">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM11 15h2v2h-2zm0-8h2v6h-2z"/>
          </svg>
        </button>
        <div class="pm7-tooltip-content" data-side="right">
          Your username must be unique and contain only letters, numbers, and underscores.
          <div class="pm7-tooltip-arrow"></div>
        </div>
      </div>
    </div>
  </div>

  <div class="pm7-form-group">
    <label for="password" class="pm7-label">Password</label>
    <div style="display: flex; align-items: center; gap: 0.5rem;">
      <input type="password" id="password" class="pm7-input" placeholder="Enter your password">
      <div data-pm7-tooltip>
        <button class="pm7-tooltip-trigger pm7-button pm7-button--icon pm7-button--ghost" aria-label="Password help">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM11 15h2v2h-2zm0-8h2v6h-2z"/>
          </svg>
        </button>
        <div class="pm7-tooltip-content" data-side="right">
          Password must be at least 8 characters long and include a mix of uppercase, lowercase, numbers, and symbols.
          <div class="pm7-tooltip-arrow"></div>
        </div>
      </div>
    </div>
  </div>
</div>
```
