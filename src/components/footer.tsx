const FOOTER_LINKS = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "For Employers", href: "#employers" },
  { label: "For Training Providers", href: "#training-providers" },
  { label: "FAQ", href: "#faq" },
] as const;

export function Footer() {
  return (
    <footer className="bg-[#212121] p-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full px-8 py-16 max-w-[1440px] mx-auto">
        <div className="space-y-8">
          <div className="text-5xl font-black font-headline text-white">
            APREO
          </div>
          <p className="text-white max-w-xs font-body">
            Connecting the next generation of Victorian builders to the leaders
            of today. No friction, just trades.
          </p>
          <div className="flex gap-4">
            <a
              className="w-10 h-10 rounded-full bg-[#FFD600]/10 flex items-center justify-center hover:bg-[#FFD600] group transition-colors"
              href="#"
              aria-label="Share"
            >
              <span className="material-symbols-outlined text-[#FFD600] group-hover:text-black">
                share
              </span>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8">
          <div className="space-y-4">
            <h5 className="text-[#FFD600] font-headline font-bold uppercase tracking-widest text-xs">
              The Grid
            </h5>
            <ul className="space-y-2">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    className="text-white font-headline font-bold hover:skew-x-2 hover:text-[#FFD600] transition-all inline-block"
                    href={link.href}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col justify-end text-right md:text-left">
            <p className="text-white/40 text-xs font-body">
              &copy; {new Date().getFullYear()} APREO. BUILT FOR THE MODERN
              FOREMAN.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
