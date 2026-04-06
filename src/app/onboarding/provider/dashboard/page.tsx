"use client";

import Link from "next/link";

const CANDIDATES = [
  {
    name: "Amara Okafor",
    role: "A-Grade Electrician",
    whiteCard: 100,
    status: "VERIFIED",
    statusColor: "text-primary",
    badge: "3 Site Inductions Pending",
    badgeBg: "bg-secondary-container text-on-secondary-container",
  },
  {
    name: "Marcus Thorne",
    role: "Plumbing Apprentice (Lvl 3)",
    whiteCard: 45,
    status: "ACTION REQUIRED",
    statusColor: "text-tertiary",
    badge: "In Screening",
    badgeBg: "bg-surface-container text-on-surface-variant",
  },
  {
    name: "Elena Rodriguez",
    role: "Cabinet Maker / Joiner",
    whiteCard: 90,
    status: "VERIFIED",
    statusColor: "text-primary",
    badge: "ON-SITE",
    badgeBg: "bg-tertiary-container text-on-tertiary-container",
  },
];

const EMPLOYERS = [
  { icon: "foundation", name: "Melbourne Civil Works", openings: 8 },
  { icon: "plumbing", name: "Victoria Plumbing Group", openings: 5 },
  { icon: "electrical_services", name: "Metro Sparky Services", openings: 12 },
];

