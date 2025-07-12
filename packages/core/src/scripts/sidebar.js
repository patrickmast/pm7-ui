/**
 * PM7 Sidebar Component
 * Handles sidebar interactions, animations, and state management
 */

class PM7Sidebar {
  constructor(element) {
    this.element = element;
    this.isOpen = false;
    this.overlay = null;
    this.triggers = [];
    this.closeButton = null;
    this.pushElement = null;
    this.position = 'left';
    this.mode = 'overlay'; // overlay, push, or static
    
    this.init();
  }

  init() {
    // Set initial state
    this.isOpen = this.element.classList.contains('pm7-sidebar--open') || 
                  this.element.dataset.state === 'open';
    
    // Determine position
    this.position = this.element.classList.contains('pm7-sidebar--right') ? 'right' : 'left';
    
    // Determine mode
    if (this.element.classList.contains('pm7-sidebar--static')) {
      this.mode = 'static';
    } else if (document.querySelector('.pm7-sidebar-push')) {
      this.mode = 'push';
      this.pushElement = document.querySelector('.pm7-sidebar-push');
    }
    
    // Create overlay if needed
    if (this.mode === 'overlay') {
      this.createOverlay();
    }
    
    // Find and setup triggers
    this.setupTriggers();
    
    // Setup close button
    this.setupCloseButton();
    
    // Setup keyboard navigation
    this.setupKeyboardNavigation();
    
    // Setup collapsible sections
    this.setupCollapsibles();
    
    // Handle escape key
    this.handleEscapeKey();
    
    // Set ARIA attributes
    this.updateAriaAttributes();
  }

  createOverlay() {
    this.overlay = document.createElement('div');
    this.overlay.className = 'pm7-sidebar-overlay';
    this.overlay.setAttribute('aria-hidden', 'true');
    
    // Insert overlay after sidebar
    this.element.parentNode.insertBefore(this.overlay, this.element.nextSibling);
    
    // Click overlay to close
    this.overlay.addEventListener('click', () => this.close());
  }

  setupTriggers() {
    // Find all triggers for this sidebar
    const sidebarId = this.element.id;
    if (sidebarId) {
      this.triggers = document.querySelectorAll(`[data-pm7-sidebar-trigger="${sidebarId}"]`);
    }
    
    // Also check for generic triggers if sidebar has data-pm7-sidebar attribute
    if (this.element.hasAttribute('data-pm7-sidebar')) {
      const genericTriggers = document.querySelectorAll('[data-pm7-sidebar-trigger]');
      genericTriggers.forEach(trigger => {
        if (!trigger.dataset.pm7SidebarTrigger) {
          this.triggers = [...this.triggers, trigger];
        }
      });
    }
    
    // Add click listeners to triggers
    this.triggers.forEach(trigger => {
      trigger.addEventListener('click', (e) => {
        e.preventDefault();
        this.toggle();
      });
      
      // Set ARIA attributes
      trigger.setAttribute('aria-controls', sidebarId || '');
      trigger.setAttribute('aria-expanded', this.isOpen);
    });
  }

  setupCloseButton() {
    this.closeButton = this.element.querySelector('.pm7-sidebar-close');
    if (this.closeButton) {
      this.closeButton.addEventListener('click', () => this.close());
      this.closeButton.setAttribute('aria-label', 'Close sidebar');
    }
  }

  setupKeyboardNavigation() {
    const navItems = this.element.querySelectorAll('.pm7-sidebar-item');
    
    navItems.forEach((item, index) => {
      item.setAttribute('tabindex', '0');
      
      item.addEventListener('keydown', (e) => {
        switch (e.key) {
          case 'ArrowDown':
            e.preventDefault();
            const nextItem = navItems[index + 1] || navItems[0];
            nextItem.focus();
            break;
            
          case 'ArrowUp':
            e.preventDefault();
            const prevItem = navItems[index - 1] || navItems[navItems.length - 1];
            prevItem.focus();
            break;
            
          case 'Home':
            e.preventDefault();
            navItems[0].focus();
            break;
            
          case 'End':
            e.preventDefault();
            navItems[navItems.length - 1].focus();
            break;
        }
      });
    });
  }

  setupCollapsibles() {
    const collapsibles = this.element.querySelectorAll('.pm7-sidebar-collapsible');
    
    collapsibles.forEach(collapsible => {
      const trigger = collapsible.querySelector('.pm7-sidebar-collapsible-trigger');
      const content = collapsible.querySelector('.pm7-sidebar-collapsible-content');
      
      if (trigger && content) {
        // Set initial state
        const isOpen = collapsible.dataset.state === 'open';
        trigger.setAttribute('aria-expanded', isOpen);
        content.setAttribute('aria-hidden', !isOpen);
        
        // Toggle on click
        trigger.addEventListener('click', () => {
          const currentlyOpen = collapsible.dataset.state === 'open';
          collapsible.dataset.state = currentlyOpen ? 'closed' : 'open';
          trigger.setAttribute('aria-expanded', !currentlyOpen);
          content.setAttribute('aria-hidden', currentlyOpen);
          
          // Dispatch custom event
          this.element.dispatchEvent(new CustomEvent('pm7:sidebar:collapsible:toggle', {
            detail: { 
              collapsible, 
              isOpen: !currentlyOpen 
            },
            bubbles: true
          }));
        });
      }
    });
  }

