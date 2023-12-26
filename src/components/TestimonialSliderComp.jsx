
import React, { useEffect, useState } from "react";
import '../App.css'
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../SliderCssForbanner/styles.css";

// import required modules
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import { Box, Heading, Text } from "@chakra-ui/react";
import { useWindowSize } from "react-use";
import { useNavigate } from "react-router-dom";
import Testimonialslider from "./Testimonialslider";
import { useDispatch, useSelector } from "react-redux";
import { getReview } from "../Redux/imagebannerslider/Action";

export default function TestimonialSliderComp() {
  const { width } = useWindowSize();
  const navigate = useNavigate();
 

  const reviews=useSelector((store)=>store.getImagesForBannerSlider.reviews)
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(getReview())
  },[dispatch])

  const testiMonialPage = () => {
    navigate("/testimonial");
  };
  return (
    <Box pt={1} pb={10} className="galary-page" >
    <Heading
     mt={{base:"55px",lg:"100px"}}
    as="h2"
    size="xl"
    letterSpacing={5}
  
   
    textAlign={"center"}
   fontFamily={`Arvo", Helvetica, Arial, sans-serif`} 
   fontWeight={400}
  >
 WHAT OUR CLIENTS SAY?
  </Heading>

    <Box
      m={"auto"}
      mt={"70px"}
      mb={10}
      w={{base:"85%",lg:"30%"}}
      cursor={"pointer"}
      
    >
      
      <Swiper
        slidesPerView={width > 430 ? 1 : 1}
        spaceBetween={10}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay]}
        className="mySwiper"
      >
        {reviews.slice(0, 10).map((e, i) => (
          <SwiperSlide key={i}>
            <Testimonialslider  {...e}  />
          </SwiperSlide>
        ))}
      </Swiper>
      <Text
      mt={7}
        fontFamily={"sans-serif"}
        
        textAlign={"center"}
        fontSize={{base:"sm",lg:"large"}}
        fontWeight={400}
        onClick={testiMonialPage}
      >
        Click For More
      </Text>
    </Box>
    </Box>
  );
}
