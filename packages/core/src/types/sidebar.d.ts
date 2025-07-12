/**
 * PM7 Sidebar Component Type Definitions
 */

export interface PM7SidebarOptions {
  /** Position of the sidebar */
  position?: 'left' | 'right';
  
  /** Display mode of the sidebar */
  mode?: 'overlay' | 'push' | 'static';
  
  /** Whether the sidebar should be open by default */
  defaultOpen?: boolean;
  
  /** Width of the sidebar */
  width?: string | number;
  
  /** Whether to show overlay in overlay mode */
  showOverlay?: boolean;
  
  /** Whether to close on overlay click */
  closeOnOverlayClick?: boolean;
  
  /** Whether to close on escape key */
  closeOnEscape?: boolean;
  
  /** Whether to trap focus when open */
  trapFocus?: boolean;
  
  /** Animation duration in milliseconds */
  animationDuration?: number;
}

export interface PM7SidebarInstance {
  /** The sidebar element */
  element: HTMLElement;
  
  /** Whether the sidebar is currently open */
  isOpen: boolean;
  
  /** The overlay element (if applicable) */
  overlay: HTMLElement | null;
  
  /** Array of trigger elements */
  triggers: HTMLElement[];
  
  /** The close button element */
  closeButton: HTMLElement | null;
  
  /** The element that gets pushed (if in push mode) */
  pushElement: HTMLElement | null;
  
  /** Position of the sidebar */
  position: 'left' | 'right';
  
  /** Display mode */
  mode: 'overlay' | 'push' | 'static';
  
  /** Open the sidebar */
  open(): void;
  
  /** Close the sidebar */
  close(): void;
  
  /** Toggle the sidebar open/closed state */
  toggle(): void;
  
  /** Update ARIA attributes */
  updateAriaAttributes(): void;
  
  /** Destroy the sidebar instance */
  destroy(): void;
}

export interface PM7SidebarEvents {
  /** Fired when the sidebar opens */
  'pm7:sidebar:open': CustomEvent<{
    sidebar: PM7SidebarInstance;
  }>;
  
  /** Fired when the sidebar closes */
  'pm7:sidebar:close': CustomEvent<{
    sidebar: PM7SidebarInstance;
  }>;
  
  /** Fired when a collapsible section is toggled */
  'pm7:sidebar:collapsible:toggle': CustomEvent<{
    collapsible: HTMLElement;
    isOpen: boolean;
  }>;
}

// Augment HTMLElement interface
declare global {
  interface HTMLElement {
    PM7Sidebar?: PM7SidebarInstance;
  }
  
  interface HTMLElementEventMap extends PM7SidebarEvents {}
}

// Data attributes
export interface PM7SidebarDataAttributes {
  /** Marks an element as a sidebar */
  'data-pm7-sidebar'?: string;
  
  /** Marks an element as a sidebar trigger */
  'data-pm7-sidebar-trigger'?: string;
  
  /** Current state of the sidebar */
  'data-state'?: 'open' | 'closed';
  
  /** Marks element as initialized */
  'data-pm7-initialized'?: string;
}

// CSS classes
export interface PM7SidebarClasses {
  /** Base sidebar class */
  'pm7-sidebar': void;
  
  /** Open state modifier */
  'pm7-sidebar--open': void;
  
  /** Right-aligned modifier */
  'pm7-sidebar--right': void;
  
  /** Static mode modifier */
  'pm7-sidebar--static': void;
  
  /** Mini sidebar modifier */
  'pm7-sidebar--mini': void;
  
  /** Floating variant modifier */
  'pm7-sidebar--floating': void;
  
  /** Compact spacing modifier */
  'pm7-sidebar--compact': void;
  
  /** Sidebar header */
  'pm7-sidebar-header': void;
  
  /** Sidebar content */
  'pm7-sidebar-content': void;
  
  /** Sidebar footer */
  'pm7-sidebar-footer': void;
  
  /** Sidebar navigation container */
  'pm7-sidebar-nav': void;
  
  /** Nested navigation modifier */
  'pm7-sidebar-nav--nested': void;
  
  /** Sidebar navigation item */
  'pm7-sidebar-item': void;
  
  /** Active item modifier */
  'pm7-sidebar-item--active': void;
  
  /** Item icon */
  'pm7-sidebar-item-icon': void;
  
  /** Item text */
  'pm7-sidebar-item-text': void;
  
  /** Sidebar overlay */
  'pm7-sidebar-overlay': void;
  
  /** Visible overlay modifier */
  'pm7-sidebar-overlay--visible': void;
  
  /** Sidebar trigger button */
  'pm7-sidebar-trigger': void;
  
  /** Content that gets pushed */
  'pm7-sidebar-push': void;
  
  /** Active push state */
  'pm7-sidebar-push--active': void;
  
  /** Right-aligned push */
  'pm7-sidebar-push--right': void;
  
  /** Static push (for static sidebars) */
  'pm7-sidebar-push--static': void;
  
  /** Close button */
  'pm7-sidebar-close': void;
  
  /** Sidebar section */
  'pm7-sidebar-section': void;
  
  /** Section title */
  'pm7-sidebar-section-title': void;
  
  /** Sidebar divider */
  'pm7-sidebar-divider': void;
  
  /** Collapsible section */
  'pm7-sidebar-collapsible': void;
  
  /** Collapsible trigger */
  'pm7-sidebar-collapsible-trigger': void;
  
  /** Collapsible icon */
  'pm7-sidebar-collapsible-icon': void;
  
  /** Collapsible content */
  'pm7-sidebar-collapsible-content': void;
}

// Export functions
export declare function initSidebars(): void;

// Export class
export declare class PM7Sidebar implements PM7SidebarInstance {
  constructor(element: HTMLElement, options?: PM7SidebarOptions);
  
  element: HTMLElement;
  isOpen: boolean;
  overlay: HTMLElement | null;
  triggers: HTMLElement[];
  closeButton: HTMLElement | null;
  pushElement: HTMLElement | null;
  position: 'left' | 'right';
  mode: 'overlay' | 'push' | 'static';
  
  open(): void;
  close(): void;
  toggle(): void;
  updateAriaAttributes(): void;
  destroy(): void;
}