import { skillGroups } from "@/Data/skills";

export default function Skills() {
  return (
    <section
      id="skills"
      className="border-t border-white/5 px-6 py-32"
    >
      <div className="mx-auto max-w-6xl">

        <div className="mb-16">
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-cyan-400">
            03 — Skills
          </p>

          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Tools I use
            <br />
            to build.
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">

          {skillGroups.map((group) => (
            <div
              key={group.title}
              className="rounded-3xl border border-white/10 bg-white/2 p-7 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30"
            >
              <h3 className="text-xl font-semibold text-white">
                {group.title}
              </h3>

              <div className="mt-6 flex flex-wrap gap-2">

                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/10 px-3 py-2 text-xs text-gray-400 transition hover:border-cyan-400/30 hover:text-cyan-300"
                  >
                    {skill}
                  </span>
                ))}

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}