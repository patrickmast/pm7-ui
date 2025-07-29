---
# MANDATORY METADATA
type: ai-agent-documentation
version: 1.0
component: Accordion
status: stable
audience: ai-coding-agents-only
human-readable: false

# COMPONENT METADATA
category: display
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
css-prefix: pm7-accordion
data-attribute: data-pm7-accordion
javascript-class: PM7.Accordion
---

# Component: Accordion

DEFINITION: Accordion = HTML div element with data-pm7-accordion attribute containing collapsible sections
PURPOSE: Show/hide content sections on demand
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
<div class="pm7-accordion" data-pm7-accordion>
  <div class="pm7-accordion-item">
    <button class="pm7-accordion-trigger">
      <span>Title</span>
      <svg class="pm7-accordion-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <polyline points="6 9 12 15 18 9"></polyline>
      </svg>
    </button>
    <div class="pm7-accordion-content">
      <div class="pm7-accordion-content-inner">
        Content
      </div>
    </div>
  </div>
</div>
```

COMPLETE:
```html
<div 
  class="pm7-accordion pm7-accordion--[bordered|spaced|flush]" 
  data-pm7-accordion
  data-allow-multiple="true|false"
  data-default-open="0|1|all">
  <div class="pm7-accordion-item" data-state="open|closed">
    <button class="pm7-accordion-trigger">
      <svg class="pm7-accordion-icon pm7-accordion-icon--start" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <polyline points="6 9 12 15 18 9"></polyline>
      </svg>
      <span>Title</span>
    </button>
    <div class="pm7-accordion-content">
      <div class="pm7-accordion-content-inner">
        Content with any HTML
      </div>
    </div>
  </div>
</div>
```

## Initialization

IF auto-init:
  CONDITION: window.PM7 loaded AND DOMContentLoaded fired
  TRIGGER: DOMContentLoaded
  ACTION: Finds all [data-pm7-accordion]
  RESULT: Automatically initialized

IF manual-init:
  ```javascript
  const element = document.querySelector('[data-pm7-accordion]')
  const instance = new PM7.Accordion(element, {
    allowMultiple: false,
    defaultOpen: 0
  })
  ```

IF dynamic-content:
  ```javascript
  // After adding new accordion to DOM
  window.PM7.init()
  // OR specifically for accordions
  window.PM7.initAccordions()
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
  - Forget to initialize after dynamic addition
  - Nest accordions within accordions

## Rules

### Rule: Container Structure
IF creating accordion
THEN use exact structure: div.pm7-accordion[data-pm7-accordion] > div.pm7-accordion-item > button.pm7-accordion-trigger + div.pm7-accordion-content
ELSE accordion will not initialize

EXAMPLE:
```html
<!-- IF creating accordion -->
<div class="pm7-accordion" data-pm7-accordion>
  <div class="pm7-accordion-item">
    <button class="pm7-accordion-trigger">
      <span>Title</span>
      <svg class="pm7-accordion-icon" width="16" height="16">...</svg>
    </button>
    <div class="pm7-accordion-content">
      <div class="pm7-accordion-content-inner">Content</div>
    </div>
  </div>
</div>
```

### Rule: Inner Content Wrapper
IF accordion content
THEN MUST include pm7-accordion-content-inner wrapper
ELSE animation and padding will break

EXAMPLE:
```html
<!-- IF accordion content -->
<div class="pm7-accordion-content">
  <div class="pm7-accordion-content-inner">
    Content with proper wrapper
  </div>
</div>

<!-- ELSE NEVER -->
<div class="pm7-accordion-content">
  Direct content without wrapper
</div>
```

### Rule: Icon Position
IF icon at start
THEN add class="pm7-accordion-icon pm7-accordion-icon--start" AND place icon before span
ELSE icon appears at end (default)

EXAMPLE:
```html
<!-- IF icon at start -->
<button class="pm7-accordion-trigger">
  <svg class="pm7-accordion-icon pm7-accordion-icon--start" width="16" height="16">...</svg>
  <span>Title</span>
</button>

<!-- ELSE icon at end (default) -->
<button class="pm7-accordion-trigger">
  <span>Title</span>
  <svg class="pm7-accordion-icon" width="16" height="16">...</svg>
</button>
```

