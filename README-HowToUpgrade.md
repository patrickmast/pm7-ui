# PM7 UI v1 to v2 Migration for AI Agents

---
type: ai-agent-documentation
audience: ai-coding-agents-only
version: 2.0.0
style: exact-patterns
human-readable: false
documentation-rules:
  - NO storytelling or explanations
  - ONLY exact code patterns
  - Binary IF/THEN decisions
  - Explicit anti-patterns with NEVER/ALWAYS
  - Copy-paste ready code blocks
---

## ⚠️ CRITICAL UNDERSTANDING ⚠️

```
PM7 UI IS NOT A REACT COMPONENT LIBRARY
PM7 UI IS NOT A VUE COMPONENT LIBRARY
PM7 UI IS A PURE HTML/CSS FRAMEWORK

NEVER CREATE:
- React components inside PM7 UI
- "PM7 React wrappers"
- Framework-specific PM7 packages

ALWAYS:
- Use PM7 HTML/CSS in YOUR components
- YOU manage state in YOUR framework
- PM7 only provides styling
```

## ARCHITECTURE CLARIFICATION

```
PM7 UI v2 = PURE HTML/CSS FRAMEWORK
- NO React components in PM7
- NO Vue components in PM7  
- NO framework-specific code
- ONLY HTML structure + CSS classes + optional JS

USING PM7 IN REACT:
- YOU write React components
- YOUR components render PM7 HTML
- YOU manage state (useState, etc)
- PM7 provides styling via CSS classes
```

## CRITICAL FACTS

```
IF import contains '@pm7/react' THEN:
  - NEVER install @pm7/react v2 (does not exist)
  - ALWAYS replace with HTML structure
  - ALWAYS remove React component imports
  
IF package.json contains '@pm7/react' THEN:
  - REMOVE '@pm7/react' entry
  - ADD '@pm7/core': '^2.0.0'
  - RUN npm install
```

## DETECTION PATTERNS

```bash
# Find all PM7 v1 usage
grep -r "@pm7/react" --include="*.tsx" --include="*.jsx" .
grep -r "dynamic.*@pm7/react" .
```

## ERROR RESOLUTION MATRIX

```
ERROR: "Cannot resolve '@pm7/react'"
ACTION: Expected behavior. Proceed with component rewrite.

ERROR: "Element type is invalid"
ACTION: Remove ALL dynamic imports.

ERROR: "window.PM7 is undefined"
ACTION: Optional. Components work without PM7 JavaScript.
```

## ANTI-PATTERNS

```javascript
// NEVER DO THIS
import { Dialog } from '@pm7/react'; // WRONG: Package removed
import dynamic from 'next/dynamic'; // WRONG: Not needed
const Dialog = dynamic(() => import('@pm7/react')); // WRONG: Double wrong

// NEVER ATTEMPT
npm install @pm7/react@2 // Does not exist
npm install @pm7/react@latest // Still v1
alias: { '@pm7/react': '@pm7/core' } // Incompatible APIs
```

## EXACT REPLACEMENT PATTERNS

### STEP 1: package.json
```diff
- "@pm7/react": "^1.x.x",
+ "@pm7/core": "^2.0.0",
```
THEN: npm install

### STEP 2: Import Replacement
```diff
- import { Button, Card, Dialog } from '@pm7/react';
- import dynamic from 'next/dynamic';
- const Dialog = dynamic(() => import('@pm7/react'));
+ import '@pm7/core/dist/pm7.css';
```

### COMPONENT MAPPINGS

```javascript
// CARD
IF <Card>{children}</Card> THEN:
<div className="pm7-card">
  <div className="pm7-card-content">{children}</div>
</div>

// BUTTON
IF <Button variant="primary">{text}</Button> THEN:
<button className="pm7-button pm7-button--primary">{text}</button>

// DIALOG STRUCTURE
IF <Dialog open={open} onOpenChange={onOpenChange}> THEN:
{open && (
  <>
    <div className="pm7-dialog-backdrop" onClick={() => onOpenChange(false)} />
    <div className="pm7-dialog" data-pm7-dialog>
      {/* content */}
    </div>
  </>
)}

// DIALOG PARTS
IF <DialogContent> THEN: <div className="pm7-dialog-content">
IF <DialogHeader> THEN: <div className="pm7-dialog-header">
IF <DialogTitle> THEN: <h2 className="pm7-dialog-title">
IF <DialogDescription> THEN: <p className="pm7-dialog-description">
IF <DialogFooter> THEN: <div className="pm7-dialog-footer">

// MENU
IF <Menu> with items THEN:
<div className="pm7-menu" data-pm7-menu>
  <button className="pm7-menu-trigger" onClick={() => setIsOpen(!isOpen)}>Label</button>
  {isOpen && (
    <div className="pm7-menu-content">
      {/* items */}
    </div>
  )}
</div>

IF <MenuItem onClick={fn}> THEN:
<div className="pm7-menu-item" onClick={fn}>Label</div>

IF <MenuSeparator /> THEN:
<div className="pm7-menu-separator" />
```

