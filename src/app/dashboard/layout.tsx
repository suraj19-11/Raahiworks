"use client";

import { useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { useAuth } from "@/lib/auth-context";
import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutDashboard,
  PlusCircle,
  ClipboardList,
  UserCircle,
  LogOut,
  Zap,
  ChevronRight,
} from "lucide-react";

const sidebarLinks = [
  { icon: LayoutDashboard, label: "Overview", href: "/dashboard" },
  { icon: PlusCircle, label: "Post a Job", href: "/dashboard/post-job" },
  { icon: ClipboardList, label: "My Jobs", href: "/dashboard/my-jobs" },
  { icon: UserCircle, label: "Profile", href: "/dashboard/profile" },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isAuthenticated, user, logout } = useAuth();
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/login");
    }
  }, [isAuthenticated, router]);

  if (!isAuthenticated) return null;

  return (
    <div className="min-h-screen bg-section-bg pt-[72px]">
      <div className="flex">
        {/* Sidebar */}
        <aside className="hidden lg:flex flex-col w-[260px] min-h-[calc(100vh-72px)] bg-white border-r border-gray-100 p-5 fixed top-[72px]">
          {/* User Card */}
          <div className="bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl p-4 mb-6">
            <div className="flex items-center gap-3">
              <div className="h-11 w-11 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold">
                {user?.name?.charAt(0)?.toUpperCase() || "U"}
              </div>
              <div className="min-w-0">
                <p className="text-sm font-semibold text-text-primary truncate">
                  {user?.name || "User"}
                </p>
                <p className="text-xs text-text-muted truncate">
                  {user?.email || ""}
                </p>
              </div>
            </div>
          </div>

          {/* Nav */}
          <nav className="flex-1 space-y-1">
            {sidebarLinks.map((link) => {
              const Icon = link.icon;
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                    isActive
                      ? "bg-primary/10 text-primary"
                      : "text-text-secondary hover:bg-section-bg hover:text-text-primary"
                  }`}
                >
                  <Icon size={19} />
                  {link.label}
                  {isActive && (
                    <ChevronRight size={14} className="ml-auto" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Logout */}
          <button
            onClick={() => {
              logout();
              router.push("/");
            }}
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-red-500 hover:bg-red-50 transition-colors mt-4"
          >
            <LogOut size={19} />
            Log Out
          </button>
        </aside>

        {/* Mobile Bottom Nav */}
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 flex items-center justify-around py-2 z-50 lg:hidden">
          {sidebarLinks.map((link) => {
            const Icon = link.icon;
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`flex flex-col items-center gap-1 px-3 py-1.5 rounded-lg transition-colors ${
                  isActive ? "text-primary" : "text-text-muted"
                }`}
              >
                <Icon size={20} />
                <span className="text-[10px] font-medium">{link.label}</span>
              </Link>
            );
          })}
        </div>

        {/* Main Content */}
        <main className="flex-1 lg:ml-[260px] p-5 sm:p-8 pb-24 lg:pb-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={pathname}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25 }}
            >
              {children}
            </motion.div>
          </AnimatePresence>
        </main>
      </div>
    </div>
  );
}
