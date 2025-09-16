// components/Hero.tsx
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="text-center py-20 px-4 bg-gradient-to-b from-background to-muted">
      <h1 className="text-4xl font-bold mb-4">Discover Your Next Favorite Movie</h1>
      <p className="text-lg text-muted-foreground mb-6">
        Browse trending titles, track your favorites, and stay inspired.
      </p>
      <Button className="text-lg px-6 py-3">Get Started</Button>
    </section>
  );
}
