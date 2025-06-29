/**
 * Client-side router for PM7 UI Documentation
 * Handles navigation between components without full page reloads
 */

// Import PM7 components to ensure they're available
import { PM7TabSelector } from '/packages/core/src/scripts/tab-selector.js';
import { PM7Accordion } from '/packages/core/src/scripts/accordion.js';
import { openDialog, closeDialog } from '/packages/core/src/scripts/dialog.js';
import { PM7Menu } from '/packages/core/src/scripts/menu.js';
import { showToast, closeToast, closeAllToasts } from '/packages/core/src/scripts/toast.js';
import { PM7Tooltip, initTooltips } from '/packages/core/src/scripts/tooltip.js';

window.PM7TabSelector = PM7TabSelector;
window.PM7Accordion = PM7Accordion;
window.openDialog = openDialog;
window.closeDialog = closeDialog;
window.PM7Menu = PM7Menu;
window.showToast = showToast;
window.closeToast = closeToast;
window.closeAllToasts = closeAllToasts;
window.PM7Tooltip = PM7Tooltip;
window.initTooltips = initTooltips;

class PM7Router {
  constructor() {
    this.currentComponent = null;
    this.isNavigating = false;
    this.init();
  }

  init() {
    // Get current component or page from URL
    const pathname = window.location.pathname;
    const pathParts = pathname.split('/');
    
    if (pathname === '/faq.html') {
      this.currentComponent = 'faq';
    } else if (pathParts[1] === 'components' && pathParts[2]) {
      this.currentComponent = pathParts[2];
    }

    // Listen for popstate events (browser back/forward)
    window.addEventListener('popstate', (event) => {
      if (event.state && event.state.component) {
        this.navigateToComponent(event.state.component, event.state.tab, false);
      }
    });
  }

