# Upgrade Guide: PM7 UI v1 to v2

This guide covers upgrading from PM7 UI v1.x to v2.x.

## 🚨 CRITICAL: @pm7/react NO LONGER EXISTS IN v2 🚨

**STOP! Before you continue:**
- ❌ `@pm7/react` v2 does NOT exist - it was completely removed
- ✅ Only `@pm7/core` v2 exists - all components are now HTML + CSS
- 🔄 You MUST rewrite all React components to HTML structure

## ⚠️ IMPORTANT: Major Architecture Change

PM7 UI v2 is now **framework-agnostic**. The `@pm7/react` package has been **completely removed** and no longer exists. All components are now pure HTML + CSS with optional JavaScript enhancements.

## Pre-Migration Checklist

Before starting your migration, check these items:

- [ ] **Identify all PM7 components used** - Search for `@pm7/react` imports
- [ ] **Check for dynamic imports** - Look for `dynamic(() => import('@pm7/react'))`
- [ ] **List interactive components** - Note which need state management (Tabs, Accordions, Dialogs)
- [ ] **Review custom styling** - Check if you override PM7 component styles
- [ ] **Estimate complexity** - Count files using PM7 components
- [ ] **Backup your project** - Create a branch or backup before starting

## Quick Migration Path Decision

```
Do you use interactive components (Tabs, Accordions, Dialogs)?
├─ NO → Simple migration (30 min)
│   └─ Just replace component markup
└─ YES → Complex migration (2-4 hours)
    ├─ Need state management?
    │   ├─ YES → Add React hooks for state
    │   └─ NO → Use PM7 JavaScript initialization
    └─ Using Next.js with dynamic imports?
        ├─ YES → Remove all dynamic imports first
        └─ NO → Proceed with standard migration
```

## Common Migration Errors and Solutions

### Error: "Element type is invalid. Received a promise that resolves to: undefined"
**Cause**: Your code is still trying to import from `@pm7/react`
**Solution**: Remove all React component imports and dynamic imports

### Error: "Module not found: Can't resolve '@pm7/react'"
**Cause**: `@pm7/react` is still in your imports
**Solution**: Replace all React components with HTML + CSS classes

### Error: "Cannot find module '@pm7/react' or its corresponding type declarations"
**Cause**: TypeScript is looking for `@pm7/react` types
**Solution**: Remove the package and update imports

## Migration Gotchas We Learned The Hard Way

### 1. Don't Try to Find @pm7/react v2
**What we tried**: Updating `@pm7/react` from v1 to v2
**Why it failed**: @pm7/react v2 doesn't exist!
**Lesson**: Read the architecture change note first

### 2. Dynamic Imports Are Not Needed Anymore
**What we tried**: Converting dynamic imports to v2 syntax
**Why it failed**: HTML/CSS doesn't need dynamic imports
**Lesson**: Remove ALL dynamic import logic

### 3. State Management Is Now Your Responsibility
**What we expected**: Components to manage their own state
**Reality**: You must add React hooks for interactive behavior
**Lesson**: Budget time for adding state management

### 4. CSS Classes Don't Auto-Apply (except with data attributes)
**What we expected**: `<Tabs>` to have all styling
**Reality**: Must add `pm7-tab-selector` class (or use `data-pm7-tab-selector`)
**Lesson**: Reference the HTML structure docs carefully

### 5. TypeScript Won't Help You
**What we expected**: TypeScript errors for wrong props
**Reality**: No component types = no TypeScript help
**Lesson**: Keep the documentation open while migrating

## Migration Steps

### 1. Update package.json

```json
// REMOVE this line:
"@pm7/react": "^1.x.x",

// ADD or UPDATE to:
"@pm7/core": "^2.x.x",
```

**Important**: Run `npm install` after updating to remove the old package.

### 2. Remove ALL React Component Imports

```javascript
// ❌ REMOVE all of these:
import { Button, Card, Tabs, Accordion } from '@pm7/react';
import dynamic from 'next/dynamic';
const Card = dynamic(() => import('@pm7/react').then(mod => mod.Card), { ssr: false });

// ✅ ADD only this:
import '@pm7/core/dist/pm7.css';
```

