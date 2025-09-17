// src/layouts/MainLayout.tsx
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import { Outlet } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop";

export default function MainLayout() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main className="min-h-screen pt-20 px-4">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
