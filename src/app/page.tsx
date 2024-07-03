import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <div className="flex flex-col">
    <Navbar />
    <Hero />
    <Skills />
    <Project />
    <About />
    <Experience />
    <Contact />
    </div>
  );
}
