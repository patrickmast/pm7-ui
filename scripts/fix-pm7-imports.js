#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob').sync;

// Find all component HTML files
const componentFiles = glob('docs-src/components/*.html', { 
  absolute: true,
  ignore: ['**/index.html', '**/theme-switch-fixed-demo.html']
});

console.log(`Found ${componentFiles.length} component files to check...`);

let fixedCount = 0;

componentFiles.forEach(file => {
  const content = fs.readFileSync(file, 'utf8');
  const fileName = path.basename(file);
  
  // Check if already has the PM7 import
  if (content.includes("import '/packages/core/src/scripts/index.js'")) {
    console.log(`✅ ${fileName} - already has PM7 import`);
    return;
  }
  
  // Look for the script module tag with other imports
  const scriptModuleRegex = /(<script type="module">\s*import\s+{[^}]+}\s+from\s+['"]\.\.\/scripts\/components\.js['"];)/;
  const match = content.match(scriptModuleRegex);
  
  if (match) {
    // Find the position after all the existing imports
    const importsEndRegex = /(import\s+.*?from\s+['"][^'"]+['"];\s*)+/;
    const importsMatch = content.match(importsEndRegex);
    
    if (importsMatch) {
      // Insert the PM7 import after the last import
      const insertPosition = importsMatch.index + importsMatch[0].length;
      const newContent = 
        content.slice(0, insertPosition) + 
        "    import '/packages/core/src/scripts/index.js';\n" +
        content.slice(insertPosition);
      
      fs.writeFileSync(file, newContent);
      console.log(`✅ ${fileName} - added PM7 import`);
      fixedCount++;
    } else {
      console.log(`⚠️  ${fileName} - couldn't find imports section`);
    }
  } else {
    console.log(`⚠️  ${fileName} - couldn't find script module tag`);
  }
});

console.log(`\nFixed ${fixedCount} files.`);