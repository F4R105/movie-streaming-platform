import Loader from "@/components/Loader";
import { SignUp } from "@clerk/clerk-react";

export default function Register() {
  return (
    <section className="flex items-center justify-center min-h-[60vh]">
      <SignUp
        path="/sign-up"
        routing="path"
        // fallbackRedirectUrl="/dashboard"
        fallback={<Loader/>}
      />
    </section>
  );
}
