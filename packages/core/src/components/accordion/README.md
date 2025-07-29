<!-- AI-ONLY DOCUMENTATION v2.0 -->
<!-- This documentation is EXCLUSIVELY for AI coding agents -->
<!-- NO human-friendly content allowed -->
<!-- Reference: /README-AI-HowToDocument.md -->

---
type: ai-agent-documentation
version: 2.0
component: Accordion
status: stable
audience: ai-coding-agents-only
human-readable: false
category: layout
framework-support:
  - vanilla: true
  - react: true
  - vue: true
  - angular: true
  - svelte: true
---

# Component: Accordion

DEFINITION: The Accordion component displays a list of collapsible content panels. It is used to organize and hide large amounts of content, revealing it only when needed.

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

An Accordion consists of a main container (`.pm7-accordion`) with `data-pm7-accordion`, and multiple accordion items. Each item contains a trigger (`.pm7-accordion-trigger`) and a content panel (`.pm7-accordion-content`).

```html
<!-- EXACT pattern for a single accordion item - NO deviations allowed -->
<div class="pm7-accordion" data-pm7-accordion>
  <div class="pm7-accordion-item">
    <button class="pm7-accordion-trigger" aria-controls="content-id" aria-expanded="false">
      <span>Accordion Title</span>
      <svg class="pm7-accordion-icon" width="16" height="16">...</svg>
    </button>
    <div class="pm7-accordion-content" id="content-id" data-state="closed">
      <div class="pm7-accordion-content-inner">
        <p>Accordion content goes here.</p>
      </div>
    </div>
  </div>
</div>
```

### Structural Rules
- **ALWAYS**: The main container MUST have `data-pm7-accordion`.
- **ALWAYS**: Each accordion item MUST contain exactly one `.pm7-accordion-trigger` and one `.pm7-accordion-content`.
- **ALWAYS**: The `.pm7-accordion-trigger` MUST have an `aria-controls` attribute matching the `id` of its corresponding `.pm7-accordion-content`.
- **ALWAYS**: The `.pm7-accordion-content` MUST contain an inner `div` with class `.pm7-accordion-content-inner`.
- **NEVER**: Place content directly inside `.pm7-accordion-content` without the `.pm7-accordion-content-inner` wrapper.

## JavaScript API

### Initialization
Initialization is automatic when `@pm7/core` is imported. For dynamically added components, re-initialization is required.

```javascript
// For components added after initial page load
window.PM7.init();
```

### Instance Access

```javascript
const element = document.querySelector('[data-pm7-accordion]');
const instance = element.PM7Accordion;
```

### Methods

| Method | Parameters | Return Type | Description |
|---|---|---|---|
| `open` | `index: number` | `void` | Opens the accordion item at the specified index. |
| `close` | `index: number` | `void` | Closes the accordion item at the specified index. |
| `toggle` | `index: number` | `void` | Toggles the accordion item at the specified index. |
| `openAll` | `(none)` | `void` | Opens all accordion items (only if `multiple` option is true). |
| `closeAll` | `(none)` | `void` | Closes all accordion items. |
| `destroy` | `(none)` | `void` | Removes all event listeners and cleans up the instance. |

### Options

Options can be set via `data-pm7-accordion-options` attribute on the main container or passed during manual initialization.

| Option | Type | Default | Description |
|---|---|---|---|
| `multiple` | `boolean` | `false` | If `true`, allows multiple accordion items to be open simultaneously. |
| `initialOpen` | `number[]` | `[]` | An array of indices of items to be open on initialization. |

### Events

| Event | When | Detail | Bubbles |
|---|---|---|---|---|
| `pm7:accordion:open` | After an item opens | `{ index: number, item: HTMLElement }` | YES |
| `pm7:accordion:close`| After an item closes | `{ index: number, item: HTMLElement }` | YES |

## Attributes

See /docs/ATTRIBUTES.md for cross-component attribute relationships.

