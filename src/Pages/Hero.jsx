import React, { useEffect } from "react";
import Home from "./Home";
import Contact from "./Contact";
import { useDispatch } from "react-redux";
import { headerTypeHome } from "../Redux/headerManage/Action";
import Gallerycomp from "./Gallarycomp";

import TestimonialSliderComp from "../components/TestimonialSliderComp";
import Aboutcomp from "../components/Aboutcomp";
import { Box } from "@chakra-ui/react";

import HeadlineSlider from "../components/HeadlinSlider";
import { GetServices } from "../Redux/services/Action";

const Hero = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(headerTypeHome());
    dispatch(GetServices())
  }, [dispatch]);
  


  return (
    <Box  >
      <Home />
      <HeadlineSlider/>
      <Aboutcomp/>
      
      <Gallerycomp />
      <Contact />
      <TestimonialSliderComp/>
    </Box>
  );
};

export default Hero;
