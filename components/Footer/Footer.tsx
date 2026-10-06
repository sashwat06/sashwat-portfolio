"use client";

export default function Footer() {
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
          
          {/* Brand */}
          <div>
            <a
              href="#"
              className="text-xl font-bold tracking-tight text-white"
            >
              Sashwat Shukla
            </a>

            <p className="mt-3 max-w-sm text-sm leading-6 text-gray-500">
              IT Support Engineer building toward Systems
              Administration, Cloud Infrastructure,
              Automation and AI-powered applications.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-600">
              Navigation
            </p>

            <div className="mt-4 grid gap-3 text-sm">
              <a
                href="#work"
                className="text-gray-400 transition hover:text-cyan-300"
              >
                Work
              </a>

              <a
                href="#about"
                className="text-gray-400 transition hover:text-cyan-300"
              >
                About
              </a>

              <a
                href="#experience"
                className="text-gray-400 transition hover:text-cyan-300"
              >
                Experience
              </a>

              <a
                href="#skills"
                className="text-gray-400 transition hover:text-cyan-300"
              >
                Skills
              </a>

              <a
                href="#command-center"
                className="text-gray-400 transition hover:text-cyan-300"
                >
                Command Center
             </a>

              <a
                href="#github"
                className="text-gray-400 transition hover:text-cyan-300"
              >
                GitHub
              </a>

              <a
                href="#contact"
                className="text-gray-400 transition hover:text-cyan-300"
              >
                Contact
              </a>
            </div>
          </div>

          {/* Connect */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gray-600">
              Connect
            </p>

            <div className="mt-4 grid gap-3 text-sm">
              <a
                href="https://github.com/sashwat06"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 transition hover:text-cyan-300"
              >
                GitHub ↗
              </a>

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 transition hover:text-cyan-300"
              >
                LinkedIn ↗
              </a>

              <a
                href="/resume/Sashwat-Shukla-Resume.pdf"
                className="text-gray-400 transition hover:text-cyan-300"
              >
                Resume ↗
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col gap-5 border-t border-white/5 pt-6 text-sm md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-gray-600">
              © {new Date().getFullYear()} Sashwat Shukla
            </p>

            <p className="mt-1 text-xs text-gray-700">
              Built with Next.js • React • TypeScript • Three.js
            </p>
          </div>

          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="flex h-10 w-10 items-center justify-center self-start rounded-xl border border-white/10 bg-white/3 text-gray-400 transition hover:border-cyan-400/30 hover:text-cyan-300 md:self-auto"
          >
            ↑
          </button>
        </div>
      </div>
    </footer>
  );
}