import { useState, useEffect } from "react";
import '../../styles/styles.css';

export default function ConfirmationModal({ ref, family, onClose }) {
    const [attended, setAttended] = useState("SI");
    const [message, setMessage] = useState("");
    const [adults, setAdults] = useState(family.adults > 0 ? 1 : 0);
    const [kids, setKids] = useState(family.kids > 0 ? 0 : 0);

    // efecto para resetear adultos/niños si selecciona NO
    useEffect(() => {
        if (attended === "NO") {
            setAdults(0);
            setKids(0);
        } else {
            // reset a valores por default si dice SI
            setAdults(family.adults > 0 ? 1 : 0);
            setKids(family.kids > 0 ? 0 : 0);
        }
    }, [attended, family.adults, family.kids]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const params = new URLSearchParams({
                code: family.code,
                attended,
                message,
                adults,
                kids,
            });
            const url = `https://script.google.com/macros/s/AKfycbw691Wh01sFg0LV7NpgG1HhbE8V9CcjdWSvVoka-ghSSpf3t6o1R-xrZhdgcJiln73TlQ/exec?${params.toString()}`;
            await fetch(url, { method: "GET" });
            onClose();
        } catch (err) {
            console.error("Error al enviar:", err);
            alert("Hubo un error al enviar la confirmación.");
        }
    };

    return (
        <div ref={ref} className="modal-overlay">
            <div className="modal-content">
                <h3 className="font-cinzel secondary-color">Confirmación de asistencia</h3>
                <p className="font-bell primary-color font-md">{family.family}</p>

                <form onSubmit={handleSubmit}>
                    {/* Attended */}
                    <div className="form-group font-bell secondary-color font-sm">
                        <label>¿Asistirás?</label>
                        <div className="radio-group-container">
                            <label>
                                <input
                                    type="radio"
                                    name="attended"
                                    value="SI"
                                    checked={attended === "SI"}
                                    onChange={(e) => setAttended(e.target.value)}
                                />
                                Sí
                            </label>
                            <label style={{ marginLeft: "1rem" }}>
                                <input
                                    type="radio"
                                    name="attended"
                                    value="NO"
                                    checked={attended === "NO"}
                                    onChange={(e) => setAttended(e.target.value)}
                                />
                                No
                            </label>
                        </div>
                    </div>

                    {/* Message */}
                    <div className="form-group font-bell secondary-color">
                        <label>Mensaje</label>
                        <textarea
                            value={message}
                            rows={5}
                            style={{ resize: "none" }}
                            placeholder="Escribe tu mensaje aquí..."
                            onChange={(e) => setMessage(e.target.value)}
                            required
                        />
                    </div>

                    {/* Adults */}
                    {attended === "SI" && family.adults > 0 && (
                        <div className="form-group font-bell secondary-color">
                            <label>Adultos</label>
                            <select
                                value={adults}
                                onChange={(e) => setAdults(Number(e.target.value))}
                            >
                                {Array.from({ length: family.adults }, (_, i) => i + 1).map(
                                    (n) => (
                                        <option key={n} value={n}>
                                            {n} {n === 1 ? "Adulto" : "Adultos"}
                                        </option>
                                    )
                                )}
                            </select>
                        </div>
                    )}

                    {/* Kids */}
                    {attended === "SI" && family.kids > 0 && (
                        <div className="form-group font-bell secondary-color">
                            <label>Niños</label>
                            <select
                                value={kids}
                                onChange={(e) => setKids(Number(e.target.value))}
                            >
                                {Array.from({ length: family.kids }, (_, i) => i).map(
                                    (n) => (
                                        <option key={n} value={n + 1}>
                                            {n + 1} {n === 1 ? "Niño" : "Niños"}
                                        </option>
                                    )
                                )}
                            </select>
                        </div>
                    )}

                    {/* Hidden Code */}
                    <input type="hidden" value={family.code} />

                    <div className="form-actions">
                        <button type="submit">Enviar</button>
                        <button type="button" onClick={onClose}>
                            Cancelar
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
