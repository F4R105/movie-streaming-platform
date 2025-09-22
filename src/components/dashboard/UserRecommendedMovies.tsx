const recommended = [
  {
    id: 1,
    title: "Dune",
    release_date: "2021",
    poster_path: "https://image.tmdb.org/t/p/w200/d5NXSklXo0qyIYkgV94XAgMIckC.jpg",
  },
  {
    id: 2,
    title: "Interstellar",
    release_date: "2014",
    poster_path: "https://image.tmdb.org/t/p/w200/rAiYTfKGqDCRIIqo664sY9XZIvQ.jpg",
  },
  {
    id: 3,
    title: "The Dark Knight",
    release_date: "2008",
    poster_path: "https://image.tmdb.org/t/p/w200/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
  },
  {
    id: 4,
    title: "Tenet",
    release_date: "2020",
    poster_path: "https://image.tmdb.org/t/p/w200/k68nPLbIST6NP96JmTxmZijEvCA.jpg",
  },
];

export default function UserRecommendedMovies() {
  return (
    <section className="max-w-4xl mx-auto py-10">
      <h2 className="text-xl font-semibold mb-6">Recommended Movies for you</h2>
      <ul className="space-y-4">
        {recommended.map((movie) => (
          <li
            key={movie.id}
            className="cursor-pointer flex items-center gap-4 bg-muted rounded-lg p-4 transition-transform duration-200 hover:scale-[1.02] hover:shadow-md hover:bg-muted/80"
          >
            <img
              src={movie.poster_path}
              alt={movie.title}
              className="w-16 h-24 object-cover rounded-md"
            />
            <div>
              <h3 className="text-lg font-medium text-foreground">{movie.title}</h3>
              <p className="text-sm text-muted-foreground">Released: {movie.release_date}</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
