import { SignIn } from "@clerk/clerk-react";
import { BarLoader } from "react-spinners";

export default function Login() {
  return (
    <section className="flex items-center justify-center">
      <SignIn
        path="/login"
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
