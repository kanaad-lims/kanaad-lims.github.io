import "./Research.css";
import ShinyText from "./components/text/ShinyText";

function Research() {
  return (
    <section id="research">

      <div className="section-title-row">

        <div className="research-header">
          <ShinyText
            text="/research"
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

      <div
        className="research-intro"
        style={{
          color: "#90e016",
          marginBottom: "10px",
        }}
      >
        "To steal ideas from one person is plagiarism; to steal from many is research."
      </div>

      <div className="research-container">

        {/* ---------------- Paper 1 ---------------- */}

        <div className="research-card">

          <h2 className="research-title">
            Multi-modal Artificial Intelligence System for Early Detection of Neurological Diseases
          </h2>

          <div className="research-conference">
            International Conference on Emerging Trends and Technology, IEEE • January 2026
          </div>

          <div className="research-conference">
            Verdict: <span className="published-text">Published</span>
          </div>

          <div className="research-authors">
            Kanaad Limaye • Bhushan Anokar • Swanand Mukkawar • Dr. Chhaya Gosavi • Dr. Reena Pagaree 
          </div>

          <ul className="research-summary">

            <li>
              Proposed a <span className="highlight-text">multimodal AI framework</span> for
              early neurological disease detection using MRI imaging and deep learning.
            </li>

            <li>
              Fine-tuned <span className="highlight-text">ResNet-152</span> on the
              <span className="highlight-text"> 15,000+ image ADNI dataset</span> for
              Alzheimer's disease staging.
            </li>

            <li>
              Achieved
              <span className="highlight-text"> 94.63% test accuracy</span> and
              <span className="highlight-text"> 93.43% validation accuracy</span>.
            </li>

          </ul>

          <div className="research-tags">
            <span className="research-tag">Deep Learning</span>
            <span className="research-tag">Medical Imaging</span>
            <span className="research-tag">Fine-Tuning</span>
            <span className="research-tag">Computer Vision</span>
            <span className="research-tag">Healthcare AI</span>
          </div>

          <div className="research-links">
            <a href="https://ieeexplore.ieee.org/abstract/document/11447679/">Publication</a>
            <a href="https://drive.google.com/file/d/1WUDskMusgE2sVgA-cDT69uHaLhq7NL9u/view?usp=sharing">PDF</a>
          </div>

        </div>

        {/* ---------------- Paper 2 ---------------- */}

        <div className="research-card">

          <h2 className="research-title">
            An Analysis of Technical Autonomy and Legal Responsibility in AI-Powered Surgery
          </h2>

          <div className="research-conference">
          South Asian Conference on Science and Technology, IEEE • July 2026 (to be published)
          </div>

          <div className="research-conference">
            Verdict: <span className="accepted-text">Accepted</span>
          </div>

          <div className="research-authors">
            Kanaad Limaye • Swaraa Kulkarni
          </div>

          <ul className="research-summary">

            <li>
              Explored the relationship between
              <span className="highlight-text"> artificial intelligence</span>,
              <span className="highlight-text"> surgical autonomy</span> and
              <span className="highlight-text"> legal responsibility</span>.
            </li>

            <li>
              Examined the ethical and regulatory challenges associated with
              <span className="highlight-text"> AI-powered surgical systems</span>.
            </li>

            <li>
              Proposed future governance considerations for the safe deployment of
              <span className="highlight-text"> autonomous medical technologies</span>.
            </li>

          </ul>

          <div className="research-tags">
            <span className="research-tag">Artificial Intelligence</span>
            <span className="research-tag">AI Ethics</span>
            <span className="research-tag">Healthcare</span>
            <span className="research-tag">Medical Robotics</span>
            <span className="research-tag">AI Governance</span>
          </div>

          <div className="research-links">
            <a href="#">Publication</a>
            <a href="https://drive.google.com/file/d/1_dbqmBfizNcwmaBE7BXmwD2XfgyXxFF5/view?usp=sharing">PDF</a>
          </div>

        </div>

        {/* ---------------- Paper 3 ---------------- */}

        <div className="research-card">

          <h2 className="research-title">
            GSM Based Home Security System Using Arduino Microcontrollers
          </h2>

          <div className="research-conference">
            Indian Journal of Computer Science and Technology • April 2025
          </div>

          <div className="research-conference">
            Verdict: <span className="published-text">Published</span>
          </div>

          <div className="research-authors">
            Kanaad Limaye • Avaneesh Joshi • Yashada Jagtap • Sarwadnya Mahajan • Arpita Ingalgi • Vaidehi Magare • Dr. Sunita Upasani
          </div>

          <ul className="research-summary">

            <li>
              Designed an
              <span className="highlight-text"> IoT-based home security system</span> using Arduino microcontrollers and GSM communication.
            </li>

            <li>
              Achieved over
              <span className="highlight-text"> 90% threat detection accuracy</span> across multiple security scenarios.
            </li>

            <li>
              Reduced deployment cost by nearly
              <span className="highlight-text"> 80%</span> compared to commercial
              security solutions.
            </li>

          </ul>

          <div className="research-tags">
            <span className="research-tag">IoT</span>
            <span className="research-tag">Arduino</span>
            <span className="research-tag">Embedded Systems</span>
            <span className="research-tag">GSM</span>
            <span className="research-tag">Smart Home</span>
            <span className="research-tag">Security</span>
          </div>

          <div className="research-links">
            <a href="https://www.indjcst.com/archives/10.59256/indjcst.20250401020">Publication</a>
            <a href="https://drive.google.com/file/d/18XplHXaMd-fb1HC9Ey-CYR6u8nc6FdUa/view?usp=sharing">PDF</a>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Research;