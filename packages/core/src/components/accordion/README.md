# Accordion

Accordions are vertically stacked expandable items that allow users to toggle the visibility of content sections. They reduce clutter by showing only essential information initially and revealing details on demand.

## Installation

```bash
npm install @pm7/core
```

### CSS Import (Required!)

```javascript
// For React projects
import '@pm7/core/dist/pm7.css';

// For vanilla HTML
<link rel="stylesheet" href="node_modules/@pm7/core/dist/pm7.css">
```

⚠️ **Important**: The CSS file is located at `@pm7/core/dist/pm7.css`, NOT `@pm7/core/dist/index.css`.

### React Usage

If you're using the React components:

```bash
npm install @pm7/react @pm7/core
```

```javascript
import { Accordion, AccordionItem } from '@pm7/react';
import '@pm7/core/dist/pm7.css'; // Don't forget this!
```

## Usage

### Basic Accordion

```html
<div class="pm7-accordion" data-pm7-accordion>
  <div class="pm7-accordion-item">
    <button class="pm7-accordion-trigger">
      <span>Section 1</span>
      <svg class="pm7-accordion-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 536 528" fill="currentColor">
        <path d="M63.2 43.9q-9.15 3.15-15.9 12c-6.5 8.4-6.4 6.8-6.1 89.7l.3 74.9 2.3 4.6c3.7 7.5 8.7 12.5 16 16.1l6.7 3.3h397l6.7-3.3c7.3-3.6 12.3-8.6 16-16.1l2.3-4.6v-154l-2.8-5.6c-3.2-6.6-9.9-13.2-16.5-16.2l-4.7-2.2-198-.2c-189.8-.2-198.2-.2-203.3 1.6M457 138v69H73V69h384z"/>
        <path d="M123.2 108.1c-6.5 4.2-8.9 13.1-5.4 20 3.1 6.2 31.9 38.5 36 40.5 4.7 2.3 11.7 2.3 16.5 0 3.9-1.9 33-34.5 36.1-40.4 5.2-10.1-2.4-22.2-13.9-22.2-6.9 0-9.6 1.9-20.8 14.9l-9.5 11-10.7-12c-5.9-6.6-11.8-12.4-13.2-13-4.3-1.6-11.5-1-15.1 1.2m-56.8 180c-6.3 1.4-14.4 6.9-18.6 12.4-7.1 9.3-6.9 6.5-6.6 90.1.3 74.4.3 74.9 2.5 79.6 3 6.6 9.6 13.3 16.2 16.5l5.6 2.8h399l4.7-2.2c6.6-3 13.3-9.6 16.5-16.2l2.8-5.6v-154l-2.3-4.6c-3.7-7.5-8.7-12.5-16-16.1l-6.7-3.3-196.5-.1c-117.5-.1-198.1.2-200.6.7M457 387.8v68.9l-77.2.6c-42.5.4-128.6.7-191.4.7H74.3l-.6-28.7c-.4-15.7-.7-47-.7-69.5V319h384z"/>
        <path d="M125.5 356.4c-6.7 2.9-10.5 10.6-9.1 18.2 1.1 5.6 32.1 41.3 38.3 44 4.8 2.1 11.4 1.7 16.1-.9 4.8-2.5 33.5-35.1 35.9-40.7 3.9-9-2.2-20.1-12-21.7-7.2-1.1-11.3 1.5-22.2 14.2-5.4 6.3-10.1 11.5-10.4 11.5-.4 0-5-5.1-10.4-11.4-12.2-14.2-17.7-16.9-26.2-13.2"/>
      </svg>
    </button>
    <div class="pm7-accordion-content">
      <div class="pm7-accordion-content-inner">
        Content for section 1
      </div>
    </div>
  </div>
  
  <div class="pm7-accordion-item">
    <button class="pm7-accordion-trigger">
      <span>Section 2</span>
      <svg class="pm7-accordion-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 536 528" fill="currentColor">
        <path d="M63.2 43.9q-9.15 3.15-15.9 12c-6.5 8.4-6.4 6.8-6.1 89.7l.3 74.9 2.3 4.6c3.7 7.5 8.7 12.5 16 16.1l6.7 3.3h397l6.7-3.3c7.3-3.6 12.3-8.6 16-16.1l2.3-4.6v-154l-2.8-5.6c-3.2-6.6-9.9-13.2-16.5-16.2l-4.7-2.2-198-.2c-189.8-.2-198.2-.2-203.3 1.6M457 138v69H73V69h384z"/>
        <path d="M123.2 108.1c-6.5 4.2-8.9 13.1-5.4 20 3.1 6.2 31.9 38.5 36 40.5 4.7 2.3 11.7 2.3 16.5 0 3.9-1.9 33-34.5 36.1-40.4 5.2-10.1-2.4-22.2-13.9-22.2-6.9 0-9.6 1.9-20.8 14.9l-9.5 11-10.7-12c-5.9-6.6-11.8-12.4-13.2-13-4.3-1.6-11.5-1-15.1 1.2m-56.8 180c-6.3 1.4-14.4 6.9-18.6 12.4-7.1 9.3-6.9 6.5-6.6 90.1.3 74.4.3 74.9 2.5 79.6 3 6.6 9.6 13.3 16.2 16.5l5.6 2.8h399l4.7-2.2c6.6-3 13.3-9.6 16.5-16.2l2.8-5.6v-154l-2.3-4.6c-3.7-7.5-8.7-12.5-16-16.1l-6.7-3.3-196.5-.1c-117.5-.1-198.1.2-200.6.7M457 387.8v68.9l-77.2.6c-42.5.4-128.6.7-191.4.7H74.3l-.6-28.7c-.4-15.7-.7-47-.7-69.5V319h384z"/>
        <path d="M125.5 356.4c-6.7 2.9-10.5 10.6-9.1 18.2 1.1 5.6 32.1 41.3 38.3 44 4.8 2.1 11.4 1.7 16.1-.9 4.8-2.5 33.5-35.1 35.9-40.7 3.9-9-2.2-20.1-12-21.7-7.2-1.1-11.3 1.5-22.2 14.2-5.4 6.3-10.1 11.5-10.4 11.5-.4 0-5-5.1-10.4-11.4-12.2-14.2-17.7-16.9-26.2-13.2"/>
      </svg>
    </button>
    <div class="pm7-accordion-content">
      <div class="pm7-accordion-content-inner">
        Content for section 2
      </div>
    </div>
  </div>
</div>
```

