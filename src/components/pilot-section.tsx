"use client";

export function PilotSection() {
  return (
    <section className="py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Employers Card */}
        <div
          id="employers"
          className="bg-secondary-container p-12 rounded-xl relative overflow-hidden group"
        >
          <div className="relative z-10">
            <h2 className="text-4xl font-headline font-black mb-6 uppercase">
              Ready to scale your site?
            </h2>
            <p className="text-on-secondary-container/80 mb-8 max-w-sm">
              Join the employers shaping early access to Apreo
            </p>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <input
                className="w-full bg-white border-none rounded-lg p-4 focus:ring-4 focus:ring-primary/20"
                placeholder="Work Email"
                type="email"
                required
              />
              <button
                type="submit"
                className="w-full bg-on-secondary-container text-white font-headline font-black py-4 rounded-lg hover:scale-95 transition-transform uppercase"
              >
                Request Early Access
              </button>
            </form>
          </div>
          <span className="material-symbols-outlined absolute -bottom-10 -right-10 text-[200px] text-on-secondary-container/5 -rotate-12 group-hover:rotate-0 transition-transform duration-700">
            construction
          </span>
        </div>

        {/* Training Providers Card */}
        <div className="bg-surface-container-highest p-12 rounded-xl relative overflow-hidden group">
          <div className="relative z-10">
            <h2 className="text-4xl font-headline font-black mb-6 text-primary uppercase">
              Increase apprentice intake
            </h2>
            <p className="text-on-surface-variant mb-8 max-w-sm">
              Connect your top students with vetted Victorian employers looking
              for exactly what you teach.
            </p>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <input
                className="w-full bg-white border-none rounded-lg p-4 focus:ring-4 focus:ring-primary/20"
                placeholder="College / Training Center Name"
                type="text"
                required
              />
              <button
                type="submit"
                className="w-full border-2 border-primary text-primary font-headline font-black py-4 rounded-lg hover:bg-primary hover:text-white transition-all uppercase"
              >
                Join Partner Waitlist
              </button>
            </form>
          </div>
          <span className="material-symbols-outlined absolute -bottom-10 -right-10 text-[200px] text-primary/5 -rotate-12 group-hover:rotate-0 transition-transform duration-700">
            school
          </span>
        </div>
      </div>
    </section>
  );
}
