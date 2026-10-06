"use client";

import { useState } from "react";

const navItems = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Command", href: "#command-center" },
  { label: "GitHub", href: "#github" },
  { label: "Contact", href: "#contact" },
];


export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="fixed left-0 top-0 z-50 w-full px-4">
      <nav className="mx-auto mt-4 max-w-6xl rounded-2xl border border-white/10 bg-black/60 px-5 py-4 backdrop-blur-xl">
        {/* Main navbar */}
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            onClick={closeMenu}
            className="text-lg font-bold tracking-tight text-white"
          >
            Sashwat Shukla
          </a>

          {/* Desktop navigation */}
          <div className="hidden items-center gap-7 md:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm text-gray-400 transition hover:text-white"
              >
                {item.label}
              </a>
            ))}

            <a
              href="/resume/Sashwat-Shukla-Resume.pdf"
              className="rounded-full border border-cyan-400/40 px-5 py-2 text-sm font-medium text-cyan-300 transition hover:border-cyan-300 hover:bg-cyan-400/10"
            >
              Resume
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={
              menuOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={menuOpen}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-gray-300 transition hover:border-cyan-400/30 hover:text-white md:hidden"
          >
            <span className="text-xl">
              {menuOpen ? "✕" : "☰"}
            </span>
          </button>
        </div>

        {/* Mobile navigation */}
        {menuOpen && (
          <div className="mt-4 border-t border-white/10 pt-4 md:hidden">
            <div className="flex flex-col gap-1">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={closeMenu}
                  className="rounded-xl px-4 py-3 text-sm text-gray-300 transition hover:bg-white/5 hover:text-cyan-300"
                >
                  {item.label}
                </a>
              ))}

              <a
                href="/resume/Sashwat-Shukla-Resume.pdf"
                onClick={closeMenu}
                className="mt-2 rounded-xl border border-cyan-400/30 bg-cyan-400/5 px-4 py-3 text-center text-sm font-medium text-cyan-300 transition hover:bg-cyan-400/10"
              >
                View Resume
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}