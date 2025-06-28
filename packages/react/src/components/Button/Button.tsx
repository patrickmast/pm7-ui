import React from 'react';
import { clsx } from 'clsx';
import '@pm7/core/dist/pm7.css';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'destructive' | 'link';
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    className,
    variant = 'primary',
    size = 'md',
    fullWidth = false,
    asChild = false,
    children,
    ...props 
  }, ref) => {
    const classes = clsx(
      'pm7-button',
      `pm7-button--${variant}`,
      `pm7-button--${size}`,
      fullWidth && 'pm7-button--full',
      className
    );
    
    if (asChild && React.isValidElement(children)) {
      return React.cloneElement(children as any, {
        className: clsx((children as any).props.className, classes),
        ref,
        ...props
      });
    }
    
    return (
      <button
        className={classes}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';