| Attribute | Component(s) | Values | Required | Effect |
|---|---|---|---|---|
| `data-pm7-accordion` | Accordion | presence | YES | Initializes Accordion component. |
| `data-pm7-accordion-options` | Accordion | JSON string: `{"multiple": boolean, "initialOpen": number[]}` | NO | Configures Accordion behavior. |
| `data-state` | Accordion | `open`, `closed` | AUTO | Managed by JS to reflect component's open/closed state. |
| `aria-controls` | Accordion | ID of controlled element | YES | Links a control to the element it controls. |
| `aria-expanded` | Accordion | `true`, `false` | AUTO | Indicates whether a collapsible element is currently expanded or collapsed. |

## CSS Classes

| Class | Required | When | Effect |
|---|---|---|---|---|
| `.pm7-accordion` | YES | ALWAYS on the main container | Base styling for the accordion. |
| `.pm7-accordion-item` | YES | ALWAYS for each collapsible section | Styles an individual accordion section. |
| `.pm7-accordion-trigger` | YES | ALWAYS for the button that toggles content | Styles the clickable header of an accordion item. |
| `.pm7-accordion-content` | YES | ALWAYS for the collapsible content area | Styles the hidden/shown content panel. |
| `.pm7-accordion-content-inner` | YES | ALWAYS inside `.pm7-accordion-content` | Provides inner padding and ensures smooth transitions. |
| `.pm7-accordion-icon` | YES | ALWAYS inside `.pm7-accordion-trigger` | Styles the chevron icon, rotates on open/close. |
| `.pm7-accordion--flush` | NO | For a borderless, flush appearance | Removes outer borders and shadows. |
| `.pm7-accordion--no-separator` | NO | To remove separators between items | Removes the bottom border from accordion items. |

## Patterns

### Pattern: Basic Accordion
```html
<div class="pm7-accordion" data-pm7-accordion>
  <div class="pm7-accordion-item">
    <button class="pm7-accordion-trigger" aria-controls="acc-1" aria-expanded="false">
      <span>Section 1 Title</span>
      <svg class="pm7-accordion-icon" width="16" height="16">...</svg>
    </button>
    <div class="pm7-accordion-content" id="acc-1" data-state="closed">
      <div class="pm7-accordion-content-inner">
        <p>Content for section 1.</p>
      </div>
    </div>
  </div>
  <div class="pm7-accordion-item">
    <button class="pm7-accordion-trigger" aria-controls="acc-2" aria-expanded="false">
      <span>Section 2 Title</span>
      <svg class="pm7-accordion-icon" width="16" height="16">...</svg>
    </button>
    <div class="pm7-accordion-content" id="acc-2" data-state="closed">
      <div class="pm7-accordion-content-inner">
        <p>Content for section 2.</p>
      </div>
    </div>
  </div>
</div>
```

### Pattern: Multiple Open Items
Add `data-pm7-accordion-options='{"multiple": true}'` to the main container.

```html
<div class="pm7-accordion" data-pm7-accordion data-pm7-accordion-options='{"multiple": true}'>
  <!-- Accordion items -->
</div>
```

### Pattern: Initial Open Items
Add `data-pm7-accordion-options='{"initialOpen": [0, 2]}' ` to the main container to open the first and third items.

```html
<div class="pm7-accordion" data-pm7-accordion data-pm7-accordion-options='{"initialOpen": [0, 2]}'>
  <!-- Accordion items -->
</div>
```

### Pattern: Programmatic Control
```javascript
const accordionElement = document.querySelector('[data-pm7-accordion]');
const accordionInstance = accordionElement.PM7Accordion;

// Open the first item
accordionInstance.open(0);

// Close the second item
accordionInstance.close(1);

// Toggle the third item
accordionInstance.toggle(2);

// Listen for open event
accordionElement.addEventListener('pm7:accordion:open', (e) => {
  console.log(`Item at index ${e.detail.index} opened.`);
});
```

## Anti-Patterns

### NEVER: Omit `aria-controls` or `id`
```html
<!-- NEVER -->
<button class="pm7-accordion-trigger">Title</button>
<div class="pm7-accordion-content">Content</div>

<!-- BECAUSE -->
The trigger cannot be programmatically linked to its content, breaking functionality and accessibility.

<!-- INSTEAD -->
<button class="pm7-accordion-trigger" aria-controls="my-content-id">Title</button>
<div class="pm7-accordion-content" id="my-content-id">Content</div>
```

