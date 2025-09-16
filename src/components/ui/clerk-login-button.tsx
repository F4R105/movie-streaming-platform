// components/LoginCTA.tsx
import { Button } from "@/components/ui/button";
import { useUser } from "@clerk/clerk-react";

export default function LoginCTA() {
  const { isSignedIn } = useUser();

  return (
    <div className="text-center py-10">
      {!isSignedIn ? (
        <Button variant="outline" onClick={() => window.location.href = "/sign-in"}>
          Log In to Personalize
        </Button>
      ) : (
        <p className="text-muted-foreground">Welcome back!</p>
      )}
    </div>
  );
}
