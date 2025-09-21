export type Genre = {
  id: number;
  name: string;
};

export type Movie = {
  id: number;
  title: string;
  release_date: string;
  popularity: number;
  poster_path: string;
  vote_average: number;
  genre_ids: number[]; // ✅ Add this line
};

