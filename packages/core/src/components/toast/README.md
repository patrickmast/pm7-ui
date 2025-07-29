---
# MANDATORY METADATA
type: ai-agent-documentation
version: 2.0
component: Toast
status: stable
audience: ai-coding-agents-only
human-readable: false

# COMPONENT METADATA
category: feedback
dependencies:
  - component: button (optional for actions)
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
  manual: true
  import-required: true
css-prefix: pm7-toast
data-attribute: data-pm7-toast-viewport
javascript-class: PM7.Toast
---

# Component: Toast

DEFINITION: Toast = Temporary notification shown via JavaScript API
PURPOSE: Display non-blocking feedback messages
IMPORT: showToast, closeToast, closeAllToasts via @pm7/core

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

### JavaScript Setup

```javascript
// ES modules
import { showToast, closeToast, closeAllToasts } from '@pm7/core';

// Dynamic import (Next.js)
import('@pm7/core').then((module) => {
  const { showToast } = module;
  showToast({ title: 'Ready' });
});

// TypeScript declarations
declare global {
  interface Window {
    PM7: {
      showToast?: (options: ToastOptions) => string;
      closeToast?: (id: string) => void;
      closeAllToasts?: () => void;
    }
  }
}
```

## Usage

```javascript
import { showToast } from '@pm7/core';

showToast({
  title: 'Success',
  description: 'Operation completed'
});
```

## Options

| Option | Type | Default | Effect |
|--------|------|---------|--------|
| `title` | string | `''` | Toast title (required) |
| `description` | string | `''` | Toast message |
| `variant` | string | `'default'` | Style variant |
| `duration` | number | `5000` | Auto-dismiss ms (0 = persistent) |
| `action` | string | `null` | HTML for action buttons |
| `onClose` | function | `null` | Close callback |

## Variants

| Variant | Usage |
|---------|-------|
| `default` | General notifications |
| `success` | Success messages |
| `warning` | Warning messages |
| `destructive` | Error messages |
| `info` | Information messages |

## Patterns

### Pattern: Basic Toast
```javascript
showToast({
  title: 'Notification',
  description: 'This is a message'
});
```

### Pattern: Success Toast
```javascript
showToast({
  title: 'Success!',
  description: 'Changes saved',
  variant: 'success'
});
```

### Pattern: Error Toast
```javascript
showToast({
  title: 'Error',
  description: 'Operation failed',
  variant: 'destructive'
});
```

### Pattern: Toast with Action
```javascript
showToast({
  title: 'File uploaded',
  description: 'document.pdf',
  action: '<button class="pm7-button pm7-button--sm pm7-button--outline">View</button>'
});
```

### Pattern: Persistent Toast
```javascript
showToast({
  title: 'Action required',
  description: 'Please complete your profile',
  duration: 0
});
```

### Pattern: Custom Duration
```javascript
showToast({
  title: 'Important',
  description: 'This stays longer',
  duration: 10000
});
```

### Pattern: Manual Close
```javascript
const toastId = showToast({
  title: 'Processing...',
  duration: 0
});

setTimeout(() => {
  closeToast(toastId);
}, 3000);
```

### Pattern: Close All
```javascript
closeAllToasts();
```

### Pattern: With Callback
```javascript
showToast({
  title: 'Saved',
  description: 'Preferences updated',
  onClose: () => {
    console.log('Toast closed');
  }
});
```

### Pattern: Upload Progress
```javascript
const uploadToast = showToast({
  title: 'Uploading...',
  duration: 0
});

// After upload
closeToast(uploadToast);
showToast({
  title: 'Upload complete!',
  variant: 'success',
  action: '<button class="pm7-button pm7-button--sm">View</button>'
});
```

### Pattern: Error Handling
```javascript
try {
  await saveData();
  showToast({
    title: 'Saved',
    variant: 'success'
  });
} catch (error) {
  showToast({
    title: 'Error',
    description: error.message,
    variant: 'destructive',
    duration: 10000
  });
}
```

### Pattern: Dynamic Toast Addition
WHEN: Adding toast after page load
```javascript
// Add toast HTML
document.getElementById('container').innerHTML = `
  <button id="show-toast">Show Toast</button>
`;

// MUST initialize PM7 components
window.PM7.init();

// Then use showToast function
document.getElementById('show-toast').onclick = () => {
  window.PM7.showToast({
    title: 'Dynamic Toast',
    description: 'Added after page load'
  });
};
```

