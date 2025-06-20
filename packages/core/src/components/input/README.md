# Input

Input fields allow users to enter text information. They come in various types and can be enhanced with labels, hints, and validation states.

## Installation

```bash
npm install @pm7/core
```

## Usage

### Basic Input

```html
<input type="text" class="pm7-input" placeholder="Enter text...">
```

### Input with Label

```html
<div class="pm7-form-group">
  <label for="email" class="pm7-label">Email</label>
  <input type="email" id="email" class="pm7-input" placeholder="Enter your email">
</div>
```

### Input with Helper Text

```html
<div class="pm7-form-group">
  <label for="password" class="pm7-label">Password</label>
  <input type="password" id="password" class="pm7-input" placeholder="Enter password">
  <p class="pm7-helper-text">Must be at least 8 characters long</p>
</div>
```

### Input States

```html
<!-- Normal -->
<input type="text" class="pm7-input" placeholder="Normal input">

<!-- Disabled -->
<input type="text" class="pm7-input" placeholder="Disabled input" disabled>

<!-- Read-only -->
<input type="text" class="pm7-input" value="Read-only value" readonly>

<!-- Error state -->
<div class="pm7-form-group">
  <label for="username" class="pm7-label">Username</label>
  <input type="text" id="username" class="pm7-input pm7-input--error" placeholder="Choose username">
  <p class="pm7-error-text">Username already taken</p>
</div>

<!-- Success state -->
<div class="pm7-form-group">
  <label for="email-verify" class="pm7-label">Email</label>
  <input type="email" id="email-verify" class="pm7-input pm7-input--success" value="user@example.com">
  <p class="pm7-success-text">Email verified!</p>
</div>
```

### Input Sizes

```html
<!-- Small -->
<input type="text" class="pm7-input pm7-input--sm" placeholder="Small input">

<!-- Medium (default) -->
<input type="text" class="pm7-input" placeholder="Medium input">

<!-- Large -->
<input type="text" class="pm7-input pm7-input--lg" placeholder="Large input">
```

### Input Types

```html
<!-- Text -->
<input type="text" class="pm7-input" placeholder="Text input">

<!-- Email -->
<input type="email" class="pm7-input" placeholder="email@example.com">

<!-- Password -->
<input type="password" class="pm7-input" placeholder="Password">

<!-- Number -->
<input type="number" class="pm7-input" placeholder="0" min="0" max="100">

<!-- Date -->
<input type="date" class="pm7-input">

<!-- Search -->
<input type="search" class="pm7-input" placeholder="Search...">

<!-- URL -->
<input type="url" class="pm7-input" placeholder="https://example.com">

<!-- Tel -->
<input type="tel" class="pm7-input" placeholder="+1 (555) 000-0000">
```

### Textarea

```html
<!-- Basic textarea -->
<textarea class="pm7-textarea" rows="4" placeholder="Enter description..."></textarea>

<!-- Textarea with label -->
<div class="pm7-form-group">
  <label for="message" class="pm7-label">Message</label>
  <textarea id="message" class="pm7-textarea" rows="6" placeholder="Type your message here..."></textarea>
  <p class="pm7-helper-text">Maximum 500 characters</p>
</div>

<!-- Auto-resize textarea -->
<textarea class="pm7-textarea pm7-textarea--auto-resize" 
          placeholder="This textarea grows as you type..."></textarea>
```

### Select

```html
<!-- Basic select -->
<select class="pm7-select">
  <option value="">Choose an option</option>
  <option value="1">Option 1</option>
  <option value="2">Option 2</option>
  <option value="3">Option 3</option>
</select>

<!-- Select with label -->
<div class="pm7-form-group">
  <label for="country" class="pm7-label">Country</label>
  <select id="country" class="pm7-select">
    <option value="">Select country</option>
    <option value="us">United States</option>
    <option value="uk">United Kingdom</option>
    <option value="ca">Canada</option>
  </select>
</div>
```

