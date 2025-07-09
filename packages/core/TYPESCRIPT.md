# TypeScript Support for PM7 UI

PM7 UI includes full TypeScript support with type definitions for all components and utilities.

## Installation

```bash
npm install @pm7/core
```

TypeScript types are automatically included with the package.

## Basic Usage

```typescript
import { PM7TabSelector, PM7Menu, PM7Tooltip } from '@pm7/core';
import '@pm7/core/dist/pm7.css';

// Initialize components and use instances
const tabElement = document.querySelector('[data-pm7-tab-selector]') as HTMLElement;
const tabs = new PM7TabSelector(tabElement);
tabs.selectTabById('settings-tab');
```

## Component Usage

Initialize PM7 components and use their instances:

```typescript
// Menu
const menuElement = document.querySelector('.my-menu') as HTMLElement;
const menu = new PM7Menu(menuElement);
menu.open();

// Tab Selector
const tabElement = document.querySelector('[data-pm7-tab-selector]') as HTMLElement;
const tabs = new PM7TabSelector(tabElement);
tabs.selectTabByIndex(0);
const activeTab = tabs.getActiveTab();

// Tooltip
const tooltipElement = document.querySelector('.pm7-tooltip') as HTMLElement;
const tooltip = new PM7Tooltip(tooltipElement);
tooltip.show();
tooltip.updatePosition();
```

## Manual Initialization

You can also manually initialize components:

```typescript
import { PM7TabSelector, PM7Menu, PM7Tooltip } from '@pm7/core';

// Manual initialization
const element = document.querySelector('.my-tabs');
if (element) {
  const tabSelector = new PM7TabSelector(element as HTMLElement);
  
  // Use the instance directly
  tabSelector.selectTabById('my-tab');
}
```

## Toast Notifications

```typescript
import { showToast, closeAllToasts, ToastOptions } from '@pm7/core';

// Simple toast
const toast = showToast('Operation successful!');

// With options
const options: ToastOptions = {
  message: 'File uploaded successfully',
  type: 'success',
  duration: 5000,
  position: 'top-right',
  action: {
    label: 'View',
    onClick: () => console.log('View clicked')
  }
};

const customToast = showToast(options);

// Close specific toast
setTimeout(() => {
  customToast.hide();
}, 3000);

// Close all toasts
closeAllToasts();
```

## Dialog Utilities

```typescript
import { createDialog, confirm, alert } from '@pm7/core';

// Alert dialog
await alert('Your changes have been saved');

// Confirmation dialog
const userConfirmed = await confirm('Are you sure you want to delete this item?');
if (userConfirmed) {
  // Proceed with deletion
}

// Custom dialog
const dialog = createDialog({
  title: 'Export Data',
  content: 'Choose your export format',
  buttons: [
    {
      text: 'CSV',
      variant: 'primary',
      onClick: async () => {
        await exportAsCSV();
      }
    },
    {
      text: 'JSON',
      variant: 'secondary',
      onClick: async () => {
        await exportAsJSON();
      }
    },
    {
      text: 'Cancel',
      variant: 'secondary'
    }
  ]
});
```

## Type Definitions

All components and utilities are fully typed:

```typescript
// Component classes
class PM7TabSelector {
  selectTab(tab: HTMLElement): void;
  selectTabByIndex(index: number): void;
  selectTabById(id: string): void;
  getActiveTab(): HTMLElement | null;
  getActiveIndex(): number;
  destroy(): void;
}

// Options interfaces
interface ToastOptions {
  message: string;
  type?: 'info' | 'success' | 'warning' | 'error';
  duration?: number;
  position?: 'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right';
  dismissible?: boolean;
  action?: {
    label: string;
    onClick: () => void;
  };
}

interface DialogOptions {
  title?: string;
  content?: string;
  buttons?: DialogButton[];
  className?: string;
  closeOnOverlay?: boolean;
  closeOnEscape?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
}
```

## Working with Dynamic Content

When adding PM7 components dynamically:

```typescript
import { initTooltips, initButtons, PM7TabSelector } from '@pm7/core';

// After adding new content
const newContent = document.createElement('div');
newContent.innerHTML = `
  <div data-pm7-tab-selector>
    <!-- tab content -->
  </div>
  <button class="pm7-button">New Button</button>
  <div class="pm7-tooltip">
    <!-- tooltip content -->
  </div>
`;

document.body.appendChild(newContent);

// Re-initialize components in the new content
initButtons(newContent);
initTooltips(newContent);

// Or manually initialize specific components
const tabElement = newContent.querySelector('[data-pm7-tab-selector]');
if (tabElement) {
  const tabs = new PM7TabSelector(tabElement as HTMLElement);
}
```

## Best Practices

1. **Store component instances** when you need to control them:
   ```typescript
   const menu = new PM7Menu(element);
   menu.open();
   ```

2. **Use type assertions** when you know the element type:
   ```typescript
   const menu = document.querySelector('.menu') as HTMLElement;
   ```

3. **Import only what you need** for smaller bundles:
   ```typescript
   import { PM7TabSelector, showToast } from '@pm7/core';
   ```

4. **Handle async operations** properly:
   ```typescript
   try {
     const confirmed = await confirm('Delete this item?');
     if (confirmed) {
       await deleteItem();
     }
   } catch (error) {
     showToast({ message: 'Operation failed', type: 'error' });
   }
   ```

## Troubleshooting

### Module Resolution Issues

If TypeScript can't find the types, ensure your `tsconfig.json` includes:

```json
{
  "compilerOptions": {
    "moduleResolution": "node",
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true
  }
}
```

### Type Errors

Always check if elements exist before initializing:

```typescript
// Check element exists
const element = document.querySelector('.menu');
if (element) {
  const menu = new PM7Menu(element as HTMLElement);
  menu.open();
}
```

### Dynamic Imports

For code splitting:

```typescript
const loadTooltips = async () => {
  const { initTooltips } = await import('@pm7/core');
  initTooltips();
};
```