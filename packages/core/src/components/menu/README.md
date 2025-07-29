---
# MANDATORY METADATA
type: ai-agent-documentation
version: 1.0
component: Menu
status: stable
audience: ai-coding-agents-only
human-readable: false

# COMPONENT METADATA
category: navigation
dependencies:
  - component: none
  - external: none
framework-support:
  - vanilla: true
  - react: true
  - vue: true
  - angular: true
  - svelte: true

# IMPLEMENTATION METADATA
initialization:
  auto: true
  manual: true
  import-required: true
css-prefix: pm7-menu
data-attribute: data-pm7-menu
javascript-class: PM7.Menu
---

# Component: Menu

DEFINITION: Menu = HTML div element with data-pm7-menu attribute containing trigger and content
PURPOSE: Display contextual options on trigger click
IMPORT: window.PM7 via @pm7/core

## Installation

```bash
npm install @pm7/core
```

THEN:
```html
<script src="/node_modules/@pm7/core/dist/pm7.min.js"></script>
<link rel="stylesheet" href="/node_modules/@pm7/core/dist/pm7.min.css">
```

OR:
```javascript
import '@pm7/core'
import '@pm7/core/dist/pm7.min.css'
```

## Required Structure

MINIMAL:
```html
<div data-pm7-menu>
  <button class="pm7-menu-trigger">Trigger</button>
  <div class="pm7-menu-content">
    <button class="pm7-menu-item">Item</button>
  </div>
</div>
```

COMPLETE:
```html
<div 
  data-pm7-menu
  data-position="bottom-start|bottom-end|top-start|top-end|left-start|left-end|right-start|right-end"
  class="pm7-menu pm7-menu--flat pm7-menu--flat-hover">
  <button 
    class="pm7-menu-trigger pm7-button pm7-button--[variant]"
    type="button"
    aria-label="Menu trigger"
    aria-haspopup="true"
    aria-expanded="false">
    Trigger Text
  </button>
  <div class="pm7-menu-content">
    <div class="pm7-menu-label">Label</div>
    <button 
      class="pm7-menu-item pm7-menu-item--[checkbox|radio|switch|destructive|has-submenu]"
      type="button"
      data-checked="true|false"
      data-name="group-name"
      data-value="item-value"
      disabled>
      <svg class="pm7-menu-item-icon" width="16" height="16">...</svg>
      Item Text
      <span class="pm7-menu-shortcut">⌘K</span>
    </button>
    <div class="pm7-menu-separator"></div>
    <div class="pm7-menu-section-title">Section</div>
    <div class="pm7-submenu">
      <button class="pm7-menu-item">Submenu Item</button>
    </div>
  </div>
</div>
```

## Initialization

IF auto-init:
  CONDITION: window.PM7 loaded AND DOMContentLoaded fired
  TRIGGER: DOMContentLoaded
  ACTION: Finds all [data-pm7-menu]
  RESULT: Automatically initialized

IF manual-init:
  ```javascript
  const element = document.querySelector('[data-pm7-menu]')
  const instance = new PM7.Menu(element)
  ```

IF dynamic-content:
  ```javascript
  // After adding new menu to DOM
  window.PM7.init()
  // OR specifically for menus
  window.PM7.initMenus()
  ```

IF framework-usage:
  ```javascript
  // React/Vue/Angular - in lifecycle hook
  useEffect(() => {
    window.PM7.initFramework()
  }, [])
  ```

NEVER:
  - Initialize same element twice
  - Use jQuery selectors
  - Call init() after only updating menu content
  - Forget to initialize after dynamic addition

## Rules

### Rule: Container Structure
IF creating menu
THEN use exact structure: div[data-pm7-menu] > button.pm7-menu-trigger + div.pm7-menu-content
ELSE menu will not initialize

EXAMPLE:
```html
<!-- IF creating menu -->
<div data-pm7-menu>
  <button class="pm7-menu-trigger">Trigger</button>
  <div class="pm7-menu-content">
    <button class="pm7-menu-item">Item</button>
  </div>
</div>
```

### Rule: Menu Items
IF interactive element
THEN use <button class="pm7-menu-item">
ELSE use <div> for non-interactive (separator, label)

EXAMPLE:
```html
<!-- IF interactive -->
<button class="pm7-menu-item">Click Me</button>

<!-- ELSE non-interactive -->
<div class="pm7-menu-separator"></div>
<div class="pm7-menu-label">Section Label</div>
```

### Rule: Checkbox Items
IF checkbox behavior needed
THEN add class="pm7-menu-item pm7-menu-item--checkbox" AND data-checked="true|false"

