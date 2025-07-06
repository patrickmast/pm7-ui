# Tab Selector

Tab interface for switching between different views or content sections.

> ⚠️ **Important: This documentation is for the vanilla JavaScript implementation (`@pm7/core`)**
> 
> If you're using React, you need the React components from `@pm7/react` instead:
> - React uses `<Tabs>`, `<TabsList>`, `<TabsTrigger>`, `<TabsContent>` components
> - Different API and prop-based configuration
> - No manual JavaScript initialization needed
> - See the [React Usage section](#react-usage-pm7react) below for details

## Installation

```bash
# For vanilla JavaScript projects
npm install @pm7/core

# For React projects
npm install @pm7/react @pm7/core
```

### CSS Import (Required!)

```javascript
// For React projects
import '@pm7/core/dist/pm7.css';

// For vanilla HTML
<link rel="stylesheet" href="node_modules/@pm7/core/dist/pm7.css">
```

⚠️ **Important**: The CSS file is located at `@pm7/core/dist/pm7.css`, NOT `@pm7/core/dist/index.css`.

## Version Comparison

| Feature | Vanilla JS (`@pm7/core`) | React (`@pm7/react`) |
|---------|--------------------------|----------------------|
| **Import** | `import { PM7TabSelector } from '@pm7/core'` | `import { Tabs, TabsList, TabsTrigger, TabsContent } from '@pm7/react'` |
| **Initialization** | Manual or auto via `data-pm7-tab-selector` | Automatic via React components |
| **Structure** | HTML with CSS classes | JSX components |
| **State Management** | DOM manipulation | React state |
| **Events** | DOM events (`pm7-tab-change`) | onChange callbacks |
| **Styling** | CSS classes (`pm7-tab-selector`, etc.) | Component props and CSS |

## Quick Decision Guide

**Use Vanilla JS (`@pm7/core`) when:**
- Building a traditional multi-page application
- Working with server-rendered HTML (PHP, Ruby, etc.)
- Integrating into legacy applications
- You need direct DOM control

**Use React (`@pm7/react`) when:**
- Building a React application
- Using Next.js, Gatsby, or Create React App
- Need React state management integration
- Want TypeScript prop validation

---

# Vanilla JavaScript Implementation

The following sections describe the vanilla JavaScript implementation using `@pm7/core`.

## Usage (Vanilla JavaScript)

### Basic Tabs

```html
<div class="pm7-tab-selector" data-pm7-tab-selector>
  <div class="pm7-tab-list">
    <button class="pm7-tab-trigger" aria-controls="basic-tab-1" data-state="active">Tab 1</button>
    <button class="pm7-tab-trigger" aria-controls="basic-tab-2">Tab 2</button>
    <button class="pm7-tab-trigger" aria-controls="basic-tab-3">Tab 3</button>
  </div>
  
  <div class="pm7-tab-content" id="basic-tab-1" data-state="active">
    <p>Content for Tab 1. This is the default active tab.</p>
  </div>
  <div class="pm7-tab-content" id="basic-tab-2">
    <p>Content for Tab 2. You can place any HTML content here.</p>
  </div>
  <div class="pm7-tab-content" id="basic-tab-3">
    <p>Content for Tab 3. Tabs help organize complex information.</p>
  </div>
</div>
```

### JavaScript Initialization

Tabs with `data-pm7-tab-selector` are automatically initialized. For manual control:

```javascript
import { PM7TabSelector } from '@pm7/core';

// Manual initialization
const tabElement = document.querySelector('.pm7-tab-selector');
const tabs = new PM7TabSelector(tabElement);

// Select tab by index
tabs.selectTabByIndex(1);

// Select tab by ID
tabs.selectTabById('settings-tab');

// Get active tab info
const activeTab = tabs.getActiveTab();
const activeIndex = tabs.getActiveIndex();

// Listen for tab changes
tabElement.addEventListener('pm7-tab-change', (e) => {
  console.log('Selected tab:', e.detail.tab);
  console.log('Tab panel:', e.detail.panel);
  console.log('Tab index:', e.detail.index);
});
```

### Variants

```html
<!-- Default variant (underline) -->
<div class="pm7-tab-selector" data-pm7-tab-selector>
  <div class="pm7-tab-list">
    <button class="pm7-tab-trigger" aria-controls="default-variant-tab-1" data-state="active">Default 1</button>
    <button class="pm7-tab-trigger" aria-controls="default-variant-tab-2">Default 2</button>
  </div>
  <div class="pm7-tab-content" id="default-variant-tab-1" data-state="active">
    <p>Content for Default Variant Tab 1.</p>
  </div>
  <div class="pm7-tab-content" id="default-variant-tab-2">
    <p>Content for Default Variant Tab 2.</p>
  </div>
</div>

<!-- Solid variant -->
<div class="pm7-tab-selector pm7-tab-selector--solid" data-pm7-tab-selector>
  <div class="pm7-tab-list">
    <button class="pm7-tab-trigger" aria-controls="solid-variant-tab-1" data-state="active">Solid 1</button>
    <button class="pm7-tab-trigger" aria-controls="solid-variant-tab-2">Solid 2</button>
  </div>
  <div class="pm7-tab-content" id="solid-variant-tab-1" data-state="active">
    <p>Content for Solid Variant Tab 1.</p>
  </div>
  <div class="pm7-tab-content" id="solid-variant-tab-2">
    <p>Content for Solid Variant Tab 2.</p>
  </div>
</div>

<!-- Pills variant -->
<div class="pm7-tab-selector pm7-tab-selector--pills" data-pm7-tab-selector>
  <div class="pm7-tab-list">
    <button class="pm7-tab-trigger" aria-controls="pills-variant-tab-1" data-state="active">Pills 1</button>
    <button class="pm7-tab-trigger" aria-controls="pills-variant-tab-2">Pills 2</button>
  </div>
  <div class="pm7-tab-content" id="pills-variant-tab-1" data-state="active">
    <p>Content for Pills Variant Tab 1.</p>
  </div>
  <div class="pm7-tab-content" id="pills-variant-tab-2">
    <p>Content for Pills Variant Tab 2.</p>
  </div>
</div>
```

### Sizes

```html
<!-- Default size -->
<div class="pm7-tab-selector" data-pm7-tab-selector>
  <div class="pm7-tab-list">
    <button class="pm7-tab-trigger" aria-controls="default-size-tab-1" data-state="active">Default Size</button>
    <button class="pm7-tab-trigger" aria-controls="default-size-tab-2">Tab 2</button>
  </div>
  <div class="pm7-tab-content" id="default-size-tab-1" data-state="active">
    <p>Content for Default Size Tab 1.</p>
  </div>
  <div class="pm7-tab-content" id="default-size-tab-2">
    <p>Content for Default Size Tab 2.</p>
  </div>
</div>

<!-- Small -->
<div class="pm7-tab-selector pm7-tab-selector--sm" data-pm7-tab-selector>
  <div class="pm7-tab-list">
    <button class="pm7-tab-trigger" aria-controls="small-size-tab-1" data-state="active">Small Size</button>
    <button class="pm7-tab-trigger" aria-controls="small-size-tab-2">Tab 2</button>
  </div>
  <div class="pm7-tab-content" id="small-size-tab-1" data-state="active">
    <p>Content for Small Size Tab 1.</p>
  </div>
  <div class="pm7-tab-content" id="small-size-tab-2">
    <p>Content for Small Size Tab 2.</p>
  </div>
</div>

<!-- Large -->
<div class="pm7-tab-selector pm7-tab-selector--lg" data-pm7-tab-selector>
  <div class="pm7-tab-list">
    <button class="pm7-tab-trigger" aria-controls="large-size-tab-1" data-state="active">Large Size</button>
    <button class="pm7-tab-trigger" aria-controls="large-size-tab-2">Tab 2</button>
  </div>
  <div class="pm7-tab-content" id="large-size-tab-1" data-state="active">
    <p>Content for Large Size Tab 1.</p>
  </div>
  <div class="pm7-tab-content" id="large-size-tab-2">
    <p>Content for Large Size Tab 2.</p>
  </div>
</div>
```

### Full Width Tabs

```html
<div class="pm7-tab-selector pm7-tab-selector--solid pm7-tab-selector--full-width" data-pm7-tab-selector>
  <div class="pm7-tab-list">
    <button class="pm7-tab-trigger" aria-controls="full-width-tab-1" data-state="active">Tab A</button>
    <button class="pm7-tab-trigger" aria-controls="full-width-tab-2">Tab B</button>
    <button class="pm7-tab-trigger" aria-controls="full-width-tab-3">Tab C</button>
  </div>
  <div class="pm7-tab-content" id="full-width-tab-1" data-state="active">
    <p>Content for Full Width Tab A.</p>
  </div>
  <div class="pm7-tab-content" id="full-width-tab-2">
    <p>Content for Full Width Tab B.</p>
  </div>
  <div class="pm7-tab-content" id="full-width-tab-3">
    <p>Content for Full Width Tab C.</p>
  </div>
</div>
```

### Tabs with Icons

```html
<div class="pm7-tab-selector" data-pm7-tab-selector>
  <div class="pm7-tab-list">
    <button class="pm7-tab-trigger" aria-controls="icon-tab-1" data-state="active">
      <svg class="pm7-tab-trigger-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
      Dashboard
    </button>
    <button class="pm7-tab-trigger" aria-controls="icon-tab-2">
      <svg class="pm7-tab-trigger-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>
      Settings
    </button>
  </div>
  <div class="pm7-tab-content" id="icon-tab-1" data-state="active">
    <p>Content for Dashboard tab with icon.</p>
  </div>
  <div class="pm7-tab-content" id="icon-tab-2">
    <p>Content for Settings tab with icon.</p>
  </div>
</div>
```

### Tabs with Badges

```html
<div class="pm7-tab-selector" data-pm7-tab-selector>
  <div class="pm7-tab-list">
    <button class="pm7-tab-trigger" aria-controls="badge-tab-1" data-state="active">
      Messages
      <span class="pm7-tab-trigger-badge">3</span>
    </button>
    <button class="pm7-tab-trigger" aria-controls="badge-tab-2">
      Notifications
      <span class="pm7-tab-trigger-badge">12</span>
    </button>
  </div>
  <div class="pm7-tab-content" id="badge-tab-1" data-state="active">
    <p>Content for Messages tab with badge.</p>
  </div>
  <div class="pm7-tab-content" id="badge-tab-2">
    <p>Content for Notifications tab with badge.</p>
  </div>
</div>
```

### Disabled Tabs

```html
<div class="pm7-tab-selector" data-pm7-tab-selector>
  <div class="pm7-tab-list">
    <button class="pm7-tab-trigger" aria-controls="disabled-tab-1" data-state="active">Active Tab</button>
    <button class="pm7-tab-trigger" aria-controls="disabled-tab-2" disabled>Disabled Tab</button>
    <button class="pm7-tab-trigger" aria-controls="disabled-tab-3">Another Tab</button>
  </div>
  <div class="pm7-tab-content" id="disabled-tab-1" data-state="active">
    <p>Content for Active Tab.</p>
  </div>
  <div class="pm7-tab-content" id="disabled-tab-2">
    <p>Content for Disabled Tab (should not be reachable via click or keyboard).</p>
  </div>
  <div class="pm7-tab-content" id="disabled-tab-3">
    <p>Content for Another Tab.</p>
  </div>
</div>
```

### Mixed Icon and Badge Tabs

```html
<div class="pm7-tab-selector pm7-tab-selector--solid" data-pm7-tab-selector>
  <div class="pm7-tab-list">
    <button class="pm7-tab-trigger" aria-controls="mixed-tab-1" data-state="active">
      <svg class="pm7-tab-trigger-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
      Overview
    </button>
    <button class="pm7-tab-trigger" aria-controls="mixed-tab-2">
      <svg class="pm7-tab-trigger-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
      Messages
      <span class="pm7-tab-trigger-badge">5</span>
    </button>
    <button class="pm7-tab-trigger" aria-controls="mixed-tab-3">
      <svg class="pm7-tab-trigger-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>
      Settings
    </button>
  </div>
  <div class="pm7-tab-content" id="mixed-tab-1" data-state="active">
    <p>Content for Mixed Icon and Badge Tab 1.</p>
  </div>
  <div class="pm7-tab-content" id="mixed-tab-2">
    <p>Content for Mixed Icon and Badge Tab 2.</p>
  </div>
  <div class="pm7-tab-content" id="mixed-tab-3">
    <p>Content for Mixed Icon and Badge Tab 3.</p>
  </div>
</div>
```

## CSS Classes Reference

| Class | Description |
|-------|-------------|
| **Container Classes** | |
| `pm7-tab-selector` | Container element |
| `pm7-tab-list` | Tab button container |
| **Tab Classes** | |
| `pm7-tab-trigger` | Individual tab button |
| `pm7-tab-trigger--active` | Active tab state (alternative to data-state) |
| `pm7-tab-trigger-icon` | Icon within tab |
| `pm7-tab-trigger-badge` | Badge/counter within tab |
| **Content Classes** | |
| `pm7-tab-content` | Tab panel content |
| `pm7-tab-content--active` | Active panel state (alternative to data-state) |
| **Variant Classes** | |
| `pm7-tab-selector--solid` | Solid background variant |
| `pm7-tab-selector--pills` | Pill-shaped variant |
| **Size Classes** | |
| `pm7-tab-selector--sm` | Small size |
| `pm7-tab-selector--lg` | Large size |
| **Layout Classes** | |
| `pm7-tab-selector--full-width` | Full width tabs |

**Note**: The default tab style uses an underline indicator. No additional class is needed for this variant.

## State Management

Tabs use `data-state="active"` attributes for state management, with fallback support for `--active` modifier classes:

```html
<!-- Preferred: Using data-state -->
<button class="pm7-tab-trigger" data-state="active">Active Tab</button>
<div class="pm7-tab-content" data-state="active">Active Content</div>

<!-- Alternative: Using modifier classes -->
<button class="pm7-tab-trigger pm7-tab-trigger--active">Active Tab</button>
<div class="pm7-tab-content pm7-tab-content--active">Active Content</div>
```

## CSS Customization

PM7 tabs can be customized using CSS custom properties:

```css
:root {
  /* Tab styling */
  --pm7-tab-trigger-padding: 0.5rem 1rem;
  --pm7-tab-trigger-padding-sm: 0.375rem 0.75rem;
  --pm7-tab-trigger-padding-lg: 0.625rem 1.25rem;
  
  /* Typography */
  --pm7-tab-trigger-font-size: 0.875rem;
  --pm7-tab-trigger-font-size-sm: 0.8125rem;
  --pm7-tab-trigger-font-size-lg: 1rem;
  
  /* Colors */
  --pm7-tab-trigger-color: var(--pm7-text-secondary);
  --pm7-tab-trigger-color-active: var(--pm7-primary);
  
  /* Indicator */
  --pm7-tab-indicator-size: 2px;
  --pm7-tab-indicator-color: var(--pm7-primary);
}
```

## Keyboard Navigation

- **Tab**: Move focus into tab list
- **Arrow Left/Up**: Move to previous tab
- **Arrow Right/Down**: Move to next tab
- **Home**: Jump to first tab
- **End**: Jump to last tab
- **Enter/Space**: Activate focused tab

## JavaScript API

### Auto-initialization

Tab selectors with `data-pm7-tab-selector` attribute are automatically initialized when the DOM loads.

```javascript
import { PM7TabSelector } from '@pm7/core';
```

### Class Constructor

```javascript
const tabElement = document.querySelector('.pm7-tab-selector');
const tabs = new PM7TabSelector(tabElement);
```

### Instance Methods

| Method | Description | Return Value |
|--------|-------------|--------------|
| `selectTabByIndex(index)` | Selects tab by its index (0-based) | `void` |
| `selectTabById(id)` | Selects tab by its ID attribute | `void` |
| `getActiveTab()` | Returns the currently active tab element | `HTMLElement` |
| `getActiveIndex()` | Returns the index of the active tab | `number` |
| `selectTab(tab)` | Selects a specific tab element | `void` |

```javascript
// Select second tab
tabs.selectTabByIndex(1);

// Select tab by ID
tabs.selectTabById('analytics-tab');

// Get current tab
const currentTab = tabs.getActiveTab();
console.log('Active tab:', currentTab.textContent);

// Get current index
const currentIndex = tabs.getActiveIndex();
console.log('Active index:', currentIndex);
```

### Events

| Event | Description | Detail Object |
|-------|-------------|---------------|
| `pm7-tab-change` | Fired when active tab changes | `{ tab: HTMLElement, panel: HTMLElement, index: number }` |

```javascript
tabElement.addEventListener('pm7-tab-change', (e) => {
  console.log('Tab changed to:', e.detail.tab.textContent);
  console.log('Panel:', e.detail.panel);
  console.log('Index:', e.detail.index);
  
  // Example: Update URL hash
  window.location.hash = e.detail.tab.id || e.detail.index;
});
```

### Manual Initialization

For dynamically created tab selectors:

```javascript
// Create tab structure dynamically
const container = document.createElement('div');
container.className = 'pm7-tab-selector';
container.innerHTML = `
  <div class="pm7-tab-list">
    <button class="pm7-tab-trigger">Tab 1</button>
    <button class="pm7-tab-trigger">Tab 2</button>
  </div>
  <div class="pm7-tab-content">Content 1</div>
  <div class="pm7-tab-content">Content 2</div>
`;

document.body.appendChild(container);

// Initialize manually
const tabs = new PM7TabSelector(container);
```

### Advanced Usage

#### Programmatic Tab Control

```javascript
const tabs = new PM7TabSelector(element);

// Listen for external events
document.getElementById('showSettings').addEventListener('click', () => {
  tabs.selectTabById('settings-tab');
});

// Cycle through tabs
let currentIndex = 0;
setInterval(() => {
  currentIndex = (currentIndex + 1) % 4;
  tabs.selectTabByIndex(currentIndex);
}, 5000);
```

#### Tab State Persistence

```javascript
const tabs = new PM7TabSelector(element);

// Save active tab to localStorage
element.addEventListener('pm7-tab-change', (e) => {
  localStorage.setItem('activeTab', e.detail.index);
});

// Restore on page load
const savedIndex = localStorage.getItem('activeTab');
if (savedIndex !== null) {
  tabs.selectTabByIndex(parseInt(savedIndex));
}
```

#### Dynamic Tab Management

```javascript
function addTab(title, content) {
  const tabList = element.querySelector('.pm7-tab-list');
  const tabsContainer = element;
  
  // Create new tab trigger
  const newTab = document.createElement('button');
  newTab.className = 'pm7-tab-trigger';
  newTab.textContent = title;
  tabList.appendChild(newTab);
  
  // Create new content panel
  const newPanel = document.createElement('div');
  newPanel.className = 'pm7-tab-content';
  newPanel.innerHTML = content;
  tabsContainer.appendChild(newPanel);
  
  // Reinitialize tabs
  new PM7TabSelector(element);
}
```

### Data Attributes

| Attribute | Description | Example |
|-----------|-------------|---------|
| `data-pm7-tab-selector` | Marks element for auto-initialization | `data-pm7-tab-selector` |
| `data-state` | Current state of tab/panel | `data-state="active"` |
| `aria-controls` | Links tab to panel | `aria-controls="panel-1"` |
| `aria-selected` | Indicates selected tab | `aria-selected="true"` |
| `disabled` | Disables a tab | `disabled` |

## Accessibility Features

- **Full keyboard navigation** with arrow keys, Home, End
- **ARIA attributes** for screen reader support
- **Proper focus management** and visual indicators
- **Semantic HTML structure** using appropriate roles
- **Disabled state support** with proper ARIA handling
- **Live region announcements** for tab changes

## Best Practices

1. **Logical grouping**: Use tabs for related content that users might want to switch between
2. **Clear labels**: Use descriptive, concise tab labels
3. **Consistent content**: Each tab panel should have similar types of content
4. **Avoid too many tabs**: Limit to 5-7 tabs for better usability
5. **Remember state**: Consider preserving the active tab on page reload if appropriate
6. **Icon usage**: Use icons to enhance recognition, not replace text labels
7. **Badge updates**: Update badges dynamically to reflect current state

## Examples

### Navigation Tabs

```html
<div class="pm7-tab-selector pm7-tab-selector--solid" data-pm7-tab-selector>
  <div class="pm7-tab-list">
    <button class="pm7-tab-trigger" data-state="active">Overview</button>
    <button class="pm7-tab-trigger">Analytics</button>
    <button class="pm7-tab-trigger">Reports</button>
    <button class="pm7-tab-trigger">Settings</button>
  </div>
  
  <div class="pm7-tab-content" data-state="active">
    <h2>Overview</h2>
    <p>Dashboard overview content...</p>
  </div>
  <div class="pm7-tab-content">
    <h2>Analytics</h2>
    <p>Analytics content...</p>
  </div>
  <div class="pm7-tab-content">
    <h2>Reports</h2>
    <p>Reports content...</p>
  </div>
  <div class="pm7-tab-content">
    <h2>Settings</h2>
    <p>Settings content...</p>
  </div>
</div>
```

### Form Sections

```html
<form>
  <div class="pm7-tab-selector" data-pm7-tab-selector>
    <div class="pm7-tab-list">
      <button type="button" class="pm7-tab-trigger" data-state="active">
        Personal Info
      </button>
      <button type="button" class="pm7-tab-trigger">
        Security
      </button>
      <button type="button" class="pm7-tab-trigger">
        Preferences
      </button>
    </div>
    
    <div class="pm7-tab-content" data-state="active">
      <!-- Personal info form fields -->
      <div class="pm7-form-field">
        <label class="pm7-label">Name</label>
        <input type="text" class="pm7-input">
      </div>
      <!-- More fields... -->
    </div>
    <div class="pm7-tab-content">
      <!-- Security form fields -->
      <div class="pm7-form-field">
        <label class="pm7-label">Current Password</label>
        <input type="password" class="pm7-input">
      </div>
      <!-- More fields... -->
    </div>
    <div class="pm7-tab-content">
      <!-- Preferences form fields -->
      <div class="pm7-form-field">
        <label class="pm7-label">Theme</label>
        <select class="pm7-select">
          <option>Light</option>
          <option>Dark</option>
        </select>
      </div>
      <!-- More fields... -->
    </div>
  </div>
  
  <button type="submit" class="pm7-button pm7-button--primary">
    Save Changes
  </button>
</form>
```

### Product Details Tabs

```html
<div class="pm7-tab-selector pm7-tab-selector--pills pm7-tab-selector--full-width" data-pm7-tab-selector>
  <div class="pm7-tab-list">
    <button class="pm7-tab-trigger" data-state="active">
      Description
    </button>
    <button class="pm7-tab-trigger">
      Specifications
    </button>
    <button class="pm7-tab-trigger">
      Reviews
      <span class="pm7-tab-trigger-badge">24</span>
    </button>
    <button class="pm7-tab-trigger">
      Q&A
      <span class="pm7-tab-trigger-badge">7</span>
    </button>
  </div>
  
  <div class="pm7-tab-content" data-state="active">
    <!-- Product description -->
  </div>
  <div class="pm7-tab-content">
    <!-- Technical specifications -->
  </div>
  <div class="pm7-tab-content">
    <!-- Customer reviews -->
  </div>
  <div class="pm7-tab-content">
    <!-- Questions and answers -->
  </div>
</div>
```

---

# React Implementation

The following section describes the React implementation using `@pm7/react`.

## React Usage (@pm7/react)

When using React, you work with the `@pm7/react` components which have a different API:

```jsx
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@pm7/react';

function MyComponent() {
  const [activeTab, setActiveTab] = useState("overview");
  
  return (
    <Tabs value={activeTab} onValueChange={setActiveTab}>
      <TabsList>
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="details">Details</TabsTrigger>
        <TabsTrigger value="history">History</TabsTrigger>
      </TabsList>
      
      <TabsContent value="overview">
        <p>Overview content goes here</p>
      </TabsContent>
      <TabsContent value="details">
        <p>Details content goes here</p>
      </TabsContent>
      <TabsContent value="history">
        <p>History content goes here</p>
      </TabsContent>
    </Tabs>
  );
}
```

### React with URL Synchronization

```jsx
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@pm7/react';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

function MyComponent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  
  // Get initial tab from URL or default
  const tabFromUrl = searchParams.get("tab");
  const validTabs = ["overview", "details", "history"];
  const initialTab = validTabs.includes(tabFromUrl || "") ? tabFromUrl : "overview";
  
  const [activeTab, setActiveTab] = useState(initialTab);
  
  // Update URL when tab changes
  const handleTabChange = (newTab: string) => {
    setActiveTab(newTab);
    const newSearchParams = new URLSearchParams(searchParams.toString());
    newSearchParams.set("tab", newTab);
    router.push(`${pathname}?${newSearchParams.toString()}`, { scroll: false });
  };
  
  // Update tab when URL changes
  useEffect(() => {
    const tabFromUrl = searchParams.get("tab");
    if (tabFromUrl && validTabs.includes(tabFromUrl) && tabFromUrl !== activeTab) {
      setActiveTab(tabFromUrl);
    }
  }, [searchParams, activeTab]);

  return (
    <Tabs value={activeTab} onValueChange={handleTabChange}>
      <TabsList>
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="details">Details</TabsTrigger>
        <TabsTrigger value="history">History</TabsTrigger>
      </TabsList>
      
      <TabsContent value="overview">
        <p>Overview content</p>
      </TabsContent>
      <TabsContent value="details">
        <p>Details content</p>
      </TabsContent>
      <TabsContent value="history">
        <p>History content</p>
      </TabsContent>
    </Tabs>
  );
}
```

## Data Attributes

| Attribute | Description | Values | Example |
|-----------|-------------|--------|---------|
| `data-pm7-tab-selector` | Auto-initialize tab selector | - | `data-pm7-tab-selector` |
| `data-orientation` | Tab orientation | `horizontal`, `vertical` | `data-orientation="vertical"` |
| `data-variant` | Visual variant | `underline`, `solid`, `minimal` | `data-variant="solid"` |
| `aria-controls` | Links trigger to panel | Panel ID | `aria-controls="panel-1"` |
| `aria-selected` | Selected state | `true`, `false` | `aria-selected="true"` |
| `role` | ARIA roles | `tablist`, `tab`, `tabpanel` | `role="tab"` |
| `tabindex` | Keyboard navigation | `0`, `-1` | `tabindex="0"` |

### Common Pitfalls to Avoid

> ⚠️ **Do NOT mix vanilla JS and React implementations:**
> 
> ❌ **Wrong - Using vanilla JS classes with React components:**
> ```jsx
> // This won't work!
> <Tabs className="pm7-tab-selector pm7-tab-selector--solid">
>   <TabsList className="pm7-tab-list">
>     <TabsTrigger className="pm7-tab-trigger">Tab 1</TabsTrigger>
>   </TabsList>
> </Tabs>
> ```
> 
> ✅ **Correct - Use React component props:**
> ```jsx
> <Tabs value={activeTab} onValueChange={setActiveTab}>
>   <TabsList>
>     <TabsTrigger value="tab1">Tab 1</TabsTrigger>
>   </TabsList>
>   <TabsContent value="tab1">Content</TabsContent>
> </Tabs>
> ```

## Related Components

- [Button](../button/) - Tab triggers are specialized buttons
- [Card](../card/) - Often used within tab panels
- [Menu](../menu/) - Alternative navigation pattern