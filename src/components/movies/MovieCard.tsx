// src/components/movies/MovieCard.tsx
import { Link } from "react-router-dom";
import type { Movie } from "@/types";

// const genreMap: Record<number, string> = {
//   28: "Action",
//   35: "Comedy",
//   18: "Drama",
//   878: "Sci-Fi",
//   // Add more as needed
// };

export default function MovieCard({ movie }: { movie: Movie }) {
  return (
    <Link
      to={`/movie/${movie.id}`}
      className="block rounded overflow-hidden bg-muted hover:bg-accent transition-colors shadow-sm"
    >
      <img
        src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
        alt={movie.title}
        className="w-full h-auto rounded-t"
      />
      <div className="p-3 space-y-1">
        <h3 className="text-sm font-semibold line-clamp-2">{movie.title}</h3>
        <p className="text-xs text-muted-foreground">{movie.release_date}</p>
        <p className="text-xs">
          {/* {movie.genre_ids.map((id) => genreMap[id]).filter(Boolean).join(", ")} */}
        </p>
        {/* <p className="text-xs">⭐ {movie.vote_average}</p> */}
      </div>
    </Link>
  );
}
