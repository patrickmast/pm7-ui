/**
 * Version display module for PM7 UI documentation
 * Dynamically fetches and displays the current npm package version
 */

// Cache the version to avoid multiple API calls
let cachedVersion = null;

/**
 * Fetches the latest version of @pm7/core from npm registry
 * @returns {Promise<string>} The version string
 */
export async function fetchLatestVersion() {
  if (cachedVersion) {
    return cachedVersion;
  }

  try {
    // Try npm registry first
    const response = await fetch('https://registry.npmjs.org/@pm7/core/latest');
    if (response.ok) {
      const data = await response.json();
      cachedVersion = data.version;
      return cachedVersion;
    }
  } catch (error) {
    console.warn('Failed to fetch version from npm registry:', error);
  }

  try {
    // Fallback to local package.json
    const response = await fetch('/packages/core/package.json');
    if (response.ok) {
      const data = await response.json();
      cachedVersion = data.version;
      return cachedVersion;
    }
  } catch (error) {
    console.warn('Failed to fetch version from local package.json:', error);
  }

  // Final fallback
  console.warn('Using hardcoded version fallback');
  return '1.0.0';
}

/**
 * Updates all version placeholders in the document
 * @param {string} version - The version string to display
 */
export function updateVersionDisplays(version) {
  // Update all elements with data-pm7-version attribute
  const versionElements = document.querySelectorAll('[data-pm7-version]');
  versionElements.forEach(element => {
    element.textContent = version;
  });

  // Update all npm install commands
  const codeElements = document.querySelectorAll('code');
  codeElements.forEach(element => {
    const text = element.textContent;
    // Replace specific version patterns
    if (text.includes('@pm7/core@')) {
      element.textContent = text.replace(/@pm7\/core@[\d.]+/, `@pm7/core@${version}`);
    }
    // Replace version in brackets (e.g., "PM7 UI (v0.2.0)")
    if (text.includes('(v0.2.0)')) {
      element.textContent = text.replace(/\(v[\d.]+\)/, `(v${version})`);
    }
  });

  // Update any standalone version displays
  const versionTexts = document.querySelectorAll('.pm7-version-text');
  versionTexts.forEach(element => {
    element.textContent = version;
  });
}

/**
 * Initializes version display on page load
 */
export async function initVersionDisplay() {
  const version = await fetchLatestVersion();
  updateVersionDisplays(version);
}

// Auto-initialize if DOM is ready
if (typeof document !== 'undefined') {
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initVersionDisplay);
  } else {
    initVersionDisplay();
  }
}