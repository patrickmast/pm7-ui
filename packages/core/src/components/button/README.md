---
# MANDATORY METADATA
type: ai-agent-documentation
version: 2.0
component: Button
status: stable
audience: ai-coding-agents-only
human-readable: false

# COMPONENT METADATA
category: form
dependencies:
  - component: spinner (for loading states)
  - component: icon (for button icons)
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
css-prefix: pm7-button
data-attribute: data-state (for loading)
javascript-class: none
---

# Component: Button

DEFINITION: Button = HTML button or a element with class="pm7-button"
PURPOSE: Trigger user actions
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
<button type="button" class="pm7-button">
  Text
</button>
```

COMPLETE:
```html
<button 
  type="button|submit|reset"
  class="pm7-button pm7-button--[variant] pm7-button--[size] pm7-button--full-width pm7-gradient-border"
  disabled
  aria-label="Accessible name"
  data-state="loading">
  <svg class="pm7-button-icon" width="16" height="16">...</svg>
  <span>Text</span>
  <svg class="pm7-spinner" width="16" height="16">...</svg>
</button>
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
  - Use data attributes for buttons
  - Modify button behavior with JS

## Rules

### Rule: Base Class Required
IF button element
THEN MUST include class="pm7-button"
ELSE styles will not apply

EXAMPLE:
```html
<!-- IF button element -->
<button type="button" class="pm7-button">Button</button>

<!-- ELSE NEVER -->
<button type="button" class="pm7-button--primary">Button</button>
```

### Rule: Type Attribute
IF button element
THEN MUST include type="button|submit|reset"
ELSE defaults to submit in forms

EXAMPLE:
```html
<!-- IF standalone button -->
<button type="button" class="pm7-button">Click</button>

<!-- ELSE IF form submission -->
<button type="submit" class="pm7-button">Submit</button>
```

### Rule: Variant Selection
IF variant needed
THEN add ONE of: pm7-button--primary|secondary|outline|ghost|destructive|link
ELSE default gray styling

EXAMPLE:
```html
<!-- IF primary action -->
<button type="button" class="pm7-button pm7-button--primary">Save</button>

<!-- ELSE IF dangerous action -->
<button type="button" class="pm7-button pm7-button--destructive">Delete</button>
```

### Rule: Icon Placement
IF icon with text
THEN wrap icon in svg.pm7-button-icon AND text in span
ELSE spacing incorrect

EXAMPLE:
```html
<!-- IF icon with text -->
<button type="button" class="pm7-button">
  <svg class="pm7-button-icon" width="16" height="16">...</svg>
  <span>Save</span>
</button>

<!-- ELSE IF icon only -->
<button type="button" class="pm7-button pm7-button--icon" aria-label="Save">
  <svg width="20" height="20">...</svg>
</button>
```

### Rule: Loading State
IF loading
THEN add data-state="loading" AND disabled attribute
ELSE user can click during loading

EXAMPLE:
```html
<!-- IF loading -->
<button type="button" class="pm7-button" data-state="loading" disabled>
  <svg class="pm7-spinner" width="16" height="16">...</svg>
  <span>Loading...</span>
</button>
```

### Rule: Icon-Only Accessibility
IF icon-only button
THEN MUST add aria-label="descriptive text"
ELSE screen readers cannot announce

EXAMPLE:
```html
<!-- IF icon-only -->
<button type="button" class="pm7-button pm7-button--icon" aria-label="Open settings">
  <svg width="20" height="20">...</svg>
</button>
```

## Patterns

### Pattern: Primary Action
WHEN: Main action on page/form
USE:
```html
<button type="button" class="pm7-button pm7-button--primary">
  Save Changes
</button>
```

RESULT: Blue button with white text

### Pattern: Secondary Action
WHEN: Alternative actions
USE:
```html
<button type="button" class="pm7-button pm7-button--secondary">
  Cancel
</button>
```

RESULT: Gray button with subtle styling

