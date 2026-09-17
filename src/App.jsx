
import "./App.css";
import Preloader from "./Preloader";
import Hero from "./Hero";
import About from "./About";
import OpenSource from "./OpenSource";
import Experience from "./Experience";
import Projects from "./Projects";
import Research from "./Research";
import Achievements from "./Achievements";
import Leadership from "./Leadership";
import Gallery from "./Gallery";
import Footer from "./Footer";

function App() {
  return (
    <div className="app">
      <Preloader />
      <main className="page-content">
        <Hero />
        <About />
        <OpenSource />
        <Experience />
        <Projects />
        <Research />
        <Achievements />
        <Leadership />
        <Gallery />
        <Footer />
      </main>
    </div>
  );
}

export default App;
