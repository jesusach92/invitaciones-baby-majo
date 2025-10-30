import '../styles/styles.css'
import { useInViewAnimation } from './hooks/useInViewAnimation'

const Address = () => {
     const imgCar = useInViewAnimation({}, true)
     return (
          <section className='address'>
               <div className='font-cinzel-decorative secondary-color font-lg' style={{ fontWeight: '700', fontSize: '2.5rem' }}>TE ESPERAMOS <br />EN</div>
               <div className='address-container'>
                    <div className='font-bell primary-color font-md' style={{ fontWeight: '700', fontSize: '1.8rem' }}>Jardin de Eventos Arboledas</div>
                    <div className='font-bell secondary-color font-lg' style={{ fontWeight: '700' }}>02:3o PM</div>
                    <div className='font-bell secondary-color font-md' style={{ fontWeight: '700' }}>Avenida de las Torres & Uranio,
                         <br />El Palmar,Jardines de Colosio,
                         <br />42088 Pachuca de Soto,Hgo.
                    </div>
               </div>
               <div><a href="https://maps.app.goo.gl/hd7ynQbwdJ4DorqN7?g_st=aw" target="_blank" rel="noopener noreferrer">
                    <button className='font-md font-bell'>
                         Ubicación
                    </button>
               </a></div>
               <img ref={imgCar.ref} className={`opacity-0 ${imgCar.isVisible ? 'animate-slide-right' : ''} decor-left`} src="/assets/Address/images/carro.png" alt="car" />


          </section>
     )
}

export default Address