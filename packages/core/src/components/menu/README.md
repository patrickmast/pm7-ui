# PM7 Menu Component - AI Agent Implementation Guide

**Component Type**: Dropdown Menu
**Import Required**: Yes (CSS + JavaScript)
**Auto-Initialize**: Yes (with `data-pm7-menu`)
**HTML Structure**: Fixed (must follow exact pattern)

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

### JavaScript Setup (Required for interactivity!)

For menus to work, you need to include the PM7 JavaScript:

```html
<!-- Option 1: Auto-initialization (Recommended) -->
<script src="node_modules/@pm7/core/dist/pm7.js"></script>

<!-- Option 2: ES Modules -->
<script type="module">
  import { PM7Menu } from '@pm7/core';
  // Components with data-pm7-menu will auto-initialize
</script>

<!-- Option 3: Manual initialization -->
<script type="module">
  import { PM7Menu } from '@pm7/core';
  
  // Initialize specific menu
  const menu = document.querySelector('[data-pm7-menu]');
  new PM7Menu(menu);
</script>
```

⚠️ **Note**: Without JavaScript, menus will not open. The CSS provides styling only.

### React Usage

If you're using the React components:

```bash
npm install @pm7/react @pm7/core
```

```javascript
import { Menu, MenuItem, MenuSeparator } from '@pm7/react';
import '@pm7/core/dist/pm7.css'; // Don't forget this!
```

## Complete HTML Example

Here's a complete working example for a standalone HTML page:

```html
<!DOCTYPE html>
<html>
<head>
  <!-- PM7 CSS -->
  <link rel="stylesheet" href="node_modules/@pm7/core/dist/pm7.css">
</head>
<body>
  <!-- Menu HTML -->
  <div data-pm7-menu>
    <button class="pm7-menu-trigger pm7-button pm7-button--outline">
      Options
    </button>
    <div class="pm7-menu-content">
      <button class="pm7-menu-item">Profile</button>
      <button class="pm7-menu-item">Settings</button>
      <button class="pm7-menu-item">Logout</button>
    </div>
  </div>

  <!-- PM7 JavaScript (Required!) -->
  <script src="node_modules/@pm7/core/dist/pm7.js"></script>
</body>
</html>
```

## Usage

### Basic Menu

```html
<!-- AI-Agent FIRST: Only data-pm7-menu attribute needed -->
<div data-pm7-menu>
  <button class="pm7-menu-trigger pm7-button pm7-button--outline">
    Open Menu
  </button>
  <div class="pm7-menu-content">
    <button class="pm7-menu-item">Profile</button>
    <button class="pm7-menu-item">Settings</button>
    <button class="pm7-menu-item">Help</button>
    <div class="pm7-menu-separator"></div>
    <button class="pm7-menu-item">Sign Out</button>
  </div>
</div>
```

#### Flat Menu (No Shadows)

```html
<!-- Individual menu without shadows -->
<div class="pm7-menu pm7-menu--flat" data-pm7-menu>
  <button class="pm7-menu-trigger pm7-button pm7-button--outline">
    Options
  </button>
  <div class="pm7-menu-content">
    <button class="pm7-menu-item">Edit</button>
    <button class="pm7-menu-item">Delete</button>
  </div>
</div>
```

#### Flat Hover Menu (Only Hover Shadows Removed)

```html
<!-- Menu with dropdown shadows but no hover shadows -->
<div class="pm7-menu pm7-menu--flat-hover" data-pm7-menu>
  <button class="pm7-menu-trigger pm7-button pm7-button--primary">
    Actions
  </button>
  <div class="pm7-menu-content">
    <button class="pm7-menu-item">Save</button>
    <button class="pm7-menu-item">Export</button>
    <button class="pm7-menu-item">Print</button>
  </div>
</div>
```

**AI-Agent FIRST**: The `.pm7-menu` CSS class is automatically added by the JavaScript when the component initializes. You only need to add the `data-pm7-menu` attribute!

### JavaScript API

#### Auto-initialization

Menus with `data-pm7-menu` attribute are automatically initialized when the DOM loads, **but only if you include the PM7 JavaScript file**:

