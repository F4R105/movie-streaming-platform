// components/Hero.tsx
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-20 px-4 min-h-[70vh] bg-gradient-to-b from-background to-muted rounded-2xl">
      <h1 className="text-4xl sm:text-5xl md:text-6xl max-w-3xl font-bold mb-4 text-foreground">
        Discover Your Next Favorite Movie
      </h1>
      <p className="text-lg text-muted-foreground mb-6 max-w-md mx-auto">
        Browse trending titles, track your favorites, and stay inspired.
      </p>
      <div className="flex gap-4">
        <Link to="/movies">
          <Button size="lg" className="cursor-pointer text-lg px-6 py-6">
            Get Started
          </Button>
        </Link>
        <Link to="sign-in">
          <Button variant="outline" size="lg" className="cursor-pointer text-lg px-6 py-6">
            Login
          </Button>
        </Link>
      </div>
    </section>
  );
}