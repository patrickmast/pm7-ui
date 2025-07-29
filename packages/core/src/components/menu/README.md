<!-- AI-ONLY DOCUMENTATION v2.0 -->
<!-- This documentation is EXCLUSIVELY for AI coding agents -->
<!-- NO human-friendly content allowed -->
<!-- Reference: /README-AI-HowToDocument.md -->

---
type: ai-agent-documentation
version: 2.0
component: Menu
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

# Component: Menu

DEFINITION: The Menu component provides accessible, keyboard-navigable dropdown menus for contextual actions or navigation. It consists of a trigger and a content panel with menu items.

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

The Menu component requires a main container with `data-pm7-menu`, a trigger button (`.pm7-menu-trigger`), and a content container (`.pm7-menu-content`) holding the menu items.

```html
<!-- EXACT pattern - NO deviations allowed -->
<div data-pm7-menu>
  <button class="pm7-menu-trigger">Open Menu</button>
  <div class="pm7-menu-content">
    <button class="pm7-menu-item">Menu Item 1</button>
    <button class="pm7-menu-item">Menu Item 2</button>
  </div>
</div>
```

### Structural Rules
- **ALWAYS**: The main menu container MUST have `data-pm7-menu`.
- **ALWAYS**: The trigger MUST be a `<button>` with class `.pm7-menu-trigger`.
- **ALWAYS**: All interactive menu items MUST be `<button>` elements with class `.pm7-menu-item`.
- **ALWAYS**: All menu items MUST be contained within a `div` with class `.pm7-menu-content`.
- **NEVER**: Use `<div>` or `<span>` elements as interactive menu items. They lack proper accessibility and keyboard support.

## JavaScript API

### Initialization
Initialization is automatic when `@pm7/core` is imported. For dynamically added components, re-initialization is required.

```javascript
// For components added after initial page load
window.PM7.init();
```

### Instance Access

```javascript
const element = document.querySelector('[data-pm7-menu]');
const instance = element.PM7Menu;
```

### Methods

| Method | Parameters | Return Type | Description |
|---|---|---|---|
| `open` | `(none)` | `void` | Opens the menu dropdown. |
| `close` | `(none)` | `void` | Closes the menu dropdown. |
| `toggle` | `(none)` | `void` | Toggles the menu's open/closed state. |
| `adjustPosition` | `(none)` | `void` | Recalculates and adjusts the menu's position based on viewport. |
| `destroy` | `(none)` | `void` | Removes all event listeners and cleans up the instance. |

### Events

| Event | When | Detail | Bubbles |
|---|---|---|---|---|
| `pm7:menu:select` | When a menu item is clicked | `{ item: HTMLElement, text: string, value: string | null }` | YES |
| `pm7:menu:open` | After the menu opens | `(none)` | YES |
| `pm7:menu:close` | After the menu closes | `(none)` | YES |

## Attributes

See /docs/ATTRIBUTES.md for cross-component attribute relationships.

| Attribute | Component(s) | Values | Required | Effect |
|---|---|---|---|---|
| `data-pm7-menu` | Menu | presence | YES | Initializes Menu component. |
| `data-position` | Menu | `bottom-start`, `bottom-end`, `top-start`, `top-end`, `left-start`, `left-end`, `right-start`, `right-end` | NO | Sets the dropdown/popover position relative to the trigger. |
| `data-checked` | Menu | `true`, `false` | NO | Indicates the checked state for checkbox/radio/switch menu items. |
| `data-name` | Menu | string | YES (radio) | Groups radio menu items for mutual exclusion. |
| `data-value` | Menu | string | NO | Custom value associated with a menu item, returned on `pm7:menu:select`. |
| `data-state` | Menu | `open`, `closed` | AUTO | Managed by JS to reflect component's open/closed state. |
| `aria-controls` | Menu | ID of controlled element | YES | Links a control to the element it controls. |
| `aria-expanded` | Menu | `true`, `false` | AUTO | Indicates whether a collapsible element is currently expanded or collapsed. |
| `aria-haspopup` | Menu | `true` | AUTO | Indicates the availability of a pop-up menu or dialog. |
| `aria-label` | Menu | string | YES (icon-only) | Provides an accessible name for an element when no visible text is available. |
| `role` | Menu | `menu`, `menuitem` | AUTO | Defines the purpose or nature of an element. |

