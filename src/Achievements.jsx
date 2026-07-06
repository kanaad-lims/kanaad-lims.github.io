import "./Achievements.css";
import ShinyText from "./components/text/ShinyText";
import ElectricBorder from "./components/buttons/ElectricBorder";

function Achievements() {
    return (
        <section id="achievements">
            <div className="section-title-row">
                <div className="achievements-header">
                    <ShinyText
                    text="/achievements"
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
            <div className="achievements-intro"
            style={{
                color: "#90e016",
                marginBottom: "10px",
            }}
        >
            "I swear it wasn't luck. Mostly."

            </div>
            <div className="achievements-grid">
                
            <ElectricBorder
                color="#27cfc6"
                speed={0.5}
                chaos={0.1}
                thickness={5}
                style={{ borderRadius: 20 }}
            >
            <div className="achievement-card">

                <h3>ABU Robocon AIR 5</h3>

                <span className="achievement-category">
                    Competition
                </span>

                <div className="achievement-details">
                    <p>• Secured AIR 5 nationally at ABU Robocon.</p>
                    <p>• Represented Team Rudra in autonomous robotics.</p>
                </div>

                <span className="achievement-year">
                    2024
                </span>

            </div>
            </ElectricBorder>

            <ElectricBorder
                color="#27cfc6"
                speed={0.5}
                chaos={0.1}
                thickness={2}
                style={{ borderRadius: 20 }}
            >
            <div className="achievement-card">

                <h3>IEEE Publication</h3>

                <span className="achievement-category">
                    Research
                </span>

                <div className="achievement-details">
                    <p>• Research paper accepted at an international conference.</p>
                    <p>• Published in IEEE Xplore proceedings.</p>
                </div>

                <span className="achievement-year">
                    2026
                </span>

            </div></ElectricBorder>


            <ElectricBorder
                color="#27cfc6"
                speed={0.5}
                chaos={0.1}
                thickness={2}
                style={{ borderRadius: 20 }}
            >
            <div className="achievement-card">

                <h3>SISTER AI/ML Program</h3>

                <span className="achievement-category">
                    Fellowship
                </span>

                <div className="achievement-details">
                    <p>• Selected for the AI/ML research track.</p>
                    <p>• Mentorship under Delta Rising Foundation.</p>
                </div>

                <span className="achievement-year">
                    2026
                </span>

            </div></ElectricBorder>

            <ElectricBorder
                color="#27cfc6"
                speed={0.5}
                chaos={0.1}
                thickness={2}
                style={{ borderRadius: 20 }}
            >
            <div className="achievement-card">

                <h3>Achievement Title</h3>

                <span className="achievement-category">
                    Category
                </span>

                <div className="achievement-details">
                    <p>• Placeholder point one.</p>
                    <p>• Placeholder point two.</p>
                </div>

                <span className="achievement-year">
                    20XX
                </span>

            </div></ElectricBorder>

            <ElectricBorder
                color="#27cfc6"
                speed={0.5}
                chaos={0.1}
                thickness={2}
                style={{ borderRadius: 20 }}
            >
            <div className="achievement-card">

                <h3>Achievement Title</h3>

                <span className="achievement-category">
                    Category
                </span>

                <div className="achievement-details">
                    <p>• Placeholder point one.</p>
                    <p>• Placeholder point two.</p>
                </div>

                <span className="achievement-year">
                    20XX
                </span>

            </div></ElectricBorder>

            <ElectricBorder
                color="#27cfc6"
                speed={0.5}
                chaos={0.1}
                thickness={2}
                style={{ borderRadius: 20 }}
            >
            <div className="achievement-card">

                <h3>Achievement Title</h3>

                <span className="achievement-category">
                    Category
                </span>

                <div className="achievement-details">
                    <p>• Placeholder point one.</p>
                    <p>• Placeholder point two.</p>
                </div>

                <span className="achievement-year">
                    20XX
                </span>

            </div></ElectricBorder>

            </div>
        </section>
    )
}

export default Achievements;