import React, { useEffect, useRef } from 'react';
import { clsx } from 'clsx';
import { PM7Dialog } from '@pm7/core';
import '@pm7/core/dist/pm7.css';

export interface DialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  children: React.ReactNode;
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  variant?: 'default' | 'alert' | 'success';
}

export const Dialog: React.FC<DialogProps> = ({
  open,
  onOpenChange,
  children,
  className,
  size = 'md',
  variant = 'default'
}) => {
  const dialogRef = useRef<HTMLDivElement>(null);
  const dialogInstanceRef = useRef<PM7Dialog | null>(null);
  
  useEffect(() => {
    if (!dialogRef.current) return;
    
    // Initialize PM7Dialog
    dialogInstanceRef.current = new PM7Dialog(dialogRef.current);
    
    // Listen for close events
    const handleClose = () => {
      onOpenChange(false);
    };
    
    dialogRef.current.addEventListener('pm7-dialog-close', handleClose);
    
    return () => {
      if (dialogRef.current) {
        dialogRef.current.removeEventListener('pm7-dialog-close', handleClose);
      }
    };
  }, [onOpenChange]);
  
  useEffect(() => {
    if (!dialogInstanceRef.current) return;
    
    if (open) {
      dialogInstanceRef.current.open();
    } else {
      dialogInstanceRef.current.close();
    }
  }, [open]);
  
  const variantClass = variant !== 'default' ? `pm7-dialog--${variant}` : '';
  
  return (
    <div ref={dialogRef}>
      <div className="pm7-dialog-backdrop" />
      <div className={clsx('pm7-dialog', `pm7-dialog--${size}`, variantClass, className)}>
        {children}
      </div>
    </div>
  );
};

export interface DialogHeaderProps {
  children: React.ReactNode;
  className?: string;
  showClose?: boolean;
  onClose?: () => void;
}

export const DialogHeader: React.FC<DialogHeaderProps> = ({
  children,
  className,
  showClose = true,
  onClose
}) => {
  return (
    <div className={clsx('pm7-dialog-header', className)}>
      <div>{children}</div>
      {showClose && (
        <button 
          className="pm7-dialog-close"
          aria-label="Close dialog"
          onClick={onClose}
        >
          ×
        </button>
      )}
    </div>
  );
};

export interface DialogTitleProps {
  children: React.ReactNode;
  className?: string;
}

export const DialogTitle: React.FC<DialogTitleProps> = ({ children, className }) => {
  return (
    <h2 className={clsx('pm7-dialog-title', className)}>
      {children}
    </h2>
  );
};

export interface DialogDescriptionProps {
  children: React.ReactNode;
  className?: string;
}

export const DialogDescription: React.FC<DialogDescriptionProps> = ({ children, className }) => {
  return (
    <p className={clsx('pm7-dialog-description', className)}>
      {children}
    </p>
  );
};

export interface DialogBodyProps {
  children: React.ReactNode;
  className?: string;
}

export const DialogBody: React.FC<DialogBodyProps> = ({ children, className }) => {
  return (
    <div className={clsx('pm7-dialog-body', className)}>
      {children}
    </div>
  );
};

export interface DialogFooterProps {
  children: React.ReactNode;
  className?: string;
}

export const DialogFooter: React.FC<DialogFooterProps> = ({ children, className }) => {
  return (
    <div className={clsx('pm7-dialog-footer', className)}>
      {children}
    </div>
  );
};

// Hooks for programmatic dialogs
export function useDialog() {
  const [isOpen, setIsOpen] = React.useState(false);
  
  const open = React.useCallback(() => setIsOpen(true), []);
  const close = React.useCallback(() => setIsOpen(false), []);
  const toggle = React.useCallback(() => setIsOpen(prev => !prev), []);
  
  return {
    isOpen,
    open,
    close,
    toggle,
    setIsOpen
  };
}