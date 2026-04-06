const PROBLEMS = [
  {
    icon: "query_stats",
    title: "Fragmentation",
    description:
      "Candidates are scattered across colleges, job boards, and emails with no standardized screening data.",
    bg: "bg-primary",
    text: "text-white",
    descText: "text-on-primary/80",
    offset: "",
  },
  {
    icon: "history_toggle_off",
    title: "Time Drain",
    description:
      "Site managers spend days manually verifying White Cards and tool lists for new starters.",
    bg: "bg-secondary-container",
    text: "text-on-secondary-container",
    descText: "text-on-secondary-container/80",
    offset: "mt-0 md:mt-8",
  },
  {
    icon: "wrong_location",
    title: "Poor Matches",
    description:
      "Hiring based on proximity rather than specific trade aptitude leads to high dropout rates.",
    bg: "bg-tertiary",
    text: "text-white",
    descText: "text-on-tertiary/80",
    offset: "mt-0 md:mt-16",
  },
] as const;

export function ProblemSection() {
  return (
    <section className="py-20 px-4 md:px-8 bg-surface-container-low">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-headline font-black mb-16 tracking-tight text-center md:text-left">
          HIRING APPRENTICES IS <br />
          <span className="text-primary italic">STILL TOO MANUAL.</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PROBLEMS.map((problem) => (
            <div
              key={problem.title}
              className={`${problem.bg} ${problem.text} p-8 rounded-xl h-80 flex flex-col justify-between ${problem.offset}`}
            >
              <span className="material-symbols-outlined text-4xl">
                {problem.icon}
              </span>
              <div>
                <h4 className="text-2xl font-headline font-bold mb-2">
                  {problem.title}
                </h4>
                <p className={problem.descText}>{problem.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
