import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';



const Carousel = () => {
  return (
<Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        
        <SwiperSlide>< img src="https://icms-image.slatic.net/images/ims-web/4275f75c-aa82-4232-80e0-d13629e5825d.png"/></SwiperSlide>
        <SwiperSlide> < img src="https://icms-image.slatic.net/images/ims-web/717ef04a-a8fa-4e52-ad23-3ac1ac32810b.png"/></SwiperSlide>
        <SwiperSlide> < img src="https://icms-image.slatic.net/images/ims-web/df9e2049-32e7-445b-a440-5fd9230e6dc6.jpeg_1200x1200.jpg"/></SwiperSlide>
         
      </Swiper>
  )
}

export default Carousel