```html
<!-- This enables auto-initialization -->
<script src="node_modules/@pm7/core/dist/pm7.js"></script>
```

Once initialized, you can control menus programmatically:

```javascript
// Get reference to auto-initialized menu
const menuElement = document.querySelector('[data-pm7-menu]');
const menu = menuElement.PM7Menu; // Access the instance

// Control the menu
menu.open();
menu.close();
menu.toggle();
```

#### Manual Initialization

```javascript
// Manual initialization
const customMenu = document.querySelector('.custom-menu');
const menu = new PM7Menu(customMenu);

// Use the instance directly
menu.open();
menu.close();
```

#### Instance Methods

| Method | Description |
|--------|-------------|
| `open()` | Opens the menu |
| `close()` | Closes the menu |
| `toggle()` | Toggles menu open/closed state |
| `adjustPosition()` | Recalculates and adjusts menu position |

```javascript
// Using the component instance
const menuElement = document.querySelector('[data-pm7-menu]');
const menu = new PM7Menu(menuElement);
menu.open();
menu.close();
menu.toggle();

// Adjust position manually (e.g., after content change)
menu.adjustPosition();
```

#### TypeScript Support

```typescript
// Type-safe component usage
const menuElement = document.querySelector('[data-pm7-menu]') as HTMLElement;
const menu = new PM7Menu(menuElement);
menu.open();
```

#### Events

| Event | Description | Detail Object |
|-------|-------------|---------------|
| `pm7-menu-select` | Fired when a menu item is selected | `{ item, text, value }` |

```javascript
menuElement.addEventListener('pm7-menu-select', (e) => {
  console.log('Selected item:', e.detail.item);      // DOM element
  console.log('Item text:', e.detail.text);          // Text content
  console.log('Item value:', e.detail.value);        // data-value attribute
});
```

#### Keyboard Navigation

The menu component supports full keyboard navigation:

| Key | Action |
|-----|--------|
| `Enter` / `Space` | Open menu (on trigger) |
| `Escape` | Close menu |
| `ArrowDown` | Move to next item |
| `ArrowUp` | Move to previous item |
| `Enter` | Select current item |
| `Tab` | Close menu and move focus |

#### Menu Bar Behavior

When inside a `.pm7-menu-bar`, menus gain additional functionality:
- **Hover to open**: Moving mouse between menus opens them automatically
- **Arrow key navigation**: Use left/right arrows to move between menu bar items
- **Click outside**: Clicking outside any menu closes all menus

### Menu Bar

Create application-style menu bars with hover-to-open functionality:

```html
<!-- Default menu bar with border and background -->
<div class="pm7-menu-bar">
  <div class="pm7-menu" data-pm7-menu>
    <button class="pm7-menu-trigger">File</button>
    <div class="pm7-menu-content">
      <button class="pm7-menu-item">New <span class="pm7-menu-shortcut">⌘N</span></button>
      <button class="pm7-menu-item">Open <span class="pm7-menu-shortcut">⌘O</span></button>
      <button class="pm7-menu-item">Save <span class="pm7-menu-shortcut">⌘S</span></button>
      <div class="pm7-menu-separator"></div>
      <button class="pm7-menu-item">Exit</button>
    </div>
  </div>
  
  <div class="pm7-menu" data-pm7-menu>
    <button class="pm7-menu-trigger">Edit</button>
    <div class="pm7-menu-content">
      <button class="pm7-menu-item">Undo <span class="pm7-menu-shortcut">⌘Z</span></button>
      <button class="pm7-menu-item">Redo <span class="pm7-menu-shortcut">⌘Y</span></button>
      <div class="pm7-menu-separator"></div>
      <button class="pm7-menu-item">Cut <span class="pm7-menu-shortcut">⌘X</span></button>
      <button class="pm7-menu-item">Copy <span class="pm7-menu-shortcut">⌘C</span></button>
      <button class="pm7-menu-item">Paste <span class="pm7-menu-shortcut">⌘V</span></button>
    </div>
  </div>
</div>
```

#### Borderless Menu Bar

For a traditional toolbar appearance without borders:

