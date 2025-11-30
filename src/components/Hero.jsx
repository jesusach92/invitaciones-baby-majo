import { useState } from 'react';
import '../styles/fonts.css';
import '../styles/styles.css';
import GiftListModal from './common/GiftListModal';
import Copyright from './Copyright';

export default function Hero() {
  const [showModal, setShowModal] = useState(false);
  return (
    <section className='hero'>
      <div className='hero-container'>
        <div className="hero-elements-container">
          <div className='hero-title-decor-container'>
            <img src="/assets/Hero/osito.png" alt="" className="hero-decor-image" />
          </div>
          <div className="hero-elements">
            <div className="hero-element-title">
              <img src="/assets/Hero/title.png" alt="" className='hero-title-image' />
            </div>
            <div className="hero-element">
              <img src="/assets/Hero/majo.png" alt="" className='hero-title-image' />
            </div>
            <div className="hero-element font-cinzel primary-color" style={{ fontSize: '.75rem', fontWeight: '700', }}>
              <p style={{ textAlign: 'center' }}>UNA BENDICIÓN
                <br />
                PRONTO LLEGARÁ A ILUMINAR
                <br />
                NUESTRAS VIDAS, PARA LLENARNOS
                <br />
                DE AMOR Y ALEGRÍA.
              </p>
            </div>
            <div className="hero-element font-bell primary-color" style={{ fontSize: '.9rem', fontWeight: '500', paddingTop: '0.5rem' }}>
              <p>
                ACOMPAÑA A MIS PAPIS
              </p>
              <img src="/assets/Hero/padres.png" alt="" className='hero-title-image' />
            </div>
          </div>
        </div>
        <div className='welcome-section-container'>
          <div className="welcome-section">
            <div className="font-cinzel font-md primary-color" style={{ textAlign: 'center' }}>Diciembre</div>
            <div className="welcome-date-container">
              <div className="font-cinzel font-md primary-color borders">sábado</div>
              <div className="font-cinzel font-xl secondary-color">20</div>
              <div className="font-cinzel font-sm primary-color borders">04:00 PM</div>
            </div>
            <div className="font-cinzel font-lg primary-color" style={{ textAlign: 'center' }}>
              2025
            </div>
          </div>
        </div>
        {/* <div className='address-section'>
          <div className="address-section-content font-lg font-bell secondary-color" style={{ fontWeight: '600', textAlign: 'center' }}>
            Te esperamos en
          </div>
          <img src="/assets/Hero/ubicacion.png" alt="" className='gift-image' />
        </div> */}
        <div className='gift-table'>
          <img src="/assets/Hero/gift-table.png" alt="" className='hero-title-image' />
          <div className='gift-table-options'>
            <div className='gift-table-option'>
              <img src="/assets/Hero/liverpool.png" alt="" className='gift-image' />

              <a href="https://mesaderegalos.liverpool.com.mx/milistaderegalos/51713204" target="_blank" rel="noopener noreferrer">
                <img src="/assets/Hero/see.png" alt="" className='gift-image' />
              </a>
            </div>
            <div className='gift-table-option'>
              <img src="/assets/Hero/gift-options.png" alt="" className='gift-image' />
              <div onClick={() => setShowModal(true)} >
                <img src="/assets/Hero/see.png" alt="" className='gift-image' />
              </div>

            </div>
          </div>
          <div className='font-cinzel font-sm secondary-color' style={{ textAlign: 'center', fontWeight: 700 }}>No. evento 51713204</div>
        </div>
        <div className='confirmation'>
          <img src="/assets/Hero/watingforyou.png" alt="" className='hero-title-image' />
          <a href="https://wa.link/aswrcs" target="_blank" rel="noopener noreferrer">
            <img src="/assets/Hero/confirmation.png" alt="" className='gift-image' />
          </a>
        </div>
        <div className='decors-container'>
          <img src="/assets/Hero/ballons.png" alt="" className="image-decor-med" />
          <img src="/assets/Hero/bear.png" alt="" className="image-decor-big" />
        </div>

      </div>
      {showModal &&
        <GiftListModal
          onClose={() => setShowModal(false)}
        />}
    </section>
  );
}
