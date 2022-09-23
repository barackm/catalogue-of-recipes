import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css';
import './Feature.scss';
import feature1 from '../../../assets/img/landing/feature1.png';
import feature2 from '../../../assets/img/landing/feature2.png';
import feature3 from '../../../assets/img/landing/feature3.png';
import feature4 from '../../../assets/img/landing/feature4.png';
import feature5 from '../../../assets/img/landing/feature5.png';
import feature6 from '../../../assets/img/landing/feature6.png';

function Portfolio() {
  return (
    <section className="portfolio">
      {/* heading */}
      <h2>As Featured On</h2>

      {/* slider */}
      <Swiper
        spaceBetween={20}
        slidesPerView={3}
        grabCursor
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={feature1} alt="feature1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={feature2} alt="feature2" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={feature3} alt="feature3" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={feature4} alt="feature4" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={feature5} alt="feature5" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={feature6} alt="feature6" />
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

export default Portfolio;
