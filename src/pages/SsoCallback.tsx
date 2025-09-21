import Loader from "@/components/Loader";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function SsoCallback() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/dashboard");
  }, [navigate]);

  return <div className="flex justify-center items-center min-h-[80vh]"><Loader /></div>;
}