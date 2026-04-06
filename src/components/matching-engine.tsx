export function MatchingEngine() {
  return (
    <section className="py-24 px-4 md:px-8 bg-surface-container-highest">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-headline font-black text-center mb-16">
          PRECISION MATCHING ENGINE
        </h2>

        <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
          {/* Candidate Card */}
          <div className="w-full md:w-80 bg-white p-6 rounded-xl shadow-xl transform -rotate-2 hover:rotate-0 transition-transform">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-full bg-surface-container overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  className="w-full h-full object-cover"
                  alt="Profile headshot of a professional young man"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuA8pm2Q5jziQGgJkaQ547KN3fR1OpI2W9uyofNntHvCil7Y_0Vfn-KK4IfLV3NoD7t7wDY7B9Sh95MH--aGE4qQIGeY2Vcg1cxrd69flqZvvKjdKUTfe8Smcn-NoC7B_pMEMarcYjkvkM1BxAH9Qu0jIapy567RNEkh7_gVFrDFT9pr-fTWnxPla2vajv9cs0dyO_saKnoRguwWMby5Wv6E-NFilkYcZzqKSiWuHPVdWPlEPcVPSBtJXZpCWDS4WsIAuQQMlbxqb_0"
                />
              </div>
              <div>
                <div className="text-sm font-headline font-black">
                  Alex Rivera
                </div>
                <div className="text-xs text-on-surface-variant">
                  Plumbing (Cert II Graduate)
                </div>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between text-xs">
                <span>Mandatory</span>
                <span className="text-primary font-bold">White Card</span>
              </div>
              <div className="w-full bg-surface-container h-2 rounded-full overflow-hidden">
                <div className="bg-primary w-4/5 h-full" />
              </div>
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="text-[10px] bg-secondary-container px-2 py-1 rounded">
                  North Melbourne
                </span>
                <span className="text-[10px] bg-surface-container px-2 py-1 rounded">
                  Own Basic Tools
                </span>
              </div>
            </div>
          </div>

          {/* Matching Arrow */}
          <div className="hidden md:flex flex-col items-center gap-2">
            <span className="material-symbols-outlined text-primary text-4xl">
              compare_arrows
            </span>
            <span className="font-headline font-black text-primary uppercase">
              Matching
            </span>
          </div>

          {/* Requirement Card */}
          <div className="w-full md:w-80 bg-primary p-6 rounded-xl shadow-xl transform rotate-2 hover:rotate-0 transition-transform text-white">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                <span className="material-symbols-outlined">apartment</span>
              </div>
              <div>
                <div className="text-sm font-headline font-black">
                  BuildCorp Victoria
                </div>
                <div className="text-xs opacity-70">Major Site Upgrade</div>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between text-xs">
                <span>Seeking</span>
                <span className="text-secondary-container font-bold">
                  Plumber (Cert II/III)
                </span>
              </div>
              <div className="h-12 border border-white/20 rounded-lg flex items-center justify-center p-2 text-center text-[10px] italic">
                &ldquo;Must have White Card and valid driver&apos;s
                license.&rdquo;
              </div>
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="text-[10px] bg-white/10 px-2 py-1 rounded">
                  Immediate Start
                </span>
                <span className="text-[10px] bg-white/10 px-2 py-1 rounded">
                  Melbourne CBD
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
