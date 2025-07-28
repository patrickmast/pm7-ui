/**
 * PM7Menu - Vanilla JavaScript menu component with self-healing
 * Handles dropdown menus with keyboard navigation and accessibility
 * Now with self-healing for framework re-renders (React, Vue, etc.)
 */
export class PM7Menu {
  static instances = new WeakMap(); // Use WeakMap for better memory management
  
  constructor(element) {
    // Self-healing: Check if element was re-rendered by framework
    const wasInitialized = element.hasAttribute('data-pm7-menu-initialized');
    const hasInstance = PM7Menu.instances.has(element);
    
    // If initialized but no instance, element was re-rendered
    if (wasInitialized && !hasInstance) {
      console.log('[PM7Menu] Self-healing: Re-initializing menu after framework re-render');
      // Remove the initialized attribute to allow re-initialization
      element.removeAttribute('data-pm7-menu-initialized');
    }
    
    // Check if this element already has a menu instance
    if (PM7Menu.instances.has(element)) {
      return PM7Menu.instances.get(element);
    }
    
    this.element = element;
    
    // Preserve state if this is a re-render
    const preservedState = this.preserveState();
    
    // AI-Agent FIRST: Automatically add pm7-menu class if missing
    if (!this.element.classList.contains('pm7-menu')) {
      this.element.classList.add('pm7-menu');
    }
    
    this.trigger = element.querySelector('.pm7-menu-trigger');
    this.content = element.querySelector('.pm7-menu-content');
    this.items = element.querySelectorAll('.pm7-menu-item');
    this.isOpen = false;
    this.currentIndex = -1;
    this.hoverTimeouts = new Map();
    
    if (!this.trigger || !this.content) {
      return;
    }
    
    // Store this instance
    PM7Menu.instances.set(element, this);
    
    // Store instance reference on element for self-healing
    element._pm7MenuInstance = this;
    
    this.init();
    
    // Restore state if this was a re-render
    if (preservedState) {
      this.restoreState(preservedState);
    }
    
    // Mark as initialized
    element.setAttribute('data-pm7-menu-initialized', 'true');
  }
  
  preserveState() {
    // Try to preserve state from previous instance
    const oldContent = this.element.querySelector('.pm7-menu-content');
    if (!oldContent) return null;
    
    return {
      wasOpen: oldContent.classList.contains('pm7-menu-content--open') || 
               oldContent.getAttribute('data-state') === 'open',
      triggerExpanded: this.element.querySelector('.pm7-menu-trigger')?.getAttribute('aria-expanded') === 'true'
    };
  }
  
  restoreState(state) {
    if (state.wasOpen) {
      // Use setTimeout to ensure DOM is ready
      setTimeout(() => {
        this.open();
      }, 0);
    }
  }
  
  init() {
    // Remove any existing event listeners to prevent duplicates
    this.cleanup();
    
    // Check if this menu is part of a menu bar
    this.isInMenuBar = this.element.closest('.pm7-menu-bar') !== null;
    
    // Create bound event handlers for proper cleanup
    this.boundHandlers = {
      triggerClick: (e) => {
        e.stopPropagation();
        
        // In menu bars, always open (don't toggle) if another menu is open
        if (this.isInMenuBar && this.isAnyMenuBarMenuOpen() && !this.isOpen) {
          this.open();
        } else {
          this.toggle();
        }
      },
      triggerMouseEnter: () => {
        // Check if any other menu in the bar is open
        if (this.isAnyMenuBarMenuOpen()) {
          this.open();
        }
      },
      outsideClick: (e) => {
        // Check if the click is outside the menu element and not on a submenu
        if (!this.element.contains(e.target) && this.isOpen) {
          // Check if the click is on a submenu that is part of this menu
          const clickedSubmenu = e.target.closest('.pm7-submenu');
          if (!clickedSubmenu || !this.element.contains(clickedSubmenu)) {
            this.close();
          }
        }
      },
      escape: (e) => {
        if (e.key === 'Escape' && this.isOpen) {
          e.stopPropagation();
          this.close();
          this.trigger.focus();
        }
      },
      reposition: () => {
        if (this.isOpen) {
          this.adjustPosition();
        }
      }
    };
    
    // Click handlers
    this.trigger.addEventListener('click', this.boundHandlers.triggerClick);
    
    // Hover handlers for menu bar menus
    if (this.isInMenuBar) {
      this.trigger.addEventListener('mouseenter', this.boundHandlers.triggerMouseEnter);
    }
    
    // Initialize submenu hover handling
    this.initSubmenuHoverHandling();
    
    // Close on outside click
    document.addEventListener('click', this.boundHandlers.outsideClick);
    
    // Keyboard navigation
    this.trigger.addEventListener('keydown', (e) => this.handleTriggerKeyDown(e));
    this.content.addEventListener('keydown', (e) => this.handleMenuKeyDown(e));
    
    // Menu item clicks
    this.items.forEach((item, index) => {
      // Use mousedown to remove hover state INSTANTLY
      item.addEventListener('mousedown', (e) => {
        if (!item.disabled && !item.hasAttribute('disabled') && !item.classList.contains('pm7-menu-item--has-submenu')) {
          // Remove all hover effects immediately
          item.classList.add('pm7-menu-item--clicking');
          // Mark that we're clicking
          this._clickingItem = true;
        }
      });
      
      item.addEventListener('click', (e) => {
        if (!item.disabled && !item.hasAttribute('disabled')) {
          this.handleItemClick(e, item);
        }
        // Reset _clickingItem after the click event has been processed
        this._clickingItem = false;
      });
      
      // Make items focusable
      item.setAttribute('tabindex', '-1');
    });
    
    // Reposition on window resize/scroll
    window.addEventListener('resize', this.boundHandlers.reposition);
    window.addEventListener('scroll', this.boundHandlers.reposition, true);
  }
  
