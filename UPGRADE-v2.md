# Upgrade Guide: pm7-ui v1 to v2

This guide helps you upgrade from pm7-ui v1.x to v2.0.

## Breaking Changes

### 🚨 @pm7/react Package Removed

The biggest change in v2 is that we've removed the `@pm7/react` package. pm7-ui is now a single package (`@pm7/core`) that works with all frameworks using CSS classes.

## Step-by-Step Upgrade

### 1. Update Your Dependencies

```bash
# Remove the old React package
npm uninstall @pm7/react

# Update to v2
npm install @pm7/core@^2.0.0
```

### 2. Update Your Imports

```javascript
// ❌ Old way (v1)
import { Button, Card, Menu } from '@pm7/react';
import '@pm7/core/dist/pm7.css';

// ✅ New way (v2)
import '@pm7/core/dist/pm7.css';
import '@pm7/core'; // Optional: for auto-initialization
```

### 3. Update Your Components

#### Buttons

```jsx
// ❌ Old way (v1)
<Button variant="primary" size="lg" onClick={handleClick}>
  Click me
</Button>

// ✅ New way (v2)
<button className="pm7-button pm7-button--primary pm7-button--lg" onClick={handleClick}>
  Click me
</button>
```

#### Cards

```jsx
// ❌ Old way (v1)
<Card>
  <Card.Header>Title</Card.Header>
  <Card.Body>Content</Card.Body>
  <Card.Footer>Footer</Card.Footer>
</Card>

// ✅ New way (v2)
<div className="pm7-card">
  <div className="pm7-card-header">Title</div>
  <div className="pm7-card-body">Content</div>
  <div className="pm7-card-footer">Footer</div>
</div>
```

#### Inputs

```jsx
// ❌ Old way (v1)
<Input 
  type="email" 
  placeholder="Enter email" 
  size="lg"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
/>

// ✅ New way (v2)
<input 
  type="email"
  className="pm7-input pm7-input--lg"
  placeholder="Enter email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
/>
```

#### Menus

```jsx
// ❌ Old way (v1)
<Menu
  trigger={<button>Open Menu</button>}
  items={[
    { label: 'Option 1', onClick: handleOption1 },
    { label: 'Option 2', onClick: handleOption2 }
  ]}
/>

// ✅ New way (v2)
<div className="pm7-menu" data-pm7-menu>
  <button className="pm7-menu-trigger">Open Menu</button>
  <div className="pm7-menu-content">
    <button className="pm7-menu-item" onClick={handleOption1}>Option 1</button>
    <button className="pm7-menu-item" onClick={handleOption2}>Option 2</button>
  </div>
</div>
```

#### Dialogs

```jsx
// ❌ Old way (v1)
<Dialog open={isOpen} onClose={handleClose}>
  <Dialog.Header>Title</Dialog.Header>
  <Dialog.Body>Content</Dialog.Body>
  <Dialog.Footer>
    <Button onClick={handleClose}>Close</Button>
  </Dialog.Footer>
</Dialog>

// ✅ New way (v2)
<div className="pm7-dialog" data-pm7-dialog data-state={isOpen ? "open" : "closed"}>
  <div className="pm7-dialog-overlay" onClick={handleClose}></div>
  <div className="pm7-dialog-content">
    <div className="pm7-dialog-header">
      <h2>Title</h2>
      <button className="pm7-dialog-close" onClick={handleClose}>×</button>
    </div>
    <div className="pm7-dialog-body">Content</div>
    <div className="pm7-dialog-footer">
      <button className="pm7-button" onClick={handleClose}>Close</button>
    </div>
  </div>
</div>
```

## Component Props to CSS Classes Mapping

### Button Variants
- `variant="primary"` → `pm7-button--primary`
- `variant="secondary"` → `pm7-button--secondary`
- `variant="outline"` → `pm7-button--outline`
- `variant="ghost"` → `pm7-button--ghost`
- `variant="destructive"` → `pm7-button--destructive`

### Sizes (Button, Input)
- `size="sm"` → `pm7-button--sm` or `pm7-input--sm`
- `size="md"` → (default, no class needed)
- `size="lg"` → `pm7-button--lg` or `pm7-input--lg`

### Other Props
- `fullWidth={true}` → `pm7-button--full`
- `disabled={true}` → `disabled` attribute
- `loading={true}` → Add your own loading state

## Auto-initialization

Interactive components (Menu, Dialog, Toast, Accordion, etc.) now auto-initialize when the DOM loads:

```javascript
// This happens automatically when you import the package
import '@pm7/core';

// Or manually initialize after adding dynamic content
PM7.init(); // Initialize all components on page
PM7.init(containerElement); // Initialize within specific container
```

## TypeScript

If you were using TypeScript with @pm7/react, you'll need to handle types yourself now:

```typescript
// Define your own types for props
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

// Use them in your components
function Button({ variant = 'primary', size = 'md', className, ...props }: ButtonProps) {
  const classes = `pm7-button pm7-button--${variant} pm7-button--${size} ${className || ''}`;
  return <button className={classes} {...props} />;
}
```

## Benefits of v2

1. **Smaller Bundle Size** - No React-specific code shipped
2. **Framework Agnostic** - Same classes work in React, Vue, Angular, etc.
3. **AI-Friendly** - Simple CSS classes that AI assistants understand
4. **Simpler API** - Just CSS classes, no complex props
5. **Better Performance** - Less JavaScript overhead

## Need Help?

- Check the [documentation](https://pm7-ui.vercel.app)
- View the [AI Guide](https://pm7-ui.vercel.app/ai-guide.html) for AI-assisted development
- Report issues on [GitHub](https://github.com/patrickmast/pm7-ui/issues)

## Quick Reference

```jsx
// Most common conversions
<Button>                    → <button className="pm7-button">
<Card>                      → <div className="pm7-card">
<Input>                     → <input className="pm7-input">
<Menu>                      → <div className="pm7-menu" data-pm7-menu>
<Dialog>                    → <div className="pm7-dialog" data-pm7-dialog>
<Toast>                     → <div className="pm7-toast">
<Accordion>                 → <div className="pm7-accordion" data-pm7-accordion>
<TabSelector>               → <div className="pm7-tab-selector" data-pm7-tab-selector>
<Tooltip>                   → <div className="pm7-tooltip" data-pm7-tooltip>
```

Remember: The functionality remains the same - only the syntax has changed!