export default function ProviderDashboard() {
  return (
    <main className="pt-24 px-6 max-w-7xl mx-auto pb-32 space-y-8">
      {/* Hero Action Bar */}
      <section className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div className="space-y-1">
          <p className="font-headline font-bold uppercase text-primary tracking-widest text-sm">
            Provider Portal — Melbourne North
          </p>
          <h2 className="font-headline font-extrabold text-5xl tracking-tighter leading-none">
            Spring 2026 <span className="text-primary-dim">Trades</span>
          </h2>
        </div>
        <div className="flex flex-wrap gap-3">
          <button className="bg-primary text-on-primary font-headline font-bold px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-primary-dim transition-all active:scale-95">
            <span className="material-symbols-outlined">upload_file</span>
            Upload Tradies
          </button>
          <Link
            href="/onboarding/provider/step-1"
            className="bg-surface-container-highest text-on-surface font-headline font-bold px-6 py-3 rounded-lg border-2 border-transparent hover:border-primary/20 transition-all active:scale-95"
          >
            Edit Intake
          </Link>
          <button className="bg-secondary-container text-on-secondary-container font-headline font-bold px-6 py-3 rounded-lg shadow-lg shadow-secondary/10 hover:-translate-y-1 transition-all active:scale-95">
            Request Site Support
          </button>
        </div>
      </section>

      {/* Bento Stats */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Cohort Overview */}
        <div className="md:col-span-8 bg-surface-container rounded-xl p-8 flex flex-col justify-between min-h-[320px]">
          <div className="flex justify-between items-start">
            <h3 className="font-headline font-bold text-2xl uppercase italic">
              Trades Overview
            </h3>
            <span className="bg-tertiary-container text-on-tertiary-container px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest -rotate-2">
              Live Projects
            </span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
            {[
              { label: "Total Apprentices", value: "42" },
              { label: "White Card Ready", value: "85%" },
              { label: "On-Site Placements", value: "12" },
              { label: "Toolbox Talks", value: "28" },
            ].map((s) => (
              <div key={s.label} className="space-y-1">
                <p className="text-xs font-bold uppercase text-on-surface-variant">
                  {s.label}
                </p>
                <p className="text-4xl font-headline font-black text-primary leading-none">
                  {s.value}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-8 flex gap-2 overflow-hidden h-2 rounded-full bg-white/30">
            <div className="bg-primary w-[35%]" />
            <div className="bg-secondary-container w-[45%]" />
            <div className="bg-tertiary-container w-[20%]" />
          </div>
        </div>

        {/* Compliance Gauge */}
        <div className="md:col-span-4 bg-primary text-on-primary rounded-xl p-8 flex flex-col items-center justify-center text-center relative overflow-hidden">
          <div className="absolute -top-4 -right-4">
            <span className="material-symbols-outlined text-[120px] opacity-10">
              engineering
            </span>
          </div>
          <h3 className="font-headline font-bold text-xl uppercase tracking-widest mb-6 z-10">
            White Card Compliance
          </h3>
          <div className="relative w-40 h-40 flex items-center justify-center mb-6">
            <svg className="w-full h-full transform -rotate-90">
              <circle
                className="text-white/20"
                cx="80"
                cy="80"
                fill="transparent"
                r="70"
                stroke="currentColor"
                strokeWidth="12"
              />
              <circle
                className="text-secondary-container"
                cx="80"
                cy="80"
                fill="transparent"
                r="70"
                stroke="currentColor"
                strokeDasharray="440"
                strokeDashoffset="110"
                strokeWidth="12"
              />
            </svg>
            <span className="absolute text-4xl font-headline font-black">
              78%
            </span>
          </div>
          <p className="text-sm font-medium z-10">
            14 candidates require immediate PPE/White Card verification for
            Melbourne Metro sites.
          </p>
        </div>

        {/* Chart */}
        <div className="md:col-span-6 bg-surface-container-lowest rounded-xl p-8 space-y-6">
          <div className="flex justify-between items-end">
            <h3 className="font-headline font-bold text-xl uppercase">
              On-Site Velocity
            </h3>
            <p className="text-sm font-bold text-primary">+12% vs last month</p>
          </div>
          <div className="h-48 flex items-end justify-between gap-2">
            {[40, 55, 45, 75, 60, 85, 95].map((h, i) => (
              <div
                key={i}
                className={`w-full rounded-t-lg transition-all ${
                  i === 3
                    ? "bg-primary"
                    : i === 6
                    ? "bg-secondary-container"
                    : "bg-surface-container-high hover:bg-primary-container"
                }`}
                style={{ height: `${h}%` }}
              />
            ))}
          </div>
          <div className="flex justify-between text-[10px] font-bold uppercase text-on-surface-variant">
            {Array.from({ length: 7 }, (_, i) => (
              <span key={i}>Week {i + 1}</span>
            ))}
          </div>
        </div>

        {/* Employer Interest */}
        <div className="md:col-span-6 bg-secondary-container text-on-secondary-container rounded-xl p-8 relative">
          <h3 className="font-headline font-bold text-xl uppercase mb-6">
            Commercial Traction
          </h3>
          <div className="space-y-4">
            {EMPLOYERS.map((e) => (
              <div
                key={e.name}
                className="bg-white/40 backdrop-blur-sm p-4 rounded-lg flex items-center justify-between border-b-2 border-secondary/10"
              >
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-secondary">
                    {e.icon}
                  </span>
                  <span className="font-bold">{e.name}</span>
                </div>
                <span className="text-xs font-black uppercase tracking-tighter bg-secondary text-on-secondary px-2 py-1 rounded">
                  {e.openings} Openings
                </span>
              </div>
            ))}
          </div>
          <button className="mt-6 w-full py-2 text-xs font-black uppercase tracking-widest border-2 border-secondary/20 hover:bg-secondary/10 transition-colors rounded-lg">
            View All Host Employers
          </button>
        </div>
      </section>

      {/* Candidate Pipeline */}
      <section className="bg-surface-container-high rounded-xl overflow-hidden mb-12">
        <div className="p-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-b border-white/20">
          <h3 className="font-headline font-bold text-2xl uppercase">
            Candidate Pipeline — Victoria
          </h3>
          <div className="flex gap-4">
            <div className="relative">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant">
                search
              </span>
              <input
                className="bg-surface-container-lowest border-none rounded-lg pl-10 pr-4 py-2 text-sm focus:ring-2 focus:ring-primary"
                placeholder="Search apprentices..."
                type="text"
              />
            </div>
            <button className="bg-surface-container-lowest p-2 rounded-lg text-on-surface-variant hover:text-primary">
              <span className="material-symbols-outlined">filter_list</span>
            </button>
          </div>
        </div>
        <div className="divide-y divide-white/10">
          {CANDIDATES.map((c) => (
            <div
              key={c.name}
              className="p-6 flex flex-wrap md:flex-nowrap items-center gap-6 hover:bg-white/20 transition-colors group"
            >
              <div className="w-14 h-14 rounded-lg bg-surface-container flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-primary text-2xl">
                  person
                </span>
              </div>
              <div className="flex-grow min-w-[200px]">
                <h4 className="font-headline font-bold text-lg leading-none">
                  {c.name}
                </h4>
                <p className="text-xs font-bold text-on-surface-variant uppercase tracking-widest mt-1">
                  {c.role}
                </p>
              </div>
              <div className="flex flex-col items-center gap-1 w-32">
                <p className="text-[10px] font-bold uppercase text-on-surface-variant">
                  White Card
                </p>
                <div className="w-full bg-white/40 h-1.5 rounded-full overflow-hidden">
                  <div
                    className="bg-primary h-full"
                    style={{ width: `${c.whiteCard}%` }}
                  />
                </div>
                <p className={`text-[10px] font-bold ${c.statusColor}`}>
                  {c.status}
                </p>
              </div>
              <div className="w-40 text-center">
                <span
                  className={`${c.badgeBg} px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest`}
                >
                  {c.badge}
                </span>
              </div>
              <div className="flex-grow flex justify-end gap-2">
                <button className="p-2 text-primary hover:bg-primary/10 rounded-lg transition-colors">
                  <span className="material-symbols-outlined">visibility</span>
                </button>
                <button className="p-2 text-on-surface-variant hover:text-tertiary rounded-lg transition-colors">
                  <span className="material-symbols-outlined">mail</span>
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="p-6 bg-white/10 flex justify-center">
          <button className="font-headline font-bold text-sm uppercase tracking-widest hover:text-primary transition-all">
            View All 42 Tradies
          </button>
        </div>
      </section>
    </main>
  );
}
