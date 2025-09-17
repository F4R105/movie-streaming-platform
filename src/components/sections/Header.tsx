import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ThemeToggle from "@/components/ui/theme-toggler";

export default function Header() {
  return (
    <header className="fixed w-full px-4 py-3 border-b bg-background/70 backdrop-blur-md top-0 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <Link to="/" className="text-xl font-bold tracking-tight">
          🎬 MoviePulse
        </Link>
        <nav className="flex items-center gap-2">
          <Link to="/sign-up">
            <Button variant="default" size="sm">Sign Up</Button>
          </Link>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
