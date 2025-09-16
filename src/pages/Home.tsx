// pages/Landing.tsx
import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import PopularMovies from "@/components/sections/PopularMovies";
import LoginCTA from "@/components/ui/clerk-login-button";

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <PopularMovies />
      <LoginCTA />
    </main>
  );
}
