import React, { useEffect, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";


import { Autoplay, Pagination, Navigation } from "swiper/modules";
import SliderImage from "./SliderImage";
import { useDispatch, useSelector } from "react-redux";
import { bannerSliderImages } from "../Redux/imagebannerslider/Action";
import { Sdata } from "../data/slider";

export default function SliderForBanner() {
// const Sdata=useSelector((store)=>store.getImagesForBannerSlider.imagesForBannerSlider)

const dispatch=useDispatch()

useEffect(()=>{
  dispatch(bannerSliderImages())
})



  return (
    <>
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
        {Sdata?.map((e, i) => (
          <SwiperSlide key={i}>
            <SliderImage key={i} i={i} src={e.src} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
