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
      
      this.setItemState(item, trigger, content, isOpen);
      
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
    item.setAttribute('data-state', isOpen ? 'open' : 'closed');
    trigger.setAttribute('aria-expanded', isOpen);
    content.setAttribute('data-state', isOpen ? 'open' : 'closed');
    
    // For smooth animation, we need to set height dynamically
    if (isOpen) {
      const height = content.scrollHeight;
      content.style.setProperty('--pm7-accordion-content-height', `${height}px`);
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
}

// Auto-initialize accordions on DOM ready
if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    const accordions = document.querySelectorAll('[data-pm7-accordion]');
    accordions.forEach(accordion => {
      // Check if already initialized
      if (!accordion.PM7Accordion) {
        const allowMultiple = accordion.getAttribute('data-allow-multiple') === 'true';
        const defaultOpen = accordion.getAttribute('data-default-open');
        const iconPosition = accordion.getAttribute('data-icon-position') || 'end';
        const textAlign = accordion.getAttribute('data-text-align') || 'left';
        
        accordion.PM7Accordion = new PM7Accordion(accordion, {
          allowMultiple,
          defaultOpen: defaultOpen === 'all' ? 'all' : parseInt(defaultOpen),
          iconPosition,
          textAlign
        });
      }
    });
  });
}