<!-- AI-ONLY DOCUMENTATION -->
---
type: ai-agent-documentation
audience: ai-coding-agents-only
style: exact-patterns
human-readable: false
documentation-rules:
  - NO storytelling or explanations
  - ONLY exact code patterns
  - Binary IF/THEN decisions
  - Explicit anti-patterns with NEVER/ALWAYS
  - Copy-paste ready code blocks
---

# Component: Input

Form input components for user data entry.

## Installation

```bash
npm install @pm7/core
```

### CSS Import

```javascript
// ES modules
import '@pm7/core/dist/pm7.css';

// HTML
<link rel="stylesheet" href="node_modules/@pm7/core/dist/pm7.css">
```

## Required Structure

### Text Input
```html
<input type="text" class="pm7-input">
```

### Input with Label
```html
<div class="pm7-form-group">
  <label for="input-id" class="pm7-label">Label</label>
  <input type="text" id="input-id" class="pm7-input">
</div>
```

### Textarea
```html
<textarea class="pm7-input" rows="4"></textarea>
```

### Select
```html
<select class="pm7-select">
  <option value="">Choose</option>
  <option value="1">Option 1</option>
</select>
```

### Checkbox
```html
<label class="pm7-checkbox">
  <input type="checkbox">
  <span class="pm7-checkbox-indicator"></span>
  <span class="pm7-checkbox-label">Label</span>
</label>
```

### Radio
```html
<label class="pm7-radio">
  <input type="radio" name="group">
  <span class="pm7-radio-indicator"></span>
  <span class="pm7-radio-label">Label</span>
</label>
```

### Switch
```html
<label class="pm7-switch">
  <input type="checkbox">
  <span class="pm7-switch-track">
    <span class="pm7-switch-thumb"></span>
  </span>
  <span class="pm7-switch-label">Label</span>
</label>
```

## CSS Classes

| Class | Required | Usage |
|-------|----------|-------|
| `.pm7-input` | YES | Base input/textarea class |
| `.pm7-input--sm` | NO | Small size |
| `.pm7-input--lg` | NO | Large size |
| `.pm7-input--error` | NO | Error state |
| `.pm7-input--success` | NO | Success state |
| `.pm7-input--with-icon-left` | NO | Left icon padding |
| `.pm7-input--with-icon-right` | NO | Right icon padding |
| `.pm7-input--no-resize` | NO | Disable textarea resize |
| `.pm7-select` | YES | Select element |
| `.pm7-select--sm` | NO | Small select |
| `.pm7-select--lg` | NO | Large select |
| `.pm7-checkbox` | YES | Checkbox container |
| `.pm7-checkbox-indicator` | YES | Checkbox visual |
| `.pm7-checkbox-label` | YES | Checkbox text |
| `.pm7-radio` | YES | Radio container |
| `.pm7-radio-indicator` | YES | Radio visual |
| `.pm7-radio-label` | YES | Radio text |
| `.pm7-switch` | YES | Switch container |
| `.pm7-switch-track` | YES | Switch background |
| `.pm7-switch-thumb` | YES | Switch toggle |
| `.pm7-switch-label` | YES | Switch text |
| `.pm7-form-group` | NO | Field container |
| `.pm7-label` | NO | Label element |
| `.pm7-label--required` | NO | Required indicator |
| `.pm7-helper-text` | NO | Helper text |
| `.pm7-helper-text--error` | NO | Error text |
| `.pm7-helper-text--success` | NO | Success text |
| `.pm7-input-icon-wrapper` | NO | Icon container |
| `.pm7-input-icon` | NO | Icon styling |
| `.pm7-input-icon--left` | NO | Left icon |
| `.pm7-input-icon--right` | NO | Right icon |
| `.pm7-input-group` | NO | Addon container |
| `.pm7-input-addon` | NO | Addon element |

## Patterns

### Pattern: Required Field
```html
<div class="pm7-form-group">
  <label for="name" class="pm7-label pm7-label--required">Name</label>
  <input type="text" id="name" class="pm7-input" required>
</div>
```

### Pattern: Field with Helper Text
```html
<div class="pm7-form-group">
  <label for="email" class="pm7-label">Email</label>
  <input type="email" id="email" class="pm7-input">
  <p class="pm7-helper-text">We'll never share your email</p>
</div>
```

### Pattern: Error State
```html
<div class="pm7-form-group">
  <label for="username" class="pm7-label">Username</label>
  <input type="text" id="username" class="pm7-input pm7-input--error" aria-invalid="true" aria-describedby="username-error">
  <p id="username-error" class="pm7-helper-text pm7-helper-text--error">Username already taken</p>
</div>
```

### Pattern: Success State
```html
<div class="pm7-form-group">
  <label for="email-verify" class="pm7-label">Email</label>
  <input type="email" id="email-verify" class="pm7-input pm7-input--success" value="user@example.com">
  <p class="pm7-helper-text pm7-helper-text--success">Email verified!</p>
</div>
```

