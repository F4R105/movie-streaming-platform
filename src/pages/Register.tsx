import { SignUp } from "@clerk/clerk-react";

export default function Register() {
  return (
      <section className="flex items-center justify-center">
        <SignUp
          path="/register"
          routing="path"
          fallbackRedirectUrl="/dashboard"
          fallback={<p className="text-center">Loading...</p>}
        />
      </section>
  );
}
