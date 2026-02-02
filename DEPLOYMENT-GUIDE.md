# 📚 دليل النشر الشامل | Comprehensive Deployment Guide

## 🎯 نظرة عامة | Overview

هذا الدليل يشرح كيفية نشر موقع Aroma Amore على GitHub Pages مع دعم كامل لتوجيه SPA (Single Page Application) ولوحة التحكم.

This guide explains how to deploy the Aroma Amore site to GitHub Pages with full SPA routing support and admin dashboard access.

---

## 🔧 البناء والنشر | Build & Deploy

### الطريقة 1: النشر التلقائي (مستحسن) | Automatic Deployment (Recommended)

يتم النشر تلقائياً عند دفع التغييرات إلى الفرع `main`:

Deployment happens automatically when pushing changes to the `main` branch:

```bash
git push origin main
```

سيقوم GitHub Actions بـ:
- ✅ بناء المشروع
- ✅ تشغيل الاختبارات
- ✅ نسخ index.html إلى 404.html (لدعم توجيه SPA)
- ✅ نشر الموقع على GitHub Pages

GitHub Actions will:
- ✅ Build the project
- ✅ Run tests
- ✅ Copy index.html to 404.html (for SPA routing support)
- ✅ Deploy to GitHub Pages

---

### الطريقة 2: النشر اليدوي | Manual Deployment

#### الخطوة 1: البناء للإنتاج | Step 1: Build for Production

```bash
# بناء المشروع ونسخ 404.html تلقائياً
# Build project and copy 404.html automatically
npm run build:prod
```

أو يمكنك تشغيل الأمرين بشكل منفصل:

Or run the commands separately:

```bash
npm run build
npm run postbuild
```

#### الخطوة 2: النشر باستخدام gh-pages | Step 2: Deploy with gh-pages

أولاً، قم بتثبيت gh-pages (مرة واحدة فقط):

First, install gh-pages (one time only):

```bash
npm install --save-dev gh-pages
```

ثم انشر:

Then deploy:

```bash
npm run deploy
```

---

## 🌐 الروابط بعد النشر | URLs After Deployment

### الموقع الرئيسي | Main Site
- 🏠 الصفحة الرئيسية: https://esmael-tamer.github.io/aromakw/
- 🛍️ المتجر (عربي): https://esmael-tamer.github.io/aromakw/ar/products
- 🛍️ Shop (English): https://esmael-tamer.github.io/aromakw/en/products

### لوحة التحكم | Admin Dashboard
- 🔐 لوحة التحكم (عربي): https://esmael-tamer.github.io/aromakw/ar/admin
- 🔐 Admin Dashboard (English): https://esmael-tamer.github.io/aromakw/en/admin
- 📊 إدارة الطلبات: https://esmael-tamer.github.io/aromakw/ar/admin/orders
- 👥 إدارة العملاء: https://esmael-tamer.github.io/aromakw/ar/admin/customers

---

## ✅ اختبار يدوي | Manual Testing

بعد النشر، تأكد من اختبار الروابط التالية:

After deployment, make sure to test the following URLs:

### اختبار الصفحات الأساسية | Basic Pages Test
- [ ] الصفحة الرئيسية / Home: `/aromakw/`
- [ ] المتجر (عربي) / Shop (Arabic): `/aromakw/ar/products`
- [ ] المتجر (إنجليزي) / Shop (English): `/aromakw/en/products`
- [ ] عربة التسوق / Cart: `/aromakw/ar/cart`

### اختبار لوحة التحكم | Admin Dashboard Test
- [ ] لوحة التحكم (عربي): `/aromakw/ar/admin`
- [ ] Admin Dashboard (English): `/aromakw/en/admin`
- [ ] صفحة الطلبات / Orders: `/aromakw/ar/admin/orders`
- [ ] صفحة العملاء / Customers: `/aromakw/ar/admin/customers`
- [ ] التنقل بين الصفحات / Navigation between pages
- [ ] الرجوع للخلف / Back button functionality

### اختبار التنقل المباشر | Direct Navigation Test
**مهم جداً:** يجب اختبار فتح الروابط مباشرة (تحديث الصفحة F5 أو نسخ الرابط في نافذة جديدة)

**Very Important:** Test opening URLs directly (refresh page F5 or copy URL in new window)

- [ ] فتح `/aromakw/ar/admin` مباشرة (يجب أن يعمل ✅)
- [ ] فتح `/aromakw/en/admin` مباشرة (يجب أن يعمل ✅)
- [ ] فتح `/aromakw/ar/admin/orders` مباشرة (يجب أن يعمل ✅)
- [ ] تحديث الصفحة (F5) في أي صفحة (يجب أن تبقى في نفس الصفحة ✅)

---