## CSS Classes

| Class | Required | When | Effect |
|---|---|---|---|
| `.pm7-menu` | YES | ALWAYS on the main container | Base styling for the menu. |
| `.pm7-menu-trigger` | YES | ALWAYS on the button that opens the menu | Styles the clickable trigger. |
| `.pm7-menu-content` | YES | ALWAYS for the dropdown content wrapper | Styles the container for menu items. |
| `.pm7-menu-item` | YES | ALWAYS for each interactive menu item | Styles an individual menu item. |
| `.pm7-menu-item--checkbox` | NO | For a checkbox-like menu item | Adds a checkbox indicator. |
| `.pm7-menu-item--radio` | NO | For a radio-button-like menu item | Adds a radio button indicator. |
| `.pm7-menu-item--switch` | NO | For a toggle switch menu item | Adds a switch indicator. |
| `.pm7-menu-item--destructive` | NO | For a destructive action | Styles the item with a red text color. |
| `.pm7-menu-item--has-submenu` | NO | For items that open a submenu | Adds an arrow icon and indicates a submenu. |
| `.pm7-menu-separator` | NO | To visually separate groups of items | Creates a horizontal divider. |
| `.pm7-menu-label` | NO | For non-interactive descriptive text | Styles a non-clickable label. |
| `.pm7-menu-shortcut` | NO | For displaying keyboard shortcuts | Styles text to appear right-aligned as a shortcut. |
| `.pm7-menu-item-icon` | NO | For icons within menu items | Styles an icon to appear left-aligned. |
| `.pm7-submenu` | NO | For the content of a submenu | Styles the container for nested menu items. |

## Patterns

### Pattern: Basic Dropdown Menu
```html
<div data-pm7-menu>
  <button class="pm7-menu-trigger pm7-button">Actions</button>
  <div class="pm7-menu-content">
    <button class="pm7-menu-item">Edit</button>
    <button class="pm7-menu-item">Duplicate</button>
    <div class="pm7-menu-separator"></div>
    <button class="pm7-menu-item pm7-menu-item--destructive">Delete</button>
  </div>
</div>
```

### Pattern: Menu with Checkbox Items
```html
<div data-pm7-menu>
  <button class="pm7-menu-trigger pm7-button">View Options</button>
  <div class="pm7-menu-content">
    <button class="pm7-menu-item pm7-menu-item--checkbox" data-checked="true">Show Toolbar</button>
    <button class="pm7-menu-item pm7-menu-item--checkbox" data-checked="false">Show Sidebar</button>
  </div>
</div>
```

### Pattern: Menu with Submenu
```html
<div data-pm7-menu>
  <button class="pm7-menu-trigger pm7-button">File</button>
  <div class="pm7-menu-content">
    <button class="pm7-menu-item">New File</button>
    <button class="pm7-menu-item pm7-menu-item--has-submenu">
      Export
      <svg class="pm7-menu-submenu-icon" width="16" height="16">...</svg>
    </button>
    <div class="pm7-submenu">
      <button class="pm7-menu-item">Export as PDF</button>
      <button class="pm7-menu-item">Export as CSV</button>
    </div>
  </div>
</div>
```

## Anti-Patterns

### NEVER: Use non-button elements for interactive menu items
```html
<!-- NEVER -->
<div class="pm7-menu-content">
  <a href="#" class="pm7-menu-item">Link Item</a>
  <div class="pm7-menu-item">Div Item</div>
</div>

<!-- BECAUSE -->
Non-button elements lack native keyboard support, ARIA semantics, and proper focus management, making the menu inaccessible.

<!-- INSTEAD -->
<div class="pm7-menu-content">
  <button class="pm7-menu-item">Button Item</button>
  <button class="pm7-menu-item">Another Button Item</button>
</div>
```

### NEVER: Omit `data-name` for radio menu items
```html
<!-- NEVER -->
<button class="pm7-menu-item pm7-menu-item--radio" data-checked="true">Option A</button>
<button class="pm7-menu-item pm7-menu-item--radio">Option B</button>

<!-- BECAUSE -->
Without a `data-name` attribute, radio items will not function as a mutually exclusive group.

<!-- INSTEAD -->
<button class="pm7-menu-item pm7-menu-item--radio" data-name="my-group" data-checked="true">Option A</button>
<button class="pm7-menu-item pm7-menu-item--radio" data-name="my-group">Option B</button>
```

