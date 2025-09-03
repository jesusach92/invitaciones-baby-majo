// src/components/GaleriaCarrusel.jsx
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import './common/styles/gallery.css'; // Aquí va tu estilo personalizado

const imagenes = Array.from({ length: 4 }, (_, i) => `/assets/Gallery/image${i}.jpeg`);

function Gallery() {
  return (
    <div className="gallery-container">
      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        spaceBetween={30}
        slidesPerView={1}
      >
        {imagenes.map((src, i) => (
          <SwiperSlide key={i}>
            <div className="imagen-wrapper">
              <img src={src} alt={`Imagen ${i + 1}`} className="imagen" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Gallery;
