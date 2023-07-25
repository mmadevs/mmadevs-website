import Footer from "./organisms/Footer";
import { NavBar } from "./organisms/NavBar";
import { NavBarTest } from "./organisms/NavBar copy";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Welcome from "./pages/Welcome";

export default function App() {
  return (
    <>
      <div className="h-screen w-screen">
        <NavBarTest />
        <Welcome />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
