import { useEffect } from "react";
import "../styles/styles.css";

export default function EnvelopeOverlay({ onStartMusic, opened, setOpened }) {



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
                <div className="hero-element-logos">
                    <img src="/assets/Hero/logo_1.png" alt="" className="hero-logo" style={{ alignSelf: 'flex-end', }} />
                    <img src="/assets/Hero/logo_2.png" style={{ alignSelf: 'flex-start', width: '150px' }} alt="" className="hero-logo" />
                    <img src="/assets/Hero/logo_3.png" alt="" className="hero-logo" style={{ alignSelf: 'flex-end', }} />
                </div>
                <div className="clickeable font-serif-bold primary-color" style={{ fontSize: '2rem' }}>Presentan</div>
                <img src="/assets/Hero/polvos.png" alt="" className="image-decor top-center" />
                <img src="/assets/Hero/polvos.png" alt="" className="image-decor bottom-center" />
            </div>
        </div>
    );
}
