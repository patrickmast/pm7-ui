# PM7 UI

Framework-agnostic UI components for PM7 applications.

## Overview

PM7 UI provides a comprehensive set of UI components that work across different frameworks. Built with accessibility and performance in mind, these components offer consistent styling and behavior for all PM7 applications.

### Packages

- **@pm7/core** - Pure CSS and vanilla JavaScript components
- **@pm7/react** - React component wrappers
- **@pm7/vue** - Vue component wrappers (coming soon)

## Installation

```bash
# For vanilla HTML/CSS/JS projects
npm install @pm7/core

# For React projects
npm install @pm7/react

# For Vue projects (coming soon)
npm install @pm7/vue
```

## Usage

### Vanilla HTML/CSS/JS

```html
<!-- Include CSS -->
<link rel="stylesheet" href="node_modules/@pm7/core/dist/pm7.css">

<!-- Use components -->
<button class="pm7-button pm7-button--primary">
  Click me
</button>

<!-- Include JavaScript for interactive components -->
<script type="module">
  import { PM7Menu } from '@pm7/core';
  
  const menuElement = document.querySelector('[data-pm7-menu]');
  new PM7Menu(menuElement);
</script>
```

### React

```jsx
import { Button, Menu, Dialog } from '@pm7/react';

function App() {
  return (
    <div>
      <Button variant="primary" onClick={() => alert('Clicked!')}>
        Click me
      </Button>
      
      <Menu
        items={[
          { label: 'Option 1', onClick: () => {} },
          { label: 'Option 2', onClick: () => {} }
        ]}
      />
    </div>
  );
}
```

## Development

This is a monorepo managed with npm workspaces.

```bash
# Install dependencies
npm install

# Start development
npm run dev

# Build all packages
npm run build

# Run tests
npm run test

# Lint code
npm run lint
```

## Project Structure

```
pm7-ui/
├── packages/
│   ├── core/          # Pure CSS + vanilla JS
│   ├── react/         # React components
│   └── vue/           # Vue components
├── examples/
│   ├── vanilla/       # Vanilla HTML/JS examples
│   ├── react/         # React example app
│   └── vue/           # Vue example app
└── docs/              # Documentation
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

MIT © Patrick Mast