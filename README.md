# Aroma Amore - مجموعة جايدن

متجر إلكتروني لمنتجات العناية بالجسم الفاخرة.

## التقنيات المستخدمة

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## التشغيل محلياً

```sh
# تثبيت المتطلبات
npm install

# تشغيل خادم التطوير
npm run dev
```

## البناء للإنتاج

```sh
npm run build
```

يتم تلقائياً نسخ `dist/index.html` إلى `dist/404.html` لدعم SPA routing على GitHub Pages.

## النشر على GitHub Pages

### النشر التلقائي
عند دفع التغييرات إلى فرع `main`، سيتم النشر تلقائياً عبر GitHub Actions.

### الوصول إلى الموقع بعد النشر
- **الموقع الرئيسي:** https://esmael-tamer.github.io/aromakw/
- **لوحة التحكم (عربي):** https://esmael-tamer.github.io/aromakw/ar/admin
- **Admin Dashboard (English):** https://esmael-tamer.github.io/aromakw/en/admin

### معاينة محلية
```sh
npm run preview
```

## المزيد من المعلومات

راجع ملف [DEPLOYMENT-GUIDE.md](./DEPLOYMENT-GUIDE.md) للحصول على دليل نشر شامل ومعلومات حول:
- إعداد متغيرات البيئة
- استكشاف الأخطاء وإصلاحها
- اختبار التطبيق قبل النشر
- قائمة التحقق بعد النشر

