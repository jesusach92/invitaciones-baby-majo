import './common/styles/timeline.css';

const Agenda = () => {
  return (
    <section className='agenda'>
      <div className='header'>
        <div className='main-text font-indie-flower'>
          Itinerario
        </div>
      </div>
      <div className='frame'>
        <div className="timeline">

          <div className="timeline-line"></div>


          <div className='left-elements'>
            <div className='left-element flex-2'>
              <div className="title">
                <div className='line-container'>
                  <div className='line'></div>
                </div>

                <div className='text font-indie-flower'>
                  06:30 P.M. <br /> RECEPCIÓN
                </div>
              </div>

              <img className='image' src="/assets/Agenda/images/recepcion.png" alt="reception" />
            </div>

            <div className='left-element flex-2'>
              <div className="title">
                <div className='line-container'>
                  <div className='line'></div>
                </div>
                <div className='text font-indie-flower'>
                  07:45 P.M. <br /> FOTOGRAFÍA
                </div>
              </div>
              <img className='image' src="/assets/Agenda/images/fotografia.png" alt="fotografia" />
            </div>

            <div className='left-element flex-2'>
              <div className="title">
                <div className='line-container'>
                  <div className='line'></div></div>
                <div className='text font-indie-flower' style={{ paddingLeft: '35%' }}>
                  09:00 P.M. <br /> BAILE
                </div>
              </div>
              <img className='image' src="/assets/Agenda/images/baile.png" alt="baile" style={{ width: '125px' }} />
            </div>


            <div className="spacer flex-1"></div>
          </div>

          <div className='right-elements'>

            <div className="spacer flex-1"></div>

            <div className="right-element flex-2">
              <div className="title-right">
                <div className='line-container-right'>
                  <div className='line'></div></div>
                <div className="text-right font-indie-flower">
                  07:00 P.M. <br /> CEREMONIA
                </div>
              </div>
              <img className='image' src="/assets/Agenda/images/argollas.png" alt="ceremonia" />
            </div>

            <div className="right-element flex-2">
              <div className="title-right">
                <div className='line-container-right'>
                  <div className='line'></div></div>
                <div className="text-right font-indie-flower">
                  08:00 P.M. <br /> CENA
                </div>
              </div>
              <img className='image' src="/assets/Agenda/images/cena.png" alt="cena" />
            </div>

            <div className="right-element flex-2">
              <div className="title-right">
                <div className='line-container-right'>
                  <div className='line'></div></div>
                <div className="text-right font-indie-flower" >
                  12:00 P.M. <br /> ES HORA <br /> DE IRNOS...
                </div>
              </div>
              <img className='image' src="/assets/Agenda/images/auto_novios.png" alt="auto novios" />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Agenda;
