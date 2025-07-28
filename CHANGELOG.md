# Changelog

All notable changes to this project will be documented in this file.

## [2.7.0] - 2025-01-27

### 🚀 Enhanced Framework Integration

PM7.init() now provides better support for React, Vue, and other frameworks with new timing options.

#### New Features:
- **PM7.init() options** - Configure initialization timing and behavior
- **PM7.initFramework()** - Convenience method for framework integration
- **Improved timing control** - Handle React/Vue render cycles properly

#### API Enhancements:
```javascript
// New options for PM7.init()
PM7.init(container, {
  delay: 50,     // Delay initialization (ms)
  force: false,  // Force re-initialization
  heal: true     // Run self-healing after init
});

// New convenience method for frameworks
PM7.initFramework(); // Same as init() with { delay: 50, heal: true }
```

#### React Integration Improvements:
```javascript
// OLD way (still works)
useEffect(() => {
  PM7.init();
}, []);

// NEW way (better timing)
useEffect(() => {
  PM7.initFramework();
}, []);
```

### 🔧 Technical Details
- Initialization can now be delayed to handle framework render timing
- Force option allows complete re-initialization when needed
- Self-healing runs automatically after initialization by default
- Framework-specific method provides sensible defaults

This release makes PM7-UI even more framework-friendly while maintaining backward compatibility.

## [2.6.0] - 2025-01-27

### 🚀 Self-Healing for ALL Interactive Components

Building on v2.5.0's self-healing foundation, PM7-UI now provides self-healing capabilities for **ALL** interactive components:

#### New Components with Self-Healing:
- **Tooltip** - Preserves open state and position during re-renders
- **Sidebar** - Maintains open/closed state and collapsible section states

#### Complete Self-Healing Component List:
- ✅ Menu (v2.5.0)
- ✅ Accordion (v2.5.0)  
- ✅ Tab Selector (v2.5.0)
- ✅ Tooltip (v2.6.0)
- ✅ Sidebar (v2.6.0)
- ✅ Dialog (v2.4.0)

### 🔧 Technical Improvements

#### Enhanced Self-Healing Features:
- **Tooltip state preservation** - Open tooltips remain open after re-render
- **Sidebar state preservation** - Open/closed state and collapsible sections maintained
- **Event listener cleanup** - All components now properly clean up event listeners
- **WeakMap tracking** - Consistent memory-efficient instance tracking across all components

#### Updated API:
```javascript
// New healing functions
PM7.healTooltips();   // Heal only tooltips
PM7.healSidebars();   // Heal only sidebars

// PM7.heal() now heals ALL components
PM7.heal(); // Heals menus, accordions, tabs, tooltips, and sidebars
```

### 🎯 Framework Integration Excellence

PM7-UI now provides seamless integration with ALL modern frameworks. Every interactive component automatically recovers from:
- React re-renders and state updates
- Vue component updates and transitions
- Angular change detection cycles
- Svelte reactive updates
- Any framework that manipulates the DOM

No more workarounds, no more manual re-initialization, no more lost state. PM7-UI components just work, making it truly "The First UI Library Built for AI Coding Agents."

## [2.5.0] - 2025-01-27

### 🚀 Major Feature: Self-Healing Components

PM7-UI components now automatically detect and recover from framework re-renders. This revolutionary feature eliminates the need for manual re-initialization workarounds in React, Vue, and other frameworks.

#### Components with Self-Healing:
- **Menu** - Preserves open/close state during re-renders
- **Accordion** - Maintains expanded sections state  
- **Tab Selector** - Keeps active tab selection

#### How it works:
1. Components detect when they've been re-rendered by a framework
2. State is automatically preserved and restored
3. Event listeners are cleaned up and re-attached
4. No manual intervention needed - it just works!

#### New API:
```javascript
// Manual healing for edge cases
PM7.heal(); // Heals all components
PM7.healMenus(); // Heal only menus
PM7.healAccordions(); // Heal only accordions
PM7.healTabSelectors(); // Heal only tab selectors

// Automatic healing runs every second
// Can be disabled with: clearInterval(window.__PM7_SELF_HEALING_INTERVAL__)
```

### 🔧 Technical Improvements

#### Self-Healing Architecture:
- **WeakMap instance tracking** - Better memory management, prevents leaks
- **State preservation** - Component state saved before re-initialization
- **Event cleanup** - All listeners properly removed to prevent duplicates
- **Double-init protection** - Components can't be initialized twice
- **Framework detection** - Automatically detects re-renders

#### Implementation Details:
- Added `preserveState()` and `restoreState()` methods to components
- Instance tracking with WeakMap instead of DOM properties
- Cleanup methods to remove all event listeners
- Initialization markers to detect framework re-renders
- Global healing functions available on PM7 object

