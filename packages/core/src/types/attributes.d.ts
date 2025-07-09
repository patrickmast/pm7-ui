// PM7 Core HTML Attribute Type Definitions
// These type definitions help AI agents and developers understand PM7 attributes

declare namespace PM7Attributes {
  // Dialog Attributes
  interface DialogAttributes {
    'data-pm7-dialog': string; // Unique dialog identifier
    'data-pm7-dialog-size'?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
    'data-pm7-dialog-icon'?: 'info' | 'warning' | 'error' | 'success';
    'data-pm7-show-close'?: boolean;
    'data-pm7-header-separator'?: boolean;
    'data-pm7-no-escape'?: boolean;
    'data-pm7-no-overlay-close'?: boolean;
    'data-state'?: 'open' | 'closed' | 'closing';
  }

  interface DialogSectionAttributes {
    'data-pm7-header'?: boolean;
    'data-pm7-dialog-title'?: string;
    'data-pm7-dialog-subtitle'?: string;
    'data-pm7-body'?: boolean;
    'data-pm7-footer'?: boolean;
  }

  // Accordion Attributes
  interface AccordionAttributes {
    'data-pm7-accordion'?: boolean;
    'data-allow-multiple'?: boolean;
    'data-default-open'?: number | 'all';
    'data-icon-position'?: 'start' | 'end';
    'data-text-align'?: 'left' | 'center' | 'right';
    'data-height'?: 'sm' | 'md' | 'lg' | 'fixed';
    'data-fixed-height'?: number;
  }

  interface AccordionItemAttributes {
    'data-state'?: 'open' | 'closed';
    'data-initial'?: boolean;
  }

  // Menu Attributes
  interface MenuAttributes {
    'data-pm7-menu'?: boolean;
    'data-pm7-menu-initialized'?: boolean;
    'data-position'?: 'bottom-start' | 'bottom-end' | 'top-start' | 'top-end' | 'left-start' | 'left-end' | 'right-start' | 'right-end';
  }

  interface MenuItemAttributes {
    'data-checked'?: boolean;
    'data-name'?: string; // For radio groups
    'data-value'?: string;
    'data-submenu-open'?: boolean;
  }

  // Tab Selector Attributes
  interface TabSelectorAttributes {
    'data-pm7-tab-selector'?: boolean;
    'data-pm7-tab-selector-initialized'?: boolean;
    'data-default-tab'?: number;
  }

  interface TabAttributes {
    'data-state'?: 'active' | 'inactive';
  }

  // Theme Switch Attributes
  interface ThemeSwitchAttributes {
    'data-pm7-theme-switch'?: boolean;
    'data-default-theme'?: 'light' | 'dark' | 'system';
    'data-storage-key'?: string;
    'data-apply-to-root'?: boolean;
    'data-theme'?: 'light' | 'dark';
  }

  // Tooltip Attributes
  interface TooltipAttributes {
    'data-pm7-tooltip': string; // Tooltip content
    'data-side'?: 'top' | 'right' | 'bottom' | 'left';
    'data-align'?: 'start' | 'center' | 'end';
    'data-delay'?: number;
    'data-open-delay'?: number;
    'data-close-delay'?: number;
    'data-state'?: 'open' | 'closed';
  }

  // Toast Attributes (runtime only)
  interface ToastAttributes {
    'data-toast-id': string;
    'data-state': 'open' | 'closed';
  }
}

// Extend HTML element interfaces for better IntelliSense
declare global {
  interface HTMLDivElement {
    // Dialog
    'data-pm7-dialog'?: string;
    'data-pm7-dialog-size'?: PM7Attributes.DialogAttributes['data-pm7-dialog-size'];
    'data-pm7-dialog-icon'?: PM7Attributes.DialogAttributes['data-pm7-dialog-icon'];
    'data-pm7-show-close'?: '';
    'data-pm7-header-separator'?: '';
    'data-pm7-no-escape'?: '';
    'data-pm7-no-overlay-close'?: '';
    'data-pm7-header'?: '';
    'data-pm7-dialog-title'?: string;
    'data-pm7-dialog-subtitle'?: string;
    'data-pm7-body'?: '';
    'data-pm7-footer'?: '';
    
    // Accordion
    'data-pm7-accordion'?: '';
    'data-allow-multiple'?: string;
    'data-default-open'?: string;
    
    // Menu
    'data-pm7-menu'?: '';
    'data-position'?: PM7Attributes.MenuAttributes['data-position'];
    
    // Tab Selector
    'data-pm7-tab-selector'?: '';
    'data-default-tab'?: string;
  }

  interface HTMLButtonElement {
    // Menu items
    'data-checked'?: string;
    'data-name'?: string;
    'data-value'?: string;
    
    // Theme switch
    'data-pm7-theme-switch'?: '';
    'data-default-theme'?: PM7Attributes.ThemeSwitchAttributes['data-default-theme'];
    'data-storage-key'?: string;
    'data-apply-to-root'?: string;
    
    // Tooltip
    'data-pm7-tooltip'?: string;
    'data-side'?: PM7Attributes.TooltipAttributes['data-side'];
    'data-align'?: PM7Attributes.TooltipAttributes['data-align'];
    'data-delay'?: string;
  }

  interface HTMLElement {
    'data-state'?: 'open' | 'closed' | 'closing' | 'active' | 'inactive';
    'data-theme'?: 'light' | 'dark';
  }
}

export { PM7Attributes };