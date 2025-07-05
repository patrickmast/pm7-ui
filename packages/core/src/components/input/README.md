# Input

Input fields allow users to enter text information. They come in various types and can be enhanced with labels, hints, and validation states.

## Installation

```bash
npm install @pm7/core
```

### CSS Import (Required!)

```javascript
// For React projects
import '@pm7/core/dist/pm7.css';

// For vanilla HTML
<link rel="stylesheet" href="node_modules/@pm7/core/dist/pm7.css">
```

⚠️ **Important**: The CSS file is located at `@pm7/core/dist/pm7.css`, NOT `@pm7/core/dist/index.css`.

### React Usage

If you're using the React components:

```bash
npm install @pm7/react @pm7/core
```

```javascript
import { Input } from '@pm7/react';
import '@pm7/core/dist/pm7.css'; // Don't forget this!
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

### Required Fields

```html
<div class="pm7-form-group">
  <label for="name" class="pm7-label pm7-label--required">Full Name</label>
  <input type="text" id="name" class="pm7-input" required>
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
  <p class="pm7-helper-text pm7-helper-text--error">Username already taken</p>
</div>

<!-- Success state -->
<div class="pm7-form-group">
  <label for="email-verify" class="pm7-label">Email</label>
  <input type="email" id="email-verify" class="pm7-input pm7-input--success" value="user@example.com">
  <p class="pm7-helper-text pm7-helper-text--success">Email verified!</p>
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
<textarea class="pm7-input" rows="4" placeholder="Enter description..."></textarea>

<!-- Textarea with label -->
<div class="pm7-form-group">
  <label for="message" class="pm7-label">Message</label>
  <textarea id="message" class="pm7-input" rows="6" placeholder="Type your message here..."></textarea>
  <p class="pm7-helper-text">Maximum 500 characters</p>
</div>

<!-- Non-resizable textarea -->
<textarea class="pm7-input pm7-input--no-resize" 
          rows="4" 
          placeholder="Fixed size textarea..."></textarea>
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

<!-- Disabled select -->
<select class="pm7-select" disabled>
  <option>Disabled select</option>
</select>
```

### Checkbox

```html
<!-- Basic checkbox -->
<label class="pm7-checkbox">
  <input type="checkbox">
  <span class="pm7-checkbox-indicator"></span>
  <span class="pm7-checkbox-label">I agree to the terms</span>
</label>

<!-- Checkbox group -->
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
  <label class="pm7-checkbox">
    <input type="checkbox" disabled>
    <span class="pm7-checkbox-indicator"></span>
    <span class="pm7-checkbox-label">Option 3 (disabled)</span>
  </label>
</div>
```

### Radio Buttons

```html
<!-- Radio group -->
<div class="pm7-form-group">
  <p class="pm7-label">Choose a plan:</p>
  <label class="pm7-radio">
    <input type="radio" name="plan" value="basic" checked>
    <span class="pm7-radio-indicator"></span>
    <span class="pm7-radio-label">Basic Plan - $9/month</span>
  </label>
  <label class="pm7-radio">
    <input type="radio" name="plan" value="pro">
    <span class="pm7-radio-indicator"></span>
    <span class="pm7-radio-label">Pro Plan - $19/month</span>
  </label>
  <label class="pm7-radio">
    <input type="radio" name="plan" value="enterprise">
    <span class="pm7-radio-indicator"></span>
    <span class="pm7-radio-label">Enterprise Plan - $49/month</span>
  </label>
</div>
```

### Switch/Toggle

```html
<!-- Basic switch -->
<label class="pm7-switch">
  <input type="checkbox">
  <span class="pm7-switch-track">
    <span class="pm7-switch-thumb"></span>
  </span>
  <span class="pm7-switch-label">Enable notifications</span>
</label>

<!-- Switch group -->
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
  <label class="pm7-switch">
    <input type="checkbox" disabled>
    <span class="pm7-switch-track">
      <span class="pm7-switch-thumb"></span>
    </span>
    <span class="pm7-switch-label">Push notifications (disabled)</span>
  </label>
