# Changelog - Monday, July 28, 2025

## 08:05 - Tooltip Component: Demo System Implementation
- **Wat**: Tooltip component geconverteerd naar het moderne accordion/iframe demo systeem
- **Hoe**: 
  - 8 aparte demo HTML bestanden aangemaakt in `/docs-src/components/demos/tooltip/`
  - Alle inline demos uit tooltip.html verwijderd en vervangen door accordions met iframes
  - JavaScript toegevoegd om externe links automatisch naar accordion headers te verplaatsen
- **Bestanden**:
  - Created: `/docs-src/components/demos/tooltip/` (7 demo files + index.html)
  - Modified: `/docs-src/components/tooltip.html`
- **Reden**: Consistente demo presentatie door alle componenten, betere isolatie en organisatie

### Specifieke demo bestanden aangemaakt:
1. basic.html - Simpele tooltip met default instellingen
2. positioning.html - Top, right, bottom, left posities en alignment opties
3. sizes.html - Small, default, large, en custom width tooltips
4. themes.html - Dark en light theme varianten
5. multiline.html - Tooltips met multiple lines en complexe content
6. delays.html - Custom open en close delay timings
7. icon-tooltips.html - Tooltips op icon buttons en toolbar items
8. index.html - Overzichtspagina voor alle tooltip demos

## 08:00 - Toast Component: Demo System Implementation
- **Wat**: Toast component geconverteerd naar het moderne accordion/iframe demo systeem
- **Hoe**: 
  - 5 aparte demo HTML bestanden aangemaakt in `/docs-src/components/demos/toast/`
  - Alle inline demos uit toast.html verwijderd en vervangen door accordions met iframes
  - JavaScript toegevoegd om externe links automatisch naar accordion headers te verplaatsen
- **Bestanden**:
  - Created: `/docs-src/components/demos/toast/` (4 demo files + index.html)
  - Modified: `/docs-src/components/toast.html`
- **Reden**: Consistente demo presentatie door alle componenten, betere isolatie en organisatie

### Specifieke demo bestanden aangemaakt:
1. variants.html - Default, success, warning, error, en info toast types
2. features.html - Duration control, actions, en management opties
3. common-patterns.html - Form submission, async operations, en system notifications
4. gradient-border.html - Toasts met kleurrijke gradient borders
5. index.html - Overzichtspagina voor alle toast demos

## 21:50 - Theme Switch Component: Demo System Implementation
- **Wat**: Theme switch component geconverteerd naar het moderne accordion/iframe demo systeem
- **Hoe**: 
  - 5 aparte demo HTML bestanden aangemaakt in `/docs-src/components/demos/theme-switch/`
  - Alle inline demos uit theme-switch.html verwijderd en vervangen door accordions met iframes
  - JavaScript toegevoegd om externe links automatisch naar accordion headers te verplaatsen
- **Bestanden**:
  - Created: `/docs-src/components/demos/theme-switch/` (5 demo files + index.html)
  - Modified: `/docs-src/components/theme-switch.html`
- **Reden**: Consistente demo presentatie door alle componenten, betere isolatie en organisatie

### Specifieke demo bestanden aangemaakt:
1. basic.html - Simpele theme switch implementaties met en zonder labels
2. sizes.html - Small, medium, en large theme switch groottes
3. fixed-position.html - Floating theme switches die in viewport hoeken blijven
4. header-integration.html - Voorbeelden van theme switches in verschillende header layouts
5. states.html - Disabled state, no-hover variant, en keyboard navigatie
6. index.html - Overzichtspagina voor alle theme switch demos

## 21:35 - Tab Selector Component: Demo System Implementation
- **Wat**: Tab selector component geconverteerd naar het moderne accordion/iframe demo systeem
- **Hoe**: 
  - 7 aparte demo HTML bestanden aangemaakt in `/docs-src/components/demos/tab-selector/`
  - Alle inline demos uit tab-selector.html verwijderd en vervangen door accordions met iframes
  - JavaScript toegevoegd om externe links automatisch naar accordion headers te verplaatsen
- **Bestanden**:
  - Created: `/docs-src/components/demos/tab-selector/` (7 demo files + index.html)
  - Modified: `/docs-src/components/tab-selector.html`
