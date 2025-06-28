/**
 * PM7 Tooltip Component
 * Interactive tooltip functionality
 */

export class PM7Tooltip {
  constructor(element) {
    this.element = element;
    this.trigger = element.querySelector('.pm7-tooltip-trigger');
    this.content = element.querySelector('.pm7-tooltip-content');
    this.arrow = element.querySelector('.pm7-tooltip-arrow');
    
    // Configuration
    this.side = this.content?.dataset.side || 'top';
    this.align = this.content?.dataset.align || 'center';
    this.delay = parseInt(element.dataset.delay || '0');
    this.openDelay = parseInt(element.dataset.openDelay || this.delay || '0');
    this.closeDelay = parseInt(element.dataset.closeDelay || '0');
    
    // State
    this.isOpen = false;
    this.openTimeout = null;
    this.closeTimeout = null;
    
    // Bind methods
    this.handleTriggerMouseEnter = this.handleTriggerMouseEnter.bind(this);
    this.handleTriggerMouseLeave = this.handleTriggerMouseLeave.bind(this);
    this.handleTriggerFocus = this.handleTriggerFocus.bind(this);
    this.handleTriggerBlur = this.handleTriggerBlur.bind(this);
    this.handleTriggerClick = this.handleTriggerClick.bind(this);
    this.handleDocumentClick = this.handleDocumentClick.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.updatePosition = this.updatePosition.bind(this);
    
    this.init();
  }
  
  init() {
    if (!this.trigger || !this.content) return;
    
    // Set initial ARIA attributes
    this.trigger.setAttribute('aria-describedby', this.content.id || this.generateId());
    this.content.setAttribute('role', 'tooltip');
    this.content.setAttribute('data-state', 'closed');
    
    // Add event listeners
    this.trigger.addEventListener('mouseenter', this.handleTriggerMouseEnter);
    this.trigger.addEventListener('mouseleave', this.handleTriggerMouseLeave);
    this.trigger.addEventListener('focus', this.handleTriggerFocus);
    this.trigger.addEventListener('blur', this.handleTriggerBlur);
    
    // Touch support
    if ('ontouchstart' in window) {
      this.trigger.addEventListener('click', this.handleTriggerClick);
    }
  }
  
  handleTriggerMouseEnter() {
    this.clearTimeouts();
    
    if (this.openDelay > 0) {
      this.openTimeout = setTimeout(() => {
        this.show();
      }, this.openDelay);
    } else {
      this.show();
    }
  }
  
  handleTriggerMouseLeave() {
    this.clearTimeouts();
    
    if (this.closeDelay > 0) {
      this.closeTimeout = setTimeout(() => {
        this.hide();
      }, this.closeDelay);
    } else {
      this.hide();
    }
  }
  
  handleTriggerFocus() {
    this.show();
  }
  
  handleTriggerBlur() {
    this.hide();
  }
  
  handleTriggerClick(event) {
    event.preventDefault();
    event.stopPropagation();
    
    if (this.isOpen) {
      this.hide();
    } else {
      this.show();
      // Add document listener for closing on outside click
      setTimeout(() => {
        document.addEventListener('click', this.handleDocumentClick);
      }, 0);
    }
  }
  
  handleDocumentClick(event) {
    if (!this.element.contains(event.target)) {
      this.hide();
      document.removeEventListener('click', this.handleDocumentClick);
    }
  }
  
  handleKeyDown(event) {
    if (event.key === 'Escape' && this.isOpen) {
      this.hide();
      this.trigger.focus();
    }
  }
  
  show() {
    if (this.isOpen) return;
    
    this.isOpen = true;
    this.content.setAttribute('data-state', 'open');
    
    // Update position before showing
    this.updatePosition();
    
    // Add escape key listener
    document.addEventListener('keydown', this.handleKeyDown);
    
    // Announce to screen readers
    this.announceToScreenReaders();
    
    // Dispatch custom event
    this.element.dispatchEvent(new CustomEvent('pm7:tooltip:show', {
      bubbles: true,
      detail: { tooltip: this }
    }));
  }
  
