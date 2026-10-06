type GitHubRepo = {
  name: string;
  description: string;
  url: string;
  language: string | null;
  stars: number;
  forks: number;
  updatedAt: string;
};

type GitHubRepoCardProps = {
  repo: GitHubRepo;
};

export default function GitHubRepoCard({
  repo,
}: GitHubRepoCardProps) {
  return (
    <a
      href={repo.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block rounded-2xl border border-white/10 bg-white/3 p-6 transition duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/5"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg font-semibold text-white transition group-hover:text-cyan-300">
            {repo.name}
          </h3>

          <p className="mt-2 text-sm leading-6 text-gray-400">
            {repo.description}
          </p>
        </div>

        <span className="text-gray-500 transition group-hover:text-cyan-300">
          ↗
        </span>
      </div>

      <div className="mt-5 flex flex-wrap items-center gap-4 text-xs text-gray-500">
        {repo.language && (
          <span className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-cyan-400" />
            {repo.language}
          </span>
        )}

        <span>★ {repo.stars}</span>

        <span>⑂ {repo.forks}</span>
      </div>
    </a>
  );
}