### JavaScript Initialization

Accordions with `data-pm7-accordion` are automatically initialized. For manual control:

```javascript
import { PM7Accordion } from '@pm7/core';

// Manual initialization
const accordionElement = document.querySelector('.pm7-accordion');
const accordion = new PM7Accordion(accordionElement, {
  allowMultiple: false,    // Allow multiple items open at once
  defaultOpen: 0,          // Index of item to open by default (or 'all')
  iconPosition: 'end',     // 'start' or 'end'
  textAlign: 'left',       // 'left', 'center', or 'right'
  height: null,            // 'sm', 'md', 'lg', 'fixed' or null for auto
  fixedHeight: 300         // Height in pixels when using 'fixed' option
});

// Open/close items programmatically
accordion.open(0);       // Open item at index 0
accordion.close(0);      // Close item at index 0
accordion.openAll();     // Open all items
accordion.closeAll();    // Close all items
accordion.toggle(0);     // Toggle item at index 0
```

### Allow Multiple Open

By default, only one accordion item can be open at a time. To allow multiple:

```html
<div class="pm7-accordion" data-pm7-accordion data-allow-multiple="true">
  <!-- accordion items -->
</div>
```

### Default Open Item

Open a specific item by default:

```html
<!-- Open first item (index 0) -->
<div class="pm7-accordion" data-pm7-accordion data-default-open="0">
  <!-- accordion items -->
</div>

<!-- Open all items -->
<div class="pm7-accordion" data-pm7-accordion data-default-open="all">
  <!-- accordion items -->
</div>

<!-- Open via data-state attribute on item -->
<div class="pm7-accordion" data-pm7-accordion>
  <div class="pm7-accordion-item" data-state="open">
    <!-- This item will be open by default -->
  </div>
</div>
```

### Size Variants

Control the size of accordion items:

```html
<!-- Extra small -->
<div class="pm7-accordion pm7-accordion--xs" data-pm7-accordion>
  <!-- accordion items -->
</div>

<!-- Small -->
<div class="pm7-accordion pm7-accordion--sm" data-pm7-accordion>
  <!-- accordion items -->
</div>

<!-- Medium (default) -->
<div class="pm7-accordion pm7-accordion--md" data-pm7-accordion>
  <!-- accordion items -->
</div>

<!-- Large -->
<div class="pm7-accordion pm7-accordion--lg" data-pm7-accordion>
  <!-- accordion items -->
</div>
```

### Styling Variants

#### Flush (No borders/background)

```html
<div class="pm7-accordion pm7-accordion--flush" data-pm7-accordion>
  <!-- accordion items -->
</div>
```

#### Separated Items

```html
<div class="pm7-accordion pm7-accordion--separated" data-pm7-accordion>
  <!-- accordion items -->
</div>
```

#### No Separator Line

```html
<div class="pm7-accordion pm7-accordion--no-separator" data-pm7-accordion>
  <!-- accordion items -->
</div>
```

### Icon Position

Move the expand/collapse icon to the start:

```html
<div class="pm7-accordion pm7-accordion--icon-start" data-pm7-accordion data-icon-position="start">
  <!-- accordion items -->
</div>

<!-- Or inline after text -->
<div class="pm7-accordion pm7-accordion--icon-inline" data-pm7-accordion>
  <!-- accordion items -->
</div>
```

### Text Alignment

Align trigger text:

```html
<!-- Center aligned -->
<div class="pm7-accordion pm7-accordion--text-center" data-pm7-accordion data-text-align="center">
  <!-- accordion items -->
</div>

<!-- Right aligned -->
<div class="pm7-accordion pm7-accordion--text-right" data-pm7-accordion data-text-align="right">
  <!-- accordion items -->
</div>
```

### Height Constraints

Set maximum heights for content areas:

```html
<!-- Small height (200px max) -->
<div class="pm7-accordion pm7-accordion--height-sm" data-pm7-accordion data-height="sm">
  <!-- accordion items -->
</div>

<!-- Medium height (400px max) -->
<div class="pm7-accordion pm7-accordion--height-md" data-pm7-accordion data-height="md">
  <!-- accordion items -->
</div>

<!-- Large height (600px max) -->
<div class="pm7-accordion pm7-accordion--height-lg" data-pm7-accordion data-height="lg">
  <!-- accordion items -->
</div>

<!-- Fixed height -->
<div class="pm7-accordion pm7-accordion--height-fixed" data-pm7-accordion data-height="fixed" data-fixed-height="350">
  <!-- accordion items -->
</div>
```

### Width Constraints

Control accordion width:

```html
<!-- Force full width -->
<div class="pm7-accordion pm7-accordion--width-max" data-pm7-accordion>
  <!-- accordion items -->
</div>

<!-- Fixed width with responsive behavior -->
<div class="pm7-accordion pm7-accordion--width-800" data-pm7-accordion>
  <!-- accordion items -->
</div>

<div class="pm7-accordion pm7-accordion--width-1000" data-pm7-accordion>
  <!-- accordion items -->
</div>
```

### Nested Accordions

You can nest accordions inside accordion content:

```html
<div class="pm7-accordion" data-pm7-accordion>
  <div class="pm7-accordion-item">
    <button class="pm7-accordion-trigger">
      <span>Parent Section</span>
      <svg class="pm7-accordion-icon">...</svg>
    </button>
    <div class="pm7-accordion-content">
      <div class="pm7-accordion-content-inner">
        <p>Parent content here</p>
        
        <!-- Nested accordion -->
        <div class="pm7-accordion pm7-accordion--sm" data-pm7-accordion>
          <div class="pm7-accordion-item">
            <button class="pm7-accordion-trigger">
              <span>Nested Section 1</span>
              <svg class="pm7-accordion-icon">...</svg>
            </button>
            <div class="pm7-accordion-content">
              <div class="pm7-accordion-content-inner">
                Nested content 1
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
```

## CSS Classes Reference