```html
<div class="pm7-menu-bar pm7-menu-bar--borderless">
  <div class="pm7-menu" data-pm7-menu>
    <button class="pm7-menu-trigger pm7-button pm7-button--ghost">File</button>
    <div class="pm7-menu-content">
      <!-- Menu items -->
    </div>
  </div>
  <div class="pm7-menu" data-pm7-menu>
    <button class="pm7-menu-trigger pm7-button pm7-button--ghost">Edit</button>
    <div class="pm7-menu-content">
      <!-- Menu items -->
    </div>
  </div>
</div>
```

#### Flat Menu Bar

For a flat design without shadows (useful for minimalist interfaces):

```html
<div class="pm7-menu-bar pm7-menu-bar--flat">
  <div class="pm7-menu" data-pm7-menu>
    <button class="pm7-menu-trigger">Options</button>
    <div class="pm7-menu-content">
      <!-- Menu items -->
    </div>
  </div>
</div>
```

You can also combine modifiers:

```html
<!-- Borderless AND flat -->
<div class="pm7-menu-bar pm7-menu-bar--borderless pm7-menu-bar--flat">
  <!-- Menus -->
</div>
```

#### Flat Hover Menu Bar

For menu bars with dropdown shadows but no hover effects:

```html
<div class="pm7-menu-bar pm7-menu-bar--flat-hover">
  <div class="pm7-menu" data-pm7-menu>
    <button class="pm7-menu-trigger pm7-button pm7-button--ghost">File</button>
    <div class="pm7-menu-content">
      <!-- Menu items -->
    </div>
  </div>
  <div class="pm7-menu" data-pm7-menu>
    <button class="pm7-menu-trigger pm7-button pm7-button--ghost">Edit</button>
    <div class="pm7-menu-content">
      <!-- Menu items -->
    </div>
  </div>
</div>
```

### Menu with Icons

```html
<div class="pm7-menu" data-pm7-menu>
  <button class="pm7-menu-trigger pm7-button pm7-button--primary">
    <svg width="16" height="16">
      <circle cx="12" cy="12" r="1"/>
      <circle cx="19" cy="12" r="1"/>
      <circle cx="5" cy="12" r="1"/>
    </svg>
  </button>
  <div class="pm7-menu-content">
    <button class="pm7-menu-item">
      <svg class="pm7-menu-item-icon">...</svg>
      Edit
    </button>
    <button class="pm7-menu-item">
      <svg class="pm7-menu-item-icon">...</svg>
      Duplicate
    </button>
    <div class="pm7-menu-separator"></div>
    <button class="pm7-menu-item pm7-menu-item--destructive">
      <svg class="pm7-menu-item-icon">...</svg>
      Delete
    </button>
  </div>
</div>
```
```

### Menu with Sections

```html
<div class="pm7-menu" data-pm7-menu>
  <button class="pm7-menu-trigger pm7-button pm7-button--outline">
    Account
  </button>
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

### Menu with Checkable Items

```html
<div class="pm7-menu" data-pm7-menu>
  <button class="pm7-menu-trigger pm7-button pm7-button--outline">
    View Options
  </button>
  <div class="pm7-menu-content">
    <!-- Checkbox items -->
    <button class="pm7-menu-item pm7-menu-item--checkbox" data-checked="true">
      Show Toolbar
    </button>
    <button class="pm7-menu-item pm7-menu-item--checkbox">
      Show Sidebar
    </button>
    <div class="pm7-menu-separator"></div>
    
    <!-- Radio items -->
    <div class="pm7-menu-label">Theme</div>
    <button class="pm7-menu-item pm7-menu-item--radio" data-name="theme" data-checked="true">
      Light
    </button>
    <button class="pm7-menu-item pm7-menu-item--radio" data-name="theme">
      Dark
    </button>
    <button class="pm7-menu-item pm7-menu-item--radio" data-name="theme">
      System
    </button>
    <div class="pm7-menu-separator"></div>
    
    <!-- Switch items -->
    <button class="pm7-menu-item pm7-menu-item--switch" data-checked="true">
      Auto-save
    </button>
    <button class="pm7-menu-item pm7-menu-item--switch">
      Notifications
    </button>
  </div>
</div>
```

#### Checkbox and Radio Hover Behavior

