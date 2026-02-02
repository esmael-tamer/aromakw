#!/usr/bin/env node

/**
 * Post-build script for GitHub Pages SPA routing support
 * 
 * Copies dist/index.html to dist/404.html to enable client-side routing
 * for deep links in GitHub Pages. When a user accesses a route like
 * /aromakw/admin or /aromakw/ar/admin directly, GitHub Pages will serve
 * the 404.html (which is a copy of index.html), and React Router will
 * handle the routing on the client side.
 */

import { copyFileSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const distPath = join(__dirname, '..', 'dist');
const indexPath = join(distPath, 'index.html');
const notFoundPath = join(distPath, '404.html');

try {
  if (!existsSync(indexPath)) {
    console.error('❌ Error: dist/index.html not found. Run "npm run build" first.');
    process.exit(1);
  }

  copyFileSync(indexPath, notFoundPath);
  console.log('✅ Successfully copied dist/index.html to dist/404.html');
  console.log('   This enables SPA routing for GitHub Pages deep links.');
} catch (error) {
  console.error('❌ Error copying file:', error.message);
  process.exit(1);
}
