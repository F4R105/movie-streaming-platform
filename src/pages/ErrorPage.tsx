// src/pages/ErrorPage.tsx
import { useRouteError } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  const navigate = useNavigate();

  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-4 text-center bg-background">
      <h1 className="text-3xl font-bold mb-2">🚫 Something went wrong</h1>
      <p className="text-muted-foreground mb-6">
        {error instanceof Error ? error.message : "We couldn't load this page."}
      </p>
      <Button onClick={() => navigate("/")}>Go Home</Button>
    </main>
  );
}
