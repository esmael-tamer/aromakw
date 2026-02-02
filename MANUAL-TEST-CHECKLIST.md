# 📝 دليل الاختبار اليدوي | Manual Testing Checklist

## قائمة اختبار سريعة قبل النشر | Quick Pre-Deployment Test

استخدم هذه القائمة للتحقق السريع قبل النشر:

### 🏗️ البناء المحلي | Local Build
```bash
npm install
npm run build
npm run preview
```

- [ ] البناء ينجح بدون أخطاء
- [ ] Preview يعمل على `http://localhost:4173/aromakw/`
- [ ] لا توجد أخطاء في Console

### 🧪 اختبار المسارات محلياً | Test Routes Locally

افتح المتصفح واختبر:

#### الصفحات الأساسية
- [ ] `http://localhost:4173/aromakw/` - الصفحة الرئيسية
- [ ] `http://localhost:4173/aromakw/ar/products` - المنتجات
- [ ] `http://localhost:4173/aromakw/about` - عن الموقع

#### لوحة التحكم
- [ ] `http://localhost:4173/aromakw/admin` - يوجه إلى /ar/admin
- [ ] `http://localhost:4173/aromakw/ar/admin` - لوحة التحكم العربية
- [ ] `http://localhost:4173/aromakw/en/admin` - لوحة التحكم الإنجليزية
- [ ] `http://localhost:4173/aromakw/ar/admin/orders` - صفحة الطلبات
- [ ] `http://localhost:4173/aromakw/ar/admin/customers` - صفحة العملاء

#### اختبار تحديث الصفحة (F5)
- [ ] تحديث الصفحة على `/admin` لا يعطي 404
- [ ] تحديث الصفحة على `/ar/admin/orders` لا يعطي 404

### 🔄 اختبار الوظائف | Functionality Test

#### إضافة طلب
1. [ ] اذهب إلى صفحة المنتجات
2. [ ] أضف منتج إلى السلة
3. [ ] اذهب إلى صفحة الدفع
4. [ ] أكمل معلومات الطلب
5. [ ] أرسل الطلب
6. [ ] تحقق من ظهور رسالة النجاح

#### لوحة التحكم
1. [ ] افتح لوحة التحكم `/ar/admin`
2. [ ] تحقق من ظهور الطلب الجديد
3. [ ] افتح صفحة الطلبات `/ar/admin/orders`
4. [ ] غيّر حالة الطلب
5. [ ] تحقق من حفظ التغيير (حدّث الصفحة)

### 🌐 بعد النشر | After Deployment

استبدل `localhost:4173` بـ `https://esmael-tamer.github.io` واختبر نفس المسارات:

#### الصفحات الأساسية
- [ ] `https://esmael-tamer.github.io/aromakw/`
- [ ] `https://esmael-tamer.github.io/aromakw/ar/products`
- [ ] `https://esmael-tamer.github.io/aromakw/about`

#### لوحة التحكم
- [ ] `https://esmael-tamer.github.io/aromakw/admin`
- [ ] `https://esmael-tamer.github.io/aromakw/ar/admin`
- [ ] `https://esmael-tamer.github.io/aromakw/en/admin`
- [ ] `https://esmael-tamer.github.io/aromakw/ar/admin/orders`
- [ ] `https://esmael-tamer.github.io/aromakw/ar/admin/customers`

#### اختبار تحديث الصفحة (F5) على الموقع المباشر
- [ ] تحديث `/ar/admin` لا يعطي 404
- [ ] تحديث `/ar/admin/orders` لا يعطي 404

### 📱 اختبار الأجهزة | Device Testing

- [ ] Desktop - Chrome/Edge
- [ ] Desktop - Firefox
- [ ] Desktop - Safari
- [ ] Mobile - iOS Safari
- [ ] Mobile - Android Chrome

### ✅ تأكيد النجاح | Success Confirmation

النشر ناجح عندما:
- ✅ جميع الروابط تعمل
- ✅ لوحة التحكم متاحة
- ✅ لا توجد أخطاء 404
- ✅ البيانات تُحفظ في localStorage
- ✅ التنقل سلس بدون إعادة تحميل

---

## 🐛 إذا فشل أي اختبار | If Any Test Fails

1. راجع [DEPLOYMENT-GUIDE.md](./DEPLOYMENT-GUIDE.md) - قسم "حل المشاكل"
2. افحص Console في المتصفح (F12)
3. تحقق من GitHub Actions logs
4. تأكد من:
   - [ ] `basename="/aromakw"` في App.tsx
   - [ ] `base: "/aromakw/"` في vite.config.ts
   - [ ] GitHub Actions workflow ينسخ 404.html
   - [ ] البناء ينجح محلياً

---

**💡 نصيحة:** اختبر دائماً محلياً باستخدام `npm run preview` قبل النشر!

تاريخ الإنشاء: 2026-02-02