### Rule: Multiple Open Items
IF multiple items can be open
THEN add data-allow-multiple="true" to container
ELSE only one item open at a time (default)

EXAMPLE:
```html
<!-- IF multiple open allowed -->
<div class="pm7-accordion" data-pm7-accordion data-allow-multiple="true">
  <div class="pm7-accordion-item">...</div>
  <div class="pm7-accordion-item">...</div>
</div>
```

### Rule: Default Open State
IF items should be open on load
THEN add data-default-open="0" (index) OR data-default-open="all"
ELSE all items start closed

EXAMPLE:
```html
<!-- IF first item open by default -->
<div class="pm7-accordion" data-pm7-accordion data-default-open="0">
  <div class="pm7-accordion-item">...</div>
</div>

<!-- ELSE IF all items open -->
<div class="pm7-accordion" data-pm7-accordion data-default-open="all">
  <div class="pm7-accordion-item">...</div>
</div>
```

## Patterns

### Pattern: Basic Accordion
WHEN: Need collapsible content sections
USE:
```html
<div class="pm7-accordion" data-pm7-accordion>
  <div class="pm7-accordion-item">
    <button class="pm7-accordion-trigger">
      <span>Section 1</span>
      <svg class="pm7-accordion-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <polyline points="6 9 12 15 18 9"></polyline>
      </svg>
    </button>
    <div class="pm7-accordion-content">
      <div class="pm7-accordion-content-inner">
        <p>Content for section 1</p>
      </div>
    </div>
  </div>
  <div class="pm7-accordion-item">
    <button class="pm7-accordion-trigger">
      <span>Section 2</span>
      <svg class="pm7-accordion-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <polyline points="6 9 12 15 18 9"></polyline>
      </svg>
    </button>
    <div class="pm7-accordion-content">
      <div class="pm7-accordion-content-inner">
        <p>Content for section 2</p>
      </div>
    </div>
  </div>
</div>
```

RESULT: Accordion with mutually exclusive sections

### Pattern: Bordered Accordion
WHEN: Need visual separation with borders
USE:
```html
<div class="pm7-accordion pm7-accordion--bordered" data-pm7-accordion>
  <div class="pm7-accordion-item">
    <button class="pm7-accordion-trigger">
      <span>Bordered Item</span>
      <svg class="pm7-accordion-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <polyline points="6 9 12 15 18 9"></polyline>
      </svg>
    </button>
    <div class="pm7-accordion-content">
      <div class="pm7-accordion-content-inner">
        <p>Content with borders</p>
      </div>
    </div>
  </div>
</div>
```

RESULT: Accordion items with border styling

### Pattern: FAQ Accordion
WHEN: Building FAQ section with multiple open
USE:
```html
<div class="pm7-accordion pm7-accordion--spaced" data-pm7-accordion data-allow-multiple="true">
  <div class="pm7-accordion-item">
    <button class="pm7-accordion-trigger">
      <span>What is PM7?</span>
      <svg class="pm7-accordion-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <polyline points="6 9 12 15 18 9"></polyline>
      </svg>
    </button>
    <div class="pm7-accordion-content">
      <div class="pm7-accordion-content-inner">
        <p>PM7 is a component library.</p>
      </div>
    </div>
  </div>
  <div class="pm7-accordion-item">
    <button class="pm7-accordion-trigger">
      <span>How do I install it?</span>
      <svg class="pm7-accordion-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <polyline points="6 9 12 15 18 9"></polyline>
      </svg>
    </button>
    <div class="pm7-accordion-content">
      <div class="pm7-accordion-content-inner">
        <p>Run npm install @pm7/core</p>
      </div>
    </div>
  </div>
</div>
```

RESULT: FAQ with spaced items, multiple can be open

## Anti-Patterns

### Anti-Pattern: Missing Inner Wrapper
NEVER:
```html
<div class="pm7-accordion-content">
  Direct content without wrapper
</div>
```

