import About from "./components/About";
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
    </div>
  );
}
