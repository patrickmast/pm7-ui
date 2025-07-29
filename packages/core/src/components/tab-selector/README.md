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

## Anti-Patterns

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

### Anti-Pattern: Nested Tab Selectors
NEVER:
```html
<div class="pm7-tab-selector" data-pm7-tab-selector>
  <div class="pm7-tab-list">
    <button class="pm7-tab-trigger" aria-controls="outer-1">Tab 1</button>
  </div>
  <div class="pm7-tab-content" id="outer-1">
    <!-- Nested tabs inside tab content -->
    <div class="pm7-tab-selector" data-pm7-tab-selector>
      <div class="pm7-tab-list">
        <button class="pm7-tab-trigger" aria-controls="inner-1">Nested Tab</button>
      </div>
    </div>
  </div>
</div>
```

BECAUSE:
- Event bubbling conflicts
- Keyboard navigation breaks
- Focus management issues
- Confusing user experience

INSTEAD: Use accordion inside tabs or separate tab groups:
```html
<!-- Better: Accordion inside tab -->
<div class="pm7-tab-content" id="settings">
  <div class="pm7-accordion" data-pm7-accordion>
    <!-- Sub-sections as accordion items -->
  </div>
</div>
```

### Anti-Pattern: Missing Panel IDs
NEVER:
```html
<div class="pm7-tab-selector" data-pm7-tab-selector>
  <div class="pm7-tab-list">
    <button class="pm7-tab-trigger" aria-controls="panel-1">Tab 1</button>
    <button class="pm7-tab-trigger" aria-controls="panel-2">Tab 2</button>
  </div>
  <!-- Missing id attributes on panels -->
  <div class="pm7-tab-content">Content 1</div>
  <div class="pm7-tab-content">Content 2</div>
</div>
```

BECAUSE:
- aria-controls has no target
- Panel switching fails
- Accessibility violations

INSTEAD: Always match aria-controls with panel id:
```html
<button class="pm7-tab-trigger" aria-controls="panel-1">Tab 1</button>
<div class="pm7-tab-content" id="panel-1">Content 1</div>
```

### Anti-Pattern: Custom Active State Management
NEVER:
```javascript
// Manual active state toggling
tabTriggers.forEach((trigger, index) => {
  trigger.addEventListener('click', () => {
    // Remove all active states
    tabTriggers.forEach(t => t.classList.remove('active'))
    tabPanels.forEach(p => p.classList.remove('active'))
    
    // Add active state
    trigger.classList.add('active')
    tabPanels[index].classList.add('active')
  })
})
```

BECAUSE:
- Conflicts with PM7's state management
- Breaks built-in keyboard navigation
- Events don't fire properly
- ARIA attributes not updated

INSTEAD: Use PM7's JavaScript API:
```javascript
const tabs = element.PM7TabSelector
tabs.selectTabByIndex(1)

// Or listen to built-in events
element.addEventListener('pm7-tab-change', (e) => {
  console.log('Tab changed to:', e.detail.index)
})
```

### Anti-Pattern: Incorrect Badge Placement
NEVER:
```html
<!-- Badge before text -->
<button class="pm7-tab-trigger" aria-controls="messages">
  <span class="pm7-tab-trigger-badge">5</span>
  Messages
</button>

<!-- Badge as separate element -->
<button class="pm7-tab-trigger" aria-controls="notifications">
  Notifications
</button>
<span class="pm7-tab-trigger-badge">3</span>

<!-- Multiple badges -->
<button class="pm7-tab-trigger" aria-controls="updates">
  Updates
  <span class="pm7-tab-trigger-badge">2</span>
  <span class="pm7-tab-trigger-badge">New</span>
</button>
```

BECAUSE:
- Breaks expected visual hierarchy
- Badge positioning CSS assumes specific structure
- Screen readers announce in wrong order
- Click target issues

INSTEAD: Place badge after text:
```html
<button class="pm7-tab-trigger" aria-controls="messages">
  Messages
  <span class="pm7-tab-trigger-badge">5</span>
</button>
```

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

| Method | Parameters | Type | Default | Required | Returns | Throws | Description |
|--------|------------|------|---------|----------|---------|--------|-------------|
| selectTabByIndex() | index | number | - | YES | void | Error if invalid index | Selects tab at specified index |
| selectTabById() | panelId | string | - | YES | void | Error if invalid ID | Selects tab by panel ID |
| getActiveTab() | - | - | - | - | HTMLElement | never | Returns active tab trigger element |
| getActiveIndex() | - | - | - | - | number | never | Returns index of active tab |
| enableTab() | index | number | - | YES | void | Error if invalid index | Enables a disabled tab |
| disableTab() | index | number | - | YES | void | Error if invalid index | Disables a tab |
| destroy() | - | - | - | - | void | never | Removes all event listeners and cleans up |