| Class | Description |
|-------|-------------|
| **Container Classes** | |
| `pm7-accordion` | Main accordion container |
| **Item Classes** | |
| `pm7-accordion-item` | Individual accordion section |
| **Structure Classes** | |
| `pm7-accordion-trigger` | Clickable header button |
| `pm7-accordion-icon` | Expand/collapse icon |
| `pm7-accordion-content` | Content wrapper (handles animation) |
| `pm7-accordion-content-inner` | Inner content container |
| **Size Modifiers** | |
| `pm7-accordion--xs` | Extra small size variant |
| `pm7-accordion--sm` | Small size variant |
| `pm7-accordion--md` | Medium size (default) |
| `pm7-accordion--lg` | Large size variant |
| **Style Modifiers** | |
| `pm7-accordion--flush` | No borders or background |
| `pm7-accordion--separated` | Space between items |
| `pm7-accordion--no-separator` | Remove content separator line |
| **Icon Modifiers** | |
| `pm7-accordion--icon-start` | Icon at start of trigger |
| `pm7-accordion--icon-inline` | Icon inline after text |
| **Text Modifiers** | |
| `pm7-accordion--text-center` | Center align trigger text |
| `pm7-accordion--text-right` | Right align trigger text |
| **Height Modifiers** | |
| `pm7-accordion--height-sm` | Max height 200px with scroll |
| `pm7-accordion--height-md` | Max height 400px with scroll |
| `pm7-accordion--height-lg` | Max height 600px with scroll |
| `pm7-accordion--height-fixed` | Fixed height with scroll |
| **Width Modifiers** | |
| `pm7-accordion--width-max` | Force full width |
| `pm7-accordion--width-800` | Max width 800px |
| `pm7-accordion--width-1000` | Max width 1000px |

## JavaScript API

### Auto-initialization

Accordions with `data-pm7-accordion` attribute are automatically initialized when the DOM loads.

```javascript
import { PM7Accordion } from '@pm7/core';
```

### Class Constructor

```javascript
const accordionElement = document.querySelector('.pm7-accordion');
const accordion = new PM7Accordion(accordionElement, options);
```

#### Constructor Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `allowMultiple` | boolean | `false` | Allow multiple items to be open |
| `defaultOpen` | number\|'all'\|null | `null` | Item index to open by default |
| `iconPosition` | 'start'\|'end' | `'end'` | Position of expand/collapse icon |
| `textAlign` | 'left'\|'center'\|'right' | `'left'` | Text alignment in trigger |
| `height` | 'sm'\|'md'\|'lg'\|'fixed'\|null | `null` | Content height constraint |
| `fixedHeight` | number | `300` | Height in pixels for 'fixed' option |

```javascript
// Example with all options
const accordion = new PM7Accordion(element, {
  allowMultiple: true,
  defaultOpen: 0,
  iconPosition: 'start',
  textAlign: 'center',
  height: 'md',
  fixedHeight: 400
});
```

### Instance Methods

| Method | Description |
|--------|-------------|
| `open(index)` | Opens the item at the specified index |
| `close(index)` | Closes the item at the specified index |
| `toggle(index)` | Toggles the item at the specified index |
| `openAll()` | Opens all accordion items |
| `closeAll()` | Closes all accordion items |

```javascript
// Open first item
accordion.open(0);

// Close second item
accordion.close(1);

// Toggle third item
accordion.toggle(2);

// Open all items (requires allowMultiple: true)
accordion.openAll();

// Close all items
accordion.closeAll();
```

### Static Methods

#### PM7Accordion.autoInit()

Initializes all accordions on the page with `data-pm7-accordion` attribute.

```javascript
// Manually trigger auto-initialization
PM7Accordion.autoInit();
```

This is called automatically on DOMContentLoaded, but can be called manually for dynamically added content.

### Data Attributes

| Attribute | Description | Example |
|-----------|-------------|---------|
| `data-pm7-accordion` | Marks element for auto-initialization | `data-pm7-accordion` |
| `data-allow-multiple` | Allow multiple open items | `data-allow-multiple="true"` |
| `data-default-open` | Index or 'all' for default open | `data-default-open="0"` |
| `data-state` | Set initial state on items | `data-state="open"` |
| `data-icon-position` | Icon position: 'start' or 'end' | `data-icon-position="start"` |
| `data-text-align` | Text alignment | `data-text-align="center"` |
| `data-height` | Height constraint | `data-height="md"` |
| `data-fixed-height` | Fixed height in pixels | `data-fixed-height="350"` |

