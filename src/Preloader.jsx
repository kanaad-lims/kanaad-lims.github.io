import { useEffect, useState } from "react";
import "./Preloader.css";

const BOOT_LINES = [
    { text: "kanaad@dev:~$ ./boot portfolio.sh", tone: "cmd" },
    { text: "[ok] mounted react tree", tone: "ok" },
    { text: "[ok] synced github activity", tone: "ok" },
    { text: "[ok] compiled project index", tone: "ok" },
    { text: "[ready] kanaad.dev", tone: "ready" },
];

const LINE_STAGGER = 260;
const LINE_DURATION = 380;
const BOOT_HOLD = 1850;
const EXIT_DURATION = 700;

function Preloader() {
    const [isExiting, setIsExiting] = useState(false);
    const [isDone, setIsDone] = useState(false);

    useEffect(() => {
        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";

        const exitTimer = setTimeout(() => setIsExiting(true), BOOT_HOLD);

        return () => {
            clearTimeout(exitTimer);
            document.body.style.overflow = previousOverflow;
        };
    }, []);

    useEffect(() => {
        if (!isExiting) return;
        document.body.style.overflow = "";
        const doneTimer = setTimeout(() => setIsDone(true), EXIT_DURATION);
        return () => clearTimeout(doneTimer);
    }, [isExiting]);

    if (isDone) return null;

    const cursorDelay = (BOOT_LINES.length - 1) * LINE_STAGGER + LINE_DURATION;

    return (
        <div className={`preloader${isExiting ? " preloader-exit" : ""}`} aria-hidden="true">
            <div className="preloader-panel">
                <div className="preloader-terminal">
                    {BOOT_LINES.map((line, i) => (
                        <div
                            key={line.text}
                            className={`preloader-line preloader-line-${line.tone}`}
                            style={{ animationDelay: `${i * LINE_STAGGER}ms` }}
                        >
                            {line.text}
                            {i === BOOT_LINES.length - 1 && (
                                <span
                                    className={`preloader-cursor${isExiting ? " preloader-cursor-solid" : ""}`}
                                    style={{ animationDelay: `${cursorDelay}ms, ${cursorDelay}ms` }}
                                />
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Preloader;