- **Reden**: Consistente demo presentatie door alle componenten, betere isolatie en organisatie

### Specifieke demo bestanden aangemaakt:
1. basic.html - Simpele tab implementatie met default styling
2. variants.html - Verschillende visuele stijlen: underline, solid, en pills
3. sizes.html - Small, medium, en large tab groottes
4. full-width.html - Tabs die de volledige container breedte vullen
5. with-icons.html - Tabs met iconen, badges, en icon-only varianten
6. disabled.html - Omgaan met disabled states en conditionele beschikbaarheid
7. gradient-border.html - Mooie gradient borders met verschillende kleuren en diktes
8. index.html - Overzichtspagina voor alle tab selector demos

## 21:15 - Sidebar Component: Demo System Implementation
- **Wat**: Sidebar component geconverteerd naar het moderne accordion/iframe demo systeem
- **Hoe**: 
  - 5 aparte demo HTML bestanden aangemaakt in `/docs-src/components/demos/sidebar/`
  - Alle inline demos uit sidebar.html verwijderd en vervangen door accordions met iframes
  - File corruption issues opgelost door oude demo content te verwijderen
  - JavaScript toegevoegd om externe links automatisch naar accordion headers te verplaatsen
- **Bestanden**:
  - Created: `/docs-src/components/demos/sidebar/` (5 demo files)
  - Modified: `/docs-src/components/sidebar.html`
- **Reden**: Consistente demo presentatie door alle componenten, betere isolatie en organisatie

### Specifieke demo bestanden aangemaakt:
1. live-app.html - Complete applicatie layout met sidebar navigatie
2. mobile-overlay.html - Responsieve sidebar die content overlapt op mobiele apparaten
3. mini-sidebar.html - Compacte sidebar met alleen iconen
4. collapsible.html - Toggle tussen volledige sidebar en mini icon-only mode
5. index.html - Overzichtspagina voor alle sidebar demos

## 20:33 - Input Component: Demo System Implementation
- **Wat**: Input component geconverteerd naar het moderne accordion/iframe demo systeem
- **Hoe**: 
  - 11 aparte demo HTML bestanden aangemaakt in `/docs-src/components/demos/input/`
  - Alle inline demos uit input.html verwijderd en vervangen door accordions met iframes
  - Index bestand toegevoegd voor overzicht van alle input demos
  - JavaScript toegevoegd om externe links automatisch naar accordion headers te verplaatsen
  - Verwijderd togglePasswordVisibility functie die niet meer nodig is met iframe demos
- **Bestanden**:
  - Created: `/docs-src/components/demos/input/` (11 demo files + index.html)
  - Modified: `/docs-src/components/input.html`
- **Reden**: Consistente demo presentatie door alle componenten, betere isolatie en organisatie

### Specifieke demo bestanden aangemaakt:
1. basic.html - Basis input velden met labels en helper text
2. sizes.html - Small, medium, en large input groottes
3. states.html - Normal, disabled, error, success, en read-only states
4. types.html - Verschillende HTML5 input types (text, email, password, number, date, etc.)
5. with-icons.html - Input velden met iconen links, rechts, of beide kanten
6. textarea.html - Multi-line text areas met character count en auto-resize
7. select.html - Dropdown selectie velden met groups en multiple selection
8. checkbox-radio.html - Checkbox en radio button controls
9. complete-form.html - Volledig formulier voorbeeld met alle input types
10. gradient-border.html - Input velden met geanimeerde gradient borders
11. index.html - Overzichtspagina voor alle input demos

## 20:09 - Icons Component: Demo System Implementation
- **Wat**: Icons component geconverteerd naar het moderne accordion/iframe demo systeem
- **Hoe**: 
  - 5 aparte demo HTML bestanden aangemaakt in `/docs-src/components/demos/icons/`
  - Verwijderd inline JavaScript voor icon generatie
  - Verwijderd oude demo-specifieke CSS styles
  - JavaScript toegevoegd om externe links naar accordion headers te verplaatsen
- **Bestanden**:
  - Created: `/docs-src/components/demos/icons/` (5 demo files + index.html)
  - Modified: `/docs-src/components/icons.html`