### Pattern: Next.js Implementation
```jsx
'use client'

import { useEffect } from 'react'

export default function ToastDemo() {
  useEffect(() => {
    import('@pm7/core').then(({ showToast }) => {
      window.showToast = showToast;
    });
  }, []);

  const handleClick = () => {
    window.showToast?.({
      title: 'Hello from Next.js',
      variant: 'success'
    });
  };

  return <button onClick={handleClick}>Show Toast</button>;
}
```

## Generated Structure

```html
<div class="pm7-toast-viewport" data-pm7-toast-viewport>
  <div class="pm7-toast pm7-toast--default" data-state="open">
    <div class="pm7-toast-header">
      <div>
        <h3 class="pm7-toast-title">Title</h3>
        <p class="pm7-toast-description">Description</p>
      </div>
      <button class="pm7-toast-close" aria-label="Close">&times;</button>
    </div>
    <div class="pm7-toast-action">
      <!-- Action HTML -->
    </div>
    <div class="pm7-toast-progress"></div>
  </div>
</div>
```

## CSS Classes

| Class | Auto-Applied | Usage |
|-------|--------------|-------|
| `.pm7-toast-viewport` | YES | Container for all toasts |
| `.pm7-toast` | YES | Individual toast |
| `.pm7-toast--default` | YES | Default variant |
| `.pm7-toast--success` | YES | Success variant |
| `.pm7-toast--warning` | YES | Warning variant |
| `.pm7-toast--destructive` | YES | Error variant |
| `.pm7-toast--info` | YES | Info variant |
| `.pm7-toast-header` | YES | Header container |
| `.pm7-toast-title` | YES | Title element |
| `.pm7-toast-description` | YES | Description element |
| `.pm7-toast-close` | YES | Close button |
| `.pm7-toast-action` | YES | Action container |
| `.pm7-toast-progress` | YES | Progress bar |

## Anti-Patterns

### Anti-Pattern: Missing Title
NEVER:
```javascript
showToast({
  description: 'No title provided'
});
```

BECAUSE: Screen readers need title for context
INSTEAD:
```javascript
showToast({
  title: 'Notification',
  description: 'Always include a title'
});
```

### Anti-Pattern: Long Duration for Simple Messages
NEVER:
```javascript
showToast({
  title: 'Saved',
  duration: 10000  // 10 seconds for simple message
});
```

BECAUSE: Users get annoyed by lingering simple notifications
INSTEAD:
```javascript
showToast({
  title: 'Saved',
  duration: 3000  // 3 seconds is enough
});
```

### Anti-Pattern: Critical Actions in Toast
NEVER:
```javascript
showToast({
  title: 'Delete account?',
  action: '<button onclick="deleteAccount()">Delete</button>',
  duration: 5000
});
```

BECAUSE:
- Toast auto-dismisses, user might miss it
- No confirmation step
- Destructive action needs user attention

INSTEAD: Use dialog for critical actions:
```javascript
const dialog = document.querySelector('[data-pm7-dialog="delete-account"]');
dialog.PM7Dialog.open();
```

### Anti-Pattern: Spam Toasts
NEVER:
```javascript
// Processing 50 items
items.forEach(item => {
  showToast({ 
    title: `Processed ${item.name}`,
    variant: 'success'
  });
});
// User sees 50 toasts stacked!
```

BECAUSE:
- Overwhelming visual noise
- Performance impact
- Important messages get lost

INSTEAD: Batch notifications:
```javascript
showToast({ 
  title: 'Processing complete',
  description: `Successfully processed ${items.length} items`,
  variant: 'success'
});
```

### Anti-Pattern: Manual Container Creation
NEVER:
```html
<!-- Manually creating toast structure -->
<div class="pm7-toast-viewport" data-pm7-toast-viewport>
  <div class="pm7-toast pm7-toast--success">
    <div class="pm7-toast-title">Success</div>
  </div>
</div>
```

BECAUSE:
- Missing required event handlers
- No auto-dismiss functionality
- Breaks toast stacking logic

INSTEAD: Always use JavaScript API:
```javascript
showToast({ 
  title: 'Success',
  variant: 'success' 
});
```

### Anti-Pattern: Blocking User Actions with Toasts
NEVER:
```javascript
// Show persistent toast that blocks interaction
showToast({
  title: 'Please wait...',
  description: 'Do not click anything',
  duration: 0,  // Never closes
  position: 'center'  // Covers content
});
```

