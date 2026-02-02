# 🚀 دليل النشر الشامل | Comprehensive Deployment Guide

> **دليل كامل لنشر موقع Aroma Amore على GitHub Pages**
> 
> **Complete guide for deploying Aroma Amore website to GitHub Pages**

---

## 📋 جدول المحتويات | Table of Contents

1. [متطلبات النشر](#متطلبات-النشر--deployment-prerequisites)
2. [إعداد GitHub Pages](#إعداد-github-pages--github-pages-setup)
3. [طرق النشر](#طرق-النشر--deployment-methods)
4. [اختبار الموقع بعد النشر](#اختبار-الموقع-بعد-النشر--testing-after-deployment)
5. [حل المشاكل الشائعة](#حل-المشاكل-الشائعة--troubleshooting)
6. [الوصول إلى لوحة التحكم](#الوصول-إلى-لوحة-التحكم--accessing-admin-dashboard)

---

## 📌 متطلبات النشر | Deployment Prerequisites

### البرامج المطلوبة | Required Software:
- ✅ Node.js (v18 أو أحدث | v18 or newer)
- ✅ npm أو yarn أو bun
- ✅ Git

### الصلاحيات المطلوبة | Required Permissions:
- ✅ Write access للمستودع | Write access to repository
- ✅ صلاحيات GitHub Pages | GitHub Pages permissions

---

## 🔧 إعداد GitHub Pages | GitHub Pages Setup

### الخطوة 1: تفعيل GitHub Pages

1. انتقل إلى إعدادات المستودع | Go to repository **Settings**
2. اختر **Pages** من القائمة الجانبية | Select **Pages** from sidebar
3. في **Build and deployment**:
   - **Source**: اختر `GitHub Actions` | Select `GitHub Actions`
4. احفظ التغييرات | Save changes

### الخطوة 2: التحقق من Workflow

تأكد من وجود ملف `.github/workflows/deploy.yml` وأنه يحتوي على:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: ["main"]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write
```

✅ **هذا الملف موجود بالفعل في المستودع**
✅ **This file already exists in the repository**

---

## 🚀 طرق النشر | Deployment Methods

### الطريقة 1: النشر التلقائي (موصى به) | Automatic Deployment (Recommended)

عند دفع التغييرات إلى فرع `main`:

```bash
# تأكد أنك على الفرع الصحيح
git checkout main

# دفع التغييرات
git push origin main
```

سيتم تلقائياً:
1. ✅ بناء المشروع (`npm run build`)
2. ✅ نسخ `index.html` إلى `404.html` (للتوجيه الصحيح)
3. ✅ رفع الملفات إلى GitHub Pages
4. ✅ نشر الموقع

**راقب سير العمل:**
- انتقل إلى تبويب **Actions** في GitHub
- تحقق من نجاح الـ workflow

### الطريقة 2: النشر اليدوي باستخدام gh-pages | Manual Deployment with gh-pages

```bash
# تثبيت gh-pages (إذا لم يكن مثبتاً)
npm install

# بناء ونشر
npm run deploy
```

هذا الأمر سيقوم بـ:
1. بناء المشروع
2. نشره على فرع `gh-pages`

**ملاحظة:** تأكد من تغيير مصدر GitHub Pages إلى فرع `gh-pages` إذا استخدمت هذه الطريقة.

### الطريقة 3: النشر اليدوي من Actions | Manual Deployment from Actions

1. انتقل إلى **Actions** في GitHub
2. اختر workflow "Deploy to GitHub Pages"
3. انقر على **Run workflow**
4. اختر الفرع `main`
5. انقر **Run workflow**

---

## 📝 البناء المحلي | Local Build

للتحقق من البناء قبل النشر:

```bash
# تثبيت التبعيات
npm install

# بناء المشروع
npm run build

# معاينة البناء
npm run preview
```

سيتم إنشاء مجلد `dist` يحتوي على:
- ✅ جميع ملفات الموقع
- ✅ `index.html` (الصفحة الرئيسية)
- ✅ `404.html` (نسخة من index.html للتوجيه)

---

## 🧪 اختبار الموقع بعد النشر | Testing After Deployment

### الرابط الرئيسي | Main URL
```
https://esmael-tamer.github.io/aromakw/
```

### قائمة الفحص الشاملة | Comprehensive Checklist

#### 1. الصفحات العامة | Public Pages
- [ ] الصفحة الرئيسية: `/`
- [ ] صفحة "من نحن": `/about`
- [ ] سياسة الخصوصية: `/policy`
- [ ] الشروط والأحكام: `/terms`
- [ ] تتبع الطلب: `/lookup`
- [ ] اتصل بنا: `/contact`

#### 2. صفحات المتجر - العربية | Shop Pages - Arabic
- [ ] قائمة المنتجات: `/ar/products`
- [ ] تفاصيل المنتج: `/ar/products/jaiden-collection`
- [ ] سلة التسوق: `/ar/cart`
- [ ] إتمام الطلب: `/ar/checkout`

#### 3. صفحات المتجر - الإنجليزية | Shop Pages - English
- [ ] قائمة المنتجات: `/en/products`
- [ ] تفاصيل المنتج: `/en/products/jaiden-collection`
- [ ] سلة التسوق: `/en/cart`
- [ ] إتمام الطلب: `/en/checkout`

#### 4. لوحة التحكم - العربية | Admin Dashboard - Arabic
- [ ] لوحة التحكم الرئيسية: `/ar/admin`
  - ✓ عرض الإحصائيات (إجمالي الطلبات، الطلبات الجديدة، العملاء، المبيعات)
  - ✓ جدول الطلبات الأخيرة
  - ✓ تغيير حالة الطلب
- [ ] صفحة الطلبات: `/ar/admin/orders`
  - ✓ قائمة جميع الطلبات
  - ✓ فلترة حسب الحالة
  - ✓ بحث بالاسم/الهاتف
  - ✓ عرض تفاصيل الطلب
- [ ] صفحة العملاء: `/ar/admin/customers`
  - ✓ قائمة العملاء
  - ✓ عدد طلبات كل عميل
  - ✓ إجمالي المشتريات

#### 5. لوحة التحكم - الإنجليزية | Admin Dashboard - English
- [ ] لوحة التحكم الرئيسية: `/en/admin`
- [ ] صفحة الطلبات: `/en/admin/orders`
- [ ] صفحة العملاء: `/en/admin/customers`

#### 6. التوجيه الافتراضي | Default Redirects
- [ ] `/admin` → يعيد التوجيه إلى `/ar/admin`
- [ ] `/shop` → يعيد التوجيه إلى `/shop/products`
- [ ] `/ar` → يعيد التوجيه إلى `/ar/products`
- [ ] `/en` → يعيد التوجيه إلى `/en/products`

#### 7. اختبارات Deep Linking
اختبر الوصول المباشر للصفحات (انسخ الرابط في نافذة جديدة):
- [ ] الوصول المباشر إلى: `https://esmael-tamer.github.io/aromakw/ar/admin`
- [ ] الوصول المباشر إلى: `https://esmael-tamer.github.io/aromakw/en/admin`
- [ ] الوصول المباشر إلى: `https://esmael-tamer.github.io/aromakw/admin`
- [ ] الوصول المباشر إلى: `https://esmael-tamer.github.io/aromakw/ar/admin/orders`
- [ ] الوصول المباشر إلى: `https://esmael-tamer.github.io/aromakw/en/admin/customers`

**ملاحظة:** إذا فشل Deep Linking، تحقق من وجود `404.html` في مجلد `dist`.

#### 8. اختبارات الأداء | Performance Tests
- [ ] سرعة تحميل الصفحة < 3 ثواني
- [ ] حجم الحزمة معقول
- [ ] لا أخطاء في Console

#### 9. اختبارات التوافق | Compatibility Tests
- [ ] Chrome
- [ ] Firefox
- [ ] Safari
- [ ] Edge
- [ ] الهواتف المحمولة | Mobile devices

---

## 🔍 حل المشاكل الشائعة | Troubleshooting

### المشكلة 1: الصفحة تعرض 404
**الحل:**
1. تحقق من وجود ملف `404.html` في مجلد `dist`
2. تأكد من تشغيل `npm run build` (وليس فقط `vite build`)
3. تحقق من GitHub Pages settings

### المشكلة 2: الروابط لا تعمل
**الحل:**
1. تأكد من `basename="/aromakw"` في `src/App.tsx`
2. تحقق من `base: "/aromakw/"` في `vite.config.ts`
3. تأكد من عدم استخدام روابط مطلقة (/)

### المشكلة 3: لوحة التحكم تظهر صفحة المنتجات
**الحل:**
1. تحقق من وجود مسارات Admin في `src/App.tsx`
2. تأكد من وجود ملف `404.html`
3. امسح ذاكرة التخزين المؤقت في المتصفح
4. جرب في نافذة تصفح خاص

### المشكلة 4: GitHub Actions يفشل
**الحل:**
1. تحقق من سجلات Actions
2. تأكد من صلاحيات GitHub Pages
3. تحقق من ملف `.github/workflows/deploy.yml`
4. تأكد من عدم وجود أخطاء في البناء المحلي

### المشكلة 5: CSS لا يظهر بشكل صحيح
**الحل:**
1. تحقق من `base` في `vite.config.ts`
2. امسح ذاكرة التخزين المؤقت
3. أعد بناء المشروع

---

## 🔐 الوصول إلى لوحة التحكم | Accessing Admin Dashboard

### روابط الوصول المباشر | Direct Access URLs

#### العربية | Arabic:
```
https://esmael-tamer.github.io/aromakw/ar/admin
https://esmael-tamer.github.io/aromakw/ar/admin/orders
https://esmael-tamer.github.io/aromakw/ar/admin/customers
```

#### الإنجليزية | English:
```
https://esmael-tamer.github.io/aromakw/en/admin
https://esmael-tamer.github.io/aromakw/en/admin/orders
https://esmael-tamer.github.io/aromakw/en/admin/customers
```

#### الافتراضي (يعيد التوجيه للعربية) | Default (redirects to Arabic):
```
https://esmael-tamer.github.io/aromakw/admin
```

### ملاحظات الأمان | Security Notes

⚠️ **تحذير:** لوحة التحكم حالياً لا تحتوي على مصادقة.

**للإنتاج، يُنصح بشدة بإضافة:**
1. نظام تسجيل دخول
2. مصادقة JWT أو OAuth
3. حماية المسارات الإدارية
4. تشفير البيانات الحساسة

---

## 📊 كيفية عمل SPA Routing على GitHub Pages | How SPA Routing Works on GitHub Pages

### المشكلة | The Problem
GitHub Pages يعمل كخادم ملفات ثابت. عند الوصول المباشر لمسار مثل `/aromakw/ar/admin`، يبحث عن ملف في هذا المسار ولا يجده.

GitHub Pages works as a static file server. When directly accessing a route like `/aromakw/ar/admin`, it looks for a file at that path and doesn't find it.

### الحل | The Solution
1. **ملف 404.html**: نسخ من `index.html` يُعرض عند عدم العثور على الملف
2. **BrowserRouter basename**: يُخبر React Router بالمسار الأساسي
3. **Client-side routing**: React Router يتولى التوجيه داخل التطبيق

### سير العمل | Workflow
```
1. المستخدم يزور: /aromakw/ar/admin
   ↓
2. GitHub Pages لا يجد ملف → يعرض 404.html
   ↓
3. 404.html يحمّل تطبيق React
   ↓
4. React Router يقرأ المسار (/ar/admin)
   ↓
5. يعرض مكون AdminLayout + DashboardPage
```

---

## 🛠️ أوامر مفيدة | Useful Commands

```bash
# تطوير محلي | Local development
npm run dev

# بناء | Build
npm run build

# معاينة البناء | Preview build
npm run preview

# نشر إلى gh-pages | Deploy to gh-pages
npm run deploy

# اختبار | Test
npm run test

# فحص الكود | Lint
npm run lint
```

---

## 📚 موارد إضافية | Additional Resources

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [React Router Documentation](https://reactrouter.com/)
- [Vite Documentation](https://vitejs.dev/)
- [SPA routing on GitHub Pages](https://github.com/rafgraph/spa-github-pages)

---

## ✅ قائمة المراجعة النهائية | Final Checklist

قبل النشر، تأكد من:

- [ ] تم بناء المشروع بنجاح محلياً
- [ ] لا توجد أخطاء في Console
- [ ] ملف `404.html` يتم إنشاؤه تلقائياً
- [ ] جميع الروابط تعمل في المعاينة المحلية
- [ ] `basename` و `base` متطابقان
- [ ] صلاحيات GitHub Pages محددة بشكل صحيح
- [ ] تم اختبار الموقع بعد النشر

---

**✨ نجح النشر! الموقع جاهز! ✨**

**✨ Deployment Successful! Site is Ready! ✨**
