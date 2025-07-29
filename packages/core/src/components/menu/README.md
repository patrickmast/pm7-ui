---
# MANDATORY METADATA
type: ai-agent-documentation
version: 2.0
component: Menu
status: stable
audience: ai-coding-agents-only
human-readable: false

# COMPONENT METADATA
category: navigation
dependencies:
  - component: button (for triggers)
  - component: icon (for menu icons)
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

## Anti-Patterns

### Anti-Pattern: Missing Content Wrapper
NEVER:
```html
<div data-pm7-menu>
  <button class="pm7-menu-trigger">Menu</button>
  <button class="pm7-menu-item">Option</button>
  <button class="pm7-menu-item">Another Option</button>
</div>
```

BECAUSE: Menu items must be wrapped in pm7-menu-content div for proper positioning and styling
INSTEAD:
```html
<div data-pm7-menu>
  <button class="pm7-menu-trigger">Menu</button>
  <div class="pm7-menu-content">
    <button class="pm7-menu-item">Option</button>
    <button class="pm7-menu-item">Another Option</button>
  </div>
</div>
```

### Anti-Pattern: Non-Button Menu Items
NEVER:
```html
<div class="pm7-menu-content">
  <div class="pm7-menu-item" onclick="doSomething()">Clickable Div</div>
  <a href="#" class="pm7-menu-item">Link Item</a>
  <span class="pm7-menu-item" tabindex="0">Span Item</span>
</div>
```

BECAUSE: Non-button elements lack proper keyboard support, ARIA semantics, and focus management
INSTEAD:
```html
<div class="pm7-menu-content">
  <button class="pm7-menu-item" onclick="doSomething()">Proper Button</button>
  <button class="pm7-menu-item" onclick="navigate()">Navigate Action</button>
  <button class="pm7-menu-item">Keyboard Accessible</button>
</div>
```

### Anti-Pattern: Radio Items Without Group Name
NEVER:
```html
<button class="pm7-menu-item pm7-menu-item--radio">Small</button>
<button class="pm7-menu-item pm7-menu-item--radio">Medium</button>
<button class="pm7-menu-item pm7-menu-item--radio">Large</button>
```

BECAUSE: Radio items need data-name attribute to form a mutually exclusive group
INSTEAD:
```html
<button class="pm7-menu-item pm7-menu-item--radio" data-name="size" data-checked="true">Small</button>
<button class="pm7-menu-item pm7-menu-item--radio" data-name="size">Medium</button>
<button class="pm7-menu-item pm7-menu-item--radio" data-name="size">Large</button>
```

### Anti-Pattern: Missing Trigger Button
NEVER:
```html
<div data-pm7-menu>
  <span>Click me</span>
  <div class="pm7-menu-content">
    <button class="pm7-menu-item">Option</button>
  </div>
</div>
```

BECAUSE: Menu requires button.pm7-menu-trigger for proper activation and accessibility
INSTEAD:
```html
<div data-pm7-menu>
  <button class="pm7-menu-trigger">Click me</button>
  <div class="pm7-menu-content">
    <button class="pm7-menu-item">Option</button>
  </div>
</div>
```

### Anti-Pattern: Custom Positioning Styles
NEVER:
```html
<div data-pm7-menu style="position: relative;">
  <button class="pm7-menu-trigger">Menu</button>
  <div class="pm7-menu-content" style="position: absolute; top: 100%; left: 0;">
    <button class="pm7-menu-item">Option</button>
  </div>
</div>
```

BECAUSE: Menu component handles positioning automatically based on viewport constraints
INSTEAD:
```html
<div data-pm7-menu data-position="bottom-start">
  <button class="pm7-menu-trigger">Menu</button>
  <div class="pm7-menu-content">
    <button class="pm7-menu-item">Option</button>
  </div>
</div>
```

### Anti-Pattern: Nested Menus Without Proper Structure
NEVER:
```html
<div class="pm7-menu-content">
  <button class="pm7-menu-item">Parent</button>
  <div data-pm7-menu>
    <button class="pm7-menu-trigger">Nested trigger</button>
    <div class="pm7-menu-content">...</div>
  </div>
</div>
```

