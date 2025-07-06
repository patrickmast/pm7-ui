// Shared components for PM7 UI documentation site


export function loadHeader() {
  const headerHTML = `
  <nav class="pm7-docs-nav">
    <div class="pm7-docs-nav-inner" style="display: grid; grid-template-columns: 1fr auto 1fr; align-items: center;">
      <!-- Left side: Menu button and Theme Switch -->
      <div style="display: flex; align-items: center; gap: var(--pm7-spacing-3);">
        <!-- PM7 Menu Component -->
        <div class="pm7-menu pm7-docs-header-menu" data-pm7-menu>
          <button class="pm7-menu-trigger pm7-docs-menu-trigger" aria-label="Toggle menu" aria-expanded="false">
            <svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect width="18" height="2.5" rx="1.25" fill="currentColor"/>
              <rect y="6.25" width="18" height="2.5" rx="1.25" fill="currentColor"/>
              <rect y="12.5" width="18" height="2.5" rx="1.25" fill="currentColor"/>
            </svg>
          </button>
          <div class="pm7-menu-content pm7-menu-content--start">
            <a href="/" class="pm7-menu-item">
              <span class="pm7-menu-item-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                  <polyline points="9 22 9 12 15 12 15 22"/>
                </svg>
              </span>
              Home
            </a>
            <a href="/getting-started.html" class="pm7-menu-item">
              <span class="pm7-menu-item-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <polygon points="5 3 19 12 5 21 5 3"/>
                </svg>
              </span>
              Getting Started
            </a>
            <a href="/components.html" class="pm7-menu-item">
              <span class="pm7-menu-item-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <rect x="3" y="3" width="7" height="7"/>
                  <rect x="14" y="3" width="7" height="7"/>
                  <rect x="14" y="14" width="7" height="7"/>
                  <rect x="3" y="14" width="7" height="7"/>
                </svg>
              </span>
              Components
            </a>
            <a href="/faq.html" class="pm7-menu-item">
              <span class="pm7-menu-item-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M12 16v.01M12 13c0-1 .5-1.5 1-2 1.5-1.5 2-2 2-3.5C15 5.5 13.5 4 11.5 4S8 5.5 8 7.5"/>
                </svg>
              </span>
              FAQ
            </a>
            <a href="/ai-guide.html" class="pm7-menu-item">
              <span class="pm7-menu-item-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <rect x="2" y="6" width="20" height="12" rx="2"/>
                  <path d="M9 10h6M8 14h1m2 0h2m2 0h1"/>
                </svg>
              </span>
              AI Guide
            </a>
            <a href="/upgrade.html" class="pm7-menu-item">
              <span class="pm7-menu-item-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M12 20V10M6 14l6-6 6 6"/>
                </svg>
              </span>
              Upgrade to v2
            </a>
            <a href="/readme-links.html" class="pm7-menu-item">
              <span class="pm7-menu-item-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                  <polyline points="14 2 14 8 20 8"/>
                  <line x1="16" y1="13" x2="8" y2="13"/>
                  <line x1="16" y1="17" x2="8" y2="17"/>
                  <polyline points="10 9 9 9 8 9"/>
                </svg>
              </span>
              README Links
            </a>
            <div class="pm7-menu-separator"></div>
            <a href="#" class="pm7-menu-item" id="version-info-trigger">
              <span class="pm7-menu-item-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <circle cx="12" cy="12" r="9"/>
                  <path d="M12 8h.01M11 12h1v4h1"/>
                </svg>
              </span>
              Version Info
            </a>
            <div class="pm7-menu-separator"></div>
            <div class="pm7-menu-label">Theme</div>
            <button class="pm7-menu-item pm7-menu-item--radio" data-name="theme" data-value="light" onclick="window.setTheme('light')">
              Light
            </button>
            <button class="pm7-menu-item pm7-menu-item--radio" data-name="theme" data-value="dark" onclick="window.setTheme('dark')">
              Dark
            </button>
            <div class="pm7-menu-separator"></div>
            <a href="https://www.npmjs.com/package/@pm7/core" class="pm7-menu-item" target="_blank" rel="noopener noreferrer">
              <span class="pm7-menu-item-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M0 0v24h24v-24h-24zm11.5 18.5h-6v-13h13v13h-3.5v-9.5h-3.5v9.5z"/>
                </svg>
              </span>
              NPM Package
            </a>
            <a href="https://github.com/patrickmast/pm7-ui" class="pm7-menu-item" target="_blank" rel="noopener noreferrer">
              <span class="pm7-menu-item-icon">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
                </svg>
              </span>
              GitHub
            </a>
          </div>
        </div>
        
        <!-- Theme Switch -->
        <div data-pm7-theme-switch class="pm7-theme-switch--sm"></div>
      </div>

      <!-- Center: Logo -->
      <a href="/" class="pm7-docs-logo" style="text-align: center;">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32" style="display: inline-block; vertical-align: middle; margin-right: 2px; fill: var(--pm7-primary);"><path d="M27 15a3 3 0 0 0-3-3h-5V3a3 3 0 1 0-6 0v9H8a3 3 0 0 0-3 3v6h2L6 32h20l-1-11h2zm-6 15v-6h-1v6h-6v-6h-1v6h-1v-8h-1v8H8.19l.909-10h13.802l.909 10zm4-11H7v-4c0-.551.449-1 1-1h7V3c0-.551.449-1 1-1s1 .449 1 1v11h7c.551 0 1 .449 1 1z"/></svg>
        pm7-ui
      </a>

      <!-- Right side: Navigation menu -->
      <ul class="pm7-docs-nav-menu" style="justify-self: end;">
        <li><a href="/" class="${window.location.pathname === '/' ? 'active' : ''}">Home</a></li>
        <li><a href="/getting-started.html" class="${window.location.pathname === '/getting-started.html' ? 'active' : ''}">Getting Started</a></li>
        <li><a href="/components.html" class="${window.location.pathname.startsWith('/components') ? 'active' : ''}">Components</a></li>
        <li><a href="https://www.npmjs.com/package/@pm7/core" target="_blank" rel="noopener noreferrer">NPM</a></li>
        <li><a href="https://github.com/patrickmast/pm7-ui" target="_blank" rel="noopener noreferrer">GitHub</a></li>
      </ul>
    </div>
  </nav>`;

  const headerPlaceholder = document.getElementById('header-placeholder');
  if (headerPlaceholder) {
    headerPlaceholder.innerHTML = headerHTML;
  }
}

