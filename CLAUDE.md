# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## CRITICAL: Documentation Audience Strategy

### AI Agents vs Humans - Know Your Audience

**🤖 FOR AI CODING AGENTS (Claude, ChatGPT, Copilot, etc.):**
- Component READMEs in `/packages/core/src/components/*/README.md`
- `AI-AGENT-GUIDE.md`
- `CLAUDE.md` (this file)
- Test files and implementation examples
- **Style**: Exact patterns, no ambiguity, copy-paste ready code

**👥 FOR HUMANS:**
- `/README.md` (GitHub repository homepage)
- `/packages/core/README.md` (NPM package page)
- Marketing website content
- **Style**: Benefits, concepts, why use PM7, getting started

### Writing for AI Agents

When updating component documentation, remember:
1. **No storytelling** - Only facts and patterns
2. **Exact code blocks** - AI will copy these verbatim
3. **Binary decisions** - "If X then Y, else Z"
4. **No visual descriptions** - AI can't "see" if something "looks right"
5. **Explicit anti-patterns** - Tell AI what NOT to do

Example:
```markdown
<!-- WRONG (human-oriented) -->
The Menu component provides a beautiful dropdown experience with smooth animations...

<!-- CORRECT (AI-oriented) -->
Component: Menu
Required: <div class="pm7-menu" data-pm7-menu>
Import: window.PM7 must exist
Structure: Exact pattern below, no deviations allowed
```

## PM7-UI Project Overview

PM7-UI is a framework-agnostic UI component library built with pure CSS and vanilla JavaScript. It provides a complete set of UI components that work with any JavaScript framework without requiring framework-specific wrappers.

## Core Development Commands

### Primary Development
```bash
npm run dev          # Start documentation dev server (http://localhost:5173)
npm run dev:core     # Watch mode for core package development
npm run dev:all      # Run both dev servers simultaneously
npm run build        # Build all packages and documentation
npm run lint         # Run ESLint on all files
npm run format       # Format code with Prettier
```

### Building the Core Library
```bash
cd packages/core
npm run build        # Build CSS, JS, and TypeScript types
npm run build:css    # Build CSS with PostCSS
npm run build:js     # Build JavaScript with Rollup (ESM + UMD)
npm run build:types  # Copy TypeScript definitions
```

## Architecture Overview

### Package Structure
- **@pm7/core** - The main library package containing all components
- **docs-src/** - Documentation website showcasing all components
- Single package design - everything is in @pm7/core, no separate packages per component

### Build System
- **Vite** - Powers the documentation site with hot reload
- **Rollup** - Builds the core library in ESM and UMD formats
- **PostCSS** - Processes CSS with imports, autoprefixer, and minification
- **TypeScript** - Full type definitions without compilation (pure .d.ts files)

### Component Architecture
1. **CSS Components** (`src/styles/components/`) - Pure CSS styling
2. **JavaScript Components** (`src/scripts/`) - Vanilla JS for interactivity
3. **TypeScript Definitions** (`src/types/`) - Type definitions for each component
4. **Documentation** (`src/components/*/README.md`) - Component-specific docs

### Key Design Principles
- **Framework Agnostic** - Works with React, Vue, Angular, or vanilla JS
- **Auto-initialization** - Components with `data-pm7-*` attributes initialize automatically
- **No Build Required** - Can be used directly via CDN
- **Progressive Enhancement** - CSS works without JavaScript

## CSS Naming Convention
```css
.pm7-[component]              /* Base component class */
.pm7-[component]-[element]    /* Sub-elements (single dash) */
.pm7-[component]--[modifier]  /* Modifiers (double dash) */
```

## Demo Pages Development

### Creating Standalone Demo Pages

When creating demo pages in `docs-src/components/demos/`, use these guidelines:

#### CSS Path Rules
```html
<!-- DEVELOPMENT (correct) -->
<link rel="stylesheet" href="/packages/core/src/styles/index.css">

