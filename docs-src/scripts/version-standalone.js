/**
 * Standalone version display initialization
 * For pages that don't load docs.js but need version display
 */

import { initVersionDisplay } from './version.js';

// Initialize version display when DOM is ready
if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initVersionDisplay);
  } else {
    initVersionDisplay();
  }
}