### Pattern: Destructive Action
WHEN: Dangerous/irreversible actions
USE:
```html
<button type="button" class="pm7-button pm7-button--destructive">
  Delete Account
</button>
```

RESULT: Red button indicating danger

### Pattern: Button with Icon
WHEN: Need visual indicator with text
USE:
```html
<button type="button" class="pm7-button pm7-button--primary">
  <svg class="pm7-button-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
    <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/>
    <polyline points="17 21 17 13 7 13 7 21"/>
    <polyline points="7 3 7 8 15 8"/>
  </svg>
  <span>Save Document</span>
</button>
```

RESULT: Button with icon and proper spacing

### Pattern: Button Group
WHEN: Related actions together
USE:
```html
<div class="pm7-button-group">
  <button type="button" class="pm7-button pm7-button--outline">Left</button>
  <button type="button" class="pm7-button pm7-button--outline">Center</button>
  <button type="button" class="pm7-button pm7-button--outline">Right</button>
</div>
```

RESULT: Connected buttons with proper borders

### Pattern: Loading Button
WHEN: Async action in progress
USE:
```html
<button type="button" class="pm7-button pm7-button--primary" data-state="loading" disabled>
  <svg class="pm7-spinner" width="16" height="16" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" opacity="0.25"/>
    <path d="M12 2a10 10 0 0 1 0 20" stroke="currentColor" stroke-width="4" stroke-linecap="round"/>
  </svg>
  <span>Processing...</span>
</button>
```

RESULT: Disabled button with spinning loader

### Pattern: Slider Confirmation
WHEN: Require slide gesture to confirm
USE:
```html
<button type="button" class="pm7-button pm7-button--slider">
  <span class="pm7-button--slider-text">Slide to confirm</span>
  <span class="pm7-button--slider-handle"></span>
</button>
```

RESULT: Slide-to-confirm button (requires JS)

### Pattern: Gradient Border
WHEN: Premium/special actions
USE:
```html
<button type="button" class="pm7-button pm7-button--primary pm7-gradient-border">
  Upgrade to Pro
</button>

<!-- With color variant -->
<button type="button" class="pm7-button pm7-gradient-border pm7-gradient-border-purple">
  Premium Feature
</button>
```

RESULT: Button with animated gradient border

## Anti-Patterns

### Anti-Pattern: Missing Base Class
NEVER:
```html
<button class="pm7-button--primary">Save</button>
<button type="button" class="pm7-button--outline">Cancel</button>
```

BECAUSE: Base pm7-button class contains essential styles (padding, font, transitions)
INSTEAD:
```html
<button type="button" class="pm7-button pm7-button--primary">Save</button>
<button type="button" class="pm7-button pm7-button--outline">Cancel</button>
```

### Anti-Pattern: Multiple Variant Classes
NEVER:
```html
<button class="pm7-button pm7-button--primary pm7-button--secondary">
  Confusing Button
</button>
```

BECAUSE: Conflicting color and style properties create unpredictable appearance
INSTEAD:
```html
<!-- Choose ONE variant -->
<button type="button" class="pm7-button pm7-button--primary">
  Clear Primary Action
</button>
```

### Anti-Pattern: Non-Semantic Button Elements
NEVER:
```html
<div class="pm7-button pm7-button--primary" onclick="handleClick()">
  Fake Button
</div>
<span class="pm7-button" tabindex="0" role="button">
  Another Fake Button
</span>
```

BECAUSE: Lacks native keyboard support, ARIA semantics, and form participation
INSTEAD:
```html
<button type="button" class="pm7-button pm7-button--primary" onclick="handleClick()">
  Real Button
</button>
<!-- Or for navigation -->
<a href="/page" class="pm7-button pm7-button--primary">
  Navigation Button
</a>
```

### Anti-Pattern: Missing Type Attribute
NEVER:
```html
<button class="pm7-button pm7-button--primary">Submit</button>
<button class="pm7-button pm7-button--secondary">Cancel</button>
```

