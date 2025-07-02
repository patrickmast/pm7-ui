# @pm7/react

React components for PM7 UI design system.

## Installation

```bash
npm install @pm7/react @pm7/core
```

**Important:** You need to manually import the PM7 CSS in your application:

```jsx
// In your main App.jsx or index.js
import '@pm7/core/dist/pm7.css';
```

## Usage

```jsx
import { Button, Menu, Dialog } from '@pm7/react';
import '@pm7/core/dist/pm7.css'; // Don't forget to import the CSS!

function App() {
  const [dialogOpen, setDialogOpen] = React.useState(false);
  
  return (
    <div>
      {/* Button */}
      <Button variant="primary" onClick={() => setDialogOpen(true)}>
        Open Dialog
      </Button>
      
      {/* Menu */}
      <Menu
        trigger={<Button variant="outline">Menu</Button>}
        items={[
          { id: '1', label: 'Profile', onClick: () => console.log('Profile') },
          { id: '2', label: 'Settings', onClick: () => console.log('Settings') },
          { id: 'sep', type: 'separator' },
          { id: '3', label: 'Logout', onClick: () => console.log('Logout') }
        ]}
      />
      
      {/* Dialog */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogHeader>
          <DialogTitle>Welcome to PM7 UI</DialogTitle>
        </DialogHeader>
        <DialogBody>
          <p>This is a dialog component from @pm7/react</p>
        </DialogBody>
        <DialogFooter>
          <Button variant="outline" onClick={() => setDialogOpen(false)}>
            Cancel
          </Button>
          <Button onClick={() => setDialogOpen(false)}>
            Confirm
          </Button>
        </DialogFooter>
      </Dialog>
    </div>
  );
}
```

## Components

### Button

```jsx
import { Button } from '@pm7/react';

// Variants
<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="destructive">Destructive</Button>
<Button variant="link">Link</Button>

// Sizes
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>

// Full width
<Button fullWidth>Full Width</Button>

// With icon
<Button>
  <Icon /> Button with Icon
</Button>
```

### Menu

```jsx
import { Menu, MenuTrigger, MenuContent, MenuItem, MenuSeparator, MenuLabel } from '@pm7/react';

// Simple menu with items array
<Menu
  trigger={<Button>Open Menu</Button>}
  items={[
    { id: '1', label: 'Item 1', onClick: handleClick },
    { id: '2', label: 'Item 2', icon: <Icon />, onClick: handleClick },
    { id: 'sep', type: 'separator' },
    { id: '3', label: 'Item 3', disabled: true }
  ]}
  align="end"
  onSelect={(item) => console.log('Selected:', item)}
/>

// Compound components for more control
<div className="pm7-menu" data-pm7-menu>
  <MenuTrigger>
    <Button>Menu</Button>
  </MenuTrigger>
  <MenuContent align="start">
    <MenuLabel>Account</MenuLabel>
    <MenuItem icon={<UserIcon />} onClick={handleProfile}>
      Profile
    </MenuItem>
    <MenuItem icon={<SettingsIcon />} onClick={handleSettings}>
      Settings
    </MenuItem>
    <MenuSeparator />
    <MenuItem onClick={handleLogout}>
      Logout
    </MenuItem>
  </MenuContent>
</div>
```

### Dialog

```jsx
import { 
  Dialog, 
  DialogHeader, 
  DialogTitle, 
  DialogDescription,
  DialogBody, 
  DialogFooter,
  useDialog 
} from '@pm7/react';

// Using state
const [open, setOpen] = React.useState(false);

<Dialog open={open} onOpenChange={setOpen} size="md">
  <DialogHeader>
    <DialogTitle>Dialog Title</DialogTitle>
    <DialogDescription>Optional description</DialogDescription>
  </DialogHeader>
  <DialogBody>
    <p>Dialog content goes here</p>
  </DialogBody>
  <DialogFooter>
    <Button variant="outline" onClick={() => setOpen(false)}>
      Cancel
    </Button>
    <Button onClick={() => setOpen(false)}>
      Save
    </Button>
  </DialogFooter>
</Dialog>

// Using hook
const dialog = useDialog();

<Button onClick={dialog.open}>Open</Button>
<Dialog open={dialog.isOpen} onOpenChange={dialog.setIsOpen}>
  {/* ... */}
</Dialog>

// Dialog variants
<Dialog variant="alert">...</Dialog>
<Dialog variant="success">...</Dialog>

// Dialog sizes
<Dialog size="sm">...</Dialog>  // 400px
<Dialog size="md">...</Dialog>  // 500px
<Dialog size="lg">...</Dialog>  // 600px
<Dialog size="xl">...</Dialog>  // 800px
<Dialog size="full">...</Dialog> // Full screen
```

## TypeScript

All components are fully typed. Import types as needed:

```typescript
import type { ButtonProps, MenuItemType, DialogProps } from '@pm7/react';
```

## License

MIT © Patrick Mast

## Links

- [Documentation](https://pm7-ui.com)
- [Core Package](https://www.npmjs.com/package/@pm7/core)
- [GitHub](https://github.com/patrickmast/pm7-ui)