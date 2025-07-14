/**
 * PM7 Button Component JavaScript
 * Adds 6stars effect to primary buttons
 */

export class PM7Button {
  constructor(element) {
    this.element = element;
    this.init();
  }

  init() {
    // Only add 6stars to primary buttons
    if (this.element.classList.contains('pm7-button--primary') || 
        this.element.classList.contains('pm7-button--default')) {
      this.add6StarsEffect();
    }
    
    // Initialize slider button functionality
    if (this.element.classList.contains('pm7-button--slider')) {
      this.initSlider();
    }
  }

  add6StarsEffect() {
    // Create 6stars container
    const starsContainer = document.createElement('div');
    starsContainer.className = 'pm7-button__6stars';

    // Create 6 stars
    for (let i = 0; i < 6; i++) {
      const star = document.createElement('span');
      star.className = 'star';
      starsContainer.appendChild(star);
    }

    // Add to button
    this.element.appendChild(starsContainer);
  }
  
  initSlider() {
    this.handle = this.element.querySelector('.pm7-button--slider-handle');
    this.text = this.element.querySelector('.pm7-button--slider-text');
    
    if (!this.handle) return;
    
    this.isDragging = false;
    this.startX = 0;
    this.currentX = 0;
    this.handleX = 0;
    this.maxX = 0;
    this.threshold = 0.95; // 95% to complete
    
    // Bind event handlers
    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.handleMouseUp = this.handleMouseUp.bind(this);
    this.handleTouchStart = this.handleTouchStart.bind(this);
    this.handleTouchMove = this.handleTouchMove.bind(this);
    this.handleTouchEnd = this.handleTouchEnd.bind(this);
    
    // Add event listeners
    this.handle.addEventListener('mousedown', this.handleMouseDown);
    this.handle.addEventListener('touchstart', this.handleTouchStart, { passive: false });
    
    // Calculate max position
    this.updateMaxPosition();
    
    // Update on resize
    window.addEventListener('resize', () => this.updateMaxPosition());
  }
  
  updateMaxPosition() {
    const buttonWidth = this.element.offsetWidth;
    const handleWidth = this.handle.offsetWidth;
    this.maxX = buttonWidth - handleWidth - 8; // 4px padding on each side
  }
  
  handleMouseDown(e) {
    if (this.element.disabled || this.element.hasAttribute('data-pm7-slider-complete')) return;
    
    this.isDragging = true;
    this.startX = e.clientX - this.handleX;
    this.element.setAttribute('data-pm7-slider-dragging', 'true');
    
    document.addEventListener('mousemove', this.handleMouseMove);
    document.addEventListener('mouseup', this.handleMouseUp);
    
    e.preventDefault();
  }
  
  handleTouchStart(e) {
    if (this.element.disabled || this.element.hasAttribute('data-pm7-slider-complete')) return;
    
    const touch = e.touches[0];
    this.isDragging = true;
    this.startX = touch.clientX - this.handleX;
    this.element.setAttribute('data-pm7-slider-dragging', 'true');
    
    document.addEventListener('touchmove', this.handleTouchMove, { passive: false });
    document.addEventListener('touchend', this.handleTouchEnd);
    
    e.preventDefault();
  }
  
  handleMouseMove(e) {
    if (!this.isDragging) return;
    
    this.currentX = e.clientX - this.startX;
    this.updateHandlePosition();
  }
  
  handleTouchMove(e) {
    if (!this.isDragging) return;
    
    const touch = e.touches[0];
    this.currentX = touch.clientX - this.startX;
    this.updateHandlePosition();
    
    e.preventDefault();
  }
  
  updateHandlePosition() {
    // Constrain position
    this.handleX = Math.max(0, Math.min(this.currentX, this.maxX));
    
    // Update handle position
    this.handle.style.transform = `translateX(${this.handleX}px)`;
    
    // Check if threshold reached
    const progress = this.handleX / this.maxX;
    if (progress >= this.threshold) {
      this.complete();
    }
  }
  
  handleMouseUp() {
    this.endDrag();
    document.removeEventListener('mousemove', this.handleMouseMove);
    document.removeEventListener('mouseup', this.handleMouseUp);
  }
  
  handleTouchEnd() {
    this.endDrag();
    document.removeEventListener('touchmove', this.handleTouchMove);
    document.removeEventListener('touchend', this.handleTouchEnd);
  }
  
  endDrag() {
    if (!this.isDragging) return;
    
    this.isDragging = false;
    this.element.removeAttribute('data-pm7-slider-dragging');
    
    // If not completed, snap back
    const progress = this.handleX / this.maxX;
    if (progress < this.threshold && !this.element.hasAttribute('data-pm7-slider-complete')) {
      this.handleX = 0;
      this.handle.style.transform = 'translateX(0)';
    }
  }
  
  complete() {
    if (this.element.hasAttribute('data-pm7-slider-complete')) return;
    
    // Snap to end
    this.handleX = this.maxX;
    this.handle.style.transform = `translateX(${this.maxX}px)`;
    
    // Mark as complete
    this.element.setAttribute('data-pm7-slider-complete', 'true');
    
    // Dispatch event
    this.element.dispatchEvent(new CustomEvent('pm7:slider:complete', {
      bubbles: true,
      detail: { button: this.element }
    }));
    
    // Trigger click event after a small delay
    setTimeout(() => {
      this.element.click();
    }, 300);
  }
  
  reset() {
    this.handleX = 0;
    this.handle.style.transform = 'translateX(0)';
    this.element.removeAttribute('data-pm7-slider-complete');
    this.element.removeAttribute('data-pm7-slider-dragging');
  }
}

// Auto-initialize buttons
export function initButtons() {
  // Initialize primary/default buttons with 6stars
  document.querySelectorAll('.pm7-button--primary, .pm7-button--default').forEach(button => {
    if (!button.querySelector('.pm7-button__6stars')) {
      new PM7Button(button);
    }
  });
  
  // Initialize slider buttons
  document.querySelectorAll('.pm7-button--slider').forEach(button => {
    if (!button.PM7Button) {
      button.PM7Button = new PM7Button(button);
    }
  });
}

// Initialize on DOM ready
if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initButtons);
  } else {
    initButtons();
  }
}