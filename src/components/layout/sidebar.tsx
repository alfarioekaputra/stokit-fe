import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  LayoutDashboard,
  ShoppingCart,
  PackageSearch,
  BarChart4,
  ScrollText,
  Settings,
  HelpCircle,
  Layers,
  FileStack,
} from "lucide-react";
import { Link, useLocation } from "@tanstack/react-router";

const navigation = [
  { name: "Dashboard", href: "/app/dashboard", icon: LayoutDashboard },
  { name: "Category", href: "/app/category", icon: FileStack },
  { name: "Inventory", href: "/inventory", icon: PackageSearch },
  { name: "Cashier", href: "/cashier", icon: ShoppingCart },
  { name: "Accounting", href: "/accounting", icon: ScrollText },
  { name: "Reports", href: "/reporting", icon: BarChart4 },
];

const secondaryNavigation = [
  { name: "Settings", href: "/settings", icon: Settings },
  { name: "Help", href: "/help", icon: HelpCircle },
];

export default function Sidebar() {
  const location = useLocation();

  return (
    <aside className="fixed inset-y-0 left-0 z-50 flex w-64 flex-col border-r bg-background md:static">
      <div className="flex h-16 items-center border-b px-6">
        <Link to="/" className="flex items-center gap-2 font-semibold">
          <Layers className="h-6 w-6 text-primary" />
          <span className="text-lg font-semibold">Stokit</span>
        </Link>
      </div>
      <nav className="flex-1 overflow-auto py-4">
        <div className="px-3 py-2">
          <div className="space-y-1">
            {navigation.map((item) => {
              const isActive =
                location.pathname === item.href ||
                (item.href !== "/" && location.pathname.startsWith(item.href));

              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    "group flex items-center rounded-md px-2 py-1.5 text-sm font-medium",
                    isActive
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:bg-muted hover:text-foreground",
                  )}
                >
                  <item.icon
                    className={cn(
                      "mr-3 h-5 w-5",
                      isActive
                        ? "text-primary-foreground"
                        : "text-muted-foreground group-hover:text-foreground",
                    )}
                  />
                  {item.name}
                </Link>
              );
            })}
          </div>
        </div>
        <div className="mt-10">
          <p className="px-5 text-xs font-semibold text-muted-foreground">
            SUPPORT
          </p>
          <div className="mt-2 space-y-1 px-3 py-2">
            {secondaryNavigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="group flex items-center rounded-md px-2 py-1.5 text-sm font-medium text-muted-foreground hover:bg-muted hover:text-foreground"
              >
                <item.icon className="mr-3 h-5 w-5 text-muted-foreground group-hover:text-foreground" />
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </nav>
      <div className="border-t p-4">
        <Button variant="outline" className="w-full">
          <HelpCircle className="mr-2 h-4 w-4" />
          Support
        </Button>
      </div>
    </aside>
  );
}
