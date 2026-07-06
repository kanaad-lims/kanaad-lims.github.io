import "./Leadership.css";
import ShinyText from "./components/text/ShinyText";
import ieeeLogo from "./assets/ieeeLogo.png";
import hpairLogo from "./assets/harvardLogo.png";
import logiLogo from "./assets/logiLogo.png";
import unicefLogo from "./assets/unicefLogo.png"
import kumudiniLogo from "./assets/kumudiniLogo.png";
import volshipLogo from "./assets/volshipLogo.jpg";

function Leadership(){
    return (
        <section id="leadership">
            <div className="section-title-row">
                <div className="leadership-header">
                    <ShinyText
                    text="/leadership"
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
            <div className="leadership-intro"
            style={{
                color: "#90e016",
                marginBottom: "10px",
            }}
        >
            "In leadership, everything is somehow your fault."

            </div>
            <div className="leadership-grid">

                {/* IEEE */}

                <div className="leadership-card">

                    <img
                        src={ieeeLogo}
                        className="leadership-logo"
                        alt="IEEE"
                    />

                    <div className="leadership-content">

                        <h2>IEEE MMCOE Student Branch</h2>

                        <h3>Chairperson</h3>

                        <ul>
                            <li>Led the IEEE Student Branch and coordinated technical initiatives.</li>
                            <li>Organized workshops, events and community activities.</li>
                            <li>Best Student Branch of the Year 2025 – IEEE Pune Section.</li>
                        </ul>

                    </div>

                    <span className="leadership-year">
                        Jan 2025 – Jan 2026
                    </span>

                </div>

                {/* HPAIR */}

                <div className="leadership-card">

                    <img
                        src={hpairLogo}
                        className="leadership-logo"
                        alt="HPAIR"
                    />

                    <div className="leadership-content">

                        <h2>HPAIR</h2>

                        <h3>International Student Delegate</h3>

                        <ul>
                            <li>Represented MMCOE at the Harvard Project for Asian and International Relations.</li>
                            <li>Participated in discussions on leadership, innovation and global collaboration.</li>
                        </ul>

                    </div>

                    <span className="leadership-year">
                        Aug 2025 - Present
                    </span>

                </div>

                {/* Logitech */}

                <div className="leadership-card">

                    <img
                        src={logiLogo}
                        className="leadership-logo"
                        alt="Logitech"
                    />

                    <div className="leadership-content">

                        <h2>Logitech</h2>

                        <h3>Marketing Volunteer</h3>

                        <ul>
                            <li>Volunteered during the MX Master Series launch at Pune Design Festival 2025.</li>
                            <li>Assisted with product demonstrations and attendee engagement.</li>
                        </ul>

                    </div>

                    <span className="leadership-year">
                        Mar 2025 - Mar 2025
                    </span>

                </div>

                {/* Volship-Unicef */}

                <div className="leadership-card">

                <div className="leadership-logo-group">

                    <img
                        src={unicefLogo}
                        className="leadership-logo"
                        alt="UNICEF"
                    />

                    <img
                        src={volshipLogo}
                        className="leadership-logo"
                        alt="Volship Fellowship"
                    />

                </div>

                <div className="leadership-content">

                    <h2>Volship Fellowship under UNICEF</h2>

                    <h3>Volunteer</h3>

                    <ul>
                        <li>Placeholder point one.</li>
                        <li>Placeholder point two.</li>
                    </ul>

                </div>

                <span className="leadership-year">
                    Jan 2024 - Apr 2024
                </span>

</div>

                {/* Kumudini Card */}

                <div className="leadership-card leadership-last">

                    <img
                        src={kumudiniLogo}
                        className="leadership-logo"
                        alt="Kumudini Charitable Trust"
                    />

                    <div className="leadership-content">

                        <h2>Kumudini Charitable Trust</h2>

                        <h3>Volunteer</h3>

                        <ul>
                            <li>Placeholder point one.</li>
                            <li>Placeholder point two.</li>
                        </ul>

                    </div>

                    <span className="leadership-year">
                        2023-Present
                    </span>

                </div>

            </div>
        </section>
    )
}

export default Leadership;