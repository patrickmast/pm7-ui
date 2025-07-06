# pm7-ui - The First UI Library Built for AI Coding Agents 🤖

**Finally, a UI library that your AI coding agent actually understands.**

## Why pm7-ui?

Ever tried getting your AI to build a UI? It's frustrating. Complex component APIs, framework-specific syntax, inconsistent patterns... 

pm7-ui solves this with a radical approach: **pure CSS classes that work everywhere**.

```html
<!-- This works in React, Vue, Angular, or plain HTML -->
<button class="pm7-button pm7-button--primary">Click me</button>
```

No imports. No setup. No confusion. Just copy, paste, and it works.

## 🚀 Getting Started

### For Developers

1. **Install pm7-ui**:
   ```bash
   npm install @pm7/core
   ```

2. **Import the CSS**:
   ```javascript
   import '@pm7/core/dist/pm7.css';
   ```

3. **Use components**:
   ```html
   <div class="pm7-card">
     <div class="pm7-card-body">
       It just works!
     </div>
   </div>
   ```

### For Your AI Agent

Give your AI agent this documentation link:

```
https://raw.githubusercontent.com/patrickmast/pm7-ui/main/AI-README.md
```

That's it! Your AI now has everything it needs to build beautiful UIs.

## ✨ Features

- **🤖 AI-First Design** - Simple CSS classes that AI agents understand instantly
- **🌍 Universal** - One package works with ALL frameworks
- **📦 Lightweight** - ~15KB gzipped total (CSS + JS)
- **🌓 Built-in Dark Mode** - Automatic theme detection with zero flicker
- **♿ Fully Accessible** - WCAG 2.1 AA compliant
- **🎨 Beautiful by Default** - Professional design out of the box
- **⚡ Zero Dependencies** - Pure CSS + vanilla JS

## 💡 How It Works

Traditional UI libraries:
```jsx
// Complex, framework-specific, hard for AI to understand
import { Button } from '@shadcn/ui';
import { useState } from 'react';

<Button variant="default" size="lg" onClick={handleClick}>
  Click me
</Button>
```

pm7-ui:
```html
<!-- Simple, universal, AI-friendly -->
<button class="pm7-button pm7-button--primary pm7-button--lg">
  Click me
</button>
```

Your AI agent can now build UIs without learning complex APIs or framework quirks.

## 🎯 Perfect For

- **AI-Assisted Development** - Your AI agent will love the simplicity
- **Rapid Prototyping** - Go from idea to UI in seconds
- **Multi-Framework Projects** - Same components everywhere
- **Learning & Teaching** - No complex abstractions to explain

## 📚 Documentation

- **For Humans**: [pm7-ui.dev](https://pm7-ui.dev) - Interactive docs and examples
- **For AI Agents**: [AI-README.md](https://raw.githubusercontent.com/patrickmast/pm7-ui/main/AI-README.md) - Complete technical reference

## 🛠️ What's Included

40+ components including:
- Buttons, Cards, Inputs, Forms
- Dropdowns, Modals, Tooltips
- Accordions, Tabs, Tables
- Theme Switcher (dark mode)
- Loading states, Skeletons
- And much more...

All components work with just CSS classes. Interactive components (like dropdowns) auto-initialize with JavaScript.

## 🤝 Community

pm7-ui is open source and we love contributions!

- **Report bugs**: [GitHub Issues](https://github.com/patrickmast/pm7-ui/issues)
- **Request features**: [Discussions](https://github.com/patrickmast/pm7-ui/discussions)
- **Submit PRs**: We welcome improvements!

### Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

MIT © Patrick Mast

---

**Ready to revolutionize how you build UIs with AI?** Give your AI agent the [technical docs](https://raw.githubusercontent.com/patrickmast/pm7-ui/main/AI-README.md) and watch the magic happen! ✨