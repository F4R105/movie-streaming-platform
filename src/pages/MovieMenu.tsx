import { useEffect, useState } from "react";
import { fetchMovies } from "@/lib/tmdb";
import type { Movie } from "@/types";
import MovieCard from "@/components/movies/MovieCard";
import MovieFilters from "@/components/movies/MoviesFilter";
import MovieSearchBar from "@/components/movies/SearchBar";
import { Button } from "@/components/ui/button";

export default function MovieMenu() {
    const [movies, setMovies] = useState<Movie[]>([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [query, setQuery] = useState("");
    const [genre, setGenre] = useState("");
    const [year, setYear] = useState("");
    const [rating, setRating] = useState("");

    useEffect(() => {
        setLoading(true);
        fetchMovies({ page, query, genre, year, rating })
            .then(setMovies)
            .finally(() => setLoading(false));
    }, [page, query, genre, year, rating]);

    return (
        <main className="max-w-4xl mx-auto px-4 space-y-6">
            <div className="space-y-6 mb-10 sticky top-18 py-5 bg-background">
                <h1 className="text-3xl font-bold">🎬 Explore Movies</h1>

                <MovieSearchBar onSearch={setQuery} disabled={loading} />
                <MovieFilters
                    genre={genre}
                    year={year}
                    rating={rating}
                    setGenre={setGenre}
                    setYear={setYear}
                    setRating={setRating}
                    disabled={loading}
                />
            </div>

            {loading ? (
                <p className="text-center py-10 text-muted-foreground">Loading movies…</p>
            ) : (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {movies.map((movie) => (
                        <MovieCard key={movie.id} movie={movie} />
                    ))}
                </div>
            )}

            <div className="mt-6 flex justify-center gap-2">
                <Button
                    variant="outline"
                    onClick={() => setPage((p) => Math.max(p - 1, 1))}
                    disabled={loading || page === 1}
                >
                    Previous
                </Button>
                <Button
                    variant="outline"
                    onClick={() => setPage((p) => p + 1)}
                    disabled={loading}
                >
                    Next
                </Button>
            </div>
        </main>
    );
}
