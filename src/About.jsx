import "./About.css";
import aboutphoto from "./assets/profileimg.jpeg"
import ShinyText from "./components/text/ShinyText";
import PixelTransition from "./components/photoanim/PixelTransition";
import LogoLoop from "./components/transition/LogoLoop";
import pytorchLogo from "./assets/pytorchlogo.png"
import cppLogo from "./assets/cpplogo.png"
import pythonLogo from "./assets/pythonlogo.png"
import dockerLogo from "./assets/dockerlogo.png"
import gitLogo from "./assets/gitlogo.png"
import fastapiLogo from "./assets/fastapilogo.png"
import linuxLogo from "./assets/linuxlogo.png"
import postgreLogo from "./assets/postgrelogo.png"
import mongodbLogo from "./assets/mongodblogo.png"
import langchainLogo from "./assets/langchainlogo.png"
import opencvLogo from "./assets/opencvlogo.png"

// import {
//   SiPython,
//   SiPytorch,
//   SiDocker,
//   SiGit,
//   SiFastapi,
//   SiReact,
//   SiJavascript,
//   SiPostgresql,
//   SiLinux,
//   SiCplusplus,
//   SiLangchain,
//   SiMongodb
// } from "react-icons/si";

function About() {
    const techLogos = [
  { src: pythonLogo, alt: "Python", title: "Python" },

  { src: pytorchLogo, alt: "PyTorch", title: "PyTorch"},

  { src: fastapiLogo, alt: "fastapi", title: "fastapi"},

  { src: dockerLogo, alt: "docker", title: "docker" },

  { src: gitLogo, alt: "Git", title: "Git" },

  { src: postgreLogo, alt: "postgresql", title: "postgresql" },

  { src: linuxLogo, alt: "Linux", title: "Linux" },

  { src: cppLogo, alt: "Cpp", title: "C++" },

  { src: opencvLogo, alt: "OpenCV", title: "OpenCV"},

  { src: langchainLogo, alt: "Langchain", title: "Langchain" },

  { src: mongodbLogo, alt: "MongoDB", title: "MongoDB"}

];
  return (
    <section id="about">
    <div className="section-title-row">

      <div className="about-header">
        <ShinyText
          text="/about me"
          speed={4}
          delay={0}
          color="#277c78"
          shineColor="#AFFFF1"
          spread={120}
          direction="left"
          yoyo={true}
          pauseOnHover={false}
          disabled={false}
        />
      </div>

      <div className="section-line"></div>

      </div>
    <div className="about-intro">
        <div
            style={{
                color: "#90e016",
                marginBottom: "10px",
            }}
            >
            "Systems beyond just models"
        </div>
        <p>
            One can say this is what interests me.
        </p>

        <p>
            I am currently working as an ML Intern at PictelAI, where I help build
            computer vision and image processing pipelines that are later integrated into 
            advanced microscopes and stand-alone systems.
        </p>

        <p>
            My work is focused on bridging the gap between AI/ML research and 
            practical applications. Currently working in Agentic AI space, where
            I plan to design and build production level systems that scale.
            
        </p>
        <p>
            When I am afk, you'll probably find me watching football, going on a trek or relaxing
            with a good piece of fiction.
        </p>
    </div>

    <div className="about-image">
  <PixelTransition
    firstContent={
      <img
        src={aboutphoto}
        alt="Kanaad Limaye"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
        }}
      />
    }
    secondContent={
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#111",
          color: "#64FFDA",
          fontFamily: "'JetBrains Mono', monospace",
          fontSize: "1.5rem",
          textAlign: "center",
        }}
      >
        Visca Barca!
        <br />
        Visca Catalunia!
      </div>
    }
    gridSize={16}
    pixelColor="#ffffff"
    aspectRatio="130%"
    className="about-pixel-photo"
    />
    </div>

    <div className="tech-stack-section">

  <h2 className="tech-stack-title">
    Tech Stack
  </h2>

  <div
    style={{
      height: "120px",
      position: "relative",
      overflow: "hidden",
      marginTop: "20px"
    }}
  >
    <LogoLoop
      logos={techLogos}
      speed={40}
      direction="right"
      logoHeight={50}
      gap={50}
      hoverSpeed={0}
      scaleOnHover
      fadeOut
      fadeOutColor="#000000"
      ariaLabel="Tech Stack"
    />
  </div>
    </div>

    

    </section>
  );
}

export default About;