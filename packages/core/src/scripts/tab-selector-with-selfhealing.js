/**
 * PM7TabSelector - Tab selector component with self-healing
 * Handles tab navigation with automatic recovery from framework re-renders
 */
export class PM7TabSelector {
  static instances = new WeakMap();
  
  constructor(element) {
    // Self-healing: Check if element was re-rendered by framework
    const wasInitialized = element.hasAttribute('data-pm7-tab-initialized');
    const hasInstance = PM7TabSelector.instances.has(element);
    
    // If initialized but no instance, element was re-rendered
    if (wasInitialized && !hasInstance) {
      console.log('[PM7TabSelector] Self-healing: Re-initializing tabs after framework re-render');
      element.removeAttribute('data-pm7-tab-initialized');
    }
    
    // Check if this element already has a tab selector instance
    if (PM7TabSelector.instances.has(element)) {
      return PM7TabSelector.instances.get(element);
    }
    
    this.element = element;
    
    // Preserve state if this is a re-render
    const preservedState = this.preserveState();
    
    // AI-Agent FIRST: Automatically add pm7-tab-selector class if missing
    if (!this.element.classList.contains('pm7-tab-selector')) {
      this.element.classList.add('pm7-tab-selector');
    }
    
    this.tabList = element.querySelector('.pm7-tab-list');
    // Only get direct child tabs and panels, not nested ones
    this.tabs = Array.from(element.querySelectorAll('.pm7-tab-trigger')).filter(tab => 
      tab.closest('[data-pm7-tab-selector]') === element
    );
    this.panels = Array.from(element.querySelectorAll('.pm7-tab-content')).filter(panel => 
      panel.closest('[data-pm7-tab-selector]') === element
    );
    this.activeTab = null;
    this.eventListeners = new Map();
    
    if (!this.tabList || this.tabs.length === 0) {
      console.warn('PM7TabSelector: Missing required elements');
      return;
    }
    
    // Store this instance
    PM7TabSelector.instances.set(element, this);
    
    // Store instance reference on element for self-healing
    element._pm7TabSelectorInstance = this;
    
    this.init();
    
    // Restore state if this was a re-render
    if (preservedState && preservedState.activeTabIndex !== -1) {
      this.restoreState(preservedState);
    }
    
    // Mark as initialized
    element.setAttribute('data-pm7-tab-initialized', 'true');
  }
  
  preserveState() {
    // Find currently active tab
    const activeTab = this.element.querySelector('.pm7-tab-trigger[data-state="active"], .pm7-tab-trigger--active');
    const tabs = Array.from(this.element.querySelectorAll('.pm7-tab-trigger')).filter(tab => 
      tab.closest('[data-pm7-tab-selector]') === this.element
    );
    
    const activeTabIndex = activeTab ? tabs.indexOf(activeTab) : -1;
    
    return {
      activeTabIndex,
      tabListId: this.element.querySelector('.pm7-tab-list')?.id
    };
  }
  
  restoreState(state) {
    if (state.activeTabIndex !== -1 && state.activeTabIndex < this.tabs.length) {
      // Use setTimeout to ensure DOM is ready
      setTimeout(() => {
        this.selectTab(this.tabs[state.activeTabIndex]);
      }, 0);
    }
  }
  
  cleanup() {
    // Remove all event listeners
    this.eventListeners.forEach(({ element, type, handler }) => {
      element.removeEventListener(type, handler);
    });
    this.eventListeners.clear();
  }
  
  destroy() {
    this.cleanup();
    PM7TabSelector.instances.delete(this.element);
    delete this.element._pm7TabSelectorInstance;
  }
  
  init() {
    // Remove any existing event listeners to prevent duplicates
    this.cleanup();
    
    // Set up ARIA attributes
    this.tabList.setAttribute('role', 'tablist');
    
    this.tabs.forEach((tab, index) => {
      const panel = this.panels[index];
      let panelId = tab.getAttribute('aria-controls');
      
      // If no aria-controls, use panel's existing id or generate new one
      if (!panelId) {
        panelId = panel?.id || `pm7-tab-panel-${Math.random().toString(36).substr(2, 9)}`;
        tab.setAttribute('aria-controls', panelId);
      }
      
      // Set up tab
      tab.setAttribute('role', 'tab');
      tab.setAttribute('tabindex', '-1');
      
      // Set up panel
      if (panel) {
        panel.setAttribute('role', 'tabpanel');
        if (!panel.id) {
          panel.setAttribute('id', panelId);
        }
        panel.setAttribute('aria-labelledby', tab.id || (tab.id = `pm7-tab-${Math.random().toString(36).substr(2, 9)}`));
        panel.setAttribute('tabindex', '0');
      }
      
      // Create bound handlers for cleanup
      const clickHandler = () => this.selectTab(tab);
      const keyHandler = (e) => this.handleKeyDown(e);
      
      // Add event listeners
      tab.addEventListener('click', clickHandler);
      tab.addEventListener('keydown', keyHandler);
      
      // Store listeners for cleanup
      this.eventListeners.set(`click-${index}`, { element: tab, type: 'click', handler: clickHandler });
      this.eventListeners.set(`keydown-${index}`, { element: tab, type: 'keydown', handler: keyHandler });
    });
    
    // Activate first tab or already active tab
    const initialActiveTab = this.tabs.find(tab =>
      tab.getAttribute('data-state') === 'active' ||
      tab.classList.contains('pm7-tab-trigger--active')
    ) || this.tabs[0];

    this.selectTab(initialActiveTab);
    // Ensure the initial active tab has tabindex 0
    if (initialActiveTab) {
      initialActiveTab.setAttribute('tabindex', '0');
    }
  }
  
