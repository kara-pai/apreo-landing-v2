"use client";

type Props = { role: "employer" | "provider" };

const STATS_EMPLOYER = [
  { bg: "bg-primary text-white", icon: "business", label: "Employers Under Review", value: "12", badge: "+3 since yesterday" },
  { bg: "bg-secondary-container text-on-secondary-container", icon: "person_search", label: "Verification Pending", value: "48", badge: "24h SLA at risk" },
  { bg: "bg-error-container text-on-error-container", icon: "warning", label: "Missing Documents", value: "09", badge: "Immediate Action Required" },
  { bg: "bg-surface-container-highest text-on-surface", icon: "sync", label: "Placements In Progress", value: "156", badge: "92% Match Success Rate" },
];

const STATS_PROVIDER = [
  { bg: "bg-primary text-white", icon: "school", label: "Active Students", value: "42", badge: "+8 this week" },
  { bg: "bg-secondary-container text-on-secondary-container", icon: "verified_user", label: "White Card Verified", value: "85%", badge: "14 pending" },
  { bg: "bg-error-container text-on-error-container", icon: "warning", label: "Compliance Alerts", value: "05", badge: "Action Required" },
  { bg: "bg-surface-container-highest text-on-surface", icon: "handshake", label: "Active Placements", value: "28", badge: "88% Completion Rate" },
];

const EMPLOYERS_TABLE = [
  { name: "Precision Electrical Co.", abn: "12 345 678 901", status: "Under Review", statusBg: "bg-secondary-container text-on-secondary-container", checks: [true, true, false, false], action: "REVIEW" },
  { name: "Blue Sky Plumbing", abn: "98 765 432 109", status: "New", statusBg: "bg-tertiary-container text-on-tertiary-container", checks: [false, false, false, false], action: "VET NOW" },
];

const STUDENTS = [
  { name: "Jordan Smith", trade: "Plumbing • Cert III (Stage 2)", tags: ["WHITE CARD", "PPE READY"], status: "Placement-Ready", statusBg: "bg-primary/10 text-primary" },
  { name: "Alex Lee", trade: "Electrotechnology • Cert II", tags: [], status: "Matched", statusBg: "bg-secondary/10 text-secondary", match: "Matched to Precision Electrical" },
];

const MATCHES = [
  { color: "bg-primary", label: "Placement Started", match: "Casey Vane → Sparky Bros", time: "Logged 4 hours ago", labelColor: "text-primary" },
  { color: "bg-secondary-container", label: "Interview Scheduled", match: "Riley Chen → Urban Plumb", time: "Tomorrow @ 09:00 AM", labelColor: "text-secondary" },
  { color: "bg-slate-400", label: "Proposed", match: "Sam Okafor → MegaBuild Inc", time: "", labelColor: "text-slate-500", faded: true },
];

