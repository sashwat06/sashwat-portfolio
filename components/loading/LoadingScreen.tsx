"use client";

import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const progressTimer = setInterval(() => {
      setProgress((previous) => {
        if (previous >= 100) {
          clearInterval(progressTimer);
          return 100;
        }

        return previous + 5;
      });
    }, 50);

    const hideTimer = setTimeout(() => {
      setVisible(false);
    }, 1500);

    return () => {
      clearInterval(progressTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (!visible) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-100 flex items-center justify-center bg-[#050505]">
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/5 blur-[120px]" />

      <div className="relative w-full max-w-md px-8">
        {/* Brand */}
        <div className="text-center">
          <p className="text-xs font-medium uppercase tracking-[0.4em] text-cyan-300">
            Sashwat Shukla
          </p>

          <h1 className="mt-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            System Initializing
          </h1>

          <p className="mt-3 font-mono text-xs text-gray-600">
            Preparing developer environment...
          </p>
        </div>

        {/* Status */}
        <div className="mt-12 space-y-4">
          <StatusRow
            label="NETWORK"
            status={progress >= 25}
          />

          <StatusRow
            label="SYSTEMS"
            status={progress >= 50}
          />

          <StatusRow
            label="GITHUB"
            status={progress >= 75}
          />

          <StatusRow
            label="AI CORE"
            status={progress >= 100}
          />
        </div>

        {/* Progress */}
        <div className="mt-10">
          <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.25em]">
            <span className="text-gray-600">
              Loading
            </span>

            <span className="font-mono text-cyan-300">
              {progress}%
            </span>
          </div>

          <div className="mt-3 h-1 overflow-hidden rounded-full bg-white/5">
            <div
              className="h-full rounded-full bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.7)] transition-all duration-100"
              style={{
                width: `${progress}%`,
              }}
            />
          </div>
        </div>

        {/* Online */}
        {progress >= 100 && (
          <p className="mt-8 text-center font-mono text-xs tracking-[0.25em] text-green-300">
            SYSTEM ONLINE
          </p>
        )}
      </div>
    </div>
  );
}

function StatusRow({
  label,
  status,
}: {
  label: string;
  status: boolean;
}) {
  return (
    <div className="flex items-center justify-between border-b border-white/5 pb-3">
      <div className="flex items-center gap-3">
        <span
          className={`h-2 w-2 rounded-full transition-all ${
            status
              ? "bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.8)]"
              : "bg-gray-700"
          }`}
        />

        <span className="font-mono text-xs tracking-[0.2em] text-gray-400">
          {label}
        </span>
      </div>

      <span
        className={`font-mono text-[10px] ${
          status ? "text-green-300" : "text-gray-700"
        }`}
      >
        {status ? "READY" : "INITIALIZING"}
      </span>
    </div>
  );
}