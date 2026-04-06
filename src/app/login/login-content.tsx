"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

type Role = "employer" | "provider";

const GOOGLE_ICON = (
  <svg className="w-5 h-5" viewBox="0 0 24 24">
    <path
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      fill="#4285F4"
    />
    <path
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      fill="#34A853"
    />
    <path
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
      fill="#FBBC05"
    />
    <path
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      fill="#EA4335"
    />
  </svg>
);

export function LoginContent() {
  const searchParams = useSearchParams();
  const [role, setRole] = useState<Role>("employer");
  const [email, setEmail] = useState("");

  useEffect(() => {
    const param = searchParams.get("role");
    if (param === "employer" || param === "provider") {
      setRole(param);
    }
  }, [searchParams]);

  return (
    <div className="flex flex-col min-h-screen max-w-md mx-auto relative overflow-hidden bg-surface-container-low">
      {/* Header */}
      <header className="bg-primary pt-8 pb-12 px-6 flex flex-col gap-8 relative overflow-hidden">
        <div className="flex justify-between items-center z-10">
          <Link href="/" className="flex items-center gap-4">
            <span
              className="material-symbols-outlined text-white text-2xl"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              grid_view
            </span>
            <h1 className="text-3xl font-black tracking-tighter text-white font-headline">
              APREO
            </h1>
          </Link>
          <Link
            href="/"
            className="w-10 h-10 flex items-center justify-center rounded-xl bg-primary-container/20 text-surface"
            aria-label="Back to home"
          >
            <span className="material-symbols-outlined">close</span>
          </Link>
        </div>

        <div className="z-10 mt-4">
          <h1 className="font-headline font-bold text-5xl leading-[0.9] text-surface-bright uppercase tracking-tighter mb-4">
            Access <br />
            Apreo
          </h1>
          <p className="text-on-primary text-lg font-medium leading-tight max-w-[85%] opacity-90">
            Sign in to review matches, manage hiring, or partner on
            apprenticeship pathways.
          </p>
        </div>

        {/* Kinetic Background */}
        <div className="absolute -right-12 -bottom-12 w-64 h-64 bg-secondary rounded-full opacity-20 blur-3xl" />
        <div className="absolute top-0 right-0 w-32 h-32 bg-tertiary-container/10 -skew-x-12 translate-x-16" />
      </header>

      {/* Main Auth Content */}
      <main className="flex-1 -mt-6 bg-surface-container-lowest rounded-t-[2rem] px-6 pt-10 pb-12 z-20 shadow-xl">
        {/* Role Selection */}
        <div className="mb-8">
          <label className="text-xs font-bold font-headline text-on-surface-variant uppercase tracking-wider pl-1 block mb-3">
            Select your role
          </label>
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={() => setRole("employer")}
              className={`flex flex-col items-center justify-center gap-2 p-4 rounded-xl border-2 transition-all ${
                role === "employer"
                  ? "border-primary bg-primary/5 text-primary"
                  : "border-surface-container-high bg-white hover:border-primary/30 text-on-surface-variant"
              }`}
            >
              <span
                className="material-symbols-outlined text-2xl"
                style={{
                  fontVariationSettings:
                    role === "employer" ? "'FILL' 1" : "'FILL' 0",
                }}
              >
                precision_manufacturing
              </span>
              <span className="font-headline font-bold text-sm uppercase">
                Employer
              </span>
            </button>
            <button
              onClick={() => setRole("provider")}
              className={`flex flex-col items-center justify-center gap-2 p-4 rounded-xl border-2 transition-all ${
                role === "provider"
                  ? "border-primary bg-primary/5 text-primary"
                  : "border-surface-container-high bg-white hover:border-primary/30 text-on-surface-variant"
              }`}
            >
              <span
                className="material-symbols-outlined text-2xl"
                style={{
                  fontVariationSettings:
                    role === "provider" ? "'FILL' 1" : "'FILL' 0",
                }}
              >
                school
              </span>
              <span className="font-headline font-bold text-sm uppercase text-center leading-none">
                Training Provider
              </span>
            </button>
          </div>
        </div>

        {/* Auth Actions */}
        <div className="flex flex-col gap-6">
          {/* Google Auth */}
          <button className="w-full h-16 bg-primary hover:bg-primary-dim transition-colors rounded-xl flex items-center justify-center gap-3 px-6 shadow-lg shadow-primary/10">
            <div className="bg-white p-1.5 rounded-lg flex items-center justify-center">
              {GOOGLE_ICON}
            </div>
            <span className="text-on-primary font-headline font-bold text-lg">
              Continue with Google
            </span>
          </button>

          {/* Divider */}
          <div className="flex items-center gap-4 py-2">
            <div className="flex-1 h-[2px] bg-surface-container-high" />
            <span className="font-headline font-bold text-on-surface-variant uppercase tracking-widest text-sm">
              or
            </span>
            <div className="flex-1 h-[2px] bg-surface-container-high" />
          </div>

          {/* Email Input Flow */}
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold font-headline text-on-surface-variant uppercase tracking-wider pl-1">
                Work Email Address
              </label>
              <div className="relative group">
                <input
                  className="w-full h-14 px-4 bg-surface-container-high rounded-xl border-none focus:ring-2 focus:ring-primary font-medium text-on-surface placeholder:text-outline transition-all"
                  placeholder="name@company.com"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <span className="absolute right-4 top-4 material-symbols-outlined text-outline group-focus-within:text-primary">
                  mail
                </span>
              </div>
            </div>

            <button className="w-full h-16 bg-secondary-container hover:bg-secondary-fixed-dim transition-all rounded-xl flex items-center justify-center gap-2 group">
              <span className="text-on-secondary-container font-headline font-bold text-lg">
                Continue with Email
              </span>
              <span className="material-symbols-outlined text-on-secondary-container group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </button>

            <div className="flex gap-3 px-1">
              <span
                className="material-symbols-outlined text-tertiary text-lg shrink-0"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                info
              </span>
              <p className="text-sm text-on-surface-variant leading-relaxed">
                We&apos;ll send a secure sign-in link or code to your email. No
                password required.
              </p>
            </div>
          </div>
        </div>

        {/* Trust Elements */}
        <div className="mt-16 grid grid-cols-2 gap-4">
          <div className="bg-surface-container-high p-4 rounded-xl relative overflow-hidden -rotate-[2deg]">
            <span className="material-symbols-outlined text-primary mb-2">
              handyman
            </span>
            <h3 className="font-headline font-bold text-sm leading-tight text-on-surface uppercase">
              Trade-Specific
              <br />
              Matching
            </h3>
            <div className="absolute -right-2 -bottom-2 w-12 h-12 bg-primary/5 rounded-full" />
          </div>
          <div className="bg-tertiary-container p-4 rounded-xl relative overflow-hidden rotate-[2deg]">
            <span
              className="material-symbols-outlined text-on-tertiary-container mb-2"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              verified_user
            </span>
            <h3 className="font-headline font-bold text-sm leading-tight text-on-tertiary-container uppercase">
              Readiness-Based
              <br />
              Profiles
            </h3>
          </div>
        </div>

        {/* Footer Links */}
        <div className="mt-12 flex flex-col items-center gap-4">
          <div className="flex gap-6 text-xs font-bold font-headline uppercase tracking-widest text-outline">
            <a className="hover:text-primary transition-colors" href="#">
              Privacy
            </a>
            <a className="hover:text-primary transition-colors" href="#">
              Terms
            </a>
            <a className="hover:text-primary transition-colors" href="#">
              Help
            </a>
          </div>
          <p className="text-xs text-outline-variant font-medium">
            &copy; {new Date().getFullYear()} Apreo Apprenticeship Systems
          </p>
        </div>
      </main>

      {/* Floating Sticker */}
      <div className="absolute top-[62%] -right-4 z-30 rotate-[2deg]">
        <div className="bg-secondary-container text-on-secondary-container px-4 py-2 rounded-lg font-headline font-black text-xs uppercase shadow-xl border-4 border-surface-container-lowest">
          New: Path Matching
        </div>
      </div>
    </div>
  );
}
