/**
 * Tab Router for PM7 Documentation Pages
 * Handles URL routing and persistence for tab navigation
 */

export function initTabRouter(componentName) {
  // Find the main navigation tab selector
  // Look for direct child of pm7-docs-content that is a tab selector
  const tabSelector = document.querySelector('.pm7-docs-content > .pm7-tab-selector[data-pm7-tab-selector]');
  
  if (!tabSelector) return;
  
  // Mark as pending to prevent auto-init if it hasn't run yet
  if (!tabSelector.hasAttribute('data-pm7-tab-selector-initialized')) {
    tabSelector.setAttribute('data-pm7-tab-selector-initialized', 'pending');
  }

  // Import PM7TabSelector dynamically
  import('/packages/core/src/scripts/tab-selector.js').then(({ PM7TabSelector }) => {
    
    // Tab names mapping - get all panels that belong to this tab selector
    const allPanels = tabSelector.querySelectorAll('.pm7-tab-content');
    const panels = Array.from(allPanels).filter(panel => {
      // Check if this panel belongs to our tab selector by checking if there's no other tab selector in between
      let parent = panel.parentElement;
      while (parent && parent !== tabSelector) {
        if (parent.hasAttribute('data-pm7-tab-selector')) {
          return false; // This panel belongs to a nested tab selector
        }
        parent = parent.parentElement;
      }
      return parent === tabSelector;
    });
    
    const tabNames = {};
    const tabIndices = {};
    
    // Build mappings from actual DOM elements
    panels.forEach((panel, index) => {
      const panelId = panel.id;
      const tabName = panelId.replace('-panel', '');
      tabNames[panelId] = tabName;
      tabIndices[tabName] = index;
    });
    
    console.log('[Tab Router] Found panels:', panels.length);
    console.log('[Tab Router] Tab names mapping:', tabNames);

    // Check if already initialized
    let tabSelectorInstance;
    if (tabSelector.PM7TabSelector) {
      // Already initialized, use existing instance
      tabSelectorInstance = tabSelector.PM7TabSelector;
    } else {
      // Not initialized yet, create new instance
      tabSelectorInstance = new PM7TabSelector(tabSelector);
      // Store instance on element for future reference
      tabSelector.PM7TabSelector = tabSelectorInstance;
    }
    
    // Mark as initialized
    tabSelector.setAttribute('data-pm7-tab-selector-initialized', 'true');
    
    // Function to update URL
    const updateURL = (tabName) => {
      const newURL = `/components/${componentName}/${tabName}`;
      history.pushState({ tab: tabName }, '', newURL);
    };
    
    // Function to get tab from URL
    const getTabFromURL = () => {
      // Check query parameter first (from server rewrite)
      const urlParams = new URLSearchParams(window.location.search);
      const tabParam = urlParams.get('tab');
      if (tabParam) {
        return tabParam;
      }
      
      // Check if we're using the clean URL format (for client-side navigation)
      const pathParts = window.location.pathname.split('/');
      if (pathParts.length >= 4 && pathParts[1] === 'components') {
        return pathParts[3]; // Get tab name from path
      }
      
      return Object.values(tabNames)[0]; // Default to first tab
    };
    
    const updateSidebarLinks = (activeTab) => {
      const sidebarLinks = document.querySelectorAll('.pm7-docs-sidebar a');
      sidebarLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href && href.startsWith('/components/')) {
          const parts = href.split('/').filter(p => p);
          if (parts.length >= 2) {
            link.href = `/components/${parts[1]}/${activeTab}`;
          }
        }
      });
    };

    // Listen for tab changes
    tabSelector.addEventListener('pm7-tab-change', (event) => {
      const panelId = event.detail.panel?.id;
      console.log('[Tab Router] Tab change event fired. Panel ID:', panelId);
      if (panelId && tabNames[panelId]) {
        const newTab = tabNames[panelId];
        console.log('[Tab Router] Saving tab to localStorage:', newTab);
        updateURL(newTab);
        localStorage.setItem('pm7-docs-last-tab', newTab);
        updateSidebarLinks(newTab);
      }
    });

    // Set initial tab based on URL or last visited
    const urlTab = getTabFromURL();
    const lastTab = localStorage.getItem('pm7-docs-last-tab');
    const defaultTab = Object.values(tabNames)[0];
    
    // If URL has explicit tab (not default), use it. Otherwise check localStorage.
    let initialTab;
    if (window.location.search.includes('tab=')) {
      // Query parameter has explicit tab, use it
      initialTab = urlTab;
    } else if (window.location.pathname.includes('/components/') && window.location.pathname.split('/').length >= 4) {
      // URL has explicit tab selection in path, use it
      initialTab = urlTab;
    } else {
      // No explicit tab in URL, use localStorage or default
      initialTab = lastTab || defaultTab;
    }
    
    if (tabIndices[initialTab] !== undefined) {
      // Select tab immediately to prevent flicker
      tabSelectorInstance.selectTabByIndex(tabIndices[initialTab]);
      // Also update sidebar links on initial load
      updateSidebarLinks(initialTab);
    }
    
    // Handle browser back/forward
    window.addEventListener('popstate', (event) => {
      const tab = event.state?.tab || getTabFromURL();
      if (tabIndices[tab] !== undefined) {
        tabSelectorInstance.selectTabByIndex(tabIndices[tab]);
      }
    });
  });
}

// Make initTabRouter globally available for the router
window.initTabRouter = initTabRouter;