# Framework Integration Guide

PM7 integration patterns for React, Vue, Angular

<!-- AI-ONLY DOCUMENTATION -->
<!-- 
audience: ai-coding-agents-only
style: exact-patterns
documentation-rules:
  - NO storytelling
  - ONLY exact code patterns
  - Binary IF/THEN decisions
  - Copy-paste ready code blocks
-->

## Timing Issues

PM7 auto-initializes on `DOMContentLoaded`.
Frameworks render AFTER this event.

### Solution Pattern

IF React/Vue/Angular THEN initialize after render:

```javascript
// React - NEW: Use initFramework() for better timing
useEffect(() => {
  window.PM7?.initFramework(); // Handles timing + healing automatically
  // OR with custom options:
  window.PM7?.init(document, { delay: 50, heal: true });
}, []);

// Vue
mounted() {
  this.$nextTick(() => {
    window.PM7?.initFramework();
  });
}

// Angular
ngAfterViewInit() {
  window.PM7?.initFramework();
}
```

### PM7.init() Options (v2.7.0+)

```javascript
PM7.init(container, {
  delay: 0,      // Milliseconds to wait before init (default: 0)
  force: false,  // Force re-init even if already initialized (default: false)
  heal: true     // Run self-healing after init (default: true)
});

// Convenience method for frameworks
PM7.initFramework(); // Same as init() with { delay: 50, heal: true }
```

## State Synchronization

PM7 manages its own DOM state.
Frameworks have separate state systems.
These MUST be synchronized.

### Dialog State Sync Pattern

IF PM7 dialog used in React/Vue THEN sync with MutationObserver:

```jsx
// React
const dialogRef = useRef();

useEffect(() => {
  if (!dialogRef.current) return;
  
  const observer = new MutationObserver(() => {
    const state = dialogRef.current.getAttribute('data-state');
    if (state === 'closed' && isOpen) {
      setIsOpen(false); // Sync React state
    }
  });
  
  observer.observe(dialogRef.current, { 
    attributes: true,
    attributeFilter: ['data-state']
  });
  
  return () => observer.disconnect();
}, [isOpen]);

// Control dialog
useEffect(() => {
  if (isOpen) {
    window.openDialog('dialog-id');
  } else {
    window.closeDialog('dialog-id');
  }
}, [isOpen]);
```

## Event Handler Issues

### Problem: Dialog Footer Buttons

PM7 dialogs transform DOM structure.
React event handlers break.

IF button in `data-pm7-footer` THEN use global functions:

```jsx
// WRONG
<div data-pm7-footer>
  <button onClick={handleSave}>Save</button>
</div>

// CORRECT
useEffect(() => {
  window.handleSave = () => {
    // Your logic
    onSave();
  };
  return () => delete window.handleSave;
}, [onSave]);

<div data-pm7-footer dangerouslySetInnerHTML={{
  __html: `<button onclick="window.handleSave()">Save</button>`
}} />
```

## Dynamic Content

### Adding PM7 Components

IF component added after page load THEN reinitialize:

```javascript
// After adding new PM7 elements
window.PM7?.init(containerElement);

// Or specific component
const menu = new window.PM7.Menu(menuElement);
```

### Removing Components

PM7 adds event listeners.
Clean up when removing:

```javascript
// No built-in destroy, but:
element.remove(); // Removes element and listeners
```

## Common Patterns

### React Hook for PM7

```javascript
function usePM7Dialog(dialogId) {
  const [isOpen, setIsOpen] = useState(false);
  const dialogRef = useRef();
  
  // Sync state
  useEffect(() => {
    if (!dialogRef.current) return;
    
    const observer = new MutationObserver(() => {
      const state = dialogRef.current.getAttribute('data-state');
      if (state === 'closed' && isOpen) {
        setIsOpen(false);
      }
    });
    
    observer.observe(dialogRef.current, {
      attributes: true,
      attributeFilter: ['data-state']
    });
    
    return () => observer.disconnect();
  }, [isOpen]);
  
  // Control dialog
  useEffect(() => {
    if (isOpen) {
      window.openDialog(dialogId);
    } else {
      window.closeDialog(dialogId);
    }
  }, [isOpen, dialogId]);
  
  return { isOpen, setIsOpen, dialogRef };
}
```

### Vue Composable

```javascript
function usePM7Dialog(dialogId) {
  const isOpen = ref(false);
  const dialogRef = ref(null);
  
  watch(isOpen, (newVal) => {
    if (newVal) {
      window.openDialog(dialogId);
    } else {
      window.closeDialog(dialogId);
    }
  });
  
  onMounted(() => {
    if (!dialogRef.value) return;
    
    const observer = new MutationObserver(() => {
      const state = dialogRef.value.getAttribute('data-state');
      if (state === 'closed' && isOpen.value) {
        isOpen.value = false;
      }
    });
    
    observer.observe(dialogRef.value, {
      attributes: true,
      attributeFilter: ['data-state']
    });
  });
  
  return { isOpen, dialogRef };
}
```

## Troubleshooting

IF component not working THEN check:

1. PM7 loaded: `console.log(window.PM7)`
2. CSS loaded: Check element has PM7 styles
3. Initialized: Element has `data-pm7-*-initialized` attribute
4. Timing: Initialize AFTER framework render
5. ID match: `data-pm7-dialog="foo"` matches `openDialog('foo')`

IF still not working THEN:
```javascript
// Debug initialization
console.log('PM7:', window.PM7);
console.log('Element:', document.querySelector('[data-pm7-dialog]'));
console.log('State:', element.getAttribute('data-state'));

// Force reinit
window.PM7?.reinit();
```

## Common Issues & Solutions

### Dialog won't open in React

**SOLUTION**: Call after render
```javascript
useEffect(() => {
  window.PM7?.autoInitDialogs();
}, []);
```

### X/ESC closes dialog but won't reopen

**SOLUTION**: Sync state with MutationObserver (see pattern above)

### onClick not working in dialog footer

**SOLUTION**: Use global functions with dangerouslySetInnerHTML (see pattern above)

### Dialog flashes on page load

**SOLUTION**: Ensure PM7 CSS loads before content
```html
<link rel="stylesheet" href="@pm7/core/dist/pm7.css">
```