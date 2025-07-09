# Changelog

All notable changes to this project will be documented in this file.

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