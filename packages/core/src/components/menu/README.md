<!-- AI-ONLY DOCUMENTATION -->
---
type: ai-agent-documentation
audience: ai-coding-agents-only
style: exact-patterns
human-readable: false
documentation-rules:
  - NO storytelling or explanations
  - ONLY exact code patterns
  - Binary IF/THEN decisions
  - Explicit anti-patterns with NEVER/ALWAYS
  - Copy-paste ready code blocks
---

# Component: Menu

Dropdown menu component for contextual actions.

## Installation

```bash
npm install @pm7/core
```

### CSS Import

```javascript
// ES modules
import '@pm7/core/dist/pm7.css';

// HTML
<link rel="stylesheet" href="node_modules/@pm7/core/dist/pm7.css">
```

### JavaScript Setup

```javascript
// ES modules - adds PM7 to window
import '@pm7/core';

// Dynamic import (Next.js)
import('@pm7/core').then(() => {
  window.PM7.init();
});

// TypeScript declarations
declare global {
  interface Window {
    PM7: {
      init: () => void;
      initMenus?: () => void;
      Menu?: new (element: Element) => any;
    }
  }
}
```

## Required Structure

```html
<div data-pm7-menu>
  <button class="pm7-menu-trigger">Trigger</button>
  <div class="pm7-menu-content">
    <button class="pm7-menu-item">Item</button>
  </div>
</div>
```

## Attributes

| Attribute | Values | Effect |
|-----------|---------|---------|
| `data-pm7-menu` | presence | Auto-initializes menu |
| `data-position` | `bottom-start`, `bottom-end`, `top-start`, `top-end`, `left-start`, `left-end`, `right-start`, `right-end` | Menu position |
| `data-checked` | `true`, `false` | Checkable item state |
| `data-name` | string | Radio group name |
| `data-value` | string | Item value |
| `disabled` | presence | Disable item |

## CSS Classes

| Class | Required | Usage |
|-------|----------|-------|
| `.pm7-menu` | AUTO | Menu container (added by JS) |
| `.pm7-menu--flat` | NO | No shadows |
| `.pm7-menu--flat-hover` | NO | No hover shadows |
| `.pm7-menu-trigger` | YES | Trigger button |
| `.pm7-menu-content` | YES | Dropdown container |
| `.pm7-menu-item` | YES | Menu item |
| `.pm7-menu-item--checkbox` | NO | Checkbox item |
| `.pm7-menu-item--radio` | NO | Radio item |
| `.pm7-menu-item--switch` | NO | Switch item |
| `.pm7-menu-item--destructive` | NO | Red text item |
| `.pm7-menu-item--has-submenu` | NO | Has submenu |
| `.pm7-menu-separator` | NO | Divider line |
| `.pm7-menu-label` | NO | Section label |
| `.pm7-menu-section-title` | NO | Section header |
| `.pm7-menu-item-icon` | NO | Item icon |
| `.pm7-menu-shortcut` | NO | Keyboard shortcut |
| `.pm7-submenu` | NO | Submenu container |
| `.pm7-menu-submenu-icon` | NO | Submenu arrow |
| `.pm7-menu-bar` | NO | Menu bar container |
| `.pm7-menu-bar--borderless` | NO | No border/background |
| `.pm7-menu-bar--flat` | NO | No shadows |
| `.pm7-menu-bar--flat-hover` | NO | No hover shadows |

## Patterns

### Pattern: Basic Menu
```html
<div data-pm7-menu>
  <button class="pm7-menu-trigger pm7-button pm7-button--outline">
    Options
  </button>
  <div class="pm7-menu-content">
    <button class="pm7-menu-item">Edit</button>
    <button class="pm7-menu-item">Duplicate</button>
    <div class="pm7-menu-separator"></div>
    <button class="pm7-menu-item pm7-menu-item--destructive">Delete</button>
  </div>
</div>
```

