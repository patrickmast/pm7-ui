/**
 * PM7Dialog - Vanilla JavaScript dialog/modal component
 * Handles modal dialogs with accessibility features
 */
export class PM7Dialog {
  constructor(element) {
    this.element = element;
    
    // AI-Agent FIRST: Automatically add pm7-dialog class if missing
    if (!this.element.classList.contains('pm7-dialog')) {
      this.element.classList.add('pm7-dialog');
    }
    
    this.backdrop = element.querySelector('.pm7-dialog-overlay');
    this.closeButton = element.querySelector('.pm7-dialog-close');
    this.isOpen = false;
    this.previousActiveElement = null;
    this.focusableElements = [];
    
    this.init();
  }
  
  init() {
    // Close button
    if (this.closeButton) {
      this.closeButton.addEventListener('click', () => this.close());
    }
    
    // Backdrop click
    if (this.backdrop) {
      this.backdrop.addEventListener('click', (e) => {
        if (e.target === this.backdrop) {
          this.close();
        }
      });
    }
    
    // Escape key - use bound function to allow proper removal
    this.handleEscape = (e) => {
      if (e.key === 'Escape' && this.isOpen) {
        e.stopImmediatePropagation(); // Prevent other escape handlers
        this.close();
      }
    };
    
    // Tab trap - use bound function to allow proper removal
    this.handleTab = (e) => {
      if (e.key === 'Tab' && this.isOpen) {
        this.trapFocus(e);
      }
    };
  }
  
  open() {
    if (this.isOpen) return;
    
    // Close all open menus before opening dialog
    this.closeAllMenus();
    
    this.isOpen = true;
    this.previousActiveElement = document.activeElement;
    
    // Show dialog
    this.element.setAttribute('data-state', 'open');
    
    // Prevent body scroll
    document.body.classList.add('pm7-dialog-open');
    
    // Setup focus trap
    this.setupFocusTrap();
    
    // Add event listeners
    document.addEventListener('keydown', this.handleEscape);
    document.addEventListener('keydown', this.handleTab);
    
    // Focus first focusable element or close button
    requestAnimationFrame(() => {
      const firstFocusable = this.focusableElements[0];
      if (firstFocusable) {
        firstFocusable.focus();
      } else if (this.closeButton) {
        this.closeButton.focus();
      }
    });
    
    // Dispatch open event
    this.element.dispatchEvent(new CustomEvent('pm7-dialog-open', {
      detail: { dialog: this },
      bubbles: true
    }));
  }
  
  close() {
    if (!this.isOpen) return;
    
    this.isOpen = false;
    
    // Hide dialog
    this.element.setAttribute('data-state', 'closed');
    
    // Restore body scroll
    document.body.classList.remove('pm7-dialog-open');
    
    // Remove event listeners
    document.removeEventListener('keydown', this.handleEscape);
    document.removeEventListener('keydown', this.handleTab);
    
    // Restore focus
    if (this.previousActiveElement) {
      this.previousActiveElement.focus();
    }
    
    // Dispatch close event
    this.element.dispatchEvent(new CustomEvent('pm7-dialog-close', {
      detail: { dialog: this },
      bubbles: true
    }));
  }
  
  setupFocusTrap() {
    // Find all focusable elements
    const selector = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
    this.focusableElements = Array.from(this.element.querySelectorAll(selector))
      .filter(el => !el.disabled && el.offsetParent !== null);
  }
  
  trapFocus(e) {
    if (this.focusableElements.length === 0) return;
    
    const firstFocusable = this.focusableElements[0];
    const lastFocusable = this.focusableElements[this.focusableElements.length - 1];
    
    if (e.shiftKey) {
      // Shift + Tab
      if (document.activeElement === firstFocusable) {
        e.preventDefault();
        lastFocusable.focus();
      }
    } else {
      // Tab
      if (document.activeElement === lastFocusable) {
        e.preventDefault();
        firstFocusable.focus();
      }
    }
  }
  
  closeAllMenus() {
    // Close all open menus
    const openMenus = document.querySelectorAll('.pm7-menu-content--open, .pm7-menu-content[data-state="open"]');
    openMenus.forEach(menu => {
      menu.classList.remove('pm7-menu-content--open');
      menu.removeAttribute('data-state');
      
      // Update trigger state
      const menuContainer = menu.closest('.pm7-menu');
      if (menuContainer) {
        const trigger = menuContainer.querySelector('.pm7-menu-trigger');
        if (trigger) {
          trigger.setAttribute('aria-expanded', 'false');
        }
      }
    });
    
    // Also try using PM7Menu instances if available
    if (typeof window !== 'undefined' && window.PM7?.Menu) {
      // Access the static instances Map from the Menu class
      const MenuClass = window.PM7.Menu;
      if (MenuClass.instances && MenuClass.instances.forEach) {
        MenuClass.instances.forEach((instance) => {
          if (instance.isOpen) {
            instance.close();
          }
        });
      }
    }
  }
  
