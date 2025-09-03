import React from 'react'
import '../styles/styles.css'
import { useState } from 'react';

const Address = () => {
     const [flipped, setFlipped] = useState(false);
     return (
          <section className='address'>
               <div className='font-indie-flower address-main-text'>Te esperamos en...</div>
               <div className="address-cards-container">
                    <div className={`address-card-inner ${flipped ? "flipped" : ""}`}>
                         <div className="address-frame-front">
                              <div className="address-image-container">
                                   <img className="address-image" src="/assets/Address/images/arbol-8.png" alt="" />
                              </div>
                              <div className="font-indie-flower adreess-secondary-text">Ceremonia</div>
                              <div className="font-indie-flower">
                                   <button className="flip-btn" onClick={() => setFlipped(true)}>Ver más</button>
                              </div>
                         </div>
                         <div className="address-frame-back">
                              <div className="font-indie-flower adreess-secondary-text">Ceremonia</div>
                              <div className="font-indie-flower">
                                   Terraza Salón Sensetto<br />06:30 P.M.
                              </div>
                              <div className="font-indie-flower">
                                   Blvd. Revolución de 1910 302, Los Jales,<br />
                                   Ex Hacienda de Coscotitlán, 42064<br />
                                   Pachuca de Soto, Hgo.
                              </div>
                              <div>
                                   <a href="" className="font-indie-flower">
                                        <button type="button">Ubicación</button>
                                   </a>
                              </div>
                              <div className="font-indie-flower">
                                   <button className="flip-btn" onClick={() => setFlipped(false)}>
                                        Volver
                                   </button>
                              </div>
                         </div>
                    </div>
               </div>

          </section>
     )
}

export default Address