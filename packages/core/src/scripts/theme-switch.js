/**
 * PM7 Theme Switch Component
 * A toggle switch for switching between light and dark themes
 */
export class PM7ThemeSwitch {
  constructor(element, options = {}) {
    this.element = element;
    this.options = {
      defaultTheme: null, // 'light', 'dark', or null for auto-detect
      onChange: null, // Callback function
      storageKey: 'pm7-theme',
      applyToRoot: true, // Whether to apply theme class to document root
      ...options
    };
    
    this.button = null;
    this.currentTheme = null;
    this.init();
  }

  init() {
    // Add base class if not present
    if (!this.element.classList.contains('pm7-theme-switch')) {
      this.element.classList.add('pm7-theme-switch');
    }
    
    // Get or create button
    this.button = this.element.querySelector('.pm7-theme-switch-button');
    if (!this.button) {
      this.createButton();
    }
    
    // Initialize theme
    this.currentTheme = this.getInitialTheme();
    this.updateTheme(this.currentTheme, false);
    
    // Add event listeners
    this.button.addEventListener('click', () => this.toggle());
    this.button.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        this.toggle();
      }
    });
    
    // Listen for system theme changes
    if (window.matchMedia) {
      const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
      mediaQuery.addEventListener('change', (e) => {
        if (!localStorage.getItem(this.options.storageKey)) {
          this.updateTheme(e.matches ? 'dark' : 'light');
        }
      });
    }
  }
  
  createButton() {
    // Create button structure
    this.button = document.createElement('button');
    this.button.className = 'pm7-theme-switch-button';
    this.button.setAttribute('type', 'button');
    this.button.setAttribute('role', 'switch');
    this.button.setAttribute('aria-label', 'Toggle theme');
    
    // Create thumb with icons
    const thumb = document.createElement('div');
    thumb.className = 'pm7-theme-switch-thumb';
    
    // Sun icon (light mode)
    const sunIcon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    sunIcon.setAttribute('class', 'pm7-theme-switch-icon pm7-theme-switch-sun');
    sunIcon.setAttribute('viewBox', '0 0 24 24');
    sunIcon.setAttribute('fill', 'none');
    sunIcon.setAttribute('stroke', 'currentColor');
    sunIcon.setAttribute('stroke-width', '2');
    sunIcon.setAttribute('stroke-linecap', 'round');
    sunIcon.setAttribute('stroke-linejoin', 'round');
    sunIcon.innerHTML = `
      <circle cx="12" cy="12" r="5"></circle>
      <line x1="12" y1="1" x2="12" y2="3"></line>
      <line x1="12" y1="21" x2="12" y2="23"></line>
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
      <line x1="1" y1="12" x2="3" y2="12"></line>
      <line x1="21" y1="12" x2="23" y2="12"></line>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
    `;
    
    // Moon icon (dark mode)
    const moonIcon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    moonIcon.setAttribute('class', 'pm7-theme-switch-icon pm7-theme-switch-moon');
    moonIcon.setAttribute('viewBox', '0 0 24 24');
    moonIcon.setAttribute('fill', 'none');
    moonIcon.setAttribute('stroke', 'currentColor');
    moonIcon.setAttribute('stroke-width', '2');
    moonIcon.setAttribute('stroke-linecap', 'round');
    moonIcon.setAttribute('stroke-linejoin', 'round');
    moonIcon.innerHTML = '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>';
    
    thumb.appendChild(sunIcon);
    thumb.appendChild(moonIcon);
    this.button.appendChild(thumb);
    this.element.appendChild(this.button);
  }
  
  getInitialTheme() {
    // Check for explicit default theme
    if (this.options.defaultTheme) {
      return this.options.defaultTheme;
    }
    
    // Check localStorage
    const savedTheme = localStorage.getItem(this.options.storageKey);
    if (savedTheme === 'light' || savedTheme === 'dark') {
      return savedTheme;
    }
    
    // Check system preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      return 'dark';
    }
    
    return 'light';
  }
  
  toggle() {
    const newTheme = this.currentTheme === 'light' ? 'dark' : 'light';
    this.updateTheme(newTheme);
  }
  
  updateTheme(theme, persist = true) {
    this.currentTheme = theme;
    
    // Update component state
    this.element.setAttribute('data-theme', theme);
    this.button.setAttribute('aria-checked', theme === 'dark' ? 'true' : 'false');
    this.button.setAttribute('aria-label', `Switch to ${theme === 'light' ? 'dark' : 'light'} mode`);
    
    // Apply theme to document root if enabled
    if (this.options.applyToRoot) {
      document.documentElement.classList.toggle('dark', theme === 'dark');
      document.body.classList.toggle('dark', theme === 'dark');
    }
    
    // Persist to localStorage
    if (persist) {
      localStorage.setItem(this.options.storageKey, theme);
    }
    
    // Call onChange callback
    if (this.options.onChange && persist) {
      this.options.onChange(theme);
    }
  }
  
  // Public methods
  setTheme(theme) {
    if (theme === 'light' || theme === 'dark') {
      this.updateTheme(theme);
    }
  }
  
  getTheme() {
    return this.currentTheme;
  }
  
  // Static auto-init method
  static autoInit() {
    const switches = document.querySelectorAll('[data-pm7-theme-switch]');
    switches.forEach(switchElement => {
      // Initialize theme switch
      const defaultTheme = switchElement.getAttribute('data-default-theme');
      const storageKey = switchElement.getAttribute('data-storage-key') || 'pm7-theme';
      const applyToRoot = switchElement.getAttribute('data-apply-to-root') !== 'false';
      
      new PM7ThemeSwitch(switchElement, {
        defaultTheme,
        storageKey,
        applyToRoot
      });
    });
  }
}

// Auto-initialize on DOM ready
if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    PM7ThemeSwitch.autoInit();
  });
}