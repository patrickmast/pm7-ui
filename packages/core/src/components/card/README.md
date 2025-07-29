---
# MANDATORY METADATA
type: ai-agent-documentation
version: 2.0
component: Card
status: stable
audience: ai-coding-agents-only
human-readable: false

# COMPONENT METADATA
category: layout
dependencies:
  - component: button (for actions)
  - component: grid (for layout)
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

## Anti-Patterns

### Anti-Pattern: Missing Content Wrapper
NEVER:
```html
<div class="pm7-card">
  <h3>Direct heading without wrapper</h3>
  <p>Direct content without pm7-card-content wrapper</p>
</div>
```

BECAUSE: Padding and spacing calculations rely on content wrapper structure
INSTEAD:
```html
<div class="pm7-card">
  <div class="pm7-card-header">
    <h3 class="pm7-card-title">Properly wrapped heading</h3>
  </div>
  <div class="pm7-card-content">
    <p>Content inside proper wrapper</p>
  </div>
</div>
```

### Anti-Pattern: Nested Cards
NEVER:
```html
<div class="pm7-card">
  <div class="pm7-card-content">
    <div class="pm7-card">
      <div class="pm7-card-content">
        Nested card creates visual confusion
      </div>
    </div>
  </div>
</div>
```

BECAUSE: Creates visual confusion, double borders, and incorrect spacing accumulation
INSTEAD:
```html
<div class="pm7-card">
  <div class="pm7-card-content">
    <div class="pm7-section">
      <h4>Use sections for nested content</h4>
      <p>Or use pm7-card--ghost for subtle separation</p>
    </div>
  </div>
</div>
```

### Anti-Pattern: Multiple Conflicting Variants
NEVER:
```html
<div class="pm7-card pm7-card--outlined pm7-card--elevated pm7-card--ghost">
  <!-- Don't combine mutually exclusive variants -->
</div>
```

BECAUSE: Conflicting CSS properties create unpredictable rendering behavior
INSTEAD:
```html
<!-- Choose ONE visual variant -->
<div class="pm7-card pm7-card--elevated">
  <!-- Elevated OR outlined OR ghost, never multiple -->
</div>
```

### Anti-Pattern: Card as Form Container
NEVER:
```html
<form class="pm7-card">
  <input type="text" placeholder="Don't do this">
  <button type="submit">Submit</button>
</form>
```

BECAUSE: Card is not a semantic form element and lacks form-specific styling
INSTEAD:
```html
<form>
  <div class="pm7-card">
    <div class="pm7-card-content">
      <div class="pm7-form-group">
        <input type="text" class="pm7-input" placeholder="Proper form structure">
      </div>
    </div>
    <div class="pm7-card-footer">
      <button type="submit" class="pm7-button pm7-button--primary">Submit</button>
    </div>
  </div>
</form>
```

### Anti-Pattern: Improper Image Usage
NEVER:
```html
<div class="pm7-card">
  <div class="pm7-card-content">
    <img src="image.jpg" alt="Wrong placement">
    <!-- Image inside content wrapper -->
  </div>
</div>
```

BECAUSE: Card images need special styling that only works as direct children
INSTEAD:
```html
<div class="pm7-card">
  <img src="image.jpg" alt="Correct placement" class="pm7-card-image">
  <div class="pm7-card-content">
    <!-- Content after image -->
  </div>
</div>
```

### Anti-Pattern: Custom Padding/Margin
NEVER:
```html
<div class="pm7-card" style="padding: 2rem;">
  <div class="pm7-card-content" style="margin: -1rem;">
    Don't override card spacing
  </div>
</div>
```

BECAUSE: Breaks the consistent spacing system and responsive behavior
INSTEAD:
```html
<!-- Use modifier classes -->
<div class="pm7-card pm7-card--compact">
  <div class="pm7-card-content">
    Use compact modifier for less padding
  </div>
</div>
```