### Pattern: Menu with Icons
```html
<div data-pm7-menu>
  <button class="pm7-menu-trigger pm7-button pm7-button--primary">
    Actions
  </button>
  <div class="pm7-menu-content">
    <button class="pm7-menu-item">
      <svg class="pm7-menu-item-icon" width="16" height="16">...</svg>
      Edit
    </button>
    <button class="pm7-menu-item">
      <svg class="pm7-menu-item-icon" width="16" height="16">...</svg>
      Copy
    </button>
  </div>
</div>
```

### Pattern: Checkbox Items
```html
<div data-pm7-menu>
  <button class="pm7-menu-trigger">View</button>
  <div class="pm7-menu-content">
    <button class="pm7-menu-item pm7-menu-item--checkbox" data-checked="true">
      Show Toolbar
    </button>
    <button class="pm7-menu-item pm7-menu-item--checkbox">
      Show Sidebar
    </button>
  </div>
</div>
```

### Pattern: Radio Items
```html
<div data-pm7-menu>
  <button class="pm7-menu-trigger">Theme</button>
  <div class="pm7-menu-content">
    <button class="pm7-menu-item pm7-menu-item--radio" data-name="theme" data-checked="true">
      Light
    </button>
    <button class="pm7-menu-item pm7-menu-item--radio" data-name="theme">
      Dark
    </button>
    <button class="pm7-menu-item pm7-menu-item--radio" data-name="theme">
      System
    </button>
  </div>
</div>
```

### Pattern: Switch Items
```html
<div data-pm7-menu>
  <button class="pm7-menu-trigger">Settings</button>
  <div class="pm7-menu-content">
    <button class="pm7-menu-item pm7-menu-item--switch" data-checked="true">
      Auto-save
    </button>
    <button class="pm7-menu-item pm7-menu-item--switch">
      Notifications
    </button>
  </div>
</div>
```

### Pattern: Menu with Sections
```html
<div data-pm7-menu>
  <button class="pm7-menu-trigger">Account</button>
  <div class="pm7-menu-content">
    <div class="pm7-menu-label">Personal</div>
    <button class="pm7-menu-item">Profile</button>
    <button class="pm7-menu-item">Settings</button>
    <div class="pm7-menu-separator"></div>
    <div class="pm7-menu-section-title">Team</div>
    <button class="pm7-menu-item">Team Settings</button>
    <button class="pm7-menu-item">Invite Members</button>
  </div>
</div>
```

### Pattern: Menu with Shortcuts
```html
<div data-pm7-menu>
  <button class="pm7-menu-trigger">File</button>
  <div class="pm7-menu-content">
    <button class="pm7-menu-item">
      New
      <span class="pm7-menu-shortcut">⌘N</span>
    </button>
    <button class="pm7-menu-item">
      Open
      <span class="pm7-menu-shortcut">⌘O</span>
    </button>
    <button class="pm7-menu-item">
      Save
      <span class="pm7-menu-shortcut">⌘S</span>
    </button>
  </div>
</div>
```

### Pattern: Submenu
```html
<div data-pm7-menu>
  <button class="pm7-menu-trigger">More</button>
  <div class="pm7-menu-content">
    <button class="pm7-menu-item">New File</button>
    <button class="pm7-menu-item pm7-menu-item--has-submenu">
      Share
      <svg class="pm7-menu-submenu-icon" width="16" height="16">...</svg>
    </button>
    <div class="pm7-submenu">
      <button class="pm7-menu-item">Email</button>
      <button class="pm7-menu-item">Link</button>
    </div>
  </div>
</div>
```

### Pattern: Menu Bar
```html
<div class="pm7-menu-bar">
  <div data-pm7-menu>
    <button class="pm7-menu-trigger">File</button>
    <div class="pm7-menu-content">
      <button class="pm7-menu-item">New</button>
      <button class="pm7-menu-item">Open</button>
    </div>
  </div>
  <div data-pm7-menu>
    <button class="pm7-menu-trigger">Edit</button>
    <div class="pm7-menu-content">
      <button class="pm7-menu-item">Undo</button>
      <button class="pm7-menu-item">Redo</button>
    </div>
  </div>
</div>
```

