---
# MANDATORY METADATA
type: ai-agent-documentation
version: 1.0
component: Button
status: stable
audience: ai-coding-agents-only
human-readable: false

# COMPONENT METADATA
category: form
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
css-prefix: pm7-button
data-attribute: none
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

### Anti-Pattern: Missing Base Class
NEVER:
```html
<button class="pm7-button--primary">Button</button>
```

BECAUSE: Base class required for core styles
INSTEAD: See Pattern: Primary Action

### Anti-Pattern: Multiple Variants
NEVER:
```html
<button class="pm7-button pm7-button--primary pm7-button--secondary">
```

BECAUSE: Conflicting styles create undefined behavior
INSTEAD: Choose one variant

### Anti-Pattern: Div as Button
NEVER:
```html
<div class="pm7-button pm7-button--primary" onclick="handleClick()">
```

BECAUSE: Not keyboard accessible
INSTEAD: Use button element

### Anti-Pattern: Missing Type
NEVER:
```html
<button class="pm7-button">Submit</button>
```

BECAUSE: Defaults to submit, may cause unwanted form submission
INSTEAD: Always specify type attribute

## Attributes

| Attribute | Type | Values | Default | Required | Effect |
|-----------|------|--------|---------|----------|--------|
| type | string | button\|submit\|reset | submit | YES | Defines button behavior |
| class | string | pm7-button [variants] | - | YES | Applies styling |
| disabled | boolean | presence | - | NO | Disables interaction |
| aria-label | string | text | - | YES (icon-only) | Accessibility label |
| data-state | string | loading | - | NO | Shows loading state |

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

## Complete Examples

### Example: Form with Multiple Actions
SCENARIO: Form with save and cancel buttons
```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="/node_modules/@pm7/core/dist/pm7.css">
</head>
<body>
  <form id="user-form">
    <input type="text" name="username" placeholder="Username">
    <input type="email" name="email" placeholder="Email">
    
    <div style="display: flex; gap: 0.5rem; margin-top: 1rem;">
      <button type="submit" class="pm7-button pm7-button--primary">
        Save Changes
      </button>
      <button type="button" class="pm7-button pm7-button--secondary">
        Cancel
      </button>
    </div>
  </form>
</body>
</html>
```

RESULT: Form with properly styled action buttons

### Example: React Button Component
SCENARIO: Reusable button component
```jsx
import '@pm7/core/dist/pm7.css'

export function Button({ 
  children, 
  variant = 'secondary', 
  size, 
  loading, 
  icon, 
  onClick,
  type = 'button',
  fullWidth,
  ...props 
}) {
  const classNames = [
    'pm7-button',
    `pm7-button--${variant}`,
    size && `pm7-button--${size}`,
    fullWidth && 'pm7-button--full-width'
  ].filter(Boolean).join(' ')
  
  return (
    <button 
      type={type}
      className={classNames}
      disabled={loading || props.disabled}
      data-state={loading ? 'loading' : undefined}
      onClick={onClick}
      {...props}>
      {loading && (
        <svg className="pm7-spinner" width="16" height="16">
          <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.25"/>
          <path d="M8 2a6 6 0 0 1 0 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none"/>
        </svg>
      )}
      {!loading && icon && (
        <span className="pm7-button-icon">{icon}</span>
      )}
      <span>{children}</span>
    </button>
  )
}

// Usage
<Button variant="primary" icon={<SaveIcon />}>
  Save Document
</Button>
```

RESULT: Flexible React component with all PM7 button features

### Example: Action Toolbar
SCENARIO: Toolbar with multiple button types
```html
<div style="display: flex; gap: 0.5rem; align-items: center;">
  <button type="button" class="pm7-button pm7-button--primary">
    <svg class="pm7-button-icon" width="16" height="16">
      <path d="M12 2L2 7v10l10 5 10-5V7L12 2z"/>
    </svg>
    <span>New</span>
  </button>
  
  <div class="pm7-button-group">
    <button type="button" class="pm7-button pm7-button--outline pm7-button--sm">
      <svg width="16" height="16">
        <path d="M6 2L2 8l4 6"/>
      </svg>
    </button>
    <button type="button" class="pm7-button pm7-button--outline pm7-button--sm">
      <svg width="16" height="16">
        <path d="M10 2l4 6-4 6"/>
      </svg>
    </button>
  </div>
  
  <div style="margin-left: auto;">
    <button type="button" class="pm7-button pm7-button--ghost pm7-button--icon" aria-label="Settings">
      <svg width="20" height="20">
        <circle cx="10" cy="10" r="3"/>
        <path d="M10 0v4m0 12v4m10-10h-4m-12 0H0"/>
      </svg>
    </button>
    <button type="button" class="pm7-button pm7-button--destructive pm7-button--sm">
      Delete
    </button>
  </div>
</div>
```

RESULT: Toolbar with various button styles and grouping

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

## Related Components

- Button Group: For grouped button actions
- Menu: For dropdown button menus
- Dialog: Often triggered by buttons
- Toast: May contain action buttons