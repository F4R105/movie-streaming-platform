// src/components/PopularMovies.tsx
import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { fetchPopularMovies } from "@/lib/tmdb";
import { Link } from "react-router-dom";

type Movie = {
  id: number;
  title: string;
  poster_path: string;
};

export default function PopularMovies() {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    fetchPopularMovies().then(setMovies).catch(console.error);
  }, []);

  return (
    <section className="px-4 py-10 max-w-4xl mx-auto" id="popular">
      <h2 className="text-2xl font-semibold mb-6">Popular Movies</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {movies.map((movie) => (
          <Link to={`/movie/${movie.id}`}>
            <Card key={movie.id} className="p-4">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="rounded mb-4"
              />
              <h3 className="text-lg font-medium">{movie.title}</h3>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}
