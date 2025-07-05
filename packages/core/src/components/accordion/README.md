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
      <svg class="pm7-accordion-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M19 9l-7 7-7-7"/>
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
      <svg class="pm7-accordion-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M19 9l-7 7-7-7"/>
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

### Constructor Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `allowMultiple` | boolean | `false` | Allow multiple items to be open |
| `defaultOpen` | number\|'all'\|null | `null` | Item index to open by default |
| `iconPosition` | 'start'\|'end' | `'end'` | Position of expand/collapse icon |
| `textAlign` | 'left'\|'center'\|'right' | `'left'` | Text alignment in trigger |
| `height` | 'sm'\|'md'\|'lg'\|'fixed'\|null | `null` | Content height constraint |
| `fixedHeight` | number | `300` | Height in pixels for 'fixed' option |

### Methods

| Method | Description |
|--------|-------------|
| `open(index)` | Open item at specified index |
| `close(index)` | Close item at specified index |
| `toggle(index)` | Toggle item at specified index |
| `openAll()` | Open all accordion items |
| `closeAll()` | Close all accordion items |

### Data Attributes

| Attribute | Description |
|-----------|-------------|
| `data-pm7-accordion` | Auto-initialize accordion |
| `data-allow-multiple` | Allow multiple open items |
| `data-default-open` | Index or 'all' for default open |
| `data-state` | 'open' or 'closed' state on items |
| `data-icon-position` | 'start' or 'end' |
| `data-text-align` | 'left', 'center', or 'right' |
| `data-height` | 'sm', 'md', 'lg', or 'fixed' |
| `data-fixed-height` | Height in pixels for fixed option |

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
      <svg class="pm7-accordion-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M19 9l-7 7-7-7"/>
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
        <div class="pm7-accordion pm7-accordion--flush" data-pm7-accordion style="margin: 0;">
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

## Related Components

- [Card](../card/) - Accordions use card-like styling
- [Button](../button/) - Triggers are button elements
- [Tab Selector](../tab-selector/) - For horizontal content organization