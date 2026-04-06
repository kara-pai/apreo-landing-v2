"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const SIDEBAR_NAV = [
  { icon: "dashboard", label: "Overview", href: "#", active: true },
  { icon: "business", label: "Employers", href: "#", active: false },
  { icon: "school", label: "Students", href: "#", active: false },
  { icon: "handshake", label: "Placements", href: "#", active: false },
  { icon: "description", label: "Documents", href: "#", active: false },
  { icon: "verified_user", label: "Compliance", href: "#", active: false },
  { icon: "mail", label: "Messages", href: "#", active: false },
  { icon: "settings", label: "Settings", href: "#", active: false },
] as const;

const MOBILE_NAV = [
  { icon: "home", label: "Home", active: true },
  { icon: "business", label: "Emp", active: false },
  { icon: "school", label: "Stu", active: false },
  { icon: "notifications", label: "Alerts", active: false },
  { icon: "menu", label: "Menu", active: false },
] as const;

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isProvider = pathname.includes("/provider");

  return (
    <div className="bg-surface text-on-surface min-h-screen">
      {/* Top App Bar */}
      <header className="fixed top-0 w-full z-50 bg-primary text-white shadow-lg shadow-blue-900/20 font-headline font-bold uppercase tracking-tighter flex justify-between items-center px-6 h-16">
        <Link
          href="/"
          className="text-2xl font-black text-white flex items-center gap-2"
        >
          <span className="material-symbols-outlined">grid_view</span>
          APREO
        </Link>
        <div className="flex items-center gap-4">
          <div className="hidden md:flex gap-6 mr-6">
            <span className="text-yellow-400 font-bold hover:bg-white/10 transition-colors px-3 py-1 rounded cursor-pointer">
              Overview
            </span>
            <span className="text-white/80 hover:bg-white/10 transition-colors px-3 py-1 rounded cursor-pointer">
              {isProvider ? "Students" : "Employers"}
            </span>
            <span className="text-white/80 hover:bg-white/10 transition-colors px-3 py-1 rounded cursor-pointer">
              {isProvider ? "Dashboard" : "Students"}
            </span>
          </div>
          <div className="w-10 h-10 rounded-full bg-primary-container flex items-center justify-center border-2 border-white/20 text-sm font-black">
            {isProvider ? "TP" : "EP"}
          </div>
        </div>
      </header>

      {/* Sidebar */}
      <aside className="hidden md:flex flex-col py-4 h-screen w-64 fixed left-0 top-16 bg-slate-50 font-body font-semibold text-sm border-r border-slate-200">
        <div className="px-6 py-4 text-blue-700 font-black tracking-widest text-xs">
          {isProvider ? "PROVIDER OPS" : "OPERATIONS"}
        </div>
        <nav className="flex-1">
          {SIDEBAR_NAV.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`mx-2 my-1 px-4 py-3 flex items-center gap-3 rounded-lg transition-transform hover:translate-x-1 ${
                item.active
                  ? "bg-blue-600 text-white"
                  : "text-slate-600 hover:bg-slate-200"
              }`}
            >
              <span className="material-symbols-outlined">{item.icon}</span>
              {item.label}
            </a>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="pt-20 pb-24 md:pl-64 px-4 md:px-8">{children}</main>

      {/* Mobile Bottom Nav */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center h-16 px-4 bg-white/80 backdrop-blur-xl border-t border-slate-200 shadow-[0_-4px_20px_rgba(0,0,0,0.05)]">
        {MOBILE_NAV.map((item) => (
          <a
            key={item.label}
            href="#"
            className={`flex flex-col items-center justify-center text-[10px] uppercase font-bold px-3 py-1 ${
              item.active
                ? "text-blue-600 bg-blue-50 rounded-xl"
                : "text-slate-400"
            }`}
          >
            <span className="material-symbols-outlined">{item.icon}</span>
            {item.label}
          </a>
        ))}
      </nav>

      {/* FAB */}
      <button className="fixed bottom-20 right-6 w-14 h-14 bg-primary text-white rounded-full shadow-2xl flex items-center justify-center md:bottom-8 md:right-8 group transition-all active:scale-95 duration-150 z-40">
        <span className="material-symbols-outlined text-3xl">add_task</span>
        <span className="absolute right-full mr-4 bg-on-surface text-white text-[10px] px-3 py-1 rounded opacity-0 group-hover:opacity-100 whitespace-nowrap pointer-events-none transition-opacity">
          Quick Match
        </span>
      </button>
    </div>
  );
}
