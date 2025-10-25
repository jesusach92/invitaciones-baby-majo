import React from 'react'

const Dresscode = () => {
  return (
    <section className='dresscode'>
      <div className="elements-container">
        <div className='font-cinzel-decorative secondary-color' style={{ fontSize: '3rem', fontWeight: '700' }}>Codigo de Vestimenta</div>
        <div className='font-bell primary-color font-lg'>Ropa cómoda y alguna <br />prenda navideña</div>
        <img src="/assets/Dresscode/images/guantes.png" alt="mittens" className='dresscode-image-decor' />
        <img src="/assets/Dresscode/images/lazo.png" alt="lazo" className='dresscode-decor' />
      </div>
    </section>
  )
}

export default Dresscode