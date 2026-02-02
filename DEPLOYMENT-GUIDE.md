# 🚀 دليل النشر | Deployment Guide

## مجموعة جايدن - Aroma Amore
### Comprehensive Deployment Guide for GitHub Pages

---

## 📋 نظرة عامة | Overview

This guide explains how to deploy the Aroma Amore website (including the Admin Dashboard) to GitHub Pages. The site is configured as a Single Page Application (SPA) with client-side routing.

**Live URL:** https://esmael-tamer.github.io/aromakw/

---

## 🔧 متطلبات النشر | Deployment Prerequisites

### 1. GitHub Pages Configuration

Ensure GitHub Pages is configured in the repository settings:

```
Repository → Settings → Pages
- Source: GitHub Actions
- Branch: Not required (using GitHub Actions)
```

### 2. GitHub Actions Workflow

The `.github/workflows/deploy.yml` workflow handles:
- ✅ Building the Vite application
- ✅ Creating 404.html for SPA routing
- ✅ Deploying to GitHub Pages

### 3. Application Configuration

The application is configured for GitHub Pages:
- ✅ `BrowserRouter` with `basename="/aromakw"` (src/App.tsx)
- ✅ `<base href="/aromakw/">` tag in index.html
- ✅ 404.html fallback for client-side routing

---

## 🌐 عناوين URL المتاحة | Available URLs

### الموقع الرئيسي | Main Site
- **الصفحة الرئيسية:** https://esmael-tamer.github.io/aromakw/
- **المنتجات (عربي):** https://esmael-tamer.github.io/aromakw/ar/products
- **المنتجات (English):** https://esmael-tamer.github.io/aromakw/en/products
- **السلة:** https://esmael-tamer.github.io/aromakw/ar/cart
- **الدفع:** https://esmael-tamer.github.io/aromakw/ar/checkout

### لوحة التحكم | Admin Dashboard
- **🇸🇦 عربي:** https://esmael-tamer.github.io/aromakw/ar/admin
- **🇬🇧 English:** https://esmael-tamer.github.io/aromakw/en/admin
- **الطلبات (عربي):** https://esmael-tamer.github.io/aromakw/ar/admin/orders
- **العملاء (عربي):** https://esmael-tamer.github.io/aromakw/ar/admin/customers
- **الطلبات (English):** https://esmael-tamer.github.io/aromakw/en/admin/orders
- **العملاء (English):** https://esmael-tamer.github.io/aromakw/en/admin/customers

**Note:** The default `/admin` route redirects to `/ar/admin`

---

## 🚀 كيفية النشر | How to Deploy

### طريقة 1: النشر التلقائي (الموصى بها) | Method 1: Automatic Deployment (Recommended)

**عند الدفع إلى main:**

1. Commit your changes:
```bash
git add .
git commit -m "Your commit message"
```

2. Push to the main branch:
```bash
git push origin main
```

3. GitHub Actions will automatically:
   - ✅ Build the application
   - ✅ Run tests (if configured)
   - ✅ Deploy to GitHub Pages
   - ✅ Make the site available at https://esmael-tamer.github.io/aromakw/

4. Check the deployment status:
   - Go to: https://github.com/esmael-tamer/aromakw/actions
   - Look for the "Deploy to GitHub Pages" workflow
   - Wait for the green checkmark ✅

---

### طريقة 2: النشر اليدوي | Method 2: Manual Deployment

**باستخدام gh-pages (optional method):**

1. Install gh-pages package (if not already installed):
```bash
npm install --save-dev gh-pages
```

2. Use the deployment script:
```bash
npm run deploy
```

This script:
- Builds the application
- Creates 404.html
- Deploys to the gh-pages branch
- Updates the live site

---

### طريقة 3: النشر من واجهة GitHub | Method 3: Manual Trigger via GitHub UI

1. Go to: https://github.com/esmael-tamer/aromakw/actions
2. Select "Deploy to GitHub Pages" workflow
3. Click "Run workflow"
4. Select the `main` branch
5. Click "Run workflow" button

---

## ✅ قائمة التحقق بعد النشر | Post-Deployment Checklist

After deployment, verify the following URLs work correctly:

### اختبار الموقع الرئيسي | Test Main Site
- [ ] Homepage loads: https://esmael-tamer.github.io/aromakw/
- [ ] Arabic products page: https://esmael-tamer.github.io/aromakw/ar/products
- [ ] English products page: https://esmael-tamer.github.io/aromakw/en/products
- [ ] Cart page works: https://esmael-tamer.github.io/aromakw/ar/cart
- [ ] Checkout page works: https://esmael-tamer.github.io/aromakw/ar/checkout

### اختبار لوحة التحكم | Test Admin Dashboard
- [ ] Arabic admin dashboard: https://esmael-tamer.github.io/aromakw/ar/admin
- [ ] English admin dashboard: https://esmael-tamer.github.io/aromakw/en/admin
- [ ] Default admin redirects to Arabic: https://esmael-tamer.github.io/aromakw/admin
- [ ] Orders page (AR): https://esmael-tamer.github.io/aromakw/ar/admin/orders
- [ ] Customers page (AR): https://esmael-tamer.github.io/aromakw/ar/admin/customers
- [ ] Orders page (EN): https://esmael-tamer.github.io/aromakw/en/admin/orders
- [ ] Customers page (EN): https://esmael-tamer.github.io/aromakw/en/admin/customers

### اختبار التوجيه | Test Routing
- [ ] Direct URL access works (e.g., refresh on /ar/admin/orders)
- [ ] Browser back/forward buttons work
- [ ] 404 pages redirect to the app correctly
- [ ] Language switching works properly

