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
    <div className="min-h-screen bg-[#f8fafc] flex">
      {/* Sidebar (Desktop) */}
      <aside className="hidden lg:flex flex-col w-[280px] h-screen bg-white border-r border-gray-100 p-6 sticky top-0 z-40 shadow-[4px_0_24px_rgba(0,0,0,0.01)]">
        
        {/* Brand Logo - Top */}
        <Link href="/" className="flex items-center gap-3 mb-10 px-2 group">
          <div className="h-9 w-9 flex items-center justify-center rounded-xl overflow-hidden shrink-0 shadow-sm group-hover:shadow transition-all">
            <img src="/logo.png" alt="Raahi" className="w-full h-full object-cover" />
          </div>
          <span className="text-2xl font-bold tracking-tight text-text-primary group-hover:text-primary transition-colors">Raahi</span>
        </Link>

        {/* Nav Links */}
        <nav className="flex-1 space-y-2">
          {sidebarLinks.map((link) => {
            const Icon = link.icon;
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`flex items-center gap-3.5 px-4 py-3.5 rounded-2xl text-sm font-semibold transition-all relative ${
                  isActive
                    ? "bg-primary/10 text-primary shadow-sm"
                    : "text-text-secondary hover:bg-gray-50 hover:text-text-primary"
                }`}
              >
                {isActive && (
                  <motion.div 
                    layoutId="active-nav-indicator"
                    className="absolute left-0 top-1/2 -translate-y-1/2 w-1.5 h-8 bg-primary rounded-r-full"
                  />
                )}
                <Icon size={20} className={isActive ? "text-primary" : "text-gray-400"} />
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Bottom Section: User Profile & Logout */}
        <div className="mt-auto pt-6 border-t border-gray-100">
          <div className="flex items-center gap-3 p-3 mb-2 rounded-2xl border border-gray-100 bg-gray-50/50">
            <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold shadow-sm">
              {user?.name?.charAt(0)?.toUpperCase() || "U"}
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-sm font-bold text-text-primary truncate">
                {user?.name || "User"}
              </p>
              <p className="text-xs font-medium text-text-muted truncate">
                {user?.email || ""}
              </p>
            </div>
          </div>
          
          <button
            onClick={() => {
              logout();
              router.push("/");
            }}
            className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl text-sm font-bold text-gray-500 hover:text-red-600 hover:bg-red-50 transition-colors"
          >
            <LogOut size={18} />
            Log Out
          </button>
        </div>
      </aside>

      {/* Mobile Top Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 h-[72px] bg-white/90 backdrop-blur-xl border-b border-gray-100 flex items-center px-5 z-40">
        <Link href="/" className="flex items-center gap-2.5">
          <div className="h-9 w-9 flex items-center justify-center rounded-xl overflow-hidden shrink-0 shadow-sm">
            <img src="/logo.png" alt="Raahi" className="w-full h-full object-cover" />
          </div>
          <span className="text-xl font-bold tracking-tight text-text-primary">Raahi</span>
        </Link>
      </div>

      {/* Mobile Bottom Nav */}
      <div className="fixed bottom-0 left-0 right-0 bg-white/90 backdrop-blur-xl border-t border-gray-100 flex items-center justify-around py-3 px-2 z-50 lg:hidden shadow-[0_-10px_20px_rgba(0,0,0,0.02)]">
        {sidebarLinks.map((link) => {
          const Icon = link.icon;
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`flex flex-col items-center gap-1 p-2 rounded-xl transition-colors relative ${
                isActive ? "text-primary" : "text-text-muted hover:text-text-primary"
              }`}
            >
              <Icon size={22} className={isActive ? "text-primary fill-primary/10" : ""} />
              <span className="text-[10px] font-bold">{link.label}</span>
            </Link>
          );
        })}
      </div>

      {/* Main Content Area */}
      <main className="flex-1 w-full max-w-[1400px] min-h-screen pt-[88px] pb-24 lg:pt-8 lg:pb-8 px-4 sm:px-8 lg:px-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={pathname}
            initial={{ opacity: 0, scale: 0.98, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98, y: -10 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}
