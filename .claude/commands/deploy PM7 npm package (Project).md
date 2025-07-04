# Deploy pm7-ui Packages

  Deploy de @pm7/core en @pm7/react packages naar de npm registry.

  ## Wat dit commando doet:
  1. Navigeert naar de pm7-ui project directory
  2. Voert linting uit om code kwaliteit te waarborgen
  3. Bouwt alle packages (core en react)
  4. Publiceert beide packages naar npm registry
  5. Commit en push eventuele versie wijzigingen

  ## Gebruik:
  /deploy pm7-ui packages

  ## Commando's om uit te voeren:
  ```bash
  # Navigeer naar pm7-ui project directory
  cd /Users/patrickmast/Dev/pm7-ui

  # Voer linting uit
  npm run lint

  # Bouw alle packages
  npm run build:packages

  # Publiceer @pm7/core package
  cd packages/core
  npm version patch  # of minor/major afhankelijk van wijzigingen
  npm publish --access public
  cd ../..

  # Publiceer @pm7/react package
  cd packages/react
  npm version patch  # of minor/major afhankelijk van wijzigingen
  npm publish --access public
  cd ../..

  # Commit en push versie wijzigingen
  git add .
  git commit -m "chore: bump package versions"
  git push origin main
  git push --tags

  Vereisten:

  - Moet ingelogd zijn op npm: npm login
  - Moet publish rechten hebben voor @pm7/core en @pm7/react packages
  - Alle wijzigingen moeten gecommit zijn voordat versioning gebeurt
  - Packages moeten succesvol bouwen zonder fouten

  Versie Bumping Richtlijnen:

  - patch (1.0.1 → 1.0.2): Bug fixes, kleine verbeteringen, geen breaking changes
  - minor (1.0.1 → 1.1.0): Nieuwe features, nieuwe componenten, backwards compatible
  - major (1.0.1 → 2.0.0): Breaking changes, API wijzigingen, grote herstructurering

  Verwachte output:

  - Bijgewerkte versies in package.json files
  - Gebouwde libraries in dist/ directories
  - Packages gepubliceerd naar npm registry
  - Git commits en tags aangemaakt en gepusht
  - Packages beschikbaar voor installatie:
    - npm install @pm7/core@latest
    - npm install @pm7/react@latest

  Verificatie:

  Na publicatie, verifieer dat de packages beschikbaar zijn:
  npm view @pm7/core version
  npm view @pm7/react version