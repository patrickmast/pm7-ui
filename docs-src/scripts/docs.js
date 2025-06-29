// Documentation site JavaScript
console.log('[Docs] Starting docs.js...');

console.log('[Docs] Importing PM7Menu...');
import { PM7Menu } from '/packages/core/src/scripts/menu.js';
console.log('[Docs] PM7Menu imported successfully');

console.log('[Docs] Importing loadSharedComponents...');
import { loadSharedComponents } from './components.js';
console.log('[Docs] loadSharedComponents imported successfully');

console.log('[Docs] Importing version display...');
import { initVersionDisplay } from './version.js';
console.log('[Docs] Version display imported successfully');

// Make PM7Menu available globally for components.js
window.PM7Menu = PM7Menu;
console.log('[Docs] PM7Menu attached to window');

// Load shared components (header and footer)
document.addEventListener('DOMContentLoaded', () => {
  console.log('[Docs] DOMContentLoaded fired');
  try {
    loadSharedComponents();
    console.log('[Docs] loadSharedComponents called');
  } catch (error) {
    console.error('[Docs] Error calling loadSharedComponents:', error);
  }
  
  // Initialize version display
  try {
    initVersionDisplay();
    console.log('[Docs] Version display initialized');
  } catch (error) {
    console.error('[Docs] Error initializing version display:', error);
  }
  const currentPath = window.location.pathname;
  
  // Note: PM7 menu items should NOT have active class - they start in neutral state
  // Only update traditional nav links
  const navLinks = document.querySelectorAll('.pm7-docs-nav-menu a');
  navLinks.forEach(link => {
    link.classList.remove('active');
    const href = link.getAttribute('href');
    if (href === currentPath || (href === '/components.html' && currentPath.startsWith('/components/'))) {
      link.classList.add('active');
    }
  });
  
  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const href = this.getAttribute('href');
      // Skip if it's just # or if it's the version info trigger
      if (href === '#' || this.id === 'version-info-trigger') {
        return;
      }
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
});