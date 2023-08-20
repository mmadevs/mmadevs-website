"use client";
import NavBarProvider from "./context/navbarContext";
import Footer from "@/app/components/organisms/Footer";
import { NavBar } from "@/app/components/organisms/NavBar";
import About from "@/app/components/pages/About";
import Contact from "@/app/components/pages/Contact";
import Projects from "@/app/components/pages/Projects";
import Welcome from "@/app/components/pages/Welcome";
import { Line } from "./components/atoms/Line";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App() {
  return (
    <>
      <NavBarProvider>
        <div
          className="bg-black relative w-full max-w-full h-auto min-h-screen 
      overflow-x-hidden overflow-y-auto"
        >
          <NavBar />
          <Welcome />
          <Line />
          <About />
          <Projects />
          <Line />
          <Contact />
          {/* <Footer /> */}
        </div>
      </NavBarProvider>
      <ToastContainer position="bottom-right" hideProgressBar theme="dark" />
    </>
  );
}