</div>
```

### Input with Icons

```html
<!-- Icon on left -->
<div class="pm7-input-icon-wrapper">
  <svg class="pm7-input-icon pm7-input-icon--left" width="16" height="16">
    <!-- Search icon -->
  </svg>
  <input type="search" class="pm7-input pm7-input--with-icon-left" placeholder="Search...">
</div>

<!-- Icon on right -->
<div class="pm7-input-icon-wrapper">
  <input type="password" class="pm7-input pm7-input--with-icon-right" placeholder="Password">
  <svg class="pm7-input-icon pm7-input-icon--right" width="16" height="16">
    <!-- Lock icon -->
  </svg>
</div>

<!-- Icons on both sides -->
<div class="pm7-input-icon-wrapper">
  <svg class="pm7-input-icon pm7-input-icon--left" width="16" height="16">
    <!-- User icon -->
  </svg>
  <input type="email" class="pm7-input pm7-input--with-icon-left pm7-input--with-icon-right" 
         placeholder="Email" value="user@example.com">
  <svg class="pm7-input-icon pm7-input-icon--right" width="16" height="16">
    <!-- Check icon -->
  </svg>
</div>
```

### Input Groups with Addons

```html
<!-- Prefix addon -->
<div class="pm7-input-group">
  <span class="pm7-input-addon">https://</span>
  <input type="text" class="pm7-input" placeholder="yoursite.com">
</div>

<!-- Suffix addon -->
<div class="pm7-input-group">
  <input type="number" class="pm7-input" placeholder="0.00">
  <span class="pm7-input-addon">USD</span>
</div>

<!-- Both addons -->
<div class="pm7-input-group">
  <span class="pm7-input-addon">$</span>
  <input type="number" class="pm7-input" placeholder="0.00">
  <span class="pm7-input-addon">.00</span>
</div>

<!-- Button addon -->
<div class="pm7-input-group">
  <input type="text" class="pm7-input" placeholder="Enter coupon code">
  <button class="pm7-button pm7-button--primary">Apply</button>