### Pattern: Icon-Only Trigger
```html
<div data-pm7-menu>
  <button class="pm7-menu-trigger pm7-button pm7-button--icon" aria-label="More options">
    <svg width="16" height="16">...</svg>
  </button>
  <div class="pm7-menu-content">
    <button class="pm7-menu-item">Edit</button>
    <button class="pm7-menu-item">Delete</button>
  </div>
</div>
```

### Pattern: Disabled Items
```html
<div class="pm7-menu-content">
  <button class="pm7-menu-item">Available</button>
  <button class="pm7-menu-item" disabled>Unavailable</button>
  <button class="pm7-menu-item">Another Action</button>
</div>
```

### Pattern: JavaScript Control
```javascript
// Manual initialization
const element = document.querySelector('[data-pm7-menu]');
const menu = new PM7.Menu(element);

// Methods
menu.open();
menu.close();
menu.toggle();
menu.adjustPosition();

// Get instance from element
const instance = element.PM7Menu;

// Events
element.addEventListener('pm7-menu-select', (e) => {
  // e.detail = { item: HTMLElement, text: string, value: string }
});
```

### Pattern: Next.js Implementation
```jsx
'use client'

import { useEffect } from 'react'

export default function MenuPage() {
  useEffect(() => {
    import('@pm7/core').then(() => {
      if (window.PM7?.initMenus) {
        window.PM7.initMenus();
      }
    });
  }, []);

  return (
    <div data-pm7-menu>
      <button className="pm7-menu-trigger pm7-button pm7-button--outline">
        Options
      </button>
      <div className="pm7-menu-content">
        <button className="pm7-menu-item">Edit</button>
        <button className="pm7-menu-item">Delete</button>
      </div>
    </div>
  );
}
```

## JavaScript API

### Initialization

IF auto-init THEN add `data-pm7-menu`
IF manual THEN `new PM7.Menu(element)`
IF Next.js THEN dynamic import with optional chaining

### Methods

| Method | Parameters | Returns | Usage |
|--------|------------|---------|-------|
| `open()` | none | void | `menu.open()` |
| `close()` | none | void | `menu.close()` |
| `toggle()` | none | void | `menu.toggle()` |
| `adjustPosition()` | none | void | `menu.adjustPosition()` |

### Events

| Event | When Fired | Detail |
|-------|------------|---------|
| `pm7-menu-select` | Item selected | `{ item: HTMLElement, text: string, value: string }` |

## Position Values

| Value | Position |
|-------|----------|
| `bottom-start` | Default, below left |
| `bottom-end` | Below right |
| `top-start` | Above left |
| `top-end` | Above right |
| `left-start` | Left top |
| `left-end` | Left bottom |
| `right-start` | Right top |
| `right-end` | Right bottom |

## Anti-Patterns

### Anti-Pattern: Missing Content Wrapper
```html
<!-- NEVER -->
<div data-pm7-menu>
  <button class="pm7-menu-trigger">Menu</button>
  <button class="pm7-menu-item">Option</button>
</div>

<!-- ALWAYS -->
<div data-pm7-menu>
  <button class="pm7-menu-trigger">Menu</button>
  <div class="pm7-menu-content">
    <button class="pm7-menu-item">Option</button>
  </div>
</div>
```

### Anti-Pattern: Div Menu Items
```html
<!-- NEVER -->
<div class="pm7-menu-content">
  <div class="pm7-menu-item" onclick="doSomething()">Option</div>
</div>

<!-- ALWAYS -->
<div class="pm7-menu-content">
  <button class="pm7-menu-item">Option</button>
</div>
```

