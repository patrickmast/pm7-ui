#!/usr/bin/env node

/**
 * Test Summary Runner with Dev Server
 * Runs pre-deployment tests with automatic dev server management
 */

const { spawn, execSync } = require('child_process');
const chalk = require('chalk');

// ANSI escape codes for colors (if chalk is not available)
const colors = {
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m',
  reset: '\x1b[0m'
};

function colorize(text, color) {
  if (typeof chalk !== 'undefined') {
    return chalk[color](text);
  }
  return `${colors[color]}${text}${colors.reset}`;
}

function runCommand(command, description) {
  console.log(`\n${colorize('►', 'blue')} ${description}...`);
  try {
    const output = execSync(command, { encoding: 'utf8', stdio: 'pipe' });
    console.log(colorize('✓', 'green'), description, colorize('PASSED', 'green'));
    return { success: true, output };
  } catch (error) {
    console.log(colorize('✗', 'red'), description, colorize('FAILED', 'red'));
    if (error.stdout) {
      console.log(error.stdout);
    }
    if (error.stderr) {
      console.error(error.stderr);
    }
    return { success: false, error };
  }
}

function startDevServer() {
  console.log(colorize('\n🚀 Starting development server...', 'cyan'));
  const devServer = spawn('npm', ['run', 'dev'], {
    detached: false,
    stdio: 'pipe'
  });

  return new Promise((resolve) => {
    devServer.stdout.on('data', (data) => {
      const output = data.toString();
      if (output.includes('Local:') && output.includes('5173')) {
        console.log(colorize('✓', 'green'), 'Development server started on http://localhost:5173');
        resolve(devServer);
      }
    });

    devServer.stderr.on('data', (data) => {
      console.error('Dev server error:', data.toString());
    });
  });
}

async function main() {
  console.log(colorize('\n🚀 PM7-UI Pre-Deployment Test Summary\n', 'blue'));
  console.log('This script runs all critical tests before deployment.');
  console.log('━'.repeat(50));

  let devServer;
  
  try {
    // Start dev server for tests that need it
    devServer = await startDevServer();
    
    // Wait a bit for server to be fully ready
    await new Promise(resolve => setTimeout(resolve, 2000));

    const tests = [
      {
        name: 'Linting',
        command: 'npm run lint',
        critical: true
      },
      {
        name: 'Build Packages',
        command: 'npm run build:packages',
        critical: true
      },
      {
        name: 'Quick Smoke Tests',
        command: 'npm run test:pre-deploy:quick',
        critical: true
      },
      {
        name: 'Full Pre-Deployment Tests',
        command: 'npm run test:pre-deploy',
        critical: false
      }
    ];

    const results = [];
    let criticalFailure = false;

    for (const test of tests) {
      const result = runCommand(test.command, test.name);
      results.push({ ...test, ...result });
      
      if (!result.success && test.critical) {
        criticalFailure = true;
      }
    }

    // Summary
    console.log('\n' + '━'.repeat(50));
    console.log(colorize('\n📊 Test Summary:', 'blue'));
    
    const passed = results.filter(r => r.success).length;
    const failed = results.filter(r => !r.success).length;
    
    console.log(`  Total Tests: ${results.length}`);
    console.log(`  ${colorize('Passed:', 'green')} ${passed}`);
    console.log(`  ${colorize('Failed:', 'red')} ${failed}`);
    
    // Show warnings/errors count from linting
    const lintResult = results.find(r => r.name === 'Linting');
    if (lintResult && lintResult.output) {
      const warningMatch = lintResult.output.match(/(\d+)\s+warning/);
      const errorMatch = lintResult.output.match(/(\d+)\s+error/);
      if (warningMatch || errorMatch) {
        console.log(`  ${colorize('Lint:', 'yellow')} ${errorMatch ? errorMatch[1] : '0'} errors, ${warningMatch ? warningMatch[1] : '0'} warnings`);
      }
    }
    
    if (criticalFailure) {
      console.log(colorize('\n❌ CRITICAL TESTS FAILED - DO NOT DEPLOY!', 'red'));
      console.log('\nFailed tests:');
      results.filter(r => !r.success).forEach(r => {
        console.log(`  - ${r.name} ${r.critical ? '(CRITICAL)' : ''}`);
      });
      process.exit(1);
    } else if (failed > 0) {
      console.log(colorize('\n⚠️  Some non-critical tests failed', 'yellow'));
      console.log('Review the failures above and decide if deployment should proceed.');
      process.exit(0);
    } else {
      console.log(colorize('\n✅ All tests passed! Ready for deployment.', 'green'));
      console.log('\nNext steps:');
      console.log('1. Review the manual checklist: pre-deploy-checklist.md');
      console.log('2. Build for production: npm run build');
      console.log('3. Deploy to Vercel!');
      process.exit(0);
    }
  } finally {
    // Clean up dev server
    if (devServer) {
      console.log(colorize('\n🛑 Stopping development server...', 'cyan'));
      devServer.kill('SIGTERM');
    }
  }
}

// Check if we're running directly
if (require.main === module) {
  main().catch(error => {
    console.error(colorize('\n💥 Unexpected error:', 'red'), error);
    process.exit(1);
  });
}

module.exports = { runCommand, main };