# Framework Wrapper Patterns

This document describes the patterns used to create framework-specific wrappers for PM7 UI components.

## Overview

PM7 UI follows a three-layer architecture:
1. **Core Layer** - Pure CSS and vanilla JavaScript
2. **Framework Layer** - Framework-specific wrappers (React, Vue, etc.)
3. **Consumer Layer** - Your application

## React Wrapper Patterns

### Simple Component Wrapper

For simple components that don't need state management:

```typescript
// Button.tsx
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'secondary',
  size = 'md',
  className = '',
  children,
  ...props 
}) => {
  const classes = [
    'pm7-button',
    variant && `pm7-button--${variant}`,
    size !== 'md' && `pm7-button--${size}`,
    className
  ].filter(Boolean).join(' ');

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
};
```

### Complex Component with Context

For components that need to share state between sub-components:

```typescript
// Accordion.tsx
import React from 'react';

// 1. Define context for shared state
interface AccordionContextValue {
  type: 'single' | 'multiple';
  openItems: Set<string>;
  toggleItem: (value: string) => void;
}

const AccordionContext = React.createContext<AccordionContextValue | null>(null);

// 2. Parent component that provides context
export const Accordion: React.FC<AccordionProps> = ({ 
  children, 
  type = 'single',
  defaultValue,
  className,
  style
}) => {
  const [openItems, setOpenItems] = React.useState<Set<string>>(() => {
    if (defaultValue) {
      return new Set(Array.isArray(defaultValue) ? defaultValue : [defaultValue]);
    }
    return new Set();
  });

  const toggleItem = (value: string) => {
    setOpenItems(prev => {
      const newSet = new Set(prev);
      if (newSet.has(value)) {
        newSet.delete(value);
      } else {
        if (type === 'single') {
          newSet.clear();
        }
        newSet.add(value);
      }
      return newSet;
    });
  };

  return (
    <AccordionContext.Provider value={{ type, openItems, toggleItem }}>
      <div className={`pm7-accordion ${className || ''}`} style={style}>
        {children}
      </div>
    </AccordionContext.Provider>
  );
};

// 3. Child components that consume context
export const AccordionItem: React.FC<AccordionItemProps> = ({ 
  children, 
  value,
  className 
}) => {
  const context = React.useContext(AccordionContext);
  if (!context) {
    throw new Error('AccordionItem must be used within an Accordion');
  }

  const isOpen = context.openItems.has(value);

  return (
    <div 
      className={`pm7-accordion-item ${isOpen ? 'pm7-accordion-item--open' : ''} ${className || ''}`}
      data-state={isOpen ? 'open' : 'closed'}
    >
      {React.Children.map(children, child => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child as React.ReactElement<any>, { 
            value, 
            isOpen,
            onToggle: () => context.toggleItem(value)
          });
        }
        return child;
      })}
    </div>
  );
};
```

### Interactive Component with Vanilla JS Integration

For components that need to integrate with vanilla JavaScript classes:

```typescript
// Menu.tsx
import React, { useEffect, useRef } from 'react';
import { PM7Menu } from '@pm7/core';

export const Menu: React.FC<MenuProps> = ({ 
  children,
  open,
  onOpenChange 
}) => {
  const menuRef = useRef<HTMLDivElement>(null);
  const menuInstanceRef = useRef<PM7Menu | null>(null);

  useEffect(() => {
    if (menuRef.current && !menuInstanceRef.current) {
      // Initialize vanilla JS component
      menuInstanceRef.current = new PM7Menu(menuRef.current);
      
      // Set up event listeners
      menuRef.current.addEventListener('pm7:menu:open', () => {
        onOpenChange?.(true);
      });
      
      menuRef.current.addEventListener('pm7:menu:close', () => {
        onOpenChange?.(false);
      });
    }
    
    return () => {
      // Cleanup
      menuInstanceRef.current?.destroy();
    };
  }, [onOpenChange]);

  // Control open state from React
  useEffect(() => {
    if (menuInstanceRef.current) {
      if (open) {
        menuInstanceRef.current.open();
      } else {
        menuInstanceRef.current.close();
      }
    }
  }, [open]);

  return (
    <div ref={menuRef} className="pm7-menu" data-pm7-menu>
      {children}
    </div>
  );
};
```

## Common Patterns

### 1. Props to CSS Classes Mapping

Always map React props to PM7 CSS classes:

```typescript
const getClassName = (props: ComponentProps) => {
  return [
    'pm7-component',
    props.variant && `pm7-component--${props.variant}`,
    props.size && `pm7-component--${props.size}`,
    props.disabled && 'pm7-component--disabled',
    props.className
  ].filter(Boolean).join(' ');
};
```

### 2. Event Handler Wrapping

Wrap vanilla JS events to React handlers:

```typescript
useEffect(() => {
  const handleEvent = (e: CustomEvent) => {
    props.onChange?.(e.detail);
  };
  
  element.addEventListener('pm7:change', handleEvent);
  return () => element.removeEventListener('pm7:change', handleEvent);
}, [props.onChange]);
```

### 3. Ref Forwarding

Always forward refs for DOM access:

```typescript
export const Component = React.forwardRef<HTMLDivElement, ComponentProps>(
  (props, ref) => {
    return <div ref={ref} className="pm7-component" {...props} />;
  }
);

Component.displayName = 'Component';
```

### 4. TypeScript Types

Define comprehensive TypeScript types:

```typescript
// Extend native HTML attributes
interface ComponentProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
}

// For complex components, export sub-component types
export interface AccordionProps {
  children: React.ReactNode;
  type?: 'single' | 'multiple';
  defaultValue?: string | string[];
}

export interface AccordionItemProps {
  children: React.ReactNode;
  value: string;
}
```

## Vue Wrapper Patterns (Coming Soon)

Vue wrappers will follow similar patterns using:
- Composition API for state management
- `provide/inject` for context
- `v-model` for two-way binding
- Slots for content projection

## Testing Framework Wrappers

When testing components:

```typescript
// Test that CSS classes are applied correctly
it('applies variant classes', () => {
  const { container } = render(<Button variant="primary">Test</Button>);
  expect(container.firstChild).toHaveClass('pm7-button--primary');
});

// Test vanilla JS integration
it('initializes vanilla component', () => {
  const { container } = render(<Menu />);
  expect(container.querySelector('[data-pm7-menu]')).toBeInTheDocument();
});
```

## Best Practices

1. **Keep wrappers thin** - Don't add business logic to wrappers
2. **Preserve vanilla behavior** - Wrappers should enhance, not replace
3. **Document prop mappings** - Make it clear how props map to CSS classes
4. **Handle cleanup** - Always clean up event listeners and instances
5. **Type everything** - Full TypeScript support improves DX
6. **Test both layers** - Test CSS classes and vanilla JS behavior