### Anti-Pattern: Radio Without Name
```html
<!-- NEVER -->
<button class="pm7-menu-item pm7-menu-item--radio">Light</button>
<button class="pm7-menu-item pm7-menu-item--radio">Dark</button>

<!-- ALWAYS -->
<button class="pm7-menu-item pm7-menu-item--radio" data-name="theme">Light</button>
<button class="pm7-menu-item pm7-menu-item--radio" data-name="theme">Dark</button>
```

### Anti-Pattern: Manual Positioning
```html
<!-- NEVER -->
<div data-pm7-menu style="position: absolute; top: 50px;">

<!-- ALWAYS -->
<div data-pm7-menu data-position="bottom-end">
```

### Anti-Pattern: Icon-Only Without Label
```html
<!-- NEVER -->
<button class="pm7-menu-trigger pm7-button pm7-button--icon">
  <svg>...</svg>
</button>

<!-- ALWAYS -->
<button class="pm7-menu-trigger pm7-button pm7-button--icon" aria-label="More options">
  <svg>...</svg>
</button>
```

### Anti-Pattern: Direct Method Calls
```javascript
// NEVER
window.PM7.initMenus();

// ALWAYS
if (window.PM7?.initMenus) {
  window.PM7.initMenus();
}
```

## Rules

- ALWAYS: Use `button` elements for menu items
- ALWAYS: Include `pm7-menu-content` wrapper
- ALWAYS: Use `data-name` for radio groups
- ALWAYS: Add `aria-label` to icon-only triggers
- ALWAYS: Check PM7 exists before calling methods
- NEVER: Use div elements for interactive items
- NEVER: Apply manual positioning styles
- NEVER: Nest menus inside other menus
- NEVER: Initialize same menu multiple times

## CSS Variables

| Variable | Default | Usage |
|----------|---------|-------|
| `--pm7-menu-min-width` | `8rem` | Minimum width |
| `--pm7-menu-max-width` | `20rem` | Maximum width |
| `--pm7-menu-radius` | `0.375rem` | Border radius |
| `--pm7-menu-shadow` | complex shadow | Dropdown shadow |
| `--pm7-menu-item-padding` | `0.5rem 0.75rem` | Item padding |
| `--pm7-menu-item-radius` | `0.25rem` | Item radius |
| `--pm7-menu-animation-duration` | `150ms` | Animation speed |

## Menu Bar Behavior

IF inside `.pm7-menu-bar` THEN:
- Hover opens menus when any menu is open
- Arrow keys navigate between menus
- Click outside closes all

## Keyboard Navigation

- Tab: Focus trigger
- Enter/Space: Open menu or select item
- Escape: Close menu
- ArrowDown: Next item
- ArrowUp: Previous item
- ArrowRight: Open submenu
- ArrowLeft: Close submenu
- Home: First item
- End: Last item

## Modifiers

### Shadow Modifiers

IF `--flat` THEN no shadows at all
IF `--flat-hover` THEN dropdown shadows only, no hover shadows
IF default THEN full shadows

### Menu Bar Modifiers

IF `--borderless` THEN no border or background
IF default THEN with border and background

## Accessibility

- Focus trap when open
- Focus restoration on close
- ARIA attributes auto-applied
- Skip disabled items in navigation
- Full keyboard support

## Framework Usage

### React
```jsx
'use client'

<div data-pm7-menu>
  <button className="pm7-menu-trigger">Menu</button>
  <div className="pm7-menu-content">
    <button className="pm7-menu-item">Option</button>
  </div>
</div>
```

### Vue
```vue
<template>
  <div data-pm7-menu>
    <button class="pm7-menu-trigger">Menu</button>
    <div class="pm7-menu-content">
      <button class="pm7-menu-item" @click="handleClick">Option</button>
    </div>
  </div>
</template>
```

## Related Components

- Button: Common trigger component
- Dialog: Confirm destructive actions
- Toast: Show action feedback