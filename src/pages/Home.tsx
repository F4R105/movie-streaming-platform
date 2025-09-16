// pages/Landing.tsx
import Hero from "@/components/sections/Hero";
import PopularMovies from "@/components/sections/PopularMovies";
import LoginCTA from "@/components/ui/clerk-login-button";

export default function Home() {
  return (
    <main className="max-w-6xl mx-auto">
      <Hero />
      <PopularMovies />
      <LoginCTA />
    </main>
  );
}