export function DashboardContent({ role }: Props) {
  const stats = role === "employer" ? STATS_EMPLOYER : STATS_PROVIDER;

  return (
    <>
      {/* Stats Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {stats.map((s) => (
          <div key={s.label} className={`${s.bg} p-6 rounded-xl flex flex-col justify-between min-h-[160px] relative overflow-hidden group`}>
            <span className="material-symbols-outlined text-6xl absolute -right-4 -bottom-4 opacity-20 group-hover:scale-110 transition-transform">{s.icon}</span>
            <h3 className="font-headline font-bold text-sm uppercase">{s.label}</h3>
            <div className="text-5xl font-headline font-black mt-2">{s.value}</div>
            <div className="text-xs font-medium bg-black/5 self-start px-2 py-1 rounded mt-4">{s.badge}</div>
          </div>
        ))}
      </section>

      <div className="grid grid-cols-1 xl:grid-cols-[2fr_1fr] gap-6">
        <div className="space-y-8">
          {/* Employer/Provider Vetting Table */}
          <section className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="p-6 bg-surface-container-low flex justify-between items-center">
              <h2 className="font-headline font-black text-xl flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">corporate_fare</span>
                {role === "employer" ? "EMPLOYER VETTING" : "PROVIDER COMPLIANCE"}
              </h2>
              <button className="bg-primary text-white px-4 py-2 rounded-lg text-sm font-bold flex items-center gap-2 hover:opacity-90 transition-opacity">
                <span className="material-symbols-outlined text-sm">add</span>
                NEW ENTITY
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-surface-container-high/50 text-[10px] uppercase tracking-widest text-on-surface-variant font-bold">
                  <tr>
                    <th className="px-6 py-4">{role === "employer" ? "Employer Name" : "Institution"}</th>
                    <th className="px-6 py-4">Status</th>
                    <th className="px-6 py-4">Vetting Checklist</th>
                    <th className="px-6 py-4">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-surface-container">
                  {EMPLOYERS_TABLE.map((e) => (
                    <tr key={e.name} className="hover:bg-surface-container-low transition-colors">
                      <td className="px-6 py-4">
                        <div className="font-bold text-on-surface">{e.name}</div>
                        <div className="text-xs text-on-surface-variant">ABN: {e.abn}</div>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`${e.statusBg} px-2 py-1 rounded text-[10px] font-black uppercase italic inline-block`}>{e.status}</span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex gap-2">
                          {e.checks.map((c, i) => (
                            <span key={i} className={`material-symbols-outlined text-sm ${c ? "text-green-600" : "text-slate-300"}`} style={c ? { fontVariationSettings: "'FILL' 1" } : undefined}>
                              {c ? "check_circle" : "radio_button_unchecked"}
                            </span>
                          ))}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <button className="text-primary hover:underline font-bold text-xs">{e.action}</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Student Pipeline */}
          <section>
            <h2 className="font-headline font-black text-xl mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-primary">person_check</span>
              STUDENT PIPELINE
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {STUDENTS.map((s) => (
                <div key={s.name} className={`bg-white p-5 rounded-xl border-l-4 ${s.match ? "border-secondary" : "border-primary"} flex items-start gap-4`}>
                  <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-primary">person</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <span className="font-black text-on-surface">{s.name}</span>
                      <span className={`text-[10px] ${s.statusBg} px-2 py-1 rounded font-bold uppercase`}>{s.status}</span>
                    </div>
                    <p className="text-xs text-on-surface-variant font-medium">{s.trade}</p>
                    {s.tags.length > 0 && (
                      <div className="mt-3 flex gap-2">
                        {s.tags.map((t) => (
                          <span key={t} className="text-[9px] font-bold bg-surface-container px-2 py-0.5 rounded">{t}</span>
                        ))}
                      </div>
                    )}
                    {s.match && (
                      <div className="mt-3 flex items-center gap-1 text-[10px] font-bold text-blue-600">
                        <span className="material-symbols-outlined text-xs">link</span>
                        {s.match}
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Right Sidebar */}
        <aside className="space-y-6">
          {/* Active Matches */}
          <section className="bg-primary-container/20 border-2 border-primary/10 rounded-2xl p-6">
            <h3 className="font-headline font-black text-lg mb-6 flex items-center gap-2">
              <span className="material-symbols-outlined">dynamic_feed</span>
              ACTIVE MATCHES
            </h3>
            <div className="space-y-6 relative">
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-primary/20" />
              {MATCHES.map((m) => (
                <div key={m.match} className={`relative pl-10 ${m.faded ? "opacity-60" : ""}`}>
                  <div className={`absolute left-2.5 top-0 w-3.5 h-3.5 ${m.color} rounded-full border-2 border-white`} />
                  <div className={`text-[10px] font-black uppercase ${m.labelColor}`}>{m.label}</div>
                  <div className="text-sm font-bold mt-1">{m.match}</div>
                  {m.time && <div className="text-[10px] text-on-surface-variant mt-1 italic">{m.time}</div>}
                </div>
              ))}
            </div>
          </section>

          {/* Documents */}
          <section className="bg-surface-container-low rounded-xl p-6 border border-outline-variant/10">
            <div className="flex gap-4 mb-6 border-b border-outline-variant/20">
              <button className="pb-2 border-b-2 border-primary text-xs font-black uppercase">
                {role === "employer" ? "Employer" : "Provider"}
              </button>
              <button className="pb-2 text-xs font-bold uppercase text-on-surface-variant">Student</button>
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between bg-white p-3 rounded-lg">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-xl">description</span>
                  <div className="text-[11px] font-bold leading-tight">
                    Public Liability Ins<br />
                    <span className="font-medium text-slate-400">Precision Elec</span>
                  </div>
                </div>
                <span className="material-symbols-outlined text-error text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>error</span>
              </div>
              <div className="flex items-center justify-between bg-white p-3 rounded-lg">
                <div className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-primary text-xl">verified</span>
                  <div className="text-[11px] font-bold leading-tight">
                    H&amp;S Assessment<br />
                    <span className="font-medium text-slate-400">Blue Sky Plumbing</span>
                  </div>
                </div>
                <span className="material-symbols-outlined text-green-600 text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
              </div>
            </div>
          </section>

          {/* Compliance & Notes */}
          <section className="bg-inverse-surface text-white rounded-xl p-6">
            <h3 className="font-headline font-bold text-xs uppercase text-tertiary-fixed mb-4 tracking-tighter">
              Flagged Issues &amp; Communications
            </h3>
            <div className="space-y-4">
              <div className="border-l-2 border-tertiary pl-4">
                <div className="text-[10px] font-black uppercase text-tertiary mb-1">Critical Note</div>
                <p className="text-xs font-medium leading-relaxed">
                  Precision Electrical: Insurance certificate expired 2 days ago. All placements paused pending update.
                </p>
              </div>
              <div className="border-l-2 border-primary pl-4">
                <div className="text-[10px] font-black uppercase text-primary-fixed mb-1">Communication Log</div>
                <p className="text-xs font-medium leading-relaxed">
                  Called Jordan Smith regarding PPE pickup. Confirmed for Friday morning.
                </p>
              </div>
            </div>
          </section>
        </aside>
      </div>
    </>
  );
}
