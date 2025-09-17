import { createBrowserRouter } from "react-router-dom";
import Home from "@/pages/Home";
import Dashboard from "@/pages/Dashboard";
import Login from "@/pages/Login";
import SsoCallback from "./pages/SsoCallback";
import Register from "./pages/Register";
import MainLayout from "./layouts/MainLayout";
import ErrorPage from "./pages/ErrorPage";
import ProtectedRoute from "./components/ProtectedRoute";
import Movie from "./pages/Movie";
import GuestRoute from "./components/GuestRoute";

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <GuestRoute><Home /></GuestRoute>,
      },
      {
        path: "/dashboard",
        element: <ProtectedRoute><Dashboard /></ProtectedRoute>,
      },
      {
        path: "/movie/:id",
        element: <GuestRoute><Movie /></GuestRoute>,
      },
      {
        path: "/sign-in",
        element: <GuestRoute><Login /></GuestRoute>,
      },
      {
        path: "/sign-up",
        element: <GuestRoute><Register /></GuestRoute>,
      },
    ]
  },
  {
    path: "/login/sso-callback",
    element: <SsoCallback />,
  },
]);