### Pattern: Input with Left Icon
```html
<div class="pm7-input-icon-wrapper">
  <svg class="pm7-input-icon pm7-input-icon--left" width="16" height="16">...</svg>
  <input type="search" class="pm7-input pm7-input--with-icon-left" placeholder="Search...">
</div>
```

### Pattern: Input with Right Icon
```html
<div class="pm7-input-icon-wrapper">
  <input type="password" class="pm7-input pm7-input--with-icon-right" placeholder="Password">
  <svg class="pm7-input-icon pm7-input-icon--right" width="16" height="16">...</svg>
</div>
```

### Pattern: Input Group with Addon
```html
<div class="pm7-input-group">
  <span class="pm7-input-addon">https://</span>
  <input type="text" class="pm7-input" placeholder="yoursite.com">
</div>
```

### Pattern: Input Group with Button
```html
<div class="pm7-input-group">
  <input type="text" class="pm7-input" placeholder="Enter code">
  <button class="pm7-button pm7-button--primary">Apply</button>
</div>
```

### Pattern: Checkbox Group
```html
<div class="pm7-form-group">
  <p class="pm7-label">Select options:</p>
  <label class="pm7-checkbox">
    <input type="checkbox" checked>
    <span class="pm7-checkbox-indicator"></span>
    <span class="pm7-checkbox-label">Option 1</span>
  </label>
  <label class="pm7-checkbox">
    <input type="checkbox">
    <span class="pm7-checkbox-indicator"></span>
    <span class="pm7-checkbox-label">Option 2</span>
  </label>
</div>
```

### Pattern: Radio Group
```html
<div class="pm7-form-group">
  <p class="pm7-label">Choose one:</p>
  <label class="pm7-radio">
    <input type="radio" name="choice" value="1" checked>
    <span class="pm7-radio-indicator"></span>
    <span class="pm7-radio-label">Option 1</span>
  </label>
  <label class="pm7-radio">
    <input type="radio" name="choice" value="2">
    <span class="pm7-radio-indicator"></span>
    <span class="pm7-radio-label">Option 2</span>
  </label>
</div>
```

### Pattern: Switch Group
```html
<div class="pm7-form-group">
  <p class="pm7-label">Settings</p>
  <label class="pm7-switch">
    <input type="checkbox" checked>
    <span class="pm7-switch-track">
      <span class="pm7-switch-thumb"></span>
    </span>
    <span class="pm7-switch-label">Email notifications</span>
  </label>
  <label class="pm7-switch">
    <input type="checkbox">
    <span class="pm7-switch-track">
      <span class="pm7-switch-thumb"></span>
    </span>
    <span class="pm7-switch-label">SMS notifications</span>
  </label>
</div>
```

### Pattern: Non-resizable Textarea
```html
<textarea class="pm7-input pm7-input--no-resize" rows="4"></textarea>
```

### Pattern: Complete Form
```html
<form>
  <div class="pm7-form-group">
    <label for="form-name" class="pm7-label pm7-label--required">Name</label>
    <input type="text" id="form-name" class="pm7-input" required>
  </div>
  
  <div class="pm7-form-group">
    <label for="form-email" class="pm7-label pm7-label--required">Email</label>
    <input type="email" id="form-email" class="pm7-input" required>
    <p class="pm7-helper-text">We'll never share your email</p>
  </div>
  
  <div class="pm7-form-group">
    <label for="form-country" class="pm7-label">Country</label>
    <select id="form-country" class="pm7-select">
      <option value="">Select country</option>
      <option value="us">United States</option>
      <option value="uk">United Kingdom</option>
    </select>
  </div>
  
  <div class="pm7-form-group">
    <label for="form-bio" class="pm7-label">Bio</label>
    <textarea id="form-bio" class="pm7-input" rows="4"></textarea>
  </div>
  
  <div class="pm7-form-group">
    <label class="pm7-checkbox">
      <input type="checkbox" required>
      <span class="pm7-checkbox-indicator"></span>
      <span class="pm7-checkbox-label">I agree to the terms</span>
    </label>
  </div>
  
  <button type="submit" class="pm7-button pm7-button--primary">Submit</button>
</form>
```

## Input Types

IF type="text" THEN standard text input
IF type="email" THEN email validation
IF type="password" THEN masked input
IF type="number" THEN numeric input
IF type="tel" THEN telephone input
IF type="url" THEN URL validation
IF type="search" THEN search input
IF type="date" THEN date picker

## Anti-Patterns

### Anti-Pattern: Missing Form Group
```html
<!-- NEVER -->
<label class="pm7-label">Email</label>
<input type="email" class="pm7-input">

<!-- ALWAYS -->
<div class="pm7-form-group">
  <label for="email" class="pm7-label">Email</label>
  <input type="email" id="email" class="pm7-input">
</div>
```

