"use client";

import Link from "next/link";

export default function ProviderWelcome() {
  return (
    <main className="pt-24 pb-32 md:pb-12 px-4 md:px-8 max-w-7xl mx-auto">
      {/* Hero */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 min-h-[530px]">
        <div className="lg:col-span-8 bg-primary rounded-xl p-8 md:p-12 flex flex-col justify-end relative overflow-hidden group">
          <div className="absolute top-0 right-0 p-8">
            <span className="material-symbols-outlined text-white/20 text-9xl leading-none">
              construction
            </span>
          </div>
          <div className="relative z-10">
            <div className="inline-block bg-tertiary-container text-on-tertiary-container px-4 py-1 rounded-md font-headline font-bold uppercase tracking-wider text-xs mb-6 -rotate-2 transform">
              TAFE &amp; RTO Partner Access
            </div>
            <h1 className="font-headline font-bold uppercase text-4xl md:text-6xl text-white tracking-tighter leading-none mb-6">
              From Pre-Apprenticeship <br />
              to the Work Site
            </h1>
            <p className="font-body text-xl text-primary-fixed max-w-xl leading-relaxed">
              Helping Cert II &amp; III graduates in Electrical, Plumbing, and
              Carpentry become visible to Australian employers through verified
              profile sharing.
            </p>
          </div>
        </div>

        <div className="lg:col-span-4 grid grid-rows-2 gap-6">
          <div className="bg-secondary rounded-xl p-8 flex flex-col justify-center items-start">
            <Link
              href="/onboarding/provider/step-1"
              className="w-full bg-primary text-on-primary font-headline font-bold py-5 px-6 rounded-lg text-lg uppercase tracking-tight flex justify-between items-center group transition-all duration-150 active:scale-95 mb-4"
            >
              Start Intake
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </Link>
            <button className="w-full bg-white/10 hover:bg-white/20 text-white font-headline font-bold py-4 px-6 rounded-lg text-sm uppercase tracking-wider transition-all duration-150 active:scale-95">
              Book Victoria Pilot
            </button>
          </div>
          <div className="bg-surface-container-highest rounded-xl p-6 flex flex-col justify-end relative overflow-hidden">
            <div className="absolute inset-0 bg-primary/10" />
            <div className="relative z-10">
              <div className="font-headline font-bold text-on-background uppercase text-2xl leading-none">
                Skilled <br />
                Trades.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Cards */}
      <section className="mt-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              icon: "badge",
              bg: "bg-primary",
              text: "text-white",
              num: "01",
              numColor: "text-primary/30",
              title: "Upload White Cards",
              desc: "Centralise pre-apprenticeship data and safety certifications in a format ready for site foreman review.",
            },
            {
              icon: "electric_bolt",
              bg: "bg-secondary-container",
              text: "text-on-secondary-container",
              num: "02",
              numColor: "text-secondary/30",
              title: "Electrical & Plumbing",
              desc: "Connect Cert III candidates directly with local subbies and tier-1 contractors across Australia.",
            },
            {
              icon: "handshake",
              bg: "bg-tertiary-container",
              text: "text-on-tertiary-container",
              num: "03",
              numColor: "text-tertiary/30",
              title: "Placement Outcomes",
              desc: "Track transition from TAFE to trade employment with real-time data and automated RTO reporting.",
            },
          ].map((c) => (
            <div
              key={c.num}
              className="bg-surface-container-low rounded-xl p-8 flex flex-col gap-12 group hover:bg-surface-container-high transition-colors"
            >
              <div className="flex justify-between items-start">
                <div
                  className={`h-14 w-14 ${c.bg} rounded-lg flex items-center justify-center ${c.text}`}
                >
                  <span className="material-symbols-outlined text-3xl">
                    {c.icon}
                  </span>
                </div>
                <span
                  className={`font-headline font-bold ${c.numColor} text-4xl`}
                >
                  {c.num}
                </span>
              </div>
              <div>
                <h3 className="font-headline font-bold uppercase text-2xl text-on-background mb-3">
                  {c.title}
                </h3>
                <p className="text-on-surface-variant leading-relaxed">
                  {c.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="mt-20 mb-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="md:col-span-2 bg-primary p-10 rounded-xl flex flex-col justify-between">
            <h4 className="font-headline font-bold text-white uppercase text-sm tracking-widest mb-10">
              Local Network
            </h4>
            <div className="flex items-baseline gap-4">
              <span className="text-white text-8xl font-headline font-bold tracking-tighter leading-none">
                850+
              </span>
              <span className="text-primary-fixed font-headline font-bold uppercase text-xl">
                AU <br />
                Tradies
              </span>
            </div>
          </div>
          <div className="bg-secondary p-10 rounded-xl flex flex-col justify-between relative overflow-hidden">
            <div className="absolute -right-6 -top-6">
              <span className="material-symbols-outlined text-on-secondary-fixed/10 text-9xl">
                verified_user
              </span>
            </div>
            <h4 className="font-headline font-bold text-on-secondary-fixed uppercase text-sm tracking-widest">
              White Card Verified
            </h4>
            <div className="text-on-secondary-fixed text-6xl font-headline font-bold tracking-tighter">
              100%
            </div>
          </div>
          <div className="bg-tertiary p-10 rounded-xl flex flex-col justify-between">
            <h4 className="font-headline font-bold text-white uppercase text-sm tracking-widest">
              Apprentice Match
            </h4>
            <div className="text-white text-6xl font-headline font-bold tracking-tighter">
              7d
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
