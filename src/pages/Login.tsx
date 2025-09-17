import { SignIn } from "@clerk/clerk-react";
import { BarLoader } from "react-spinners";

export default function Login() {
  return (
    <section className="flex items-center justify-center min-h-[60vh]">
      <SignIn
        path="/sign-in"
        routing="path"
        fallbackRedirectUrl="/dashboard"
        fallback={<BarLoader
          loading={true}
          aria-label="Loading Spinner"
          data-testid="loader"
        />}
      />
    </section>
  );
}
