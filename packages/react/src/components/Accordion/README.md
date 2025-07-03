# PM7 Accordion Component

A flexible accordion component for creating collapsible content sections with smooth animations and comprehensive customization options.

## Installation

```bash
npm install @pm7/core
```

## Features

- **Single or Multiple**: Control whether one or multiple items can be open
- **Size Variants**: Extra small, small, medium (default), and large sizes
- **Style Variants**: Default (bordered), flush, separated, and no-separator styles
- **Icon Positioning**: Place expand/collapse icon at start or end
- **Text Alignment**: Left (default), center, or right aligned headers
- **Height Control**: Auto (default), small, medium, large, or fixed height limits
- **Auto-initialization**: Works with data attributes for easy setup
- **Keyboard Navigation**: Full keyboard support with Tab, Enter, and Space
- **ARIA Compliant**: Proper accessibility attributes
- **Smooth Animations**: CSS-based animations with reduced motion support
- **Dark Mode**: Built-in dark mode support

## Basic Usage

### HTML Structure

```html
<div class="pm7-accordion" data-pm7-accordion>
  <div class="pm7-accordion-item">
    <button class="pm7-accordion-trigger">
      <span>Accordion Header</span>
      <svg class="pm7-accordion-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M19 9l-7 7-7-7"/>
      </svg>
    </button>
    <div class="pm7-accordion-content">
      <div class="pm7-accordion-content-inner">
        <p>Your content here</p>
      </div>
    </div>
  </div>
</div>
```

### JavaScript Initialization

```javascript
import { PM7Accordion } from '@pm7/core';

// Auto-initialization (using data-pm7-accordion)
// Happens automatically on DOMContentLoaded

// Manual initialization
const accordion = new PM7Accordion(element, {
  allowMultiple: false,    // Allow multiple items open
  defaultOpen: null,      // Index or 'all' to open by default
  iconPosition: 'end',    // 'start' or 'end'
  textAlign: 'left',      // 'left', 'center', or 'right'
  height: null,           // 'sm', 'md', 'lg', 'fixed', or null
  fixedHeight: 300        // Height in pixels when using 'fixed'
});
```

## CSS Classes

### Base Classes
- `.pm7-accordion` - Container for all accordion items
- `.pm7-accordion-item` - Individual collapsible section
- `.pm7-accordion-trigger` - Clickable header button
- `.pm7-accordion-content` - Collapsible content area
- `.pm7-accordion-content-inner` - Inner wrapper for content padding
- `.pm7-accordion-icon` - Expand/collapse chevron icon

### Size Variants
- `.pm7-accordion--xs` - Extra small size (minimal padding, 14px icon)
- `.pm7-accordion--sm` - Small size (reduced padding, 16px icon)
- `.pm7-accordion--md` - Medium size (default, 20px icon)
- `.pm7-accordion--lg` - Large size (increased padding, 24px icon)
- `.pm7-accordion--compact` - Legacy alias for small size (deprecated)

### Style Variants
- `.pm7-accordion--separated` - Adds spacing between items
- `.pm7-accordion--flush` - Removes borders and background
- `.pm7-accordion--no-separator` - Removes separator line between header and content

### Layout Variants
- `.pm7-accordion--icon-start` - Positions icon at the start
- `.pm7-accordion--text-left` - Left-aligns header text (default)
- `.pm7-accordion--text-center` - Center-aligns header text
- `.pm7-accordion--text-right` - Right-aligns header text

### Height Variants
- `.pm7-accordion--height-sm` - Small height limit (200px max)
- `.pm7-accordion--height-md` - Medium height limit (400px max)
- `.pm7-accordion--height-lg` - Large height limit (600px max)
- `.pm7-accordion--height-fixed` - Fixed height with custom value

## Data Attributes

| Attribute | Type | Default | Description |
|-----------|------|---------|-------------|
| `data-pm7-accordion` | Boolean | - | Enables auto-initialization |
| `data-allow-multiple` | Boolean | false | Allow multiple items open |
| `data-default-open` | Number\|"all" | null | Item(s) to open by default |
| `data-state` | "open"\|"closed" | "closed" | Current state of item |
| `data-icon-position` | "start"\|"end" | "end" | Icon position |
| `data-text-align` | "left"\|"center"\|"right" | "left" | Text alignment |
| `data-height` | "sm"\|"md"\|"lg"\|"fixed" | null | Height limit type |
| `data-fixed-height` | Number | 300 | Custom height for fixed type |

## JavaScript API

### Constructor Options

```javascript
{
  allowMultiple: false,    // Allow multiple items open simultaneously
  defaultOpen: null,      // Index (0-based) or 'all' to open by default
  iconPosition: 'end',    // Position of expand/collapse icon
  textAlign: 'left',      // Text alignment in headers
  height: null,           // Height limit variant
  fixedHeight: 300        // Custom height in pixels for 'fixed' height
}
```

### Methods

```javascript
// Open specific item by index
accordion.open(0);

// Close specific item by index
accordion.close(0);

// Toggle specific item by index
accordion.toggle(0);

// Open all items
accordion.openAll();

// Close all items
accordion.closeAll();
```

