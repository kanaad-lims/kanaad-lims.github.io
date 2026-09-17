import "./Hero.css";
import { useEffect, useState } from "react";
import { FiArrowUpRight } from "react-icons/fi";
import BorderGlow from "./components/buttons/BorderGlow";
import GlareHover from "./components/buttons/GlareHover";
import PillNav from "./components/navigation/PillNav";
import logo from "./assets/logo.png";
import Shuffle from "./components/text/Shuffle";
import Aurora from "./components/background/Aurora";

function Hero() {
  const [asciiArt, setAsciiArt] = useState("");

    useEffect(() => {
      fetch("/profile.txt")
        .then((res) => res.text())
        .then((text) => setAsciiArt(text));
    }, []);

    const socialLinks = [
    { name: "GitHub", url: "https://github.com/kanaad-lims" },
    { name: "LinkedIn", url: "https://linkedin.com/in/kanaad-limaye" },
    { name: "X", url: "https://x.com/kanaad_limaye" },
    { name: "Email", url: "mailto:kanaad.limaye@gmail.com" },
    { name: "Medium", url: "https://medium.com/@kanaad.limaye" },
  ];

  const resumeLink = {
    name: "Resume",
    url: "https://drive.google.com/file/d/1OqlQWzckAdK4XZpJ0M2Ied85ll6ET6sJ/view?usp=sharing",
  };
  return (
    <section id="homepage">
      <div className="hero-aurora" aria-hidden="true">
        <Aurora />
      </div>

      <div className="hero-nav-bar" aria-hidden="true"></div>

      <PillNav
        logo={logo}
        logoAlt="Kanaad Limaye"
        items={[
          { label: "Home", href: "#" },
          { label: "About", href: "#about" },
          //{ label: "Resume", href: "https://drive.google.com/file/d/1OAnH06tuTYWey0NTbiU5SgQkvHeqch2U/view?usp=sharing" },
          { label: "OSS", href: "#opensource" },
          { label: "Experience", href: "#experience" },
          { label: "Projects", href: "#projects" },
          { label: "Research", href: "#research" },
          { label: "Achievements", href: "#achievements" },
          {label: "Leadership", href: "#leadership"}
        ]}
        theme="light"
      />

      <div className="hero-nav-divider"></div>

      <div className="hero-content">
        <pre className="hero-ascii">{asciiArt}</pre>

        <div className="hero-text">
          <p className="hero-greeting">Hi, I'm</p>

          <div className="hero-name">
            <Shuffle
              text="Kanaad Limaye"
              shuffleDirection="down"
              duration={0.35}
              animationMode="evenodd"
              shuffleTimes={2}
              ease="power2.out"
              stagger={0.08}
              threshold={0.1}
              triggerOnce={true}
              triggerOnHover={false}
              respectReducedMotion={true}
              loop={true}
              loopDelay={1.5}
            />
          </div>

          <p className="hero-role">AI Engineer | CS Student</p>

          <p className="hero-description">
            Building AI-powered applications, RAG systems,
            backend services and machine learning solutions.
            Passionate about transforming AI models into
            real-world products.
          </p>

          <div className="hero-social-links">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-social-link"
              >
                <BorderGlow
                  edgeSensitivity={30}
                  glowColor="40 80 80"
                  backgroundColor="#120F17"
                  borderRadius={20}
                  glowRadius={40}
                  glowIntensity={1.2}
                  coneSpread={25}
                  animated={true}
                  colors={["#64FFDA", "#38BDF8", "#64FFDA"]}
                >
                  <div className="hero-social-button">
                    {link.name}
                  </div>
                </BorderGlow>
              </a>
            ))}

            <a
              href={resumeLink.url}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-resume-link"
            >
              <GlareHover
                background="linear-gradient(135deg, #64FFDA 0%, #38BDF8 100%)"
                borderColor="transparent"
                glareColor="#ffffff"
                glareOpacity={0.35}
                glareAngle={-45}
                glareSize={200}
                transitionDuration={650}
                playOnce={false}
                className="hero-resume-glare"
              >
                <div className="hero-resume-button">
                  <span>Resume</span>
                  <FiArrowUpRight className="hero-resume-icon" />
                </div>
              </GlareHover>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
