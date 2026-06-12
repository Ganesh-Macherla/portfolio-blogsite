export async function getProjects() {
  const response = await fetch(
    "https://api.github.com/users/Ganesh-Macherla/repos"
  );

  const repos = await response.json();

  return repos
    .filter(
      (repo: any) =>
        !repo.fork &&
        repo.name !== "Ganesh-Macherla"
    )
    .map((repo: any) => ({
      title: repo.name,
      desc: repo.description || "No description provided.",
      link: repo.html_url,
      stars: repo.stargazers_count,
      featured:
        repo.name === "GigShield" ||
        repo.name === "OMNI-CI" ||
        repo.name === "Gesture-Controlled-Flappy-Bird" ||
        repo.name === "time-audit",
    }))
    .sort((a: any, b: any) => b.stars - a.stars);
}