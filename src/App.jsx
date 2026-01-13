import React from "react";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
import Services from "./components/sections/Services";
import Contact from "./components/sections/Contact";

const App = () => {
  return (
    <div className="min-h-screen bg-black pb-[100vh]">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Services />
        <Contact />
      </main>
    </div>
  );
};

export default App;
