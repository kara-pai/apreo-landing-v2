"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Step2() {
  const router = useRouter();
  const [level, setLevel] = useState("pre-app");
  const [startDate, setStartDate] = useState("");
  const [environments, setEnvironments] = useState<string[]>([]);
  const [certs, setCerts] = useState<string[]>(["First Aid"]);
  const [frequency, setFrequency] = useState("Frequent (Monthly)");

  const toggleEnv = (env: string) =>
    setEnvironments((prev) =>
      prev.includes(env) ? prev.filter((e) => e !== env) : [...prev, env]
    );

  const toggleCert = (cert: string) =>
    setCerts((prev) =>
      prev.includes(cert) ? prev.filter((c) => c !== cert) : [...prev, cert]
    );

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem(
      "apreo_step2",
      JSON.stringify({ level, startDate, environments, certs, frequency })
    );
    router.push("/onboarding/employer/step-3");
  };

  return (
    <main className="pt-24 pb-32 px-4 max-w-4xl mx-auto">
      {/* Progress */}
      <div className="mb-12">
        <div className="flex justify-between items-end mb-4">
          <div>
            <span className="font-headline font-bold text-primary uppercase tracking-widest text-xs">
              Step 2 of 3
            </span>
            <h1 className="text-4xl font-headline font-extrabold uppercase text-on-surface leading-none mt-2">
              Hiring Needs
            </h1>
          </div>
          <div className="text-right">
            <span className="font-headline font-bold text-3xl text-primary">
              66%
            </span>
          </div>
        </div>
        <div className="h-4 w-full bg-surface-container rounded-full overflow-hidden">
          <div
            className="h-full bg-primary transition-all duration-500 ease-out"
            style={{ width: "66%" }}
          />
        </div>
      </div>

      <form
        className="grid grid-cols-1 md:grid-cols-12 gap-6"
        onSubmit={handleNext}
      >
        {/* Apprentice Level */}
        <div className="md:col-span-8 bg-surface-container p-8 rounded-xl">
          <label className="block font-headline font-bold text-on-surface-variant uppercase tracking-wider mb-6 text-sm">
            Select Apprentice Level Needed
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              { id: "pre-app", icon: "school", label: "Pre-app" },
              { id: "cert-ii", icon: "workspace_premium", label: "Cert II" },
              { id: "cert-iii", icon: "military_tech", label: "Cert III" },
            ].map((opt) => (
              <label key={opt.id} className="relative group cursor-pointer">
                <input
                  className="peer sr-only"
                  name="level"
                  type="radio"
                  checked={level === opt.id}
                  onChange={() => setLevel(opt.id)}
                />
                <div className="p-6 h-full bg-surface-container-lowest border-2 border-transparent peer-checked:bg-primary peer-checked:text-white transition-all duration-150 rounded-lg flex flex-col items-center text-center gap-4">
                  <span className="material-symbols-outlined text-4xl">
                    {opt.icon}
                  </span>
                  <span className="font-headline font-bold uppercase text-sm leading-tight">
                    {opt.label}
                  </span>
                </div>
              </label>
            ))}
          </div>
        </div>

        {/* Start Date */}
        <div className="md:col-span-4 bg-secondary-container p-6 rounded-xl md:rotate-1 flex flex-col justify-between">
          <div>
            <span className="material-symbols-outlined text-on-secondary-container text-4xl mb-4">
              calendar_today
            </span>
            <label className="block font-headline font-bold text-on-secondary-container uppercase text-sm mb-4">
              Preferred Start
            </label>
            <input
              className="w-full bg-surface-container-lowest/50 border-none rounded-lg focus:ring-2 focus:ring-primary font-body p-3"
              type="date"
              value={startDate}
              onChange={(e) => setStartDate(e.target.value)}
            />
          </div>
          <p className="mt-4 text-xs font-bold text-on-secondary-container/70 uppercase">
            ASAP candidates prioritized
          </p>
        </div>

        {/* Work Environment */}
        <div className="md:col-span-12 bg-surface-container-high p-8 rounded-xl">
          <label className="block font-headline font-bold text-on-surface-variant uppercase tracking-wider mb-6 text-sm">
            Primary Work Environment
          </label>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {["Residential", "Commercial", "Industrial"].map((env) => (
              <label
                key={env}
                className="flex items-center gap-4 p-4 bg-surface-container-lowest rounded-lg cursor-pointer hover:bg-surface-bright transition-colors"
              >
                <input
                  className="w-6 h-6 rounded border-outline-variant text-primary focus:ring-primary"
                  type="checkbox"
                  checked={environments.includes(env)}
                  onChange={() => toggleEnv(env)}
                />
                <span className="font-headline font-bold uppercase text-on-surface">
                  {env}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div
          className="md:col-span-7 p-8 rounded-xl text-white"
          style={{
            background: "linear-gradient(135deg, #004be2 0%, #809bff 100%)",
          }}
        >
          <label className="block font-headline font-bold text-white/80 uppercase tracking-wider mb-6 text-sm">
            Required Certifications
          </label>
          <div className="flex flex-wrap gap-3">
            {[
              "White Card",
              "First Aid",
              "Working at Heights",
              "Confined Spaces",
            ].map((cert) => (
              <button
                key={cert}
                type="button"
                onClick={() => toggleCert(cert)}
                className={`px-4 py-2 rounded-full font-headline font-bold text-xs uppercase transition-all ${
                  certs.includes(cert)
                    ? "bg-yellow-400 text-blue-900"
                    : "bg-white/20 hover:bg-white/30 backdrop-blur-md"
                }`}
              >
                {cert}
              </button>
            ))}
            <button
              type="button"
              className="px-4 py-2 border-2 border-white/40 hover:border-white rounded-full font-headline font-bold text-xs uppercase transition-all"
            >
              + Add Other
            </button>
          </div>
        </div>

        {/* Hiring Frequency */}
        <div className="md:col-span-5 bg-surface-container-lowest p-8 rounded-xl border-4 border-surface-container shadow-sm">
          <label className="block font-headline font-bold text-on-surface-variant uppercase tracking-wider mb-4 text-sm">
            Hiring Frequency
          </label>
          <select
            className="w-full bg-surface-container border-none rounded-lg p-4 font-headline font-bold uppercase text-sm focus:ring-2 focus:ring-primary"
            value={frequency}
            onChange={(e) => setFrequency(e.target.value)}
          >
            <option>One-off project</option>
            <option>Occasional (1-2 per year)</option>
            <option>Frequent (Monthly)</option>
            <option>Ongoing partnership</option>
          </select>
          <p className="mt-4 text-sm text-on-surface-variant leading-relaxed">
            Apreo offers volume discounts for frequent hiring partners.
          </p>
        </div>

        {/* Actions */}
        <div className="md:col-span-12 flex flex-col md:flex-row justify-between items-center gap-6 mt-8 pt-8 border-t border-surface-container">
          <button
            type="button"
            onClick={() => router.push("/onboarding/employer/step-1")}
            className="order-2 md:order-1 font-headline font-bold uppercase text-on-surface-variant hover:text-primary transition-colors flex items-center gap-2"
          >
            <span className="material-symbols-outlined">arrow_back</span>
            Back to Step 1
          </button>
          <button
            type="submit"
            className="order-1 md:order-2 w-full md:w-auto px-12 py-5 bg-primary text-on-primary font-headline font-bold uppercase tracking-widest text-lg rounded-lg transform transition-transform duration-150 active:scale-95 flex items-center justify-center gap-4"
          >
            Continue to Final Step
            <span className="material-symbols-outlined">arrow_forward</span>
          </button>
        </div>
      </form>
    </main>
  );
}
