"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function ProviderStep3() {
  const router = useRouter();
  const [step1, setStep1] = useState<Record<string, unknown> | null>(null);
  const [step2, setStep2] = useState<Record<string, unknown> | null>(null);

  useEffect(() => {
    const s1 = localStorage.getItem("apreo_provider_step1");
    const s2 = localStorage.getItem("apreo_provider_step2");
    if (s1) setStep1(JSON.parse(s1));
    if (s2) setStep2(JSON.parse(s2));
  }, []);

  const handleSubmit = () => {
    router.push("/dashboard/provider");
  };

  return (
    <main className="pt-24 pb-32 px-4 md:px-8 max-w-7xl mx-auto">
      <header className="mb-12">
        <div className="inline-block bg-tertiary-container text-on-tertiary-container px-4 py-1 rounded-lg mb-4 transform -rotate-1 font-headline font-bold uppercase tracking-widest text-xs">
          Draft Status: Review Pending
        </div>
        <h1 className="text-5xl md:text-7xl font-headline font-black uppercase tracking-tighter text-primary leading-none mb-4">
          Partner <br />
          Request Review
        </h1>
        <p className="text-on-surface-variant max-w-xl font-medium text-lg leading-relaxed">
          Verify the accuracy of your institution&apos;s profile and trade
          program details before submitting for final RTO verification.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Institution Summary */}
        <section className="md:col-span-8 bg-surface-container rounded-xl p-8 relative overflow-hidden">
          <div className="absolute top-4 right-4">
            <button
              onClick={() => router.push("/onboarding/provider/step-1")}
              className="flex items-center gap-2 bg-white text-primary px-4 py-2 rounded-lg font-headline font-bold text-sm uppercase tracking-wider shadow-sm hover:translate-y-[-4px] transition-all"
            >
              <span className="material-symbols-outlined text-sm">edit</span>
              Edit Details
            </button>
          </div>
          <h2 className="font-headline font-bold text-2xl uppercase tracking-tighter text-primary-dim mb-8 flex items-center gap-3">
            <span className="material-symbols-outlined">account_balance</span>
            Institution Summary
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            <div className="space-y-1">
              <label className="text-[10px] font-headline font-bold text-on-surface-variant uppercase tracking-[0.2em]">
                Official Name
              </label>
              <p className="text-xl font-bold text-on-background">
                {(step1?.rtoName as string) || "Melbourne Trade Institute"}
              </p>
            </div>
            <div className="space-y-1">
              <label className="text-[10px] font-headline font-bold text-on-surface-variant uppercase tracking-[0.2em]">
                RTO Number
              </label>
              <p className="text-xl font-bold text-on-background">
                {(step2?.providerNumber as string) || "12345"}
              </p>
            </div>
            <div className="space-y-1">
              <label className="text-[10px] font-headline font-bold text-on-surface-variant uppercase tracking-[0.2em]">
                Accreditation
              </label>
              <p className="text-xl font-bold text-on-background">
                ASQA Registered RTO (2024)
              </p>
            </div>
            <div className="space-y-1">
              <label className="text-[10px] font-headline font-bold text-on-surface-variant uppercase tracking-[0.2em]">
                Institution Type
              </label>
              <p className="text-xl font-bold text-on-background">
                Technical &amp; Further Education (TAFE)
              </p>
            </div>
          </div>
        </section>

        {/* Compliance Score */}
        <section className="md:col-span-4 bg-primary rounded-xl p-8 flex flex-col justify-between text-on-primary">
          <div className="flex justify-between items-start">
            <span className="material-symbols-outlined text-4xl">verified</span>
            <div className="bg-secondary text-on-secondary px-3 py-1 rounded-lg font-headline font-bold text-[10px] uppercase">
              Active
            </div>
          </div>
          <div>
            <span className="text-6xl font-headline font-black">94%</span>
            <p className="font-headline font-bold uppercase tracking-tighter text-sm mt-2">
              Compliance Score
            </p>
            <p className="text-on-primary/70 text-xs mt-2">
              Historical data based on Victorian VET Sector benchmarks.
            </p>
          </div>
        </section>

        {/* Program Summary */}
        <section className="md:col-span-5 bg-surface-container-high rounded-xl p-8 relative">
          <div className="absolute top-4 right-4">
            <button
              onClick={() => router.push("/onboarding/provider/step-2")}
              className="bg-surface-container-lowest text-primary p-2 rounded-lg hover:scale-110 transition-transform"
            >
              <span className="material-symbols-outlined">edit</span>
            </button>
          </div>
          <h2 className="font-headline font-bold text-2xl uppercase tracking-tighter text-primary-dim mb-8 flex items-center gap-3">
            <span className="material-symbols-outlined">construction</span>
            Program Summary
          </h2>
          <div className="space-y-6">
            <div className="bg-surface-container-lowest p-4 rounded-lg">
              <p className="text-[10px] font-headline font-bold text-on-surface-variant uppercase tracking-widest mb-1">
                Primary Program
              </p>
              <p className="font-bold text-xl text-primary">
                {(step2?.qualification as string) ||
                  "Certificate III in Electrotechnology"}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-surface-container-lowest p-4 rounded-lg">
                <p className="text-[10px] font-headline font-bold text-on-surface-variant uppercase tracking-widest mb-1">
                  Duration
                </p>
                <p className="font-bold text-lg">4 Years (Apprentice)</p>
              </div>
              <div className="bg-surface-container-lowest p-4 rounded-lg">
                <p className="text-[10px] font-headline font-bold text-on-surface-variant uppercase tracking-widest mb-1">
                  Tuition (AUD)
                </p>
                <p className="font-bold text-lg">$12,800</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {["Apprenticeship", "On-Site Training", "A-Grade License Prep"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
          </div>
        </section>

        {/* Outcome Summary */}
        <section className="md:col-span-7 bg-secondary-container rounded-xl p-8 relative overflow-hidden">
          <div className="absolute -bottom-6 -right-6 text-on-secondary-container/10">
            <span className="material-symbols-outlined text-[160px]">
              trending_up
            </span>
          </div>
          <div className="flex justify-between items-center mb-8">
            <h2 className="font-headline font-bold text-2xl uppercase tracking-tighter text-on-secondary-container flex items-center gap-3">
              <span className="material-symbols-outlined">engineering</span>
              Outcome Summary
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 relative z-10">
            <div className="bg-on-secondary-container/5 p-6 rounded-xl">
              <p className="text-4xl font-headline font-black text-on-secondary-container">
                88%
              </p>
              <p className="font-headline font-bold uppercase tracking-tighter text-xs text-on-secondary-container/70">
                Completion to Employment Rate
              </p>
            </div>
            <div className="bg-on-secondary-container/5 p-6 rounded-xl">
              <p className="text-4xl font-headline font-black text-on-secondary-container">
                $72K
              </p>
              <p className="font-headline font-bold uppercase tracking-tighter text-xs text-on-secondary-container/70">
                Average Graduate Salary (AUD)
              </p>
            </div>
          </div>
          <div className="mt-8 flex gap-4 relative z-10">
            <div className="bg-on-secondary-container text-white p-4 rounded-xl flex-1">
              <p className="text-[10px] font-bold uppercase tracking-widest opacity-60 mb-2">
                Industry Partners
              </p>
              <div className="flex -space-x-3">
                {["NECA", "VBA", "ETU"].map((p) => (
                  <div
                    key={p}
                    className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[10px] font-bold text-primary border-2 border-on-secondary-container"
                  >
                    {p}
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-white/50 backdrop-blur p-4 rounded-xl flex-1">
              <p className="text-[10px] font-bold uppercase tracking-widest text-on-secondary-container/60 mb-2">
                Core Trades
              </p>
              <p className="text-xs font-bold text-on-secondary-container">
                Electrical, Instrumentation, Solar PV
              </p>
            </div>
          </div>
        </section>

        {/* Submit */}
        <section className="md:col-span-12 bg-surface-container-highest rounded-xl p-8 mt-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <h3 className="font-headline font-bold text-xl uppercase tracking-tighter text-primary mb-2">
                Review Confirmation
              </h3>
              <p className="text-on-surface-variant text-sm">
                By clicking submit, you confirm that all entered information is
                accurate according to Australian VET standards and that you
                represent the listed institution.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <button
                onClick={() => router.push("/onboarding/provider/step-1")}
                className="px-8 py-4 bg-surface-container-low text-primary border-2 border-primary rounded-xl font-headline font-bold uppercase tracking-widest text-sm hover:bg-primary hover:text-white transition-all"
              >
                Edit Details
              </button>
              <button
                onClick={handleSubmit}
                className="px-12 py-4 bg-primary text-on-primary rounded-xl font-headline font-bold uppercase tracking-widest text-sm shadow-xl shadow-primary/30 hover:scale-105 active:scale-95 transition-all"
              >
                Submit Partner Request
              </button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
