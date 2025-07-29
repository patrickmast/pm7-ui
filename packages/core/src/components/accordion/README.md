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

| Method | Parameters | Returns | Throws | Usage |
|--------|------------|---------|--------|--------|
| open() | index: number | void | Error if invalid index | accordion.open(0) |
| close() | index: number | void | Error if invalid index | accordion.close(0) |
| toggle() | index: number | void | Error if invalid index | accordion.toggle(0) |
| openAll() | none | void | never | accordion.openAll() |
| closeAll() | none | void | never | accordion.closeAll() |
| isOpen() | index: number | boolean | Error if invalid index | if (accordion.isOpen(0)) |
| destroy() | none | void | never | accordion.destroy() |

### Properties

| Property | Type | Readonly | Default | Usage |
|----------|------|----------|---------|--------|
| element | HTMLElement | YES | - | accordion.element |
| items | NodeList | YES | - | accordion.items |
| options | object | YES | {} | accordion.options |

### Events

| Event | Bubbles | Cancelable | Detail | Usage |
|-------|---------|------------|--------|--------|
| pm7-accordion-open | YES | NO | {index: number, item: HTMLElement} | element.addEventListener('pm7-accordion-open', handler) |
| pm7-accordion-close | YES | NO | {index: number, item: HTMLElement} | element.addEventListener('pm7-accordion-close', handler) |

### Instance Access

```javascript
// Get instance from element
const element = document.querySelector('[data-pm7-accordion]')
const accordion = element.PM7Accordion

// Direct instantiation
const accordion = new PM7.Accordion(element, options)
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

### Example: Basic FAQ
SCENARIO: FAQ section with single open item
```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="/node_modules/@pm7/core/dist/pm7.min.css">
</head>
<body>
  <div class="pm7-accordion" data-pm7-accordion>
    <div class="pm7-accordion-item">
      <button class="pm7-accordion-trigger">
        <span>What is PM7?</span>
        <svg class="pm7-accordion-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </button>
      <div class="pm7-accordion-content">
        <div class="pm7-accordion-content-inner">
          <p>PM7 is a modern component library for web applications.</p>
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
          <p>Run: npm install @pm7/core</p>
        </div>
      </div>
    </div>
  </div>
  
  <script src="/node_modules/@pm7/core/dist/pm7.min.js"></script>
</body>
</html>
```

RESULT: FAQ with click-to-expand sections, only one open at a time

### Example: React Accordion Component
SCENARIO: Reusable accordion for React apps
```jsx
import { useEffect } from 'react'
import '@pm7/core/dist/pm7.min.css'

export function AccordionFAQ({ items }) {
  useEffect(() => {
    import('@pm7/core').then(() => {
      window.PM7?.initFramework()
    })
  }, [])
  
  return (
    <div className="pm7-accordion pm7-accordion--spaced" data-pm7-accordion data-allow-multiple="true">
      {items.map((item, index) => (
        <div key={index} className="pm7-accordion-item">
          <button className="pm7-accordion-trigger">
            <span>{item.question}</span>
            <svg className="pm7-accordion-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </button>
          <div className="pm7-accordion-content">
            <div className="pm7-accordion-content-inner">
              <p>{item.answer}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
```

RESULT: Dynamic accordion with multiple items allowed open

### Example: Programmatic Control
SCENARIO: Control accordion via JavaScript
```javascript
// Add accordion to page
document.getElementById('content').innerHTML = `
  <div class="pm7-accordion" data-pm7-accordion id="my-accordion">
    <div class="pm7-accordion-item">
      <button class="pm7-accordion-trigger">
        <span>Step 1: Install</span>
        <svg class="pm7-accordion-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </button>
      <div class="pm7-accordion-content">
        <div class="pm7-accordion-content-inner">
          <p>Installation instructions here</p>
        </div>
      </div>
    </div>
    <div class="pm7-accordion-item">
      <button class="pm7-accordion-trigger">
        <span>Step 2: Configure</span>
        <svg class="pm7-accordion-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="6 9 12 15 18 9"></polyline>
        </svg>
      </button>
      <div class="pm7-accordion-content">
        <div class="pm7-accordion-content-inner">
          <p>Configuration details here</p>
        </div>
      </div>
    </div>
  </div>
`

// Initialize and get instance
window.PM7.init()
const accordion = document.getElementById('my-accordion').PM7Accordion

// Programmatic control
accordion.open(0)  // Open first item
setTimeout(() => {
  accordion.close(0)  // Close first item
  accordion.open(1)   // Open second item
}, 2000)

// Listen for events
document.getElementById('my-accordion').addEventListener('pm7-accordion-open', (e) => {
  console.log('Opened item:', e.detail.index)
})
```

RESULT: Accordion with programmatic step-by-step progression

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

## Related Components

- Tab Selector: For horizontal content switching
- Dialog: For modal content display