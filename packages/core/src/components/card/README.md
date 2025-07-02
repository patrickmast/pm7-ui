# Card

Cards are containers for displaying related content. They help organize information into digestible chunks and create visual hierarchy.

---

## ⚠️ IMPORTANT: Installation & CSS Setup

**AI AGENTS**: If you're implementing PM7 components, you MUST read the getting started guide first:
- **Getting Started Guide**: https://raw.githubusercontent.com/patrickmast/pm7-ui/main/packages/core/GETTING-STARTED.md

The getting started guide contains CRITICAL information about:
- How to install PM7 packages
- **Required CSS import** (the components will not work without it!)
- Common mistakes to avoid
- Quick start examples

**Human developers**: Please ensure your AI agent reads the getting started guide URL above before implementing any PM7 components.

---

## Component-Specific Documentation

This document focuses on the Card component's specific features and usage.

### Basic Card

```html
<div class="pm7-card">
  <div class="pm7-card-header">
    <h3 class="pm7-card-title">Card Title</h3>
    <p class="pm7-card-description">Card description goes here</p>
  </div>
  <div class="pm7-card-content">
    <p>Card content goes here. This is where your main content lives.</p>
  </div>
</div>
```

### Card with Footer

```html
<div class="pm7-card">
  <div class="pm7-card-header">
    <h3 class="pm7-card-title">Monthly Report</h3>
    <p class="pm7-card-description">Sales performance overview</p>
  </div>
  <div class="pm7-card-content">
    <p>Your sales increased by 25% this month.</p>
  </div>
  <div class="pm7-card-footer">
    <button class="pm7-button pm7-button--outline pm7-button--sm">View Details</button>
    <button class="pm7-button pm7-button--primary pm7-button--sm">Download</button>
  </div>
</div>
```

### Card Variants

```html
<!-- Default card -->
<div class="pm7-card">
  <div class="pm7-card-content">
    <p>Default card with subtle shadow</p>
  </div>
</div>

<!-- Outlined card (thicker border) -->
<div class="pm7-card pm7-card--outlined">
  <div class="pm7-card-content">
    <p>Outlined card with prominent border</p>
  </div>
</div>

<!-- Ghost card -->
<div class="pm7-card pm7-card--ghost">
  <div class="pm7-card-content">
    <p>Ghost card with no border or shadow</p>
  </div>
</div>

<!-- Elevated card -->
<div class="pm7-card pm7-card--elevated">
  <div class="pm7-card-content">
    <p>Elevated card with larger shadow, no border</p>
  </div>
</div>
```

### Interactive Cards

```html
<!-- Hoverable card -->
<div class="pm7-card pm7-card--hoverable">
  <div class="pm7-card-header">
    <h3 class="pm7-card-title">Interactive Card</h3>
    <p class="pm7-card-description">Hover to see effect</p>
  </div>
  <div class="pm7-card-content">
    <p>This card lifts on hover with enhanced shadow.</p>
  </div>
</div>

<!-- Clickable link card -->
<a href="#" class="pm7-card pm7-card--hoverable">
  <div class="pm7-card-header">
    <h3 class="pm7-card-title">Clickable Card</h3>
    <p class="pm7-card-description">This entire card is clickable</p>
  </div>
  <div class="pm7-card-content">
    <p>Click anywhere on this card to navigate.</p>
  </div>
</a>
```

### Padding Variants

```html
<!-- Small padding -->
<div class="pm7-card pm7-card--sm">
  <div class="pm7-card-content">Compact card with small padding</div>
</div>

<!-- Medium padding (default) -->
<div class="pm7-card pm7-card--md">
  <div class="pm7-card-content">Standard padding</div>
</div>

<!-- Large padding -->
<div class="pm7-card pm7-card--lg">
  <div class="pm7-card-content">Spacious card with large padding</div>
</div>

<!-- No padding -->
<div class="pm7-card pm7-card--no-padding">
  <img src="/api/placeholder/400/200" alt="Full bleed image">
  <div class="pm7-card-content">Content after image</div>
</div>
```

### Status Cards

