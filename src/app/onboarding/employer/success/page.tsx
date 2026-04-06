"use client";

import Link from "next/link";

export default function Success() {
  return (
    <main className="flex-grow pt-24 pb-12 px-4 md:px-8 max-w-6xl mx-auto w-full">
      {/* Success Hero */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
        <div className="lg:col-span-8 bg-primary rounded-xl p-8 md:p-12 text-on-primary flex flex-col justify-between relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <span
              className="material-symbols-outlined text-[12rem]"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              check_circle
            </span>
          </div>
          <div className="relative z-10">
            <div className="inline-block bg-tertiary-container text-on-tertiary-container px-4 py-1 rounded-full mb-8 rotate-[-2deg] font-bold text-sm tracking-tight shadow-lg">
              CONFIRMED
            </div>
            <h1 className="text-5xl md:text-7xl font-bold uppercase leading-tight mb-6 font-headline">
              Request Received Successfully.
            </h1>
            <p className="text-xl md:text-2xl font-body max-w-xl opacity-90 leading-relaxed mb-12">
              We&apos;ll review your hiring request and follow up with pilot
              access details.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 mt-auto">
            <button className="bg-secondary-container text-on-secondary-container px-8 py-4 rounded-lg font-headline font-bold text-lg uppercase tracking-tight flex items-center justify-center gap-2 hover:-translate-y-1 transition-all duration-150 shadow-lg">
              Book a Call
              <span className="material-symbols-outlined">calendar_today</span>
            </button>
            <Link
              href="/"
              className="bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-lg font-headline font-bold text-lg uppercase tracking-tight flex items-center justify-center border border-white/20 hover:bg-white/20 transition-colors"
            >
              Return Home
            </Link>
          </div>
        </div>

        {/* Side Block */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          <div className="bg-surface-container-high rounded-xl p-8 flex flex-col justify-center items-start">
            <span className="material-symbols-outlined text-primary text-5xl mb-4">
              schedule
            </span>
            <h3 className="text-on-surface-variant uppercase font-headline font-bold text-sm tracking-widest mb-2">
              Response Timeline
            </h3>
            <div className="text-4xl font-headline font-extrabold text-on-surface leading-none mb-2">
              24-48
            </div>
            <div className="text-xl font-headline font-bold text-primary uppercase">
              Hours
            </div>
            <p className="mt-4 text-on-surface-variant text-sm leading-relaxed">
              Our specialized recruitment team is currently analyzing your
              specific role requirements to ensure the perfect match.
            </p>
          </div>
          <div className="bg-secondary rounded-xl p-8 text-on-secondary flex-grow relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="font-headline font-bold text-xl uppercase mb-4 leading-tight">
                Your pilot access includes:
              </h3>
              <ul className="space-y-4">
                {[
                  { icon: "bolt", text: "AI-Powered Shortlisting" },
                  { icon: "verified_user", text: "Background Verified Pilots" },
                  { icon: "analytics", text: "Performance Dashboards" },
                ].map((item) => (
                  <li key={item.icon} className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-secondary-container">
                      {item.icon}
                    </span>
                    <span className="text-sm font-bold uppercase tracking-tight">
                      {item.text}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Secondary Info */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-surface-container-low p-6 rounded-xl border-l-4 border-primary">
          <h4 className="font-headline font-bold text-primary text-xs uppercase tracking-widest mb-3">
            What happens next?
          </h4>
          <p className="text-on-surface text-sm leading-relaxed">
            You will receive an invitation to our secure portal where you can
            track candidate progression in real-time.
          </p>
        </div>
        <div className="bg-surface-container-low p-6 rounded-xl">
          <div className="flex items-center gap-3 mb-3">
            <span className="material-symbols-outlined text-on-surface-variant">
              mail
            </span>
            <h4 className="font-headline font-bold text-on-surface-variant text-xs uppercase tracking-widest">
              Email Check
            </h4>
          </div>
          <p className="text-on-surface text-sm leading-relaxed">
            Check your inbox for a confirmation email. If you don&apos;t see it,
            please check your spam folder.
          </p>
        </div>
        <div className="relative rounded-xl overflow-hidden min-h-[160px] bg-primary/10">
          <div className="absolute inset-0 bg-primary/40 mix-blend-multiply" />
          <div className="absolute inset-0 flex items-center justify-center p-6">
            <p className="text-white font-headline font-bold text-center text-sm uppercase tracking-tighter leading-tight">
              Our team is already processing your data.
            </p>
          </div>
        </div>
      </div>

      {/* Floating sticker (desktop) */}
      <div className="fixed top-24 right-8 z-50 pointer-events-none hidden lg:block">
        <div className="bg-secondary-container text-on-secondary-container px-6 py-4 rounded-lg shadow-2xl flex items-center gap-4 rotate-3 animate-bounce">
          <span className="material-symbols-outlined text-3xl">
            party_mode
          </span>
          <div>
            <div className="font-headline font-bold uppercase text-xs">
              Priority Access
            </div>
            <div className="text-lg font-headline font-black">LOCKED IN</div>
          </div>
        </div>
      </div>
    </main>
  );
}
