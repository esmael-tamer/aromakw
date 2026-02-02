#!/usr/bin/env node

/**
 * Post-build script to copy index.html to 404.html for GitHub Pages SPA routing
 * 
 * GitHub Pages serves 404.html for any route that doesn't match a file.
 * By copying index.html to 404.html, we ensure that direct navigation to routes
 * like /aromakw/ar/admin will load the SPA application correctly.
 * 
 * This is necessary because GitHub Pages doesn't natively support client-side routing.
 */

import { copyFileSync, existsSync } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const distDir = join(__dirname, '..', 'dist');
const indexPath = join(distDir, 'index.html');
const notFoundPath = join(distDir, '404.html');

try {
  if (!existsSync(indexPath)) {
    console.error('❌ Error: dist/index.html not found. Run build first.');
    process.exit(1);
  }

  copyFileSync(indexPath, notFoundPath);
  console.log('✅ Successfully copied dist/index.html to dist/404.html');
  console.log('   This enables GitHub Pages SPA routing for admin routes.');
} catch (error) {
  console.error('❌ Error copying file:', error.message);
  process.exit(1);
}