BECAUSE: Defaults to type="submit", causing unintended form submissions
INSTEAD:
```html
<button type="submit" class="pm7-button pm7-button--primary">Submit</button>
<button type="button" class="pm7-button pm7-button--secondary">Cancel</button>
```

### Anti-Pattern: Block Elements Inside Buttons
NEVER:
```html
<button type="button" class="pm7-button">
  <div>Line 1</div>
  <div>Line 2</div>
</button>

<button type="button" class="pm7-button">
  <h3>Title</h3>
  <p>Description</p>
</button>
```

BECAUSE: Block elements inside buttons violate HTML semantics and cause layout issues
INSTEAD:
```html
<button type="button" class="pm7-button">
  <span>Line 1</span>
  <span>Line 2</span>
</button>

<!-- Or use proper layout -->
<div class="pm7-card pm7-card--interactive">
  <h3>Title</h3>
  <p>Description</p>
  <button type="button" class="pm7-button pm7-button--primary">Action</button>
</div>
```

### Anti-Pattern: Inconsistent Icon Sizing
NEVER:
```html
<button type="button" class="pm7-button">
  <svg width="24" height="24">...</svg>
  <span>Large Icon</span>
</button>

<button type="button" class="pm7-button pm7-button--icon">
  <svg width="16" height="16">...</svg>
</button>
```

BECAUSE: Inconsistent icon sizes break visual hierarchy and alignment
INSTEAD:
```html
<!-- Standard buttons: 16x16 icons -->
<button type="button" class="pm7-button">
  <svg class="pm7-button-icon" width="16" height="16">...</svg>
  <span>Consistent Icon</span>
</button>

<!-- Icon-only buttons: 20x20 icons -->
<button type="button" class="pm7-button pm7-button--icon" aria-label="Action">
  <svg width="20" height="20">...</svg>
</button>
```

## Attributes

| Attribute | Type | Values | Default | Required | Effect |
|-----------|------|--------|---------|----------|--------|
| `type` | string | `button`\|`submit`\|`reset` | `submit` | YES | Defines button behavior in forms |
| `class` | string | `pm7-button` [variants] | - | YES | Applies PM7 button styling |
| `disabled` | boolean | presence | - | NO | Disables interaction and applies disabled styles |
| `aria-label` | string | descriptive text | - | YES (icon-only) | Accessibility label for screen readers |
| `data-state` | string | `loading` | - | NO | Shows loading spinner and disables button |
| `aria-pressed` | string | `true`\|`false` | - | NO | For toggle buttons in button groups |
| `href` | string | URL | - | NO | When using `<a>` element as button |

> **Note**: Button component uses minimal data attributes. For complete PM7 data attribute reference, see [ATTRIBUTES.md](../../ATTRIBUTES.md).

## CSS Classes

| Class | Purpose | Combinable | Parent Required |
|-------|---------|------------|------------------|
| .pm7-button | Base button styles | YES | NO |
| .pm7-button--primary | Primary action variant | NO* | .pm7-button |
| .pm7-button--secondary | Secondary action variant | NO* | .pm7-button |
| .pm7-button--outline | Outline variant | NO* | .pm7-button |
| .pm7-button--ghost | Ghost variant | NO* | .pm7-button |
| .pm7-button--destructive | Destructive variant | NO* | .pm7-button |
| .pm7-button--link | Link style variant | NO* | .pm7-button |
| .pm7-button--slider | Slider variant | NO* | .pm7-button |
| .pm7-button--sm | Small size | YES | .pm7-button |
| .pm7-button--lg | Large size | YES | .pm7-button |
| .pm7-button--icon | Icon-only styling | YES | .pm7-button |
| .pm7-button--full-width | Full width | YES | .pm7-button |
| .pm7-gradient-border | Gradient border effect | YES | .pm7-button |
| .pm7-gradient-border-[color] | Colored gradient | YES | .pm7-gradient-border |
| .pm7-button-icon | Icon spacing | NO | button > svg |
| .pm7-spinner | Loading spinner | NO | button > svg |
| .pm7-button-group | Button group container | NO | NO |

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
| click | YES | YES | - | Native DOM event |
| submit | YES | YES | - | When type="submit" in form |

