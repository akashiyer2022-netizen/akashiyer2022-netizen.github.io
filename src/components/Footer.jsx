export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black text-white">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="grid gap-10 md:grid-cols-3">
          <div className="font-semibold">The Ursa Majors Group</div>

          <div className="grid gap-2 text-sm">
            <a className="text-white/80 hover:text-white" href="/about-us">About Us</a>
            <a className="text-white/80 hover:text-white" href="/governance">Governance</a>
            <a className="text-white/80 hover:text-white" href="/projects-team">Projects Team</a>
            <a className="text-white/80 hover:text-white" href="/allied-scholars">Allied Scholars</a>
            <a className="text-white/80 hover:text-white" href="/team">Team</a>
            <a className="text-white/80 hover:text-white" href="/subjects-offered">Subjects Offered</a>
            <a className="text-white/80 hover:text-white" href="/propose-a-project">Propose a Project</a>
            <a className="text-white/80 hover:text-white" href="/careers">Careers</a>
            <a className="text-white/80 hover:text-white" href="/contact-us">Contact Us</a>
            <a className="text-white/80 hover:text-white" href="/sparx">Ursa Sparx</a>
            <a className="text-white/80 hover:text-white" href="/cortex">Ursa Cortex</a>
          </div>

          <div>
            <div className="text-sm font-semibold">Follow</div>
            <div className="mt-3 flex items-center gap-4 text-white/80">
              <a className="hover:text-white" href="https://x.com" target="_blank" rel="noreferrer">
                X
              </a>
              <a className="hover:text-white" href="https://www.linkedin.com" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
