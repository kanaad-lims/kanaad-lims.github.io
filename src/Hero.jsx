import "./Hero.css";
import { useEffect, useState } from "react";
import BorderGlow from "./components/buttons/BorderGlow";
import PillNav from "./components/navigation/PillNav";
import logo from "./assets/logo.png";
import Shuffle from "./components/text/Shuffle";

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
    { name: "Resume", url: "https://drive.google.com/file/d/1OAnH06tuTYWey0NTbiU5SgQkvHeqch2U/view?usp=sharing"},
  ];
  return (
    <section id="homepage">
      <PillNav
        logo={logo}
        logoAlt="Kanaad Limaye"
        items={[
          { label: "Home", href: "#" },
          { label: "About", href: "#about" },
          //{ label: "Resume", href: "https://drive.google.com/file/d/1OAnH06tuTYWey0NTbiU5SgQkvHeqch2U/view?usp=sharing" },
          { label: "Experience", href: "#experience" },
          { label: "Projects", href: "#projects" },
          { label: "Research", href: "#research" },
          { label: "Achievements", href: "#achievements" },
          {label: "Leadership", href: "#leadership"}
        ]}
        theme="light"
      />

      <div
        style={{
          position: "fixed",
          top: "75px",
          left: 0,
          width: "100%",
          height: "3px",
          background: "rgba(255,255,255,0.08)",
          zIndex: 1000000,
        }}
      ></div>

      <pre
      style={{
        position: "absolute",
        top: "180px",
        left: "70px",
        color: "#64FFDA",
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: "8px",
        lineHeight: "1",
        whiteSpace: "pre",
        zIndex: 9999,
      }}
    >
      {asciiArt}
    </pre>
      
      <div
  style={{
    position: "absolute",
    top: "240px",
    left: "620px",
    color: "white",
    zIndex: 9999,
    maxWidth: "600px",
  }}
>
  <p
    style={{
      fontSize: "1.3rem",
      color: "#B0B7C3",
      marginBottom: "10px",
      fontFamily: "'JetBrains Mono', monospace"
    }}
  >
    Hi, I'm
  </p>

  <div
  style={{
    fontSize: "1rem",
    color: "#64FFDA",
    marginBottom: "15px",
    fontWeight: "700",
  }}
>
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

  <p
    style={{
      fontSize: "1.3rem",
      color: "white",
      marginBottom: "25px",
      fontFamily: "'JetBrains Mono', monospace"
    }}
  >
    AI Engineer | CS Student
  </p>

  <p
    style={{
      color: "#B0B7C3",
      lineHeight: "1.8",
      fontSize: "1.0rem",
      fontFamily: "'JetBrains Mono', monospace"
    }}
  >
    Building AI-powered applications, RAG systems,
    backend services and machine learning solutions.
    Passionate about transforming AI models into
    real-world products.
  </p>
    <div
    style={{
      display: "flex",
      gap: "30px",
      marginTop: "30px",
      flexWrap: "wrap",
    }}
  >
    {socialLinks.map((link) => (
      <a
        key={link.name}
        href={link.url}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          textDecoration: "none",
        }}
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
          <div
            style={{
              padding: "12px 18px",
              color: "#64FFDA",
              fontWeight: "600",
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "1.0rem",
            }}
          >
            {link.name}
          </div>
        </BorderGlow>
      </a>
    ))}
  </div>
</div>
    </section>
  );
}

export default Hero;