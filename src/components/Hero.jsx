import '../styles/fonts.css';
import '../styles/styles.css'

export default function Hero() {
  return (
    <section className='hero'>
      <div className='hero-container' >
        <img className='top-decor' src="/assets/Hero/images/esferas.png" alt="top-decor" />
        <div className='hero-container-title'>
          <div className="font-cinzel hero-title">A Little</div>
        </div>
        <img className='center-decor' src="/assets/Hero/images/snowflake.png" alt="title" />
        <img className='center-decor' src="/assets/Hero/images/three.png" alt="arbol" />
        <img className='left-decor' src="/assets/Hero/images/copo2.png" alt="copo" />
        <img className='right-decor' src="/assets/Hero/images/copo2.png" alt="copo" />
      </div>
    </section>
  );
}
