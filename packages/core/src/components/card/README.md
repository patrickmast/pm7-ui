---
# MANDATORY METADATA
type: ai-agent-documentation
version: 1.0
component: Card
status: stable
audience: ai-coding-agents-only
human-readable: false

# COMPONENT METADATA
category: layout
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
  auto: false
  manual: false
  import-required: false
css-prefix: pm7-card
data-attribute: none
javascript-class: none
---

# Component: Card

DEFINITION: Card = HTML div element with class="pm7-card" containing structured content sections
PURPOSE: Group related content visually
IMPORT: CSS only via @pm7/core/dist/pm7.css

## Installation

```bash
npm install @pm7/core
```

THEN:
```html
<link rel="stylesheet" href="/node_modules/@pm7/core/dist/pm7.css">
```

OR:
```javascript
import '@pm7/core/dist/pm7.css'
```

## Required Structure

MINIMAL:
```html
<div class="pm7-card">
  <div class="pm7-card-content">
    Content
  </div>
</div>
```

COMPLETE:
```html
<div class="pm7-card pm7-card--[outlined|ghost|elevated|interactive] pm7-card--compact">
  <img src="image.jpg" alt="Description" class="pm7-card-image">
  <div class="pm7-card-header">
    <h3 class="pm7-card-title">Title</h3>
    <p class="pm7-card-description">Description</p>
  </div>
  <div class="pm7-card-content">
    Main content
  </div>
  <div class="pm7-card-footer">
    Footer content
  </div>
</div>
```

## Initialization

IF auto-init:
  CONDITION: N/A
  TRIGGER: N/A
  ACTION: N/A
  RESULT: CSS-only component

IF manual-init:
  CONDITION: N/A
  ACTION: CSS-only component
  RESULT: Applied via class names

NEVER:
  - Add JavaScript initialization
  - Use data attributes for cards
  - Nest cards within cards

## Rules

### Rule: Content Wrapper Required
IF card element
THEN MUST include div.pm7-card-content
ELSE padding and spacing incorrect

EXAMPLE:
```html
<!-- IF card element -->
<div class="pm7-card">
  <div class="pm7-card-content">
    Content here
  </div>
</div>

<!-- ELSE NEVER -->
<div class="pm7-card">
  Direct content without wrapper
</div>
```

### Rule: Header Structure
IF card has header
THEN wrap in div.pm7-card-header containing h3.pm7-card-title
ELSE header styling incorrect

EXAMPLE:
```html
<!-- IF header needed -->
<div class="pm7-card">
  <div class="pm7-card-header">
    <h3 class="pm7-card-title">Title</h3>
    <p class="pm7-card-description">Optional description</p>
  </div>
  <div class="pm7-card-content">Content</div>
</div>

<!-- ELSE NEVER -->
<div class="pm7-card">
  <h3>Title without wrapper</h3>
  <div class="pm7-card-content">Content</div>
</div>
```

### Rule: Variant Selection
IF variant needed
THEN add ONE of: pm7-card--outlined|ghost|elevated
ELSE default styling with border and subtle shadow

EXAMPLE:
```html
<!-- IF stronger border -->
<div class="pm7-card pm7-card--outlined">
  <div class="pm7-card-content">Content</div>
</div>

<!-- ELSE IF no border/shadow -->
<div class="pm7-card pm7-card--ghost">
  <div class="pm7-card-content">Content</div>
</div>
```

### Rule: Interactive Cards
IF card clickable
THEN add pm7-card--interactive class OR use a element
ELSE no hover effects

EXAMPLE:
```html
<!-- IF entire card clickable -->
<a href="/link" class="pm7-card pm7-card--interactive">
  <div class="pm7-card-content">Clickable card</div>
</a>

<!-- ELSE IF hover effects only -->
<div class="pm7-card pm7-card--interactive">
  <div class="pm7-card-content">Hover effects</div>
</div>
```

### Rule: Image Placement
IF card has image
THEN place img.pm7-card-image as first child
ELSE image styling incorrect

EXAMPLE:
```html
<!-- IF image card -->
<div class="pm7-card">
  <img src="image.jpg" alt="Description" class="pm7-card-image">
  <div class="pm7-card-content">
    Content below image
  </div>
</div>
```

### Rule: Footer Actions
IF card has actions
THEN place in div.pm7-card-footer
ELSE spacing incorrect

