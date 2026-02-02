#!/usr/bin/env node

/**
 * Post-build script for GitHub Pages SPA routing
 * 
 * This script copies dist/index.html to dist/404.html after the build.
 * GitHub Pages serves 404.html for any route that doesn't match a file,
 * allowing the React Router to handle all routes client-side.
 * 
 * Run this automatically after build:
 *   npm run build && npm run postbuild
 * 
 * Or use the combined command:
 *   npm run build:prod
 */

import { copyFileSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const distDir = join(__dirname, '../dist');
const indexPath = join(distDir, 'index.html');
const notFoundPath = join(distDir, '404.html');

try {
  if (!existsSync(indexPath)) {
    console.error('❌ Error: dist/index.html not found. Did you run "npm run build"?');
    process.exit(1);
  }

  copyFileSync(indexPath, notFoundPath);
  console.log('✅ Successfully copied index.html to 404.html for GitHub Pages SPA routing');
  console.log(`   ${indexPath} → ${notFoundPath}`);
} catch (error) {
  console.error('❌ Error copying index.html to 404.html:', error.message);
  process.exit(1);
}
