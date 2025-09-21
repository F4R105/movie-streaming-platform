import { useAuth } from "@clerk/clerk-react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "@/components/Loader";

export default function SsoCallback() {
  const { isSignedIn, isLoaded } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoaded) return;

    if (isSignedIn) {
      navigate("/dashboard", { replace: true });
    } else {
      navigate("/login", { replace: true });
    }
  }, [isSignedIn, isLoaded]);

  return (
    <div className="flex justify-center items-center min-h-[50vh]">
      <Loader />
    </div>
  );
}
