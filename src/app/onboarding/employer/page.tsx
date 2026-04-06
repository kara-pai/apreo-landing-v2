"use client";

import Link from "next/link";

export default function EmployerWelcome() {
  return (
    <main className="pt-24 pb-32 px-4 md:px-8 max-w-7xl mx-auto">
      {/* Hero Section */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-12">
        <div className="lg:col-span-8 bg-primary rounded-xl p-8 md:p-12 flex flex-col justify-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary-container/20 rounded-full -mr-20 -mt-20 blur-3xl" />
          <h1 className="font-headline font-bold text-4xl md:text-6xl text-white uppercase leading-[0.9] tracking-tighter mb-6 relative z-10">
            Hire apprentice-ready <br />
            candidates faster
          </h1>
          <p className="text-on-primary text-lg md:text-xl max-w-2xl font-medium leading-relaxed mb-8 relative z-10 opacity-90">
            Request access to review trade-specific candidate matches based on
            certifications, availability, work type, and hiring fit.
          </p>
          <div className="flex flex-wrap gap-4 relative z-10">
            <Link
              href="/onboarding/employer/step-1"
              className="bg-secondary-container text-on-secondary-container px-8 py-4 rounded-lg font-headline font-bold uppercase tracking-wide hover:-translate-y-1 hover:shadow-xl transition-all duration-150 back-out-easing"
            >
              Start Employer Intake
            </Link>
            <button className="bg-white/10 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-lg font-headline font-bold uppercase tracking-wide hover:bg-white/20 transition-all duration-150">
              Book Intro Call
            </button>
          </div>
        </div>
        <div className="lg:col-span-4 bg-tertiary rounded-xl p-8 flex flex-col justify-between relative overflow-hidden group">
          <span className="material-symbols-outlined text-white/20 text-9xl absolute -bottom-4 -right-4 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12">
            bolt
          </span>
          <div className="relative z-10">
            <div className="bg-tertiary-container text-on-tertiary-container text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full inline-block mb-4 -rotate-2">
              System Status: Active
            </div>
            <h3 className="font-headline text-3xl text-white font-bold uppercase leading-none mb-4">
              Real-Time <br />
              Matching
            </h3>
          </div>
          <div className="bg-white/10 backdrop-blur-lg rounded-lg p-4 border border-white/10 relative z-10">
            <div className="flex justify-between items-center mb-2">
              <span className="text-white/70 text-sm font-bold uppercase">
                Active Pool
              </span>
              <span className="text-secondary-container font-bold">1,284</span>
            </div>
            <div className="h-2 w-full bg-white/20 rounded-full overflow-hidden">
              <div className="h-full bg-secondary-container w-3/4" />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          {
            icon: "handshake",
            bg: "bg-primary",
            iconBg: "text-white",
            rotate: "rotate-3",
            title: "Review matched local candidates",
            desc: "Stop hunting. We deliver pre-vetted local talent directly to your dashboard based on your specific trade requirements.",
          },
          {
            icon: "assignment_ind",
            bg: "bg-secondary-container",
            iconBg: "text-on-secondary-container",
            rotate: "-rotate-3",
            title: "Reduce manual screening",
            desc: "Our qualification engine handles the heavy lifting, ensuring only candidates with the right certifications reach your desk.",
          },
          {
            icon: "bolt",
            bg: "bg-tertiary",
            iconBg: "text-white",
            rotate: "rotate-6",
            title: "Focus on real readiness signals",
            desc: "Move beyond basic resumes. Track attendance, soft-skill evaluations, and hands-on trial performance in one view.",
          },
        ].map((b) => (
          <div
            key={b.title}
            className="bg-surface-container-highest rounded-xl p-8 flex flex-col gap-6 hover:bg-surface-bright transition-colors group"
          >
            <div
              className={`w-16 h-16 ${b.bg} rounded-lg flex items-center justify-center ${b.iconBg} ${b.rotate} group-hover:rotate-0 transition-transform`}
            >
              <span className="material-symbols-outlined text-3xl">
                {b.icon}
              </span>
            </div>
            <div>
              <h4 className="font-headline text-2xl font-bold uppercase text-on-surface mb-2">
                {b.title}
              </h4>
              <p className="text-on-surface-variant leading-relaxed">
                {b.desc}
              </p>
            </div>
          </div>
        ))}
      </section>

      {/* Dynamic Content */}
      <section className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl overflow-hidden flex flex-col md:flex-row">
          <div className="w-full md:w-1/3 h-48 md:h-auto bg-surface-container" />
          <div className="p-8 flex-1 bg-surface-container-low">
            <div className="text-primary font-bold text-xs uppercase tracking-tighter mb-2">
              Employer Feature
            </div>
            <h3 className="font-headline text-2xl font-bold uppercase mb-4">
              Trade-Specific Filters
            </h3>
            <ul className="space-y-3">
              {[
                "OSHA 10/30 Certified",
                "Reliable Transportation",
                "Drug-Screened Ready",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-on-surface-variant font-medium"
                >
                  <span className="material-symbols-outlined text-primary text-sm">
                    check_circle
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="bg-secondary p-8 rounded-xl flex flex-col justify-center">
          <h3 className="font-headline text-3xl font-bold text-white uppercase mb-6 leading-tight">
            Ready to build your pipeline?
          </h3>
          <p className="text-on-secondary text-lg mb-8 opacity-90">
            Join the top electrical, plumbing, and HVAC contractors already
            using Apreo to scale their workforce.
          </p>
          <div className="flex items-center gap-4">
            <div className="text-white">
              <div className="font-bold">500+ Employers</div>
              <div className="text-sm opacity-75 italic">Hiring today</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