## Attributes

| Attribute | Type | Values | Default | Required | Effect |
|-----------|------|--------|---------|----------|--------|
| class | string | pm7-card [variants] | - | YES | Applies card styling |
| href | string | URL | - | NO | When using a element for clickable cards |

> **Note**: Card component uses standard HTML attributes only. For PM7-specific data attributes used by other components, see [ATTRIBUTES.md](../../ATTRIBUTES.md).

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

## Complete Examples in Context

### Example: Product Listing with pm7-grid
SCENARIO: E-commerce product grid with filters and sorting
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <link rel="stylesheet" href="/node_modules/@pm7/core/dist/pm7.css">
  <title>Product Listing</title>
</head>
<body>
  <div class="pm7-container">
    <!-- Filter bar -->
    <div class="pm7-card pm7-card--ghost" style="margin-bottom: 2rem;">
      <div class="pm7-card-content">
        <div style="display: flex; gap: 1rem; align-items: center;">
          <select class="pm7-select">
            <option>All Categories</option>
            <option>Electronics</option>
            <option>Accessories</option>
          </select>
          <select class="pm7-select">
            <option>Sort by Price</option>
            <option>Sort by Name</option>
          </select>
        </div>
      </div>
    </div>

    <!-- Product grid using pm7-grid -->
    <div class="pm7-grid pm7-grid--responsive">
      <a href="/product/laptop-pro" class="pm7-card pm7-card--interactive">
        <img src="/images/laptop-pro.jpg" alt="Professional Laptop" class="pm7-card-image">
        <div class="pm7-card-header">
          <h3 class="pm7-card-title">Professional Laptop</h3>
        </div>
        <div class="pm7-card-content">
          <p class="pm7-text-muted">High-performance Intel i9, 32GB RAM</p>
          <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 1rem;">
            <strong style="font-size: 1.25rem;">$1,299</strong>
            <span class="pm7-badge pm7-badge--success">In Stock</span>
          </div>
        </div>
        <div class="pm7-card-footer">
          <button class="pm7-button pm7-button--primary pm7-button--block">
            Add to Cart
          </button>
        </div>
      </a>

      <a href="/product/4k-monitor" class="pm7-card pm7-card--interactive">
        <img src="/images/monitor-4k.jpg" alt="4K Monitor" class="pm7-card-image">
        <div class="pm7-card-header">
          <h3 class="pm7-card-title">4K HDR Monitor</h3>
        </div>
        <div class="pm7-card-content">
          <p class="pm7-text-muted">32" IPS display, 144Hz refresh rate</p>
          <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 1rem;">
            <strong style="font-size: 1.25rem;">$599</strong>
            <span class="pm7-badge pm7-badge--warning">Low Stock</span>
          </div>
        </div>
        <div class="pm7-card-footer">
          <button class="pm7-button pm7-button--primary pm7-button--block">
            Add to Cart
          </button>
        </div>
      </a>

      <a href="/product/wireless-mouse" class="pm7-card pm7-card--interactive">
        <img src="/images/mouse-wireless.jpg" alt="Wireless Mouse" class="pm7-card-image">
        <div class="pm7-card-header">
          <h3 class="pm7-card-title">Ergonomic Wireless Mouse</h3>
        </div>
        <div class="pm7-card-content">
          <p class="pm7-text-muted">Bluetooth 5.0, 6-month battery life</p>
          <div style="display: flex; justify-content: space-between; align-items: center; margin-top: 1rem;">
            <strong style="font-size: 1.25rem;">$49</strong>
            <span class="pm7-badge pm7-badge--success">In Stock</span>
          </div>
        </div>
        <div class="pm7-card-footer">
          <button class="pm7-button pm7-button--primary pm7-button--block">
            Add to Cart
          </button>
        </div>
      </a>
    </div>
  </div>
