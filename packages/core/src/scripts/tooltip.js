/**
 * PM7 Tooltip Component
 * Interactive tooltip functionality
 */

export class PM7Tooltip {
  static instances = new WeakMap();
  
  constructor(element) {
    // Self-healing: Check if element was re-rendered by framework
    const wasInitialized = element.hasAttribute('data-pm7-tooltip-initialized');
    const hasInstance = PM7Tooltip.instances.has(element);
    
    // If initialized but no instance, element was re-rendered
    if (wasInitialized && !hasInstance) {
      console.log('[PM7Tooltip] Self-healing: Re-initializing tooltip after framework re-render');
      element.removeAttribute('data-pm7-tooltip-initialized');
    }
    
    // Check if this element already has a tooltip instance
    if (PM7Tooltip.instances.has(element)) {
      return PM7Tooltip.instances.get(element);
    }
    
    this.element = element;
    
    // Only support structured syntax - no simple syntax transformation
    
    // AI-Agent FIRST: Automatically add pm7-tooltip class if missing
    if (!this.element.classList.contains('pm7-tooltip')) {
      this.element.classList.add('pm7-tooltip');
    }
    
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
    this.eventListeners = new Map();
    
    // Preserve state if this is a re-render
    const preservedState = this.preserveState();
    
    // Store this instance
    PM7Tooltip.instances.set(element, this);
    
    // Store instance reference on element for self-healing
    element._pm7TooltipInstance = this;
    
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
    
    // Restore state if this was a re-render
    if (preservedState && preservedState.wasOpen) {
      this.restoreState(preservedState);
    }
    
    // Mark as initialized
    element.setAttribute('data-pm7-tooltip-initialized', 'true');
  }
  
  
  preserveState() {
    // Check if tooltip is currently open
    const content = this.element.querySelector('.pm7-tooltip-content');
    const wasOpen = content?.getAttribute('data-state') === 'open';
    
    return {
      wasOpen,
      side: content?.dataset.side,
      align: content?.dataset.align
    };
  }
  
  restoreState(state) {
    if (state.wasOpen) {
      // Restore open state after a brief delay
      setTimeout(() => {
        this.show();
      }, 50);
    }
  }
  
  cleanup() {
    // Remove all event listeners
    this.eventListeners.forEach(({ element, type, handler }) => {
      element.removeEventListener(type, handler);
    });
    this.eventListeners.clear();
    
    // Clear timeouts
    this.clearTimeouts();
  }
  
  init() {
    if (!this.trigger || !this.content) return;
    
    // Remove any existing event listeners to prevent duplicates
    this.cleanup();
    
    // Set initial ARIA attributes
    this.trigger.setAttribute('aria-describedby', this.content.id || this.generateId());
    this.content.setAttribute('role', 'tooltip');
    this.content.setAttribute('data-state', 'closed');
    
    // Add event listeners and track them
    this.trigger.addEventListener('mouseenter', this.handleTriggerMouseEnter);
    this.eventListeners.set('mouseenter', { element: this.trigger, type: 'mouseenter', handler: this.handleTriggerMouseEnter });
    
    this.trigger.addEventListener('mouseleave', this.handleTriggerMouseLeave);
    this.eventListeners.set('mouseleave', { element: this.trigger, type: 'mouseleave', handler: this.handleTriggerMouseLeave });
    
    this.trigger.addEventListener('focus', this.handleTriggerFocus);
    this.eventListeners.set('focus', { element: this.trigger, type: 'focus', handler: this.handleTriggerFocus });
    
    this.trigger.addEventListener('blur', this.handleTriggerBlur);
    this.eventListeners.set('blur', { element: this.trigger, type: 'blur', handler: this.handleTriggerBlur });
    
    // Touch support
    if ('ontouchstart' in window) {
      this.trigger.addEventListener('click', this.handleTriggerClick);
      this.eventListeners.set('click', { element: this.trigger, type: 'click', handler: this.handleTriggerClick });
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
    
    // Add scroll and resize listeners for fixed positioning
    window.addEventListener('scroll', this.updatePosition, true);
    window.addEventListener('resize', this.updatePosition);
    
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
    
    // Remove scroll and resize listeners
    window.removeEventListener('scroll', this.updatePosition, true);
    window.removeEventListener('resize', this.updatePosition);
    
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
    const gap = 8; // Gap between trigger and tooltip
    
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
    
    // Calculate position based on side (now using fixed positioning)
    let top, left;
    
    switch (actualSide) {
      case 'top':
        top = triggerRect.top - contentRect.height - gap;
        left = triggerRect.left + (triggerRect.width - contentRect.width) / 2;
        break;
      case 'bottom':
        top = triggerRect.bottom + gap;
        left = triggerRect.left + (triggerRect.width - contentRect.width) / 2;
        break;
      case 'left':
        top = triggerRect.top + (triggerRect.height - contentRect.height) / 2;
        left = triggerRect.left - contentRect.width - gap;
        break;
      case 'right':
        top = triggerRect.top + (triggerRect.height - contentRect.height) / 2;
        left = triggerRect.right + gap;
        break;
    }
    
    // Constrain to viewport
    top = Math.max(padding, Math.min(top, viewportHeight - contentRect.height - padding));
    left = Math.max(padding, Math.min(left, viewportWidth - contentRect.width - padding));
    
    // Apply position
    this.content.style.top = `${top}px`;
    this.content.style.left = `${left}px`;
    
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
    this.cleanup();
    PM7Tooltip.instances.delete(this.element);
    delete this.element._pm7TooltipInstance;
    
    // Remove global event listeners
    document.removeEventListener('click', this.handleDocumentClick);
    document.removeEventListener('keydown', this.handleKeyDown);
    window.removeEventListener('scroll', this.updatePosition, true);
    window.removeEventListener('resize', this.updatePosition);
    
    // Reset state
    this.hide();
  }
}

// Self-healing function
function healTooltips() {
  // Find all tooltips that were initialized but lost their instance
  const lostTooltips = document.querySelectorAll('[data-pm7-tooltip][data-pm7-tooltip-initialized]:not([data-pm7-tooltip-healing])');
  
  lostTooltips.forEach(tooltip => {
    if (!tooltip._pm7TooltipInstance || !PM7Tooltip.instances.has(tooltip)) {
      tooltip.setAttribute('data-pm7-tooltip-healing', 'true');
      console.log('[PM7Tooltip] Healing tooltip:', tooltip);
      new PM7Tooltip(tooltip);
      tooltip.removeAttribute('data-pm7-tooltip-healing');
    }
  });
}

// Auto-initialize tooltips
export function initTooltips(container = document) {
  // Find all elements with data-pm7-tooltip attribute
  const tooltips = container.querySelectorAll('[data-pm7-tooltip]:not([data-pm7-tooltip-initialized])');
  tooltips.forEach(tooltip => {
    // Skip if this element is already part of a tooltip structure (e.g., the wrapper div)
    if (!tooltip.classList.contains('pm7-tooltip-trigger') && !tooltip.classList.contains('pm7-tooltip-content')) {
      new PM7Tooltip(tooltip);
    }
  });
}

// Make healing function available
PM7Tooltip.heal = healTooltips;

// Initialize on DOM ready
if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => initTooltips());
  } else {
    initTooltips();
  }
}