  cleanup() {
    // Remove all event listeners if they exist
    if (this.boundHandlers) {
      this.trigger?.removeEventListener('click', this.boundHandlers.triggerClick);
      this.trigger?.removeEventListener('mouseenter', this.boundHandlers.triggerMouseEnter);
      document.removeEventListener('click', this.boundHandlers.outsideClick);
      document.removeEventListener('keydown', this.boundHandlers.escape);
      window.removeEventListener('resize', this.boundHandlers.reposition);
      window.removeEventListener('scroll', this.boundHandlers.reposition, true);
    }
  }
  
  destroy() {
    this.cleanup();
    this.close();
    PM7Menu.instances.delete(this.element);
    delete this.element._pm7MenuInstance;
  }
  
  toggle() {
    this.isOpen ? this.close() : this.open();
  }
  
  open() {
    // Close all other open menus
    PM7Menu.instances.forEach((instance, element) => {
      if (instance !== this && instance.isOpen) {
        instance.close();
      }
    });
    
    this.isOpen = true;
    this.content.classList.add('pm7-menu-content--open');
    this.content.setAttribute('data-state', 'open'); // Add data-state for better state tracking
    this.trigger.setAttribute('aria-expanded', 'true');
    
    // Add escape handler when menu opens
    document.addEventListener('keydown', this.boundHandlers.escape);
    
    // Check viewport position and adjust if needed
    this.adjustPosition();
    
    // Dispatch custom event
    this.element.dispatchEvent(new CustomEvent('pm7:menu:open', { 
      detail: { menu: this },
      bubbles: true 
    }));
  }
  
  close() {
    if (!this.isOpen) return;
    
    this.isOpen = false;
    this.content.classList.remove('pm7-menu-content--open');
    this.content.setAttribute('data-state', 'closed');
    this.trigger.setAttribute('aria-expanded', 'false');
    this.currentIndex = -1;
    
    // Remove escape handler when menu closes
    document.removeEventListener('keydown', this.boundHandlers.escape);
    
    // Clear all hover timeouts
    this.hoverTimeouts.forEach(timeout => clearTimeout(timeout));
    this.hoverTimeouts.clear();
    
    // Close all submenus
    const submenuItems = this.element.querySelectorAll('.pm7-menu-item--has-submenu');
    submenuItems.forEach(item => {
      item.setAttribute('data-submenu-open', 'false');
    });
    
    // Remove focus from items
    this.items.forEach(item => {
      item.setAttribute('tabindex', '-1');
      item.classList.remove('pm7-menu-item--clicking');
    });
    
    // Dispatch custom event
    this.element.dispatchEvent(new CustomEvent('pm7:menu:close', { 
      detail: { menu: this },
      bubbles: true 
    }));
  }
  
  handleTriggerKeyDown(e) {
    switch (e.key) {
      case 'Enter':
      case ' ':
      case 'ArrowDown':
        e.preventDefault();
        this.open();
        break;
      case 'ArrowUp':
        e.preventDefault();
        this.open();
        this.currentIndex = this.items.length - 1;
        this.focusItem(this.currentIndex);
        break;
    }
  }
  
