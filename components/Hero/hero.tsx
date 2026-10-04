"use client";

import { motion } from "motion/react";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden px-6 pt-24">
      
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-125 w-125 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-2">

        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Small Label */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mb-6 flex items-center gap-3"
          >
            <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />

            <span className="text-sm uppercase tracking-[0.3em] text-cyan-400">
              IT • CLOUD • AI • AUTOMATION
            </span>
          </motion.div>

          {/* Heading */}
          <h1 className="text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
            I build
            <br />

            <span className="bg-linear-to-r from-cyan-300 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              systems
            </span>

            <br />

            that connect
            <br />

            <span className="text-white/70">
              people + technology.
            </span>
          </h1>

          {/* Description */}
          <p className="mt-8 max-w-xl text-base leading-8 text-gray-400 sm:text-lg">
            I'm Sashwat Shukla, an IT Support Engineer exploring
            Systems Administration, Cloud Infrastructure and
            AI-powered applications.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href="#work"
              className="group rounded-full bg-cyan-400 px-7 py-3.5 text-center font-semibold text-black transition hover:bg-cyan-300"
            >
              Explore My Work
              <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">
                →
              </span>
            </a>

            <a
              href="https://github.com/sashwat06/Sashwat-Portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/15 bg-white/5 px-7 py-3.5 text-center font-semibold text-white backdrop-blur transition hover:border-cyan-400/40 hover:bg-white/10"
            >
              GitHub ↗
            </a>
          </div>
        </motion.div>

        {/* Right Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 1,
            delay: 0.2,
          }}
          className="relative flex h-112.5 items-center justify-center"
        >
          {/* Outer Ring */}
          <div className="absolute h-72 w-72 animate-[spin_20s_linear_infinite] rounded-full border border-cyan-400/20 sm:h-96 sm:w-96" />

          {/* Middle Ring */}
          <div className="absolute h-56 w-56 animate-[spin_15s_linear_infinite_reverse] rounded-full border border-blue-500/20 sm:h-72 sm:w-72" />

          {/* Core */}
          <div className="relative flex h-40 w-40 items-center justify-center rounded-full border border-cyan-400/30 bg-cyan-400/5 shadow-[0_0_100px_rgba(34,211,238,0.2)] backdrop-blur-xl sm:h-48 sm:w-48">
            <div className="absolute h-20 w-20 animate-pulse rounded-full bg-cyan-400/20 blur-2xl" />

            <div className="relative text-center">
              <div className="text-4xl">◈</div>

              <p className="mt-2 text-xs uppercase tracking-[0.3em] text-cyan-300">
                AI CORE
              </p>
            </div>
          </div>

          {/* Floating Nodes */}
          <div className="absolute left-[12%] top-[20%] rounded-full border border-cyan-400/20 bg-black/60 px-4 py-2 text-xs text-cyan-300 backdrop-blur">
            NETWORK
          </div>

          <div className="absolute bottom-[18%] right-[8%] rounded-full border border-blue-400/20 bg-black/60 px-4 py-2 text-xs text-blue-300 backdrop-blur">
            CLOUD
          </div>

          <div className="absolute right-[5%] top-[18%] rounded-full border border-purple-400/20 bg-black/60 px-4 py-2 text-xs text-purple-300 backdrop-blur">
            AI
          </div>

          <div className="absolute bottom-[20%] left-[5%] rounded-full border border-green-400/20 bg-black/60 px-4 py-2 text-xs text-green-300 backdrop-blur">
            SYSTEMS
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs uppercase tracking-[0.3em] text-gray-500 sm:flex"
      >
        <span>Scroll</span>
        <span className="text-lg">↓</span>
      </motion.div>
    </section>
  );
}