</div>
```

## CSS Classes Reference

| Class | Description |
|-------|-------------|
| **Input Classes** | |
| `pm7-input` | Base input/textarea class |
| `pm7-input--sm` | Small input size |
| `pm7-input--lg` | Large input size |
| `pm7-input--error` | Error state styling |
| `pm7-input--success` | Success state styling |
| `pm7-input--with-icon-left` | Input with left icon padding |
| `pm7-input--with-icon-right` | Input with right icon padding |
| `pm7-input--no-resize` | Prevents textarea resizing |
| **Select Classes** | |
| `pm7-select` | Select dropdown styling |
| `pm7-select--sm` | Small select size |
| `pm7-select--lg` | Large select size |
| **Checkbox Classes** | |
| `pm7-checkbox` | Checkbox container |
| `pm7-checkbox-indicator` | Custom checkbox indicator |
| `pm7-checkbox-label` | Checkbox label text |
| **Radio Classes** | |
| `pm7-radio` | Radio container |
| `pm7-radio-indicator` | Custom radio indicator |
| `pm7-radio-label` | Radio label text |
| **Switch Classes** | |
| `pm7-switch` | Switch container |
| `pm7-switch-track` | Switch track background |
| `pm7-switch-thumb` | Switch thumb indicator |
| `pm7-switch-label` | Switch label text |
| **Layout Classes** | |
| `pm7-form-group` | Container for a form field (label, input, helper text) |
| `pm7-label` | Form label |
| `pm7-label--required` | Adds required asterisk |
| `pm7-helper-text` | Helper/hint text |
| `pm7-error-text` | Error message styling |
| `pm7-success-text` | Success message styling |
| **Icon & Group Classes** | |
| `pm7-input-icon-wrapper` | Container for input with icons |
| `pm7-input-icon` | Icon styling |
| `pm7-input-icon--left` | Left icon positioning |
| `pm7-input-icon--right` | Right icon positioning |
| `pm7-input-group` | Input group container (for addons) |
| `pm7-input-addon` | Prefix/suffix addon styling |

## CSS Customization

PM7 inputs can be customized using CSS custom properties:

```css
:root {
  /* Input sizing */
  --pm7-input-height: 2.5rem;
  --pm7-input-height-sm: 2rem;
  --pm7-input-height-lg: 3rem;
  
  /* Input styling */
  --pm7-input-border-radius: 0.375rem;
  --pm7-input-border-width: 1px;
  --pm7-input-padding-x: 0.75rem;
  
  /* Focus state */
  --pm7-input-focus-ring-width: 2px;
  --pm7-input-focus-ring-color: var(--pm7-primary);
  
  /* Typography */
  --pm7-input-font-size: 0.875rem;
  --pm7-input-font-size-sm: 0.8125rem;
  --pm7-input-font-size-lg: 1rem;
}
```

## Form Layout Example

```html
<form>
  <div class="pm7-form-group">
    <label for="name" class="pm7-label pm7-label--required">Full Name</label>
    <input type="text" id="name" class="pm7-input" required>
  </div>
  
  <div class="pm7-form-group">
    <label for="email" class="pm7-label pm7-label--required">Email</label>
    <input type="email" id="email" class="pm7-input" required>
    <p class="pm7-helper-text">We'll never share your email</p>
  </div>
  
  <div class="pm7-form-group">
    <label for="bio" class="pm7-label">Bio</label>
    <textarea id="bio" class="pm7-input" rows="4"></textarea>
  </div>
  
  <div class="pm7-form-group">
    <label class="pm7-checkbox">
      <input type="checkbox" required>
      <span class="pm7-checkbox-indicator"></span>
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
<!-- HTML5 validation -->
<div class="pm7-form-group">
  <label for="email-validate" class="pm7-label pm7-label--required">Email</label>
  <input type="email" 
         id="email-validate" 
         class="pm7-input" 
         required 
         pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}">
  <p class="pm7-helper-text">Enter a valid email address</p>
</div>

<!-- Pattern validation -->
<div class="pm7-form-group">
  <label for="phone" class="pm7-label">Phone (US)</label>
  <input type="tel" 
         id="phone" 
         class="pm7-input" 
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

- **Label association**: Use `for` attribute to link labels with inputs
- **Required fields**: Marked with `required` attribute and visual indicator
- **Error messages**: Associated with inputs using `aria-describedby`
- **Disabled state**: Properly communicated to screen readers
- **Keyboard navigation**: Full keyboard support including tab order
- **Focus states**: Clear visual focus indicators
- **Switch/checkbox state**: Announced correctly by screen readers

## Best Practices

1. **Always use labels**: Every input should have an associated label
2. **Provide helper text**: Guide users with helpful hints
3. **Clear error messages**: Be specific about what went wrong
4. **Group related fields**: Use `pm7-form-field` for organization
5. **Mark required fields**: Use `pm7-label--required` class
6. **Appropriate input types**: Use semantic HTML5 input types
7. **Consistent sizing**: Keep input sizes consistent within forms

## Advanced Examples

### Search Input with Clear Button

```html
<div class="pm7-form-group">
  <label for="search" class="pm7-label">Search Products</label>
  <div class="pm7-input-icon-wrapper">
    <svg class="pm7-input-icon pm7-input-icon--left" width="16" height="16">
      <!-- Search icon -->
    </svg>
    <input type="search" 
           id="search" 
           class="pm7-input pm7-input--with-icon-left pm7-input--with-icon-right" 
           placeholder="Search..." 
           value="laptop">
    <button class="pm7-input-icon pm7-input-icon--right" 
            type="button"
            style="background: none; border: none; cursor: pointer; padding: 0;"
            onclick="document.getElementById('search').value = ''"
            aria-label="Clear search">
      <svg width="16" height="16">
        <!-- X icon -->
      </svg>
    </button>
  </div>
</div>
```