## Framework Integration

### React
```jsx
IF functional component:
  <button type="button" className="pm7-button pm7-button--primary">
    Click Me
  </button>

IF with props:
  <button 
    type={type || 'button'} 
    className={`pm7-button ${variant ? `pm7-button--${variant}` : ''}`}
    disabled={loading}
    data-state={loading ? 'loading' : undefined}>
    {children}
  </button>
```

### Vue
```vue
IF template:
  <button type="button" class="pm7-button pm7-button--primary">
    Click Me
  </button>

IF with bindings:
  <button 
    :type="type || 'button'"
    :class="['pm7-button', variant && `pm7-button--${variant}`]"
    :disabled="loading"
    :data-state="loading ? 'loading' : null">
    <slot />
  </button>
```

### Angular
```typescript
IF template:
  <button type="button" class="pm7-button pm7-button--primary">
    Click Me
  </button>

IF with bindings:
  <button 
    [type]="type || 'button'"
    [class]="'pm7-button ' + (variant ? 'pm7-button--' + variant : '')"
    [disabled]="loading"
    [attr.data-state]="loading ? 'loading' : null">
    <ng-content></ng-content>
  </button>
```

### Svelte
```svelte
IF component:
  <button type="button" class="pm7-button pm7-button--primary">
    Click Me
  </button>

IF with props:
  <button 
    type={type || 'button'}
    class="pm7-button {variant ? `pm7-button--${variant}` : ''}"
    disabled={loading}
    data-state={loading ? 'loading' : undefined}>
    <slot />
  </button>
```

## Complete Examples in Context

### Example: E-commerce Product Page Actions
SCENARIO: Product page with purchase flow and secondary actions
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <link rel="stylesheet" href="/node_modules/@pm7/core/dist/pm7.css">
  <title>Product Details</title>
</head>
<body>
  <div class="pm7-container">
    <div class="pm7-card">
      <img src="/product.jpg" alt="Product" class="pm7-card-image">
      <div class="pm7-card-content">
        <h1>Premium Headphones</h1>
        <p class="pm7-text-xl pm7-text-muted">$299.99</p>
        
        <!-- Primary purchase actions -->
        <div style="display: flex; gap: 0.5rem; margin-top: 2rem;">
          <button type="button" class="pm7-button pm7-button--primary pm7-button--lg pm7-button--full-width" id="add-to-cart">
            <svg class="pm7-button-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M9 2L3 9h6l3 12 6-17h-6L9 2z"/>
            </svg>
            <span>Add to Cart</span>
          </button>
          <button type="button" class="pm7-button pm7-button--outline pm7-button--lg pm7-button--icon" aria-label="Add to wishlist">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
            </svg>
          </button>
        </div>
        
        <!-- Secondary actions -->
        <div style="display: flex; gap: 0.5rem; margin-top: 1rem;">
          <button type="button" class="pm7-button pm7-button--ghost pm7-button--sm">
            <svg class="pm7-button-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8"/>
              <polyline points="16 6 12 2 8 6"/>
              <line x1="12" y1="2" x2="12" y2="15"/>
            </svg>
            <span>Share</span>
          </button>
          <button type="button" class="pm7-button pm7-button--ghost pm7-button--sm">
            <svg class="pm7-button-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
            </svg>
            <span>Compare</span>
          </button>
        </div>
        
        <!-- Loading state example -->
        <div style="margin-top: 2rem; padding: 1rem; background: var(--pm7-muted); border-radius: var(--pm7-radius);">
          <p class="pm7-text-sm pm7-text-muted">Loading state demo:</p>
          <button type="button" class="pm7-button pm7-button--primary" data-state="loading" disabled>
            <svg class="pm7-spinner" width="16" height="16" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" opacity="0.25"/>
              <path d="M12 2a10 10 0 0 1 0 20" stroke="currentColor" stroke-width="4" stroke-linecap="round"/>
            </svg>
            <span>Processing Order...</span>
          </button>
        </div>
      </div>
    </div>
  </div>
  
  <script>
    // Simulate loading state
    document.getElementById('add-to-cart').addEventListener('click', function() {
      this.setAttribute('data-state', 'loading');
      this.disabled = true;
      this.innerHTML = `
        <svg class="pm7-spinner" width="16" height="16" viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" opacity="0.25"/>
          <path d="M12 2a10 10 0 0 1 0 20" stroke="currentColor" stroke-width="4" stroke-linecap="round"/>
        </svg>
        <span>Adding to Cart...</span>
      `;
      
      setTimeout(() => {
        this.removeAttribute('data-state');
        this.disabled = false;
        this.innerHTML = `
          <svg class="pm7-button-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <polyline points="20 6 9 17 4 12"/>
          </svg>
          <span>Added to Cart!</span>
        `;
      }, 2000);
    });
  </script>
