"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { SignIn } from "@clerk/nextjs";
import Link from "next/link";

type Role = "employer" | "provider";

export function LoginContent() {
  const searchParams = useSearchParams();
  const [role, setRole] = useState<Role>("employer");

  useEffect(() => {
    const param = searchParams.get("role");
    if (param === "employer" || param === "provider") {
      setRole(param);
    }
  }, [searchParams]);

  // Store selected role so post-login redirect can use it
  useEffect(() => {
    localStorage.setItem("apreo_selected_role", role);
  }, [role]);

  const afterSignInUrl =
    role === "employer" ? "/onboarding/employer" : "/onboarding/provider";

  return (
    <div className="bg-surface-container-lowest font-body text-on-surface">
      <main className="flex min-h-screen flex-col md:flex-row overflow-hidden">
        {/* Left Column: Bold branded panel */}
        <section className="relative hidden md:flex md:w-[45%] lg:w-[40%] bg-primary overflow-hidden flex-col justify-between p-12">
          {/* Background Grid */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <div className="h-full p-4 opacity-40 grid grid-cols-4 grid-rows-4 gap-4">
              <div className="bg-secondary-container rounded-lg col-span-2 row-span-1 shadow-2xl" />
              <div className="bg-tertiary rounded-lg col-span-1 row-span-3 shadow-2xl" />
              <div className="bg-primary-container rounded-lg col-span-1 row-span-1 shadow-2xl" />
              <div className="bg-on-primary/10 border border-white/20 backdrop-blur-sm rounded-lg col-span-2 row-span-2" />
              <div className="bg-secondary rounded-lg col-span-1 row-span-2 shadow-2xl" />
              <div className="bg-tertiary-container rounded-lg col-span-1 row-span-1 shadow-2xl" />
              <div className="bg-white/5 rounded-lg col-span-3 row-span-1" />
            </div>
          </div>

          {/* Content Overlay */}
          <div className="relative z-10">
            <Link
              href="/"
              className="flex items-center gap-4 text-on-primary text-4xl font-headline font-bold tracking-tighter mb-16"
            >
              <span className="material-symbols-outlined text-white text-3xl">
                grid_view
              </span>
              APREO
            </Link>
            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-lg -rotate-1 transform border border-white/20">
                <span className="font-headline font-bold text-2xl text-on-primary uppercase block">
                  Trade-Specific Matching
                </span>
                <p className="text-on-primary/80 mt-2">
                  Precision alignment between industrial talent and project
                  requirements.
                </p>
              </div>
              <div className="bg-secondary-container p-6 rounded-lg rotate-1 transform shadow-2xl">
                <span className="font-headline font-bold text-2xl text-on-secondary-container uppercase block">
                  Readiness-Based Profiles
                </span>
                <p className="text-on-secondary-container/80 mt-2">
                  Validated skill sets verified by industry veterans.
                </p>
              </div>
              <div className="bg-tertiary p-6 rounded-lg -rotate-1 transform shadow-2xl">
                <span className="font-headline font-bold text-2xl text-on-tertiary uppercase block">
                  Built for the Trades
                </span>
                <p className="text-on-tertiary/80 mt-2">
                  Infrastructure-ready recruitment for modern Australian
                  worksites.
                </p>
              </div>
            </div>
          </div>

          <div className="relative z-10 mt-auto">
            <div className="flex items-center gap-4 bg-black/20 p-4 rounded-xl backdrop-blur-sm border border-white/10">
              <div className="w-12 h-12 bg-white rounded-full overflow-hidden ring-2 ring-white/20">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  alt="Professional construction site supervisor"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAM1tgtJvE3wGSQvOxA8ZfdDJno4SD7CjHy8SVcGjr0uyHd9nI4IbcbJ6Vn2RwFUQLFxwYerrSCynoIM7P38my1L2IQRdi5BMU2tSYF1EvDN-3EcyzKK5ASCK0iF1wCRcjKSRnBE9U1rtSXTChAsiUSGJunid9Dy3ivO54Y3nI8lgOu9w6eft-mn-qgiR-ApYpV2QlNl9MULs4fT_zIZqiheQkFIRl328WOeQmjWt7lyEaBufrMMiQci2jp4zQNKMCq6_S8xt8rIiY"
                />
              </div>
              <div>
                <p className="text-on-primary font-bold text-sm">
                  Supporting Melbourne&apos;s growth.
                </p>
                <p className="text-on-primary/60 text-xs">
                  Apreo Industrial Ecosystem v2.4
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Right Column: Authentication area */}
        <section className="flex-1 relative flex flex-col justify-center items-center p-6 md:p-12 lg:p-24 bg-surface overflow-hidden">
          {/* Background Layers */}
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(0,75,226,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,75,226,0.05) 1px, transparent 1px)",
              backgroundSize: "80px 80px",
            }}
          />
          <div
            className="absolute inset-0 z-0"
            style={{
              backgroundImage:
                "radial-gradient(#004be2 0.5px, transparent 0.5px)",
              backgroundSize: "32px 32px",
              opacity: 0.08,
            }}
          />

          {/* Background Shapes */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <div className="absolute top-[-5%] left-[-10%] w-[400px] h-[400px] bg-tertiary/5 rounded-full blur-[100px]" />
            <div className="absolute bottom-[-10%] right-[-5%] w-[500px] h-[500px] bg-secondary-container/10 rounded-full blur-[120px]" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-primary/5 rounded-[100%] rotate-45 blur-[150px]" />
          </div>

          <div className="w-full max-w-md relative z-10">
            {/* Brand Mobile Header */}
            <div className="md:hidden flex justify-center mb-12">
              <Link
                href="/"
                className="flex items-center gap-3 text-primary font-headline font-bold text-3xl tracking-tighter"
              >
                <span className="material-symbols-outlined text-primary text-2xl">
                  grid_view
                </span>
                APREO
              </Link>
            </div>

            <div className="mb-10 text-center md:text-left">
              <h1 className="font-headline font-bold text-4xl text-on-surface mb-3 tracking-tight">
                Access Apreo
              </h1>
              <p className="text-on-surface-variant text-lg">
                Sign in to review matches, manage hiring, or partner on
                apprenticeship pathways.
              </p>
            </div>

            {/* Role Selection */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <button
                onClick={() => setRole("employer")}
                className={`flex flex-col items-center justify-center p-4 border-2 backdrop-blur-sm rounded-xl transition-all active:scale-95 ${
                  role === "employer"
                    ? "border-primary bg-white/90 shadow-sm hover:shadow-lg"
                    : "border-transparent bg-white/60 hover:border-outline-variant"
                }`}
              >
                <span
                  className={`material-symbols-outlined mb-2 ${
                    role === "employer"
                      ? "text-primary"
                      : "text-on-surface-variant"
                  }`}
                  style={{
                    fontVariationSettings:
                      role === "employer" ? "'FILL' 1" : "'FILL' 0",
                  }}
                >
                  business_center
                </span>
                <span
                  className={`font-bold text-sm uppercase tracking-wider ${
                    role === "employer"
                      ? "text-primary"
                      : "text-on-surface-variant"
                  }`}
                >
                  Employer
                </span>
              </button>
              <button
                onClick={() => setRole("provider")}
                className={`flex flex-col items-center justify-center p-4 border-2 backdrop-blur-sm rounded-xl transition-all active:scale-95 ${
                  role === "provider"
                    ? "border-primary bg-white/90 shadow-sm hover:shadow-lg"
                    : "border-transparent bg-white/60 hover:border-outline-variant"
                }`}
              >
                <span
                  className={`material-symbols-outlined mb-2 ${
                    role === "provider"
                      ? "text-primary"
                      : "text-on-surface-variant"
                  }`}
                  style={{
                    fontVariationSettings:
                      role === "provider" ? "'FILL' 1" : "'FILL' 0",
                  }}
                >
                  school
                </span>
                <span
                  className={`font-bold text-sm uppercase tracking-wider ${
                    role === "provider"
                      ? "text-primary"
                      : "text-on-surface-variant"
                  }`}
                >
                  Provider
                </span>
              </button>
            </div>

            {/* Clerk Sign-In Component */}
            <div className="flex justify-center">
              <SignIn
                forceRedirectUrl={afterSignInUrl}
                appearance={{
                  elements: {
                    rootBox: "w-full",
                    cardBox: "w-full shadow-none",
                    card: "w-full bg-white/70 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,75,226,0.1)] border border-white/80 rounded-2xl",
                    headerTitle: "hidden",
                    headerSubtitle: "hidden",
                    socialButtonsBlockButton:
                      "bg-white border border-outline-variant/20 hover:bg-surface-container-low font-bold",
                    formFieldInput:
                      "bg-white border-2 border-transparent focus:border-primary rounded-lg",
                    formButtonPrimary:
                      "bg-secondary-container hover:bg-secondary-fixed text-on-secondary-container font-headline font-bold text-lg rounded-lg",
                    footerActionLink: "text-primary font-bold",
                  },
                }}
              />
            </div>

            <div className="mt-8 text-center">
              <p className="text-on-surface-variant text-sm flex items-center justify-center gap-2">
                <span className="material-symbols-outlined text-sm">lock</span>
                Passwordless sign-in for secure access.
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full py-8 px-6 bg-zinc-900 text-sm tracking-wide relative z-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 text-lg font-black text-white">
            <span className="material-symbols-outlined text-white text-xl">
              grid_view
            </span>
            APREO
          </div>
          <div className="flex gap-8 text-zinc-400">
            <a
              className="hover:text-white transition-all opacity-80 hover:opacity-100"
              href="#"
            >
              Terms of Service
            </a>
            <a
              className="hover:text-white transition-all opacity-80 hover:opacity-100"
              href="#"
            >
              Privacy Policy
            </a>
            <a
              className="hover:text-white transition-all opacity-80 hover:opacity-100"
              href="#"
            >
              Help Center
            </a>
          </div>
          <div className="text-zinc-500 uppercase tracking-tighter text-xs">
            &copy; {new Date().getFullYear()} APREO PLATFORM. ALL RIGHTS
            RESERVED.
          </div>
        </div>
      </footer>
    </div>
  );
}
