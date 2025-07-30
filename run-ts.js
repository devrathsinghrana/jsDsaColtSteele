#!/usr/bin/env node

/**
 * Script to run any TypeScript file using ts-node
 * Usage: node run-ts.js <path-to-ts-file>
 * Example: node run-ts.js src/algorithms/sorting.ts
 */

const { exec } = require('child_process');
const path = require('path');

// Get the TypeScript file path from command line arguments
const tsFile = process.argv[2];

if (!tsFile) {
  console.error('❌ Error: Please provide a TypeScript file to run');
  console.log('Usage: node run-ts.js <path-to-ts-file>');
  console.log('Example: node run-ts.js src/algorithms/sorting.ts');
  process.exit(1);
}

// Resolve the full path
const fullPath = path.resolve(tsFile);

console.log(`🚀 Running TypeScript file: ${tsFile}`);
console.log('─'.repeat(50));

// Execute the TypeScript file using ts-node
exec(`npx ts-node "${fullPath}"`, (error, stdout, stderr) => {
  if (error) {
    console.error(`❌ Execution error: ${error.message}`);
    return;
  }
  
  if (stderr) {
    console.error(`⚠️  Warning: ${stderr}`);
  }
  
  if (stdout) {
    console.log(stdout);
  }
  
  console.log('─'.repeat(50));
  console.log('✅ Execution completed');
});
