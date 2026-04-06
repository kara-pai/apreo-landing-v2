"use client";

import Link from "next/link";

export default function AccountSetup() {
  return (
    <main className="pt-24 pb-12 px-6 max-w-6xl mx-auto">
      {/* Progress Header */}
      <div className="mb-12">
        <div className="flex items-baseline gap-4 mb-2">
          <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-tight text-primary font-headline">
            ACCOUNT SETUP
          </h1>
          <div className="h-1 flex-grow bg-surface-container rounded-full">
            <div className="h-full w-2/3 bg-secondary-container rounded-full" />
          </div>
          <span className="text-sm font-bold text-on-surface-variant uppercase">
            Step 02/03
          </span>
        </div>
        <p className="text-xl font-medium text-on-surface-variant max-w-2xl">
          Your role is set as{" "}
          <span className="text-primary font-bold">Employer</span>. Let&apos;s
          finish building your workspace.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-primary rounded-xl p-8 text-white relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-2xl font-bold uppercase mb-6 tracking-wide font-headline">
                Secure Access
              </h2>
              <div className="space-y-4">
                <button className="w-full bg-white text-on-surface flex items-center justify-center gap-3 py-4 rounded-lg font-bold transition-all hover:scale-[1.02] active:scale-95">
                  <svg className="w-6 h-6" viewBox="0 0 24 24">
                    <path
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      fill="#4285F4"
                    />
                    <path
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      fill="#34A853"
                    />
                    <path
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      fill="#FBBC05"
                    />
                    <path
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      fill="#EA4335"
                    />
                  </svg>
                  Continue with Google
                </button>
                <div className="flex items-center gap-4 text-white/50 py-2">
                  <div className="h-px flex-grow bg-white/20" />
                  <span className="text-xs font-bold uppercase tracking-widest">
                    or
                  </span>
                  <div className="h-px flex-grow bg-white/20" />
                </div>
                <button className="w-full border-2 border-white/30 hover:border-white text-white py-4 rounded-lg font-bold transition-all flex items-center justify-center gap-3">
                  <span className="material-symbols-outlined">mail</span>
                  Continue with Business Email
                </button>
              </div>
            </div>
            <div className="absolute -bottom-12 -right-12 w-48 h-48 bg-primary-container rounded-full opacity-20" />
          </div>

          <div className="bg-surface-container p-6 rounded-xl">
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-headline font-bold uppercase text-on-surface-variant tracking-wider">
                Linked Organization
              </h3>
              <span
                className="material-symbols-outlined text-secondary-dim"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                verified_user
              </span>
            </div>
            <div className="flex items-center gap-4 bg-surface-container-lowest p-4 rounded-lg">
              <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center shadow-sm">
                <span className="material-symbols-outlined text-primary text-3xl">
                  domain
                </span>
              </div>
              <div>
                <p className="font-bold text-lg leading-tight">
                  Your Company Ltd.
                </p>
                <p className="text-sm text-on-surface-variant">
                  Industry: Construction & Trades
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="lg:col-span-7">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="md:col-span-2 bg-secondary-container p-8 rounded-xl flex flex-col justify-between min-h-[300px]">
              <div>
                <span className="bg-on-secondary-container text-secondary-container px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4 inline-block transform -rotate-2">
                  Priority Task
                </span>
                <h2 className="text-3xl md:text-5xl font-headline font-bold uppercase leading-none text-on-secondary-container mb-4">
                  Set up profile
                </h2>
                <p className="text-on-secondary-container/80 max-w-md font-medium">
                  Complete your public hiring profile to start matching with
                  top-tier talent in your region.
                </p>
              </div>
              <div className="flex justify-end">
                <Link
                  href="/onboarding/employer/step-1"
                  className="bg-on-secondary-container text-secondary-container px-8 py-4 rounded-lg font-bold text-lg flex items-center gap-2 hover:gap-4 transition-all"
                >
                  BEGIN SETUP
                  <span className="material-symbols-outlined">
                    arrow_forward
                  </span>
                </Link>
              </div>
            </div>

            <div className="bg-surface-container-high p-6 rounded-xl flex flex-col justify-between group cursor-pointer hover:bg-primary hover:text-white transition-colors duration-300">
              <div className="w-12 h-12 rounded-lg bg-surface-container-lowest flex items-center justify-center mb-4 group-hover:bg-white/20">
                <span className="material-symbols-outlined text-primary group-hover:text-white">
                  branding_watermark
                </span>
              </div>
              <div>
                <h4 className="font-headline font-bold uppercase tracking-wider mb-1">
                  Company Branding
                </h4>
                <p className="text-sm opacity-70">
                  Add photos and culture values
                </p>
              </div>
            </div>

            <div className="bg-tertiary-container p-6 rounded-xl flex flex-col justify-between group cursor-pointer hover:scale-[1.02] transition-transform">
              <div className="flex justify-between items-start">
                <div className="w-12 h-12 rounded-lg bg-white/20 flex items-center justify-center mb-4">
                  <span
                    className="material-symbols-outlined text-on-tertiary-container"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    group_add
                  </span>
                </div>
                <span className="text-[10px] font-bold bg-white/20 px-2 py-1 rounded uppercase tracking-tighter text-on-tertiary-container">
                  Quick Add
                </span>
              </div>
              <div>
                <h4 className="font-headline font-bold uppercase tracking-wider mb-1 text-on-tertiary-container">
                  Add Recruiters
                </h4>
                <p className="text-sm text-on-tertiary-container/70">
                  Invite your hiring team members
                </p>
              </div>
            </div>

            {/* Pro Tip */}
            <div className="md:col-span-2 relative mt-4">
              <div className="absolute -top-4 -right-2 bg-on-background text-surface px-4 py-2 rounded font-headline font-bold uppercase text-xs tracking-widest shadow-xl transform rotate-3 z-10">
                Pro Tip
              </div>
              <div className="bg-surface-container-low/80 backdrop-blur-md p-6 rounded-xl border border-white/20 shadow-lg">
                <div className="flex gap-4 items-center">
                  <div className="bg-secondary-fixed p-3 rounded-full">
                    <span className="material-symbols-outlined text-on-secondary-fixed">
                      bolt
                    </span>
                  </div>
                  <p className="text-sm font-medium">
                    Employers with a{" "}
                    <span className="font-bold">profile photo</span> receive 45%
                    more direct applications from qualified specialists.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
