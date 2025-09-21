// components/Hero.tsx
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section
      className="relative flex flex-col items-center justify-center text-center py-20 px-4 min-h-[70vh] rounded-2xl overflow-hidden"
    >
      {/* Background image layer */}
      <div
        className="absolute inset-0 bg-[url('/images/movie-grid.jpg')] bg-center bg-cover"
        aria-hidden="true"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background to-muted opacity-70" />

      {/* Content */}
      <div className="relative z-10">
        <h1 className="text-4xl sm:text-5xl md:text-6xl max-w-3xl font-bold mb-4 text-foreground">
          Discover Your Next Favorite Movie
        </h1>
        <p className="text-lg text-muted-foreground mb-6 max-w-xl mx-auto">
          Browse trending titles, track your favorites, and stay inspired.
        </p>
        <div className="flex gap-4 justify-center">
          <Link to="/movies">
            <Button size="lg" className="cursor-pointer text-lg px-6 py-6">
              Get Started
            </Button>
          </Link>
          <Link to="/sign-in">
            <Button variant="outline" size="lg" className="cursor-pointer text-lg px-6 py-6">
              Login
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