BECAUSE: Animation and padding require inner wrapper
INSTEAD: See Pattern: Basic Accordion

### Anti-Pattern: Wrong Structure
NEVER:
```html
<div class="pm7-accordion">
  <button>Title</button>
  <div>Content</div>
</div>
```

BECAUSE: Missing required item wrapper and classes
INSTEAD: See Pattern: Basic Accordion

### Anti-Pattern: Nested Accordions
NEVER:
```html
<div class="pm7-accordion" data-pm7-accordion>
  <div class="pm7-accordion-item">
    <div class="pm7-accordion" data-pm7-accordion>
      <!-- Nested accordion -->
    </div>
  </div>
</div>
```

BECAUSE: Event handling and state management conflicts
INSTEAD: Use separate accordions at same level

### Anti-Pattern: Custom Open/Close Animations
NEVER:
```css
/* Custom CSS animations on accordion items */
.pm7-accordion-content {
  transition: max-height 0.5s ease-in-out !important;
}

.pm7-accordion-item[data-state="open"] .pm7-accordion-content {
  max-height: 500px !important;
}
```

BECAUSE: 
- Breaks built-in JavaScript-controlled animations
- Fixed max-height can cut off content
- !important overrides cause specificity conflicts
- Custom timings conflict with JavaScript state management

INSTEAD: Use configuration options:
```javascript
const accordion = new PM7.Accordion(element, {
  animation: true,
  duration: 300  // Customize duration via options
})
```

### Anti-Pattern: Manual State Management
NEVER:
```javascript
// Manually toggling classes
accordionItem.addEventListener('click', () => {
  accordionItem.classList.toggle('open')
  accordionItem.setAttribute('data-state', 'open')
  accordionContent.style.display = 'block'
})
```

BECAUSE:
- Conflicts with PM7's internal state management
- Breaks keyboard navigation
- Events won't fire correctly
- Animation timing issues

INSTEAD: Use the JavaScript API:
```javascript
const accordion = element.PM7Accordion
accordion.toggle(0)  // Use built-in methods
```

### Anti-Pattern: Incorrect Icon Markup
NEVER:
```html
<!-- Icon outside the button -->
<div class="pm7-accordion-item">
  <svg class="pm7-accordion-icon">...</svg>
  <button class="pm7-accordion-trigger">Title</button>
</div>

<!-- Icon without proper class -->
<button class="pm7-accordion-trigger">
  <span>Title</span>
  <svg width="16" height="16">...</svg>
</button>

<!-- Multiple icons -->
<button class="pm7-accordion-trigger">
  <svg class="pm7-accordion-icon">...</svg>
  <span>Title</span>
  <svg class="pm7-accordion-icon">...</svg>
</button>
```

BECAUSE:
- Icon must be inside button for proper click handling
- Missing class breaks rotation animation
- Multiple icons cause conflicting animations

INSTEAD: Use correct icon structure:
```html
<button class="pm7-accordion-trigger">
  <span>Title</span>
  <svg class="pm7-accordion-icon" width="16" height="16">...</svg>
</button>
```

## Attributes

| Attribute | Type | Values | Default | Required | Effect |
|-----------|------|--------|---------|----------|--------|
| data-pm7-accordion | boolean | presence | - | YES | Enables accordion initialization |
| data-state | string | open\|closed | closed | NO | Sets item state |
| data-allow-multiple | string | true\|false | false | NO | Allow multiple open items |
| data-default-open | string | 0\|1\|2...\|all | - | NO | Initially open items |

## CSS Classes

| Class | Purpose | Combinable | Parent Required |
|-------|---------|------------|------------------|
| .pm7-accordion | Base accordion styles | YES | NO |
| .pm7-accordion-item | Item wrapper styles | NO | .pm7-accordion |
| .pm7-accordion-trigger | Trigger button styles | NO | .pm7-accordion-item |
| .pm7-accordion-icon | Icon styles | YES | .pm7-accordion-trigger |
| .pm7-accordion-content | Content container | NO | .pm7-accordion-item |
| .pm7-accordion-content-inner | Content padding wrapper | NO | .pm7-accordion-content |
| .pm7-accordion--bordered | Adds borders to items | YES | .pm7-accordion |
| .pm7-accordion--spaced | Adds gap between items | YES | .pm7-accordion |
| .pm7-accordion--flush | Removes outer padding | YES | .pm7-accordion |
| .pm7-accordion-icon--start | Positions icon at start | NO | .pm7-accordion-icon |

