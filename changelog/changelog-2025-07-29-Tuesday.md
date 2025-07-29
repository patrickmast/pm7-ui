# Changelog - Tuesday, July 29, 2025

## 09:38 - Updated Four Key Components to v2.0 Documentation Standard
- **Wat**: Card, Menu, Dialog, en Button componenten volledig geüpdatet naar nieuwe v2.0 documentatie standaard
- **Hoe**: 
  - Metadata versie geüpdatet naar v2.0 met component dependencies
  - "Complete Examples in Context" sectie toegevoegd met 2+ realistische voorbeelden per component
  - "Anti-Patterns" sectie uitgebreid naar 5-6 items met gedetailleerde BECAUSE/INSTEAD uitleg
  - JavaScript API tabellen verfijnd met exacte parameter details en method descriptions
  - "Cross-Component Dependencies" sectie toegevoegd met tabel format
  - Cross-references naar ATTRIBUTES.md toegevoegd in Attributes secties
  - Button component kreeg specifiek anti-pattern over block elements
- **Bestanden**: 
  - Modified: `/packages/core/src/components/card/README.md`
  - Modified: `/packages/core/src/components/menu/README.md`
  - Modified: `/packages/core/src/components/dialog/README.md`
  - Modified: `/packages/core/src/components/button/README.md`
- **Reden**: Deze vier componenten zijn de meest gebruikte in PM7-UI en moesten perfect voorbeelden zijn van de nieuwe v2.0 standaard met volledige context en duidelijke anti-patterns

## 09:22 - PM7-UI Documentation Standard Upgraded to v2.0
- **Wat**: Documentation standaard geüpgraded naar versie 2.0 met strengere AI-focused requirements
- **Hoe**: 
  - Created `/docs/README-AI-Documentation-Standard.md` met verplichte nieuwe secties
  - Created `/docs/ATTRIBUTES.md` als centrale referentie voor alle data-pm7-* attributes
  - Updated `COMPONENT-TEMPLATE.md` met v2.0 structure en alle mandatory sections
  - Nieuwe verplichte secties: "Complete Examples in Context" (min 2) en "Anti-Patterns" (min 3 met BECAUSE/INSTEAD)
  - Stricter JavaScript API table format met Parameter Details voor complexe methods
  - Cross-Component Dependencies sectie toegevoegd
- **Bestanden**: 
  - Created: `/docs/README-AI-Documentation-Standard.md`
  - Created: `/docs/ATTRIBUTES.md`
  - Modified: `/COMPONENT-TEMPLATE.md`
- **Reden**: v1.0 was niet streng genoeg - AI agents hadden nog steeds moeite met implementaties. v2.0 forceert complete realistische voorbeelden en expliciete anti-patterns met redenen

## 08:18 - PM7-UI Website Deployed to Production
- **Wat**: PM7-UI documentation website gedeployed naar production environment
- **Hoe**: 
  - Build uitgevoerd met `npm run build` (packages + docs)
  - Deployment naar Vercel met `vercel --prod`
  - Production URL: https://pm7-ui.dev
  - Vercel deployment URL: https://pm7-1rc60wb4k-pm7-projects.vercel.app
- **Bestanden**:
  - Build output: `docs/` directory (203 files)
  - Deployment configuratie: `vercel.json`
- **Reden**: Website deployment om de nieuwe documentatie updates en demo system verbeteringen live te zetten

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