PM7 checkbox and radio items automatically invert their indicator colors on hover for optimal visibility:

- **Normal state**: Primary color indicator on background color
- **Hover state**: Menu hover text color indicator on menu hover background

This ensures the checkbox/radio indicators remain clearly visible against the hover background color in both light and dark modes.

### Submenus

```html
<div class="pm7-menu" data-pm7-menu>
  <button class="pm7-menu-trigger pm7-button pm7-button--outline">
    More Options
  </button>
  <div class="pm7-menu-content">
    <button class="pm7-menu-item">New File</button>
    <button class="pm7-menu-item pm7-menu-item--has-submenu">
      Share
      <svg class="pm7-menu-submenu-icon">...</svg>
    </button>
    <div class="pm7-submenu">
      <button class="pm7-menu-item">Email</button>
      <button class="pm7-menu-item">Link</button>
      <button class="pm7-menu-item">Social Media</button>
    </div>
    <button class="pm7-menu-item">Print</button>
  </div>
</div>
```

### Disabled Items

```html
<div class="pm7-menu-content">
  <button class="pm7-menu-item">Available Action</button>
  <button class="pm7-menu-item" disabled>
    Unavailable Action
  </button>
  <button class="pm7-menu-item">Another Action</button>
</div>
```

### Menu Positioning

The menu can be positioned relative to its trigger using the `data-position` attribute on the `.pm7-menu` container.

| Value | Description |
|-------|-------------|
| `bottom-start` (default) | Aligns the menu to the bottom-left of the trigger. |
| `bottom-end` | Aligns the menu to the bottom-right of the trigger. |
| `top-start` | Aligns the menu to the top-left of the trigger. |
| `top-end` | Aligns the menu to the top-right of the trigger. |
| `left-start` | Aligns the menu to the top-left of the trigger, opening to the left. |
| `left-end` | Aligns the menu to the bottom-left of the trigger, opening to the left. |
| `right-start` | Aligns the menu to the top-right of the trigger, opening to the right. |
| `right-end` | Aligns the menu to the bottom-right of the trigger, opening to the right. |

The menu automatically adjusts its position to stay within the viewport if there isn't enough space in the preferred direction.

```html
<!-- Default (bottom-start) -->
<div class="pm7-menu" data-pm7-menu>
  <button class="pm7-menu-trigger">Options</button>
  <div class="pm7-menu-content">...</div>
</div>

<!-- Bottom-end aligned -->
<div class="pm7-menu" data-pm7-menu data-position="bottom-end">
  <button class="pm7-menu-trigger">Options</button>
  <div class="pm7-menu-content">...</div>
</div>

<!-- Top-start aligned -->
<div class="pm7-menu" data-pm7-menu data-position="top-start">
  <button class="pm7-menu-trigger">Options</button>
  <div class="pm7-menu-content">...</div>
</div>
```

## CSS Classes Reference

| Class | Description |
|-------|-------------|
| **Container Classes** | |
| `pm7-menu` | Menu container |
| `pm7-menu--flat` | Individual menu without any shadows |
| `pm7-menu--flat-hover` | Individual menu without hover shadows only |
| `pm7-menu-bar` | Application-style menu bar container |
| `pm7-menu-bar--borderless` | Menu bar without border/background |
| `pm7-menu-bar--flat` | Menu bar without any shadows |
| `pm7-menu-bar--flat-hover` | Menu bar without hover shadows only |
| **Trigger Classes** | |
| `pm7-menu-trigger` | Button that opens the menu |
| **Content Classes** | |
| `pm7-menu-content` | Dropdown container |
| `pm7-menu-item` | Clickable menu item |
| `pm7-menu-item--checkbox` | Checkbox menu item |
| `pm7-menu-item--radio` | Radio menu item |
| `pm7-menu-item--switch` | Switch/toggle menu item |
| `pm7-menu-item--has-submenu` | Item with submenu indicator |
| `pm7-menu-item--destructive` | Destructive action (red text) |
| `pm7-menu-item--clicking` | Applied during click (internal) |
| **Structure Classes** | |
| `pm7-menu-item-icon` | Icon within menu item |
| `pm7-menu-item-check` | Checkmark icon for checkbox menu items |
| `pm7-menu-shortcut` | Keyboard shortcut hint |
| `pm7-menu-separator` | Horizontal divider |
| `pm7-menu-label` | Small section label |
| `pm7-menu-section-title` | Large section header |
| `pm7-submenu` | Submenu container |
| `pm7-menu-submenu-icon` | Submenu arrow indicator |

