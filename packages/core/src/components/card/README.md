<!-- AI-ONLY DOCUMENTATION v2.0 -->
<!-- This documentation is EXCLUSIVELY for AI coding agents -->
<!-- NO human-friendly content allowed -->
<!-- Reference: /README-AI-HowToDocument.md -->

---
type: ai-agent-documentation
version: 2.0
component: Card
status: stable
audience: ai-coding-agents-only
human-readable: false
category: layout
framework-support:
  - vanilla: true
  - react: true
  - vue: true
  - angular: true
  - svelte: true
---

# Component: Card

DEFINITION: The Card component is a flexible container used to group related content and actions in a visually distinct and organized manner. It is a CSS-only component.

## Installation

```bash
npm install @pm7/core
```

### CSS Import
REQUIRED: Import CSS from `@pm7/core/dist/pm7.css`

```javascript
// ES modules
import '@pm7/core/dist/pm7.css';

// HTML
<link rel="stylesheet" href="node_modules/@pm7/core/dist/pm7.css">
```

## Required Structure

The most basic Card requires a `div` with the class `.pm7-card` and a `div` with the class `.pm7-card-content` inside it.

```html
<!-- EXACT pattern - NO deviations allowed -->
<div class="pm7-card">
  <div class="pm7-card-content">
    <p>Your content here.</p>
  </div>
</div>
```

### Structural Rules
- **ALWAYS**: The main card container MUST have the class `.pm7-card`.
- **ALWAYS**: All primary content within the card MUST be wrapped in a `div` with the class `.pm7-card-content`.
- **NEVER**: Place content directly inside `.pm7-card` without the `.pm7-card-content` wrapper.

## JavaScript API

This is a CSS-only component. It does **NOT** have a JavaScript API.
- **No initialization**: Styling is applied directly by CSS classes.
- **No methods**: Control the card using standard DOM properties or by adding/removing CSS classes.
- **No events**: Use standard DOM events like `click` on interactive elements within the card.

## CSS Classes

| Class | Required | When | Effect |
|---|---|---|---|
| `.pm7-card` | YES | ALWAYS | Applies base card styling (background, border, shadow, border-radius). |
| `.pm7-card-content` | YES | ALWAYS | Provides internal padding for the card's main content. |
| `.pm7-card-header` | NO | For a distinct header section | Styles a header area with padding and a bottom border. |
| `.pm7-card-title` | NO | For the main title in the header | Styles the primary heading within the card header. |
| `.pm7-card-description` | NO | For a subtitle in the header | Styles a secondary text element within the card header. |
| `.pm7-card-footer` | NO | For a distinct footer section | Styles a footer area with padding and a top border. |
| `.pm7-card-image` | NO | For a full-width image at the top | Styles an `<img>` element to span the full width of the card. |
| `.pm7-card--outlined` | NO | For a card with a more prominent border | Removes shadow and adds a thicker border. |
| `.pm7-card--ghost` | NO | For a card with no border or shadow | Provides a transparent background with no visual separation. |
| `.pm7-card--elevated` | NO | For a card with a more pronounced shadow | Increases the shadow depth for emphasis. |
| `.pm7-card--interactive` | NO | For cards that respond to hover/focus | Adds subtle hover and focus effects. |
| `.pm7-card--compact` | NO | For a card with reduced internal padding | Decreases the padding inside `.pm7-card-content`. |

## Patterns

### Pattern: Card with Header and Footer
```html
<div class="pm7-card">
  <div class="pm7-card-header">
    <h3 class="pm7-card-title">Card Title</h3>
    <p class="pm7-card-description">Optional subtitle</p>
  </div>
  <div class="pm7-card-content">
    <p>Main content of the card.</p>
  </div>
  <div class="pm7-card-footer">
    <button class="pm7-button pm7-button--primary">Action</button>
  </div>
</div>
```

### Pattern: Card with Image
```html
<div class="pm7-card">
  <img src="https://via.placeholder.com/400x200" alt="Card Image" class="pm7-card-image">
  <div class="pm7-card-content">
    <h3>Image Card Title</h3>
    <p>Content related to the image.</p>
  </div>
</div>
```

