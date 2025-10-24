import '../styles/styles.css'

const Address = () => {
     return (
          <section className='address'>
               <div className='font-cinzel-decorative secondary-color font-lg' style={{ fontWeight: '700', fontSize: '2.5rem' }}>TE ESPERAMOS <br />EN</div>
               <div className='address-container'>
                    <div className='font-bell primary-color font-md' style={{ fontWeight: '700', fontSize: '1.8rem' }}>Jardin de Eventos Arboledas</div>
                    <div className='font-bell secondary-color font-lg' style={{ fontWeight: '700' }}>03:oo PM</div>
                    <div className='font-bell secondary-color font-md' style={{ fontWeight: '700' }}>Avenida de las Torres & Uranio,
                         <br />El Palmar,Jardines de Colosio,
                         <br />42088 Pachuca de Soto,Hgo.
                    </div>
               </div>
               <div><a href="">
                    <button className='font-md font-bell'>
                         Ubicación
                    </button>
               </a></div>
               <img className='decor-left' src="/assets/Address/images/carro.png" alt="car" />


          </section>
     )
}

export default Address