  shake() {
    this.element.classList.add('pm7-dialog--shake');
    setTimeout(() => {
      this.element.classList.remove('pm7-dialog--shake');
    }, 200);
  }
  
  setLoading(loading) {
    if (loading) {
      this.element.classList.add('pm7-dialog--loading');
    } else {
      this.element.classList.remove('pm7-dialog--loading');
    }
  }
}

// Helper function to create dialogs programmatically
export function createDialog(options = {}) {
  const {
    title = 'Dialog',
    content = '',
    size = 'md',
    variant = '',
    showClose = true,
    buttons = []
  } = options;
  
  // Create backdrop
  const overlay = document.createElement('div');
  overlay.className = 'pm7-dialog-overlay';
  
  // Create dialog
  const dialog = document.createElement('div');
  dialog.className = `pm7-dialog pm7-dialog--${size}`;
  if (variant) {
    dialog.className += ` pm7-dialog--${variant}`;
  }
  
  // Create header
  const header = document.createElement('div');
  header.className = 'pm7-dialog-header';
  
  const titleEl = document.createElement('h2');
  titleEl.className = 'pm7-dialog-title';
  titleEl.textContent = title;
  header.appendChild(titleEl);
  
  if (showClose) {
    const closeBtn = document.createElement('button');
    closeBtn.className = 'pm7-dialog-close';
    closeBtn.innerHTML = '×';
    closeBtn.setAttribute('aria-label', 'Close dialog');
    header.appendChild(closeBtn);
  }
  
  dialog.appendChild(header);
  
  // Create body
  const body = document.createElement('div');
  body.className = 'pm7-dialog-body';
  if (typeof content === 'string') {
    body.innerHTML = content;
  } else {
    body.appendChild(content);
  }
  dialog.appendChild(body);
  
  // Create footer if buttons provided
  if (buttons.length > 0) {
    const footer = document.createElement('div');
    footer.className = 'pm7-dialog-footer';
    
    buttons.forEach(btnOptions => {
      const btn = document.createElement('button');
      btn.className = `pm7-button pm7-button--${btnOptions.variant || 'primary'}`;
      btn.textContent = btnOptions.text;
      if (btnOptions.onClick) {
        btn.addEventListener('click', btnOptions.onClick);
      }
      footer.appendChild(btn);
    });
    
    dialog.appendChild(footer);
  }
  
  // Create container
  const container = document.createElement('div');
  container.appendChild(overlay);
  container.appendChild(dialog);
  
  // Add to body
  document.body.appendChild(container);
  
  // Initialize
  const dialogInstance = new PM7Dialog(container);
  
  // Clean up on close
  container.addEventListener('pm7-dialog-close', () => {
    setTimeout(() => {
      document.body.removeChild(container);
    }, 300);
  });
  
  return dialogInstance;
}

// Confirm dialog helper
export function pm7Confirm(message, options = {}) {
  return new Promise((resolve) => {
    const dialog = createDialog({
      title: options.title || 'Confirm',
      content: message,
      size: 'sm',
      buttons: [
        {
          text: options.cancelText || 'Cancel',
          variant: 'outline',
          onClick: () => {
            dialog.close();
            resolve(false);
          }
        },
        {
          text: options.confirmText || 'Confirm',
          variant: options.variant || 'primary',
          onClick: () => {
            dialog.close();
            resolve(true);
          }
        }
      ]
    });
    
    dialog.open();
  });
}

// Alert dialog helper
export function pm7Alert(message, options = {}) {
  return new Promise((resolve) => {
    const dialog = createDialog({
      title: options.title || 'Alert',
      content: message,
      size: 'sm',
      variant: options.variant,
      buttons: [
        {
          text: options.buttonText || 'OK',
          variant: 'primary',
          onClick: () => {
            dialog.close();
            resolve();
          }
        }
      ]
    });
    
    dialog.open();
  });
}

// Store ESC handlers to properly clean them up
const escHandlers = new Map();

