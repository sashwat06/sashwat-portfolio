import { experiences } from "@/Data/experience";

export default function ExperienceTimeline() {
  return (
    <section
      id="experience"
      className="border-t border-white/5 px-6 py-32"
    >
      <div className="mx-auto max-w-6xl">

        <div className="mb-16">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-cyan-400">
            02 — Experience
          </p>

          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Where I've
            <br />
            worked.
          </h2>
        </div>

        <div className="relative">

          {/* Timeline Line */}
          <div className="absolute left-2 top-0 hidden h-full w-px bg-white/10 md:block" />

          <div className="space-y-12">

            {experiences.map((experience, index) => (
              <div
                key={`${experience.company}-${index}`}
                className="relative md:pl-12"
              >

                {/* Timeline Dot */}
                <div className="absolute left-0 top-2 hidden h-4 w-4 rounded-full border-2 border-cyan-400 bg-black md:block" />

                <div className="rounded-3xl border border-white/10 bg-white/2 p-7 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30">

                  <div className="flex flex-col justify-between gap-4 sm:flex-row">

                    <div>
                      <p className="text-sm text-cyan-400">
                        {experience.period}
                      </p>

                      <h3 className="mt-2 text-2xl font-semibold text-white">
                        {experience.role}
                      </h3>

                      <p className="mt-1 text-gray-400">
                        {experience.company}
                      </p>
                    </div>

                    <span className="h-fit rounded-full border border-white/10 px-4 py-1 text-xs text-gray-500">
                      {experience.type}
                    </span>

                  </div>

                  <p className="mt-6 max-w-3xl leading-8 text-gray-400">
                    {experience.description}
                  </p>

                  <div className="mt-6 flex flex-wrap gap-2">

                    {experience.technologies.map((technology) => (
                      <span
                        key={technology}
                        className="rounded-full bg-white/5 px-3 py-1 text-xs text-gray-400"
                      >
                        {technology}
                      </span>
                    ))}

                  </div>

                </div>
              </div>
            ))}

          </div>
        </div>
      </div>
    </section>
  );
}