```html
<!-- Success card -->
<div class="pm7-card pm7-card--success">
  <div class="pm7-card-header">
    <h3 class="pm7-card-title">Success!</h3>
  </div>
  <div class="pm7-card-content">
    <p>Your payment was processed successfully.</p>
  </div>
</div>

<!-- Warning card -->
<div class="pm7-card pm7-card--warning">
  <div class="pm7-card-header">
    <h3 class="pm7-card-title">Warning</h3>
  </div>
  <div class="pm7-card-content">
    <p>Your subscription expires in 3 days.</p>
  </div>
</div>

<!-- Error card -->
<div class="pm7-card pm7-card--error">
  <div class="pm7-card-header">
    <h3 class="pm7-card-title">Error</h3>
  </div>
  <div class="pm7-card-content">
    <p>Failed to save changes. Please try again.</p>
  </div>
</div>

<!-- Info card -->
<div class="pm7-card pm7-card--info">
  <div class="pm7-card-header">
    <h3 class="pm7-card-title">Information</h3>
  </div>
  <div class="pm7-card-content">
    <p>New features are available in your dashboard.</p>
  </div>
</div>
```

### Card with Image

```html
<!-- Top image -->
<div class="pm7-card pm7-card--no-padding">
  <img src="/api/placeholder/400/200" alt="Card image" class="pm7-card-image pm7-card-image--top">
  <div class="pm7-card-header">
    <h3 class="pm7-card-title">Beautiful Landscape</h3>
    <p class="pm7-card-description">Captured in the mountains</p>
  </div>
  <div class="pm7-card-content">
    <p>This photo was taken during a hiking trip in the Alps.</p>
  </div>
</div>
```

### Card Footer Alignment

```html
<!-- Left aligned footer -->
<div class="pm7-card">
  <div class="pm7-card-content">Content</div>
  <div class="pm7-card-footer pm7-card-footer--start">
    <button class="pm7-button pm7-button--primary">Action</button>
  </div>
</div>

<!-- Center aligned footer -->
<div class="pm7-card">
  <div class="pm7-card-content">Content</div>
  <div class="pm7-card-footer pm7-card-footer--center">
    <button class="pm7-button pm7-button--primary">Action</button>
  </div>
</div>

<!-- Space between footer -->
<div class="pm7-card">
  <div class="pm7-card-content">Content</div>
  <div class="pm7-card-footer pm7-card-footer--between">
    <button class="pm7-button pm7-button--outline">Cancel</button>
    <button class="pm7-button pm7-button--primary">Save</button>
  </div>
</div>
```

### Card Grid Layouts

```html
<!-- Responsive grid (default) -->
<div class="pm7-card-grid">
  <div class="pm7-card">
    <div class="pm7-card-content">Card 1</div>
  </div>
  <div class="pm7-card">
    <div class="pm7-card-content">Card 2</div>
  </div>
  <div class="pm7-card">
    <div class="pm7-card-content">Card 3</div>
  </div>
</div>

<!-- 2 column grid (responsive) -->
<div class="pm7-card-grid pm7-card-grid--2">
  <div class="pm7-card">
    <div class="pm7-card-content">Card 1</div>
  </div>
  <div class="pm7-card">
    <div class="pm7-card-content">Card 2</div>
  </div>
</div>

<!-- Fixed 3 column grid (non-responsive) -->
<div class="pm7-card-grid pm7-card-grid--fixed-3">
  <div class="pm7-card">
    <div class="pm7-card-content">Card 1</div>
  </div>
  <div class="pm7-card">
    <div class="pm7-card-content">Card 2</div>
  </div>
  <div class="pm7-card">
    <div class="pm7-card-content">Card 3</div>
  </div>
</div>
```

## CSS Customization

PM7 cards can be customized using CSS custom properties:

```css
:root {
  /* Border radius */
  --pm7-card-radius: 0.5rem;
  
  /* Padding variants */
  --pm7-card-padding: 1.5rem;
  --pm7-card-padding-sm: 1rem;
  --pm7-card-padding-lg: 2rem;
  
  /* Visual properties */
  --pm7-card-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1);
  --pm7-card-shadow-hover: 0 10px 15px -3px rgb(0 0 0 / 0.1);
  --pm7-card-border-width: 1px;
  
  /* Footer */
  --pm7-card-footer-bg: transparent;
}
```

## CSS Classes Reference

