module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  rules: {
    // TypeScript specific rules
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/no-unused-vars': ['warn', { 
      argsIgnorePattern: '^_',
      varsIgnorePattern: '^_' 
    }],
    '@typescript-eslint/no-var-requires': 'off', // Allow require statements
    
    // General JavaScript rules
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'no-debugger': 'error',
    'no-unused-vars': 'off', // Handled by TypeScript plugin
    
    // Code quality
    'eqeqeq': ['error', 'always'],
    'curly': 'off', // Turn off curly brace requirements for now
    'prefer-const': 'warn',
    'no-var': 'error',
    'no-case-declarations': 'off', // Allow lexical declarations in case blocks
  },
  overrides: [
    {
      // Test files
      files: ['**/*.test.js', '**/*.spec.js', 'tests/**/*.js'],
      env: {
        jest: true,
      },
    },
    {
      // Documentation site files
      files: ['docs-src/**/*.js'],
      rules: {
        'no-console': 'off',
      },
    },
    {
      // Build scripts
      files: ['scripts/**/*.js', '*.config.js', '*.config.mjs'],
      rules: {
        'no-console': 'off',
      },
    },
  ],
  ignorePatterns: [
    'node_modules/',
    'dist/',
    'build/',
    'coverage/',
    '*.min.js',
    'docs/',
    'packages/*/dist/',
  ],
};