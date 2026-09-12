import "./Gallery.css";
import CircularGallery from "./components/photoanim/CircularGallery";
import ShinyText from "./components/text/ShinyText";

import ieeeaward from "./assets/gallery/ieeeaward.JPG";
import awardindi from "./assets/gallery/awardindi.jpeg";
import deccanteam from "./assets/gallery/deccanteam.jpeg";
import hpairconf from "./assets/gallery/hpair_confirmation.png";
import iitdindi from "./assets/gallery/iitdindi.jpeg";
import logiphoto from "./assets/gallery/logiphoto.jpeg";
import messileo from "./assets/gallery/messileo.jpeg";
import paperpres from "./assets/gallery/paperpres.jpeg";
import roboconteam from "./assets/gallery/roboconteam.jpeg";

const galleryItems = [
    {
        image: ieeeaward,
        text: "IEEE Hackathon 2025"
    },

    {
        image: awardindi,
        text: "IEEE Best SB Award 2025"
    },

    {
        image: deccanteam,
        text: "Deccan XI Football Club"
    },

    {
        image: hpairconf,
        text: "Acceptance into HPAIR '26",
    },

    {
        image: iitdindi,
        text: "IIT Delhi Robocon 2025"
    },

    {
        image: logiphoto,
        text: "Logitech launch @ PDF'25"
    },

    {
        image: messileo,
        text: "Messi event in Mumbai"
    },

    {
        image: paperpres,
        text: "Paper presentation @ ICEI 2026"
    },

    {
        image: roboconteam,
        text: "Robocon Team Rudra 2025"
    }
]

function Gallery() {
    return (

        <section id="gallery">

            <div className="gallery-header">

                <ShinyText
                    text="/beyond-code"
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

                <p>
                    "Proof that I occasionally step away from the keyboard."
                </p>

            </div>

            <div className="gallery-wrapper">

                <CircularGallery
                items={galleryItems}
                    bend={1}
                    textColor="#ffffff"
                    borderRadius={0.05}
                    scrollEase={0.05}
                    fontUrl=""
                    font="bold 20px JetBrains Mono"
                    scrollSpeed={1}
                />

            </div>

        </section>

    );
}

export default Gallery;