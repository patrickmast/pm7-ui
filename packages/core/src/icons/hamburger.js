/**
 * PM7 Hamburger Menu Icon
 * 
 * Creates the standard PM7 hamburger menu icon
 * @param {Object} options - Configuration options
 * @param {number} options.width - Icon width (default: 18)
 * @param {number} options.height - Icon height (default: 15)
 * @param {string} options.color - Icon color (default: currentColor)
 * @param {string} options.className - CSS class name
 * @returns {string} SVG string
 */
export function createHamburgerIcon(options = {}) {
  const {
    width = 18,
    height = 15,
    color = 'currentColor',
    className = ''
  } = options;

  return `<svg width="${width}" height="${height}" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg" class="${className}">
  <rect width="18" height="2.5" rx="1.25" fill="${color}"/>
  <rect y="6.25" width="18" height="2.5" rx="1.25" fill="${color}"/>
  <rect y="12.5" width="18" height="2.5" rx="1.25" fill="${color}"/>
</svg>`;
}

/**
 * PM7 Hamburger Menu Icon as DOM element
 * 
 * Creates the standard PM7 hamburger menu icon as a DOM element
 * @param {Object} options - Configuration options
 * @param {number} options.width - Icon width (default: 18)
 * @param {number} options.height - Icon height (default: 15)
 * @param {string} options.color - Icon color (default: currentColor)
 * @param {string} options.className - CSS class name
 * @returns {SVGElement} SVG DOM element
 */
export function createHamburgerIconElement(options = {}) {
  const {
    width = 18,
    height = 15,
    color = 'currentColor',
    className = ''
  } = options;

  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('width', width);
  svg.setAttribute('height', height);
  svg.setAttribute('viewBox', '0 0 18 15');
  svg.setAttribute('fill', 'none');
  
  if (className) {
    svg.setAttribute('class', className);
  }

  // Create the three bars
  const bars = [
    { y: 0 },
    { y: 6.25 },
    { y: 12.5 }
  ];

  bars.forEach(({ y }) => {
    const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    rect.setAttribute('width', '18');
    rect.setAttribute('height', '2.5');
    rect.setAttribute('rx', '1.25');
    rect.setAttribute('y', y.toString());
    rect.setAttribute('fill', color);
    svg.appendChild(rect);
  });

  return svg;
}

/**
 * Get the PM7 hamburger icon as data URI
 * Useful for CSS background-image
 * @param {string} color - Icon color (default: black)
 * @returns {string} Data URI
 */
export function getHamburgerIconDataURI(color = '%23000000') {
  // Note: color should be URL encoded (# becomes %23)
  return `data:image/svg+xml,%3Csvg width='18' height='15' viewBox='0 0 18 15' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='18' height='2.5' rx='1.25' fill='${color}'/%3E%3Crect y='6.25' width='18' height='2.5' rx='1.25' fill='${color}'/%3E%3Crect y='12.5' width='18' height='2.5' rx='1.25' fill='${color}'/%3E%3C/svg%3E`;
}