### Checkbox and Radio

```html
<!-- Checkbox -->
<label class="pm7-checkbox">
  <input type="checkbox" class="pm7-checkbox-input">
  <span class="pm7-checkbox-label">I agree to the terms</span>
</label>

<!-- Radio buttons -->
<div class="pm7-radio-group">
  <label class="pm7-radio">
    <input type="radio" name="plan" value="basic" class="pm7-radio-input">
    <span class="pm7-radio-label">Basic Plan</span>
  </label>
  <label class="pm7-radio">
    <input type="radio" name="plan" value="pro" class="pm7-radio-input">
    <span class="pm7-radio-label">Pro Plan</span>
  </label>
  <label class="pm7-radio">
    <input type="radio" name="plan" value="enterprise" class="pm7-radio-input">
    <span class="pm7-radio-label">Enterprise Plan</span>
  </label>
</div>
```

### Input with Icons

```html
<!-- Icon on left -->
<div class="pm7-input-group">
  <svg class="pm7-input-icon pm7-input-icon--left" width="16" height="16">...</svg>
  <input type="search" class="pm7-input pm7-input--with-icon-left" placeholder="Search...">
</div>

<!-- Icon on right -->
<div class="pm7-input-group">
  <input type="password" class="pm7-input pm7-input--with-icon-right" placeholder="Password">
  <svg class="pm7-input-icon pm7-input-icon--right" width="16" height="16">...</svg>
</div>
```

## CSS Classes Reference

| Class | Description |
|-------|-------------|
| `pm7-input` | Base input class |
| `pm7-input--sm` | Small input size |
| `pm7-input--lg` | Large input size |
| `pm7-input--error` | Error state styling |
| `pm7-input--success` | Success state styling |
| `pm7-input--with-icon-left` | Input with left icon |
| `pm7-input--with-icon-right` | Input with right icon |
| `pm7-textarea` | Textarea styling |
| `pm7-textarea--auto-resize` | Auto-resizing textarea |
| `pm7-select` | Select dropdown styling |
| `pm7-checkbox` | Checkbox container |
| `pm7-checkbox-input` | Checkbox input |
| `pm7-checkbox-label` | Checkbox label |
| `pm7-radio` | Radio container |
| `pm7-radio-input` | Radio input |
| `pm7-radio-label` | Radio label |
| `pm7-radio-group` | Radio group container |
| `pm7-form-group` | Form field container |
| `pm7-label` | Form label |
| `pm7-helper-text` | Helper text |
| `pm7-error-text` | Error message text |
| `pm7-success-text` | Success message text |
| `pm7-input-group` | Input with icons container |
| `pm7-input-icon` | Icon styling |
| `pm7-input-icon--left` | Left icon positioning |
| `pm7-input-icon--right` | Right icon positioning |

## Form Layout

```html
<form class="pm7-form">
  <div class="pm7-form-group">
    <label for="name" class="pm7-label">Full Name</label>
    <input type="text" id="name" class="pm7-input" required>
  </div>
  
  <div class="pm7-form-group">
    <label for="email" class="pm7-label">Email</label>
    <input type="email" id="email" class="pm7-input" required>
    <p class="pm7-helper-text">We'll never share your email</p>
  </div>
  
  <div class="pm7-form-group">
    <label for="bio" class="pm7-label">Bio</label>
    <textarea id="bio" class="pm7-textarea" rows="4"></textarea>
  </div>
  
  <div class="pm7-form-group">
    <label class="pm7-checkbox">
      <input type="checkbox" class="pm7-checkbox-input" required>
      <span class="pm7-checkbox-label">I agree to the terms and conditions</span>
    </label>
  </div>
  
  <button type="submit" class="pm7-button pm7-button--primary">
    Submit
  </button>
</form>
```

## Validation

