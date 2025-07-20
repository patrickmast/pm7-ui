/**
 * PM7 Core JavaScript Components
 * Export all interactive components
 */

export { PM7Menu } from './menu.js';
export { PM7Dialog, createDialog, pm7Confirm as confirm, pm7Alert as alert, openDialog, closeDialog } from './dialog.js';
export { PM7Button, initButtons } from './button.js';
export { PM7Toast, showToast, closeToast, closeAllToasts } from './toast.js';
export { PM7TabSelector } from './tab-selector.js';
export { PM7Tooltip, initTooltips } from './tooltip.js';
export { PM7Accordion } from './accordion.js';
export { PM7ThemeSwitch } from './theme-switch.js';
export { PM7Sidebar, initSidebars } from './sidebar.js';

// Icons
export { 
  createHamburgerIcon, 
  createHamburgerIconElement,
  getHamburgerIconDataURI 
} from '../icons/hamburger.js';

// Import components first
import { PM7Menu } from './menu.js';
import { PM7Dialog, createDialog, pm7Confirm as confirm, pm7Alert as alert, openDialog, closeDialog } from './dialog.js';
import { PM7Button, initButtons } from './button.js';
import { PM7Toast, showToast, closeToast, closeAllToasts } from './toast.js';
import { PM7TabSelector } from './tab-selector.js';
import { PM7Tooltip, initTooltips } from './tooltip.js';
import { PM7Accordion } from './accordion.js';
import { PM7ThemeSwitch } from './theme-switch.js';
import { PM7Sidebar, initSidebars } from './sidebar.js';

// Auto-initialization - these imports trigger DOMContentLoaded listeners
import './menu.js';
import './dialog.js';
import './button.js';
import './toast.js';
import './tab-selector.js';
import './tooltip.js';
import './accordion.js';
import './theme-switch.js';
import './sidebar.js';

// Global PM7 object with helper functions
const PM7 = {
  // Initialize all PM7 components on the page
  init(container = document) {
    console.log('[PM7] Initializing all components...');
    
    // Initialize menus
    const menus = container.querySelectorAll('[data-pm7-menu]:not([data-pm7-menu-initialized])');
    menus.forEach(menu => {
      new PM7Menu(menu);
      menu.setAttribute('data-pm7-menu-initialized', 'true');
    });
    
    // Initialize dialogs
    const dialogs = container.querySelectorAll('[data-pm7-dialog]:not([data-pm7-dialog-initialized])');
    dialogs.forEach(dialog => {
      new PM7Dialog(dialog);
      dialog.setAttribute('data-pm7-dialog-initialized', 'true');
    });
    
    // Initialize buttons with special features
    initButtons(container);
    
    // Initialize tab selectors
    const tabSelectors = container.querySelectorAll('[data-pm7-tab-selector]:not([data-pm7-tab-initialized])');
    tabSelectors.forEach(tabSelector => {
      new PM7TabSelector(tabSelector);
      tabSelector.setAttribute('data-pm7-tab-initialized', 'true');
    });
    
    // Initialize tooltips
    initTooltips(container);
    
    // Initialize accordions
    const accordions = container.querySelectorAll('[data-pm7-accordion]:not([data-pm7-accordion-initialized])');
    accordions.forEach(accordion => {
      new PM7Accordion(accordion);
      accordion.setAttribute('data-pm7-accordion-initialized', 'true');
    });
    
    // Initialize theme switches
    const themeSwitches = container.querySelectorAll('[data-pm7-theme-switch]:not([data-pm7-theme-switch-initialized])');
    themeSwitches.forEach(themeSwitch => {
      new PM7ThemeSwitch(themeSwitch);
      themeSwitch.setAttribute('data-pm7-theme-switch-initialized', 'true');
    });
    
    // Initialize sidebars
    const sidebars = container.querySelectorAll('[data-pm7-sidebar]:not([data-pm7-initialized])');
    sidebars.forEach(sidebar => {
      new PM7Sidebar(sidebar);
      sidebar.setAttribute('data-pm7-initialized', 'true');
    });
    
    console.log('[PM7] All components initialized');
  },
  
  // Re-initialize all components (useful after dynamic content updates)
  reinit(container = document) {
    console.log('[PM7] Re-initializing all components...');
    
    // Remove initialization markers
    container.querySelectorAll('[data-pm7-menu-initialized]').forEach(el => {
      el.removeAttribute('data-pm7-menu-initialized');
    });
    container.querySelectorAll('[data-pm7-dialog-initialized]').forEach(el => {
      el.removeAttribute('data-pm7-dialog-initialized');
    });
    container.querySelectorAll('[data-pm7-tab-initialized]').forEach(el => {
      el.removeAttribute('data-pm7-tab-initialized');
    });
    container.querySelectorAll('[data-pm7-tooltip-initialized]').forEach(el => {
      el.removeAttribute('data-pm7-tooltip-initialized');
    });
    container.querySelectorAll('[data-pm7-accordion-initialized]').forEach(el => {
      el.removeAttribute('data-pm7-accordion-initialized');
    });
    container.querySelectorAll('[data-pm7-theme-switch-initialized]').forEach(el => {
      el.removeAttribute('data-pm7-theme-switch-initialized');
    });
    container.querySelectorAll('[data-pm7-initialized]').forEach(el => {
      el.removeAttribute('data-pm7-initialized');
    });
    
    // Re-initialize
    this.init(container);
  },
  
  // Component constructors for manual initialization
  Menu: PM7Menu,
  Dialog: PM7Dialog,
  Button: PM7Button,
  Toast: PM7Toast,
  TabSelector: PM7TabSelector,
  Tooltip: PM7Tooltip,
  Accordion: PM7Accordion,
  ThemeSwitch: PM7ThemeSwitch,
  Sidebar: PM7Sidebar,
  
  // Utility functions
  showToast,
  closeToast,
  closeAllToasts,
  alert,
  confirm,
  createDialog,
  openDialog,
  closeDialog
};

// Make PM7 globally available
if (typeof window !== 'undefined') {
  window.PM7 = PM7;
}

// Export PM7 object
export { PM7 };
export default PM7;