</body>
</html>
```

RESULT: Complete product page with various button states and interactions

### Example: Data Table with Row Actions
SCENARIO: Admin table with inline and bulk actions
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <link rel="stylesheet" href="/node_modules/@pm7/core/dist/pm7.css">
  <title>User Management</title>
</head>
<body>
  <div class="pm7-container">
    <!-- Toolbar with bulk actions -->
    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
      <div style="display: flex; gap: 0.5rem;">
        <button type="button" class="pm7-button pm7-button--primary">
          <svg class="pm7-button-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <line x1="12" y1="5" x2="12" y2="19"/>
            <line x1="5" y1="12" x2="19" y2="12"/>
          </svg>
          <span>Add User</span>
        </button>
        <button type="button" class="pm7-button pm7-button--secondary" disabled>
          <svg class="pm7-button-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path d="M3 6h18M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2m3 0v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6h14z"/>
          </svg>
          <span>Delete Selected (0)</span>
        </button>
      </div>
      
      <!-- Button group for view options -->
      <div class="pm7-button-group">
        <button type="button" class="pm7-button pm7-button--outline pm7-button--sm" aria-pressed="true">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <rect x="3" y="3" width="7" height="7"/>
            <rect x="14" y="3" width="7" height="7"/>
            <rect x="3" y="14" width="7" height="7"/>
            <rect x="14" y="14" width="7" height="7"/>
          </svg>
        </button>
        <button type="button" class="pm7-button pm7-button--outline pm7-button--sm">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <line x1="8" y1="6" x2="21" y2="6"/>
            <line x1="8" y1="12" x2="21" y2="12"/>
            <line x1="8" y1="18" x2="21" y2="18"/>
            <line x1="3" y1="6" x2="3.01" y2="6"/>
            <line x1="3" y1="12" x2="3.01" y2="12"/>
            <line x1="3" y1="18" x2="3.01" y2="18"/>
          </svg>
        </button>
      </div>
    </div>
    
    <!-- Data table -->
    <table class="pm7-table">
      <thead>
        <tr>
          <th><input type="checkbox"></th>
          <th>Name</th>
          <th>Email</th>
          <th>Role</th>
          <th>Status</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><input type="checkbox"></td>
          <td>John Doe</td>
          <td>john@example.com</td>
          <td>Admin</td>
          <td><span class="pm7-badge pm7-badge--success">Active</span></td>
          <td>
            <div style="display: flex; gap: 0.25rem;">
              <button type="button" class="pm7-button pm7-button--ghost pm7-button--sm pm7-button--icon" aria-label="Edit user">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
                  <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
                </svg>
              </button>
              <button type="button" class="pm7-button pm7-button--ghost pm7-button--sm pm7-button--icon" aria-label="View details">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                  <circle cx="12" cy="12" r="3"/>
                </svg>
              </button>
              <button type="button" class="pm7-button pm7-button--ghost pm7-button--sm pm7-button--icon pm7-button--destructive" aria-label="Delete user">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <polyline points="3 6 5 6 21 6"/>
                  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
                </svg>
              </button>
            </div>
          </td>
        </tr>
        <!-- More rows... -->
      </tbody>
    </table>
    
    <!-- Gradient border showcase -->
    <div style="margin-top: 3rem; padding: 2rem; background: var(--pm7-muted); border-radius: var(--pm7-radius);">
      <h3>Premium Actions</h3>
      <div style="display: flex; gap: 1rem; flex-wrap: wrap; margin-top: 1rem;">
        <button type="button" class="pm7-button pm7-button--primary pm7-gradient-border">
          Upgrade to Pro
        </button>
        <button type="button" class="pm7-button pm7-gradient-border pm7-gradient-border-purple">
          <svg class="pm7-button-icon" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
          </svg>
          <span>Premium Feature</span>
        </button>
        <button type="button" class="pm7-button pm7-button--outline pm7-gradient-border pm7-gradient-border-orange">
          Limited Time Offer
        </button>
      </div>
    </div>
  </div>
</body>
</html>
```

