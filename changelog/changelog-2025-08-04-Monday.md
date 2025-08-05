# Changelog - 2025-08-04 Monday

## 21:15 - Menu README Enhanced with React Integration Guide
- **Wat**: React-specifieke documentatie toegevoegd aan Menu component
- **Hoe**: 
  - Complete "React Integration" sectie met PM7 event system uitleg
  - dangerouslySetInnerHTML gebruik voor menu items gedocumenteerd
  - Voorbeelden voor radio items, switches, en submenus
  - Waarschuwing over React onClick conflicts met PM7 event delegation
  - NEVER regel toegevoegd over React event handlers
- **Bestanden**: packages/core/src/components/menu/README.md
- **Reden**: Menu component is tweede meest gebruikte na buttons, miste kritieke React documentatie

## 20:10 - Dialog README Enhanced with React Integration Guide
- **Wat**: React-specifieke documentatie toegevoegd aan Dialog component
- **Hoe**: 
  - Complete "React Integration" sectie met event handling uitleg
  - Cruciaal: onclick vs onClick probleem gedocumenteerd
  - Werkend voorbeeld met dangerouslySetInnerHTML voor buttons
  - Waarschuwingen over React synthetic events vs PM7 event system
  - Cross-reference naar Framework Integration guide
- **Bestanden**: packages/core/src/components/dialog/README.md
- **Reden**: Uren debugging verspild aan dialog buttons in React - deze info hoort direct bij component docs

## 10:15 - CRITICAL Documentation Update: Version Requirements
- **Wat**: Cruciale documentatie toegevoegd over ALTIJD laatste versie gebruiken
- **Hoe**: 
  - README-AI-HowToUse.md: Nieuwe sectie "CRITICAL VERSION REQUIREMENT" met prominente waarschuwingen
  - README-Framework-Integration.md: Version check als EERSTE stap voor alle integraties
  - Real-world voorbeeld toegevoegd: dialog issue opgelost door update v1.1.4 → v2.7.1
- **Bestanden**: 
  - README-AI-HowToUse.md
  - README-Framework-Integration.md
- **Reden**: Uren debugging verspild aan outdated versie - dit moet voorkomen worden voor alle AI agents