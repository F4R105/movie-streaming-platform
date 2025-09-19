export default function MovieFilters({
  genre,
  year,
  rating,
  setGenre,
  setYear,
  setRating,
  disabled,
}: {
  genre: string;
  year: string;
  rating: string;
  setGenre: (g: string) => void;
  setYear: (y: string) => void;
  setRating: (r: string) => void;
  disabled: boolean;
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <select value={genre} onChange={(e) => setGenre(e.target.value)} disabled={disabled}>
        <option value="">All Genres</option>
        <option value="28">Action</option>
        <option value="35">Comedy</option>
        <option value="18">Drama</option>
        <option value="878">Sci-Fi</option>
        {/* Add more */}
      </select>

      <select value={year} onChange={(e) => setYear(e.target.value)} disabled={disabled}>
        <option value="">Any Year</option>
        {[...Array(10)].map((_, i) => {
          const y = 2025 - i;
          return <option key={y} value={y}>{y}</option>;
        })}
      </select>

      <select value={rating} onChange={(e) => setRating(e.target.value)} disabled={disabled}>
        <option value="">Any Rating</option>
        <option value="6">6+</option>
        <option value="7">7+</option>
        <option value="8">8+</option>
        <option value="9">9+</option>
      </select>
    </div>
  );
}
