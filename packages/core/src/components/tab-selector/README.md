---
# MANDATORY METADATA
type: ai-agent-documentation
version: 1.0
component: TabSelector
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
css-prefix: pm7-tab-selector
data-attribute: data-pm7-tab-selector
javascript-class: PM7.TabSelector
---

# Component: TabSelector

DEFINITION: TabSelector = HTML div element with data-pm7-tab-selector attribute containing tab triggers and content panels
PURPOSE: Switch between content panels with tabs
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
<div class="pm7-tab-selector" data-pm7-tab-selector>
  <div class="pm7-tab-list">
    <button class="pm7-tab-trigger" aria-controls="panel-1" data-state="active">Tab 1</button>
    <button class="pm7-tab-trigger" aria-controls="panel-2">Tab 2</button>
  </div>
  <div class="pm7-tab-content" id="panel-1" data-state="active">Content 1</div>
  <div class="pm7-tab-content" id="panel-2">Content 2</div>
</div>
```

COMPLETE:
```html
<div 
  class="pm7-tab-selector pm7-tab-selector--[solid|pills] pm7-tab-selector--[sm|lg] pm7-tab-selector--full-width" 
  data-pm7-tab-selector>
  <div class="pm7-tab-list">
    <button 
      class="pm7-tab-trigger" 
      aria-controls="panel-id" 
      data-state="active"
      disabled>
      <svg class="pm7-tab-trigger-icon" width="16" height="16">...</svg>
      Tab Text
      <span class="pm7-tab-trigger-badge">3</span>
    </button>
  </div>
  <div class="pm7-tab-content" id="panel-id" data-state="active">
    Content with any HTML
  </div>
</div>
```

## Initialization

IF auto-init:
  CONDITION: window.PM7 loaded AND DOMContentLoaded fired
  TRIGGER: DOMContentLoaded
  ACTION: Finds all [data-pm7-tab-selector]
  RESULT: Automatically initialized

IF manual-init:
  ```javascript
  const element = document.querySelector('[data-pm7-tab-selector]')
  const instance = new PM7.TabSelector(element)
  ```

IF dynamic-content:
  ```javascript
  // After adding new tab selector to DOM
  window.PM7.init()
  // OR specifically for tab selectors
  window.PM7.initTabSelectors()
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
  - Add onClick handlers to triggers
  - Manually control display styles

## Rules

### Rule: Container Structure
IF creating tab selector
THEN use exact structure: div[data-pm7-tab-selector] > div.pm7-tab-list > button.pm7-tab-trigger
ELSE tab selector will not initialize

EXAMPLE:
```html
<!-- IF creating tab selector -->
<div class="pm7-tab-selector" data-pm7-tab-selector>
  <div class="pm7-tab-list">
    <button class="pm7-tab-trigger" aria-controls="panel-1">Tab</button>
  </div>
  <div class="pm7-tab-content" id="panel-1">Content</div>
</div>
```

### Rule: Trigger-Panel Linking
IF tab trigger
THEN MUST have aria-controls="panel-id" matching panel id="panel-id"
ELSE panel switching will fail

EXAMPLE:
```html
<!-- IF tab trigger -->
<button class="pm7-tab-trigger" aria-controls="my-panel">Tab</button>
<div class="pm7-tab-content" id="my-panel">Content</div>

<!-- ELSE NEVER -->
<button class="pm7-tab-trigger">Tab</button>
<div class="pm7-tab-content">Content</div>
```

### Rule: Active State
IF default active tab needed
THEN add data-state="active" to BOTH trigger AND panel
ELSE first tab activated by default

EXAMPLE:
```html
<!-- IF second tab should be active -->
<button class="pm7-tab-trigger" aria-controls="panel-1">Tab 1</button>
<button class="pm7-tab-trigger" aria-controls="panel-2" data-state="active">Tab 2</button>
<div class="pm7-tab-content" id="panel-1">Content 1</div>
<div class="pm7-tab-content" id="panel-2" data-state="active">Content 2</div>
```

### Rule: Icon Usage
IF icon in tab
THEN add class="pm7-tab-trigger-icon" to svg
ELSE icon styling incorrect

EXAMPLE:
```html
<!-- IF icon in tab -->
<button class="pm7-tab-trigger" aria-controls="panel-1">
  <svg class="pm7-tab-trigger-icon" width="16" height="16">...</svg>
  Tab Text
</button>
```

### Rule: Badge Usage
IF badge in tab
THEN use span.pm7-tab-trigger-badge after text
ELSE badge styling incorrect

EXAMPLE:
```html
<!-- IF badge needed -->
<button class="pm7-tab-trigger" aria-controls="panel-1">
  Tab Text
  <span class="pm7-tab-trigger-badge">3</span>
</button>
```

