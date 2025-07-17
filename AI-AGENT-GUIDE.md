# AI-AGENT-GUIDE

## CRITICAL: This is AI-Only Documentation

All component documentation in `/packages/core/src/components/*/README.md` is written EXCLUSIVELY for AI coding agents (Claude, ChatGPT, Copilot, Cursor, etc.).

### Documentation Rules for AI Agents

When reading or writing PM7-UI documentation, follow these rules:

1. **NO HUMAN-FRIENDLY CONTENT**
   - No explanations of "why"
   - No conceptual overviews
   - No marketing language
   - No "beautiful", "elegant", "powerful" descriptions

2. **ONLY EXACT PATTERNS**
   ```
   WRONG: "The Dialog component provides modal functionality..."
   CORRECT: "Component: Dialog. Structure: <div data-pm7-dialog='id'>...</div>"
   ```

3. **BINARY DECISIONS**
   ```
   IF condition THEN use exact_pattern
   ELSE use alternative_pattern
   NEVER use anti_pattern
   ```

4. **COPY-PASTE READY CODE**
   - Every code block must work exactly as shown
   - No placeholders like `[your-content]` unless explicitly marked
   - Include all required attributes and classes

5. **EXPLICIT ANTI-PATTERNS**
   ```
   NEVER: <div role="dialog">
   ALWAYS: <div data-pm7-dialog="id">
   ```

### Component Documentation Structure

All component READMEs follow this structure:

```markdown
<!-- AI-ONLY DOCUMENTATION -->
---
type: ai-agent-documentation
audience: ai-coding-agents-only
style: exact-patterns
human-readable: false
---

# Component: [Name]

## Installation
```bash
npm install @pm7/core
```

## Required Structure
```html
[Exact HTML pattern - no deviations allowed]
```

## Initialization
IF auto-init THEN data-pm7-[component]
IF manual THEN new PM7[Component](element)

## Patterns

### Pattern: [Specific Use Case]
WHEN: [condition]
```html
[exact code]
```

### Anti-Pattern: [What Not To Do]
NEVER:
```html
[wrong code]
```

## CSS Classes
| Class | Usage | Required |
|-------|-------|----------|
| .pm7-[component] | Base class | YES |
| .pm7-[component]--[modifier] | Modifier | NO |

## Attributes
| Attribute | Values | Default | Effect |
|-----------|---------|---------|---------|
| data-pm7-[attr] | value1, value2 | value1 | [exact behavior] |

## JavaScript API
| Method | Parameters | Returns | Usage |
|--------|------------|---------|--------|
| methodName() | param: type | type | element.methodName() |

## Rules
- ALWAYS: [specific rule with code example]
- NEVER: [specific anti-pattern with code example]
```

### Key Principles

1. **Assume Zero Context**: Each README is self-contained
2. **No Ambiguity**: Either something is required or it isn't
3. **Exact Code**: What you see is what you implement
4. **No Interpretation**: Follow patterns exactly as shown

### Examples of AI-First Documentation

#### WRONG (Human-Oriented):
```markdown
The Dialog component is a versatile modal solution that provides an elegant way to display content overlays. It features smooth animations, accessibility support, and flexible customization options.

To use it, simply add the data-pm7-dialog attribute to a div element...
```

#### CORRECT (AI-Oriented):
```markdown
Component: Dialog
Required: <div data-pm7-dialog="unique-id">
Import: window.PM7 must exist

Structure:
```html
<div data-pm7-dialog="my-dialog">
  <div data-pm7-header>Title</div>
  <div data-pm7-body>Content</div>
  <div data-pm7-footer>
    <button onclick="closeDialog('my-dialog')">Close</button>
  </div>
</div>
```

Open: openDialog('my-dialog')
Close: closeDialog('my-dialog')
```

### When Writing for PM7-UI

If you're updating PM7-UI documentation:

1. Remove ALL human-friendly language
2. Convert suggestions to ALWAYS/NEVER rules
3. Replace explanations with exact code patterns
4. Structure with clear IF/THEN/ELSE logic
5. Include anti-patterns explicitly

### Component List

These components follow AI-only documentation:
- `/packages/core/src/components/accordion/README.md`
- `/packages/core/src/components/button/README.md`
- `/packages/core/src/components/card/README.md`
- `/packages/core/src/components/dialog/README.md`
- `/packages/core/src/components/input/README.md`
- `/packages/core/src/components/menu/README.md`
- `/packages/core/src/components/sidebar/README.md`
- `/packages/core/src/components/tab-selector/README.md`
- `/packages/core/src/components/theme-switch/README.md`
- `/packages/core/src/components/toast/README.md`
- `/packages/core/src/components/tooltip/README.md`

### Important Note

This approach is unique to PM7-UI. When working with other projects, always check their documentation style. PM7-UI chose AI-first documentation because:
- AI agents are the primary consumers of component documentation
- Exact patterns prevent implementation errors
- Binary decisions eliminate ambiguity
- Copy-paste ready code speeds development