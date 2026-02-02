# Deployment Guide for Aromakw

This guide covers deploying the Aromakw e-commerce application to GitHub Pages, including the admin dashboard.

## Overview

The application is configured to deploy to GitHub Pages at: `https://esmael-tamer.github.io/aromakw/`

## Automatic Deployment

The repository is configured with GitHub Actions to automatically deploy to GitHub Pages on every push to the `main` branch.

### Workflow Details

- **Workflow file**: `.github/workflows/deploy.yml`
- **Trigger**: Push to `main` branch or manual workflow dispatch
- **Build**: Runs `npm install` and `npm run build`
- **Post-build**: Automatically copies `index.html` to `404.html` for SPA routing support
- **Deploy target**: GitHub Pages

## Manual Deployment

To manually deploy the application:

```bash
# Install dependencies
npm install

# Build for production
npm run build

# Deploy to GitHub Pages (using gh-pages package)
npm run deploy
```

## SPA Routing Configuration

The application uses React Router with client-side routing. To ensure all routes work correctly on GitHub Pages:

1. **Base path**: Set to `/aromakw` (repository name) in production
   - Configured in `.env.production` as `VITE_BASENAME=/aromakw`
   - Read by App.tsx using `import.meta.env.VITE_BASENAME`

2. **404 handling**: GitHub Pages serves `404.html` for unknown routes
   - The build process copies `index.html` to `404.html` 
   - This allows client-side routing to handle all paths
   - Script: `scripts/postbuild-copy-404.js`

## Admin Dashboard

The admin dashboard is accessible at the following URLs:

### Production URLs
- **Arabic Admin**: `https://esmael-tamer.github.io/aromakw/ar/admin`
- **English Admin**: `https://esmael-tamer.github.io/aromakw/en/admin`
- **Default Admin** (redirects to Arabic): `https://esmael-tamer.github.io/aromakw/admin`

### Admin Features
- **Dashboard**: Overview of orders, revenue, and customer statistics
- **Orders Management**: View and manage customer orders
- **Customer Management**: View customer information and order history

### Local Development
To test the admin dashboard locally:

```bash
# Start development server
npm run dev

# Access admin dashboard at:
# - http://localhost:5173/ar/admin (Arabic)
# - http://localhost:5173/en/admin (English)
# - http://localhost:5173/admin (redirects to Arabic)
```

### Production Testing
After deployment, verify the admin dashboard:

1. Visit `https://esmael-tamer.github.io/aromakw/admin`
2. Should redirect to Arabic admin dashboard
3. Test navigation between Orders and Customers pages
4. Verify all admin routes work with direct URL access (SPA routing)
5. Test language switching between Arabic and English admin pages

## Environment Variables

### Production (.env.production)
```
VITE_BASENAME=/aromakw
```

### Development (.env.development - optional)
For local development with custom basename:
```
VITE_BASENAME=
```
Leave empty or omit for root path in development.

## Troubleshooting

### Admin Routes Return 404
- Ensure `404.html` is present in the deployed `dist` folder
- Verify the postbuild script ran successfully in the build logs
- Check that GitHub Pages is serving from the correct branch/folder

### Assets Not Loading
- Confirm `VITE_BASENAME=/aromakw` is set in `.env.production`
- Verify assets use relative paths or paths with the basename prefix

### Deployment Fails
- Check GitHub Actions workflow logs for errors
- Ensure GitHub Pages is enabled in repository settings
- Verify Pages is configured to deploy from GitHub Actions

## Repository Settings

Ensure the following settings are configured in your GitHub repository:

1. **Settings → Pages**
   - Source: Deploy from a branch → GitHub Actions
   - Or: Source: Deploy from a branch → gh-pages branch (if using gh-pages package)

2. **Workflow Permissions** (Settings → Actions → General)
   - Workflow permissions: Read and write permissions
   - Allow GitHub Actions to create and approve pull requests: Enabled

## Notes

- The admin dashboard was merged from the `copilot/create-admin-dashboard` branch
- All routes support both Arabic (`/ar/*`) and English (`/en/*`) versions
- The landing page remains at the root path (`/`)
- Static pages (about, privacy, terms, contact) are available at root level
