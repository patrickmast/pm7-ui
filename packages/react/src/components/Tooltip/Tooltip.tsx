import React, { useRef, useEffect, ReactNode, CSSProperties } from 'react';
import { PM7Tooltip } from '@pm7/core';

export interface TooltipProps {
  children: ReactNode;
  content: ReactNode;
  side?: 'top' | 'bottom' | 'left' | 'right';
  align?: 'start' | 'center' | 'end';
  delay?: number;
  openDelay?: number;
  closeDelay?: number;
  className?: string;
  contentClassName?: string;
  style?: CSSProperties;
  disabled?: boolean;
  multiline?: boolean;
  theme?: 'dark' | 'light';
  size?: 'sm' | 'md' | 'lg';
  arrow?: boolean;
}

export const Tooltip: React.FC<TooltipProps> = ({
  children,
  content,
  side = 'top',
  align = 'center',
  delay,
  openDelay,
  closeDelay,
  className = '',
  contentClassName = '',
  style,
  disabled = false,
  multiline = false,
  theme = 'dark',
  size = 'md',
  arrow = true,
}) => {
  const tooltipRef = useRef<HTMLDivElement>(null);
  const tooltipInstanceRef = useRef<PM7Tooltip | null>(null);
  const contentId = useRef(`pm7-tooltip-content-${Math.random().toString(36).substr(2, 9)}`);

  useEffect(() => {
    if (tooltipRef.current && !disabled) {
      // Initialize the tooltip
      tooltipInstanceRef.current = new PM7Tooltip(tooltipRef.current);
    }

    return () => {
      // Cleanup on unmount
      if (tooltipInstanceRef.current) {
        tooltipInstanceRef.current.destroy();
        tooltipInstanceRef.current = null;
      }
    };
  }, [disabled]);

  // Update tooltip configuration when props change
  useEffect(() => {
    if (tooltipInstanceRef.current) {
      tooltipInstanceRef.current.side = side;
      tooltipInstanceRef.current.align = align;
      tooltipInstanceRef.current.delay = delay || 0;
      tooltipInstanceRef.current.openDelay = openDelay || delay || 0;
      tooltipInstanceRef.current.closeDelay = closeDelay || 0;
    }
  }, [side, align, delay, openDelay, closeDelay]);

  if (disabled) {
    return <>{children}</>;
  }

  // Build content class names
  const contentClasses = [
    'pm7-tooltip-content',
    size !== 'md' && `pm7-tooltip-content--${size}`,
    theme === 'light' && 'pm7-tooltip-content--light',
    multiline && 'pm7-tooltip-content--multiline',
    contentClassName
  ].filter(Boolean).join(' ');

  // Build tooltip class names
  const tooltipClasses = [
    'pm7-tooltip',
    (delay && delay > 400) || (openDelay && openDelay > 400) ? 'pm7-tooltip--delay-long' :
    (delay && delay > 0) || (openDelay && openDelay > 0) ? 'pm7-tooltip--delay-short' : '',
    className
  ].filter(Boolean).join(' ');

  return (
    <div
      ref={tooltipRef}
      className={tooltipClasses}
      style={style}
      data-delay={delay}
      data-open-delay={openDelay}
      data-close-delay={closeDelay}
    >
      <div className="pm7-tooltip-trigger">
        {children}
      </div>
      <div
        id={contentId.current}
        className={contentClasses}
        data-side={side}
        data-align={align}
      >
        {content}
        {arrow && <div className="pm7-tooltip-arrow" />}
      </div>
    </div>
  );
};

// Additional convenience component for icon tooltips
export interface IconTooltipProps extends Omit<TooltipProps, 'children'> {
  icon?: ReactNode;
}

export const IconTooltip: React.FC<IconTooltipProps> = ({
  icon = (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="pm7-tooltip-icon">
      <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M8 12V8M8 4V4.01" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  ...props
}) => {
  return (
    <Tooltip {...props}>
      {icon}
    </Tooltip>
  );
};