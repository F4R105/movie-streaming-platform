import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import ThemeToggle from "@/components/ui/theme-toggler";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
import { SettingsIcon } from "lucide-react";

export default function Header() {
  return (
    <header className="fixed h-18 w-full px-4 py-3 border-b bg-background/70 backdrop-blur-md top-0 z-50">
      <div className="max-w-6xl h-full mx-auto flex items-center justify-between">
        <Link to="/" className="text-xl font-bold tracking-tight">
          🎬 MoviePulse
        </Link>
        <nav className="flex items-center gap-2">
          <SignedOut>
            <Link to="/sign-up">
              <Button variant="default" size="sm" className="cursor-pointer">Sign Up</Button>
            </Link>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
          <ThemeToggle />
          <SignedIn>
            <Link to="/dashboard/settings">
              <SettingsIcon size={18} />
            </Link>
          </SignedIn>
        </nav>
      </div>
    </header>
  );
}