EXAMPLE:
```html
<!-- IF footer actions -->
<div class="pm7-card">
  <div class="pm7-card-content">Content</div>
  <div class="pm7-card-footer">
    <button class="pm7-button pm7-button--primary">Action</button>
  </div>
</div>
```

## Patterns

### Pattern: Basic Card
WHEN: Simple content container needed
USE:
```html
<div class="pm7-card">
  <div class="pm7-card-content">
    <p>Your content goes here</p>
  </div>
</div>
```

RESULT: Card with border and subtle shadow

### Pattern: Card with Header
WHEN: Content needs title and description
USE:
```html
<div class="pm7-card">
  <div class="pm7-card-header">
    <h3 class="pm7-card-title">Card Title</h3>
    <p class="pm7-card-description">Brief description of the card content</p>
  </div>
  <div class="pm7-card-content">
    <p>Main card content goes here</p>
  </div>
</div>
```

RESULT: Card with separated header section

### Pattern: Card with Actions
WHEN: Card needs action buttons
USE:
```html
<div class="pm7-card">
  <div class="pm7-card-header">
    <h3 class="pm7-card-title">Settings</h3>
  </div>
  <div class="pm7-card-content">
    <p>Configure your preferences</p>
  </div>
  <div class="pm7-card-footer">
    <button class="pm7-button pm7-button--primary">Save</button>
    <button class="pm7-button pm7-button--secondary">Cancel</button>
  </div>
</div>
```

RESULT: Card with footer containing actions

### Pattern: Clickable Card
WHEN: Entire card should be clickable
USE:
```html
<a href="/details" class="pm7-card pm7-card--interactive">
  <div class="pm7-card-header">
    <h3 class="pm7-card-title">Product Name</h3>
  </div>
  <div class="pm7-card-content">
    <p>Click anywhere on this card to view details</p>
  </div>
</a>
```

RESULT: Fully clickable card with hover effects

### Pattern: Image Card
WHEN: Card displays image content
USE:
```html
<div class="pm7-card">
  <img src="/path/to/image.jpg" alt="Product image" class="pm7-card-image">
  <div class="pm7-card-header">
    <h3 class="pm7-card-title">Product Name</h3>
  </div>
  <div class="pm7-card-content">
    <p>Product description</p>
  </div>
  <div class="pm7-card-footer">
    <button class="pm7-button pm7-button--primary">Add to Cart</button>
  </div>
</div>
```

RESULT: Card with full-width image at top

### Pattern: Card Grid
WHEN: Multiple cards in grid layout
USE:
```html
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
```

RESULT: Responsive grid of cards

### Pattern: Elevated Card
WHEN: Card needs more visual prominence
USE:
```html
<div class="pm7-card pm7-card--elevated">
  <div class="pm7-card-header">
    <h3 class="pm7-card-title">Featured Content</h3>
  </div>
  <div class="pm7-card-content">
    <p>This card has a larger shadow for emphasis</p>
  </div>
</div>
```

RESULT: Card with larger shadow, no border

### Pattern: Compact Card
WHEN: Less padding needed
USE:
```html
<div class="pm7-card pm7-card--compact">
  <div class="pm7-card-content">
    <p>Compact card with reduced padding</p>
  </div>
</div>
```

RESULT: Card with minimal padding

### Anti-Pattern: Missing Content Wrapper
NEVER:
```html
<div class="pm7-card">
  Direct content without wrapper
</div>
```

BECAUSE: Padding and spacing rely on content wrapper
INSTEAD: See Pattern: Basic Card

### Anti-Pattern: Nested Cards
NEVER:
```html
<div class="pm7-card">
  <div class="pm7-card-content">
    <div class="pm7-card">
      Nested card
    </div>
  </div>
</div>
```

BECAUSE: Creates visual confusion and spacing issues
INSTEAD: Use flat card structure

### Anti-Pattern: Multiple Variants
NEVER:
```html
<div class="pm7-card pm7-card--outlined pm7-card--elevated">
```

BECAUSE: Conflicting styles create undefined behavior
INSTEAD: Choose one variant

## Attributes

| Attribute | Type | Values | Default | Required | Effect |
|-----------|------|--------|---------|----------|--------|
| class | string | pm7-card [variants] | - | YES | Applies card styling |
| href | string | URL | - | NO | When using a element |

