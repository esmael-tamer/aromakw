# Deployment Guide for aromakw

This guide provides instructions for deploying the aromakw application to GitHub Pages and testing its functionality.

## GitHub Pages Deployment

### Prerequisites
- The repository must be configured to serve GitHub Pages from a specific branch (typically `main` or `gh-pages`)
- The project uses `/aromakw` as the base path to match the GitHub Pages URL structure

### Build and Deploy

1. **Build the project**:
   ```bash
   npm run build
   ```
   This will:
   - Build the application using Vite
   - Automatically run the postbuild script to copy `dist/index.html` to `dist/404.html`
   - The `404.html` file enables SPA routing on GitHub Pages by serving the app for unknown routes

2. **Deploy to GitHub Pages**:
   - Push the `dist` folder contents to the GitHub Pages branch
   - Or use GitHub Actions to automate deployment
   - Or configure GitHub Pages to build from the branch containing the built files

### SPA Routing Configuration

The application uses the following configuration for GitHub Pages compatibility:

- **Base Path**: Configured in `vite.config.ts` as `/aromakw/`
- **Environment Variable**: `VITE_BASENAME` can override the base path (defaults to `/aromakw`)
- **404 Handling**: The postbuild script copies `index.html` to `404.html` to enable client-side routing

## Testing the Admin Dashboard

After deployment, test the following admin dashboard routes to ensure they work correctly:

### Test Checklist

- [ ] **English Admin Dashboard** - Visit `https://[your-username].github.io/aromakw/en/admin`
  - Verify the dashboard loads without errors
  - Check that navigation works between admin pages
  - Test all admin functionality (Orders, Customers, etc.)

- [ ] **Arabic Admin Dashboard** - Visit `https://[your-username].github.io/aromakw/ar/admin`
  - Verify the dashboard loads in Arabic
  - Check that RTL (right-to-left) layout is correct
  - Test navigation and functionality

- [ ] **Default Admin Route** - Visit `https://[your-username].github.io/aromakw/admin`
  - Verify it redirects to `/ar/admin` (Arabic by default)

- [ ] **Admin Subroutes** - Test the following paths:
  - `/aromakw/en/admin/orders` - English orders page
  - `/aromakw/en/admin/customers` - English customers page
  - `/aromakw/ar/admin/orders` - Arabic orders page
  - `/aromakw/ar/admin/customers` - Arabic customers page

- [ ] **Direct URL Access** - Test accessing admin routes directly by typing the URL in the browser
  - This verifies that the 404.html fallback is working correctly
  - All routes should load properly without 404 errors

- [ ] **Browser Refresh** - While on an admin page, refresh the browser
  - The page should reload correctly without showing a 404 error
  - This verifies SPA routing is properly configured

### Common Issues

**Issue**: Admin routes show 404 errors
- **Solution**: Ensure `dist/404.html` was created during the build process
- **Solution**: Verify GitHub Pages is configured to serve from the correct branch

**Issue**: Base path is incorrect
- **Solution**: Check that `vite.config.ts` has `base: "/aromakw/"` set correctly
- **Solution**: Verify the `VITE_BASENAME` environment variable if overriding the default

**Issue**: Assets fail to load
- **Solution**: Ensure all asset paths are relative and not absolute
- **Solution**: Verify the base path configuration matches the GitHub Pages URL

## Local Development

To test the application locally with the same base path as production:

```bash
# Start development server
npm run dev

# Access the app at http://localhost:8080/aromakw
```

To test with a different base path:

```bash
# Set custom base path
VITE_BASENAME=/custom-path npm run dev
```

## GitHub Pages Source Branch Requirement

⚠️ **Important**: GitHub Pages must be configured to serve from the branch containing the built files:

1. Go to your repository settings on GitHub
2. Navigate to "Pages" in the left sidebar
3. Under "Source", select the branch that contains your `dist` folder (or the branch where you deploy)
4. Save the configuration
5. GitHub will provide the URL where your site is published

The site will be available at: `https://[your-username].github.io/aromakw/`

## Admin Dashboard Files

The admin dashboard is implemented in the following files:

- `src/pages/admin/AdminLayout.tsx` - Admin layout wrapper
- `src/pages/admin/DashboardPage.tsx` - Main dashboard page
- `src/pages/admin/OrdersPage.tsx` - Orders management page
- `src/pages/admin/CustomersPage.tsx` - Customers management page
- `src/components/admin/StatsCard.tsx` - Statistics card component
- `src/components/admin/OrdersTable.tsx` - Orders table component
- `src/components/admin/StatusBadge.tsx` - Status badge component
- `src/contexts/OrdersContext.tsx` - Orders state management context
- `src/types/order.ts` - Order type definitions
- `src/types/customer.ts` - Customer type definitions
- `src/i18n/ar.ts` - Arabic translations (includes admin translations)
