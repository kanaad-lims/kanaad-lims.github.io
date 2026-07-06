
import Aurora from "./components/background/Aurora";
import DotField from "./components/background/DotField";
import Hero from "./Hero";
import About from "./About";
import Experience from "./Experience";
import Projects from "./Projects";
import Research from "./Research";
import Achievements from "./Achievements";
import Leadership from "./Leadership";
import Gallery from "./Gallery";
import Footer from "./Footer";

function App() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <Aurora />
      <Hero />
      <div style={{height: "50px"}}></div>
      <About />
      <div style={{height: "10px"}}></div>
      <Experience />
      <Projects />
      <Research />
      <Achievements />
      <Leadership />
      <Gallery />
      <Footer />

    </div>
  );
}

export default App;


