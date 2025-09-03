import CountdownComponent from './common/CountdownComponent';

export default function Countdown() {

  return (
    <section className="countdown">
      <div className='countdown-overlay countdown-container'>
        <div className="font-indie-flower">¡Solo falta!</div>
        <div className=""><CountdownComponent targetDate={'2025-12-27T18:30:00'} /></div>
      </div>
    </section>
  );
}