### 📚 Documentation
- Updated all component READMEs with self-healing information
- Added framework integration best practices
- Documented new PM7.heal() API

### 🎯 Why This Matters
Before: AI agents had to add complex workarounds for React re-renders
```javascript
// OLD WAY - Complex workaround needed
useEffect(() => {
  setTimeout(() => {
    document.querySelectorAll('[data-pm7-menu]').forEach(el => {
      if (!el._pm7MenuInstance) new PM7.Menu(el);
    });
  }, 100);
}, []);
```

After: Components just work automatically
```javascript
// NEW WAY - Just works!
useEffect(() => {
  PM7.init(); // Components self-heal automatically
}, []);
```

This makes PM7-UI truly "The First UI Library Built for AI Coding Agents" - it handles the complex edge cases automatically so AI agents don't have to.

## [2.4.2] - 2025-01-27

### Critical Fix: Dialog content preservation during transform
- **Wat**: Dialog content verdween na transformatie (lege dialogs)
- **Hoe**: 
  - Sections worden nu volledig gelezen VOORDAT dialog wordt geleegd
  - Dubbele transformDialog aanroepen voorkomen door betere state checking
  - Self-healing en normale transform flow geconsolideerd
- **Bestanden**: 
  - `src/scripts/dialog.js` - transformDialog volgorde fix + dubbele transform preventie
- **Reden**: In versie 2.4.1 werd de dialog geleegd tussen het lezen van header/body/footer sections, waardoor body en footer content verloren ging. Ook kon transformDialog twee keer worden aangeroepen wat tot lege content leidde.

## [2.4.1] - 2025-01-27

### Bugfix: Self-healing dialogs open flow
- **Wat**: Dialog werd niet geopend na self-healing re-initialisatie
- **Hoe**: Na re-transform moet de normale open flow doorgaan in plaats van te stoppen
- **Bestanden**: `src/scripts/dialog.js` - comment toegevoegd om door te gaan met open flow
- **Reden**: De self-healing code stopte na re-initialisatie waardoor de dialog nooit open ging

## [2.4.0] - 2025-01-27

### Self-healing dialogs voor framework re-renders
- **Wat**: Dialogs detecteren en herstellen nu automatisch van framework re-renders zonder manual intervention
- **Hoe**: 
  - `openDialog()` detecteert of een dialog "stale" is door te checken op originele content markers
  - Als framework de originele HTML heeft teruggezet, wordt de dialog automatisch opnieuw geïnitialiseerd
  - State wordt behouden: open dialogs blijven open, closing animations worden niet verstoord
- **Bestanden**: 
  - `src/scripts/dialog.js` - self-healing logic toegevoegd aan openDialog
  - `src/components/dialog/README.md` - documentatie bijgewerkt met self-healing uitleg
- **Reden**: AI agents hadden workarounds nodig (setTimeout, manual re-init) voor React re-renders. Met self-healing werkt alles automatisch zonder speciale patterns.

### 14:52 - Framework Integration copy text verbeterd
- **Wat**: Copy text aangepast van "PM7 dialog not working in React?" naar algemener "A pm7-ui component not working in your framework?"
- **Hoe**: 
  - Label text in readme-links.html aangepast
  - copyUrl functie uitgebreid met framework-guide case
- **Bestanden**: 
  - `docs-src/readme-links.html` - copy text en JavaScript functie
- **Reden**: De tekst was te specifiek op dialogs en React gericht, terwijl de guide voor alle componenten en frameworks bedoeld is

### 14:45 - Framework Integration documentatie toegevoegd
- **Wat**: Complete Framework Integration guide toegevoegd voor React/Vue/Angular gebruik van PM7
- **Hoe**: 
  - `README-Framework-Integration.md` aangemaakt met alle integration patterns
  - Link toegevoegd aan README Links pagina (positie 3)
  - Bevat MutationObserver pattern, timing issues, event handler solutions
  - React hook en Vue composable voorbeelden
- **Bestanden**: 
  - `README-Framework-Integration.md` - nieuwe guide
  - `docs-src/readme-links.html` - link toegevoegd
  - `docs-src/scripts/components.js` - navigatie links verwijderd (alleen via README Links)
- **Reden**: Na de dialog fixes van eerder vandaag was duidelijke documentatie nodig over HOE je PM7 integreert met moderne frameworks. AI agents hebben nu een directe GitHub raw link naar alle patterns.