## JavaScript API

### Methods

| Method | Parameters | Type | Default | Required | Returns | Throws | Description |
|--------|------------|------|---------|----------|---------|--------|-------------|
| open() | index | number | - | YES | void | Error if invalid index | Opens accordion item at specified index |
| close() | index | number | - | YES | void | Error if invalid index | Closes accordion item at specified index |
| toggle() | index | number | - | YES | void | Error if invalid index | Toggles accordion item at specified index |
| openAll() | - | - | - | - | void | never | Opens all accordion items (requires allowMultiple) |
| closeAll() | - | - | - | - | void | never | Closes all accordion items |
| isOpen() | index | number | - | YES | boolean | Error if invalid index | Returns true if item at index is open |
| destroy() | - | - | - | - | void | never | Removes all event listeners and cleans up |

### Properties

| Property | Type | Readonly | Default | Description |
|----------|------|----------|---------|-------------|
| element | HTMLElement | YES | - | The accordion container element |
| items | NodeList | YES | - | All accordion item elements |
| options | object | YES | {} | Configuration options passed during initialization |
| allowMultiple | boolean | YES | false | Whether multiple items can be open |

### Events

| Event | Bubbles | Cancelable | Detail | When Fired |
|-------|---------|------------|--------|------------|
| pm7-accordion-open | YES | NO | {index: number, item: HTMLElement} | After an item opens |
| pm7-accordion-close | YES | NO | {index: number, item: HTMLElement} | After an item closes |
| pm7-accordion-beforeopen | YES | YES | {index: number, item: HTMLElement} | Before an item opens (preventable) |
| pm7-accordion-beforeclose | YES | YES | {index: number, item: HTMLElement} | Before an item closes (preventable) |

### Instance Access

```javascript
// Get instance from element
const element = document.querySelector('[data-pm7-accordion]')
const accordion = element.PM7Accordion

// Direct instantiation with options
const accordion = new PM7.Accordion(element, {
  allowMultiple: false,  // Only one item open at a time
  defaultOpen: 0,        // Index of initially open item
  animation: true,       // Enable/disable animations
  duration: 300         // Animation duration in ms
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

### Example: Settings Page with Accordion Sections
SCENARIO: Application settings organized in collapsible sections
```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="/node_modules/@pm7/core/dist/pm7.min.css">
  <style>
    .settings-container {
      max-width: 800px;
      margin: 0 auto;
      padding: 2rem;
    }
    .setting-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0.75rem 0;
      border-bottom: 1px solid var(--pm7-border);
    }
    .setting-row:last-child {
      border-bottom: none;
    }
  </style>
