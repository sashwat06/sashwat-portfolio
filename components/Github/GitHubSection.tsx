"use client";

import { useEffect, useState } from "react";
import GitHubRepoCard from "./GitHubRepoCard";

type GitHubRepo = {
  name: string;
  description: string;
  url: string;
  language: string | null;
  stars: number;
  forks: number;
  updatedAt: string;
};

export default function GitHubSection() {
  const [repositories, setRepositories] = useState<
    GitHubRepo[]
  >([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState(false);

  useEffect(() => {
    async function loadGitHub() {
      try {
        const response = await fetch("/api/github");

        if (!response.ok) {
          throw new Error("Failed");
        }

        const data = await response.json();

        setRepositories(data.repositories || []);
      } catch {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    loadGitHub();
  }, []);

  return (
    <section
      id="github"
      className="mx-auto max-w-6xl px-6 py-24"
    >
      {/* Heading */}
      <div className="mb-12">
        <p className="mb-3 text-sm font-medium uppercase tracking-[0.3em] text-cyan-300">
          Open Source
        </p>

        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
              GitHub
            </h2>

            <p className="mt-4 max-w-2xl text-gray-400">
              A live look at the projects I'm building,
              experimenting with and learning from.
            </p>
          </div>

          <a
            href="https://github.com/sashwat06"
            target="_blank"
            rel="noopener noreferrer"
            className="w-fit rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-medium text-white transition hover:border-cyan-400/30 hover:text-cyan-300"
          >
            View GitHub ↗
          </a>
        </div>
      </div>

      {/* Loading */}
      {loading && (
        <div className="grid gap-5 md:grid-cols-2">
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="h-44 animate-pulse rounded-2xl border border-white/10 bg-white/3"
            />
          ))}
        </div>
      )}

      {/* Error */}
      {!loading && error && (
        <div className="rounded-2xl border border-red-400/20 bg-red-400/5 p-6 text-sm text-gray-400">
          Unable to load GitHub repositories right now.
        </div>
      )}

      {/* Empty */}
      {!loading &&
        !error &&
        repositories.length === 0 && (
          <div className="rounded-2xl border border-white/10 bg-white/3 p-8 text-center text-gray-400">
            No public repositories available yet.
          </div>
        )}

      {/* Repositories */}
      {!loading &&
        !error &&
        repositories.length > 0 && (
          <div className="grid gap-5 md:grid-cols-2">
            {repositories.map((repo) => (
              <GitHubRepoCard
                key={repo.name}
                repo={repo}
              />
            ))}
          </div>
        )}
    </section>
  );
}