BECAUSE:
- Toasts are non-modal by design
- User can't dismiss if needed
- Breaks expected toast behavior

INSTEAD: Use loading states or dialogs:
```javascript
// For page-blocking operations
const loadingDialog = document.querySelector('[data-pm7-dialog="loading"]');
loadingDialog.PM7Dialog.open();

// For inline loading
showToast({
  title: 'Saving changes...',
  duration: 0
});
// Then close when done
closeToast(toastId);
```

### Anti-Pattern: Complex HTML in Toast Content
NEVER:
```javascript
showToast({
  title: 'Update available',
  description: `
    <div class="update-details">
      <h4>Version 2.0 Changes:</h4>
      <ul>
        <li>New feature 1</li>
        <li>New feature 2</li>
        <li>Bug fixes</li>
      </ul>
      <div class="update-actions">
        <button>Install Now</button>
        <button>View Details</button>
        <select>
          <option>Remind me later</option>
          <option>Skip this version</option>
        </select>
      </div>
    </div>
  `
});
```

BECAUSE:
- Toasts are for brief messages
- Complex UI needs more space
- Poor mobile experience

INSTEAD: Use simple message with single action:
```javascript
showToast({
  title: 'Update available',
  description: 'Version 2.0 is ready to install',
  action: '<button class="pm7-button pm7-button--sm">View Details</button>',
  duration: 8000
});
```

### Anti-Pattern: Using Toasts for Form Validation
NEVER:
```javascript
// Showing validation errors as toasts
formFields.forEach(field => {
  if (!field.valid) {
    showToast({
      title: 'Validation error',
      description: `${field.label} is required`,
      variant: 'destructive'
    });
  }
});
```

BECAUSE:
- Multiple toasts stack and confuse
- User can't see error next to field
- Toasts disappear while user is fixing

INSTEAD: Use inline validation:
```javascript
// Show errors next to fields
formFields.forEach(field => {
  if (!field.valid) {
    field.element.classList.add('pm7-input--error');
    field.errorElement.textContent = `${field.label} is required`;
  }
});

// One summary toast if needed
if (hasErrors) {
  showToast({
    title: 'Please fix form errors',
    description: `${errorCount} fields need attention`,
    variant: 'destructive'
  });
}
```

## Rules

- ALWAYS: Include title for accessibility
- ALWAYS: Use appropriate variant for message type
- ALWAYS: Keep messages brief
- ALWAYS: Handle errors in action callbacks
- ALWAYS: Call window.PM7.init() after adding toasts dynamically
- NEVER: Use toasts for critical user decisions
- NEVER: Show multiple toasts for batch operations
- NEVER: Create viewport container manually
- NEVER: Use long durations for simple messages
- NEVER: Expect toast to work without PM7.init() for dynamic content

## JavaScript API

### Functions

| Function | Parameters | Type | Default | Required | Returns | Description |
|----------|------------|------|---------|----------|---------|-------------|
| showToast() | options | object | - | YES | string | Shows toast, returns unique ID |
| | options.title | string | - | YES | - | Toast title text |
| | options.description | string | '' | NO | - | Toast description text |
| | options.variant | string | 'default' | NO | - | Visual style: default, success, warning, destructive, info |
| | options.duration | number | 5000 | NO | - | Auto-dismiss milliseconds (0 = persistent) |
| | options.action | string | null | NO | - | HTML string for action buttons |
| | options.onClose | function | null | NO | - | Callback when toast closes |
| | options.position | string | 'bottom-right' | NO | - | Position: bottom-right, bottom-left, top-right, top-left |
| closeToast() | id | string | - | YES | void | Closes specific toast by ID |
| closeAllToasts() | - | - | - | - | void | Closes all active toasts |

### Toast Manager Methods

| Method | Parameters | Type | Returns | Description |
|--------|------------|------|---------|-------------|
| getInstance() | - | - | PM7Toast | Returns singleton instance |
| show() | options | object | string | Same as showToast() |
| close() | id | string | void | Same as closeToast() |
| closeAll() | - | - | void | Same as closeAllToasts() |
| getActiveToasts() | - | - | array | Returns array of active toast IDs |
| setDefaultOptions() | options | object | void | Sets default options for all toasts |

### Events

