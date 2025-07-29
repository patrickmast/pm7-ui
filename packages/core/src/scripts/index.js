/**
 * PM7 Core JavaScript Components
 * Export all interactive components
 */

export { PM7Menu } from './menu.js';
export { PM7Dialog, createDialog, pm7Confirm as confirm, pm7Alert as alert, openDialog, closeDialog, autoInitDialogs } from './dialog.js';
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
import { PM7Dialog, createDialog, pm7Confirm as confirm, pm7Alert as alert, openDialog, closeDialog, autoInitDialogs } from './dialog.js';
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

// Self-healing function for menus
function healMenus() {
  // Find all menus that were initialized but lost their instance
  const lostMenus = document.querySelectorAll('[data-pm7-menu][data-pm7-menu-initialized]:not([data-pm7-menu-healing])');
  
  lostMenus.forEach(menu => {
    if (!menu._pm7MenuInstance || !PM7Menu.instances.has(menu)) {
      menu.setAttribute('data-pm7-menu-healing', 'true');
      console.log('[PM7Menu] Healing menu:', menu);
      new PM7Menu(menu);
      menu.removeAttribute('data-pm7-menu-healing');
    }
  });
}

// Self-healing function for accordions
function healAccordions() {
  // Find all accordions that were initialized but lost their instance
  const lostAccordions = document.querySelectorAll('[data-pm7-accordion][data-pm7-accordion-initialized]:not([data-pm7-accordion-healing])');
  
  lostAccordions.forEach(accordion => {
    if (!accordion._pm7AccordionInstance || !PM7Accordion.instances.has(accordion)) {
      accordion.setAttribute('data-pm7-accordion-healing', 'true');
      console.log('[PM7Accordion] Healing accordion:', accordion);
      PM7Accordion.autoInit(); // Re-init just this accordion
      accordion.removeAttribute('data-pm7-accordion-healing');
    }
  });
}

// Self-healing function for tab selectors
function healTabSelectors() {
  // Find all tab selectors that were initialized but lost their instance
  const lostTabSelectors = document.querySelectorAll('[data-pm7-tab-selector][data-pm7-tab-initialized]:not([data-pm7-tab-healing])');
  
  lostTabSelectors.forEach(selector => {
    if (!selector._pm7TabSelectorInstance || !PM7TabSelector.instances.has(selector)) {
      selector.setAttribute('data-pm7-tab-healing', 'true');
      console.log('[PM7TabSelector] Healing tab selector:', selector);
      new PM7TabSelector(selector);
      selector.removeAttribute('data-pm7-tab-healing');
    }
  });
}

// Self-healing function for tooltips
function healTooltips() {
  // Find all tooltips that were initialized but lost their instance
  const lostTooltips = document.querySelectorAll('[data-pm7-tooltip][data-pm7-tooltip-initialized]:not([data-pm7-tooltip-healing])');
  
  lostTooltips.forEach(tooltip => {
    if (!tooltip._pm7TooltipInstance || !PM7Tooltip.instances.has(tooltip)) {
      tooltip.setAttribute('data-pm7-tooltip-healing', 'true');
      console.log('[PM7Tooltip] Healing tooltip:', tooltip);
      new PM7Tooltip(tooltip);
      tooltip.removeAttribute('data-pm7-tooltip-healing');
    }
  });
}

// Self-healing function for sidebars
function healSidebars() {
  // Find all sidebars that were initialized but lost their instance
  const lostSidebars = document.querySelectorAll('[data-pm7-sidebar][data-pm7-initialized]:not([data-pm7-sidebar-healing])');
  
  lostSidebars.forEach(sidebar => {
    if (!sidebar._pm7SidebarInstance || !PM7Sidebar.instances.has(sidebar)) {
      sidebar.setAttribute('data-pm7-sidebar-healing', 'true');
      console.log('[PM7Sidebar] Healing sidebar:', sidebar);
      new PM7Sidebar(sidebar);
      sidebar.removeAttribute('data-pm7-sidebar-healing');
    }
  });
}

