export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section className="flex min-h-screen items-center justify-center px-6">
        <div className="max-w-4xl text-center">
          <p className="mb-4 text-sm uppercase tracking-[0.4em] text-cyan-400">
            IT • CLOUD • AI • AUTOMATION
          </p>

          <h1 className="text-5xl font-bold tracking-tight sm:text-7xl">
            Hi, I'm{" "}
            <span className="text-cyan-400">
              Sashwat
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-400">
            IT Support Engineer building toward Systems Administration,
            Cloud Infrastructure and AI-powered applications.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <button className="rounded-full bg-cyan-400 px-7 py-3 font-semibold text-black transition hover:bg-cyan-300">
              Explore My Work
            </button>

            <button className="rounded-full border border-white/20 px-7 py-3 font-semibold transition hover:bg-white/10">
              Download Resume
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}