## CSS Classes

| Class | Purpose | Combinable | Parent Required |
|-------|---------|------------|------------------|
| .pm7-card | Base card container | YES | NO |
| .pm7-card-content | Content wrapper | NO | .pm7-card |
| .pm7-card-header | Header section | NO | .pm7-card |
| .pm7-card-title | Card title | NO | .pm7-card-header |
| .pm7-card-description | Card description | NO | .pm7-card-header |
| .pm7-card-footer | Footer section | NO | .pm7-card |
| .pm7-card-image | Full-width image | NO | .pm7-card |
| .pm7-card--outlined | Thicker border variant | NO* | .pm7-card |
| .pm7-card--ghost | No border/shadow variant | NO* | .pm7-card |
| .pm7-card--elevated | Larger shadow variant | NO* | .pm7-card |
| .pm7-card--interactive | Hover effects | YES | .pm7-card |
| .pm7-card--compact | Reduced padding | YES | .pm7-card |
| .pm7-card-grid | Card grid container | NO | NO |

*NO = Cannot combine with other variants

## JavaScript API

### Methods

| Method | Parameters | Returns | Throws | Usage |
|--------|------------|---------|--------|--------|
| N/A | - | - | - | CSS-only component |

### Properties

| Property | Type | Readonly | Default | Usage |
|----------|------|----------|---------|--------|
| N/A | - | - | - | CSS-only component |

### Events

| Event | Bubbles | Cancelable | Detail | Usage |
|-------|---------|------------|--------|--------|
| click | YES | YES | - | When interactive or link |

## Framework Integration

### React
```jsx
IF basic card:
  <div className="pm7-card">
    <div className="pm7-card-content">
      {children}
    </div>
  </div>

IF with props:
  <div className={`pm7-card ${variant ? `pm7-card--${variant}` : ''}`}>
    {image && <img src={image} alt={imageAlt} className="pm7-card-image" />}
    {title && (
      <div className="pm7-card-header">
        <h3 className="pm7-card-title">{title}</h3>
        {description && <p className="pm7-card-description">{description}</p>}
      </div>
    )}
    <div className="pm7-card-content">{children}</div>
    {footer && <div className="pm7-card-footer">{footer}</div>}
  </div>
```

### Vue
```vue
IF template:
  <div class="pm7-card">
    <div class="pm7-card-content">
      <slot></slot>
    </div>
  </div>

IF with props:
  <div :class="['pm7-card', variant && `pm7-card--${variant}`]">
    <img v-if="image" :src="image" :alt="imageAlt" class="pm7-card-image">
    <div v-if="title || description" class="pm7-card-header">
      <h3 v-if="title" class="pm7-card-title">{{ title }}</h3>
      <p v-if="description" class="pm7-card-description">{{ description }}</p>
    </div>
    <div class="pm7-card-content">
      <slot></slot>
    </div>
    <div v-if="$slots.footer" class="pm7-card-footer">
      <slot name="footer"></slot>
    </div>
  </div>
```

### Angular
```typescript
IF template:
  <div class="pm7-card">
    <div class="pm7-card-content">
      <ng-content></ng-content>
    </div>
  </div>

IF with inputs:
  <div [class]="'pm7-card ' + (variant ? 'pm7-card--' + variant : '')">
    <img *ngIf="image" [src]="image" [alt]="imageAlt" class="pm7-card-image">
    <div *ngIf="title || description" class="pm7-card-header">
      <h3 *ngIf="title" class="pm7-card-title">{{ title }}</h3>
      <p *ngIf="description" class="pm7-card-description">{{ description }}</p>
    </div>
    <div class="pm7-card-content">
      <ng-content></ng-content>
    </div>
    <div class="pm7-card-footer">
      <ng-content select="[card-footer]"></ng-content>
    </div>
  </div>
```

## Complete Examples

