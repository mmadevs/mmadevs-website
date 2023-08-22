"use client";
import NavBarProvider, { useNavBar } from "./context/navbarContext";
import Footer from "@/app/components/organisms/Footer";
import { NavBar } from "@/app/components/organisms/NavBar";
import About from "@/app/components/pages/About";
import Contact from "@/app/components/pages/Contact";
import Projects from "@/app/components/pages/Projects";
import Welcome from "@/app/components/pages/Welcome";
import { Line } from "./components/atoms/Line";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FunctionComponent, useEffect } from "react";

export default function App() {
  return (
    <>
      <NavBarProvider>
        <App2 />
      </NavBarProvider>
      <ToastContainer position="bottom-right" hideProgressBar theme="dark" />
    </>
  );
}

const App2 = ({}) => {
  const { setCurrentRoute } = useNavBar();
  useEffect(() => {
    const handleScroll = () => {
      const pages = Array.from(document.querySelectorAll(".page")).map((x) => ({
        id: x.id.replace("-child", ""),
        y: x.getBoundingClientRect().top,
      }));

      const mostVisiblePage = pages.reduce((acc, obj) =>
        Math.abs(0 - obj.y) < Math.abs(0 - acc.y) ? obj : acc
      );

      if (mostVisiblePage) setCurrentRoute(`#${mostVisiblePage.id}`);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <div
      className="bg-black relative w-full max-w-full h-auto min-h-screen 
        overflow-x-hidden overflow-y-auto"
      onScroll={(e) => {
        console.log(e);
      }}
    >
      <NavBar />
      <Welcome />
      <Line />
      <About />
      <Projects />
      <Line />
      <Contact />
      <Footer />
    </div>
  );
};