### Events

The accordion component does not emit custom events, but standard DOM events can be used:

```javascript
// Listen for clicks on triggers
accordionElement.querySelectorAll('.pm7-accordion-trigger').forEach((trigger, index) => {
  trigger.addEventListener('click', () => {
    console.log(`Accordion item ${index} clicked`);
  });
});

// Monitor state changes using MutationObserver
const observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    if (mutation.attributeName === 'data-state') {
      const item = mutation.target;
      const isOpen = item.getAttribute('data-state') === 'open';
      console.log(`Item state changed: ${isOpen ? 'opened' : 'closed'}`);
    }
  });
});

// Observe all accordion items
accordionElement.querySelectorAll('.pm7-accordion-item').forEach(item => {
  observer.observe(item, { attributes: true });
});
```

### Advanced Usage

#### Programmatic Control

```javascript
// Create controlled accordion
const accordion = new PM7Accordion(element, {
  allowMultiple: false
});

// Open specific item based on URL hash
const hash = window.location.hash.slice(1);
if (hash) {
  const index = parseInt(hash);
  if (!isNaN(index)) {
    accordion.open(index);
  }
}

// Update URL when item is toggled
element.querySelectorAll('.pm7-accordion-trigger').forEach((trigger, index) => {
  trigger.addEventListener('click', () => {
    window.location.hash = index;
  });
});
```

#### Dynamic Content

```javascript
// Add new accordion item dynamically
function addAccordionItem(title, content) {
  const item = document.createElement('div');
  item.className = 'pm7-accordion-item';
  item.innerHTML = `
    <button class="pm7-accordion-trigger">
      <span>${title}</span>
    </button>
    <div class="pm7-accordion-content">
      <div class="pm7-accordion-content-inner">
        ${content}
      </div>
    </div>
  `;
  
  accordionElement.appendChild(item);
  
  // Re-initialize accordion to include new item
  accordion = new PM7Accordion(accordionElement, options);
}
```

#### Accordion with External Controls

```javascript
// Control accordion from external buttons
const accordion = new PM7Accordion(element);

document.getElementById('openAllBtn').addEventListener('click', () => {
  accordion.openAll();
});

document.getElementById('closeAllBtn').addEventListener('click', () => {
  accordion.closeAll();
});

// Jump to specific section
document.querySelectorAll('.section-link').forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const index = parseInt(link.dataset.section);
    accordion.open(index);
    accordionElement.scrollIntoView({ behavior: 'smooth' });
  });
});
```

## Keyboard Navigation

- **Tab**: Move focus to accordion triggers
- **Enter/Space**: Toggle focused accordion item
- **Arrow keys**: Not implemented (triggers are separate buttons)

## Accessibility Features

- **ARIA attributes**: `aria-expanded` on triggers
- **Keyboard support**: Enter/Space to toggle
- **Focus management**: Standard button focus behavior
- **Animation respect**: Animations disabled for users who prefer reduced motion
- **Semantic structure**: Uses button elements for triggers

## Animation Details

The accordion uses CSS animations for smooth open/close transitions:
- Open animation: 250ms ease-out
- Close animation: 250ms ease-out
- Height is dynamically calculated for smooth transitions
- Initial state items don't animate on page load

## Performance Considerations

- Use `data-pm7-accordion` for automatic initialization
- Manual initialization for dynamically created accordions
- Hardware-accelerated animations
- Efficient state management (no unnecessary re-renders)
- Content height calculated only when needed

## Best Practices

1. **Use descriptive labels**: Make trigger text clear and actionable
2. **Keep content focused**: Each section should have a single topic
3. **Consider default state**: Open most important section by default
4. **Limit nesting**: Avoid deeply nested accordions (max 2 levels)
5. **Mobile optimization**: Test on small screens, content should remain readable
6. **Loading states**: For async content, show loading indicators
7. **Icon consistency**: Always include the expand/collapse icon

