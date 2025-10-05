import React from 'react'

const GiftTable = () => {
    return (
        <section className='gift-table'>
            <div className='top-left-decor'><img className='decor-elements' src="/assets/GiftTable/images/decor-frame.png" alt="" /></div>
            <div className='bottom-right-decor'><img className='decor-elements' src="/assets/GiftTable/images/decor-frame.png" alt="" /></div>
            <div className="elements-container">
                <div className='font-indie-flower gift-table-title'>Mesa de<br />
                    Regalos</div>
                <div className='font-indie-flower gift-table-text'>
                    El regalo es opcional, la asistencia obligatoria<br />
                    pero si quieres tener un detalle con nosotros<br />
                    te damos algunas ideas.<br />
                </div>
                <div><img className='decor-elements' src="/assets/GiftTable/images/regalo.png" alt="" /></div>
                <div><img className='decor-elements' src="/assets/GiftTable/images/amazon.png" alt="" /></div>
                <div><a href="https://www.amazon.com.mx/wedding/guest-view/2UQDXKI37L9V3" target="_blank" rel="noopener noreferrer"><button className="font-indie-flower">Ver mesa de regalos</button></a></div>
                <div className='font-indie-flower '>No. Evento 51012067</div>
            </div>
        </section>
    )
}

export default GiftTable