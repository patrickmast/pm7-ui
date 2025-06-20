/**
 * PM7Menu - Vanilla JavaScript menu component
 * Handles dropdown menus with keyboard navigation and accessibility
 */
export class PM7Menu {
  static instances = new Set();
  
  constructor(element) {
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
    
    // Add this instance to the static set
    PM7Menu.instances.add(this);
    
    this.init();
  }
  
  init() {
    // Click handlers
    this.trigger.addEventListener('click', (e) => {
      e.stopPropagation();
      this.toggle();
    });
    
    // Close on outside click
    document.addEventListener('click', (e) => {
      if (!this.element.contains(e.target) && this.isOpen) {
        this.close();
      }
    });
    
    // Keyboard navigation
    this.trigger.addEventListener('keydown', (e) => this.handleTriggerKeyDown(e));
    this.content.addEventListener('keydown', (e) => this.handleMenuKeyDown(e));
    
    // Menu item clicks
    this.items.forEach((item, index) => {
      item.addEventListener('click', (e) => {
        if (!item.disabled && !item.hasAttribute('disabled')) {
          this.handleItemClick(e, item);
        }
      });
      
      // Make items focusable
      item.setAttribute('tabindex', '-1');
    });
    
    // Close on escape
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.isOpen) {
        this.close();
        this.trigger.focus();
      }
    });
  }
  
  toggle() {
    this.isOpen ? this.close() : this.open();
  }
  
  open() {
    // Close all other open menus
    PM7Menu.instances.forEach(instance => {
      if (instance !== this && instance.isOpen) {
        instance.close();
      }
    });
    
    this.isOpen = true;
    this.content.classList.add('pm7-menu-content--open');
    this.trigger.setAttribute('aria-expanded', 'true');
    
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
    
    // Remove focus from items
    this.items.forEach(item => item.setAttribute('tabindex', '-1'));
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
    
    // Close menu for regular items
    if (!item.classList.contains('pm7-menu-item--has-submenu')) {
      this.close();
      this.trigger.focus();
    }
    
    // Dispatch custom event
    const event = new CustomEvent('pm7-menu-select', {
      detail: { item, menu: this },
      bubbles: true
    });
    this.element.dispatchEvent(event);
  }
}

// Auto-initialize menus with data attribute
// Use more efficient initialization
if (typeof document !== 'undefined') {
  const initMenus = () => {
    const menus = document.querySelectorAll('[data-pm7-menu]:not([data-pm7-menu-initialized])');
    menus.forEach(menu => {
      new PM7Menu(menu);
      menu.setAttribute('data-pm7-menu-initialized', 'true');
    });
  };
  
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMenus, { once: true });
  } else {
    initMenus();
  }
}