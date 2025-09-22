import { SignedIn, SignedOut } from "@clerk/clerk-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="w-full mt-auto px-4 py-6 border-t bg-background/80 backdrop-blur-sm max-w-4xl mx-auto">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center text-sm text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} MoviePulse. All rights reserved.</p>

        <div className="flex gap-4 mt-2 sm:mt-0">
          <Link to="/movies" className="hover:underline">Browse movies</Link>
          <SignedOut>
            <Link to="/sign-in" className="hover:underline">Sign In</Link>
            <Link to="/sign-up" className="hover:underline">Sign Up</Link>
          </SignedOut>
          <SignedIn>
            <Link to={'https://github.com/F4R105/movie-streaming-platform'}>Github</Link>
          </SignedIn>
        </div>

      </div>
    </footer>
  );
}
