import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';

const HomeSlider = () => {
  return (
    <div className="homeSlider">
        <div className="container">
             <Swiper navigation={true} modules={[Navigation]} className="sliderHome">
        <SwiperSlide>
            <img src="/banner 1.jpg" alt="Banner slide" className="h-150 w-full object-cover" />
        </SwiperSlide>
        
        <SwiperSlide>
            <img src="/banner 2.jpg" alt="Banner slide" className="h-150 w-full object-cover" />
        </SwiperSlide>
        
        <SwiperSlide>
            <img src="/banner 3.jpg" alt="Banner slide" className="h-150 w-full object-cover" />
        </SwiperSlide>

        <SwiperSlide>
            <img src="public/ESSENTIALS-BANNER-min.gif" alt="Banner slide" className="h-150 w-full object-cover" />
        </SwiperSlide>

        <SwiperSlide>
            <img src="public/banner 5.gif" alt="Banner slide" className="h-150 w-full object-cover" />
        </SwiperSlide>

        <SwiperSlide>
            <img src="/banner 6.jpg" alt="Banner slide" className="h-150 w-full object-cover" />
        </SwiperSlide>
      </Swiper>
        </div>
    </div>
  )
}

export default HomeSlider

