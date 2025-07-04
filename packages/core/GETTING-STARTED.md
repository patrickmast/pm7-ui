# pm7-ui - Getting Started Guide

## Installation

```bash
# For vanilla JavaScript projects
npm install @pm7/core

# For React projects  
npm install @pm7/react @pm7/core
```

## CSS Import (REQUIRED!)

⚠️ **CRITICAL**: You MUST import the pm7-ui CSS file in your application or the components will not be styled correctly.

### For ES Modules / React / Vue / Modern Frameworks

```javascript
import '@pm7/core/dist/pm7.css';
```

### For Vanilla HTML

```html
<link rel="stylesheet" href="node_modules/@pm7/core/dist/pm7.css">
```

### Via CDN

```html
<link rel="stylesheet" href="https://unpkg.com/@pm7/core/dist/pm7.css">
```

## Common Mistakes to Avoid

❌ **WRONG**: 
```javascript
import '@pm7/core/dist/index.css';  // This file does not exist!
```

✅ **CORRECT**: 
```javascript
import '@pm7/core/dist/pm7.css';   // Use this instead
```

## React Quick Start

```javascript
// 1. Import the CSS (only needed once in your app)
import '@pm7/core/dist/pm7.css';

// 2. Import components
import { Button, Card, CardHeader, CardContent } from '@pm7/react';

// 3. Use components
function App() {
  return (
    <Card>
      <CardHeader>
        <h2>Welcome</h2>
      </CardHeader>
      <CardContent>
        <Button variant="primary">Get Started</Button>
      </CardContent>
    </Card>
  );
}
```

## Vanilla JavaScript Quick Start

```html
<!DOCTYPE html>
<html>
<head>
  <!-- Include CSS -->
  <link rel="stylesheet" href="node_modules/@pm7/core/dist/pm7.css">
</head>
<body>
  <!-- Use components -->
  <button class="pm7-button pm7-button--primary">
    Click me
  </button>

  <!-- Include JavaScript for interactive components -->
  <script type="module">
    import { PM7Menu } from '@pm7/core';
    // Components auto-initialize or can be manually initialized
  </script>
</body>
</html>
```

## Next Steps

Now that you have pm7-ui installed and the CSS imported, you can start using individual components. Each component has its own documentation with specific examples and options.