### NEVER: Manually control `display` or `height`
```css
/* NEVER */
.pm7-accordion-content { display: block !important; }

/* BECAUSE */
PM7 manages the visibility and height transitions via JavaScript and `data-state` attributes. Manual control will break animations and state.

/* INSTEAD */
// Let the component handle it.
```

### NEVER: Nest Accordions directly
```html
<!-- NEVER -->
<div class="pm7-accordion" data-pm7-accordion>
  <div class="pm7-accordion-item">
    <button class="pm7-accordion-trigger">Outer</button>
    <div class="pm7-accordion-content">
      <div class="pm7-accordion" data-pm7-accordion> <!-- Nested Accordion -->
        <!-- Inner items -->
      </div>
    </div>
  </div>
</div>

<!-- BECAUSE -->
This can lead to conflicting event listeners, keyboard navigation issues, and unexpected visual behavior.

<!-- INSTEAD -->
// Consider using a single accordion with more detailed content, or a different component for nested information.
```

## Rules

### ALWAYS
- **ALWAYS**: Ensure each `.pm7-accordion-trigger` is a `<button>` element.
- **ALWAYS**: Provide a unique `id` for each `.pm7-accordion-content` and link it via `aria-controls` on the trigger.
- **ALWAYS**: Include the `.pm7-accordion-icon` SVG inside the trigger for visual indication of state.
- **ALWAYS**: Wrap the content inside `.pm7-accordion-content` with `.pm7-accordion-content-inner`.

### NEVER
- **NEVER**: Manually toggle `aria-expanded` or `data-state` attributes; the component handles this.
- **NEVER**: Use `onClick` handlers on the trigger to manually open/close content; use the component's API if programmatic control is needed.
- **NEVER**: Place an accordion inside another accordion.

## CSS Variables

### Component-Specific Variables

| Variable | Light Mode | Dark Mode | Usage |
|----------|------------|-----------|--------|
| `--pm7-accordion-border` | `var(--pm7-border)` | `var(--pm7-border)` | Item border color |
| `--pm7-accordion-radius` | `var(--pm7-card-radius)` | `var(--pm7-card-radius)` | Item border radius |
| `--pm7-accordion-bg` | `var(--pm7-background)` | `var(--pm7-background)` | Item background |
| `--pm7-accordion-bg-hover` | `var(--pm7-muted)` | `var(--pm7-muted)` | Trigger hover background |
| `--pm7-accordion-content-height` | `auto` | `auto` | Content height (used by JS) |
| `--pm7-accordion-fixed-height` | `300px` | `300px` | Fixed height for height-fixed variant |

### Required Global Variables

| Variable | Light Mode | Dark Mode | Usage in Accordion |
|----------|------------|-----------|-------------------|
| `--pm7-surface` | `#ffffff` | `#1e1e1e` | Item background |
| `--pm7-background` | `#ffffff` | `#121212` | Default background |
| `--pm7-foreground` | `#000000` | `#e0e0e0` | Trigger text color |
| `--pm7-muted` | `#f5f5f5` | `#2d2d2d` | Hover background |
| `--pm7-muted-foreground` | `#333333` | `#e6e6e6` | Icon and content text color |
| `--pm7-primary` | `#1C86EF` | `#3b9eff` | Active/hover trigger color |
| `--pm7-border` | `#e0e0e0` | `#444` | Item borders, separator |
| `--pm7-card-radius` | `var(--pm7-radius-md)` | `var(--pm7-radius-md)` | Default border radius |
| `--pm7-card-shadow-hover` | `var(--pm7-shadow-md)` | `var(--pm7-shadow-md)` | Hover shadow |
| `--pm7-card-padding` | `var(--pm7-spacing-6)` | `var(--pm7-spacing-6)` | Default padding |
| `--pm7-card-padding-sm` | `var(--pm7-spacing-4)` | `var(--pm7-spacing-4)` | Small padding |
| `--pm7-card-padding-lg` | `var(--pm7-spacing-8)` | `var(--pm7-spacing-8)` | Large padding |
| `--pm7-text-base` | `1rem` | `1rem` | Default font size |
| `--pm7-text-sm` | `0.875rem` | `0.875rem` | Content text size |
| `--pm7-text-lg` | `1.125rem` | `1.125rem` | Large trigger text |
| `--pm7-spacing-2` | `0.5rem` | `0.5rem` | Small spacing |
| `--pm7-spacing-3` | `0.75rem` | `0.75rem` | Item gap, icon margin |
| `--pm7-scrollbar-thumb` | `rgba(0, 0, 0, 0.2)` | `rgba(255, 255, 255, 0.2)` | Scrollbar color |
| `--pm7-scrollbar-thumb-hover` | `rgba(0, 0, 0, 0.3)` | `rgba(255, 255, 255, 0.3)` | Scrollbar hover |

