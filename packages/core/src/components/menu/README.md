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

// Listen for selection
menuElement.addEventListener('pm7-menu-select', (e) => {
  console.log('Selected item:', e.detail.item);
});
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
    <button class="pm7-menu-item">
      <svg class="pm7-menu-item-icon">...</svg>
      Delete
    </button>
  </div>
</div>
```

### Menu with Labels

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
    
    <div class="pm7-menu-label">Team</div>
    <button class="pm7-menu-item">Team Settings</button>
    <button class="pm7-menu-item">Invite Members</button>
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

### Menu Alignment

```html
<!-- Left aligned (default) -->
<div class="pm7-menu-content">
  ...
</div>

<!-- Right aligned -->
<div class="pm7-menu-content pm7-menu-content--end">
  ...
</div>

<!-- Center aligned -->
<div class="pm7-menu-content pm7-menu-content--center">
  ...
</div>
```

## CSS Classes Reference

| Class | Description |
|-------|-------------|
| `pm7-menu` | Menu container |
| `pm7-menu-trigger` | Button that opens the menu |
| `pm7-menu-content` | Dropdown container |
| `pm7-menu-content--end` | Right-align the dropdown |
| `pm7-menu-content--center` | Center-align the dropdown |
| `pm7-menu-item` | Clickable menu item |
| `pm7-menu-item-icon` | Icon within menu item |
| `pm7-menu-separator` | Horizontal divider |
| `pm7-menu-label` | Non-clickable section label |
| `pm7-menu-item--checkbox` | Checkbox menu item |
| `pm7-menu-item--has-submenu` | Item with submenu indicator |

## Keyboard Navigation

- **Tab**: Move focus to menu trigger
- **Enter/Space**: Open menu when trigger focused
- **Arrow Down**: Move to next item
- **Arrow Up**: Move to previous item
- **Home**: Jump to first item
- **End**: Jump to last item
- **Escape**: Close menu
- **Enter/Space**: Select focused item

## Accessibility Features

- Full keyboard navigation
- Focus management and restoration
- ARIA attributes for screen readers
- Disabled items are skipped in navigation
- Click outside to close
- Escape key closes menu

## Best Practices

1. **Group related items**: Use separators and labels to organize
2. **Keep it concise**: Limit menu items to avoid overwhelming users
3. **Use icons consistently**: Either all items have icons or none
4. **Dangerous actions last**: Place destructive actions at the bottom
5. **Descriptive labels**: Use clear, action-oriented text

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

<div class="pm7-menu pm7-context-menu" style="display: none;">
  <div class="pm7-menu-content">
    <button class="pm7-menu-item">View Details</button>
    <button class="pm7-menu-item">Edit</button>
    <button class="pm7-menu-item">Duplicate</button>
    <div class="pm7-menu-separator"></div>
    <button class="pm7-menu-item">Delete</button>
  </div>
</div>

<script>
function showContextMenu(e) {
  e.preventDefault();
  const menu = document.querySelector('.pm7-context-menu');
  menu.style.display = 'block';
  menu.style.left = e.pageX + 'px';
  menu.style.top = e.pageY + 'px';
}
</script>
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
    { id: '3', label: 'Delete', icon: <TrashIcon /> }
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

## Related Components

- [Button](../button/) - Common trigger for menus
- [Dialog](../dialog/) - For confirming menu actions
- [Toast](../toast/) - For feedback after menu actions