## JavaScript API

### Methods

| Method | Description |
|--------|-------------|
| `open()` | Opens the menu |
| `close()` | Closes the menu |
| `toggle()` | Toggles menu open/closed state |
| `adjustPosition()` | Recalculates and adjusts menu position |

### Events

| Event | Detail | Description |
|-------|--------|-------------|
| `pm7-menu-select` | `{ item, text, value }` | Fired when a menu item is selected |

### Data Attributes

| Attribute | Description |
|-----------|-------------|
| `data-pm7-menu` | Auto-initialize menu |
| `data-checked` | Set checkable item state |
| `data-name` | Group radio items |
| `data-value` | Custom value for menu item |

## Keyboard Navigation

- **Tab**: Move focus to menu trigger
- **Enter/Space**: Open menu when trigger focused
- **Arrow Down**: Move to next item
- **Arrow Up**: Move to previous item  
- **Arrow Right**: Open submenu (when applicable)
- **Arrow Left**: Close submenu
- **Home**: Jump to first item
- **End**: Jump to last item
- **Escape**: Close menu
- **Enter/Space**: Select focused item

## Accessibility Features

- **Full keyboard navigation** with intuitive controls
- **Focus management** with trap and restoration
- **ARIA attributes** for screen reader support
- **Skip disabled items** in keyboard navigation
- **Click outside** to close
- **Escape key** closes menu
- **Hover delay** for better submenu UX
- **RTL support** for right-to-left languages

## Menu Bar Behavior

When using `pm7-menu-bar`:
- Menus open on hover when any menu in the bar is already open
- Seamless navigation between menus with mouse
- Maintains keyboard navigation within active menu
- Visual feedback for active menu

### Menu Modifier Classes

PM7 provides several modifier classes to customize the appearance of menus:

#### Shadow Modifiers

| Modifier | Description | Use Case |
|----------|-------------|----------|
| Default | Full shadows on dropdowns and hovers | Standard desktop applications |
| `--flat` | No shadows at all | Ultra-minimalist interfaces |
| `--flat-hover` | Dropdown shadows only, no hover shadows | Modern web apps with subtle depth |

#### Layout Modifiers (Menu Bar Only)

| Modifier | Description | Use Case |
|----------|-------------|----------|
| Default | With border and background | Contained menu sections |
| `--borderless` | No border or background | Traditional toolbar appearance |

#### Combining Modifiers

You can combine modifiers for precise control:

```html
<!-- Modern toolbar: no border, with dropdown shadows, no hover shadows -->
<div class="pm7-menu-bar pm7-menu-bar--borderless pm7-menu-bar--flat-hover">
  <!-- Your menus -->
</div>

<!-- Ultra-minimal: no border, no shadows at all -->
<div class="pm7-menu-bar pm7-menu-bar--borderless pm7-menu-bar--flat">
  <!-- Your menus -->
</div>

<!-- Clean individual menu: dropdown shadows but no hover effects -->
<div class="pm7-menu pm7-menu--flat-hover" data-pm7-menu>
  <!-- Your menu -->
</div>
```

## Position Adjustment

The menu automatically adjusts its position to stay within the viewport:
- Flips from bottom to top if not enough space below
- Adjusts horizontal position to prevent overflow
- Works with all alignment variants

## Performance Considerations

- Use `data-pm7-menu` for automatic initialization
- Manual initialization for dynamically created menus
- Hardware acceleration for smooth animations
- Efficient event delegation for menu items

## Best Practices

1. **Group related items**: Use separators and labels to organize
2. **Keep it concise**: Limit menu items to avoid overwhelming users
3. **Use icons consistently**: Either all items have icons or none
4. **Dangerous actions**: Use `pm7-menu-item--destructive` for delete operations
5. **Descriptive labels**: Use clear, action-oriented text
6. **Keyboard shortcuts**: Display shortcuts for power users
7. **Logical order**: Most common actions first, dangerous actions last

