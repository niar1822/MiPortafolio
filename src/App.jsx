import Navbarjs from "./components/layouts/navbar/Navbar.jsx";
import Abaut from "./components/main/abaut/Abaut.jsx";
import Hero from "./components/main/hero/Hero.jsx";
import Projects from "./components/main/projects/Projects.jsx";
import Skills from "./components/main/skills/Skills.jsx";
import Footer from "./components/layouts/Footer.jsx";

function App() {
  return (
    <>
      <Navbarjs />
      <Hero />
      <Abaut />
      <Skills />
      <Projects />
      <Footer />
    </>
  );
}

export default App;
