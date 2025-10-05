import { useState, useEffect } from "react";
import "../styles/styles.css";
import { useGuestHook } from "./hooks/useGuestHook";

export default function EnvelopeOverlay({ onStartMusic }) {
    const [opened, setOpened] = useState(false);
    const family = useGuestHook();

    // Bloqueo del scroll mientras el sobre no está abierto
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
            <img
                src="/assets/Envelope/images/sobre.png"
                alt="Sobre de invitación"
                className="envelope-img"
            />
            <p className="family-name">
                {family ? `${family.family.toUpperCase()}` : "FAMILIA"}
            </p>
            <div className="clickeable font-indie-flower">Click aquí</div>
        </div>
    );
}