### Pattern: Interactive Card (Clickable)
```html
<a href="/details" class="pm7-card pm7-card--interactive">
  <div class="pm7-card-content">
    <h3>Clickable Card</h3>
    <p>This entire card is a link.</p>
  </div>
</a>
```

## Anti-Patterns

### NEVER: Nest cards directly
```html
<!-- NEVER -->
<div class="pm7-card">
  <div class="pm7-card-content">
    <div class="pm7-card"> <!-- Nested Card -->
      <div class="pm7-card-content">...</div>
    </div>
  </div>
</div>

<!-- BECAUSE -->
Nesting cards creates visual clutter, double borders, and breaks the intended visual hierarchy. It also complicates spacing.

<!-- INSTEAD -->
// Use internal sections or other layout components for nested content within a single card.
<div class="pm7-card">
  <div class="pm7-card-content">
    <h4>Inner Section</h4>
    <p>Content for inner section.</p>
  </div>
</div>
```

### NEVER: Apply multiple visual variant classes
```html
<!-- NEVER -->
<div class="pm7-card pm7-card--outlined pm7-card--elevated">...</div>

<!-- BECAUSE -->
Variant classes like `--outlined`, `--ghost`, and `--elevated` are mutually exclusive. Applying more than one will result in conflicting styles and unpredictable appearance.

<!-- INSTEAD -->
<div class="pm7-card pm7-card--outlined">...</div> <!-- Choose only one -->
```

### NEVER: Use a Card as a direct form container
```html
<!-- NEVER -->
<form class="pm7-card">...</form>

<!-- BECAUSE -->
A Card is a presentational component, not a semantic form element. It lacks form-specific styling and behavior.

<!-- INSTEAD -->
<form>
  <div class="pm7-card">
    <div class="pm7-card-content">...</div>
  </div>
</form>
```

## Rules

### ALWAYS
- **ALWAYS**: Wrap all primary content within a card in `.pm7-card-content`.
- **ALWAYS**: Use semantic HTML elements (e.g., `<h3>` for titles, `<p>` for descriptions) within card sections.
- **ALWAYS**: For clickable cards, use an `<a>` element with `class="pm7-card pm7-card--interactive"`.

### NEVER
- **NEVER**: Nest cards directly within other cards.
- **NEVER**: Apply more than one visual variant class (e.g., `--outlined`, `--ghost`, `--elevated`) to a single card.
- **NEVER**: Manually override the internal padding or margins of card elements; use modifier classes like `--compact` instead.

## CSS Variables

### Component-Specific Variables

| Variable | Light Mode | Dark Mode | Usage |
|----------|------------|-----------|--------|
| `--pm7-card-radius` | `var(--pm7-radius-md)` | `var(--pm7-radius-md)` | Card border radius |
| `--pm7-card-border-width` | `1px` | `1px` | Border width |
| `--pm7-card-padding` | `var(--pm7-spacing-6)` | `var(--pm7-spacing-6)` | Default padding |
| `--pm7-card-padding-sm` | `var(--pm7-spacing-4)` | `var(--pm7-spacing-4)` | Small card padding |
| `--pm7-card-padding-lg` | `var(--pm7-spacing-8)` | `var(--pm7-spacing-8)` | Large card padding |
| `--pm7-card-shadow` | `var(--pm7-shadow)` | `var(--pm7-shadow)` | Default shadow |
| `--pm7-card-shadow-hover` | `var(--pm7-shadow-md)` | `var(--pm7-shadow-md)` | Hover shadow |
| `--pm7-card-footer-bg` | `#f7fafc` | `#1a1a1a` | Footer background |

### Required Global Variables