| Event | Bubbles | Cancelable | Detail | When Fired |
|-------|---------|------------|--------|------------|
| pm7-toast-show | YES | NO | {id: string, options: object} | After toast appears |
| pm7-toast-close | YES | NO | {id: string, reason: string} | After toast closes |
| pm7-toast-action | YES | NO | {id: string, action: string} | When action clicked |

### Instance Access

```javascript
// Via import
import { PM7Toast } from '@pm7/core';
const manager = PM7Toast.getInstance();

// Via window object
const manager = window.PM7.Toast.getInstance();

// Configure defaults
manager.setDefaultOptions({
  duration: 3000,
  position: 'top-right'
});
```

## Attributes

| Attribute | Values | Usage |
|-----------|---------|-------|
| `data-state` | `open`, `closed` | Visibility state |
| `data-swipe` | `end` | Swipe direction |
| `data-swipe-direction` | `right` | Allowed swipe |
| `aria-live` | `polite` | Screen reader |
| `aria-atomic` | `true` | Read entire content |
| `role` | `status` | ARIA role |

## Position

- Default: Bottom-right viewport
- Stack: Newer toasts appear above
- Spacing: 1rem between toasts
- Offset: 1rem from viewport edge

## Accessibility

- Screen reader announcements
- Keyboard accessible close button
- Does not steal focus
- Proper ARIA attributes

## Framework Usage

### React
```jsx
'use client'

import { showToast } from '@pm7/core'

<button onClick={() => showToast({ title: 'React Toast' })}>
  Show Toast
</button>
```

### Vue
```vue
<template>
  <button @click="notify">Show Toast</button>
</template>

<script>
import { showToast } from '@pm7/core'

export default {
  methods: {
    notify() {
      showToast({ title: 'Vue Toast' })
    }
  }
}
</script>
```

## Complete Examples in Context

### Example: E-commerce Cart Operations
SCENARIO: Shopping cart with real-time feedback
```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="/node_modules/@pm7/core/dist/pm7.min.css">
  <script type="module">
    import { showToast, closeToast } from '@pm7/core';
    window.showToast = showToast;
    window.closeToast = closeToast;
  </script>
</head>
<body>
  <div class="product-grid">
    <div class="product-card">
      <img src="/product1.jpg" alt="Wireless Headphones">
      <h3>Wireless Headphones</h3>
      <p>$199.99</p>
      <button class="pm7-button pm7-button--primary" onclick="addToCart('headphones', 199.99)">
        Add to Cart
      </button>
    </div>
  </div>
  
  <script>
    let cartTotal = 0;
    let cartItems = 0;
    
    async function addToCart(productName, price) {
      // Show loading toast
      const loadingToast = showToast({
        title: 'Adding to cart...',
        duration: 0
      });
      
      try {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000));
        
        // Update cart
        cartTotal += price;
        cartItems++;
        
        // Close loading toast
        closeToast(loadingToast);
        
        // Show success toast with actions
        showToast({
          title: 'Added to cart',
          description: `${productName} - $${price}`,
          variant: 'success',
          action: `
            <button class="pm7-button pm7-button--sm pm7-button--outline" onclick="viewCart()">
              View Cart (${cartItems})
            </button>
            <button class="pm7-button pm7-button--sm pm7-button--ghost" onclick="undoAdd('${productName}', ${price})">
              Undo
            </button>
          `,
          duration: 7000
        });
      } catch (error) {
        closeToast(loadingToast);
        showToast({
          title: 'Failed to add item',
          description: 'Please try again',
          variant: 'destructive'
        });
      }
    }
    
    function undoAdd(productName, price) {
      cartTotal -= price;
      cartItems--;
      showToast({
        title: 'Removed from cart',
        description: productName,
        variant: 'default'
      });
    }
    
    function viewCart() {
      // Navigate to cart or open cart modal
      console.log(`Cart has ${cartItems} items, total: $${cartTotal}`);
    }
    
    // Checkout process
    async function checkout() {
      const processingToast = showToast({
        title: 'Processing payment...',
        description: 'Please do not close this page',
        duration: 0
      });
      
      try {
        await processPament();
        closeToast(processingToast);
        
        showToast({
          title: 'Order confirmed!',
          description: `Order #${Math.random().toString(36).substr(2, 9).toUpperCase()}`,
          variant: 'success',
          action: '<button class="pm7-button pm7-button--sm" onclick="viewOrder()">View Order</button>',
          duration: 10000
        });
      } catch (error) {
        closeToast(processingToast);
        showToast({
          title: 'Payment failed',
          description: error.message,
          variant: 'destructive',
          action: '<button class="pm7-button pm7-button--sm" onclick="retryPayment()">Retry</button>',
          duration: 0
        });
      }
    }
  </script>
