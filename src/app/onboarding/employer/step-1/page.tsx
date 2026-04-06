"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Step1() {
  const router = useRouter();
  const [form, setForm] = useState({
    companyName: "",
    contactName: "",
    email: "",
    phone: "",
    tradeType: "",
    serviceArea: "",
  });

  const update = (field: string, value: string) =>
    setForm({ ...form, [field]: value });

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem("apreo_step1", JSON.stringify(form));
    router.push("/onboarding/employer/step-2");
  };

  return (
    <main className="pt-24 pb-32 px-4 md:px-8 max-w-7xl mx-auto">
      {/* Progress */}
      <div className="mb-10 w-full">
        <div className="flex justify-between mb-4 items-end">
          <div>
            <span className="bg-tertiary text-on-tertiary px-3 py-1 rounded-md text-xs font-bold font-headline uppercase tracking-widest -rotate-2 inline-block mb-2">
              Step 1 of 3
            </span>
            <h2 className="text-3xl md:text-5xl font-bold font-headline uppercase text-primary leading-none">
              Company Details
            </h2>
          </div>
          <div className="hidden md:block text-right">
            <p className="text-on-surface-variant text-sm font-bold uppercase tracking-tighter">
              Completion Progress
            </p>
            <p className="text-2xl font-headline font-bold text-primary">33%</p>
          </div>
        </div>
        <div className="h-4 w-full bg-surface-container rounded-full overflow-hidden">
          <div className="h-full bg-primary w-1/3 transition-all duration-500" />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Main Form */}
        <div className="lg:col-span-8 space-y-6">
          <div className="bg-surface-container-lowest p-8 rounded-xl shadow-sm">
            <form className="space-y-8" onSubmit={handleNext}>
              <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-on-surface-variant uppercase tracking-wider">
                    Company Name
                  </label>
                  <input
                    className="w-full bg-surface-container-high border-0 rounded-lg p-4 focus:ring-2 focus:ring-primary focus:bg-surface-bright transition-all placeholder:text-outline"
                    placeholder="e.g. Acme Construction Ltd"
                    value={form.companyName}
                    onChange={(e) => update("companyName", e.target.value)}
                    required
                  />
                  <p className="text-xs text-on-surface-variant/70 italic">
                    Registered business name
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-on-surface-variant uppercase tracking-wider">
                    Contact Name
                  </label>
                  <input
                    className="w-full bg-surface-container-high border-0 rounded-lg p-4 focus:ring-2 focus:ring-primary focus:bg-surface-bright transition-all placeholder:text-outline"
                    placeholder="Your full name"
                    value={form.contactName}
                    onChange={(e) => update("contactName", e.target.value)}
                    required
                  />
                </div>
              </section>

              <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-on-surface-variant uppercase tracking-wider">
                    Work Email
                  </label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-4 top-4 text-primary">
                      mail
                    </span>
                    <input
                      className="w-full bg-surface-container-high border-0 rounded-lg p-4 pl-12 focus:ring-2 focus:ring-primary focus:bg-surface-bright transition-all placeholder:text-outline"
                      placeholder="name@company.com"
                      type="email"
                      value={form.email}
                      onChange={(e) => update("email", e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-on-surface-variant uppercase tracking-wider">
                    Phone Number
                  </label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-4 top-4 text-primary">
                      call
                    </span>
                    <input
                      className="w-full bg-surface-container-high border-0 rounded-lg p-4 pl-12 focus:ring-2 focus:ring-primary focus:bg-surface-bright transition-all placeholder:text-outline"
                      placeholder="+61 000 000 000"
                      type="tel"
                      value={form.phone}
                      onChange={(e) => update("phone", e.target.value)}
                    />
                  </div>
                </div>
              </section>

              <section className="grid grid-cols-1 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-on-surface-variant uppercase tracking-wider">
                    Trade Type
                  </label>
                  <select
                    className="w-full bg-surface-container-high border-0 rounded-lg p-4 focus:ring-2 focus:ring-primary focus:bg-surface-bright transition-all"
                    value={form.tradeType}
                    onChange={(e) => update("tradeType", e.target.value)}
                    required
                  >
                    <option value="">Select Trade Expertise</option>
                    <option>Civil Engineering</option>
                    <option>Electrical Contracting</option>
                    <option>Plumbing &amp; Gas</option>
                    <option>Carpentry &amp; Framing</option>
                    <option>General Labour</option>
                  </select>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-on-surface-variant uppercase tracking-wider">
                    Suburb / Metro / Service Area
                  </label>
                  <div className="relative">
                    <span className="material-symbols-outlined absolute left-4 top-4 text-primary">
                      distance
                    </span>
                    <input
                      className="w-full bg-surface-container-high border-0 rounded-lg p-4 pl-12 focus:ring-2 focus:ring-primary focus:bg-surface-bright transition-all placeholder:text-outline"
                      placeholder="e.g. Greater Sydney, NSW"
                      value={form.serviceArea}
                      onChange={(e) => update("serviceArea", e.target.value)}
                    />
                  </div>
                </div>
              </section>

              <div className="pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
                <button
                  type="button"
                  className="text-on-surface-variant font-bold uppercase tracking-widest text-sm hover:text-primary transition-colors"
                >
                  Save as Draft
                </button>
                <button
                  type="submit"
                  className="w-full md:w-auto px-12 py-4 bg-primary text-white font-headline font-bold uppercase tracking-widest rounded-lg shadow-lg hover:translate-y-[-4px] active:scale-95 transition-all flex items-center justify-center gap-2"
                >
                  Next Step
                  <span className="material-symbols-outlined">
                    arrow_forward
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Sidebar */}
        <aside className="lg:col-span-4 space-y-6">
          <div className="bg-secondary-container p-6 rounded-xl relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="font-headline font-extrabold text-3xl text-on-secondary-container uppercase leading-none mb-6">
                What happens next
              </h3>
              <div className="space-y-4">
                {[
                  {
                    n: "1",
                    t: "Review matches",
                    d: "Our AI instantly filters top 5% talent for your trade.",
                  },
                  {
                    n: "2",
                    t: "Get approval",
                    d: "Streamlined verification and compliance check.",
                  },
                  {
                    n: "3",
                    t: "Hire fast",
                    d: "Onboard in hours, not weeks. Get back to work.",
                  },
                ].map((s) => (
                  <div key={s.n} className="flex items-start gap-4">
                    <div className="bg-on-secondary-container text-secondary-container w-8 h-8 rounded flex items-center justify-center font-headline font-bold shrink-0">
                      {s.n}
                    </div>
                    <div>
                      <p className="font-bold uppercase text-on-secondary-container leading-tight">
                        {s.t}
                      </p>
                      <p className="text-sm text-on-secondary-container/80">
                        {s.d}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <span className="material-symbols-outlined absolute -bottom-8 -right-8 text-[180px] opacity-10 text-on-secondary-container pointer-events-none rotate-12">
              bolt
            </span>
          </div>

          <div className="bg-tertiary p-6 rounded-xl shadow-lg -rotate-1 hover:rotate-0 transition-transform duration-300">
            <div className="flex gap-4 items-center mb-2">
              <span className="material-symbols-outlined text-white text-3xl">
                help_center
              </span>
              <h4 className="font-headline font-bold text-white uppercase">
                Need Help?
              </h4>
            </div>
            <p className="text-white/90 text-sm mb-4">
              Our onboarding specialists are standing by to assist with your
              profile.
            </p>
            <a
              className="inline-block bg-white text-tertiary px-4 py-2 rounded-lg font-bold text-xs uppercase tracking-widest hover:bg-surface transition-colors"
              href="#"
            >
              Chat Support
            </a>
          </div>

          <div className="bg-surface-container-high p-6 rounded-xl flex items-center justify-between">
            <div>
              <p className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">
                Active Employers
              </p>
              <p className="text-4xl font-headline font-extrabold text-primary">
                1,240+
              </p>
            </div>
            <span
              className="material-symbols-outlined text-4xl text-primary/20"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              groups
            </span>
          </div>
        </aside>
      </div>
    </main>
  );
}
