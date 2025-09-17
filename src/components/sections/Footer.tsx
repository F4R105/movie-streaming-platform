// src/components/Footer.tsx
export default function Footer() {
  return (
    <footer className="w-full px-4 py-6 border-t bg-background/80 backdrop-blur-sm max-w-4xl mx-auto">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center text-sm text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} MoviePulse. All rights reserved.</p>
        <div className="flex gap-4 mt-2 sm:mt-0">
          <a href="#popular" className="hover:underline">Popular</a>
          <a href="#recommended" className="hover:underline">Recommended</a>
          <a href="/sign-up" className="hover:underline">Sign Up</a>
        </div>
      </div>
    </footer>
  );
}
