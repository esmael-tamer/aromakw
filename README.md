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
# بناء مع دعم SPA routing لـ GitHub Pages
npm run build:prod

# أو البناء العادي
npm run build
```

## النشر على GitHub Pages

راجع ملف [DEPLOYMENT-GUIDE.md](./DEPLOYMENT-GUIDE.md) للحصول على تعليمات مفصلة حول النشر واختبار الموقع.

See [DEPLOYMENT-GUIDE.md](./DEPLOYMENT-GUIDE.md) for detailed deployment and testing instructions.

## لوحة التحكم | Admin Dashboard

الموقع يتضمن لوحة تحكم كاملة لإدارة الطلبات والعملاء:
- `/ar/admin` - لوحة التحكم الرئيسية
- `/ar/admin/orders` - إدارة الطلبات
- `/ar/admin/customers` - إدارة العملاء
