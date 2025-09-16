// components/PopularMovies.tsx
import { Card } from "@/components/ui/card";

const movies = [
  { title: "Dune", poster: "/dune.jpg" },
  { title: "Oppenheimer", poster: "/oppenheimer.jpg" },
  { title: "Barbie", poster: "/barbie.jpg" },
];

export default function PopularMovies() {
  return (
    <section className="px-4 py-10">
      <h2 className="text-2xl font-semibold mb-6">Popular Movies</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {movies.map((movie) => (
          <Card key={movie.title} className="p-4">
            <img src={movie.poster} alt={movie.title} className="rounded mb-4" />
            <h3 className="text-lg font-medium">{movie.title}</h3>
          </Card>
        ))}
      </div>
    </section>
  );
}
