// src/pages/MovieDetailsPage.tsx
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieDetails } from "@/lib/tmdb";
import RecommendedMovies from "@/components/sections/RecommendedMovies";
import Loader from "@/components/Loader";

export default function Movie() {
  const { id } = useParams();
  const movieId = id ? parseInt(id) : null;

  const [movie, setMovie] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (!id) return;

    setLoading(true);
    setMovie(null); // Clear previous data immediately
    fetchMovieDetails(id)
      .then(setMovie)
      .catch((err) => console.error("Movie fetch error:", err))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[50vh]"><Loader /></div>
    )
  }

  if (!movieId || !movie) {
    return (
      <div className="flex justify-center items-center min-h-[50vh]">
        <p className="text-center py-10">Invalid movie ID</p>
      </div>
    )
  }

  return (
    <>
      <section className="max-w-4xl mx-auto flex flex-col md:flex-row gap-10 px-4 py-10" id="movie-details">
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          className="max-h-86 w-auto mx-auto rounded shadow"
        />
        <div>
          <h1 className="text-3xl font-bold mb-4">{movie.title}</h1>
          <p className="text-muted-foreground mb-4">{movie.overview}</p>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div><strong>Release Date:</strong> {movie.release_date}</div>
            <div><strong>Runtime:</strong> {movie.runtime} min</div>
            <div><strong>Genres:</strong> {movie.genres.map((g: any) => g.name).join(", ")}</div>
            <div><strong>Rating:</strong> {movie.vote_average} / 10</div>
          </div>
        </div>
      </section>
      <RecommendedMovies movieId={movieId} />
    </>
  );
}
