"use client";
import NavBarProvider from "./context/navbarContext";
import Footer from "@/app/components/organisms/Footer";
import { NavBar } from "@/app/components/organisms/NavBar";
import About from "@/app/components/pages/About";
import Contact from "@/app/components/pages/Contact";
import Projects from "@/app/components/pages/Projects";
import Welcome from "@/app/components/pages/Welcome";

export default function App() {
  return (
    <NavBarProvider>
      <div className="relative w-full h-screen min-h-screen overflow-auto scroll-smooth">
        <NavBar />
        <Welcome />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </NavBarProvider>
  );
}
