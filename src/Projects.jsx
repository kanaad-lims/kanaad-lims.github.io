import "./Projects.css";
import ShinyText from "./components/text/ShinyText";
import githubLogo from "./assets/githublogo.png"
import CountUp from "./components/text/CountUp";

function Projects() {
    return (
        <section id="projects">
            <div className="section-title-row">
            <div className="projects-header">
                <ShinyText
                    text="/projects"
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

            <div className="projects-intro"
            style=
                {{
                    color: "#90e016",
                    marginBottom: "10px",
                }}
            >
                "Every project has a light at the end of the tunnel. Sometimes it's an oncoming train."
                
            </div>

            <div className="project-card left">

                <h2><span className="highlight-card1">Torch Transforms Inspect</span></h2>

                <p className="project-description">
                    A lightweight utility for visually inspecting and debugging torchvision image transformation pipelines using PyTorch and matplotlib.
                </p>

                <ul className="project-features">
                    <li>Uses native <span className="highlight-card1">torchvision.transforms</span></li>
                    <li>Visualizes intermediate steps and never modifies</li>
                    <li>Supported in stand-alone Python files and Jupyter Notebooks including Google Colab</li>
                </ul>

                <div className="project-footer">

                    <div className="project-tech">
                        <span className="highlight-card1">Pytorch • Python • Matplotlib</span>
                    </div>

                    <div className="project-downloads">
                        <CountUp
                            from={200}
                            to={1100}
                            separator=","
                            direction="up"
                            duration={5}
                            delay={0}
                            className="count-up-text"
                        />
                        <span className="downloads-label">
                            + PyPI Downloads
                        </span>
                    </div>

                    <a
                        className="github-link"
                        href="https://github.com/kanaad-lims/Torch-Transform-Inspector"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img
                            src={githubLogo}
                            alt="GitHub Repository"
                            className="github-icon"
                        />
                    </a>

                </div>

                </div>

                <div className="project-card right">

                    <h2><span className="highlight-card2">PaperLens</span></h2>

                    <p className="project-description">
                        AI-powered research paper analysis and Q&A engine.
                    </p>

                    <ul className="project-features">
                        <li><span className="highlight-card2">Structured extraction</span> — title, authors, abstract, problem statement, methods, math formulas (LaTeX), datasets, results, limitations, future work, keywords</li>
                        <li>RAG Q&A — supports parallel processing, uses hybrid search (BM25 and Semantic searching)</li>
                        <li>Achieved RAGAS scores of <span className="highlight-card2">0.91, 0.88, 0.87 and 0.90 </span> - Faithfulness, Answer Relevancy, Context Precision & Context Recall. </li>
                    </ul>

                    <div className="project-footer">

                        <div className="project-tech">
                            <span className="highlight-card2">Python • LangGraph • FastAPI</span>
                        </div>

                        <a
                            className="github-link"
                            href="https://github.com/kanaad-lims/PaperLens"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src={githubLogo}
                                alt="GitHub Repository"
                                className="github-icon"
                            />
                        </a>

                    </div>

                </div>

                <div className="project-card left2">

                    <h2><span className="highlight-card3">MeDetect AI</span></h2>

                    <p className="project-description">
                        AI-powered diagnostic system with accurate detection of multiple diseases.
                    </p>

                    <ul className="project-features">
                        <li>Trained models on <span className="highlight-card3">T4x2 GPUs</span> using TensorFlow and Keras with Roboflow for data augmentation.</li>
                        <li>Achieved <span className="highlight-card3">90.8%</span> (Skin Disease) and <span className="highlight-card3">95.34%</span> (Alzheimer's) accuracies across test datasets.</li>
                        <li>Built a custom offline mode functionality using 3 LLMs using an inverted triangle model.</li>
                    </ul>

                    <div className="project-footer">

                        <div className="project-tech">
                            <span className="highlight-card3">Next.js • TensorFlow • Python</span>
                        </div>

                        <a
                            className="github-link"
                            href="https://github.com/kanaad-lims/MeDetect-AI"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src={githubLogo}
                                alt="GitHub Repository"
                                className="github-icon"
                            />
                        </a>

                    </div>

                </div>

                <div className="project-card right2">

                    <h2><span className="highlight-card4">Personal Portfolio</span></h2>

                    <p className="project-description">
                        Interactive portfolio website showcasing projects,
                        experience and technical expertise through modern UI components.
                    </p>

                    <ul className="project-features">
                        <li>React-based component architecture</li>
                        <li>Interactive animations using ReactBits</li>
                        <li>Responsive design and navigation</li>
                    </ul>

                    <div className="project-footer">

                        <div className="project-tech">
                            React • JavaScript • CSS
                        </div>

                        <a
                            className="github-link"
                            href="YOUR_REPO_LINK"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <img
                                src={githubLogo}
                                alt="GitHub Repository"
                                className="github-icon"
                            />
                        </a>

                    </div>

                </div>

        </section>
    )
    
}
export default Projects 