```javascript
// TABS
IF <Tabs> component THEN:
const [activeTab, setActiveTab] = useState("tab1");
<div className="pm7-tab-selector" data-pm7-tab-selector>
  <div className="pm7-tab-list">
    {/* triggers */}
  </div>
  {/* contents */}
</div>

IF <TabsTrigger value="{id}"> THEN:
<button
  className="pm7-tab-trigger"
  data-state={activeTab === "{id}" ? "active" : ""}
  onClick={() => setActiveTab("{id}")}
>

IF <TabsContent value="{id}"> THEN:
<div
  className="pm7-tab-content"
  data-state={activeTab === "{id}" ? "active" : ""}
  style={{ display: activeTab === "{id}" ? "block" : "none" }}
>
```

```javascript
// ACCORDION
IF <Accordion> THEN:
<div className="pm7-accordion" data-pm7-accordion>

IF <AccordionItem> THEN:
<div className="pm7-accordion-item">

IF <AccordionTrigger> THEN:
<button className="pm7-accordion-trigger">
  <span>{text}</span>
  <svg className="pm7-accordion-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M6 9l6 6 6-6"/>
  </svg>
</button>

IF <AccordionContent> THEN:
<div className="pm7-accordion-content">
  <div className="pm7-accordion-content-inner">{content}</div>
</div>
```

### STATE MANAGEMENT REQUIREMENTS

```javascript
// REQUIRED STATE HOOKS
IF Dialog THEN: const [isOpen, setIsOpen] = useState(false);
IF Tabs THEN: const [activeTab, setActiveTab] = useState("tab1");
IF Menu THEN: const [isOpen, setIsOpen] = useState(false);
IF Accordion THEN: const [openItems, setOpenItems] = useState([]);

// OPTIONAL PM7 INITIALIZATION
IF need keyboard/focus handling THEN:
useEffect(() => {
  window.PM7?.initTabSelectors?.();
  window.PM7?.initAccordions?.();
}, []);
```

## Next.js Specific Migration Guide

Next.js projects often use dynamic imports to avoid SSR issues. Here's how to migrate:

### Step 1: Find All Dynamic Imports
```bash
# Search for dynamic imports of PM7
grep -r "dynamic.*@pm7/react" .
grep -r "import.*@pm7/react" .
```

### Step 2: Remove Dynamic Import Pattern
**Before:**
```jsx
import dynamic from 'next/dynamic';
const Card = dynamic(() => import('@pm7/react').then(mod => mod.Card), { ssr: false });
const Tabs = dynamic(() => import('@pm7/react').then(mod => mod.Tabs), { ssr: false });
const Accordion = dynamic(() => import('@pm7/react').then(mod => mod.Accordion), { ssr: false });
```

**After:**
```jsx
'use client'; // If using app directory
// Remove ALL dynamic imports - they're not needed!
import { useState } from 'react';
```

### Step 3: Common Next.js Patterns

#### Tabs with URL State (Next.js App Router)
```jsx
'use client';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function PageWithTabs() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const [activeTab, setActiveTab] = useState('tab1');

  // Sync with URL
  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
    const params = new URLSearchParams(searchParams.toString());
    params.set('tab', tab);
    router.push(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="pm7-tab-selector" data-pm7-tab-selector>
      <div className="pm7-tab-list">
        <button
          className="pm7-tab-trigger"
          data-state={activeTab === 'tab1' ? 'active' : ''}
          onClick={() => handleTabChange('tab1')}
        >
          Tab 1
        </button>
      </div>
      {/* Tab content with conditional rendering */}
    </div>
  );
}
```

## Complete Migration Example: Next.js Page

**Before (v1.x):**
```jsx
import dynamic from 'next/dynamic';

const Card = dynamic(() => import('@pm7/react').then(mod => mod.Card), { ssr: false });
const Tabs = dynamic(() => import('@pm7/react').then(mod => mod.Tabs), { ssr: false });

export default function Page() {
  return (
    <Card>
      <Tabs defaultValue="tab1">
        {/* ... */}
      </Tabs>
    </Card>
  );
}
```

