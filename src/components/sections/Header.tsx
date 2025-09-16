// src/components/Header.tsx
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="fixed w-full px-4 py-3 border-b bg-background/70 backdrop-blur-md top-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Logo / App Name */}
        <Link to="/" className="text-xl font-bold tracking-tight">
          🎬 MoviePulse
        </Link>

        {/* Navigation + CTA */}
        <nav className="flex items-center gap-4">
          <Link to="/popular" className="text-sm font-medium hover:underline">
            Popular
          </Link>
          <Link to="/dashboard" className="text-sm font-medium hover:underline">
            Dashboard
          </Link>
          <Link to="/sign-up">
            <Button variant="default" size="sm">
              Sign Up
            </Button>
          </Link>
        </nav>
      </div>
    </header>
  );
}