### Properties

| Property | Type | Readonly | Default | Description |
|----------|------|----------|---------|-------------|
| element | HTMLElement | YES | - | The tab selector container element |
| triggers | NodeList | YES | - | All tab trigger buttons |
| panels | NodeList | YES | - | All tab content panels |
| activeIndex | number | YES | 0 | Current active tab index |
| tabList | HTMLElement | YES | - | The tab list container |

### Events

| Event | Bubbles | Cancelable | Detail | When Fired |
|-------|---------|------------|--------|------------|
| pm7-tab-change | YES | NO | {tab: HTMLElement, panel: HTMLElement, index: number, previousIndex: number} | After tab change |
| pm7-tab-beforechange | YES | YES | {tab: HTMLElement, panel: HTMLElement, index: number, previousIndex: number} | Before tab change (preventable) |

### Instance Access

```javascript
// Get instance from element
const element = document.querySelector('[data-pm7-tab-selector]')
const tabs = element.PM7TabSelector

// Direct instantiation with options
const tabs = new PM7.TabSelector(element, {
  animation: true,        // Enable/disable animations
  keyboard: true,         // Enable/disable keyboard navigation
  autoActivate: true,     // Auto-activate on focus
  loop: false            // Loop keyboard navigation
})
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

## Complete Examples in Context

### Example: E-commerce Product Page with Tab Details
SCENARIO: Product details organized in tabs with dynamic content
```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="/node_modules/@pm7/core/dist/pm7.min.css">
  <style>
    .product-container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 2rem;
    }
    .product-header {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 3rem;
      margin-bottom: 3rem;
    }
    .product-details {
      margin-top: 2rem;
    }
    .review-item {
      padding: 1rem;
      border-bottom: 1px solid var(--pm7-border);
    }
    .review-item:last-child {
      border-bottom: none;
    }
    .specifications-table {
      width: 100%;
      border-collapse: collapse;
    }
    .specifications-table td {
      padding: 0.75rem;
      border-bottom: 1px solid var(--pm7-border);
    }
    .specifications-table td:first-child {
      font-weight: 600;
      width: 30%;
    }
  </style>