</body>
</html>
```

RESULT: Complete product listing page with responsive grid layout and interactive product cards

### Example: Dashboard with Mixed Card Types
SCENARIO: Admin dashboard combining stats, charts, and actions
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <link rel="stylesheet" href="/node_modules/@pm7/core/dist/pm7.css">
  <title>Admin Dashboard</title>
</head>
<body>
  <div class="pm7-container">
    <h1 class="pm7-heading pm7-heading--h1">Dashboard</h1>
    
    <!-- Stats row using pm7-grid -->
    <div class="pm7-grid pm7-grid--4" style="margin-bottom: 2rem;">
      <div class="pm7-card pm7-card--elevated">
        <div class="pm7-card-content">
          <div style="display: flex; justify-content: space-between; align-items: start;">
            <div>
              <p class="pm7-text-muted" style="margin-bottom: 0.5rem;">Total Revenue</p>
              <div style="font-size: 2rem; font-weight: bold;">$45,678</div>
              <p style="color: var(--pm7-success); font-size: 0.875rem;">
                ↑ 12% from last month
              </p>
            </div>
            <div class="pm7-icon pm7-icon--large" style="color: var(--pm7-primary);">
              <!-- Revenue icon SVG -->
            </div>
          </div>
        </div>
      </div>

      <div class="pm7-card pm7-card--elevated">
        <div class="pm7-card-content">
          <div style="display: flex; justify-content: space-between; align-items: start;">
            <div>
              <p class="pm7-text-muted" style="margin-bottom: 0.5rem;">Active Users</p>
              <div style="font-size: 2rem; font-weight: bold;">1,234</div>
              <p style="color: var(--pm7-success); font-size: 0.875rem;">
                ↑ 8% from last week
              </p>
            </div>
            <div class="pm7-icon pm7-icon--large" style="color: var(--pm7-info);">
              <!-- Users icon SVG -->
            </div>
          </div>
        </div>
      </div>

      <div class="pm7-card pm7-card--elevated">
        <div class="pm7-card-content">
          <div style="display: flex; justify-content: space-between; align-items: start;">
            <div>
              <p class="pm7-text-muted" style="margin-bottom: 0.5rem;">Conversion Rate</p>
              <div style="font-size: 2rem; font-weight: bold;">3.2%</div>
              <p style="color: var(--pm7-danger); font-size: 0.875rem;">
                ↓ 2% from last week
              </p>
            </div>
            <div class="pm7-icon pm7-icon--large" style="color: var(--pm7-warning);">
              <!-- Chart icon SVG -->
            </div>
          </div>
        </div>
      </div>

      <div class="pm7-card pm7-card--elevated">
        <div class="pm7-card-content">
          <div style="display: flex; justify-content: space-between; align-items: start;">
            <div>
              <p class="pm7-text-muted" style="margin-bottom: 0.5rem;">Support Tickets</p>
              <div style="font-size: 2rem; font-weight: bold;">89</div>
              <p style="color: var(--pm7-muted-foreground); font-size: 0.875rem;">
                12 pending response
              </p>
            </div>
            <div class="pm7-icon pm7-icon--large" style="color: var(--pm7-secondary);">
              <!-- Ticket icon SVG -->
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Main content area with 2-column layout -->
    <div class="pm7-grid pm7-grid--sidebar">
      <!-- Recent Activity -->
      <div class="pm7-card">
        <div class="pm7-card-header">
          <h3 class="pm7-card-title">Recent Activity</h3>
          <p class="pm7-card-description">Latest user actions and system events</p>
        </div>
        <div class="pm7-card-content">
          <div class="pm7-list">
            <div class="pm7-list-item">
              <div class="pm7-list-item-content">
                <strong>New user registered</strong>
                <p class="pm7-text-muted">john.doe@example.com joined</p>
              </div>
              <span class="pm7-text-muted">2 min ago</span>
            </div>
            <div class="pm7-list-item">
              <div class="pm7-list-item-content">
                <strong>Order #1234 completed</strong>
                <p class="pm7-text-muted">$599 revenue added</p>
              </div>
              <span class="pm7-text-muted">15 min ago</span>
            </div>
            <div class="pm7-list-item">
              <div class="pm7-list-item-content">
                <strong>Server maintenance completed</strong>
                <p class="pm7-text-muted">All systems operational</p>
              </div>
              <span class="pm7-text-muted">1 hour ago</span>
            </div>
          </div>
        </div>
        <div class="pm7-card-footer">
          <a href="/activity" class="pm7-button pm7-button--secondary pm7-button--block">
            View All Activity
          </a>
        </div>
      </div>

      <!-- Quick Actions -->
      <div>
        <div class="pm7-card pm7-card--compact" style="margin-bottom: 1rem;">
          <div class="pm7-card-header">
            <h3 class="pm7-card-title">Quick Actions</h3>
          </div>
          <div class="pm7-card-content">
            <div style="display: grid; gap: 0.5rem;">
              <button class="pm7-button pm7-button--primary pm7-button--block">
                Create New Product
              </button>
              <button class="pm7-button pm7-button--secondary pm7-button--block">
                Export Reports
              </button>
              <button class="pm7-button pm7-button--secondary pm7-button--block">
                Manage Users
              </button>
            </div>
          </div>
        </div>

        <!-- System Status -->
        <div class="pm7-card pm7-card--outlined">
          <div class="pm7-card-header">
            <h3 class="pm7-card-title">System Status</h3>
          </div>
          <div class="pm7-card-content">
            <div class="pm7-list pm7-list--compact">
              <div class="pm7-list-item">
                <span>API Server</span>
                <span class="pm7-badge pm7-badge--success">Operational</span>
              </div>
              <div class="pm7-list-item">
                <span>Database</span>
                <span class="pm7-badge pm7-badge--success">Operational</span>
              </div>
              <div class="pm7-list-item">
                <span>CDN</span>
                <span class="pm7-badge pm7-badge--warning">Degraded</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</body>
</html>
```