<!-- PRODUCTION/BUILD (incorrect for dev) -->
<link rel="stylesheet" href="/packages/core/dist/pm7.css">
```

**IMPORTANT**: Always use the source path (`/packages/core/src/styles/index.css`) in demo pages. Vite will handle the correct path resolution in both development and production builds.

#### Demo Page Template
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>[Component] Demo - PM7 UI</title>
  <link rel="icon" type="image/svg+xml" href="/favicon.svg">
  <link rel="stylesheet" href="/packages/core/src/styles/index.css"> <!-- SOURCE PATH! -->
  
  <!-- Dark mode flicker prevention -->
  <script>
    (function() {
      const savedTheme = localStorage.getItem('pm7-theme');
      if (savedTheme === 'dark' || (!savedTheme && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
      }
    })();
  </script>
  
  <style>
    /* Demo-specific styles */
  </style>
</head>
<body>
  <!-- Demo content -->
  
  <!-- PM7 Core JavaScript -->
  <script src="/packages/core/src/scripts/index.js" type="module"></script>
</body>
</html>
```

## Component Development Workflow

### Adding a New Component - Complete Checklist

Deze checklist bevat alle stappen die nodig zijn om een nieuw component toe te voegen aan PM7-UI. Volg deze checklist nauwkeurig om ervoor te zorgen dat het nieuwe component volledig geïntegreerd is in het systeem.

### 1. Component Files Maken

#### 1.1 CSS Component
```bash
# Maak het CSS bestand
packages/core/src/styles/components/[component-name].css
```

**CSS Structuur:**
```css
/* PM7 [Component Name] Component */

.pm7-[component-name] {
  /* Base styles */
}

.pm7-[component-name]-[element] {
  /* Sub-element styles */
}

.pm7-[component-name]--[modifier] {
  /* Modifier styles */
}
```

#### 1.2 CSS Import Toevoegen
Voeg toe aan `packages/core/src/styles/index.css`:
```css
@import './components/[component-name].css';
```

#### 1.3 JavaScript Component (indien interactief)
```bash
# Maak het JS bestand (alleen indien nodig)
packages/core/src/scripts/[component-name].js
```

**JS Structuur:**
```javascript
export function init[ComponentName]s() {
  const elements = document.querySelectorAll('[data-pm7-[component-name]]');
  elements.forEach(element => {
    if (!element.dataset.pm7Initialized) {
      // Initialize component
      element.dataset.pm7Initialized = 'true';
    }
  });
}
```

#### 1.4 JavaScript Export Toevoegen (indien JS component)
Voeg toe aan `packages/core/src/scripts/index.js`:

**Stap 1 - Export statement bovenaan:**
```javascript
export { PM7[ComponentName] } from './[component-name].js';
```

**Stap 2 - Import voor auto-init:**
```javascript
import './[component-name].js';
```

**Stap 3 - Toevoegen aan PM7.init() functie:**
```javascript
// Initialize [component-name]s
const [componentName]s = container.querySelectorAll('[data-pm7-[component-name]]:not([data-pm7-[component-name]-initialized])');
[componentName]s.forEach([componentName] => {
  new PM7[ComponentName]([componentName]);
  [componentName].setAttribute('data-pm7-[component-name]-initialized', 'true');
});
```

**Stap 4 - Toevoegen aan PM7 object:**
```javascript
[ComponentName]: PM7[ComponentName],
```

#### 1.5 TypeScript Definitions
```bash
# Maak het TypeScript definitions bestand
packages/core/src/types/[component-name].d.ts
```

Voeg toe aan `packages/core/src/types/index.d.ts`:
```typescript
export * from './[component-name]';
```

### 2. Component Documentatie

#### 2.1 README Maken
```bash
# Maak de component directory en README
mkdir -p packages/core/src/components/[component-name]
touch packages/core/src/components/[component-name]/README.md
```

**README Template:**
```markdown
# PM7 [Component Name] Component

[Korte beschrijving van het component]

## Basic Usage

```html
<!-- Basis voorbeeld -->
```

## Variants

### [Variant Name]
```html
<!-- Variant voorbeeld -->
```

## CSS Classes

| Class | Description |
|-------|-------------|
| `.pm7-[component-name]` | Base component class |
| `.pm7-[component-name]--[modifier]` | Modifier description |

## CSS Variables

| Variable | Description | Default (Light) | Default (Dark) |
|----------|-------------|-----------------|----------------|
| `--pm7-[component-name]-bg` | Background color | `value` | `value` |

## Accessibility

- [Accessibility guidelines]

## Examples

### [Example Name]
```html
<!-- Uitgebreid voorbeeld -->
```
```

### 3. Documentatie Website Updates

#### 3.1 Component aan Sidebar Toevoegen
Bewerk `docs-src/scripts/components.js`:

```javascript
// Component list with all components
const components = [
  { name: 'Accordion', componentName: 'accordion' },
  { name: 'Button', componentName: 'button' },
  { name: 'Card', componentName: 'card' },
  { name: 'Dialog', componentName: 'dialog' },
  { name: 'Icons', componentName: 'icons' },
  { name: 'Input', componentName: 'input' },
  { name: 'Menu', componentName: 'menu' },
  { name: '[Component Name]', componentName: '[component-name]' }, // NIEUWE REGEL
  { name: 'Sidebar', componentName: 'sidebar' },
  // ... rest
];
```

#### 3.2 Component aan Index Pagina Toevoegen
Bewerk `docs-src/components/index.html`:

Voeg toe op de juiste alfabetische positie:
```html
<!-- [Component Name] -->
<div class="component-card">
  <div class="component-actions">
    <div class="pm7-tooltip" data-pm7-tooltip data-delay="500">
      <a href="#" onclick="openComponentUrl('[component-name]'); return false;" class="open-button pm7-tooltip-trigger" aria-label="Open README in new tab">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
          <polyline points="15 3 21 3 21 9"></polyline>
          <line x1="10" y1="14" x2="21" y2="3"></line>
        </svg>
      </a>
      <div class="pm7-tooltip-content" data-side="top">
        Open README in new tab
        <div class="pm7-tooltip-arrow"></div>
      </div>
    </div>
    <div class="pm7-tooltip" data-pm7-tooltip data-delay="500">
      <button class="copy-button pm7-tooltip-trigger" aria-label="Copy README URL" onclick="copyComponentUrl('[component-name]', this)">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
        </svg>
      </button>
      <div class="pm7-tooltip-content" data-side="top">
        Copy README URL
        <div class="pm7-tooltip-arrow"></div>
      </div>
    </div>
  </div>
  <a href="/components/[component-name]#demo" class="component-header">
    <h3>
      <!-- Component icon SVG -->
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style="display: inline-block; vertical-align: middle; margin-right: 4px; margin-bottom: 2px;">
        <!-- Icon paths -->
      </svg>
      [Component Name]
    </h3>
    <p>[Korte beschrijving van het component]</p>
  </a>
</div>
```

#### 3.3 Component Demo Pagina Maken
Maak `docs-src/components/[component-name].html`:

**⚠️ KRITISCH VOOR TAB NAVIGATIE ⚠️**

**Tab Structure (ZEER BELANGRIJK!)**
De juiste HTML structuur voor tabs is:
```html
<div class="pm7-tab-selector" data-pm7-tab-selector>
  <div class="pm7-tab-list">
    <button class="pm7-tab-trigger" aria-controls="overview-panel">Overview</button>
    <button class="pm7-tab-trigger" aria-controls="demo-panel">Demo</button>
    <!-- etc. -->
  </div>
  
  <div class="pm7-tab-content" id="overview-panel">
    <section class="pm7-docs-section">
      <!-- content -->
    </section>
  </div>
  
  <div class="pm7-tab-content" id="demo-panel">
    <section class="pm7-docs-section">
      <!-- content -->
    </section>
  </div>
</div>
```

**NIET GEBRUIKEN:**
- ❌ `role="tablist"`, `role="tab"`, `role="tabpanel"`
- ❌ `data-tab`, `data-panel` attributes
- ❌ `data-tab-key` attribute
- ❌ `pm7-tab-panel` classes