EXAMPLE:
```html
<!-- IF checkbox -->
<button class="pm7-menu-item pm7-menu-item--checkbox" data-checked="true">
  Option Enabled
</button>
```

### Rule: Radio Items
IF radio group needed
THEN add class="pm7-menu-item pm7-menu-item--radio" AND data-name="group" AND data-checked on selected

EXAMPLE:
```html
<!-- IF radio group -->
<button class="pm7-menu-item pm7-menu-item--radio" data-name="theme" data-checked="true">Light</button>
<button class="pm7-menu-item pm7-menu-item--radio" data-name="theme">Dark</button>
```

### Rule: Switch Items
IF toggle switch needed
THEN add class="pm7-menu-item pm7-menu-item--switch" AND data-checked="true|false"

EXAMPLE:
```html
<!-- IF switch -->
<button class="pm7-menu-item pm7-menu-item--switch" data-checked="true">
  Feature Enabled
</button>
```

### Rule: Icon-Only Triggers
IF trigger has no visible text
THEN add aria-label="descriptive text"

EXAMPLE:
```html
<!-- IF icon-only -->
<button class="pm7-menu-trigger pm7-button pm7-button--icon" aria-label="More options">
  <svg width="16" height="16">...</svg>
</button>
```

### Rule: Submenu Structure
IF submenu needed
THEN parent item gets class="pm7-menu-item pm7-menu-item--has-submenu" AND submenu div follows immediately

EXAMPLE:
```html
<!-- IF submenu -->
<button class="pm7-menu-item pm7-menu-item--has-submenu">
  Parent Item
  <svg class="pm7-menu-submenu-icon" width="16" height="16">...</svg>
</button>
<div class="pm7-submenu">
  <button class="pm7-menu-item">Submenu Item</button>
</div>
```

### Rule: Menu Bar
IF multiple menus in horizontal bar
THEN wrap all menus in div.pm7-menu-bar

EXAMPLE:
```html
<!-- IF menu bar -->
<div class="pm7-menu-bar">
  <div data-pm7-menu>
    <button class="pm7-menu-trigger">File</button>
    <div class="pm7-menu-content">
      <button class="pm7-menu-item">New</button>
    </div>
  </div>
  <div data-pm7-menu>
    <button class="pm7-menu-trigger">Edit</button>
    <div class="pm7-menu-content">
      <button class="pm7-menu-item">Undo</button>
    </div>
  </div>
</div>
```

## Patterns

### Pattern: Basic Menu
WHEN: Need simple dropdown menu
USE:
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

RESULT: Dropdown menu with edit, duplicate, and delete options

### Pattern: Icon Menu Items
WHEN: Need icons in menu items
USE:
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

RESULT: Menu items with left-aligned icons

### Pattern: Checkbox Menu
WHEN: Need toggleable options
USE:
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

RESULT: Menu with independently toggleable checkboxes

### Pattern: Radio Menu
WHEN: Need mutually exclusive options
USE:
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

RESULT: Menu with radio group for theme selection

### Pattern: Menu with Shortcuts
WHEN: Need to display keyboard shortcuts
USE:
```html
<div data-pm7-menu>
  <button class="pm7-menu-trigger">File</button>
  <div class="pm7-menu-content">
    <button class="pm7-menu-item">
      New
      <span class="pm7-menu-shortcut">⌘N</span>
    </button>
    <button class="pm7-menu-item">
      Save
      <span class="pm7-menu-shortcut">⌘S</span>
    </button>
  </div>
</div>
```

RESULT: Menu items with right-aligned keyboard shortcuts

### Anti-Pattern: Missing Content Wrapper
NEVER:
```html
<div data-pm7-menu>
  <button class="pm7-menu-trigger">Menu</button>
  <button class="pm7-menu-item">Option</button>
</div>
```

BECAUSE: Menu items must be wrapped in pm7-menu-content div
INSTEAD: See Pattern: Basic Menu

### Anti-Pattern: Div Menu Items
NEVER:
```html
<div class="pm7-menu-content">
  <div class="pm7-menu-item" onclick="doSomething()">Option</div>
</div>
```

BECAUSE: Divs are not keyboard accessible
INSTEAD: Use button elements

### Anti-Pattern: Radio Without Name
NEVER:
```html
<button class="pm7-menu-item pm7-menu-item--radio">Light</button>
<button class="pm7-menu-item pm7-menu-item--radio">Dark</button>
```

BECAUSE: Radio items need group name for mutual exclusion
INSTEAD: See Pattern: Radio Menu

