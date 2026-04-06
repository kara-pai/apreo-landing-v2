"use client";

import { useState } from "react";
import { Show, UserButton } from "@clerk/nextjs";

const NAV_LINKS = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "For Employers", href: "#employers" },
  { label: "For Training Providers", href: "#training-providers" },
  { label: "FAQ", href: "#faq" },
] as const;

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#2962FF] w-full">
      <div className="flex justify-between items-center px-6 py-4 w-full max-w-[1440px] mx-auto">
        <div className="flex items-center gap-4">
          <span className="material-symbols-outlined text-white text-2xl">
            grid_view
          </span>
          <h1 className="text-3xl font-black tracking-tighter text-white font-headline">
            APREO
          </h1>
        </div>

        <nav className="hidden md:flex gap-8 items-center font-headline font-bold text-sm">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              className="text-white opacity-90 hover:bg-[#FFD600] hover:text-[#212121] transition-colors duration-150 px-2 py-1"
              href={link.href}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Show when="signed-out">
            <a
              href="/login?role=employer"
              className="hidden sm:block bg-[#FFD600] text-[#212121] font-headline font-black px-6 py-2 rounded-lg hover:scale-95 transition-transform active:transition-transform duration-150"
            >
              Hire Apprentices
            </a>
          </Show>
          <Show when="signed-in">
            <a
              href="/dashboard/employer"
              className="hidden sm:block bg-[#FFD600] text-[#212121] font-headline font-black px-6 py-2 rounded-lg hover:scale-95 transition-transform active:transition-transform duration-150"
            >
              Dashboard
            </a>
            <UserButton />
          </Show>
          <button
            className="md:hidden text-white"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className="material-symbols-outlined text-3xl">
              {menuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav className="md:hidden bg-[#2962FF] px-6 pb-6 space-y-2 font-headline font-bold text-sm">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              className="block text-white opacity-90 hover:bg-[#FFD600] hover:text-[#212121] transition-colors duration-150 px-2 py-2"
              href={link.href}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="/login?role=employer"
            className="block sm:hidden bg-[#FFD600] text-[#212121] font-headline font-black px-4 py-2 rounded-lg text-center mt-4"
            onClick={() => setMenuOpen(false)}
          >
            Hire Apprentices
          </a>
        </nav>
      )}
    </header>
  );
}
