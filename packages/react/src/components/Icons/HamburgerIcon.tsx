import React from 'react';

export interface HamburgerIconProps {
  width?: number;
  height?: number;
  color?: string;
  className?: string;
}

/**
 * PM7 Hamburger Menu Icon
 * The standard PM7 hamburger menu icon with distinctive rounded bars
 */
export const HamburgerIcon: React.FC<HamburgerIconProps> = ({
  width = 18,
  height = 15,
  color = 'currentColor',
  className = ''
}) => {
  return (
    <svg 
      width={width} 
      height={height} 
      viewBox="0 0 18 15" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect width="18" height="2.5" rx="1.25" fill={color}/>
      <rect y="6.25" width="18" height="2.5" rx="1.25" fill={color}/>
      <rect y="12.5" width="18" height="2.5" rx="1.25" fill={color}/>
    </svg>
  );
};