BECAUSE: Nested menus require specific submenu structure, not nested data-pm7-menu
INSTEAD:
```html
<div class="pm7-menu-content">
  <button class="pm7-menu-item pm7-menu-item--has-submenu">
    Parent
    <svg class="pm7-menu-submenu-icon" width="16" height="16">...</svg>
  </button>
  <div class="pm7-submenu">
    <button class="pm7-menu-item">Submenu Item</button>
  </div>
</div>
```

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
| `data-pm7-menu` | boolean | presence | - | YES | Enables menu initialization |
| `data-position` | string | `bottom-start`\|`bottom-end`\|`top-start`\|`top-end`\|`left-start`\|`left-end`\|`right-start`\|`right-end` | `bottom-start` | NO | Sets dropdown position relative to trigger |
| `data-checked` | string | `true`\|`false` | `false` | NO | Sets checkable item state (checkbox/radio/switch) |
| `data-name` | string | any string | - | YES for radio | Groups radio items for mutual exclusion |
| `data-value` | string | any string | - | NO | Custom value passed in select event |
| `disabled` | boolean | presence | - | NO | Disables menu item interaction |
| `aria-label` | string | any string | - | YES for icon-only | Accessibility label for icon triggers |
| `aria-haspopup` | string | `true` | `false` | AUTO | Added automatically to trigger |
| `aria-expanded` | string | `true`\|`false` | `false` | AUTO | Updated automatically on open/close |

> **Note**: For complete PM7 data attribute reference, see [ATTRIBUTES.md](../../ATTRIBUTES.md).

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

| Method | Parameters | Returns | Throws | Description |
|--------|------------|---------|--------|-------------|
| `open()` | none | `void` | never | Opens the menu dropdown |
| `close()` | none | `void` | never | Closes the menu dropdown |
| `toggle()` | none | `void` | never | Toggles menu open/closed state |
| `adjustPosition()` | none | `void` | never | Recalculates menu position based on viewport |
| `destroy()` | none | `void` | never | Removes event listeners and cleans up instance |

#### Method Details

**open()**
```javascript
// Opens the menu programmatically
const menu = element.PM7Menu;
menu.open();
```

**close()**
```javascript
// Closes the menu programmatically
menu.close();
```

**toggle()**
```javascript
// Toggles between open and closed states
menu.toggle();
```

**adjustPosition()**
```javascript
// Useful after dynamic content changes
menu.adjustPosition();
```

**destroy()**
```javascript
// Clean up before removing from DOM
menu.destroy();
```

### Properties

| Property | Type | Readonly | Default | Description |
|----------|------|----------|---------|-------------|
| `isOpen` | `boolean` | YES | `false` | Current open state of the menu |
| `element` | `HTMLElement` | YES | - | The menu container element |
| `trigger` | `HTMLElement` | YES | - | The trigger button element |
| `content` | `HTMLElement` | YES | - | The menu content container |

### Events

| Event | Bubbles | Cancelable | Detail Schema | Description |
|-------|---------|------------|---------------|-------------|
| `pm7-menu-select` | YES | NO | `{item: HTMLElement, text: string, value: string\|null}` | Fired when menu item is selected |
| `pm7-menu-open` | YES | NO | `null` | Fired when menu opens |
| `pm7-menu-close` | YES | NO | `null` | Fired when menu closes |

#### Event Usage Examples

**pm7-menu-select**
```javascript
element.addEventListener('pm7-menu-select', (e) => {
  const { item, text, value } = e.detail;
  console.log('Selected:', text);
  
  // For checkable items
  if (item.classList.contains('pm7-menu-item--checkbox')) {
    const isChecked = item.dataset.checked === 'true';
    console.log('Checkbox state:', isChecked);
  }
});
```

**pm7-menu-open**
```javascript
element.addEventListener('pm7-menu-open', (e) => {
  console.log('Menu opened');
  // Track analytics, update UI state, etc.
});
```