### Choosing the Right Modifier

**When to use each shadow variant:**

- **Default (with shadows)**: 
  - Desktop-style applications
  - When you need clear visual hierarchy
  - Complex menus with submenus

- **`--flat`**: 
  - Minimalist designs
  - When shadows conflict with your design system
  - Simple, single-level menus

- **`--flat-hover`**: 
  - Modern web applications
  - When you want depth without movement
  - Reduces visual noise while maintaining hierarchy

**When to use layout modifiers:**

- **Default menu bar**: When menus need visual containment
- **`--borderless`**: For traditional application toolbars or when integrating with custom headers

## Advanced Examples

### User Account Menu

```html
<div class="pm7-menu" data-pm7-menu>
  <button class="pm7-menu-trigger pm7-button pm7-button--ghost">
    <img src="avatar.jpg" alt="User" class="pm7-avatar">
    John Doe
    <svg class="pm7-icon-chevron-down">...</svg>
  </button>
  <div class="pm7-menu-content pm7-menu-content--end">
    <div class="pm7-menu-label">john@example.com</div>
    <button class="pm7-menu-item">
      <svg class="pm7-menu-item-icon">...</svg>
      My Profile
    </button>
    <button class="pm7-menu-item">
      <svg class="pm7-menu-item-icon">...</svg>
      Account Settings
    </button>
    <div class="pm7-menu-separator"></div>
    <button class="pm7-menu-item">
      <svg class="pm7-menu-item-icon">...</svg>
      Help & Support
    </button>
    <button class="pm7-menu-item">
      <svg class="pm7-menu-item-icon">...</svg>
      Keyboard Shortcuts
      <span class="pm7-menu-shortcut">⌘K</span>
    </button>
    <div class="pm7-menu-separator"></div>
    <button class="pm7-menu-item">
      <svg class="pm7-menu-item-icon">...</svg>
      Sign Out
    </button>
  </div>
</div>
```

### Context Menu

```html
<div class="pm7-table-row" oncontextmenu="showContextMenu(event)">
  <!-- Table content -->
</div>

<div class="pm7-menu pm7-context-menu" id="context-menu" style="position: fixed; display: none;">
  <div class="pm7-menu-content">
    <button class="pm7-menu-item">View Details</button>
    <button class="pm7-menu-item">Edit</button>
    <button class="pm7-menu-item">Duplicate</button>
    <div class="pm7-menu-separator"></div>
    <button class="pm7-menu-item pm7-menu-item--destructive">Delete</button>
  </div>
</div>

<script>
function showContextMenu(e) {
  e.preventDefault();
  const menu = document.getElementById('context-menu');
  const menuInstance = new PM7Menu(menu);
  
  // Position at cursor
  menu.style.display = 'block';
  menu.style.left = e.pageX + 'px';
  menu.style.top = e.pageY + 'px';
  
  // Open and adjust position
  menuInstance.open();
  menuInstance.adjustPosition();
  
  // Hide on click outside
  document.addEventListener('click', () => {
    menuInstance.close();
    menu.style.display = 'none';
  }, { once: true });
}
</script>
```

### Settings Menu with Mixed Controls

```html
<div class="pm7-menu" data-pm7-menu>
  <button class="pm7-menu-trigger pm7-button pm7-button--outline">
    <svg class="pm7-icon-settings">...</svg>
    Settings
  </button>
  <div class="pm7-menu-content">
    <div class="pm7-menu-section-title">Display</div>
    <button class="pm7-menu-item pm7-menu-item--checkbox" data-checked="true">
      Compact Mode
    </button>
    <button class="pm7-menu-item pm7-menu-item--checkbox">
      Show Line Numbers
    </button>
    
    <div class="pm7-menu-separator"></div>
    
    <div class="pm7-menu-section-title">Editor</div>
    <button class="pm7-menu-item pm7-menu-item--switch" data-checked="true">
      Auto-save
    </button>
    <button class="pm7-menu-item pm7-menu-item--switch">
      Auto-complete
    </button>
    
    <div class="pm7-menu-separator"></div>
    
    <button class="pm7-menu-item pm7-menu-item--has-submenu">
      Font Size
    </button>
    <div class="pm7-submenu">
      <button class="pm7-menu-item pm7-menu-item--radio" data-name="font-size">Small</button>
      <button class="pm7-menu-item pm7-menu-item--radio" data-name="font-size" data-checked="true">Medium</button>
      <button class="pm7-menu-item pm7-menu-item--radio" data-name="font-size">Large</button>
    </div>
  </div>
</div>
```