export function loadFooter() {
  const footerHTML = `
  <footer class="pm7-footer">
    <div class="pm7-footer-content">
      <div class="pm7-footer-left">
        <span>© 2025 pm7-ui</span>
        <span class="pm7-footer-version">v<span data-pm7-version>2.0.0</span></span>
      </div>
      <div class="pm7-footer-center">
        <a href="https://pm7.dev" target="_blank" rel="noopener noreferrer" class="pm7-footer-logo-link">
          <span style="font-weight: normal;">By</span>
          <img src="/dancing-patrick-logo.svg" alt="pm7.dev" class="pm7-footer-logo">
          <span>pm7.dev</span>
        </a>
        <span style="margin: 0 var(--pm7-spacing-3); color: var(--pm7-text-secondary);">-</span>
        <a href="https://www.npmjs.com/package/@pm7/core" target="_blank" rel="noopener noreferrer" class="pm7-footer-github">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M0 0v24h24v-24h-24zm11.5 18.5h-6v-13h13v13h-3.5v-9.5h-3.5v9.5z"/>
          </svg>
          <span>NPM</span>
        </a>
        <span style="margin: 0 var(--pm7-spacing-3); color: var(--pm7-text-secondary);">-</span>
        <a href="https://github.com/patrickmast/pm7-ui" target="_blank" rel="noopener noreferrer" class="pm7-footer-github">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
          </svg>
          <span>GitHub</span>
        </a>
      </div>
      <div class="pm7-footer-right">
      </div>
    </div>
  </footer>`;

  const footerPlaceholder = document.getElementById('footer-placeholder');
  if (footerPlaceholder) {
    footerPlaceholder.innerHTML = footerHTML;
  }
}