</body>
</html>
```

RESULT: Shopping experience with contextual toasts for cart operations, undo actions, and payment feedback

### Example: Form Validation and Submission
SCENARIO: Multi-step form with progressive validation
```html
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" href="/node_modules/@pm7/core/dist/pm7.min.css">
  <script type="module">
    import { showToast, PM7Toast } from '@pm7/core';
    
    // Configure toast defaults for this form
    const toastManager = PM7Toast.getInstance();
    toastManager.setDefaultOptions({
      position: 'top-right',
      duration: 4000
    });
    
    window.showToast = showToast;
    window.toastManager = toastManager;
  </script>
  <style>
    .form-container {
      max-width: 600px;
      margin: 2rem auto;
      padding: 2rem;
    }
    .form-group {
      margin-bottom: 1.5rem;
    }
    .form-actions {
      display: flex;
      gap: 1rem;
      margin-top: 2rem;
    }
  </style>
</head>
<body>
  <div class="form-container">
    <h1>Account Registration</h1>
    
    <form id="registration-form">
      <div class="form-group">
        <label class="pm7-label" for="email">Email</label>
        <input type="email" id="email" class="pm7-input" required>
      </div>
      
      <div class="form-group">
        <label class="pm7-label" for="password">Password</label>
        <input type="password" id="password" class="pm7-input" required>
        <small class="pm7-text-muted">At least 8 characters with uppercase, lowercase, and numbers</small>
      </div>
      
      <div class="form-group">
        <label class="pm7-label" for="username">Username</label>
        <input type="text" id="username" class="pm7-input" required>
      </div>
      
      <div class="form-actions">
        <button type="submit" class="pm7-button pm7-button--primary">
          Create Account
        </button>
        <button type="button" class="pm7-button pm7-button--secondary" onclick="saveDraft()">
          Save Draft
        </button>
      </div>
    </form>
  </div>
  
  <script>
    const form = document.getElementById('registration-form');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const usernameInput = document.getElementById('username');
    
    // Real-time validation
    emailInput.addEventListener('blur', async () => {
      if (!emailInput.value) return;
      
      if (!emailInput.validity.valid) {
        showToast({
          title: 'Invalid email',
          description: 'Please enter a valid email address',
          variant: 'warning'
        });
        return;
      }
      
      // Check if email exists
      const checkingToast = showToast({
        title: 'Checking email availability...',
        duration: 0
      });
      
      try {
        const exists = await checkEmailExists(emailInput.value);
        closeToast(checkingToast);
        
        if (exists) {
          showToast({
            title: 'Email already registered',
            description: 'Please use a different email or sign in',
            variant: 'destructive',
            action: '<button class="pm7-button pm7-button--sm" onclick="goToLogin()">Sign In</button>'
          });
        } else {
          showToast({
            title: 'Email available',
            variant: 'success',
            duration: 2000
          });
        }
      } catch (error) {
        closeToast(checkingToast);
      }
    });
    
    // Password strength feedback
    passwordInput.addEventListener('input', () => {
      const password = passwordInput.value;
      if (password.length < 8) return;
      
      const strength = checkPasswordStrength(password);
      
      if (strength === 'weak') {
        showToast({
          title: 'Weak password',
          description: 'Add uppercase, lowercase, and numbers',
          variant: 'warning',
          duration: 3000
        });
      } else if (strength === 'strong') {
        showToast({
          title: 'Strong password',
          variant: 'success',
          duration: 2000
        });
      }
    });
    
    // Form submission
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      // Clear any existing toasts
      toastManager.closeAll();
      
      const submittingToast = showToast({
        title: 'Creating account...',
        description: 'This may take a moment',
        duration: 0
      });
      
      try {
        // Validate all fields
        const validation = validateForm();
        if (!validation.valid) {
          closeToast(submittingToast);
          showToast({
            title: 'Please fix the following:',
            description: validation.errors.join(', '),
            variant: 'destructive',
            duration: 6000
          });
          return;
        }
        
        // Submit form
        await submitRegistration({
          email: emailInput.value,
          password: passwordInput.value,
          username: usernameInput.value
        });
        
        closeToast(submittingToast);
        
        // Success with confirmation
        showToast({
          title: 'Account created!',
          description: 'Check your email to verify your account',
          variant: 'success',
          action: `
            <button class="pm7-button pm7-button--sm" onclick="resendVerification()">
              Resend Email
            </button>
          `,
          duration: 0
        });
        
        // Reset form
        form.reset();
        
      } catch (error) {
        closeToast(submittingToast);
        
        if (error.code === 'USERNAME_TAKEN') {
          showToast({
            title: 'Username already taken',
            description: 'Please choose a different username',
            variant: 'destructive'
          });
        } else {
          showToast({
            title: 'Registration failed',
            description: error.message,
            variant: 'destructive',
            duration: 8000
          });
        }
      }
    });
    
    // Save draft functionality
    function saveDraft() {
      const data = {
        email: emailInput.value,
        username: usernameInput.value
      };
      
      localStorage.setItem('registration-draft', JSON.stringify(data));
      
      showToast({
        title: 'Draft saved',
        description: 'Your progress has been saved',
        variant: 'info',
        action: '<button class="pm7-button pm7-button--sm pm7-button--ghost" onclick="clearDraft()">Clear</button>'
      });
    }
    
    function clearDraft() {
      localStorage.removeItem('registration-draft');
      showToast({
        title: 'Draft cleared',
        variant: 'default',
        duration: 2000
      });
    }
    
    // Utility functions
    async function checkEmailExists(email) {
      await new Promise(resolve => setTimeout(resolve, 1000));
      return email === 'test@example.com';
    }
    
    function checkPasswordStrength(password) {
      const hasUpper = /[A-Z]/.test(password);
      const hasLower = /[a-z]/.test(password);
      const hasNumber = /[0-9]/.test(password);
      const hasSpecial = /[^A-Za-z0-9]/.test(password);
      
      const score = [hasUpper, hasLower, hasNumber, hasSpecial].filter(Boolean).length;
      
      if (score <= 2) return 'weak';
      if (score === 3) return 'medium';
      return 'strong';
    }
    
    function validateForm() {
      const errors = [];
      
      if (!emailInput.validity.valid) {
        errors.push('Invalid email');
      }
      if (passwordInput.value.length < 8) {
        errors.push('Password too short');
      }
      if (usernameInput.value.length < 3) {
        errors.push('Username too short');
      }
      
      return {
        valid: errors.length === 0,
        errors
      };
    }
    
    async function submitRegistration(data) {
      await new Promise((resolve, reject) => {
        setTimeout(() => {
          if (data.username === 'admin') {
            reject({ code: 'USERNAME_TAKEN' });
          } else {
            resolve();
          }
        }, 2000);
      });
    }
  </script>