### NEVER: Manually position the menu content
```html
<!-- NEVER -->
<div data-pm7-menu>
  <button class="pm7-menu-trigger">Menu</button>
  <div class="pm7-menu-content" style="position: absolute; top: 100px; left: 50px;">...</div>
</div>

<!-- BECAUSE -->
The Menu component automatically handles positioning based on the trigger, viewport, and `data-position` attribute. Manual positioning will conflict and break responsiveness.

<!-- INSTEAD -->
<div data-pm7-menu data-position="bottom-end">
  <button class="pm7-menu-trigger">Menu</button>
  <div class="pm7-menu-content">...</div>
</div>
```

## Rules

### ALWAYS
- **ALWAYS**: Use a `<button>` element for the menu trigger and all interactive menu items.
- **ALWAYS**: Ensure the `.pm7-menu-content` `div` is a direct sibling of the `.pm7-menu-trigger`.
- **ALWAYS**: For radio menu items, use the `data-name` attribute to group them.
- **ALWAYS**: Add `aria-label` to icon-only menu triggers for accessibility.

### NEVER
- **NEVER**: Use `<div>` or `<span>` for interactive menu items.
- **NEVER**: Manually control the `display` or `position` of the menu content.
- **NEVER**: Nest a `data-pm7-menu` component inside another `data-pm7-menu` component (use the `pm7-submenu` structure instead).
- **NEVER**: Forget to call `window.PM7.init()` if you add a menu to the page dynamically after initial page load.

## CSS Variables

### Component-Specific Variables

| Variable | Light Mode | Dark Mode | Usage |
|----------|------------|-----------|--------|
| `--pm7-menu-bg` | `var(--pm7-surface)` | `#1e1e1e` | Menu dropdown background |
| `--pm7-menu-hover` | `var(--pm7-primary)` | `var(--pm7-primary)` | Item hover background |
| `--pm7-menu-hover-text` | `var(--pm7-primary-foreground)` | `var(--pm7-primary-foreground)` | Item hover text color |
| `--pm7-menu-hover-shadow` | `rgba(0, 0, 0, 0.08) 0px 5px 15px 0px, rgba(25, 28, 33, 0.2) 0px 15px 35px -5px` | `rgba(255, 255, 255, 0.05) 0px 5px 15px 0px, rgba(255, 255, 255, 0.1) 0px 15px 35px -5px` | Hover effect shadow |
| `--pm7-menu-radius` | `var(--pm7-radius)` | `var(--pm7-radius)` | Menu border radius |
| `--pm7-menu-shadow` | `var(--pm7-shadow-lg)` | `var(--pm7-shadow-lg)` | Dropdown shadow |
| `--pm7-menu-font-size` | `var(--pm7-text-sm)` | `var(--pm7-text-sm)` | Menu item text size |
| `--pm7-menu-font-weight` | `var(--pm7-font-normal)` | `var(--pm7-font-normal)` | Menu item font weight |
| `--pm7-menu-line-height` | `var(--pm7-leading-normal)` | `var(--pm7-leading-normal)` | Menu item line height |
| `--pm7-menu-padding-x` | `var(--pm7-spacing-4)` | `var(--pm7-spacing-4)` | Horizontal padding |
| `--pm7-menu-padding-y` | `var(--pm7-spacing-2)` | `var(--pm7-spacing-2)` | Vertical padding |
| `--pm7-menu-item-gap` | `var(--pm7-spacing-2)` | `var(--pm7-spacing-2)` | Gap between icon and text |

### Required Global Variables