</head>
<body>
  <div class="product-container">
    <div class="product-header">
      <div class="product-image">
        <img src="/product.jpg" alt="Product" style="width: 100%;">
      </div>
      <div class="product-info">
        <h1>Professional Wireless Headphones</h1>
        <p class="price" style="font-size: 2rem; color: var(--pm7-primary);">$299.99</p>
        <button class="pm7-button pm7-button--primary pm7-button--large">Add to Cart</button>
      </div>
    </div>
    
    <!-- Product Details Tabs -->
    <div class="product-details">
      <div class="pm7-tab-selector pm7-tab-selector--solid" data-pm7-tab-selector>
        <div class="pm7-tab-list">
          <button class="pm7-tab-trigger" aria-controls="description" data-state="active">
            Description
          </button>
          <button class="pm7-tab-trigger" aria-controls="specifications">
            Specifications
          </button>
          <button class="pm7-tab-trigger" aria-controls="reviews">
            Reviews
            <span class="pm7-tab-trigger-badge">47</span>
          </button>
          <button class="pm7-tab-trigger" aria-controls="shipping">
            Shipping & Returns
          </button>
        </div>
        
        <!-- Description Tab -->
        <div class="pm7-tab-content" id="description" data-state="active">
          <h3>Product Description</h3>
          <p>Experience premium audio quality with our Professional Wireless Headphones. Featuring advanced noise cancellation technology and 30-hour battery life.</p>
          <ul>
            <li>Active Noise Cancellation (ANC)</li>
            <li>30-hour battery life</li>
            <li>Premium leather ear cushions</li>
            <li>Foldable design with carrying case</li>
            <li>Multi-device connectivity</li>
          </ul>
        </div>
        
        <!-- Specifications Tab -->
        <div class="pm7-tab-content" id="specifications">
          <h3>Technical Specifications</h3>
          <table class="specifications-table">
            <tr>
              <td>Driver Size</td>
              <td>40mm dynamic drivers</td>
            </tr>
            <tr>
              <td>Frequency Response</td>
              <td>20Hz - 20kHz</td>
            </tr>
            <tr>
              <td>Battery Life</td>
              <td>30 hours (ANC on), 40 hours (ANC off)</td>
            </tr>
            <tr>
              <td>Charging Time</td>
              <td>2 hours (USB-C fast charging)</td>
            </tr>
            <tr>
              <td>Bluetooth Version</td>
              <td>5.2 with multipoint connectivity</td>
            </tr>
            <tr>
              <td>Weight</td>
              <td>250g</td>
            </tr>
            <tr>
              <td>Included Accessories</td>
              <td>Carrying case, USB-C cable, 3.5mm audio cable, airplane adapter</td>
            </tr>
          </table>
        </div>
        
        <!-- Reviews Tab -->
        <div class="pm7-tab-content" id="reviews">
          <h3>Customer Reviews (47)</h3>
          <div class="review-summary" style="margin-bottom: 2rem;">
            <p style="font-size: 2rem; margin: 0;">4.5 / 5.0</p>
            <p style="color: var(--pm7-muted-foreground);">Based on 47 reviews</p>
          </div>
          
          <div class="review-list">
            <div class="review-item">
              <strong>John D.</strong> - ⭐⭐⭐⭐⭐
              <p>Excellent sound quality and comfort. The noise cancellation is top-notch!</p>
            </div>
            <div class="review-item">
              <strong>Sarah M.</strong> - ⭐⭐⭐⭐
              <p>Great headphones overall. Battery life is amazing. Wish they were a bit lighter.</p>
            </div>
            <div class="review-item">
              <strong>Mike R.</strong> - ⭐⭐⭐⭐⭐
              <p>Best headphones I've owned. Perfect for long flights and work calls.</p>
            </div>
          </div>
          
          <button class="pm7-button pm7-button--secondary" style="margin-top: 1rem;">Load More Reviews</button>
        </div>
        
        <!-- Shipping Tab -->
        <div class="pm7-tab-content" id="shipping">
          <h3>Shipping Information</h3>
          <ul>
            <li>Free standard shipping on orders over $50</li>
            <li>Express shipping available (2-3 business days)</li>
            <li>International shipping to select countries</li>
          </ul>
          
          <h3>Return Policy</h3>
          <ul>
            <li>30-day money-back guarantee</li>
            <li>Free returns within the US</li>
            <li>Products must be in original condition with all accessories</li>
            <li>Refund processed within 5-7 business days</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  
  <script src="/node_modules/@pm7/core/dist/pm7.min.js"></script>
  <script>
    // Track tab views for analytics
    document.querySelector('[data-pm7-tab-selector]').addEventListener('pm7-tab-change', (e) => {
      console.log('Product tab viewed:', e.detail.panel.id)
      // Send to analytics
      
      // Load dynamic content when needed
      if (e.detail.panel.id === 'reviews' && !e.detail.panel.dataset.loaded) {
        // Fetch and display all reviews
        e.detail.panel.dataset.loaded = 'true'
      }
    })
  </script>
</body>
</html>
```

RESULT: Product page with organized information tabs, review count badge, and analytics tracking

### Example: Dashboard with Data Views
SCENARIO: Analytics dashboard with different data visualizations
```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="/node_modules/@pm7/core/dist/pm7.min.css">
  <style>
    .dashboard-container {
      max-width: 1400px;
      margin: 0 auto;
      padding: 2rem;
    }
    .dashboard-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 2rem;
    }
    .metric-card {
      background: var(--pm7-card);
      border: 1px solid var(--pm7-border);
      border-radius: var(--pm7-radius);
      padding: 1.5rem;
      text-align: center;
    }
    .metric-value {
      font-size: 2rem;
      font-weight: 700;
      color: var(--pm7-primary);
    }
    .metric-label {
      color: var(--pm7-muted-foreground);
      margin-top: 0.5rem;
    }
    .chart-container {
      background: var(--pm7-card);
      border: 1px solid var(--pm7-border);
      border-radius: var(--pm7-radius);
      padding: 2rem;
      min-height: 400px;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--pm7-muted-foreground);
    }
    .data-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 1rem;
      margin-bottom: 2rem;
    }
  </style>
