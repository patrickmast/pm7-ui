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
}

// Auto-initialize buttons
export function initButtons() {
  document.querySelectorAll('.pm7-button--primary, .pm7-button--default').forEach(button => {
    if (!button.querySelector('.pm7-button__6stars')) {
      new PM7Button(button);
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