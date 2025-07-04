# Changelog

## [2.0.0] - 2025-01-04

### BREAKING CHANGES
- **Removed @pm7/react package** - pm7-ui is now a single package (@pm7/core) that works with all frameworks
- React components are no longer available as imports - use CSS classes directly

### Added
- Global `PM7` object with `init()` and `reinit()` helper functions
- AI Agent Guide documentation page
- Better auto-initialization for all interactive components
- Framework examples for React, Vue, Angular, and Svelte

### Changed
- Documentation now focuses on CSS-first approach
- All examples use plain HTML with CSS classes
- Simplified installation - only one package needed
- Updated all component documentation to remove React-specific examples

### Why This Change?
- **Simplicity**: One package instead of multiple framework-specific packages
- **Smaller bundles**: No framework wrapper overhead
- **AI-friendly**: Simple CSS classes work better with AI coding assistants
- **Future-proof**: Works with any framework, even ones that don't exist yet

### Migration Guide

If you were using @pm7/react:

```jsx
// Before (React components)
import { Button } from '@pm7/react';
<Button variant="primary">Click me</Button>

// After (CSS classes)
import '@pm7/core/dist/pm7.css';
<button className="pm7-button pm7-button--primary">Click me</button>
```

The functionality remains exactly the same - only the syntax has changed to use CSS classes instead of React components.