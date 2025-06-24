/**
 * PM7Dialog - Vanilla JavaScript dialog/modal component
 * Handles modal dialogs with accessibility features
 */
export class PM7Dialog {
  constructor(element) {
    this.element = element;
    this.backdrop = element.querySelector('.pm7-dialog-backdrop');
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
    
    this.isOpen = true;
    this.previousActiveElement = document.activeElement;
    
    // Show dialog
    this.element.classList.add('pm7-dialog--open');
    if (this.backdrop) {
      this.backdrop.classList.add('pm7-dialog-backdrop--open');
    }
    
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
    this.element.classList.remove('pm7-dialog--open');
    if (this.backdrop) {
      this.backdrop.classList.remove('pm7-dialog-backdrop--open');
    }
    
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
  const backdrop = document.createElement('div');
  backdrop.className = 'pm7-dialog-backdrop';
  
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
  container.appendChild(backdrop);
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
export function confirm(message, options = {}) {
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
export function alert(message, options = {}) {
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

// Simple helper functions for data-pm7-dialog elements
export function openDialog(dialogId) {
  const dialogElement = document.querySelector(`[data-pm7-dialog="${dialogId}"]`);
  if (!dialogElement) {
    console.warn(`Dialog with id "${dialogId}" not found`);
    return;
  }
  
  dialogElement.setAttribute('data-state', 'open');
  document.body.classList.add('pm7-dialog-open');
  
  // Add close handlers
  const overlay = dialogElement.querySelector('.pm7-dialog-overlay');
  const closeBtn = dialogElement.querySelector('.pm7-dialog-close');
  
  if (overlay) {
    overlay.onclick = () => closeDialog(dialogId);
  }
  
  if (closeBtn) {
    closeBtn.onclick = () => closeDialog(dialogId);
  }
  
  // ESC key handler - store it so we can remove it later
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
// Consumers should explicitly assign these if needed