## Required Structure for Submenu

WHEN: Submenu needed
STRUCTURE:
```html
<div data-pm7-menu>
  <button class="pm7-menu-trigger">Menu</button>
  <div class="pm7-menu-content">
    <button class="pm7-menu-item pm7-menu-item--has-submenu">
      Parent Item
      <svg class="pm7-menu-submenu-icon" width="16" height="16">...</svg>
    </button>
    <div class="pm7-submenu">
      <button class="pm7-menu-item">Submenu Item 1</button>
      <button class="pm7-menu-item">Submenu Item 2</button>
    </div>
  </div>
</div>
```

REQUIREMENTS:
- Parent item MUST have class="pm7-menu-item pm7-menu-item--has-submenu"
- Submenu container MUST immediately follow parent item
- Submenu container MUST have class="pm7-submenu"
- Arrow icon SHOULD have class="pm7-menu-submenu-icon"

## Attributes

| Attribute | Type | Values | Default | Required | Effect |
|-----------|------|--------|---------|----------|---------|
| data-pm7-menu | boolean | presence | - | YES | Enables menu initialization |
| data-position | string | bottom-start\|bottom-end\|top-start\|top-end\|left-start\|left-end\|right-start\|right-end | bottom-start | NO | Sets dropdown position |
| data-checked | string | true\|false | false | NO | Sets checkable item state |
| data-name | string | any string | - | YES for radio | Groups radio items |
| data-value | string | any string | - | NO | Item value for events |
| disabled | boolean | presence | - | NO | Disables menu item |

## CSS Classes

| Class | Purpose | Combinable | Parent Required |
|-------|---------|------------|-----------------|
| .pm7-menu | Base menu styles (auto-added) | YES | NO |
| .pm7-menu-trigger | Trigger button styles | YES | data-pm7-menu |
| .pm7-menu-content | Content container styles | NO | data-pm7-menu |
| .pm7-menu-item | Menu item styles | YES | .pm7-menu-content |
| .pm7-menu--flat | Removes menu shadows | YES | .pm7-menu |
| .pm7-menu--flat-hover | Removes hover shadows | YES | .pm7-menu |
| .pm7-menu-item--checkbox | Checkbox item appearance | NO | .pm7-menu-item |
| .pm7-menu-item--radio | Radio item appearance | NO | .pm7-menu-item |
| .pm7-menu-item--switch | Switch item appearance | NO | .pm7-menu-item |
| .pm7-menu-item--destructive | Red text for danger | YES | .pm7-menu-item |
| .pm7-menu-item--has-submenu | Has submenu indicator | YES | .pm7-menu-item |
| .pm7-menu-separator | Horizontal divider | NO | .pm7-menu-content |
| .pm7-menu-label | Non-interactive label | NO | .pm7-menu-content |
| .pm7-menu-section-title | Section header | NO | .pm7-menu-content |
| .pm7-menu-item-icon | Icon in menu item | NO | .pm7-menu-item |
| .pm7-menu-shortcut | Keyboard shortcut | NO | .pm7-menu-item |
| .pm7-submenu | Submenu container | NO | .pm7-menu-content |
| .pm7-menu-submenu-icon | Submenu arrow icon | NO | .pm7-menu-item |
| .pm7-menu-bar | Horizontal menu container | YES | NO |
| .pm7-menu-bar--borderless | No border/background | YES | .pm7-menu-bar |
| .pm7-menu-bar--flat | No shadows | YES | .pm7-menu-bar |
| .pm7-menu-bar--flat-hover | No hover shadows | YES | .pm7-menu-bar |

## JavaScript API

### Methods

| Method | Parameters | Returns | Throws | Usage |
|--------|------------|---------|--------|--------|
| open() | none | void | never | menu.open() |
| close() | none | void | never | menu.close() |
| toggle() | none | void | never | menu.toggle() |
| adjustPosition() | none | void | never | menu.adjustPosition() |
| destroy() | none | void | never | menu.destroy() |

### Properties

| Property | Type | Readonly | Default | Usage |
|----------|------|----------|---------|--------|
| isOpen | boolean | YES | false | if (menu.isOpen) |
| element | HTMLElement | YES | - | menu.element |
| trigger | HTMLElement | YES | - | menu.trigger |
| content | HTMLElement | YES | - | menu.content |

### Events

| Event | Bubbles | Cancelable | Detail | Usage |
|-------|---------|------------|---------|--------|
| pm7-menu-select | YES | NO | {item: HTMLElement, text: string, value: string} | element.addEventListener('pm7-menu-select', handler) |
| pm7-menu-open | YES | NO | null | element.addEventListener('pm7-menu-open', handler) |
| pm7-menu-close | YES | NO | null | element.addEventListener('pm7-menu-close', handler) |

