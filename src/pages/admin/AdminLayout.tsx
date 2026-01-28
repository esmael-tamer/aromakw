import { ReactNode, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { LayoutDashboard, ShoppingBag, Users, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { LocaleProvider } from "@/contexts/LocaleContext";
import { useLocale } from "@/contexts/LocaleContext";
import { cn } from "@/lib/utils";
import type { Locale } from "@/i18n";

interface AdminLayoutProps {
  children: ReactNode;
}

function AdminLayoutInner({ children }: AdminLayoutProps) {
  const { t, isRTL, getLocalizedPath } = useLocale();
  const location = useLocation();

  const navItems = [
    {
      title: t.admin.dashboard,
      href: getLocalizedPath("/admin"),
      icon: LayoutDashboard,
    },
    {
      title: t.admin.orders,
      href: getLocalizedPath("/admin/orders"),
      icon: ShoppingBag,
    },
    {
      title: t.admin.customers,
      href: getLocalizedPath("/admin/customers"),
      icon: Users,
    },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const Sidebar = ({ className }: { className?: string }) => (
    <div className={cn("space-y-4 py-4", className)}>
      <div className="px-3 py-2">
        <h2 className="mb-2 px-4 text-lg font-semibold">
          {t.admin.title}
        </h2>
        <div className="space-y-1">
          {navItems.map((item) => (
            <Button
              key={item.href}
              asChild
              variant={isActive(item.href) ? "secondary" : "ghost"}
              className={cn(
                "w-full justify-start gap-2",
                isRTL && "flex-row-reverse justify-end"
              )}
            >
              <Link to={item.href}>
                <item.icon className="h-4 w-4" />
                {item.title}
              </Link>
            </Button>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side={isRTL ? "right" : "left"} className="w-64 p-0">
              <Sidebar />
            </SheetContent>
          </Sheet>
          <div className="flex-1 flex items-center gap-4 px-4">
            <h1 className="text-xl font-bold">{t.admin.title}</h1>
          </div>
          <Button asChild variant="ghost">
            <Link to={getLocalizedPath("/products")}>
              {t.common.back}
            </Link>
          </Button>
        </div>
      </header>

      <div className="container flex-1 items-start md:grid md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr] gap-6 py-6">
        {/* Desktop Sidebar */}
        <aside className="hidden md:block">
          <div className="sticky top-20">
            <Sidebar />
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1">{children}</main>
      </div>
    </div>
  );
}

export function AdminLayout({ children }: AdminLayoutProps) {
  const location = useLocation();
  // Extract locale from pathname (e.g., /en/admin or /ar/admin)
  const pathSegments = location.pathname.split('/').filter(Boolean);
  const localeFromPath = pathSegments[0];
  const locale = (localeFromPath === "en" ? "en" : "ar") as Locale;
  const isRTL = locale === "ar";

  // Update HTML direction based on locale
  useEffect(() => {
    document.documentElement.dir = isRTL ? "rtl" : "ltr";
    document.documentElement.lang = locale;
    
    return () => {
      // Reset to default on unmount
      document.documentElement.dir = "rtl";
      document.documentElement.lang = "ar";
    };
  }, [locale, isRTL]);

  return (
    <LocaleProvider locale={locale}>
      <div className={`min-h-screen ${isRTL ? "font-arabic" : ""}`}>
        <AdminLayoutInner>{children}</AdminLayoutInner>
      </div>
    </LocaleProvider>
  );
}