  hide() {
    if (!this.isOpen) return;
    
    this.isOpen = false;
    this.content.setAttribute('data-state', 'closed');
    
    // Remove escape key listener
    document.removeEventListener('keydown', this.handleKeyDown);
    
    // Dispatch custom event
    this.element.dispatchEvent(new CustomEvent('pm7:tooltip:hide', {
      bubbles: true,
      detail: { tooltip: this }
    }));
  }
  
  updatePosition() {
    if (!this.trigger || !this.content) return;
    
    // Reset position for measurement
    this.content.style.top = '';
    this.content.style.left = '';
    this.content.style.right = '';
    this.content.style.bottom = '';
    
    const triggerRect = this.trigger.getBoundingClientRect();
    const contentRect = this.content.getBoundingClientRect();
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    
    // Check if tooltip fits in preferred position
    let actualSide = this.side;
    const padding = 8; // Minimum distance from viewport edge
    
    // Auto-adjust position if it doesn't fit
    if (actualSide === 'top' && triggerRect.top - contentRect.height - padding < 0) {
      actualSide = 'bottom';
    } else if (actualSide === 'bottom' && triggerRect.bottom + contentRect.height + padding > viewportHeight) {
      actualSide = 'top';
    } else if (actualSide === 'left' && triggerRect.left - contentRect.width - padding < 0) {
      actualSide = 'right';
    } else if (actualSide === 'right' && triggerRect.right + contentRect.width + padding > viewportWidth) {
      actualSide = 'left';
    }
    
    // Update data attribute for styling
    this.content.setAttribute('data-side', actualSide);
    
    // Handle alignment adjustments for horizontal positions
    if ((actualSide === 'top' || actualSide === 'bottom') && this.align === 'center') {
      const contentHalfWidth = contentRect.width / 2;
      const triggerCenter = triggerRect.left + triggerRect.width / 2;
      
      // Check if centered tooltip would overflow viewport
      if (triggerCenter - contentHalfWidth < padding) {
        this.content.setAttribute('data-align', 'start');
      } else if (triggerCenter + contentHalfWidth > viewportWidth - padding) {
        this.content.setAttribute('data-align', 'end');
      }
    }
  }
  
  clearTimeouts() {
    if (this.openTimeout) {
      clearTimeout(this.openTimeout);
      this.openTimeout = null;
    }
    if (this.closeTimeout) {
      clearTimeout(this.closeTimeout);
      this.closeTimeout = null;
    }
  }
  
  generateId() {
    return `pm7-tooltip-${Math.random().toString(36).substr(2, 9)}`;
  }
  
  announceToScreenReaders() {
    // Create a live region for screen reader announcements
    const announcement = document.createElement('div');
    announcement.setAttribute('role', 'status');
    announcement.setAttribute('aria-live', 'polite');
    announcement.className = 'pm7-sr-only';
    announcement.textContent = this.content.textContent;
    
    document.body.appendChild(announcement);
    
    // Remove after announcement
    setTimeout(() => {
      document.body.removeChild(announcement);
    }, 1000);
  }
  
  destroy() {
    this.clearTimeouts();
    
    // Remove event listeners
    this.trigger?.removeEventListener('mouseenter', this.handleTriggerMouseEnter);
    this.trigger?.removeEventListener('mouseleave', this.handleTriggerMouseLeave);
    this.trigger?.removeEventListener('focus', this.handleTriggerFocus);
    this.trigger?.removeEventListener('blur', this.handleTriggerBlur);
    this.trigger?.removeEventListener('click', this.handleTriggerClick);
    document.removeEventListener('click', this.handleDocumentClick);
    document.removeEventListener('keydown', this.handleKeyDown);
    
    // Reset state
    this.hide();
  }
}

// Auto-initialize tooltips
export function initTooltips(container = document) {
  const tooltips = container.querySelectorAll('.pm7-tooltip');
  tooltips.forEach(tooltip => {
    if (!tooltip.PM7Tooltip) {
      tooltip.PM7Tooltip = new PM7Tooltip(tooltip);
    }
  });
}

// Initialize on DOM ready
if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => initTooltips());
  } else {
    initTooltips();
  }
}