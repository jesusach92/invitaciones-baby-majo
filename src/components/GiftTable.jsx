import React from 'react'

const GiftTable = () => {
    return (
        <section className='gift-table'>
            <div className="elements-container">
                <div className='font-cinzel secondary-color font-lg' style={{ fontSize: '3rem', fontWeight: '700' }}>Mesa de<br />
                    Regalos</div>
                <div className='font-bell primary-color font-lg' style={{ textAlign: 'center', fontWeight: 'bold' }}>
                    El regalo es opcional, la asistencia obligatoria<br />
                    pero si quieres tener un detalle Mya<br />
                    te damos algunas ideas.<br />
                </div>
                <div><a href="https://www.amazon.com.mx/baby-reg/myaisabella-castillocortes-diciembre-2025-pachucadesoto/3DL6PSEM4O2ZT" target="_blank" rel="noopener noreferrer">
                    <img className='decor-link' src="/assets/GiftTable/images/amazon.png" alt="amazon" />
                </a></div>
                <img src="/assets/GiftTable/images/gift.png" alt="" className='gift-decor' />
                <img src="/assets/GiftTable/images/copo.png" alt="" className="image-decor left" />
                <img src="/assets/GiftTable/images/copo.png" alt="" className="image-decor right" />
            </div>
        </section>
    )
}

export default GiftTable