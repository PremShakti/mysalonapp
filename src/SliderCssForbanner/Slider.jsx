import React, { useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import SliderImage from "./SliderImage";

export default function SliderForBanner() {
  const [Sdata] = useState([
    {
      src: "https://framerusercontent.com/images/OEhnOJLjxZJLueiEGMYs9oASY4.png",
      srcM: "https://images.pexels.com/photos/7755461/pexels-photo-7755461.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      src: "https://framerusercontent.com/images/OEhnOJLjxZJLueiEGMYs9oASY4.png",
      srcM: "https://images.pexels.com/photos/10318038/pexels-photo-10318038.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      src: "https://framerusercontent.com/images/OEhnOJLjxZJLueiEGMYs9oASY4.png",
      srcM: "https://images.pexels.com/photos/10318038/pexels-photo-10318038.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      src: "https://framerusercontent.com/images/OEhnOJLjxZJLueiEGMYs9oASY4.png",
      srcM: "https://images.pexels.com/photos/10318038/pexels-photo-10318038.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      src: "https://framerusercontent.com/images/OEhnOJLjxZJLueiEGMYs9oASY4.png",
      srcM: "https://images.pexels.com/photos/10318038/pexels-photo-10318038.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
  ]);

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
            {" "}
            <SliderImage key={i} i={i} src={e.src} />{" "}
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