// Helper function to close all open menus
function closeAllOpenMenus() {
  // First try to close menus by removing open classes
  const openMenus = document.querySelectorAll('.pm7-menu-content--open, .pm7-menu-content[data-state="open"]');
  openMenus.forEach(menu => {
    menu.classList.remove('pm7-menu-content--open');
    menu.removeAttribute('data-state');
    
    // Update trigger state
    const menuContainer = menu.closest('.pm7-menu');
    if (menuContainer) {
      const trigger = menuContainer.querySelector('.pm7-menu-trigger');
      if (trigger) {
        trigger.setAttribute('aria-expanded', 'false');
      }
    }
  });
  
  // Also try using PM7Menu instances if available
  if (typeof window !== 'undefined' && window.PM7?.Menu) {
    // Access the static instances Map from the Menu class
    const MenuClass = window.PM7.Menu;
    if (MenuClass.instances && MenuClass.instances.forEach) {
      MenuClass.instances.forEach((instance) => {
        if (instance.isOpen) {
          instance.close();
        }
      });
    }
  }
}

// Predefined icons
const dialogIcons = {
  info: `<svg class="pm7-dialog-icon-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" style="color: rgb(28, 134, 239);">
    <path d="M3 12a9 9 0 1 0 18 0 9 9 0 0 0-18 0m9-3h.01"></path>
    <path d="M11 12h1v4h1"></path>
  </svg>`,
  warning: `<svg class="pm7-dialog-icon-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" style="color: rgb(245, 158, 11);">
    <path d="M12 9v4m0 4h.01M5.07 19H19a2 2 0 0 0 1.75-2.95L13.75 4a2 2 0 0 0-3.5 0L3.25 16.05A2 2 0 0 0 5.07 19z"></path>
  </svg>`,
  error: `<svg class="pm7-dialog-icon-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" style="color: rgb(239, 68, 68);">
    <circle cx="12" cy="12" r="10"></circle>
    <line x1="15" y1="9" x2="9" y2="15"></line>
    <line x1="9" y1="9" x2="15" y2="15"></line>
  </svg>`,
  success: `<svg class="pm7-dialog-icon-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" style="color: rgb(34, 197, 94);">
    <circle cx="12" cy="12" r="10"></circle>
    <path d="M9 12l2 2 4-4"></path>
  </svg>`
};