### Password Input with Toggle

```html
<div class="pm7-form-group">
  <label for="password-toggle" class="pm7-label">Password</label>
  <div class="pm7-input-icon-wrapper">
    <input type="password" 
           id="password-toggle" 
           class="pm7-input pm7-input--with-icon-right">
    <button type="button" 
            class="pm7-input-icon pm7-input-icon--right" 
            style="background: none; border: none; cursor: pointer; padding: 0;"
            onclick="togglePassword()"
            aria-label="Toggle password visibility">
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
  <div class="pm7-input-group">
    <span class="pm7-input-addon">
      <svg width="20" height="16"><!-- Card icon --></svg>
    </span>
    <input type="text" 
           id="card-number" 
           class="pm7-input" 
           placeholder="1234 5678 9012 3456"
           maxlength="19"
           pattern="[0-9\s]+">
  </div>
</div>

<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
  <div class="pm7-form-group">
    <label for="expiry" class="pm7-label">Expiry</label>
    <input type="text" 
           id="expiry" 
           class="pm7-input" 
           placeholder="MM/YY" 
           maxlength="5">
  </div>
  <div class="pm7-form-group">
    <label for="cvv" class="pm7-label">CVV</label>
    <input type="text" 
           id="cvv" 
           class="pm7-input" 
           placeholder="123" 
           maxlength="3">
  </div>
</div>
```

### Settings Form with Mixed Controls

```html
<form>
  <h3>Notification Settings</h3>
  
  <div class="pm7-form-group">
    <label class="pm7-switch">
      <input type="checkbox" checked>
      <span class="pm7-switch-track">
        <span class="pm7-switch-thumb"></span>
      </span>
      <span class="pm7-switch-label">Email notifications</span>
    </label>
    <p class="pm7-helper-text">Receive updates about your account via email</p>
  </div>
  
  <div class="pm7-form-group">
    <p class="pm7-label">Notification frequency</p>
    <label class="pm7-radio">
      <input type="radio" name="frequency" value="instant" checked>
      <span class="pm7-radio-indicator"></span>
      <span class="pm7-radio-label">Instant</span>
    </label>
    <label class="pm7-radio">
      <input type="radio" name="frequency" value="daily">
      <span class="pm7-radio-indicator"></span>
      <span class="pm7-radio-label">Daily digest</span>
    </label>
    <label class="pm7-radio">
      <input type="radio" name="frequency" value="weekly">
      <span class="pm7-radio-indicator"></span>
      <span class="pm7-radio-label">Weekly summary</span>
    </label>
  </div>
  
  <div class="pm7-form-group">
    <label for="email-types" class="pm7-label">Email types to receive</label>
    <label class="pm7-checkbox">
      <input type="checkbox" checked>
      <span class="pm7-checkbox-indicator"></span>
      <span class="pm7-checkbox-label">Product updates</span>
    </label>
    <label class="pm7-checkbox">
      <input type="checkbox">
      <span class="pm7-checkbox-indicator"></span>
      <span class="pm7-checkbox-label">Security alerts</span>
    </label>
    <label class="pm7-checkbox">
      <input type="checkbox">
      <span class="pm7-checkbox-indicator"></span>
      <span class="pm7-checkbox-label">Marketing emails</span>
    </label>
  </div>
  
  <button type="submit" class="pm7-button pm7-button--primary">
    Save Settings
  </button>
</form>
```

## Data Attributes

| Attribute | Description | Example |
|-----------|-------------|---------|
| `type` | Input type (text, email, password, etc.) | `type="email"` |
| `placeholder` | Placeholder text | `placeholder="Enter email"` |
| `disabled` | Disabled state | `disabled` |
| `readonly` | Read-only state | `readonly` |
| `required` | Required field | `required` |
| `pattern` | Validation pattern | `pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"` |
| `min/max` | Min/max values for number inputs | `min="0" max="100"` |
| `minlength/maxlength` | Character limits | `maxlength="255"` |
| `autocomplete` | Autocomplete hints | `autocomplete="email"` |
| `aria-invalid` | Accessibility state for errors | `aria-invalid="true"` |
| `aria-describedby` | Link to helper text | `aria-describedby="email-error"` |