**After (v2.x):**
```jsx
'use client';
// No dynamic imports needed!

export default function Page() {
  const [activeTab, setActiveTab] = useState("tab1");

  return (
    <div className="pm7-card">
      <div className="pm7-card-content">
        <div className="pm7-tab-selector" data-pm7-tab-selector>
          {/* Tab implementation as shown above */}
        </div>
      </div>
    </div>
  );
}
```

## Key Differences Summary

| Feature | v1.x | v2.x |
|---------|------|------|
| Package | `@pm7/react` | `@pm7/core` only |
| Components | React components | HTML + CSS classes |
| State | Managed by components | Manage yourself |
| Imports | Component imports | CSS import only |
| Bundle size | Includes React bindings | Pure CSS + minimal JS |
| TypeScript | Full React types | No component types needed |

## Troubleshooting

### Q: Why am I getting "window.PM7 is undefined"?
A: The PM7 JavaScript is optional. Components work with just CSS. If you want enhanced features, include the PM7 script or check if it's loaded before using.

### Q: My tabs/accordions aren't interactive
A: v2 components rely on CSS and your own state management. Add onClick handlers and manage state with React hooks.

### Q: Can I still use the old @pm7/react package?
A: No, it's been discontinued. Use @pm7/react v1.x if you need React components, but we recommend migrating to v2.

### Q: Why can't I find @pm7/react v2?
A: There is NO @pm7/react v2. The v2 architecture is completely different - all components are HTML + CSS only.

### Q: The migration seems like a lot of work, can I avoid it?
A: If you're happy with v1, you can stay on it. But v2 offers better performance, smaller bundle size, and works with any framework.

### Q: How do I handle component props like `variant` or `size`?
A: Use modifier classes: `pm7-button--primary`, `pm7-card--lg`, etc.

## New in v2.1: AI-Agent FIRST Design

All interactive components now automatically add their required CSS classes when initialized via data attributes:
- `data-pm7-accordion` automatically adds `.pm7-accordion`
- `data-pm7-dialog` automatically adds `.pm7-dialog`
- `data-pm7-menu` automatically adds `.pm7-menu`
- `data-pm7-tab-selector` automatically adds `.pm7-tab-selector`
- `data-pm7-tooltip` automatically adds `.pm7-tooltip`
- `data-pm7-theme-switch` automatically adds `.pm7-theme-switch`

**Result**: You only need to add the data attribute - the CSS class is handled automatically!

## Benefits of v2

- **Framework agnostic**: Works with React, Vue, Angular, or vanilla HTML
- **Smaller bundle size**: No React dependency (~50% smaller)
- **Better performance**: Pure CSS with minimal JavaScript
- **AI-friendly**: Simple, predictable patterns that AI agents understand
- **More flexible**: Use only what you need
- **Server-side rendering**: No hydration issues

## Post-Migration Verification

After completing your migration, verify these items:

### Functionality Checklist
- [ ] All components render correctly
- [ ] Interactive components (tabs, accordions) work
- [ ] Dark mode styling works correctly
- [ ] No console errors about missing modules
- [ ] Build process completes successfully
- [ ] No TypeScript errors related to PM7

### Performance Check
- [ ] Bundle size reduced (no React component overhead)
- [ ] No hydration warnings in Next.js
- [ ] Faster initial page load

### Common Post-Migration Issues

#### Tabs/Accordions Not Interactive
**Solution**: Add initialization or state management:
```jsx
// Option 1: Use PM7 JavaScript
useEffect(() => {
  if (window.PM7) {
    window.PM7.initTabSelectors();
    window.PM7.initAccordions();
  }
}, []);

// Option 2: Manage state yourself
const [activeTab, setActiveTab] = useState('tab1');
```

#### Styling Conflicts
**Issue**: Menu items showing wrong colors in dark mode
**Solution**: Check CSS specificity - PM7 classes should not be overridden by global styles

## Real-World Migration Example

Based on an actual migration of `winfakt-idocs` project:

### Project Stats
- **Files migrated**: 6 React component files
- **Components used**: Cards, Tabs, Accordions
- **Time taken**: ~3 hours
- **Main challenges**: Dynamic imports, state management

### Lessons Learned
1. **Start with one file** - Don't try to migrate everything at once
2. **Remove package first** - Delete `@pm7/react` from package.json and run `npm install`
3. **Fix imports** - This will show all files that need migration
4. **Test incrementally** - Test each component after migration
5. **Use git** - Commit after each successful file migration

