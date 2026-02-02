#!/usr/bin/env node

/**
 * Post-build script to copy index.html to 404.html for GitHub Pages SPA routing.
 * GitHub Pages serves 404.html for unknown routes, enabling client-side routing.
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
    console.error('❌ Error: dist/index.html not found. Build the project first.');
    process.exit(1);
  }

  copyFileSync(indexPath, notFoundPath);
  console.log('✅ Successfully copied dist/index.html to dist/404.html');
} catch (error) {
  console.error('❌ Error copying file:', error.message);
  process.exit(1);
}