RESULT: Complete dashboard layout demonstrating various card types and layouts working together

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

## Cross-Component Dependencies

### Required for Common Patterns

| Pattern | Required Components | Example |
|---------|-------------------|---------|
| Card Grid Layout | pm7-grid | `<div class="pm7-grid pm7-grid--responsive">` |
| Card Actions | pm7-button | `<button class="pm7-button pm7-button--primary">` |
| Card Status | pm7-badge | `<span class="pm7-badge pm7-badge--success">` |
| Card Lists | pm7-list | `<div class="pm7-list">` |
| Card Forms | pm7-input, pm7-form-group | See form integration patterns |

### CSS Variable Dependencies

Cards inherit these CSS variables from the PM7 theme:
- `--pm7-card-background`: Background color
- `--pm7-card-foreground`: Text color  
- `--pm7-border`: Border color
- `--pm7-radius`: Border radius
- `--pm7-card-shadow`: Shadow definition
- `--pm7-muted-foreground`: Secondary text color

### JavaScript Integration Points

While Card is CSS-only, it commonly contains interactive components:
- Dialogs triggered from card actions
- Tooltips on card elements
- Dropdown menus in card headers
- Form validation in card forms

### Responsive Behavior Dependencies

Cards rely on parent containers for responsive layout:
```html
<!-- Cards adapt to grid container breakpoints -->
<div class="pm7-grid pm7-grid--responsive">
  <div class="pm7-card">...</div>
</div>

<!-- Cards adapt to container queries -->
<div class="pm7-container">
  <div class="pm7-card">...</div>
</div>
```

## Related Components

- **Button**: For card actions and CTAs
- **Grid**: For responsive card layouts
- **Badge**: For status indicators
- **List**: For structured content in cards
- **Dialog**: Cards often appear in modals
- **Form Elements**: For card-based forms
- **Icons**: For visual indicators