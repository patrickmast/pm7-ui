// Shared components for PM7 UI documentation site

export function loadHeader() {
  const headerHTML = `
  <nav class="pm7-docs-nav">
    <div class="pm7-docs-nav-inner">
      <!-- Left side: Menu button and Logo -->
      <div style="display: flex; align-items: center; gap: var(--pm7-spacing-4);">
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

        <!-- Logo -->
        <a href="/" class="pm7-docs-logo">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 32 32" style="display: inline-block; vertical-align: middle; margin-right: 2px; fill: var(--pm7-primary);"><path d="M27 15a3 3 0 0 0-3-3h-5V3a3 3 0 1 0-6 0v9H8a3 3 0 0 0-3 3v6h2L6 32h20l-1-11h2zm-6 15v-6h-1v6h-6v-6h-1v6h-1v-8h-1v8H8.19l.909-10h13.802l.909 10zm4-11H7v-4c0-.551.449-1 1-1h7V3c0-.551.449-1 1-1s1 .449 1 1v11h7c.551 0 1 .449 1 1z"/></svg>
          pm7-ui
        </a>
      </div>

      <!-- Right side: Navigation menu -->
      <ul class="pm7-docs-nav-menu">
        <li><a href="/" class="${window.location.pathname === '/' ? 'active' : ''}">Home</a></li>
        <li><a href="/getting-started.html" class="${window.location.pathname === '/getting-started.html' ? 'active' : ''}">Getting Started</a></li>
        <li><a href="/components.html" class="${window.location.pathname.startsWith('/components') ? 'active' : ''}">Components</a></li>
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
        <span>By</span>
        <a href="https://pm7.dev" target="_blank" rel="noopener noreferrer" class="pm7-footer-logo-link">
          <img src="/dancing-patrick-logo.svg" alt="pm7.dev" class="pm7-footer-logo">
          <span>pm7.dev</span>
        </a>
      </div>
      <div class="pm7-footer-center">
        <span>© 2025 pm7-ui</span>
        <span class="pm7-footer-version">v0.2.0</span>
      </div>
      <div class="pm7-footer-right">
        <a href="https://github.com/patrickmast/pm7-ui" target="_blank" rel="noopener noreferrer" class="pm7-footer-github">
          <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"/>
          </svg>
          <span>GitHub</span>
        </a>
      </div>
    </div>
  </footer>`;

  const footerPlaceholder = document.getElementById('footer-placeholder');
  if (footerPlaceholder) {
    footerPlaceholder.innerHTML = footerHTML;
  }
}

// Version info dialog - using PM7 dialog component
export function createVersionDialog() {
  // Skip if already exists
  if (document.querySelector('[pm7-dialog="version-dialog"]')) return;

  const dialogHTML = `
  <div class="pm7-dialog" 
       pm7-dialog="version-dialog"
       pm7-dialog-size="sm">
    <div pm7-header
         pm7-dialog-title="Version Info"
         pm7-dialog-subtitle="Version 0.2.0"
         pm7-dialog-icon="info"
         pm7-header-separator>
    </div>
    <div pm7-body>
      <p><strong>Package:</strong> pm7-ui</p>
      <p><strong>License:</strong> <a href="https://opensource.org/licenses/ISC" target="_blank" rel="noopener noreferrer" style="color: var(--pm7-primary);">https://opensource.org/licenses/ISC</a></p>
    </div>
    <div pm7-footer>
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
  console.log('[Components] Starting loadSharedComponents...');

  try {
    console.log('[Components] Loading header...');
    loadHeader();
    console.log('[Components] Header loaded');

    console.log('[Components] Loading footer...');
    loadFooter();
    console.log('[Components] Footer loaded');

    console.log('[Components] Creating version dialog...');
    createVersionDialog();
    console.log('[Components] Version dialog created');
  } catch (error) {
    console.error('[Components] Error during initial load:', error);
  }

  // Initialize PM7 menu after header is loaded
  setTimeout(async () => {
    console.log('[Components] Starting async initialization...');

    try {
      // Step 1: Initialize menu
      console.log('[Components] Step 1: Initializing menu...');
      const menuElement = document.querySelector('[data-pm7-menu]');
      if (menuElement && window.PM7Menu) {
        // Check if already initialized by auto-init
        if (!menuElement.hasAttribute('data-pm7-menu-initialized')) {
          new window.PM7Menu(menuElement);
          menuElement.setAttribute('data-pm7-menu-initialized', 'true');
          console.log('[Components] Menu initialized manually');
        } else {
          console.log('[Components] Menu already initialized by auto-init');
        }
      }

      // Step 2: Skip dialog.js loading for now - load on demand
      console.log('[Components] Step 2: Setting up lazy dialog loading...');

      // Create lazy loading wrapper
      window.loadDialogIfNeeded = async () => {
        if (!window.openDialog || !window.closeDialog) {
          console.log('[Components] Loading dialog.js on demand...');
          const dialogModule = await import('/packages/core/src/scripts/dialog.js');
          window.openDialog = dialogModule.openDialog;
          window.closeDialog = dialogModule.closeDialog;
          console.log('[Components] Dialog functions loaded');
        }
      };

      // Step 3: Add version info click handler
      console.log('[Components] Step 3: Adding version info click handler...');
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
        console.log('[Components] Version info click handler added');
      }

      console.log('[Components] All initialization complete!');

    } catch (error) {
      console.error('[Components] Initialization error:', error);
    }
  }, 10); // Small delay to ensure DOM is ready

  console.log('[Components] loadSharedComponents finished');
}