## Common Pitfalls

### ❌ Don't forget form-group wrapper
```html
<!-- Wrong - no wrapper -->
<label for="email" class="pm7-label">Email</label>
<input type="email" id="email" class="pm7-input">

<!-- Correct - with form-group -->
<div class="pm7-form-group">
  <label for="email" class="pm7-label">Email</label>
  <input type="email" id="email" class="pm7-input">
</div>
```

### ❌ Don't mix size modifiers
```html
<!-- Wrong - multiple size classes -->
<input type="text" class="pm7-input pm7-input--sm pm7-input--lg">

<!-- Correct - one size -->
<input type="text" class="pm7-input pm7-input--lg">
```

### ❌ Don't forget label associations
```html
<!-- Wrong - no for/id connection -->
<label class="pm7-label">Email</label>
<input type="email" class="pm7-input">

<!-- Correct - proper association -->
<label for="user-email" class="pm7-label">Email</label>
<input type="email" id="user-email" class="pm7-input">
```

### ❌ Don't style validation states without ARIA
```html
<!-- Wrong - visual only -->
<input type="email" class="pm7-input pm7-input--error">

<!-- Correct - with ARIA -->
<input type="email" class="pm7-input pm7-input--error" 
       aria-invalid="true" aria-describedby="email-error">
<p id="email-error" class="pm7-helper-text pm7-helper-text--error">
  Invalid email format
</p>
```

### ❌ Don't use placeholder as label
```html
<!-- Wrong - placeholder only -->
<input type="text" class="pm7-input" placeholder="Full Name">

<!-- Correct - label and placeholder -->
<div class="pm7-form-group">
  <label for="name" class="pm7-label">Full Name</label>
  <input type="text" id="name" class="pm7-input" 
         placeholder="Enter your full name">
</div>
```

### ❌ Don't forget checkbox/radio structure
```html
<!-- Wrong - missing indicator -->
<label class="pm7-checkbox">
  <input type="checkbox">
  Agree to terms
</label>

<!-- Correct - full structure -->
<label class="pm7-checkbox">
  <input type="checkbox">
  <span class="pm7-checkbox-indicator"></span>
  <span class="pm7-checkbox-label">Agree to terms</span>
</label>
```

## React Usage

```jsx
import { Input } from '@pm7/react';

// Basic input
<Input type="email" placeholder="Enter email" />

// With label and helper text
<div className="pm7-form-group">
  <label htmlFor="email" className="pm7-label pm7-label--required">
    Email
  </label>
  <Input 
    id="email"
    type="email" 
    placeholder="user@example.com"
    required
  />
  <p className="pm7-helper-text">We'll never share your email</p>
</div>

// With validation state
<Input 
  type="email" 
  variant="error"
  aria-invalid="true"
  aria-describedby="email-error"
/>

// Different sizes
<Input size="sm" placeholder="Small input" />
<Input size="md" placeholder="Medium input" />
<Input size="lg" placeholder="Large input" />

// Controlled component
const [value, setValue] = useState('');

<Input 
  value={value}
  onChange={(e) => setValue(e.target.value)}
  placeholder="Controlled input"
/>
```

### React Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `'default' \| 'error' \| 'success'` | `'default'` | Visual state |
| `size` | `'sm' \| 'md' \| 'lg'` | `'md'` | Input size |
| `type` | string | `'text'` | HTML input type |
| ...HTMLInputAttributes | - | - | All standard input props |

## Related Components

- [Button](../button/) - For form submission
- [Card](../card/) - For form containers
- [Dialog](../dialog/) - For form modals
- [Toast](../toast/) - For form feedback