import React, { forwardRef } from 'react';
import '@pm7/core/dist/pm7.css';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  variant?: 'default' | 'error' | 'success';
  inputSize?: 'sm' | 'md' | 'lg';
  withIcon?: { left?: React.ReactNode; right?: React.ReactNode };
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className = '', variant = 'default', inputSize = 'md', withIcon, ...props }, ref) => {
    const variantClasses = {
      default: '',
      error: 'pm7-input--error',
      success: 'pm7-input--success'
    };

    const sizeClasses = {
      sm: 'pm7-input--sm',
      md: '',
      lg: 'pm7-input--lg'
    };

    const iconClasses = {
      left: withIcon?.left ? 'pm7-input--with-icon-left' : '',
      right: withIcon?.right ? 'pm7-input--with-icon-right' : ''
    };

    const inputClasses = [
      'pm7-input',
      variantClasses[variant],
      sizeClasses[inputSize],
      iconClasses.left,
      iconClasses.right,
      className
    ].filter(Boolean).join(' ');

    if (withIcon?.left || withIcon?.right) {
      return (
        <div className="pm7-input-icon-wrapper">
          {withIcon.left && (
            <span className="pm7-input-icon pm7-input-icon--left">
              {withIcon.left}
            </span>
          )}
          <input
            ref={ref}
            className={inputClasses}
            {...props}
          />
          {withIcon.right && (
            <span className="pm7-input-icon pm7-input-icon--right">
              {withIcon.right}
            </span>
          )}
        </div>
      );
    }

    return (
      <input
        ref={ref}
        className={inputClasses}
        {...props}
      />
    );
  }
);

Input.displayName = 'Input';

// Label component
export interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement> {
  required?: boolean;
}

export const Label = forwardRef<HTMLLabelElement, LabelProps>(
  ({ className = '', required, children, ...props }, ref) => {
    const labelClasses = [
      'pm7-label',
      required ? 'pm7-label--required' : '',
      className
    ].filter(Boolean).join(' ');

    return (
      <label ref={ref} className={labelClasses} {...props}>
        {children}
      </label>
    );
  }
);

Label.displayName = 'Label';

// Helper text component
export interface HelperTextProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'error' | 'success';
}

export const HelperText: React.FC<HelperTextProps> = ({ 
  className = '', 
  variant = 'default', 
  ...props 
}) => {
  const variantClasses = {
    default: '',
    error: 'pm7-helper-text--error',
    success: 'pm7-helper-text--success'
  };

  const helperClasses = [
    'pm7-helper-text',
    variantClasses[variant],
    className
  ].filter(Boolean).join(' ');

  return <span className={helperClasses} {...props} />;
};

// Textarea component
export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  variant?: 'default' | 'error' | 'success';
  inputSize?: 'sm' | 'md' | 'lg';
  noResize?: boolean;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className = '', variant = 'default', inputSize = 'md', noResize, ...props }, ref) => {
    const variantClasses = {
      default: '',
      error: 'pm7-input--error',
      success: 'pm7-input--success'
    };

    const sizeClasses = {
      sm: 'pm7-input--sm',
      md: '',
      lg: 'pm7-input--lg'
    };

    const textareaClasses = [
      'pm7-input',
      variantClasses[variant],
      sizeClasses[inputSize],
      noResize ? 'pm7-input--no-resize' : '',
      className
    ].filter(Boolean).join(' ');

    return (
      <textarea
        ref={ref}
        className={textareaClasses}
        {...props}
      />
    );
  }
);

Textarea.displayName = 'Textarea';