</head>
<body>
  <div class="settings-container">
    <h1>Application Settings</h1>
    
    <div class="pm7-accordion pm7-accordion--bordered" data-pm7-accordion data-default-open="0">
      <!-- General Settings -->
      <div class="pm7-accordion-item">
        <button class="pm7-accordion-trigger">
          <svg class="pm7-accordion-icon pm7-accordion-icon--start" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
          <span>General Settings</span>
        </button>
        <div class="pm7-accordion-content">
          <div class="pm7-accordion-content-inner">
            <div class="setting-row">
              <label for="language">Language</label>
              <select id="language" class="pm7-select">
                <option>English</option>
                <option>Nederlands</option>
                <option>Deutsch</option>
              </select>
            </div>
            <div class="setting-row">
              <label for="theme">Theme</label>
              <select id="theme" class="pm7-select">
                <option>Light</option>
                <option>Dark</option>
                <option>System</option>
              </select>
            </div>
            <div class="setting-row">
              <label for="timezone">Timezone</label>
              <select id="timezone" class="pm7-select">
                <option>UTC</option>
                <option>Europe/Amsterdam</option>
                <option>America/New_York</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Privacy Settings -->
      <div class="pm7-accordion-item">
        <button class="pm7-accordion-trigger">
          <svg class="pm7-accordion-icon pm7-accordion-icon--start" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
          <span>Privacy & Security</span>
        </button>
        <div class="pm7-accordion-content">
          <div class="pm7-accordion-content-inner">
            <div class="setting-row">
              <label for="analytics">Allow analytics</label>
              <input type="checkbox" id="analytics" class="pm7-checkbox">
            </div>
            <div class="setting-row">
              <label for="2fa">Two-factor authentication</label>
              <button class="pm7-button pm7-button--small">Configure</button>
            </div>
            <div class="setting-row">
              <label for="sessions">Active sessions</label>
              <button class="pm7-button pm7-button--small pm7-button--secondary">View All</button>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Notification Settings -->
      <div class="pm7-accordion-item">
        <button class="pm7-accordion-trigger">
          <svg class="pm7-accordion-icon pm7-accordion-icon--start" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
          <span>Notifications</span>
        </button>
        <div class="pm7-accordion-content">
          <div class="pm7-accordion-content-inner">
            <div class="setting-row">
              <label for="email-notifications">Email notifications</label>
              <input type="checkbox" id="email-notifications" class="pm7-checkbox" checked>
            </div>
            <div class="setting-row">
              <label for="push-notifications">Push notifications</label>
              <input type="checkbox" id="push-notifications" class="pm7-checkbox">
            </div>
            <div class="setting-row">
              <label for="notification-sound">Notification sound</label>
              <select id="notification-sound" class="pm7-select">
                <option>Default</option>
                <option>Ding</option>
                <option>None</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Advanced Settings -->
      <div class="pm7-accordion-item">
        <button class="pm7-accordion-trigger">
          <svg class="pm7-accordion-icon pm7-accordion-icon--start" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="6 9 12 15 18 9"></polyline>
          </svg>
          <span>Advanced</span>
        </button>
        <div class="pm7-accordion-content">
          <div class="pm7-accordion-content-inner">
            <div class="setting-row">
              <label>Export data</label>
              <button class="pm7-button pm7-button--small">Download</button>
            </div>
            <div class="setting-row">
              <label>Clear cache</label>
              <button class="pm7-button pm7-button--small pm7-button--destructive">Clear</button>
            </div>
            <div class="setting-row">
              <label>Developer mode</label>
              <input type="checkbox" id="dev-mode" class="pm7-checkbox">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  <script src="/node_modules/@pm7/core/dist/pm7.min.js"></script>
  <script>
    // Save settings on change
    document.querySelectorAll('select, input').forEach(input => {
      input.addEventListener('change', (e) => {
        console.log('Setting changed:', e.target.id, e.target.value || e.target.checked)
        // Save to backend/localStorage
      })
    })
  </script>
</body>
</html>
```

RESULT: Organized settings page with collapsible sections, first section open by default

### Example: FAQ Page with Search and Categories
SCENARIO: Searchable FAQ with categorized questions
```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="/node_modules/@pm7/core/dist/pm7.min.css">
  <style>
    .faq-container {
      max-width: 900px;
      margin: 0 auto;
      padding: 2rem;
    }
    .faq-search {
      margin-bottom: 2rem;
    }
    .faq-category {
      margin-bottom: 2rem;
    }
    .faq-category h2 {
      font-size: 1.25rem;
      margin-bottom: 1rem;
      color: var(--pm7-foreground);
    }
    .no-results {
      text-align: center;
      padding: 3rem;
      color: var(--pm7-muted-foreground);
    }
    .highlight {
      background-color: var(--pm7-accent);
      padding: 0 2px;
      border-radius: 2px;
    }
  </style>
