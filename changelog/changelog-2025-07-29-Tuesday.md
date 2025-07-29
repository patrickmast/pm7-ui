# Changelog - Tuesday, July 29, 2025

## 06:28 - Transformed Icons Component Documentation to AI Format
- **Wat**: Icons component README.md getransformeerd naar AI-only documentatie formaat
- **Hoe**: 
  - Verwijderde alle storytelling en uitleg
  - Focus op exacte code patterns en JavaScript API's
  - Duidelijke tabel formaten voor opties en CSS classes
  - Pattern/Anti-Pattern secties met NEVER/ALWAYS regels
  - Framework-specifieke voorbeelden toegevoegd
  - Performance en accessibility sectie gecomprimeerd
- **Bestanden**: 
  - Modified: `/packages/core/src/components/icons/README.md`
- **Reden**: Icons documentatie moest geoptimaliseerd worden voor AI agents volgens het nieuwe documentation format

## 09:55 - Menu Component Documentation Transformed to AI Standard
- **Wat**: Menu component README.md volledig getransformeerd naar nieuwe AI documentatie standaard v1.0
- **Hoe**: 
  - YAML frontmatter toegevoegd met alle verplichte metadata velden
  - IF/THEN regel format toegepast voor ondubbelzinnige parsing
  - Pattern/Anti-Pattern sectie toegevoegd met WHEN/USE/RESULT structuur
  - JavaScript API gedocumenteerd in tabel formaat
  - Complete voorbeelden toegevoegd met SCENARIO/RESULT
  - Validation checklist toegevoegd
- **Bestanden**: 
  - Modified: `/packages/core/src/components/menu/README.md`
- **Reden**: Menu component documentatie moderniseren als perfect voorbeeld van de nieuwe AI documentatie standaard

## 08:10 - NPM Package Release v2.7.1
- **Wat**: PM7 Core package version 2.7.1 gepubliceerd naar npm registry
- **Hoe**: 
  - Version bump van 2.7.0 naar 2.7.1 in package.json
  - Build uitgevoerd met `npm run build`
  - Package gepubliceerd met `npm publish`
- **Bestanden**:
  - Modified: `/packages/core/package.json` (version update)
  - Modified: `/CHANGELOG.md` (release notes toegevoegd)
  - Published: `@pm7/core@2.7.1` naar npm registry
- **Reden**: Release van documentation en demo system updates naar npm gebruikers

### Release inhoud:
- Alle component documentatie updates van de afgelopen dagen
- Verbeterde AI-geoptimaliseerde documentatie
- Demo system verbeteringen (accordion/iframe structuur)
- Package size: 70.2 kB (packed), 378.3 kB (unpacked)

### 05:51 - Created comprehensive AI documentation standard for PM7-UI
- **Wat**: Developed structured documentation standard specifically for AI agents to parse PM7-UI component docs
- **Hoe**: 
  - Created README-AI-Documentation-Standard.md with mandatory YAML frontmatter structure
  - Defined IF/THEN rule format for unambiguous parsing
  - Added COMPONENT-README-TEMPLATE.md as copy-paste starting point
  - Included transform examples showing before/after documentation
  - Added validation patterns for automated checking
- **Bestanden**: 
  - docs/README-AI-Documentation-Standard.md (new)
  - docs/COMPONENT-README-TEMPLATE.md (new)
- **Reden**: Need machine-parseable documentation format that eliminates ambiguity for AI agents. Current docs mix formats - this standard ensures consistency and parseability.

### 05:38 - Aligned PM7-UI with AI-Coding-Agent ONLY philosophy
- **Wat**: Updated all documentation to clarify that PM7-UI is designed exclusively for AI coding agents, not human developers
- **Hoe**: 
  - Converted Callout and Icons documentation to AI-agent format (exact patterns, no explanations)
  - Removed simple syntax support from tooltip.js (only structured syntax allowed)
  - Updated main README.md with clear warnings and instructions for human developers
- **Bestanden**: 
  - packages/core/src/components/callout/README.md
  - packages/core/src/icons/README.md
  - packages/core/src/scripts/tooltip.js
  - README.md
- **Reden**: PM7-UI's true philosophy is that it's optimized for AI agents to generate code, not for humans to learn. The documentation format should reflect this by using AI-instruction patterns rather than human-friendly tutorials

### 04:48 - Built PM7-UI library version 2.7.0
- **Wat**: Successfully built and linked PM7-UI library with new tooltip functionality
- **Hoe**: Ran `npm run build` to compile CSS and JavaScript bundles, then used `npm link` for local testing
- **Bestanden**: 
  - packages/core/dist/pm7.js (127KB)
  - packages/core/dist/pm7.esm.js (119KB)
  - packages/core/dist/pm7.css (123KB)
  - packages/core/dist/index.d.ts (5KB)
- **Reden**: Needed to build the library to test the new tooltip component in the texty-to-viewer project

### 04:30 - Added self-healing tooltip functionality
- **Wat**: Implemented self-healing mechanism for tooltips to survive framework re-renders
- **Hoe**: Added initialization tracking with `data-pm7-tooltip-initialized` attribute and re-initialization logic when DOM updates occur
- **Bestanden**: packages/core/src/scripts/tooltip.js
- **Reden**: Tooltips were being destroyed when frameworks like React re-rendered the DOM, causing them to stop working

### 04:15 - Fixed tooltip display issues
- **Wat**: Fixed tooltip not showing due to missing opacity transition and pointer-events
- **Hoe**: Added opacity: 1 for open state and pointer-events: none to prevent interaction issues
- **Bestanden**: packages/core/src/styles/components/tooltip.css
- **Reden**: Tooltips were being positioned but not visible due to opacity remaining at 0

### 03:45 - Implemented tooltip component for PM7-UI
- **Wat**: Created new tooltip component with automatic positioning and arrow support
- **Hoe**: Built tooltip.js with FloatingUI integration and comprehensive CSS styling
- **Bestanden**: 
  - packages/core/src/scripts/tooltip.js
  - packages/core/src/styles/components/tooltip.css
  - packages/core/src/scripts/index.js
  - packages/core/src/styles/index.css
- **Reden**: PM7-UI needed a tooltip component for displaying contextual information on hover/focus