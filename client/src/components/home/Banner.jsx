import React from 'react'
import { bannerData } from '../../constants/data';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./styles.css";
import { Navigation } from "swiper";


const Banner = () => {
   
  return (
    <>
      <Swiper autoplay={true} navigation={true} modules={[Navigation]} className="mySwiper">
        {
          bannerData.map(e => (
            <SwiperSlide>
              <img src={e.url} alt="error" />
            </SwiperSlide>
          ))
        }
      </Swiper>
    </>
  )
}

export default Banner