## CSS Customization

PM7 menus can be customized using CSS custom properties:

```css
:root {
  /* Menu styling */
  --pm7-menu-min-width: 8rem;
  --pm7-menu-max-width: 20rem;
  --pm7-menu-radius: 0.375rem;
  --pm7-menu-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1);
  
  /* Menu bar */
  --pm7-menu-bar-gap: 0; /* No gap for seamless hover */
  
  /* Item styling */
  --pm7-menu-item-padding: 0.5rem 0.75rem;
  --pm7-menu-item-radius: 0.25rem;
  
  /* Animation */
  --pm7-menu-animation-duration: 150ms;
}
```

## React Usage

When using @pm7/react:

```jsx
import { Menu } from '@pm7/react';

function MyComponent() {
  const menuItems = [
    { id: '1', label: 'Edit', icon: <EditIcon /> },
    { id: '2', label: 'Duplicate', icon: <CopyIcon /> },
    { id: 'sep', type: 'separator' },
    { id: '3', label: 'Delete', icon: <TrashIcon />, variant: 'destructive' }
  ];

  return (
    <Menu
      trigger={<Button variant="outline">Options</Button>}
      items={menuItems}
      align="end"
      onSelect={(item) => handleMenuSelect(item)}
    />
  );
}
```

### React Compound Components (Coming Soon)

```jsx
import { Menu, MenuTrigger, MenuContent, MenuItem, MenuSeparator } from '@pm7/react';

function MyComponent() {
  return (
    <Menu>
      <MenuTrigger asChild>
        <Button variant="outline">Options</Button>
      </MenuTrigger>
      <MenuContent align="end">
        <MenuItem onSelect={() => console.log('Edit')}>Edit</MenuItem>
        <MenuItem onSelect={() => console.log('Duplicate')}>Duplicate</MenuItem>
        <MenuSeparator />
        <MenuItem variant="destructive" onSelect={() => console.log('Delete')}>
          Delete
        </MenuItem>
      </MenuContent>
    </Menu>
  );
}
```

## Common Pitfalls

### ❌ Don't forget the menu structure
```html
<!-- Wrong - missing content wrapper -->
<div class="pm7-menu" data-pm7-menu>
  <button class="pm7-menu-trigger">Menu</button>
  <button class="pm7-menu-item">Option</button>
</div>

<!-- Correct - proper structure -->
<div class="pm7-menu" data-pm7-menu>
  <button class="pm7-menu-trigger">Menu</button>
  <div class="pm7-menu-content">
    <button class="pm7-menu-item">Option</button>
  </div>
</div>
```

### ❌ Don't use divs for menu items
```html
<!-- Wrong - div elements aren't keyboard accessible -->
<div class="pm7-menu-content">
  <div class="pm7-menu-item" onclick="doSomething()">Option</div>
</div>

<!-- Correct - use button elements -->
<div class="pm7-menu-content">
  <button class="pm7-menu-item">Option</button>
</div>
```

### ❌ Don't forget icons in checkable items
```html
<!-- Wrong - no visual indicator for checked state -->
<button class="pm7-menu-item pm7-menu-item--checkbox" data-checked="true">
  Show Toolbar
</button>

<!-- Correct - checkbox items are styled automatically -->
<button class="pm7-menu-item pm7-menu-item--checkbox" data-checked="true">
  Show Toolbar
</button>
```

### ❌ Don't mix radio groups
```html
<!-- Wrong - radio items without data-name grouping -->
<button class="pm7-menu-item pm7-menu-item--radio">Light</button>
<button class="pm7-menu-item pm7-menu-item--radio">Dark</button>

<!-- Correct - use data-name to group radio items -->
<button class="pm7-menu-item pm7-menu-item--radio" data-name="theme">Light</button>
<button class="pm7-menu-item pm7-menu-item--radio" data-name="theme">Dark</button>
```

