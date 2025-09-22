import { useEffect, useState } from "react";
import { fetchGenres, fetchMovieStats } from "@/lib/tmdb";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

type GenreRating = {
  genre: string;
  avgRating: number;
};


export default function MovieStatsChart() {
  const [data, setData] = useState<GenreRating[]>([]);
  const [genreMap, setGenreMap] = useState<Record<number, string>>({});

  useEffect(() => {
    fetchGenres()
      .then((genres) => {
        const map = Object.fromEntries(genres.map((g) => [g.id, g.name]));
        setGenreMap(map);
      });
  }, []);

  useEffect(() => {
    fetchMovieStats().then((movies) => {
      const genreRatings: Record<string, number[]> = {};

      movies.forEach((movie) => {
        movie.genre_ids.forEach((id) => {
          const genre = genreMap[id];
          if (!genre) return;
          if (!genreRatings[genre]) genreRatings[genre] = [];
          genreRatings[genre].push(movie.vote_average);
        });
      });

      const chartData = Object.entries(genreRatings).map(([genre, ratings]) => ({
        genre,
        avgRating: ratings.reduce((a, b) => a + b, 0) / ratings.length,
      }));

      setData(chartData);
    });
  }, [genreMap]);

  return (
    <div className="bg-muted rounded-xl p-6 max-w-4xl mx-auto">
      <h2 className="text-xl font-semibold mb-4">📊 Average Rating by Genre</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis
            dataKey="genre"
            interval={0}
            angle={-50}
            // textAnchor="end"
          />
          <YAxis domain={[0, 10]} />
          <Tooltip />
          <Bar dataKey="avgRating" fill="#8884d8" radius={[4, 4, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
