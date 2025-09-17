import { useUser } from "@clerk/clerk-react";

export default function UserStats() {
  const { user } = useUser();

  const moviesBrowsed = 42;
  const watchlistCount = 12;

  return (
    <section className="max-w-4xl mx-auto py-10">
      <h2 className="text-xl font-semibold mb-4">Welcome back, {user?.firstName}!</h2>
      <div className="grid grid-cols-2 gap-4">
        <div className="p-4 rounded bg-muted">
          <p className="text-sm text-muted-foreground">Movies Browsed</p>
          <p className="text-2xl font-bold">{moviesBrowsed}</p>
        </div>
        <div className="p-4 rounded bg-muted">
          <p className="text-sm text-muted-foreground">Watchlist</p>
          <p className="text-2xl font-bold">{watchlistCount}</p>
        </div>
      </div>
    </section>
  );
}
