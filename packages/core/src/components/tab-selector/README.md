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

## React Usage

**Note**: The React component for Tab Selector is currently in development.

When using @pm7/react (coming soon):

```jsx
import { TabSelector } from '@pm7/react';

function MyComponent() {
  const [activeTab, setActiveTab] = useState(0);
  
  const tabs = [
    { 
      id: 'overview', 
      label: 'Overview', 
      icon: <OverviewIcon />,
      content: <OverviewPanel /> 
    },
    { 
      id: 'details', 
      label: 'Details', 
      content: <DetailsPanel /> 
    },
    { 
      id: 'history', 
      label: 'History',
      badge: 5,
      content: <HistoryPanel /> 
    }
  ];
  
  return (
    <TabSelector
      tabs={tabs}
      activeTab={activeTab}
      onChange={setActiveTab}
      variant="solid"
      size="default"
      fullWidth={false}
    />
  );
}
```

## Related Components

- [Button](../button/) - Tab triggers are specialized buttons
- [Card](../card/) - Often used within tab panels
- [Menu](../menu/) - Alternative navigation pattern