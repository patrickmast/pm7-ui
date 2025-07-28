/**
 * PM7 Accordion Component with Self-Healing
 * Collapsible content panels with automatic recovery from framework re-renders
 */
export class PM7Accordion {
  static instances = new WeakMap(); // Use WeakMap for better memory management
  
  constructor(element, options = {}) {
    // Self-healing: Check if element was re-rendered by framework
    const wasInitialized = element.hasAttribute('data-pm7-accordion-initialized');
    const hasInstance = PM7Accordion.instances.has(element);
    
    // If initialized but no instance, element was re-rendered
    if (wasInitialized && !hasInstance) {
      console.log('[PM7Accordion] Self-healing: Re-initializing accordion after framework re-render');
      element.removeAttribute('data-pm7-accordion-initialized');
    }
    
    // Check if this element already has an accordion instance
    if (PM7Accordion.instances.has(element)) {
      return PM7Accordion.instances.get(element);
    }
    
    this.element = element;
    
    // Preserve state if this is a re-render
    const preservedState = this.preserveState();
    
    // AI-Agent FIRST: Automatically add pm7-accordion class if missing
    if (!this.element.classList.contains('pm7-accordion')) {
      this.element.classList.add('pm7-accordion');
    }
    
    this.options = {
      allowMultiple: false,
      defaultOpen: null,
      iconPosition: 'end', // 'start' or 'end'
      textAlign: 'left', // 'left', 'center', or 'right'
      height: null, // 'sm', 'md', 'lg', 'fixed' or null for auto
      fixedHeight: 300, // height in pixels when using 'fixed' option
      ...options
    };
    
    this.items = [];
    this.eventListeners = new Map(); // Track event listeners for cleanup
    
    // Store this instance
    PM7Accordion.instances.set(element, this);
    
    // Store instance reference on element for self-healing
    element._pm7AccordionInstance = this;
    
    this.init();
    
    // Restore state if this was a re-render
    if (preservedState && preservedState.openItems.length > 0) {
      this.restoreState(preservedState);
    }
    
    // Mark as initialized
    element.setAttribute('data-pm7-accordion-initialized', 'true');
  }
  
  preserveState() {
    // Try to preserve state from DOM
    const items = this.element.querySelectorAll('.pm7-accordion-item');
    const openItems = [];
    
    items.forEach((item, index) => {
      if (item.getAttribute('data-state') === 'open') {
        openItems.push(index);
      }
    });
    
    return {
      openItems,
      options: this.element.dataset // Preserve any data attributes
    };
  }
  
  restoreState(state) {
    // Restore open items
    state.openItems.forEach(index => {
      if (index < this.items.length) {
        // Use setTimeout to ensure DOM is ready
        setTimeout(() => {
          this.open(index);
        }, 0);
      }
    });
  }

