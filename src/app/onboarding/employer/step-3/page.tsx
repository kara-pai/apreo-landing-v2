"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

interface Step1Data {
  companyName: string;
  contactName: string;
  email: string;
  phone: string;
  tradeType: string;
  serviceArea: string;
}

interface Step2Data {
  level: string;
  startDate: string;
  environments: string[];
  certs: string[];
  frequency: string;
}

export default function Step3() {
  const router = useRouter();
  const [step1, setStep1] = useState<Step1Data | null>(null);
  const [step2, setStep2] = useState<Step2Data | null>(null);

  useEffect(() => {
    const s1 = localStorage.getItem("apreo_step1");
    const s2 = localStorage.getItem("apreo_step2");
    if (s1) setStep1(JSON.parse(s1));
    if (s2) setStep2(JSON.parse(s2));
  }, []);

  const handleSubmit = () => {
    router.push("/onboarding/employer/success");
  };

  return (
    <main className="pt-24 px-4 max-w-4xl mx-auto pb-32">
      <header className="mb-8">
        <div className="inline-block bg-tertiary-container text-on-tertiary-container px-3 py-1 rounded-md text-xs font-bold uppercase tracking-widest mb-4 transform -rotate-1">
          Final Step
        </div>
        <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-tight text-primary leading-none mb-2 font-headline">
          Review Your Posting
        </h1>
        <p className="text-on-surface-variant font-medium">
          Verify your recruitment details before we broadcast to our network.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Company Block */}
        <div className="md:col-span-2 bg-surface-container-highest rounded-xl p-6 relative overflow-hidden flex flex-col justify-between min-h-[240px]">
          <div className="flex justify-between items-start relative z-10">
            <div>
              <span className="text-xs font-bold uppercase tracking-tighter text-primary-dim">
                Section 01
              </span>
              <h2 className="text-2xl font-bold uppercase font-headline mt-1">
                Company Details
              </h2>
            </div>
            <button
              onClick={() => router.push("/onboarding/employer/step-1")}
              className="bg-white/50 backdrop-blur-md p-2 rounded-lg hover:bg-white transition-colors group"
            >
              <span className="material-symbols-outlined text-on-surface group-hover:text-primary">
                edit
              </span>
            </button>
          </div>
          <div className="mt-4 flex items-end gap-6 relative z-10">
            <div className="w-20 h-20 bg-primary rounded-lg flex items-center justify-center text-white shrink-0">
              <span className="material-symbols-outlined text-4xl">domain</span>
            </div>
            <div className="flex-grow">
              <div className="text-3xl font-extrabold font-headline leading-tight uppercase">
                {step1?.companyName || "Your Company"}
              </div>
              <div className="text-on-surface-variant flex items-center gap-2 font-semibold">
                <span className="material-symbols-outlined text-sm">
                  location_on
                </span>
                {step1?.serviceArea || "Location"} &bull;{" "}
                {step1?.tradeType || "Trade"}
              </div>
            </div>
          </div>
          <div className="absolute -right-10 -bottom-10 opacity-10">
            <span className="material-symbols-outlined text-[180px]">
              verified
            </span>
          </div>
        </div>

        {/* Timing Block */}
        <div className="bg-secondary-container rounded-xl p-6 flex flex-col justify-between">
          <div className="flex justify-between items-start">
            <span className="material-symbols-outlined text-on-secondary-container text-4xl">
              schedule
            </span>
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-tighter text-on-secondary-container/70">
              Timing
            </span>
            <div className="text-4xl font-black font-headline text-on-secondary-container leading-none my-2 uppercase">
              {step2?.startDate || "Immediate"}
            </div>
            <p className="text-on-secondary-container font-bold text-sm">
              Start date within 14 days
            </p>
          </div>
        </div>

        {/* Needs Block */}
        <div className="md:col-span-3 bg-white rounded-xl p-8 shadow-sm relative border-l-8 border-primary">
          <div className="flex flex-col md:flex-row justify-between items-start gap-6">
            <div className="flex-grow space-y-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-outline">
                  Section 02
                </span>
                <h2 className="text-3xl font-bold uppercase font-headline mt-1 text-primary">
                  Hiring Needs
                </h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="text-[10px] font-black uppercase text-on-surface-variant tracking-widest">
                    Apprentice Level
                  </label>
                  <div className="text-xl font-bold text-on-surface capitalize">
                    {step2?.level?.replace("-", " ") || "Pre-app"}
                  </div>
                  <div className="h-px bg-surface-container" />
                  <label className="text-[10px] font-black uppercase text-on-surface-variant tracking-widest pt-4 block">
                    Certifications
                  </label>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {(step2?.certs || ["First Aid"]).map((c) => (
                      <span
                        key={c}
                        className="bg-surface-container-low px-3 py-1 rounded-full text-xs font-bold text-primary-dim"
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-surface-container-low p-4 rounded-lg">
                    <label className="text-[10px] font-black uppercase text-on-surface-variant tracking-widest block mb-2">
                      Hiring Frequency
                    </label>
                    <div className="text-xl font-black font-headline text-primary-dim">
                      {step2?.frequency || "Frequent (Monthly)"}
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-sm font-bold">
                    {(step2?.environments || []).map((env) => (
                      <div key={env} className="flex items-center gap-2">
                        <span
                          className="material-symbols-outlined text-primary"
                          style={{ fontVariationSettings: "'FILL' 1" }}
                        >
                          work
                        </span>
                        {env}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <button
              onClick={() => router.push("/onboarding/employer/step-2")}
              className="shrink-0 flex items-center gap-2 bg-surface-container hover:bg-surface-container-highest px-6 py-3 rounded-lg font-bold transition-all uppercase text-xs tracking-widest"
            >
              <span className="material-symbols-outlined text-sm">
                edit_note
              </span>
              Edit Details
            </button>
          </div>
        </div>

        {/* Trust Banner */}
        <div className="md:col-span-3 bg-inverse-surface text-on-primary-fixed p-4 rounded-lg flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-secondary-container">
              verified_user
            </span>
            <span className="text-sm font-bold font-headline tracking-tight uppercase text-white">
              Direct Match Algorithm Active &bull; 98% Match Accuracy Expected
            </span>
          </div>
          <div className="hidden md:block text-[10px] font-bold text-white/50 uppercase tracking-widest">
            ID: REQ-{Math.floor(10000 + Math.random() * 90000)}-B
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="mt-12 flex flex-col md:flex-row items-center gap-6">
        <button
          onClick={handleSubmit}
          className="w-full md:w-auto flex-grow bg-primary text-on-primary px-8 py-5 rounded-xl text-xl font-bold uppercase tracking-tighter font-headline flex items-center justify-center gap-3 shadow-xl hover:-translate-y-1 transition-all"
        >
          Submit Request
          <span className="material-symbols-outlined">rocket_launch</span>
        </button>
        <button className="w-full md:w-auto bg-white border-2 border-surface-container-highest text-on-surface px-8 py-5 rounded-xl text-xl font-bold uppercase tracking-tighter font-headline hover:bg-surface-container-low transition-all">
          Save Draft
        </button>
      </div>

      {/* Trust Logos */}
      <div className="mt-16 flex flex-col items-center">
        <p className="text-[10px] font-black uppercase tracking-[0.3em] text-outline mb-6">
          Trusted by industry leaders
        </p>
        <div className="flex flex-wrap justify-center gap-8 grayscale opacity-40">
          {["FORGE", "QUANTUM", "VELOCITY", "NEXUS"].map((name) => (
            <div key={name} className="font-black text-xl tracking-tighter">
              {name}
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
