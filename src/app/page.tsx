"use client";
import NavBarProvider from "./context/navbarContext";
import Footer from "@/app/components/organisms/Footer";
import { NavBar } from "@/app/components/organisms/NavBar";
import About from "@/app/components/pages/About";
import Contact from "@/app/components/pages/Contact";
import Projects from "@/app/components/pages/Projects";
import Welcome from "@/app/components/pages/Welcome";
import { Line } from "./components/atoms/Line";

export default function App() {
  return (
    <NavBarProvider>
      <div className="bg-black relative w-full h-auto min-h-screen overflow-auto">
        <NavBar />
        <Welcome />
        <Line />
        <About />
        <Projects />
        <Line />
        {/* <Contact /> */}
        {/* <Footer /> */}
      </div>
    </NavBarProvider>
  );
}