## Patterns

### Pattern: Basic Tabs
WHEN: Need simple tab switching
USE:
```html
<div class="pm7-tab-selector" data-pm7-tab-selector>
  <div class="pm7-tab-list">
    <button class="pm7-tab-trigger" aria-controls="tab-1" data-state="active">General</button>
    <button class="pm7-tab-trigger" aria-controls="tab-2">Advanced</button>
    <button class="pm7-tab-trigger" aria-controls="tab-3">Security</button>
  </div>
  <div class="pm7-tab-content" id="tab-1" data-state="active">
    <p>General settings content</p>
  </div>
  <div class="pm7-tab-content" id="tab-2">
    <p>Advanced settings content</p>
  </div>
  <div class="pm7-tab-content" id="tab-3">
    <p>Security settings content</p>
  </div>
</div>
```

RESULT: Tab interface with three switchable panels

### Pattern: Solid Variant
WHEN: Need stronger visual separation
USE:
```html
<div class="pm7-tab-selector pm7-tab-selector--solid" data-pm7-tab-selector>
  <div class="pm7-tab-list">
    <button class="pm7-tab-trigger" aria-controls="solid-1" data-state="active">Dashboard</button>
    <button class="pm7-tab-trigger" aria-controls="solid-2">Analytics</button>
    <button class="pm7-tab-trigger" aria-controls="solid-3">Reports</button>
  </div>
  <div class="pm7-tab-content" id="solid-1" data-state="active">
    <p>Dashboard content</p>
  </div>
  <div class="pm7-tab-content" id="solid-2">
    <p>Analytics content</p>
  </div>
  <div class="pm7-tab-content" id="solid-3">
    <p>Reports content</p>
  </div>
</div>
```

RESULT: Tabs with solid background styling

### Pattern: Pills Variant
WHEN: Need rounded pill-style tabs
USE:
```html
<div class="pm7-tab-selector pm7-tab-selector--pills" data-pm7-tab-selector>
  <div class="pm7-tab-list">
    <button class="pm7-tab-trigger" aria-controls="pills-1" data-state="active">Active</button>
    <button class="pm7-tab-trigger" aria-controls="pills-2">Pending</button>
    <button class="pm7-tab-trigger" aria-controls="pills-3">Completed</button>
  </div>
  <div class="pm7-tab-content" id="pills-1" data-state="active">
    <p>Active items</p>
  </div>
  <div class="pm7-tab-content" id="pills-2">
    <p>Pending items</p>
  </div>
  <div class="pm7-tab-content" id="pills-3">
    <p>Completed items</p>
  </div>
</div>
```

RESULT: Pill-shaped tab buttons

### Pattern: Tabs with Icons
WHEN: Need visual icons in tabs
USE:
```html
<div class="pm7-tab-selector" data-pm7-tab-selector>
  <div class="pm7-tab-list">
    <button class="pm7-tab-trigger" aria-controls="icon-1" data-state="active">
      <svg class="pm7-tab-trigger-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
      </svg>
      Home
    </button>
    <button class="pm7-tab-trigger" aria-controls="icon-2">
      <svg class="pm7-tab-trigger-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <circle cx="12" cy="12" r="3"></circle>
        <path d="M12 1v6m0 6v6m11-12h-6m-6 0H1"></path>
      </svg>
      Settings
    </button>
  </div>
  <div class="pm7-tab-content" id="icon-1" data-state="active">
    <p>Home content</p>
  </div>
  <div class="pm7-tab-content" id="icon-2">
    <p>Settings content</p>
  </div>
</div>
```

RESULT: Tabs with left-aligned icons

### Pattern: Tabs with Badges
WHEN: Need to show counts/notifications
USE:
```html
<div class="pm7-tab-selector" data-pm7-tab-selector>
  <div class="pm7-tab-list">
    <button class="pm7-tab-trigger" aria-controls="badge-1" data-state="active">
      Messages
      <span class="pm7-tab-trigger-badge">3</span>
    </button>
    <button class="pm7-tab-trigger" aria-controls="badge-2">
      Notifications
      <span class="pm7-tab-trigger-badge">12</span>
    </button>
    <button class="pm7-tab-trigger" aria-controls="badge-3">
      Updates
    </button>
  </div>
  <div class="pm7-tab-content" id="badge-1" data-state="active">
    <p>3 new messages</p>
  </div>
  <div class="pm7-tab-content" id="badge-2">
    <p>12 notifications</p>
  </div>
  <div class="pm7-tab-content" id="badge-3">
    <p>No new updates</p>
  </div>
</div>
```

RESULT: Tabs with numeric badges