## CSS Custom Properties

```css
/* Customize accordion appearance */
.pm7-accordion {
  --pm7-accordion-border: #e0e0e0;
  --pm7-accordion-radius: 0.5rem;
  --pm7-accordion-bg: var(--pm7-background);
  --pm7-accordion-bg-hover: var(--pm7-muted);
}

/* Custom fixed height */
.pm7-accordion--height-fixed {
  --pm7-accordion-fixed-height: 400px;
}
```

## Examples

### Multiple Items Open

```html
<div class="pm7-accordion" data-pm7-accordion data-allow-multiple="true">
  <!-- Accordion items -->
</div>
```

### Small Size with Icon at Start

```html
<div class="pm7-accordion pm7-accordion--sm pm7-accordion--icon-start" data-pm7-accordion>
  <!-- Accordion items -->
</div>
```

### Flush Style with Center Alignment

```html
<div class="pm7-accordion pm7-accordion--flush pm7-accordion--text-center" data-pm7-accordion>
  <!-- Accordion items -->
</div>
```

### Fixed Height with Scrolling

```html
<div class="pm7-accordion" data-pm7-accordion data-height="fixed" data-fixed-height="250">
  <!-- Accordion items with scrollable content -->
</div>
```

### Default Open Items

```html
<!-- Open first item by default -->
<div class="pm7-accordion" data-pm7-accordion data-default-open="0">
  <!-- Accordion items -->
</div>

<!-- Open all items by default -->
<div class="pm7-accordion" data-pm7-accordion data-default-open="all">
  <!-- Accordion items -->
</div>
```

## Accessibility Features

- **Keyboard Navigation**: Tab to navigate, Enter/Space to toggle
- **ARIA Attributes**: `aria-expanded` on triggers
- **Focus Management**: Clear focus indicators
- **Screen Reader Support**: Proper state announcements
- **Reduced Motion**: Respects `prefers-reduced-motion`

## Browser Support

- Chrome/Edge (latest 2 versions)
- Firefox (latest 2 versions)
- Safari (latest 2 versions)
- Mobile browsers (iOS Safari, Chrome Android)

## Notes

- The component uses CSS animations for smooth transitions
- Content height is calculated dynamically for proper animations
- Custom scrollbars are styled for height-limited variants
- Dark mode is automatically supported via CSS custom properties
- The `compact` variant is deprecated; use `sm` instead

## Width Variants

- `.pm7-accordion--width-max` - Forces full width (100%) with no maximum limit
- `.pm7-accordion--width-800` - Sets maximum width to 800px
- `.pm7-accordion--width-1000` - Sets maximum width to 1000px

## ⚠️ BELANGRIJK: Container Width Vereiste

**De Accordion component neemt standaard alleen de breedte van zijn content aan.** Om de Accordion de volledige beschikbare breedte te laten gebruiken, moet de parent container een expliciete `width: 100%` hebben.

### Probleem
```html
<!-- ❌ FOUT - Accordion wordt alleen zo breed als zijn content (~520px) -->
<div style="max-width: 1000px; margin: 0 auto">
  <div class="pm7-accordion pm7-accordion--width-1000">
    <!-- content -->
  </div>
</div>
```

### Oplossing
```html
<!-- ✅ CORRECT - Accordion gebruikt volledige breedte -->
<div style="width: 100%; max-width: 1000px; margin: 0 auto">
  <div class="pm7-accordion pm7-accordion--width-1000">
    <!-- content -->
  </div>
</div>
```

### React Voorbeeld
```jsx
// ❌ FOUT
<div style={{ maxWidth: '1000px', margin: '0 auto' }}>
  <Accordion className="pm7-accordion--width-1000">
    {/* content */}
  </Accordion>
</div>

// ✅ CORRECT
<div style={{ width: '100%', maxWidth: '1000px', margin: '0 auto' }}>
  <Accordion className="pm7-accordion--width-1000">
    {/* content */}
  </Accordion>
</div>
```

**Let op**: Width modifiers zoals `pm7-accordion--width-1000` werken alleen correct als de parent container ook `width: 100%` heeft. Dit is een veelvoorkomende valkuil die tot veel tijdverlies kan leiden bij het debuggen.

## ⚠️ Content Padding

**De AccordionContent component heeft al ingebouwde padding via de `.pm7-accordion-content-inner` class.** Het is een veelvoorkomende fout om extra padding toe te voegen.

### Probleem
```jsx
// ❌ FOUT - Dubbele padding
<AccordionContent>
  <div style={{ padding: '1rem' }}>
    {/* content */}
  </div>
</AccordionContent>
```

### Oplossing
```jsx
// ✅ CORRECT - Gebruik de default padding
<AccordionContent>
  {/* content */}
</AccordionContent>
```

Als je echt custom padding nodig hebt, overschrijf dan de default padding:
```jsx
// Custom padding indien nodig
<AccordionContent style={{ '--pm7-card-padding': '2rem' }}>
  {/* content */}
</AccordionContent>
```