### ❌ Don't position menu manually
```html
<!-- Wrong - manual positioning -->
<div class="pm7-menu" data-pm7-menu style="position: absolute; top: 50px; left: 100px;">

<!-- Correct - use data-position attribute -->
<div class="pm7-menu" data-pm7-menu data-position="bottom-end">
```

### ❌ Don't forget ARIA for icon-only triggers
```html
<!-- Wrong - no accessible label -->
<button class="pm7-menu-trigger pm7-button pm7-button--icon">
  <svg>...</svg>
</button>

<!-- Correct - include aria-label -->
<button class="pm7-menu-trigger pm7-button pm7-button--icon" aria-label="More options">
  <svg>...</svg>
</button>
```

## Common Issues & Troubleshooting

### Menu Not Opening
**Problem**: Clicking the trigger button does nothing.

**Common Causes**:
1. **Missing JavaScript**: PM7 JavaScript not loaded
2. **Wrong initialization**: Component not properly initialized
3. **CSS not loaded**: Menu styles missing

**Solutions**:
```html
<!-- Make sure PM7 JavaScript is loaded -->
<script src="/node_modules/@pm7/core/dist/pm7.js"></script>

<!-- Or initialize manually -->
<script type="module">
  import { PM7Menu } from '@pm7/core';
  const menu = new PM7Menu(document.querySelector('[data-pm7-menu]'));
</script>
```

### CSS Specificity with Button Classes
When using PM7 button classes on menu triggers, be aware that button styles have high specificity:

```html
<!-- Menu triggers often use button classes -->
<button class="pm7-menu-trigger pm7-button pm7-button--ghost">
  File
</button>
```

**Important**: The menu component CSS accounts for this by using higher specificity selectors:
- `.pm7-menu-trigger.pm7-button` overrides base button styles
- `.pm7-menu-trigger.pm7-button--ghost` overrides ghost button hover styles
- Transitions are disabled for instant menu feedback

If you create custom button variants, ensure menu triggers still get proper hover styling.

### CSS Specificity with Link Elements
When using `<a>` tags as menu items, global link styles might override menu colors:

```css
/* Problem: Global link styles override menu colors */
.dark a { color: var(--pm7-primary); } /* Blue text in dark mode */

/* Solution 1: Exclude menu items from global styles */
.dark a:not(.pm7-menu-item) {
  color: var(--pm7-primary);
}

/* Solution 2: Override with higher specificity */
a.pm7-menu-item {
  color: var(--pm7-foreground) !important;
}

/* Solution 3: Use more specific selectors in your global styles */
.content a:not(.pm7-menu-item) {
  color: var(--pm7-primary);
}
```

**Best practice**: Always test menu items with links in both light and dark modes.

### Menu Position Issues
**Problem**: Menu appears in wrong position or gets cut off.

**Solutions**:
1. **Use data-position**: Let PM7 handle positioning automatically
2. **Check z-index**: Ensure menu has proper stacking context
3. **Container overflow**: Parent elements shouldn't have `overflow: hidden`

```html
<!-- Let PM7 handle positioning -->
<div class="pm7-menu" data-pm7-menu data-position="bottom-end">
  <!-- Menu content -->
</div>
```

### Dark Mode Color Issues
**Problem**: Menu items showing incorrect colors in dark mode.

**Common Scenarios**:
- Links appearing blue instead of using foreground color
- Hover states not contrasting properly
- Icons not adapting to theme

**Solutions**:
```css
/* Ensure proper dark mode support */
.dark .pm7-menu-item {
  color: var(--pm7-foreground);
}

/* For link menu items */
.dark a.pm7-menu-item {
  color: var(--pm7-foreground);
}

/* Icon color inheritance */
.pm7-menu-item svg {
  fill: currentColor;
}
```

## Related Components

- [Button](../button/) - Common trigger for menus
- [Dialog](../dialog/) - For confirming menu actions
- [Toast](../toast/) - For feedback after menu actions