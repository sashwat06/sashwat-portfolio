"use client";

import { motion } from "motion/react";
import dynamic from "next/dynamic";

const Scene = dynamic(
  () => import("@/components/Three/Scene"),
  {
    ssr: false,
  }
);

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden px-6 pt-24">

      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-125 w-125 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[120px]" />

      {/* Step 2C: tighter gap on phones */}
      <div className="mx-auto grid w-full max-w-6xl items-center gap-8 md:gap-12 lg:grid-cols-2">

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

          {/* Heading - Step 2D: responsive text size */}
          <h1 className="text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
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

        {/* RIGHT SIDE - 3D WORLD */}
        {/* Step 2B: 340px / 400px / 450px (already set via h-85 / h-100 / h-112.5) */}
        <div className="relative h-85 w-full sm:h-100 lg:h-112.5">

          {/* 3D Scene */}
          <div className="absolute inset-0">
            <Scene />
          </div>

          {/* Overlay Labels */}

          <div className="pointer-events-none absolute left-[8%] top-[18%] rounded-full border border-cyan-400/20 bg-black/60 px-4 py-2 text-xs text-cyan-300 backdrop-blur">
            NETWORK
          </div>

          <div className="pointer-events-none absolute right-[8%] top-[20%] rounded-full border border-purple-400/20 bg-black/60 px-4 py-2 text-xs text-purple-300 backdrop-blur">
            AI
          </div>

          <div className="pointer-events-none absolute bottom-[18%] right-[10%] rounded-full border border-blue-400/20 bg-black/60 px-4 py-2 text-xs text-blue-300 backdrop-blur">
            CLOUD
          </div>

          <div className="pointer-events-none absolute bottom-[20%] left-[8%] rounded-full border border-green-400/20 bg-black/60 px-4 py-2 text-xs text-green-300 backdrop-blur">
            SYSTEMS
          </div>

        </div>

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