### Anti-Pattern: Missing aria-controls
NEVER:
```html
<button class="pm7-tab-trigger">Tab</button>
```

BECAUSE: Panel switching requires aria-controls
INSTEAD: See Pattern: Basic Tabs

### Anti-Pattern: Manual Display Control
NEVER:
```html
<div class="pm7-tab-content" style="display: none;">Content</div>
```

BECAUSE: PM7 manages visibility automatically
INSTEAD: Use data-state attribute

### Anti-Pattern: onClick Handlers
NEVER:
```html
<button class="pm7-tab-trigger" onClick="switchTab(1)">Tab</button>
```

BECAUSE: PM7 handles all interactions
INSTEAD: Use aria-controls linking

## Attributes

| Attribute | Type | Values | Default | Required | Effect |
|-----------|------|--------|---------|----------|--------|
| data-pm7-tab-selector | boolean | presence | - | YES | Enables tab selector initialization |
| data-state | string | active | - | NO | Marks active tab/panel |
| aria-controls | string | panel ID | - | YES | Links trigger to panel |
| id | string | unique ID | - | YES | Panel identifier |
| disabled | boolean | presence | - | NO | Disables tab interaction |

## CSS Classes

| Class | Purpose | Combinable | Parent Required |
|-------|---------|------------|------------------|
| .pm7-tab-selector | Base container styles | YES | NO |
| .pm7-tab-list | Tab button container | NO | .pm7-tab-selector |
| .pm7-tab-trigger | Tab button styles | YES | .pm7-tab-list |
| .pm7-tab-content | Panel container styles | NO | .pm7-tab-selector |
| .pm7-tab-selector--solid | Solid background variant | YES | .pm7-tab-selector |
| .pm7-tab-selector--pills | Pill-shaped variant | YES | .pm7-tab-selector |
| .pm7-tab-selector--sm | Small size | YES | .pm7-tab-selector |
| .pm7-tab-selector--lg | Large size | YES | .pm7-tab-selector |
| .pm7-tab-selector--full-width | Full width tabs | YES | .pm7-tab-selector |
| .pm7-tab-trigger-icon | Icon within tab | NO | .pm7-tab-trigger |
| .pm7-tab-trigger-badge | Badge within tab | NO | .pm7-tab-trigger |

## JavaScript API

### Methods

| Method | Parameters | Returns | Throws | Usage |
|--------|------------|---------|--------|--------|
| selectTabByIndex() | index: number | void | Error if invalid index | tabs.selectTabByIndex(1) |
| selectTabById() | panelId: string | void | Error if invalid ID | tabs.selectTabById('panel-2') |
| getActiveTab() | none | HTMLElement | never | const tab = tabs.getActiveTab() |
| getActiveIndex() | none | number | never | const index = tabs.getActiveIndex() |
| destroy() | none | void | never | tabs.destroy() |

### Properties

| Property | Type | Readonly | Default | Usage |
|----------|------|----------|---------|--------|
| element | HTMLElement | YES | - | tabs.element |
| triggers | NodeList | YES | - | tabs.triggers |
| panels | NodeList | YES | - | tabs.panels |
| activeIndex | number | YES | 0 | tabs.activeIndex |

### Events

| Event | Bubbles | Cancelable | Detail | Usage |
|-------|---------|------------|--------|--------|
| pm7-tab-change | YES | NO | {tab: HTMLElement, panel: HTMLElement, index: number} | element.addEventListener('pm7-tab-change', handler) |

### Instance Access

```javascript
// Get instance from element
const element = document.querySelector('[data-pm7-tab-selector]')
const tabs = element.PM7TabSelector

// Direct instantiation
const tabs = new PM7.TabSelector(element)
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

### Svelte
```svelte
IF Svelte:
  onMount(() => { 
    window.PM7?.initFramework()
    return () => { /* auto cleanup */ }
  })
```

## Complete Examples

### Example: Settings Interface
SCENARIO: Multi-section settings page
```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="/node_modules/@pm7/core/dist/pm7.min.css">
</head>
<body>
  <div class="pm7-tab-selector pm7-tab-selector--solid" data-pm7-tab-selector>
    <div class="pm7-tab-list">
      <button class="pm7-tab-trigger" aria-controls="general" data-state="active">General</button>
      <button class="pm7-tab-trigger" aria-controls="privacy">Privacy</button>
      <button class="pm7-tab-trigger" aria-controls="notifications">
        Notifications
        <span class="pm7-tab-trigger-badge">2</span>
      </button>
      <button class="pm7-tab-trigger" aria-controls="advanced">Advanced</button>
    </div>
    <div class="pm7-tab-content" id="general" data-state="active">
      <h3>General Settings</h3>
      <p>Configure your basic preferences</p>
    </div>
    <div class="pm7-tab-content" id="privacy">
      <h3>Privacy Settings</h3>
      <p>Manage your privacy options</p>
    </div>
    <div class="pm7-tab-content" id="notifications">
      <h3>Notification Settings</h3>
      <p>2 new notification types available</p>
    </div>
    <div class="pm7-tab-content" id="advanced">
      <h3>Advanced Settings</h3>
      <p>Configure advanced options</p>
    </div>
  </div>
  
  <script src="/node_modules/@pm7/core/dist/pm7.min.js"></script>
