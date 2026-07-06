import "./Experience.css";
import ShinyText from "./components/text/ShinyText";
import GlareHover from "./components/buttons/GlareHover";

function Experience() {
  return (
    <section id="experience">
        <div className="section-title-row">
      <div className="experience-header">
        <ShinyText
          text="/experience"
          speed={2}
          delay={0}
          color="#21918b"
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

      <div className="experience-intro"
            style={{
                color: "#90e016",
                marginBottom: "10px",
            }}
            >
            "Theory without experience is mere intellectual play."
        </div>
    
<GlareHover
        className="experience-hover"
        glareColor="#ffffff"
        glareOpacity={0.15}
        glareAngle={-30}
        glareSize={300}
        transitionDuration={800}
        playOnce={false}>

    <div className="glare-card">

        <div className="experience-top">
          <h2>Machine Learning Intern</h2>
          <span>Jan 2026 - Present</span>
        </div>

        <h3>PictelAI</h3>

    <ul className="experience-list">

        <li>
            Developed a custom image processing pipeline 
            using <span className="highlight">Rust</span> and
            <span className="highlight"> OpenCV</span> for
            <span className="highlight"> Gram-nature classification</span>,
            achieving over <span className="highlight">90% accuracy</span>.
        </li>

        <li>
            Fine-tuned <span className="highlight">YOLOv11</span> and
            <span className="highlight"> Detectron2</span> for object detection
            and feature extraction on proprietary client datasets,
            achieving <span className="highlight">91% accuracy</span>.
        </li>

        <li>
            Engineered <span className="highlight">FastAPI microservices </span>
            in <span className="highlight">Rust</span> serving
            <span className="highlight"> 2,000+ concurrent users</span>;
            reduced inter-service latency by
            <span className="highlight"> 30%</span> through
            <span className="highlight"> gRPC</span> and
            <span className="highlight"> NATS JetStream</span>.
        </li>

        <li>
            Developed and merged
            <span className="highlight"> production-ready features </span>
            into a large shared codebase through collaborative
            <span className="highlight"> code review cycles</span>.
        </li>

    </ul>
    </div>
</GlareHover>


<GlareHover
        className="experience-hover"
        glareColor="#ffffff"
        glareOpacity={0.15}
        glareAngle={-30}
        glareSize={300}
        transitionDuration={800}
        playOnce={false}>
    
<div className="glare-card">
  
  <div className="experience-top">
    <h2>AI Engineer Intern</h2>
    <span>Jan 2025 - May 2025</span>
  </div>

  <h3>OpenAI Labs</h3>

  <ul className="experience-list">

        <li>
            Developed a custom image processing pipeline 
            using <span className="highlight">Rust</span> and
            <span className="highlight"> OpenCV</span> for
            <span className="highlight"> Gram-nature classification</span>,
            achieving over <span className="highlight">90% accuracy</span>.
        </li>

        <li>
            Fine-tuned <span className="highlight">YOLOv11</span> and
            <span className="highlight"> Detectron2</span> for object detection
            and feature extraction on proprietary client datasets,
            achieving <span className="highlight">91% accuracy</span>.
        </li>

        <li>
            Engineered <span className="highlight">FastAPI microservices</span>
            in <span className="highlight">Rust</span> serving
            <span className="highlight">2,000+ concurrent users</span>;
            reduced inter-service latency by
            <span className="highlight"> 30%</span> through
            <span className="highlight"> gRPC</span> and
            <span className="highlight"> NATS JetStream</span>.
        </li>

        <li>
            Developed and merged
            <span className="highlight"> production-ready features</span>
            into a large shared codebase through collaborative
            <span className="highlight"> code review cycles</span>.
        </li>

    </ul>
</div>
</GlareHover>


    </section>
  );
}

export default Experience;