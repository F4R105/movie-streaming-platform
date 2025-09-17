import { SignUp } from "@clerk/clerk-react";
import { BarLoader } from "react-spinners";

export default function Register() {
  return (
    <section className="flex items-center justify-center min-h-[60vh]">
      <SignUp
        path="/sign-up"
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