export function loadSidebar() {
  // Get current page to determine active state
  const currentPath = window.location.pathname;
  
  // Extract component name from path (e.g., /components/button/documentation -> button)
  const pathParts = currentPath.split('/');
  let currentComponent = '';
  if (pathParts[1] === 'components' && pathParts[2]) {
    currentComponent = pathParts[2];
    // If it's a .html file, remove the extension
    if (currentComponent.endsWith('.html')) {
      currentComponent = currentComponent.replace('.html', '');
    }
  }
  
  // Component list with all components
  const components = [
    { name: 'Accordion', componentName: 'accordion' },
    { name: 'Button', componentName: 'button' },
    { name: 'Card', componentName: 'card' },
    { name: 'Dialog', componentName: 'dialog' },
    { name: 'Icons', componentName: 'icons' },
    { name: 'Input', componentName: 'input' },
    { name: 'Menu', componentName: 'menu' },
    { name: 'Tab Selector', componentName: 'tab-selector' },
    { name: 'Theme Switch', componentName: 'theme-switch' },
    { name: 'Toast', componentName: 'toast' },
    { name: 'Tooltip', componentName: 'tooltip' }
  ];
  
  // Build navigation links
  const navLinks = components.map(component => {
    const isActive = component.componentName === currentComponent;
    const activeStyle = isActive ? ' style="justify-content: flex-start; background-color: var(--pm7-primary); color: var(--pm7-primary-foreground);"' : ' style="justify-content: flex-start;"';
    const hrefWithTab = `/components/${component.componentName}/documentation`;
    // Add data attribute for client-side routing
    const dataAttr = ` data-pm7-route="${component.componentName}"`;
    return `<a href="${hrefWithTab}" class="pm7-button pm7-button--ghost pm7-button--full"${activeStyle}${dataAttr}>${component.name}</a>`;
  }).join('\n            ');
  
  // Check if FAQ page is active
  const isFaqActive = currentPath === '/faq.html';
  const faqActiveStyle = isFaqActive ? ' style="justify-content: flex-start; background-color: var(--pm7-primary); color: var(--pm7-primary-foreground);"' : ' style="justify-content: flex-start;"';
  
  const sidebarHTML = `
    <div class="pm7-card pm7-card--ghost" style="height: 100%; border-radius: 0; background-color: transparent;">
      <div class="pm7-card-content" style="position: sticky; top: 64px; padding: var(--pm7-spacing-4);">
        <h3 class="pm7-card-title" style="font-size: var(--pm7-text-sm); text-transform: uppercase; letter-spacing: 0.1em; color: var(--pm7-text-secondary); margin-bottom: var(--pm7-spacing-4);">Components</h3>
        <nav style="display: flex; flex-direction: column; gap: var(--pm7-spacing-1);">
          ${navLinks}
        </nav>
        <div style="margin: var(--pm7-spacing-4) 0; border-bottom: 1px solid var(--pm7-border);"></div>
        <nav style="display: flex; flex-direction: column; gap: var(--pm7-spacing-1);">
          <a href="/faq.html" class="pm7-button pm7-button--ghost pm7-button--full"${faqActiveStyle} data-pm7-route="faq">FAQ</a>
        </nav>
      </div>
    </div>`;
  
  const sidebarPlaceholder = document.getElementById('sidebar-placeholder');
  if (sidebarPlaceholder) {
    sidebarPlaceholder.innerHTML = sidebarHTML;
  }
}

