
import { useState } from 'react';
import '../styles/styles.css';

import ConfirmationModal from './common/ConfirmationModal';
import { useGuestHook } from './hooks/useGuestHook';

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
      <div className="confirmation-container">
        <div className="font-cinzel secondary-color" style={{ fontSize: '2.5rem', fontWeight: '700' }}>Confirmación<br /> de Asistencia</div>
        <div className="font-bell primary-color font-lg">{family.family}</div>
        <div className="font-bell secondary-color font-md">¡Hola, {family.adults > 1 ? 'estan invitados' : 'estas invitado'}<br /> al Baby Shower de Mya!<br /> Esperamos {family.adults > 1 ? 'puedan' : 'puedas'} acompañarnos </div>
        {family.message ? <div className='confirmation-text'>Esperamos {family.adults > 1 ? 'puedan acompañarnos' : 'puedas acompañarnos'}</div> : <></>}
        <div className="confirmation-passes">
          <div className="confirmation-elements">
            <div className='font-bell primary-color font-md'>ADULTOS</div>
            <div className='font-bell secondary-color font-md'>{family.adults} Pases</div>
          </div>
          {family.kids > 0 ? <div className='confirmation-elements'>
            <div className='font-bell primary-color font-md' >NIÑOS</div>
            <div className='font-bell secondary-color font-md'>{family.kids} Pases</div>
          </div> : <></>}

        </div>
        <div className="confirmation-button font-md" onClick={() => setShowModal(true)}>Confirmar</div>
        <img src="/assets/Confirmation/images/esfera.png" alt="esfera" className={` element-decor`} />
        <img src="/assets/Confirmation/images/copo.png" alt="" className="confirmation-image-decor left-1s" />
        <img src="/assets/Confirmation/images/copo.png" alt="" className="confirmation-image-decor right-2s" />
        <img src="/assets/Confirmation/images/copo2.png" alt="" className="confirmation-image-decor center-4s" />
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