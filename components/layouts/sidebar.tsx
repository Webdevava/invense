"use client";

import React from "react";
import { usePathname, useRouter } from "next/navigation";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  SidebarClose,
  Menu,
  Home,
  BarChart3,
  FileText,
  MapPin,
  Building,
  Building2,
  Monitor,
  Users,
  BrainCircuit,
} from "lucide-react";
import { useSidebarStore } from "@/stores/sidebarStore";

const menuItems = [
  { name: "Home", icon: Home, href: "/" },
  { name: "Dashboard", icon: BarChart3, href: "/dashboard" },
  { name: "Reports", icon: FileText, href: "/reports" },
  { name: "Location", icon: MapPin, href: "/location" },
  { name: "Company", icon: Building, href: "/company" },
  { name: "Sub Location", icon: Building2, href: "/sub-location" },
  { name: "Device", icon: Monitor, href: "/device" },
  { name: "Users & Roles", icon: Users, href: "/users" },
];

export const Sidebar = () => {
  const { isCollapsed, isMobileOpen, toggleSidebar, toggleMobileSidebar, closeMobileSidebar } = useSidebarStore();
  const pathname = usePathname();
  const router = useRouter();

  const handleNavigation = (href: string) => {
    router.push(href);
    closeMobileSidebar();
  };

  const handleLogoClick = () => {
    router.push("/#");
  };

  return (
    <aside
      className={cn(
        "h-[calc(100vh-1rem)] border rounded-lg bg-sidebar transition-all duration-300 ease-in-out flex-shrink-0 sticky top-2 z-50",
        isCollapsed && !isMobileOpen ? "w-16" : "w-64",
        isMobileOpen ? "fixed inset-y-2 left-2 w-64" : "hidden md:block",
        isMobileOpen && "shadow-2xl",
        // Add transform for animation
        isMobileOpen ? "translate-x-0" : "-translate-x-[calc(100%+0.5rem)]",
        "md:translate-x-0" // Ensure no transform on desktop
      )}
      style={{
        transitionProperty: "width, transform",
        transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
      }}
    >
      <div className="flex items-center justify-between h-16 rounded-t-lg p-3">
        {!isCollapsed && (
          <button
            onClick={handleLogoClick}
            className="flex items-center gap-2 font-semibold font-mono text-xl transition-colors hover:opacity-80"
          >
            <div className="bg-primary text-primary-foreground flex size-8 items-center justify-center rounded-md">
              <BrainCircuit className="size-6" />
            </div>
            EL-EXE
          </button>
        )}
        <Button
          variant="outline"
          size="icon"
          className={cn(
            "cursor-pointer hover:bg-secondary hover:text-primary transition-colors",
            isCollapsed && "mx-auto"
          )}
          onClick={isMobileOpen ? toggleMobileSidebar : toggleSidebar}
        >
          {isCollapsed || isMobileOpen ? <Menu size={20} /> : <SidebarClose size={20} />}
        </Button>
      </div>

      <Separator />

      <nav className="p-3">
        <ul className="flex flex-col gap-1">
          {menuItems.map((item) => {
            const IconComponent = item.icon;
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href);

            return (
              <li key={item.name}>
                <button
                  onClick={() => handleNavigation(item.href)}
                  className={cn(
                    "w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm font-medium transition-all duration-200",
                    "hover:bg-primary/25 hover:text-primary",
                    "text-muted-foreground hover:text-foreground",
                    "group relative",
                    (isCollapsed || isMobileOpen) && " px-2",
                    isActive && "bg-primary hover:bg-primary hover:text-muted text-muted font-semibold"
                  )}
                  title={isCollapsed ? item.name : undefined}
                >
                  <IconComponent size={20} className="shrink-0" />
                  {!(isCollapsed && !isMobileOpen) && (
                    <span className="truncate transition-opacity duration-200">
                      {item.name}
                    </span>
                  )}
                  {(isCollapsed && !isMobileOpen) && (
                    <div className="absolute left-full ml-2 px-2 py-1 bg-popover text-popover-foreground text-xs rounded-md shadow-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap z-50">
                      {item.name}
                    </div>
                  )}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      {(isCollapsed && !isMobileOpen) && (
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
          <div className="w-8 h-1 bg-muted rounded-full opacity-50"></div>
        </div>
      )}
    </aside>
  );
};

export const SidebarContent = ({ children }: { children: React.ReactNode }) => {
  const { isCollapsed, isMobileOpen } = useSidebarStore();

  return (
    <div
      className={cn(
        "flex-1 transition-all duration-300 ease-in-out",
        isMobileOpen ? "ml-0" : isCollapsed ? "ml-0" : "ml-0"
      )}
    >
      {children}
    </div>
  );
};