| Variable | Light Mode | Dark Mode | Usage in Card |
|----------|------------|-----------|---------------|
| `--pm7-surface` | `#ffffff` | `#1e1e1e` | Card background |
| `--pm7-foreground` | `#000000` | `#e0e0e0` | Card title text |
| `--pm7-muted-foreground` | `#333333` | `#e6e6e6` | Description text |
| `--pm7-border` | `#e0e0e0` | `#444` | Card border, separators |
| `--pm7-success` | `#22c55e` | `#22c55e` | Success variant border/header |
| `--pm7-success-foreground` | `#ffffff` | `#ffffff` | Success variant text |
| `--pm7-warning` | `#f59e0b` | `#f59e0b` | Warning variant border/header |
| `--pm7-warning-foreground` | `#ffffff` | `#ffffff` | Warning variant text |
| `--pm7-error` | `#ef4444` | `#ef4444` | Error variant border/header |
| `--pm7-error-foreground` | `#ffffff` | `#ffffff` | Error variant text |
| `--pm7-info` | `#3b82f6` | `#3b82f6` | Info variant border/header |
| `--pm7-info-foreground` | `#ffffff` | `#ffffff` | Info variant text |
| `--pm7-text-lg` | `1.125rem` | `1.125rem` | Title font size |
| `--pm7-text-sm` | `0.875rem` | `0.875rem` | Description font size |
| `--pm7-font-semibold` | `600` | `600` | Title font weight |
| `--pm7-leading-tight` | `1.25` | `1.25` | Title line height |
| `--pm7-leading-normal` | `1.5` | `1.5` | Description line height |
| `--pm7-spacing-1` | `0.25rem` | `0.25rem` | Small gaps |
| `--pm7-spacing-2` | `0.5rem` | `0.5rem` | Footer gaps |
| `--pm7-spacing-3` | `0.75rem` | `0.75rem` | Desktop footer gaps |
| `--pm7-spacing-6` | `1.5rem` | `1.5rem` | Grid gaps |
| `--pm7-radius-md` | `0.5rem` | `0.5rem` | Medium border radius |
| `--pm7-shadow-lg` | `0 10px 15px -3px rgb(0 0 0 / 0.1)` | `0 10px 15px -3px rgb(0 0 0 / 0.3)` | Elevated variant shadow |
| `--pm7-border-width-2` | `2px` | `2px` | Outlined variant border |

### Customization Example
```css
/* Custom card styling */
.my-app {
  --pm7-card-radius: 1rem;
  --pm7-card-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  --pm7-card-footer-bg: #f8f9fa;
  --pm7-card-padding: 2rem;
}

/* Flat cards without shadows */
.my-app {
  --pm7-card-shadow: none;
  --pm7-card-shadow-hover: none;
  --pm7-border: #dee2e6;
}
```

## Cross-Component Dependencies

### Works With
- **Button**: Often used in card footers for actions
- **Icons**: Card headers may include icons
- **Form Elements**: Cards frequently contain forms
- **Image**: Card images for visual content

### Conflicts With
- **Dialog**: Don't nest dialogs inside cards
- **Menu**: Use `.pm7-card--with-dropdown` when containing dropdowns

## Accessibility

- **Focus**: Interactive cards (`.pm7-card--interactive` on an `<a>` tag) are keyboard focusable.
- **Keyboard**: Standard keyboard navigation applies to interactive elements within the card.
- **ARIA**: No specific ARIA attributes are auto-applied by the Card component itself, as it is a layout component. Ensure content within the card follows ARIA best practices.
- **Screen reader**: Content is read in document order. Ensure logical content flow.

## Complete Example: User Profile Card

SCENARIO: Displaying a user's profile information in a compact card format.

```html
<div class="pm7-card pm7-card--elevated">
  <img src="https://via.placeholder.com/100" alt="Profile Picture" class="pm7-card-image" style="border-radius: 50%; width: 100px; height: 100px; margin: 1rem auto 0; display: block;">
  <div class="pm7-card-header" style="text-align: center;">
    <h3 class="pm7-card-title">Jane Doe</h3>
    <p class="pm7-card-description">Frontend Developer</p>
  </div>
  <div class="pm7-card-content" style="text-align: center;">
    <p>Passionate about building accessible and performant web applications.</p>
    <p class="pm7-text-muted">Location: New York, USA</p>
  </div>
  <div class="pm7-card-footer" style="display: flex; justify-content: center; gap: 0.5rem;">
    <button class="pm7-button pm7-button--primary pm7-button--sm">View Profile</button>
    <button class="pm7-button pm7-button--secondary pm7-button--sm">Message</button>
  </div>
</div>
```