</head>
<body>
  <div class="faq-container">
    <h1>Frequently Asked Questions</h1>
    
    <!-- Search Box -->
    <div class="faq-search">
      <input 
        type="text" 
        id="faq-search" 
        class="pm7-input" 
        placeholder="Search FAQ..."
        autocomplete="off"
      >
    </div>
    
    <!-- Getting Started Category -->
    <div class="faq-category" data-category="getting-started">
      <h2>Getting Started</h2>
      <div class="pm7-accordion pm7-accordion--spaced" data-pm7-accordion data-allow-multiple="true">
        <div class="pm7-accordion-item" data-searchable>
          <button class="pm7-accordion-trigger">
            <span>How do I create an account?</span>
            <svg class="pm7-accordion-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </button>
          <div class="pm7-accordion-content">
            <div class="pm7-accordion-content-inner">
              <p>To create an account:</p>
              <ol>
                <li>Click the "Sign Up" button in the top right corner</li>
                <li>Enter your email address and choose a password</li>
                <li>Verify your email by clicking the link we send you</li>
                <li>Complete your profile information</li>
              </ol>
              <p>After verification, you'll have full access to all features.</p>
            </div>
          </div>
        </div>
        
        <div class="pm7-accordion-item" data-searchable>
          <button class="pm7-accordion-trigger">
            <span>What are the system requirements?</span>
            <svg class="pm7-accordion-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </button>
          <div class="pm7-accordion-content">
            <div class="pm7-accordion-content-inner">
              <p>Minimum requirements:</p>
              <ul>
                <li>Modern web browser (Chrome 90+, Firefox 88+, Safari 14+, Edge 90+)</li>
                <li>JavaScript enabled</li>
                <li>Stable internet connection</li>
                <li>Screen resolution of 1024x768 or higher</li>
              </ul>
              <p>For the best experience, we recommend using the latest version of Chrome or Firefox.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Billing Category -->
    <div class="faq-category" data-category="billing">
      <h2>Billing & Payments</h2>
      <div class="pm7-accordion pm7-accordion--spaced" data-pm7-accordion data-allow-multiple="true">
        <div class="pm7-accordion-item" data-searchable>
          <button class="pm7-accordion-trigger">
            <span>What payment methods do you accept?</span>
            <svg class="pm7-accordion-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </button>
          <div class="pm7-accordion-content">
            <div class="pm7-accordion-content-inner">
              <p>We accept the following payment methods:</p>
              <ul>
                <li>Credit cards (Visa, MasterCard, American Express)</li>
                <li>Debit cards with Visa/MasterCard logo</li>
                <li>PayPal</li>
                <li>Bank transfer (for annual plans)</li>
                <li>iDEAL (Netherlands)</li>
                <li>SEPA Direct Debit (EU)</li>
              </ul>
              <p>All payments are processed securely through our payment partners.</p>
            </div>
          </div>
        </div>
        
        <div class="pm7-accordion-item" data-searchable>
          <button class="pm7-accordion-trigger">
            <span>Can I get a refund?</span>
            <svg class="pm7-accordion-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </button>
          <div class="pm7-accordion-content">
            <div class="pm7-accordion-content-inner">
              <p>Yes, we offer a 30-day money-back guarantee for all new subscriptions.</p>
              <p>To request a refund:</p>
              <ol>
                <li>Contact our support team within 30 days of purchase</li>
                <li>Provide your order number and reason for refund</li>
                <li>We'll process your refund within 5-7 business days</li>
              </ol>
              <p>Note: Refunds are not available for add-on services or after the 30-day period.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- No results message -->
    <div class="no-results" style="display: none;">
      <p>No questions found matching your search.</p>
    </div>
  </div>
  
  <script src="/node_modules/@pm7/core/dist/pm7.min.js"></script>
  <script>
    // Search functionality
    const searchInput = document.getElementById('faq-search')
    const categories = document.querySelectorAll('.faq-category')
    const noResults = document.querySelector('.no-results')
    
    searchInput.addEventListener('input', (e) => {
      const searchTerm = e.target.value.toLowerCase()
      let hasResults = false
      
      categories.forEach(category => {
        const items = category.querySelectorAll('[data-searchable]')
        let categoryHasResults = false
        
        items.forEach(item => {
          const text = item.textContent.toLowerCase()
          const matches = text.includes(searchTerm)
          
          // Show/hide items based on search
          item.style.display = matches || !searchTerm ? '' : 'none'
          
          if (matches || !searchTerm) {
            categoryHasResults = true
            hasResults = true
          }
          
          // Highlight search terms
          if (searchTerm && matches) {
            const trigger = item.querySelector('.pm7-accordion-trigger span')
            const originalText = trigger.textContent
            const regex = new RegExp(`(${searchTerm})`, 'gi')
            trigger.innerHTML = originalText.replace(regex, '<span class="highlight">$1</span>')
          } else {
            const trigger = item.querySelector('.pm7-accordion-trigger span')
            trigger.innerHTML = trigger.textContent
          }
        })
        
        // Show/hide entire category
        category.style.display = categoryHasResults || !searchTerm ? '' : 'none'
      })
      
      // Show no results message
      noResults.style.display = hasResults || !searchTerm ? 'none' : 'block'
    })
    
    // Track FAQ analytics
    document.addEventListener('pm7-accordion-open', (e) => {
      const question = e.detail.item.querySelector('.pm7-accordion-trigger span').textContent
      console.log('FAQ viewed:', question)
      // Send to analytics
    })
  </script>
