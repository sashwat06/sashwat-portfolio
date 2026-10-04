import { projects } from "@/Data/projects";
import ProjectCard from "./ProjectCard";

export default function ProjectGrid() {
  return (
    <section
      id="work"
      className="border-t border-white/5 px-6 py-32"
    >
      <div className="mx-auto max-w-6xl">

        {/* Heading */}
        <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">

          <div>
            <p className="mb-4 text-sm uppercase tracking-[0.3em] text-cyan-400">
              04 — Selected Work
            </p>

            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-5xl">
              Things I've
              <br />
              built.
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-gray-500">
            A selection of projects covering AI, infrastructure,
            networking, frontend development and experimentation.
          </p>

        </div>

        {/* Projects */}
        <div className="grid gap-5 md:grid-cols-2">

          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              index={index}
            />
          ))}

        </div>

      </div>
    </section>
  );
}