  /**
   * Navigate to a component page or FAQ
   * @param {string} component - Component name (e.g., 'button', 'card') or 'faq'
   * @param {string} tab - Tab name (e.g., 'overview', 'demo', 'usage', 'documentation')
   * @param {boolean} pushState - Whether to push to history (default: true)
   */
  async navigateToComponent(component, tab = null, pushState = true) {
    // Prevent concurrent navigations
    if (this.isNavigating) return;
    
    // Skip if already on the same component and no specific tab requested
    if (component === this.currentComponent && !tab) return;

    this.isNavigating = true;

    try {
      // Determine the URL based on whether it's a component or FAQ
      let url;
      let targetTab = null;
      if (component === 'faq') {
        url = '/faq.html';
      } else {
        // Determine the tab to use
        targetTab = tab || localStorage.getItem('pm7-docs-last-tab') || 'documentation';
        url = `/components/${component}.html?tab=${targetTab}`;
      }
      
      console.log('[Router] Navigating to:', component, 'tab:', targetTab, 'url:', url);

      // Fetch the new page content
      const response = await fetch(url);
      if (!response.ok) throw new Error('Failed to fetch page');
      
      const html = await response.text();
      
      // Parse the HTML
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, 'text/html');
      
      // Extract the entire pm7-docs-content for full replacement
      const newMainContent = doc.querySelector('.pm7-docs-content');
      if (!newMainContent) throw new Error('Content not found');

      // Extract and handle scripts from the entire content area
      const scripts = Array.from(newMainContent.querySelectorAll('script'));
      
      // Also extract any link tags for component-specific styles
      const newStyles = Array.from(doc.querySelectorAll('link[rel="stylesheet"]'));
      
      // Update the DOM
      const currentMainContent = document.querySelector('.pm7-docs-content');
      if (currentMainContent) {
        // Add loading class to body for global loading states
        document.body.classList.add('pm7-navigating');
        
        // Directly replace content without fade animation to prevent flicker
        currentMainContent.innerHTML = newMainContent.innerHTML;
        
        // Update title
        document.title = doc.title;
        
        // Re-execute scripts - need to wait for each to load
        const executeScripts = async () => {
            for (const script of scripts) {
              if (script.src) {
                // External script - check if it's component-specific
                if (script.src.includes('tab-router.js') || script.type === 'module') {
                  await new Promise((resolve) => {
                    const newScript = document.createElement('script');
                    newScript.src = script.src;
                    newScript.type = script.type || 'text/javascript';
                    newScript.onload = resolve;
                    newScript.onerror = resolve;
                    document.body.appendChild(newScript);
                  });
                }
              } else if (script.textContent.trim()) {
                // Inline script - execute it
                try {
                  // Create a new script element for inline scripts
                  const newScript = document.createElement('script');
                  newScript.textContent = script.textContent;
                  newScript.type = script.type || 'text/javascript';
                  document.body.appendChild(newScript);
                  // Remove immediately after execution
                  document.body.removeChild(newScript);
                } catch (e) {
                  console.error('[Router] Script execution error:', e);
                }
              }
            }
        };
        
        // Execute scripts after DOM update
        await executeScripts();
        
        // Initialize PM7 components in the new content
        // This is needed because auto-init only runs on DOMContentLoaded
        
        // Initialize tab selectors
        const tabSelectors = currentMainContent.querySelectorAll('[data-pm7-tab-selector]:not([data-pm7-tab-selector-initialized])');
        tabSelectors.forEach(selector => {
          if (window.PM7TabSelector) {
            new window.PM7TabSelector(selector);
            selector.setAttribute('data-pm7-tab-selector-initialized', 'true');
          }
        });
        
        // Initialize accordions
        const accordions = currentMainContent.querySelectorAll('[data-pm7-accordion]');
        accordions.forEach(accordion => {
          if (window.PM7Accordion && !accordion.PM7Accordion) {
            const allowMultiple = accordion.getAttribute('data-allow-multiple') === 'true';
            const defaultOpen = accordion.getAttribute('data-default-open');
            const iconPosition = accordion.getAttribute('data-icon-position') || 'end';
            const textAlign = accordion.getAttribute('data-text-align') || 'left';
            
            accordion.PM7Accordion = new window.PM7Accordion(accordion, {
              allowMultiple,
              defaultOpen: defaultOpen === 'all' ? 'all' : parseInt(defaultOpen),
              iconPosition,
              textAlign
            });
          }
        });
        
        // Initialize menus
        const menus = currentMainContent.querySelectorAll('[data-pm7-menu]:not([data-pm7-menu-initialized])');
        menus.forEach(menu => {
          if (window.PM7Menu) {
            new window.PM7Menu(menu);
            menu.setAttribute('data-pm7-menu-initialized', 'true');
          }
        });
        
        // Initialize tooltips
        if (window.initTooltips) {
          window.initTooltips();
        }
        
        // Initialize tab router for the new component (but not for FAQ)
        if (window.initTabRouter && component !== 'faq') {
          // Call initTabRouter directly since DOMContentLoaded won't fire again
          window.initTabRouter(component);
        }

        // Update current component
        this.currentComponent = component;

        // Update URL if needed
        if (pushState) {
          let newPath;
          if (component === 'faq') {
            newPath = '/faq.html';
            history.pushState(
              { component }, 
              '', 
              newPath
            );
          } else {
            newPath = `/components/${component}/${targetTab}`;
            history.pushState(
              { component, tab: targetTab }, 
              '', 
              newPath
            );
          }
        }

        // Update sidebar active state
        this.updateSidebarActiveState(component);

        // Remove loading class
        document.body.classList.remove('pm7-navigating');
      }

    } catch (error) {
      console.error('[Router] Navigation error:', error);
      // Remove loading class on error
      document.body.classList.remove('pm7-navigating');
      // Fallback to traditional navigation
      window.location.href = `/components/${component}.html`;
    } finally {
      this.isNavigating = false;
    }
  }

  /**
   * Update sidebar active state
   */
  updateSidebarActiveState(activeComponent) {
    const sidebarLinks = document.querySelectorAll('.pm7-docs-sidebar .pm7-button');
    
    sidebarLinks.forEach(link => {
      const href = link.getAttribute('href');
      
      if (href === '/faq.html') {
        // Handle FAQ link
        if (activeComponent === 'faq') {
          // Set active state
          link.style.backgroundColor = 'var(--pm7-primary)';
          link.style.color = 'var(--pm7-primary-foreground)';
        } else {
          // Remove active state
          link.style.backgroundColor = '';
          link.style.color = '';
        }
      } else if (href && href.includes('/components/')) {
        // Handle component links
        const linkComponent = href.split('/')[2];
        
        if (linkComponent === activeComponent) {
          // Set active state
          link.style.backgroundColor = 'var(--pm7-primary)';
          link.style.color = 'var(--pm7-primary-foreground)';
        } else {
          // Remove active state
          link.style.backgroundColor = '';
          link.style.color = '';
        }
      }
    });
  }

  /**
   * Intercept link click
   */
  interceptLinkClick(event, component, tab = null) {
    event.preventDefault();
    event.stopPropagation();
    this.navigateToComponent(component, tab);
  }
}

// Create global instance
window.PM7Router = new PM7Router();

// Export for module usage
export default PM7Router;