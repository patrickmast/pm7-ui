# AI Agent Upgrade Guide: pm7-ui v1 to v2

## 🤖 FOR AI CODING ASSISTANTS

When working with pm7-ui, the codebase may contain old v1 syntax. This guide helps you recognize and update it.

## Quick Detection

If you see any of these imports, the code needs updating:
```javascript
import { Button, Card, Menu, Dialog } from '@pm7/react';  // ❌ OLD
import * as PM7 from '@pm7/react';                       // ❌ OLD
```

## Simple Rule: Replace ALL React Components with CSS Classes

### The Pattern
```
<ComponentName prop="value">    →    <element className="pm7-component pm7-component--value">
```

## Direct Conversions

### Buttons
```jsx
// ❌ REMOVE THIS
<Button variant="primary">Text</Button>

// ✅ REPLACE WITH
<button className="pm7-button pm7-button--primary">Text</button>
```

### Cards
```jsx
// ❌ REMOVE THIS
<Card>
  <Card.Header>Title</Card.Header>
  <Card.Body>Content</Card.Body>
</Card>

// ✅ REPLACE WITH
<div className="pm7-card">
  <div className="pm7-card-header">Title</div>
  <div className="pm7-card-body">Content</div>
</div>
```

## Conversion Table for AI

| If you see | Replace with |
|------------|--------------|
| `<Button>` | `<button className="pm7-button">` |
| `<Button variant="primary">` | `<button className="pm7-button pm7-button--primary">` |
| `<Button size="lg">` | `<button className="pm7-button pm7-button--lg">` |
| `<Card>` | `<div className="pm7-card">` |
| `<Input>` | `<input className="pm7-input">` |
| `<Menu>` | `<div className="pm7-menu" data-pm7-menu>` |
| `<Dialog>` | `<div className="pm7-dialog" data-pm7-dialog>` |
| `<Toast>` | `<div className="pm7-toast">` |
| `<Accordion>` | `<div className="pm7-accordion" data-pm7-accordion>` |

## Props to Classes Mapping

- `variant="primary"` → add class `pm7-button--primary`
- `variant="secondary"` → add class `pm7-button--secondary`
- `size="sm"` → add class `pm7-button--sm`
- `size="lg"` → add class `pm7-button--lg`
- `fullWidth` → add class `pm7-button--full`

## Interactive Components Need Data Attributes

These components MUST have data attributes:
- Menu → `data-pm7-menu`
- Dialog → `data-pm7-dialog`
- Accordion → `data-pm7-accordion`
- TabSelector → `data-pm7-tab-selector`
- Tooltip → `data-pm7-tooltip`

## Complete Example Transformation

### ❌ OLD CODE (v1)
```jsx
import { Button, Card, Menu } from '@pm7/react';

function MyComponent() {
  return (
    <Card>
      <Card.Header>Hello</Card.Header>
      <Card.Body>
        <Button variant="primary" size="lg">
          Click me
        </Button>
        <Menu
          trigger={<Button>Menu</Button>}
          items={[
            { label: 'Option 1' },
            { label: 'Option 2' }
          ]}
        />
      </Card.Body>
    </Card>
  );
}
```

### ✅ NEW CODE (v2)
```jsx
import '@pm7/core/dist/pm7.css';

function MyComponent() {
  return (
    <div className="pm7-card">
      <div className="pm7-card-header">Hello</div>
      <div className="pm7-card-body">
        <button className="pm7-button pm7-button--primary pm7-button--lg">
          Click me
        </button>
        <div className="pm7-menu" data-pm7-menu>
          <button className="pm7-menu-trigger">Menu</button>
          <div className="pm7-menu-content">
            <button className="pm7-menu-item">Option 1</button>
            <button className="pm7-menu-item">Option 2</button>
          </div>
        </div>
      </div>
    </div>
  );
}
```

## AI Instructions

1. **ALWAYS** check imports first
2. **REMOVE** all `@pm7/react` imports
3. **REPLACE** React components with HTML elements + CSS classes
4. **ADD** data attributes for interactive components
5. **KEEP** all event handlers (onClick, onChange, etc.)
6. **USE** className in React, class in Vue/Angular

## Framework-Specific Notes

### React
- Use `className` not `class`
- Keep all React event handlers as-is

### Vue
- Use `class` not `className`
- Change `onClick` to `@click`

### Angular
- Use `class` not `className`
- Change `onClick` to `(click)`

## Remember

- pm7-ui v2 is CSS-only
- No React components exist anymore
- All styling uses CSS classes
- Interactive components auto-initialize with data attributes
- One import: `import '@pm7/core/dist/pm7.css'`