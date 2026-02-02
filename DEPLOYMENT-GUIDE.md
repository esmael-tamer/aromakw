# 🚀 دليل النشر | Deployment Guide

## دليل شامل لنشر الموقع على GitHub Pages
**Complete guide for deploying the site to GitHub Pages**

---

## 📋 المتطلبات | Prerequisites

### الأساسيات | Basics
- ✅ حساب GitHub نشط
- ✅ صلاحيات الكتابة على المستودع
- ✅ Node.js 18+ مثبت محلياً (للاختبار المحلي)
- ✅ Git مثبت على جهازك

### التحقق من الإعدادات | Verify Settings
```bash
# تحقق من نسخة Node.js
node --version  # يجب أن تكون 18 أو أحدث

# تحقق من Git
git --version
```

---

## 🔧 خطوات النشر التلقائي | Automated Deployment Steps

### 1️⃣ تفعيل GitHub Pages

في صفحة المستودع على GitHub:

1. اذهب إلى **Settings** > **Pages**
2. في قسم **Source**:
   - اختر **GitHub Actions** (موصى به)
   - أو اختر **Deploy from a branch** واختر `gh-pages` branch
3. احفظ الإعدادات

### 2️⃣ دفع التغييرات | Push Changes

```bash
# تأكد من أنك على الفرع الرئيسي
git checkout main

# دفع التغييرات
git push origin main
```

سيتم تلقائياً:
- ✅ تشغيل GitHub Actions workflow
- ✅ بناء المشروع (`npm run build`)
- ✅ إنشاء `404.html` للتعامل مع توجيه SPA
- ✅ نشر المحتوى على GitHub Pages
- ✅ الموقع سيكون متاحاً خلال 2-5 دقائق

### 3️⃣ التحقق من النشر | Verify Deployment

راقب التقدم:
1. اذهب إلى تبويب **Actions** في المستودع
2. شاهد سير العمل **Deploy to GitHub Pages**
3. انتظر حتى تظهر علامة ✅ الخضراء

---

## 🌐 عناوين URL بعد النشر | URLs After Deployment

### الموقع الرئيسي | Main Site
```
https://esmael-tamer.github.io/aromakw/
```

### لوحة التحكم | Admin Dashboard

#### العربية | Arabic
```
https://esmael-tamer.github.io/aromakw/ar/admin
https://esmael-tamer.github.io/aromakw/ar/admin/orders
https://esmael-tamer.github.io/aromakw/ar/admin/customers
```

#### الإنجليزية | English
```
https://esmael-tamer.github.io/aromakw/en/admin
https://esmael-tamer.github.io/aromakw/en/admin/orders
https://esmael-tamer.github.io/aromakw/en/admin/customers
```

#### الافتراضي | Default (redirects to Arabic)
```
https://esmael-tamer.github.io/aromakw/admin
```

### صفحات أخرى | Other Pages
```
https://esmael-tamer.github.io/aromakw/ar/products
https://esmael-tamer.github.io/aromakw/en/products
https://esmael-tamer.github.io/aromakw/about
https://esmael-tamer.github.io/aromakw/contact
```

---

## 🧪 اختبار محلي | Local Testing

### قبل النشر | Before Deploying

```bash
# 1. تثبيت المتطلبات
npm install

# 2. بناء المشروع
npm run build

# 3. معاينة البناء محلياً
npm run preview
```

سيعمل الموقع على: `http://localhost:4173/aromakw/`

### اختبار المسارات | Test Routes

تحقق من عمل هذه الروابط محلياً:
- ✅ `http://localhost:4173/aromakw/`
- ✅ `http://localhost:4173/aromakw/admin`
- ✅ `http://localhost:4173/aromakw/ar/admin`
- ✅ `http://localhost:4173/aromakw/ar/admin/orders`
- ✅ `http://localhost:4173/aromakw/en/admin`

---

## 🛠️ النشر اليدوي (اختياري) | Manual Deployment (Optional)

إذا أردت النشر يدوياً باستخدام `gh-pages`:

### التثبيت | Installation
```bash
npm install --save-dev gh-pages
```

### إضافة سكريبت النشر | Add Deploy Script

في `package.json`:
```json
{
  "scripts": {
    "deploy": "npm run build && gh-pages -d dist"
  }
}
```