  init() {
    // Remove any existing event listeners to prevent duplicates
    this.cleanup();
    
    // Apply icon position class if needed
    if (this.options.iconPosition === 'start') {
      this.element.classList.add('pm7-accordion--icon-start');
    }
    
    // Apply text alignment class if needed
    if (this.options.textAlign && this.options.textAlign !== 'left') {
      this.element.classList.add(`pm7-accordion--text-${this.options.textAlign}`);
    }
    
    // Apply height class if needed
    if (this.options.height) {
      this.element.classList.add(`pm7-accordion--height-${this.options.height}`);
      
      // If fixed height, set the CSS variable
      if (this.options.height === 'fixed' && this.options.fixedHeight) {
        this.element.style.setProperty('--pm7-accordion-fixed-height', `${this.options.fixedHeight}px`);
      }
    }
    
    // Find all accordion items
    const items = this.element.querySelectorAll('.pm7-accordion-item');
    
    items.forEach((item, index) => {
      const trigger = item.querySelector('.pm7-accordion-trigger');
      const content = item.querySelector('.pm7-accordion-content');
      
      if (!trigger || !content) return;
      
      // Add chevron icon if not present
      let icon = trigger.querySelector('.pm7-accordion-icon');
      if (!icon) {
        icon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        icon.setAttribute('class', 'pm7-accordion-icon');
        icon.setAttribute('width', '16');
        icon.setAttribute('height', '16');
        icon.setAttribute('viewBox', '0 0 12 12');
        icon.innerHTML = '<path d="M2.5 4L6 7.5L9.5 4" stroke="currentColor" stroke-width="1.5" fill="none"/>';
        trigger.appendChild(icon);
      }
      
      // Store item reference
      this.items.push({ item, trigger, content });
      
      // Set initial state
      const isOpen = this.options.defaultOpen === index || 
                     this.options.defaultOpen === 'all' ||
                     item.getAttribute('data-state') === 'open';
      
      // Mark item as initial to prevent animation on already open items
      if (isOpen) {
        item.setAttribute('data-initial', 'true');
      }
      
      this.setItemState(item, trigger, content, isOpen);
      
      // Remove initial flag after initialization
      if (isOpen) {
        setTimeout(() => {
          item.removeAttribute('data-initial');
        }, 50);
      }
      
      // Create bound handlers for proper cleanup
      const clickHandler = () => this.toggle(index);
      const keyHandler = (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          this.toggle(index);
        }
      };
      
      // Add event listeners
      trigger.addEventListener('click', clickHandler);
      trigger.addEventListener('keydown', keyHandler);
      
      // Store listeners for cleanup
      this.eventListeners.set(`click-${index}`, { element: trigger, type: 'click', handler: clickHandler });
      this.eventListeners.set(`keydown-${index}`, { element: trigger, type: 'keydown', handler: keyHandler });
    });
  }
  
  cleanup() {
    // Remove all event listeners
    this.eventListeners.forEach(({ element, type, handler }) => {
      element.removeEventListener(type, handler);
    });
    this.eventListeners.clear();
  }
  
  destroy() {
    this.cleanup();
    PM7Accordion.instances.delete(this.element);
    delete this.element._pm7AccordionInstance;
  }
  
  toggle(index) {
    const { item, trigger, content } = this.items[index];
    const isOpen = item.getAttribute('data-state') === 'open';
    
    // If closing, just close this item
    if (isOpen) {
      this.setItemState(item, trigger, content, false);
    } else {
      // If opening and allowMultiple is false, close other items
      if (!this.options.allowMultiple) {
        this.items.forEach((otherItem, otherIndex) => {
          if (otherIndex !== index && otherItem.item.getAttribute('data-state') === 'open') {
            this.setItemState(otherItem.item, otherItem.trigger, otherItem.content, false);
          }
        });
      }
      
      // Open this item
      this.setItemState(item, trigger, content, true);
    }
    
    // Dispatch custom event
    this.element.dispatchEvent(new CustomEvent('pm7:accordion:toggle', {
      detail: { index, isOpen: !isOpen },
      bubbles: true
    }));
  }
  
  setItemState(item, trigger, content, isOpen) {
    if (isOpen) {
      // Opening
      item.setAttribute('data-state', 'open');
      trigger.setAttribute('aria-expanded', 'true');
      content.setAttribute('data-state', 'open');
      
      // Set height for animation
      const height = content.scrollHeight;
      content.style.setProperty('--pm7-accordion-content-height', `${height}px`);
    } else {
      // Closing - only animate if it was previously open
      if (content.getAttribute('data-state') === 'open') {
        // Set height before closing
        const height = content.scrollHeight;
        content.style.setProperty('--pm7-accordion-content-height', `${height}px`);
        
        // Set closing state for animation
        content.setAttribute('data-state', 'closing');
        
        // After animation completes, set to closed
        setTimeout(() => {
          item.setAttribute('data-state', 'closed');
          trigger.setAttribute('aria-expanded', 'false');
          content.setAttribute('data-state', 'closed');
        }, 250); // Match animation duration
      } else {
        // Initial closed state - no animation
        item.setAttribute('data-state', 'closed');
        trigger.setAttribute('aria-expanded', 'false');
        content.setAttribute('data-state', 'closed');
      }
    }
  }
  
  // Public methods
  open(index) {
    if (index >= 0 && index < this.items.length) {
      const { item, trigger, content } = this.items[index];
      this.setItemState(item, trigger, content, true);
    }
  }
  
  close(index) {
    if (index >= 0 && index < this.items.length) {
      const { item, trigger, content } = this.items[index];
      this.setItemState(item, trigger, content, false);
    }
  }
  
  openAll() {
    this.items.forEach(({ item, trigger, content }) => {
      this.setItemState(item, trigger, content, true);
    });
  }
  
  closeAll() {
    this.items.forEach(({ item, trigger, content }) => {
      this.setItemState(item, trigger, content, false);
    });
  }
  
  // Static auto-init method
  static autoInit() {
    const accordions = document.querySelectorAll('[data-pm7-accordion]');
    accordions.forEach(accordion => {
      // Skip if already initialized and has instance
      if (accordion.hasAttribute('data-pm7-accordion-initialized') && accordion._pm7AccordionInstance) {
        return;
      }
      
      // Initialize accordion
      const allowMultiple = accordion.getAttribute('data-allow-multiple') === 'true';
      const defaultOpen = accordion.getAttribute('data-default-open');
      const iconPosition = accordion.getAttribute('data-icon-position') || 'end';
      const textAlign = accordion.getAttribute('data-text-align') || 'left';
      const height = accordion.getAttribute('data-height');
      const fixedHeight = accordion.getAttribute('data-fixed-height');
      
      new PM7Accordion(accordion, {
        allowMultiple,
        defaultOpen: defaultOpen === 'all' ? 'all' : parseInt(defaultOpen),
        iconPosition,
        textAlign,
        height,
        fixedHeight: fixedHeight ? parseInt(fixedHeight) : 300
      });
    });
  }
}

// Self-healing function
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

// Auto-initialize accordions on DOM ready
if (typeof document !== 'undefined') {
  // Initialize immediately if DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', PM7Accordion.autoInit, { once: true });
  } else {
    setTimeout(PM7Accordion.autoInit, 0);
  }
}

// Make healing function available
PM7Accordion.heal = healAccordions;