// Transform dialog based on content markers
function transformDialog(dialogElement) {
  // Check if already transformed
  if (dialogElement.querySelector('.pm7-dialog-overlay')) {
    return;
  }

  // Read dialog attributes
  const dialogId = dialogElement.getAttribute('data-pm7-dialog');
  const size = dialogElement.getAttribute('data-pm7-dialog-size') || 'md';
  const showCloseButton = dialogElement.hasAttribute('data-pm7-show-close');
  // Default behavior: ESC and overlay close are enabled unless explicitly disabled
  const preventEscapeClose = dialogElement.hasAttribute('data-pm7-no-escape');
  const preventOverlayClose = dialogElement.hasAttribute('data-pm7-no-overlay-close');

  // Get content sections
  const headerEl = dialogElement.querySelector('[data-pm7-header]');
  const bodyEl = dialogElement.querySelector('[data-pm7-body]');
  const footerEl = dialogElement.querySelector('[data-pm7-footer]');

  // Store section data
  const sections = {
    header: headerEl ? {
      element: headerEl,
      content: headerEl.innerHTML,
      title: headerEl.getAttribute('data-pm7-dialog-title'),
      subtitle: headerEl.getAttribute('data-pm7-dialog-subtitle'),
      icon: headerEl.getAttribute('data-pm7-dialog-icon'),
      separator: headerEl.hasAttribute('data-pm7-header-separator')
    } : null,
    body: bodyEl ? bodyEl.innerHTML : null,
    footer: footerEl ? footerEl.innerHTML : null
  };

  // Clear dialog
  dialogElement.innerHTML = '';

  // Create overlay
  const overlay = document.createElement('div');
  overlay.className = 'pm7-dialog-overlay';
  dialogElement.appendChild(overlay);

  // Create content container
  const content = document.createElement('div');
  content.className = `pm7-dialog-content pm7-dialog-content--${size}`;

  // Build header if exists
  if (sections.header) {
    const header = document.createElement('div');
    header.className = 'pm7-dialog-header';

    // Create a container for title and subtitle
    const textContainer = document.createElement('div');
    textContainer.className = 'pm7-dialog-header-text';

    // Add title if specified
    if (sections.header.title) {
      const titleEl = document.createElement('h2');
      titleEl.className = 'pm7-dialog-title';
      titleEl.textContent = sections.header.title;
      textContainer.appendChild(titleEl);
    }

    // Add subtitle if specified
    if (sections.header.subtitle) {
      const subtitleEl = document.createElement('p');
      subtitleEl.className = 'pm7-dialog-description';
      subtitleEl.textContent = sections.header.subtitle;
      textContainer.appendChild(subtitleEl);
    }

    header.appendChild(textContainer);

    // Create a container for actions (icon and close button)
    const actionsContainer = document.createElement('div');
    actionsContainer.className = 'pm7-dialog-header-actions';

    // Add icon if specified
    if (sections.header.icon) {
      const iconDiv = document.createElement('div');
      iconDiv.className = 'pm7-dialog-icon';
      iconDiv.innerHTML = dialogIcons[sections.header.icon] || '';
      actionsContainer.appendChild(iconDiv);
    }

    // Add close button if requested
    if (showCloseButton) {
      const closeBtn = document.createElement('button');
      closeBtn.className = 'pm7-dialog-close';
      closeBtn.setAttribute('aria-label', 'Close');
      closeBtn.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <line x1="18" y1="6" x2="6" y2="18"/>
        <line x1="6" y1="6" x2="18" y2="18"/>
      </svg>`;
      actionsContainer.appendChild(closeBtn);
    }

    header.appendChild(actionsContainer);

    content.appendChild(header);

    // Add header separator if requested
    if (sections.header.separator) {
      const separator = document.createElement('div');
      separator.className = 'pm7-dialog-header-separator';
      content.appendChild(separator);
    }
  }

  // Add body if exists
  if (sections.body !== null) {
    const body = document.createElement('div');
    body.className = 'pm7-dialog-body';
    body.innerHTML = sections.body;
    content.appendChild(body);
  }

  // Add footer if exists
  if (sections.footer !== null) {
    const footer = document.createElement('div');
    footer.className = 'pm7-dialog-footer';
    footer.innerHTML = sections.footer;
    content.appendChild(footer);
  }

  dialogElement.appendChild(content);

  // Store dialog settings for openDialog function
  dialogElement._dialogSettings = {
    closeOnEscape: !preventEscapeClose,  // Inverted: true by default
    closeOnOverlay: !preventOverlayClose  // Inverted: true by default
  };
  
  // Set initial state
  dialogElement.setAttribute('data-state', 'closed');
}

// Simple helper functions for pm7-dialog elements
export function openDialog(dialogId) {
  const dialogElement = document.querySelector(`[data-pm7-dialog="${dialogId}"]`);
  if (!dialogElement) {
    console.warn(`Dialog with id "${dialogId}" not found`);
    return;
  }
  
  // Close all open menus before opening dialog
  closeAllOpenMenus();
  
  // Transform dialog if needed
  transformDialog(dialogElement);
  
  dialogElement.setAttribute('data-state', 'open');
  document.body.classList.add('pm7-dialog-open');
  
  // Get dialog settings
  const settings = dialogElement._dialogSettings || {};
  
  // Add close handlers
  const overlay = dialogElement.querySelector('.pm7-dialog-overlay');
  const closeBtn = dialogElement.querySelector('.pm7-dialog-close');
  
  // Overlay click handler - enabled by default unless settings.closeOnOverlay is false
  if (overlay && settings.closeOnOverlay !== false) {
    overlay.onclick = () => closeDialog(dialogId);
  }
  
  if (closeBtn) {
    closeBtn.onclick = () => closeDialog(dialogId);
  }
  
  // ESC key handler - store it so we can remove it later
  if (settings.closeOnEscape !== false) {  // Default true unless explicitly false
    const escHandler = (e) => {
      if (e.key === 'Escape') {
        closeDialog(dialogId);
      }
    };
    
    // Remove any existing handler for this dialog
    if (escHandlers.has(dialogId)) {
      document.removeEventListener('keydown', escHandlers.get(dialogId));
    }
    
    // Store and add new handler
    escHandlers.set(dialogId, escHandler);
    document.addEventListener('keydown', escHandler);
  }
}

export function closeDialog(dialogId) {
  const dialogElement = document.querySelector(`[data-pm7-dialog="${dialogId}"]`);
  if (!dialogElement) return;
  
  // Add closing state for animation
  dialogElement.setAttribute('data-state', 'closing');
  dialogElement.classList.remove('pm7-dialog--open');
  
  // Wait for animation to complete before removing
  setTimeout(() => {
    dialogElement.setAttribute('data-state', 'closed');
    
    // Check if any other dialogs are open
    const openDialogs = document.querySelectorAll('.pm7-dialog[data-state="open"]');
    if (openDialogs.length === 0) {
      document.body.classList.remove('pm7-dialog-open');
    }
  }, 200); // Match transition duration
  
  // Remove ESC handler for this dialog
  if (escHandlers.has(dialogId)) {
    document.removeEventListener('keydown', escHandlers.get(dialogId));
    escHandlers.delete(dialogId);
  }
}

// Don't automatically pollute global scope
// These functions are available via window.PM7 namespace