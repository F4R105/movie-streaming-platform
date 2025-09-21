import type { Movie, Genre } from "@/types";

// src/lib/tmdb.ts
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

export async function fetchGenres(): Promise<Genre[]> {
  const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
  const res = await fetch(
    `${BASE_URL}/genre/movie/list?api_key=${API_KEY}&language=en-US`
  );
  const data = await res.json();
  return data.genres as Genre[];
}

export async function fetchPopularMovies() {
  const res = await fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`);
  if (!res.ok) throw new Error("Failed to fetch movies");
  const data = await res.json();
  return data.results;
}

export async function fetchMovieDetails(movieId: string) {
  const res = await fetch(`${BASE_URL}/movie/${movieId}?api_key=${API_KEY}&language=en-US`);
  if (!res.ok) throw new Error(`Failed to fetch details for movie ID ${movieId}`);
  return res.json();
}

export async function fetchMovieStats(): Promise<Movie[]> {
  const res = await fetch(
    `${BASE_URL}/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&page=1`
  );
  const data = await res.json();
  return data.results as Movie[];
}


export async function fetchRecommendedMovies(movieId: number) {
  const res = await fetch(`${BASE_URL}/movie/${movieId}/recommendations?api_key=${API_KEY}&language=en-US&page=1`);
  if (!res.ok) throw new Error(`Failed to fetch recommendations for movie ID ${movieId}`);
  const data = await res.json();
  return data.results;
}

export async function fetchMovies({ page = 1, genre, year, sortBy, query }: any) {
  const base = query
    ? `https://api.themoviedb.org/3/search/movie`
    : `https://api.themoviedb.org/3/discover/movie`;

  const params = new URLSearchParams({
    api_key: API_KEY,
    language: "en-US",
    page: page.toString(),
    sort_by: sortBy || "release_date.desc",
    with_genres: genre || "",
    primary_release_year: year || "",
    query: query || "",
  });

  const res = await fetch(`${base}?${params}`);
  const data = await res.json();
  return data.results;
}
