import { useEffect, useState } from "react";
import "./Projects.css";
import ShinyText from "./components/text/ShinyText";
import githubLogo from "./assets/githublogo.png"
import CountUp from "./components/text/CountUp";
import torchtransform from "./assets/torch_transform.png"
import paperlens from "./assets/paperlens.png"
import portfoliophoto from "./assets/portfoliophoto.png"
import medetect from "./assets/medetect.jpeg"
import mirage from "./assets/mirage.png"
function ProjectImage({ image, title, accent }) {
    if (image) {
        return <img src={image} alt={title} />;
    }

    return (
        <div className="project-image-placeholder" style={{ "--accent": accent }}>
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.5" />
                <circle cx="8.5" cy="8.5" r="1.5" stroke="currentColor" strokeWidth="1.5" />
                <path d="M21 15l-5-5L5 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span>Preview coming soon</span>
        </div>
    );
}

const projects = [
    {
        id: "torch-transforms-inspect",
        title: "Torch Transforms Inspect",
        accent: "#4285F4",
        highlightClass: "highlight-card1",
        image: torchtransform,
        caption: "A lightweight utility for visually inspecting and debugging torchvision image transformation pipelines using PyTorch and matplotlib.",
        description: "A lightweight utility for visually inspecting and debugging torchvision image transformation pipelines using PyTorch and matplotlib.",
        features: [
            <>Uses native <span className="highlight-card1">torchvision.transforms</span></>,
            "Visualizes intermediate steps and never modifies",
            "Supported in stand-alone Python files and Jupyter Notebooks including Google Colab",
        ],
        tech: "Pytorch • Python • Matplotlib",
        github: "https://github.com/kanaad-lims/Torch-Transform-Inspector",
        downloads: { from: 200, to: 1100 },
    },
    {
        id: "paperlens",
        title: "PaperLens",
        accent: "#DB4437",
        highlightClass: "highlight-card2",
        image: paperlens,
        caption: "AI-powered research paper analysis and Q&A engine.",
        description: "AI-powered research paper analysis and Q&A engine.",
        features: [
            <><span className="highlight-card2">Structured extraction</span> — title, authors, abstract, problem statement, methods, math formulas (LaTeX), datasets, results, limitations, future work, keywords</>,
            "RAG Q&A — supports parallel processing, uses hybrid search (BM25 and Semantic searching)",
            <>Achieved RAGAS scores of <span className="highlight-card2">0.91, 0.88, 0.87 and 0.90</span> - Faithfulness, Answer Relevancy, Context Precision & Context Recall.</>,
        ],
        tech: "Python • LangGraph • FastAPI",
        github: "https://github.com/kanaad-lims/PaperLens",
        downloads: null,
    },
    {
        id: "medetect-ai",
        title: "MeDetect AI",
        accent: "#F4B400",
        highlightClass: "highlight-card3",
        image: medetect,
        caption: "AI-powered diagnostic system with accurate detection of multiple diseases.",
        description: "AI-powered diagnostic system with accurate detection of multiple diseases.",
        features: [
            <>Trained models on <span className="highlight-card3">T4x2 GPUs</span> using TensorFlow and Keras with Roboflow for data augmentation.</>,
            <>Achieved <span className="highlight-card3">90.8%</span> (Skin Disease) and <span className="highlight-card3">95.34%</span> (Alzheimer's) accuracies across test datasets.</>,
            "Built a custom offline mode functionality using 3 LLMs using an inverted triangle model.",
        ],
        tech: "Next.js • TensorFlow • Python",
        github: "https://github.com/kanaad-lims/MeDetect-AI",
        downloads: null,
    },
    {
        id: "personal-portfolio",
        title: "Personal Portfolio",
        accent: "#0F9D58",
        highlightClass: "highlight-card4",
        image: portfoliophoto   ,
        caption: "Interactive portfolio website showcasing projects, experience and technical expertise through modern UI components.",
        description: "Interactive portfolio website showcasing projects, experience and technical expertise through modern UI components.",
        features: [
            "React-based component architecture",
            "Interactive animations using ReactBits",
            "Responsive design and navigation",
        ],
        tech: "React • JavaScript • CSS",
        github: "YOUR_REPO_LINK",
        downloads: null,
    },
    {
        id: "MIRAGE",
        title: "MIRAGE",
        accent: "#A855F7",
        highlightClass: "highlight-card5",
        image: mirage,
        caption: "Multimodal Image Retrieval & Attribute-Grounded Engine.",
        description: "An open-vocabulary, context-aware image search engine utilizing VLM dense captioning (Moondream) and CLIP visual reranking for zero-shot image retrieval using natural language.",
        features: [
            "Compositional Attribute Binding",
            "Context & Location Awareness",
            "Vibe & Style Inference",
            "Dual-Stage Retrieval",
        ],
        tech: "OpenAI CLIP • MoonDream 2 VLM • ChromaDB",
        github: "https://github.com/kanaad-lims/mirage",
        downloads: null,
    },
    {
        id: "placeholder-project-2",
        title: "Project Title",
        accent: "#22D3EE",
        highlightClass: "highlight-card6",
        image: null,
        caption: "Short description goes here.",
        description: "Short description goes here.",
        features: [
            "Feature one goes here",
            "Feature two goes here",
            "Feature three goes here",
        ],
        tech: "Tech • Stack • Here",
        github: "YOUR_REPO_LINK",
        downloads: null,
    },
];

function Projects() {
    const [activeIndex, setActiveIndex] = useState(null);

    const openProject = (index) => setActiveIndex(index);
    const closeProject = () => setActiveIndex(null);
    const showPrev = () => setActiveIndex((i) => (i - 1 + projects.length) % projects.length);
    const showNext = () => setActiveIndex((i) => (i + 1) % projects.length);

    useEffect(() => {
        if (activeIndex === null) return;

        const handleKeyDown = (e) => {
            if (e.key === "Escape") closeProject();
            if (e.key === "ArrowLeft") showPrev();
            if (e.key === "ArrowRight") showNext();
        };

        window.addEventListener("keydown", handleKeyDown);

        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        return () => {
            window.removeEventListener("keydown", handleKeyDown);
            document.body.style.overflow = previousOverflow;
        };
    }, [activeIndex]);

    const activeProject = activeIndex !== null ? projects[activeIndex] : null;

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

            <div className="projects-grid">
                {projects.map((project, index) => (
                    <div
                        key={project.id}
                        className="project-tile"
                        style={{ "--accent": project.accent }}
                        onClick={() => openProject(index)}
                    >
                        <div className="project-tile-image">
                            <ProjectImage image={project.image} title={project.title} accent={project.accent} />
                        </div>

                        <div className="project-tile-body">
                            <h3 className="project-tile-title">{project.title}</h3>
                            <p className="project-tile-caption">{project.caption}</p>

                            <div className="project-tile-footer">
                                {project.downloads ? (
                                    <div className="project-downloads">
                                        <CountUp
                                            from={project.downloads.from}
                                            to={project.downloads.to}
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
                                ) : <span />}

                                <a
                                    className="github-link"
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <img
                                        src={githubLogo}
                                        alt="GitHub Repository"
                                        className="github-icon"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {activeProject && (
                <div className="project-modal-overlay" onClick={closeProject}>
                    <button className="project-modal-nav left" onClick={(e) => { e.stopPropagation(); showPrev(); }} aria-label="Previous project">
                        ‹
                    </button>

                    <div className="project-modal" style={{ "--accent": activeProject.accent }} onClick={(e) => e.stopPropagation()}>
                        <button className="project-modal-close" onClick={closeProject} aria-label="Close">
                            ×
                        </button>

                        <div className="project-modal-content">
                            <div className="project-modal-text">
                                <h2><span className={activeProject.highlightClass}>{activeProject.title}</span></h2>

                                <p className="project-description">
                                    {activeProject.description}
                                </p>

                                <ul className="project-features">
                                    {activeProject.features.map((feature, i) => (
                                        <li key={i}>{feature}</li>
                                    ))}
                                </ul>

                                <div className="project-tech">
                                    <span className={activeProject.highlightClass}>{activeProject.tech}</span>
                                </div>
                            </div>

                            <div className="project-modal-image">
                                <ProjectImage image={activeProject.image} title={activeProject.title} accent={activeProject.accent} />
                            </div>
                        </div>
                    </div>

                    <button className="project-modal-nav right" onClick={(e) => { e.stopPropagation(); showNext(); }} aria-label="Next project">
                        ›
                    </button>
                </div>
            )}
        </section>
    )

}
export default Projects
