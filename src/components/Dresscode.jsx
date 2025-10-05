import React from 'react'

const Dresscode = () => {
  return (
    <section className='dresscode font-indie-flower'>
      <div className="elements-container">
        <div className='dresscode-title'>Codigo de Vestimenta</div>
        <div className='dresscode-subtitle'>Etiqueta</div>
        <div className='dresscode-text'>Los siguientes colores están reservados<br />
          para la novia y su cortejo </div>
        <div className='colors-container'>
          <img className='decor-image' src="/assets/Dresscode/images/color_blanco.png" alt="" />
          <img className='decor-image' src="/assets/Dresscode/images/color_rojo.png" alt="" />
        </div>
        <div>
          <img className='decor-elements' src="/assets/Dresscode/images/vestimenta.png" alt="" />
        </div>
      </div>
    </section>
  )
}

export default Dresscode