- **Reden**: Consistente demo presentatie, betere code isolatie, minder inline scripts

### Specifieke demo bestanden aangemaakt:
1. sizes.html - Hamburger icon in verschillende groottes
2. colors.html - Icon met verschillende kleuren
3. html-string.html - Icon generatie als HTML string
4. css-background.html - Icon als CSS background via Data URI
5. integration.html - Integratie met PM7 componenten
6. index.html - Overzichtspagina voor alle icon demos

## 19:48 - Dialog Component: Demo System Implementation
- **Wat**: Dialog component geconverteerd naar het moderne accordion/iframe demo systeem
- **Hoe**: 
  - 14 aparte demo HTML bestanden aangemaakt in `/docs-src/components/demos/dialog/`
  - Alle inline demos uit dialog.html verwijderd en vervangen door accordions met iframes
  - Index bestand toegevoegd voor overzicht van alle dialog demos
  - JavaScript toegevoegd om externe links automatisch naar accordion headers te verplaatsen
- **Bestanden**:
  - Created: `/docs-src/components/demos/dialog/` (14 demo files + index.html)
  - Modified: `/docs-src/components/dialog.html`
- **Reden**: Consistente demo presentatie door alle componenten, betere isolatie en organisatie

### Specifieke demo bestanden aangemaakt:
1. basic.html - Basis dialog met header, body en footer
2. sizes.html - Verschillende dialog groottes (sm, md, lg, xl, full)
3. alert-dialog.html - Waarschuwing en bevestiging dialogen
4. form-dialog.html - Formulier dialogen met validatie
5. scrollable-dialog.html - Dialogen met scrollbare content
6. confirmation-dialog.html - Bevestigingsdialogen voor destructieve acties
7. multi-step-dialog.html - Wizard-stijl dialogen met stappen
8. icon-dialog.html - Dialogen met prominente iconen
9. description-dialog.html - Dialogen met gedetailleerde beschrijvingen
10. loading-dialog.html - Verschillende laadstatus indicatoren
11. cookie-dialog.html - GDPR-compliant cookie toestemming banner
12. structure-dialog.html - Verschillende combinaties van sections
13. gradient-dialog.html - Dialogen met geanimeerde gradient borders
14. index.html - Overzichtspagina voor alle dialog demos

## 19:24 - Card Component: Demo System Implementation
- **Wat**: Card component geconverteerd naar het moderne accordion/iframe demo systeem
- **Hoe**: 
  - 9 aparte demo HTML bestanden aangemaakt in `/docs-src/components/demos/card/`
  - Alle inline demos uit card.html verwijderd en vervangen door accordions met iframes
  - JavaScript toegevoegd om externe links automatisch naar accordion headers te verplaatsen
- **Bestanden**:
  - Created: `/docs-src/components/demos/card/` (9 demo files)
  - Modified: `/docs-src/components/card.html`
- **Reden**: Consistente demo presentatie door alle componenten, betere demo organisatie

### Specifieke demo bestanden aangemaakt:
1. basic.html - Basis card
2. header-footer.html - Card met header en footer structuur
3. clickable.html - Interactieve cards (clickable en hoverable)
4. with-image.html - Cards met afbeeldingen
5. grid-layout.html - Grid layout systemen
6. nested-cards.html - Geneste cards
7. profile-card.html - Profiel card voorbeelden
8. with-dropdown.html - Card met dropdown menu
9. gradient-border.html - Gradient border varianten

## 19:13 - Callout Component: Demo System Implementation
- **Wat**: Callout component nu ook geconverteerd naar het moderne accordion/iframe demo systeem
- **Hoe**: 
  - 5 aparte demo HTML bestanden aangemaakt in `/docs-src/components/demos/callout/`
  - Alle inline demos uit callout.html verwijderd en vervangen door accordions met iframes
  - JavaScript toegevoegd om externe links automatisch naar accordion headers te verplaatsen
- **Bestanden**:
  - Created: `/docs-src/components/demos/callout/` (5 demo files)
  - Modified: `/docs-src/components/callout.html`
- **Reden**: Consistente demo presentatie door alle componenten, betere isolatie van demo code

