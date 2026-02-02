# 🚀 دليل النشر | Deployment Guide

## نشر على GitHub Pages | Deploying to GitHub Pages

### المتطلبات الأساسية | Prerequisites

1. **Node.js** (v18 أو أحدث | v18 or newer)
2. **npm** مثبت على جهازك | installed on your system
3. حساب GitHub مع الوصول إلى المستودع | GitHub account with repository access

---

## 📋 خطوات النشر السريع | Quick Deployment Steps

### 1️⃣ إعداد المتغيرات البيئية | Configure Environment Variables

قم بإنشاء ملف `.env.production` (اختياري):

```bash
# انسخ ملف المثال
cp .env.production.example .env.production
```

محتوى الملف:
```env
VITE_BASENAME=/aromakw
```

> **ملاحظة:** إذا كنت تنشر على نطاق مخصص، غير القيمة إلى `/`

---

### 2️⃣ بناء المشروع | Build the Project

```bash
# تثبيت التبعيات إذا لم تكن مثبتة
npm install

# بناء للإنتاج
npm run build
```

سيقوم السكريبت `postbuild` تلقائياً بـ:
- ✅ نسخ `dist/index.html` إلى `dist/404.html`
- ✅ تمكين توجيه SPA للروابط العميقة

---

### 3️⃣ النشر التلقائي | Automatic Deployment

عند دفع التغييرات إلى فرع `main`:

```bash
git add .
git commit -m "Deploy updates"
git push origin main
```

**سيحدث تلقائياً:**
1. ✅ GitHub Actions يبني المشروع
2. ✅ ينشئ ملف `404.html` للتوجيه
3. ✅ ينشر على GitHub Pages
4. ✅ الموقع متاح خلال 2-5 دقائق

---

## 🌐 عناوين URL بعد النشر | URLs After Deployment

### الموقع الرئيسي | Main Site
```
https://esmael-tamer.github.io/aromakw/
```

### لوحة التحكم | Admin Dashboard

#### العربية | Arabic
- **لوحة القيادة:** `https://esmael-tamer.github.io/aromakw/ar/admin`
- **الطلبات:** `https://esmael-tamer.github.io/aromakw/ar/admin/orders`
- **العملاء:** `https://esmael-tamer.github.io/aromakw/ar/admin/customers`

#### الإنجليزية | English
- **Dashboard:** `https://esmael-tamer.github.io/aromakw/en/admin`
- **Orders:** `https://esmael-tamer.github.io/aromakw/en/admin/orders`
- **Customers:** `https://esmael-tamer.github.io/aromakw/en/admin/customers`

#### الافتراضي | Default (يعيد التوجيه للعربية | redirects to Arabic)
```
https://esmael-tamer.github.io/aromakw/admin
```

---

## ✅ قائمة التحقق بعد النشر | Post-Deployment Checklist

بعد النشر، تحقق من العناوين التالية للتأكد من أن كل شيء يعمل:

### 1. الموقع الرئيسي | Main Site
- [ ] الصفحة الرئيسية تعمل: `/aromakw/`
- [ ] صفحات المتجر تعمل: `/aromakw/ar/products`
- [ ] صفحات السلة تعمل: `/aromakw/ar/cart`

### 2. لوحة التحكم العربية | Arabic Admin
- [ ] لوحة القيادة: `/aromakw/ar/admin` ✅
- [ ] صفحة الطلبات: `/aromakw/ar/admin/orders` ✅
- [ ] صفحة العملاء: `/aromakw/ar/admin/customers` ✅

### 3. لوحة التحكم الإنجليزية | English Admin
- [ ] Dashboard: `/aromakw/en/admin` ✅
- [ ] Orders: `/aromakw/en/admin/orders` ✅
- [ ] Customers: `/aromakw/en/admin/customers` ✅

### 4. التوجيه والروابط العميقة | Routing & Deep Links
- [ ] الروابط المباشرة تعمل (تحديث الصفحة على أي مسار)
- [ ] التوجيه بين الصفحات يعمل بسلاسة
- [ ] زر الرجوع في المتصفح يعمل

---

## 🔧 استكشاف الأخطاء | Troubleshooting

