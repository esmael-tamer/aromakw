#!/usr/bin/env node
/**
 * Post-build script to copy index.html to 404.html for SPA routing on GitHub Pages
 * This ensures that client-side routing works correctly when users navigate directly to a route
 * or refresh the page on a non-root path
 */

import { copyFileSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const distDir = join(__dirname, '..', 'dist');
const indexPath = join(distDir, 'index.html');
const notFoundPath = join(distDir, '404.html');

try {
  if (!existsSync(distDir)) {
    console.error(`Error: dist directory not found at ${distDir}`);
    process.exit(1);
  }

  if (!existsSync(indexPath)) {
    console.error(`Error: index.html not found at ${indexPath}`);
    process.exit(1);
  }

  // Copy index.html to 404.html
  copyFileSync(indexPath, notFoundPath);
  console.log('✓ Successfully copied index.html to 404.html for SPA routing');
} catch (error) {
  console.error('Error copying index.html to 404.html:', error.message);
  process.exit(1);
}