**pm7-menu-close**
```javascript
element.addEventListener('pm7-menu-close', (e) => {
  console.log('Menu closed');
  // Clean up temporary states
});
```

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

## Complete Examples in Context

### Example: Application Header with Multiple Menus
SCENARIO: Complete app header with logo, navigation menus, and user menu
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <link rel="stylesheet" href="/node_modules/@pm7/core/dist/pm7.min.css">
  <title>App with Menu Bar</title>
</head>
<body>
  <header class="pm7-header">
    <div class="pm7-container">
      <div style="display: flex; align-items: center; justify-content: space-between;">
        <!-- Logo and main navigation -->
        <div style="display: flex; align-items: center; gap: 2rem;">
          <a href="/" class="pm7-logo">MyApp</a>
          
          <!-- Main menu bar -->
          <nav class="pm7-menu-bar">
            <div data-pm7-menu>
              <button class="pm7-menu-trigger">File</button>
              <div class="pm7-menu-content">
                <button class="pm7-menu-item">
                  <svg class="pm7-menu-item-icon" width="16" height="16">...</svg>
                  New Project
                  <span class="pm7-menu-shortcut">⌘N</span>
                </button>
                <button class="pm7-menu-item">
                  <svg class="pm7-menu-item-icon" width="16" height="16">...</svg>
                  Open
                  <span class="pm7-menu-shortcut">⌘O</span>
                </button>
                <div class="pm7-menu-separator"></div>
                <button class="pm7-menu-item">
                  Save
                  <span class="pm7-menu-shortcut">⌘S</span>
                </button>
              </div>
            </div>
            
            <div data-pm7-menu>
              <button class="pm7-menu-trigger">Edit</button>
              <div class="pm7-menu-content">
                <button class="pm7-menu-item" disabled>
                  Undo
                  <span class="pm7-menu-shortcut">⌘Z</span>
                </button>
                <button class="pm7-menu-item">
                  Redo
                  <span class="pm7-menu-shortcut">⌘⇧Z</span>
                </button>
                <div class="pm7-menu-separator"></div>
                <button class="pm7-menu-item">
                  Cut
                  <span class="pm7-menu-shortcut">⌘X</span>
                </button>
                <button class="pm7-menu-item">
                  Copy
                  <span class="pm7-menu-shortcut">⌘C</span>
                </button>
                <button class="pm7-menu-item">
                  Paste
                  <span class="pm7-menu-shortcut">⌘V</span>
                </button>
              </div>
            </div>
            
            <div data-pm7-menu>
              <button class="pm7-menu-trigger">View</button>
              <div class="pm7-menu-content">
                <div class="pm7-menu-label">Layout</div>
                <button class="pm7-menu-item pm7-menu-item--checkbox" data-checked="true">
                  Show Sidebar
                </button>
                <button class="pm7-menu-item pm7-menu-item--checkbox" data-checked="true">
                  Show Toolbar
                </button>
                <div class="pm7-menu-separator"></div>
                <div class="pm7-menu-section-title">Theme</div>
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
          </nav>
        </div>
        
        <!-- User menu -->
        <div data-pm7-menu data-position="bottom-end">
          <button class="pm7-menu-trigger pm7-button pm7-button--ghost pm7-button--icon" aria-label="User menu">
            <img src="/avatar.jpg" alt="User" style="width: 32px; height: 32px; border-radius: 50%;">
          </button>
          <div class="pm7-menu-content">
            <div class="pm7-menu-label">john.doe@example.com</div>
            <div class="pm7-menu-separator"></div>
            <button class="pm7-menu-item">
              <svg class="pm7-menu-item-icon" width="16" height="16">...</svg>
              Profile Settings
            </button>
            <button class="pm7-menu-item pm7-menu-item--has-submenu">
              <svg class="pm7-menu-item-icon" width="16" height="16">...</svg>
              Preferences
              <svg class="pm7-menu-submenu-icon" width="16" height="16">...</svg>
            </button>
            <div class="pm7-submenu">
              <button class="pm7-menu-item pm7-menu-item--switch" data-checked="true">
                Email Notifications
              </button>
              <button class="pm7-menu-item pm7-menu-item--switch">
                Desktop Notifications
              </button>
              <div class="pm7-menu-separator"></div>
              <button class="pm7-menu-item">
                Advanced Settings
              </button>
            </div>
            <div class="pm7-menu-separator"></div>
            <button class="pm7-menu-item pm7-menu-item--destructive">
              <svg class="pm7-menu-item-icon" width="16" height="16">...</svg>
              Sign Out
            </button>
          </div>
        </div>
      </div>
    </div>
  </header>
  
  <script src="/node_modules/@pm7/core/dist/pm7.min.js"></script>
  <script>
    // Handle menu selections
    document.addEventListener('pm7-menu-select', (e) => {
      const { text, value, item } = e.detail;
      console.log('Menu item selected:', text);
      
      // Handle specific actions
      switch(text) {
        case 'New Project':
          createNewProject();
          break;
        case 'Sign Out':
          signOut();
          break;
        // ... handle other menu items
      }
    });
  </script>
