# Card

Cards are containers for displaying related content. They help organize information into digestible chunks and create visual hierarchy.

## Installation

```bash
npm install @pm7/core
```

## Usage

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

<!-- Outline card -->
<div class="pm7-card pm7-card--outline">
  <div class="pm7-card-content">
    <p>Outline card with border only</p>
  </div>
</div>

<!-- Ghost card -->
<div class="pm7-card pm7-card--ghost">
  <div class="pm7-card-content">
    <p>Ghost card with no border or shadow</p>
  </div>
</div>
```

### Clickable Card

```html
<a href="#" class="pm7-card pm7-card--clickable">
  <div class="pm7-card-header">
    <h3 class="pm7-card-title">Clickable Card</h3>
    <p class="pm7-card-description">This entire card is clickable</p>
  </div>
  <div class="pm7-card-content">
    <p>Click anywhere on this card to navigate.</p>
  </div>
</a>
```

### Card with Image

```html
<div class="pm7-card">
  <img src="/api/placeholder/400/200" alt="Card image" class="pm7-card-image">
  <div class="pm7-card-header">
    <h3 class="pm7-card-title">Beautiful Landscape</h3>
    <p class="pm7-card-description">Captured in the mountains</p>
  </div>
  <div class="pm7-card-content">
    <p>This photo was taken during a hiking trip in the Alps.</p>
  </div>
</div>
```

### Card Grid

```html
<div class="pm7-card-grid">
  <div class="pm7-card">
    <div class="pm7-card-header">
      <h3 class="pm7-card-title">Card 1</h3>
    </div>
    <div class="pm7-card-content">
      <p>First card in grid</p>
    </div>
  </div>
  
  <div class="pm7-card">
    <div class="pm7-card-header">
      <h3 class="pm7-card-title">Card 2</h3>
    </div>
    <div class="pm7-card-content">
      <p>Second card in grid</p>
    </div>
  </div>
  
  <div class="pm7-card">
    <div class="pm7-card-header">
      <h3 class="pm7-card-title">Card 3</h3>
    </div>
    <div class="pm7-card-content">
      <p>Third card in grid</p>
    </div>
  </div>
</div>
```

## CSS Classes Reference

| Class | Description |
|-------|-------------|
| `pm7-card` | Base card container |
| `pm7-card--outline` | Outline variant (border only) |
| `pm7-card--ghost` | Ghost variant (no border/shadow) |
| `pm7-card--clickable` | Clickable card with hover effects |
| `pm7-card-header` | Card header section |
| `pm7-card-title` | Card title |
| `pm7-card-description` | Card description/subtitle |
| `pm7-card-content` | Main card content area |
| `pm7-card-footer` | Card footer section |
| `pm7-card-image` | Full-width card image |
| `pm7-card-grid` | Grid container for cards |

## Grid Layout Options

```css
/* Default: Responsive grid */
.pm7-card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: var(--pm7-space-4);
}

/* Custom grid columns */
.pm7-card-grid--2 { grid-template-columns: repeat(2, 1fr); }
.pm7-card-grid--3 { grid-template-columns: repeat(3, 1fr); }
.pm7-card-grid--4 { grid-template-columns: repeat(4, 1fr); }
```

## Best Practices

1. **Consistent sizing**: Use grid layouts for equal-height cards
2. **Clear hierarchy**: Use title, description, and content sections appropriately
3. **Actionable cards**: Make entire card clickable when it represents a single action
4. **Spacing**: Maintain consistent padding and margins
5. **Images**: Use appropriate aspect ratios for card images

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
<div class="pm7-card pm7-card--clickable" onclick="handleFeatureClick()">
  <div class="pm7-card-header">
    <div style="width: 48px; height: 48px; background: var(--pm7-primary-light); 
                border-radius: var(--pm7-radius); display: flex; 
                align-items: center; justify-content: center; margin-bottom: 16px;">
      <svg width="24" height="24" style="color: var(--pm7-primary);">...</svg>
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

## React Usage

When using @pm7/react:

```jsx
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@pm7/react';

function MyComponent() {
  return (
    <Card variant="outline">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
        <CardDescription>Card description</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Card content goes here</p>
      </CardContent>
      <CardFooter>
        <Button variant="outline">Cancel</Button>
        <Button>Save</Button>
      </CardFooter>
    </Card>
  );
}
```

## Related Components

- [Button](../button/) - For card actions
- [Dialog](../dialog/) - For card-triggered modals
- [Menu](../menu/) - For card action menus