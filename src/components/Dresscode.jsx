import React from 'react'
import { useInViewAnimation } from './hooks/useInViewAnimation'

const Dresscode = () => {
  const imgMittens = useInViewAnimation({}, true)
  return (
    <section className='dresscode'>
      <div className="elements-container">
        <div className='font-cinzel-decorative secondary-color' style={{ fontSize: '3rem', fontWeight: '700' }}>Codigo de Vestimenta</div>
        <div className='font-bell primary-color font-lg'>Ropa cómoda y alguna <br />prenda navideña</div>
        <img ref={imgMittens.ref} src="/assets/Dresscode/images/guantes.png" alt="mittens" className={`opacity-0 ${imgMittens.isVisible ? 'animate-slide-down' : ''} dresscode-image-decor`} />
        <img src="/assets/Dresscode/images/lazo.png" alt="lazo" className='dresscode-decor' />
      </div>
    </section>
  )
}

export default Dresscode