### Customization Example
```css
/* Custom accordion styling */
.my-app {
  --pm7-accordion-border: #dee2e6;
  --pm7-accordion-radius: 0.5rem;
  --pm7-accordion-bg-hover: #f8f9fa;
  --pm7-card-padding: 1.25rem;
}

/* Flat design without shadows */
.my-app .pm7-accordion-item:hover {
  box-shadow: none;
  border-color: var(--pm7-primary);
}
```

## Cross-Component Dependencies

### Works With
- **Icons**: Accordion uses chevron icons for expand/collapse indication
- **Card**: Accordion items are styled like cards
- **Content**: Any content can be placed inside accordion panels

### Conflicts With
- **Dialog**: Don't nest accordions inside dialogs (focus management issues)
- **Menu**: Don't use accordions as menu replacements

## Accessibility

- **Focus**: Focus is managed automatically. The active trigger is focusable.
- **Keyboard**: `Space` or `Enter` to toggle. `Up`/`Down` arrows to navigate between triggers. `Home`/`End` to jump to first/last trigger.
- **ARIA**: The component automatically manages `aria-expanded` on triggers and `role="region"` on content panels.
- **Screen reader**: The structure is fully accessible to screen readers, announcing expanded/collapsed states.

## Complete Example: FAQ Section

SCENARIO: A frequently asked questions section where users can expand answers.

```html
<div class="pm7-accordion" data-pm7-accordion>
  <div class="pm7-accordion-item">
    <button class="pm7-accordion-trigger" aria-controls="faq-1" aria-expanded="false">
      <span>What is PM7-UI?</span>
      <svg class="pm7-accordion-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
    </button>
    <div class="pm7-accordion-content" id="faq-1" data-state="closed">
      <div class="pm7-accordion-content-inner">
        <p>PM7-UI is a framework-agnostic UI component library built with pure CSS and vanilla JavaScript. It provides a complete set of UI components that work with any JavaScript framework without requiring framework-specific wrappers.</p>
      </div>
    </div>
  </div>
  <div class="pm7-accordion-item">
    <button class="pm7-accordion-trigger" aria-controls="faq-2" aria-expanded="false">
      <span>How do I install PM7-UI?</span>
      <svg class="pm7-accordion-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
    </button>
    <div class="pm7-accordion-content" id="faq-2" data-state="closed">
      <div class="pm7-accordion-content-inner">
        <p>You can install PM7-UI via npm: <code>npm install @pm7/core</code>. Then, import the CSS and JavaScript files into your project.</p>
      </div>
    </div>
  </div>
  <div class="pm7-accordion-item">
    <button class="pm7-accordion-trigger" aria-controls="faq-3" aria-expanded="false">
      <span>Can I use it with React/Vue/Angular?</span>
      <svg class="pm7-accordion-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
    </button>
    <div class="pm7-accordion-content" id="faq-3" data-state="closed">
      <div class="pm7-accordion-content-inner">
        <p>Yes, PM7-UI is framework-agnostic. You can use it with any JavaScript framework by simply including the CSS and JavaScript files. The components auto-initialize based on their data attributes.</p>
      </div>
    </div>
  </div>
</div>
```
