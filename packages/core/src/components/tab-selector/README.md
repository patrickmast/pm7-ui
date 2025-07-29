<!-- AI-ONLY DOCUMENTATION v2.0 -->
<!-- This documentation is EXCLUSIVELY for AI coding agents -->
<!-- NO human-friendly content allowed -->
<!-- Reference: /README-AI-HowToDocument.md -->

---
type: ai-agent-documentation
version: 2.0
component: TabSelector
status: stable
audience: ai-coding-agents-only
human-readable: false
category: navigation
framework-support:
  - vanilla: true
  - react: true
  - vue: true
  - angular: true
  - svelte: true
---

# Component: TabSelector

DEFINITION: The TabSelector component provides accessible, keyboard-navigable tabbed interfaces to organize content. It relies on a specific HTML structure and is activated by a JavaScript class.

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

The component requires a container with `data-pm7-tab-selector`, a `.pm7-tab-list` for triggers, and corresponding `.pm7-tab-content` panels. The link between a trigger and a panel is made with `aria-controls` and `id`.

```html
<!-- EXACT pattern - NO deviations allowed -->
<div class="pm7-tab-selector" data-pm7-tab-selector>
  <div class="pm7-tab-list" role="tablist">
    <button class="pm7-tab-trigger" role="tab" aria-controls="panel-1" aria-selected="true">Tab 1</button>
    <button class="pm7-tab-trigger" role="tab" aria-controls="panel-2" aria-selected="false">Tab 2</button>
  </div>
  <div class="pm7-tab-content" role="tabpanel" id="panel-1" data-state="active">
    <p>Content for Panel 1</p>
  </div>
  <div class="pm7-tab-content" role="tabpanel" id="panel-2" data-state="inactive">
    <p>Content for Panel 2</p>
  </div>
</div>
```

### Structural Rules
- **ALWAYS**: The main container MUST have `data-pm7-tab-selector`.
- **ALWAYS**: A `<button>` inside the `.pm7-tab-list` MUST have an `aria-controls` attribute that points to the `id` of a `.pm7-tab-content` panel.
- **ALWAYS**: The initially visible tab MUST have `aria-selected="true"` on its trigger and `data-state="active"` on its panel. All other panels must have `data-state="inactive"`.
- **NEVER**: Place content panels outside of the main `[data-pm7-tab-selector]` container.

## JavaScript API

### Initialization
Initialization is automatic when `@pm7/core` is imported. For dynamically added components, re-initialization is required.

```javascript
// For components added after initial page load
window.PM7.init();
```

### Instance Access

```javascript
const element = document.querySelector('[data-pm7-tab-selector]');
const instance = element.PM7TabSelector;
```

### Methods

| Method | Parameters | Return Type | Description |
|---|---|---|---|
| `selectTabByIndex` | `index: number` | `void` | Selects a tab by its zero-based index. |
| `selectTabById` | `panelId: string` | `void` | Selects a tab by the ID of its corresponding panel. |
| `destroy` | `(none)` | `void` | Removes all event listeners and cleans up the instance. |

### Events

| Event | When | Detail | Bubbles |
|---|---|---|---|---|
| `pm7:tab:change` | After a new tab is selected | `{ tab: HTMLElement, panel: HTMLElement, index: number }` | YES |

## Attributes

See /docs/ATTRIBUTES.md for cross-component attribute relationships.

| Attribute | Component(s) | Values | Required | Effect |
|---|---|---|---|---|
| `data-pm7-tab-selector` | TabSelector | presence | YES | Initializes TabSelector component. |
| `data-state` | TabSelector | `active`, `inactive` | AUTO | Managed by JS to reflect component's active state. |
| `aria-controls` | TabSelector | ID of controlled element | YES | Links a control to the element it controls. |
| `aria-selected` | TabSelector | `true`, `false` | AUTO | Indicates the current selected state of a tab. |
| `role` | TabSelector | `tablist`, `tab`, `tabpanel` | AUTO | Defines the purpose or nature of an element. |

## CSS Classes