### Example: Product Card Grid
SCENARIO: E-commerce product listing
```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="/node_modules/@pm7/core/dist/pm7.css">
</head>
<body>
  <div class="pm7-card-grid">
    <a href="/product/1" class="pm7-card pm7-card--interactive">
      <img src="/products/laptop.jpg" alt="Laptop" class="pm7-card-image">
      <div class="pm7-card-header">
        <h3 class="pm7-card-title">Professional Laptop</h3>
      </div>
      <div class="pm7-card-content">
        <p>High-performance laptop for professionals</p>
        <strong>$1,299</strong>
      </div>
    </a>
    
    <a href="/product/2" class="pm7-card pm7-card--interactive">
      <img src="/products/monitor.jpg" alt="Monitor" class="pm7-card-image">
      <div class="pm7-card-header">
        <h3 class="pm7-card-title">4K Monitor</h3>
      </div>
      <div class="pm7-card-content">
        <p>Ultra HD display for creative work</p>
        <strong>$599</strong>
      </div>
    </a>
  </div>
</body>
</html>
```

RESULT: Grid of clickable product cards with images

### Example: React Card Component
SCENARIO: Reusable card component
```jsx
import '@pm7/core/dist/pm7.css'

export function Card({ 
  title, 
  description, 
  image, 
  imageAlt,
  variant,
  compact,
  interactive,
  href,
  children,
  actions
}) {
  const classNames = [
    'pm7-card',
    variant && `pm7-card--${variant}`,
    compact && 'pm7-card--compact',
    interactive && 'pm7-card--interactive'
  ].filter(Boolean).join(' ')
  
  const CardWrapper = href ? 'a' : 'div'
  const wrapperProps = href ? { href } : {}
  
  return (
    <CardWrapper className={classNames} {...wrapperProps}>
      {image && (
        <img src={image} alt={imageAlt || ''} className="pm7-card-image" />
      )}
      {(title || description) && (
        <div className="pm7-card-header">
          {title && <h3 className="pm7-card-title">{title}</h3>}
          {description && <p className="pm7-card-description">{description}</p>}
        </div>
      )}
      <div className="pm7-card-content">
        {children}
      </div>
      {actions && (
        <div className="pm7-card-footer">
          {actions}
        </div>
      )}
    </CardWrapper>
  )
}

// Usage
<Card 
  title="Welcome"
  description="Get started with our platform"
  variant="elevated"
  actions={
    <button className="pm7-button pm7-button--primary">Get Started</button>
  }>
  <p>Create your first project in minutes</p>
</Card>
```

RESULT: Flexible React component supporting all card features

### Example: Dashboard Cards
SCENARIO: Admin dashboard with stats
```html
<div style="display: grid; gap: 1rem; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));">
  <div class="pm7-card">
    <div class="pm7-card-header">
      <h3 class="pm7-card-title">Total Users</h3>
    </div>
    <div class="pm7-card-content">
      <div style="font-size: 2rem; font-weight: bold;">1,234</div>
      <p style="color: var(--pm7-muted-foreground);">+12% from last month</p>
    </div>
  </div>
  
  <div class="pm7-card">
    <div class="pm7-card-header">
      <h3 class="pm7-card-title">Revenue</h3>
    </div>
    <div class="pm7-card-content">
      <div style="font-size: 2rem; font-weight: bold;">$45,678</div>
      <p style="color: var(--pm7-muted-foreground);">+8% from last month</p>
    </div>
  </div>
  
  <div class="pm7-card">
    <div class="pm7-card-header">
      <h3 class="pm7-card-title">Active Projects</h3>
    </div>
    <div class="pm7-card-content">
      <div style="font-size: 2rem; font-weight: bold;">89</div>
      <p style="color: var(--pm7-muted-foreground);">12 completed this week</p>
    </div>
  </div>
</div>
```

RESULT: Dashboard with stat cards in responsive grid

## Validation Checklist

STRUCTURE:
- [ ] Has pm7-card class
- [ ] Contains pm7-card-content wrapper
- [ ] Header elements in pm7-card-header
- [ ] Title uses pm7-card-title class

STYLING:
- [ ] Includes pm7.css
- [ ] Uses only documented classes
- [ ] No custom padding/margin
- [ ] Only one variant class

BEHAVIOR:
- [ ] Interactive cards have hover effects
- [ ] Link cards use proper a element
- [ ] No nested cards
- [ ] Images use pm7-card-image class

ACCESSIBILITY:
- [ ] Proper heading hierarchy
- [ ] Images have alt text
- [ ] Interactive cards keyboard accessible
- [ ] Focus indicators visible

## Related Components

- Button: For card actions
- Grid: For card layouts
- Dialog: Cards in modals
- Accordion: Expandable card-like sections