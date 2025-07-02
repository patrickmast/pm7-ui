import React from 'react';

interface AccordionProps {
  children: React.ReactNode;
  type?: 'single' | 'multiple';
  defaultValue?: string | string[];
  className?: string;
  style?: React.CSSProperties;
  widthMax?: boolean;
}

interface AccordionContextValue {
  type: 'single' | 'multiple';
  openItems: Set<string>;
  toggleItem: (value: string) => void;
}

const AccordionContext = React.createContext<AccordionContextValue | null>(null);

export const Accordion: React.FC<AccordionProps> = ({ 
  children, 
  type = 'single',
  defaultValue,
  className,
  style,
  widthMax
}) => {
  const [openItems, setOpenItems] = React.useState<Set<string>>(() => {
    if (defaultValue) {
      if (Array.isArray(defaultValue)) {
        return new Set(defaultValue);
      } else {
        return new Set([defaultValue]);
      }
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

  const accordionClasses = [
    'pm7-accordion',
    widthMax && 'pm7-accordion--width-max',
    className
  ].filter(Boolean).join(' ');

  return (
    <AccordionContext.Provider value={{ type, openItems, toggleItem }}>
      <div className={accordionClasses} style={style}>
        {children}
      </div>
    </AccordionContext.Provider>
  );
};

interface AccordionItemProps {
  children: React.ReactNode;
  value: string;
  className?: string;
}

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

interface AccordionTriggerProps {
  children: React.ReactNode;
  value?: string;
  isOpen?: boolean;
  onToggle?: () => void;
  className?: string;
}

export const AccordionTrigger: React.FC<AccordionTriggerProps> = ({ 
  children,
  isOpen = false,
  onToggle,
  className
}) => {
  return (
    <button
      className={`pm7-accordion-trigger ${className || ''}`}
      onClick={onToggle}
      aria-expanded={isOpen}
      type="button"
    >
      {children}
      <svg 
        className="pm7-accordion-icon" 
        width="16" 
        height="16" 
        viewBox="0 0 16 16"
        aria-hidden="true"
      >
        <path 
          d="M4 6l4 4 4-4" 
          stroke="currentColor" 
          strokeWidth="2" 
          fill="none" 
          strokeLinecap="round" 
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
};

interface AccordionContentProps {
  children: React.ReactNode;
  value?: string;
  isOpen?: boolean;
  className?: string;
}

export const AccordionContent: React.FC<AccordionContentProps> = ({ 
  children,
  isOpen = false,
  className
}) => {
  return (
    <div 
      className={`pm7-accordion-content ${className || ''}`}
      data-state={isOpen ? 'open' : 'closed'}
      style={{ display: isOpen ? 'block' : 'none' }}
    >
      <div className="pm7-accordion-content-inner">
        {children}
      </div>
    </div>
  );
};