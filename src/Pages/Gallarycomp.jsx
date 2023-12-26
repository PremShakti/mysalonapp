import React, { useEffect, useState } from "react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../SliderCssForbanner/styles.css";

// import required modules
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import Imagegallry from "../components/Imagegallry";
import { Box, Heading, Text } from "@chakra-ui/react";
import { useWindowSize } from "react-use";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { GallerySliderImage } from "../Redux/imagebannerslider/Action";

export default function Gallerycomp() {
  const { width } = useWindowSize();
  const navigate = useNavigate();
  const dispatch=useDispatch()
  const images=useSelector((store)=>store.getImagesForBannerSlider.imagesForGallerySlider)


useEffect(()=>{
  dispatch(GallerySliderImage())
})

  const handleMoveToGallery = () => {
    navigate("/gallery");
  };
  return (
    <div id="gallery">
      <Heading
        as="h2"
        size="xl"
        letterSpacing={5}
        mt={{ base: "65px", lg: "150px" }}
        mb={"10px"}
        textAlign={"center"}
        fontFamily={`Arvo", Helvetica, Arial, sans-serif`}
        fontWeight={400}
      >
        GALLERY
      </Heading>
      <Box m={"auto"} mt={"10px"} mb={10} w={"90%"} cursor={"pointer"}>
        <Text
          fontFamily={"sans-serif"}
          textAlign={"right"}
          fontSize={"large"}
          onClick={handleMoveToGallery}
          fontWeight={400}
        >
          Click For More
        </Text>
        <Swiper
          slidesPerView={width > 500 ? 4 : 2}
          spaceBetween={10}
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Autoplay, Navigation]}
          className="mySwiper"
        >
          {images?.map((image, index) => (
            <SwiperSlide key={index}>
              <Imagegallry image={image.url} index={index} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </div>
  );
}
