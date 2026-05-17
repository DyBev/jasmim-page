import { MovieDetails } from "../types";

export async function onBeforePrerenderStart() {
  const response = await fetch("https://brillout.github.io/star-wars/api/films.json");
  const moviesData = (await response.json()) as MovieDetails[];

  return moviesData.map((movie) => ({
    url: `/star-wars/${movie.id}`,
  }))
}
