"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const BOTTLENECKS = [
  { icon: "fingerprint", label: "USI Verification & Sync" },
  { icon: "id_card", label: "White Card & Site Induction" },
  { icon: "contract_edit", label: "Training Plan Variations" },
  { icon: "assignment_turned_in", label: "Employer Host Agreements" },
];

export default function ProviderStep2() {
  const router = useRouter();
  const [providerNumber, setProviderNumber] = useState("");
  const [qualification, setQualification] = useState(
    "Cert III in Electrotechnology"
  );
  const [funding, setFunding] = useState<string[]>([]);
  const [placementDesc, setPlacementDesc] = useState("");
  const [bottleneck, setBottleneck] = useState("");
  const [usiSync, setUsiSync] = useState<boolean | null>(null);
  const [whiteCardSync, setWhiteCardSync] = useState(false);

  const toggleFunding = (f: string) =>
    setFunding((prev) =>
      prev.includes(f) ? prev.filter((x) => x !== f) : [...prev, f]
    );

  const handleNext = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem(
      "apreo_provider_step2",
      JSON.stringify({
        providerNumber,
        qualification,
        funding,
        placementDesc,
        bottleneck,
        usiSync,
        whiteCardSync,
      })
    );
    router.push("/onboarding/provider/step-3");
  };

  return (
    <main className="pt-24 pb-32 px-4 md:px-8 max-w-6xl mx-auto">
      {/* Progress */}
      <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div className="max-w-xl">
          <span className="inline-block bg-tertiary-container text-on-tertiary-container px-3 py-1 rounded-lg text-xs font-bold uppercase tracking-widest mb-4 transform -rotate-1">
            Step 02: RTO/TAFE Compliance
          </span>
          <h1 className="text-5xl md:text-6xl font-black uppercase tracking-tighter text-primary leading-none mb-4 font-headline">
            Partner Intake
          </h1>
          <p className="text-on-surface-variant text-lg max-w-md">
            Connect your Australian trade college to the national employer grid.
            Provide operational details for VET compliance and student placement.
          </p>
        </div>
        <div className="flex flex-col items-end gap-2">
          <div className="text-right">
            <span className="text-4xl font-black font-headline text-secondary">
              66%
            </span>
            <span className="block text-[10px] font-bold uppercase tracking-widest text-outline">
              Compliance Verification
            </span>
          </div>
          <div className="w-64 h-4 bg-surface-container-high rounded-full overflow-hidden">
            <div className="h-full bg-primary w-[66%] transition-all" />
          </div>
        </div>
      </div>

      <form className="grid grid-cols-1 md:grid-cols-12 gap-6" onSubmit={handleNext}>
        {/* Provider Number */}
        <div className="md:col-span-4 bg-primary text-on-primary p-8 rounded-xl flex flex-col justify-between min-h-[320px]">
          <div>
            <div className="flex justify-between items-start mb-8">
              <span className="material-symbols-outlined text-5xl opacity-50">
                school
              </span>
              <span className="bg-on-primary text-primary px-2 py-0.5 rounded text-[10px] font-bold">
                REQUIRED
              </span>
            </div>
            <label className="block font-headline text-2xl font-bold uppercase tracking-tight mb-2">
              TAFE/RTO Provider Number
            </label>
            <p className="text-on-primary/70 text-sm mb-6">
              Enter your registered Training Organisation ID (TOID) for
              verification against training.gov.au.
            </p>
          </div>
          <input
            className="w-full bg-white/10 border-b-4 border-yellow-400 text-white text-3xl font-black p-4 focus:bg-white/20 focus:outline-none transition-all placeholder:text-white/30"
            placeholder="e.g. 12345"
            value={providerNumber}
            onChange={(e) => setProviderNumber(e.target.value)}
            required
          />
        </div>

        {/* Qualifications */}
        <div className="md:col-span-8 bg-surface-container-highest p-8 rounded-xl">
          <div className="flex items-center gap-3 mb-6">
            <span className="material-symbols-outlined text-primary">
              fact_check
            </span>
            <h2 className="font-headline text-xl font-bold uppercase">
              Training &amp; Compliance Scope
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">
                Primary Qualification Focus
              </label>
              <select
                className="w-full bg-surface-bright rounded-lg border-0 focus:ring-2 focus:ring-primary p-4 text-on-surface"
                value={qualification}
                onChange={(e) => setQualification(e.target.value)}
              >
                <option>Cert III in Electrotechnology</option>
                <option>Cert III in Carpentry</option>
                <option>Cert III in Plumbing</option>
                <option>Cert III in Engineering - Fabrication</option>
              </select>
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">
                Funding Eligibility
              </label>
              <div className="flex flex-col gap-2 mt-2">
                {[
                  "VET Student Loans Approved",
                  "Smart & Skilled (NSW) / Skills First (VIC)",
                ].map((f) => (
                  <label
                    key={f}
                    className="flex items-center gap-2 cursor-pointer"
                  >
                    <input
                      className="rounded text-primary focus:ring-primary"
                      type="checkbox"
                      checked={funding.includes(f)}
                      onChange={() => toggleFunding(f)}
                    />
                    <span className="text-sm font-bold">{f}</span>
                  </label>
                ))}
              </div>
            </div>
            <div className="sm:col-span-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-2 block">
                Placement Logistics Description
              </label>
              <textarea
                className="w-full bg-surface-bright rounded-lg border-0 focus:ring-2 focus:ring-primary p-4 text-on-surface text-sm"
                placeholder="Detail your process for matching 1st/2nd year apprentices with host employers..."
                rows={3}
                value={placementDesc}
                onChange={(e) => setPlacementDesc(e.target.value)}
              />
            </div>
          </div>
        </div>

        {/* Bottlenecks */}
        <div className="md:col-span-7 bg-surface-container-low p-8 rounded-xl border-l-8 border-tertiary">
          <h3 className="font-headline text-2xl font-bold uppercase mb-2">
            Audit &amp; Admin Bottlenecks
          </h3>
          <p className="text-on-surface-variant text-sm mb-8">
            Which Australian compliance area requires the most manual effort for
            your RTO?
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {BOTTLENECKS.map((b) => (
              <label
                key={b.icon}
                className="group relative flex items-center p-4 bg-surface-container-highest rounded-lg cursor-pointer hover:bg-tertiary-container transition-all"
              >
                <input
                  className="hidden peer"
                  name="bottleneck"
                  type="radio"
                  checked={bottleneck === b.label}
                  onChange={() => setBottleneck(b.label)}
                />
                <span className="material-symbols-outlined mr-3 text-tertiary">
                  {b.icon}
                </span>
                <span className="font-bold text-sm">{b.label}</span>
                <div className="absolute inset-0 border-2 border-transparent peer-checked:border-tertiary rounded-lg" />
              </label>
            ))}
          </div>
        </div>

        {/* Sync & CTA */}
        <div className="md:col-span-5 flex flex-col gap-6">
          <div className="bg-secondary-container p-6 rounded-xl flex flex-col justify-between flex-grow">
            <div>
              <h4 className="font-headline font-bold text-lg uppercase mb-2">
                Automated USI Sync
              </h4>
              <p className="text-on-secondary-container text-sm">
                Apreo integrates directly with the Student Identifiers Registrar.
                Enable real-time USI validation for all student profiles?
              </p>
            </div>
            <div className="flex gap-4 mt-6">
              <button
                type="button"
                onClick={() => setUsiSync(true)}
                className={`flex-1 font-black py-3 rounded-lg transition-all ${
                  usiSync === true
                    ? "bg-on-secondary-fixed text-secondary-container"
                    : "bg-transparent border-2 border-on-secondary-fixed text-on-secondary-fixed hover:bg-on-secondary-fixed/10"
                }`}
              >
                ENABLE SYNC
              </button>
              <button
                type="button"
                onClick={() => setUsiSync(false)}
                className={`flex-1 font-black py-3 rounded-lg transition-all ${
                  usiSync === false
                    ? "bg-on-secondary-fixed text-secondary-container"
                    : "bg-transparent border-2 border-on-secondary-fixed text-on-secondary-fixed hover:bg-on-secondary-fixed/10"
                }`}
              >
                MANUAL ONLY
              </button>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-xl shadow-blue-900/5 transform rotate-1 border-t-4 border-primary">
            <div className="flex items-start gap-4">
              <div className="bg-primary-container p-2 rounded-lg">
                <span className="material-symbols-outlined text-on-primary-container">
                  badge
                </span>
              </div>
              <div>
                <h4 className="font-bold text-sm">
                  White Card &amp; Ticket Sync
                </h4>
                <p className="text-xs text-on-surface-variant mt-1">
                  Automatically push verified state-issued White Cards to
                  employer job sites.
                </p>
                <div className="mt-3 flex items-center gap-2">
                  <input
                    className="w-5 h-5 rounded border-outline-variant text-primary focus:ring-primary"
                    type="checkbox"
                    checked={whiteCardSync}
                    onChange={(e) => setWhiteCardSync(e.target.checked)}
                  />
                  <label className="text-xs font-bold text-primary">
                    READY FOR INTEGRATION
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="md:col-span-12 flex items-center justify-between mt-8 py-8 border-t-2 border-outline-variant/10">
          <button
            type="button"
            onClick={() => router.push("/onboarding/provider/step-1")}
            className="flex items-center gap-2 text-outline font-bold hover:text-on-background transition-colors"
          >
            <span className="material-symbols-outlined">arrow_back</span>
            BACK
          </button>
          <button
            type="submit"
            className="bg-primary text-white font-headline font-bold text-xl px-12 py-5 rounded-xl flex items-center gap-4 hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-primary/30"
          >
            SECURE &amp; CONTINUE
            <span className="material-symbols-outlined">arrow_forward</span>
          </button>
        </div>
      </form>
    </main>
  );
}
