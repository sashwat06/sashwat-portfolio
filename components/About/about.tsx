import { profile } from "@/Data/profile";

export default function About() {
  return (
    <section
      id="about"
      className="border-t border-white/5 px-6 py-32"
    >
      <div className="mx-auto max-w-6xl">

        {/* Section Heading */}
        <div className="mb-16">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-cyan-400">
            01 — About
          </p>

          <h2 className="max-w-3xl text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Building systems,
            <br />
            solving problems.
          </h2>
        </div>

        <div className="grid gap-12 lg:grid-cols-2">

          {/* Main Description */}
          <div>
            <p className="text-lg leading-9 text-gray-300">
              {profile.summary}
            </p>

            <p className="mt-6 text-base leading-8 text-gray-500">
              My journey started with IT infrastructure and end-user
              support. I'm now expanding that foundation into systems
              administration, networking, cloud infrastructure,
              automation and AI-powered applications.
            </p>
          </div>

          {/* Quick Info */}
          <div className="grid gap-4 sm:grid-cols-2">

            <div className="rounded-2xl border border-white/10 bg-white/2 p-6 transition hover:border-cyan-400/30">
              <p className="text-sm text-gray-500">
                Current Focus
              </p>

              <p className="mt-3 font-medium text-white">
                Systems + Cloud + AI
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/2 p-6 transition hover:border-cyan-400/30">
              <p className="text-sm text-gray-500">
                Location
              </p>

              <p className="mt-3 font-medium text-white">
                {profile.location}
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/2 p-6 transition hover:border-cyan-400/30">
              <p className="text-sm text-gray-500">
                Experience
              </p>

              <p className="mt-3 font-medium text-white">
                IT Infrastructure
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/2 p-6 transition hover:border-cyan-400/30">
              <p className="text-sm text-gray-500">
                Status
              </p>

              <p className="mt-3 font-medium text-cyan-400">
                {profile.availability}
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}