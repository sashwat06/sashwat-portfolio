"use client";

import { useState } from "react";

const navItems = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed left-0 top-0 z-50 w-full">
      <nav className="mx-auto mt-4 flex max-w-6xl items-center justify-between rounded-2xl border border-white/10 bg-black/50 px-5 py-4 backdrop-blur-xl">
        
        {/* Logo */}
        <a
          href="#"
          className="text-lg font-bold tracking-tight text-white"
        >
          Sashwat<span className="text-cyan-400"> </span>Shukla
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm text-gray-400 transition hover:text-white"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Desktop Resume */}
        <a
          href="/resume/Sashwat-Shukla-Resume.pdf"
          className="hidden rounded-full border border-cyan-400/40 px-5 py-2 text-sm font-medium text-cyan-300 transition hover:bg-cyan-400 hover:text-black md:block"
        >
          Resume
        </a>

        {/* Mobile Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-2xl text-white md:hidden"
          aria-label="Toggle navigation"
        >
          {menuOpen ? "×" : "☰"}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="mx-4 mt-2 rounded-2xl border border-white/10 bg-black/90 p-5 backdrop-blur-xl md:hidden">
          <div className="flex flex-col gap-5">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="text-gray-300 transition hover:text-cyan-400"
              >
                {item.label}
              </a>
            ))}

            <a
              href="/resume/Sashwat-Shukla-Resume.pdf"
              className="rounded-full bg-cyan-400 px-5 py-2 text-center font-medium text-black"
            >
              Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
}