```html
<!-- Required field -->
<div class="pm7-form-group">
  <label for="required-field" class="pm7-label">
    Required Field <span style="color: var(--pm7-destructive);">*</span>
  </label>
  <input type="text" id="required-field" class="pm7-input" required>
</div>

<!-- Pattern validation -->
<div class="pm7-form-group">
  <label for="phone" class="pm7-label">Phone (US)</label>
  <input type="tel" id="phone" class="pm7-input" 
         pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
         placeholder="123-456-7890">
</div>

<!-- Min/Max validation -->
<div class="pm7-form-group">
  <label for="age" class="pm7-label">Age</label>
  <input type="number" id="age" class="pm7-input" min="18" max="100">
</div>
```

## Accessibility Features

- Proper label association with `for` attribute
- Required fields marked with `required` attribute
- Error messages associated with inputs using `aria-describedby`
- Disabled state properly communicated
- Keyboard navigation support
- Focus states clearly visible

## Best Practices

1. **Always use labels**: Every input should have an associated label
2. **Provide helper text**: Guide users with helpful hints
3. **Clear error messages**: Be specific about what went wrong
4. **Group related fields**: Use `pm7-form-group` for organization
5. **Mark required fields**: Use asterisk (*) or "required" text
6. **Appropriate input types**: Use semantic HTML5 input types

## Advanced Examples

### Search Input with Clear Button

```html
<div class="pm7-input-group">
  <svg class="pm7-input-icon pm7-input-icon--left" width="16" height="16">
    <!-- Search icon -->
  </svg>
  <input type="search" class="pm7-input pm7-input--with-icon-left pm7-input--with-icon-right" 
         placeholder="Search products..." value="laptop">
  <button class="pm7-input-icon pm7-input-icon--right" 
          style="background: none; border: none; cursor: pointer;"
          onclick="this.previousElementSibling.value = ''">
    <svg width="16" height="16">
      <!-- Clear icon -->
    </svg>
  </button>
</div>
```

### Password Input with Toggle

```html
<div class="pm7-form-group">
  <label for="password-toggle" class="pm7-label">Password</label>
  <div class="pm7-input-group">
    <input type="password" id="password-toggle" class="pm7-input pm7-input--with-icon-right">
    <button type="button" class="pm7-input-icon pm7-input-icon--right" 
            style="background: none; border: none; cursor: pointer;"
            onclick="togglePassword()">
      <svg width="16" height="16">
        <!-- Eye icon -->
      </svg>
    </button>
  </div>
</div>

<script>
function togglePassword() {
  const input = document.getElementById('password-toggle');
  input.type = input.type === 'password' ? 'text' : 'password';
}
</script>
```

### Credit Card Input

```html
<div class="pm7-form-group">
  <label for="card-number" class="pm7-label">Card Number</label>
  <input type="text" id="card-number" class="pm7-input" 
         placeholder="1234 5678 9012 3456"
         maxlength="19"
         pattern="[0-9\s]+">
</div>

<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
  <div class="pm7-form-group">
    <label for="expiry" class="pm7-label">Expiry</label>
    <input type="text" id="expiry" class="pm7-input" 
           placeholder="MM/YY" maxlength="5">
  </div>
  <div class="pm7-form-group">
    <label for="cvv" class="pm7-label">CVV</label>
    <input type="text" id="cvv" class="pm7-input" 
           placeholder="123" maxlength="3">
  </div>
</div>
```

## React Usage

When using @pm7/react:

```jsx
import { Input, Label, FormGroup, HelperText } from '@pm7/react';

function MyForm() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  return (
    <FormGroup>
      <Label htmlFor="email">Email</Label>
      <Input
        id="email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        error={!!error}
        placeholder="Enter your email"
      />
      {error && <HelperText variant="error">{error}</HelperText>}
    </FormGroup>
  );
}
```

## Related Components

- [Button](../button/) - For form submission
- [Card](../card/) - For form containers
- [Dialog](../dialog/) - For form modals