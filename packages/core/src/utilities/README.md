# PM7 Utilities

Utility classes that can be applied to any PM7 component or HTML element.

## Gradient Border

The gradient border utility adds a beautiful gradient border to any element using CSS masks.

### Basic Usage

```html
<!-- Default gradient border -->
<div class="pm7-card pm7-gradient-border">
  <div class="pm7-card-content">
    Card with gradient border
  </div>
</div>

<!-- Works perfectly with menus -->
<div class="pm7-menu-content pm7-gradient-border">
  <button class="pm7-menu-item">Menu item 1</button>
  <button class="pm7-menu-item">Menu item 2</button>
</div>
```

### Color Variants

```html
<!-- Blue gradient -->
<div class="pm7-button pm7-gradient-border pm7-gradient-border-blue">
  Blue gradient button
</div>

<!-- Green gradient -->
<div class="pm7-card pm7-gradient-border pm7-gradient-border-green">
  Green gradient card
</div>

<!-- Red gradient -->
<div class="pm7-dialog pm7-gradient-border pm7-gradient-border-red">
  Red gradient dialog
</div>

<!-- Primary color gradient -->
<div class="pm7-input pm7-gradient-border pm7-gradient-border-primary">
  Primary gradient input
</div>
```

### Border Thickness

```html
<!-- Default 1px border -->
<div class="pm7-card pm7-gradient-border">
  Default thickness
</div>

<!-- 2px border -->
<div class="pm7-card pm7-gradient-border pm7-gradient-border-2">
  2px gradient border
</div>

<!-- 4px border -->
<div class="pm7-card pm7-gradient-border pm7-gradient-border-4">
  4px gradient border
</div>
```

### Animation

```html
<!-- Animated gradient border -->
<div class="pm7-button pm7-gradient-border pm7-gradient-border-animated">
  Animated gradient
</div>
```

### CSS Variables

You can customize the gradient colors:

```css
:root {
  /* Default gradient colors */
  --pm7-gradient-border-1: #a855f7; /* Purple */
  --pm7-gradient-border-2: #eab308; /* Yellow */
  --pm7-gradient-border-3: #f97316; /* Orange */
  
  /* Custom gradient */
  --pm7-gradient-border: linear-gradient(
    to right, 
    #your-color-1, 
    #your-color-2, 
    #your-color-3
  );
}
```

### Important Notes

1. **Works with all components**: The gradient border can be applied to any PM7 component
2. **Menu compatibility**: The gradient border works perfectly with dropdown menus - position is automatically corrected
3. **Performance**: Uses CSS masks for optimal performance
4. **Dark mode**: Automatically adapts to dark mode

### Technical Details

The gradient border is implemented using:
- CSS mask technique for creating the border effect
- `position: relative` on the container (with special handling for menu dropdowns)
- A `::before` pseudo-element for the gradient
- `z-index` management to keep content above the border
- Automatic position correction for `.pm7-menu-content` to maintain proper dropdown positioning

## Helper Classes

Additional utility classes available:

- `.pm7-sr-only` - Screen reader only content
- `.pm7-truncate` - Truncate text with ellipsis
- `.pm7-no-select` - Prevent text selection
- `.pm7-full-width` - Make element full width
- `.pm7-text-center` - Center align text
- `.pm7-text-right` - Right align text
- `.pm7-text-left` - Left align text