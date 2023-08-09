"use client";
import NavBarProvider from "./context/navbarContext";
import Footer from "./organisms/Footer";
import { NavBar } from "./organisms/NavBar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Welcome from "./pages/Welcome";

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
