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
            <a
              href="/login?role=employer"
              className="w-full bg-on-secondary-container text-white font-headline font-black py-4 rounded-lg hover:scale-95 transition-transform uppercase text-center block"
            >
              Sign In as Employer
            </a>
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
            <a
              href="/login?role=provider"
              className="w-full border-2 border-primary text-primary font-headline font-black py-4 rounded-lg hover:bg-primary hover:text-white transition-all uppercase text-center block"
            >
              Sign In as Training Provider
            </a>
          </div>
          <span className="material-symbols-outlined absolute -bottom-10 -right-10 text-[200px] text-primary/5 -rotate-12 group-hover:rotate-0 transition-transform duration-700">
            school
          </span>
        </div>
      </div>
    </section>
  );
}
