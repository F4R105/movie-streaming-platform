// src/components/RecommendedMovies.tsx
import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { fetchRecommendedMovies } from "@/lib/tmdb";
import { Link } from "react-router-dom";
import Loader from "../Loader";

type Movie = {
  id: number;
  title: string;
  poster_path: string;
};

export default function RecommendedMovies({ movieId }: { movieId: number }) {
  const [recommended, setRecommended] = useState<Movie[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setLoading(true);
    fetchRecommendedMovies(movieId)
      .then(setRecommended)
      .catch((err) => console.error("Recommendation error:", err))
      .finally(() => setLoading(false));
  }, [movieId]);

  return (
    <section className="px-4 py-10 bg-muted/30 max-w-4xl mx-auto rounded-2xl" id="recommended">
      <h2 className="text-2xl font-semibold mb-6">Recommended</h2>
      {loading ?
        (
          <div className="flex justify-center items-center py-5"><Loader /></div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {recommended.length > 0 ? (
              recommended.map((movie) => (
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
              ))
            ) : (
              <p className="text-muted-foreground">No recommendations available at the moment.</p>
            )}
          </div>
        )
      }
    </section>
  );
}