### Specifieke demo bestanden aangemaakt:
1. variants.html - Alle 6 callout varianten (info, success, warning, error, tip, neutral)
2. sizes.html - Small, medium, en large size opties
3. complex-content.html - Rijke content met lists, code blocks, en links
4. modifiers.html - No-border, center, en pulse modifiers
5. ai-agent.html - AI-specifieke voorbeelden voor AI assistenten

## 18:54 - Accordion Component: Demo System Implementation
- **Wat**: Accordion component gebruikt nu ook het moderne accordion/iframe demo systeem
- **Hoe**: 
  - 11 aparte demo HTML bestanden aangemaakt in `/docs-src/components/demos/accordion/`
  - Alle inline demos uit accordion.html verwijderd en vervangen door accordions met iframes
  - JavaScript toegevoegd om externe links automatisch naar accordion headers te verplaatsen
- **Bestanden**:
  - Created: `/docs-src/components/demos/accordion/` (11 demo files)
  - Modified: `/docs-src/components/accordion.html`
- **Reden**: Consistente demo presentatie door alle componenten heen, betere organisatie van demo code

### Specifieke demo bestanden aangemaakt:
1. basic.html - Basis accordion demo
2. fixed-width.html - 800px en 1000px width varianten
3. multiple-open.html - Meerdere items tegelijk open
4. no-separator.html - Zonder scheidingslijn
5. flush.html - Minimaal design zonder borders
6. sizes.html - XS, SM, MD, LG size varianten
7. icon-positions.html - Icon positie varianten
8. width-variants.html - Breedte opties
9. text-alignment.html - Tekst uitlijning opties
10. height-variants.html - Hoogte limiet opties
11. gradient-border.html - Gradient border styling

## 18:18 - Button Component: Open Link in Header Implementation
- **Wat**: Dezelfde "Open link" implementatie als bij menu component toegepast op button component demo's
- **Hoe**: JavaScript toegevoegd om externe links automatisch van accordion content naar header te verplaatsen
- **Bestanden**: 
  - Modified: `/docs-src/components/button.html`
  - Removed duplicate script section
- **Reden**: Consistentie tussen components, betere UX met externe links altijd zichtbaar in header

## 15:50 - Menu Component: Accordion/iFrame Demo System Implementation
- **Wat**: Het menu component gebruikt nu hetzelfde moderne accordion/iframe demo systeem als het button component
- **Hoe**: 
  - 12 aparte demo HTML bestanden aangemaakt in `/docs-src/components/demos/menu/`
  - Alle inline demos uit menu.html verwijderd en vervangen door accordions met iframes
  - JavaScript toegevoegd om externe links automatisch naar accordion headers te verplaatsen
  - CSS aangepast voor correcte positionering en hover states van externe links
- **Bestanden**:
  - Created: `/docs-src/components/demos/menu/` (12 demo files)
  - Modified: `/docs-src/components/menu.html`
  - Modified: `/docs-src/styles/docs.css`
- **Reden**: Consistentie met button component, betere demo organisatie, en mogelijkheid om demos in nieuwe tabs te openen

### Specifieke wijzigingen:
1. **Demo bestanden aangemaakt**:
   - basic.html - Basis dropdown menu
   - positions.html - 8 positioneringsopties
   - icons.html - Menu met iconen
   - disabled.html - Uitgeschakelde menu items
   - icon-button.html - Icon-only triggers
   - navigation.html - Website navigatie patroon
   - hamburger.html - Mobiele navigatie
   - account.html - Gebruikersaccount dropdown
   - filter-sort.html - Filter/sorteer met checkboxes
   - context.html - Rechtermuisklik context menu
   - application-toolbar.html - Complexe toolbar
   - gradient-border.html - Gradient border menus

2. **Externe link positionering**:
   - Links verplaatst van accordion content naar header
   - Fixed positie behouden bij openen/sluiten accordion
   - Hover isolatie om te voorkomen dat titel blauw wordt

3. **Bug fixes**:
   - Externe link blijft nu in header positie bij accordion animaties
   - Accordion titel wordt niet meer blauw bij hover over externe link
   - Data attribute oplossing voor cross-browser compatibiliteit