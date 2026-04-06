"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const BOTTOM_NAV = [
  { icon: "handshake", label: "Matches", href: "#", active: false },
  { icon: "assignment_ind", label: "Postings", href: "#", active: true },
  { icon: "bolt", label: "Messages", href: "#", active: false },
  { icon: "settings", label: "Account", href: "#", active: false },
] as const;

export default function OnboardingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isSetup = pathname.includes("/setup");

  return (
    <div className="bg-surface font-body text-on-surface min-h-screen">
      {/* Top App Bar */}
      <header className="fixed top-0 w-full z-50 bg-blue-600 flex justify-between items-center px-6 py-4">
        <div className="flex items-center gap-4">
          <Link href="/">
            <span className="material-symbols-outlined text-white text-2xl cursor-pointer hover:bg-blue-500/20 p-2 rounded-lg transition-transform duration-150 ease-out active:scale-95">
              menu
            </span>
          </Link>
          <Link
            href="/"
            className="text-2xl font-bold tracking-tighter text-white uppercase font-headline"
          >
            APREO
          </Link>
        </div>
        <div className="flex items-center gap-6">
          <nav className="hidden md:flex gap-8">
            <span className="text-yellow-400 font-bold font-label uppercase tracking-wider text-sm">
              Postings
            </span>
            <span className="text-white/80 font-label uppercase tracking-wider text-sm hover:text-white transition-colors cursor-pointer">
              Resources
            </span>
            <span className="text-white/80 font-label uppercase tracking-wider text-sm hover:text-white transition-colors cursor-pointer">
              Pricing
            </span>
          </nav>
          <div className="w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center text-blue-900 font-bold border-2 border-white/20 text-sm">
            EP
          </div>
        </div>
      </header>

      {children}

      {/* Bottom Nav Bar (Mobile Only) */}
      {!isSetup && (
        <nav className="md:hidden fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-4 pb-6 pt-2 bg-white/80 backdrop-blur-xl shadow-[0_-8px_32px_rgba(0,0,0,0.06)]">
          {BOTTOM_NAV.map((item) => (
            <div
              key={item.label}
              className={`flex flex-col items-center justify-center px-4 py-1.5 ${
                item.active
                  ? "bg-yellow-400 text-blue-900 rounded-lg -translate-y-1"
                  : "text-slate-500"
              }`}
            >
              <span className="material-symbols-outlined">{item.icon}</span>
              <span className="font-label font-bold text-[11px] uppercase tracking-wider mt-1">
                {item.label}
              </span>
            </div>
          ))}
        </nav>
      )}
    </div>
  );
}
