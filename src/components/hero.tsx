export function Hero() {
  return (
    <section className="p-4 md:p-8">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-[minmax(150px,auto)]">
        {/* Main Headline Block */}
        <div className="md:col-span-8 md:row-span-3 bg-primary p-8 md:p-12 flex flex-col justify-end relative overflow-hidden rounded-xl">
          <div className="absolute top-8 right-8 rotate-3 z-10">
            <span className="bg-tertiary-container text-on-tertiary-container px-4 py-2 font-headline font-bold text-sm rounded-md shadow-xl">
              MATCH. REVIEW. HIRE.
            </span>
          </div>
          <h2 className="text-5xl md:text-7xl font-headline font-bold leading-none text-white tracking-tighter mb-6">
            HIRE APPRENTICE-READY FASTER
          </h2>
          <p className="text-xl text-on-primary max-w-2xl font-medium opacity-90">
            Apreo helps employers find apprentice-ready candidates through
            trade-specific matching based on certifications, availability, and
            work type.
          </p>
        </div>

        {/* Image Block: Electrician */}
        <div className="md:col-span-4 md:row-span-2 bg-secondary-container rounded-xl overflow-hidden group">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            alt="A professional electrician in a clean blue work shirt, smiling confidently in a modern industrial workshop"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuC3EpHsPsycZ5zg0ymL2mzGFTatYe0dEah0V60-yT698B4oehBcM71Qn9iwkmJIATkbysvqC9b3gwxAgM-0qBm_rpUXpNfRMIf7TfFuaAR7VuJmaEGUUGuD0SC6hfHi0vaxYEKO6UORxr3HtbvN9NjzDdFSaAuedYO3kwWIkkbu8U-nlt55EspogbUwOJBTcTcGOrAuXjTWTp1MHerqnlHqK8psglvlt6u4wrelW9HHYfnoJAb7Zzvze4Dk3cqmzFS8dysViavJF0E"
          />
        </div>

        {/* CTA Block */}
        <div className="md:col-span-4 md:row-span-1 bg-surface-container-highest p-6 rounded-xl flex flex-col justify-center gap-4">
          <a
            href="/login?role=employer"
            className="w-full bg-secondary-container text-on-secondary-container font-headline font-black py-4 rounded-xl hover:-translate-y-1 transition-transform back-out-easing shadow-lg text-center block"
          >
            Hire Apprentices
          </a>
          <a
            href="/login?role=provider"
            className="w-full border-2 border-primary text-primary font-headline font-black py-4 rounded-xl hover:bg-primary-container/10 transition-colors text-sm text-center block"
          >
            Partner as a Training Provider
          </a>
        </div>

        {/* Sticker Block */}
        <div className="md:col-span-3 md:row-span-1 bg-tertiary p-6 rounded-xl flex items-center justify-center -rotate-1 shadow-2xl border-4 border-white">
          <span className="text-white font-headline font-black text-2xl text-center">
            LOCAL-FIRST
            <br />
            MATCHING
          </span>
        </div>

        {/* Platform Screenshot Block */}
        <div className="md:col-span-6 md:row-span-3 bg-surface-container-low p-8 rounded-xl relative overflow-hidden border-t-4 border-primary">
          <div className="mb-6 flex items-center justify-between">
            <h3 className="font-headline font-black text-primary tracking-tight">
              CONTRACTOR VIEW / DASHBOARD
            </h3>
            <div className="flex gap-2 items-center">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">
                Live Feed
              </span>
            </div>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-xl border border-primary/10 relative z-10">
            <div className="flex items-start gap-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center overflow-hidden border-2 border-primary/20">
                <span className="material-symbols-outlined text-primary text-3xl">
                  person
                </span>
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <h4 className="text-xl font-headline font-black text-on-surface">
                    Jordan M.
                  </h4>
                  <span className="bg-green-100 text-green-700 text-[10px] font-black px-2 py-1 rounded-full uppercase">
                    Ready to start
                  </span>
                </div>
                <p className="text-sm font-bold text-primary">
                  Electrical Apprentice (Cert II)
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 mb-6">
              <div className="bg-surface-container-low p-3 rounded-lg border border-surface-variant">
                <p className="text-[10px] text-on-surface-variant font-bold uppercase mb-1">
                  Travel Radius
                </p>
                <div className="flex items-center gap-1 text-on-surface font-black text-sm">
                  <span className="material-symbols-outlined text-sm">
                    near_me
                  </span>
                  25km (North Melb)
                </div>
              </div>
              <div className="bg-surface-container-low p-3 rounded-lg border border-surface-variant">
                <p className="text-[10px] text-on-surface-variant font-bold uppercase mb-1">
                  Compliance
                </p>
                <div className="flex items-center gap-1 text-on-surface font-black text-sm">
                  <span className="material-symbols-outlined text-sm">
                    verified_user
                  </span>
                  White Card
                </div>
              </div>
            </div>

            <div className="flex gap-2">
              <button className="flex-1 bg-primary text-white text-xs font-black py-3 rounded-lg">
                Shortlist Candidate
              </button>
              <button className="px-3 border border-primary/20 text-primary rounded-lg">
                <span className="material-symbols-outlined">more_horiz</span>
              </button>
            </div>
          </div>
          <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-primary/5 rounded-full blur-3xl" />
        </div>

        {/* Image Block: Contractor */}
        <div className="md:col-span-3 md:row-span-2 bg-surface-variant rounded-xl overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="w-full h-full object-cover"
            alt="A focused female general contractor in a hard hat looking at architectural plans on a tablet"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCR-7ahhdrmMMeHDRrHM0wofAWSk8Dca4XJBzsllR2Fme5pVyxa8py6mIU7hrmpSK3T3IXgOPe0czFO-M55JmbEszLshHCxF-jIdDJOq0ipYkedp-F2HZwMzPgkvbvIEWFBZcKW9vIW1nlcw6ibjvw5u0sPEWZJXLHE4bjrN0qb1RZheow438f2CHo5SXF0-uCwBvgh9MxrC8kDMrEFbNvDvB-fHL0hvhFM34knBVzGhBHuHlNcOL-7zdJ7ePydOyEYf-VG1wkNlZo"
          />
        </div>

        {/* Sticker Block 2 */}
        <div className="md:col-span-3 md:row-span-1 bg-secondary-container p-6 rounded-xl flex items-center justify-center rotate-2 border-4 border-primary shadow-2xl">
          <span className="text-on-secondary-container font-headline font-black text-xl text-center">
            SCREENING-BASED
            <br />
            PROFILES
          </span>
        </div>
      </div>
    </section>
  );
}
