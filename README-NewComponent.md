# PM7-UI: Nieuwe Component Toevoegen - Complete Checklist

Deze README bevat alle stappen die nodig zijn om een nieuw component toe te voegen aan PM7-UI. Volg deze checklist nauwkeurig om ervoor te zorgen dat het nieuwe component volledig geïntegreerd is in het systeem.

## 📋 Complete Checklist

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

### Tab Structure (ZEER BELANGRIJK!)
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

### Component-Specific Scripts
**BELANGRIJK**: Sommige componenten hebben extra scripts nodig! Check altijd bestaande componenten.

Voor componenten MET JavaScript (zoals Button, Menu):
```html
<script type="module">
  import { loadHeader, loadFooter, loadSidebar } from '../scripts/components.js';
  import { PM7[ComponentName] } from '/packages/core/src/scripts/[component-name].js';
  // Import andere benodigde PM7 componenten
  
  // Load page components
  loadHeader();
  loadFooter();
  loadSidebar();
  
  // Component-specific initialisatie indien nodig
</script>
```

### Scripts
De scripts aan het einde van het HTML bestand zijn ESSENTIEEL voor werkende tabs:

1. **Tab Router Initialisatie** - Zonder dit werkt de "Demo" tab niet!
```javascript
<script type="module">
  import { initTabRouter } from '/scripts/tab-router.js';
  
  // Initialize tab routing
  document.addEventListener('DOMContentLoaded', () => {
    initTabRouter('[component-name]'); // VERVANG met echte component naam!
  });
</script>
```

2. **docs.js** - Laadt de algemene documentatie functionaliteit
3. **version-standalone.js** - Voor versie display

**NIET GEBRUIKEN:**
- ❌ `<script type="module" src="/scripts/main.js"></script>` (bestaat niet!)
- ❌ Alleen `tab-router.js` laden zonder initialisatie

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
        <svg width="32" height="32" viewBox="0 0 24 24" fill="var(--pm7-primary)" style="display: inline-block; vertical-align: middle; margin-right: 8px;">
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
            <h2>Basic [Component Name]</h2>
            <div class="pm7-docs-example">
              <div class="pm7-docs-preview">
                <!-- Live demo here -->
              </div>
              <pre><code class="language-html">&lt;!-- HTML code --&gt;</code></pre>
            </div>

            <h2>[Variant Name]</h2>
            <div class="pm7-docs-example">
              <div class="pm7-docs-preview">
                <!-- Variant demo -->
              </div>
              <pre><code class="language-html">&lt;!-- Variant HTML code --&gt;</code></pre>
            </div>
          </section>
        </div>

        <!-- Usage Tab -->
        <div class="pm7-tab-content" id="usage-panel">
          <section class="pm7-docs-section">
            <h2>Structure</h2>
            <p>[Uitleg over de structuur]</p>

            <h2>CSS Classes</h2>
            <div class="pm7-docs-table">
              <table>
                <thead>
                  <tr>
                    <th>Class</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><code>.pm7-[component-name]</code></td>
                    <td>Base component class</td>
                  </tr>
                  <!-- Meer classes -->
                </tbody>
              </table>
            </div>

            <h2>CSS Variables</h2>
            <div class="pm7-docs-table">
              <table>
                <thead>
                  <tr>
                    <th>Variable</th>
                    <th>Description</th>
                    <th>Default</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><code>--pm7-[component-name]-bg</code></td>
                    <td>Background color</td>
                    <td><code>#value</code></td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2>Accessibility</h2>
            <ul>
              <li>[Accessibility guideline 1]</li>
              <li>[Accessibility guideline 2]</li>
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

  <div id="footer-placeholder"></div>

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

  <script type="module">
    import { initTabRouter } from '/scripts/tab-router.js';
    
    // Initialize tab routing
    document.addEventListener('DOMContentLoaded', () => {
      initTabRouter('[component-name]');
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
- [ ] **Documentation tab heeft correcte content** (link card + AI-optimized sectie)
- [ ] **Tab router initialisatie toegevoegd met correcte component naam**
- [ ] Build succesvol uitgevoerd
- [ ] Lokaal getest in alle browsers en themes
- [ ] AI-README.md bijgewerkt
- [ ] NPM README bijgewerkt
- [ ] GitHub README bijgewerkt
- [ ] Component icon inline toegevoegd in HTML (niet als los bestand)

## 📝 Naming Conventions

- **CSS Classes**: `.pm7-[component-name]`, `.pm7-[component-name]--[modifier]`
- **Files**: Altijd lowercase met dashes: `component-name.css`
- **JavaScript**: CamelCase voor functies: `initComponentName()`
- **TypeScript**: PascalCase voor types: `PM7ComponentName`
- **Data Attributes**: `data-pm7-[component-name]`

## 🎨 Component Icon Guidelines

Voor het component icon in de documentatie:
- Gebruik een 24x24 viewBox SVG (of behoud de originele viewBox ratio)
- Gebruik `fill="currentColor"` of `stroke="currentColor"`
- Houd het simpel en herkenbaar
- **ALTIJD inline in de HTML** - nooit als los bestand in icons/
- Voor de component pagina titel: `width="32" height="32"`
- Voor de index pagina kaart: `width="20" height="20"`

## 💡 Tips

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

## 🚨 Veel Voorkomende Problemen

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

## 🚀 Quick Start Template

Voor een snel begin, kopieer een bestaand simpel component zoals Card of Badge en pas alle namen aan naar je nieuwe component.

---

Dit document wordt bijgehouden in `/README-NewComponent.md` voor toekomstige referentie.