# pm7-ui

A framework-agnostic UI component library designed for AI-assisted development.

## Overview

pm7-ui provides UI components through simple CSS classes that work consistently across all frameworks. Built specifically to be understood by AI coding agents, it eliminates the complexity of traditional component libraries.

```html
<!-- Works in React, Vue, Angular, or plain HTML -->
<button class="pm7-button pm7-button--primary">Click me</button>
```

## Installation

```bash
npm install @pm7/core
```

Import the CSS in your project:

```javascript
import '@pm7/core/dist/pm7.css';
```

## Features

- **Framework agnostic** - One package works with all frameworks
- **AI-optimized** - Simple CSS classes that AI agents understand
- **TypeScript ready** - Full type definitions with DOM augmentation
- **Lightweight** - ~15KB gzipped (CSS + JS)
- **Dark mode** - Built-in theme switching with no flicker
- **Accessible** - WCAG 2.1 AA compliant
- **40+ components** - Everything you need for modern UIs

## Quick Start

```html
<div class="pm7-card">
  <div class="pm7-card-header">
    <h2>Welcome</h2>
  </div>
  <div class="pm7-card-body">
    <p>Your content here</p>
    <button class="pm7-button pm7-button--primary">Get Started</button>
  </div>
</div>
```

## TypeScript Support

pm7-ui includes full TypeScript support with type definitions:

```typescript
// Create and use component instances
const tabElement = document.querySelector('[data-pm7-tab-selector]') as HTMLElement;
const tabs = new PM7TabSelector(tabElement);
tabs.selectTabById('settings-tab');

// Fully typed utilities
import { showToast, confirm } from '@pm7/core';

const toast = showToast({
  message: 'Success!',
  type: 'success',
  duration: 3000
});

const userConfirmed = await confirm('Delete this item?');
```

See [TypeScript documentation](packages/core/TYPESCRIPT.md) for complete details.

## For AI Development

Give your AI agent this documentation:

```
https://raw.githubusercontent.com/patrickmast/pm7-ui/main/AI-README.md
```

The AI-README contains complete technical documentation, examples, and patterns optimized for AI code generation.

## Documentation

- **Website**: [pm7-ui.dev](https://pm7-ui.dev) - Interactive examples and guides
- **AI Documentation**: [AI-README.md](https://raw.githubusercontent.com/patrickmast/pm7-ui/main/AI-README.md) - Technical reference for AI agents
- **TypeScript Guide**: [TYPESCRIPT.md](packages/core/TYPESCRIPT.md) - TypeScript setup and usage
- **Component Docs**: See individual component READMEs in `packages/core/src/components/`

## Components

pm7-ui includes all essential UI components:

- **Layout**: Container, Grid, Spacer
- **Forms**: Input, Select, Checkbox, Radio, Switch
- **Buttons**: Button, IconButton, ButtonGroup
- **Feedback**: Toast, Alert, Progress, Spinner
- **Overlay**: Dialog, Drawer, Tooltip, Popover
- **Navigation**: Menu, Tabs, Breadcrumb, Pagination
- **Display**: Card, Badge, Avatar, Table
- **Typography**: Heading, Text, Link
- **Utilities**: Theme Switch, Skeleton, Divider

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build packages
npm run build

# Run tests
npm run test
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/my-feature`)
3. Commit your changes (`git commit -m 'Add my feature'`)
4. Push to the branch (`git push origin feature/my-feature`)
5. Open a Pull Request

## License

MIT © Patrick Mast

## Links

- [GitHub](https://github.com/patrickmast/pm7-ui)
- [NPM](https://www.npmjs.com/package/@pm7/core)
- [Issues](https://github.com/patrickmast/pm7-ui/issues)