## Advanced Examples

### FAQ Accordion

```html
<div class="pm7-accordion" data-pm7-accordion>
  <div class="pm7-accordion-item">
    <button class="pm7-accordion-trigger">
      <span>What payment methods do you accept?</span>
      <svg class="pm7-accordion-icon" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 536 528" fill="currentColor">
        <path d="M63.2 43.9q-9.15 3.15-15.9 12c-6.5 8.4-6.4 6.8-6.1 89.7l.3 74.9 2.3 4.6c3.7 7.5 8.7 12.5 16 16.1l6.7 3.3h397l6.7-3.3c7.3-3.6 12.3-8.6 16-16.1l2.3-4.6v-154l-2.8-5.6c-3.2-6.6-9.9-13.2-16.5-16.2l-4.7-2.2-198-.2c-189.8-.2-198.2-.2-203.3 1.6M457 138v69H73V69h384z"/>
        <path d="M123.2 108.1c-6.5 4.2-8.9 13.1-5.4 20 3.1 6.2 31.9 38.5 36 40.5 4.7 2.3 11.7 2.3 16.5 0 3.9-1.9 33-34.5 36.1-40.4 5.2-10.1-2.4-22.2-13.9-22.2-6.9 0-9.6 1.9-20.8 14.9l-9.5 11-10.7-12c-5.9-6.6-11.8-12.4-13.2-13-4.3-1.6-11.5-1-15.1 1.2m-56.8 180c-6.3 1.4-14.4 6.9-18.6 12.4-7.1 9.3-6.9 6.5-6.6 90.1.3 74.4.3 74.9 2.5 79.6 3 6.6 9.6 13.3 16.2 16.5l5.6 2.8h399l4.7-2.2c6.6-3 13.3-9.6 16.5-16.2l2.8-5.6v-154l-2.3-4.6c-3.7-7.5-8.7-12.5-16-16.1l-6.7-3.3-196.5-.1c-117.5-.1-198.1.2-200.6.7M457 387.8v68.9l-77.2.6c-42.5.4-128.6.7-191.4.7H74.3l-.6-28.7c-.4-15.7-.7-47-.7-69.5V319h384z"/>
        <path d="M125.5 356.4c-6.7 2.9-10.5 10.6-9.1 18.2 1.1 5.6 32.1 41.3 38.3 44 4.8 2.1 11.4 1.7 16.1-.9 4.8-2.5 33.5-35.1 35.9-40.7 3.9-9-2.2-20.1-12-21.7-7.2-1.1-11.3 1.5-22.2 14.2-5.4 6.3-10.1 11.5-10.4 11.5-.4 0-5-5.1-10.4-11.4-12.2-14.2-17.7-16.9-26.2-13.2"/>
      </svg>
    </button>
    <div class="pm7-accordion-content">
      <div class="pm7-accordion-content-inner">
        <p>We accept all major credit cards, PayPal, and bank transfers. For enterprise customers, we also offer invoicing with NET 30 terms.</p>
        <ul>
          <li>Visa, Mastercard, American Express</li>
          <li>PayPal and PayPal Credit</li>
          <li>ACH bank transfers</li>
          <li>Wire transfers for amounts over $10,000</li>
        </ul>
      </div>
    </div>
  </div>
  <!-- More FAQ items -->
</div>
```

### Settings Accordion with Forms

```html
<div class="pm7-accordion pm7-accordion--flush" data-pm7-accordion>
  <div class="pm7-accordion-item">
    <button class="pm7-accordion-trigger">
      <span>Profile Settings</span>
      <svg class="pm7-accordion-icon">...</svg>
    </button>
    <div class="pm7-accordion-content">
      <div class="pm7-accordion-content-inner">
        <form>
          <div class="pm7-form-group">
            <label class="pm7-label">Display Name</label>
            <input type="text" class="pm7-input" value="John Doe">
          </div>
          <div class="pm7-form-group">
            <label class="pm7-label">Email</label>
            <input type="email" class="pm7-input" value="john@example.com">
          </div>
          <button type="submit" class="pm7-button pm7-button--primary">Save Changes</button>
        </form>
      </div>
    </div>
  </div>
  <!-- More settings sections -->
</div>
```