// Version info dialog - using PM7 dialog component
export function createVersionDialog() {
  // Skip if already exists
  if (document.querySelector('[data-pm7-dialog="version-dialog"]')) return;

  // Create dialog with placeholder for version
  const dialogHTML = `
  <div class="pm7-dialog" 
       data-pm7-dialog="version-dialog"
       data-pm7-dialog-size="sm">
    <div data-pm7-header
         data-pm7-dialog-title="Version Info"
         data-pm7-dialog-subtitle="pm7-ui Component Library"
         data-pm7-dialog-icon="info"
         data-pm7-header-separator>
    </div>
    <div data-pm7-body>
      <p><strong>Version:</strong> <span data-pm7-version>2.0.0</span></p>
      <p><strong>Package:</strong> pm7-ui</p>
      <p><strong>License:</strong> <a href="https://opensource.org/licenses/ISC" target="_blank" rel="noopener noreferrer" style="color: var(--pm7-primary);">https://opensource.org/licenses/ISC</a></p>
    </div>
    <div data-pm7-footer>
      <button class="pm7-button pm7-button--primary" onclick="closeDialog('version-dialog')">
        Close
      </button>
    </div>
  </div>`;

  // Add dialog to body
  document.body.insertAdjacentHTML('beforeend', dialogHTML);

  // Click handlers worden nu automatisch toegevoegd door dialog.js openDialog functie
}

// Helper functions for version dialog - gebruik PM7 dialog functies
window.showVersionDialog = async function() {
  // Ensure dialog functions are loaded
  await window.loadDialogIfNeeded();

  // Use PM7 openDialog function
  if (window.openDialog) {
    window.openDialog('version-dialog');
  }
}

window.closeVersionDialog = function() {
  // Use PM7 closeDialog function
  if (window.closeDialog) {
    window.closeDialog('version-dialog');
  }
}

// Load components when DOM is ready
export function loadSharedComponents() {
  try {
    loadHeader();
    loadFooter();
    loadSidebar();
    createVersionDialog();
    loadFixedThemeSwitch();
  } catch (error) {
    // Silent catch - no logging
  }

  // Initialize PM7 components after header is loaded
  setTimeout(async () => {
    try {
      // Step 1: Initialize menu
      const menuElement = document.querySelector('[data-pm7-menu]');
      if (menuElement && window.PM7Menu) {
        // Check if already initialized by auto-init
        if (!menuElement.hasAttribute('data-pm7-menu-initialized')) {
          new window.PM7Menu(menuElement);
          menuElement.setAttribute('data-pm7-menu-initialized', 'true');
        }
      }

      // Initialize theme switch
      const themeSwitchElement = document.querySelector('[data-pm7-theme-switch]');
      if (themeSwitchElement && window.PM7ThemeSwitch) {
        // Check if already initialized
        if (!themeSwitchElement.hasAttribute('data-pm7-theme-switch-initialized')) {
          new window.PM7ThemeSwitch(themeSwitchElement);
          themeSwitchElement.setAttribute('data-pm7-theme-switch-initialized', 'true');
        }
      }
      
      // Initialize fixed theme switch after a delay to ensure PM7ThemeSwitch is available
      setTimeout(() => {
        const fixedSwitch = document.querySelector('.pm7-theme-switch--fixed-icon');
        if (fixedSwitch && window.PM7ThemeSwitch) {
          // Check if already initialized
          if (!fixedSwitch.hasAttribute('data-pm7-theme-switch-initialized')) {
            new window.PM7ThemeSwitch(fixedSwitch);
            fixedSwitch.setAttribute('data-pm7-theme-switch-initialized', 'true');
          }
        }
      }, 100);
      

      // Step 2: Skip dialog.js loading for now - load on demand
      // Create lazy loading wrapper
      window.loadDialogIfNeeded = async () => {
        if (!window.openDialog || !window.closeDialog) {
          const dialogModule = await import('/packages/core/src/scripts/dialog.js');
          window.openDialog = dialogModule.openDialog;
          window.closeDialog = dialogModule.closeDialog;
        }
      };

      // Step 3: Add version info click handler
      const versionTrigger = document.getElementById('version-info-trigger');
      if (versionTrigger) {
        versionTrigger.addEventListener('click', async (e) => {
          e.preventDefault();
          e.stopPropagation();

          // Close the menu first
          const menuElement = document.querySelector('[data-pm7-menu]');
          if (menuElement && menuElement.PM7Menu) {
            menuElement.PM7Menu.close();
          }

          // Load dialog if needed
          await window.loadDialogIfNeeded();

          // Show the dialog
          window.showVersionDialog();
        });
      }
    } catch (error) {
      // Silent catch - no logging
    }
  }, 10); // Small delay to ensure DOM is ready

  // Initialize client-side routing for component navigation
  setTimeout(() => {
    initializeComponentRouting();
  }, 50); // Ensure sidebar is loaded first

}

