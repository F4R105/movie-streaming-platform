import Loader from "@/components/Loader";
import { SignIn } from "@clerk/clerk-react";

export default function Login() {
  return (
    <section className="flex items-center justify-center min-h-[60vh]">
      <SignIn
        path="/sign-in"
        routing="path"
        fallbackRedirectUrl="/dashboard"
        fallback={<Loader />}
      />
    </section>
  );
}
