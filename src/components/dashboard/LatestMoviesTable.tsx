import { useEffect, useState } from "react";
import { fetchPopularMovies } from "@/lib/tmdb";
import { Button } from "@/components/ui/button";
import type { Movie } from "@/types";

export default function LatestMoviesTable() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [sortKey, setSortKey] = useState<"release_date" | "popularity">("release_date");
  const [sortOrder, setSortOrder] = useState<"asc" | "desc">("desc");

  const sortedMovies = [...movies].sort((a, b) => {
    const aVal = sortKey === "release_date" ? new Date(a.release_date).getTime() : a.popularity;
    const bVal = sortKey === "release_date" ? new Date(b.release_date).getTime() : b.popularity;
    return sortOrder === "asc" ? aVal - bVal : bVal - aVal;
  });

  useEffect(() => {
    fetchPopularMovies().then((data: Movie[]) => {
      const sorted = data
        .sort((a, b) => new Date(b.release_date).getTime() - new Date(a.release_date).getTime())
        .slice(0, 5);
      setMovies(sorted);
    });
  }, []);

  return (
    <section className="max-w-4xl mx-auto py-10">
      <h2 className="text-xl font-semibold mb-4">Latest Movies</h2>
      <table className="w-full text-sm border rounded-md overflow-hidden">
        <thead className="bg-muted text-muted-foreground">
          <tr>
            <th className="px-4 py-3 text-left">🎬 Title</th>
            <th
              className="px-4 py-3 text-left cursor-pointer hover:text-foreground"
              onClick={() => {
                setSortKey("release_date");
                setSortOrder((prev) => (sortKey === "release_date" && prev === "desc" ? "asc" : "desc"));
              }}
            >
              📅 Release Date {sortKey === "release_date" ? (sortOrder === "asc" ? "↑" : "↓") : ""}
            </th>
            <th
              className="px-4 py-3 text-left cursor-pointer hover:text-foreground"
              onClick={() => {
                setSortKey("popularity");
                setSortOrder((prev) => (sortKey === "popularity" && prev === "desc" ? "asc" : "desc"));
              }}
            >
              🔥 Popularity {sortKey === "popularity" ? (sortOrder === "asc" ? "↑" : "↓") : ""}
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedMovies.map((movie, index) => (
            <tr
              key={movie.id}
              className={`hover:bg-accent transition-colors ${index % 2 === 0 ? "bg-background" : "bg-muted/50"
                }`}
            >
              <td className="px-4 py-3 font-medium">{movie.title}</td>
              <td className="px-4 py-3">{movie.release_date}</td>
              <td className="px-4 py-3">{Math.round(movie.popularity)}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="mt-4 text-right">
        <Button variant="outline" size="sm" asChild>
          <a href="/movies">View More</a>
        </Button>
      </div>
    </section>
  );
}
