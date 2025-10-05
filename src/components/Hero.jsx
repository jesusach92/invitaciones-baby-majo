import '../styles/fonts.css';
import '../styles/styles.css'

export default function Hero() {
  return (
    <section className='hero'>
      <div className='hero-container' >
        <div className='hero-container-title'>
          <div className="font-violeta hero-title">Sara & Jose Manuel</div>
          <div className='font-indie-flower hero-date'>
            27 de Diciembre 2025
          </div></div>

        <div className='hero-image-container'>
          <img className='hero-image' src="/assets/Hero/images/salon novios-8.png" alt="" />
        </div>
      </div>
    </section>
  );
}
