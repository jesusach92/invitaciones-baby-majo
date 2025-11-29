import '../../styles/styles.css';

export default function GiftListModal({ ref, onClose }) {
    const handleSubmit = () => { return }
    const family = { family: '', kids: 0, adults: 10 }

    return (
        <div ref={ref} className="modal-overlay">
            <div className='modal-container'>
                <div className="modal-content">
                    <h3 className="font-cinzel secondary-color" style={{ textAlign: 'center', fontSize: '1rem' }}>El Regalo es opcional
                        <br /> la Asistencia Obligatoria
                        <br /> pero si quieres tener un detalle con
                        <br />Maria Jose aquí te dejamos algunas ideas</h3>
                    <div class="lista-container font-cinzel primary-color">
                        <ul>
                            <li>Ropa
                                <ul>
                                    <li>0-3 meses</li>
                                    <li>6-9 meses</li>
                                    <li>9-12 meses</li>
                                </ul>
                            </li>

                            <li>Pañales
                                <ul>
                                    <li>Recién nacido</li>
                                    <li>Chico</li>
                                    <li>Mediano</li>
                                    <li>Grande</li>
                                </ul>
                            </li>

                            <li>Baberos</li>
                            <ul>
                                <li>Algodón</li>
                                <li>Silicon</li>
                            </ul>

                            <li>Toallitas húmedas</li>
                            <li>Chupones</li>
                            <li>Jabón neutro</li>
                            <li>Esponja de baño</li>
                        </ul>

                        <ul>
                            <li>Crema hidratante (hipoalergénico)</li>
                            <li>Cepillo</li>
                            <li>Peine</li>
                            <li>Kit de limpieza</li>
                            <li>Frazadas (franela o algodón)</li>
                            <li>Sábanas (franela o algodón)</li>
                            <li>Tina de baño</li>
                            <li>Mordederas</li>
                            <li>Juguetes para bebé</li>
                            <li>Cobija gruesa de felpa</li>
                            <li>Toalla</li>
                            <li>Lo que deseen</li>
                            <li>Sapo para dormir</li>
                            <li>Calcetas</li>
                            <li>Termómetro</li>
                            <li>Body pañaleros</li>
                        </ul>
                    </div>
                    <img src="/assets/Hero/cerrar.png" alt="" className='gift-image buton' onClick={onClose} />
                </div>
            </div>

        </div>
    );
}
