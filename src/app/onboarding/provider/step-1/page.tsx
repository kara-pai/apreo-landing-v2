"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const TRADE_PROGRAMS = [
  "Cert II / III",
  "White Card",
  "Pre-apprentice",
  "Apprenticeship",
  "Short Courses",
  "ASQA Accredited",
];

export default function ProviderStep1() {
  const router = useRouter();
  const [form, setForm] = useState({
    rtoName: "",
    rtoNumber: "",
    fullName: "",
    role: "",
    email: "",
    phone: "",
  });
  const [programs, setPrograms] = useState<string[]>([]);

  const update = (field: string, value: string) =>
    setForm({ ...form, [field]: value });

  const toggleProgram = (p: string) =>
    setPrograms((prev) =>
      prev.includes(p) ? prev.filter((x) => x !== p) : [...prev, p]
    );

  const handleNext = () => {
    localStorage.setItem(
      "apreo_provider_step1",
      JSON.stringify({ ...form, programs })
    );
    router.push("/onboarding/provider/step-2");
  };

  return (
    <main className="pt-24 pb-32 px-4 md:px-8 max-w-7xl mx-auto">
      {/* Progress */}
      <div className="mb-12">
        <div className="flex justify-between items-end mb-4">
          <div>
            <span className="bg-tertiary-container text-on-tertiary-container px-3 py-1 rounded-lg font-bold text-xs uppercase tracking-widest inline-block mb-2 -rotate-1">
              Step 01 / 03
            </span>
            <h2 className="font-headline font-bold text-4xl md:text-6xl text-primary uppercase tracking-tighter leading-none">
              Provider Intake
            </h2>
          </div>
          <div className="text-right hidden md:block">
            <p className="font-headline font-bold text-primary-dim text-lg">
              33% COMPLETE
            </p>
          </div>
        </div>
        <div className="w-full h-4 bg-surface-container rounded-full overflow-hidden">
          <div className="h-full bg-primary w-1/3 rounded-full transition-all duration-500 shadow-[0_0_20px_rgba(0,75,226,0.3)]" />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Form */}
        <div className="lg:col-span-8 bg-surface-container-low rounded-xl p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-secondary-container opacity-20 -mr-16 -mt-16 rounded-full blur-3xl" />
          <form
            className="space-y-10 relative z-10"
            onSubmit={(e) => {
              e.preventDefault();
              handleNext();
            }}
          >
            {/* Institution Details */}
            <section>
              <div className="flex items-center gap-3 mb-8">
                <span className="material-symbols-outlined text-primary text-3xl">
                  domain
                </span>
                <h3 className="font-headline font-bold text-2xl uppercase tracking-tight text-on-background">
                  Institution Details
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant ml-1">
                    RTO Name
                  </label>
                  <input
                    className="bg-surface-container-highest border-none rounded-lg p-4 focus:ring-2 focus:ring-primary focus:bg-surface-bright transition-all placeholder:text-outline"
                    placeholder="Melbourne Technical College"
                    value={form.rtoName}
                    onChange={(e) => update("rtoName", e.target.value)}
                    required
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant ml-1">
                    RTO Number
                  </label>
                  <input
                    className="bg-surface-container-highest border-none rounded-lg p-4 focus:ring-2 focus:ring-primary focus:bg-surface-bright transition-all placeholder:text-outline"
                    placeholder="e.g. 12345"
                    value={form.rtoNumber}
                    onChange={(e) => update("rtoNumber", e.target.value)}
                    required
                  />
                </div>
              </div>
            </section>

            {/* Contact */}
            <section>
              <div className="flex items-center gap-3 mb-8">
                <span className="material-symbols-outlined text-primary text-3xl">
                  badge
                </span>
                <h3 className="font-headline font-bold text-2xl uppercase tracking-tight text-on-background">
                  Primary Contact
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant ml-1">
                    Full Name
                  </label>
                  <input
                    className="bg-surface-container-highest border-none rounded-lg p-4 focus:ring-2 focus:ring-primary focus:bg-surface-bright transition-all placeholder:text-outline"
                    placeholder="Alex Rivera"
                    value={form.fullName}
                    onChange={(e) => update("fullName", e.target.value)}
                    required
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant ml-1">
                    Role / Title
                  </label>
                  <input
                    className="bg-surface-container-highest border-none rounded-lg p-4 focus:ring-2 focus:ring-primary focus:bg-surface-bright transition-all placeholder:text-outline"
                    placeholder="Admissions Manager"
                    value={form.role}
                    onChange={(e) => update("role", e.target.value)}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant ml-1">
                    Email Address
                  </label>
                  <input
                    className="bg-surface-container-highest border-none rounded-lg p-4 focus:ring-2 focus:ring-primary focus:bg-surface-bright transition-all placeholder:text-outline"
                    placeholder="alex@victrade.edu.au"
                    type="email"
                    value={form.email}
                    onChange={(e) => update("email", e.target.value)}
                    required
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-on-surface-variant ml-1">
                    Phone Number
                  </label>
                  <input
                    className="bg-surface-container-highest border-none rounded-lg p-4 focus:ring-2 focus:ring-primary focus:bg-surface-bright transition-all placeholder:text-outline"
                    placeholder="+61 (03) 0000-0000"
                    type="tel"
                    value={form.phone}
                    onChange={(e) => update("phone", e.target.value)}
                  />
                </div>
              </div>
            </section>

            {/* Trade Programs */}
            <section>
              <div className="flex items-center gap-3 mb-8">
                <span className="material-symbols-outlined text-primary text-3xl">
                  construction
                </span>
                <h3 className="font-headline font-bold text-2xl uppercase tracking-tight text-on-background">
                  Trade Programs
                </h3>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {TRADE_PROGRAMS.map((p) => (
                  <label
                    key={p}
                    className="flex items-center gap-3 p-4 bg-surface-container-highest rounded-lg cursor-pointer hover:bg-surface-variant transition-colors"
                  >
                    <input
                      className="w-5 h-5 rounded text-primary focus:ring-primary bg-surface-container"
                      type="checkbox"
                      checked={programs.includes(p)}
                      onChange={() => toggleProgram(p)}
                    />
                    <span className="font-bold text-sm text-on-background">
                      {p}
                    </span>
                  </label>
                ))}
              </div>
            </section>

            <div className="pt-8">
              <button
                type="submit"
                className="w-full md:w-auto px-12 py-4 bg-primary text-on-primary font-headline font-bold uppercase tracking-widest rounded-lg flex items-center justify-center gap-3 hover:translate-y-[-4px] hover:shadow-[0_8px_30px_rgb(0,75,226,0.3)] transition-all active:scale-95 group"
              >
                Continue to Step 02
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </button>
            </div>
          </form>
        </div>

        {/* Sidebar */}
        <aside className="lg:col-span-4 space-y-6">
          <div className="bg-secondary-container p-8 rounded-xl shadow-2xl shadow-secondary/20 relative overflow-hidden">
            <div className="absolute -bottom-8 -right-8 opacity-10">
              <span
                className="material-symbols-outlined text-[160px]"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                handshake
              </span>
            </div>
            <h4 className="font-headline font-bold text-2xl uppercase tracking-tighter text-on-secondary-container mb-6">
              Partnership Process
            </h4>
            <ul className="space-y-6 relative z-10">
              {[
                {
                  n: "1",
                  t: "Initial Intake",
                  d: "Provide details about your trade programs and RTO scope.",
                  active: true,
                },
                {
                  n: "2",
                  t: "Compliance Check",
                  d: "Verification of ASQA accreditation and training delivery standards.",
                  active: false,
                },
                {
                  n: "3",
                  t: "Final Activation",
                  d: "VET system integration and official trade provider activation.",
                  active: false,
                },
              ].map((s) => (
                <li key={s.n} className="flex gap-4">
                  <div
                    className={`w-8 h-8 rounded ${
                      s.active
                        ? "bg-on-secondary-container text-secondary-container"
                        : "border-2 border-on-secondary-container text-on-secondary-container"
                    } flex items-center justify-center font-black shrink-0`}
                  >
                    {s.n}
                  </div>
                  <div className={s.active ? "" : "opacity-70"}>
                    <p className="font-bold text-on-secondary-container uppercase text-sm tracking-tight">
                      {s.t}
                    </p>
                    <p className="text-xs text-on-secondary-fixed-variant leading-relaxed">
                      {s.d}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-surface-container p-8 rounded-xl">
            <h4 className="font-headline font-bold text-lg uppercase tracking-tight text-on-background mb-4">
              Need Assistance?
            </h4>
            <p className="text-sm text-on-surface-variant mb-6 leading-relaxed">
              Our provider relations team is available to help Australian RTOs
              through the intake process.
            </p>
            <a
              className="flex items-center gap-2 text-primary font-bold uppercase text-xs tracking-widest hover:underline"
              href="#"
            >
              <span className="material-symbols-outlined text-sm">mail</span>
              Contact Support
            </a>
          </div>
        </aside>
      </div>
    </main>
  );
}
