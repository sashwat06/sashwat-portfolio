export async function GET() {
  try {
    const username = "sashwat06";

    const response = await fetch(
      `https://api.github.com/users/${username}/repos?sort=updated&per_page=6`,
      {
        headers: {
          Accept: "application/vnd.github+json",
        },
        next: {
          revalidate: 3600,
        },
      }
    );

    if (!response.ok) {
      throw new Error("GitHub API request failed");
    }

    const repositories = await response.json();

    const formattedRepositories = repositories
      .filter((repo: any) => !repo.fork)
      .map((repo: any) => ({
        name: repo.name,
        description:
          repo.description || "No description available.",
        url: repo.html_url,
        language: repo.language,
        stars: repo.stargazers_count,
        forks: repo.forks_count,
        updatedAt: repo.updated_at,
      }));

    return Response.json({
      username,
      repositories: formattedRepositories,
    });
  } catch (error) {
    console.error("GitHub API error:", error);

    return Response.json(
      {
        error: "Unable to load GitHub data.",
      },
      {
        status: 500,
      }
    );
  }
}