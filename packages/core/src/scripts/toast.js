/**
 * PM7 Toast Component JavaScript
 * Provides toast notification functionality
 */

export class PM7Toast {
  constructor() {
    this.viewport = null;
    this.toasts = new Map();
    this.init();
  }

  init() {
    // Create viewport if it doesn't exist
    if (!document.querySelector('.pm7-toast-viewport')) {
      this.viewport = document.createElement('div');
      this.viewport.className = 'pm7-toast-viewport';
      document.body.appendChild(this.viewport);
    } else {
      this.viewport = document.querySelector('.pm7-toast-viewport');
    }
  }

  show(options = {}) {
    const {
      title = '',
      description = '',
      variant = 'default',
      duration = 5000,
      action = null,
      onClose = null
    } = options;

    // Create toast element
    const toast = document.createElement('div');
    const id = Date.now().toString();
    toast.className = `pm7-toast pm7-toast--${variant}`;
    toast.setAttribute('data-state', 'open');
    toast.setAttribute('data-toast-id', id);

    // Build toast content
    let html = '';
    
    if (title || description) {
      html += '<div class="pm7-toast-header">';
      html += '<div>';
      if (title) html += `<h3 class="pm7-toast-title">${title}</h3>`;
      if (description) html += `<p class="pm7-toast-description">${description}</p>`;
      html += '</div>';
      html += '<button class="pm7-toast-close" aria-label="Close">&times;</button>';
      html += '</div>';
    }

    if (action) {
      html += '<div class="pm7-toast-action">';
      html += action;
      html += '</div>';
    }

    // Add progress bar for auto-dismiss
    if (duration > 0) {
      html += `<div class="pm7-toast-progress" style="animation-duration: ${duration}ms"></div>`;
    }

    toast.innerHTML = html;

    // Add close handler
    const closeBtn = toast.querySelector('.pm7-toast-close');
    if (closeBtn) {
      closeBtn.addEventListener('click', () => this.close(id));
    }

    // Add to viewport
    this.viewport.appendChild(toast);
    this.toasts.set(id, { element: toast, onClose });

    // Auto-dismiss
    if (duration > 0) {
      setTimeout(() => this.close(id), duration);
    }

    return id;
  }

  close(id) {
    const toast = this.toasts.get(id);
    if (!toast) return;

    const { element, onClose } = toast;
    
    // Trigger closing animation
    element.setAttribute('data-state', 'closed');

    // Remove after animation
    setTimeout(() => {
      element.remove();
      this.toasts.delete(id);
      if (onClose) onClose();
    }, 200);
  }

  closeAll() {
    this.toasts.forEach((_, id) => this.close(id));
  }
}

// Create global instance
let globalToast = null;

// Helper functions
export function showToast(options) {
  if (!globalToast) {
    globalToast = new PM7Toast();
  }
  return globalToast.show(options);
}

export function closeToast(id) {
  if (globalToast) {
    globalToast.close(id);
  }
}

export function closeAllToasts() {
  if (globalToast) {
    globalToast.closeAll();
  }
}

// Auto-initialize
if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      globalToast = new PM7Toast();
    });
  } else {
    globalToast = new PM7Toast();
  }
}