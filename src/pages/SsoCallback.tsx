import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function SsoCallback() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/dashboard");
  }, [navigate]);

  return <p className="text-center py-10">Finishing login...</p>;
}