## Migration Script Helper

For large projects, use this script to find all PM7 usage:

```bash
#!/bin/bash
echo "=== PM7 React Usage Report ==="
echo ""
echo "Files importing from @pm7/react:"
grep -r "@pm7/react" --include="*.tsx" --include="*.jsx" --include="*.ts" --include="*.js" . | grep -v node_modules

echo ""
echo "Dynamic imports:"
grep -r "dynamic.*@pm7/react" --include="*.tsx" --include="*.jsx" . | grep -v node_modules

echo ""
echo "Component usage count:"
grep -roh "pm7-[a-z-]*" --include="*.tsx" --include="*.jsx" . | grep -v node_modules | sort | uniq -c | sort -nr
```

## TEMPORARY WRAPPER PATTERN (IF REQUIRED)

```javascript
// FILE: src/pm7-react-compat.tsx
import '@pm7/core/dist/pm7.css';

export const Dialog = ({ children, open }) => 
  open ? <div className="pm7-dialog" data-pm7-dialog>{children}</div> : null;

export const DialogContent = ({ children }) => 
  <div className="pm7-dialog-content">{children}</div>;

export const Button = ({ children, variant = 'primary', ...props }) => 
  <button className={`pm7-button pm7-button--${variant}`} {...props}>{children}</button>;

// THEN IN tsconfig.json:
"paths": {
  "@pm7/react": ["./src/pm7-react-compat.tsx"]
}

// THEN IN vite.config.ts:
alias: {
  '@pm7/react': path.resolve(__dirname, './src/pm7-react-compat.tsx')
}
```

## REAL-WORLD MIGRATION PATTERNS

### PATTERN 1: React Component Using PM7 Dialog (with Portal)
```javascript
// YOUR React component (not from PM7!)
import { createPortal } from 'react-dom';

export function ExportDialog({ open, onClose, data }) {
  if (!open) return null;
  
  return createPortal(
    <div className="pm7-dialog">
      <div className="pm7-dialog-overlay" onClick={onClose} />
      <div className="pm7-dialog-content">
        <div className="pm7-dialog-header">
          <h2 className="pm7-dialog-title">Export Report</h2>
          <p className="pm7-dialog-description">Processing complete</p>
        </div>
        <div className="pm7-dialog-body">
          <pre style={{ 
            fontFamily: 'monospace',
            fontSize: '0.875rem',
            whiteSpace: 'pre-wrap',
            backgroundColor: '#f9fafb',
            padding: '1.5rem',
            borderRadius: '0.375rem',
            overflowX: 'auto'
          }}>
            {data}
          </pre>
        </div>
        <div className="pm7-dialog-footer">
          <button className="pm7-button pm7-button--ghost" onClick={onClose}>
            Close
          </button>
          <button className="pm7-button pm7-button--primary">
            Download CSV
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
}
```

### CRITICAL: Dialog Best Practices
```
ALWAYS use createPortal for dialogs/modals
NEVER use Tailwind classes for PM7 components
INLINE STYLES only for specific needs (e.g. monospace font)
PM7 CLASSES handle all layout and spacing
```

### PATTERN 2: Large Project Migration Strategy
```
IF project has 20+ files using @pm7/react THEN:
  STEP 1: Create compatibility layer (1 hour)
  STEP 2: Migrate components by priority
  STEP 3: Delete compatibility layer when done
  
COMPATIBILITY LAYER EXAMPLE:
// pm7-compat.ts
export const Dialog = ({ children, open }) => {
  if (!open) return null;
  return children;
};
export const DialogContent = ({ children }) => 
  <div className="pm7-dialog-content">{children}</div>;
```

## COMPLETE MIGRATION DECISION TREE

```
IF error contains "@pm7/react" THEN:
  IF project_size > 20_files THEN:
    ACTION: Create compatibility layer first
  ELSE:
    ACTION: Migrate components directly
    
IF component = Dialog THEN:
  PRIORITY: High (most complex)
  TIME: 5 min with HTML copy-paste
  
IF component = Button THEN:
  PRIORITY: Low (simple replacement)
  TIME: 30 sec per button
  
IF using compatibility layer THEN:
  ALWAYS: Mark as technical debt
  ALWAYS: Plan removal timeline
  NEVER: Consider it permanent solution
```

## VALIDATION CHECKLIST

```
□ grep -r "@pm7/react" . returns no results
□ npm ls @pm7/react shows "empty"
□ All components render without console errors
□ Dark mode classes apply correctly
□ Interactive components have state management
```