# Tab Selector

Tab interface for switching between different views or content sections.

## Installation

```bash
npm install @pm7/core
```

## Usage

### Basic Tabs

```html
<div class="pm7-tab-selector" data-pm7-tab-selector>
  <div class="pm7-tab-list">
    <button class="pm7-tab-trigger" data-state="active">Tab 1</button>
    <button class="pm7-tab-trigger">Tab 2</button>
    <button class="pm7-tab-trigger">Tab 3</button>
  </div>
  
  <div class="pm7-tab-content" data-state="active">
    Content for Tab 1
  </div>
  <div class="pm7-tab-content">
    Content for Tab 2
  </div>
  <div class="pm7-tab-content">
    Content for Tab 3
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

// Listen for tab changes
tabElement.addEventListener('pm7-tab-change', (e) => {
  console.log('Selected tab:', e.detail.tab);
  console.log('Tab index:', e.detail.index);
});
```

### Variants

```html
<!-- Default underline variant -->
<div class="pm7-tab-selector pm7-tab-selector--underline">
  ...
</div>

<!-- Solid variant -->
<div class="pm7-tab-selector pm7-tab-selector--solid">
  ...
</div>

<!-- Pills variant -->
<div class="pm7-tab-selector pm7-tab-selector--pills">
  ...
</div>
```

### Sizes

```html
<!-- Small -->
<div class="pm7-tab-selector pm7-tab-selector--sm">
  ...
</div>

<!-- Large -->
<div class="pm7-tab-selector pm7-tab-selector--lg">
  ...
</div>
```

### Full Width Tabs

```html
<div class="pm7-tab-selector pm7-tab-selector--full-width">
  <div class="pm7-tab-list">
    <button class="pm7-tab-trigger">Tab 1</button>
    <button class="pm7-tab-trigger">Tab 2</button>
    <button class="pm7-tab-trigger">Tab 3</button>
  </div>
  ...
</div>
```

### Tabs with Icons

```html
<div class="pm7-tab-selector">
  <div class="pm7-tab-list">
    <button class="pm7-tab-trigger">
      <svg class="pm7-tab-trigger-icon">...</svg>
      Dashboard
    </button>
    <button class="pm7-tab-trigger">
      <svg class="pm7-tab-trigger-icon">...</svg>
      Settings
    </button>
  </div>
  ...
</div>
```

### Tabs with Badges

```html
<div class="pm7-tab-selector">
  <div class="pm7-tab-list">
    <button class="pm7-tab-trigger">
      Messages
      <span class="pm7-tab-trigger-badge">3</span>
    </button>
    <button class="pm7-tab-trigger">
      Notifications
      <span class="pm7-tab-trigger-badge">12</span>
    </button>
  </div>
  ...
</div>
```

### Disabled Tabs

```html
<div class="pm7-tab-selector">
  <div class="pm7-tab-list">
    <button class="pm7-tab-trigger">Active Tab</button>
    <button class="pm7-tab-trigger" disabled>Disabled Tab</button>
    <button class="pm7-tab-trigger">Another Tab</button>
  </div>
  ...
</div>
```

## CSS Classes Reference

| Class | Description |
|-------|-------------|
| `pm7-tab-selector` | Container element |
| `pm7-tab-list` | Tab button container |
| `pm7-tab-trigger` | Individual tab button |
| `pm7-tab-trigger--active` | Active tab state |
| `pm7-tab-content` | Tab panel content |
| `pm7-tab-content--active` | Active panel state |
| `pm7-tab-selector--underline` | Default underline variant |
| `pm7-tab-selector--solid` | Solid background variant |
| `pm7-tab-selector--pills` | Pill-shaped variant |
| `pm7-tab-selector--sm` | Small size |
| `pm7-tab-selector--lg` | Large size |
| `pm7-tab-selector--full-width` | Full width tabs |
| `pm7-tab-trigger-icon` | Icon within tab |
| `pm7-tab-trigger-badge` | Badge/counter within tab |

## Keyboard Navigation

- **Tab**: Move focus into tab list
- **Arrow Left/Up**: Move to previous tab
- **Arrow Right/Down**: Move to next tab
- **Home**: Jump to first tab
- **End**: Jump to last tab
- **Enter/Space**: Activate focused tab

## JavaScript API

### Methods

| Method | Description |
|--------|-------------|
| `selectTabByIndex(index)` | Select tab by its index (0-based) |
| `selectTabById(id)` | Select tab by its ID attribute |
| `getActiveTab()` | Returns the active tab element |
| `getActiveIndex()` | Returns the active tab index |

### Events

| Event | Description | Detail |
|-------|-------------|--------|
| `pm7-tab-change` | Fired when active tab changes | `{ tab, panel, index }` |

## Accessibility Features

- Full keyboard navigation support
- ARIA attributes for screen readers
- Proper focus management
- Semantic HTML structure
- Disabled state support

## Best Practices

1. **Logical grouping**: Use tabs for related content that users might want to switch between
2. **Clear labels**: Use descriptive, concise tab labels
3. **Consistent content**: Each tab panel should have similar types of content
4. **Avoid too many tabs**: Limit to 5-7 tabs for better usability
5. **Remember state**: Consider preserving the active tab on page reload if appropriate

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
    </div>
    <div class="pm7-tab-content">
      <!-- Security form fields -->
    </div>
    <div class="pm7-tab-content">
      <!-- Preferences form fields -->
    </div>
  </div>
</form>
```

## React Usage

When using @pm7/react:

```jsx
import { TabSelector } from '@pm7/react';

function MyComponent() {
  const [activeTab, setActiveTab] = useState(0);
  
  const tabs = [
    { id: 'overview', label: 'Overview', content: <OverviewPanel /> },
    { id: 'details', label: 'Details', content: <DetailsPanel /> },
    { id: 'history', label: 'History', content: <HistoryPanel /> }
  ];
  
  return (
    <TabSelector
      tabs={tabs}
      activeTab={activeTab}
      onChange={setActiveTab}
      variant="solid"
      size="default"
    />
  );
}
```

## Related Components

- [Button](../button/) - Tab triggers are specialized buttons
- [Card](../card/) - Often used within tab panels
- [Menu](../menu/) - Alternative navigation pattern