// Function to load fixed theme switch
export function loadFixedThemeSwitch() {
  // Check if fixed theme switch already exists
  if (document.querySelector('.pm7-theme-switch--fixed-icon')) {
    return;
  }

  // Create fixed theme switch element (small size)
  const fixedThemeSwitch = document.createElement('div');
  fixedThemeSwitch.className = 'pm7-theme-switch--fixed-icon pm7-theme-switch--sm';
  fixedThemeSwitch.setAttribute('data-pm7-theme-switch', '');
  
  // Add to body
  document.body.appendChild(fixedThemeSwitch);
  
  // Initialize if PM7ThemeSwitch is available
  if (window.PM7ThemeSwitch) {
    new window.PM7ThemeSwitch(fixedThemeSwitch);
  }
}

// Theme switching function
window.setTheme = function(theme) {
  if (theme === 'dark') {
    document.documentElement.classList.add('dark');
    localStorage.setItem('pm7-theme', 'dark');
  } else {
    document.documentElement.classList.remove('dark');
    localStorage.setItem('pm7-theme', 'light');
  }
  
  // Update radio buttons
  const isDark = document.documentElement.classList.contains('dark');
  document.querySelectorAll('.pm7-menu-item--radio[data-name="theme"]').forEach(radio => {
    if (radio.getAttribute('data-value') === 'light') {
      radio.setAttribute('data-checked', !isDark);
    } else if (radio.getAttribute('data-value') === 'dark') {
      radio.setAttribute('data-checked', isDark);
    }
  });
  
  // Update all theme switches on the page
  document.querySelectorAll('[data-pm7-theme-switch]').forEach(el => {
    if (el.PM7ThemeSwitch) {
      el.PM7ThemeSwitch.updateTheme();
    }
  });
};

// Update radio buttons on load
setTimeout(() => {
  const isDark = document.documentElement.classList.contains('dark');
  document.querySelectorAll('.pm7-menu-item--radio[data-name="theme"]').forEach(radio => {
    if (radio.getAttribute('data-value') === 'light') {
      radio.setAttribute('data-checked', !isDark);
    } else if (radio.getAttribute('data-value') === 'dark') {
      radio.setAttribute('data-checked', isDark);
    }
  });
}, 100);

// Make functions globally available for router
window.loadSidebar = loadSidebar;
window.initializeComponentRouting = initializeComponentRouting;

// Initialize client-side routing for smooth navigation
export function initializeComponentRouting() {
  // Import router module
  import('/scripts/router.js').then(() => {
    // Add click handlers to all sidebar component links
    const componentLinks = document.querySelectorAll('[data-pm7-route]');
    
    componentLinks.forEach(link => {
      const componentName = link.getAttribute('data-pm7-route');
      
      link.addEventListener('click', (e) => {
        // Only intercept if router is available
        if (window.PM7Router) {
          e.preventDefault();
          e.stopPropagation();
          
          // Get preferred tab from localStorage or default
          const preferredTab = localStorage.getItem('pm7-docs-last-tab') || 'documentation';
          
          // Navigate using client-side router
          window.PM7Router.navigateToComponent(componentName, preferredTab);
        }
      });
    });
  }).catch(error => {
    // Silent catch - no logging
  });
}