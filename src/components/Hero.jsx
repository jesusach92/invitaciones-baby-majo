import '../styles/fonts.css';
import '../styles/styles.css'
import Animated from './common/Animated';
import { useInViewAnimation } from './hooks/useInViewAnimation';

export default function Hero({ visible = false }) {
  const img1 = useInViewAnimation({}, visible)
  return (
    <section className='hero'>
      <div className='hero-container' >
        <img className='top-decor' src="/assets/Hero/images/esferas.png" alt="top-decor" />
        <div className='hero-container-title'>
          <div className="font-cinzel hero-title">A Little</div>
        </div>
        <img className='center-decor ' src="/assets/Hero/images/snowflake.png" alt="title" />

        <img
          ref={img1.ref}
          className={`opacity-0 ${img1.isVisible ? 'animate-slide-up' : ''} center-decor`} src="/assets/Hero/images/three.png" alt="arbol" />
        <img className='left-decor' src="/assets/Hero/images/copo2.png" alt="copo" />
        <img className='right-decor' src="/assets/Hero/images/copo2.png" alt="copo" />
        <div className='hero-main-text'>
          <div className='font-cinzel secondary-color font-lg'>Está en Camino</div>
          <div className='font-cinzel-decorative primary-color font-lg' style={{ fontSize: '3rem' }}>MYA Isabella</div>

        </div>
      </div>
    </section>
  );
}
