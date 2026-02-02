# Aroma Amore - مجموعة جايدن

متجر إلكتروني لمنتجات العناية بالجسم الفاخرة مع لوحة تحكم إدارية متكاملة.

E-commerce site for luxury body care products with integrated admin dashboard.

## 🌐 الموقع المباشر | Live Site

**URL:** https://esmael-tamer.github.io/aromakw/

### لوحة التحكم | Admin Dashboard
- 🇸🇦 عربي: https://esmael-tamer.github.io/aromakw/ar/admin
- 🇬🇧 English: https://esmael-tamer.github.io/aromakw/en/admin

## ✨ المميزات | Features

### للعملاء | Customer Features
- 🛍️ تصفح المنتجات مع دعم اللغتين العربية والإنجليزية
- 🛒 سلة تسوق متكاملة
- 💳 صفحة دفع وإتمام الطلبات
- 📱 تصميم متجاوب يعمل على جميع الأجهزة
- 🎨 واجهة مستخدم حديثة وجذابة

### لوحة التحكم | Admin Dashboard
- 📊 لوحة إحصائيات شاملة (الطلبات، العملاء، المبيعات)
- 📦 إدارة الطلبات مع إمكانية تحديث الحالة
- 👥 عرض بيانات العملاء وتاريخ طلباتهم
- 🔍 بحث وفلترة متقدمة
- 🌍 دعم كامل للغة العربية والإنجليزية

## 🛠️ التقنيات المستخدمة | Technologies

- **Vite** - Build tool
- **TypeScript** - Type safety
- **React** - UI framework
- **React Router** - Client-side routing
- **shadcn-ui** - Component library
- **Tailwind CSS** - Styling
- **Recharts** - Data visualization
- **localStorage** - Client-side data storage

## 🚀 التشغيل محلياً | Local Development

```sh
# تثبيت المتطلبات | Install dependencies
npm install

# تشغيل خادم التطوير | Run development server
npm run dev

# الموقع المحلي | Local URL
# http://localhost:5173
```

## 📦 البناء للإنتاج | Production Build

```sh
# بناء المشروع | Build project
npm run build

# معاينة النسخة المنتجة | Preview production build
npm run preview
```

## 🚀 النشر | Deployment

For detailed deployment instructions, see [DEPLOYMENT-GUIDE.md](./DEPLOYMENT-GUIDE.md)

### نشر سريع | Quick Deploy

Push to the `main` branch to trigger automatic deployment:

```sh
git push origin main
```

GitHub Actions will automatically build and deploy to GitHub Pages.

## 📋 هيكل المشروع | Project Structure

```
aromakw/
├── src/
│   ├── components/       # React components
│   │   ├── admin/       # Admin-specific components
│   │   └── shop/        # Shop-specific components
│   ├── pages/           # Page components
│   │   ├── admin/       # Admin dashboard pages
│   │   └── shop/        # Shop pages
│   ├── contexts/        # React contexts
│   ├── types/           # TypeScript type definitions
│   ├── i18n/            # Internationalization
│   └── App.tsx          # Main app component
├── public/              # Static assets
├── .github/
│   └── workflows/       # GitHub Actions workflows
└── README.md
```

## 🧪 الاختبار | Testing

```sh
# تشغيل الاختبارات | Run tests
npm run test

# اختبار مع المراقبة | Test with watch mode
npm run test:watch
```

## 📚 التوثيق | Documentation

- [DEPLOYMENT-GUIDE.md](./DEPLOYMENT-GUIDE.md) - دليل النشر الشامل
- [MERGE-STATUS.md](./MERGE-STATUS.md) - حالة الدمج والتحديثات

## 🔒 الأمان | Security

- ✅ No hardcoded credentials
- ✅ Client-side only application
- ⚠️ Admin dashboard needs authentication (future enhancement)

## 📝 ملاحظات | Notes

- The site uses `basename="/aromakw"` for GitHub Pages
- Admin routes are prefixed with language code: `/ar/admin` or `/en/admin`
- Default `/admin` redirects to `/ar/admin`
- SPA routing is handled via 404.html fallback

## 🤝 المساهمة | Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 الترخيص | License

Private repository - All rights reserved
