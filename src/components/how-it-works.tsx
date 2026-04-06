const CONTRACTOR_STEPS = [
  {
    number: "01",
    title: "Define the Grid",
    description:
      "Post your trade requirements, location, and necessary certifications in minutes.",
  },
  {
    number: "02",
    title: "Review Readiness",
    description:
      "Browse pre-vetted Cert II & III candidates matched exactly to your site's specific trade needs.",
  },
  {
    number: "03",
    title: "Hire & Track",
    description:
      "Onboard the right talent and monitor their training progress through the APREO dashboard.",
  },
] as const;

const PROVIDER_STEPS = [
  {
    icon: "cloud_upload",
    title: "Sync Student Intake",
    description:
      "Upload your student cohorts to our secure database for visibility to local builders.",
  },
  {
    icon: "handshake",
    title: "Employer Link",
    description:
      "Directly connect your graduates with relevant Melbourne-based hiring opportunities.",
  },
  {
    icon: "monitoring",
    title: "Placement Success",
    description:
      "Track placement rates and employer feedback to optimize your training curriculum.",
  },
] as const;

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto space-y-24">
        {/* For Contractors */}
        <div>
          <h3 className="text-secondary font-headline font-black mb-12 flex items-center gap-4">
            <span className="h-1 w-12 bg-secondary" /> FOR CONTRACTORS
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {CONTRACTOR_STEPS.map((step) => (
              <div key={step.number} className="space-y-6">
                <div className="text-7xl font-headline font-black text-primary/10">
                  {step.number}
                </div>
                <h4 className="text-2xl font-headline font-bold">
                  {step.title}
                </h4>
                <p className="text-on-surface-variant">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* For Training Providers */}
        <div
          id="training-providers"
          className="bg-primary p-12 rounded-xl text-white"
        >
          <h3 className="font-headline font-black mb-12 flex items-center gap-4">
            <span className="h-1 w-12 bg-white" /> FOR TRAINING PROVIDERS
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {PROVIDER_STEPS.map((step) => (
              <div key={step.icon} className="flex items-start gap-4">
                <span className="material-symbols-outlined text-secondary-container">
                  {step.icon}
                </span>
                <div>
                  <h5 className="font-headline font-bold mb-2">
                    {step.title}
                  </h5>
                  <p className="opacity-80 text-sm">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
