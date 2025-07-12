// Documentation site JavaScript
import { PM7Menu } from '/packages/core/src/scripts/menu.js';
import { PM7ThemeSwitch } from '/packages/core/src/scripts/theme-switch.js';
import { loadSharedComponents, loadSidebar } from './components.js';
import { initVersionDisplay } from './version.js';

// Make PM7 components available globally for components.js
window.PM7Menu = PM7Menu;
window.PM7ThemeSwitch = PM7ThemeSwitch;

// Force sidebar reload on every page load (including from cache)
window.addEventListener('pageshow', (event) => {
  if (event.persisted || performance.getEntriesByType('navigation')[0]?.type === 'back_forward') {
    // Page was loaded from cache, reload sidebar
    loadSidebar();
  }
});

// Load shared components (header and footer)
document.addEventListener('DOMContentLoaded', () => {
  try {
    loadSharedComponents();
  } catch (error) {
    // Silent catch - no logging
  }
  
  // Initialize version display
  try {
    initVersionDisplay();
  } catch (error) {
    // Silent catch - no logging
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

  // Add copy functionality to code blocks
  initCodeCopyButtons();
  
  // Re-initialize copy buttons when tab changes
  observeTabChanges();
});

// Initialize copy buttons for code blocks
function initCodeCopyButtons() {
  // Find all code elements in Usage tabs
  const codeElements = document.querySelectorAll('#usage code');
  
  codeElements.forEach(codeElement => {
    // Skip if already has a copy button
    if (codeElement.parentElement.querySelector('.pm7-code-copy-button')) {
      return;
    }
    
    // Create wrapper div if code is directly in pre
    const preElement = codeElement.closest('pre');
    if (preElement && preElement.firstChild === codeElement) {
      const wrapper = document.createElement('div');
      wrapper.className = 'pm7-code-wrapper';
      preElement.insertBefore(wrapper, codeElement);
      wrapper.appendChild(codeElement);
    }
    
    // Create copy button
    const copyButton = document.createElement('button');
    copyButton.className = 'pm7-code-copy-button';
    copyButton.innerHTML = `
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
      </svg>
    `;
    copyButton.title = 'Copy to clipboard';
    
    // Add click handler
    copyButton.addEventListener('click', async () => {
      const textToCopy = codeElement.textContent.trim();
      
      try {
        await navigator.clipboard.writeText(textToCopy);
        
        // Show success state
        copyButton.innerHTML = `
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        `;
        copyButton.classList.add('pm7-code-copy-success');
        
        // Reset after 2 seconds
        setTimeout(() => {
          copyButton.innerHTML = `
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
            </svg>
          `;
          copyButton.classList.remove('pm7-code-copy-success');
        }, 2000);
      } catch (err) {
        console.error('Failed to copy:', err);
      }
    });
    
    // Insert button
    if (codeElement.parentElement.classList.contains('pm7-code-wrapper')) {
      codeElement.parentElement.appendChild(copyButton);
    } else {
      codeElement.parentElement.style.position = 'relative';
      codeElement.parentElement.appendChild(copyButton);
    }
  });
}

// Observe tab changes and re-initialize copy buttons
function observeTabChanges() {
  // Watch for tab changes
  const tabContainer = document.querySelector('.pm7-tab-selector');
  if (!tabContainer) return;
  
  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
        // Check if the usage tab is now active
        const usageTab = document.querySelector('[data-tab-id="usage"]');
        if (usageTab && usageTab.classList.contains('pm7-tab-selector-trigger--active')) {
          // Small delay to ensure content is rendered
          setTimeout(() => {
            initCodeCopyButtons();
          }, 100);
        }
      }
    });
  });
  
  // Observe all tab triggers
  const tabTriggers = tabContainer.querySelectorAll('.pm7-tab-selector-trigger');
  tabTriggers.forEach(trigger => {
    observer.observe(trigger, { attributes: true });
  });
}