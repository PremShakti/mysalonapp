import React, { useState } from "react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "../SliderCssForbanner/styles.css";

// import required modules
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import Imagegallry from "../components/Imagegallry";
import { Box, Text } from "@chakra-ui/react";
import { useWindowSize } from "react-use";
import { useNavigate } from "react-router-dom";

export default function Gallerycomp() {
  const { width } = useWindowSize();
  const navigate = useNavigate();
  const [images] = useState([
    "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600",

    "https://images.pexels.com/photos/1367269/pexels-photo-1367269.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1367269/pexels-photo-1367269.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/580613/pexels-photo-580613.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/580613/pexels-photo-580613.jpeg?auto=compress&cs=tinysrgb&w=600",

    "https://images.pexels.com/photos/1181622/pexels-photo-1181622.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1181355/pexels-photo-1181355.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/2422278/pexels-photo-2422278.jpeg?auto=compress&cs=tinysrgb&w=600",

    "https://images.pexels.com/photos/2422278/pexels-photo-2422278.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/2422278/pexels-photo-2422278.jpeg?auto=compress&cs=tinysrgb&w=600",

    // Add more image URLs as needed
  ]);
  const handleMoveToGallery = () => {
    navigate("/gallery");
  };
  return (
    <Box
      m={"auto"}
      mt={10}
      mb={10}
      w={"90%"}
      cursor={"pointer"}
      id="gallery-comp"
    >
      <Text
        fontFamily={"sans-serif"}
        fontWeight={"bold"}
        textAlign={"right"}
        fontSize={"large"}
        onClick={handleMoveToGallery}
      >
        Click For More
      </Text>
      <Swiper
        slidesPerView={width > 430 ? 4 : 2}
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
        {images.slice(0, 10).map((image, index) => (
          <SwiperSlide key={index}>
            <Imagegallry image={image} index={index} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