### النشر | Deploy
```bash
npm run deploy
```

---

## 🔍 كيفية عمل توجيه SPA | How SPA Routing Works

### المشكلة | The Problem
عند الوصول مباشرة إلى `/aromakw/admin` على GitHub Pages، الخادم لا يجد ملف فيزيائي ويعرض 404.

### الحل | The Solution

1. **404.html في الجذر**:
   - GitHub Pages يعرض `404.html` عند عدم وجود ملف
   - الملف يحفظ المسار المطلوب ويعيد التوجيه إلى `index.html`

2. **index.html في dist/** (GitHub Actions):
   - يُنسخ `dist/index.html` إلى `dist/404.html` أثناء البناء
   - يضمن عمل جميع المسارات بعد النشر

3. **BrowserRouter basename**:
   - مضبوط على `/aromakw` ليتوافق مع مسار المستودع
   - يضمن عمل جميع الروابط والمسارات بشكل صحيح

### مثال تدفق الطلب | Request Flow Example

```
مستخدم يزور: https://esmael-tamer.github.io/aromakw/ar/admin
              ↓
GitHub Pages: ملف غير موجود → يعرض 404.html
              ↓
404.html: يحفظ المسار ويعيد التوجيه إلى index.html
              ↓
index.html: يحمل تطبيق React
              ↓
React Router: يتعامل مع /ar/admin ويعرض AdminLayout
              ↓
المستخدم يرى: لوحة التحكم ✅
```

---

## ✅ قائمة التحقق بعد النشر | Post-Deployment Checklist

استخدم هذه القائمة للتحقق من نجاح النشر:

### الصفحات الأساسية | Basic Pages
- [ ] الصفحة الرئيسية تعمل: `/aromakw/`
- [ ] صفحة المنتجات تعمل: `/aromakw/ar/products`
- [ ] صفحة عن الموقع تعمل: `/aromakw/about`

### لوحة التحكم | Admin Dashboard
- [ ] لوحة التحكم العربية تعمل: `/aromakw/ar/admin`
- [ ] صفحة الطلبات تعمل: `/aromakw/ar/admin/orders`
- [ ] صفحة العملاء تعمل: `/aromakw/ar/admin/customers`
- [ ] لوحة التحكم الإنجليزية تعمل: `/aromakw/en/admin`
- [ ] التبديل بين اللغات يعمل بشكل صحيح

### الوظائف | Functionality
- [ ] إضافة منتج إلى السلة يعمل
- [ ] إتمام الطلب يعمل
- [ ] البيانات تُحفظ في localStorage
- [ ] الطلبات تظهر في لوحة التحكم
- [ ] تغيير حالة الطلبات يعمل

### التنقل | Navigation
- [ ] الروابط الداخلية تعمل بدون إعادة تحميل الصفحة
- [ ] زر الرجوع في المتصفح يعمل
- [ ] الإشارات المرجعية (Bookmarks) للصفحات الفرعية تعمل
- [ ] التحديث (F5) على صفحة فرعية لا يعطي 404

### الأداء | Performance
- [ ] الموقع يتحمل بسرعة (< 3 ثوانٍ)
- [ ] الصور تتحمل بشكل صحيح
- [ ] لا توجد أخطاء في Console

---

## 🐛 حل المشاكل | Troubleshooting

### المشكلة: صفحة 404 عند الوصول المباشر
**الحل:**
- تأكد من نسخ `404.html` في خطوة البناء
- تحقق من أن workflow يحتوي على: `cp dist/index.html dist/404.html`

### المشكلة: الروابط لا تعمل
**الحل:**
- تحقق من أن `basename="/aromakw"` في `App.tsx`
- تأكد من أن `base: "/aromakw/"` في `vite.config.ts`

### المشكلة: CSS/JavaScript لا يتحمل
**الحل:**
- تحقق من إعدادات `base` في `vite.config.ts`
- تأكد من البناء قبل النشر: `npm run build`

### المشكلة: Admin routes تعطي 404
**الحل:**
- تحقق من وجود admin routes في `App.tsx`
- تأكد من أن `404.html` موجود في dist/
- افحص GitHub Actions logs للأخطاء

### المشكلة: الموقع لا يتحدث
**الحل:**
```bash
# مسح الكاش والبناء من جديد
rm -rf dist node_modules package-lock.json
npm install
npm run build
git add .
git commit -m "Rebuild for deployment"
git push origin main
```

### المشكلة: GitHub Actions تفشل
**الحل:**
1. اذهب إلى تبويب **Actions**
2. افتح الـ workflow الفاشل
3. اقرأ رسالة الخطأ
4. الأخطاء الشائعة:
   - `npm install` fails → تحقق من `package.json`
   - `npm run build` fails → اختبر البناء محلياً
   - Permission denied → تحقق من إعدادات Pages

---

## 📱 اختبار على الأجهزة المختلفة | Cross-Device Testing

### Desktop
- ✅ Chrome
- ✅ Firefox
- ✅ Safari
- ✅ Edge

### Mobile
- ✅ iOS Safari
- ✅ Android Chrome
- ✅ اختبر الوضع الأفقي والعمودي

### اختبارات إضافية | Additional Tests
- ✅ اختبار RTL للغة العربية
- ✅ اختبار LTR للغة الإنجليزية
- ✅ اختبار التبديل بين اللغات
- ✅ اختبار الروابط الخارجية

---

## 🔒 الأمان | Security

### أفضل الممارسات | Best Practices
- ✅ لا تحفظ معلومات حساسة في localStorage
- ✅ استخدم HTTPS (تلقائي مع GitHub Pages)
- ✅ راجع التبعيات بانتظام: `npm audit`
- ✅ حدّث الحزم الأمنية: `npm update`

### تحديثات دورية | Regular Updates
```bash
# تحقق من الثغرات الأمنية
npm audit

# إصلاح الثغرات البسيطة
npm audit fix

# تحديث التبعيات
npm update
```

---

## 📊 مراقبة الأداء | Performance Monitoring

### أدوات مفيدة | Useful Tools
- **Google PageSpeed Insights**: قياس الأداء والسرعة
- **Chrome DevTools**: فحص Network و Performance
- **Lighthouse**: تقارير شاملة عن الأداء

### نصائح لتحسين الأداء | Performance Tips
1. ضغط الصور قبل رفعها
2. استخدام lazy loading للصور
3. تقليل حجم JavaScript bundles
4. استخدام caching بشكل فعال

---

## 📞 الدعم والمساعدة | Support & Help

### إذا واجهت مشاكل | If You Encounter Issues

1. **راجع هذا الدليل أولاً**
2. **تحقق من GitHub Actions logs**
3. **افحص Console في المتصفح**
4. **اختبر محلياً قبل النشر**

### موارد إضافية | Additional Resources
- [GitHub Pages Documentation](https://docs.github.com/pages)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)
- [React Router Documentation](https://reactrouter.com/)

---

## ✨ نصائح إضافية | Additional Tips

### للتطوير | For Development
```bash
# تشغيل خادم التطوير
npm run dev

# بناء وضع التطوير (مع source maps)
npm run build:dev

# اختبار البناء محلياً
npm run preview
```

### للإنتاج | For Production
```bash
# بناء الإنتاج (محسّن)
npm run build

# معاينة بناء الإنتاج
npm run preview
```

### Git Workflow الموصى به | Recommended Git Workflow
```bash
# 1. إنشاء فرع جديد للتطوير
git checkout -b feature/new-feature

# 2. إجراء التغييرات والاختبار
npm run build
npm run preview

# 3. Commit التغييرات
git add .
git commit -m "Add new feature"

# 4. دمج في main
git checkout main
git merge feature/new-feature

# 5. النشر
git push origin main
```

---

## 🎉 الخلاصة | Summary

### نجح النشر عندما | Deployment is Successful When:
✅ جميع صفحات الموقع تعمل  
✅ لوحة التحكم متاحة بكلا اللغتين  
✅ التنقل بين الصفحات سلس  
✅ لا توجد أخطاء 404  
✅ البيانات تُحفظ وتُسترجع بشكل صحيح  

### للحصول على أفضل النتائج | For Best Results:
1. اختبر محلياً دائماً قبل النشر
2. راقب GitHub Actions بعد كل push
3. تحقق من الموقع المباشر بعد كل نشر
4. حدّث التبعيات بانتظام
5. راجع الأمان دورياً

---

**🚀 موفق في النشر! | Happy Deploying! 🚀**

تاريخ آخر تحديث | Last Updated: 2026-02-02
