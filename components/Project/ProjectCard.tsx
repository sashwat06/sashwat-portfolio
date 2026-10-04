type Project = {
  title: string;
  category: string;
  description: string;
  technologies: string[];
  github: string;
  live: string;
  featured: boolean;
};

type ProjectCardProps = {
  project: Project;
  index: number;
};

export default function ProjectCard({
  project,
  index,
}: ProjectCardProps) {
  return (
    <article className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/2 p-7 transition duration-500 hover:-translate-y-2 hover:border-cyan-400/30">
      
      {/* Number */}
      <div className="absolute right-6 top-6 text-sm text-white/20">
        0{index + 1}
      </div>

      {/* Category */}
      <p className="text-xs uppercase tracking-[0.25em] text-cyan-400">
        {project.category}
      </p>

      {/* Title */}
      <h3 className="mt-5 text-2xl font-semibold text-white transition group-hover:text-cyan-300">
        {project.title}
      </h3>

      {/* Description */}
      <p className="mt-4 min-h-24 leading-7 text-gray-400">
        {project.description}
      </p>

      {/* Technologies */}
      <div className="mt-6 flex flex-wrap gap-2">
        {project.technologies.map((technology) => (
          <span
            key={technology}
            className="rounded-full border border-white/10 bg-white/3 px-3 py-1.5 text-xs text-gray-400"
          >
            {technology}
          </span>
        ))}
      </div>

      {/* Links */}
      <div className="mt-8 flex items-center gap-5">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium text-white transition hover:text-cyan-400"
        >
          GitHub ↗
        </a>

        {project.live && (
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-cyan-400 transition hover:text-cyan-300"
          >
            Live Demo ↗
          </a>
        )}
      </div>

      {/* Hover Glow */}
      <div className="pointer-events-none absolute -bottom-20 -right-20 h-40 w-40 rounded-full bg-cyan-400/10 blur-3xl transition duration-500 group-hover:bg-cyan-400/20" />

    </article>
  );
}