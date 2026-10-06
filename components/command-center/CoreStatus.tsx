"use client";

import { useEffect, useState } from "react";

export default function CoreStatus() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      setTime(
        new Date().toLocaleTimeString("en-IN", {
          hour12: false,
        })
      );
    };

    updateTime();

    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative flex min-h-70 items-center justify-center overflow-hidden rounded-3xl border border-cyan-400/20 bg-black/40">
      {/* Outer rings */}
      <div className="absolute h-56 w-56 rounded-full border border-cyan-400/10" />

      <div className="absolute h-44 w-44 rounded-full border border-blue-400/10" />

      <div className="absolute h-32 w-32 rounded-full border border-purple-400/10" />

      {/* Rotating ring */}
      <div className="absolute h-48 w-48 animate-[spin_12s_linear_infinite] rounded-full border border-dashed border-cyan-400/20" />

      {/* Core */}
      <div className="relative flex h-24 w-24 items-center justify-center rounded-full border border-cyan-300/40 bg-cyan-400/10 shadow-[0_0_60px_rgba(34,211,238,0.2)]">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-cyan-400/20 shadow-[0_0_30px_rgba(34,211,238,0.3)]">
          <span className="text-2xl text-cyan-300">
            ◉
          </span>
        </div>
      </div>

      {/* Orbit nodes */}
      <span className="absolute left-[22%] top-[28%] h-2 w-2 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/70" />

      <span className="absolute right-[22%] top-[30%] h-2 w-2 rounded-full bg-purple-400 shadow-lg shadow-purple-400/70" />

      <span className="absolute bottom-[25%] left-[28%] h-2 w-2 rounded-full bg-blue-400 shadow-lg shadow-blue-400/70" />

      <span className="absolute bottom-[23%] right-[28%] h-2 w-2 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/70" />

      {/* Center text */}
      <div className="absolute bottom-5 left-0 right-0 text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-cyan-300">
          System Core
        </p>

        <p className="mt-1 font-mono text-xs text-gray-600">
          {time || "INITIALIZING..."}
        </p>
      </div>
    </div>
  );
}