# Aroma Amore - مجموعة جايدن

متجر إلكتروني لمنتجات العناية بالجسم الفاخرة مع لوحة تحكم إدارية.

**الموقع المباشر | Live Site:** https://esmael-tamer.github.io/aromakw/

## 🌟 المميزات | Features

- ✨ متجر إلكتروني متكامل بالعربية والإنجليزية
- 🛒 نظام سلة تسوق وإتمام طلبات
- 📊 لوحة تحكم إدارية لإدارة الطلبات والعملاء
- 🌐 دعم كامل للغة العربية (RTL) والإنجليزية (LTR)
- 📱 تصميم متجاوب لجميع الأجهزة
- 🚀 نشر تلقائي على GitHub Pages

## 🔗 روابط مهمة | Important Links

### الموقع الرئيسي | Main Site
- https://esmael-tamer.github.io/aromakw/

### لوحة التحكم | Admin Dashboard
- العربية: https://esmael-tamer.github.io/aromakw/ar/admin
- English: https://esmael-tamer.github.io/aromakw/en/admin
- Default: https://esmael-tamer.github.io/aromakw/admin

## 💻 التقنيات المستخدمة | Technologies

- **Frontend:** React 18 + TypeScript
- **Build Tool:** Vite
- **UI Framework:** shadcn-ui + Tailwind CSS
- **Routing:** React Router v6
- **State Management:** React Context + TanStack Query
- **Deployment:** GitHub Pages + GitHub Actions

## 🚀 التشغيل محلياً | Local Development

```sh
# تثبيت المتطلبات | Install dependencies
npm install

# تشغيل خادم التطوير | Start development server
npm run dev
# سيعمل على | Runs on: http://localhost:8080/aromakw/

# البناء للإنتاج | Build for production
npm run build

# معاينة البناء | Preview build
npm run preview
# سيعمل على | Runs on: http://localhost:4173/aromakw/
```

## 📦 النشر على GitHub Pages | Deploying to GitHub Pages

### النشر التلقائي | Automatic Deployment

التغييرات تُنشر تلقائياً عند push إلى main branch:

```sh
git push origin main
```

سيتم تلقائياً:
1. بناء المشروع
2. إنشاء ملف 404.html للتعامل مع توجيه SPA
3. نشر الموقع على GitHub Pages
4. الموقع سيكون متاحاً خلال 2-5 دقائق

### النشر اليدوي | Manual Deployment (Optional)

```sh
# تثبيت gh-pages | Install gh-pages
npm install --save-dev gh-pages

# إضافة سكريبت النشر في package.json | Add deploy script
# "deploy": "npm run build && gh-pages -d dist"

# النشر | Deploy
npm run deploy
```

### 📖 دليل النشر الكامل | Full Deployment Guide

للحصول على تعليمات مفصلة، راجع [DEPLOYMENT-GUIDE.md](./DEPLOYMENT-GUIDE.md)

## 🧪 الاختبارات | Testing

```sh
# تشغيل الاختبارات | Run tests
npm test

# تشغيل الاختبارات في وضع المراقبة | Watch mode
npm run test:watch
```

## 📱 اختبار المسارات | Testing Routes

بعد النشر، تحقق من عمل هذه الروابط:

### الصفحات العامة | Public Pages
- ✅ `/aromakw/` - الصفحة الرئيسية
- ✅ `/aromakw/ar/products` - المنتجات (عربي)
- ✅ `/aromakw/en/products` - Products (English)
- ✅ `/aromakw/about` - عن الموقع
- ✅ `/aromakw/contact` - اتصل بنا

### لوحة التحكم | Admin Dashboard
- ✅ `/aromakw/ar/admin` - لوحة التحكم الرئيسية
- ✅ `/aromakw/ar/admin/orders` - إدارة الطلبات
- ✅ `/aromakw/ar/admin/customers` - إدارة العملاء
- ✅ `/aromakw/en/admin` - Admin Dashboard (English)

## 🏗️ هيكل المشروع | Project Structure

```
aromakw/
├── src/
│   ├── components/        # المكونات المشتركة
│   │   ├── admin/        # مكونات لوحة التحكم
│   │   └── shop/         # مكونات المتجر
│   ├── pages/            # الصفحات
│   │   ├── admin/        # صفحات لوحة التحكم
│   │   └── shop/         # صفحات المتجر
│   ├── contexts/         # React Contexts
│   ├── types/            # TypeScript Types
│   ├── i18n/             # ملفات الترجمة
│   └── App.tsx           # المكون الرئيسي
├── public/               # الملفات الثابتة
├── 404.html             # معالج SPA routing
└── DEPLOYMENT-GUIDE.md  # دليل النشر الكامل
```

## 🔧 الإعدادات المهمة | Important Configurations

### Vite Config
- `base: "/aromakw/"` - مسار النشر على GitHub Pages

### React Router
- `basename="/aromakw"` - يتوافق مع اسم المستودع

### GitHub Actions
- `.github/workflows/deploy.yml` - نشر تلقائي
- ينسخ `index.html` إلى `404.html` للتعامل مع SPA routing

## 📝 ملاحظات | Notes

### توجيه SPA | SPA Routing
يستخدم الموقع آلية خاصة للتعامل مع توجيه SPA على GitHub Pages:
- ملف `404.html` يلتقط الطلبات المباشرة للمسارات
- يعيد التوجيه إلى `index.html` مع الحفاظ على المسار المطلوب
- React Router يتعامل مع المسار ويعرض الصفحة الصحيحة

### التخزين المحلي | Local Storage
- الطلبات والعملاء يُحفظون في localStorage
- البيانات تبقى محلية في متصفح المستخدم
- لا توجد قاعدة بيانات خلفية حالياً

## 🛠️ المساهمة | Contributing

لتحسين المشروع:
1. Fork المستودع
2. أنشئ branch للميزة الجديدة: `git checkout -b feature/amazing-feature`
3. Commit التغييرات: `git commit -m 'Add amazing feature'`
4. Push إلى Branch: `git push origin feature/amazing-feature`
5. افتح Pull Request

## 📄 الترخيص | License

هذا المشروع للاستخدام الشخصي.

## 📞 التواصل | Contact

لأي استفسارات أو مشاكل، يرجى فتح Issue في المستودع.

---

**✨ مشروع Aroma Amore - بني بحب في الكويت 🇰🇼 ✨**
