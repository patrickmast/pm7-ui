/**
 * PM7TabSelector - Vanilla JavaScript tab selector component
 * Handles tab navigation with keyboard support and accessibility
 */
export class PM7TabSelector {
  constructor(element) {
    this.element = element;
    
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
    
    if (!this.tabList || this.tabs.length === 0) {
      console.warn('PM7TabSelector: Missing required elements');
      return;
    }
    
    this.init();
  }
  
  init() {
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
      
      // Click handler
      tab.addEventListener('click', () => this.selectTab(tab));
      
      // Keyboard handler
      tab.addEventListener('keydown', (e) => this.handleKeyDown(e));
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
        
      default:
        return;
    }
    
    // Focus next tab
    if (nextIndex !== -1) {
      const nextTab = this.tabs[nextIndex];
      if (!nextTab.disabled) {
        nextTab.focus();
        this.selectTab(nextTab);
      }
    }
  }
  
  // Public methods
  selectTabByIndex(index) {
    const tab = this.tabs[index];
    if (tab) this.selectTab(tab);
  }
  
  selectTabById(id) {
    const tab = this.tabs.find(t => t.id === id);
    if (tab) this.selectTab(tab);
  }
  
  getActiveTab() {
    return this.activeTab;
  }
  
  getActiveIndex() {
    return this.tabs.indexOf(this.activeTab);
  }
}

// Auto-initialize
if (typeof document !== 'undefined') {
  const initTabSelectors = () => {
    const selectors = document.querySelectorAll('[data-pm7-tab-selector]:not([data-pm7-tab-selector-initialized])');
    selectors.forEach(selector => {
      new PM7TabSelector(selector);
      selector.setAttribute('data-pm7-tab-selector-initialized', 'true');
    });
  };
  
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initTabSelectors, { once: true });
  } else {
    initTabSelectors();
  }
}