</head>
<body>
  <div class="dashboard-container">
    <div class="dashboard-header">
      <h1>Analytics Dashboard</h1>
      <div class="pm7-button-group">
        <button class="pm7-button pm7-button--secondary pm7-button--small">Export</button>
        <button class="pm7-button pm7-button--primary pm7-button--small">Refresh</button>
      </div>
    </div>
    
    <!-- Time Period Tabs -->
    <div class="pm7-tab-selector pm7-tab-selector--pills pm7-tab-selector--full-width" data-pm7-tab-selector id="analytics-tabs">
      <div class="pm7-tab-list">
        <button class="pm7-tab-trigger" aria-controls="today" data-state="active">
          <svg class="pm7-tab-trigger-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="16" y1="2" x2="16" y2="6"></line>
            <line x1="8" y1="2" x2="8" y2="6"></line>
            <line x1="3" y1="10" x2="21" y2="10"></line>
          </svg>
          Today
        </button>
        <button class="pm7-tab-trigger" aria-controls="week">
          <svg class="pm7-tab-trigger-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="16" y1="2" x2="16" y2="6"></line>
            <line x1="8" y1="2" x2="8" y2="6"></line>
            <line x1="3" y1="10" x2="21" y2="10"></line>
          </svg>
          This Week
        </button>
        <button class="pm7-tab-trigger" aria-controls="month">
          <svg class="pm7-tab-trigger-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="16" y1="2" x2="16" y2="6"></line>
            <line x1="8" y1="2" x2="8" y2="6"></line>
            <line x1="3" y1="10" x2="21" y2="10"></line>
          </svg>
          This Month
        </button>
        <button class="pm7-tab-trigger" aria-controls="year">
          <svg class="pm7-tab-trigger-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
            <line x1="16" y1="2" x2="16" y2="6"></line>
            <line x1="8" y1="2" x2="8" y2="6"></line>
            <line x1="3" y1="10" x2="21" y2="10"></line>
          </svg>
          This Year
        </button>
      </div>
      
      <!-- Today's Data -->
      <div class="pm7-tab-content" id="today" data-state="active">
        <div class="data-grid">
          <div class="metric-card">
            <div class="metric-value">1,234</div>
            <div class="metric-label">Visitors Today</div>
          </div>
          <div class="metric-card">
            <div class="metric-value">$5,678</div>
            <div class="metric-label">Revenue Today</div>
          </div>
          <div class="metric-card">
            <div class="metric-value">89</div>
            <div class="metric-label">New Customers</div>
          </div>
          <div class="metric-card">
            <div class="metric-value">4.2%</div>
            <div class="metric-label">Conversion Rate</div>
          </div>
        </div>
        <div class="chart-container">
          <p>Hourly Traffic Chart (Today)</p>
        </div>
      </div>
      
      <!-- Week's Data -->
      <div class="pm7-tab-content" id="week">
        <div class="data-grid">
          <div class="metric-card">
            <div class="metric-value">8,456</div>
            <div class="metric-label">Visitors This Week</div>
          </div>
          <div class="metric-card">
            <div class="metric-value">$42,890</div>
            <div class="metric-label">Revenue This Week</div>
          </div>
          <div class="metric-card">
            <div class="metric-value">623</div>
            <div class="metric-label">New Customers</div>
          </div>
          <div class="metric-card">
            <div class="metric-value">3.8%</div>
            <div class="metric-label">Avg Conversion Rate</div>
          </div>
        </div>
        <div class="chart-container">
          <p>Daily Traffic Chart (This Week)</p>
        </div>
      </div>
      
      <!-- Month's Data -->
      <div class="pm7-tab-content" id="month">
        <div class="data-grid">
          <div class="metric-card">
            <div class="metric-value">34,567</div>
            <div class="metric-label">Visitors This Month</div>
          </div>
          <div class="metric-card">
            <div class="metric-value">$198,234</div>
            <div class="metric-label">Revenue This Month</div>
          </div>
          <div class="metric-card">
            <div class="metric-value">2,456</div>
            <div class="metric-label">New Customers</div>
          </div>
          <div class="metric-card">
            <div class="metric-value">4.1%</div>
            <div class="metric-label">Avg Conversion Rate</div>
          </div>
        </div>
        <div class="chart-container">
          <p>Weekly Traffic Chart (This Month)</p>
        </div>
      </div>
      
      <!-- Year's Data -->
      <div class="pm7-tab-content" id="year">
        <div class="data-grid">
          <div class="metric-card">
            <div class="metric-value">412,890</div>
            <div class="metric-label">Visitors This Year</div>
          </div>
          <div class="metric-card">
            <div class="metric-value">$2.4M</div>
            <div class="metric-label">Revenue This Year</div>
          </div>
          <div class="metric-card">
            <div class="metric-value">28,456</div>
            <div class="metric-label">New Customers</div>
          </div>
          <div class="metric-card">
            <div class="metric-value">3.9%</div>
            <div class="metric-label">Avg Conversion Rate</div>
          </div>
        </div>
        <div class="chart-container">
          <p>Monthly Traffic Chart (This Year)</p>
        </div>
      </div>
    </div>
  </div>
  
  <script src="/node_modules/@pm7/core/dist/pm7.min.js"></script>
  <script>
    // Lazy load chart data when tab changes
    const analyticsTabsEl = document.getElementById('analytics-tabs')
    const loadedTabs = new Set(['today']) // Today is loaded by default
    
    analyticsTabsEl.addEventListener('pm7-tab-change', (e) => {
      const tabId = e.detail.panel.id
      
      if (!loadedTabs.has(tabId)) {
        // Simulate loading chart data
        const chartContainer = e.detail.panel.querySelector('.chart-container')
        chartContainer.innerHTML = '<p>Loading chart data...</p>'
        
        setTimeout(() => {
          chartContainer.innerHTML = `<p>${tabId.charAt(0).toUpperCase() + tabId.slice(1)} Chart Loaded</p>`
          loadedTabs.add(tabId)
        }, 500)
      }
      
      // Track analytics view
      console.log('Dashboard view:', tabId)
    })
    
    // Auto-refresh current tab data
    setInterval(() => {
      const tabs = analyticsTabsEl.PM7TabSelector
      const activePanel = tabs.panels[tabs.activeIndex]
      console.log('Refreshing data for:', activePanel.id)
      // Refresh data for active tab
    }, 30000) // Every 30 seconds
  </script>
