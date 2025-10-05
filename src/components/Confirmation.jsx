
import { useState } from 'react';
import '../styles/styles.css'

import { useGuestHook } from './hooks/useGuestHook'
import ConfirmationModal from './common/ConfirmationModal';

const Confirmation = () => {
  const family = useGuestHook();
  const [showModal, setShowModal] = useState(false);

  if (!family) {
    return (<section className="confirmation font-indie-flower">
      <p>Código no válido o invitación no encontrada</p>
    </section>
    )
  }

  return (
    <section className={family.message ? "confirmation-with-message font-indie-flower" : "confirmation font-indie-flower"}>
      <div className='top-left-decor'><img className='decor-elements' src="/assets/GiftTable/images/decor-frame.png" alt="" /></div>
      <div className='bottom-right-decor'><img className='decor-elements' src="/assets/GiftTable/images/decor-frame.png" alt="" /></div>
      <div className='bottom-left-decor'><img className='decor-elements' src="/assets/Confirmation/images/pastel.png" alt="" /></div>

      <div className="confirmation-container">
        <div className="confirmation-title">Confirmación<br /> de Asistencia</div>
        <div className="confirmation-subtitle">{family.family}</div>
        <div className="confirmation-text">¡Hola, {family.adults > 1 ? 'estan invitados' : 'estas invitado'} a nuestra boda!<br /> Esperamos {family.adults > 1 ? 'puedan' : 'puedas'} asistir </div>
        {family.message ? <div className='confirmation-text'>Esperamos contar <br /> con su presencia en la boda<br /> & a los niños <br /> les deseamos dulces sueños en casa.</div> : <></>}
        <div className="confirmation-passes">
          <div className="confirmation-elements">
            <div className='element-title'>ADULTOS</div>
            <div>{family.adults} Pases</div>
          </div>
          {family.kids > 0 ? <div className='confirmation-elements'>
            <div className='element-title' >NIÑOS</div>
            <div>1 Pase</div>
          </div> : <></>}

        </div>
        <div className="confirmation-button" onClick={() => setShowModal(true)}> Confirmar</div>
      </div >
      {showModal &&
        <ConfirmationModal
          family={family}
          onClose={() => setShowModal(false)}
        />}
    </section >
  )
}

export default Confirmation