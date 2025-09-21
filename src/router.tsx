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
import DashboardLayout from "./layouts/DashboardLayout";
import LatestMovies from "./pages/LatestMovies";
import SettingsPage from "./pages/Settings";
import MovieMenu from "./pages/MovieMenu";

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
        path: "/movies",
        element: <GuestRoute><MovieMenu /></GuestRoute>,
      },
      {
        path: "/dashboard",
        element: <DashboardLayout />,
        children: [
          {
            index: true,
            element: <ProtectedRoute><Dashboard /></ProtectedRoute>
          },
          {
            path: "latest",
            element: <ProtectedRoute><LatestMovies /></ProtectedRoute>
          },
          {
            path: "settings",
            element: <ProtectedRoute><SettingsPage /></ProtectedRoute>
          }
        ]
      },
      {
        path: "movie/:id",
        element: <GuestRoute><Movie /></GuestRoute>,
      },
      {
        path: "sign-in",
        element: <GuestRoute><Login /></GuestRoute>,
      },
      {
        path: "sign-up",
        element: <GuestRoute><Register /></GuestRoute>,
      },
    ]
  },
  {
    path: "/sign-in/sso-callback",
    element: <SsoCallback />,
  },
  {
    path: "/sign-up/sso-callback",
    element: <SsoCallback />,
  },
]);
