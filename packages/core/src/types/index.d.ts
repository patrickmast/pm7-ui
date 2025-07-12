// PM7 Core Type Definitions

// Import attribute types for better IntelliSense
export * from './attributes';

// Import sidebar types
export * from './sidebar';
import { PM7Sidebar, initSidebars } from './sidebar';

// Import callout types
export * from './callout';

// Menu
export class PM7Menu {
  constructor(element: HTMLElement);
  element: HTMLElement;
  trigger: HTMLElement | null;
  content: HTMLElement | null;
  isOpen: boolean;
  open(): void;
  close(): void;
  toggle(): void;
  destroy(): void;
}

// Dialog
export interface DialogOptions {
  title?: string;
  content?: string;
  buttons?: DialogButton[];
  className?: string;
  closeOnOverlay?: boolean;
  closeOnEscape?: boolean;
  onOpen?: () => void;
  onClose?: () => void;
}

export interface DialogButton {
  text: string;
  variant?: 'primary' | 'secondary' | 'destructive';
  onClick?: () => void | Promise<void>;
  closeOnClick?: boolean;
}

export class PM7Dialog {
  constructor(element: HTMLElement);
  element: HTMLElement;
  isOpen: boolean;
  open(): void;
  close(): void;
  destroy(): void;
}

export function createDialog(options: DialogOptions): PM7Dialog;
export function confirm(message: string, options?: Partial<DialogOptions>): Promise<boolean>;
export function alert(message: string, options?: Partial<DialogOptions>): Promise<void>;

// Dialog helper functions
/**
 * Opens a dialog by its data-pm7-dialog ID
 * @param dialogId The ID specified in data-pm7-dialog attribute
 */
export function openDialog(dialogId: string): void;
/**
 * Closes a dialog by its data-pm7-dialog ID
 * @param dialogId The ID specified in data-pm7-dialog attribute
 */
export function closeDialog(dialogId: string): void;

// Button
export class PM7Button {
  constructor(element: HTMLElement);
  element: HTMLElement;
}
export function initButtons(container?: HTMLElement | Document): void;

// Toast
export interface ToastOptions {
  message: string;
  type?: 'info' | 'success' | 'warning' | 'error';
  duration?: number;
  position?: 'top-left' | 'top-center' | 'top-right' | 'bottom-left' | 'bottom-center' | 'bottom-right';
  dismissible?: boolean;
  action?: {
    label: string;
    onClick: () => void;
  };
  onClose?: () => void;
}

export class PM7Toast {
  constructor(options: ToastOptions);
  id: string;
  options: ToastOptions;
  element: HTMLElement | null;
  show(): void;
  hide(): void;
  destroy(): void;
}

export function showToast(options: ToastOptions | string): PM7Toast;
export function closeToast(id: string): void;
export function closeAllToasts(): void;

// Tab Selector
export class PM7TabSelector {
  constructor(element: HTMLElement);
  element: HTMLElement;
  tabList: HTMLElement | null;
  tabs: HTMLElement[];
  panels: HTMLElement[];
  activeTab: HTMLElement | null;
  selectTab(tab: HTMLElement): void;
  selectTabByIndex(index: number): void;
  selectTabById(id: string): void;
  getActiveTab(): HTMLElement | null;
  getActiveIndex(): number;
  destroy(): void;
}

// Tooltip
export class PM7Tooltip {
  constructor(element: HTMLElement);
  element: HTMLElement;
  trigger: HTMLElement | null;
  content: HTMLElement | null;
  side: string;
  align: string;
  delay: number;
  openDelay: number;
  closeDelay: number;
  isOpen: boolean;
  show(): void;
  hide(): void;
  updatePosition(): void;
  destroy(): void;
}

export function initTooltips(container?: Document | HTMLElement): void;

// Accordion
export class PM7Accordion {
  constructor(element: HTMLElement);
  element: HTMLElement;
  items: HTMLElement[];
  openItem: HTMLElement | null;
  allowMultiple: boolean;
  openItem(item: HTMLElement): void;
  closeItem(item: HTMLElement): void;
  toggleItem(item: HTMLElement): void;
  openAll(): void;
  closeAll(): void;
  destroy(): void;
}

// Theme Switch
export class PM7ThemeSwitch {
  constructor(element: HTMLElement);
  element: HTMLElement;
  button: HTMLElement | null;
  currentTheme: 'light' | 'dark';
  setTheme(theme: 'light' | 'dark'): void;
  toggleTheme(): void;
  destroy(): void;
}

// Icons
export function createHamburgerIcon(size?: number, strokeWidth?: number): string;
export function createHamburgerIconElement(size?: number, strokeWidth?: number): SVGElement;
export function getHamburgerIconDataURI(size?: number, strokeWidth?: number): string;

// Utility functions
export function initPM7(container?: HTMLElement | Document): void;

// Re-export everything as default for convenience
declare const PM7: {
  Menu: typeof PM7Menu;
  Dialog: typeof PM7Dialog;
  Button: typeof PM7Button;
  Toast: typeof PM7Toast;
  TabSelector: typeof PM7TabSelector;
  Tooltip: typeof PM7Tooltip;
  Accordion: typeof PM7Accordion;
  ThemeSwitch: typeof PM7ThemeSwitch;
  Sidebar: typeof PM7Sidebar;
  createDialog: typeof createDialog;
  confirm: typeof confirm;
  alert: typeof alert;
  showToast: typeof showToast;
  closeToast: typeof closeToast;
  closeAllToasts: typeof closeAllToasts;
  initButtons: typeof initButtons;
  initTooltips: typeof initTooltips;
  initSidebars: typeof initSidebars;
  initPM7: typeof initPM7;
};

export default PM7;