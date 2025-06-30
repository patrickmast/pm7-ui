import React, { useEffect, useRef } from 'react';
import { clsx } from 'clsx';
import { PM7Menu } from '@pm7/core';
import '@pm7/core/dist/pm7.css';

export interface MenuItem {
  id: string;
  label: string;
  icon?: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
  type?: 'item' | 'separator' | 'label';
}

export interface MenuProps {
  items: MenuItem[];
  trigger: React.ReactNode;
  align?: 'start' | 'center' | 'end';
  className?: string;
  onSelect?: (item: MenuItem) => void;
}

export const Menu: React.FC<MenuProps> = ({
  items,
  trigger,
  align = 'start',
  className,
  onSelect
}) => {
  const menuRef = useRef<HTMLDivElement>(null);
  const menuInstanceRef = useRef<PM7Menu | null>(null);
  
  useEffect(() => {
    if (!menuRef.current) return;
    
    // Check if menu is already initialized
    if (menuRef.current.dataset.pm7MenuInitialized === 'true') {
      return;
    }
    
    // Initialize PM7Menu
    menuInstanceRef.current = new PM7Menu(menuRef.current);
    menuRef.current.dataset.pm7MenuInitialized = 'true';
    
    // Listen for menu events
    const handleSelect = (e: CustomEvent) => {
      const itemElement = e.detail.item;
      const itemId = itemElement.getAttribute('data-item-id');
      const item = items.find(i => i.id === itemId);
      
      if (item && onSelect) {
        onSelect(item);
      }
    };
    
    menuRef.current.addEventListener('pm7-menu-select', handleSelect as EventListener);
    
    return () => {
      if (menuRef.current) {
        menuRef.current.removeEventListener('pm7-menu-select', handleSelect as EventListener);
        delete menuRef.current.dataset.pm7MenuInitialized;
        menuInstanceRef.current = null;
      }
    };
  }, [items, onSelect]);
  
  const renderMenuItem = (item: MenuItem) => {
    if (item.type === 'separator') {
      return <div key={item.id} className="pm7-menu-separator" />;
    }
    
    if (item.type === 'label') {
      return (
        <div key={item.id} className="pm7-menu-label">
          {item.label}
        </div>
      );
    }
    
    return (
      <button
        key={item.id}
        className="pm7-menu-item"
        disabled={item.disabled}
        data-item-id={item.id}
        onClick={item.onClick}
      >
        {item.icon && <span className="pm7-menu-item-icon">{item.icon}</span>}
        {item.label}
      </button>
    );
  };
  
  return (
    <div 
      ref={menuRef}
      className={clsx('pm7-menu', className)}
      data-pm7-menu
    >
      <div className="pm7-menu-trigger">
        {trigger}
      </div>
      <div className={clsx('pm7-menu-content', `pm7-menu-content--${align}`)}>
        {items.map(renderMenuItem)}
      </div>
    </div>
  );
};

// Compound components for more control
export interface MenuTriggerProps {
  children: React.ReactNode;
  className?: string;
}

export const MenuTrigger: React.FC<MenuTriggerProps> = ({ children, className }) => {
  return (
    <button className={clsx('pm7-menu-trigger', className)}>
      {children}
    </button>
  );
};

export interface MenuContentProps {
  children: React.ReactNode;
  className?: string;
  align?: 'start' | 'center' | 'end';
}

export const MenuContent: React.FC<MenuContentProps> = ({ 
  children, 
  className,
  align = 'start' 
}) => {
  return (
    <div className={clsx('pm7-menu-content', `pm7-menu-content--${align}`, className)}>
      {children}
    </div>
  );
};

export interface MenuItemProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  icon?: React.ReactNode;
}

export const MenuItem: React.FC<MenuItemProps> = ({ 
  children, 
  icon,
  className,
  ...props 
}) => {
  return (
    <button className={clsx('pm7-menu-item', className)} {...props}>
      {icon && <span className="pm7-menu-item-icon">{icon}</span>}
      {children}
    </button>
  );
};

export const MenuSeparator: React.FC = () => {
  return <div className="pm7-menu-separator" />;
};

export interface MenuLabelProps {
  children: React.ReactNode;
  className?: string;
}

export const MenuLabel: React.FC<MenuLabelProps> = ({ children, className }) => {
  return (
    <div className={clsx('pm7-menu-label', className)}>
      {children}
    </div>
  );
};