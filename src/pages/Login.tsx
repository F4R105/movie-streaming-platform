import { SignIn } from "@clerk/clerk-react";

export default function Login() {
  return (
      <section className="flex items-center justify-center">
        <SignIn
          path="/login"
          routing="path"
          fallbackRedirectUrl="/dashboard"
          fallback={<p className="text-center">Loading sign-in...</p>}
        />
      </section>
  );
}
