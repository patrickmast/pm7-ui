# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## CRITICAL: Documentation Audience Strategy

### AI Agents vs Humans - Know Your Audience

**🤖 FOR AI CODING AGENTS (Claude, ChatGPT, Copilot, etc.):**
- Component READMEs in `/packages/core/src/components/*/README.md`
- `README-AI-HowToDocument.md` - **START HERE** for understanding PM7-UI's AI-only documentation
- `CLAUDE.md` (this file)
- `COMPONENT-TEMPLATE.md` - Template for creating new AI-first documentation
- Test files and implementation examples
- **Style**: Exact patterns, no ambiguity, copy-paste ready code

**👥 FOR HUMANS:**
- `/README.md` (GitHub repository homepage)
- `/packages/core/README.md` (NPM package page)
- Marketing website content
- **Style**: Benefits, concepts, why use PM7, getting started

### Writing for AI Agents

When updating component documentation, remember:
1. **No storytelling** - Only facts and patterns
2. **Exact code blocks** - AI will copy these verbatim
3. **Binary decisions** - "If X then Y, else Z"
4. **No visual descriptions** - AI can't "see" if something "looks right"
5. **Explicit anti-patterns** - Tell AI what NOT to do

**IMPORTANT**: See `README-AI-HowToDocument.md` for the complete documentation philosophy and rules.

Example:
```markdown
<!-- WRONG (human-oriented) -->
The Menu component provides a beautiful dropdown experience with smooth animations...

<!-- CORRECT (AI-oriented) -->
Component: Menu
Required: <div class="pm7-menu" data-pm7-menu>
Import: window.PM7 must exist
Structure: Exact pattern below, no deviations allowed
```

### AI-Only Documentation Standard

All component documentation follows these principles:
- **Header**: Contains AI-ONLY warning and metadata
- **Structure**: IF/THEN decisions, ALWAYS/NEVER rules
- **Code**: Exact patterns that work without modification
- **Tables**: Concise with exact values, no explanations

See `COMPONENT-TEMPLATE.md` for the standard structure when creating new component docs.

## PM7-UI Project Overview

PM7-UI is a framework-agnostic UI component library built with pure CSS and vanilla JavaScript. It provides a complete set of UI components that work with any JavaScript framework without requiring framework-specific wrappers.

## Quick Reference

### Essential Development Commands
```bash
npm run dev          # Start documentation dev server (http://localhost:5173)
npm run build        # Build all packages and documentation
npm run test:e2e     # Run E2E tests
```

### CSS Naming Convention
```css
.pm7-[component]              /* Base component class */
.pm7-[component]-[element]    /* Sub-elements (single dash) */
.pm7-[component]--[modifier]  /* Modifiers (double dash) */
```

### Key Design Principles
- **Framework Agnostic** - Works with React, Vue, Angular, or vanilla JS
- **Auto-initialization** - Components with `data-pm7-*` attributes initialize automatically
- **Self-Healing Components** (v2.5.0+) - Automatically recover from framework re-renders
- **No Build Required** - Can be used directly via CDN
- **Progressive Enhancement** - CSS works without JavaScript

## 📚 Detailed Documentation

For detailed information, see the specialized documentation files:

### Development Guides
- **[Component Development](docs/claude/component-development.md)** - Complete workflow for adding new components
- **[Architecture & Patterns](docs/claude/architecture.md)** - Architecture overview and common patterns
- **[Testing Guide](docs/claude/testing.md)** - Testing approach and Playwright patterns
- **[Deployment Guide](docs/claude/deployment.md)** - Deployment processes for website and NPM
- **[Commands Reference](docs/claude/commands.md)** - All development commands reference
- **[Troubleshooting](docs/claude/troubleshooting.md)** - Common problems and lessons learned

### Component Documentation
- **Component READMEs** - `/packages/core/src/components/*/README.md`
- **AI Documentation Guide** - `README-AI-HowToDocument.md`
- **Component Template** - `COMPONENT-TEMPLATE.md`

### Important Files
- `vite.config.js` - Documentation site configuration
- `packages/core/rollup.config.js` - Library build configuration
- `packages/core/postcss.config.js` - CSS processing configuration
- `AI-README.md` - Technical documentation for AI assistance
- `AI-AGENT.md` - Complete HTML attribute reference