### Anti-Pattern: Multiple Size Classes
```html
<!-- NEVER -->
<input class="pm7-input pm7-input--sm pm7-input--lg">

<!-- ALWAYS -->
<input class="pm7-input pm7-input--lg">
```

### Anti-Pattern: Missing Label Association
```html
<!-- NEVER -->
<label class="pm7-label">Email</label>
<input type="email" class="pm7-input">

<!-- ALWAYS -->
<label for="user-email" class="pm7-label">Email</label>
<input type="email" id="user-email" class="pm7-input">
```

### Anti-Pattern: Placeholder as Label
```html
<!-- NEVER -->
<input type="text" class="pm7-input" placeholder="Full Name">

<!-- ALWAYS -->
<div class="pm7-form-group">
  <label for="name" class="pm7-label">Full Name</label>
  <input type="text" id="name" class="pm7-input" placeholder="Enter your full name">
</div>
```

### Anti-Pattern: Wrong Checkbox Structure
```html
<!-- NEVER -->
<label class="pm7-checkbox">
  <input type="checkbox">
  Agree to terms
</label>

<!-- ALWAYS -->
<label class="pm7-checkbox">
  <input type="checkbox">
  <span class="pm7-checkbox-indicator"></span>
  <span class="pm7-checkbox-label">Agree to terms</span>
</label>
```

### Anti-Pattern: Missing ARIA for Errors
```html
<!-- NEVER -->
<input type="email" class="pm7-input pm7-input--error">

<!-- ALWAYS -->
<input type="email" class="pm7-input pm7-input--error" aria-invalid="true" aria-describedby="email-error">
<p id="email-error" class="pm7-helper-text pm7-helper-text--error">Invalid email</p>
```

## Rules

- ALWAYS: Use `pm7-form-group` to wrap field elements
- ALWAYS: Associate labels with inputs using `for` and `id`
- ALWAYS: Include all required spans for checkbox/radio/switch
- ALWAYS: Add `aria-invalid` and `aria-describedby` for errors
- ALWAYS: Use semantic HTML5 input types
- NEVER: Use placeholder as the only label
- NEVER: Mix multiple size modifier classes
- NEVER: Style states without proper ARIA attributes
- NEVER: Omit required structure elements

## CSS Variables

| Variable | Default | Usage |
|----------|---------|-------|
| `--pm7-input-height` | `2.5rem` | Default height |
| `--pm7-input-height-sm` | `2rem` | Small height |
| `--pm7-input-height-lg` | `3rem` | Large height |
| `--pm7-input-border-radius` | `0.375rem` | Border radius |
| `--pm7-input-border-width` | `1px` | Border width |
| `--pm7-input-padding-x` | `0.75rem` | Horizontal padding |
| `--pm7-input-focus-ring-width` | `2px` | Focus ring width |
| `--pm7-input-focus-ring-color` | `var(--pm7-primary)` | Focus color |
| `--pm7-input-font-size` | `0.875rem` | Default font size |
| `--pm7-input-font-size-sm` | `0.8125rem` | Small font size |
| `--pm7-input-font-size-lg` | `1rem` | Large font size |

## Attributes

| Attribute | Usage |
|-----------|-------|
| `type` | Input type |
| `placeholder` | Placeholder text |
| `disabled` | Disabled state |
| `readonly` | Read-only state |
| `required` | Required field |
| `pattern` | Validation pattern |
| `min`/`max` | Numeric limits |
| `minlength`/`maxlength` | Character limits |
| `rows` | Textarea rows |
| `aria-invalid` | Error state |
| `aria-describedby` | Helper text ID |

## Accessibility

- Label association via `for` and `id`
- Required fields marked with `required` attribute
- Error states with `aria-invalid="true"`
- Helper text linked with `aria-describedby`
- Keyboard navigation preserved
- Focus states visible

## Framework Usage

### React
```jsx
'use client'

<div className="pm7-form-group">
  <label htmlFor="react-input" className="pm7-label">Label</label>
  <input type="text" id="react-input" className="pm7-input" />
</div>
```

### Vue
```vue
<template>
  <div class="pm7-form-group">
    <label for="vue-input" class="pm7-label">Label</label>
    <input type="text" id="vue-input" class="pm7-input" v-model="value">
  </div>
</template>
```

### Next.js
```jsx
'use client'

export default function Form() {
  return (
    <form>
      <div className="pm7-form-group">
        <label htmlFor="name" className="pm7-label pm7-label--required">
          Name
        </label>
        <input 
          type="text" 
          id="name" 
          className="pm7-input" 
          required 
        />
      </div>
    </form>
  );
}
```

## Related Components

- Button: Form submission
- Card: Form containers
- Dialog: Form in modals
- Toast: Form feedback