## 🔍 استكشاف الأخطاء | Troubleshooting

### المشكلة: خطأ 404 عند فتح الروابط مباشرة
**Problem: 404 error when opening URLs directly**

**الحل:**
تأكد من أن ملف `dist/404.html` موجود بعد البناء.

**Solution:**
Make sure `dist/404.html` exists after build.

```bash
npm run build:prod
ls -la dist/404.html  # يجب أن يظهر الملف | File should exist
```

---

### المشكلة: الصفحات تعمل بعد البناء المحلي لكن لا تعمل على GitHub Pages
**Problem: Pages work in local build but not on GitHub Pages**

**الأسباب المحتملة:**
1. لم يتم نسخ 404.html (استخدم `npm run build:prod`)
2. إعدادات GitHub Pages غير صحيحة (يجب أن تكون من فرع gh-pages)

**Possible Causes:**
1. 404.html was not copied (use `npm run build:prod`)
2. GitHub Pages settings incorrect (must be from gh-pages branch)

**الحل:**
1. تحقق من GitHub Pages settings في repository
2. تأكد من أن المصدر هو `gh-pages` branch
3. انتظر بضع دقائق بعد النشر (قد يستغرق وقتاً)

**Solution:**
1. Check GitHub Pages settings in repository
2. Make sure source is `gh-pages` branch
3. Wait a few minutes after deployment (may take time)

---

### المشكلة: لوحة التحكم لا تظهر أو تظهر فارغة
**Problem: Admin dashboard doesn't show or appears empty**

**الحل:**
1. تأكد من وجود ملفات لوحة التحكم:

**Solution:**
1. Make sure admin files exist:

```bash
ls -la src/pages/admin/
ls -la src/components/admin/
```

2. افتح Console في المتصفح (F12) وابحث عن أخطاء
3. تأكد من أن التوجيه في App.tsx يتضمن مسارات لوحة التحكم

2. Open Console in browser (F12) and look for errors
3. Make sure routing in App.tsx includes admin routes

---

## 📝 البناء المحلي للاختبار | Local Build Testing

للاختبار المحلي قبل النشر:

For local testing before deployment:

```bash
# بناء المشروع
# Build the project
npm run build:prod

# معاينة البناء محلياً
# Preview build locally
npm run preview
```

ثم افتح المتصفح على:
Then open browser at: http://localhost:4173/aromakw/

**ملاحظة:** خادم المعاينة يحترم basename المحدد في vite.config.ts
**Note:** The preview server respects the basename configured in vite.config.ts

---

## 🎯 الأوامر المفيدة | Useful Commands

```bash
# تطوير محلي | Local development
npm run dev

# بناء للإنتاج مع 404.html | Production build with 404.html
npm run build:prod

# معاينة البناء | Preview build
npm run preview

# نشر إلى GitHub Pages | Deploy to GitHub Pages
npm run deploy

# تشغيل الاختبارات | Run tests
npm run test

# فحص الكود | Lint code
npm run lint
```

---

## 🚀 تحديثات مستقبلية | Future Updates

عند تحديث الكود:

When updating code:

1. اعمل التغييرات المطلوبة | Make your changes
2. اختبر محلياً | Test locally: `npm run dev`
3. ابنِ واختبر | Build and test: `npm run build:prod && npm run preview`
4. ادفع إلى main | Push to main: `git push origin main`
5. أو انشر مباشرة | Or deploy directly: `npm run deploy`

---

## 📞 الدعم | Support

إذا واجهت أي مشاكل:

If you encounter any issues:

1. راجع قسم استكشاف الأخطاء أعلاه
2. تحقق من سجلات GitHub Actions
3. افتح Console المتصفح (F12) لرؤية الأخطاء
4. تأكد من تحديث المتصفح (Ctrl+F5)

1. Review the Troubleshooting section above
2. Check GitHub Actions logs
3. Open browser Console (F12) to see errors
4. Make sure to hard refresh browser (Ctrl+F5)

---

## ✨ المميزات التقنية | Technical Features

### توجيه SPA | SPA Routing
- ✅ نسخ تلقائي لـ index.html إلى 404.html
- ✅ دعم كامل للتنقل المباشر لأي صفحة
- ✅ يعمل مع React Router

### البيئات | Environments
- ✅ `.env.production` للإنتاج
- ✅ `VITE_BASENAME=/aromakw` قابل للتعديل
- ✅ يدعم بيئات نشر مختلفة

### الأمان | Security
- ✅ التطبيق يعمل من مسار فرعي (`/aromakw`)
- ✅ جميع المسارات النسبية صحيحة
- ✅ لا توجد مسارات مطلقة ثابتة

---

**✨ جاهز للنشر! | Ready to Deploy! ✨**