</body>
</html>
```

RESULT: Form with progressive validation feedback, draft saving, and comprehensive error handling

## Cross-Component Dependencies

### Toast with PM7 Buttons
When using buttons in toast actions:
```javascript
showToast({
  title: 'File uploaded',
  description: 'document.pdf (2.3 MB)',
  variant: 'success',
  action: `
    <div class="pm7-button-group pm7-button-group--sm">
      <button class="pm7-button pm7-button--sm pm7-button--primary">View</button>
      <button class="pm7-button pm7-button--sm pm7-button--ghost">Share</button>
    </div>
  `
});
```

NOTE: Button groups maintain proper spacing in toast actions

### Toast with PM7 Icons
For toasts with icon actions:
```javascript
showToast({
  title: 'Message sent',
  variant: 'success',
  action: `
    <button class="pm7-button pm7-button--sm pm7-button--ghost">
      <i class="pm7-icon pm7-icon--undo"></i>
      Undo
    </button>
  `
});
```

### Toast Triggered by Dialogs
Coordinating toasts with dialog actions:
```javascript
// After dialog confirmation
dialog.addEventListener('pm7-dialog-confirm', () => {
  showToast({
    title: 'Changes saved',
    description: 'Your preferences have been updated',
    variant: 'success'
  });
});
```

## Attribute Reference

For comprehensive attribute documentation including:
- Global PM7 attributes (data-pm7-*)
- State attributes (data-state, aria-*)
- Toast-specific attributes
- Framework-specific attributes

See: [ATTRIBUTES.md](../../ATTRIBUTES.md)

## Related Components

- Dialog: For important user decisions requiring confirmation
- Button: For toast actions and triggers
- Alert: For persistent, in-page notifications