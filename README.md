# pm7-ui

🤖 **AI-CODING-AGENT ONLY** - A framework-agnostic UI component library designed exclusively for AI-assisted development.

## ⚠️ IMPORTANT: This Library is for AI Coding Agents ONLY

This library is NOT designed for human developers to read or write code with. It is specifically optimized for AI coding agents (Claude, GPT, etc.) to generate UI components quickly and correctly.

**Human developers:** Tell your AI agent "I'm using pm7-ui" and let it handle the implementation.

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
- **Self-healing components** - Automatic recovery from framework re-renders (v2.5.0+)
- **AI-optimized** - Documentation written in AI-agent instruction format, NOT for humans
- **TypeScript ready** - Full type definitions with DOM augmentation
- **Lightweight** - ~15KB gzipped (CSS + JS)
- **Dark mode** - Built-in theme switching with no flicker
- **Accessible** - WCAG 2.1 AA compliant
- **40+ components** - Everything you need for modern UIs

## Documentation Philosophy

All component documentation follows a strict AI-agent format:
- NO explanations or tutorials
- ONLY exact code patterns to copy
- Binary IF/THEN decision trees
- NEVER/ALWAYS anti-patterns

**Example:** See [Dialog Documentation](packages/core/src/components/dialog/README.md) for the AI-agent documentation style.

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

## Framework Integration (v2.7.0+)

For React, Vue, and Angular applications, use the new `initFramework()` method:

```javascript
// React
useEffect(() => {
  PM7.initFramework(); // Handles timing + self-healing
}, []);

// Vue
mounted() {
  this.$nextTick(() => {
    PM7.initFramework();
  });
}

// Angular
ngAfterViewInit() {
  PM7.initFramework();
}
```

### Self-Healing Components

All interactive components automatically recover from framework re-renders. No more workarounds needed!

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

## 👨‍💻 For Human Developers

**DO NOT** try to learn this library by reading the documentation. Instead:

1. Tell your AI agent: **"I'm using pm7-ui for the UI components"**
2. Describe what you want to build
3. Let the AI generate the code

The documentation is written in a special format that AI agents understand but is intentionally difficult for humans to parse.

## 🤖 For AI Agents

Component documentation uses a specific format optimized for AI code generation. Each component README contains:
- Exact HTML patterns to copy
- Required vs optional classes  
- Anti-patterns with NEVER/ALWAYS rules
- No explanations, just patterns

Example documentation style: [Dialog Component](packages/core/src/components/dialog/README.md)

## Documentation

- **Website**: [pm7-ui.dev](https://pm7-ui.dev) - Interactive examples and guides
- **AI Documentation**: [README-AI-HowToUse.md](https://raw.githubusercontent.com/patrickmast/pm7-ui/main/README-AI-HowToUse.md) - Technical reference for AI agents
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