| Variable | Light Mode | Dark Mode | Usage in Menu |
|----------|------------|-----------|---------------|
| `--pm7-surface` | `#ffffff` | `#1e1e1e` | Menu bar background |
| `--pm7-foreground` | `#000000` | `#e0e0e0` | Menu item text color |
| `--pm7-primary` | `#1C86EF` | `#3b9eff` | Active/selected item background |
| `--pm7-primary-foreground` | `#ffffff` | `#ffffff` | Active/selected item text |
| `--pm7-muted` | `#f5f5f5` | `#2d2d2d` | Switch background when off |
| `--pm7-muted-foreground` | `#333333` | `#e6e6e6` | Label text, shortcuts |
| `--pm7-destructive-foreground` | `#ef4444` | `#ef4444` | Destructive item hover text |
| `--pm7-border` | `#e0e0e0` | `#444` | Menu borders, separators |
| `--pm7-background` | `#ffffff` | `#121212` | Switch thumb background |
| `--pm7-ring` | `#1C86EF` | `#3b9eff` | Focus ring color |
| `--pm7-shadow-sm` | `0 1px 2px 0 rgb(0 0 0 / 0.05)` | `0 1px 2px 0 rgb(0 0 0 / 0.1)` | Switch thumb shadow |
| `--pm7-spacing-4` | `1rem` | `1rem` | Mobile menu margins |
| `--pm7-spacing-2` | `0.5rem` | `0.5rem` | Various gaps and margins |

### Customization Example
```css
/* Custom flat menu without shadows */
.my-app {
  --pm7-menu-shadow: none;
  --pm7-menu-hover-shadow: none;
  --pm7-menu-hover: #e3f2fd;
  --pm7-menu-hover-text: #1976d2;
}

/* Custom dark theme menu */
.my-app.dark {
  --pm7-menu-bg: #2c2c2c;
  --pm7-menu-hover: #424242;
  --pm7-menu-hover-text: #ffffff;
  --pm7-border: #616161;
}
```

## Cross-Component Dependencies

### Works With
- **Button**: Menu triggers are often styled as buttons
- **Dialog**: Menu items can trigger dialogs via `onclick`
- **Toast**: Show feedback after menu actions
- **Icons**: Menu items frequently include icons

### Conflicts With
- **Tooltip**: NEVER use tooltips on menu triggers or items (accessibility conflicts)
- **Dropdown**: If using a separate dropdown component, don't mix with Menu

## Accessibility

- **Focus**: Focus is managed automatically. When the menu opens, focus moves to the first item. When it closes, focus returns to the trigger.
- **Keyboard**: `Enter` or `Space` to open/select. `Escape` to close. `Up`/`Down` arrows to navigate items. `Left`/`Right` arrows for submenus.
- **ARIA**: The component automatically manages `role="menu"`, `role="menuitem"`, `aria-haspopup`, `aria-expanded`, `aria-checked`, and `aria-current` attributes.
- **Screen reader**: Fully accessible to screen readers, announcing menu states and item types.

## Complete Example: User Profile Menu

SCENARIO: A user dropdown menu in a header with profile settings, preferences, and sign-out options.

```html
<div data-pm7-menu data-position="bottom-end">
  <button class="pm7-menu-trigger pm7-button pm7-button--ghost pm7-button--icon" aria-label="User menu">
    <img src="https://via.placeholder.com/32" alt="User Avatar" style="border-radius: 50%;">
  </button>
  <div class="pm7-menu-content">
    <div class="pm7-menu-label">john.doe@example.com</div>
    <div class="pm7-menu-separator"></div>
    <button class="pm7-menu-item">
      <svg class="pm7-menu-item-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
      Profile Settings
    </button>
    <button class="pm7-menu-item pm7-menu-item--has-submenu">
      <svg class="pm7-menu-item-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>
      Preferences
      <svg class="pm7-menu-submenu-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
    </button>
    <div class="pm7-submenu">
      <button class="pm7-menu-item pm7-menu-item--switch" data-checked="true">
        Email Notifications
      </button>
      <button class="pm7-menu-item pm7-menu-item--switch" data-checked="false">
        Desktop Notifications
      </button>
    </div>
    <div class="pm7-menu-separator"></div>
    <button class="pm7-menu-item pm7-menu-item--destructive">
      <svg class="pm7-menu-item-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="17 16 22 12 17 8"></polyline><line x1="22" y1="12" x2="10" y2="12"></line></svg>
      Sign Out
    </button>
  </div>
</div>

<script>
  document.querySelector('[data-pm7-menu]').addEventListener('pm7:menu:select', (e) => {
    console.log('Selected:', e.detail.text);
    if (e.detail.text === 'Sign Out') {
      alert('Signing out...');
    }
  });
</script>
```