### 3. Replace React Components with HTML

#### Card Component

**Before (v1.x with React):**
```jsx
import { Card } from '@pm7/react';

<Card className="p-6">
  <h2>Title</h2>
  <p>Content</p>
</Card>
```

**After (v2.x with HTML):**
```jsx
<div className="pm7-card">
  <div className="pm7-card-content">
    <h2>Title</h2>
    <p>Content</p>
  </div>
</div>
```

#### Tabs Component (Complex Example)

**Before (v1.x with React):**
```jsx
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@pm7/react';

export function MyComponent() {
  const [activeTab, setActiveTab] = useState("tab1");

  return (
    <Tabs value={activeTab} onValueChange={setActiveTab}>
      <TabsList>
        <TabsTrigger value="tab1">Tab 1</TabsTrigger>
        <TabsTrigger value="tab2">Tab 2</TabsTrigger>
      </TabsList>
      <TabsContent value="tab1">Content 1</TabsContent>
      <TabsContent value="tab2">Content 2</TabsContent>
    </Tabs>
  );
}
```

**After (v2.x with HTML + React state):**
```jsx
export function MyComponent() {
  const [activeTab, setActiveTab] = useState("tab1");

  return (
    <div className="pm7-tab-selector" data-pm7-tab-selector>
      <div className="pm7-tab-list">
        <button
          className="pm7-tab-trigger"
          aria-controls="tab-panel-1"
          data-state={activeTab === "tab1" ? "active" : ""}
          onClick={() => setActiveTab("tab1")}
        >
          Tab 1
        </button>
        <button
          className="pm7-tab-trigger"
          aria-controls="tab-panel-2"
          data-state={activeTab === "tab2" ? "active" : ""}
          onClick={() => setActiveTab("tab2")}
        >
          Tab 2
        </button>
      </div>

      <div
        className="pm7-tab-content"
        id="tab-panel-1"
        data-state={activeTab === "tab1" ? "active" : ""}
        style={{ display: activeTab === "tab1" ? "block" : "none" }}
      >
        Content 1
      </div>
      <div
        className="pm7-tab-content"
        id="tab-panel-2"
        data-state={activeTab === "tab2" ? "active" : ""}
        style={{ display: activeTab === "tab2" ? "block" : "none" }}
      >
        Content 2
      </div>
    </div>
  );
}
```

#### Accordion Component

**Before (v1.x with React):**
```jsx
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@pm7/react';

<Accordion>
  <AccordionItem value="item-1">
    <AccordionTrigger>Section 1</AccordionTrigger>
    <AccordionContent>Content 1</AccordionContent>
  </AccordionItem>
</Accordion>
```

**After (v2.x with HTML):**
```jsx
<div className="pm7-accordion" data-pm7-accordion>
  <div className="pm7-accordion-item">
    <button className="pm7-accordion-trigger">
      <span>Section 1</span>
      <svg className="pm7-accordion-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M6 9l6 6 6-6"/>
      </svg>
    </button>
    <div className="pm7-accordion-content">
      <div className="pm7-accordion-content-inner">
        Content 1
      </div>
    </div>
  </div>
</div>
```

### 4. Handle State Management

Since PM7 UI v2 uses HTML + CSS, you need to manage state yourself in React:

```jsx
// For tabs: manage active tab with useState
const [activeTab, setActiveTab] = useState("tab1");

// For accordions: manage open items
const [openItems, setOpenItems] = useState([]);

// For modals/dialogs: manage open state
const [isOpen, setIsOpen] = useState(false);
```

### 5. Initialize Interactive Components (Optional)

For enhanced functionality, initialize PM7 components:

```jsx
useEffect(() => {
  if (typeof window !== 'undefined' && window.PM7) {
    window.PM7.initTabSelectors();
    window.PM7.initAccordions();
  }
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

## Need Help?

- Check the [documentation](https://pm7-ui.dev)
- View [component examples](https://pm7-ui.dev/components)
- Open an [issue on GitHub](https://github.com/patrickmast/pm7-ui/issues)