  selectTab(tab) {
    if (!tab || tab.disabled || tab === this.activeTab) return;
    
    const tabIndex = this.tabs.indexOf(tab);
    const panel = this.panels[tabIndex];
    
    // Deactivate all tabs
    this.tabs.forEach((t, i) => {
      t.setAttribute('data-state', 'inactive');
      t.setAttribute('aria-selected', 'false');
      t.setAttribute('tabindex', '-1');
      t.classList.remove('pm7-tab-trigger--active');
      
      const p = this.panels[i];
      if (p) {
        p.setAttribute('data-state', 'inactive');
        p.classList.remove('pm7-tab-content--active');
      }
    });
    
    // Activate selected tab
    tab.setAttribute('data-state', 'active');
    tab.setAttribute('aria-selected', 'true');
    tab.setAttribute('tabindex', '0');
    tab.classList.add('pm7-tab-trigger--active');
    
    if (panel) {
      panel.setAttribute('data-state', 'active');
      panel.classList.add('pm7-tab-content--active');
    }
    
    this.activeTab = tab;
    
    // Dispatch event
    const event = new CustomEvent('pm7-tab-change', {
      detail: { tab, panel, index: tabIndex },
      bubbles: true
    });
    this.element.dispatchEvent(event);
  }
  
  handleKeyDown(e) {
    const currentIndex = this.tabs.indexOf(e.target);
    let nextIndex = -1;
    
    switch (e.key) {
      case 'ArrowLeft':
      case 'ArrowUp':
        e.preventDefault();
        nextIndex = currentIndex - 1;
        if (nextIndex < 0) nextIndex = this.tabs.length - 1;
        break;
        
      case 'ArrowRight':
      case 'ArrowDown':
        e.preventDefault();
        nextIndex = currentIndex + 1;
        if (nextIndex >= this.tabs.length) nextIndex = 0;
        break;
        
      case 'Home':
        e.preventDefault();
        nextIndex = 0;
        break;
        
      case 'End':
        e.preventDefault();
        nextIndex = this.tabs.length - 1;
        break;
        
      case 'Enter':
      case ' ':
        e.preventDefault();
        this.selectTab(e.target);
        return;
    }
    
    if (nextIndex !== -1) {
      const nextTab = this.tabs[nextIndex];
      if (nextTab && !nextTab.disabled) {
        this.selectTab(nextTab);
        nextTab.focus();
      }
    }
  }
  
  // Public methods
  selectTabByIndex(index) {
    if (index >= 0 && index < this.tabs.length) {
      this.selectTab(this.tabs[index]);
    }
  }
  
  getActiveTabIndex() {
    return this.tabs.indexOf(this.activeTab);
  }
}

// Self-healing function
function healTabSelectors() {
  // Find all tab selectors that were initialized but lost their instance
  const lostTabSelectors = document.querySelectorAll('[data-pm7-tab-selector][data-pm7-tab-initialized]:not([data-pm7-tab-healing])');
  
  lostTabSelectors.forEach(selector => {
    if (!selector._pm7TabSelectorInstance || !PM7TabSelector.instances.has(selector)) {
      selector.setAttribute('data-pm7-tab-healing', 'true');
      console.log('[PM7TabSelector] Healing tab selector:', selector);
      new PM7TabSelector(selector);
      selector.removeAttribute('data-pm7-tab-healing');
    }
  });
}

// Auto-initialize tab selectors
function initTabSelectors() {
  const selectors = document.querySelectorAll('[data-pm7-tab-selector]:not([data-pm7-tab-initialized])');
  selectors.forEach(selector => {
    new PM7TabSelector(selector);
  });
}

// Auto-initialize on DOM ready
if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initTabSelectors, { once: true });
  } else {
    setTimeout(initTabSelectors, 0);
  }
}

// Make healing function available
PM7TabSelector.heal = healTabSelectors;