  handleMenuKeyDown(e) {
    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        this.focusNext();
        break;
      case 'ArrowUp':
        e.preventDefault();
        this.focusPrevious();
        break;
      case 'Home':
        e.preventDefault();
        this.focusItem(0);
        break;
      case 'End':
        e.preventDefault();
        this.focusItem(this.items.length - 1);
        break;
      case 'Enter':
      case ' ':
        e.preventDefault();
        const currentItem = this.items[this.currentIndex];
        if (currentItem && !currentItem.disabled) {
          currentItem.click();
        }
        break;
      case 'Tab':
        // Close menu on tab
        this.close();
        break;
    }
  }
  
  focusNext() {
    const nextIndex = this.currentIndex + 1;
    if (nextIndex < this.items.length) {
      this.focusItem(nextIndex);
    } else {
      this.focusItem(0); // Wrap to first
    }
  }
  
  focusPrevious() {
    const prevIndex = this.currentIndex - 1;
    if (prevIndex >= 0) {
      this.focusItem(prevIndex);
    } else {
      this.focusItem(this.items.length - 1); // Wrap to last
    }
  }
  
  focusItem(index) {
    const item = this.items[index];
    if (!item) return;
    
    // Only update if different item
    if (this.currentIndex === index) return;
    
    // Remove tabindex from previous item
    if (this.currentIndex >= 0 && this.items[this.currentIndex]) {
      this.items[this.currentIndex].setAttribute('tabindex', '-1');
    }
    
    this.currentIndex = index;
    item.setAttribute('tabindex', '0');
    item.focus();
  }
  
  handleItemClick(e, item) {
    // Close menu immediately for regular items (not submenus)
    if (!item.classList.contains('pm7-menu-item--has-submenu')) {
      this.close();
      this.trigger.focus();
    }
    
    // Handle checkbox items
    if (item.classList.contains('pm7-menu-item--checkbox')) {
      const isChecked = item.getAttribute('data-checked') === 'true';
      item.setAttribute('data-checked', !isChecked);
    }
    
    // Handle radio items
    if (item.classList.contains('pm7-menu-item--radio')) {
      // Uncheck all radio items in the same group
      const radioItems = this.element.querySelectorAll('.pm7-menu-item--radio');
      radioItems.forEach(radio => radio.setAttribute('data-checked', 'false'));
      // Check the clicked item
      item.setAttribute('data-checked', 'true');
    }
    
    // Handle submenu items
    if (item.classList.contains('pm7-menu-item--has-submenu')) {
      e.preventDefault();
      e.stopPropagation();
      // Toggle submenu
      const isOpen = item.getAttribute('data-submenu-open') === 'true';
      item.setAttribute('data-submenu-open', !isOpen);
      return; // Don't close the main menu
    }
    
    // Dispatch custom event
    const event = new CustomEvent('pm7-menu-select', {
      detail: { item, menu: this },
      bubbles: true
    });
    this.element.dispatchEvent(event);
  }
  
  adjustPosition() {
    // Get dimensions
    const triggerRect = this.trigger.getBoundingClientRect();
    const contentRect = this.content.getBoundingClientRect();
    const viewportHeight = window.innerHeight;
    const viewportWidth = window.innerWidth;
    
    // Calculate space above and below
    const spaceBelow = viewportHeight - triggerRect.bottom;
    const spaceAbove = triggerRect.top;
    
    // Check vertical position
    if (contentRect.height > spaceBelow && spaceAbove > spaceBelow) {
      // Not enough space below, but more space above
      this.content.classList.add('pm7-menu-content--top');
    } else {
      // Enough space below or more space below than above
      this.content.classList.remove('pm7-menu-content--top');
    }
    
    // Check horizontal position for end-aligned menus
    if (this.content.classList.contains('pm7-menu-content--end')) {
      const rightEdge = triggerRect.right;
      if (rightEdge < contentRect.width) {
        // Not enough space on the right, switch to left alignment
        this.content.classList.remove('pm7-menu-content--end');
        this.content.classList.add('pm7-menu-content--start');
      }
    }
    
    // Check horizontal position for center-aligned menus
    if (this.content.classList.contains('pm7-menu-content--center')) {
      const centerX = triggerRect.left + (triggerRect.width / 2);
      const menuHalfWidth = contentRect.width / 2;
      
      if (centerX - menuHalfWidth < 0) {
        // Would overflow on the left
        this.content.classList.remove('pm7-menu-content--center');
        this.content.classList.add('pm7-menu-content--start');
      } else if (centerX + menuHalfWidth > viewportWidth) {
        // Would overflow on the right
        this.content.classList.remove('pm7-menu-content--center');
        this.content.classList.add('pm7-menu-content--end');
      }
    }
  }
  
  // Check if any menu in the same menu bar is open
  isAnyMenuBarMenuOpen() {
    if (!this.isInMenuBar) return false;
    
    const menuBar = this.element.closest('.pm7-menu-bar');
    if (!menuBar) return false;
    
    // Check all menus in the same menu bar
    const menusInBar = menuBar.querySelectorAll('.pm7-menu');
    for (const menuEl of menusInBar) {
      // Skip current menu
      if (menuEl === this.element) continue;
      
      // Check if menu content is visible (open)
      const menuContent = menuEl.querySelector('.pm7-menu-content');
      if (menuContent && menuContent.classList.contains('pm7-menu-content--open')) {
        return true;
      }
    }
    return false;
  }
  
  // Initialize submenu hover handling with improved UX
  initSubmenuHoverHandling() {
    const submenuItems = this.element.querySelectorAll('.pm7-menu-item--has-submenu');
    
    submenuItems.forEach((item, index) => {
      const submenu = item.nextElementSibling;
      if (!submenu || !submenu.classList.contains('pm7-submenu')) return;
      
      const timeoutKey = `submenu-${index}`;
      
      // Handle mouse enter on parent item
      item.addEventListener('mouseenter', () => {
        const timeout = this.hoverTimeouts.get(timeoutKey);
        if (timeout) {
          clearTimeout(timeout);
          this.hoverTimeouts.delete(timeoutKey);
        }
        item.setAttribute('data-submenu-open', 'true');
      });
      
      // Handle mouse leave on parent item
      item.addEventListener('mouseleave', (e) => {
        // Check if we're moving to the submenu
        const toElement = e.relatedTarget;
        if (toElement && (submenu.contains(toElement) || submenu === toElement)) {
          return; // Don't close if moving to submenu
        }
        
        // Add small delay before closing
        const timeout = setTimeout(() => {
          item.setAttribute('data-submenu-open', 'false');
          this.hoverTimeouts.delete(timeoutKey);
        }, 100); // 100ms delay
        this.hoverTimeouts.set(timeoutKey, timeout);
      });
      
      // Handle mouse enter on submenu
      submenu.addEventListener('mouseenter', () => {
        const timeout = this.hoverTimeouts.get(timeoutKey);
        if (timeout) {
          clearTimeout(timeout);
          this.hoverTimeouts.delete(timeoutKey);
        }
        item.setAttribute('data-submenu-open', 'true');
      });
      
      // Handle mouse leave on submenu
      submenu.addEventListener('mouseleave', (e) => {
        // Check if we're moving back to the parent
        const toElement = e.relatedTarget;
        if (toElement && (item.contains(toElement) || item === toElement)) {
          return; // Don't close if moving back to parent
        }
        
        // Add small delay before closing
        const timeout = setTimeout(() => {
          item.setAttribute('data-submenu-open', 'false');
          this.hoverTimeouts.delete(timeoutKey);
        }, 100); // 100ms delay
        this.hoverTimeouts.set(timeoutKey, timeout);
      });
    });
  }
}

// Self-healing initialization function
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

// Auto-initialize menus with self-healing
if (typeof document !== 'undefined' && !window.__PM7_MENU_INIT__) {
  window.__PM7_MENU_INIT__ = true;
  
  const initMenus = () => {
    // Regular initialization
    const menus = document.querySelectorAll('[data-pm7-menu]:not([data-pm7-menu-initialized])');
    menus.forEach((menu) => {
      try {
        new PM7Menu(menu);
      } catch (error) {
        console.error('[PM7Menu] Error initializing menu:', error);
      }
    });
    
    // Also run self-healing
    healMenus();
  };
  
  // Export healing function for manual use
  window.healPM7Menus = healMenus;
  
  // Initialize immediately if DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMenus, { once: true });
  } else {
    setTimeout(initMenus, 0);
  }
  
  // Set up periodic self-healing check (for frameworks that don't notify)
  setInterval(healMenus, 1000);
}

// Make healing function available on PM7Menu class
PM7Menu.heal = healMenus;