RESULT: Complete admin interface demonstrating button groups, icon buttons, and gradient borders

## Validation Checklist

STRUCTURE:
- [ ] Has pm7-button base class
- [ ] Has type attribute if button element
- [ ] Only one variant class applied
- [ ] Icon wrapped in pm7-button-icon class

STYLING:
- [ ] Includes pm7.css
- [ ] Uses only documented classes
- [ ] No custom cursor styles
- [ ] Preserves focus outline

BEHAVIOR:
- [ ] Disabled when loading
- [ ] No onClick when disabled
- [ ] Keyboard accessible
- [ ] Screen reader compatible

ACCESSIBILITY:
- [ ] aria-label on icon-only buttons
- [ ] Proper contrast ratios
- [ ] Focus indicators visible
- [ ] Keyboard navigation works

## Cross-Component Dependencies

### Required for Common Patterns

| Pattern | Required Components | Example |
|---------|-------------------|---------|
| Loading States | pm7-spinner | `<svg class="pm7-spinner" width="16" height="16">` |
| Button Icons | pm7 icon system | `<svg class="pm7-button-icon" width="16" height="16">` |
| Button Groups | pm7-button-group | `<div class="pm7-button-group">` |
| Dropdown Buttons | pm7-menu | Button as menu trigger |
| Dialog Actions | pm7-dialog | Buttons in dialog footers |

### CSS Variable Dependencies

Buttons inherit these CSS variables from the PM7 theme:
- `--pm7-primary`: Primary button background
- `--pm7-primary-foreground`: Primary button text
- `--pm7-secondary`: Secondary button background
- `--pm7-destructive`: Destructive button color
- `--pm7-border`: Outline button borders
- `--pm7-radius`: Button border radius
- `--pm7-ring`: Focus ring color

### Size Specifications

| Size | Height | Use Case |
|------|--------|----------|
| Default | 36px | Standard buttons |
| `sm` | 32px | Inline actions, dense UIs |
| `lg` | 44px | Primary CTAs, touch targets |
| `icon` | 36px | Square icon-only buttons |

### Icon Specifications

| Context | Icon Size | Notes |
|---------|-----------|-------|
| With text | 16x16px | Use `pm7-button-icon` class |
| Icon-only | 20x20px | Direct child of button |
| Loading spinner | 16x16px | Use `pm7-spinner` class |

### Interaction States

Buttons automatically handle:
- Hover: Subtle background change
- Active: Pressed appearance
- Focus: Visible focus ring
- Disabled: Reduced opacity, no pointer events
- Loading: Spinner icon, disabled state

## Related Components

- **Button Group**: For segmented button controls
- **Menu**: For dropdown menus triggered by buttons
- **Dialog**: Buttons commonly used in dialog actions
- **Card**: Buttons often appear in card footers
- **Form Elements**: Buttons submit forms
- **Toast**: May contain action buttons
- **Toolbar**: Common container for button groups