**Complete HTML Template:**
```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>[Component Name] - pm7-ui Components</title>
  <link rel="icon" type="image/svg+xml" href="/favicon.svg">
  <link rel="stylesheet" href="/packages/core/src/styles/index.css">
  <link rel="stylesheet" href="/styles/docs.css">
  <script>
    // Prevent dark mode flicker - must run before page renders
    (function() {
      const savedTheme = localStorage.getItem('pm7-theme');
      if (savedTheme === 'dark' || (!savedTheme && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
      }
    })();
  </script>
</head>
<body>
  <div id="header-placeholder"></div>

  <div class="pm7-docs-layout">
    <aside class="pm7-docs-sidebar" id="sidebar-placeholder"></aside>

    <main class="pm7-docs-content">
      <h1>
        <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" style="display: inline-block; vertical-align: middle; margin-right: 8px;">
          <!-- Component icon -->
        </svg>
        [Component Name]
      </h1>
      
      <div class="pm7-tab-selector" data-pm7-tab-selector>
        <div class="pm7-tab-list">
          <button class="pm7-tab-trigger" aria-controls="overview-panel">Overview</button>
          <button class="pm7-tab-trigger" aria-controls="demo-panel">Demo</button>
          <button class="pm7-tab-trigger" aria-controls="usage-panel">Usage</button>
          <button class="pm7-tab-trigger" aria-controls="documentation-panel">Documentation</button>
        </div>

        <!-- Overview Tab -->
        <div class="pm7-tab-content" id="overview-panel">
          <section class="pm7-docs-section">
            <p>[Uitgebreide beschrijving van het component - GEEN class="pm7-docs-lead"!]</p>
            
            <h3>When to use</h3>
            <ul>
              <li>[Use case 1]</li>
              <li>[Use case 2]</li>
              <li>[Use case 3]</li>
              <li>[Use case 4]</li>
            </ul>

            <h3>Key features</h3>
            <ul>
              <li><strong>[Feature naam]</strong> - [Feature beschrijving]</li>
              <li><strong>[Feature naam]</strong> - [Feature beschrijving]</li>
              <li><strong>[Feature naam]</strong> - [Feature beschrijving]</li>
              <li>[Feature zonder emphasis]</li>
            </ul>

            <h3>Anatomy</h3>
            <p>A [component name] consists of:</p>
            <ul>
              <li><strong>[Onderdeel]</strong> - [Beschrijving]</li>
              <li><strong>[Onderdeel]</strong> - [Beschrijving]</li>
              <li><strong>[Onderdeel]</strong> - [Beschrijving]</li>
            </ul>
          </section>
        </div>

        <!-- Demo Tab -->
        <div class="pm7-tab-content" id="demo-panel">
          <section class="pm7-docs-section">
            <!-- Demo content hier -->
          </section>
        </div>

        <!-- Usage Tab -->
        <div class="pm7-tab-content" id="usage-panel">
          <section class="pm7-docs-section">
            <h3>Installation</h3>
            <pre><code class="language-bash">npm install @pm7/core</code></pre>

            <h3>CSS Classes</h3>
            <table class="pm7-table">
              <thead>
                <tr>
                  <th>Class</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr class="pm7-table-section-header">
                  <td colspan="2"><strong>Base Classes</strong></td>
                </tr>
                <tr>
                  <td><code>.pm7-[component-name]</code></td>
                  <td>Base component class (required)</td>
                </tr>
                <!-- Meer classes met secties zoals Variants, Sizes, Modifiers, etc. -->
              </tbody>
            </table>

            <h3>Data Attributes</h3>
            <p>[Uitleg over data attributen, of vermeld dat het component geen speciale data attributen gebruikt]</p>

            <h3>Basic Usage</h3>
            <pre><code class="language-html">&lt;!-- Basis code voorbeeld --&gt;</code></pre>

            <h3>[Feature sectie zoals Variants, Sizes, etc.]</h3>
            <pre><code class="language-html">&lt;!-- Code voorbeelden voor specifieke features --&gt;</code></pre>

            <h3>PM7 Special Features</h3>
            <ul>
              <li><strong>[Feature naam]</strong> - [Feature beschrijving]</li>
            </ul>

            <h3>Accessibility</h3>
            <ul>
              <li>[Accessibility guideline]</li>
            </ul>

            <h3>Best Practices</h3>
            <ul>
              <li>[Best practice]</li>
            </ul>
          </section>
        </div>

        <!-- Documentation Tab -->
        <div class="pm7-tab-content" id="documentation-panel">
          <section class="pm7-docs-section" style="padding-top: 20px;">
            <p style="margin-bottom: 4px;">Copy this link that can be used as documentation for working with this component:</p>
            
            <div class="pm7-card" style="background-color: var(--pm7-muted);">
              <div class="pm7-card-content" style="display: flex; align-items: center; gap: 24px; padding: 0;">
                <div class="pm7-card" style="flex: 1; position: relative; background: var(--pm7-surface); padding: 0.5rem 1rem;">
                  <code id="doc-link" style="font-family: monospace; font-size: 0.875rem; display: block; padding-right: 2rem; background: var(--pm7-surface); word-break: break-all;">https://raw.githubusercontent.com/patrickmast/pm7-ui/main/packages/core/src/components/[component-name]/README.md</code>
                  <a href="https://raw.githubusercontent.com/patrickmast/pm7-ui/main/packages/core/src/components/[component-name]/README.md" 
                     target="_blank" 
                     rel="noopener noreferrer"
                     style="position: absolute; top: 0.25rem; right: 0.25rem; padding: 0.25rem; display: inline-flex; align-items: center; justify-content: center; color: var(--pm7-muted-foreground);"
                     aria-label="Open in new tab">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"></path>
                      <polyline points="15 3 21 3 21 9"></polyline>
                      <line x1="10" y1="14" x2="21" y2="3"></line>
                    </svg>
                  </a>
                </div>
                <button class="pm7-button pm7-button--primary" style="padding: 8px 26px;" onclick="copyDocLink()">
                  Copy
                </button>
              </div>
            </div>
            
            <div class="pm7-docs-info pm7-docs-info--ai">
              <h3 style="margin-bottom: 16px;">🤖 AI-Optimized Documentation</h3>
              <p>This link contains complete Markdown documentation that is perfectly readable by AI assistants, developers, and other automated systems. Directly accessible on GitHub - including all essential PM7 [Component Name] implementation guidance.</p>
              <p class="pm7-docs-note">Perfect for ChatGPT, Claude, and other AI code assistants</p>
            </div>
          </section>
        </div>
      </div>
    </main>
  </div>

  <!-- PM7 Core JavaScript -->
  <script src="/packages/core/src/scripts/index.js" type="module"></script>
  
  <!-- Load header and sidebar -->
  <script src="/scripts/components.js" type="module"></script>
  
  <!-- Prism for code highlighting -->
  <link href="/styles/prism.css" rel="stylesheet">
  <script src="/scripts/prism.js"></script>

  <script>
    function copyDocLink() {
      const link = document.getElementById('doc-link').textContent;
      navigator.clipboard.writeText(link).then(() => {
        const button = event.target;
        const originalText = button.textContent;
        button.textContent = '✓ Copied!';
        button.style.backgroundColor = '#22c55e';
        
        setTimeout(() => {
          button.textContent = originalText;
          button.style.backgroundColor = '';
        }, 2000);
      });
    }
  </script>

  <!-- Tab router initialization -->
  <script type="module">
    import { initTabRouter } from '/scripts/tab-router.js';
    
    // Initialize tab routing
    document.addEventListener('DOMContentLoaded', () => {
      initTabRouter('[component-name]'); // VERVANG met echte component naam!
    });
  </script>

  <script type="module" src="/scripts/docs.js"></script>
  <script type="module" src="/scripts/version-standalone.js"></script>
</body>
</html>
```