  handleEscapeKey() {
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.isOpen && this.mode !== 'static') {
        this.close();
      }
    });
  }

  open() {
    if (this.isOpen || this.mode === 'static') return;
    
    this.isOpen = true;
    this.element.classList.add('pm7-sidebar--open');
    this.element.dataset.state = 'open';
    
    // Show overlay
    if (this.overlay) {
      this.overlay.classList.add('pm7-sidebar-overlay--visible');
    }
    
    // Push content
    if (this.pushElement) {
      this.pushElement.classList.add('pm7-sidebar-push--active');
      if (this.position === 'right') {
        this.pushElement.classList.add('pm7-sidebar-push--right');
      }
    }
    
    // Update ARIA
    this.updateAriaAttributes();
    
    // Focus management
    this.element.setAttribute('tabindex', '-1');
    this.element.focus();
    
    // Trap focus
    this.trapFocus();
    
    // Dispatch event
    this.element.dispatchEvent(new CustomEvent('pm7:sidebar:open', {
      detail: { sidebar: this },
      bubbles: true
    }));
  }

  close() {
    if (!this.isOpen || this.mode === 'static') return;
    
    this.isOpen = false;
    this.element.classList.remove('pm7-sidebar--open');
    this.element.dataset.state = 'closed';
    
    // Hide overlay
    if (this.overlay) {
      this.overlay.classList.remove('pm7-sidebar-overlay--visible');
    }
    
    // Reset push
    if (this.pushElement) {
      this.pushElement.classList.remove('pm7-sidebar-push--active');
    }
    
    // Update ARIA
    this.updateAriaAttributes();
    
    // Release focus trap
    this.releaseFocusTrap();
    
    // Return focus to trigger
    const activeTrigger = document.activeElement;
    if (this.triggers.length && !this.triggers.includes(activeTrigger)) {
      this.triggers[0].focus();
    }
    
    // Dispatch event
    this.element.dispatchEvent(new CustomEvent('pm7:sidebar:close', {
      detail: { sidebar: this },
      bubbles: true
    }));
  }

  toggle() {
    if (this.isOpen) {
      this.close();
    } else {
      this.open();
    }
  }

  updateAriaAttributes() {
    this.element.setAttribute('aria-hidden', !this.isOpen);
    
    this.triggers.forEach(trigger => {
      trigger.setAttribute('aria-expanded', this.isOpen);
    });
    
    if (this.overlay) {
      this.overlay.setAttribute('aria-hidden', !this.isOpen);
    }
  }

  trapFocus() {
    const focusableElements = this.element.querySelectorAll(
      'a[href], button, textarea, input[type="text"], input[type="radio"], input[type="checkbox"], select, [tabindex]:not([tabindex="-1"])'
    );
    
    const firstFocusable = focusableElements[0];
    const lastFocusable = focusableElements[focusableElements.length - 1];
    
    this.focusTrapHandler = (e) => {
      if (e.key !== 'Tab') return;
      
      if (e.shiftKey) {
        if (document.activeElement === firstFocusable) {
          e.preventDefault();
          lastFocusable.focus();
        }
      } else {
        if (document.activeElement === lastFocusable) {
          e.preventDefault();
          firstFocusable.focus();
        }
      }
    };
    
    this.element.addEventListener('keydown', this.focusTrapHandler);
  }

  releaseFocusTrap() {
    if (this.focusTrapHandler) {
      this.element.removeEventListener('keydown', this.focusTrapHandler);
      this.focusTrapHandler = null;
    }
  }

  destroy() {
    // Remove event listeners
    this.triggers.forEach(trigger => {
      trigger.removeEventListener('click', this.toggle);
    });
    
    if (this.closeButton) {
      this.closeButton.removeEventListener('click', this.close);
    }
    
    if (this.overlay) {
      this.overlay.remove();
    }
    
    this.releaseFocusTrap();
    
    // Reset element
    this.element.classList.remove('pm7-sidebar--open');
    this.element.removeAttribute('data-pm7-initialized');
    delete this.element.PM7Sidebar;
  }
}

// Auto-initialization
export function initSidebars() {
  const sidebars = document.querySelectorAll('[data-pm7-sidebar]:not([data-pm7-initialized])');
  
  sidebars.forEach(sidebar => {
    sidebar.setAttribute('data-pm7-initialized', 'true');
    sidebar.PM7Sidebar = new PM7Sidebar(sidebar);
  });
  
  // Also initialize any standalone triggers
  const triggers = document.querySelectorAll('[data-pm7-sidebar-trigger]');
  triggers.forEach(trigger => {
    const targetId = trigger.dataset.pm7SidebarTrigger;
    if (targetId) {
      const sidebar = document.getElementById(targetId);
      if (sidebar && !sidebar.PM7Sidebar) {
        sidebar.setAttribute('data-pm7-initialized', 'true');
        sidebar.PM7Sidebar = new PM7Sidebar(sidebar);
      }
    }
  });
}

// Initialize on DOM ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initSidebars);
} else {
  initSidebars();
}

// Export for manual usage
export { PM7Sidebar };