| Class | Required | When | Effect |
|---|---|---|---|
| `.pm7-tab-selector` | YES | ALWAYS on the main container | Base styling for the component. |
| `.pm7-tab-list` | YES | ALWAYS for the list of triggers | Styles the container for the tab buttons. |
| `.pm7-tab-trigger` | YES | ALWAYS for each tab button | Applies styling for a tab button. |
| `.pm7-tab-content` | YES | ALWAYS for each content panel | Applies styling for a content panel. |
| `.pm7-tab-selector--solid`| NO | For a solid background style | Modifier class for a different visual appearance. |
| `.pm7-tab-selector--pills`| NO | For a pill-shaped style | Modifier class for a different visual appearance. |

## Patterns

### Pattern: Default Active Tab
To set a tab as active on page load, add `aria-selected="true"` to the trigger and `data-state="active"` to the panel.

```html
<div class="pm7-tab-selector" data-pm7-tab-selector>
  <div class="pm7-tab-list" role="tablist">
    <button class="pm7-tab-trigger" role="tab" aria-controls="p1" aria-selected="false">Tab 1</button>
    <button class="pm7-tab-trigger" role="tab" aria-controls="p2" aria-selected="true">Tab 2</button> <!-- Active Trigger -->
  </div>
  <div class="pm7-tab-content" role="tabpanel" id="p1" data-state="inactive">...</div>
  <div class="pm7-tab-content" role="tabpanel" id="p2" data-state="active">...</div> <!-- Active Panel -->
</div>
```

### Pattern: Programmatic Tab Selection
```javascript
const element = document.querySelector('[data-pm7-tab-selector]');
const instance = element.PM7TabSelector;

// Select the third tab (index 2)
instance.selectTabByIndex(2);

// Select the tab that controls the panel with id="security-panel"
instance.selectTabById('security-panel');
```

## Anti-Patterns

### NEVER: Mismatch `aria-controls` and `id`
```html
<!-- NEVER -->
<button class="pm7-tab-trigger" aria-controls="panel-one">Tab 1</button>
<div class="pm7-tab-content" id="panel-1">...</div>

<!-- BECAUSE -->
The JavaScript cannot link the button to the panel, and the tab will not switch.

<!-- INSTEAD -->
<button class="pm7-tab-trigger" aria-controls="panel-1">Tab 1</button>
<div class="pm7-tab-content" id="panel-1">...</div>
```

### NEVER: Use `onClick` handlers for switching
```javascript
// NEVER
document.querySelector('[aria-controls="panel-2"]').addEventListener('click', () => {
  // manual DOM manipulation to show panel 2
});

// BECAUSE -->
This bypasses the component's built-in logic, breaking keyboard navigation, accessibility attributes, and state management.

// INSTEAD -->
// Let the component handle it, or use the provided API.
instance.selectTabById('panel-2');
```

## Rules

### ALWAYS
- **ALWAYS**: Ensure every `pm7-tab-trigger` has an `aria-controls` attribute that exactly matches the `id` of a `pm7-tab-content` element.
- **ALWAYS**: Use `<button>` elements for tab triggers to ensure accessibility and keyboard navigation.
- **ALWAYS**: Maintain the parent/child relationship between the main container, the list, and the content panels.

### NEVER
- **NEVER**: Nest a `pm7-tab-selector` inside another one.
- **NEVER**: Manually control the visibility of tab panels with CSS (`display: none` or `display: block`). The component handles this via the `data-state` attribute.
- **NEVER**: Forget to run `window.PM7.init()` if you add a tab selector to the page dynamically.

## CSS Variables

### Component-Specific Variables

| Variable | Light Mode | Dark Mode | Usage |
|----------|------------|-----------|--------|
| `--pm7-tab-active-border` | `var(--pm7-primary)` | `var(--pm7-primary)` | Active tab border color |
| `--pm7-tab-active-bg` | `rgba(28, 134, 239, 0.1)` | `rgba(59, 158, 255, 0.1)` | Active tab background |

### Required Global Variables

