# Callout

Callouts are used to highlight important information, tips, warnings, or errors with a distinctive visual style.

## Installation

```bash
npm install @pm7/core
```

## Usage

### Basic Callout

```html
<div class="pm7-callout">
  <div class="pm7-callout-body">
    This is a basic callout with default styling.
  </div>
</div>
```

### Callout with Header

```html
<div class="pm7-callout pm7-callout--info">
  <h4 class="pm7-callout-header">
    <svg class="pm7-callout-icon"><!-- info icon --></svg>
    Information
  </h4>
  <div class="pm7-callout-body">
    This is an informational message with an icon and header.
  </div>
</div>
```

### Variants

PM7 callouts come in several semantic variants:

```html
<!-- Info (default) -->
<div class="pm7-callout pm7-callout--info">
  <div class="pm7-callout-body">Informational message</div>
</div>

<!-- Success -->
<div class="pm7-callout pm7-callout--success">
  <div class="pm7-callout-body">Success! Operation completed.</div>
</div>

<!-- Warning -->
<div class="pm7-callout pm7-callout--warning">
  <div class="pm7-callout-body">Warning: Please review before proceeding.</div>
</div>

<!-- Error/Danger -->
<div class="pm7-callout pm7-callout--error">
  <div class="pm7-callout-body">Error: Something went wrong.</div>
</div>

<!-- Tip -->
<div class="pm7-callout pm7-callout--tip">
  <h4 class="pm7-callout-header">💡 Pro Tip</h4>
  <div class="pm7-callout-body">Here's a helpful tip!</div>
</div>

<!-- Neutral -->
<div class="pm7-callout pm7-callout--neutral">
  <div class="pm7-callout-body">Neutral information</div>
</div>
```

### Sizes

```html
<!-- Small -->
<div class="pm7-callout pm7-callout--info pm7-callout--sm">
  <div class="pm7-callout-body">Small callout</div>
</div>

<!-- Medium (default) -->
<div class="pm7-callout pm7-callout--info">
  <div class="pm7-callout-body">Medium callout</div>
</div>

<!-- Large -->
<div class="pm7-callout pm7-callout--info pm7-callout--lg">
  <div class="pm7-callout-body">Large callout</div>
</div>
```

### Modifiers

```html
<!-- No border -->
<div class="pm7-callout pm7-callout--info pm7-callout--no-border">
  <div class="pm7-callout-body">Callout without left border</div>
</div>

<!-- Centered -->
<div class="pm7-callout pm7-callout--info pm7-callout--center">
  <div class="pm7-callout-body">Centered callout text</div>
</div>

<!-- Pulse animation -->
<div class="pm7-callout pm7-callout--warning pm7-callout--pulse">
  <div class="pm7-callout-body">This callout pulses for attention</div>
</div>
```

### Complex Content

Callouts support rich content including links, code, and lists:

```html
<div class="pm7-callout pm7-callout--tip">
  <h4 class="pm7-callout-header">
    🚀 Getting Started
  </h4>
  <div class="pm7-callout-body">
    <p>Follow these steps to get started:</p>
    <ul>
      <li>Install with <code>npm install @pm7/core</code></li>
      <li>Import the CSS file</li>
      <li>Start using PM7 components</li>
    </ul>
    <p>
      For more information, visit our 
      <a href="/docs">documentation</a>.
    </p>
  </div>
</div>
```

## Examples

### AI Agent Tip
```html
<div class="pm7-callout pm7-callout--tip">
  <h4 class="pm7-callout-header">🤖 AI Tip</h4>
  <div class="pm7-callout-body">
    Tell your AI agent: "I'm using pm7-ui. Use CSS classes like pm7-button, pm7-card, etc."
  </div>
</div>
```

### Error Message
```html
<div class="pm7-callout pm7-callout--error">
  <h4 class="pm7-callout-header">
    <svg class="pm7-callout-icon" viewBox="0 0 16 16" fill="currentColor">
      <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
      <path d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0M7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0z"/>
    </svg>
    Error
  </h4>
  <div class="pm7-callout-body">
    Failed to save changes. Please check your connection and try again.
  </div>
</div>
```

### Important Note
```html
<div class="pm7-callout pm7-callout--warning pm7-callout--no-border">
  <h4 class="pm7-callout-header">⚠️ Important</h4>
  <div class="pm7-callout-body">
    This action cannot be undone. Make sure you have a backup before proceeding.
  </div>
</div>
```

## When to Use

- **Info**: General information, documentation notes, or neutral messages
- **Success**: Confirming successful operations or positive outcomes  
- **Warning**: Cautionary messages that require user attention
- **Error**: Error messages or critical issues
- **Tip**: Helpful hints, best practices, or pro tips
- **Neutral**: Generic callouts without semantic meaning

## Accessibility

- Use semantic HTML headings for callout headers
- Include descriptive text that doesn't rely solely on color
- Icons should be decorative with text providing the meaning
- Links within callouts have proper contrast and underlines

## CSS Classes Reference

| Class | Description |
|-------|-------------|
| **Base Classes** | |
| `pm7-callout` | Base callout class (required) |
| `pm7-callout-header` | Header/title element |
| `pm7-callout-body` | Body content container |
| `pm7-callout-icon` | Icon element styling |
| **Variants** | |
| `pm7-callout--info` | Info variant (blue) |
| `pm7-callout--success` | Success variant (green) |
| `pm7-callout--warning` | Warning variant (yellow) |
| `pm7-callout--error` | Error/danger variant (red) |
| `pm7-callout--danger` | Alias for error variant |
| `pm7-callout--tip` | Tip variant (primary color) |
| `pm7-callout--neutral` | Neutral variant (gray) |
| **Sizes** | |
| `pm7-callout--sm` | Small size |
| `pm7-callout--lg` | Large size |
| **Modifiers** | |
| `pm7-callout--no-border` | Remove left border |
| `pm7-callout--center` | Center align text |
| `pm7-callout--pulse` | Add pulse animation |

## Dark Mode

All callout variants automatically adapt to dark mode with appropriate color adjustments while maintaining proper contrast ratios.