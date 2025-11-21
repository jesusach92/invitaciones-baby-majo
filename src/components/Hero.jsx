import '../styles/fonts.css';
import '../styles/styles.css'
import CountdownComponent from './common/CountdownComponent';
import { useInViewAnimation } from './hooks/useInViewAnimation';

export default function Hero({ visible = false }) {
  const img1 = useInViewAnimation({}, visible)
  return (
    <section className='hero'>

      <div className='hero-container' >
        <div className="hero-element font-serif-regular font-md tertiary-color" style={{ fontWeight: '200', }} contentEditable={false} autoCorrect='off'>TE INVITAMOS A NUESTRA</div>
        <div className="hero-element-title">
          <img src="/assets/Hero/posada.png" alt="" className='hero-image-title' />
          <img src="/assets/Hero/navi.png" alt="" className='hero-image-subtitle' />
        </div>
        <div className="hero-element-logos">
          <img src="/assets/Hero/logo_1.png" alt="" className="hero-logo" style={{ alignSelf: 'flex-end', }} />
          <img src="/assets/Hero/logo_2.png" style={{ alignSelf: 'flex-start', width: '150px' }} alt="" className="hero-logo" />
          <img src="/assets/Hero/logo_3.png" alt="" className="hero-logo" style={{ alignSelf: 'flex-end', }} />
        </div>
        <div className="hero-element" style={{ alignItems: 'center', justifyContent: 'center' }}>
          <img src="/assets/Hero/fecha.png" alt="" className='hero-date' />
          <div className='font-serif-regular font-md tertiary-color'>08:00 P.M. - 01:00 A.M</div>
        </div>
        <div className="hero-element"><img src="/assets/Hero/merry.png" alt="" className='hero-image-decor' /></div>
        <div className="hero-element font-serif-regular primary-color font-lg">
          FALTAN!!
          <br />
          <br />
          <CountdownComponent targetDate={'2025-12-13T20:00:00'} />
        </div>
        <div className="hero-element  tertiary-color font-md">
          Lugar: Casino el Gran Márques
        </div>
        <div className="hero-element">
          <a href="https://maps.app.goo.gl/JeWWacBSpbDst5YeA"
            target="_blank" rel="noopener noreferrer"
          ><img src="/assets/Hero/boton.png" alt="" className='hero-image-title' /></a>
        </div>
        <div className="hero-element  tertiary-color font-md">¡NO FALTES!</div>
        <div className="hero-element"></div>
        <div className="hero-element"></div>
        <img src="/assets/Hero/arbol.png" alt="" className="image-decor bottom-left" />
        <img src="/assets/Hero/baston.png" alt="" className="image-decor center-right" />
        <img src="/assets/Hero/esfera.png" alt="" className="image-decor top-center-decor-little" />
        <img src="/assets/Hero/esfera.png" alt="" className="image-decor top-right-decor-little" />
        <img src="/assets/Hero/copo.png" alt="" className="image-decor top-left-decor" />
        <img src="/assets/Hero/copo.png" alt="" className="image-decor top-left-decor animate-fall-and-spin" />
        <img src="/assets/Hero/copo.png" alt="" className="image-decor top-center-decor animate-fall-and-spin" />
        <img src="/assets/Hero/copo.png" alt="" className="image-decor top-center-decor" />
        <img src="/assets/Hero/copo.png" alt="" className="image-decor top-right" />
        <img src="/assets/Hero/copo_2.png" alt="" className="image-decor top-right-decor animate-fall-and-spin" />
        <img src="/assets/Hero/copo_2.png" alt="" className="image-decor top-right-decor" />
        <img src="/assets/Hero/copo.png" alt="" className="image-decor center-left" />
        <img src="/assets/Hero/copo.png" alt="" className="image-decor bottom-right-1" />
        <img src="/assets/Hero/copo.png" alt="" className="image-decor bottom-right-2" />
        <img src="/assets/Hero/esferas.png" alt="" className="image-decor top-left" />
      </div>
      <img src="/assets/Hero/polvos_2.png" alt="" className="image-decor top-center" />
      <img src="/assets/Hero/polvos.png" alt="" className="image-decor bottom-center" />
    </section>
  );
}
