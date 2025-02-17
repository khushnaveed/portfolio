import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Experiences from "./pages/Experiences";
import Education from "./pages/Education";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import HeroContent from "./pages/HeroContent";

function App() {
  return (
      <div className="bg-[#0e1425]">
        <Navbar />
        <HeroContent />
        <Experiences />
        <Education />
        <Projects />
        <Skills />
        <Footer />
      </div>
  );
}

export default App;