</body>
</html>
```

RESULT: Searchable FAQ with highlighted search terms, categorized questions, and analytics tracking

## Validation Checklist

STRUCTURE:
- [ ] Has data-pm7-accordion attribute
- [ ] Has pm7-accordion class
- [ ] Each item wrapped in pm7-accordion-item
- [ ] Trigger is button element with pm7-accordion-trigger
- [ ] Text wrapped in span inside trigger
- [ ] Icon has pm7-accordion-icon class
- [ ] Content has pm7-accordion-content wrapper
- [ ] Inner content has pm7-accordion-content-inner

STYLING:
- [ ] Includes pm7.min.css
- [ ] Uses only documented classes
- [ ] No inline styles for state
- [ ] Respects dark mode

BEHAVIOR:
- [ ] Initializes without errors
- [ ] Click toggles items correctly
- [ ] Keyboard navigation works
- [ ] Events fire on open/close
- [ ] Framework re-renders handled

ACCESSIBILITY:
- [ ] Keyboard navigable
- [ ] ARIA attributes present
- [ ] Focus visible
- [ ] Screen reader compatible

## Cross-Component Dependencies

### Accordion with PM7 Buttons
When using PM7 buttons inside accordion content:
```html
<div class="pm7-accordion-content">
  <div class="pm7-accordion-content-inner">
    <p>Content with action buttons</p>
    <div class="pm7-button-group">
      <button class="pm7-button pm7-button--primary">Save Changes</button>
      <button class="pm7-button pm7-button--secondary">Cancel</button>
    </div>
  </div>
</div>
```

NOTE: Buttons inside accordions automatically inherit proper focus management

### Accordion with PM7 Forms
For forms inside accordions:
```html
<div class="pm7-accordion-content">
  <div class="pm7-accordion-content-inner">
    <form class="pm7-form">
      <div class="pm7-form-group">
        <label class="pm7-label">Setting Name</label>
        <input type="text" class="pm7-input">
      </div>
      <button type="submit" class="pm7-button pm7-button--primary">Save</button>
    </form>
  </div>
</div>
```

IMPORTANT: Form validation states are preserved during accordion open/close

### Accordion with PM7 Icons
See Icons component for additional icon options:
```html
<!-- Using PM7 icon component -->
<button class="pm7-accordion-trigger">
  <i class="pm7-icon pm7-icon--settings pm7-accordion-icon--start"></i>
  <span>Settings</span>
  <svg class="pm7-accordion-icon">...</svg>
</button>
```

## Attribute Reference

For comprehensive attribute documentation including:
- Global PM7 attributes (data-pm7-*)
- State attributes (data-state, aria-*)
- Configuration attributes
- Framework-specific attributes

See: [ATTRIBUTES.md](../../ATTRIBUTES.md)

## Related Components

- Tab Selector: For horizontal content switching
- Dialog: For modal content display
- Card: For static collapsible content sections