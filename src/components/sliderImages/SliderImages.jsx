// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import './slider.css';


import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import s from './sliderImages.module.css';

import { v4 as uuidv4 } from 'uuid';

// import required modules
import {
  Autoplay,
  EffectCoverflow,
  EffectCube,
  Keyboard,
  Mousewheel,
  Pagination,
} from 'swiper/modules';

const SliderImages = ({ images }) => {
 
  return (
    <section className={s.slider}>
      <p className={s.sliderTitle}>Beautiful views</p>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        keyboard={{
          enabled: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 3,
            // spaceBetween: 50,
          },
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        mousewheel={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        modules={[
          EffectCoverflow,
          EffectCube,
          Pagination,
          Mousewheel,
          Keyboard,
          Autoplay,
        ]}
        className={s.mySwiper}
      >
        {images.map(({ webformatURL }) => (
          <SwiperSlide key={uuidv4()}>
            <img src={webformatURL} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default SliderImages;
