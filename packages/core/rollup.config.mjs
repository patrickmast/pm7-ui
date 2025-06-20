export default [
  // ES Module build
  {
    input: 'src/scripts/index.js',
    output: {
      file: 'dist/pm7.esm.js',
      format: 'es'
    }
  },
  // UMD build for direct browser usage
  {
    input: 'src/scripts/index.js',
    output: {
      file: 'dist/pm7.js',
      format: 'umd',
      name: 'PM7',
      globals: {}
    }
  }
];