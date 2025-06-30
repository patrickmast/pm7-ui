import React, { createContext, useContext, useCallback } from 'react';
import '@pm7/core/dist/pm7.css';
import { showToast as coreShowToast, closeToast as coreCloseToast, closeAllToasts as coreCloseAllToasts } from '@pm7/core';

export interface ToastOptions {
  title?: string;
  description?: string;
  variant?: 'default' | 'destructive' | 'success' | 'warning' | 'info';
  duration?: number;
  action?: React.ReactNode;
  onClose?: () => void;
}

export interface ToastContextValue {
  toast: (options: ToastOptions | string) => void;
  closeToast: (id: string) => void;
  closeAllToasts: () => void;
}

const ToastContext = createContext<ToastContextValue | undefined>(undefined);

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    // Return a default implementation that uses the core functions directly
    return {
      toast: (options: ToastOptions | string) => {
        if (typeof options === 'string') {
          coreShowToast({ title: options, variant: 'default' });
        } else {
          coreShowToast(options);
        }
      },
      closeToast: coreCloseToast,
      closeAllToasts: coreCloseAllToasts
    };
  }
  return context;
};

export interface ToastProviderProps {
  children: React.ReactNode;
}

export const ToastProvider: React.FC<ToastProviderProps> = ({ children }) => {
  const toast = useCallback((options: ToastOptions | string) => {
    if (typeof options === 'string') {
      coreShowToast({ title: options, variant: 'default' });
    } else {
      coreShowToast(options);
    }
  }, []);

  const value: ToastContextValue = {
    toast,
    closeToast: coreCloseToast,
    closeAllToasts: coreCloseAllToasts
  };

  return (
    <ToastContext.Provider value={value}>
      {children}
    </ToastContext.Provider>
  );
};

// Toaster component for compatibility (no-op since viewport is created automatically)
export const Toaster: React.FC = () => null;

// Toast component for custom rendering (if needed)
export interface ToastProps {
  title?: string;
  description?: string;
  variant?: 'default' | 'destructive' | 'success' | 'warning' | 'info';
  onClose?: () => void;
  action?: React.ReactNode;
  className?: string;
}

export const Toast: React.FC<ToastProps> = ({ 
  title, 
  description, 
  variant = 'default',
  onClose,
  action,
  className = ''
}) => {
  const toastClasses = [
    'pm7-toast',
    `pm7-toast--${variant}`,
    className
  ].filter(Boolean).join(' ');

  return (
    <div className={toastClasses} data-state="open">
      <div className="pm7-toast-header">
        <div>
          {title && <h3 className="pm7-toast-title">{title}</h3>}
          {description && <p className="pm7-toast-description">{description}</p>}
        </div>
        <button className="pm7-toast-close" onClick={onClose} aria-label="Close">
          &times;
        </button>
      </div>
      {action && <div className="pm7-toast-action">{action}</div>}
    </div>
  );
};

// Export convenience function for showing toasts without context
export const toast = (options: ToastOptions | string) => {
  if (typeof options === 'string') {
    coreShowToast({ title: options, variant: 'default' });
  } else {
    coreShowToast(options);
  }
};