</body>
</html>
```

RESULT: Complete application header with menu bar navigation and user dropdown menu

### Example: Context Menu for Data Table
SCENARIO: Right-click context menu for table rows with dynamic options
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <link rel="stylesheet" href="/node_modules/@pm7/core/dist/pm7.min.css">
  <title>Data Table with Context Menu</title>
  <style>
    .data-table {
      width: 100%;
      border-collapse: collapse;
    }
    .data-table th,
    .data-table td {
      padding: 0.75rem;
      text-align: left;
      border-bottom: 1px solid var(--pm7-border);
    }
    .data-table tr:hover {
      background-color: var(--pm7-hover);
    }
    .context-menu-wrapper {
      position: fixed;
      z-index: 1000;
    }
  </style>
</head>
<body>
  <div class="pm7-container">
    <table class="data-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Status</th>
          <th>Last Modified</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr data-id="1">
          <td>Project Alpha</td>
          <td><span class="pm7-badge pm7-badge--success">Active</span></td>
          <td>2 hours ago</td>
          <td>
            <div data-pm7-menu>
              <button class="pm7-menu-trigger pm7-button pm7-button--ghost pm7-button--icon" aria-label="Actions">
                <svg width="16" height="16">...</svg>
              </button>
              <div class="pm7-menu-content">
                <button class="pm7-menu-item" data-action="view">
                  <svg class="pm7-menu-item-icon" width="16" height="16">...</svg>
                  View Details
                </button>
                <button class="pm7-menu-item" data-action="edit">
                  <svg class="pm7-menu-item-icon" width="16" height="16">...</svg>
                  Edit
                </button>
                <button class="pm7-menu-item" data-action="duplicate">
                  <svg class="pm7-menu-item-icon" width="16" height="16">...</svg>
                  Duplicate
                </button>
                <div class="pm7-menu-separator"></div>
                <button class="pm7-menu-item pm7-menu-item--destructive" data-action="delete">
                  <svg class="pm7-menu-item-icon" width="16" height="16">...</svg>
                  Delete
                </button>
              </div>
            </div>
          </td>
        </tr>
        <!-- More rows... -->
      </tbody>
    </table>
  </div>
  
  <!-- Context menu (positioned dynamically) -->
  <div class="context-menu-wrapper" style="display: none;">
    <div data-pm7-menu id="context-menu">
      <button class="pm7-menu-trigger" style="display: none;"></button>
      <div class="pm7-menu-content">
        <button class="pm7-menu-item" data-action="view">
          <svg class="pm7-menu-item-icon" width="16" height="16">...</svg>
          Open
        </button>
        <button class="pm7-menu-item" data-action="edit">
          <svg class="pm7-menu-item-icon" width="16" height="16">...</svg>
          Edit
        </button>
        <button class="pm7-menu-item" data-action="duplicate">
          <svg class="pm7-menu-item-icon" width="16" height="16">...</svg>
          Duplicate
        </button>
        <div class="pm7-menu-separator"></div>
        <button class="pm7-menu-item pm7-menu-item--checkbox" data-checked="false">
          Mark as Favorite
        </button>
        <div class="pm7-menu-separator"></div>
        <button class="pm7-menu-item pm7-menu-item--destructive" data-action="delete">
          <svg class="pm7-menu-item-icon" width="16" height="16">...</svg>
          Delete
        </button>
      </div>
    </div>
  </div>
  
  <script src="/node_modules/@pm7/core/dist/pm7.min.js"></script>
  <script>
    // Initialize context menu
    let contextMenu;
    let currentRow;
    
    document.addEventListener('DOMContentLoaded', () => {
      const contextMenuEl = document.getElementById('context-menu');
      contextMenu = new PM7.Menu(contextMenuEl);
      
      // Right-click handler for table rows
      document.querySelector('.data-table tbody').addEventListener('contextmenu', (e) => {
        const row = e.target.closest('tr');
        if (!row) return;
        
        e.preventDefault();
        currentRow = row;
        
        // Position and show context menu
        const wrapper = document.querySelector('.context-menu-wrapper');
        wrapper.style.display = 'block';
        wrapper.style.left = e.clientX + 'px';
        wrapper.style.top = e.clientY + 'px';
        
        // Open menu programmatically
        contextMenu.open();
      });
      
      // Hide context menu on click outside
      document.addEventListener('click', (e) => {
        if (!e.target.closest('.context-menu-wrapper')) {
          document.querySelector('.context-menu-wrapper').style.display = 'none';
          contextMenu.close();
        }
      });
      
      // Handle menu actions
      document.addEventListener('pm7-menu-select', (e) => {
        const action = e.detail.item.dataset.action;
        const rowId = currentRow?.dataset.id;
        
        if (action && rowId) {
          console.log(`Action: ${action} on row ID: ${rowId}`);
          // Perform the action
          switch(action) {
            case 'view':
              window.location.href = `/projects/${rowId}`;
              break;
            case 'edit':
              openEditDialog(rowId);
              break;
            case 'delete':
              if (confirm('Are you sure?')) {
                deleteRow(rowId);
              }
              break;
          }
        }
      });
    });
  </script>
</body>
</html>
```

