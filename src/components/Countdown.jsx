import CountdownComponent from './common/CountdownComponent';
import { useInViewAnimation } from './hooks/useInViewAnimation';

export default function Countdown() {
  const imgSnow = useInViewAnimation({}, true)
  return (
    <section className="countdown">
      <div className='countdown-container'>
        <div><img className='countdown-title' src="/assets/Countdown/images/title.png" alt="Title" /></div>
        <div className=""><CountdownComponent targetDate={'2025-12-06T14:30:00'} /></div>
        <div className='font-bell secondary-color font-md' style={{ fontWeight: 'bold' }}>Ven a celebrar con nosotros <br /> la llegada de nuestra amada hija</div>
        <div className='font-anteri primary-color font-xl' style={{ fontWeight: 'lighter' }}>Elo y Jesus</div>
        <img ref={imgSnow.ref} className={`opacity-0 ${imgSnow.isVisible ? 'animate-slide-down' : ''} center-decor`} src="/assets/Countdown/images/snow.png" alt="snowgirl" />
      </div>
    </section>
  );
}
