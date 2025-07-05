/**
 * PM7 Accordion Component
 * Collapsible content panels for presenting information in a compact way
 */
export class PM7Accordion {
  constructor(element, options = {}) {
    this.element = element;
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
    this.init();
  }

  init() {
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
      
      // Add click handler
      trigger.addEventListener('click', () => this.toggle(index));
      
      // Add keyboard support
      trigger.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          this.toggle(index);
        }
      });
    });
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
  }
  
  setItemState(item, trigger, content, isOpen) {
    if (isOpen) {
      // Opening
      item.setAttribute('data-state', 'open');
      trigger.setAttribute('aria-expanded', true);
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
          trigger.setAttribute('aria-expanded', false);
          content.setAttribute('data-state', 'closed');
        }, 250); // Match animation duration
      } else {
        // Initial closed state - no animation
        item.setAttribute('data-state', 'closed');
        trigger.setAttribute('aria-expanded', false);
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
      // Check if already initialized
      if (!accordion.PM7Accordion) {
        const allowMultiple = accordion.getAttribute('data-allow-multiple') === 'true';
        const defaultOpen = accordion.getAttribute('data-default-open');
        const iconPosition = accordion.getAttribute('data-icon-position') || 'end';
        const textAlign = accordion.getAttribute('data-text-align') || 'left';
        const height = accordion.getAttribute('data-height');
        const fixedHeight = accordion.getAttribute('data-fixed-height');
        
        accordion.PM7Accordion = new PM7Accordion(accordion, {
          allowMultiple,
          defaultOpen: defaultOpen === 'all' ? 'all' : parseInt(defaultOpen),
          iconPosition,
          textAlign,
          height,
          fixedHeight: fixedHeight ? parseInt(fixedHeight) : 300
        });
      }
    });
  }
}

// Auto-initialize accordions on DOM ready
if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    PM7Accordion.autoInit();
  });
}