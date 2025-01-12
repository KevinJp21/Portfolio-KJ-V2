import React, { useEffect, useState } from "react";
import "./Layout.css";
import NavBar from "./navbar/NavBar";
import FloatNavbar from "./navbar/FloatNavbar";
import Footer from "./footer/Footer";
import { useMediaQuery } from "react-responsive";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isMounted, setIsMounted] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 768 });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <div className="min-h-screen relative">
        <div className="bg-absolute fixed top-0 z-[-2] h-screen w-screen"></div>
        <main className="relative z-10">
          <NavBar />
          {children}
          <Footer />
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen relative">
      <div className="bg-absolute fixed top-0 z-[-2] h-screen w-screen"></div>
      <main className="relative z-10">
        {isMobile ? <FloatNavbar /> : <NavBar />}
        {children}
        <Footer />
      </main>
    </div>
  );
}
