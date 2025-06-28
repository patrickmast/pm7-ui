# Menu

Dropdown menus display a list of options on temporary surfaces. They appear when users interact with a button or other control.

## Installation

```bash
npm install @pm7/core
```

## Usage

### Basic Menu

```html
<div class="pm7-menu" data-pm7-menu>
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

### JavaScript Initialization

Menus with `data-pm7-menu` are automatically initialized. For manual control:

```javascript
import { PM7Menu } from '@pm7/core';

// Manual initialization
const menuElement = document.querySelector('.pm7-menu');
const menu = new PM7Menu(menuElement);

// Open/close programmatically
menu.open();
menu.close();
menu.toggle();

// Adjust position manually
menu.adjustPosition();

// Listen for selection
menuElement.addEventListener('pm7-menu-select', (e) => {
  console.log('Selected item:', e.detail.item);
  console.log('Item text:', e.detail.text);
  console.log('Item value:', e.detail.value);
});
```

### Menu Bar

Create application-style menu bars with hover-to-open functionality:

```html
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
| `pm7-menu-bar` | Application-style menu bar container |
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

## Related Components

- [Button](../button/) - Common trigger for menus
- [Dialog](../dialog/) - For confirming menu actions
- [Toast](../toast/) - For feedback after menu actions