// Global PM7 object with helper functions
const PM7 = {
  // Initialize all PM7 components on the page
  init(container = document, options = {}) {
    console.log('[PM7] Initializing all components...');
    
    // Options for better framework integration
    const {
      delay = 0,           // Delay before initialization (useful for React)
      force = false,       // Force re-initialization even if already initialized
      heal = true         // Run healing after initialization
    } = options;
    
    // Function to run the actual initialization
    const runInit = () => {
      // If force is true, remove all initialization markers first
      if (force) {
        container.querySelectorAll('[data-pm7-menu-initialized]').forEach(el => el.removeAttribute('data-pm7-menu-initialized'));
        container.querySelectorAll('[data-pm7-dialog-initialized]').forEach(el => el.removeAttribute('data-pm7-dialog-initialized'));
        container.querySelectorAll('[data-pm7-tab-initialized]').forEach(el => el.removeAttribute('data-pm7-tab-initialized'));
        container.querySelectorAll('[data-pm7-tooltip-initialized]').forEach(el => el.removeAttribute('data-pm7-tooltip-initialized'));
        container.querySelectorAll('[data-pm7-accordion-initialized]').forEach(el => el.removeAttribute('data-pm7-accordion-initialized'));
        container.querySelectorAll('[data-pm7-theme-switch-initialized]').forEach(el => el.removeAttribute('data-pm7-theme-switch-initialized'));
        container.querySelectorAll('[data-pm7-initialized]').forEach(el => el.removeAttribute('data-pm7-initialized'));
      }
      
      // Initialize menus
    const menus = container.querySelectorAll('[data-pm7-menu]:not([data-pm7-menu-initialized])');
    menus.forEach(menu => {
      new PM7Menu(menu);
      menu.setAttribute('data-pm7-menu-initialized', 'true');
    });
    
    // Initialize dialogs - also handle auto-init for new dialogs
    autoInitDialogs(); // First auto-init any new dialogs
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
    const tooltips = container.querySelectorAll('[data-pm7-tooltip]:not([data-pm7-tooltip-initialized])');
    tooltips.forEach(tooltip => {
      // Skip if this element is already part of a tooltip structure
      if (!tooltip.classList.contains('pm7-tooltip-trigger') && !tooltip.classList.contains('pm7-tooltip-content')) {
        new PM7Tooltip(tooltip);
        // Note: data-pm7-tooltip-initialized is set by the constructor
      }
    });
    
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
    
    // Also run healing for components that might have been re-rendered
    if (heal) {
      healMenus();
      healAccordions();
      healTabSelectors();
      healTooltips();
      healSidebars();
    }
    
    console.log('[PM7] All components initialized');
    };
    
    // Handle delay option for framework timing
    if (delay > 0) {
      setTimeout(runInit, delay);
    } else {
      runInit();
    }
  },
  
  // Convenience method for React/Vue with sensible defaults
  initFramework(container = document) {
    return this.init(container, { delay: 50, heal: true });
  },
  
  // Re-initialize all components (useful after dynamic content updates)
  reinit(container = document) {
    console.log('[PM7] Re-initializing all components...');
    return this.init(container, { force: true, heal: true });
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
  closeDialog,
  autoInitDialogs,
  initTooltips,
  
  // Self-healing functions
  healMenus,
  healAccordions,
  healTabSelectors,
  healTooltips,
  healSidebars,
  heal() {
    // Heal all components that support self-healing
    healMenus();
    healAccordions();
    healTabSelectors();
    healTooltips();
    healSidebars();
  }
};

// Make PM7 globally available
if (typeof window !== 'undefined') {
  window.PM7 = PM7;
  
  // Set up periodic self-healing check (for frameworks that don't notify)
  // This helps with React, Vue, and other frameworks that re-render DOM
  if (!window.__PM7_SELF_HEALING_INTERVAL__) {
    window.__PM7_SELF_HEALING_INTERVAL__ = setInterval(() => {
      PM7.heal();
    }, 1000); // Check every second
  }
}

// Export PM7 object
export { PM7 };
export default PM7;