RESULT: Data table with both action buttons and right-click context menu functionality

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

## Cross-Component Dependencies

### Required for Common Patterns

| Pattern | Required Components | Example |
|---------|-------------------|---------|
| Menu Trigger | pm7-button | `<button class="pm7-menu-trigger pm7-button pm7-button--outline">` |
| Icon Triggers | pm7-icon | `<svg class="pm7-menu-item-icon" width="16" height="16">` |
| Menu Bar | pm7-menu-bar | `<div class="pm7-menu-bar">` |
| Status Indicators | pm7-badge | Used in menu items to show status |
| Grouped Items | Native radio/checkbox behavior | Built into menu item variants |

### CSS Variable Dependencies

Menus inherit these CSS variables from the PM7 theme:
- `--pm7-menu-background`: Menu dropdown background
- `--pm7-menu-foreground`: Text color
- `--pm7-border`: Border color
- `--pm7-radius`: Border radius
- `--pm7-menu-shadow`: Dropdown shadow
- `--pm7-hover`: Hover state background
- `--pm7-destructive`: Destructive action color

### JavaScript Dependencies

Menu component requires:
- PM7 core library loaded (`window.PM7`)
- DOM ready for auto-initialization
- Event delegation for dynamic content

### Positioning Dependencies

Menu positioning relies on:
- CSS position calculations
- Viewport boundary detection
- Scroll position monitoring
- Parent container constraints

### Accessibility Dependencies

Full accessibility requires:
- Proper ARIA attributes (auto-managed)
- Focus management (built-in)
- Keyboard event handling (built-in)
- Screen reader announcements (auto-managed)

## Related Components

- **Button**: Primary component for menu triggers
- **Icon**: For menu item icons and submenu indicators
- **Badge**: For status indicators in menu items
- **Dialog**: Menus can trigger modal dialogs
- **Tooltip**: For additional context on menu items
- **Tab Selector**: Alternative navigation pattern
- **Command Palette**: For command-based menus