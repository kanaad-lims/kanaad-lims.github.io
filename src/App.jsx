
import "./App.css";
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
    <div className="app">
      <main className="page-content">
        <Hero />
        <About />
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
