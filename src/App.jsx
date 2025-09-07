import React from "react";
import Contact from "./Contact";
import Navbar from "./Navbar";
import Home from "./Home";
import Edu from "./Education";
import Exp from "./Experience";
import Projects from "./Projects";
import Skills from "./Skills";
import Footer from "./Footer";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-950 via-cyan-950 to-black relative overflow-hidden text-white">
  {/* Aurora layers */}
  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_rgba(255,100,180,0.45),_transparent)] animate-pulse"></div>
  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(140,80,255,0.4),_transparent)] animate-pulse delay-2000"></div>
  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,_rgba(255,200,120,0.35),_transparent)] animate-pulse delay-4000"></div>




      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <Home />
        {/* <Edu /> */}
        <Skills />
        <Projects />
        <Exp />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
