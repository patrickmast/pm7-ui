/**
 * Tab Router for PM7 Documentation Pages
 * Handles URL routing and persistence for tab navigation
 */

export function initTabRouter(componentName) {
  const tabSelector = document.querySelector('[data-pm7-tab-selector]');
  if (!tabSelector) return;

  // Import PM7TabSelector dynamically
  import('/packages/core/src/scripts/tab-selector.js').then(({ PM7TabSelector }) => {
    // Tab names mapping - generic for all component pages
    const panels = tabSelector.querySelectorAll('.pm7-tab-content');
    
    const tabNames = {};
    const tabIndices = {};
    
    // Build mappings from actual DOM elements
    panels.forEach((panel, index) => {
      const panelId = panel.id;
      const tabName = panelId.replace('-panel', '');
      tabNames[panelId] = tabName;
      tabIndices[tabName] = index;
    });

    const tabSelectorInstance = new PM7TabSelector(tabSelector);
    
    // Function to update URL
    const updateURL = (tabName) => {
      const newURL = `/components/${componentName}/${tabName}`;
      history.pushState({ tab: tabName }, '', newURL);
    };
    
    // Function to get tab from URL
    const getTabFromURL = () => {
      // Check if we're using the clean URL format
      const pathParts = window.location.pathname.split('/');
      if (pathParts.length >= 4 && pathParts[1] === 'components') {
        return pathParts[3]; // Get tab name from path
      }
      
      // Check query parameter from server rewrite
      const urlParams = new URLSearchParams(window.location.search);
      const tabParam = urlParams.get('tab');
      if (tabParam) {
        return tabParam;
      }
      
      return Object.values(tabNames)[0]; // Default to first tab
    };
    
    // Listen for tab changes
    tabSelector.addEventListener('pm7-tab-change', (event) => {
      const panelId = event.detail.panel?.id;
      if (panelId && tabNames[panelId]) {
        updateURL(tabNames[panelId]);
        localStorage.setItem(`pm7-${componentName}-last-tab`, tabNames[panelId]);
      }
    });
    
    // Set initial tab based on URL or last visited
    const urlTab = getTabFromURL();
    const lastTab = localStorage.getItem(`pm7-${componentName}-last-tab`);
    const defaultTab = Object.values(tabNames)[0];
    const initialTab = urlTab !== defaultTab ? urlTab : (lastTab || defaultTab);
    
    if (tabIndices[initialTab] !== undefined) {
      setTimeout(() => {
        tabSelectorInstance.selectTabByIndex(tabIndices[initialTab]);
      }, 0);
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