### اختبار الوظائف | Test Functionality
- [ ] Admin dashboard shows statistics
- [ ] Can view orders in orders page
- [ ] Can view customers in customers page
- [ ] Can change order status
- [ ] Can search/filter orders
- [ ] Language toggle works in admin dashboard

---

## 🔍 استكشاف الأخطاء | Troubleshooting

### المشكلة: الصفحة لا تظهر | Problem: Page Doesn't Load

**الحل:**
1. Clear browser cache (Ctrl+Shift+R or Cmd+Shift+R)
2. Check GitHub Actions workflow completed successfully
3. Wait 5-10 minutes for DNS propagation
4. Check the workflow logs: https://github.com/esmael-tamer/aromakw/actions

### المشكلة: 404 عند تحديث الصفحة | Problem: 404 on Page Refresh

**الحل:**
1. Verify 404.html exists in the deployed dist folder
2. Check that the GitHub Actions workflow copies index.html to 404.html
3. Clear browser cache and try again

### المشكلة: الأصول لا تحمل | Problem: Assets Don't Load

**الحل:**
1. Verify basename="/aromakw" is set in BrowserRouter (src/App.tsx)
2. Verify `<base href="/aromakw/">` tag exists in index.html
3. Check browser console for 404 errors on assets
4. Rebuild and redeploy

### المشكلة: لوحة التحكم لا تعمل | Problem: Admin Dashboard Not Working

**الحل:**
1. Verify you're accessing the correct URL with language prefix (/ar/admin or /en/admin)
2. Check that admin routes are defined in App.tsx
3. Check browser console for JavaScript errors
4. Verify all admin components are present in src/pages/admin/

---

## 📦 ملفات النشر الرئيسية | Key Deployment Files

### Configuration Files
- **`index.html`**: Main HTML file with `<base href="/aromakw/">` tag
- **`public/404.html`**: SPA routing fallback (redirects to index.html)
- **`src/App.tsx`**: React Router configuration with basename="/aromakw"
- **`.github/workflows/deploy.yml`**: GitHub Actions deployment workflow
- **`vite.config.ts`**: Vite build configuration

### Admin Dashboard Files
- **`src/pages/admin/AdminLayout.tsx`**: Admin layout with navigation
- **`src/pages/admin/DashboardPage.tsx`**: Main dashboard with statistics
- **`src/pages/admin/OrdersPage.tsx`**: Orders management page
- **`src/pages/admin/CustomersPage.tsx`**: Customers overview page
- **`src/components/admin/*.tsx`**: Admin UI components
- **`src/contexts/OrdersContext.tsx`**: Orders state management
- **`src/types/order.ts`**: Order type definitions
- **`src/types/customer.ts`**: Customer type definitions

---

## 🏗️ التطوير المحلي | Local Development

### البناء والمعاينة | Build and Preview

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build locally
npm run preview
```

### معاينة النسخة المحلية | Preview Local Build

After building, you can test the production build locally:

```bash
npm run build
npm run preview
```

Then visit: http://localhost:4173/aromakw/

**Note:** The local preview uses the same `/aromakw` base path as production.

---

## 🔐 الأمان | Security

### توصيات الأمان:
1. ✅ Never commit sensitive credentials
2. ✅ Use environment variables for API keys
3. ✅ Review GitHub Actions logs for sensitive data
4. ✅ Keep dependencies updated: `npm audit fix`
5. ✅ Use HTTPS for all external resources

### حالة الأمان الحالية:
- ✅ No hardcoded credentials in code
- ✅ Client-side only application (no server secrets)
- ✅ Uses localStorage for order data (client-side only)
- ⚠️ Admin dashboard has no authentication (add in future)

---

## 📝 ملاحظات إضافية | Additional Notes

### SPA Routing on GitHub Pages
GitHub Pages doesn't natively support SPA routing. Our solution:
1. The 404.html file serves as a fallback
2. It redirects to index.html
3. React Router handles the actual routing

### basename Configuration
The `/aromakw` basename is required because:
- Repository name is `aromakw`
- Site is served from `esmael-tamer.github.io/aromakw/`
- Not a custom domain (which would use `/` basename)

### Future Improvements
- [ ] Add authentication to admin dashboard
- [ ] Add backend API integration
- [ ] Add database for persistent storage
- [ ] Add automated tests for deployment
- [ ] Add performance monitoring
- [ ] Add error tracking (e.g., Sentry)

---

## 📞 الدعم | Support

### إذا واجهت مشاكل | If You Encounter Issues:

1. **Check workflow logs:**
   - https://github.com/esmael-tamer/aromakw/actions
   
2. **Review this guide:**
   - Verify all prerequisites are met
   
3. **Test locally first:**
   - `npm run build && npm run preview`
   
4. **Check GitHub Pages status:**
   - Repository → Settings → Pages
   
5. **Contact support:**
   - Create an issue: https://github.com/esmael-tamer/aromakw/issues

---

## 🎯 الحالة الحالية | Current Status

```
✅ Admin Dashboard: Merged and Ready
✅ GitHub Actions: Configured
✅ SPA Routing: Configured
✅ Base Path: Configured
✅ 404 Fallback: Configured
🚀 Status: Ready for Deployment
```

---

**آخر تحديث | Last Updated:** February 2, 2026

**الإصدار | Version:** 1.0.0

---

**✨ الموقع جاهز للنشر! | Site Ready for Deployment! ✨**