| Class | Description |
|-------|-------------|
| `pm7-card` | Base card container |
| **Variants** | |
| `pm7-card--outlined` | Card with a more prominent border |
| `pm7-card--ghost` | Card with no border or shadow |
| `pm7-card--elevated` | Card with larger shadow, no border |
| `pm7-card--hoverable` | Card with hover lift effect |
| **Padding Modifiers** | |
| `pm7-card--sm` | Small padding |
| `pm7-card--md` | Medium padding (default) |
| `pm7-card--lg` | Large padding |
| `pm7-card--no-padding` | No padding |
| **Status Modifiers** | |
| `pm7-card--success` | Success state (green) |
| `pm7-card--warning` | Warning state (orange) |
| `pm7-card--error` | Error state (red) |
| `pm7-card--info` | Info state (blue) |
| **Structure Classes** | |
| `pm7-card-header` | Card header section |
| `pm7-card-title` | Card title |
| `pm7-card-description` | Card description/subtitle |
| `pm7-card-content` | Main card content area |
| `pm7-card-footer` | Card footer section |
| `pm7-card-image` | Full-width card image |
| `pm7-card-image--top` | Image with rounded top corners, suitable for full-bleed images within a card that has `pm7-card--no-padding` |
| **Footer Alignment** | |
| `pm7-card-footer--start` | Left align footer content |
| `pm7-card-footer--center` | Center align footer content |
| `pm7-card-footer--between` | Space between footer items |
| **Grid Classes** | |
| `pm7-card-grid` | Responsive grid container |
| `pm7-card-grid--2` | 2 column responsive grid |
| `pm7-card-grid--3` | 3 column responsive grid |
| `pm7-card-grid--4` | 4 column responsive grid |
| `pm7-card-grid--fixed-2` | Fixed 2 column grid |
| `pm7-card-grid--fixed-3` | Fixed 3 column grid |
| `pm7-card-grid--fixed-4` | Fixed 4 column grid |

## Grid System Details

The card grid system provides flexible layout options:

- **Default grid**: Auto-fills with minimum 300px columns
- **Numbered grids (--2, --3, --4)**: Responsive with breakpoints
- **Fixed grids (--fixed-2, etc.)**: Non-responsive, always maintain column count
- **Gap**: Uses `--pm7-spacing-6` (1.5rem) between cards

## Best Practices

1. **Consistent sizing**: Use grid layouts for equal-height cards
2. **Clear hierarchy**: Use title, description, and content sections appropriately
3. **Interactive cards**: Use `pm7-card--hoverable` for clickable cards
4. **Status communication**: Use status variants for important state information
5. **Padding choices**: Select appropriate padding based on content density
6. **Images**: Use `pm7-card--no-padding` with `pm7-card-image--top` for edge-to-edge images

## Advanced Examples

### Stats Card

```html
<div class="pm7-card">
  <div class="pm7-card-header">
    <p class="pm7-card-description">Total Revenue</p>
    <h3 class="pm7-card-title" style="font-size: 2rem; margin: 0;">$45,231.89</h3>
  </div>
  <div class="pm7-card-content">
    <p style="color: var(--pm7-success);">+20.1% from last month</p>
  </div>
</div>
```

### Profile Card

```html
<div class="pm7-card" style="text-align: center;">
  <div class="pm7-card-content">
    <img src="/api/placeholder/80/80" alt="Avatar" 
         style="width: 80px; height: 80px; border-radius: 50%; margin: 0 auto 16px;">
    <h3 class="pm7-card-title">Jane Doe</h3>
    <p class="pm7-card-description">Software Engineer</p>
    <div style="margin-top: 16px;">
      <button class="pm7-button pm7-button--primary pm7-button--sm">Follow</button>
      <button class="pm7-button pm7-button--outline pm7-button--sm">Message</button>
    </div>
  </div>
</div>
```

### Feature Card

```html
<div class="pm7-card pm7-card--hoverable" onclick="handleFeatureClick()">
  <div class="pm7-card-header">
    <div style="width: 48px; height: 48px; background: var(--pm7-primary-light); 
                border-radius: var(--pm7-radius); display: flex; 
                align-items: center; justify-content: center; margin-bottom: 16px;">
      <svg width="24" height="24" style="color: var(--pm7-primary);"></svg>
    </div>
    <h3 class="pm7-card-title">Advanced Analytics</h3>
    <p class="pm7-card-description">
      Get detailed insights into your application performance
    </p>
  </div>
  <div class="pm7-card-content">
    <ul style="list-style: none; padding: 0;">
      <li>✓ Real-time monitoring</li>
      <li>✓ Custom dashboards</li>
      <li>✓ Export reports</li>
    </ul>
  </div>
  <div class="pm7-card-footer">
    <span style="color: var(--pm7-primary);">Learn more →</span>
  </div>
</div>
```

## Related Components

- [Button](../button/) - For card actions
- [Dialog](../dialog/) - For card-triggered modals
- [Menu](../menu/) - For card action menus