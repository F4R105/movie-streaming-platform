import { SignedIn, SignedOut } from "@clerk/clerk-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="w-full mt-auto px-4 py-6 border-t bg-background/80 backdrop-blur-sm max-w-4xl mx-auto">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center text-sm text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} MoviePulse. All rights reserved.</p>

        <SignedOut>
          <div className="flex gap-4 mt-2 sm:mt-0">
            <Link to="/sign-up" className="hover:underline">Sign Up</Link>
          </div>
        </SignedOut>

        <SignedIn>
          <Link to={'https://www.github.com/F4R105'}>By Faraji</Link>
        </SignedIn>
      </div>
    </footer>
  );
}