### المشكلة: صفحة 404 عند الوصول المباشر
**الحل:**
- تأكد من تشغيل `npm run build` (يشغل `postbuild` تلقائياً)
- تحقق من وجود `dist/404.html` بعد البناء
- تأكد من أن workflow في `.github/workflows/deploy.yml` ينسخ الملف

### المشكلة: الروابط لا تعمل بشكل صحيح
**الحل:**
- تحقق من أن `VITE_BASENAME` يطابق المسار الأساسي في GitHub Pages
- في `vite.config.ts`، تأكد من: `base: "/aromakw/"`
- في `src/App.tsx`، تأكد من: `basename={import.meta.env.VITE_BASENAME || '/aromakw'}`

### المشكلة: التطبيق لا يتحدث
**الحل:**
1. تحقق من حالة GitHub Actions في تبويب "Actions"
2. تأكد من تفعيل GitHub Pages في إعدادات المستودع
3. انتظر 2-5 دقائق بعد انتهاء النشر

---

## 🔐 إعدادات GitHub Pages

تأكد من الإعدادات التالية في المستودع:

1. انتقل إلى **Settings** → **Pages**
2. تحت **Source**، اختر:
   - **Source:** GitHub Actions
3. انتظر اكتمال أول نشر

---

## 📱 الاختبار المحلي | Local Testing

لاختبار البناء محلياً قبل النشر:

```bash
# بناء المشروع
npm run build

# معاينة البناء
npm run preview
```

الموقع سيكون متاحاً على:
```
http://localhost:4173/aromakw/
```

### اختبار الروابط العميقة محلياً | Testing Deep Links Locally

```bash
# تشغيل خادم ثابت من مجلد dist
npx serve dist -s

# أو استخدم
npm run preview
```

---

## 🎯 ملاحظات مهمة | Important Notes

### حول SPA Routing
- ملف `404.html` هو نسخة من `index.html`
- يسمح هذا لـ React Router بمعالجة جميع المسارات
- عند الوصول المباشر لأي صفحة، GitHub Pages يقدم `404.html`
- React Router يتولى التوجيه من جانب العميل

### حول basename
- `basename` في BrowserRouter يجب أن يطابق مسار GitHub Pages
- التطبيق يقرأ `VITE_BASENAME` من متغيرات البيئة
- القيمة الافتراضية هي `/aromakw`
- للنشر على نطاق مخصص، استخدم `/`

### حول الترجمة والتوطين
- التطبيق يدعم العربية والإنجليزية بالكامل
- لوحة التحكم متوفرة بكلا اللغتين
- المسارات تبدأ بـ `/ar/` للعربية و `/en/` للإنجليزية

---

## 🚀 النشر اليدوي (اختياري) | Manual Deployment (Optional)

إذا كنت تريد النشر يدوياً باستخدام `gh-pages`:

### 1. تثبيت gh-pages
```bash
npm install --save-dev gh-pages
```

### 2. إضافة سكريبت النشر
في `package.json`:
```json
{
  "scripts": {
    "deploy": "npm run build && gh-pages -d dist"
  }
}
```

### 3. النشر
```bash
npm run deploy
```

---

## 📚 موارد إضافية | Additional Resources

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [Vite Deployment Guide](https://vitejs.dev/guide/static-deploy.html)
- [React Router Documentation](https://reactrouter.com/)

---

## 🆘 الدعم | Support

إذا واجهت أي مشاكل:

1. **راجع سجلات GitHub Actions:**
   - اذهب إلى تبويب "Actions" في GitHub
   - افتح آخر workflow run
   - تحقق من السجلات للأخطاء

2. **تحقق من إعدادات GitHub Pages:**
   - Settings → Pages
   - تأكد من أن المصدر هو "GitHub Actions"

3. **تحقق من متغيرات البيئة:**
   - راجع ملف `.env.production`
   - تأكد من أن `VITE_BASENAME` صحيح

4. **اختبر محلياً:**
   - قم بتشغيل `npm run build && npm run preview`
   - تأكد من أن كل شيء يعمل قبل النشر

---

**✨ نجاح النشر! الموقع جاهز! ✨**

**✨ Deployment Successful! Site is Live! ✨**
