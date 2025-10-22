import { useState, useEffect } from "react";
import "../styles/styles.css";
import { useGuestHook } from "./hooks/useGuestHook";

export default function EnvelopeOverlay({ onStartMusic }) {
    const [opened, setOpened] = useState(false);
    const family = useGuestHook();

    useEffect(() => {
        if (!opened) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [opened]);

    const handleOpen = () => {
        setOpened(true);
        onStartMusic();
    };

    return (
        <div
            className={`envelope-overlay ${opened ? "opened" : ""}`}
            onClick={handleOpen}
        >
            <div className="envelope-container">
                <p className="family-name font-bell">
                    {family ? `${family.family.toUpperCase()}` : "FAMILIA"}
                </p>
                <img
                    src="/assets/Envelope/images/sobre.jpg"
                    alt="Sobre de invitación"
                    className="envelope-img"
                />
                <img src="/assets/Envelope/images/arbol.png" alt="" className="image-decor left bigger-image" />
                <img src="/assets/Envelope/images/decor.png" alt="" className="image-decor rigth" />
            </div>

        </div>
    );
}