### 4. Build & Test

#### 4.1 Build Core Package
```bash
cd packages/core
npm run build
```

#### 4.2 Test Lokaal
```bash
npm run dev
```

Navigeer naar:
- http://localhost:5173/components/ - Check of component in lijst staat
- http://localhost:5173/components/[component-name] - Test component pagina

#### 4.3 Browser & Theme Testing
Test het component in:
- [ ] Chrome/Edge (laatste versie)
- [ ] Firefox (laatste versie)  
- [ ] Safari (laatste versie)
- [ ] Light mode
- [ ] Dark mode
- [ ] Met en zonder JavaScript enabled (voor CSS-only componenten)

### 5. Documentatie Updates

#### 5.1 AI-README.md Aanvullen
Voeg het nieuwe component toe aan de component lijst in `/AI-README.md`:

```markdown
### Available Components
- **Accordion**: Collapsible content sections
- **Button**: Interactive buttons with multiple variants
- **[Component Name]**: [Korte beschrijving]
```

#### 5.2 NPM Package README
Update `/packages/core/README.md` met het nieuwe component:

```markdown
### Components

- ✅ Accordion
- ✅ Button
- ✅ [Component Name] - [Beschrijving]
```

#### 5.3 GitHub README
Update `/README.md` in de root met het nieuwe component in de features lijst.

### 6. Icon Toevoegen voor Documentatie

**BELANGRIJK**: Component icons worden NIET opgeslagen als losse bestanden in de icons directory!

Icons voor component documentatie pagina's worden direct inline in de HTML geplaatst:

1. In `docs-src/components/[component-name].html`:
```html
<h1>
  <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor" style="display: inline-block; vertical-align: middle; margin-right: 8px;">
    <!-- SVG paths hier -->
  </svg>
  [Component Name]
</h1>
```

2. In `docs-src/components/index.html`:
```html
<h3>
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" style="display: inline-block; vertical-align: middle; margin-right: 4px; margin-bottom: 2px;">
    <!-- SVG paths hier -->
  </svg>
  [Component Name]
</h3>
```