</body>
</html>
```

RESULT: Settings interface with tabbed sections and notification badge

### Example: React Tab Component
SCENARIO: Reusable tab component for React
```jsx
import { useEffect } from 'react'
import '@pm7/core/dist/pm7.min.css'

export function TabPanel({ tabs, defaultActive = 0 }) {
  useEffect(() => {
    import('@pm7/core').then(() => {
      window.PM7?.initFramework()
    })
  }, [])
  
  return (
    <div className="pm7-tab-selector" data-pm7-tab-selector>
      <div className="pm7-tab-list">
        {tabs.map((tab, index) => (
          <button 
            key={tab.id}
            className="pm7-tab-trigger" 
            aria-controls={tab.id}
            data-state={index === defaultActive ? 'active' : undefined}>
            {tab.icon && (
              <svg className="pm7-tab-trigger-icon" width="16" height="16">
                {tab.icon}
              </svg>
            )}
            {tab.label}
            {tab.badge && (
              <span className="pm7-tab-trigger-badge">{tab.badge}</span>
            )}
          </button>
        ))}
      </div>
      {tabs.map((tab, index) => (
        <div 
          key={tab.id}
          className="pm7-tab-content" 
          id={tab.id}
          data-state={index === defaultActive ? 'active' : undefined}>
          {tab.content}
        </div>
      ))}
    </div>
  )
}
```

RESULT: Flexible React component supporting icons and badges

### Example: Programmatic Tab Control
SCENARIO: Control tabs via JavaScript
```javascript
// Add tab selector to page
document.getElementById('app').innerHTML = `
  <div class="pm7-tab-selector pm7-tab-selector--pills" data-pm7-tab-selector id="status-tabs">
    <div class="pm7-tab-list">
      <button class="pm7-tab-trigger" aria-controls="pending" data-state="active">
        Pending
        <span class="pm7-tab-trigger-badge">5</span>
      </button>
      <button class="pm7-tab-trigger" aria-controls="processing">
        Processing
        <span class="pm7-tab-trigger-badge">2</span>
      </button>
      <button class="pm7-tab-trigger" aria-controls="completed">
        Completed
      </button>
    </div>
    <div class="pm7-tab-content" id="pending" data-state="active">
      <p>5 items pending</p>
    </div>
    <div class="pm7-tab-content" id="processing">
      <p>2 items processing</p>
    </div>
    <div class="pm7-tab-content" id="completed">
      <p>All completed items</p>
    </div>
  </div>
`

// Initialize and control
window.PM7.init()
const tabs = document.getElementById('status-tabs').PM7TabSelector

// Listen for changes
document.getElementById('status-tabs').addEventListener('pm7-tab-change', (e) => {
  console.log('Switched to:', e.detail.panel.id)
  
  // Update badges based on active tab
  if (e.detail.panel.id === 'pending') {
    // Check for new pending items
  }
})

// Programmatically switch tabs
setTimeout(() => {
  tabs.selectTabById('processing') // Switch to processing tab
}, 3000)
```

RESULT: Status tabs with programmatic control and event handling

## Validation Checklist

STRUCTURE:
- [ ] Has data-pm7-tab-selector attribute
- [ ] Has pm7-tab-selector class
- [ ] Contains pm7-tab-list with triggers
- [ ] Each trigger has aria-controls
- [ ] Each panel has matching id
- [ ] Active tab/panel have data-state="active"

STYLING:
- [ ] Includes pm7.min.css
- [ ] Uses only documented classes
- [ ] No inline display styles
- [ ] Respects dark mode

BEHAVIOR:
- [ ] Initializes without errors
- [ ] Tab switching works
- [ ] Keyboard navigation works
- [ ] Events fire correctly
- [ ] Framework re-renders handled

ACCESSIBILITY:
- [ ] ARIA attributes present
- [ ] Keyboard navigable
- [ ] Focus indicators visible
- [ ] Screen reader compatible

## Related Components

- Button: Tab triggers are specialized buttons
- Card: Often used within tab panels
- Accordion: Alternative for vertical content switching