| Variable | Light Mode | Dark Mode | Usage in TabSelector |
|----------|------------|-----------|----------------------|
| `--pm7-background` | `#ffffff` | `#121212` | Solid variant active tab |
| `--pm7-foreground` | `#000000` | `#e0e0e0` | Tab text color, solid active text |
| `--pm7-muted-foreground` | `#333333` | `#e6e6e6` | Inactive tab text |
| `--pm7-border` | `#e0e0e0` | `#444` | Tab list bottom border |
| `--pm7-muted` | `#f5f5f5` | `#2d2d2d` | Solid variant background, badge background |
| `--pm7-primary` | `#1C86EF` | `#3b9eff` | Active tab border, pills background |
| `--pm7-primary-light` | `rgba(28, 134, 239, 0.1)` | `rgba(59, 158, 255, 0.1)` | Default active tab background |
| `--pm7-primary-foreground` | `#ffffff` | `#ffffff` | Pills variant active text, badge text |
| `--pm7-radius` | `0.375rem` | `0.375rem` | Solid variant tab radius |
| `--pm7-radius-md` | `0.5rem` | `0.5rem` | Solid variant container radius |
| `--pm7-text-sm` | `0.875rem` | `0.875rem` | Default tab text size |
| `--pm7-text-xs` | `0.75rem` | `0.75rem` | Small variant text, badge text |
| `--pm7-text-base` | `1rem` | `1rem` | Large variant text size |
| `--pm7-font-medium` | `500` | `500` | Tab font weight |
| `--pm7-spacing-1` | `0.25rem` | `0.25rem` | Solid variant padding/gap, trigger padding |
| `--pm7-spacing-2` | `0.5rem` | `0.5rem` | Pills gap, icon margin, solid padding |
| `--pm7-spacing-4` | `1rem` | `1rem` | Solid/pills trigger padding, large padding |

### Customization Example
```css
/* Custom tab styling */
.my-app {
  --pm7-tab-active-border: #10b981;
  --pm7-tab-active-bg: rgba(16, 185, 129, 0.1);
  --pm7-primary: #10b981;
}

/* Minimal tabs without backgrounds */
.minimal-tabs {
  --pm7-tab-active-bg: transparent;
  --pm7-primary-light: transparent;
}

/* High contrast tabs */
.high-contrast {
  --pm7-tab-active-border: #000000;
  --pm7-muted-foreground: #666666;
}
```

## Cross-Component Dependencies

### Works With
- **Icons**: Tab triggers can include icons
- **Badge**: Tab triggers can show counts/badges
- **Form Elements**: Tab panels often contain forms
- **Card**: Tab panels can contain cards

### Conflicts With
- **Accordion**: Don't mix tabs and accordions for same content
- **Menu**: Tabs are for content switching, not navigation menus

## Accessibility

- **Focus**: Focus is managed automatically. The active tab trigger is focusable.
- **Keyboard**: Arrow keys (`Left`/`Right`) navigate between tabs. `Home`/`End` jump to the first/last tab.
- **ARIA**: The component automatically manages `role="tablist"`, `role="tab"`, `role="tabpanel"`, and `aria-selected` attributes.
- **Screen reader**: The structure is fully accessible to screen readers.

## Complete Example: Settings Page

SCENARIO: A user settings page with different categories organized into tabs.

```html
<div class="pm7-tab-selector pm7-tab-selector--solid" data-pm7-tab-selector>
  <div class="pm7-tab-list" role="tablist">
    <button class="pm7-tab-trigger" role="tab" aria-controls="profile" aria-selected="true">Profile</button>
    <button class="pm7-tab-trigger" role="tab" aria-controls="notifications" aria-selected="false">Notifications</button>
    <button class="pm7-tab-trigger" role="tab" aria-controls="security" aria-selected="false">Security</button>
  </div>
  <div class="pm7-tab-content" role="tabpanel" id="profile" data-state="active">
    <h3>Profile Settings</h3>
    <!-- Form elements for profile -->
  </div>
  <div class="pm7-tab-content" role="tabpanel" id="notifications" data-state="inactive">
    <h3>Notification Settings</h3>
    <!-- Checkboxes for notification preferences -->
  </div>
  <div class="pm7-tab-content" role="tabpanel" id="security" data-state="inactive">
    <h3>Security Settings</h3>
    <!-- Options for password change, 2FA -->
  </div>
</div>
```