**Let op**: 
- Gebruik altijd `fill="currentColor"` zodat het icon de text kleur volgt
- De `icons` directory (`packages/core/src/icons/`) is alleen voor algemene UI icons die gebruikers kunnen gebruiken, NIET voor component representatie icons

### 7. Finale Checklist

- [ ] CSS component gemaakt en geïmporteerd in index.css
- [ ] JavaScript component gemaakt (indien nodig)
- [ ] JavaScript exports toegevoegd aan scripts/index.js (4 plekken, indien JS component)
- [ ] TypeScript definitions toegevoegd en geëxporteerd
- [ ] Component README gemaakt
- [ ] Component aan sidebar toegevoegd (components.js)
- [ ] Component aan index pagina toegevoegd
- [ ] Component demo pagina gemaakt met alle 4 tabs
- [ ] **Correcte tab structuur gebruikt** (pm7-tab-content, NIET role attributes)
- [ ] **Usage tab volgt de juiste volgorde** (Installation eerst, dan CSS Classes tabel, etc.)
- [ ] **Documentation tab heeft correcte content** (link card + AI-optimized sectie)
- [ ] **Tab router initialisatie toegevoegd met correcte component naam**
- [ ] Build succesvol uitgevoerd
- [ ] Lokaal getest in alle browsers en themes
- [ ] AI-README.md bijgewerkt
- [ ] NPM README bijgewerkt
- [ ] GitHub README bijgewerkt
- [ ] Component icon inline toegevoegd in HTML (niet als los bestand)

## Naming Conventions

- **CSS Classes**: `.pm7-[component-name]`, `.pm7-[component-name]--[modifier]`
- **Files**: Altijd lowercase met dashes: `component-name.css`
- **JavaScript**: CamelCase voor functies: `initComponentName()`
- **TypeScript**: PascalCase voor types: `PM7ComponentName`
- **Data Attributes**: `data-pm7-[component-name]`

## Component Icon Guidelines

Voor het component icon in de documentatie:
- Gebruik een 24x24 viewBox SVG (of behoud de originele viewBox ratio)
- Gebruik `fill="currentColor"` of `stroke="currentColor"`
- Houd het simpel en herkenbaar
- **ALTIJD inline in de HTML** - nooit als los bestand in icons/
- Voor de component pagina titel: `width="32" height="32"`
- Voor de index pagina kaart: `width="20" height="20"`

## Tips voor Component Development

1. **Consistentie is Key**: Kijk naar bestaande componenten voor patronen
2. **Mobile First**: Zorg dat componenten responsive zijn
3. **Dark Mode**: Test altijd in beide light en dark mode
4. **Accessibility**: Voeg altijd ARIA labels toe waar nodig
5. **Documentation**: Wees uitgebreid in voorbeelden
6. **CSS-Only Components**: Sommige componenten (zoals Card, Badge, Sidebar) hebben geen JavaScript nodig. Sla in dat geval stappen 1.3 en 1.4 over
7. **Exports**: Bij JS componenten, vergeet niet alle 4 export stappen in index.js
8. **Tab Navigatie**: Als de "Demo" tab niet werkt, controleer of je de tab router correct hebt geïnitialiseerd met `initTabRouter('[component-name]')`!

### Overview Tab Styling
**BELANGRIJK**: De Overview tab heeft een specifieke structuur:

1. **Intro paragraph** - GEEN `class="pm7-docs-lead"`! Gewoon een `<p>` tag
2. **H3 headers** - Gebruik `<h3>`, NIET `<h2>`
3. **Standaard secties**:
   - "When to use" - lijst met use cases
   - "Key features" - lijst met features (vaak met `<strong>` voor feature namen)
   - "Anatomy" - uitleg over de onderdelen van het component

**Let op**: Volg EXACT de structuur uit andere componenten zoals Button of Accordion!

### Usage Tab Structuur
**BELANGRIJK**: De Usage tab heeft een specifieke volgorde die MOET worden gevolgd:

1. **Installation** - Altijd eerst! `npm install @pm7/core`
2. **Important Implementation Notes** (optioneel) - Waarschuwingen of veelvoorkomende problemen
3. **CSS Classes** - Tabel met alle classes, georganiseerd in secties (Base Classes, Variants, Sizes, Modifiers, etc.)
4. **Data Attributes** - Uitleg over data attributen, of vermeld dat het component er geen gebruikt
5. **Basic Usage** - Simpel code voorbeeld
6. **Specifieke features** - Zoals Variants, Sizes, Modifiers (met code voorbeelden)
7. **PM7 Special Features** - Unieke features van het component
8. **CSS Customization** (optioneel) - CSS variabelen voor customization
9. **Accessibility** - Accessibility guidelines
10. **JavaScript API** (alleen voor JS componenten) - API documentatie
11. **Best Practices** - Best practices voor gebruik

