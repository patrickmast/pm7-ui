import React, { createContext, useContext, useState, useEffect, forwardRef } from 'react';
import '@pm7/core/dist/pm7.css';

export interface TabSelectorProps extends React.HTMLAttributes<HTMLDivElement> {
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  variant?: 'underline' | 'solid' | 'pills';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
}

interface TabSelectorContextValue {
  value: string;
  onValueChange: (value: string) => void;
}

const TabSelectorContext = createContext<TabSelectorContextValue | undefined>(undefined);

export const TabSelector = forwardRef<HTMLDivElement, TabSelectorProps>(
  ({ 
    className = '', 
    value, 
    defaultValue, 
    onValueChange, 
    variant = 'underline',
    size = 'md',
    fullWidth = false,
    children,
    ...props 
  }, ref) => {
    const [selectedValue, setSelectedValue] = useState(value ?? defaultValue ?? '');

    useEffect(() => {
      if (value !== undefined) {
        setSelectedValue(value);
      }
    }, [value]);

    const handleValueChange = (newValue: string) => {
      if (value === undefined) {
        setSelectedValue(newValue);
      }
      onValueChange?.(newValue);
    };

    const selectorClasses = [
      'pm7-tab-selector',
      `pm7-tab-selector--${variant}`,
      size !== 'md' ? `pm7-tab-selector--${size}` : '',
      fullWidth ? 'pm7-tab-selector--full-width' : '',
      className
    ].filter(Boolean).join(' ');

    return (
      <TabSelectorContext.Provider value={{ value: selectedValue, onValueChange: handleValueChange }}>
        <div ref={ref} className={selectorClasses} {...props}>
          {children}
        </div>
      </TabSelectorContext.Provider>
    );
  }
);

TabSelector.displayName = 'TabSelector';

// Alias for compatibility
export const Tabs = TabSelector;

export interface TabListProps extends React.HTMLAttributes<HTMLDivElement> {}

export const TabList = forwardRef<HTMLDivElement, TabListProps>(
  ({ className = '', ...props }, ref) => {
    return (
      <div 
        ref={ref} 
        role="tablist" 
        className={`pm7-tab-list ${className}`} 
        {...props} 
      />
    );
  }
);

TabList.displayName = 'TabList';

// Alias for compatibility
export const TabsList = TabList;

export interface TabTriggerProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  value: string;
  icon?: React.ReactNode;
  badge?: string | number;
}

export const TabTrigger = forwardRef<HTMLButtonElement, TabTriggerProps>(
  ({ className = '', value, icon, badge, children, ...props }, ref) => {
    const context = useContext(TabSelectorContext);
    if (!context) {
      throw new Error('TabTrigger must be used within a TabSelector');
    }

    const { value: selectedValue, onValueChange } = context;
    const isSelected = selectedValue === value;

    const triggerClasses = [
      'pm7-tab-trigger',
      isSelected ? 'pm7-tab-trigger--active' : '',
      className
    ].filter(Boolean).join(' ');

    return (
      <button
        ref={ref}
        role="tab"
        type="button"
        aria-selected={isSelected}
        data-state={isSelected ? 'active' : 'inactive'}
        onClick={() => onValueChange(value)}
        className={triggerClasses}
        {...props}
      >
        {icon && <span className="pm7-tab-trigger-icon">{icon}</span>}
        {children}
        {badge !== undefined && (
          <span className="pm7-tab-trigger-badge">{badge}</span>
        )}
      </button>
    );
  }
);

TabTrigger.displayName = 'TabTrigger';

// Alias for compatibility
export const TabsTrigger = TabTrigger;

export interface TabContentProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string;
}

export const TabContent = forwardRef<HTMLDivElement, TabContentProps>(
  ({ className = '', value, children, ...props }, ref) => {
    const context = useContext(TabSelectorContext);
    if (!context) {
      throw new Error('TabContent must be used within a TabSelector');
    }

    const { value: selectedValue } = context;
    const isSelected = selectedValue === value;

    const contentClasses = [
      'pm7-tab-content',
      isSelected ? 'pm7-tab-content--active' : '',
      className
    ].filter(Boolean).join(' ');

    return (
      <div
        ref={ref}
        role="tabpanel"
        data-state={isSelected ? 'active' : 'inactive'}
        className={contentClasses}
        hidden={!isSelected}
        {...props}
      >
        {children}
      </div>
    );
  }
);

TabContent.displayName = 'TabContent';

// Alias for compatibility
export const TabsContent = TabContent;