### Instance Access

```javascript
// Get instance from element
const element = document.querySelector('[data-pm7-menu]')
const menu = element.PM7Menu

// Direct instantiation
const menu = new PM7.Menu(element)
```

## Framework Integration

### React
```jsx
IF functional component:
  useEffect(() => {
    window.PM7?.initFramework()
    return () => { /* auto cleanup */ }
  }, [])

IF class component:
  componentDidMount() { window.PM7?.initFramework() }
  componentWillUnmount() { /* auto cleanup */ }
```

### Vue
```vue
IF Vue 3:
  onMounted(() => { window.PM7?.initFramework() })
  onUnmounted(() => { /* auto cleanup */ })

IF Vue 2:
  mounted() { window.PM7?.initFramework() }
  beforeDestroy() { /* auto cleanup */ }
```

### Angular
```typescript
IF Angular:
  ngAfterViewInit() { window.PM7?.initFramework() }
  ngOnDestroy() { /* auto cleanup */ }
```

## Complete Examples

### Example: Basic Dropdown Menu
SCENARIO: User actions menu with edit, duplicate, delete
```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="/node_modules/@pm7/core/dist/pm7.min.css">
</head>
<body>
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
  
  <script src="/node_modules/@pm7/core/dist/pm7.min.js"></script>
</body>
</html>
```

RESULT: Dropdown menu opens on click with three options

### Example: React Menu Component
SCENARIO: Reusable menu component for React apps
```jsx
import { useEffect } from 'react'
import '@pm7/core/dist/pm7.min.css'

export function OptionsMenu({ onEdit, onDelete }) {
  useEffect(() => {
    import('@pm7/core').then(() => {
      window.PM7?.initFramework()
    })
  }, [])
  
  useEffect(() => {
    const handleSelect = (e) => {
      const { text } = e.detail
      if (text === 'Edit') onEdit()
      if (text === 'Delete') onDelete()
    }
    
    const menu = document.getElementById('options-menu')
    menu?.addEventListener('pm7-menu-select', handleSelect)
    
    return () => {
      menu?.removeEventListener('pm7-menu-select', handleSelect)
    }
  }, [onEdit, onDelete])
  
  return (
    <div data-pm7-menu id="options-menu">
      <button className="pm7-menu-trigger pm7-button pm7-button--outline">
        Options
      </button>
      <div className="pm7-menu-content">
        <button className="pm7-menu-item">Edit</button>
        <button className="pm7-menu-item pm7-menu-item--destructive">Delete</button>
      </div>
    </div>
  )
}
```

RESULT: React component with menu that calls handlers on selection

### Example: Dynamic Menu Creation
SCENARIO: Add menu to page after load
```javascript
// Add menu to page
document.getElementById('toolbar').innerHTML = `
  <div data-pm7-menu>
    <button class="pm7-menu-trigger pm7-button pm7-button--icon" aria-label="Settings">
      <svg width="16" height="16">...</svg>
    </button>
    <div class="pm7-menu-content">
      <button class="pm7-menu-item pm7-menu-item--switch" data-checked="true">
        Auto-save
      </button>
      <button class="pm7-menu-item pm7-menu-item--switch">
        Notifications
      </button>
    </div>
  </div>
`

// Initialize new menu
window.PM7.init()

// Add event handler
document.querySelector('[data-pm7-menu]').addEventListener('pm7-menu-select', (e) => {
  console.log('Selected:', e.detail.text, 'Checked:', e.detail.item.dataset.checked)
})
```

RESULT: Working menu added dynamically with event handling

## Validation Checklist

STRUCTURE:
- [ ] Has data-pm7-menu attribute
- [ ] Has button.pm7-menu-trigger
- [ ] Has div.pm7-menu-content wrapper
- [ ] All interactive items are buttons
- [ ] Radio items have data-name
- [ ] Icon-only triggers have aria-label

STYLING:
- [ ] Includes pm7.min.css
- [ ] Uses only documented classes
- [ ] No inline positioning styles

BEHAVIOR:
- [ ] Initializes without errors
- [ ] Opens/closes on trigger click
- [ ] Keyboard navigation works
- [ ] Events fire correctly
- [ ] Framework re-renders handled

ACCESSIBILITY:
- [ ] Focus trap when open
- [ ] Escape key closes
- [ ] Arrow keys navigate
- [ ] Screen reader compatible