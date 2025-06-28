/**
 * PM7Menu - Vanilla JavaScript menu component
 * Handles dropdown menus with keyboard navigation and accessibility
 */
export class PM7Menu {
  static instances = new Map(); // Changed to Map to store by element
  
  constructor(element) {
    // Check if this element already has a menu instance
    if (PM7Menu.instances.has(element)) {
      console.warn('[PM7Menu] Element already has a menu instance, returning existing');
      return PM7Menu.instances.get(element);
    }
    
    this.element = element;
    this.trigger = element.querySelector('.pm7-menu-trigger');
    this.content = element.querySelector('.pm7-menu-content');
    this.items = element.querySelectorAll('.pm7-menu-item');
    this.isOpen = false;
    this.currentIndex = -1;
    
    if (!this.trigger || !this.content) {
      console.warn('PM7Menu: Missing required elements');
      return;
    }
    
    // Store this instance by element
    PM7Menu.instances.set(element, this);
    
    // Store reference on element for easy access
    element.PM7Menu = this;
    
    this.init();
  }
  
  init() {
    // Check if this menu is part of a menu bar
    this.isInMenuBar = this.element.closest('.pm7-menu-bar') !== null;
    
    // Click handlers
    this.trigger.addEventListener('click', (e) => {
      e.stopPropagation();
      
      // In menu bars, always open (don't toggle) if another menu is open
      if (this.isInMenuBar && this.isAnyMenuBarMenuOpen() && !this.isOpen) {
        this.open();
      } else {
        this.toggle();
      }
    });
    
    // Hover handlers for menu bar menus
    if (this.isInMenuBar) {
      this.trigger.addEventListener('mouseenter', () => {
        // Check if any other menu in the bar is open
        if (this.isAnyMenuBarMenuOpen()) {
          this.open();
        }
      });
    }
    
    // Close on outside click
    this.outsideClickHandler = (e) => {
      // Check if the click is outside the menu element and not on a submenu
      if (!this.element.contains(e.target) && this.isOpen) {
        // Check if the click is on a submenu that is part of this menu
        const clickedSubmenu = e.target.closest('.pm7-submenu');
        if (!clickedSubmenu || !this.element.contains(clickedSubmenu)) {
          this.close();
        }
      }
    };
    document.addEventListener('click', this.outsideClickHandler);
    
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
    
    // Close on escape - bind to instance for proper cleanup
    this.escapeHandler = (e) => {
      if (e.key === 'Escape' && this.isOpen) {
        e.stopPropagation(); // Don't trigger other escape handlers
        this.close();
        this.trigger.focus();
      }
    };
    
    // Reposition on window resize/scroll
    this.repositionHandler = () => {
      if (this.isOpen) {
        this.adjustPosition();
      }
    };
    window.addEventListener('resize', this.repositionHandler);
    window.addEventListener('scroll', this.repositionHandler, true);
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
    this.trigger.setAttribute('aria-expanded', 'true');
    
    // Add escape handler when menu opens
    document.addEventListener('keydown', this.escapeHandler);
    
    // Check viewport position and adjust if needed
    this.adjustPosition();
    
    // Focus first item
    requestAnimationFrame(() => {
      this.currentIndex = 0;
      this.focusItem(0);
    });
  }
  
  close() {
    this.isOpen = false;
    this.content.classList.remove('pm7-menu-content--open');
    this.trigger.setAttribute('aria-expanded', 'false');
    this.currentIndex = -1;
    
    // Remove escape handler when menu closes
    document.removeEventListener('keydown', this.escapeHandler);
    
    // Remove focus from items
    this.items.forEach(item => {
      item.setAttribute('tabindex', '-1');
      // Remove clicking class from all items
      item.classList.remove('pm7-menu-item--clicking');
    });
    
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
      if (menuEl !== this.element && menuEl.PM7Menu && menuEl.PM7Menu.isOpen) {
        return true;
      }
    }
    return false;
  }
}

// Auto-initialize menus with data attribute
// Use more efficient initialization
if (typeof document !== 'undefined' && !window.__PM7_MENU_INIT__) {
  // Prevent multiple initializations
  window.__PM7_MENU_INIT__ = true;
  
  const initMenus = () => {
    console.log('[PM7Menu] Auto-init: Checking for menus...');
    const menus = document.querySelectorAll('[data-pm7-menu]:not([data-pm7-menu-initialized])');
    console.log(`[PM7Menu] Auto-init: Found ${menus.length} uninitialized menus`);
    menus.forEach((menu, index) => {
      console.log(`[PM7Menu] Auto-init: Initializing menu ${index + 1}/${menus.length}`);
      try {
        new PM7Menu(menu);
        menu.setAttribute('data-pm7-menu-initialized', 'true');
      } catch (error) {
        console.error(`[PM7Menu] Auto-init: Error initializing menu ${index + 1}:`, error);
      }
    });
    console.log('[PM7Menu] Auto-init: Complete');
  };
  
  if (document.readyState === 'loading') {
    console.log('[PM7Menu] Auto-init: Document still loading, waiting for DOMContentLoaded');
    document.addEventListener('DOMContentLoaded', initMenus, { once: true });
  } else {
    console.log('[PM7Menu] Auto-init: Document ready, initializing now');
    // Use setTimeout to avoid blocking
    setTimeout(initMenus, 0);
  }
} else if (window.__PM7_MENU_INIT__) {
  console.log('[PM7Menu] Auto-init: Already initialized, skipping');
}