</body>
</html>
```

RESULT: Analytics dashboard with time-based data views, lazy loading, and auto-refresh functionality

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

## Cross-Component Dependencies

### TabSelector with PM7 Cards
When using cards inside tab panels:
```html
<div class="pm7-tab-content" id="overview">
  <div class="pm7-card">
    <div class="pm7-card-header">
      <h3 class="pm7-card-title">Overview Stats</h3>
    </div>
    <div class="pm7-card-content">
      <!-- Card content -->
    </div>
  </div>
</div>
```

NOTE: Cards inside tabs maintain their own scroll context

### TabSelector with PM7 Forms
For forms spanning multiple tabs:
```html
<form class="pm7-form" id="multi-step-form">
  <div class="pm7-tab-selector" data-pm7-tab-selector>
    <div class="pm7-tab-list">
      <button type="button" class="pm7-tab-trigger" aria-controls="step-1">Step 1</button>
      <button type="button" class="pm7-tab-trigger" aria-controls="step-2">Step 2</button>
    </div>
    <div class="pm7-tab-content" id="step-1">
      <!-- Form fields for step 1 -->
    </div>
    <div class="pm7-tab-content" id="step-2">
      <!-- Form fields for step 2 -->
    </div>
  </div>
</form>
```

IMPORTANT: Use type="button" on tab triggers inside forms to prevent submission

### TabSelector with PM7 Tables
For data tables in tabs:
```html
<div class="pm7-tab-content" id="data-view">
  <div class="pm7-table-container">
    <table class="pm7-table">
      <!-- Table content -->
    </table>
  </div>
</div>
```

NOTE: Table containers handle overflow scrolling independently

### TabSelector with PM7 Dialogs
When triggering dialogs from tabs:
```javascript
// Listen for tab changes to show related dialogs
element.addEventListener('pm7-tab-change', (e) => {
  if (e.detail.panel.id === 'settings' && showWelcome) {
    const dialog = document.querySelector('[data-pm7-dialog="welcome"]')
    dialog.PM7Dialog.open()
  }
})
```

## Attribute Reference

For comprehensive attribute documentation including:
- Global PM7 attributes (data-pm7-*)
- State attributes (data-state, aria-*)
- Configuration attributes
- Framework-specific attributes

See: [ATTRIBUTES.md](../../ATTRIBUTES.md)

## Related Components

- Button: Tab triggers are specialized buttons
- Card: Often used within tab panels
- Accordion: Alternative for vertical content switching
- Menu: For dropdown navigation alternatives