**NIET DOEN**:
- ❌ Beginnen met code voorbeelden
- ❌ CSS Classes tabel onderaan zetten
- ❌ Installation vergeten
- ❌ Data Attributes sectie overslaan

**Voorbeeld van FOUTE volgorde**:
```
1. Basic Usage (code)
2. Variants (code)
3. CSS Classes (tabel)
```

**Voorbeeld van JUISTE volgorde**:
```
1. Installation
2. CSS Classes (tabel)
3. Data Attributes
4. Basic Usage (code)
5. Variants (code)
```

## Veel Voorkomende Problemen

### Tab Navigatie Werkt Niet
**Symptomen**: Tabs lijken te werken maar content verandert niet, of "Demo" tab doet niets.

**Oorzaken**:
1. **Verkeerde HTML structuur** - Gebruik NOOIT `role="tablist"`, `role="tab"`, `role="tabpanel"`
2. **Verkeerde classes** - Gebruik `pm7-tab-content`, NIET `pm7-tab-panel`
3. **Ontbrekende IDs** - Elke tab content moet een uniek `id` hebben dat matched met `aria-controls`
4. **Tab router niet geïnitialiseerd** - Vergeet niet `initTabRouter('component-name')`

**Oplossing**: Gebruik EXACT de structuur uit sectie 3.3!

### Component Icon Verschijnt Niet
**Symptomen**: Leeg vierkant of gebroken icon.

**Oplossing**: Icons moeten inline SVG zijn, NIET een bestand in `/icons/`!

### Documentation Tab Heeft Verkeerde Content
**Symptomen**: Documentation tab toont generieke tekst of werkt niet zoals andere componenten.

**Oplossing**: De Documentation tab moet EXACT dit formaat volgen:
1. Een korte introductie tekst
2. Een card met de GitHub raw README link
3. Een Copy button
4. Een AI-Optimized Documentation sectie

**Belangrijk**: Gebruik de exacte HTML uit sectie 3.3 voor de Documentation tab!

## Quick Start Template

Voor een snel begin, kopieer een bestaand simpel component zoals Card of Badge en pas alle namen aan naar je nieuwe component.

### Component Initialization Pattern
```javascript
// Auto-init on DOMContentLoaded
export function initAccordions() {
  const accordions = document.querySelectorAll('[data-pm7-accordion]');
  accordions.forEach(accordion => {
    if (!accordion.dataset.pm7Initialized) {
      // Initialize component
      accordion.dataset.pm7Initialized = 'true';
    }
  });
}
```

## Testing Approach
- Playwright tests in `tests/` directory
- Manual testing through documentation site
- Each component has a dedicated demo page
- Focus on real-world usage examples

### Playwright Test Patterns
When testing PM7 components, navigate to the demo tab first:

```javascript
// Navigate directly to demo tab
await page.goto('/components/menu.html#demo');

// Wait for demo panel to be visible
await page.waitForSelector('#demo-panel', { state: 'visible' });

// Select elements within demo panel
const menu = page.locator('#demo-panel .pm7-menu');

// Wait for PM7 to initialize
await page.waitForFunction(() => window.PM7, { timeout: 10000 });
```

This ensures components are visible and initialized before testing.

## Important Files
- `vite.config.js` - Documentation site configuration
- `packages/core/rollup.config.js` - Library build configuration
- `packages/core/postcss.config.js` - CSS processing configuration
- `AI-README.md` - Technical documentation for AI assistance
- `AI-AGENT.md` - Complete HTML attribute reference

## Development Tips
- Always test components in both light and dark modes
- Verify components work without JavaScript enabled
- Test with multiple frameworks (React, Vue, etc.)
- Check browser compatibility (supports modern browsers)
- Use the documentation site for rapid iteration

## Common Patterns

### CSS Custom Properties
All components use CSS custom properties for theming:
```css
var(--pm7-background)    /* Background colors */
var(--pm7-foreground)    /* Text colors */
var(--pm7-primary)       /* Primary brand color */
var(--pm7-border)        /* Border colors */
```