### 13:30 - Fixed PM7 dialog integration voor React/Vue frameworks
- **Wat**: Dialogs werkten niet correct in React - geen auto-hide, X/ESC button synchronisatie problemen
- **Hoe**: 
  - Auto-initialization toegevoegd voor dialogs op DOMContentLoaded
  - CSS aangepast om dialogs standaard te verbergen met `[data-pm7-dialog] { display: none; }`
  - `window.openDialog` en `window.closeDialog` global functions toegevoegd
  - `autoInitDialogs()` export toegevoegd voor manual initialization na React render
- **Bestanden**: 
  - `src/scripts/dialog.js` - auto-init, global functions, transformDialog class fix
  - `src/styles/components/dialog.css` - display rules voor verschillende states
  - `src/scripts/index.js` - autoInitDialogs export
  - `src/components/dialog/README.md` - framework integration documentatie
- **Reden**: PM7 dialogs zijn DOM-first ontworpen en hadden speciale handling nodig voor frameworks die na DOMContentLoaded renderen. De X/ESC buttons werkten niet omdat PM7 en React state uit sync raakten.

### 05:26 - Fixed demo pages 404 errors in production build
- **Wat**: Component demo pagina's in subdirectories (zoals `/components/demos/button/variants.html`) gaven 404 errors
- **Hoe**: Recursieve functie toegevoegd aan `vite.config.js` om HTML bestanden in subdirectories van `docs-src/components/demos/` te vinden en toe te voegen aan de build
- **Bestanden**: `vite.config.js`
- **Reden**: De oorspronkelijke build configuratie zocht alleen naar demo bestanden direct in `docs-src/demos/`, maar miste bestanden in subdirectories zoals `docs-src/components/demos/button/`

## [2.2.1] - 2025-01-15

### 🎉 New Features
- **Gradient Borders**: Added gradient border utility classes for all components
  - Support for Accordion, Button, Card, Dialog, Input, Menu, Tab Selector, and Toast
  - Multiple gradient color variations (default, blue, green, red, primary)
  - Configurable border thickness (1px, 2px, 4px)
  - Works seamlessly with existing component modifiers

### 🐛 Bug Fixes
- Fixed button cursor to use `pointer` consistently across all button variants
- Changed `-webkit-appearance: button` to `none` to ensure proper cursor behavior
- Fixed menu dropdown positioning when used with gradient borders
- Added `pm7-card--with-dropdown` variant to prevent dropdown clipping
- Enhanced menu trigger gradient hover effect with proper layering

### 🔧 Improvements
- Main navigation menu now features gradient border on hover
- Improved z-index management for gradient borders
- Better isolation of gradient border effects to prevent side effects

## [2.2.0] - 2025-01-08

### 🎉 New Features
- **TypeScript Support**: Full type definitions for all components and utilities
  - Complete TypeScript declarations in `dist/index.d.ts`
  - Proper module exports configuration for TypeScript
  - Type-safe component APIs and utility functions

### 🔧 Improvements
- Fixed package.json exports to include TypeScript definitions
- Added "types" field to package.json for better TypeScript discovery
- Components remain framework-agnostic and AI-friendly

### 📚 Documentation
- Added TYPESCRIPT.md with complete TypeScript usage examples
- Updated component documentation with TypeScript examples
- Enhanced Getting Started guide with TypeScript section

## [2.1.1] - 2025-01-06

### 🐛 Bug Fixes
- Fixed documentation URLs to use https://pm7-ui.dev instead of vercel.app

## [2.1.0] - 2025-01-06

### 🎉 New Features
- **Theme Switch Component**: New `pm7-theme-switch` component for toggling between light and dark modes
- **Dark Mode**: Complete dark mode implementation with flicker-free theme switching
- **AI-First Documentation**: Added AI-README.md - comprehensive documentation specifically for AI coding agents
- **JavaScript API Documentation**: All interactive components now have detailed API documentation

### 🐛 Bug Fixes
- Fixed Theme Switch CSS class preservation during initialization
- Fixed accordion auto-initialization and width inheritance issues
- Fixed dark mode styling across all components (cards, links, headers, footers)
- Fixed documentation page layouts for consistency

### 📚 Documentation
- Added comprehensive JavaScript API sections to all component READMEs
- Updated npm package README with accurate component list and examples
- Created separate documentation for humans (README.md) vs AI agents (AI-README.md)
- Added dark mode implementation guide with best practices

### 🔧 Improvements
- Enhanced auto-initialization for interactive components
- Improved CSS variable usage for better theming
- Added flicker prevention script for dark mode
- Repository cleanup: removed test files, debug files, and build outputs

### 🚀 Developer Experience
- Better TypeScript support with proper exports
- CDN usage examples added
- Framework integration examples (React, Vue, Angular)
- Improved component discovery for AI agents

## [2.0.1] - 2024-12-30

### Initial Release
- Core CSS components
- Basic JavaScript functionality
- Initial documentation