### Data Table with Expandable Rows

```html
<table class="pm7-table">
  <thead>
    <tr>
      <th>Order ID</th>
      <th>Customer</th>
      <th>Total</th>
      <th></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>#12345</td>
      <td>John Doe</td>
      <td>$150.00</td>
      <td>
        <div data-pm7-accordion class="pm7-accordion--flush" style="margin: 0;">
          <div class="pm7-accordion-item" style="border: none;">
            <button class="pm7-accordion-trigger pm7-button pm7-button--sm pm7-button--ghost">
              <span>Details</span>
              <svg class="pm7-accordion-icon" style="width: 16px; height: 16px;">...</svg>
            </button>
            <div class="pm7-accordion-content">
              <div class="pm7-accordion-content-inner">
                <p><strong>Items:</strong></p>
                <ul>
                  <li>Product A - $50.00</li>
                  <li>Product B - $100.00</li>
                </ul>
                <p><strong>Shipping:</strong> 123 Main St, City, State 12345</p>
              </div>
            </div>
          </div>
        </div>
      </td>
    </tr>
  </tbody>
</table>
```

## CSS Customization

PM7 accordions can be customized using CSS custom properties:

```css
:root {
  /* Accordion styling */
  --pm7-accordion-border: #e0e0e0;
  --pm7-accordion-radius: var(--pm7-card-radius);
  --pm7-accordion-bg: var(--pm7-background);
  --pm7-accordion-bg-hover: var(--pm7-muted);
  
  /* Content padding */
  --pm7-card-padding: 1rem;
  --pm7-card-padding-sm: 0.75rem;
  --pm7-card-padding-lg: 1.5rem;
  
  /* Animation duration */
  --pm7-accordion-animation-duration: 250ms;
}
```

## React Usage

When using @pm7/react:

```jsx
import { Accordion, AccordionItem } from '@pm7/react';

function MyComponent() {
  return (
    <Accordion defaultOpen={0} allowMultiple={false}>
      <AccordionItem title="Section 1">
        Content for section 1
      </AccordionItem>
      <AccordionItem title="Section 2">
        Content for section 2
      </AccordionItem>
      <AccordionItem title="Section 3">
        Content for section 3
      </AccordionItem>
    </Accordion>
  );
}

// With more control
function AdvancedAccordion() {
  const [openItems, setOpenItems] = useState([0]);
  
  return (
    <Accordion
      openItems={openItems}
      onToggle={(index) => {
        setOpenItems(prev => 
          prev.includes(index) 
            ? prev.filter(i => i !== index)
            : [...prev, index]
        );
      }}
    >
      <AccordionItem title="Controlled Item 1">
        This accordion is controlled
      </AccordionItem>
      <AccordionItem title="Controlled Item 2">
        You have full control over open state
      </AccordionItem>
    </Accordion>
  );
}
```

## Common Pitfalls

1. **Missing inner wrapper**: Always wrap content in `pm7-accordion-content-inner`
2. **Icon not rotating**: Ensure icon has `pm7-accordion-icon` class
3. **Animation issues**: Check that content wrapper has proper structure
4. **Multiple open not working**: Set `data-allow-multiple="true"`
5. **Styling conflicts**: Accordion uses card-like styling, may conflict with custom styles
6. **Text alignment issues**: When adding icons before text, wrap them in a flex container:
   ```html
   <button class="pm7-accordion-trigger">
     <div style="display: flex; align-items: center; gap: 0.75rem; flex: 1;">
       <svg><!-- optional icon --></svg>
       <span>Title</span>
     </div>
     <svg class="pm7-accordion-icon">...</svg>
   </button>
   ```
7. **Width constraints**: Parent containers with `max-width` can limit accordion width. Use `pm7-accordion--width-max` to force full width
8. **JavaScript not loading**: Ensure you import the core JavaScript: `<script type="module" src="/packages/core/src/scripts/index.js"></script>`

## Related Components

- [Card](../card/) - Accordions use card-like styling
- [Button](../button/) - Triggers are button elements
- [Tab Selector](../tab-selector/) - For horizontal content organization