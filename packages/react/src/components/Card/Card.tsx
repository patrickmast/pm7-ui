import React, { forwardRef } from 'react';
import '@pm7/core/dist/pm7.css';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'outlined' | 'ghost' | 'elevated' | 'success' | 'warning' | 'error' | 'info';
  padding?: 'none' | 'sm' | 'md' | 'lg';
  hoverable?: boolean;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ className = '', variant = 'default', padding = 'md', hoverable = false, ...props }, ref) => {
    const variantClasses = {
      default: '',
      outlined: 'pm7-card--outlined',
      ghost: 'pm7-card--ghost',
      elevated: 'pm7-card--elevated',
      success: 'pm7-card--success',
      warning: 'pm7-card--warning',
      error: 'pm7-card--error',
      info: 'pm7-card--info'
    };

    const paddingClasses = {
      none: 'pm7-card--no-padding',
      sm: 'pm7-card--sm',
      md: 'pm7-card--md',
      lg: 'pm7-card--lg'
    };

    const cardClasses = [
      'pm7-card',
      variantClasses[variant],
      paddingClasses[padding],
      hoverable ? 'pm7-card--hoverable' : '',
      className
    ].filter(Boolean).join(' ');

    return <div ref={ref} className={cardClasses} {...props} />;
  }
);

Card.displayName = 'Card';

export interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {}

export const CardHeader = forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ className = '', ...props }, ref) => {
    return <div ref={ref} className={`pm7-card-header ${className}`} {...props} />;
  }
);

CardHeader.displayName = 'CardHeader';

export interface CardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

export const CardTitle = forwardRef<HTMLHeadingElement, CardTitleProps>(
  ({ className = '', as: Component = 'h3', ...props }, ref) => {
    return <Component ref={ref} className={`pm7-card-title ${className}`} {...props} />;
  }
);

CardTitle.displayName = 'CardTitle';

export interface CardDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement> {}

export const CardDescription = forwardRef<HTMLParagraphElement, CardDescriptionProps>(
  ({ className = '', ...props }, ref) => {
    return <p ref={ref} className={`pm7-card-description ${className}`} {...props} />;
  }
);

CardDescription.displayName = 'CardDescription';

export interface CardContentProps extends React.HTMLAttributes<HTMLDivElement> {}

export const CardContent = forwardRef<HTMLDivElement, CardContentProps>(
  ({ className = '', ...props }, ref) => {
    return <div ref={ref} className={`pm7-card-content ${className}`} {...props} />;
  }
);

CardContent.displayName = 'CardContent';

export interface CardFooterProps extends React.HTMLAttributes<HTMLDivElement> {
  align?: 'start' | 'center' | 'end' | 'between';
}

export const CardFooter = forwardRef<HTMLDivElement, CardFooterProps>(
  ({ className = '', align = 'end', ...props }, ref) => {
    const alignClasses = {
      start: 'pm7-card-footer--start',
      center: 'pm7-card-footer--center',
      end: '',
      between: 'pm7-card-footer--between'
    };

    const footerClasses = [
      'pm7-card-footer',
      alignClasses[align],
      className
    ].filter(Boolean).join(' ');

    return <div ref={ref} className={footerClasses} {...props} />;
  }
);

CardFooter.displayName = 'CardFooter';

// Alias for compatibility
export const CardBody = CardContent;