### Z-Index Scale
PM7 uses a consistent z-index scale to prevent stacking conflicts:
```css
:root {
  --pm7-z-dropdown: 50;    /* Menus, tooltips */
  --pm7-z-modal: 100;      /* Dialogs, modals */
  --pm7-z-toast: 150;      /* Toasts (highest) */
}
```

### Event Handling
Components dispatch custom events for framework integration:
```javascript
element.dispatchEvent(new CustomEvent('pm7:accordion:toggle', {
  detail: { expanded: true },
  bubbles: true
}));
```

### TypeScript Augmentation
All components augment HTMLElement interfaces:
```typescript
interface HTMLElement {
  PM7Accordion?: PM7AccordionInstance;
}
```

## Deployment
- Documentation auto-deploys to Vercel on push to main
- NPM package published as @pm7/core
- CDN available via unpkg and jsdelivr

## Performance Patterns

### Lazy Loading Components
For pages with many components, use intersection observer for lazy initialization:

```javascript
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      new PM7.Menu(entry.target);
      observer.unobserve(entry.target);
    }
  });
});

// Observe all menu elements
document.querySelectorAll('[data-pm7-menu]').forEach(el => {
  observer.observe(el);
});
```

This pattern prevents initializing components that aren't visible, improving initial page load performance.

## Important Lessons Learned from PM7-UI Development

### 1. Component Initialization Issues
**Problem**: Tests failing with "window.PM7 is not defined" errors.

**Root Cause**: Component documentation pages were not importing the main PM7 library script.

**Solution**: Always ensure component pages include:
```html
<!-- PM7 Core JavaScript -->
<script src="/packages/core/src/scripts/index.js" type="module"></script>
```
Or as an ES6 import:
```javascript
import '/packages/core/src/scripts/index.js';
```

**Key Takeaway**: The PM7 global object must be available before any component can initialize. Always verify imports when debugging initialization issues.

### 2. CSS Specificity Conflicts
**Problem**: Component styles being overridden by global styles, especially in dark mode.

**Common Issues**:
- Menu items showing wrong colors when using `<a>` tags
- Global link styles overriding component-specific styles
- Dark mode styles not applying correctly

**Solutions**:
```css
/* BAD - Too generic */
.dark a { color: var(--pm7-primary); }

/* GOOD - Exclude component elements */
.dark a:not(.pm7-menu-item) { color: var(--pm7-primary); }

/* BEST - Use higher specificity for components */
a.pm7-menu-item { color: var(--pm7-foreground) !important; }
```

**Key Takeaway**: Always test components with various content types (links, buttons, etc.) in both light and dark modes.

### 3. Tab Navigation Structure
**Problem**: Tab components not working due to incorrect HTML structure.

**Wrong Approach**:
```html
<!-- DON'T USE THESE -->
<div role="tablist">
  <button role="tab">Tab 1</button>
</div>
<div role="tabpanel">Content</div>
```

**Correct Approach**:
```html
<div class="pm7-tab-selector" data-pm7-tab-selector>
  <div class="pm7-tab-list">
    <button class="pm7-tab-trigger" aria-controls="panel-1">Tab 1</button>
  </div>
  <div class="pm7-tab-content" id="panel-1">Content</div>
</div>
```

**Key Takeaway**: PM7 uses its own tab implementation. Never use ARIA role attributes for tabs.

### 4. Testing Best Practices
**Problem**: Tests failing because components are in different tabs or not visible.

**Solutions**:
1. Navigate to the correct tab: `/components/accordion.html#demo`
2. Wait for tab content to be visible: `await page.waitForSelector('#demo-panel', { state: 'visible' })`
3. Use correct selectors: `.pm7-accordion` not `[data-pm7-accordion]`
4. Scope searches to the active tab: `page.locator('#demo-panel .pm7-button')`

**Key Takeaway**: Component demos are usually in the Demo tab, not the Overview tab.

### 5. Performance Considerations
**Problem**: Full test suite taking 10+ minutes to complete.

**Reasons**:
- Cross-browser testing (Chrome, Firefox, Safari)
- Multiple viewport sizes (mobile, tablet, desktop)
- Comprehensive interaction testing

**Solutions**:
- Use quick smoke tests for rapid feedback: `npm run test:pre-deploy:quick`
- Run full tests only before deployment
- Consider parallel test execution

**Key Takeaway**: Long test duration is normal for comprehensive testing. Use quick tests during development.